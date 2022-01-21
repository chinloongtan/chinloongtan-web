webpackJsonp([0x8afbe4c66773],{513:function(e,o){e.exports={data:{markdownRemark:{html:"<p>This is not the first time I've upgraded any react-native projects.</p>\n<p>I've done it a few times over the years and will be sharing out what I've learnt so far.</p>\n<!-- Here are some of the informations regarding the project to give you some context of the regarding the topic.\n\nIt's an project started last year and has been launched. -->\n<p>To give you some context regarding the topic, the very same project was upgraded to <code>0.59.10</code> since the creation with <code>react-native init</code>,\nto comply with the Google Play store regulation for having 64 bit version of the app.</p>\n<p>Everything works out fine with <code>0.59.10</code>, for the next couple of months.</p>\n<p>Especially one that need to deal with linking of native libraries, most of the packages have no issue with the good old <code>react-native link</code> command.</p>\n<p>With that said, I can focus on building features and be very productive with my hours spent working on projects (personal or client projects).</p>\n<p>Which makes me fully occupied with work, and thus not having time for writing/bloging.</p>\n<p>Now, let's get back to the topic.</p>\n<br />\n<h4>1. Before the upgrade</h4>\n<p>Before any major upgrade (i.e: <code>0.5x.x</code> to <code>0.60.0</code>), you need to know things are going to be broken, libraries will have issues,\ndeprecated API(s) will affects your app (rather than just deprecation warning), module dependencies and UI look or behaviour will have impacts.</p>\n<p>There are a lot of stuffs that can possibly went wrong. So keep in mind that, upgrading is one part, regression test for your upgraded app is another part.</p>\n<p>For any version upgrades you are going to perform, it is a good practice to have an overview of your <code>dependencies</code>, spot for native linked libraries and do a quick check on the potential issues after upgrade.</p>\n<p>For non native linked library, there might be issue is there is a major changes in <code>react</code> version itself, but most of the time this will no less of a issue.</p>\n<p>In my case, there are 116 packages(dev packages excluded) installed at the point during my upgrades, and 38 of them are natively linked.</p>\n<p>So I am sure it's going to take time for the upgrade to complete. Plus after some searching the internet, I am very sure that the upgrade cannot be completed in\njust few hours of time (in my case).</p>\n<br />\n<h4>2. Reasons for upgrade</h4>\n<p>So now you are aware that what a major upgrade will be like, and the time that it will take.</p>\n<p>If there are no major blocker that are holding you back with the current version, I would suggest delaying the upgrade for a few reasons:</p>\n<ul>\n<li>Buffer time for libraries maintainers to support the latest feature/changes with <code>react-native</code></li>\n<li>Don't fix what isn't broken (with trying to upgrade)</li>\n</ul>\n<p>Do it when you are in better position (let say you are ahead with your timeline), or when you have absolute no better choice than to upgrade (i.e: to upgrade to 64 bit support.)</p>\n<p>If you are in the midst of some feature, and that feature requires for a <code>react-native</code> version upgrade before continuing, I actually suggest going with alternatives if you can. Or do the upgrade separately, and do enough testing after the upgrade, otherwise you will find yourselves in a rabbit hole trying to fix some errors of another issue in order to make some other issues resolved. You don't want that.</p>\n<p>For example, App Store stops accepting app with WebView since April. You need to use <code>react-native-webview</code> (from a specific version onwards), and have your <code>react-native</code> project to be at minimum xxx version.</p>\n<p>You thought upgrading is the only option. Well if you are in good hand, for example your project is new and have less dependencies. Upgrading seems like a good choice if that is the case.</p>\n<p>Otherwise you want just settled with the alternative, for example, removing the RCTWebView with a script that run on a <code>postinstall</code> or <code>after_install</code> Podfile, and you are good to god.</p>\n<p>Chances are if you proceed with the upgrade, your <code>react-navigation</code> verison will not compatible with the new version, and you need to upgrade <code>react-navigation</code> as well. Say, from <code>v3</code> to <code>v4</code> with some changes in behaviour. (More on this later)</p>\n<br />\n<h4>3. Which version to upgrade to</h4>\n<p>If you are like me, who delaying the upgrade until you have no other choices. Chances are, you have a few major versions to choose from, since the release schedule of React Native now follows a monthly release train.\nSo the question for us is which version to use?</p>\n<p>Well, if you have a major upgrade, normally I take the latest version within the major upgrade.\nDepending on the major version of your choice, for my case from <code>0.59.10</code>, I can upgrade to <code>0.60.x</code>, <code>0.61.x</code> or <code>0.62.x</code>. (<code>0.63.x</code> release candidate are not into consideration)</p>\n<p>To have an overview of the available version, use this command.</p>\n<p><code>npm show react-native versions</code></p>\n<p>My choice of upgrade is to get the latest stable version for this project. Cause if I don't do that, I will need to upgrade again sooner, and I am having huge backlogs in the pipeline after the upgrade. So I want to maximize the window before the next upgrade.</p>\n<p>Bear in mind that the latest stable version might not always be the best choice to upgrade to. Sometimes you want to upgrade to a version lower that that.</p>\n<p>Reason for that is the latest stable version might have breaking chances that no open source libraries has adapted yet.</p>\n<p>How to know which to choose from?</p>\n<ol>\n<li>Inspect your <code>package.json</code> file and have a look at the <code>dependencies</code> to get an idea. You are the developer of your project and should know more about which libraries will more likely to break after the upgrade.</li>\n<li>Have a look at <a href=\"https://github.com/facebook/react-native/releases\">release changelogs</a></li>\n</ol>\n<br />\n<h4>4. How to upgrade</h4>\n<br />\n<h5>4.1 Clone the project folder</h5>\n<p>I used to do it in a separate branch, but for this particular upgrade, I am doing it in a cloned folder.</p>\n<p>Note: Not cloning from remote and reinstalling everything, I copy/pasted the entire folder to a different directory and start working on the upgrade.</p>\n<p>Reason?</p>\n<ol>\n<li>I don't want to re-installing the <code>node_modules</code> and <code>Pods</code> when I already have it.</li>\n<li>The cloned project will build and run without issue.</li>\n<li>I don't want to switch branch and then my existing branch is messed up with my upgraded libraries (<code>node_modules</code> and so on).\nUpgrade is going on, same goes for bug fixing and feature development. I am still actively developing on the non-upgraded branch.</li>\n<li>If the upgrade gone haywire, I can discard the changes in clones folder and not affecting my development flow. And start over again from the cloned folder.</li>\n</ol>\n<p>You want your app to still working if you decided to abort the upgrade half way, or start over again. (Yeah, sometimes, you just have to start over again.)</p>\n<p>While juggling betweeen bug fixing, new features development, some optimizations, maintaining the code and version upgrade, I want to avoid the upgrade to potentially stop me from my regular work flow.\nIf the upgrade went wrong, I can still fix bug and ship new features of my app to App/Play stores on the main project.</p>\n<h5>4.2 Use React Native upgrade helper</h5>\n<p><a href=\"https://react-native-community.github.io/upgrade-helper/\">React Native upgrade helper</a></p>\n<p>Check for code changes before applying it in the project.</p>\n<p>Optionally, you can upgrade with <code>npx react-native upgrade</code>.</p>\n<p>However, from the memory of the time I last used it, I don't have a good experience using that.\nI have to resolved conflicts and the worst part was changes on iOS <code>project.pbxproj</code> files which is a pain.</p>\n<p>Ever since then I use upgrade helper and hand-picked the code and manually apply it to my existing project.\nI am happy with that and is aware and consious of what I've changes, so I know where to look for if anything went wrong.</p>\n<p>If my case, upgrading to <code>0.62.2</code> only need to change 15 files, which is faster to do hand-picked. (Imagine the time spent on fixing conflicts could be more than that)</p>\n<p>Plus, I can exclude the implementation of <code>flipper</code> which is a debugging tool included in future versions of <code>react-native</code>.</p>\n<p>Hand picking the lines makes me aware of the additional stuffs that are added (in this case, <code>flipper</code>), and I am not including it this time.</p>\n<p>Reason for doing so is to not have some extra dependencies or code to fix.</p>\n<p>I just want to focus on the upgrade and I can live without the debug tool for now.</p>\n<p>Since coming from <code>0.59.10</code>, I am using my other debugging tool, might as well not introduce uncertainties that will break the product.</p>\n<p>I will give <code>flipper</code> a try afterwards, but for now, the upgrade is in highest priority.</p>\n<p>After applying the code changes (or if your are using the upgrade command). Run <code>yarn install</code> (or <code>npm install</code> depending on your setup.)</p>\n<h5>4.3 Get your project up and running</h5>\n<p>After installing the versions, if there are no errors. You are good to go to start build and run the project.</p>\n<p>Assuming the new packages have no issues, you need to fix the build issues with you app and get it up and running like before.</p>\n<p>The following are the issues that I've encountered and the solution to it.\nI always start debugging with iOS build with xcode. (Just a preference)</p>\n<ol>\n<li>Run <code>pod install</code> and bump into <code>- ERROR | attributes: Missing required attribute</code>homepage<code>.</code></li>\n</ol>\n<p>Since <code>0.60.0</code>, native libraries are now auto linked. That means you don't have to specify the pod in your <code>Podfile</code> anymore and React Native will pick that up. (some changes to <code>Podfile</code> requires)\nAnd for this reason, native libraries are required to have a <code>.podspec</code> file for that to work.\nIf the <code>homepage</code> are set to empty string <code>s.homepage = ''</code> you will get this issue.</p>\n<p>I am getting this issue for this package <code>https://github.com/Aminoid/react-native-activity-recognition</code></p>\n<p>The fix: Fork the repository and add a homepage to it. (There are another issue with this library's podspec, so forking the library is a better choice, more about this later)</p>\n<ol start=\"2\">\n<li><code>CocoaPods could not find compatible versions for pod \"React/Core\":</code></li>\n</ol>\n<p>This is a issue with <code>react-native-image-crop-picker</code> library. Upgrading the library will fix it.\nSince the dependency is now <code>React-Core</code>.</p>\n<ol start=\"3\">\n<li><code>YOUR_PROJECT_PATH/node_modules/react-native/React/Modules/RCTEventEmitter.h:8:9: 'React/RCTBridge.h' file not found</code></li>\n</ol>\n<p>Got this issue for <code>react-native-audio-recorder-player</code>. As you can tell, upgrading the library will fix it.</p>\n<ol start=\"4\">\n<li><code>'React/RCTDefines.h' file not found</code></li>\n</ol>\n<p>This one has to do with <code>AppCenter</code> packages.</p>\n<p>And the fix for this is well documented <a href=\"https://docs.microsoft.com/en-us/appcenter/sdk/troubleshooting/react-native\">here</a>.</p>\n<ol start=\"5\">\n<li><code>&#x3C;React/RCTBridgeModule.h> file not found</code></li>\n</ol>\n<p>Now this is the real tricky part.</p>\n<p>At this point, the header file is missing, and we are not sure, whether it is an error that only happens to this library only or all other libraries.\nFor this, there is a way to inspect the issue.</p>\n<p>This is very well written in this Github comment, so I am not going to elaborate futher.</p>\n<p><a href=\"https://github.com/facebook/react-native/issues/26665#issuecomment-571082076\">https://github.com/facebook/react-native/issues/26665#issuecomment-571082076</a></p>\n<p>In short, I have to remove the <code>target.remove_from_project</code> from <code>Podfile</code> <code>post_install</code></p>\n<p>then</p>\n<pre><code>pod deintegrate\npod cache clean\npod install\n</code></pre>\n<p>(not enough with just removing the <code>Pods</code> directory)</p>\n<p>and add the missing react back to scheme > build (for all the targets!)</p>\n<ol start=\"6\">\n<li>Remove from <code>Libraries</code> folder in xcode, all the <code>.xcodeproj</code> and all the <code>xxx.a</code> from <code>Build Phases > Link Binary with Libraries</code> from native libraries if you haven't.</li>\n</ol>\n<p>Or use <code>react-native unlink</code> (but again, I do it manually from xcode, because I don't want to unlink for android yet, as it turns out, android works without unlinking, but is is now redundant.)</p>\n<p>Otherwise app will have duplicated headers from Pods and the Libraries projects.</p>\n<ol start=\"7\">\n<li><code>MKTouchableManager.m:11:9: error: 'UIView+React.h' file not found with &#x3C;angled> include; use \"quotes\" instead</code></li>\n</ol>\n<p>Then I am having this issue with <code>react-native-material-kit</code>. I use this for ranged slider with two thumbs. Looking for alternatives, but I am fixing this one first.</p>\n<p>Turns out upgrading the project to the latest version fixed the issue.</p>\n<ol start=\"8\">\n<li><code>No known class method for selector 'configure'</code></li>\n</ol>\n<p>Then this issue, from firebase, basically I need to use firebase v6 instead of v5. Well, another breaking changes.\nSince local push notification are no longer usable in v6. I need to find solution for that. So in this case, upgrade to v6,\nand comment out implementation for local push notification and come back to this later.\n(Remember, we want to build and run the app and not spending too much time replacing the implementation and then we don't know why it is not working. Do one thing at a time. Complete the upgrade first.)</p>\n<p>Upgrading to v6 has no much issues, also because the only thing that was in used with firebase is the local push notification. (but there are plans to use the Crashlytics, part of the reason why the upgrade is done)\nAnd of course, the documentation on the website is great. I am using <code>react-native-firebase</code>. (Sometimes the documentation update is so frequent that old documentation is not there anymore, so just keep up to date with the latest version as best as you can.)</p>\n<hr>\n<p>At this point, the app can be built and run on simulator already.</p>\n<hr>\n<ol start=\"9\">\n<li><code>Invariant Violation: Native module cannot be null.</code> and <code>'React/RCTEventEmitter.h' file not found</code></li>\n</ol>\n<p>This is from the <code>react-native-activity-recognition</code> library I am using. Second issue from the same library.\nAnd it has to do with a incorrect path in <code>podspec</code> being used. Before this I fixed it with importing the project to library and manually link the library code.\nBut now I need to use Podfile and this has to be fixed with updating the <code>podspec</code> of the library.</p>\n<p>Solution: Fork the repository, update the <code>podspec</code> and install it in your app.</p>\n<ol start=\"10\">\n<li><code>null is not an object (evaluating '_ReanimatedModule.default.createNode')</code></li>\n</ol>\n<p>This has to do with <code>react-native-tab-view</code>. Upgrade the <code>react-native-tab-view</code> and <code>react-native-reanimated</code> to the latest version.\nRun <code>pod install</code> for <code>react-native-reanimated</code> to be updated.</p>\n<ol start=\"11\">\n<li><code>Undefined is not an object (evaluating 'navigator.geolocation.getCurrentPosition')</code></li>\n</ol>\n<p><code>navigator</code> is no longer available from the global object.\nInstall and use the it from <code>https://github.com/react-native-community/react-native-geolocation</code> instead.</p>\n<ol start=\"12\">\n<li>Also deprecated APIs are: <code>ViewPager</code> and <code>ListView</code></li>\n</ol>\n<p>If you are using libraries that depends on these APIs, you will need to upgrade the library as well. Or replace/remove the APIs in your app.</p>\n<ol start=\"13\">\n<li><code>Cannot read property measureInWindow of undefined</code></li>\n</ol>\n<p>Issue with <code>react-navigation</code> v3. You will need to use v4 or v5.</p>\n<p>From v3 to v4 has some minor changes. From v3 or v4 to v5 will have API changes. So upgrade with care.</p>\n<p>For me, I opt to upgrade to v4 and still have some unexpected changes in behaviour. And need to fix it.</p>\n<p>As you know, the local push notification is now broken, so I want to just stay with v4 to have less code that broken.</p>\n<p>And when the app are back up to where, then I will consider upgrading to v5.</p>\n<ol start=\"14\">\n<li><code>TypeError: Cannot call a class a function</code></li>\n</ol>\n<p>This is a changes in the code that I wrote, it is now illegal to do that, I haven't investigated further whether the changes is from <code>react-navigation</code> or <code>react</code> library.\nBut I managed to figured out the issue.</p>\n<p>Code with issue: (works with <code>0.59.10</code>)</p>\n<pre><code>headerLeft: NavHeader.Back,\n</code></pre>\n<p>Code changes after the upgrade:</p>\n<pre><code>headerLeft: props => &#x3C;NavHeader.Back {...props} />\n</code></pre>\n<p>You should be able to tell what's wrong from the error description. (<code>NavHeader</code> is a class component)</p>\n<ol start=\"15\">\n<li>Issue with PagerPan from <code>react-native-tab-view</code></li>\n</ol>\n<p>Code with issue:</p>\n<pre><code>import { TabView, SceneMap, PagerPan } from 'react-native-tab-view';\n</code></pre>\n<p>Code changes:</p>\n<pre><code>import { TabView, SceneMap, ScrollPager as PagerPan } from 'react-native-tab-view';\n</code></pre>\n<p>However, even after the fix, the behaviour is not the same, therefore more work has to be done to disable animation and swipe on the tab.</p>\n<ol start=\"16\">\n<li><code>AirGoogleMaps</code> dir must be added to your xCode project to support GoogleMaps on iOS.</li>\n</ol>\n<p>Upgrade the library and make sure to run <code>pod install</code></p>\n<h5>End</h5>\n<p>Hopefully my writing can help you with the upgrade. Happy coding.</p>\n<p>I will be writing up with the upgraded project next.</p>\n<br />",frontmatter:{date:"April 27, 2020",path:"/blog/upgrading-react-native-project",title:"Upgrading a 16 months old react-native project",excerpt:"From 0.59.10 to 0.62.2",tags:["react-native"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-upgrading-react-native-project-f53351a0785a7869d563.js.map