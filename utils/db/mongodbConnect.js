/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const mongoose = require('mongoose');
//开启服务器
function dbConnect(){
    mongoose.connect('mongodb://localhost:27017/shoponline');
    mongoose.connection.once('open',function(err){
        if(err){
            console.log('MongoDb is not opening.....');
        }else{
            console.log('MonboDb is opening.....');
        }
    })
}

exports.dbConnect= dbConnect;