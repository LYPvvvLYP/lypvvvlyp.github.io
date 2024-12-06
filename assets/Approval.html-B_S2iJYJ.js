import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-48rL9gLW.js";const e={};function h(p,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="流程定义" tabindex="-1"><a class="header-anchor" href="#流程定义"><span>流程定义</span></a></h2><p>流程定义是指对整个审批流程进行系统化的规划和描述。它包括了流程的各个环节、步骤以及各个环节之间的顺序和关系。在编程实现中，流程定义通常以流程图或数据结构的形式存在，通过图形化或代码描述每个步骤的逻辑。</p><p>常用的审批流程实现框架有：</p><ul><li><strong>Activiti</strong>：一个轻量级的工作流和业务流程管理（BPM）平台。</li><li><strong>Camunda</strong>：一个支持 BPMN 2.0 标准的流程引擎，具有强大的扩展性和灵活性。</li><li><strong>Flowable</strong>：一个开源的 BPM 引擎，支持丰富的功能和复杂的流程定义。</li></ul><h2 id="流程实例" tabindex="-1"><a class="header-anchor" href="#流程实例"><span>流程实例</span></a></h2><p>流程实例是根据流程定义创建的具体审批流程。每一个具体的审批请求都会生成一个流程实例。流程实例反映了某个具体事务在审批流程中的进展情况。通过流程实例，我们可以追踪每个审批请求的状态和历史记录。</p><h2 id="审批节点" tabindex="-1"><a class="header-anchor" href="#审批节点"><span>审批节点</span></a></h2><p>审批节点是审批流程中的一个具体环节。每一个审批节点都有特定的审批条件和操作。审批节点可以是单一步骤的审批，也可以是需要多次审批的复合节点。在编程中，审批节点的实现通常涉及条件判断和流程控制。</p><h2 id="审批任务" tabindex="-1"><a class="header-anchor" href="#审批任务"><span>审批任务</span></a></h2><p>审批任务是指在审批节点处需要完成的具体工作。审批任务可能是简单的同意或拒绝操作，也可能涉及填写表单或上传附件等复杂操作。在编程中，审批任务的管理和分配通常通过任务队列或任务管理系统来实现。</p><h2 id="审批人" tabindex="-1"><a class="header-anchor" href="#审批人"><span>审批人</span></a></h2><p>审批人是指在审批流程中负责执行审批任务的人。审批人可能是某个具体的员工、团队负责人，或者是根据特定规则动态指定的人。在编程实现中，审批人的管理通常包括权限控制和任务分配。</p><h2 id="实现一个审批流数据库表" tabindex="-1"><a class="header-anchor" href="#实现一个审批流数据库表"><span>实现一个审批流数据库表</span></a></h2><h3 id="_1-流程定义表-process-definitions" tabindex="-1"><a class="header-anchor" href="#_1-流程定义表-process-definitions"><span>1. 流程定义表（Process_Definitions）</span></a></h3><p>存储流程定义的基本信息。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Process_Definitions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Process_Definition_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Description</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Created_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-流程实例表-process-instances" tabindex="-1"><a class="header-anchor" href="#_2-流程实例表-process-instances"><span>2. 流程实例表（Process_Instances）</span></a></h3><p>存储每个流程实例的信息。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Process_Instances</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Process_Instance_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Process_Definition_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Status</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Created_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Updated_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Process_Definition_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Definitions(Process_Definition_ID)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-审批节点表-approval-nodes" tabindex="-1"><a class="header-anchor" href="#_3-审批节点表-approval-nodes"><span>3. 审批节点表（Approval_Nodes）</span></a></h3><p>存储每个审批节点的信息。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Approval_Nodes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Node_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Process_Definition_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Description</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Process_Definition_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Definitions(Process_Definition_ID)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-审批任务表-approval-tasks" tabindex="-1"><a class="header-anchor" href="#_4-审批任务表-approval-tasks"><span>4. 审批任务表（Approval_Tasks）</span></a></h3><p>存储每个审批任务的信息。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Approval_Tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Task_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Process_Instance_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Node_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Assignee </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Status</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Created_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Completed_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Process_Instance_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Instances(Process_Instance_ID),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Node_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Approval_Nodes(Node_ID)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-审批人表-approvers" tabindex="-1"><a class="header-anchor" href="#_5-审批人表-approvers"><span>5. 审批人表（Approvers）</span></a></h3><p>存储所有审批人的信息。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Approvers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Approver_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Name</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Email </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOT NULL</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> UNIQUE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Role</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">255</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Created_At </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-审批日志表-approval-logs" tabindex="-1"><a class="header-anchor" href="#_6-审批日志表-approval-logs"><span>6. 审批日志表（Approval_Logs）</span></a></h3><p>存储每个审批任务的操作记录。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Approval_Logs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Log_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> AUTO_INCREMENT,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Task_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Approver_ID </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Action</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> VARCHAR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    Timestamp</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> TIMESTAMP</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Comments </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TEXT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Task_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Approval_Tasks(Task_ID),</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    FOREIGN KEY</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (Approver_ID) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">REFERENCES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Approvers(Approver_ID)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const r=i(e,[["render",h],["__file","Approval.html.vue"]]),A=JSON.parse('{"path":"/zh/Computer/Approval/Approval.html","title":"审批流程：入门","lang":"zh-CN","frontmatter":{"date":"2024-12-02T12:09:16.000Z","updated":"2024-12-03T12:00:43.000Z","title":"审批流程：入门","shortTitle":"审批","description":"全面解析审批流程：从基础知识到实战经验，帮助您掌握高效的审批方法。本指南涵盖审批流程的关键步骤、常见问题与解决方案，让您在业务中实现无缝流程管理。","category":["计算机"],"tag":["审批"]},"headers":[{"level":2,"title":"流程定义","slug":"流程定义","link":"#流程定义","children":[]},{"level":2,"title":"流程实例","slug":"流程实例","link":"#流程实例","children":[]},{"level":2,"title":"审批节点","slug":"审批节点","link":"#审批节点","children":[]},{"level":2,"title":"审批任务","slug":"审批任务","link":"#审批任务","children":[]},{"level":2,"title":"审批人","slug":"审批人","link":"#审批人","children":[]},{"level":2,"title":"实现一个审批流数据库表","slug":"实现一个审批流数据库表","link":"#实现一个审批流数据库表","children":[{"level":3,"title":"1. 流程定义表（Process_Definitions）","slug":"_1-流程定义表-process-definitions","link":"#_1-流程定义表-process-definitions","children":[]},{"level":3,"title":"2. 流程实例表（Process_Instances）","slug":"_2-流程实例表-process-instances","link":"#_2-流程实例表-process-instances","children":[]},{"level":3,"title":"3. 审批节点表（Approval_Nodes）","slug":"_3-审批节点表-approval-nodes","link":"#_3-审批节点表-approval-nodes","children":[]},{"level":3,"title":"4. 审批任务表（Approval_Tasks）","slug":"_4-审批任务表-approval-tasks","link":"#_4-审批任务表-approval-tasks","children":[]},{"level":3,"title":"5. 审批人表（Approvers）","slug":"_5-审批人表-approvers","link":"#_5-审批人表-approvers","children":[]},{"level":3,"title":"6. 审批日志表（Approval_Logs）","slug":"_6-审批日志表-approval-logs","link":"#_6-审批日志表-approval-logs","children":[]}]}],"git":{"createdTime":1733202711000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":3.64,"words":1093},"filePathRelative":"zh/Computer/Approval/Approval.md","localizedDate":"2024年12月2日","excerpt":"<h2>流程定义</h2>\\n<p>流程定义是指对整个审批流程进行系统化的规划和描述。它包括了流程的各个环节、步骤以及各个环节之间的顺序和关系。在编程实现中，流程定义通常以流程图或数据结构的形式存在，通过图形化或代码描述每个步骤的逻辑。</p>\\n<p>常用的审批流程实现框架有：</p>\\n<ul>\\n<li><strong>Activiti</strong>：一个轻量级的工作流和业务流程管理（BPM）平台。</li>\\n<li><strong>Camunda</strong>：一个支持 BPMN 2.0 标准的流程引擎，具有强大的扩展性和灵活性。</li>\\n<li><strong>Flowable</strong>：一个开源的 BPM 引擎，支持丰富的功能和复杂的流程定义。</li>\\n</ul>"}');export{r as comp,A as data};