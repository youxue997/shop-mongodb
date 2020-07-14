/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const userDao = require('../dao/userDao');
const md5 = require('../utils/md5/md5');

//var userDao = user.addUser();

//1.注册：先查找用户是否存在，否则增加
async function addUser(user){
    var ret = await userDao.findByName(user.name);

    if(ret.success){

        return{success:false,msg:'用户已存在！！'};
    }else{
        var password=md5.toMd5(user.password);
        user.password=password;
        var data = await userDao.addUser(user);
        //因为在dao层已经做数据处理，直接返回
        return data;
    }
}

//2.登录：找出用户，然后密码比对
async function login(user){
    var ret = await userDao.findByName(user.name);
    //找到用户
    if(ret.success){
        var password = md5.toMd5(user.password);
        if(password==ret.user.password){
            return {success:true,user:ret.user};
        }else{
            return{success:false,msg:'用户密码不正确'}
        }
    }else{
        //找不到用户
        return {success:false,msg:'用户名不存在'}
    }
}
//对数据库里的密码进行md5验证，所以数据要进行密码验证
async function loginCookie(user){
    var ret = await userDao.findByName(user.name);
    //找到用户
    if(ret.success){
        var password = md5.toMd5(user.password);
        if(user.password==ret.user.password){
            return {success:true,user:ret.user};
        }else{
            return{success:false,msg:'用户密码不正确'}
        }
    }else{
        //找不到用户
        return {success:false,msg:'用户名不存在'}
    }
}


//共享
exports.addUser = addUser;
exports.login = login;
exports.loginCookie = loginCookie;