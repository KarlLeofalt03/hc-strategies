const TICKERS = [
  { sym: 'BTC/USD',  price: '67,432', chg: '+2.14%', up: true  },
  { sym: 'ETH/USD',  price: '3,211',  chg: '+1.87%', up: true  },
  { sym: 'EUR/USD',  price: '1.0821', chg: '-0.12%', up: false },
  { sym: 'GBP/USD',  price: '1.2647', chg: '+0.34%', up: true  },
  { sym: 'XAU/USD',  price: '2,314',  chg: '+0.91%', up: true  },
  { sym: 'US100',    price: '18,024', chg: '-0.28%', up: false },
  { sym: 'SPX500',   price: '5,208',  chg: '+0.41%', up: true  },
  { sym: 'GBP/JPY',  price: '192.31', chg: '+0.55%', up: true  },
  { sym: 'USD/JPY',  price: '151.82', chg: '-0.08%', up: false },
  { sym: 'GBPUSD',   price: '83.14',  chg: '+1.20%', up: true  },
]

// Duplicate for seamless loop
const ALL = [...TICKERS, ...TICKERS]

export default function Ticker() {
  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {ALL.map((t, i) => (
          <div key={i} className="ticker-item">
            <span className="ticker-item__sym">{t.sym}</span>
            <span className="ticker-item__price">{t.price}</span>
            <span className={`ticker-item__change ${t.up ? 'ticker-item__change--up' : 'ticker-item__change--down'}`}>
              {t.chg}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
