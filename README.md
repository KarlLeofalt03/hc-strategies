# TradeEdge Pro — Next.js Platform

A professional trading education platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — mentor profile, student reviews, interview videos, course overview |
| `/tools` | FXVerify position size calculator + TradingView live chart |
| `/pricing` | Two Stripe plans — £150/mo mentorship, £299 full program |
| `/support` | Contact form → mentor, FAQ accordion |
| `/course` | Full 30-day curriculum (locked until payment) |

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

## Customisation Checklist

### 1. Mentor details (`src/app/page.tsx`)
- Replace `MK` initials + name with your mentor's real name
- Add a real photo: use `<Image src="/mentor.jpg" .../>` in the hero card
- Update the performance stats (win rate, R:R, drawdown)
- Replace the quote text

### 2. Interview videos (`src/app/page.tsx` → `interviews` array)
- Replace `youtube` URLs with your real YouTube video links
- Replace `thumb` image URLs with real YouTube thumbnails:
  ```
  https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg
  ```
- Update titles, guests, and durations

### 3. Student reviews (`src/app/page.tsx` → `reviews` array)
- Replace with real student testimonials
- Update names, roles, and review text

### 4. Stripe links (`src/app/pricing/page.tsx`)
- The test links are already in place:
  - Mentorship (£150): `prod_UCKTszjKAZQ8y5`
  - Full Program (£299): `prod_UCKVUUSL6BTJxR`
- For production, replace test dashboard URLs with your live Stripe payment links

### 5. Support form (`src/app/support/page.tsx`)
- The form currently simulates a send (console only)
- Wire up with your preferred method:
  - **Resend**: `npm install resend` → add API route
  - **EmailJS**: client-side, no backend needed
  - **Formspree**: just change the form action URL
  - **Nodemailer**: via Next.js API route

  Example with Formspree — replace the form `onSubmit`:
  ```ts
  const res = await fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  ```

### 6. Course unlock logic (`src/app/course/page.tsx`)
- To enable free previews for Days 1–3, change:
  ```ts
  const isFree = lesson.day <= 0
  // to:
  const isFree = lesson.day <= 3
  ```
- For paid access gates, add authentication:
  - **NextAuth.js**: `npm install next-auth` 
  - On lesson click, check session → redirect to `/pricing` if not paid
  - Store `isPaid` in your database after Stripe webhook confirms payment

### 7. Domain & deployment
- **Vercel** (recommended): `vercel deploy` or connect GitHub repo
- **Netlify**: set build command `npm run build`, publish `.next`
- Add your domain in Vercel settings

### 8. Stripe Webhooks (for automatic course unlock)
Create `/src/app/api/stripe-webhook/route.ts`:
```ts
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  const event = stripe.webhooks.constructEvent(
    await req.text(),
    req.headers.get('stripe-signature')!,
    process.env.STRIPE_WEBHOOK_SECRET!
  )
  if (event.type === 'checkout.session.completed') {
    // Mark user as paid in your database
    // Unlock course access
  }
  return new Response('ok')
}
```

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Syne (display), DM Sans (body), DM Mono (code/data)
- **Charts**: TradingView widget (embedded iframe)
- **Calculator**: FXVerify (embedded iframe)
- **Payments**: Stripe (direct checkout links)

## Environment Variables

Create `.env.local`:
```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
```

## Folder Structure

```
src/
  app/
    layout.tsx        ← Root layout, nav, ticker, footer
    page.tsx          ← Home / landing page
    tools/page.tsx    ← FXVerify + TradingView
    pricing/page.tsx  ← Two Stripe plans
    support/page.tsx  ← Contact form
    course/page.tsx   ← Locked curriculum
  components/
    Navbar.tsx        ← Top navigation
    Ticker.tsx        ← Live price ticker
  styles/
    globals.css       ← Global styles + CSS animations
```
