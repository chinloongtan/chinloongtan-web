(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{92036:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn",function(){return n(14013)}])},64892:function(e,t,n){"use strict";var s=n(14924),i=n(85893),l=n(67294),r=n(41664),a=n.n(r),o=n(85050),c=n(61953),d=n(95667),h=n(16472),m=n(326),p=n(21023),u=n(20784),x=n(29630);let b=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}],f={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:6},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}};class g extends l.Component{componentDidMount(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){this.setState({isMobile:window.innerWidth<=760})}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState({menuOpen:!this.state.menuOpen})}renderIconElementRight(){let{showBlogLink:e}=this.props;return e?(0,i.jsx)(c.Z,{sx:{display:{xs:"none",sm:"block"}},children:b.map(e=>e.isShop?(0,i.jsx)(a(),{href:e.href,target:"_blank",style:{...f.navLink,...f.learn},children:e.label},e.href):(0,i.jsx)(a(),{href:e.href,style:{...f.navLink,...f.aboutLink},children:e.label},e.href))}):null}renderTitle(){let{title:e,canGoBack:t,backToUrl:n}=this.props,s=e;return"CHIN LOONG TAN"===e&&(s=(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,i.jsx)(a(),{href:n||"/",style:f.navLink,children:s})}renderIconElementLeft(){let{canGoBack:e,backToUrl:t,onPress:n}=this.props;return e?n?(0,i.jsx)(h.Z,{"aria-label":"back",edge:"start",onClick:n,sx:{color:"black"},children:(0,i.jsx)(p.Z,{})}):(0,i.jsx)(a(),{href:t,children:(0,i.jsx)(h.Z,{"aria-label":"back",edge:"start",sx:{color:"black"},children:(0,i.jsx)(p.Z,{})})}):(0,i.jsx)(h.Z,{"aria-label":"open drawer",edge:"start",onClick:()=>this.handleDrawerToggle(),sx:{mr:2,display:{sm:"none"}},children:(0,i.jsx)(m.Z,{})})}render(){let{backToUrl:e,canGoBack:t}=this.props,{window:n}=this.props,s=(0,i.jsx)(c.Z,{onClick:()=>this.handleDrawerToggle(),sx:{textAlign:"center"},children:(0,i.jsx)("ul",{style:{listStyle:"none",marginTop:20,padding:0},children:b.map(e=>(0,i.jsx)("li",{children:e.isShop?(0,i.jsx)(a(),{href:e.href,target:"_blank",style:{...f.navLink},children:e.label},e.href):(0,i.jsx)(a(),{href:e.href,style:{...f.navLink},children:e.label},e.href)},e.href))})});return(0,i.jsx)("div",{className:"custom-nav",children:(0,i.jsxs)(c.Z,{sx:{display:"flex"},children:[(0,i.jsx)(o.Z,{component:"nav",style:{backgroundColor:"white"},children:(0,i.jsxs)(u.Z,{children:[this.renderIconElementLeft(),(0,i.jsx)(x.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{sm:"block"}},children:this.renderTitle()}),this.renderIconElementRight()]})}),(0,i.jsx)(c.Z,{component:"nav",children:(0,i.jsx)(d.ZP,{container:void 0!==n?()=>n().document.body:void 0,variant:"temporary",open:this.state.mobileOpen,onClose:()=>this.handleDrawerToggle(),ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:s})})]})})}constructor(...e){super(...e),(0,s.Z)(this,"state",{menuOpen:!1,isMobile:!1,mobileOpen:!1}),(0,s.Z)(this,"handleDrawerToggle",()=>{this.setState({mobileOpen:!this.state.mobileOpen})})}}t.Z=g},14013:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var s=n(85893),i=n(67294),l=n(64892),r=n(14924),a=n(41664),o=n.n(a);let c={container:{display:"flex",flexDirection:"column"},content:{color:"white",display:"flex",flex:1,alignItems:"center"},rocket:{},flexify:{},form:{paddingTop:40}};class d extends i.Component{renderForm(){return this.state.subscribed?(0,s.jsx)("div",{className:"col-12 col-sm-7",children:(0,s.jsxs)("div",{style:{paddingBottom:10},className:"form-group",style:c.form,children:[(0,s.jsx)("i",{className:"fa fa-check-circle fa-fw fa-1x",style:{color:"#4BB543",paddingRight:10}}),"Subscribed"]})}):(0,s.jsxs)("form",{className:"col-12 col-sm-7",id:"form",style:c.form,onSubmit:e=>{let t=e.target.elements.email.value,n=()=>{document.getElementById("form").reset()};fetch("https://fu4yuz4nk8.execute-api.ap-southeast-1.amazonaws.com/default/chinloongtan-web-lambda",{method:"POST",body:JSON.stringify({email:t}),mode:"no-cors"}).then(()=>{n(),this.setState({subscribed:!0})}).catch(()=>{n()}),e.preventDefault()},children:[(0,s.jsx)("div",{className:"form-group",children:(0,s.jsx)("input",{type:"email",name:"email",className:"",id:"emailInput","aria-describedby":"emailHelp",placeholder:"me@email.com"})}),(0,s.jsx)("button",{type:"submit",className:"submit-btn",children:"Notify Me"})]})}render(){return(0,s.jsx)("div",{className:"background container-fluid",style:c.container,children:(0,s.jsx)("div",{className:"content",style:c.content,children:(0,s.jsxs)("div",{className:"row content-row",style:c.flexify,children:[(0,s.jsx)("div",{className:"col-12 col-sm-7 col-md-7",style:c.rocket,children:(0,s.jsx)("div",{style:{background:"transparent"},children:(0,s.jsx)("div",{style:{margin:"0 auto",paddingTop:20,paddingBottom:20},children:(0,s.jsx)("h1",{style:{margin:0},children:(0,s.jsx)(o(),{href:"/",style:{color:"white",textDecoration:"none"},children:"React Native Push Start"})})})})}),(0,s.jsxs)("div",{className:"col-12 col-sm-7 col-md-7",style:c.flexify,children:[(0,s.jsx)("div",{children:"Get started building apps with React Native."}),(0,s.jsx)("div",{children:"From web to mobile app developer."}),(0,s.jsx)("div",{children:"It has to start somewhere."}),(0,s.jsx)("div",{children:"(Coming soon)"})]}),this.renderForm()]})})})}constructor(...e){super(...e),(0,r.Z)(this,"state",{subscribed:!1})}}function h(){return(0,s.jsxs)("div",{className:"blog-posts content",children:[(0,s.jsx)(l.Z,{title:"LEARN REACT NATIVE",canGoBack:!0,backToUrl:"/"}),(0,s.jsx)(d,{})]})}}},function(e){e.O(0,[143,774,888,179],function(){return e(e.s=92036)}),_N_E=e.O()}]);