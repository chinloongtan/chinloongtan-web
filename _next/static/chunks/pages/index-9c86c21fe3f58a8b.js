(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(40499)}])},95677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return i},default:function(){return a}});let s=n(38754),l=(n(67294),s._(n(8976)));function r(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let n=l.default,s={loading:e=>{let{error:t,isLoading:n,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e}),s={...s,...t};let a=s.loader;return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?n({...s,loader:()=>null!=a?a().then(r):Promise.resolve(r(()=>null))}):(delete s.webpack,delete s.modules,i(n,s))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let s=n(38754),l=s._(n(67294)),r=l.default.createContext(null)},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let s=n(38754),l=s._(n(67294)),r=n(92254),i=[],a=[],o=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),s=null;function i(){if(!s){let t=new d(e,n);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&a.push(t=>{for(let n of e)if(t.includes(n))return i()})}function c(e,t){!function(){i();let e=l.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let a=l.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:s.retry}),[]),l.default.useMemo(()=>{var t;return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:s.retry}):a.loaded?l.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return c.preload=()=>i(),c.displayName="LoadableComponent",l.default.forwardRef(c)}(c,e)}function m(e,t){let n=[];for(;e.length;){let s=e.pop();n.push(s(t))}return Promise.all(n).then(()=>{if(e.length)return m(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{m(i).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(o=!0,t());m(a,e).then(n,n)})),window.__NEXT_PRELOADREADY=u.preloadReady;let h=u},11620:function(e,t,n){"use strict";var s=n(85893),l=n(67294),r=n(8849),i=n.n(r),a=n(55317),o=n(82006),c=n(44718);let d="https://www.linkedin.com/in/chinloongtan";class u extends l.Component{render(){return(0,s.jsxs)("footer",{className:"p-4 md:p-8 lg:p-16",children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("h4",{className:"text-xl mb-4",children:"Contact me via:"}),(0,s.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",onClick:()=>o.Z.trackLinkEvent(d),style:{color:"white"},className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-12",children:(0,s.jsx)(i(),{path:a.rbi,size:1.5})}),"chinloongtan"]}),(0,s.jsx)("div",{className:"",style:{marginBottom:0,color:"white"},children:(0,s.jsxs)("a",{href:c.Z.mailto,onClick:()=>o.Z.trackLinkEvent("contactEmail"),style:{color:"white"},className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-12",children:(0,s.jsx)(i(),{path:a.VAU,size:1.5})}),c.Z.email]})})]}),(0,s.jsxs)("div",{className:"mt-6 md:mt-16",children:[(0,s.jsx)("h4",{className:"text-xl mb-4",children:"Or Buy Me A Coffee:"}),(0,s.jsxs)("a",{href:"https://www.buymeacoffee.com/chinloongtan",target:"_blank",rel:"noopener noreferrer",onClick:()=>o.Z.trackLinkEvent("https://www.buymeacoffee.com/chinloongtan"),style:{color:"white"},className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-12",children:(0,s.jsx)(i(),{path:a.OxE,size:1.5})}),"chinloongtan"]})]})]})}constructor(...e){super(...e),this.state={isLinkedInActive:!1,isFacebookActive:!1}}}t.Z=u},6109:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(85893),l=n(67294),r=n(8849),i=n.n(r),a=n(55317),o=n(11163);let c={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:2},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}},d=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}];function u(e){let{backToUrl:t,onPress:n,title:r,showRightItems:u,showMobileMenu:m}=e,h=(0,o.useRouter)(),[f,p]=(0,l.useState)(null);return(0,s.jsxs)("nav",{className:"bg-white fixed top-0 left-0 w-full shadow flex items-center z-50",style:{height:64},children:[(0,s.jsxs)("div",{className:"relative flex-1 flex",children:[t?(0,s.jsx)("button",{type:"button",onClick:()=>{h.push(t)},className:"p-4",children:(0,s.jsx)(i(),{path:a.J3k,size:1})}):n?(0,s.jsx)("button",{type:"button",onClick:n,className:"p-4",children:(0,s.jsx)(i(),{path:a.J3k,size:1})}):m?(0,s.jsxs)("button",{type:"button",onClick:()=>p(!f),"aria-label":"Menu",className:"md:hidden p-4 custom-menu ".concat(f?"custom-menu-active":""),children:[(0,s.jsx)("div",{className:"bar first ".concat(null===f?"!animate-none":"")}),(0,s.jsx)("div",{className:"bar second"}),(0,s.jsx)("div",{className:"bar third ".concat(null===f?"!animate-none":"")})]}):null,(0,s.jsx)("div",{className:"flex flex-1 text-xl font-medium items-center",children:function(){let e=t||"/",l=r;return"CHIN LOONG TAN"===r&&(l=(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,s.jsx)("a",{href:e,className:m?"md:ml-4":t||n?"":"mx-4",children:l})}()}),u?(0,s.jsx)("div",{className:"hidden md:block md:mr-4",children:d.map(e=>(0,s.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"ml-4",style:e.isShop?c.learn:{},children:e.label},e.href))}):null]}),(0,s.jsx)("div",{className:"".concat(f?"block":"hidden"," md:hidden absolute bg-white w-full"),style:{top:64},children:d.map(e=>(0,s.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"px-4 py-4 block border-t",onClick:()=>{p(!1)},children:e.label},e.href))})]})}},44718:function(e,t){"use strict";let n="me@chinloongtan.com";t.Z={email:n,mailto:"mailto:".concat(n,"?body=Hi Chin Loong,\n")}},82006:function(e,t,n){"use strict";var s=n(49089);s.ZP.initialize("G-2J1P67RRYC"),t.Z={trackLinkEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";s.ZP.event({category:"Link",action:"click",label:e})}}},40499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(85893),l=n(67294),r=n(5152),i=n.n(r),a=n(11620);!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}("@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}");var o=function(e){var t=e.sentences,n=e.startDelay,s=void 0===n?0:n,r=e.cursorDelay,i=void 0===r?s:r,a=e.className,o=void 0===a?"":a,c=e.cursorClassName,d=e.cursorColor,u=e.cursorBlinkSpeed,m=e.showCursor,h=e.hideCursorOnFinish,f=void 0!==h&&h,p=e.cursorSmooth,b=e.typingSpeed,x=void 0===b?80:b,v=e.deletingSpeed,y=void 0===v?30:v,j=e.pauseTime,g=void 0===j?1e3:j,N=e.loop,_=void 0===N||N,k=e.style,w=(0,l.useState)(""),C=w[0],S=w[1],E=(0,l.useState)(!1),O=E[0],P=E[1],T=(0,l.useState)(0),L=T[0],R=T[1],D=(0,l.useState)(x),A=D[0],F=D[1],Z=(0,l.useRef)(C),M=(0,l.useRef)(O),G=(0,l.useRef)(L),B=(0,l.useRef)(A),z=(0,l.useRef)(0),H=(0,l.useRef)(!1),I=(0,l.useRef)(!1);Z.current=C,M.current=O,G.current=L,B.current=A;var V=(0,l.useCallback)(function(){var e=G.current%t.length,n=t[e];S(M.current?n.substring(0,Z.current.length-1):n.substring(0,Z.current.length+1)),M.current||Z.current!==n||H.current?M.current&&""===Z.current&&(P(!1),F(x),R(G.current+1)):(H.current=!0,setTimeout(function(){P(!0),F(y),H.current=!1},g)),_||e!==t.length-1||Z.current.length!==n.length?H.current?setTimeout(function(){z.current=setTimeout(V,B.current)},g):z.current=setTimeout(V,B.current):I.current=!0},[y,_,g,x,t]);return(0,l.useEffect)(function(){return setTimeout(function(){V()},s),function(){return clearTimeout(z.current)}},[V,s]),l.createElement("span",{style:void 0===k?{}:k},l.createElement("span",{className:o},C),!(I.current&&f)&&l.createElement("span",{className:"typist-cursor "+(void 0===c?"":c)+" "+o,style:{opacity:0,visibility:void 0===m||m?"visible":"hidden",color:void 0===d?"":d,animation:"blink "+(void 0===u?700:u)+"ms "+(void 0!==p&&p?"":"steps(1)")+" infinite",animationDelay:i+"ms"}},"|"))},c=n(82006),d=n(44718);let u={avatar:{width:120,height:120,borderRadius:60,maxWidth:120},buttons:{marginTop:30}};class m extends l.Component{render(){return(0,s.jsxs)("div",{className:"bg-section flex text-white justify-center items-center",children:[(0,s.jsxs)("div",{className:"bg-main",children:[(0,s.jsx)("div",{className:"slice slice-1"}),(0,s.jsx)("div",{className:"slice slice-2"}),(0,s.jsx)("div",{className:"slice slice-3"}),(0,s.jsx)("div",{className:"slice slice-4"}),(0,s.jsx)("div",{className:"slice slice-5"}),(0,s.jsx)("div",{className:"slice slice-6"}),(0,s.jsx)("div",{className:"slice slice-7"}),(0,s.jsx)("div",{className:"slice slice-8"}),(0,s.jsx)("div",{className:"overlay"})]}),(0,s.jsx)("div",{className:"z-[10]",children:(0,s.jsxs)("div",{className:"intro",children:[(0,s.jsxs)("div",{children:["Build your next",(0,s.jsx)("div",{children:(0,s.jsx)(o,{sentences:["mobile","MVP","iOS","android"],loop:!0,cursorColor:"white",defaultText:""})}),"app with React Native"]}),(0,s.jsxs)("div",{style:u.buttons,children:[(0,s.jsx)("a",{className:"contact-btn learn-cta-btn",href:"https://mvphub.app/",target:"_blank",onClick:()=>{c.Z.trackLinkEvent("learnHow")},children:"SHOP"}),(0,s.jsx)("a",{className:"contact-btn",href:d.Z.mailto,onClick:()=>{c.Z.trackLinkEvent("contactEmail")},children:"Contact me"})]})]})})]})}constructor(...e){super(...e),this.state={typing:!0},this.done=()=>{this.setState({typing:!1},()=>{this.setState({typing:!0})})}}}var h=n(8849),f=n.n(h),p=n(55317);class b extends l.Component{renderServices(){return(0,s.jsxs)("div",{className:"grid grid-cols-1 px-6 md:px-16 lg:grid-cols-3 lg:px-32 gap-8 lg:gap-16",children:[this.renderSection({bg:"#D9EAFF",color:"#089FFF",iconName:p.i2F,title:"Develop mobile app",description:"Build your next mobile applications with React Native, a cross platform framework that gives you Android and iOS apps with single code base.",fontSize:30}),this.renderSection({bg:"#FFD4D4",color:"#FF5657",iconName:p.K2U,title:"Build web app",description:"Develop web application to handle access for different user role. E.g: Merchant portal/Admin dashboard."}),this.renderSection({bg:"#DAFBED",color:"#20E1C2",iconName:p.K12,title:"Develop Backend",description:"Maintain high availability and scalable backend solution for your applications. Build API and architect necessary infrastructure."})]})}renderSection(e){let{bg:t,color:n,iconName:l,title:r,description:i,fontSize:a}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"w-12 h-12 flex items-center justify-center rounded-full",style:{backgroundColor:t},children:(0,s.jsx)("div",{className:"",style:{color:n},children:(0,s.jsx)(f(),{path:l,size:1})})}),(0,s.jsx)("span",{className:"uppercase ml-4 font-medium",children:r})]}),(0,s.jsx)("div",{className:"text-gray-800 text-sm md:text-base text-justify mt-2",children:i})]})}render(){return(0,s.jsx)("div",{className:"section",children:(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)("div",{className:"main-title",children:[(0,s.jsx)("h4",{className:"",children:"Services"}),(0,s.jsx)("div",{className:"main-title-underline"})]}),this.renderServices()]})})}}var x=n(6109);let v=i()(()=>Promise.all([n.e(675),n.e(970),n.e(286)]).then(n.bind(n,77518)),{loadableGenerated:{webpack:()=>[77518]},ssr:!1}),y=i()(()=>Promise.all([n.e(675),n.e(383)]).then(n.bind(n,9383)),{loadableGenerated:{webpack:()=>[9383]},ssr:!1}),j=i()(()=>Promise.all([n.e(194),n.e(938)]).then(n.bind(n,28938)),{loadableGenerated:{webpack:()=>[28938]},ssr:!1}),g=i()(()=>Promise.all([n.e(675),n.e(970),n.e(723)]).then(n.bind(n,723)),{loadableGenerated:{webpack:()=>[723]},ssr:!1}),N=i()(()=>Promise.all([n.e(675),n.e(683)]).then(n.bind(n,73683)),{loadableGenerated:{webpack:()=>[73683]},ssr:!1});class _ extends l.Component{render(){return(0,s.jsxs)("div",{id:"app",className:"content",children:[(0,s.jsx)(x.Z,{title:"CHIN LOONG TAN",showRightItems:!0,showMobileMenu:!0}),(0,s.jsx)(m,{}),(0,s.jsx)(b,{}),(0,s.jsx)(N,{}),(0,s.jsx)(v,{}),(0,s.jsx)(y,{}),(0,s.jsx)(g,{}),(0,s.jsx)(j,{}),(0,s.jsx)(a.Z,{})]})}}var k=()=>(0,s.jsx)(_,{})},5152:function(e,t,n){e.exports=n(95677)}},function(e){e.O(0,[702,601,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);