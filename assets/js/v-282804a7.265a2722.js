"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8827],{684:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-282804a7",path:"/tool/other/nuget.html",title:"NuGet更改包及缓存目录",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"tool/other/nuget.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},7810:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});const t=(0,n(6252).uE)('<h1 id="nuget更改包及缓存目录" tabindex="-1"><a class="header-anchor" href="#nuget更改包及缓存目录" aria-hidden="true">#</a> NuGet更改包及缓存目录</h1><p>查看文件夹位置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dotnet nuget locals all --list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;config&gt;\n    &lt;add key=&quot;dependencyVersion&quot; value=&quot;Highest&quot; /&gt;\n    &lt;add key=&quot;globalPackagesFolder&quot; value=&quot;c:\\packages&quot; /&gt;\n    &lt;add key=&quot;repositoryPath&quot; value=&quot;c:\\installed_packages&quot; /&gt;\n    &lt;add key=&quot;http_proxy&quot; value=&quot;http://company-squid:3128@contoso.com&quot; /&gt;\n&lt;/config&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>默认global‑packages位置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%userprofile%\\.nuget\\packages\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>全局NuGet.Config位置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%APPDATA%\\NuGet\\NuGet.Config\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>修改global‑packages路径</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;configuration&gt;\n  &lt;config&gt;\n     &lt;add key=&quot;globalPackagesFolder&quot; value=&quot;D:\\Packages\\NuGet\\global-packages&quot; /&gt;\n  &lt;/config&gt;\n&lt;/configuration&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',10),s={render:function(e,a){return t}}}}]);