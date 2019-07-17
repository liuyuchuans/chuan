
/** 
 * type
 * problem 问题 
 * ES6
 * Css3
 * tool 工具
 * nodeJs
 * other 其他
 * JavaScript
 * */
export default{
    state:{
        detailData:[
            {
                id: 1,
                type: 'ES6',
                title: 'Promise',
                context:`<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <h3>Promise</h3>
      <p><strong>来这里你就是来对了 嘿嘿 今天来说一下 promise</strong></p>
      <p><strong>ECMAScript promise的到来就是为了解决AJAX嵌套的请求</strong></p>
      <pre class="hljs javascript"><code class="javascript">$.ajax({
          <span class="hljs-attr">url</span>: <span class="hljs-string">'./t1.txt'</span>,
          <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
          <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
              $.ajax({
                  <span class="hljs-attr">url</span>: <span class="hljs-string">'./t1.txt'</span>,
                  <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
                  <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                     $.ajax({
                        <span class="hljs-attr">url</span>: <span class="hljs-string">'./t1.txt'</span>,
                        <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
                        <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                          <span class="hljs-built_in">console</span>.log(data);
                        },
                        <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                           <span class="hljs-built_in">console</span>.log(err);
                        }
                       })
                    },
                  <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                      <span class="hljs-built_in">console</span>.log(err);
                  }
              })
            },
              <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                  <span class="hljs-built_in">console</span>.log(err);
              }
          })
      </code></pre>
      <p>promise 他是在未来 或者某一个时间 执行的一些事情；先简单的看看的Promise实例：</p>
      <pre class="hljs javascript"><code class="javascript">    <span class="hljs-comment">//此时的是一进页面就会执行的一个实例</span>
      <span class="hljs-keyword">var</span> promise1 =  <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span>{
          <span class="hljs-comment">// 当然这个 promise 不写 ajax 也行 随便写个if 判断也行 </span>
          $.ajax({
              <span class="hljs-attr">url</span>: <span class="hljs-string">'./t3.txt'</span>,
              <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
              <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                  <span class="hljs-comment">//当请求成功 调用promise 成功回调函数</span>
                  resolve(data);
              },
              <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                  <span class="hljs-comment">//当请求失败 调用 promise 失败回调函数</span>
                  reject(err);
              }
          })
      })
      <span class="hljs-comment">//promise1.then() 你可以看出来  第一个的回调函数是成功 第二个的回调函数是失败 </span>
      promise1.then(<span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
          <span class="hljs-built_in">console</span>.log(data);
      },(err)=&gt;{
          <span class="hljs-built_in">console</span>.log(err);
      })
      </code></pre>
      <p><strong>也许你会想现在不也和直接请求ajax一样吗没有什么区别 别着急吗？</strong></p>
      <pre class="hljs javascript"><code class="javascript"><span class="hljs-keyword">var</span> promise1 =  <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span>{
          $.ajax({
              <span class="hljs-attr">url</span>: <span class="hljs-string">'./t1.txt'</span>,
              <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
              <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                  resolve(data);
              },
              <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                  reject(err);
              }
          })
      })
      <span class="hljs-keyword">var</span> promise2 =  <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span>{
          $.ajax({
              <span class="hljs-attr">url</span>: <span class="hljs-string">'./t2.txt'</span>,
              <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
              <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                  resolve(data);
              },
              <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                  reject(err);
              }
          })
      })
      <span class="hljs-keyword">var</span> promise3 =  <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span>{
          $.ajax({
              <span class="hljs-attr">url</span>: <span class="hljs-string">'./t3.txt'</span>,
              <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
              <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                  resolve(data);
              },
              <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                  reject(err);
              }
          })
      })
      promise1.then(<span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
          <span class="hljs-built_in">console</span>.log(data);
      },(err)=&gt;{
          <span class="hljs-built_in">console</span>.log(err);
      })
      promise1.then(<span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
          <span class="hljs-built_in">console</span>.log(data);
      },(err)=&gt;{
          <span class="hljs-built_in">console</span>.log(err);
      })
      promise1.then(<span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
          <span class="hljs-built_in">console</span>.log(data);
      },(err)=&gt;{
          <span class="hljs-built_in">console</span>.log(err);
      })
      </code></pre>
      <p><strong>是不是这样看起来也挺繁琐 好了 不啰嗦了</strong></p>
      <pre class="hljs javascript"><code class="javascript"> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getTxt</span>(<span class="hljs-params">url</span>)</span>{
          <span class="hljs-comment">//此时的是一进页面就会执行的一个实例</span>
          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span>{
              <span class="hljs-comment">// 当然这个 promise 不写 ajax 也行 随便写个if 判断也行</span>
              $.ajax({
                  url,
                  <span class="hljs-attr">dataType</span>: <span class="hljs-string">'text'</span>,
                  <span class="hljs-attr">success</span>: <span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span>{
                      <span class="hljs-comment">//当请求成功 调用promise 成功回调函数</span>
                      resolve(data);
                  },
                  <span class="hljs-attr">error</span>: <span class="hljs-function"><span class="hljs-params">err</span> =&gt;</span> {
                      <span class="hljs-comment">//当请求失败 调用 promise 失败回调函数</span>
                      reject(err);
                  }
              })
          })
      }
      <span class="hljs-comment">//Promise.all() 里面只有一个参数 那就是一个数组 数组里面的每一项必须是一个promise 实例对象</span>
      <span class="hljs-comment">//当然 all 是什么意思 是全部  他要是只有一个没用请求过来的话 那就会直接执行 err 函数</span>
      <span class="hljs-comment">// 成功力的回调函数 只有一个参数 也是一个数组 里面装的是  3个请求过来的 数据</span>
      <span class="hljs-built_in">Promise</span>.all([getTxt(<span class="hljs-string">'t1.txt'</span>),getTxt(<span class="hljs-string">'t2.txt'</span>),getTxt(<span class="hljs-string">'t3.txt'</span>)]).then(<span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
          <span class="hljs-built_in">console</span>.log(data);
      },(err)=&gt;{
          <span class="hljs-built_in">console</span>.log(err);
      })
      </code></pre>
      <p><strong>promise  =》 承诺  状态一旦改变 就永远不会改变</strong></p>
      <p><strong>promise 常用的方法就这几个</strong><br>
      <strong>想了解更多 或者我现在说的你不了解 我都可以为你解释 请来简书评论我  谢谢大家</strong></p>
      
                </div>
              </div>`
            },
            {
                id: 2,
                type: 'ES6',
                title: 'nodeJS npm 上传自己的包',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <h4>相信做前端开发的同学对 npm install 包名 --save  这个命令是不是是不是很熟悉，今天就给大家说一下我们在npm上上传自己的包，在这里我只是给大家做个简单的实例</h4>
      <h6>【1】、打开npm官方网站   <a href="https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2F" target="_blank" rel="nofollow">https://www.npmjs.com/</a>
      </h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 354px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 50.470000000000006%;"></div>
      <div class="image-view" data-width="1920" data-height="969"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>【2】、把你的信息填上去</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 497px; max-height: 1336px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 190.74%;"></div>
      <div class="image-view" data-width="497" data-height="948">></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>然后点击 Create an Account （创建账户）</h6>
      <h6>【3】、打开你注册的邮箱</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 281px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 32.79%;"></div>
      <div class="image-view" data-width="857" data-height="281"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>他会给你发这样的一个邮箱，直接把这个链接复制到当前浏览器的新标签页就可以验证邮箱了 ，可以点击的点击就可以了</h6>
      <h6>【4】、点击出现这样的一个页面就可以了 ，主要是页面顶部没有提示你验证邮箱</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 345px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 49.18%;"></div>
      <div class="image-view" data-width="1889" data-height="929"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>【5】、打开终端，之前你要安装了node的环境并且 npm 命令存在，这里就不介绍安装node了毕竟是傻瓜式安装</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 595px; max-height: 376px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 63.190000000000005%;"></div>
      <div class="image-view" data-width="595" data-height="376"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>输入你刚才注册时的name &amp;&amp; 密码 &amp;&amp; 邮箱  他会提示你 Logged in as dell-chuan on <a href="https://links.jianshu.com/go?to=https%3A%2F%2Fregistry.npmjs.org%2F" target="_blank" rel="nofollow">https://registry.npmjs.org/</a>.（就是说你的账户等于在npm上登陆了）</h6>
      <h6>【6】、我们来做一个简单的插件来试一下</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 540px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 76.6%;"></div>
      <div class="image-view" data-width="705" data-height="540"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <div class="image-package">
      <div class="image-container" style="max-width: 693px; max-height: 496px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 71.57%;"></div>
      <div class="image-view" data-width="693" data-height="496"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <div class="image-package">
      <div class="image-container" style="max-width: 624px; max-height: 437px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 70.03%;"></div>
      <div class="image-view" data-width="624" data-height="437"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <div class="image-package">
      <div class="image-container" style="max-width: 586px; max-height: 384px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 65.53%;"></div>
      <div class="image-view" data-width="586" data-height="384"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <div class="image-package">
      <div class="image-container" style="max-width: 636px; max-height: 480px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 75.47%;"></div>
      <div class="image-view" data-width="636" data-height="480"><</div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>【7】、来到我们当前项目的根路径 输入(npm publish)命令</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 595px; max-height: 558px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 93.78%;"></div>
      <div class="image-view" data-width="595" data-height="558"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>他提示你上传成功</h6>
      <h6>【8】、随后我们随便找个空的文件夹</h6>
      <div class="image-package">
      <div class="image-container" style="max-width: 595px; max-height: 376px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 63.190000000000005%;"></div>
      <div class="image-view" data-width="595" data-height="376"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 525px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 75.0%;"></div>
      <div class="image-view" data-width="1024" data-height="768"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <h6>以后更新的话也是直接在当前目录下 执行(npm publish)命令 不过你要在package.json把包的版本修改一下</h6>
      
                </div>
              </div>`
            },
            {
                id: 3,
                type: 'ES6',
                title: '谷歌浏览器跨域设置',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <p>我想在实际开发中你肯定会遇到这样的报错 跨域  你懂得   不懂你查一下 同源策略</p>
      <br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 225px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 28.92%;"></div>
      <div class="image-view" data-width="778" data-height="225"></div>
      </div>
      <div class="image-caption">微信图片_20180710124306.png</div>
      </div>
      <p>话不多说教你配置       只限window系统</p>
      <p>1.右击你的 chrome 》点开属性  》 目标  然后把你目标里的路径粘贴下来你会看到这样的路径</p>
      <p>C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe</p>
      <p>2.把你的路径换成这样的</p>
      <p>C:\Users\Administrator\AppData\Local\Google\Chrome\Application\chrome.exe --disable-web-security --user-data-dir=C:\MyChromeDevUserData，--user-data-dir</p>
      <p>就是在你的路径里加上 一定要有一个空格</p>
      <p>--disable-web-security --user-data-dir=C:\MyChromeDevUserData，--user-data-dir</p>
      <p>3.点击应用   把浏览器重新启动 然后在右击 以管理员身份运行<br>
      打开浏览器你会发现</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 210px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 15.370000000000001%;"></div>
      <div class="image-view" data-width="1366" data-height="210"></div>
      </div>
      <div class="image-caption">微信图片_20180710125200.png</div>
      </div>
      <p>这回你的浏览器就不会宝 跨域的错误了   嘿嘿  分享一下好快乐呀</p>
      <p>没有好的评论  第一时间回复</p>
      
                </div>
              </div>`
            },
            {
                id: 4,
                type: 'ES6',
                title: 'npm install 命令参数的一些简写方式',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <p>在使用 npm install 命令时，有许多指定参数的命令是可以进行缩写的，本文就简单梳理一下。</p>
      <p>npm install本身有一个别名，即npm i，可以使用这种缩写方式来运行命令，打到简化的效果。</p>
      <p>以下为指定的一些命令行参数的缩写方式：</p>
      <p>-g<br>
      --global，缩写为-g，表示安装包时，视作全局的包。安装之后的包将位于系统预设的目录之下，一般来说</p>
      <p>-S<br>
      --save，缩写为-S，表示安装的包将写入package.json里面的dependencies。</p>
      <p>-D<br>
      --save-dev，缩写为-D，表示将安装的包将写入packege.json里面的devDependencies。</p>
      <p>-O<br>
      --save-optional缩写为-O，表示将安装的包将写入packege.json里面的optionalDependencies。</p>
      <p>-E<br>
      --save-exact缩写为-E，表示安装的包的版本是精确指定的。</p>
      <p>-B<br>
      --save-bundle缩写为-B，表示将安装的包将写入packege.json里面的bundleDependencies。</p>
      <p><a href="https://docs.npmjs.com/cli/install" target="_blank" rel="nofollow">https://docs.npmjs.com/cli/install</a>，参考来源。</p>
      
                </div>
              </div>`
            },
            {
                id: 5,
                type: 'ES6',
                title: '抓包工具Fiddler-使用教程',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <h4>下载就不说了百度自行解决</h4>
      <p>启动Fiddler，打开菜单栏中的 Tools &gt; Fiddler Options，打开“Fiddler Options”对话框。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 480px; max-height: 254px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 52.92%;"></div>
      <div class="image-view" data-width="480" data-height="254"></div>
      </div>
      <div class="image-caption">faf2b2119313b07e1ef9ea520fd7912397dd8c20.jpg</div>
      </div>
      <p>在Fiddler Options”对话框切换到“Connections”选项卡，然后勾选“Allow romote computers to connect”后面的复选框，然后点击“OK”按钮。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 480px; max-height: 319px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 66.46%;"></div>
      <div class="image-view" data-width="480" data-height="319"></div>
      </div>
      <div class="image-caption">d833c895d143ad4b8beffc9a81025aafa50f06a2.jpg</div>
      </div>
      <p>在本机命令行输入：ipconfig，找到本机的ip地址。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 480px; max-height: 223px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 46.46%;"></div>
      <div class="image-view" data-width="480" data-height="223"></div>
      </div>
      <div class="image-caption">3.jpg</div>
      </div>
      <p>打开android设备的“设置”-&gt;“WLAN”，找到你要连接的网络，在上面长按，然后选择“修改网络”，弹出网络设置对话框，然后勾选“显示高级选项”。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 407px; max-height: 381px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 93.61%;"></div>
      <div class="image-view" data-width="407" data-height="381"></div>
      </div>
      <div class="image-caption">4.jpg</div>
      </div>
      <p>在“代理”后面的输入框选择“手动”，在“代理服务器主机名”后面的输入框输入电脑的ip地址，在“代理服务器端口”后面的输入框输入8888，然后点击“保存”按钮。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 480px; max-height: 333px;">
      <div class="image-container-fill" style="padding-bottom: 69.38%;"></div>
      <div class="image-view" data-width="480" data-height="333"></div>
      </div>
      <div class="image-caption">5.jpg</div>
      </div>
      <p>然后启动android设备中的浏览器，访问百度的首页，在fiddler中可以看到完成的请求和响应数据。</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 480px; max-height: 269px;">
      <div class="image-container-fill" style="padding-bottom: 56.04%;"></div>
      <div class="image-view" data-width="480" data-height="269"></div>
      </div>
      <div class="image-caption">6.jpg</div>
      </div>
      
                </div>
              </div>`
            },
            {
                id: 6,
                type: 'ES6',
                title: 'http 八 种请求方式',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <p>根据HTTP标准，HTTP请求可以使用多种请求方法。</p>
      <p>HTTP1.0定义了三种请求方法： GET, POST 和 HEAD方法。</p>
      <p>HTTP1.1新增了五种请求方法：OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法。</p>
      <h3>1.GET</h3>
      <p>请求指定的页面信息，并返回实体主体。</p>
      <h3>2.HEAD</h3>
      <p>类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头</p>
      <h3>3.POST</h3>
      <p>向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。</p>
      <h3>4.PUT</h3>
      <p>从客户端向服务器传送的数据取代指定的文档的内容。</p>
      <h3>5.DELETE</h3>
      <p>请求服务器删除指定的页面。</p>
      <h3>6.CONNECT</h3>
      <p>HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。</p>
      <h3>7.OPTIONS</h3>
      <p>允许客户端查看服务器的性能。</p>
      <h3>8.TRACE</h3>
      <p>回显服务器收到的请求，主要用于测试或诊断。</p>
      
                </div>
              </div>`
            },
            {
                id: 7,
                type: 'ES6',
                title: '阿里图标库iconfont使用',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <p>话不多说   进入官网  <a href="https://www.iconfont.cn/" target="_blank" rel="nofollow">https://www.iconfont.cn/</a><br>
      搜索你想要的 ，比如【我的】<br>
      </p><div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 389px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 55.60000000000001%;"></div>
      <div class="image-view" data-width="1437" data-height="799"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      出来以后加入购物车<br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 361px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 51.629999999999995%;"></div>
      <div class="image-view" data-width="1414" data-height="730"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      点击购物车<p></p>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 529px; background-color: transparent;">
      <div class="image-container-fill" style="padding-bottom: 37.04%;"></div>
      <div class="image-view" data-width="1428" data-height="529"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div><br>
      <p>点击添加至项目  这时你如果没登录的话 ，会让你登陆随便选择一个登陆方式比如 github</p>
      
      <div class="image-package">
      <div class="image-container" style="max-width: 474px; max-height: 1150px;">
      <div class="image-container-fill" style="padding-bottom: 164.35%;"></div>
      <div class="image-view" data-width="474" data-height="779"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>登陆成功之后你可以选择新建也可以选择老的项目</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 473px; max-height: 1126px;">
      <div class="image-container-fill" style="padding-bottom: 160.89%;"></div>
      <div class="image-view" data-width="473" data-height="761"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>确定好之后会是这样一个页面，然后下载至本地</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 359px;">
      <div class="image-container-fill" style="padding-bottom: 51.42%;"></div>
      <div class="image-view" data-width="1406" data-height="723"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>下载后解压会是一些这样的文件</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 436px;">
      <div class="image-container-fill" style="padding-bottom: 56.620000000000005%;"></div>
      <div class="image-view" data-width="770" data-height="436"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>然后像我这样把字体文件和css文件拿到你的项目里</p>
      <div class="image-package">
      <div class="image-container" style="max-width: 295px; max-height: 340px;">
      <div class="image-container-fill" style="padding-bottom: 115.25000000000001%;"></div>
      <div class="image-view" data-width="295" data-height="340"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 437px;">
      <div class="image-container-fill" style="padding-bottom: 62.5%;"></div>
      <div class="image-view" data-width="1440" data-height="900"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 437px;">
      <div class="image-container-fill" style="padding-bottom: 62.5%;"></div>
      <div class="image-view" data-width="1440" data-height="900"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>看下效果</p>
      <br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 490px;">
      <div class="image-container-fill" style="padding-bottom: 47.48%;"></div>
      <div class="image-view" data-width="1032" data-height="490"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>你还可以使用他的代码</p>
      <br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 374px;">
      <div class="image-container-fill" style="padding-bottom: 53.449999999999996%;"></div>
      <div class="image-view" data-width="1319" data-height="705"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>效果是一样的</p>
      <br>
      <div class="image-package">
      <div class="image-container" style="max-width: 700px; max-height: 652px;">
      <div class="image-container-fill" style="padding-bottom: 67.56%;"></div>
      <div class="image-view" data-width="965" data-height="652"></div>
      </div>
      <div class="image-caption">image.png</div>
      </div>
      <p>如果你是在Vue cli里面使用的话  你要把css引入到入口文件也就是main.js里  就可以在组件里使用了</p>
      
                </div>
              </div>`
            },
            {
                id: 8,
                type: 'ES6',
                title: 'vm vw vmin vmax',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <ul>
      <li>
      <p>vw、vh、vmin、vmax 是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（Viewport）大小来决定的，单位 1，代表类似于 1%。</p>
      <p>视窗(Viewport)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。</p>
      </li>
      <li>
      <p>具体描述：</p>
      <ol>
      <li>vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）</li>
      <li>vh：视窗高度的百分比</li>
      <li>vmin：当前 vw 和 vh 中较小的一个值</li>
      <li>vmax：当前 vw 和 vh 中较大的一个值</li>
      </ol>
      </li>
      <li><p>vw、vh 与 % 百分比的区别</p></li>
      </ul>
      <ol>
      <li>% 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。</li>
      <li>vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。</li>
      </ol>
      <ul>
      <li>vmin、vmax 用处</li>
      </ul>
      <ol>
      <li>做移动页面开发时，如果使用 vw、wh 设置字体大小（比如 5vw），在竖屏和横屏状态下显示的字体大小是不一样的。</li>
      <li>由于 vmin 和 vmax 是当前较小的 vw 和 vh 和当前较大的 vw 和 vh。这里就可以用到 vmin 和 vmax。使得文字大小在横竖屏下保持一致。</li>
      </ol>
      <ul>
      <li>浏览器兼容性</li>
      </ul>
      <p>桌面PC :<br>
      Chrome：自 26 版起就完美支持（2013年2月）<br>
      Firefox：自 19 版起就完美支持（2013年1月）<br>
      Safari：自 6.1 版起就完美支持（2013年10月）<br>
      Opera：自 15 版起就完美支持（2013年7月）<br>
      IE：自 IE10 起（包括 Edge）到现在还只是部分支持（不支持 vmax，同时 vm 代替 vmin）</p>
      <p>移动设备<br>
      Android：自 4.4 版起就完美支持（2013年12月）<br>
      iOS：自 iOS8 版起就完美支持（2014年9月）</p>
      
                </div>
              </div>`
            },
            {
                id: 9,
                type: 'ES6',
                title: '前端三大框架Angular、Vue、React',
                context: `<div data-note-content="" class="show-content">
                <div class="show-content-free">
                  <h2>Angular、Vue、React三大框架</h2>
      <p>前端炒的火热的莫非于三大框架，angular、vue、react，谈谈我对这三大框架的理解</p>
      <p>期初在前三四年或者更早，前端还没被完全分离出来，原生js开发前端页面，似乎并不优雅，好比我们盖房子，一块砖一块砖的盖，很耗时，也不方便维护，渐渐地jQuery库的产生，提高了开发人员的效率，减少了浏览器的兼容，一时间很多涨粉，到现在一些旧的项目仍然在使用，but，他没有mvc，mvvm构架，需要自己进行配置。</p>
      <p>后来出现了mvc框架的angular，这个效率比较低，只要发生变化，就得重新遍历计算；</p>
      <p>然后出现了react，react的虚拟dom减少了dom操作，降低了项目成本，提高效率和程序性能，但是react是基于view层的，他需要配合一些其他的框架，如flux,redux等，如果拿react跟vue比较的话，使用起来会相对复杂，比如，不能使用指令，遍历不方便，；</p>
      <p>而vue相对react而言，没有react灵活，搭配自如，但是他开发起来很高效，vue的插件，组件，生态系统对于我们一般的项目已经足够了，虽然vue的是个人主导的，react是Facebook团队维护的，社区比较繁荣，但vue适合很多项目，也正在慢慢的扩大，前景也是很不错的。</p>
      <h3>Angular</h3>
      <p>作为元老级的Angular，前后经angular1、angular2、angular4，每个版本似乎都是一个新的框架。</p>
      <p>angular1中的ng-if和vue的v-if很相像，因为vue的指令系统就是从angular1中获取的灵感，而且angular1中 的很多问题在vue中得以解决；</p>
      <p>到了angular2，他比起1来说，是一个全新的框架，比如说，有更优秀的组件系统，api也变了很多等等，虽然改进了很多，但还是很臃肿；</p>
      <p>相比于angular2，angular4的功能列表中添加了许多新功能，同时还有一些旧功能的改进，使用angular4程序将会消耗更少的空间，比起以前的版本运行的更快。</p>
      <p><strong>使用场景</strong></p>
      <p>当项目对性能要求不高的时候，可以使用angular，或者一些曾经一直用的angular1的项目有必要升级一下了，而且哪有不要求性能的项目，所以angular对于一些新型项目慎重考虑...</p>
      <h3>React</h3>
      <p>官方说react是因为Facebook对市场上的mvc框架都不满意，自己写了一套用来架构Instagram网站，因为好用，2013年5月开源的，到先在2017年底，react已经升级到了16.2，路由react-router3升为react-router4，react-router-dom</p>
      <p><strong>虚拟dom</strong></p>
      <p>react不得不提的是虚拟DOM(Virtual DOM)，当页面初次加载的时候会产生一颗dom树，内存中会产生一颗render树，当数据发生更改的时候，会将更改的内容和存有的render树进行对比，找出最优的算法，然后更改render树，最后重新生成页面的dom树，有了虚拟dom，前端的性能提高了很多。</p>
      <p><strong>组件化</strong></p>
      <p>react的组件化思想尤为体现，将view层分成各个独立的组件，降低耦合度，组件化使得组件间可组合，可重用，可维护，从而大大提高开发效率</p>
      <p><strong>灵活性</strong></p>
      <p>react是基于view层的，要想发挥他的作用，必须配合一些插件，例如flux，redux等，当然，可以配合更多的库来达到更好的效果</p>
      <p><strong>使用场景</strong></p>
      <p>react的使用基本上是大型项目的首选，组件化和灵活性是大型项目的条件，其次，react native可以让react运行在移动设备上。</p>
      <h3>Vue</h3>
      <p>Vue是2014年2月开源的，尤大牛主导的vue编写，到目前为止升级到了v2.5,vue的全家桶Vue-router,Vuex,服务端渲染，以及vue的虚拟dom，组件化，性能，不差于react，对于没有Angular 和react经验的团队，并且规模不是很大的前端项目来说，vue是一个很好的选择</p>
      <h3>总结</h3>
      <p>框架的选型不仅要看项目本身，还要综合公司团队，团队的技术栈可能直接导致项目框架的选型</p>
      
                </div>
              </div>`
            }
        ]
    }
}