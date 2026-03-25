'use client'
import { useState, useEffect, useRef } from 'react'

/* ── Pair quick-select ─────────────────────────────── */
const PAIRS = [
  { label: 'GBP/USD', tv: 'OANDA:GBPUSD' },
  { label: 'EUR/USD', tv: 'OANDA:EURUSD' },
  { label: 'USD/JPY', tv: 'OANDA:USDJPY' },
  { label: 'GBP/JPY', tv: 'OANDA:GBPJPY' },
  { label: 'XAU/USD', tv: 'OANDA:XAUUSD' },
  { label: 'BTC/USD', tv: 'COINBASE:BTCUSD' },
  { label: 'ETH/USD', tv: 'COINBASE:ETHUSD' },
  { label: 'US30',    tv: 'BLACKBULL:US30' },
  { label: 'NAS100',  tv: 'PEPPERSTONE:NAS100' },
  { label: 'SPX500',  tv: 'PEPPERSTONE:US500' },
]

/* ── TradingView widget via official tv.js ──────────── */
function TradingViewChart({ symbol }: { symbol: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.innerHTML = '<div id="tv_chart_container" style="width:100%;height:100%"></div>'

    const init = () => {
      new (window as any).TradingView.widget({
        autosize:             true,
        symbol:               symbol,
        interval:             '60',
        timezone:             'Europe/London',
        theme:                'dark',
        style:                '1',
        locale:               'en',
        toolbar_bg:           '#070c16',
        enable_publishing:    false,
        allow_symbol_change:  true,
        hide_top_toolbar:     false,
        hide_side_toolbar:    false,
        withdateranges:       true,
        save_image:           true,
        container_id:         'tv_chart_container',
      })
    }

    if (typeof (window as any).TradingView !== 'undefined') {
      init()
    } else {
      const script = document.createElement('script')
      script.src   = 'https://s3.tradingview.com/tv.js'
      script.async = true
      script.onload = init
      document.head.appendChild(script)
    }

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = ''
    }
  }, [symbol])

  return <div ref={containerRef} className="tools-page__tv-container" />
}

/* ── FXVerify embed via official RemoteCalc script ─── */
function FXVerifyCalc() {
  const containerRef = useRef<HTMLDivElement>(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (!containerRef.current || loaded.current) return
    loaded.current = true

    // Inject the container div FXVerify expects
    containerRef.current.id = 'position-size-calculator-279321'

    // Dark-themed base64 style overrides
    const TopPaneStyle    = 'YmFja2dyb3VuZDogIzBjMTUyMDsgY29sb3I6ICNjOGQ0ZTQ7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7IGJvcmRlci1ib3R0b206IG5vbmU7IHBhZGRpbmc6IDE2cHg7'
    const BottomPaneStyle = 'YmFja2dyb3VuZDogIzA4MGUxODsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTsgY29sb3I6ICNjOGQ0ZTQ7IHBhZGRpbmc6IDE2cHg7'
    const ButtonStyle     = 'YmFja2dyb3VuZDogIzAwYjRkYzsgY29sb3I6ICMwNTA5MGY7IGJvcmRlci1yYWRpdXM6IDhweDsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1mYW1pbHk6IERNIFNhbnMsIHNhbnMtc2VyaWY7IHBhZGRpbmc6IDEwcHggMjBweDs='
    const TitleStyle      = 'dGV4dC1hbGlnbjogbGVmdDsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogI2VlZjJmODsgZm9udC1mYW1pbHk6IFN5bmUsIHNhbnMtc2VyaWY7'
    const TextboxStyle    = 'YmFja2dyb3VuZC1jb2xvcjogIzA4MGUxODsgY29sb3I6ICNlZWYyZjg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xMCk7IGJvcmRlci1yYWRpdXM6IDhweDsgcGFkZGluZzogOHB4IDEycHg7'

    const initCalc = () => {
      if (typeof (window as any).RemoteCalc === 'undefined') return
      ;(window as any).RemoteCalc({
        Url:              'https://fxverify.com',
        TopPaneStyle,
        BottomPaneStyle,
        ButtonStyle,
        TitleStyle,
        TextboxStyle,
        ContainerWidth:   '100%',
        HighlightColor:   '#00b4dc',
        IsDisplayTitle:   false,
        IsShowChartLinks: false,
        IsShowEmbedButton:false,
        CompactType:      'large',
        Calculator:       'position-size-calculator',
        ContainerId:      'position-size-calculator-279321',
      })
    }

    if (typeof (window as any).RemoteCalc !== 'undefined') {
      initCalc()
    } else {
      const script   = document.createElement('script')
      script.src     = 'https://fxverify.com/Content/remote/remote-widgets.js'
      script.async   = true
      script.onload  = initCalc
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="tools-page__fxverify-wrap"
    />
  )
}

/* ── PAGE ─────────────────────────────────────────── */
export default function ToolsPage() {
  const [activePair, setActivePair] = useState(PAIRS[0])

  return (
    <div className="page-wrap section">

      <div className="tools-page__header">
        <p className="eyebrow">// Trading Tools</p>
        <h1 className="section-title">Calculate, Chart, Execute.</h1>
        <p className="section-sub">
          Size your position precisely, then switch any pair on the live chart —
          all without leaving the platform.
        </p>
      </div>

      <div className="tools-page__grid">

        {/* ══ FXVERIFY POSITION SIZE CALCULATOR ══ */}
        <div className="tools-page__embed-card">
          <div className="tools-page__embed-header">
            <div>
              <div className="tools-page__embed-title">Position Size Calculator</div>
              <div className="tools-page__embed-sub">
                Forex · Metals · Crypto · Indices · Powered by FXVerify
              </div>
            </div>
            <a
              href="https://fxverify.com/tools/position-size-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="tools-page__open-link"
            >
              Open full ↗
            </a>
          </div>
          <FXVerifyCalc />
        </div>

        {/* ══ TRADINGVIEW ADVANCED CHART ══ */}
        <div className="tools-page__embed-card">
          <div className="tools-page__embed-header">
            <div>
              <div className="tools-page__embed-title">
                Live Chart — {activePair.label}
              </div>
              <div className="tools-page__embed-sub">
                TradingView · Full symbol search · All drawing tools
              </div>
            </div>
            <a
              href={`https://www.tradingview.com/chart/?symbol=${activePair.tv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tools-page__open-link"
            >
              Open full ↗
            </a>
          </div>

          <div className="tools-page__pair-bar">
            {PAIRS.map((p) => (
              <button
                key={p.tv}
                onClick={() => setActivePair(p)}
                className={`tools-page__pair-btn font-mono${activePair.tv === p.tv ? ' tools-page__pair-btn--active' : ''}`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <p className="tools-page__pair-note font-mono">
            Click a pair above · or use symbol search inside the chart
          </p>

          <TradingViewChart key={activePair.tv} symbol={activePair.tv} />
        </div>

      </div>

      {/* Tips */}
      <div className="tools-page__tips">
        {[
          { cls: 'tools-page__tip-num--1', title: 'Calculate your position size', desc: 'Select instrument, enter account balance, risk % and stop loss. FXVerify calculates your exact lot size.' },
          { cls: 'tools-page__tip-num--2', title: 'Switch pair on the chart',     desc: 'Click any button above, or click the symbol inside TradingView to open full symbol search for any market.' },
          { cls: 'tools-page__tip-num--3', title: 'Execute with confidence',       desc: 'With the correct lot size calculated, place your trade knowing exactly how much you risk.' },
        ].map((t, i) => (
          <div key={i} className="tools-page__tip">
            <div className={`tools-page__tip-num ${t.cls} font-mono`}>{i + 1}</div>
            <div>
              <div className="tools-page__tip-title">{t.title}</div>
              <p className="tools-page__tip-desc">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}