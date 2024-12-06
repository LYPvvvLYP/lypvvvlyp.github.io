import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as t}from"./app-48rL9gLW.js";const n={};function l(o,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h2 id="displaying-gc-statistics" tabindex="-1"><a class="header-anchor" href="#displaying-gc-statistics"><span>Displaying GC Statistics</span></a></h2><p>Use the <code>-gc</code> option to display garbage collection-related statistics:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC      MU    CCSC   CCSU      YGC   YGCT   FGC    FGCT    GCT</span></span>
<span class="line"><span> 1024.0 1024.0  0.0   512.0   8192.0   4096.0   20480.0    10240.0   3200.0  1600.0 512.0  256.0       5    0.100    2      0.200  0.300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>S0C</strong> / <strong>S1C</strong>: Capacity of Survivor 0 and Survivor 1 spaces in the young generation Eden space (KB).</li><li><strong>S0U</strong> / <strong>S1U</strong>: Used space in Survivor 0 and Survivor 1 spaces in the young generation Eden space (KB).</li><li><strong>EC</strong>: Capacity of the Eden space in the young generation (KB).</li><li><strong>EU</strong>: Used space in the Eden space in the young generation (KB).</li><li><strong>OC</strong>: Capacity of the old generation (KB).</li><li><strong>OU</strong>: Used space in the old generation (KB).</li><li><strong>MC</strong>: Capacity of the Metaspace (KB).</li><li><strong>MU</strong>: Used space in the Metaspace (KB).</li><li><strong>CCSC</strong>: Capacity of the compressed class space (KB).</li><li><strong>CCSU</strong>: Used space in the compressed class space (KB).</li><li><strong>YGC</strong>: Number of young generation GCs.</li><li><strong>YGCT</strong>: Time spent on young generation GCs (seconds).</li><li><strong>FGC</strong>: Number of old generation GCs.</li><li><strong>FGCT</strong>: Time spent on old generation GCs (seconds).</li><li><strong>GCT</strong>: Total time spent on GCs (seconds).</li></ul><h2 id="displaying-class-loading-statistics" tabindex="-1"><a class="header-anchor" href="#displaying-class-loading-statistics"><span>Displaying Class Loading Statistics</span></a></h2><p>Use the <code>-class</code> option to display class loading-related statistics:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Loaded  Bytes  Unloaded  Bytes   Time</span></span>
<span class="line"><span>  1024  512000      100   50000   0.50</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>Loaded</strong>: Number of classes loaded.</li><li><strong>Bytes</strong>: Bytes occupied by loaded classes.</li><li><strong>Unloaded</strong>: Number of classes unloaded.</li><li><strong>Bytes</strong>: Bytes freed by unloaded classes.</li><li><strong>Time</strong>: Total time spent on class loading and unloading (seconds).</li></ul><h2 id="displaying-compiler-statistics" tabindex="-1"><a class="header-anchor" href="#displaying-compiler-statistics"><span>Displaying Compiler Statistics</span></a></h2><p>Use the <code>-compiler</code> option to display JIT compiler-related statistics:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -compiler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Compiled  Failed  Invalid  Time  FailedType  FailedMethod</span></span>
<span class="line"><span>   2048      2       0    15.00     1       MyClass::myMethod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>Compiled</strong>: Number of methods compiled.</li><li><strong>Failed</strong>: Number of methods that failed to compile.</li><li><strong>Invalid</strong>: Number of invalid compilations.</li><li><strong>Time</strong>: Total time spent on compilation (seconds).</li><li><strong>FailedType</strong>: Type of the last compilation failure.</li><li><strong>FailedMethod</strong>: Name of the method that failed last to compile.</li></ul><h2 id="displaying-gc-utilization-statistics" tabindex="-1"><a class="header-anchor" href="#displaying-gc-utilization-statistics"><span>Displaying GC Utilization Statistics</span></a></h2><p>Use the <code>-gcutil</code> option to display garbage collection-related memory utilization:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gcutil</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  S0     S1     E      O      M     CCS   YGC   YGCT   FGC    FGCT     GCT</span></span>
<span class="line"><span>  0.0   50.0   25.0  50.0   50.0  50.0     5    0.100   2     0.200   0.300</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>S0</strong> / <strong>S1</strong>: Memory utilization of Survivor 0 and Survivor 1 spaces in the young generation Eden space (%).</li><li><strong>E</strong>: Memory utilization of the Eden space in the young generation (%).</li><li><strong>O</strong>: Memory utilization of the old generation (%).</li><li><strong>M</strong>: Memory utilization of the Metaspace (%).</li><li><strong>CCS</strong>: Memory utilization of the compressed class space (%).</li><li><strong>YGC</strong>: Number of young generation GCs.</li><li><strong>YGCT</strong>: Time spent on young generation GCs (seconds).</li><li><strong>FGC</strong>: Number of old generation GCs.</li><li><strong>FGCT</strong>: Time spent on old generation GCs (seconds).</li><li><strong>GCT</strong>: Total time spent on GCs (seconds).</li></ul><h2 id="displaying-memory-area-capacity-and-usage" tabindex="-1"><a class="header-anchor" href="#displaying-memory-area-capacity-and-usage"><span>Displaying Memory Area Capacity and Usage</span></a></h2><p>Use the <code>-gccapacity</code> option to display the capacity and usage of memory areas (such as young generation, old generation, and permanent generation):</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gccapacity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> NGCMN    NGCMX     NGC     S0C     S1C     EC      OGCMN    OGCMX     OGC      OC       CCNM     CCNX    CCMX     CCSMN   CCSMX     CCSC     CCSU</span></span>
<span class="line"><span>  2048.0  8192.0  4096.0   512.0   512.0   3072.0  10240.0  20480.0  15360.0  10240.0  1024.0  2048.0  3072.0  1024.0  2048.0  1536.0   1024.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>NGCMN</strong>: Minimum capacity of the young generation (KB).</li><li><strong>NGCMX</strong>: Maximum capacity of the young generation (KB).</li><li><strong>NGC</strong>: Current capacity of the young generation (KB).</li><li><strong>S0C</strong> / <strong>S1C</strong>: Capacity of Survivor 0 and Survivor 1 spaces in the young generation Eden space (KB).</li><li><strong>EC</strong>: Capacity of the Eden space in the young generation (KB).</li><li><strong>OGCMN</strong>: Minimum capacity of the old generation (KB).</li><li><strong>OGCMX</strong>: Maximum capacity of the old generation (KB).</li><li><strong>OGC</strong>: Current capacity of the old generation (KB).</li><li><strong>OC</strong>: Capacity of the old generation (KB).</li><li><strong>CCNM</strong> / <strong>CCNX</strong>: Minimum and maximum capacities of the compressed class space (KB).</li><li><strong>CCMX</strong>: Current capacity of the compressed class space (KB).</li><li><strong>CCSMN</strong> / <strong>CCSMX</strong>: Minimum and maximum capacities of the compressed class space (KB).</li><li><strong>CCSC</strong>: Capacity of the compressed class space (KB).</li><li><strong>CCSU</strong>: Used space in the compressed class space (KB).</li></ul><h2 id="displaying-metaspace-capacity-and-usage" tabindex="-1"><a class="header-anchor" href="#displaying-metaspace-capacity-and-usage"><span>Displaying Metaspace Capacity and Usage</span></a></h2><p>Use the <code>-gcmetacapacity</code> option to display the capacity and usage of the JVM metadata area (Metaspace):</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">jstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -gcmetacapacity</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sample output:</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> MC       MU      CCSC    CCSU</span></span>
<span class="line"><span>  3200.0  1600.0  512.0  256.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Field explanations:</p><ul><li><strong>MC</strong>: Capacity of the Metaspace (KB).</li><li><strong>MU</strong>: Used space in the Metaspace (KB).</li><li><strong>CCSC</strong>: Capacity of the compressed class space (KB).</li><li><strong>CCSU</strong>: Used space in the compressed class space (KB).</li></ul>`,42)]))}const p=s(n,[["render",l],["__file","jstat-tool.html.vue"]]),h=JSON.parse('{"path":"/Computer/Java/jstat-tool.html","title":"jstat tool","lang":"en-US","frontmatter":{"date":"2024-12-03T15:07:29.000Z","updated":"2024-12-06T13:40:43.000Z","title":"jstat tool","shortTitle":"jstat tool","description":"The jstat tool is a powerful statistical analysis and data visualization tool that is widely used in various data processing scenarios. This article details the main functions, usage methods, and practical application cases of the jstat tool. By reading this article, you will learn how to use the jstat tool to efficiently analyze data, generate intuitive charts, and perform scientific statistical inferences. Whether you are a novice in data analysis or a professional data scientist, this blog post will provide you with valuable guidance and reference to help you achieve twice the result with half the effort in your work and research.","category":["Computer"],"tag":["JVM"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"jstat 工具\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"Displaying GC Statistics","slug":"displaying-gc-statistics","link":"#displaying-gc-statistics","children":[]},{"level":2,"title":"Displaying Class Loading Statistics","slug":"displaying-class-loading-statistics","link":"#displaying-class-loading-statistics","children":[]},{"level":2,"title":"Displaying Compiler Statistics","slug":"displaying-compiler-statistics","link":"#displaying-compiler-statistics","children":[]},{"level":2,"title":"Displaying GC Utilization Statistics","slug":"displaying-gc-utilization-statistics","link":"#displaying-gc-utilization-statistics","children":[]},{"level":2,"title":"Displaying Memory Area Capacity and Usage","slug":"displaying-memory-area-capacity-and-usage","link":"#displaying-memory-area-capacity-and-usage","children":[]},{"level":2,"title":"Displaying Metaspace Capacity and Usage","slug":"displaying-metaspace-capacity-and-usage","link":"#displaying-metaspace-capacity-and-usage","children":[]}],"git":{"createdTime":1733409411000,"updatedTime":1733493318000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"Computer/Java/jstat tool.md","localizedDate":"December 3, 2024","excerpt":"<h2>Displaying GC Statistics</h2>\\n<p>Use the <code>-gc</code> option to display garbage collection-related statistics:</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">jstat</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -gc</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">PI</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">D&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,h as data};