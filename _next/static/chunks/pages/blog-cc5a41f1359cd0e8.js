(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{57286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(40846)}])},1573:function(e,t,n){"use strict";var i=n(14924),r=n(85893),a=n(67294),s=n(75980),o=n.n(s),l=n(35102),c=n(94382);let d="https://www.linkedin.com/in/chinloongtan";class h extends a.Component{render(){return(0,r.jsxs)("footer",{className:"p-4 md:p-8 lg:p-16",children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("h4",{className:"text-xl mb-4",children:"Contact me via:"}),(0,r.jsxs)("a",{href:d,target:"_blank",rel:"noopener noreferrer",onClick:()=>l.Z.trackLinkEvent(d),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)(o(),{name:"linkedin-square",style:{width:45,fontSize:35,color:"white"}}),"chinloongtan"]}),(0,r.jsx)("div",{className:"",style:{marginBottom:0,color:"white"},children:(0,r.jsxs)("a",{href:c.Z.mailto,onClick:()=>l.Z.trackLinkEvent("contactEmail"),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)(o(),{name:"envelope-open-o",style:{width:45,fontSize:30,color:"white",marginTop:15,marginBottom:15}}),c.Z.email]})})]}),(0,r.jsxs)("div",{className:"mt-6 md:mt-16",children:[(0,r.jsx)("h4",{className:"text-xl mb-4",children:"Or Buy Me A Coffee:"}),(0,r.jsxs)("a",{href:"https://www.buymeacoffee.com/chinloongtan",target:"_blank",rel:"noopener noreferrer",onClick:()=>l.Z.trackLinkEvent("https://www.buymeacoffee.com/chinloongtan"),style:{color:"white"},className:"flex items-center",children:[(0,r.jsx)(o(),{name:"coffee",style:{width:45,fontSize:30,color:"white"}}),"chinloongtan"]})]})]})}constructor(...e){super(...e),(0,i.Z)(this,"state",{isLinkedInActive:!1,isFacebookActive:!1})}}t.Z=h},64892:function(e,t,n){"use strict";var i=n(14924),r=n(85893),a=n(67294),s=n(41664),o=n.n(s),l=n(85050),c=n(61953),d=n(47937),h=n(60313),m=n(326),p=n(21023),f=n(20784),x=n(29630);let g=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}],u={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:2},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}};class b extends a.Component{componentDidMount(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){this.setState({isMobile:window.innerWidth<=760})}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState({menuOpen:!this.state.menuOpen})}renderIconElementRight(){let{showRightItems:e}=this.props;return e?(0,r.jsx)(c.Z,{sx:{display:{xs:"none",sm:"block"}},children:g.map(e=>e.isShop?(0,r.jsx)(o(),{href:e.href,target:"_blank",style:{...u.navLink,...u.learn},children:e.label},e.href):(0,r.jsx)(o(),{href:e.href,style:{...u.navLink,...u.aboutLink},children:e.label},e.href))}):null}renderTitle(){let{title:e,canGoBack:t,backToUrl:n}=this.props,i=e;return"CHIN LOONG TAN"===e&&(i=(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,r.jsx)(o(),{href:n||"/",style:u.navLink,className:"",children:i})}renderIconElementLeft(){let{canGoBack:e,backToUrl:t,onPress:n}=this.props;return e?n?(0,r.jsx)(h.Z,{"aria-label":"back",edge:"start",onClick:n,sx:{color:"black"},children:(0,r.jsx)(p.Z,{})}):(0,r.jsx)(o(),{href:t,children:(0,r.jsx)(h.Z,{"aria-label":"back",edge:"start",sx:{color:"black"},children:(0,r.jsx)(p.Z,{})})}):(0,r.jsx)(h.Z,{"aria-label":"open drawer",edge:"start",onClick:()=>this.handleDrawerToggle(),sx:{mr:2,display:{sm:"none"}},children:(0,r.jsx)(m.Z,{})})}render(){let{backToUrl:e,canGoBack:t}=this.props,{window:n}=this.props,i=(0,r.jsx)(c.Z,{onClick:()=>this.handleDrawerToggle(),sx:{textAlign:"center"},children:(0,r.jsxs)("ul",{style:{listStyle:"none",marginTop:20,padding:0},children:[(0,r.jsx)("li",{className:"uppercase py-1",children:(0,r.jsx)(o(),{href:"/",children:"Home"})}),g.map(e=>(0,r.jsx)("li",{className:"uppercase py-1",children:e.isShop?(0,r.jsx)(o(),{href:e.href,target:"_blank",children:e.label},e.href):(0,r.jsx)(o(),{href:e.href,children:e.label},e.href)},e.href))]})});return(0,r.jsx)("div",{className:"custom-nav",children:(0,r.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,r.jsx)(l.Z,{component:"nav",style:{backgroundColor:"white"},children:(0,r.jsxs)(f.Z,{children:[this.renderIconElementLeft(),(0,r.jsx)(x.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{sm:"block"}},children:this.renderTitle()}),this.renderIconElementRight()]})}),(0,r.jsx)(c.Z,{component:"nav",children:(0,r.jsx)(d.ZP,{container:void 0!==n?()=>n().document.body:void 0,variant:"temporary",open:this.state.mobileOpen,onClose:()=>this.handleDrawerToggle(),ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:i})})]})})}constructor(...e){super(...e),(0,i.Z)(this,"state",{menuOpen:!1,isMobile:!1,mobileOpen:!1}),(0,i.Z)(this,"handleDrawerToggle",()=>{this.setState({mobileOpen:!this.state.mobileOpen})})}}t.Z=b},92792:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(85893);n(67294);var r=n(6767),a=n.n(r);let s={"realm-db":"#f5595e","offline-first":"#a047d9","e-commerce":"#00a0ff",tool:"#40407a",payment:"#00b960",typescript:"#00b960",aws:"#ffa502",docker:"#aaa69d",gps:"#fdcb6e","react-native":"#4834d4",android:"#4834d4",ios:"#4834d4","node.js":"#fdd835",backend:"#35fdb4","next.js":"#943126",serverless:"#1B4F72"},o=(e,t)=>t?a()(e).alpha(t):e;var l=n(41664),c=n.n(l);let d={tag:{marginRight:10,backgroundColor:"grey",padding:5,paddingLeft:8,paddingRight:8,borderRadius:6,fontFamily:"Raleway",textDecoration:"none"}};function h(e){let{item:t,count:n}=e,r=s[t],a={...d.tag};return r&&(a.color=r,a.backgroundColor=o(r,.3)),(0,i.jsxs)(c(),{style:a,href:"/tags/".concat(t),className:"font-medium",children:[t," ",n&&"(".concat(n,")")]})}},74362:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(85893);n(67294);var r=n(92792);let a={tagsContainer:{flexDirection:"row",display:"flex",marginTop:10,fontSize:14,flexWrap:"wrap"}};function s(e){let{data:t}=e;return(0,i.jsx)("div",{style:a.tagsContainer,children:(t||[]).map(e=>(0,i.jsx)(r.Z,{item:e},"tag-".concat(e)))})}},94382:function(e,t){"use strict";let n="me@chinloongtan.com";t.Z={email:n,mailto:"mailto:".concat(n,"?body=Hi Chin Loong,\n")}},35102:function(e,t,n){"use strict";var i=n(49089);i.ZP.initialize("G-2J1P67RRYC"),t.Z={trackLinkEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";i.ZP.event({category:"Link",action:"click",label:e})}}},40846:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return h}});var i=n(85893);n(67294);var r=n(41664),a=n.n(r),s=n(74362),o=n(64892),l=n(1573);let c={description:{color:"#576366"},timeToRead:{float:"right"},tagsContainer:{flexDirection:"row",display:"flex",marginTop:10,fontSize:14},tag:{marginRight:10,backgroundColor:"grey",padding:5,paddingLeft:8,paddingRight:8,borderRadius:6,fontWeight:"bold"},pageLink:{},pagination:{marginTop:30,marginBottom:30,display:"flex",justifyContent:"space-between"}};var d=!0;function h(e){let{allPosts:t,data:n,pathContext:r={}}=e,{numPages:d=0,currentPage:h=1}=r;return h-1==1||(h-1).toString(),(h+1).toString(),(0,i.jsxs)("div",{className:"blog-posts content",children:[(0,i.jsx)(o.Z,{title:"BLOG",canGoBack:!0,backToUrl:"/"}),t.filter(e=>e.frontmatter.title.length>0).map(e=>(0,i.jsx)("div",{className:"px-4 md:px-16 lg:px-32",children:(0,i.jsxs)("div",{className:"blog-post-preview",children:[(0,i.jsxs)(a(),{style:{color:"black"},className:"blog-post-preview-link",href:e.frontmatter.path,children:[(0,i.jsx)("h4",{className:"font-bold text-xl",children:e.frontmatter.title}),(0,i.jsx)("h6",{className:"text-md",style:c.description,children:new Intl.DateTimeFormat("en-GB",{dateStyle:"long"}).format(new Date(e.frontmatter.date))}),(0,i.jsxs)("div",{className:"text-base mt-2",children:[(0,i.jsx)("span",{style:c.description,children:e.frontmatter.excerpt}),(0,i.jsxs)("span",{className:"text-sm block md:float-right",children:[e.timeToRead," minutes read"]})]})]}),(0,i.jsx)(s.Z,{data:e.frontmatter.tags})]})},e.frontmatter.path)),(0,i.jsx)("div",{style:{height:40}}),(0,i.jsx)(l.Z,{})]})}}},function(e){e.O(0,[856,674,767,774,888,179],function(){return e(e.s=57286)}),_N_E=e.O()}]);