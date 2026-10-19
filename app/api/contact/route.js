import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---- Rate limiting بسيط في الذاكرة ----
// ملحوظة: كافي لحماية أساسية، لكن في بيئة serverless بيفضل استخدام
// حل خارجي زي Upstash Redis لو عايز حماية قوية.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const hits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const record = hits.get(ip);

  if (!record || now - record.start > WINDOW_MS) {
    hits.set(ip, { start: now, count: 1 });
    return false;
  }

  record.count += 1;

  // تنظيف بسيط للذاكرة
  if (hits.size > 500) {
    for (const [key, value] of hits) {
      if (now - value.start > WINDOW_MS) hits.delete(key);
    }
  }

  return record.count > MAX_REQUESTS;
}

export async function POST(req) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, phone, message, company } = body ?? {};

  // Honeypot: لو الحقل المخفي اتملى يبقى بوت ⇒ نتجاهل الإرسال بهدوء
  if (company) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(String(email))) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "momenalberann6@gmail.com",
    replyTo: email,
    subject: `New message from ${name}`,
    html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p>
           <p>Phone: ${esc(phone) || "-"}</p>
           <p>${esc(message)}</p>`,
  });

  if (error) return Response.json({ error }, { status: 500 });
  return Response.json({ ok: true });
}
