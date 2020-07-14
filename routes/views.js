/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const userServer = require('../services/userService');



var router = express.Router();


router.use('/loginPage.html',async function(req,res,next){
    var user = req.cookies.user;
    if(user==undefined||user=={}){
        console.log('ookies is null');
        next();
    }else if(user.role=='admin') {
        console.log('role admin isnt auto login')
        next();
    }else{
        //自动登录
        var data = await userServer.loginCookie(user);
        console.log("role user auto login!...")
        if(data.success){
            req.session.user=data.user;
            //这个过程是客户端发出的信息
            res.redirect('/views/pages/user1.html');
        }else{
            next();
        }
    }
});
//对pages里面的东西进行控制
router.use('/pages',function(req,res,next){
    var user=req.session.user;
    if(user==[]||user=={}||user==undefined||user==''){
        res.redirect('/views/loginPage.html');
    }else{
        next();
    }
});

router.use('/admin',function(req,res,next){
    var user=req.session.user;
    if(user==[]||user=={}||user==undefined||user==''){
        res.redirect('/views/loginPage.html');
    }else if(user.role=='user'){
        res.redirect('/views/loginPage.html');
    }else{
        next();
    }

})
//在views路由上做控制，登录使用控制
//进入pages下面的页面，必须是已登录状态，否则全部进入/views/loginPage.html
//router.user('/pages',(req,res,next)=>{
//    var user = req.session['user'];
//    if(user==null||user=={}||user==undefined||user==''){
//        res.redirect('/views/loginPage.html');
//    }else{
//        next();
//    }
//})

//router.use('/',function(req,res,next){
//    console.log('view /');
//    next();
//})
exports.router = router;