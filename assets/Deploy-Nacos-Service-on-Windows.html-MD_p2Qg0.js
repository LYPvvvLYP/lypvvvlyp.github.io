import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as t}from"./app-48rL9gLW.js";const n={};function l(r,e){return t(),i("div",null,e[0]||(e[0]=[a(`<h2 id="method-1-directly-running" tabindex="-1"><a class="header-anchor" href="#method-1-directly-running"><span>Method 1: Directly Running</span></a></h2><p>We can directly run Nacos&#39;s startup script to start the service.</p><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps</span></a></h3><ol><li>Download and extract the Nacos package.</li><li>Navigate to the <code>bin</code> directory.</li><li>Execute the startup command:<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">startup.cmd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="method-2-using-windows-service" tabindex="-1"><a class="header-anchor" href="#method-2-using-windows-service"><span>Method 2: Using Windows Service</span></a></h2><p>We can register Nacos as a Windows service to manage it automatically.</p><h3 id="steps-1" tabindex="-1"><a class="header-anchor" href="#steps-1"><span>Steps</span></a></h3><ol><li>Download and extract the Nacos package.</li><li>Download <code>nssm</code> (Non-Sucking Service Manager), an open-source Windows service manager.</li><li>Use <code>nssm</code> to install the Nacos service:<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">nssm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NacosServer</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;C:\\path\\to\\nacos\\bin\\startup.cmd&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="method-3-using-powershell-script" tabindex="-1"><a class="header-anchor" href="#method-3-using-powershell-script"><span>Method 3: Using PowerShell Script</span></a></h2><p>We can use a PowerShell script to start Nacos and deploy it as a service.</p><h3 id="steps-2" tabindex="-1"><a class="header-anchor" href="#steps-2"><span>Steps</span></a></h3><ol><li>Download and extract the Nacos package.</li><li>Create a PowerShell script <code>start-nacos.ps1</code> with the following content:<div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">Start-Process</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">FilePath </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;C:\\path\\to\\nacos\\bin\\startup.cmd&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li>Use <code>sc.exe</code> to create a service and set it to start automatically:<div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sc.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NacosService</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> binPath=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;powershell.exe -File C:\\path\\to\\start-nacos.ps1&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sc.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NacosService</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> auto</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sc.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> NacosService</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="method-4-using-task-scheduler" tabindex="-1"><a class="header-anchor" href="#method-4-using-task-scheduler"><span>Method 4: Using Task Scheduler</span></a></h2><p>We can use Windows Task Scheduler to schedule Nacos to start.</p><h3 id="steps-3" tabindex="-1"><a class="header-anchor" href="#steps-3"><span>Steps</span></a></h3><ol><li>Download and extract the Nacos package.</li><li>Open Task Scheduler and create a new task.</li><li>In the Actions tab, add a new action to start <code>startup.cmd</code> and set the trigger conditions and execution time.</li></ol>`,16)]))}const o=s(n,[["render",l],["__file","Deploy-Nacos-Service-on-Windows.html.vue"]]),c=JSON.parse(`{"path":"/Computer/Deploy-Nacos-Service-on-Windows.html","title":"Don't want to start the terminal every time? Come and learn how to deploy Nacos services on Windows","lang":"en-US","frontmatter":{"date":"2024-11-21T15:47:34.000Z","updated":"2024-12-05T21:39:45.000Z","title":"Don't want to start the terminal every time? Come and learn how to deploy Nacos services on Windows","shortTitle":"Deploy Nacos Service on Windows","description":"Comprehensively analyze the detailed steps and best practices for deploying Nacos services in Windows systems, covering environment configuration, startup, and management, helping developers to efficiently build a service discovery and configuration management center and optimize the microservice architecture.","category":["Computer"]},"headers":[{"level":2,"title":"Method 1: Directly Running","slug":"method-1-directly-running","link":"#method-1-directly-running","children":[{"level":3,"title":"Steps","slug":"steps","link":"#steps","children":[]}]},{"level":2,"title":"Method 2: Using Windows Service","slug":"method-2-using-windows-service","link":"#method-2-using-windows-service","children":[{"level":3,"title":"Steps","slug":"steps-1","link":"#steps-1","children":[]}]},{"level":2,"title":"Method 3: Using PowerShell Script","slug":"method-3-using-powershell-script","link":"#method-3-using-powershell-script","children":[{"level":3,"title":"Steps","slug":"steps-2","link":"#steps-2","children":[]}]},{"level":2,"title":"Method 4: Using Task Scheduler","slug":"method-4-using-task-scheduler","link":"#method-4-using-task-scheduler","children":[{"level":3,"title":"Steps","slug":"steps-3","link":"#steps-3","children":[]}]}],"git":{"createdTime":1732181208000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":1.03,"words":309},"filePathRelative":"Computer/Deploy Nacos Service on Windows.md","localizedDate":"November 21, 2024","excerpt":"<h2>Method 1: Directly Running</h2>\\n<p>We can directly run Nacos's startup script to start the service.</p>\\n<h3>Steps</h3>\\n<ol>\\n<li>Download and extract the Nacos package.</li>\\n<li>Navigate to the <code>bin</code> directory.</li>\\n<li>Execute the startup command:<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">startup.cmd</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div></li>\\n</ol>"}`);export{o as comp,c as data};