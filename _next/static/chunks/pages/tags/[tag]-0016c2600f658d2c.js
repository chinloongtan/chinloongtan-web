(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{8849:function(e,t,r){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t||4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=r(45697)},function(e,t){e.exports=r(67294)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(0),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=0,s=n.forwardRef(function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,c=void 0===s?null:s,d=e.size,p=void 0===d?null:d,u=e.color,f=void 0===u?"currentColor":u,m=e.horizontal,h=void 0===m?null:m,b=e.vertical,y=void 0===b?null:b,g=e.rotate,v=void 0===g?null:g,x=e.spin,j=void 0===x?null:x,O=e.style,k=void 0===O?{}:O,w=e.children,N=l(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);i++;var _,T=null!==j&&j,S=n.Children.map(w,function(e){!0!==T&&(T=!0===(null===j?e.props.spin:j));var t=e.props.size;"number"==typeof p&&"number"==typeof e.props.size&&(t=e.props.size/p);var r={size:t,color:null===f?e.props.color:f,horizontal:null===h?e.props.horizontal:h,vertical:null===y?e.props.vertical:y,rotate:null===v?e.props.rotate:v,spin:null===j?e.props.spin:j,inStack:!0};return n.cloneElement(e,r)});null!==p&&(k.width="string"==typeof p?p:1.5*p+"rem");var E,z="stack_labelledby_"+i,C="stack_describedby_"+i;if(o)_=c?z+" "+C:z;else if(E="presentation",c)throw Error("title attribute required when description is set");return n.createElement("svg",a({ref:t,viewBox:"0 0 24 24",style:k,role:E,"aria-labelledby":_},N),o&&n.createElement("title",{id:z},o),c&&n.createElement("desc",{id:C},c),T&&n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }","@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"),S)});s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null},r.d(t,"Icon",function(){return u}),r.d(t,"Stack",function(){return s});var c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},p=0,u=n.forwardRef(function(e,t){var r=e.path,o=e.id,a=void 0===o?++p:o,l=e.title,i=void 0===l?null:l,s=e.description,u=void 0===s?null:s,f=e.size,m=void 0===f?null:f,h=e.color,b=void 0===h?"currentColor":h,y=e.horizontal,g=void 0!==y&&y,v=e.vertical,x=void 0!==v&&v,j=e.rotate,O=void 0===j?0:j,k=e.spin,w=void 0!==k&&k,N=e.style,_=void 0===N?{}:N,T=e.inStack,S=void 0!==T&&T,E=d(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),z={},C=[];null!==m&&(S?C.push("scale("+m+")"):(_.width="string"==typeof m?m:1.5*m+"rem",_.height=_.width)),g&&C.push("scaleX(-1)"),x&&C.push("scaleY(-1)"),0!==O&&C.push("rotate("+O+"deg)"),null!==b&&(z.fill=b);var P=n.createElement("path",c({d:r,style:z},S?E:{})),R=P;C.length>0&&(_.transform=C.join(" "),_.transformOrigin="center",S&&(R=n.createElement("g",{style:_},P,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var L,I=R,B=!0===w||"number"!=typeof w?2:w,D=!S&&(g||x);if(B<0&&(D=!D),w&&(I=n.createElement("g",{style:{animation:"spin"+(D?"-inverse":"")+" linear "+Math.abs(B)+"s infinite",transformOrigin:"center"}},R,!(g||x||0!==O)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),S)return I;var F,G="icon_labelledby_"+a,M="icon_describedby_"+a;if(i)L=u?G+" "+M:G;else if(F="presentation",u)throw Error("title attribute required when description is set");return n.createElement("svg",c({ref:t,viewBox:"0 0 24 24",style:_,role:F,"aria-labelledby":L},E),i&&n.createElement("title",{id:G},i),u&&n.createElement("desc",{id:M},u),!S&&w&&(D?n.createElement("style",null,"@keyframes spin-inverse { from { transform: rotate(0deg) } to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }")),I)});u.displayName="Icon",u.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},u.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1},t.default=u}])},349:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[tag]",function(){return r(94797)}])},6109:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(85893),o=r(67294),a=r(8849),l=r.n(a),i=r(55317),s=r(11163);let c={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:2},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}},d=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}];function p(e){let{backToUrl:t,onPress:r,title:a,showRightItems:p,showMobileMenu:u}=e,f=(0,s.useRouter)(),[m,h]=(0,o.useState)(null);return(0,n.jsxs)("nav",{className:"bg-white fixed top-0 left-0 w-full shadow flex items-center z-50",style:{height:64},children:[(0,n.jsxs)("div",{className:"relative flex-1 flex",children:[t?(0,n.jsx)("button",{type:"button",onClick:()=>{f.push(t)},className:"p-4",children:(0,n.jsx)(l(),{path:i.J3k,size:1})}):r?(0,n.jsx)("button",{type:"button",onClick:r,className:"p-4",children:(0,n.jsx)(l(),{path:i.J3k,size:1})}):u?(0,n.jsxs)("button",{type:"button",onClick:()=>h(!m),"aria-label":"Menu",className:"md:hidden p-4 custom-menu ".concat(m?"custom-menu-active":""),children:[(0,n.jsx)("div",{className:"bar first ".concat(null===m?"!animate-none":"")}),(0,n.jsx)("div",{className:"bar second"}),(0,n.jsx)("div",{className:"bar third ".concat(null===m?"!animate-none":"")})]}):null,(0,n.jsx)("div",{className:"flex flex-1 text-xl font-medium items-center",children:function(){let e=t||"/",o=a;return"CHIN LOONG TAN"===a&&(o=(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,n.jsx)("a",{href:e,className:u?"md:ml-4":t||r?"":"mx-4",children:o})}()}),p?(0,n.jsx)("div",{className:"hidden md:block md:mr-4",children:d.map(e=>(0,n.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"ml-4",style:e.isShop?c.learn:{},children:e.label},e.href))}):null]}),(0,n.jsx)("div",{className:"".concat(m?"block":"hidden"," md:hidden absolute bg-white w-full"),style:{top:64},children:d.map(e=>(0,n.jsx)("a",{href:e.href,target:e.isShop?"_blank":"_self",className:"px-4 py-4 block border-t",onClick:()=>{h(!1)},children:e.label},e.href))})]})}},35270:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(85893);r(67294);var o=r(6767),a=r.n(o);let l={"realm-db":"#f5595e","offline-first":"#a047d9","e-commerce":"#00a0ff",tool:"#40407a",payment:"#00b960",typescript:"#00b960",aws:"#ffa502",docker:"#aaa69d",gps:"#fdcb6e","react-native":"#4834d4",android:"#4834d4",ios:"#4834d4","node.js":"#fdd835",backend:"#35fdb4","next.js":"#943126",serverless:"#1B4F72"},i=(e,t)=>t?a()(e).alpha(t):e;var s=r(41664),c=r.n(s);let d={tag:{marginRight:10,backgroundColor:"grey",padding:5,paddingLeft:8,paddingRight:8,borderRadius:6,fontFamily:"Raleway",textDecoration:"none"}};function p(e){let{item:t,count:r}=e,o=l[t],a={...d.tag};return o&&(a.color=o,a.backgroundColor=i(o,.3)),(0,n.jsxs)(c(),{style:a,href:"/tags/".concat(t),className:"font-medium",children:[t," ",r&&"(".concat(r,")")]})}},29777:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(85893);r(67294);var o=r(35270);let a={tagsContainer:{flexDirection:"row",display:"flex",marginTop:10,fontSize:14,flexWrap:"wrap"}};function l(e){let{data:t}=e;return(0,n.jsx)("div",{style:a.tagsContainer,children:(t||[]).map(e=>(0,n.jsx)(o.Z,{item:e},"tag-".concat(e)))})}},94797:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return u}});var n=r(85893);r(67294);var o=r(9008),a=r.n(o),l=r(11163),i=r(6109),s=r(29777),c=r(41664),d=r.n(c);let p={description:{color:"#576366"},timeToRead:{float:"right"},tagsContainer:{flexDirection:"row",display:"flex",marginTop:10,fontSize:14},tag:{marginRight:10,backgroundColor:"grey",padding:5,paddingLeft:8,paddingRight:8,borderRadius:6,fontWeight:"bold"}};var u=!0;t.default=e=>{let{posts:t,totalCount:r,tag:o}=e,c=(0,l.useRouter)();return(0,n.jsxs)("div",{className:"blog-posts content",children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Chin Loong Tan - Tags/".concat(o)}),(0,n.jsx)("meta",{name:"title",content:"Chin Loong Tan - Tags/".concat(o)},"title"),(0,n.jsx)("meta",{name:"description",content:"Tags/".concat(o)},"description")]}),(0,n.jsx)(i.Z,{title:"TAGS/".concat(o),onPress:()=>{c.back()}}),(0,n.jsxs)("div",{className:"py-4 px-6 md:px-16 lg:px-32 text-grey",children:[(0,n.jsx)("b",{className:"text-black",children:r||0})," post",1===r?"":"s"," tagged with ",(0,n.jsxs)("b",{className:"text-black",children:['"',o,'"']}),(0,n.jsx)("br",{}),(0,n.jsx)(d(),{href:"/tags",className:"text-primaryBlue font-medium",children:"View all tags"})]}),t.filter(e=>e.frontmatter.title.length>0).map(e=>(0,n.jsx)("div",{className:"px-4 md:px-16 lg:px-32",children:(0,n.jsxs)("div",{className:"blog-post-preview",children:[(0,n.jsxs)(d(),{style:{color:"black"},className:"blog-post-preview-link",href:e.frontmatter.path,children:[(0,n.jsx)("h4",{className:"font-bold text-xl",children:e.frontmatter.title}),(0,n.jsx)("h6",{className:"text-md",style:p.description,children:new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.frontmatter.date))}),(0,n.jsxs)("div",{className:"text-base mt-2",children:[(0,n.jsx)("span",{style:p.description,children:e.frontmatter.excerpt}),(0,n.jsxs)("span",{className:"text-sm block md:float-right",children:[e.timeToRead," min read"]})]})]}),(0,n.jsx)(s.Z,{data:e.frontmatter.tags})]})},e.frontmatter.path))]})}},11163:function(e,t,r){e.exports=r(96885)},92703:function(e,t,r){"use strict";var n=r(50414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,l){if(l!==n){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},45697:function(e,t,r){e.exports=r(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[702,518,774,888,179],function(){return e(e.s=349)}),_N_E=e.O()}]);