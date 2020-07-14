/**
 * Created by 吴紫晴 on 2020/6/19.
 */
const express = require('express');
const slideImgService = require('../services/slideImgService');

//var slideImgService = slideImgService
var router = express.Router();

router.use('/img',async function(req,res,next){
    var data = await slideImgService.findAllSlideImgs();
    //console.log(data);
    res.send(data);
})

exports.router = router;