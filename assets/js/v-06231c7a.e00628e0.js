"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5020],{3028:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-06231c7a",path:"/dotnet/designpatterns/stragety.html",title:"策略模式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"reference",slug:"reference",children:[]}],filePathRelative:"dotnet/designpatterns/stragety.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},3291:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var p=a(6252);const t=(0,p.uE)('<h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><p>针对一组算法，将每个算法封装到具有公共接口的独立的类中，从而使它们可以相互替换</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IStragety</span>\n<span class="token punctuation">{</span>\n    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Send</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EmailStragety</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IStragety</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Send</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> msg<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;邮件通知：&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsStragety</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IStragety</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Send</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> msg<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;短信通知：&quot;</span> <span class="token operator">+</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">sealed</span> <span class="token keyword">class</span> <span class="token class-name">NotifyContext</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">NotifyContext</span><span class="token punctuation">(</span><span class="token class-name">IStragety</span> strategy<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Stragety <span class="token operator">=</span> strategy<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name">IStragety</span> Stragety <span class="token punctuation">{</span> <span class="token keyword">get</span><span class="token punctuation">;</span> <span class="token keyword">set</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Send</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> msg<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Stragety<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>调用：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">NotifyContext</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">EmailStragety</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncontext<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">&quot;新的消息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncontext<span class="token punctuation">.</span>Stragety <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">SmsStragety</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncontext<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token string">&quot;第二条消息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',6),e={href:"http://www.cnblogs.com/PatrickLiu/p/8057654.html",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("C#设计模式之十九策略模式（Stragety Pattern）【行为型】"),o={href:"http://www.cnblogs.com/zhili/p/StragetyPattern.html",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("C#设计模式(20)——策略者模式（Stragety Pattern）"),u={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("p",null,[(0,p._)("a",e,[c,(0,p.Wm)(a)])]),(0,p._)("p",null,[(0,p._)("a",o,[l,(0,p.Wm)(a)])])],64)}}}}]);