"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3926],{5783:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-4af908e0",path:"/dotnet/other/swagger.html",title:"Swagger的简单使用",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"basic auth",slug:"basic-auth",children:[]},{level:2,title:"SwaggerGenerator",slug:"swaggergenerator",children:[]},{level:2,title:"DocumentFilter",slug:"documentfilter",children:[]},{level:2,title:"reference",slug:"reference",children:[]}],filePathRelative:"dotnet/other/swagger.md",git:{updatedTime:1626107275e3,contributors:[{name:"sunven",email:"604164227@qq.com",commits:1}]}}},2208:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var p=a(6252);const e=(0,p.uE)('<h1 id="swagger的简单使用" tabindex="-1"><a class="header-anchor" href="#swagger的简单使用" aria-hidden="true">#</a> Swagger的简单使用</h1><h2 id="basic-auth" tabindex="-1"><a class="header-anchor" href="#basic-auth" aria-hidden="true">#</a> basic auth</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">OperationFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AddAuthorizationHeaderParameterOperationFilter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AddAuthorizationHeaderParameterOperationFilter</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IOperationFilter</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Apply</span><span class="token punctuation">(</span><span class="token class-name">Operation</span> operation<span class="token punctuation">,</span> <span class="token class-name">SchemaRegistry</span> schemaRegistry<span class="token punctuation">,</span> <span class="token class-name">ApiDescription</span> apiDescription<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> filterPipeline <span class="token operator">=</span> apiDescription<span class="token punctuation">.</span>ActionDescriptor<span class="token punctuation">.</span><span class="token function">GetFilterPipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> isAuthorized <span class="token operator">=</span> filterPipeline<span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>filterInfo <span class="token operator">=&gt;</span> filterInfo<span class="token punctuation">.</span>Instance<span class="token punctuation">)</span>\n            <span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span>filter <span class="token operator">=&gt;</span> filter <span class="token keyword">is</span> <span class="token class-name">IAuthorizationFilter</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name"><span class="token keyword">var</span></span> allowAnonymous <span class="token operator">=</span>\n            apiDescription<span class="token punctuation">.</span>ActionDescriptor<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetCustomAttributes</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AllowAnonymousAttribute<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthorized <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>allowAnonymous<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>operation<span class="token punctuation">.</span>parameters <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                operation<span class="token punctuation">.</span>parameters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>Parameter<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            operation<span class="token punctuation">.</span>parameters<span class="token punctuation">?.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Parameter</span>\n            <span class="token punctuation">{</span>\n                name <span class="token operator">=</span> <span class="token string">&quot;Authorization&quot;</span><span class="token punctuation">,</span>\n                @<span class="token keyword">in</span> <span class="token operator">=</span> <span class="token string">&quot;header&quot;</span><span class="token punctuation">,</span>\n                description <span class="token operator">=</span> <span class="token string">&quot;Basic HTTP Base64 encoded Header Authorization&quot;</span><span class="token punctuation">,</span>\n                required <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                type <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>',4),t={href:"https://stackoverflow.com/questions/30222117/http-basic-auth-with-swashbuckle-api-documentation",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("http basic auth with swashbuckle api documentation "),c=(0,p.uE)('<h2 id="swaggergenerator" tabindex="-1"><a class="header-anchor" href="#swaggergenerator" aria-hidden="true">#</a> SwaggerGenerator</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>c<span class="token punctuation">.</span><span class="token function">CustomProvider</span><span class="token punctuation">(</span><span class="token punctuation">(</span>defaultProvider<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CachingSwaggerProvider</span><span class="token punctuation">(</span>defaultProvider<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CachingSwaggerProvider</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ISwaggerProvider</span></span>\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConcurrentDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> SwaggerDocument<span class="token punctuation">&gt;</span></span> _cache <span class="token operator">=</span>\n        <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ConcurrentDictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> SwaggerDocument<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">readonly</span> <span class="token class-name">ISwaggerProvider</span> _swaggerProvider<span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token function">CachingSwaggerProvider</span><span class="token punctuation">(</span><span class="token class-name">ISwaggerProvider</span> swaggerProvider<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        _swaggerProvider <span class="token operator">=</span> swaggerProvider<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token return-type class-name">SwaggerDocument</span> <span class="token function">GetSwagger</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> rootUrl<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> apiVersion<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token class-name"><span class="token keyword">var</span></span> cacheKey <span class="token operator">=</span> <span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;{0}_{1}&quot;</span><span class="token punctuation">,</span> rootUrl<span class="token punctuation">,</span> apiVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_cache<span class="token punctuation">.</span><span class="token function">TryGetValue</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> <span class="token keyword">out</span> <span class="token class-name">SwaggerDocument</span> srcDoc<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            srcDoc <span class="token operator">=</span> _swaggerProvider<span class="token punctuation">.</span><span class="token function">GetSwagger</span><span class="token punctuation">(</span>rootUrl<span class="token punctuation">,</span> apiVersion<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//解决IApiExplorer读取接口错误的问题</span>\n            <span class="token class-name">ApiXmlDesc</span> ApiXmlDesc <span class="token operator">=</span> ApiXmlPath<span class="token punctuation">.</span><span class="token function">GetAllApiPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token comment">//求交集</span>\n            srcDoc<span class="token punctuation">.</span>paths <span class="token operator">=</span> <span class="token punctuation">(</span>\n                            <span class="token keyword">from</span> p <span class="token keyword">in</span> srcDoc<span class="token punctuation">.</span>paths\n                            <span class="token keyword">join</span> q <span class="token keyword">in</span> ApiXmlDesc<span class="token punctuation">.</span>MethodList\n                            <span class="token keyword">on</span> p<span class="token punctuation">.</span>Key<span class="token punctuation">.</span><span class="token function">Substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>Key<span class="token punctuation">.</span><span class="token function">LastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> equals q\n                            <span class="token keyword">select</span> p\n                           <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Union</span><span class="token punctuation">(</span>\n                            <span class="token keyword">from</span> p <span class="token keyword">in</span> srcDoc<span class="token punctuation">.</span>paths\n                            <span class="token keyword">join</span> q <span class="token keyword">in</span> ApiXmlDesc<span class="token punctuation">.</span>MethodList\n                            <span class="token keyword">on</span> p<span class="token punctuation">.</span>Key equals q\n                            <span class="token keyword">select</span> p\n                        <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToDictionary</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> e <span class="token operator">=&gt;</span> e<span class="token punctuation">.</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">//srcDoc.paths = ApiXmlDesc.MethodList;</span>\n            srcDoc<span class="token punctuation">.</span>vendorExtensions <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">object</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string">&quot;ControllerDesc&quot;</span><span class="token punctuation">,</span> ApiXmlDesc<span class="token punctuation">.</span>ControllerList <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n            _cache<span class="token punctuation">.</span><span class="token function">TryAdd</span><span class="token punctuation">(</span>cacheKey<span class="token punctuation">,</span> srcDoc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> srcDoc<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p><a href="webapi%E6%96%87%E6%A1%A3%E6%8F%8F%E8%BF%B0-swagger">webapi文档描述-swagger</a></p><h2 id="documentfilter" tabindex="-1"><a class="header-anchor" href="#documentfilter" aria-hidden="true">#</a> DocumentFilter</h2><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>c<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">DocumentFilter</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SwaggerAreasSupportDocumentFilter<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),l={href:"https://github.com/jianxuanbing/SwashbuckleEx/blob/master/SwashbuckleEx.WebApiTest/Selectors/SwaggerAreasSupportDocumentFilter.cs",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("https://github.com/jianxuanbing/SwashbuckleEx/blob/master/SwashbuckleEx.WebApiTest/Selectors/SwaggerAreasSupportDocumentFilter.cs"),u={href:"https://www.cnblogs.com/kellynic/p/6092879.html",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("Swagger 增加 DocumentFilter 隐藏不需要显示的接口"),k=(0,p._)("h2",{id:"reference",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),(0,p.Uk)(" reference")],-1),b={href:"http://www.cnblogs.com/jianxuanbing/p/7376757.html",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("Webapi文档描述-swagger优化"),d={href:"https://github.com/jianxuanbing/SwashbuckleEx",target:"_blank",rel:"noopener noreferrer"},g=(0,p.Uk)("https://github.com/jianxuanbing/SwashbuckleEx"),h={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,(0,p._)("p",null,[(0,p._)("a",t,[o,(0,p.Wm)(a)])]),c,(0,p._)("p",null,[(0,p._)("a",l,[r,(0,p.Wm)(a)])]),(0,p._)("p",null,[(0,p._)("a",u,[i,(0,p.Wm)(a)])]),k,(0,p._)("p",null,[(0,p._)("a",b,[m,(0,p.Wm)(a)])]),(0,p._)("p",null,[(0,p._)("a",d,[g,(0,p.Wm)(a)])])],64)}}}}]);