/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const slideImgeDao = require('../dao/slideImgDao');

//查询所有slideImg图片
async function findAllSlideImgs(){
    var data = await slideImgeDao.findAllSlideImgs();
    //var imgsrcs = [];
    //for(var i=0;i<data.length;i++){
    //    imgsrcs.push(data[i].imgsrc);
    //}
    return data;
}

exports.findAllSlideImgs = findAllSlideImgs;