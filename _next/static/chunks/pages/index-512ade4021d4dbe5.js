(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(40499)}])},95677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return i},default:function(){return a}});let r=n(38754),s=(n(67294),r._(n(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let n=s.default,r={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r={...r,...e}),r={...r,...t};let a=r.loader;return(r.loadableGenerated&&(r={...r,...r.loadableGenerated},delete r.loadableGenerated),"boolean"!=typeof r.ssr||r.ssr)?n({...r,loader:()=>null!=a?a().then(l):Promise.resolve(l(()=>null))}):(delete r.webpack,delete r.modules,i(n,r))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return l}});let r=n(38754),s=r._(n(67294)),l=s.default.createContext(null)},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let r=n(38754),s=r._(n(67294)),l=n(92254),i=[],a=[],o=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function i(){if(!r){let t=new d(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&a.push(t=>{for(let n of e)if(t.includes(n))return i()})}function c(e,t){!function(){i();let e=s.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let a=s.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return s.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),s.default.useMemo(()=>{var t;return a.loading||a.error?s.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:r.retry}):a.loaded?s.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return c.preload=()=>i(),c.displayName="LoadableComponent",s.default.forwardRef(c)}(c,e)}function m(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return m(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{m(i).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(o=!0,t());m(a,e).then(n,n)})),window.__NEXT_PRELOADREADY=u.preloadReady;let h=u},11620:function(e,t,n){"use strict";var r=n(85893),s=n(67294),l=n(8849),i=n.n(l),a=n(55317),o=n(82006),c=n(44718);let d="https://www.linkedin.com/in/chinloongtan";class u extends s.Component{render(){return(0,r.jsxs)("footer",{className:"p-4 md:p-8 lg:p-16",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h4",{className:"text-xl mb-4",children:"Contact me via:"}),(0,r.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",onClick:()=>o.Z.trackLinkEvent(d),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-10",children:(0,r.jsx)(i(),{path:a.rbi,size:1})}),"chinloongtan"]}),(0,r.jsx)("div",{className:"mb-0 mt-2 text-white",children:(0,r.jsxs)("a",{href:c.Z.mailto,onClick:()=>o.Z.trackLinkEvent("contactEmail"),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-10",children:(0,r.jsx)(i(),{path:a.VAU,size:1})}),c.Z.email]})})]}),(0,r.jsxs)("div",{className:"mt-6 md:mt-16",children:[(0,r.jsx)("h4",{className:"text-xl mb-4",children:"Or Buy Me A Coffee:"}),(0,r.jsxs)("a",{href:"https://www.buymeacoffee.com/chinloongtan",target:"_blank",rel:"noopener noreferrer",onClick:()=>o.Z.trackLinkEvent("https://www.buymeacoffee.com/chinloongtan"),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)("div",{className:"w-10",children:(0,r.jsx)(i(),{path:a.OxE,size:1})}),"chinloongtan"]})]})]})}}t.Z=u},6109:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),s=n(67294),l=n(8849),i=n.n(l),a=n(55317),o=n(11163);let c={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:2},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}},d=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}];function u(e){let{backToUrl:t,onPress:n,title:l,showRightItems:u,showMobileMenu:m}=e,h=(0,o.useRouter)(),[p,f]=(0,s.useState)(null);return(0,r.jsxs)("nav",{className:"bg-white fixed top-0 left-0 w-full shadow flex items-center z-50",style:{height:64},children:[(0,r.jsxs)("div",{className:"relative flex-1 flex",children:[t?(0,r.jsx)("button",{type:"button",onClick:()=>{h.push(t)},className:"p-4",children:(0,r.jsx)(i(),{path:a.J3k,size:1})}):n?(0,r.jsx)("button",{type:"button",onClick:n,className:"p-4",children:(0,r.jsx)(i(),{path:a.J3k,size:1})}):m?(0,r.jsxs)("button",{type:"button",onClick:()=>f(!p),"aria-label":"Menu",className:"md:hidden p-4 custom-menu ".concat(p?"custom-menu-active":""),children:[(0,r.jsx)("div",{className:"bar first ".concat(null===p?"!animate-none":"")}),(0,r.jsx)("div",{className:"bar second"}),(0,r.jsx)("div",{className:"bar third ".concat(null===p?"!animate-none":"")})]}):null,(0,r.jsx)("div",{className:"flex flex-1 text-xl font-medium items-center",children:function(){let e=t||"/",s=l;return"CHIN LOONG TAN"===l&&(s=(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,r.jsx)("a",{href:e,className:m?"md:ml-4":t||n?"":"mx-4",children:s})}()}),u?(0,r.jsx)("div",{className:"hidden md:block md:mr-4",children:d.map(e=>(0,r.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"ml-4",style:e.isShop?c.learn:{},children:e.label},e.href))}):null]}),(0,r.jsx)("div",{className:"".concat(p?"block":"hidden"," md:hidden absolute bg-white w-full"),style:{top:64},children:d.map(e=>(0,r.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"px-4 py-4 block border-t",onClick:()=>{f(!1)},children:e.label},e.href))})]})}},44718:function(e,t){"use strict";let n="me@chinloongtan.com";t.Z={email:n,mailto:"mailto:".concat(n,"?body=Hi Chin Loong,\n")}},82006:function(e,t,n){"use strict";var r=n(49089);r.ZP.initialize("G-2J1P67RRYC"),t.Z={trackLinkEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r.ZP.event({category:"Link",action:"click",label:e})}}},40499:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(85893),s=n(67294),l=n(5152),i=n.n(l),a=n(11620);!function(e){if(e&&"undefined"!=typeof window){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}}("@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}");var o=function(e){var t=e.sentences,n=e.startDelay,r=void 0===n?0:n,l=e.cursorDelay,i=void 0===l?r:l,a=e.className,o=void 0===a?"":a,c=e.cursorClassName,d=e.cursorColor,u=e.cursorBlinkSpeed,m=e.showCursor,h=e.hideCursorOnFinish,p=void 0!==h&&h,f=e.cursorSmooth,b=e.typingSpeed,x=void 0===b?80:b,v=e.deletingSpeed,y=void 0===v?30:v,g=e.pauseTime,j=void 0===g?1e3:g,N=e.loop,_=void 0===N||N,k=e.style,w=(0,s.useState)(""),C=w[0],E=w[1],S=(0,s.useState)(!1),O=S[0],P=S[1],D=(0,s.useState)(0),T=D[0],R=D[1],L=(0,s.useState)(x),A=L[0],F=L[1],M=(0,s.useRef)(C),Z=(0,s.useRef)(O),B=(0,s.useRef)(T),G=(0,s.useRef)(A),z=(0,s.useRef)(0),H=(0,s.useRef)(!1),V=(0,s.useRef)(!1);M.current=C,Z.current=O,B.current=T,G.current=A;var I=(0,s.useCallback)(function(){var e=B.current%t.length,n=t[e];E(Z.current?n.substring(0,M.current.length-1):n.substring(0,M.current.length+1)),Z.current||M.current!==n||H.current?Z.current&&""===M.current&&(P(!1),F(x),R(B.current+1)):(H.current=!0,setTimeout(function(){P(!0),F(y),H.current=!1},j)),_||e!==t.length-1||M.current.length!==n.length?H.current?setTimeout(function(){z.current=setTimeout(I,G.current)},j):z.current=setTimeout(I,G.current):V.current=!0},[y,_,j,x,t]);return(0,s.useEffect)(function(){return setTimeout(function(){I()},r),function(){return clearTimeout(z.current)}},[I,r]),s.createElement("span",{style:void 0===k?{}:k},s.createElement("span",{className:o},C),!(V.current&&p)&&s.createElement("span",{className:"typist-cursor "+(void 0===c?"":c)+" "+o,style:{opacity:0,visibility:void 0===m||m?"visible":"hidden",color:void 0===d?"":d,animation:"blink "+(void 0===u?700:u)+"ms "+(void 0!==f&&f?"":"steps(1)")+" infinite",animationDelay:i+"ms"}},"|"))},c=n(82006),d=n(44718);class u extends s.Component{render(){return(0,r.jsxs)("div",{className:"bg-section flex text-white justify-center items-center",children:[(0,r.jsx)("div",{className:"bg-main"}),(0,r.jsx)("div",{className:"z-[10]",children:(0,r.jsxs)("div",{className:"flex justify-center items-center flex-col",children:[(0,r.jsxs)("div",{className:"text-center text-2xl md:text-5xl lg:text-6xl font-semibold leading-[180%] capitalize tracking-wider px-4",children:["Build your next",(0,r.jsx)("div",{children:(0,r.jsx)(o,{sentences:["mobile","MVP","iOS","android"],loop:!0,cursorColor:"#0069d9",defaultText:"",className:"text-primaryBlue bg-white px-1 leading-[180%]",cursorClassName:"!bg-transparent"})}),"app with React Native"]}),(0,r.jsxs)("div",{className:"mt-0 md:mt-16",children:[(0,r.jsx)("a",{className:"contact-btn learn-cta-btn",href:"https://mvphub.app/",target:"_blank",onClick:()=>{c.Z.trackLinkEvent("learnHow")},children:"SHOP"}),(0,r.jsx)("a",{className:"contact-btn",href:d.Z.mailto,onClick:()=>{c.Z.trackLinkEvent("contactEmail")},children:"Contact me"})]})]})})]})}constructor(...e){super(...e),this.state={typing:!0},this.done=()=>{this.setState({typing:!1},()=>{this.setState({typing:!0})})}}}n(8849);var m=n(55317);class h extends s.Component{renderServices(){return(0,r.jsxs)("div",{className:"grid grid-cols-1 px-6 md:px-16 lg:grid-cols-3 lg:px-24 gap-8 lg:gap-12",children:[this.renderSection({bg:"#D9EAFF",color:"#089FFF",iconName:m.i2F,title:"Mobile app",description:"Build your next mobile applications with React Native, a cross platform framework that gives you Android and iOS apps with single code base.",fontSize:30}),this.renderSection({bg:"#FFD4D4",color:"#FF5657",iconName:m.K2U,title:"Web app",description:"Develop web application to handle access for different user role. E.g: Merchant portal/Admin dashboard."}),this.renderSection({bg:"#DAFBED",color:"#20E1C2",iconName:m.K12,title:"Backend",description:"Maintain high availability and scalable backend solution for your applications. Build API and architect necessary infrastructure."}),this.renderSection({bg:"#DAFBED",color:"#20E1C2",iconName:m.K12,title:"Fullstack Development",description:"Oversee your entire technology stacks, deploy reliable solutions for your business operations."}),this.renderSection({bg:"#DAFBED",color:"#20E1C2",iconName:m.K12,title:"Minimum viable product",description:"Validate your idea with MVP. Build and release your product's unique features to the market before the competition, with lesser time and cost."}),this.renderSection({bg:"#DAFBED",color:"#20E1C2",iconName:m.K12,title:"Rapid prototyping",description:"Quickly bring your idea to life. Start with small steps, iterate, pivot and grow."})]})}renderSection(e){let{bg:t,color:n,iconName:s,title:l,description:i,fontSize:a}=e;return(0,r.jsx)("div",{className:"bg-gray-50 rounded-md shadow-sm",children:(0,r.jsx)("div",{className:"p-4 md:p-8 relative overflow-hidden",children:(0,r.jsxs)("div",{className:"flex justify-center flex-col z-10 relative",children:[(0,r.jsx)("span",{className:"uppercase font-semibold text-lg text-left",children:l}),(0,r.jsx)("div",{className:"text-gray-800 text-sm md:text-base text-justify mt-2",children:i})]})})})}render(){return(0,r.jsx)("div",{className:"section",children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsxs)("div",{className:"main-title",children:[(0,r.jsx)("h4",{className:"",children:"Services"}),(0,r.jsx)("div",{className:"main-title-underline"})]}),this.renderServices()]})})}}var p=n(6109);let f=i()(()=>Promise.all([n.e(675),n.e(970),n.e(286)]).then(n.bind(n,77518)),{loadableGenerated:{webpack:()=>[77518]},ssr:!1}),b=i()(()=>Promise.all([n.e(675),n.e(383)]).then(n.bind(n,9383)),{loadableGenerated:{webpack:()=>[9383]},ssr:!1}),x=i()(()=>Promise.all([n.e(194),n.e(938)]).then(n.bind(n,28938)),{loadableGenerated:{webpack:()=>[28938]},ssr:!1}),v=i()(()=>Promise.all([n.e(675),n.e(970),n.e(723)]).then(n.bind(n,723)),{loadableGenerated:{webpack:()=>[723]},ssr:!1}),y=i()(()=>Promise.all([n.e(675),n.e(683)]).then(n.bind(n,73683)),{loadableGenerated:{webpack:()=>[73683]},ssr:!1});class g extends s.Component{render(){return(0,r.jsxs)("div",{id:"app",className:"content",children:[(0,r.jsx)(p.Z,{title:"CHIN LOONG TAN",showRightItems:!0,showMobileMenu:!0}),(0,r.jsx)(u,{}),(0,r.jsx)(h,{}),(0,r.jsx)(y,{}),(0,r.jsx)(f,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{}),(0,r.jsx)(x,{}),(0,r.jsx)(a.Z,{})]})}}var j=()=>(0,r.jsx)(g,{})},5152:function(e,t,n){e.exports=n(95677)}},function(e){e.O(0,[702,601,774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);