import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as o,b as s,e as a,d as e,a as t}from"./app-BpO3Vn9P.js";const c={},r=t(`<h1 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress"><span>Vuepress</span></a></h1><p>依赖</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># vuepress本体  hope主题</span>
<span class="token function">npm</span> <span class="token function">install</span> vuepress@next vuepress-theme-hope@latest <span class="token parameter variable">-S</span>
<span class="token comment"># vite打包器 hope主题搜索插件</span>
<span class="token function">npm</span> <span class="token function">install</span> @vuepress/bundler-vite@next vuepress-plugin-search-pro <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行"><span>运行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vuepress dev docs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有找到 vuepress 命令，就 everything 搜索出绝对路径</p><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.vuepress/
    styles/
        index.scss
    config.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>index.scss</code> 文件下定义段首缩进</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>config.js</code> 文件是基本配置和插件配置</p><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h2><h3 id="vuepress-theme-hope" tabindex="-1"><a class="header-anchor" href="#vuepress-theme-hope"><span>vuepress-theme-hope</span></a></h3>`,13),d={href:"https://theme-hope.vuejs.press/zh/guide/",target:"_blank",rel:"noopener noreferrer"},u=s("p",null,"提供较好的博客主题和功能。",-1),v=s("h2",{id:"静态资源引用",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#静态资源引用"},[s("span",null,"静态资源引用")])],-1),m=s("p",null,"支持相对路径，可以无痛地迁移。",-1),g=s("h2",{id:"部署到-github-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#部署到-github-pages"},[s("span",null,"部署到 Github Pages")])],-1),k={href:"https://vuepress.vuejs.org/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<p><code>package.json</code> 文件添加</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/docs/.vuepress/config.js</code> 里添加</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// base: &quot;/&quot; 表示在 https://&lt;USERNAME&gt;.github.io/ 下</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&quot;lypvvvlyp.top&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一个 deploy.bat 脚本</p><div class="language-bat line-numbers-mode" data-ext="bat" data-title="bat"><pre class="language-bat"><code>cls

@REM 让 npm run build后面的命令能正常运行
@REM 会清空 dist 文件夹，所以必须每次都要 git init
call npm run docs:build

cd docs/.vuepress/dist

echo lypvvvlyp.top &gt; CNAME

git init
git add -A
git commit -m &#39;deploy&#39;

@REM -f 会覆盖所有的commit记录
git push -f https://github.com/LYPvvvLYP/lypvvvlyp.github.io.git master:main

cd.. &amp;&amp; cd.. &amp;&amp; cd..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接入-google-adsense" tabindex="-1"><a class="header-anchor" href="#接入-google-adsense"><span>接入 Google AdSense</span></a></h2><p><code>/docs/.vuepress/config.js</code> 里添加</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// google adsense</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">&quot;anonymous&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7499096830629066&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接入-google-analytics" tabindex="-1"><a class="header-anchor" href="#接入-google-analytics"><span>接入 Google Analytics</span></a></h2><p><code>/docs/.vuepress/config.js</code> 里添加</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// google analytics</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">async</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;https://www.googletagmanager.com/gtag/js?id=G-4DSLE79PWF&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag(&#39;js&#39;, new Date());

      gtag(&#39;config&#39;, &#39;G-4DSLE79PWF&#39;);
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function h(y,f){const n=p("ExternalLinkIcon");return l(),o("div",null,[r,s("p",null,[s("a",d,[a("vuepress-theme-hope"),e(n)])]),u,v,m,g,s("p",null,[s("a",k,[a("官网教程"),e(n)])]),b])}const j=i(c,[["render",h],["__file","Vuepress.html.vue"]]),q=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA/Vuepress.html","title":"Vuepress","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"运行","slug":"运行","link":"#运行","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"主题","slug":"主题","link":"#主题","children":[{"level":3,"title":"vuepress-theme-hope","slug":"vuepress-theme-hope","link":"#vuepress-theme-hope","children":[]}]},{"level":2,"title":"静态资源引用","slug":"静态资源引用","link":"#静态资源引用","children":[]},{"level":2,"title":"部署到 Github Pages","slug":"部署到-github-pages","link":"#部署到-github-pages","children":[]},{"level":2,"title":"接入 Google AdSense","slug":"接入-google-adsense","link":"#接入-google-adsense","children":[]},{"level":2,"title":"接入 Google Analytics","slug":"接入-google-analytics","link":"#接入-google-analytics","children":[]}],"git":{"createdTime":1713887535000,"updatedTime":1714974727000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":1.12,"words":335},"filePathRelative":"计算机/Vuepress.md","localizedDate":"2024年4月23日","excerpt":"\\n<p>依赖</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># vuepress本体  hope主题</span>\\n<span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> vuepress@next vuepress-theme-hope@latest <span class=\\"token parameter variable\\">-S</span>\\n<span class=\\"token comment\\"># vite打包器 hope主题搜索插件</span>\\n<span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> @vuepress/bundler-vite@next vuepress-plugin-search-pro <span class=\\"token parameter variable\\">-D</span>\\n</code></pre></div>"}');export{j as comp,q as data};
