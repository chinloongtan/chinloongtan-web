webpackJsonp([23829166392156],{486:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Accessing user current location in the app is a common practice nowadays. Depending on the usage of the location data, a common use case is to present the data in a sorted by distance filter.</p>\n<p>Say, a restaurant app, where you want to see the nearest restaurant first.</p>\n<p>I have been fortunate to work on a complicated geolocation aware app, where I need to track the changes of the GPS location over time.</p>\n<p>Think of it like a fitness app, or a more popular example will be the pokemon app.</p>\n<br />\n<h4>The existing solution</h4>\n<p>While most app would be enough with a listener watching for the GPS location update, the one I am working on needs more.</p>\n<p>Basically, it is a fitness app to track jogging pattern. It needs to work when the app is in background, and offline (for some of the time).</p>\n<p>The current available location listener <code>watchPosition</code> seems to be great for the work, until it is not.</p>\n<br />\n<h4>The problem</h4>\n<p>The app needs to work together with a geo-fencing ability to detect if a user is within an action zone, where it will trigger a log, and the network request (if network connection is good).</p>\n<p>So the main challenge is to get it to work when the app is in background, and I want to be able to detect the event as soon as the user enters the zone.</p>\n<br />\n<h4>Background geolocation to the rescue</h4>\n<p>In order to be able to achieve that, this package (<a href="https://github.com/mauron85/react-native-background-geolocation">https://github.com/mauron85/react-native-background-geolocation</a>) has done incredible work the background location.</p>\n<p>However it is not a silver bullet for all the problems out there, the app I wanted to build are meant for fitness and jogging, so there are a different configuration needed to be able to adapt to my use case.</p>\n<br />\n<hr />\n<br />\n<h4>Key takeaway</h4>\n<p>Couple the package with other features, such as drawing the jogging path on a map, show the geo-fencing zone on the map is more reliable and complete thanks to a more frequent location updates, event in the background.</p>\n<p>It is advisable to create a couple of <code>.gpx</code> files to mock the location, otherwise the development with geolocation would be miserably slower.</p>\n<p>More about this part in the future. Now that you know how to get location updates even app is in the background, you will be able to build a better app!</p>',frontmatter:{date:"December 17, 2018",path:"/blog/background-geolocation",title:"Background geolocation",excerpt:"Processing location update events",tags:["gps"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-background-geolocation-47b7bb96e6507f6c066e.js.map