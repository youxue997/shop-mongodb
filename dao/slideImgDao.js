/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const slideImg = require('../models/slideImg');
//引用model
var slideImgModel = slideImg.slideImgModel;

//查询所有图片的路径
async function findAllSlideImgs() {
    try {
        var data = slideImgModel.find({});
        return data;
    }catch(e){
        console.log('findAllSlideImgs err in database!...')
    }
}

exports.findAllSlideImgs = findAllSlideImgs;