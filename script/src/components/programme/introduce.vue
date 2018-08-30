<!-- 编程语言  编程语言介绍 -->
<template>
  <div class="hello">
    <div class="title">
      <span class="size">编程语言介绍</span>
      <p class="lineHeight">没有编程基础JavaScript教程</p>
    </div>
    <div class="">
        <span class="size lineHeight">Java</span>
        <p>首先我们先说一下Java,相信只要了解过编程的人就会听过Java,其如今依然展现出强势的增长势头，说其是目前最流行的编程语言也不为过。其可以用于各种各样的领域，包括企业应用及基础设施，以及Web应用和移动开发,其实会Java的人很多，但是精益的也就那么几个！！！</p>
    </div>
    <div class="">
        <span class="size lineHeight">C / C++</span>
        <p>C和C++都是基于C的语言,C常被用作系统以及应用程序的编程语言，如嵌入式系统的应用程序。。C++语言为C的增强，其在出现后迅速成为开发人员之间最流行的语言之一。它是用于开发系统软件，应用软件，设备驱动程序，嵌入式软件，高性能服务器和客户端应用及娱乐软件，如视频游戏。</p>
    </div>
    <div class="">
        <span class="size lineHeight">C#</span>
        <p>C#是微软公司发布的一种面向对象的、运行于.NET Framework之上的高级程序设计语言。C#是微软公司用来替代Java而开发的一种语言，并借鉴了Java，C，C++和Delphi的一些特点，如今C#已经成为微软应用商店和开发成员非常欢迎的开发语言。</p>
    </div>
     <div class="">
        <span class="size lineHeight">PHP</span>
        <p>PHP是一种通用开源脚本语言，特别适合于Web开发，可嵌入到HTML中，它最初是用来设计动态网页产生的。语法吸收了C语言、Java和Perl的特点，入门门槛较低，易于学习，使用广泛。</p>
    </div>
    <div class="">
        <span class="size lineHeight">Python</span>
        <p>Python是应用于设计各种各样的应用程序的动态语言， 往往比Tcl，Perl，Ruby，Scheme和Java更容易编写。Python语法简洁而清晰，具有丰富和强大的类库。它常被昵称为胶水语言，它能够很轻松的把用其他语言制作的各种模块（尤其是C/C++）轻松地联结在一起。</p>
    </div>
    <div class="">
        <span class="size lineHeight">Ruby</span>
        <p>Ruby是一种动态的，侧重于简单个高效的开源语言，他是一个优雅的语法，能够很自然的阅读和编写，适合于快速开发，一般开发效率是JAVA的5倍。</p>
    </div>
    <div class="">
        <span class="size lineHeight">Objective-C</span>
        <p>对于钟情于Apple设备的网友来说，Objective-C的流行就得益于苹果的成功，其是增加了Smalltalk风格的消息在C编程语言中的反射，面向对象的语言。主要使用于苹果系统和GNUstep这两个使用OpenStep的标准的系统。随着苹果平台的巨大人气，如今Objective-C语言被人们逐渐知道。</p>
    </div>
    <div class="">
        <span class="size lineHeight">JavaScript</span>
        <p>来了，今天的主题来了JavaScript你看看名字你会发现他前面的Java 你肯定会觉得它和Java会有关系，我一开始学的时候我也觉得他和Java关系不可分离\(^o^)/~ 但是他是真的没有一点关系一点点关系都没有，为什么推荐你们第一门编程语言要学习JavaScipt呢? 好了不和你们卖关子了,其实这是我的认为JS是基于用户端的语言，说这一句可能有些人不他了解但是没关系，其实就是说你写的代码是在为用户操作页面的语言，说白了就是你要点击一个按钮要删除一个页面的元素，这个就是最简单的用户端语言</p>
        <p style="line-height: 36px;"> 当然你肯定会想学了他你能做什么，其实不是说你能干什么你会一中编程语言的话你就有功底了，学什么编程语言都没有这么痛苦了 </p>
        <p><router-link to="go" style="color:blue">让我带你走进编程的世界吧</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
   
  }
}
</script>

<style scoped>
  .hello{
    width: 70%;
    height: 100%;
    padding: 50px 50px 100px 220px;
    color: rgb(138, 138, 141);
  }
  .title{
    border-bottom: solid 1px #ced2d4;
  }
  .size{
    font-size: 22px;
  }
  .lineHeight{
    line-height: 60px;
  }
</style>
