webpackJsonp([0xa922a89abe19],{498:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Sometimes, your app needs more than just accessing the current location.</p>\n<p>For example, you want to watch the location over time, whether to show it on the map or other features than make use of the location.</p>\n<p>We can provide a current location for the simulator, however, we can\'t provide a lists of locations that showing the movement of the app over time with the default simulator settings.</p>\n<p>Luckily for us, as developer, we are able to mock the locations of the app using <code>.gpx</code> file.</p>\n<br />\n<h5>How it works</h5>\n<br />\n<p><code>.gpx</code> is a format to save GPS data. Basically it contains latitude, longitude and the timestamps at which the points are at.</p>\n<p>A simple <code>.gpx</code> file looks like this.</p>\n<pre><code>&#x3C;?xml version="1.0"?>\n&#x3C;gpx version="1.1" creator="gpxgenerator.com">\n&#x3C;wpt lat="3.109193" lon="101.461774">\n    &#x3C;ele>7.00&#x3C;/ele>\n    &#x3C;time>2018-01-04T08:08:05Z&#x3C;/time>\n&#x3C;/wpt>\n&#x3C;wpt lat="3.109562" lon="101.461968">\n    &#x3C;ele>7.00&#x3C;/ele>\n    &#x3C;time>2018-01-04T08:08:20Z&#x3C;/time>\n&#x3C;/wpt>\n&#x3C;wpt lat="3.109193" lon="101.461774">\n    &#x3C;ele>6.96&#x3C;/ele>\n    &#x3C;time>2018-01-04T08:08:35Z&#x3C;/time>\n&#x3C;/wpt>\n&#x3C;/gpx>\n</code></pre>\n<p>When you have that file, add it to your xcode, and you will be able to use the coordinates in your simulator with a toggle.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-c7bc2.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 69.68085106382979%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACxklEQVQ4y21U2XLaQBDU//+LbZwyh0EgBOhAQhI3yOIwNxgssAOhMCl3ZiZ2VR6yVVPLsrM93dO7Uk7Hdzzvrtjtf+LX6YiPjw+cz2eJt7c3nI5HvF9+Y+fmMO8GeF6uEe/3eD+ecL5ccLlewePz81Nmxfc9uLUaajUPNY+CfluWBU3TUKBoNRoY1z10jDI6VgVd28RTzUHoVvE6HmId9tDv9eC6LhqUq6TTKVi2Dd/34QcBbAIzTRO5nIrbuwRU2o8c3g8wn0wQb7fYbYjlywv2cYxpw0c++4hSuYJsNgslDEPYBGgYJoVBlWrQizoB5qDRPOh1MaFDgeej12rjZbUkwA126xXi11es+x08UU40GGAQDaCoag7lcllYMSDLVVUVd8Tu9vYOxUKBJFbRKJcQFDUEuobId7EiqZsoxKTdhFGpIJPJ/GWYp8OlUhkGAVZoo1qtQiOQ+/sfAqjrOvrhE1wvoPBhWDaa7Q6i4QjjyRQjCiZUrzdg01kliiJpqGlaIp0by0zVfB5FlkxSRsMBnKoDn0zzyLT1eo09OX3YH7BarTAajeRcp9OBkkolBTkgQzwyJgh8kZ9Kp5FIJERGj1y0TJvYOxITMmdL5sRkynj8TIWLojJPJBRG9r6uC8vlNTPma8NyueqAVLDLPsnmwq1WS8DieI/ZbI52uw1WyoUVXjiOI3IZsF6vizHislZEv9+n5CfqryHBeR71MqS+brc7kRx9FWw2m1CSyaQkBUFd7qHrOmJOKpUSU9i9LrFsNltygNmxAbPZDIfDQfqXfcyK7Ew6A4UZ6XqR9BdQKOSlf9y3m5sbPDwkRc6QjBHJ1GPO55mNOZ1OWC6XktPtdiWUxWKO+XwuveCqi8UC0+lUJLGU7zX3h+XzQ+BZCg2HIplB+X82S7nQA+ePwPXrkf9v8BXhg8xqQ69kQ/P3mvf+HX8Aq5/QJfIaWiIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="demo"\n        title=""\n        src="/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-fb8a0.png"\n        srcset="/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-1a291.png 148w,\n/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-2bc4a.png 295w,\n/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-fb8a0.png 590w,\n/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-526de.png 885w,\n/static/gpx-xcode-737ff0febbe707f55cd278c5c48cd82a-c7bc2.png 1128w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>So for my case, I am having 3 different paths I created for development and testing purpose. Each of them in its own <code>.gpx</code> file.</p>\n<p>Select any one, and the simulator will pick up the location and changes over time.</p>\n<br />\n<h5>End</h5>\n<p>Now you have different coordinates as time passes returned from the simulator to test.</p>\n<br />',frontmatter:{date:"December 20, 2018",path:"/blog/gps-testing-with-gpx",title:"GPS testing with .gpx file",excerpt:"For faster development",tags:["gps"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-gps-testing-with-gpx-b7abb12f3ae339432582.js.map