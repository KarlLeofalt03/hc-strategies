/**
 * HC STRATEGIES — Course Page
 * ─────────────────────────────────────────────────────────────
 * HOW TO LINK YOUR VIDEOS:
 *   Find the lesson by title, add your URL to videoUrl: ''
 *   e.g. videoUrl: 'https://vimeo.com/123456789'
 *        videoUrl: 'https://youtu.be/abc123'
 *
 * HOW TO ADD THUMBNAILS:
 *   thumbUrl: 'https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg'
 *
 * HOW TO UNLOCK LESSONS (after payment):
 *   Change locked: true  →  locked: false
 *   Or drive this from your auth session / database.
 * ─────────────────────────────────────────────────────────────
 */
import Link from 'next/link'
import VideoCard from '@/components/VideoCard'

export type Lesson = {
  day: number | string
  title: string
  duration: string
  topics: string[]
  videoUrl: string
  thumbUrl?: string
  locked: boolean
  isPdf?: boolean
}

export type Phase = {
  name: string
  days: string
  barColor: string
  tagClass: string
  phaseNum: number
  lessons: Lesson[]
}

/* ═══════════════════════════════════════════════
   30-DAY CURRICULUM
   All titles from your HC_STRATEGIES folder.
   ═══════════════════════════════════════════════ */
const CURRICULUM: Phase[] = [
  {
    name: 'Foundation', days: 'Day 1–3',
    barColor: 'var(--green)', tagClass: 'phase-tag--foundation', phaseNum: 1,
    lessons: [
      { day:1,  locked:true, title:'DAY 1 – Higher Timeframe Market Structure',            duration:'— min', topics:['HTF bias','Swing highs/lows','Market flow direction'],      videoUrl:'', thumbUrl:'' },
      { day:2,  locked:true, title:'DAY 2 – Lower Timeframe Market Structure',             duration:'— min', topics:['LTF precision','Structure shifts','Entry zone identification'], videoUrl:'', thumbUrl:'' },
      { day:3,  locked:true, title:'DAY 3 – Reversal vs Retracement',                     duration:'— min', topics:['True reversal signals','Pullback identification','Confluence'], videoUrl:'', thumbUrl:'' },
    ],
  },
  {
    name: 'Structure', days: 'Day 4–10',
    barColor: 'var(--accent)', tagClass: 'phase-tag--structure', phaseNum: 2,
    lessons: [
      { day:4,  locked:true, title:'DAY 4 – Liquidity Consolidation & Expansion Phases',  duration:'— min', topics:['Consolidation zones','Expansion triggers','Liquidity pools'],       videoUrl:'', thumbUrl:'' },
      { day:5,  locked:true, title:'DAY 5 – Liquidity Foundations (All Types)',            duration:'— min', topics:['Buy/sell liquidity','Stop hunts','EQH/EQL levels'],                 videoUrl:'', thumbUrl:'' },
      { day:6,  locked:true, title:'DAY 6 – Liquidity Narrative & Value Building',        duration:'— min', topics:['Narrative building','Value areas','Premium/discount zones'],         videoUrl:'', thumbUrl:'' },
      { day:7,  locked:true, title:'DAY 7 – HTF Fair Value Gaps',                         duration:'— min', topics:['HTF FVG','Gap fill targets','Imbalance identification'],             videoUrl:'', thumbUrl:'' },
      { day:8,  locked:true, title:'DAY 8 – LTF Fair Value Gaps & Entry Precision',       duration:'— min', topics:['LTF FVG entries','Precision entry timing','FVG stacking'],          videoUrl:'', thumbUrl:'' },
      { day:9,  locked:true, title:'DAY 9 – Volume Imbalance & Displacement Confirmation',duration:'— min', topics:['Volume imbalance','Displacement candles','Entry confirmation'],      videoUrl:'', thumbUrl:'' },
      { day:10, locked:true, title:'DAY 10 – SMT Divergence & Correlation',               duration:'— min', topics:['SMT setup','Correlated pairs','Divergence signals'],               videoUrl:'', thumbUrl:'' },
    ],
  },
  {
    name: 'Execution', days: 'Day 11–20',
    barColor: 'var(--gold)', tagClass: 'phase-tag--execution', phaseNum: 3,
    lessons: [
      { day:11, locked:true, title:'DAY 11 – Candle Opens Daily–Weekly–Monthly',           duration:'— min', topics:['Daily open','Weekly bias candles','Monthly range opens'],           videoUrl:'', thumbUrl:'' },
      { day:12, locked:true, title:'DAY 12 – Fibonacci & Premium–Discount Theory',         duration:'— min', topics:['Fibonacci levels','0.5 equilibrium','Premium vs discount'],         videoUrl:'', thumbUrl:'' },
      { day:13, locked:true, title:'DAY 13 – Entry Models (Full Breakdown)',               duration:'— min', topics:['Model 1 BOS entry','Model 2 OB entry','Model 3 FVG entry'],         videoUrl:'', thumbUrl:'' },
      { day:14, locked:true, title:'DAY 14 – Stop-Loss Engineering',                       duration:'— min', topics:['Structure-based SL','OB invalidation','Avoiding retail stops'],     videoUrl:'', thumbUrl:'' },
      { day:15, locked:true, title:'DAY 15 – Understanding IMBALANCE & Market Inefficiencies', duration:'— min', topics:['Imbalance theory','Market inefficiency','Fill zone targets'],   videoUrl:'', thumbUrl:'' },
      { day:16, locked:true, title:'DAY 16 – Multi-Timeframe Alignment System',            duration:'— min', topics:['MTF confluence','Alignment filter','Bias stacking'],                videoUrl:'', thumbUrl:'' },
      { day:17, locked:true, title:'DAY 17 – Pro-Trend Model Alignment System',            duration:'— min', topics:['Trend alignment','With-trend momentum','Pro-trend checklist'],      videoUrl:'', thumbUrl:'' },
      { day:18, locked:true, title:'DAY 18 – Counter-Trend Model (Continuation System)',   duration:'— min', topics:['Counter-trend entries','Continuation patterns','Risk management'],  videoUrl:'', thumbUrl:'' },
      { day:19, locked:true, title:'DAY 19 – Institutional Risk Model (Reversal Model)',   duration:'— min', topics:['Institutional flow','Reversal setup','R:R optimisation'],           videoUrl:'', thumbUrl:'' },
      { day:20, locked:true, title:'DAY 20 – Trade Management & Weekly Mastery',           duration:'— min', topics:['Partial TP','Trailing stops','Weekly review process'],              videoUrl:'', thumbUrl:'' },
    ],
  },
  {
    name: 'Mastery', days: 'Day 21–30',
    barColor: 'var(--purple)', tagClass: 'phase-tag--mastery', phaseNum: 4,
    lessons: [
      { day:21, locked:true, title:'DAY 21 – Weekly With a 9-5 Mapping Blueprint',         duration:'— min', topics:['9-5 schedule','Session mapping','Weekly trade plan'],              videoUrl:'', thumbUrl:'' },
      { day:22, locked:true, title:'DAY 22 – Trading Mapping Framework',                   duration:'— min', topics:['Trade map','Pre-trade preparation','Execution framework'],          videoUrl:'', thumbUrl:'' },
      { day:23, locked:true, title:'DAY 23 – Session Timing & Kill Zones',                 duration:'— min', topics:['London kill zone','NY session','Kill zone entries'],               videoUrl:'', thumbUrl:'' },
      { day:24, locked:true, title:'DAY 24 – Psychology of Professional Execution',        duration:'— min', topics:['Trading mindset','Discipline systems','Process over outcome'],       videoUrl:'', thumbUrl:'' },
      { day:25, locked:true, title:'DAY 25 – Prop Management & Game Plan',                 duration:'— min', topics:['Prop firm rules','Drawdown limits','Scaling plan'],                videoUrl:'', thumbUrl:'' },
      { day:26, locked:true, title:'DAY 26 – Advanced Confluence & Multiple Entry Stacking',duration:'— min',topics:['Multi-confluence','Entry stacking','High-probability setups'],       videoUrl:'', thumbUrl:'' },
      { day:27, locked:true, title:'DAY 27 – Advanced Trade Management & Scaling',         duration:'— min', topics:['Advanced scaling','Partial closes','Position management'],          videoUrl:'', thumbUrl:'' },
      { day:28, locked:true, title:'DAY 28 – Performance Review Framework',                duration:'— min', topics:['Trade journal','Review process','Pattern recognition'],             videoUrl:'', thumbUrl:'' },
      { day:29, locked:true, title:'DAY 29 – Real Trade Case Studies (Winner & Loser)',    duration:'— min', topics:['Live trade examples','Win/loss analysis','Key lessons'],            videoUrl:'', thumbUrl:'' },
      { day:30, locked:true, title:'DAY 30 – Build Your Personal Trading Blueprint',       duration:'— min', topics:['System rules','Custom checklist','Your next 90-day plan'],          videoUrl:'', thumbUrl:'' },
    ],
  },
]

/* ═══════════════════════════════════════════════
   BONUS / SUPPLEMENTARY VIDEOS
   All extra files from your HC_STRATEGIES folder.
   ═══════════════════════════════════════════════ */
const BONUS: Lesson[] = [
  { day:'B1',  locked:true, title:'How I Analyse Multiple Pairs to Find the Best Trade',           duration:'— min', topics:['Pair selection','Comparative analysis','Best setup filter'],  videoUrl:'', thumbUrl:'' },
  { day:'B2',  locked:true, title:'How to Manage Your Trade to Secure Profit or Reduce Risk',      duration:'— min', topics:['Trade management','Profit securing','Risk reduction'],         videoUrl:'', thumbUrl:'' },
  { day:'B3',  locked:true, title:'How to Use TradingView',                                        duration:'— min', topics:['Platform walkthrough','Tools setup','Drawing tools'],           videoUrl:'', thumbUrl:'' },
  { day:'B4',  locked:true, title:'HTF to LTF Risk Management Framework',                          duration:'— min', topics:['HTF to LTF flow','Risk framework','Position sizing'],          videoUrl:'', thumbUrl:'', isPdf:false },
  { day:'B5',  locked:true, title:'Live Session Replay on GBPUSD',                                 duration:'— min', topics:['Live trade replay','GBPUSD analysis','Real-time execution'],   videoUrl:'', thumbUrl:'' },
  { day:'B6',  locked:true, title:'Prop Firm Risk & Scaling Plan',                                 duration:'— min', topics:['Prop firm strategy','Scaling rules','Drawdown protection'],    videoUrl:'', thumbUrl:'', isPdf:false },
  { day:'B7',  locked:true, title:'This is How You Know the True High or Low (That Needs to Be Broken)', duration:'— min', topics:['True highs/lows','Structure breaks','Confirmation'],  videoUrl:'', thumbUrl:'' },
  { day:'B8',  locked:true, title:'Timeframe Risk Reward Guide',                                   duration:'— min', topics:['R:R per timeframe','Optimal targets','Risk calibration'],      videoUrl:'', thumbUrl:'', isPdf:false },
  { day:'B9',  locked:true, title:'Tools for Trading',                                             duration:'— min', topics:['Platform tools','Indicators setup','Workflow tools'],          videoUrl:'', thumbUrl:'' },
  { day:'B10', locked:true, title:'Trade Recap on GBPUSD That Delivered Multiple Entries',         duration:'— min', topics:['GBPUSD recap','Multiple entries','Execution review'],          videoUrl:'', thumbUrl:'' },
  { day:'B11', locked:true, title:'Understanding a Bullish and Bearish Delivered Market',          duration:'— min', topics:['Bullish delivery','Bearish delivery','Market context'],        videoUrl:'', thumbUrl:'' },
  { day:'B12', locked:true, title:'Understanding Break of Structure in the Market',                duration:'— min', topics:['BOS theory','Valid BOS rules','Marking on chart'],              videoUrl:'', thumbUrl:'' },
  { day:'B13', locked:true, title:'Understanding Candle Sticks and the Open',                      duration:'— min', topics:['Candle anatomy','Open significance','Reading price action'],   videoUrl:'', thumbUrl:'' },
  { day:'B14', locked:true, title:'Understanding Complex Candle Structure',                        duration:'— min', topics:['Complex candles','Multi-candle patterns','Structure reading'],  videoUrl:'', thumbUrl:'' },
  { day:'B15', locked:true, title:'Understanding Market Structure from the HTF',                   duration:'— min', topics:['HTF structure reading','Bias building','Top-down flow'],       videoUrl:'', thumbUrl:'' },
  { day:'B16', locked:true, title:'Understanding the Acronyms That Will Be Used',                  duration:'— min', topics:['SMC glossary','Key acronyms','Terminology guide'],             videoUrl:'', thumbUrl:'' },
  { day:'B17', locked:true, title:'Why You Keep Failing Your Prop Account (And How to Fix It)',    duration:'— min', topics:['Prop account mistakes','Psychology','Fix-it framework'],        videoUrl:'', thumbUrl:'' },
  { day:'B18', locked:true, title:'Bulletproof Trading Plan',                                      duration:'— min', topics:['Full trading plan','Rules & checklist','System blueprint'],    videoUrl:'', thumbUrl:'', isPdf:false },
]

/* ═══════════════════════════════════════════════
   PHASE COLOR LOOKUP
   ═══════════════════════════════════════════════ */
const PHASE_COLOR: Record<string, string> = {
  'phase-tag--foundation': 'var(--green)',
  'phase-tag--structure':  'var(--accent)',
  'phase-tag--execution':  'var(--gold)',
  'phase-tag--mastery':    'var(--purple)',
}

export default function CoursePage() {
  const totalLessons = CURRICULUM.reduce((acc, p) => acc + p.lessons.length, 0)

  return (
    <div className="page-wrap section">

      {/* ── Header ────────────────────────────────────── */}
      <div className="course-page__header">
        <p className="eyebrow">// 30-Day Program</p>
        <h1 className="section-title">Course Curriculum</h1>
        <p className="section-sub">
          {totalLessons} structured video lessons + {BONUS.length} bonus videos. All content locked until enrollment.
          When you upload a video, paste the URL into the matching <code>videoUrl</code> field in <code>course/page.tsx</code>.
        </p>
      </div>

      {/* ── Lock Banner ────────────────────────────────── */}
      <div className="course-page__lock-banner">
        <div className="course-page__lock-inner">
          <span className="course-page__lock-icon">🔒</span>
          <div>
            <div className="course-page__lock-title">Course Content is Locked</div>
            <p className="course-page__lock-desc">
              Enroll in the 30-Day Program to unlock all lessons, assignments, and mentor feedback.
            </p>
          </div>
        </div>
        <div className="course-page__lock-buttons">
          <Link href="/pricing" className="btn btn--primary">Enroll — £299 →</Link>
          <Link href="/pricing" className="btn btn--ghost">View Plans</Link>
        </div>
      </div>

      {/* ── Stats ──────────────────────────────────────── */}
      <div className="course-page__stats">
        {[
          { val: totalLessons.toString(), label: 'Day Lessons',     color: 'var(--accent)' },
          { val: BONUS.length.toString(), label: 'Bonus Videos',    color: 'var(--green)'  },
          { val: '30',                    label: 'Assignments',     color: 'var(--gold)'   },
          { val: '4',                     label: 'Phases',          color: 'var(--purple)' },
        ].map((s, i) => (
          <div key={i} className="course-page__stat-card">
            <div className="course-page__stat-val" style={{color: s.color}}>{s.val}</div>
            <div className="course-page__stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── 30-Day Phases ──────────────────────────────── */}
      <div className="course-page__phases">
        {CURRICULUM.map((phase) => (
          <div key={phase.phaseNum}>

            {/* Phase heading */}
            <div className="course-page__phase-header">
              <div className="course-page__phase-bar" style={{background: phase.barColor}} />
              <span className="course-page__phase-title font-display">{phase.name}</span>
              <span className="course-page__phase-days font-mono">{phase.days}</span>
              <span className={`phase-tag ${phase.tagClass}`}>Phase {phase.phaseNum}</span>
            </div>

            {/* Video grid */}
            <div className="course-page__video-grid">
              {phase.lessons.map((lesson) => (
                <VideoCard
                  key={lesson.day}
                  lesson={lesson}
                  phaseColor={PHASE_COLOR[phase.tagClass]}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* ── Bonus Videos ───────────────────────────────── */}
      <div className="course-page__bonus-section">
        <div className="course-page__phase-header">
          <div className="course-page__phase-bar" style={{background: 'var(--silver)'}} />
          <span className="course-page__phase-title font-display">Bonus & Supplementary Videos</span>
          <span className="course-page__phase-days font-mono">{BONUS.length} videos</span>
          <span className="phase-tag phase-tag--bonus">Bonus</span>
        </div>

        <div className="course-page__video-grid">
          {BONUS.map((lesson) => (
            <VideoCard
              key={lesson.day}
              lesson={lesson}
              phaseColor="var(--silver)"
            />
          ))}
        </div>
      </div>

      {/* ── Unlock CTA ─────────────────────────────────── */}
      <div className="course-page__unlock-cta">
        <div className="course-page__unlock-glow" />
        <div className="course-page__unlock-title font-display">
          Unlock All {totalLessons} Lessons + {BONUS.length} Bonus Videos
        </div>
        <p className="course-page__unlock-desc">
          One payment. Lifetime access. {totalLessons} days of structured content, assignments, weekly mentor feedback,
          and all tools you need to trade consistently.
        </p>
        <div className="course-page__unlock-buttons">
          <Link href="/pricing" className="btn btn--primary btn--large">Get Full Access — £299</Link>
          <Link href="/pricing" className="btn btn--ghost btn--large">Mentorship Only — £150/mo</Link>
        </div>
      </div>

    </div>
  )
}
