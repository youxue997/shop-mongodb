/**
 * Created by 吴紫晴 on 2020/6/20.
 */
const express = require('express');
const wearService = require('../services/wearService');

var router = express.Router();


router.use('/cloths/details',async(req,res,next)=>{
    //找出所有的men wear
    var GET = req.query;
    var kind = GET.kind;
    if(kind==undefined||kind==null||kind=={}||kind==[]){
        kind = 'men';
    };
    var data = await wearService.findByKind(kind);
    res.send(data);
})

exports.router = router;