/*
 * Cloudflare Email Worker for the portfolio contact address.
 *
 * Copy this file into Cloudflare's Email Worker dashboard editor, then update
 * DESTINATION_EMAIL and PUBLIC_CONTACT_ADDRESSES before enabling the route.
 */

const DESTINATION_EMAIL = "your-verified-destination@example.com";

const PUBLIC_CONTACT_ADDRESSES = ["contact@your-domain.com"];

const ALLOWED_SENDERS = [];

const ALLOWED_DOMAINS = [
  "github.com",
  "linkedin.com",
  "greenhouse.io",
  "lever.co",
  "workday.com",
  "indeed.com",
  "handshake.com",
];

const BLOCKED_SENDERS = [
  "noreply@medium.com",
  "no-reply@quora.com",
  "digest-noreply@quora.com",
  "newsletter@substack.com",
  "notifications@facebookmail.com",
];

const BLOCKED_DOMAINS = [
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "tempmail.com",
  "temp-mail.org",
  "yopmail.com",
  "sharklasers.com",
  "spamgourmet.com",
  "getnada.com",
  "dispostable.com",
  "maildrop.cc",
  "trashmail.com",
];

const BLOCKED_KEYWORDS = [
  "casino",
  "crypto",
  "forex",
  "free money",
  "guaranteed seo",
  "loan approval",
  "nft",
  "password reset",
  "rank on google",
  "seo services",
  "viagra",
  "wire transfer",
];

const MAX_RAW_SIZE = 500_000;
const SUSPICIOUS_SCORE_THRESHOLD = 4;
const REJECT_SCORE_THRESHOLD = 8;

const ATTACHMENT_CONTENT_TYPES = [
  "multipart/mixed",
  "multipart/related",
  "application/",
  "image/",
  "audio/",
  "video/",
];

const SUSPICIOUS_TLDS = [
  "click",
  "country",
  "download",
  "fit",
  "gq",
  "loan",
  "men",
  "mom",
  "party",
  "rest",
  "review",
  "ru",
  "surf",
  "tk",
  "top",
  "work",
  "xyz",
  "zip",
];

export default {
  async email(message, env, ctx) {
    const context = getMessageContext(message);

    if (isListed(context.sender, BLOCKED_SENDERS)) {
      message.setReject("Sender blocked by contact filter");
      return;
    }

    if (isListedDomain(context.senderDomain, BLOCKED_DOMAINS)) {
      message.setReject("Sender domain blocked by contact filter");
      return;
    }

    if (hasAttachmentSignals(context)) {
      message.setReject("Attachments are not accepted at this contact address");
      return;
    }

    if (
      !hasFailedAuthentication(context) &&
      (isListed(context.sender, ALLOWED_SENDERS) ||
        isListedDomain(context.senderDomain, ALLOWED_DOMAINS))
    ) {
      await forwardMessage(message, "accepted", ["allowlisted sender"], 0);
      return;
    }

    const assessment = scoreMessage(context);

    if (assessment.score >= REJECT_SCORE_THRESHOLD) {
      message.setReject("Message rejected by contact filter");
      return;
    }

    if (assessment.score >= SUSPICIOUS_SCORE_THRESHOLD) {
      await forwardMessage(
        message,
        "suspicious",
        assessment.reasons,
        assessment.score,
      );
      return;
    }

    await forwardMessage(
      message,
      "accepted",
      assessment.reasons,
      assessment.score,
    );
  },
};

function getMessageContext(message) {
  const headers = message.headers;
  const sender = normalizeEmail(message.from);
  const recipient = normalizeEmail(message.to);
  const senderDomain = getDomain(sender);
  const replyTo = normalizeEmail(headers.get("reply-to") || "");
  const replyToDomain = getDomain(replyTo);
  const subject = cleanHeader(headers.get("subject"));
  const contentType = cleanHeader(headers.get("content-type")).toLowerCase();
  const contentDisposition = cleanHeader(
    headers.get("content-disposition"),
  ).toLowerCase();
  const mailer = cleanHeader(
    headers.get("x-mailer") ||
      headers.get("x-sender") ||
      headers.get("user-agent") ||
      headers.get("x-campaign-id") ||
      "",
  );
  const authenticationResults = cleanHeader(
    headers.get("authentication-results") ||
      headers.get("arc-authentication-results") ||
      "",
  ).toLowerCase();

  return {
    sender,
    senderDomain,
    recipient,
    replyTo,
    replyToDomain,
    subject,
    contentType,
    contentDisposition,
    mailer,
    authenticationResults,
    rawSize: message.rawSize || 0,
  };
}

function scoreMessage(context) {
  const reasons = [];
  let score = 0;

  const add = (points, reason) => {
    score += points;
    reasons.push(reason);
  };

  const senderLocalPart = context.sender.split("@")[0] || "";
  const searchableText = [
    context.sender,
    context.senderDomain,
    context.replyTo,
    context.subject,
    context.mailer,
  ]
    .join(" ")
    .toLowerCase();

  if (!isValidEmail(context.sender)) {
    add(5, "malformed sender");
  }

  if (!context.subject) {
    add(2, "empty subject");
  }

  if (senderLocalPart.length > 0 && senderLocalPart.length < 3) {
    add(1, "very short sender local part");
  }

  if (digitRatio(senderLocalPart) >= 0.45 && senderLocalPart.length >= 6) {
    add(2, "sender local part has many digits");
  }

  if (isSuspiciousDomain(context.senderDomain)) {
    add(2, "suspicious sender domain");
  }

  if (context.replyTo && context.replyToDomain !== context.senderDomain) {
    add(2, "reply-to domain differs from sender domain");
  }

  if (!context.replyTo && looksAutomated(context.sender, context.mailer)) {
    add(1, "automated-looking sender without reply-to");
  }

  if (!isExpectedRecipient(context.recipient)) {
    add(2, "unexpected recipient address");
  }

  if (context.rawSize > MAX_RAW_SIZE * 0.7) {
    add(1, "large message size");
  }

  for (const keyword of BLOCKED_KEYWORDS) {
    if (searchableText.includes(keyword)) {
      add(3, `blocked keyword: ${keyword}`);
    }
  }

  if (hasFailedAuthentication(context)) {
    add(2, "failed authentication result");
  }

  return { score, reasons };
}

function hasAttachmentSignals(context) {
  if (context.rawSize > MAX_RAW_SIZE) {
    return true;
  }

  if (
    ATTACHMENT_CONTENT_TYPES.some((contentType) =>
      context.contentType.includes(contentType),
    )
  ) {
    return true;
  }

  return (
    context.contentDisposition.includes("attachment") ||
    context.contentDisposition.includes("filename=")
  );
}

async function forwardMessage(message, filterStatus, reasons, score) {
  const headers = new Headers();
  headers.set("X-Portfolio-Filter", filterStatus);
  headers.set("X-Portfolio-Spam-Score", String(score));
  headers.set("X-Portfolio-Filter-Reasons", summarizeReasons(reasons));
  await message.forward(DESTINATION_EMAIL, headers);
}

function normalizeEmail(value) {
  const text = String(value || "")
    .trim()
    .toLowerCase();
  const match = text.match(
    /<?([a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,})>?/i,
  );
  return match ? match[1].toLowerCase() : text;
}

function cleanHeader(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getDomain(email) {
  const parts = String(email || "").split("@");
  return parts.length === 2 ? parts[1].toLowerCase() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isListed(value, list) {
  return list.map(normalizeListValue).includes(normalizeListValue(value));
}

function normalizeListValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function isListedDomain(domain, list) {
  const normalizedDomain = normalizeListValue(domain);

  return list.map(normalizeListValue).some((listedDomain) => {
    return (
      normalizedDomain === listedDomain ||
      normalizedDomain.endsWith(`.${listedDomain}`)
    );
  });
}

function isExpectedRecipient(recipient) {
  const configured = PUBLIC_CONTACT_ADDRESSES.filter(
    (address) => !address.includes("your-domain.com"),
  );

  if (configured.length === 0) {
    return true;
  }

  return configured.map(normalizeEmail).includes(recipient);
}

function isSuspiciousDomain(domain) {
  if (!domain) {
    return true;
  }

  const labels = domain.split(".");
  const tld = labels[labels.length - 1] || "";

  return (
    SUSPICIOUS_TLDS.includes(tld) ||
    domain.includes("--") ||
    domain.length > 60 ||
    labels.some((label) => digitRatio(label) >= 0.5 && label.length >= 6)
  );
}

function digitRatio(value) {
  const text = String(value || "");
  if (text.length === 0) {
    return 0;
  }

  const digits = text.replace(/\D/g, "").length;
  return digits / text.length;
}

function looksAutomated(sender, mailer) {
  const text = `${sender} ${mailer}`.toLowerCase();
  return [
    "bounce",
    "bulk",
    "campaign",
    "mailer",
    "marketing",
    "newsletter",
    "no-reply",
    "noreply",
    "notification",
  ].some((term) => text.includes(term));
}

function hasFailedAuthentication(context) {
  return (
    context.authenticationResults.includes("spf=fail") ||
    context.authenticationResults.includes("dkim=fail") ||
    context.authenticationResults.includes("dmarc=fail")
  );
}

function summarizeReasons(reasons) {
  if (!reasons || reasons.length === 0) {
    return "none";
  }

  return reasons.join("; ").slice(0, 500);
}
