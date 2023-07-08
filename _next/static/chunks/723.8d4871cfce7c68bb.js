"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{63228:function(e,i,s){s.r(i),i.default={src:"/_next/static/media/ktmbuddy.eba58081.png",height:135,width:135,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAsElEQVR42jXNTQqCUBQF4Leu1tAimrcSIZAIIhoEUdMGzRo0CSISA8Gw0P6sNEGSMgpTeef2ntIdXM7hGxwGgIpDGGLvQARZwOTPc1hrdFq8WiFVQRQJKyDLMJ2QsfrqWswYjUd/SFPUa1zXyD16w0HY75EAlCPzWdJtBw3Fa6of15VQTnOiLLi9l4uUi0iQEN2xs2GZ3Lvg4MA0RMYrZng+EPjwPfKvsDdwtjifkCQ/k26rRBi+xpEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},42969:function(e,i,s){s.r(i),i.default={src:"/_next/static/media/icon.1f2fb9c7.png",height:100,width:100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAApklEQVR42mPgZ2FhYGJigAEEi4GTK1lVpdfIsF5bS56Fj4GBm5mBlQEEWJn7DYwuOLodsLE35QQJsIMIFhDRbqZ3ItBph5e9qbA9A5MzN7MGAwS0lRmc2GC9c1G4l+01Y9Xn2kpzGMCAub/J9PwemwPrY/2dX1ho/jRUX80BNpMrOUKtt06nvsjaWGu6pvxyFdkSXh4GBn5eVmRHMjIzsLAysLEKAwDkrCJpG+OF4AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},75999:function(e,i,s){var t=s(85893),n=s(67294),r=s(25675),l=s.n(r);class d extends n.Component{renderAppLink(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ios",{app:i,trackEvent:s}=this.props,n=i.iosLink;return("android"===e&&(n=i.androidLink),n)?(0,t.jsxs)(t.Fragment,{children:["android"===e&&(0,t.jsx)("span",{className:"text-grey",children:"/"}),(0,t.jsx)("a",{href:n,target:"_blank",onClick:()=>s(n),className:"text-primaryBlue mr-4",children:"ios"===e?(0,t.jsx)("div",{className:"font-bold text-sm",style:{letterSpacing:2},children:"iOS"}):(0,t.jsx)("div",{className:"ml-4 font-bold text-sm",style:{letterSpacing:4},children:"Android"})})]}):null}renderAppWebsite(){let{app:e,trackEvent:i}=this.props;return e.website?(0,t.jsx)("div",{className:"my-4",children:(0,t.jsx)("a",{href:e.website,target:"_blank",rel:"noopener noreferrer",onClick:()=>i(e.website),className:"text-primaryBlue",children:e.website})}):null}render(){let{app:e}=this.props;return(0,t.jsx)("div",{className:"bg-white rounded-md shadow-md",children:(0,t.jsxs)("div",{className:"p-4 flex-col flex h-full",children:[(0,t.jsxs)("div",{className:"flex items-center mb-4",children:[(0,t.jsx)(l(),{className:"app-icon-shadow",src:e.icon,alt:""}),(0,t.jsxs)("div",{className:"mx-4",children:[(0,t.jsx)("div",{className:"font-medium",children:e.title}),(0,t.jsx)("div",{className:"text-grey text-sm",children:e.subtitle})]})]}),this.renderAppWebsite(),(0,t.jsx)("div",{className:"flex-1 text-gray-800",children:(0,t.jsx)("div",{className:"whitespace-pre-wrap",style:{fontSize:14},children:e.description})}),(0,t.jsxs)("div",{className:"mt-4 flex items-center",children:[this.renderAppLink(),this.renderAppLink("android")]})]})})}}i.Z=d},723:function(e,i,s){s.r(i),s.d(i,{default:function(){return u}});var t=s(85893),n=s(67294),r=s(75999),l=s(82006),d=s(63105),a=s.n(d),c=s(89734),o=s.n(c);let p={squaredBox:{icon:s(42969)},ktmBuddy:{icon:s(63228)}},m=[{id:"squaredBox",cover:null,icon:p.squaredBox.icon,title:"Squared Box",subtitle:"The Best Color Puzzle!",website:"",description:"The best Color Puzzle ever! Perfect mini game to play while waiting in a queue or when you are commuting with a train. Think logically and move logically!",iosLink:"https://itunes.apple.com/us/app/squared-box/id1424904552?ls=1&mt=8",androidLink:"",sliderPosition:1},{id:"ktmBuddy",cover:null,icon:p.ktmBuddy.icon,title:"KTMBuddy",subtitle:"Your everyday commute made easy.",website:"",description:"Check KTM train timetable without hassle. With KTM train timetable effective 03 Jun 2018. Available routes: Blue line and Red line of KTMB train.",iosLink:"https://itunes.apple.com/us/app/ktm-buddy/id1434968365?ls=1&mt=8",androidLink:"https://play.google.com/store/apps/details?id=com.chinloongtan.app.ktmbuddy",sliderPosition:2}];m=a()(m,e=>!e.hidden),m=o()(m,["sliderPosition"]).reverse();let h=m;class A extends n.Component{renderApp(e){return(0,t.jsx)(r.Z,{app:e,trackEvent:l.Z.trackLinkEvent},e.id)}renderApps(){return(0,t.jsxs)("div",{className:"section",children:[(0,t.jsxs)("div",{className:"main-title",children:[(0,t.jsx)("h4",{className:"",children:"Side Projects"}),(0,t.jsx)("div",{className:"main-title-underline"})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 px-4 md:px-16 lg:grid-cols-3 lg:px-32 gap-4",children:h.map(e=>this.renderApp(e))})]})}render(){return(0,t.jsx)("div",{className:"section-colored-bg",children:(0,t.jsx)("div",{className:"",children:this.renderApps()})})}}var u=A}}]);