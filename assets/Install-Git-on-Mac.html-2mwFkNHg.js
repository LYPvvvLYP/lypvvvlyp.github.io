import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as l}from"./app-48rL9gLW.js";const n={};function t(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h3 id="方法一-通过-homebrew-安装" tabindex="-1"><a class="header-anchor" href="#方法一-通过-homebrew-安装"><span>方法一：通过 Homebrew 安装</span></a></h3><p>Homebrew 是 macOS 上非常流行的软件包管理器，使用它可以轻松安装 Git。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 Homebrew</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 Homebrew 安装 Git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二-通过-xcode-command-line-tools-安装" tabindex="-1"><a class="header-anchor" href="#方法二-通过-xcode-command-line-tools-安装"><span>方法二：通过 Xcode Command Line Tools 安装</span></a></h3><p>macOS 自带 Xcode Command Line Tools，可以通过它来安装 Git。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 Xcode Command Line Tools</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xcode-select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法三-通过-git-官方安装包" tabindex="-1"><a class="header-anchor" href="#方法三-通过-git-官方安装包"><span>方法三：通过 Git 官方安装包</span></a></h3><p>可以从 Git 官网下载适用于 macOS 的安装包，然后按照指引进行安装。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 打开 Git 官网下载页面</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">open</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://git-scm.com/download/mac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载并安装 Git 安装包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法四-通过-macports-安装" tabindex="-1"><a class="header-anchor" href="#方法四-通过-macports-安装"><span>方法四：通过 MacPorts 安装</span></a></h3><p>MacPorts 是 macOS 的另一个包管理工具，通过它也可以安装 Git。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 安装 MacPorts</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://distfiles.macports.org/MacPorts/MacPorts-2.7.1-10.15-Catalina.pkg)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 使用 MacPorts 安装 Git</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法五-通过编译源码安装" tabindex="-1"><a class="header-anchor" href="#方法五-通过编译源码安装"><span>方法五：通过编译源码安装</span></a></h3><p>对于高级用户，可以选择下载 Git 源码并自行编译安装。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 下载 Git 源码</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -O</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.30.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 解压缩源码文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -zxf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git-2.30.1.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 编译并安装</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> git-2.30.1</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prefix=/usr/local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> all</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> prefix=/usr/local</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const k=s(n,[["render",t],["__file","Install-Git-on-Mac.html.vue"]]),p=JSON.parse('{"path":"/zh/Computer/Install-Git-on-Mac.html","title":"Mac 安装 Git 的 5 种方法，仅用几行命令","lang":"zh-CN","frontmatter":{"date":"2024-11-17T14:36:50.000Z","updated":"2024-12-05T21:21:55.000Z","title":"Mac 安装 Git 的 5 种方法，仅用几行命令","shortTitle":"Mac 安装 Git","description":"详解在 Mac 上安装 Git 的步骤，涵盖 Homebrew 和 Xcode Command Line Tools 两种方法，帮助开发者快速配置版本控制系统，提升开发效率，适应专业项目需求。","category":["计算机"]Mac 安装 Git\\"博客文章写一个description，描述中包含专业术语，用于谷歌seo，用中文，字数在150字符以内，语气专业且吸引人。\\n"},"headers":[{"level":3,"title":"方法一：通过 Homebrew 安装","slug":"方法一-通过-homebrew-安装","link":"#方法一-通过-homebrew-安装","children":[]},{"level":3,"title":"方法二：通过 Xcode Command Line Tools 安装","slug":"方法二-通过-xcode-command-line-tools-安装","link":"#方法二-通过-xcode-command-line-tools-安装","children":[]},{"level":3,"title":"方法三：通过 Git 官方安装包","slug":"方法三-通过-git-官方安装包","link":"#方法三-通过-git-官方安装包","children":[]},{"level":3,"title":"方法四：通过 MacPorts 安装","slug":"方法四-通过-macports-安装","link":"#方法四-通过-macports-安装","children":[]},{"level":3,"title":"方法五：通过编译源码安装","slug":"方法五-通过编译源码安装","link":"#方法五-通过编译源码安装","children":[]}],"git":{"createdTime":1729862790000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":1.77,"words":531},"filePathRelative":"zh/Computer/Install Git on Mac.md","localizedDate":"2024年11月17日","excerpt":"<h3>方法一：通过 Homebrew 安装</h3>\\n<p>Homebrew 是 macOS 上非常流行的软件包管理器，使用它可以轻松安装 Git。</p>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 安装 Homebrew</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">/bin/bash</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"$(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -fsSL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># 使用 Homebrew 安装 Git</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">brew</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> git</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{k as comp,p as data};