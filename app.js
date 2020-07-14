//引入包
const express = require('express');
const expressStatic = require('express-static');
const slideRouter = require('./routes/slide');
const dbConnect = require('./utils/db/mongodbConnect');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const viewRouter = require('./routes/views');
const childRouter = require('./routes/child');
const heRouter = require('./routes/he');
const sheRouter = require('./routes/she');
const mobRouter = require('./routes/mob');

//创建服务
var app = express();
//启动服务
app.listen(8081,function(err){
    if(!err){
        console.log('success...');
    }else{
        console.log('error...')
    }
})
dbConnect.dbConnect();
//启用body-parser
app.use(bodyParser.urlencoded({extend:true}))
//启用cookie
var keys = [];
for(var i=0;i<10000;i++){
    var str = 'abcd123$%%@'+Math.random(1000000);
    keys.push(str);
}
app.use(cookieParser());
app.use(cookieSession({
    name:'storeOnline',
    keys:keys,
    maxAge:20*60*1000
}))
//使用路由
app.use('/slide',slideRouter.router);
app.use('/user',userRouter.router);
app.use('/views',viewRouter.router);
app.use('/child',childRouter.router);
app.use('/he',heRouter.router);
app.use('/she',sheRouter.router);
app.use('/mob',mobRouter.router);
//起始页
//路由链
app.use('/',function(req,res,next){
    var options = {
        root:__dirname + '/www',
        ditfiles:'deny',
        headers:{
            'x-timestamp':Date.now(),
            'x-sent':true
        }
    }
    var url = req.url;
    //根文件夹与非根文件夹
    if(url.indexOf('/')==0&&url.length>1){
        next();
    }else{
    res.sendFile('index.html',options,function(err){
        if(err){
            cnsole.log('index.html is error!...');
        }
    })
    }
});
//静态页面访问
app.use(expressStatic('./www'));