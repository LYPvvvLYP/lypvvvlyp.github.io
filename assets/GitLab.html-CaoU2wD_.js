import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as s}from"./app-BpO3Vn9P.js";const l="/assets/download-i2QVTqeS.png",a={},d=s('<h1 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab"><span>GitLab</span></a></h1><p>gitlab 同 github 一样，也是一个源码托管开源平台。</p><h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd"><span>CI/CD</span></a></h2><p>CI (Continuous Integration)持续集成是指开发人员会持续的将代码更改提交到代码仓库中，更改会触发编译、测试等作业证明此次提交的代码是否满足预期要求，已确保新提交代码可以对原有代码进行集成，已防止新提交的代码造成部署后应用出现问题。</p><p>什么是 CD (Continuous Delivery)持续交付是指持续集成的进一步扩展，已经正常通过测试及验证代码的稳定性，下一步就是将代码部署在预发环境中，可以使用自动化的方式重复的进行频繁的交付，这可以避免因为人工配置错误等原因造成问题。</p><h2 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline"><span>pipeline</span></a></h2><p>GitLab 中通过 .gitlab-ci.yml 来定义 Pipeline、Stage、Job，该文件存在与项目的根目录下，当有代码提交时，将自动化触发到该流水线的作业。</p><p>stages 代表阶段，例如流水线会包括编译、部署、测试等步骤。</p><p>Job 代表作业，例如在编译阶段的作业是处理依赖等。</p><p><img src="'+l+`" alt=""></p><p>pipelines 由多个 job 组成，当全部 job 执行完后，pipelines 即为完成。</p><p>例子</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>stages:
  - build
  - deploy
  - test


default:
  before_script:
    - echo &#39;run some command before&#39;
  after_script:
    - echo &#39;run some command &#39;


prod-build:
  stage: build
  only:
    - master
  script:
    - echo &quot;run some dev build code&quot;

prod-deploy:
  stage: deploy
  only:
    - master
  script:
    - echo &quot;run some prd deploy code&quot;

prod-test:
  stage: test
  only:
    - master
  script:
    - echo &quot;run some prd test code&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h2><p>去到 Repository 下的 Branches 删除，如果有 protected 或 default，就去 settings 下的 Repository 设置。</p>`,15),t=[d];function r(c,o){return i(),n("div",null,t)}const u=e(a,[["render",r],["__file","GitLab.html.vue"]]),m=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA/GitLab.html","title":"GitLab","lang":"zh-CN","frontmatter":{"date created":"2022-11-13 23:28","date updated":"2022-11-14 14:03"},"headers":[{"level":2,"title":"CI/CD","slug":"ci-cd","link":"#ci-cd","children":[]},{"level":2,"title":"pipeline","slug":"pipeline","link":"#pipeline","children":[]},{"level":2,"title":"删除分支","slug":"删除分支","link":"#删除分支","children":[]}],"git":{"createdTime":1713887535000,"updatedTime":1713887535000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":1.4,"words":420},"filePathRelative":"计算机/GitLab.md","localizedDate":"2024年4月23日","excerpt":"\\n<p>gitlab 同 github 一样，也是一个源码托管开源平台。</p>\\n<h2>CI/CD</h2>\\n<p>CI (Continuous Integration)持续集成是指开发人员会持续的将代码更改提交到代码仓库中，更改会触发编译、测试等作业证明此次提交的代码是否满足预期要求，已确保新提交代码可以对原有代码进行集成，已防止新提交的代码造成部署后应用出现问题。</p>\\n<p>什么是 CD (Continuous Delivery)持续交付是指持续集成的进一步扩展，已经正常通过测试及验证代码的稳定性，下一步就是将代码部署在预发环境中，可以使用自动化的方式重复的进行频繁的交付，这可以避免因为人工配置错误等原因造成问题。</p>"}');export{u as comp,m as data};
