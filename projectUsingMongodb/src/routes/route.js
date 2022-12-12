const express=require("express");
const router=express.Router()
const userController=require("../controller/userController")
const redis=require('../controller/redis')
const mw=require("../middleware/middleware");


router.post("/register",userController.createUser)

router.get("/getAllUser", userController.getAllUser)

router.get("/getUserByName",userController.getUserByName)

router.post("/login",userController.login)

router.put("/updateUser", userController.updateUser)

 router.get("/redis",redis.getUserUsingRedis)


module.exports=router