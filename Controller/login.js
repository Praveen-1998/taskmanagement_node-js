const loginUser=require('../Models/login')
const bcrypt=require('bcryptjs');

//Posting SignUp Details

exports.postSignUpForm=(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password)
    loginUser.findOne({email:email}).then(user=>{
        console.log(user);
        if(user){
        res.json({msg:"email already exists..."});
        }
        //this is else part
        return bcrypt.hash(password,12).then(hashedPassword=>{
            let user=new loginUser({
                email:email,
                password:hashedPassword
            })
          return user.save().then(userDetails =>{
            res.json({
                user:userDetails,
                msg:"Registered Successfully Please Login..."})
        })
    })
    }).catch(err =>{
        console.log(err);
    })
}

//Posting Login Details and encryption using bcrypt js npm module

exports.postLoginForm=(req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;
    console.log(email,password)
    loginUser.findOne({email:email}).limit(1).sort({$natural:-1}).then(user=>{
        console.log(user)
        if(!user){
         res.json({msg : 'please register'})
        }
      return bcrypt.compare(password,user.password).then(doMatch=>{
            if(doMatch){
                req.session.isLoggedIn=true;
                 req.session.save();
                   res.json({
                       user:user.email,
                        isLoggedIn : req.session.isLoggedIn                 
                })
            }
        })
    }).catch(err=>{
        console.log(err);
    })
}

//Posting Logout Details

exports.postLogoutForm=(req,res,next)=>{
    req.session.destroy();
    res.json({msg:"Logged Out Successfully"})
}

