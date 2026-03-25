import Link from 'next/link'

const PLANS = [
  {
    id: 'mentorship',
    name: 'Mentorship',
    planClass: 'color--green',
    amount: '150',
    period: '/ month',
    tagline: '4 sessions per month with your mentor',
    stripeLink: 'https://dashboard.stripe.com/acct_1TDuouCo3uxrqWYV/test/products/prod_UCKTszjKAZQ8y5',
    featured: false,
    features: [
      { text: '4 × 1-on-1 sessions per month', on: true },
      { text: 'Weekly chart review & feedback', on: true },
      { text: 'Direct mentor messaging (24h reply)', on: true },
      { text: 'Trade critique & analysis', on: true },
      { text: 'Personalised improvement plan', on: true },
      { text: 'Session recordings included', on: true },
      { text: '30-day video course access', on: false },
      { text: 'Daily assignments', on: false },
      { text: 'Progress tracking dashboard', on: false },
    ],
    cta: 'Start Mentorship',
    guarantee: 'Cancel anytime',
  },
  {
    id: 'full',
    name: '30-Day Program',
    planClass: 'color--accent',
    amount: '299',
    period: 'one-time',
    tagline: 'Full course + mentorship included',
    stripeLink: 'https://dashboard.stripe.com/acct_1TDuouCo3uxrqWYV/test/products/prod_UCKVUUSL6BTJxR',
    featured: true,
    features: [
      { text: 'All 30 structured video lessons', on: true },
      { text: 'Written notes + chart examples', on: true },
      { text: 'Daily assignments with grading', on: true },
      { text: '4 × mentor sessions included', on: true },
      { text: 'Weekly feedback & trade critique', on: true },
      { text: 'Direct mentor messaging', on: true },
      { text: 'Progress tracking dashboard', on: true },
      { text: 'TradingView + position calculator', on: true },
      { text: 'Lifetime access to all materials', on: true },
    ],
    cta: 'Enroll — Full Program',
    guarantee: '7-day money-back guarantee',
  },
]

const COMPARE_ROWS = [
  ['Video lessons (30 days)',    '✕', '✓'],
  ['Daily assignments',          '✕', '✓'],
  ['Progress dashboard',         '✕', '✓'],
  ['Tools & calculator',         '✕', '✓'],
  ['1-on-1 sessions',           '4/month', '4 included'],
  ['Weekly feedback',            '✓', '✓'],
  ['Mentor messaging',           '✓', '✓'],
  ['Trade critique',             '✓', '✓'],
  ['Session recordings',         '✓', '✓'],
  ['Lifetime access',            'While subscribed', '✓ Forever'],
]

const TRUST_ITEMS = [
  { icon: '🔒', label: 'Stripe Secure Checkout' },
  { icon: '↩', label: '7-Day Guarantee' },
  { icon: '★', label: '4.9/5 Average Rating' },
  { icon: '◑', label: '340+ Graduates' },
  { icon: '✓', label: 'No Hidden Fees' },
]

const FAQS = [
  { q: 'What if I miss a mentorship session?', a: 'Sessions can be rescheduled with 24 hours notice. A recording is always provided whether you attend live or not.' },
  { q: 'Is there a refund policy?', a: 'The Full Program includes a 7-day satisfaction guarantee. If the first week does not meet your expectations, you receive a full refund — no questions asked.' },
  { q: 'How are sessions conducted?', a: 'All 1-on-1 sessions are via Zoom or Google Meet. Sessions are 60 minutes, recorded, and shared with you within 24 hours.' },
  { q: 'What experience level do I need?', a: 'The 30-Day Program starts from absolute beginner. Day 1 covers candlesticks and basic chart reading. The mentorship-only plan is better suited to traders with some existing foundation.' },
  { q: 'Can I upgrade from Mentorship to Full Program?', a: 'Yes — if you are on the monthly plan and want to add full course access, contact support and we will arrange a reduced upgrade price.' },
  { q: 'What markets are covered?', a: 'Forex (majors & minors), crypto (BTC, ETH), indices (US30, US100, SPX), and commodities (Gold, Oil). The system works across all liquid markets.' },
]

export default function PricingPage() {
  return (
    <div className="page-wrap section">
      <div className="pricing-page__header">
        <p className="eyebrow">// Pricing</p>
        <h1 className="section-title">Choose Your Path</h1>
        <p className="section-sub" style={{margin: '0 auto'}}>
          Whether you want structured learning or direct mentorship, both routes lead to the same goal:
          a consistent, repeatable trading system.
        </p>
      </div>

      {/* Plans */}
      <div className="pricing-page__plans">
        {PLANS.map(plan => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
          >
            {plan.featured && (
              <div className="pricing-card__popular-bar">Most Popular</div>
            )}
            <div className="pricing-card__header">
              <div className={`pricing-card__plan font-mono ${plan.planClass}`}>{plan.name}</div>
              <div className="pricing-card__price-row">
                <span className="pricing-card__currency">£</span>
                <span className="pricing-card__amount">{plan.amount}</span>
              </div>
              <div className="pricing-card__period">{plan.period}</div>
              <div className="pricing-card__tagline">{plan.tagline}</div>
            </div>

            <div className="pricing-card__divider" />

            <div className="pricing-card__features">
              {plan.features.map((f, i) => (
                <div key={i} className={`pricing-card__feature ${f.on ? '' : 'pricing-card__feature--off'}`}>
                  <span className={f.on ? 'pricing-card__feature-check' : 'pricing-card__feature-cross'}>
                    {f.on ? '✓' : '✕'}
                  </span>
                  {f.text}
                </div>
              ))}
            </div>

            <div className="pricing-card__cta">
              <a
                href={plan.stripeLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn--full ${plan.featured ? 'btn--primary' : 'btn--ghost'}`}
              >
                {plan.cta} →
              </a>
              <p className="pricing-card__guarantee">{plan.guarantee}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trust row */}
      <div className="pricing-page__trust">
        {TRUST_ITEMS.map((t, i) => (
          <div key={i} className="pricing-page__trust-item">
            <span>{t.icon}</span>
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="pricing-page__compare">
        <div className="pricing-page__compare-title">Plan Comparison</div>
        <div className="pricing-page__compare-table">
          <div className="pricing-page__compare-head">
            <div className="pricing-page__compare-head-label">Feature</div>
            <div className="pricing-page__compare-head-col color--green">Mentorship</div>
            <div className="pricing-page__compare-head-col color--accent">Full Program</div>
          </div>
          {COMPARE_ROWS.map(([feature, m, p], i) => (
            <div key={i} className="pricing-page__compare-row">
              <div className="pricing-page__compare-feature">{feature}</div>
              <div className={`pricing-page__compare-val ${m === '✕' ? 'color--dim' : 'color--green'}`}>{m}</div>
              <div className={`pricing-page__compare-val ${p === '✕' ? 'color--dim' : 'color--accent'}`}>{p}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="pricing-page__faq-title">Common Questions</div>
      <div className="pricing-page__faqs">
        {FAQS.map((faq, i) => (
          <details key={i} className="accordion">
            <summary className="accordion__trigger">
              <span>{faq.q}</span>
              <span className="accordion__icon">+</span>
            </summary>
            <div className="accordion__body">{faq.a}</div>
          </details>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="pricing-page__bottom-cta">
        <p className="pricing-page__bottom-sub">Still deciding? Talk to us first.</p>
        <Link href="/support" className="btn btn--ghost">Message Us Directly →</Link>
      </div>
    </div>
  )
}
