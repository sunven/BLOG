"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8308],{6220:(e,l,n)=>{n.r(l),n.d(l,{data:()=>i});const i={key:"v-de06eaaa",path:"/tool/other/npm.html",title:"npm 常用命令",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"其它",slug:"其它",children:[]},{level:2,title:"增",slug:"增",children:[]},{level:2,title:"删",slug:"删",children:[]},{level:2,title:"改",slug:"改",children:[]},{level:2,title:"查",slug:"查",children:[]},{level:2,title:"更新npm至最新版本",slug:"更新npm至最新版本",children:[]},{level:2,title:"npm源的配置",slug:"npm源的配置",children:[{level:3,title:"临时",slug:"临时",children:[]},{level:3,title:"持久使用",slug:"持久使用",children:[]},{level:3,title:"通过cnpm使用",slug:"通过cnpm使用",children:[]}]}],filePathRelative:"tool/other/npm.md",git:{updatedTime:1626352348e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},6507:(e,l,n)=>{n.r(l),n.d(l,{default:()=>a});const i=(0,n(6252).uE)('<h1 id="npm-常用命令" tabindex="-1"><a class="header-anchor" href="#npm-常用命令" aria-hidden="true">#</a> npm 常用命令</h1><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><ol><li><p><code>npm init</code>：会引导你创建一个package.json文件，包括名称、版本、作者这些信息等</p></li><li><p><code>npm root</code>：查看当前包的安装路径</p></li><li><p><code>npm root -g</code>：查看全局的包的安装路径</p></li><li><p><code>npm -v</code>：查看npm安装的版本</p></li><li><p><code>npm help</code>：查看帮助命令</p></li><li><p><code>npm set global=true</code>：设定安装模式</p></li><li><p><code>npm get global</code>：查看当前使用的安装模式</p></li><li><p><code>npm root -g</code>：查看全局包目录</p></li><li><p><code>npm ls -g</code>：查看全局包</p></li><li><p><code>npm ls -g --depth 0</code>：查看全局包</p></li><li><p><code>npm ls vue -g</code>：查看vue目录</p></li></ol><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2><ol><li><code>npm install &lt;moudleName&gt; -g</code> ：将包安装到全局环境中</li><li><code>npm install &lt;moudleName&gt; --save</code> ：本地安装</li><li><code>npm install express</code>：默认会安装express的最新版本</li><li><code>npm install express@3.0.6</code>：安装指定版本</li></ol><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2><ol><li><code>npm uninstall &lt;moudleName&gt;</code>：卸载node模块</li></ol><h2 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h2><ol><li><code>npm update &lt;moduleName&gt;</code>：更新node模块</li><li><code>npm rebuild &lt;moduleName&gt;</code>：用于更改包内容后进行重建</li></ol><h2 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h2><ol><li><code>npm view &lt;moudleName&gt; dependencies</code>：查看包的依赖关系</li><li><code>npm view &lt;moduleName&gt; repository.url</code>：查看包的源文件地址</li><li><code>npm view &lt;moduleName&gt; engines</code>：查看包所依赖的Node的版本</li><li><code>npm help folders</code>：查看npm使用的所有文件夹</li><li><code>npm list</code>：查看当前目录下已安装的node包</li><li><code>npm view &lt;moduleNames&gt;</code>：查看node模块的package.json文件夹</li><li><code>npm view &lt;moduleName&gt; &lt;labelName&gt;</code>：查看package.json文件夹下某个标签的内容</li><li><code>npm search &lt;packageName&gt;</code>：发布一个npm包的时候，需要检验某个包名是否已存在</li><li><code>npm outdated</code>：检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新</li><li><code>npm help json</code>：打开package.json</li></ol><h2 id="更新npm至最新版本" tabindex="-1"><a class="header-anchor" href="#更新npm至最新版本" aria-hidden="true">#</a> 更新npm至最新版本</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -g npm\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="npm源的配置" tabindex="-1"><a class="header-anchor" href="#npm源的配置" aria-hidden="true">#</a> npm源的配置</h2><h3 id="临时" tabindex="-1"><a class="header-anchor" href="#临时" aria-hidden="true">#</a> 临时</h3><blockquote><p>npm --registry https://registry.npm.taobao.org install express</p></blockquote><h3 id="持久使用" tabindex="-1"><a class="header-anchor" href="#持久使用" aria-hidden="true">#</a> 持久使用</h3><blockquote><p>npm config set registry https://registry.npm.taobao.org</p></blockquote><p>配置后可通过下面方式来验证是否成功</p><blockquote><p>npm config get registry</p></blockquote><p>或</p><blockquote><p>npm info express</p></blockquote><h3 id="通过cnpm使用" tabindex="-1"><a class="header-anchor" href="#通过cnpm使用" aria-hidden="true">#</a> 通过cnpm使用</h3><blockquote><p>npm install -g cnpm –registry=https://registry.npm.taobao.org</p></blockquote><h1 id="发布项目到npm" tabindex="-1"><a class="header-anchor" href="#发布项目到npm" aria-hidden="true">#</a> 发布项目到npm</h1><ol><li>在官网注册npm账号</li><li>用户验证，命令行执行</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm adduser \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="3"><li>发布模块，在模块的根文件夹执行</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ol start="4"><li>更新版本</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> npm version 0.0.4\n npm publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果是git库时，会为新版本号创建一条提交信息，package版本号会自动递增。</p>',32),a={render:function(e,l){return i}}}}]);