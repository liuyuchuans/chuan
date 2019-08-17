<template>
    <div class="home-head">
        <div class="home-head-container">
            <div class="home-head-title">
                <p class="h2">C&nbsp;个人博客</p>
            </div>
            <div class="home-head-nav">
                <ul>
                    <router-link :class="{'router-link-active':$route.fullPath == '/' && item.id == 1}" tag="li" v-for="item in HeaderState.nav" :key="item.id" :to="item.url">
                        {{ item.name }}
                    </router-link>
                </ul>
            </div>
            <div class="header_login_box">
                <span @click="drawer=true" v-if="!is_login">login</span>
                <Avatar v-if="is_login" size="large" :src="img_src" />
            </div>
        </div>
        <Drawer title="登陆" width="500px" :closable="false" v-model="drawer">
            <div class="drawer_login_box">
                <Input v-model="form.name"  placeholder="用户名" style="width: 200px" @keyup.enter.native="login" />
                <Input v-model="form.password" type="password" placeholder="密码" style="width: 200px"  @keyup.enter.native="login" />
            </div>
        </Drawer>
    </div>
</template>
<script>
    export default{
        name: 'home-header',
        data(){
            return {
               drawer: false,
               is_login: false,
               img_src: '',
               form:{
                   name: null,
                   password: null
                   
               }
            }
        },
        props:{
            HeaderState: Object
        },
        created(){
            var is_login = this.public.is_login();
            if(is_login.success){
                this.is_login = true;
                this.img_src = is_login.img_src;
            }
        },
        methods:{
            login(){
                let name = this.form.name;
                let password = this.form.password;
                if(!name){
                    this.$Message.error('请输入用户名');
                    return false;
                }else if(String(name).length < 3){
                    this.$Message.warning('用户名必须大于三位');
                    return false;
                }else if(!password){
                    this.$Message.error('请输入密码');
                    return false;
                }else if(String(password).length < 6){
                    this.$Message.warning('密码必须大于六位');
                    return false;
                }
                var _this = this;
                this.$http.get('/api/login',{
                    params:{ name, password }
                }).then((data)=>{
                    var data = data.data;
                    if(data.success){
                        _this.drawer = false;
                        _this.$Message.success('登陆成功');
                        window.sessionStorage.setItem('token',data.token);
                        window.sessionStorage.setItem('img_src',data.data[0].img);
                        _this.is_login = true;
                        _this.img_src = data.data[0].img;

                    }else{
                        _this.$Message.warning(data.errorMessage);
                    }
                },(err)=>{
                    this.$Message.error(err);
                })
            }
        }
    }
</script>
<style lang="scss">
    @media screen and (max-width: 960px){
        @import './scss/MobilePhone.scss';
    }
    @media (min-width: 960px){
        @import './scss/pc.scss';
    }
</style>>