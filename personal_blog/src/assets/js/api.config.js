export var is_login = function(){
    let token = window.sessionStorage.getItem('token');  // 用户token
    let img_src   = window.sessionStorage.getItem('img_src'); //用户头像 
    if(token){
        return {
            img_src,
            success: true
        };
    }else{
        return {
            success: false
        };
    }
   
}
let query = window.location.hostname;
let GLOBAL_PATH;
if(query.indexOf('liuyuchuan') !== -1){
    GLOBAL_PATH = "http://www.liuyuchuan.cn:9595";
}else{
    GLOBAL_PATH = "/api";
}
export {
    GLOBAL_PATH
}