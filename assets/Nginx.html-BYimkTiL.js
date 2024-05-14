import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,a as s}from"./app-BpO3Vn9P.js";const a="/assets/Pasted%20image%2020221125150319-DjHmNsQz.png",d="/assets/Pasted%20image%2020221125150637-Bcgk_0Yg.png",l="/assets/Pasted%20image%2020221125150902-CMkXaOTV.png",r={},c=s('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>Nginx</span></a></h1><p>Nginx 是一个高性能的 HTTP 和反向代理服务器,特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，有报告表明能支持高 达 50,000 个并发连接数。</p><p>Nginx 通常被用来实现<strong>正向代理</strong>,<strong>反向代理，负载均衡，以及动静分离</strong>这四个功能。</p><p>nginx 可以（在一个主机上）多实例。</p><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理"><span>正向代理</span></a></h2><p><img src="'+a+'" alt=""></p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景</span></a></h3><p>正向代理的典型用途是为防火墙内的局域网客户端提供访问服务器的途径，正向代理还可以使用缓冲特性减少网络利用率。</p><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h2><p>反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器 地址，隐藏了真实服务器 IP 地址。</p><p><img src="'+d+'" alt=""></p><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1"><span>使用场景</span></a></h3><p>反向代理的典型用途是将防火墙外的服务器提供给客户端访问，反向代理还可以为后端的多台服务器提供负载均衡，或者为后端较慢的服务器提供缓冲服务。</p><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h2><p>负载均衡其实是在反向代理基础之上实现的</p><p>在 Nginx 中，一共提供了三种负载均衡策略供开发者灵活选择：</p><ul><li><strong>轮询(默认方式):</strong>  每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 down 掉，能自动剔除。</li><li><strong>权重(weight):</strong> weight 代表权重,默认为 1,权重越高被分配的客户端越多,权重越大，能力越大，责任越大，处理的请求就越多。</li><li><strong>ip_hash</strong>：每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题。</li></ul><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离"><span>动静分离</span></a></h2><p>动静分离就是把很少会发生修改的诸如图像，视频，css 样式等静态资源文件放置在单独的服务器上，而动态请求则由另外一台服务器上进行，这样一来，负责动态请求的服务器则可以专注在动态请求的处理上，从而提高了我们程序的运行效率，与此同时，我们也可以针对我们的静态资源服务器做专属的优化，增加我们静态请求的响应速度。</p><p>Nginx 动静分离简单来说就是把动态跟静态请求分开，不能理解成只是单纯的把动态页面和静态页面物理分离。严格意义上说应该是动态请求跟静态请求分开，可以理解成使用 Nginx 处理静态页面，Tomcat 处理动态页面。动静分离从目前实现角度来讲大致分为两种，</p><p><strong>一种是纯粹把静态文件独立成单独的域名，放在独立的服务器上，也是目前主流推崇的方案；</strong></p><p>另外一种方法就是动态跟静态文件混合在一起发布，通过 nginx 来分开，具体如何配置，后期 Nginx 实战会详细说明。</p><p><img src="'+l+`" alt=""></p><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p><code>/usr/local/nginx/conf/nginx.conf</code></p><p>按照功能划分，我们通常将 nginx 配置文件分为三大块，<strong>全局块，events 块，http 块</strong>。</p><h3 id="全局块" tabindex="-1"><a class="header-anchor" href="#全局块"><span>全局块</span></a></h3><p>设置一些影响 nginx 服务器整体运行的配置指令，主要包括配 置运行 Nginx 服务器的用户（组）、允许生成的 worker process 数，进程 PID 存放路径、日志存放路径和类型以及配置文件的引入等。</p><h3 id="events-块" tabindex="-1"><a class="header-anchor" href="#events-块"><span>events 块</span></a></h3><p>events 块涉及的指令主要影响 Nginx 服务器与用户的网络连接，常用的设置包括是否开启对多 work process 下的网络连接进行序列化，是否允许同时接收多个网络连接，选取哪种事件驱动模型来处理连接请求，每个 word process 可以同时支持的最大连接数等。</p><h3 id="http-块" tabindex="-1"><a class="header-anchor" href="#http-块"><span>http 块</span></a></h3><p>http 全局块配置的指令包括文件引入、MIME-TYPE 定义、日志自定义、连接超时时间、单链接请求数上限等。</p><p>而 http 块中的 server 块则相当于一个虚拟主机，一个 http 块可以拥有多个 server 块。</p><p>server 块又包括<strong>全局 server</strong>块，和<strong>location</strong>块。</p><p>全局 server 块主要包括了本虚拟机主机的监听配置和本虚拟主机的名称或 IP 配置</p><p>location 块则用来对虚拟主机名称之外的字符串进行匹配，对特定的请求进行处理。地址定向、数据缓 存和应答控制等功能，还有许多第三方模块的配置也在这里进行。比如，对/usr 相关的请求交给 8080 来处理，/admin 则较给 8081 处理。</p><h3 id="配置静态内容" tabindex="-1"><a class="header-anchor" href="#配置静态内容"><span>配置静态内容</span></a></h3><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server {
    location / {
        root /data/www;
    }

    location /images/ {
        root /data;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx 将选择具有最长前缀来匹配<code>location</code>块。</p><p>这已经是一个在标准端口<code>80</code>上侦听并且可以在本地机器上访问的服务器( <code>http://localhost/</code> )的工作配置。 响应以<code>/images/</code>开头的 URI 的请求，服务器将从<code>/data/images</code>目录发送文件。 例如，响应<code>http://localhost/images/logo.png</code>请求，nginx 将发送服务上的<code>/data/images/logo.png</code>文件。 如果文件不存在，nginx 将发送一个指示<code>404</code>错误的响应。 不以<code>/images/</code>开头的 URI 的请求将映射到<code>/data/www</code>目录。 例如，响应<code>http://localhost/about/example.html</code>请求时，nginx 将发送<code>/data/www/about/example.html</code>文件。</p><h3 id="设置简单的代理服务器" tabindex="-1"><a class="header-anchor" href="#设置简单的代理服务器"><span>设置简单的代理服务器</span></a></h3><p>nginx 的一个常见用途是将其设置为代理服务器，这意味着它可作为一个接收请求的服务器，将其传递给代理服务器，从代理服务器中检索响应，并将其发送给客户端。</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>server {
    listen 8080;
    root /data/up1;

    location / {
    }
}

server {
    // 反向代理
    location / {
        proxy_pass http://localhost:8080/;
    }

    location ~ \\.(gif|jpg|png)$ {
        root /data/images;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将是一个监听端口<code>8080</code>的简单服务器(以前，由于使用了标准端口<code>80</code>，所以没有指定<code>listen</code>指令)，并将所有请求映射到本地文件系统上的<code>/data/up1</code>目录。</p><p>当 nginx 选择一个<code>location</code>块来提供请求时，它首先检查指定前缀的<code>location</code>指令，记住具有最长前缀的<code>location</code>，然后检查正则表达式。 如果与正则表达式匹配，nginx 会选择此<code>location</code>，否则选择之前记住的那一个。</p><h4 id="传递请求标头" tabindex="-1"><a class="header-anchor" href="#传递请求标头"><span>传递请求标头</span></a></h4><p>默认情况下，NGINX 在代理请求<code>“Host”</code>  和  <code>“Connection”</code>中重新定义了两个头字段，并消除了其值为空字符串的头字段。 “Host”设置为<code>$proxy_host</code>变量，<code>“Connection”</code>设置为关闭(<code>close</code>)。</p><p>要更改这些设置，以及修改其他<code>header</code>字段，请使用<code>proxy_set_header</code>指令。 该指令可以在一个或多个位置(<code>location</code>)指定。 它也可以在特定的<code>server</code>上下文或<code>http</code>块中指定。 例如：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>location /some/path/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="选择传出-ip-地址" tabindex="-1"><a class="header-anchor" href="#选择传出-ip-地址"><span>选择传出 IP 地址</span></a></h4><p>如果您的代理服务器有多个网络接口，有时您可能需要选择特定的源 IP 地址才能连接到代理服务器或上游。 如果 NGINX 后端的代理服务器只配置为接受来自特定 IP 网络或 IP 地址范围的连接，在这种情况下，这个配置选项就很有用。</p><p>指定 proxy_bind 指令和必要网络接口的 IP 地址：</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>location /app1/ {
    proxy_bind 127.0.0.1;
    proxy_pass http://example.com/app1/;
}

location /app2/ {
    proxy_bind 127.0.0.2;
    proxy_pass http://example.com/app2/;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="反向代理-1" tabindex="-1"><a class="header-anchor" href="#反向代理-1"><span>反向代理</span></a></h4><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>http {
    upstream myserver{
       server 127.0.0.1:8080;
       server 127.0.0.1:8090;
     }

    //或
     upstream myserver{
        server 127.0.0.1:8080 weight =1;
        server 127.0.0.1:8090 weight =2;
      }

    //或
     upstream myserver{
       ip_hash;#可与weight配合使用
       server 127.0.0.1:8080 weight =1;
       server 127.0.0.1:8090 weight =2;
     }

   server {
       listen       8888 ; ##设置我们nginx监听端口为8888
       server_name  [服务器的ip地址];

       include /etc/nginx/default.d/*.conf;

       location / {
           proxy_pass http://myserver; ##叮，核心配置在这里
           proxy_connect_timeout 10; #超时时间，单位秒
       }

       error_page 404 /404.html;
           location = /40x.html {
       }

       error_page 500 502 503 504 /50x.html;
           location = /50x.html {
       }
   }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关闭所有-nginx-实例" tabindex="-1"><a class="header-anchor" href="#关闭所有-nginx-实例"><span>关闭所有 nginx 实例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>taskkill /f /t /im nginx.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="刷新配置" tabindex="-1"><a class="header-anchor" href="#刷新配置"><span>刷新配置</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,59),t=[c];function o(v,p){return n(),i("div",null,t)}const u=e(r,[["render",o],["__file","Nginx.html.vue"]]),g=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA/Java/Nginx.html","title":"Nginx","lang":"zh-CN","frontmatter":{"date created":"2022-11-25 15:07","date updated":"2022-11-25 15:22"},"headers":[{"level":2,"title":"正向代理","slug":"正向代理","link":"#正向代理","children":[{"level":3,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]}]},{"level":2,"title":"反向代理","slug":"反向代理","link":"#反向代理","children":[{"level":3,"title":"使用场景","slug":"使用场景-1","link":"#使用场景-1","children":[]}]},{"level":2,"title":"负载均衡","slug":"负载均衡","link":"#负载均衡","children":[]},{"level":2,"title":"动静分离","slug":"动静分离","link":"#动静分离","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"全局块","slug":"全局块","link":"#全局块","children":[]},{"level":3,"title":"events 块","slug":"events-块","link":"#events-块","children":[]},{"level":3,"title":"http 块","slug":"http-块","link":"#http-块","children":[]},{"level":3,"title":"配置静态内容","slug":"配置静态内容","link":"#配置静态内容","children":[]},{"level":3,"title":"设置简单的代理服务器","slug":"设置简单的代理服务器","link":"#设置简单的代理服务器","children":[]}]},{"level":2,"title":"关闭所有 nginx 实例","slug":"关闭所有-nginx-实例","link":"#关闭所有-nginx-实例","children":[]},{"level":2,"title":"刷新配置","slug":"刷新配置","link":"#刷新配置","children":[]}],"git":{"createdTime":1713887535000,"updatedTime":1713887535000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2027},"filePathRelative":"计算机/Java/Nginx.md","localizedDate":"2024年4月23日","excerpt":"\\n<p>Nginx 是一个高性能的 HTTP 和反向代理服务器,特点是占有内存少，并发能力强，事实上 nginx 的并发能力确实在同类型的网页服务器中表现较好，有报告表明能支持高 达 50,000 个并发连接数。</p>\\n<p>Nginx 通常被用来实现<strong>正向代理</strong>,<strong>反向代理，负载均衡，以及动静分离</strong>这四个功能。</p>\\n<p>nginx 可以（在一个主机上）多实例。</p>\\n<h2>正向代理</h2>\\n<p></p>\\n<h3>使用场景</h3>\\n<p>正向代理的典型用途是为防火墙内的局域网客户端提供访问服务器的途径，正向代理还可以使用缓冲特性减少网络利用率。</p>"}');export{u as comp,g as data};
