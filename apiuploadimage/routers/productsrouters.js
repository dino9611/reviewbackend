const express=require('express')
const {productcontrollers}= require('../controllers')

const router=express.Router()

router.post('/postprod',productcontrollers.postproducts)
router.post('/posttrans',productcontrollers.posttransaksi)
router.get('/gettrans',productcontrollers.gettrasnaksi)

module.exports=router