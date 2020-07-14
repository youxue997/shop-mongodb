/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const mongoose = require('mongoose');

//建schema
var schema = mongoose.Schema({
    _id:Object,
    imgsrc:String
});

//2.model
var slideImgModel = mongoose.model('slide',schema);

exports.slideImgModel = slideImgModel;