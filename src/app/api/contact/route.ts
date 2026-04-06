import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email via Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HC Strategies <onboarding@resend.dev>',
        to: ['strategieshc@gmail.com'],
        reply_to: email,
        subject: `[HC Strategies Support] ${subject || 'New message'} — from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
            
            <div style="background: #05090f; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #00b4dc; font-size: 22px; margin: 0; font-weight: 800; letter-spacing: 0.05em;">HC STRATEGIES</h1>
              <p style="color: #7a8fa8; font-size: 13px; margin: 6px 0 0;">New support message received</p>
            </div>

            <div style="background: white; padding: 28px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
              
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; width: 100px;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #111;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #00b4dc;">
                    <a href="mailto:${email}" style="color: #00b4dc; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px;">Subject</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; font-weight: 600; color: #111;">${subject || 'No subject selected'}</td>
                </tr>
              </table>

              <div style="margin-top: 20px;">
                <p style="color: #6b7280; font-size: 13px; margin: 0 0 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
                <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
                  <p style="color: #111; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #f0f0f0; text-align: center;">
                <a href="mailto:${email}?subject=Re: ${subject || 'Your HC Strategies enquiry'}" 
                   style="display: inline-block; background: #00b4dc; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                  Reply to ${name}
                </a>
              </div>

            </div>

            <p style="text-align: center; color: #9ca3af; font-size: 11px; margin-top: 16px;">
              This message was sent via the HC Strategies website support form.
            </p>
          </div>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend error:', data)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}