# Pivit 🔄

**AI-powered career intelligence.** Enter your background and get honest, personalized career path recommendations — adjacent pivots, bold moves, and moonshots — with roadmaps, skill gap analysis, AI-resilience scores, and a follow-up chat.

## Stack

- Single-file HTML/CSS/JS frontend (`public/index.html`)
- Vercel serverless function (`api/chat.js`) as a secure API proxy
- Anthropic Claude Sonnet as the AI engine
- No database, no auth, no user data stored anywhere

## Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/patleezy/pivit.git
   cd pivit
   ```

2. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

3. Create a `.env.local` file:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   ```

4. Run locally:
   ```bash
   vercel dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variable:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** your Anthropic API key from [console.anthropic.com](https://console.anthropic.com)
4. Deploy — done.

## Privacy

- User profile data never leaves the user's device (optional localStorage, opt-in only)
- API calls are proxied server-side — the Anthropic key is never exposed to the browser
- No analytics, no tracking, no database
- Session ends → everything is gone

## Features

- ✦ Required + optional profile fields
- 🗂 Three career paths: Adjacent / Bold / Moonshot
- 📖 ELI5 "plain English" summary on every path
- 🛡 AI Resilience Score — how future-proof is this path?
- 🗺 Full roadmap with skill gaps, resources, quick wins
- 💬 Follow-up chat per path
- 📄 Export as PDF, Email, or Copy to clipboard
- 🌙 Light / Dark mode
- 💾 Opt-in profile save to localStorage (device only)
- ⚠️ AI disclaimer on all screens and exports

## Disclaimer

Pivit is AI-generated and intended for educational and exploratory purposes only. It is not a substitute for advice from a qualified career counselor, recruiter, or professional advisor.
