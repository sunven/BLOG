"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3150],{1909:(e,s,l)=>{l.r(s),l.d(s,{data:()=>a});const a={key:"v-c549d2ba",path:"/web/webpack/intro.html",title:"webpack",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"web/webpack/intro.md",git:{updatedTime:1626197174e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},7922:(e,s,l)=>{l.r(s),l.d(s,{default:()=>d});var a=l(6252);const p=(0,a._)("h1",{id:"webpack",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),(0,a.Uk)(" webpack")],-1),r=(0,a._)("p",null,"1.mkdir webpack-test 2.cd webpack-test 3.npm init 4.npm install webpack --save-dev 5.ls （查看当前目录子目录） 6 webpack hello.js hello.bundle.js 7.command not found 8.npm install webpack -g 9 webpack 支持 AMD common.js es6 模块化 （ Commonjs 解决了模块化的问题，Commonjs 是同步加载模块，当要用到该模块了，现加载现用； 浏览器里考虑加载速度性能，又出了个规范，可以实现异步加载依赖模块，并且会提前加载那就是 AMD 规范；代表 require.js;",-1),t=(0,a._)("p",null,"AMD 和 CMD 明显不同的地方是调用，和声明依赖的地方。AMD 和 CMD 都是用 difine 和 require，但是 CMD 标准倾向于在使用过程中提出依赖，就是不管代码写到哪突然发现需要依赖另一个模块，那就在当前代码用 require 引入就可以了，规范会帮你搞定预加载，你随便写就可以了。但是 AMD 标准让你必须提前在头部依赖参数部分写好（没有写好？ 倒回去写好咯）。这就是最明显的区别, 代 Sea.js。",-1),n={href:"http://www.cnblogs.com/qianshui/p/5216580.html?utm_source=tuicool&utm_medium=referral",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("http://www.cnblogs.com/qianshui/p/5216580.html?utm_source=tuicool&utm_medium=referral"),o=(0,a.uE)("<p>） 10 天生不支持 css 文件打包，会报错 需要安装 css-loader,并在 require 的时候指定 require(&#39;css-loader!./style.css&#39;)</p><p>11 加上 css-loader 不会报错 但是不显示 style.css 样式 需要安装 sty-loader,并在 require 的时候指定 require(&#39;style-loader!css-loader!./style.css&#39;)</p><p>注意先 style-loader 后 css-loader 否则会报错</p><p>13 这里 css-loader 是使 webpack 可以处理 css 文件 style-loader 是使页面创建 style 标签插入我们的 css 文件内容</p><p>14 通过命令行工具 不必在 require 的时候指定 命令行输入 webpack hello.js hello.bundle.js --module-bind &#39;css=style-loader!css-loader&#39;</p><p>15 通过命令行 在后面追加 --watch 可以避免每次都繁琐的手动输入 --progress 看见打包过程 --display-modules 看见所有打包模块 --display-reasons 看见为什么打包模块的原因</p><p>总结： 1webpack 安装 2webpack 命令行打包 3webpack 引入 css js 打包,并使得 html 里面的 css 生效 4webpack 相关高级参数</p><p>第二节 1.默认查找 webpack.config.js 配置,可通过设置 webpack --config webpack.dev.config.js 来指定执行的配置文件</p><p>entry webpack 打包入口 三种方式 1 字符串 指定一个入口文件 所有的依赖指定到一个入口文件 2 数组 解决多个平行的不相依赖的文件确想打包在一起 3 对象 多页面应用程序中用到（需要对应改 output 用占位符,否则后生成的会覆盖前面的）</p><p>output 占位符 三种方式 1 name 2 hash （本次打包的版本号） 3 chunkhash (本次打包文件的版本号)</p><p>入口页面 index.html 借用 webpack 插件解决打包后的文件自动引用文件路径的问题,自动化生成 index.html 安装 npm install html-webpack-plugin --save-dev 可配置文件输出路径和 js 文件生成在 index.html 文件的中的位置（head ,body） 借用 cdn 压缩 删除注释 多页面配置</p><p>loader 处理资源文件返回新的资源，可以串联使用，有同步异步用法</p><p>安装 less npm install less--save-dev 处理 less 文件 安装 less-loader npm install less-loader --save-dev</p><p>处理项目中模板文件 npm install html-loader --save-dev</p><p>图片文件处理 css 中 模板文件中 入口 html 中</p><p>npm install file-loader --save-dev 模板中引入相对路径不打包 可以用 require 的方式 npm install url-loader --save-dev 可以设置文件的 limit 当小于这个范围就会转为 base64,否则丢给 file-loader npm install image-webpack-loader --save-dev</p>",16),d={render:function(e,s){const l=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,r,t,(0,a._)("p",null,[(0,a._)("a",n,[c,(0,a.Wm)(l)])]),o],64)}}}}]);