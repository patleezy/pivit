// Lightweight endpoint to keep the function warm
// Call this on page load to pre-warm before user hits generate
export default function handler(req, res) {
  return res.status(200).json({ ok: true, ts: Date.now() });
}
