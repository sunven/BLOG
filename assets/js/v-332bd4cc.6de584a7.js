"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6945],{5076:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-332bd4cc",path:"/dotnet/designpatterns/flyweight.html",title:"享元模式",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"reference",slug:"reference",children:[]}],filePathRelative:"dotnet/designpatterns/flyweight.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},8134:(n,s,a)=>{a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t.uE)('<h1 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式" aria-hidden="true">#</a> 享元模式</h1><p>运用共享技术有效地支持大量细粒度的对象</p><p>内部状态：在享元对象的内部并且不会随着环境的改变而改变的共享部分</p><p>外部状态：随环境改变而改变的，不可以共享的状态</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token doc-comment comment">///  抽象享元类，提供具体享元类具有的方法</span>\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Flyweight</span>\n<span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token doc-comment comment">/// 具体方法</span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outstate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>外部状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> outstate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightImp</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">Flyweight</span></span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 内部状态</span>\n    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name"><span class="token keyword">string</span></span> _innerState<span class="token punctuation">;</span>\n    <span class="token comment">// 构造函数</span>\n    <span class="token keyword">public</span> <span class="token function">FlyweightImp</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> innerState<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        _innerState <span class="token operator">=</span> innerState<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token doc-comment comment">/// 享元类的实例方法</span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>outstate<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>外部状态<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>\n    <span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Operation</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">int</span></span> outstate<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;具体实现类: innerState {0}, outstate {1}&quot;</span><span class="token punctuation">,</span> _innerState<span class="token punctuation">,</span> outstate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token doc-comment comment">/// 享元工厂，负责创建和管理享元对象</span>\n<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightFactory</span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> Flyweight<span class="token punctuation">&gt;</span></span> DicFlyweight <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> Flyweight<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">Flyweight</span> <span class="token function">GetFlyweight</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> key<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>DicFlyweight<span class="token punctuation">.</span><span class="token function">ContainsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> DicFlyweight<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> flyweight <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">FlyweightImp</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        DicFlyweight<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> flyweight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> flyweight<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>调用：</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> item <span class="token keyword">in</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token class-name"><span class="token keyword">var</span></span> flyweight <span class="token operator">=</span> FlyweightFactory<span class="token punctuation">.</span><span class="token function">GetFlyweight</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    flyweight<span class="token punctuation">.</span><span class="token function">Operation</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nConsole<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>FlyweightFactory<span class="token punctuation">.</span>DicFlyweight<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> reference</h2>',8),e={href:"http://www.cnblogs.com/PatrickLiu/p/7792973.html",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("C#设计模式之十一享元模式（Flyweight Pattern）【结构型】"),o={href:"http://www.cnblogs.com/zhili/p/FlyweightPattern.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("C#设计模式(12)——享元模式（Flyweight Pattern）"),u={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",e,[c,(0,t.Wm)(a)])]),(0,t._)("p",null,[(0,t._)("a",o,[l,(0,t.Wm)(a)])])],64)}}}}]);