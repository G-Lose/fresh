//格式化返回前端的格式
function format({status=1,msg='success',data=[],authrization=''}={}){
    if(status==0){
        msg='fail'
    }
    return {
        status,
        msg,
        data,
        authrization
    }
}
module.exports=format