webpackJsonp([55911121633771],{488:function(e,t){e.exports={data:{markdownRemark:{html:"<p>You take a picture from your app, and get back an uri in return.</p>\n<p>Then you proceed to upload the photo to server. End of story.</p>\n<p>As a developer, you know that's not always the case, sometimes it's a bit more complicated, you take a snapshot from within the app,\nand realized that it returns black image.</p>\n<p>So you want to debug, and without uploading to server, you can't access to the file,\nto take a look at the state of the image, whether your code changes has fixed the issue or not.</p>\n<p>Or you want to manipulate the image before uploading.</p>\n<p>For whatever reason, you want to access to the file in cache.</p>\n<p>After few failed attempts to get it via tools like <code>Android File Transfer</code> and others\nthat can access to the Android file system.</p>\n<p>I found the solution with <code>adb</code> cli, and here is how to do it, from your Android device.</p>\n<pre><code>adb shell \"run-as com.yourapp.bundle cat '/data/user/0/com.yourapp.bundle/cache/ReactNative-image1215816883788.jpg' > '/sdcard/DCIM/ReactNative-image1215816883788.jpg'\"\n\nadb pull \"/sdcard/DCIM/ReactNative-image1215816883788.jpg\"\n</code></pre>\n<p>That's it!</p>\n<p>Now, check your current directory for the file <code>ReactNative-image1215816883788.jpg</code></p>",frontmatter:{date:"July 26, 2020",path:"/blog/android-accessing-cached-image-dir",title:"Access to android files in cache directory",excerpt:"Using adb cli",tags:["react-native","android"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-android-accessing-cached-image-dir-a89e4872ba46e1b4b09b.js.map