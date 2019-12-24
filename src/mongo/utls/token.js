const jwt=require('jsonwebtoken');

//Token的生成和校验
const secret='xiaojingming';//密钥
/**
 * 
 * @param {string} data 加密数据
 * @param {number} expiresIn 有效时间(s)
 * @return {string}          返回的token
 */
function createtoken(data,expiresIn=3600){
    let token=jwt.sign(data,secret,{
        expiresIn
    });
    return token;
}

//token校验
function verify(token){
    let res=false;
    try{
        res=jwt.verify(token,secret);
        console.log(res);
        
    }catch(err){
        res=false
    }
    return res
}
module.exports={createtoken,verify}