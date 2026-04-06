'use client'
import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  { q: 'When does the mentor reply to messages?',     a: 'Typically within 24 hours on weekdays. Urgent trading questions are prioritised and may receive a faster response.' },
  { q: 'How do I ask about a specific lesson?',       a: 'Reference the Day number (e.g. "Day 8 — MTF Analysis") in your message so the mentor can give targeted feedback quickly.' },
  { q: 'Can I upload a chart for review?',            a: 'Yes — use the assignment upload section in your course dashboard, or attach an image to your support message.' },
  { q: 'Is there a community or group chat?',         a: 'A private Discord community is coming soon. Enrolled students will be notified by email when it launches.' },
  { q: 'How do I reschedule a mentorship session?',   a: 'Send a message here at least 24 hours in advance with your preferred alternative time.' },
]

const SUBJECTS = [
  'Select a topic...',
  'Question about the course',
  'Mentorship sessions',
  'Pricing & payment',
  'Technical issue',
  'Chart / trade review',
  'Other',
]

type FormState = { name: string; email: string; subject: string; message: string }

export default function SupportPage() {
  const [form, setForm]       = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      setSent(true)
    } catch (err) {
      setError('Failed to send message. Please check your connection and try again.')
    }

    setLoading(false)
  }

  return (
    <div className="page-wrap section">
      <div className="support-page__header">
        <p className="eyebrow">// Support</p>
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-sub">
          Every message goes directly to Marcus at HC Strategies. No bots. No outsourced support.
        </p>
      </div>

      <div className="support-page__grid">

        {/* Left — form */}
        <div>
          <div className="support-page__form-card">
            <div className="support-page__form-header">
              <span className="status-dot" />
              <div>
                <div className="support-page__form-title">Message HC Strategies</div>
                <div className="support-page__form-sub">Replies within 24 hours · Goes directly to Marcus</div>
              </div>
            </div>

            {sent ? (
              <div className="support-page__success">
                <div className="support-page__success-icon">✓</div>
                <div className="support-page__success-title">Message Sent!</div>
                <p className="support-page__success-text">
                  Your message has been sent to Marcus at <strong>strategieshc@gmail.com</strong>.<br />
                  Expect a reply within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                  className="support-page__reset"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="support-page__form-body">
                <div className="support-page__form-row">
                  <div>
                    <label className="field__label" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" required value={form.name}
                      onChange={handleChange} placeholder="Your name" className="field__input" />
                  </div>
                  <div>
                    <label className="field__label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required value={form.email}
                      onChange={handleChange} placeholder="your@email.com" className="field__input" />
                  </div>
                </div>

                <div>
                  <label className="field__label" htmlFor="subject">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="field__select">
                    {SUBJECTS.map((s, i) => (
                      <option key={i} value={i === 0 ? '' : s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="field__label" htmlFor="message">Message</label>
                  <textarea id="message" name="message" required rows={6} value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your question. Include day numbers, market or chart details if relevant..."
                    className="field__textarea" />
                </div>

                {/* Error message */}
                {error && (
                  <div className="support-page__error">{error}</div>
                )}

                <button type="submit" disabled={loading} className="btn btn--primary btn--full">
                  {loading ? (
                    <span className="support-page__spinner">Sending...</span>
                  ) : 'Send Message →'}
                </button>

                <p className="support-page__form-note">
                  Your message is sent directly to strategieshc@gmail.com
                </p>
              </form>
            )}
          </div>

          <div className="support-page__info-cards">
            <div className="support-page__info-card">
              <div className="support-page__info-icon color--accent">◎</div>
              <div className="support-page__info-title">Enrolled Students</div>
              <p className="support-page__info-desc">Use the in-course messaging for lesson-specific questions after enrollment.</p>
            </div>
            <div className="support-page__info-card">
              <div className="support-page__info-icon color--gold">◈</div>
              <div className="support-page__info-title">Response Time</div>
              <p className="support-page__info-desc">Weekdays within 24h. Urgent trade questions during London/NY sessions prioritised.</p>
            </div>
          </div>
        </div>

        {/* Right — FAQ */}
        <div>
          <div className="support-page__right-title font-display">Quick Answers</div>
          <div className="support-page__faqs">
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

          <div className="support-page__avail-card">
            <div className="support-page__avail-header">
              <span className="status-dot" />
              <span>Marcus is available</span>
            </div>
            <p className="support-page__avail-desc">
              Mon–Fri, London time. Typically online pre-market (7–9am GMT) and post-NY session (10pm–midnight GMT).
            </p>
            <div className="support-page__avail-tz font-mono">strategieshc@gmail.com</div>
          </div>
        </div>

      </div>
    </div>
  )
}