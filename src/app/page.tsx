import Link from 'next/link'
import Image from 'next/image'

const STATS = [
  { val: '340+', label: 'Students Trained' },
  { val: '91%',  label: 'Profitability Rate' },
  { val: '4.9★', label: 'Average Rating' },
  { val: '5 Yrs', label: 'Market Experience' },
]

const REVIEWS = [
  { name: 'Alex R.',   role: 'Day Trader — London',      avatar: 'AR', colorVar: '--accent',  text: 'Before HC Strategies I was gambling with levels I barely understood. After 30 days I had a structured system — real entries, real exits, real R:R. The mentor explains the why behind every concept.' },
  { name: 'Sophia K.', role: 'Swing Trader — Stockholm', avatar: 'SK', colorVar: '--green',   text: "The top-down analysis framework changed everything. I stopped chasing candles and started trading structure. My win rate went from 38% to 61% in eight weeks." },
  { name: 'James T.',  role: 'Forex Trader — Manchester',avatar: 'JT', colorVar: '--gold',    text: "The FVG + order block combo taught here is lethal on the London session. Weekly feedback was the real differentiator — having charts reviewed by someone profitable makes all the difference." },
  { name: 'Lena M.',   role: 'Crypto Trader — Berlin',   avatar: 'LM', colorVar: '--purple',  text: 'I tried three other courses before this. None covered market structure the way HC Strategies does. Practical assignments pushed me to actually apply concepts, not just watch videos.' },
  { name: 'Daniel F.', role: 'Index Trader — Amsterdam', avatar: 'DF', colorVar: '--orange',  text: 'Risk management module alone is worth 10x the price. I now never risk more than I plan, losses are controlled. Mentorship calls are incredibly detailed and personalised.' },
  { name: 'Nadia S.',  role: 'Gold Trader — Dubai',      avatar: 'NS', colorVar: '--accent',  text: "Six months after the program I am consistently profitable on Gold. HC Strategies built a repeatable framework that works across instruments. Genuinely invested in your success." },
]

const INTERVIEWS = [
  { id: 1,  title: 'Alex shares his first profitable month',     guest: 'Alex R. — Day Trader',     duration: '18 min', youtube: '#' },
  { id: 2,  title: 'Sophia on trading psychology and patience',  guest: 'Sophia K. — Swing Trader', duration: '24 min', youtube: '#' },
  { id: 3,  title: 'James breaks down a perfect BOS entry',      guest: 'James T. — Forex Trader',  duration: '21 min', youtube: '#' },
  { id: 4,  title: 'Lena on going from losing to consistent',    guest: 'Lena M. — Crypto Trader',  duration: '32 min', youtube: '#' },
  { id: 5,  title: 'Daniel walks through his risk framework',    guest: 'Daniel F. — Index Trader', duration: '19 min', youtube: '#' },
  { id: 6,  title: 'Nadia on trading Gold with SMC structure',   guest: 'Nadia S. — Commodities',   duration: '27 min', youtube: '#' },
  { id: 7,  title: 'Full live GBPUSD trade breakdown',           guest: 'Tom B. — US30 Trader',     duration: '45 min', youtube: '#' },
  { id: 8,  title: 'Week 4 roundtable: student results review',  guest: 'Multiple Students',        duration: '51 min', youtube: '#' },
]

const PHASES = [
  { days: 'Day 1–3',   name: 'Foundation', topics: 'Candlesticks · Market structure · Trend direction',          tag: 'phase-tag--foundation', barColor: 'var(--green)',  num: 1 },
  { days: 'Day 4–10',  name: 'Structure',  topics: 'BOS · Liquidity · Support/Resistance · HTF/LTF',             tag: 'phase-tag--structure',  barColor: 'var(--accent)', num: 2 },
  { days: 'Day 11–20', name: 'Execution',  topics: 'FVG · Fibonacci · Entry models · Confluences',               tag: 'phase-tag--execution',  barColor: 'var(--gold)',   num: 3 },
  { days: 'Day 21–30', name: 'Mastery',    topics: 'Full analysis · Risk management · Repeatable system',        tag: 'phase-tag--mastery',    barColor: 'var(--purple)', num: 4 },
]

const PERFORMANCE = [
  { label: 'Verified Win Rate',   val: '68.4%', sub: 'across 847 trades',  color: 'var(--green)'  },
  { label: 'Average Risk:Reward', val: '1:2.4', sub: 'per trade',          color: 'var(--accent)' },
  { label: 'Monthly Consistency', val: '11/12', sub: 'profitable months',  color: 'var(--gold)'   },
  { label: 'Max Drawdown',        val: '4.2%',  sub: 'controlled risk',    color: 'var(--purple)' },
]

const FEATURES = [
  { icon: '▶', title: '30 Video Lessons',     desc: 'Daily structured lessons from candlesticks to full institutional system.',      color: 'var(--accent)'  },
  { icon: '✎', title: 'Daily Assignments',    desc: 'Knowledge questions and practical chart tasks with screenshot uploads.',        color: 'var(--green)'   },
  { icon: '◈', title: 'Weekly Feedback',      desc: 'Mentor personally reviews your assignments and chart analysis every week.',     color: 'var(--gold)'    },
  { icon: '◉', title: 'Live TradingView',     desc: 'Embedded live chart so you can analyse and trade directly on the platform.',   color: 'var(--purple)'  },
  { icon: '⌗', title: 'Position Calculator',  desc: 'Integrated FXVerify lot size calculator — know exact risk before every trade.',color: 'var(--orange)'  },
  { icon: '◎', title: 'Mentor Support',       desc: 'Direct messaging to your mentor. Questions answered personally within 24h.',   color: 'var(--accent)'  },
]

// Candle data: h=total height, b=body height, up=bullish, wt=top wick, wb=bottom wick
const CANDLES = [
  {h:52,b:22,up:true, wt:18,wb:12},{h:44,b:20,up:false,wt:12,wb:12},
  {h:60,b:28,up:true, wt:18,wb:14},{h:38,b:16,up:false,wt:12,wb:10},
  {h:70,b:34,up:true, wt:20,wb:16},{h:55,b:26,up:false,wt:14,wb:15},
  {h:48,b:22,up:true, wt:14,wb:12},{h:80,b:40,up:true, wt:22,wb:18},
  {h:62,b:30,up:false,wt:16,wb:16},{h:90,b:46,up:true, wt:26,wb:18},
  {h:72,b:36,up:true, wt:20,wb:16},{h:58,b:28,up:false,wt:16,wb:14},
  {h:95,b:50,up:true, wt:26,wb:19},{h:85,b:44,up:true, wt:24,wb:17},
  {h:78,b:40,up:false,wt:20,wb:18},{h:105,b:54,up:true, wt:28,wb:23},
  {h:88,b:46,up:true, wt:24,wb:18},{h:76,b:38,up:false,wt:20,wb:18},
  {h:112,b:58,up:true, wt:30,wb:24},{h:98,b:52,up:true, wt:26,wb:20},
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section grid-bg home-hero">
        <div className="home-hero__glow-1 shield-glow shield-glow--blue" />
        <div className="home-hero__glow-2 shield-glow shield-glow--silver" />
        <div className="page-wrap">
          <div className="home-hero__grid">

            <div className="home-hero__copy fade-up">
              <div className="badge badge--accent home-hero__open-badge">
                <span className="status-dot" />
                Enrollments Open
              </div>
              <h1 className="home-hero__headline font-display">
                Trade Like an<br />
                <span className="home-hero__headline-blue">Institution.</span><br />
                Think Like a<br />
                <span className="home-hero__headline-underline">Pro.</span>
              </h1>
              <p className="section-sub home-hero__sub">
                A 30-day structured mentorship that takes you from chart-reader to systematic trader.
                Real concepts. Real feedback. A repeatable system you actually own.
              </p>
              <div className="home-hero__buttons">
                <Link href="/pricing" className="btn btn--primary btn--large">Start the Program — £299</Link>
                <Link href="/course"  className="btn btn--ghost btn--large">View Curriculum →</Link>
              </div>
              <div className="home-hero__stats">
                {STATS.map((s,i) => (
                  <div key={i} className="home-hero__stat">
                    <div className="stat-item__val">{s.val}</div>
                    <div className="stat-item__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* MENTOR CARD */}
            <div className="mentor-preview-card card fade-up delay-2">
              <div className="mentor-preview-card__chart">
                <div className="mentor-preview-card__candles">
                  {CANDLES.map((c,i) => (
                    <div key={i} className="mentor-preview-card__candle-col">
                      <div className={c.up ? 'mentor-preview-card__wick--up' : 'mentor-preview-card__wick--down'}
                           style={{height: (c.h-c.b)/2}} />
                      <div className={c.up ? 'mentor-preview-card__body--up' : 'mentor-preview-card__body--down'}
                           style={{height: c.b}} />
                      <div className={c.up ? 'mentor-preview-card__wick--up' : 'mentor-preview-card__wick--down'}
                           style={{height: (c.h-c.b)/2}} />
                    </div>
                  ))}
                </div>
                <span className="badge badge--green mentor-preview-card__perf">+14.3% MTD</span>
              </div>

              <div className="mentor-preview-card__body">
                <div className="mentor-preview-card__profile">
                  <Image src="/logo-small.png" alt="HC Strategies" width={52} height={52}
                    className="mentor-preview-card__logo" />
                  <div>
                    <div className="mentor-preview-card__name font-display">HC Strategies</div>
                    <div className="mentor-preview-card__role">Institutional Trader · 5+ years</div>
                    <div className="mentor-preview-card__stars">
                      {[1,2,3,4,5].map(s=><span key={s} className="star color--gold">★</span>)}
                      <span className="mentor-preview-card__rating">4.9 (340 reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="mentor-preview-card__bio">
                  Former prop trader. Specialising in SMC, ICT, and top-down multi-timeframe analysis.
                  Built HC Strategies to teach the exact system used in professional environments.
                </p>
                <div className="mentor-preview-card__metrics grid--3">
                  {[{l:'Win Rate',v:'68%',c:'color--green'},{l:'Avg R:R',v:'1:2.4',c:'color--accent'},{l:'Instruments',v:'12+',c:'color--gold'}].map((m,i)=>(
                    <div key={i} className="metric-card">
                      <div className={`metric-card__val ${m.c}`}>{m.v}</div>
                      <div className="metric-card__label">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* PHASES */}
      <section className="section">
        <div className="page-wrap">
          <div className="section-header">
            <p className="eyebrow">// Structure</p>
            <h2 className="section-title">30 Days. One System.</h2>
            <p className="section-sub">Every lesson builds on the last. By day 30 you have a complete, battle-tested framework.</p>
          </div>
          <div className="grid--4 phases-grid">
            {PHASES.map((p,i) => (
              <div key={i} className="phase-card card card--hover">
                <div className="phase-card__bar" style={{background: p.barColor}} />
                <div className="phase-card__body">
                  <div className="phase-card__days font-mono">{p.days}</div>
                  <div className={`phase-tag ${p.tag} phase-card__tag`}>Phase {p.num}</div>
                  <div className="phase-card__name font-display" style={{color: p.barColor}}>{p.name}</div>
                  <p className="phase-card__topics">{p.topics}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="phases-grid__cta">
            <Link href="/course" className="phases-grid__cta-link">
              View full 30-day curriculum <span className="color--accent">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MENTOR DEEP DIVE */}
      <section className="section section--dark">
        <div className="page-wrap">
          <div className="mentor-section__grid">
            <div>
              <p className="eyebrow">// Your Mentor</p>
              <h2 className="section-title">
                Trained at institutional level.<br />
                <span className="color--accent">Teaching you the same.</span>
              </h2>
              <p className="mentor-section__bio">
                HC Strategies was built by a former prop firm trader who spent five years executing in professional
                environments — mastering Smart Money Concepts, ICT methodology, and multi-timeframe analysis
                before transitioning into full-time mentorship.
              </p>
              <p className="mentor-section__bio">
                The approach is systematic and repeatable. No gut feelings. No gambling.
                Every setup has a reason. Every entry has a rule. Every loss is controlled.
              </p>
              <ul className="mentor-section__list">
                {['SMC & ICT methodology specialist','Top-down multi-timeframe analysis','Risk-first mindset across all instruments','Forex · Indices · Crypto · Commodities','340+ students successfully mentored'].map((item,i) => (
                  <li key={i} className="mentor-section__list-item">
                    <span className="mentor-section__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mentor-section__right">
              <div className="card mentor-section__perf-card">
                <div className="mentor-section__perf-label font-mono">Performance Overview — 2024</div>
                <div className="grid--2 mentor-section__perf-grid">
                  {PERFORMANCE.map((m,i) => (
                    <div key={i} className="metric-card">
                      <div className="metric-card__val" style={{color: m.color}}>{m.val}</div>
                      <div className="metric-card__label">{m.label}</div>
                      <div className="metric-card__sub">{m.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mentor-section__quote card">
                <p className="mentor-section__quote-text">
                  "I built this program because I could not find a course that treated students like professionals.
                  Everything I teach I use every single day. No theory. No fluff. Just the system."
                </p>
                <div className="mentor-section__quote-author">
                  <Image src="/logo-small.png" alt="HC Strategies" width={30} height={30} className="mentor-section__quote-logo" />
                  <span className="mentor-section__quote-name">HC Strategies — Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="page-wrap">
          <div className="section-header">
            <p className="eyebrow">// Student Results</p>
            <h2 className="section-title">What Traders Say</h2>
            <p className="section-sub">Real feedback from students who completed the 30-day program.</p>
          </div>
          <div className="grid--3 reviews-grid">
            {REVIEWS.map((r,i) => (
              <div key={i} className="review-card">
                <div className="review-card__stars">
                  {[1,2,3,4,5].map(s=><span key={s} className="review-card__star">★</span>)}
                </div>
                <p className="review-card__text">"{r.text}"</p>
                <div className="review-card__footer">
                  <div className="review-card__avatar" style={{
                    background: `color-mix(in srgb, ${r.colorVar} 15%, transparent)`,
                    color: `var(${r.colorVar})`,
                    borderColor: `color-mix(in srgb, ${r.colorVar} 25%, transparent)`
                  }}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="review-card__name">{r.name}</div>
                    <div className="review-card__role">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERVIEWS */}
      <section className="section section--dark">
        <div className="page-wrap">
          <div className="section-header">
            <p className="eyebrow">// Student Interviews</p>
            <h2 className="section-title">HC Strategies & Students</h2>
            <p className="section-sub">Watch real conversations about real results from the program.</p>
          </div>
          <div className="grid--4 interviews-grid">
            {INTERVIEWS.map((v) => (
              <a key={v.id} href={v.youtube} target="_blank" rel="noopener noreferrer" className="video-card">
                <div className="video-card__thumb grid-bg">
                  <div className="video-card__day-badge font-mono">Interview #{v.id}</div>
                  <div className="video-card__play-overlay">
                    <div className="video-card__play-btn">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="var(--bg-800)">
                        <path d="M1 1l12 7L1 15V1z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="video-card__thumb-decoration">
                    {[20,35,25,45,30,50,40,55,45,60].map((h,j) => (
                      <div key={j} className="video-card__thumb-bar"
                           style={{height:h, background: j>6 ? 'var(--green)' : 'var(--bg-500)'}} />
                    ))}
                  </div>
                  <span className="video-card__duration font-mono">{v.duration}</span>
                </div>
                <div className="video-card__body">
                  <div className="video-card__title">{v.title}</div>
                  <div className="video-card__meta font-mono">{v.guest}</div>
                </div>
              </a>
            ))}
          </div>
          <p className="interviews-grid__note font-mono">
            Replace <code>#</code> href values with your real YouTube video links.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="page-wrap">
          <div className="section-header">
            <p className="eyebrow">// Program</p>
            <h2 className="section-title">Everything Included</h2>
          </div>
          <div className="grid--3 features-grid">
            {FEATURES.map((f,i) => (
              <div key={i} className="feature-card card card--hover">
                <div className="feature-card__icon" style={{color: f.color}}>{f.icon}</div>
                <div className="feature-card__title font-display">{f.title}</div>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--dark home-cta">
        <div className="home-cta__glow shield-glow shield-glow--blue" />
        <div className="page-wrap home-cta__inner">
          <div className="home-cta__logo-wrap">
            <Image src="/logo.png" alt="HC Strategies" width={90} height={90} className="home-cta__logo" />
          </div>
          <p className="eyebrow">// Ready?</p>
          <h2 className="section-title home-cta__title">
            Stop Losing Money<br />on Setups You Don't Understand.
          </h2>
          <p className="section-sub home-cta__sub">
            30 days from now you can have a trading system that makes sense, managed risk,
            and a mentor who has been through every market condition.
          </p>
          <div className="home-cta__buttons">
            <Link href="/pricing" className="btn btn--primary btn--large">Enroll Now — From £150/mo</Link>
            <Link href="/support" className="btn btn--ghost btn--large">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  )
}