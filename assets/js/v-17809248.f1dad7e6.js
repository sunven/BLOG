"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1308],{5572:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-17809248",path:"/dotnet/other/volatile.html",title:"volatile",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"reference",slug:"reference",children:[]}],filePathRelative:"dotnet/other/volatile.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},1154:(n,a,s)=>{s.r(a),s.d(a,{default:()=>r});var e=s(6252);const p=(0,e.uE)('<h1 id="volatile" tabindex="-1"><a class="header-anchor" href="#volatile" aria-hidden="true">#</a> volatile</h1><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name"><span class="token keyword">bool</span></span> _complete<span class="token punctuation">;</span>\n\n<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> toggle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>_complete<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            toggle <span class="token operator">=</span> <span class="token operator">!</span>toggle<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    t<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//让其他线程起来</span>\n    _complete <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    t<span class="token punctuation">.</span><span class="token function">Join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不使用volatile则会无线阻止</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><strong>Release下编译</strong></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',4),t={href:"http://igoro.com/archive/volatile-keyword-in-c-memory-model-explained/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Volatile keyword in C# – memory model explained"),l={href:"http://www.albahari.com/threading/part4.aspx#_Memory_Barriers_and_Volatility",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Memory Barriers and Volatility"),r={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[o,(0,e.Wm)(s)])]),(0,e._)("p",null,[(0,e._)("a",l,[c,(0,e.Wm)(s)])])],64)}}}}]);