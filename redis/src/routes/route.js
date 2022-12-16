const express=require("express");
const router=express.Router()
const controller=require('../controller')


router.get('/photos', controller.photos)
router.get("/demo",controller.demo  )









    






module.exports=router;