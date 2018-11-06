webpackJsonp([0x8b0c0e8766f7],{465:function(e,t){e.exports={data:{markdownRemark:{html:'<p>In today\'s topic, we will cover the details you need to know to make the decision.</p>\n<p>Whether to use</p>\n<pre><code>create-react-native-app MyAwesomeApp\n</code></pre>\n<p>or</p>\n<pre><code>exp init HelloExpo\n</code></pre>\n<p>or</p>\n<pre><code>react-native init VanillaRN\n</code></pre>\n<p><code>create-react-native-app</code> (CRNA) was <a href="https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html">introduced to the community</a> on March 13, 2017.\nWith the intention to make developers life easier without have to deal with native dependencies in Xcode or Android Studio.</p>\n<p>Here is how you typically starts and run a new project with CNRA.</p>\n<pre><code>create-react-native-app MyCRNA\ncd MyCRNA\nyarn start\ni\n</code></pre>\n<p>You get your iOS simulator running within minutes from project initialization and are ready to start coding right away.</p>\n<p>While not having to open Xcode and run the project from there is nice, it\'s not the idea of using CRNA we are talking about here.</p>\n<p>It\'s worth mentioning that we can run new project on iOS simulator/Android emulator because of these commands, which available to any ways of creating the project.</p>\n<pre><code>react-native run-ios\nreact-native run-android\n</code></pre>\n<p>What we need to appreciate that the beauty of creating project with CRNA is we are able to leverage on Expo\'s cool features(from Expo SDK, included during initialization).</p>\n<p>Here\'s two of them that I am highlighting:</p>\n<ol>\n<li>Access to Expo SDK API</li>\n<li>Run project on real devices without hassle</li>\n</ol>\n<br />\n<hr />\n<br />\n<h4>1. Access to Expo SDK API</h4>\n<p>Notice the amount of work to add vector icon and MapView with Expo.</p>\n<ul>\n<li>Add icon</li>\n</ul>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-4a0bd.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 32.02195791399817%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA8UlEQVQY043PsU7EMAyA4b43T8A7sDCw8Q6MDEgsnAQSA1dBe3fttWkSJ2mbtD+BY4QTwydbtmXZxWCEMEe08bRHjdIO6yM+RCT7yt2Y8ONyxqnvvKO4fVm5flp43h5pmne2+4qqb9kbxc4MNEGQdUSYTvFXPz1mije18NolDp3Bqo7gBScGEU9vc5w88xqz9C8FJCDmRYGusezKgeNOUE3g8GFpa6GuFEYm1jVPp/OKy/vExd3Mw8Ghk6VsByqlqXQ2aGplKPuOOig0ngF3VnGzSVw9RjZtvmrU9CG/OgntaFAxD82Sue+aWQKWEbv+7RNuJM1YbC+engAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Add icon code changes"\n        title=""\n        src="/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-fb8a0.png"\n        srcset="/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-1a291.png 148w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-2bc4a.png 295w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-fb8a0.png 590w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-526de.png 885w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-fa2eb.png 1180w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-08f6a.png 1770w,\n/static/addIconCodeChanges-637471b3418dfa68fd3d94d82c338312-4a0bd.png 2186w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>Add MapView\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-785a4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48.80952380952381%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABY0lEQVQoz5XR22oVMRTG8eCFj+AzCL6CzyZeSwWvFe9665toiwhtKdZd2tmHOSSTyew5ZDLJ37WtVAt2bwz8WCsX+UhW1Kqy6HagMC2bsqaqW+x2xHUjjVT7W3OQx7Y96rqByzpRrSVsmXGTLcmLiry2GNdiup4xBgKRSYS9EurTxczxt5nzZcPWFWinsUJ3DbVvacKWQaJ6PB3jQSqlyI5zHVVuaLQ8WTs6O6Cl32ncgNsOhJmDVNEG1s1ELTMbfMBoCTK9zHSLrnvZ91RVS24cfg7MKRHkAo9Rzz8knr2LfDyzlKnk0pYsvJh2teAmVmQYbpP+Zdfvo54eySBfJ96eGgpyTpdrTjZXnLW3fJ9yrmLOgkqUd9J+6skbCXyVODoxcqzg62bDl+yaz8X5fdCP9Md9KP+mXh5HXryXn76QJ0vgYtSsoiWLhlWq7/BXPUCFacJ7Tz8MjH5ijpEHK/Ff6ycknPU8BeWl+gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Add MapView code changes"\n        title=""\n        src="/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-fb8a0.png"\n        srcset="/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-1a291.png 148w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-2bc4a.png 295w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-fb8a0.png 590w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-526de.png 885w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-fa2eb.png 1180w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-08f6a.png 1770w,\n/static/addMapCodeChanges-d6c7db98f4895eb9ad772627fab91e79-785a4.png 2184w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n</ul>\n<ul>\n<li>Output\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/addMapOutput-a9c38285aaeb665a8d964edc10be053a-67071.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 574px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.70034843205576%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsSAAALEgHS3X78AAAEtElEQVRIx+2Wa3PTRhSG83Pbf9LpTP8AtN+gQICQkIZbZnIlhJBAfLcTXyTLimXJknzTxbKtPD0SGJzQdBjox+7M613t7nn3Pbvn7HrJsiw0TUuh6zpJuby8TJGU6XRKtVqlWCxiGMZX4/O61WrR7XZZms1mRFFEHMdXJs3bc9LJZEIy9ybCZCzhWOJaWSRabH9r39J8teurXm//2/hi31cKf7Qs3aTke5AS3rQv31OuuNzv9xkOh4RhyGAwSOH7fop5ezQa0ev1CIIgned5Xtqf2M0j4LPLqqpycnJCPp+nVCqRy+U4Pz+nUCiQy+dSJLF4fHxMNptN55TLZTKZTDrnisIkxhLjZGJCVKvVUuPEoFgq0qw3aVabaV+lUklJElTOzihIX2L7WeE8cJOMsW1b3BumLjiOg+M6xOOYp6fr3Dq4ReiF9GRrkrGuzE1qT1xO7JLkuOLyDduc/v5+epufN3769kOZXsYo9lsq+h47F0N2OwG7RsDOJ+x3Il6bE7bb4ZX+BLuG9LXlYKLpgsvxjG29yHZtl4fKgAeKz7LiSe1xv/ERDxojlusW9+bfybjUd+o+W5oryTxO/VlK3JrEl6w1I7YK79ioGzzWQp40vRQrgseqxyMhWFFHaTvBStOXb5+HgjVV9n0cfVGYED6VCTvZfZ6et1PCxDg1EjxWEwSiOuC+qL/fCMQTn0fpQn6quBPMFglj1lpTNhtFXilnPGhOZOVI4LHcGMhiA2m7rAq2FJtnDZt79ZG4LAo/bYsZxtcJI16oDZTGbQ6Ul+wrm3xQVlFNhUrtjA/Vlyhaln5HYdxv8UE3+LOWLBgI8RDLDxcPRfZQ3NxpZshfvKKsPeFUWyPTWse3XlOvFOgqb4mdY4KhSdRr4Dl1NkTpcjPgZb2M6w/mhJdEovaZ5vBG2+T0QpR1tjgx9sl13uG6DaYjA39gYNQP6Ns6I1cntAro7Rq312vczeiYEV8IRSDtroZinmLaJ7SdHP2BziRwmXhW6uLIvaCUfYPTLjHtnzFxsmL0iBfZBn+cRXTD6TxTPmZE32zidlv8ktmiZangmahVydfsIaZWpnGWRSs8Ry3toZQOaBXX6bz/lZ1SnjuNEDOYE37MGUaicOhobDeOaNtVecGqKOfvqeTeSp2nrZbQy5u0Si+E+C9pP6dc2GevWPl0ygthE1/OOGpvcCinWmjvcWSscqCu4JpV3GFNLo6y7GOHiXVAZLxiZm4Qdo+Y9HLUnb5kzwjrOqFmZ1CNRF2Fi04R26zgdFRRquIIsSfqjVYV21AZW4eMe2XG7QOymv41IXI5TP0h+DaErhDJgQwchj0duyPEQjLsmXT0OpaMhd1TwkETT2rXarLeHNJezJSZBDbjAW/0AnutIrNhh3BoYfYVOm6eoNdh1DMw2wqm0SJ0CgTdPKF2SOA02LsYYAQLpxzLz3Rgcff9NqvnRyDh4jsKXeuMvlORtXQJaEsOrkq/22TqnqLV3/HbQ51iXaVmd3HDyWLYCEcwYuZJtE98eRJCxsGAcNTFG9uMI49pFMgN1Wc2HTMLHSJZVHc9orFPPAlk1+J/fkbj73k+F2/sH3no45se+v/0r8j/hD9c/gbL96pjDF6XiQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Output"\n        title=""\n        src="/static/addMapOutput-a9c38285aaeb665a8d964edc10be053a-67071.png"\n        srcset="/static/addMapOutput-a9c38285aaeb665a8d964edc10be053a-2689b.png 148w,\n/static/addMapOutput-a9c38285aaeb665a8d964edc10be053a-08022.png 295w,\n/static/addMapOutput-a9c38285aaeb665a8d964edc10be053a-67071.png 574w"\n        sizes="(max-width: 574px) 100vw, 574px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n</ul>\n<p>Without having to link native libraries, we are now able to use</p>\n<p><code>import { Ionicons } from \'@expo/vector-icons\';</code></p>\n<p>which is built on top of <a href="https://github.com/oblador/react-native-vector-icons">react-native-vector-icons</a></p>\n<p>and</p>\n<p><code>import { MapView } from \'expo\';</code></p>\n<p>that built by <a href="https://github.com/react-community/react-native-maps">airbnb/react-native-maps</a></p>\n<p>If you are not convinced that this will save a lot of your time, try go through the installation instructions for\n<a href="https://github.com/react-community/react-native-maps/blob/master/docs/installation.md">react-native-maps</a>\nand\n<a href="https://github.com/oblador/react-native-vector-icons#installation">react-native-vector-icons</a>.</p>\n<br />\n<br />\n<h4>2. Run project on real devices without hassle</h4>\n<p>All you need to do is scan QR code from your console(provided after <code>yarn start</code>) using Expo client app and you are good to go.</p>\n<p>No cable connection needed.</p>\n<p>Plus, you can share the link to others to start testing the app, just need an Expo client installed.</p>\n<br />\n<p>As of the writing of this topic, I am running Expo client version 2.4.7 on my iOS device, and wen can\'t scan the QR code from the app anymore to open the project.</p>\n<p>More about the changes <a href="https://blog.expo.io/upcoming-limitations-to-ios-expo-client-8076d01aee1a">here</a>.</p>\n<p>Alternatively, you can send link to open the project via SMS or Email.</p>\n<p>Or, you can still scan the QR code via your device\'s camera, and it will still prompt to open the project in Expo client.</p>\n<br />\n<hr />\n<br />\n<h4>CRNA or exp</h4>\n<p>We have been talking a lot about Expo now, although it is a CRNA project.</p>\n<p>Why use CRNA when it\'s using Expo under the hood?</p>\n<p>Or should I use Expo instead?</p>\n<p>A simple summary for the differences between CRNA and exp are:</p>\n<ul>\n<li>CRNA does not require an Expo account</li>\n<li>Expo project provides built binaries for app / play store distribution. (For CRNA app, we need to detach the app)</li>\n<li>Expo has some API that are not available on CRNA, like Push Notification.</li>\n</ul>\n<p>Well if that doesn\'t give you enough of details for making a decision.</p>\n<p>I would say go for Expo to access the Expo ecosystem and ways of distributing app.</p>\n<p>Expo is excellent for development and testing(distribution with just sharing link/QR code).</p>\n<p>Both CRNA and Expo are beginner friendly. You can start building apps with all the tools that is available to date, without knowing much about native development.</p>\n<p>And when you are getting better in developing in React Native, try move to use vanilla React Native project with <code>react-native init</code>.\n<br /></p>\n<hr />\n<br />\n<h4>react-native init</h4>\n<p>Expo/CRNA has it\'s limitation, and it is when you need to link native modules or write custom native code that are not supported by Expo.</p>\n<p>So far using <code>react-native init</code> is my favourite.</p>\n<p>It could be overwhelming at first dealing with native dependencies, Xcode and build binaries on your own.\nBut you are in control.</p>\n<p>Eventually when you app is complicated enough or have some unique feature that are not in the list of supported libraries by Expo, you need to <code>detach</code>/<code>eject</code> your Expo app.</p>\n<p>You have more works setting up app distribution with services like <code>TestFlight</code>(iOS) or <code>Fabric</code>(iOS, Android),\nbut it is getting easier with tools like <code>fastlane</code></p>\n<p>Also you can setup CI/CD for test automation and distribution when you have more control over your build process.</p>\n<p>While it is not necessarily that it is required for all apps(especially prototypes or MVP) to have a CI/CD service, that could be the way to go forward beyond MVP phase.</p>\n<br />\n<hr />\n<br />\n<h4>Conclusion</h4>\n<p><code>react-native init</code> is my favourite tool, giving more controls over the build process and flexibility to add custom modules without going through detachment of app from Expo/CRNA.</p>\n<p>That\'s just my personal preference.</p>\n<p>Expo and CRNA are great and definitely fun to work with for experimenting features and libraries. And is going to keep improving with the effort of great team behind the project.</p>\n<p>I will share about some of the features that require custom code that made me stick to <code>react-native init</code> when working on new project to stay flexible with the implementations.</p>\n<p>Stay tuned.</p>',frontmatter:{date:"April 17, 2018",path:"/blog/crna-expo-react-native-init",title:"CRNA, Expo or react-native init for your next project",excerpt:"Create your project with the right tool"}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-crna-expo-react-native-init-15c5a41cabacddfd7d61.js.map