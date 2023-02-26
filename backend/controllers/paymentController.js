import catchAsyncError from '../middlewares/catchAsyncError.js'
import stripe from 'stripe'
stripe(process.env.STRIPE_SECRET_KEY)

export const processPayment=catchAsyncError(
    async(req,res,next)=>{
        const myPayment=await stripe.PaymentIntents.create(
            {
                amount:req.body.amount,
                currentcy:'inr',
                metadata:{
                    compant:"BharatEcomme"
                }
            }
        )
        res.status(200).json({
            success:true,
            client_secret:myPayment.client_secret
        })
    }
)

export const sendStripeApiKey=catchAsyncError(
    async(req,res,next)=>{
        res.status(200).json({
            success:true,
            stripeApiKey:process.env.STRIPE_API_KEY
        })
    }
)