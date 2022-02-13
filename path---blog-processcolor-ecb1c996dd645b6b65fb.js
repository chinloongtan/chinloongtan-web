webpackJsonp([0x72c0664a7ac8],{513:function(e,t){e.exports={data:{markdownRemark:{html:'<pre><code>import { processColor } from \'react-native\';\n</code></pre>\n<p>This is not the typical API you will use when working with React Native.</p>\n<p>When working with iOS libraries, chances are you will need to use <code>UIColor</code>, and that\'s when you can use <code>processColor</code>.</p>\n<p>I am researching for drawing board application written in React Native, and came across this package.</p>\n<p><a href="https://github.com/terrylinla/react-native-sketch-canvas">https://github.com/terrylinla/react-native-sketch-canvas</a></p>\n<p>Out of curiosity on how it was done, I started digging into the implementation.</p>\n<p>So we can pass <code>processColor(\'#00FFFF\')</code> in the argument and it is ready to be accepted as <code>(UIColor*) colorVar</code> in <code>RCT_EXPORT_METHOD</code>.</p>\n<p>Refer <a href="https://github.com/terrylinla/react-native-sketch-canvas/blob/master/src/SketchCanvas.js#L94">processColor</a> usage in React Native.</p>\n<p>and corresponding <a href="https://github.com/terrylinla/react-native-sketch-canvas/blob/master/ios/RNSketchCanvas/RNSketchCanvas/RNSketchCanvasManager.m#L53">native method</a> in iOS.</p>\n<p>It is glad to know that such API exist, it will definitely come in handy when bridging native code.</p>\n<p>Sure it has different usage worth exploring.</p>\n<hr>\n<p>For those who are curious. Check out the implementation of <code>processColor</code> over <a href="https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/processColor.js">here</a>.</p>',frontmatter:{date:"April 25, 2018",path:"/blog/processcolor",title:"processColor API",excerpt:"Color string meet native code",tags:["tool"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-processcolor-ecb1c996dd645b6b65fb.js.map