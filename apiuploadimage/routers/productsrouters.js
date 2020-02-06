const express=require('express')
const {productcontrollers}= require('../controllers')

const router=express.Router()

router.post('/postprod',productcontrollers.postproducts)


module.exports=router