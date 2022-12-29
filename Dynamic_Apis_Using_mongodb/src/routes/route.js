const express =require('express');
const router=express.Router()
const bookController=require('../controllers/Controller')


router.get('/getData',bookController.getData)

router.post('/createDoc',bookController.createDoc)

router.delete('/DeleteDoc',bookController.deleteDoc)

router.put('/UpdateDoc' ,bookController.UpdateDoc)





module.exports=router