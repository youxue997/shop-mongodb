/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const express = require('express');
const userService = require('../services/userService');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var router = express.Router();

router.post('/register',async (req,res,next)=>{
   var user = req.body;
    console.log(user+"12121");
    if(user==undefined||user=={}||user==[]){
        res.send({success:false,msg:'用户名与密码不能为空'});
    }else{
        data = await userService.addUser(user);
        console.log(data);
        if(data.success){
            //注册成功
            res.send({success:true,user:data.user});
        }else{
            res.send(data);
        }
    }
});

router.post('/login',async(req,res,next)=>{
    var user = req.body;
    var cookies = req.cookies;
    console.log(cookies);
    if(user==undefined||user=={}||user==[]){
        res.send({success:false,msg:'用户名与密码不能为空'});
    }else{
       var data = await userService.login(user);
        //登陆成功要进行seession与cookie
        if(data.success){
            //登陆成功，对cookie操作，同时也对session操作
            if(user.remember=='true'){
                res.cookie('user',data.user,{maxAge:7*24*60*1000});
            }
            //登陆之后立即记录
                req.session['user']=data.user;
        };
            res.send(data);
    }
})
//用户退出时清除session
router.use('/logout',(req,res)=>{
    var user = req.session['user'];
    if(user==null||user=={}||user==undefined){
        res.send('Havn\'t login in');
    }else{
        //req.session.destroy();
        //req.session.destory();
        res.send('/views/index.html');
    }
})
exports.router = router;