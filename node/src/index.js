const express = require('express');
const cors = require("cors"); 
const app = express();
const mysql = require("mysql");
const options = {
    host: "localhost",
    user : "root",
    password: "521521",
    port: 3306,
    database: "blog",
    connectTimeout: 3000,
    multipleStatements: true
}
const conn = mysql.createConnection(options)
app.use(cors()); // 解决跨域
app.listen(8888,function(){
    console.log("服务启动成功");
})

conn.connect(function(err) {
    if (err) {
      console.error('连接失败: ' +  err.stack);
      return;
    }
    console.log('连接成功 Mysql');
  })
app.all('/login',function(req,res){
    conn.query('SELECT user_id,user_name,img FROM user where user_name = ' + '"' + req.query.name + '"' + "&& user_password = "+ '"' + req.query.password + '"' ,(e,r)=>{
        return res.json(new Result( {data: (r && r.length)? r : false}, req.query.name));
    })
})
app.all('/',function(req,res){
    return res.json({
        success: true
    });
})
function Result({data=false},name){
    if(data){
        this.token = name;
    }
    this.data = data;
    this.success = !!data
    this.hasErrors = !data
    if(!data){
        this.errorMessage = "用户名或密码错误"
    }else{
        this.errorMessage = null
    }
}