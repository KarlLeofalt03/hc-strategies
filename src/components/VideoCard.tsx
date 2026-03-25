'use client'
import type { Lesson } from '@/app/course/page'

type Props = {
  lesson: Lesson
  phaseColor: string
}

export default function VideoCard({ lesson, phaseColor }: Props) {
  const isLinked = lesson.videoUrl !== ''
  const hasThumb = lesson.thumbUrl && lesson.thumbUrl !== ''

  const handlePlay = () => {
    if (!lesson.locked && isLinked) {
      window.open(lesson.videoUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={`vcard ${lesson.locked ? 'vcard--locked' : 'vcard--unlocked'}`}>

      {/* ── Thumbnail area ─────────────────────── */}
      <div className="vcard__thumb" onClick={handlePlay}>

        {/* Background: real thumbnail or chart placeholder */}
        {hasThumb ? (
          <img src={lesson.thumbUrl} alt={lesson.title} className="vcard__thumb-img" />
        ) : (
          <div className="vcard__thumb-placeholder grid-bg">
            {/* Decorative mini candlestick chart */}
            <div className="vcard__chart-deco">
              {[18,28,22,35,25,42,32,48,38,55,44,50,58,52,62].map((h, i) => (
                <div
                  key={i}
                  className="vcard__chart-bar"
                  style={{
                    height: h,
                    background: i > 9 ? phaseColor : 'var(--bg-500)',
                    opacity: i > 9 ? 0.85 : 1,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Day badge */}
        <div className="vcard__day-badge font-mono" style={{ color: phaseColor, borderColor: phaseColor + '40', background: phaseColor + '18' }}>
          {typeof lesson.day === 'number' ? `DAY ${lesson.day}` : lesson.day}
        </div>

        {/* Duration badge */}
        {lesson.duration !== '— min' && (
          <div className="vcard__duration font-mono">{lesson.duration}</div>
        )}

        {/* PDF indicator */}
        {lesson.isPdf && (
          <div className="vcard__pdf-badge font-mono">PDF</div>
        )}

        {/* Lock overlay */}
        {lesson.locked ? (
          <div className="vcard__lock-overlay">
            <div className="vcard__lock-icon">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="11" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M6 11V8a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <circle cx="11" cy="18" r="2" fill="currentColor"/>
              </svg>
            </div>
            <span className="vcard__lock-label font-mono">Locked</span>
          </div>
        ) : isLinked ? (
          /* Play button overlay (unlocked + has video) */
          <div className="vcard__play-overlay">
            <button className="vcard__play-btn" aria-label={`Play ${lesson.title}`}>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M1 1.5l14 7.5L1 16.5V1.5z" fill="var(--bg-800)" stroke="var(--bg-800)" strokeWidth="0.5"/>
              </svg>
            </button>
          </div>
        ) : (
          /* Unlocked but no video yet */
          <div className="vcard__no-video-overlay">
            <span className="vcard__no-video-label font-mono">Video coming soon</span>
          </div>
        )}
      </div>

      {/* ── Card body ──────────────────────────── */}
      <div className="vcard__body">
        <div className="vcard__title">{lesson.title}</div>
        <div className="vcard__topics font-mono">
          {lesson.topics.join(' · ')}
        </div>

        {/* CTA row */}
        <div className="vcard__footer">
          {lesson.locked ? (
            <span className="vcard__locked-tag font-mono">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" style={{display:'inline',marginRight:5}}>
                <rect x="1" y="5" width="8" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Enroll to unlock
            </span>
          ) : isLinked ? (
            <button onClick={handlePlay} className="vcard__watch-btn font-mono">
              ▶ Watch Lesson
            </button>
          ) : (
            <span className="vcard__soon-tag font-mono">Link video in page.tsx</span>
          )}
        </div>
      </div>

    </div>
  )
}
