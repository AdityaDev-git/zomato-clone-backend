const express = require ("express");
require('dotenv').config()
const stripe = require ("stripe")(process.env.SECRETE_STRIPE_KEY)

const router = express.Router();

router.post("/checkout",async(req,res)=>{
    try {
        const session = await stripe.checkout.session.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items: req.body.items.map(item=>{
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name: item.name,
                        },
                        unit_amount: item.price*100
                    },
                    quantity: 1,
                }
            }),
            success_url:"http://localhost:3000/",
            cancel_url:"http://localhost:3000/details"
        })
        
        res.json({url:session.url})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports = router; 