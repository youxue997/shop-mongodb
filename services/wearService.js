/**
 * Created by 吴紫晴 on 2020/6/20.
 */
const wearDao = require('../dao/wearDao');

async function findByKind(kind){
    if(kind==null||kind==undefined||kind=={}||kind==[]){
        kind='kid';
    }
    try {
        //查询衣服，能返回
        var data = await wearDao.findByKind(kind);
        return {success:true,wears:data};
    }catch(e){
        //不能返回
        return{success:false,msg:'database is error!'};
    }
}

exports.findByKind = findByKind;