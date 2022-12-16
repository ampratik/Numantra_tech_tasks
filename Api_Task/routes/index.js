
const express=require("express");
const router=express.Router()
const fileController=require('../controllers/fileController')



router.post("/demo",fileController.removeDuplicate)

router.get("/getAverage",fileController.getAverage)

router.get("/getKeys",fileController.getKey)

router.get("/getBigNum",fileController.gretestNum)

router.get("/getError",fileController.getError)

router.get("/getData",fileController.getDataUsingAxios)


module.exports=router