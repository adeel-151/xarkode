const nodemailer = require('nodemailer');
const logger = require('./logger');

let transporter = null;

const emailsEnabled = () => process.env.EMAILS_ENABLED !== 'false';

const getTransporter = () => {
  if (!emailsEnabled()) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  return transporter;
};

/**
 * Sends a notification email. Failures are logged but never thrown —
 * a broken SMTP config should not stop a visitor's submission from
 * being saved to the database.
 */
const sendEmail = async ({ subject, html, replyTo }) => {
  const t = getTransporter();

  if (!t) {
    logger.debug('Email sending is disabled (EMAILS_ENABLED=false) — skipping send.');
    return;
  }

  try {
    await t.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
      replyTo,
      subject,
      html,
    });
    logger.info(`Notification email sent: "${subject}"`);
  } catch (err) {
    logger.error(`Failed to send notification email: ${err.message}`);
  }
};

module.exports = sendEmail;
