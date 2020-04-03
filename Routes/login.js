const express=require('express');
const router=express.Router();
const loginController=require('../Controller/login')


router.post('/signUp',loginController.postSignUpForm)

router.post('/login',loginController.postLoginForm)

router.post('/logout',loginController.postLogoutForm)






module.exports=router;