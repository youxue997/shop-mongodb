/**
 * Created by 吴紫晴 on 2020/6/20.
 */
const wear = require('../models/wear');


var wearModel = wear.model;
//查询一个类型的衣服
async function findByKind(kind){
    var data = await wearModel.find({kind:kind});
    console.log(data);
    return data;
}

exports.findByKind = findByKind;