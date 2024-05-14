import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c,b as n,e,d as a,a as v}from"./app-BpO3Vn9P.js";const r={},t=n("h1",{id:"plantuml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plantuml"},[n("span",null,"PlantUML")])],-1),m=n("h2",{id:"网址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#网址"},[n("span",null,"网址")])],-1),u={href:"https://plantuml.com/zh/class-diagram",target:"_blank",rel:"noopener noreferrer"},o={href:"http://www.plantuml.com/plantuml/uml",target:"_blank",rel:"noopener noreferrer"},b=v(`<h2 id="本地生成" tabindex="-1"><a class="header-anchor" href="#本地生成"><span>本地生成</span></a></h2><p>需要 Graphviz 在环境变量里。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> plantuml.jar uml.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h2><p>图大了要设置 scale 和 dpi，scale 越小图片越大。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@startuml
skinparam dpi 400
scale 400 width
scale 400 height

accounts &lt;|-- CD_account
accounts &lt;|-- Check_account
accounts &lt;|-- Save_account
accounts o-- Bank
Time o-- Bank
Command o-- Bank
Command o-- accounts
CommandType *-- Command

class Time{
    -curMonth: int

    +Time(): Time

    +getTime(): int
    +passTime(month:int): void
}

enum CommandType{
    +CREATE
    +DEPOSIT
    +WITHDRAW
    +TRANSFER
    +PASS
    +INVALID
}

class Util{

}

class Command{
    -command: String
    -commandType: CommandType

    +Command(command: String): Command

    -validate(): boolean
    +toString(): String

    +getArgs(): List&lt;String&gt;
    +getCommandType(): commandType

    +toString(): String
}

class Bank{
    -accounts: List&lt;accounts&gt;
    -time: Time
    -invalidCommands: List&lt;Command&gt;

    +Bank(): Bank

    -addAccount(account: accounts): boolean
    -getAccountByID(id: String): accounts
    -transfer(fromID: String,toID: String,amount: BigDecimal): boolean

    +input(commands: List&lt;String&gt;): void
    +output(): List&lt;String&gt;
}

abstract class accounts{
    -{static} serialVersionUID: long

    -id: String
    -balance: BigDecimal
    -apr: BigDecimal
    -closed: boolean
    -relatedCommands: List&lt;Command&gt;

    +getID(): int
    +getAPR(): double
    +getBalance(): BigDecimal
    +addRelatedCommands(command: String): void

    +equals(obj: Object): boolean

    +accrueAPR(): void

    +deposit(amount: BigDecimal): boolean
    +withdraw(amount: BigDecimal): boolean

    +tryClose(): void
    +isClosed(): boolean

    +{abstract} output(): List&lt;String&gt;
}

class CD_account{
    +CD_account(id: String,apr: BigDecimal,amount: BigDecimal): CD_account

    +accrueAPR(): void

    +canDeposit(amount: BigDecimal): boolean
    +canWithdraw(amount: BigDecimal,curTime: Time): boolean

    +output(): List&lt;String&gt;
}

class Check_account{
    +Check_account(id: String,apr: BigDecimal): Check_account

    +canDeposit(amount: BigDecimal): boolean
    +canWithdraw(amount: BigDecimal,curTime: Time): boolean

    +output(): List&lt;String&gt;
}

class Save_account{
    +Save_account(id: String,apr: BigDecimal): Save_account

    +canDeposit(amount: BigDecimal): boolean
    +canWithdraw(amount: BigDecimal,curTime: Time): boolean

    +output(): List&lt;String&gt;
}
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function p(g,h){const i=s("ExternalLinkIcon");return d(),c("div",null,[t,m,n("p",null,[n("a",u,[e("介绍"),a(i)])]),n("p",null,[n("a",o,[e("在线生成"),a(i)])]),b])}const S=l(r,[["render",p],["__file","PlantUML.html.vue"]]),C=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA/PlantUML.html","title":"PlantUML","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"网址","slug":"网址","link":"#网址","children":[]},{"level":2,"title":"本地生成","slug":"本地生成","link":"#本地生成","children":[]},{"level":2,"title":"例子","slug":"例子","link":"#例子","children":[]}],"git":{"createdTime":1713887535000,"updatedTime":1713887535000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":0.92,"words":276},"filePathRelative":"计算机/PlantUML.md","localizedDate":"2024年4月23日","excerpt":"\\n<h2>网址</h2>\\n<p><a href=\\"https://plantuml.com/zh/class-diagram\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">介绍</a></p>\\n<p><a href=\\"http://www.plantuml.com/plantuml/uml\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">在线生成</a></p>\\n<h2>本地生成</h2>\\n<p>需要 Graphviz 在环境变量里。</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">java</span> <span class=\\"token parameter variable\\">-jar</span> plantuml.jar uml.txt\\n</code></pre></div>"}');export{S as comp,C as data};
