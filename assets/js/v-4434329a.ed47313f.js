"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5885],{3059:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-4434329a",path:"/web/js/backbonejs.html",title:"backbonejs",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[]}],filePathRelative:"web/js/backbonejs.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},4306:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var t=a(6252);const p=(0,t._)("h1",{id:"backbonejs",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#backbonejs","aria-hidden":"true"},"#"),(0,t.Uk)(" backbonejs")],-1),o={href:"http://backbonejs.org/",target:"_blank",rel:"noopener noreferrer"},e=(0,t.Uk)("http://backbonejs.org/"),c={href:"https://www.cnblogs.com/lyzg/p/5634565.html",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("我对Backbone.js的一些认识"),u=(0,t._)("h2",{id:"示例",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),(0,t.Uk)(" 示例")],-1),k={href:"https://github.com/liuyunzhuge/blog/tree/master/todos",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("todos"),r=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://code.jquery.com/jquery-1.11.3.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>JS Bin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>check<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请点击此处打卡<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>person-list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//       新建Model构造函数</span>\n        <span class="token keyword">var</span> People <span class="token operator">=</span> Backbone<span class="token punctuation">.</span>Model<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            name<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">//姓名</span>\n            ctime<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token comment">//打卡时间</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//     新建Collection构造函数</span>\n        <span class="token keyword">var</span> Peoples <span class="token operator">=</span> Backbone<span class="token punctuation">.</span>Collection<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token function-variable function">initialize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">models<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">.</span>view<span class="token punctuation">.</span>addOnePerson<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//add将Model添加进Collection，在这里调用View中定义的addOnePerson函数</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token comment">//     新建View构造函数</span>\n        AppView <span class="token operator">=</span> Backbone<span class="token punctuation">.</span>View<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            el<span class="token operator">:</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">initialize</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>peoples <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Peoples</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                    view<span class="token operator">:</span> <span class="token keyword">this</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//实例化一个Collection</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            events<span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token string">&quot;click #check&quot;</span><span class="token operator">:</span> <span class="token string">&quot;checkIn&quot;</span><span class="token punctuation">,</span> <span class="token comment">//绑定#check的click事件，并执行checkIn函数</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">checkIn</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> person_name <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;您的姓名是？&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>person_name <span class="token operator">==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    person_name <span class="token operator">=</span> <span class="token string">&quot;路人甲&quot;</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">var</span> ctime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                    name<span class="token operator">:</span> person_name<span class="token punctuation">,</span>\n                    ctime<span class="token operator">:</span> ctime\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>peoples<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token function-variable function">addOnePerson</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">model</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#person-list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&quot;</span> <span class="token operator">+</span> model<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;您好，您的打卡时间为：&quot;</span> <span class="token operator">+</span> model<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;ctime&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>\n                    <span class="token string">&quot;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> appview <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppView</span><span class="token punctuation">;</span> <span class="token comment">//实例化一个View，自动执行initialize中的函数</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>',1),b={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",o,[e,(0,t.Wm)(a)])]),(0,t._)("p",null,[(0,t._)("a",c,[l,(0,t.Wm)(a)])]),u,(0,t._)("p",null,[(0,t._)("a",k,[i,(0,t.Wm)(a)])]),r],64)}}}}]);