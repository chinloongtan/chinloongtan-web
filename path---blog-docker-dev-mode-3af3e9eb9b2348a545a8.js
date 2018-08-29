webpackJsonp([0x5b56f2a92ff4],{481:function(e,o){e.exports={data:{markdownRemark:{html:"<p>Docker is helpful in a lot of ways.</p>\n<p>Today, after dockerizing an application's services into different containers,\nI ran into situation where I need to make changes to the code of one of the container that serves API.</p>\n<p>Well, docker dev mode is not really a thing/command that available out of the box.\nThough there are different ways to do it, I eventually did it with <code>volumes</code>.</p>\n<pre><code>volumes:\n  - /Users/yourDir/yourAwesomeApp:/var/www/yourAwesomeApp\n</code></pre>\n<p>It is a concept of docker which let you <code>mount</code> a host to your container.</p>\n<p>Any changes you made to your host machine will be reflected in the container, without the need to stop and compose the services again.</p>\n<p>I will be sure to explore this topic deeper in the future.</p>\n<p>Visit my blog again in the future if you want to know more about my exploration with docker :)</p>",frontmatter:{date:"April 12, 2018",path:"/blog/docker-dev-mode",title:"Docker development mode",excerpt:"Making code changes in container"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-docker-dev-mode-3af3e9eb9b2348a545a8.js.map