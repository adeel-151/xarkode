const express = require('express');
const { body, validationResult } = require('express-validator');
const FaqQuestion = require('../models/FaqQuestion');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/sendEmail');
const logger = require('../utils/logger');

const router = express.Router();

const validateFaqQuestion = [
  body('email').trim().notEmpty().withMessage('Email is required').isEmail().withMessage('Enter a valid email address').normalizeEmail(),
  body('question').trim().notEmpty().withMessage('Question is required').isLength({ max: 1000 }).withMessage('Question is too long'),
];

// POST /api/faq-questions — submit a question from the FAQ section
router.post(
  '/',
  validateFaqQuestion,
  catchAsync(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new AppError(errors.array()[0].msg, 400));
    }

    const { email, question } = req.body;

    const faqQuestion = await FaqQuestion.create({
      email,
      question,
      ip: req.ip,
    });

    sendEmail({
      subject: 'New FAQ question — XarKode website',
      replyTo: email,
      html: `
        <h2>New question from the FAQ section</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Question:</strong></p>
        <p>${question.replace(/\n/g, '<br/>')}</p>
      `,
    }).catch((err) => logger.error(`sendEmail failed: ${err.message}`));

    res.status(201).json({
      success: true,
      message: "Thanks — we'll get back to you soon.",
      data: { id: faqQuestion._id },
    });
  })
);

module.exports = router;
