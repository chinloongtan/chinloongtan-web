(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{10512:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(24384)}])},51099:function(e,n,t){"use strict";t.r(n),n.default={src:"/_next/static/media/cl-min.7fec9986.jpg",height:140,width:140,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAKBT/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQMFAAIEEhQzQv/aAAgBAQABPwBrIsSKMrmoAO6zfv6A66//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAECAQE/AFun/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAJCIf/aAAgBAwEBPwB4yT//2Q==",blurWidth:8,blurHeight:8}},64892:function(e,n,t){"use strict";var i=t(14924),s=t(85893),a=t(67294),r=t(41664),o=t.n(r),l=t(85050),A=t(61953),c=t(95667),h=t(16472),d=t(326),p=t(21023),g=t(20784),u=t(29630);let x=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}],m={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:6},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}};class b extends a.Component{componentDidMount(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){this.setState({isMobile:window.innerWidth<=760})}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState({menuOpen:!this.state.menuOpen})}renderIconElementRight(){let{showBlogLink:e}=this.props;return e?(0,s.jsx)(A.Z,{sx:{display:{xs:"none",sm:"block"}},children:x.map(e=>e.isShop?(0,s.jsx)(o(),{href:e.href,target:"_blank",style:{...m.navLink,...m.learn},children:e.label},e.href):(0,s.jsx)(o(),{href:e.href,style:{...m.navLink,...m.aboutLink},children:e.label},e.href))}):null}renderTitle(){let{title:e,canGoBack:n,backToUrl:t}=this.props,i=e;return"CHIN LOONG TAN"===e&&(i=(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,s.jsx)(o(),{href:t||"/",style:m.navLink,children:i})}renderIconElementLeft(){let{canGoBack:e,backToUrl:n,onPress:t}=this.props;return e?t?(0,s.jsx)(h.Z,{"aria-label":"back",edge:"start",onClick:t,sx:{color:"black"},children:(0,s.jsx)(p.Z,{})}):(0,s.jsx)(o(),{href:n,children:(0,s.jsx)(h.Z,{"aria-label":"back",edge:"start",sx:{color:"black"},children:(0,s.jsx)(p.Z,{})})}):(0,s.jsx)(h.Z,{"aria-label":"open drawer",edge:"start",onClick:()=>this.handleDrawerToggle(),sx:{mr:2,display:{sm:"none"}},children:(0,s.jsx)(d.Z,{})})}render(){let{backToUrl:e,canGoBack:n}=this.props,{window:t}=this.props,i=(0,s.jsx)(A.Z,{onClick:()=>this.handleDrawerToggle(),sx:{textAlign:"center"},children:(0,s.jsx)("ul",{style:{listStyle:"none",marginTop:20,padding:0},children:x.map(e=>(0,s.jsx)("li",{children:e.isShop?(0,s.jsx)(o(),{href:e.href,target:"_blank",style:{...m.navLink},children:e.label},e.href):(0,s.jsx)(o(),{href:e.href,style:{...m.navLink},children:e.label},e.href)},e.href))})});return(0,s.jsx)("div",{className:"custom-nav",children:(0,s.jsxs)(A.Z,{sx:{display:"flex"},children:[(0,s.jsx)(l.Z,{component:"nav",style:{backgroundColor:"white"},children:(0,s.jsxs)(g.Z,{children:[this.renderIconElementLeft(),(0,s.jsx)(u.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{sm:"block"}},children:this.renderTitle()}),this.renderIconElementRight()]})}),(0,s.jsx)(A.Z,{component:"nav",children:(0,s.jsx)(c.ZP,{container:void 0!==t?()=>t().document.body:void 0,variant:"temporary",open:this.state.mobileOpen,onClose:()=>this.handleDrawerToggle(),ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:i})})]})})}constructor(...e){super(...e),(0,i.Z)(this,"state",{menuOpen:!1,isMobile:!1,mobileOpen:!1}),(0,i.Z)(this,"handleDrawerToggle",()=>{this.setState({mobileOpen:!this.state.mobileOpen})})}}n.Z=b},24384:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var i=t(85893),s=t(67294),a=t(64892),r=t(25675),o=t.n(r);let l={avatar:t(51099)},A={container:{},content:{maxWidth:640,marginTop:10}};class c extends s.Component{render(){return(0,i.jsxs)("div",{className:"about-container",style:A.container,children:[(0,i.jsx)("div",{className:"avatar-container",children:(0,i.jsx)(o(),{alt:"avatar",src:l.avatar,style:{width:120,height:120,borderRadius:120}})}),(0,i.jsxs)("div",{style:A.content,children:[(0,i.jsx)("br",{}),"Hi, I'm Chin Loong, a React Native developer from Klang, Malaysia.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"With a passion for coding and a focus on delivering high-quality applications, I have been honing my skills in mobile app development for more than 6 years.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"As a React Native developer, I specialize in building mobile applications for iOS and Android platforms, leveraging the latest technologies to deliver seamless user experiences.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"In my previous roles, I have worked on a wide range of projects, including e-commerce apps, social networking platforms, and healthcare applications. My experience in working with cross-functional teams and agile methodologies has equipped me with the ability to collaborate effectively with designers, project managers, and other developers to deliver successful projects.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Aside from coding, I enjoy staying up-to-date with the latest technologies and exploring new coding techniques. When I'm not coding, you can find me exploring new places or trying out new cuisines. I am always eager to take on new challenges and push the limits of what's possible with mobile app development.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Finally, welcome to my website where I blog about app development with React Native."]})]})}}function h(){return(0,i.jsxs)("div",{className:"blog-posts content",children:[(0,i.jsx)(a.Z,{title:"ABOUT",canGoBack:!0,backToUrl:"/"}),(0,i.jsx)(c,{})]})}}},function(e){e.O(0,[143,675,774,888,179],function(){return e(e.s=10512)}),_N_E=e.O()}]);