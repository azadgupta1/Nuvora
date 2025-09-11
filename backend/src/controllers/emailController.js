import sendEmail from '../services/emailService.js';

export const handleSendEmail = async (req, res) => {
  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await sendEmail(to, subject, html);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send email', error: err.message });
  }
};
