<template>
    <div class="login-container-main" @keyup.enter="login">
        <!-- <spreadtable :options="option"></spreadtable> -->
        <!-- <grid ></grid> -->
        <!-- <el-alert
            v-if="successLogin"
            title="登陆成功,请稍后..."
            center
            type="success">
        </el-alert>
         <el-alert
            v-if="errorLogin"
            title="请输入正确的用户名 || 密码"
            type="warning"
            center
            show-icon>
        </el-alert>
        <div class="login-main">
            <el-form ref="AccountFrom" label-position="center" label-width="0px"
                class="demo-ruleForm login-container">
                <h3 class="title">系统登录</h3>
                <el-form-item v-if="form">
                    <el-input type="text" placeholder="账号" v-model="form.userMailbox"></el-input>
                </el-form-item>
                <el-form-item  v-if="form">
                    <el-input type="password"  placeholder="密码"  v-model="form.userPass"></el-input>
                </el-form-item>
                <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div> -->
        <!-- <mp :url='videoURL' :poster="poster"></mp> -->
        <!-- <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player> -->
        <!-- <video
            id="video1"
            class="video-js"
            controls
            controlsList="nodownload"
            preload="auto"
            width="100%"
            height="100px"
            data-setup='{"example_option":true}'
            ref="videoC"
          >
            <source
              id="sourceBox"
              src="https://cjddcloudtest.cailian.net/cjdd/resourse/20191027/180640AE-1572152648006.mp4"
              type="video/mp4"
            />
            <p class="vjs-no-js">不支持播放</p>
          </video> -->
          <!-- <video-player  class="video-player vjs-custom-skin"
  ref="videoPlayer" 
  :playsinline="true" 
  :options="playerOptions"
></video-player> -->
  <div class="pdf" v-show="fileType === 'pdf'">
    <p class="arrow">
    <!-- // 上一页 -->
    <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">Preview</span>
    {{currentPage}} / {{pageCount}}
    <!-- // 下一页 -->
    <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">Next</span>
    </p>
    <!-- // 自己引入就可以使用,这里我的需求是做了分页功能,如果不需要分页功能,只要src就可以了 -->
    <pdf
      :src="src" 
      :page="currentPage" 
      @num-pages="pageCount=$event" 
      @page-loaded="currentPage=$event" 
      @loaded="loadPdfHandler">
    </pdf>
  </div>
    </div>
</template>
 
<script>
import pdf from 'vue-pdf'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import {mapMutations} from 'vuex'
import Spreadtable from '../spreadtable'
import mp from '../mp4/mp4'
export default {
  name: 'login',
  data () {
    return  {
        currentPage: 0, // pdf文件页码
        pageCount: 0, // pdf文件总页数
        fileType: 'pdf', // 文件类型
　　　　　src: 'https://cjddcloudtest.cailian.net/cjdd/resourse/20191027/BCEA7E6A1572152597024.pdf', // pdf文件地址
       successLogin: false,
       errorLogin: false,
       option: {
            fullscreen: true,
        },
        videoURL:'https://cjddcloudtest.cailian.net/cjdd/resourse/20191027/180640AE-1572152648006.mp4',
        poster: '',
        playerOptions : {
    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
    autoplay: false, //如果true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 导致视频一结束就重新开始。
    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: 'zh-CN',
    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [{
      type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
      src: "https://cjddcloudtest.cailian.net/cjdd/resourse/20191027/180640AE-1572152648006.mp4" //url地址
    }],
    poster: "https://upload.jianshu.io/users/upload_avatars/13623636/b65d89a7-6115-479e-8004-18753e925b69?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp", //你的封面地址
    // width: document.documentElement.clientWidth, //播放器宽度
    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: false,
      fullscreenToggle: true  //全屏按钮
    }
}
    }
  },
  components:{
      Spreadtable,
      mp,
      videoPlayer,
      pdf
  },
  computed:{
      form(){
          return this.$store.state.loginData;
      }
  },
  created(){
      // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
　　　　this.src = pdf.createLoadingTask(this.src)
      let _this = this;
      document.onkeydown=function(event){
          var e = event || window.event || arguments.callee.caller.arguments[0];
          if(e && e.keyCode==13){
              _this.login();
          }
      };
  },
  
  // 事件处理函数
  methods: {
      // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
      changePdfPage (val) {
        // console.log(val)
        if (val === 0 && this.currentPage > 1) {
          this.currentPage--
          // console.log(this.currentPage)
        }
        if (val === 1 && this.currentPage < this.pageCount) {
          this.currentPage++
          // console.log(this.currentPage)
        }
      },

      // pdf加载时
      loadPdfHandler (e) {
        this.currentPage = 1 // 加载的时候先加载第一页
      },
      login(){
          var _this = this;
          if(this.form.userMailbox == "admin" && this.form.userPass === "520"){
              // 超级管理员 权限
              _this.$router.replace("/");
                this.$http.get(this.cookieOperation.$httpUrl + "/adminJurisdiction")
                    .then(function(data){
                       var datas = data.data.data.list;
                       _this.$store.commit('HomeDataChange',datas);
                       _this.cookieOperation.setCookie("token","admin");
                       _this.$router.replace("/");
                    })
                this.successLogin = true;
          }else if(this.form.userMailbox == "liuyuchuan" && this.form.userPass === "520"){
              // 管理员权限
                this.$http.get(this.cookieOperation.$httpUrl + "/liuyuchuanJurisdiction")
                    .then(function(data){
                       var datas = data.data.data.list;
                       _this.$store.commit('HomeDataChange',datas);
                       _this.cookieOperation.setCookie("token","liuyuchuan");
                       _this.$router.replace("/");
                    })
                
                this.successLogin = true;
          }else{
                this.errorLogin = true;
                setTimeout(()=>{
                    this.errorLogin = false;
                },2000)
          }
          
      }
  },
}
</script>
<style scoped > 
    .login-container-main{
        /* background-image: url("../../assets/login/login2.jpg"); */
        background-size:100% 100%;  
        width: 100%;
        height: 100%;
        
    }
    .login-container-main .login-main{
        background-image: none;
        width: 24%;
        padding: 50px;
        position: absolute;
        left: 36%;
        top: 10%;
        background: #f4f4f4;
        opacity: .9;
        margin-top: 20;
    }
</style>
