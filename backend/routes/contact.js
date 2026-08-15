const express = require('express');
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/sendEmail');
const logger = require('../utils/logger');

const router = express.Router();

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Enter a valid email address').normalizeEmail(),
  body('message').optional({ checkFalsy: true }).trim().isLength({ max: 2000 }).withMessage('Message is too long'),
];

// POST /api/contact — create a new contact submission
router.post(
  '/',
  validateContact,
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new AppError(errors.array()[0].msg, 400));
    }

    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
      ip: req.ip,
    });

    sendEmail({
      subject: `New contact form submission — ${name}`,
      replyTo: email,
      html: `
        <h2>New message from the XarKode website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '(no message provided)').replace(/\n/g, '<br/>')}</p>
      `,
    }).catch((err) => logger.error(`sendEmail failed: ${err.message}`));

    res.status(201).json({
      success: true,
      message: "Thanks — we'll reach out within 24 hours.",
      data: { id: contact._id },
    });
  })
);

module.exports = router;
