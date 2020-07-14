/**
 * Created by 吴紫晴 on 2020/6/20.
 */
const mongoose = require('mongoose');

var schema = mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    mem:String,
    kind:{
        type:String,
        default:'kid'
    }
})




var model = mongoose.model('wear',schema);

exports.model = model;