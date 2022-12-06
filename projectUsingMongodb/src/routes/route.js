const express=require("express");
const router=express.Router()
const userController=require("../controller/userController")
const clientController=require("../controller/clientController")
const mw=require("../middleware/middleware");


router.post("/register",userController.createUser)

router.get("/getAllUser", userController.getAllUser)

router.get("/getUserByName",userController.getUserByName)

router.post("/login",userController.login)

router.put("/updateUser", userController.updateUser)


module.exports=router