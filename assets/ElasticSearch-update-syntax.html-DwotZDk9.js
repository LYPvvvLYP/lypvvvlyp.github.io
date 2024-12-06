import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-48rL9gLW.js";const t={};function l(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="overwrite-update" tabindex="-1"><a class="header-anchor" href="#overwrite-update"><span>Overwrite Update</span></a></h2><p>You can use the <code>_update</code> API to update a single document. This method is suitable for cases where you need to overwrite the entire document.</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">POST /my_index/_update/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;doc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Updated Title&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Updated content.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partial-update" tabindex="-1"><a class="header-anchor" href="#partial-update"><span>Partial Update</span></a></h2><p>Sometimes, you only need to update certain fields of a document, rather than the entire document. Elasticsearch supports partial updates, updating only the specified fields.</p><p>Example:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">POST /my_index/_update/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;doc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Updated content.&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, only the <code>content</code> field is updated, while other fields in the document remain unchanged.</p><h2 id="script-update" tabindex="-1"><a class="header-anchor" href="#script-update"><span>Script Update</span></a></h2><p>You can also use a script to update documents. This method is particularly useful for performing calculations or conditional updates on existing fields.</p><p>Example:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">POST /my_index/_update/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;script&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;source&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ctx._source.view_count += params.count&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lang&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;painless&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;params&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;count&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bulk-update" tabindex="-1"><a class="header-anchor" href="#bulk-update"><span>Bulk Update</span></a></h2><p>When you need to update multiple documents at once, you can use the <code>_bulk</code> API for bulk updates. This method can significantly improve performance.</p><p>Example:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">POST /_bulk</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;update&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;_index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;my_index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;doc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Bulk updated content.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;update&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;_id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;_index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;my_index&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{ </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;doc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">&quot;content&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Another bulk updated content.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updating-nested-fields" tabindex="-1"><a class="header-anchor" href="#updating-nested-fields"><span>Updating Nested Fields</span></a></h2><p>Updating nested fields in Elasticsearch can be complex because nested objects are essentially separate documents. Updating nested fields typically requires a script update.</p><p>Assume we have an index containing order information, with each order containing a list of nested products. Now, suppose we want to update the price of the product &quot;Laptop&quot; in the order with <code>order_id</code> 1001. We can achieve this using the following script update:</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">POST /orders/_update/</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;script&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;source&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      for (int i = 0; i &lt; ctx._source.products.size(); i++) {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        if (ctx._source.products[i].name == params.product_name) {</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">          ctx._source.products[i].price = params.new_price;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">        }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      }</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;lang&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;painless&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;params&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;product_name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Laptop&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;new_price&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1300</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations"><span>Considerations</span></a></h2><ul><li><strong>Concurrency Control</strong>: When multiple clients are updating the same document concurrently, conflicts may occur. Use <code>_version</code> or <code>_seq_no</code> and <code>_primary_term</code> to achieve concurrency control.</li><li><strong>Performance Optimization</strong>: Bulk updates can improve performance, but ensure you choose a reasonable bulk size to avoid memory overflow.</li><li><strong>Script Security</strong>: Ensure script security to prevent the execution of malicious code when using script updates.</li></ul>`,22)]))}const r=i(t,[["render",l],["__file","ElasticSearch-update-syntax.html.vue"]]),k=JSON.parse('{"path":"/Computer/ElasticSearch/ElasticSearch-update-syntax.html","title":"ElasticSearch update syntax","lang":"en-US","frontmatter":{"date":"2024-12-03T19:17:12.000Z","updated":"2024-12-06T13:41:38.000Z","title":"ElasticSearch update syntax","shortTitle":"ElasticSearch update syntax","description":"Explore ElasticSearch update syntax to improve data modification efficiency. This guide covers key elements and practical techniques for updating syntax, helping developers achieve precise and efficient data update operations. An essential resource for IT professionals and developers to optimize ElasticSearch performance.","category":["Computer"],"tag":["ElasticSearch"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"ElasticSearch 更新语法\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"Overwrite Update","slug":"overwrite-update","link":"#overwrite-update","children":[]},{"level":2,"title":"Partial Update","slug":"partial-update","link":"#partial-update","children":[]},{"level":2,"title":"Script Update","slug":"script-update","link":"#script-update","children":[]},{"level":2,"title":"Bulk Update","slug":"bulk-update","link":"#bulk-update","children":[]},{"level":2,"title":"Updating Nested Fields","slug":"updating-nested-fields","link":"#updating-nested-fields","children":[]},{"level":2,"title":"Considerations","slug":"considerations","link":"#considerations","children":[]}],"git":{"createdTime":1733225961000,"updatedTime":1733493318000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":1.58,"words":474},"filePathRelative":"Computer/ElasticSearch/ElasticSearch update syntax.md","localizedDate":"December 4, 2024","excerpt":"<h2>Overwrite Update</h2>\\n<p>You can use the <code>_update</code> API to update a single document. This method is suitable for cases where you need to overwrite the entire document.</p>\\n<div class=\\"language-json line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"json\\" data-title=\\"json\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">POST /my_index/_update/</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">  \\"doc\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    \\"title\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Updated Title\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    \\"content\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"Updated content.\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,k as data};