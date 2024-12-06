import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as s,o as a}from"./app-48rL9gLW.js";const n={};function o(r,e){return a(),i("div",null,e[0]||(e[0]=[s('<p>Understanding the database tables and their relationships in Activiti is a crucial step to mastering the Activiti process engine. This article provides a detailed overview of the information stored in various tables in Activiti and their interrelations.</p><h2 id="overview-of-activiti-database-tables" tabindex="-1"><a class="header-anchor" href="#overview-of-activiti-database-tables"><span>Overview of Activiti Database Tables</span></a></h2><p>Activiti uses multiple database tables to store information about process definitions, process instances, tasks, historical data, and more. Here are some of the main tables and their functions:</p><h3 id="_1-act-re-series-tables-repository-tables" tabindex="-1"><a class="header-anchor" href="#_1-act-re-series-tables-repository-tables"><span>1. <code>ACT_RE_*</code> Series Tables (Repository Tables)</span></a></h3><ul><li><strong>ACT_RE_DEPLOYMENT</strong>: Stores deployment information. Each deployment of a process definition generates a record.</li><li><strong>ACT_RE_PROCDEF</strong>: Stores process definition information, including the process ID, name, version, etc.</li></ul><h3 id="_2-act-ru-series-tables-runtime-tables" tabindex="-1"><a class="header-anchor" href="#_2-act-ru-series-tables-runtime-tables"><span>2. <code>ACT_RU_*</code> Series Tables (Runtime Tables)</span></a></h3><ul><li><strong>ACT_RU_EXECUTION</strong>: Stores runtime process instance information. Each process instance corresponds to a record.</li><li><strong>ACT_RU_TASK</strong>: Stores runtime task information, including the task ID, name, assignee, etc.</li><li><strong>ACT_RU_IDENTITYLINK</strong>: Stores the relationship information between tasks and users or groups.</li><li><strong>ACT_RU_VARIABLE</strong>: Stores runtime process variable information.</li></ul><h3 id="_3-act-hi-series-tables-history-tables" tabindex="-1"><a class="header-anchor" href="#_3-act-hi-series-tables-history-tables"><span>3. <code>ACT_HI_*</code> Series Tables (History Tables)</span></a></h3><ul><li><strong>ACT_HI_PROCINST</strong>: Stores historical process instance information, recording completed process instances.</li><li><strong>ACT_HI_TASKINST</strong>: Stores historical task information, recording completed tasks.</li><li><strong>ACT_HI_VARINST</strong>: Stores historical process variable information.</li></ul><h2 id="relationships-between-tables" tabindex="-1"><a class="header-anchor" href="#relationships-between-tables"><span>Relationships Between Tables</span></a></h2><h3 id="_1-process-definition-and-deployment" tabindex="-1"><a class="header-anchor" href="#_1-process-definition-and-deployment"><span>1. Process Definition and Deployment</span></a></h3><ul><li>The <strong>ACT_RE_DEPLOYMENT</strong> table and the <strong>ACT_RE_PROCDEF</strong> table are linked through the <code>DEPLOYMENT_ID_</code> column. One deployment can include multiple process definitions.</li></ul><h3 id="_2-process-instances-and-tasks" tabindex="-1"><a class="header-anchor" href="#_2-process-instances-and-tasks"><span>2. Process Instances and Tasks</span></a></h3><ul><li>The <strong>ACT_RU_EXECUTION</strong> table and the <strong>ACT_RU_TASK</strong> table are linked through the <code>PROC_INST_ID_</code> column. One process instance can include multiple tasks.</li><li>The <code>EXECUTION_ID_</code> column in the <strong>ACT_RU_TASK</strong> table is linked to the <code>ID_</code> column in the <strong>ACT_RU_EXECUTION</strong> table, indicating which execution flow the task belongs to.</li></ul><h3 id="_3-tasks-and-users-groups" tabindex="-1"><a class="header-anchor" href="#_3-tasks-and-users-groups"><span>3. Tasks and Users/Groups</span></a></h3><ul><li>The <code>TASK_ID_</code> column in the <strong>ACT_RU_IDENTITYLINK</strong> table is linked to the <code>ID_</code> column in the <strong>ACT_RU_TASK</strong> table, indicating the relationship between tasks and users or groups.</li></ul><h3 id="_4-runtime-and-historical-data" tabindex="-1"><a class="header-anchor" href="#_4-runtime-and-historical-data"><span>4. Runtime and Historical Data</span></a></h3><ul><li>The <code>PROC_INST_ID_</code> column in the <strong>ACT_RU_EXECUTION</strong> table is linked to the <code>ID_</code> column in the <strong>ACT_HI_PROCINST</strong> table, recording both runtime and historical information of process instances.</li><li>The <code>ID_</code> column in the <strong>ACT_RU_TASK</strong> table is linked to the <code>ID_</code> column in the <strong>ACT_HI_TASKINST</strong> table, recording both runtime and historical information of tasks.</li></ul>',18)]))}const d=t(n,[["render",o],["__file","Database-Tables-in-Activiti.html.vue"]]),h=JSON.parse('{"path":"/Computer/Activiti/Database-Tables-in-Activiti.html","title":"Database Tables in Activiti: The Foundation of Management Processes","lang":"en-US","frontmatter":{"date":"2024-12-03T12:19:17.000Z","updated":"2024-12-04T13:30:47.000Z","title":"Database Tables in Activiti: The Foundation of Management Processes","shortTitle":"Database Tables in Activiti","description":"This article provides an in-depth analysis of the various database tables and their stored information in the Activiti process engine, revealing their interrelationships. Through detailed examples and clear explanations, help readers fully understand how to use Activiti library tables for efficient business process management and optimization. Whether you are a beginner or an experienced developer, this article will provide you with valuable knowledge and practical skills.","category":["Computer"],"tag":["Approval","Activiti"]Activiti 库表\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"Activiti 库表\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"Overview of Activiti Database Tables","slug":"overview-of-activiti-database-tables","link":"#overview-of-activiti-database-tables","children":[{"level":3,"title":"1. ACT_RE_* Series Tables (Repository Tables)","slug":"_1-act-re-series-tables-repository-tables","link":"#_1-act-re-series-tables-repository-tables","children":[]},{"level":3,"title":"2. ACT_RU_* Series Tables (Runtime Tables)","slug":"_2-act-ru-series-tables-runtime-tables","link":"#_2-act-ru-series-tables-runtime-tables","children":[]},{"level":3,"title":"3. ACT_HI_* Series Tables (History Tables)","slug":"_3-act-hi-series-tables-history-tables","link":"#_3-act-hi-series-tables-history-tables","children":[]}]},{"level":2,"title":"Relationships Between Tables","slug":"relationships-between-tables","link":"#relationships-between-tables","children":[{"level":3,"title":"1. Process Definition and Deployment","slug":"_1-process-definition-and-deployment","link":"#_1-process-definition-and-deployment","children":[]},{"level":3,"title":"2. Process Instances and Tasks","slug":"_2-process-instances-and-tasks","link":"#_2-process-instances-and-tasks","children":[]},{"level":3,"title":"3. Tasks and Users/Groups","slug":"_3-tasks-and-users-groups","link":"#_3-tasks-and-users-groups","children":[]},{"level":3,"title":"4. Runtime and Historical Data","slug":"_4-runtime-and-historical-data","link":"#_4-runtime-and-historical-data","children":[]}]}],"git":{"createdTime":1733409411000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"Computer/Activiti/Database Tables in Activiti.md","localizedDate":"December 3, 2024","excerpt":"<p>Understanding the database tables and their relationships in Activiti is a crucial step to mastering the Activiti process engine. This article provides a detailed overview of the information stored in various tables in Activiti and their interrelations.</p>\\n<h2>Overview of Activiti Database Tables</h2>"}');export{d as comp,h as data};