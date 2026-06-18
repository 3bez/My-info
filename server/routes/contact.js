const express = require('express');
const router = express.Router();
const transporter = require('../lib/mailer');
const { supabaseAdmin } = require('../lib/supabase');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: 'Name is required.' });
  if (!message || !message.trim()) return res.status(400).json({ error: 'Message is required.' });

  try {
    await supabaseAdmin.from('messages').insert({
      name: name.trim(), email: email?.trim() || '',
      phone: phone?.trim() || '', message: message.trim(),
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `New message from ${name.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B23A2E; border-bottom: 2px solid #B23A2E; padding-bottom: 10px;">
            New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #16181D; width: 80px;">Name:</td>
              <td style="padding: 8px 0; color: #3C414A;">${name.trim()}</td>
            </tr>
            ${email ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #16181D;">Email:</td><td style="padding: 8px 0; color: #3C414A;">${email.trim()}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #16181D;">Phone:</td><td style="padding: 8px 0; color: #3C414A;">${phone.trim()}</td></tr>` : ''}
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: bold; color: #16181D; margin-bottom: 8px;">Message:</p>
            <div style="background: #F4F1E9; padding: 16px; border-left: 3px solid #B23A2E; color: #3C414A; line-height: 1.6;">
              ${message.trim().replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #83878F;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

module.exports = router;
