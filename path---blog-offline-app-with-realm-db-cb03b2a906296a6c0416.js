webpackJsonp([0x7950ff9e8d00],{468:function(e,t){e.exports={data:{markdownRemark:{html:'<p>I published an app.</p>\n<p>As a first version, it allows users(mostly me) to check for train schedule in the app.</p>\n<p>It looks like this, as of current writing of this blog.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/blog_screenshot-bc8e9a8867e333adfb7ac742cc0214d7-e8773.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 230px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.82608695652172%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAkABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIGAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB8iNtRh23HKigI5QAf//EABkQAAIDAQAAAAAAAAAAAAAAAAADARMgQf/aAAgBAQABBQKVMK2FbN8z/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwFf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwFf/8QAGRAAAgMBAAAAAAAAAAAAAAAAMpEAAQIw/9oACAEBAAY/AhtQNKBpdf/EAB8QAAIBAwUBAAAAAAAAAAAAAAARASExkRAgQVFh0f/aAAgBAQABPyFRt8Yb9RMt8owRo6cEFCaXdGNv/9oADAMBAAIAAwAAABBgwzL77//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QX//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QX//EAB8QAQACAgEFAQAAAAAAAAAAAAEAESExoUFRYXGB0f/aAAgBAQABPxBRWpgqcRYKqavFxFbW+fyloWIcRLvPpittMapaGN311EVupa3mLsack1mDjf0T7M3vglEon//Z\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="app_screenshot"\n        title=""\n        src="/static/blog_screenshot-bc8e9a8867e333adfb7ac742cc0214d7-e8773.jpeg"\n        srcset="/static/blog_screenshot-bc8e9a8867e333adfb7ac742cc0214d7-872ac.jpeg 148w,\n/static/blog_screenshot-bc8e9a8867e333adfb7ac742cc0214d7-e8773.jpeg 230w"\n        sizes="(max-width: 230px) 100vw, 230px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<br />\n<h4>API - The initial approach</h4>\n<p>Well, it is a straight forward app, get the following from user selection:</p>\n<ul>\n<li>origin station</li>\n<li>destination station</li>\n</ul>\n<p>Then compute the upcoming train and display the time.</p>\n<p>Withtout much thought, I created a few APIs, plugged it to the app and start displaying data.</p>\n<p>Everything was fine.</p>\n<p>Until when I am setting up for production environment, I realized I couldn\'t utilize the free tier of Amazon Web Services anymore(expired soon).</p>\n<p>I made a quick look up on AWS cost calculator, and roughly have idea what it means for setting up the production server(financially).</p>\n<p>For an app I always wanted to build, for me and my friends\' own convenience(I used to always missed the last train), it is going to be ongoing cost as long as it runs.</p>\n<p>Since the app is not going to make enough revenue to cover it\'s own cost of running, I needed an alternative.</p>\n<br />\n<hr />\n<br />\n<h4>Enter offline app</h4>\n<p>I paused the development and thought about the alternatives for a bit.</p>\n<p>It became obvious to me that the app just need access to the database of timetables, routes, and stations in order to work.</p>\n<p>And if I can have all those data in the device, I don\'t need API for that.</p>\n<p>So the idea is to use a database in the app, serve the data from it, and let it work offline.</p>\n<p>And this approach does provide a few benefits.</p>\n<ul>\n<li>Zero cost for maintaining server</li>\n<li>No backend work required (API, database, devops)</li>\n<li>I can use the app offline</li>\n</ul>\n<br />\n<hr />\n<br />\n<h4>Realm database in action</h4>\n<p>Why realm db?</p>\n<p>Well it\'s mainly because of the support for react-native app out of the box.</p>\n<p>It is well documented, offline-first(as promoted), full-fledged mobile database and is performant, have open source version, and the list goes on.</p>\n<p>Why not redux-persist?</p>\n<p>We are talking about 3000+ objects to be stored and accessed, and I think it is not a good idea to use redux-persist in this case (after browsing through their Github issues and quick research for the suitable tools).</p>\n<p>Turns out to be a good choice for the work.</p>\n<p>With a major roadblock before publishing the app, but is solved.</p>\n<br />\n<h5>Database initializing time</h5>\n<p>So it took about 24 seconds to initialize a realm db to load all the schema and their respective seed data I needed for the app.</p>\n<p>I have a splash screen shown while initializing it, but it\'s just too long to wait.</p>\n<p>So in a hurry to publish the app as soon as possible (as I did it during a weekend, and weekday will be busy for other works), this is something that will potentially stop the desire to publish the app before the weekday comes.</p>\n<p>It is as if there is only me is having the issue and after revising the documentation over and over again, there is an alternative.</p>\n<p>What we can do in this case is, we can let Realm to read from existing database and use it.</p>\n<p>Perfect!</p>\n<p>So I have a copy of the initialized database(basically a <code>.realm</code> file), direct it to Realm when opening database and that\'s it!</p>\n<p>We don\'t have to seed the data everytime the app launches! The data is ready to be used.</p>\n<br />\n<p>Now the app started working offline, and it is just the beginning of offline-first app journey.</p>',frontmatter:{date:"October 04, 2018",path:"/blog/offline-app-with-realm-db",title:"Going offline with Realm database",excerpt:"A different approach"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-offline-app-with-realm-db-cb03b2a906296a6c0416.js.map