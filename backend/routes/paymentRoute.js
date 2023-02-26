import express from 'express'
import { processPayment, sendStripeApiKey } from '../controllers/paymentController.js'
import { isAuthenticatedUser } from '../middlewares/auth.js'
const router = express.Router()

router.route('/payment/process').post(
  isAuthenticatedUser,
  processPayment
)
router.route('/stripeapikey').post(
  isAuthenticatedUser,
  sendStripeApiKey
)

export default router
