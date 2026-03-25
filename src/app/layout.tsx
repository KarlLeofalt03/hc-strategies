import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'HC Strategies — Professional Trading Mentorship',
  description: 'Learn institutional-grade trading. 30-day structured program with live mentorship, daily assignments, and a repeatable system you actually own.',
  icons: { icon: '/logo-small.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Ticker />
        <main className="pt-28">{children}</main>
        <footer className="footer">
          <div className="footer__inner">
            <div>
              <Link href="/" className="footer__logo">
                <Image src="/logo-small.png" alt="HC Strategies" width={28} height={28} className="footer__logo-img" />
                <span className="footer__logo-text font-display">HC STRATEGIES</span>
              </Link>
              <p className="footer__copy">© 2025 HC Strategies. All rights reserved.</p>
            </div>
            <nav className="footer__links">
              {[['/','/home'],[ '/pricing','Pricing'],['/course','Course'],['/tools','Tools'],['/support','Support']].map(([href,label])=>(
                <Link key={href} href={href} className="footer__link">{label}</Link>
              ))}
            </nav>
            <p className="footer__disclaimer">Trading involves substantial risk of loss. Past performance does not guarantee future results.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}