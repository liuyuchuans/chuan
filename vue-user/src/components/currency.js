const cookieOperation = {
        //cname 名字
        //cvalue 值
        //exdays 时间            0.01大概25分钟
        setCookie : function (cname, cvalue) {
            document.cookie = cname + "=" + cvalue + ";";
        },
        //获取cookie
        getCookie : function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while(c.charAt(0) == ' ') c = c.substring(1);
                if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },

        //删除 cookie
        clearCookie : function(name) {
            setCookie(name, "", -1);
        },
        // 判断是否登陆
        judgelogin : function(name) {
            if(cookieOperation.getCookie(name)){
                return "next";
            }else {
                return "none";
            }
        }
}
export default cookieOperation;