(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[547],{12102:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/ktmbuddy/terms",function(){return n(33980)}])},1573:function(e,s,n){"use strict";var a=n(14924),t=n(85893),i=n(67294),l=n(75980),r=n.n(l),c=n(35102),o=n(94382);let h="https://www.linkedin.com/in/chinloongtan";class d extends i.Component{render(){return(0,t.jsxs)("footer",{className:"p-4 md:p-8 lg:p-16",children:[(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("h4",{className:"text-xl mb-4",children:"Contact me via:"}),(0,t.jsxs)("a",{href:h,target:"_blank",rel:"noopener noreferrer",onClick:()=>c.Z.trackLinkEvent(h),style:{color:"white"},className:"flex items-center",children:[(0,t.jsx)(r(),{name:"linkedin-square",style:{width:45,fontSize:35,color:"white"}}),"chinloongtan"]}),(0,t.jsx)("div",{className:"",style:{marginBottom:0,color:"white"},children:(0,t.jsxs)("a",{href:o.Z.mailto,onClick:()=>c.Z.trackLinkEvent("contactEmail"),style:{color:"white"},className:"flex items-center",children:[(0,t.jsx)(r(),{name:"envelope-open-o",style:{width:45,fontSize:30,color:"white",marginTop:15,marginBottom:15}}),o.Z.email]})})]}),(0,t.jsxs)("div",{className:"mt-6 md:mt-16",children:[(0,t.jsx)("h4",{className:"text-xl mb-4",children:"Or Buy Me A Coffee:"}),(0,t.jsxs)("a",{href:"https://www.buymeacoffee.com/chinloongtan",target:"_blank",rel:"noopener noreferrer",onClick:()=>c.Z.trackLinkEvent("https://www.buymeacoffee.com/chinloongtan"),style:{color:"white"},className:"flex items-center",children:[(0,t.jsx)(r(),{name:"coffee",style:{width:45,fontSize:30,color:"white"}}),"chinloongtan"]})]})]})}constructor(...e){super(...e),(0,a.Z)(this,"state",{isLinkedInActive:!1,isFacebookActive:!1})}}s.Z=d},64892:function(e,s,n){"use strict";var a=n(14924),t=n(85893),i=n(67294),l=n(41664),r=n.n(l),c=n(85050),o=n(61953),h=n(95667),d=n(16472),m=n(326),p=n(21023),x=n(20784),u=n(29630);let f=[{label:"SHOP",href:"https://mvphub.app/",isShop:!0},{label:"BLOG",href:"/blog"},{label:"ABOUT",href:"/about"}],j={navLink:{color:"black",fontFamily:"Raleway",textDecoration:"none"},aboutLink:{marginLeft:15},learn:{backgroundColor:"#0069d9",color:"white",padding:10,borderRadius:2},menuLinkItem:{color:"black",fontFamily:"Raleway",textDecoration:"none",paddingBottom:20}};class b extends i.Component{componentDidMount(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){this.setState({isMobile:window.innerWidth<=760})}handleStateChange(e){this.setState({menuOpen:e.isOpen})}closeMenu(){this.setState({menuOpen:!1})}toggleMenu(){this.setState({menuOpen:!this.state.menuOpen})}renderIconElementRight(){let{showRightItems:e}=this.props;return e?(0,t.jsx)(o.Z,{sx:{display:{xs:"none",sm:"block"}},children:f.map(e=>e.isShop?(0,t.jsx)(r(),{href:e.href,target:"_blank",style:{...j.navLink,...j.learn},children:e.label},e.href):(0,t.jsx)(r(),{href:e.href,style:{...j.navLink,...j.aboutLink},children:e.label},e.href))}):null}renderTitle(){let{title:e,canGoBack:s,backToUrl:n}=this.props,a=e;return"CHIN LOONG TAN"===e&&(a=(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{style:{color:"#0069d9"},children:"CHIN LOONG"})," TAN"]})),(0,t.jsx)(r(),{href:n||"/",style:j.navLink,className:"",children:a})}renderIconElementLeft(){let{canGoBack:e,backToUrl:s,onPress:n}=this.props;return e?n?(0,t.jsx)(d.Z,{"aria-label":"back",edge:"start",onClick:n,sx:{color:"black"},children:(0,t.jsx)(p.Z,{})}):(0,t.jsx)(r(),{href:s,children:(0,t.jsx)(d.Z,{"aria-label":"back",edge:"start",sx:{color:"black"},children:(0,t.jsx)(p.Z,{})})}):(0,t.jsx)(d.Z,{"aria-label":"open drawer",edge:"start",onClick:()=>this.handleDrawerToggle(),sx:{mr:2,display:{sm:"none"}},children:(0,t.jsx)(m.Z,{})})}render(){let{backToUrl:e,canGoBack:s}=this.props,{window:n}=this.props,a=(0,t.jsx)(o.Z,{onClick:()=>this.handleDrawerToggle(),sx:{textAlign:"center"},children:(0,t.jsxs)("ul",{style:{listStyle:"none",marginTop:20,padding:0},children:[(0,t.jsx)("li",{className:"uppercase py-1",children:(0,t.jsx)(r(),{href:"/",children:"Home"})}),f.map(e=>(0,t.jsx)("li",{className:"uppercase py-1",children:e.isShop?(0,t.jsx)(r(),{href:e.href,target:"_blank",children:e.label},e.href):(0,t.jsx)(r(),{href:e.href,children:e.label},e.href)},e.href))]})});return(0,t.jsx)("div",{className:"custom-nav",children:(0,t.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,t.jsx)(c.Z,{component:"nav",style:{backgroundColor:"white"},children:(0,t.jsxs)(x.Z,{children:[this.renderIconElementLeft(),(0,t.jsx)(u.Z,{variant:"h6",component:"div",sx:{flexGrow:1,display:{sm:"block"}},children:this.renderTitle()}),this.renderIconElementRight()]})}),(0,t.jsx)(o.Z,{component:"nav",children:(0,t.jsx)(h.ZP,{container:void 0!==n?()=>n().document.body:void 0,variant:"temporary",open:this.state.mobileOpen,onClose:()=>this.handleDrawerToggle(),ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:240}},children:a})})]})})}constructor(...e){super(...e),(0,a.Z)(this,"state",{menuOpen:!1,isMobile:!1,mobileOpen:!1}),(0,a.Z)(this,"handleDrawerToggle",()=>{this.setState({mobileOpen:!this.state.mobileOpen})})}}s.Z=b},94382:function(e,s){"use strict";let n="me@chinloongtan.com";s.Z={email:n,mailto:"mailto:".concat(n,"?body=Hi Chin Loong,\n")}},35102:function(e,s,n){"use strict";var a=n(98719);a.ZP.initialize("UA-115782569-1"),s.Z={trackLinkEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.ZP.event({category:"Link",action:"click",label:e})}}},33980:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d}});var a=n(85893),t=n(67294),i=n(1573),l=n(64892),r=n(9008),c=n.n(r);class o extends t.Component{render(){return(0,a.jsxs)("div",{id:"app",className:"content",children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:"KTM Buddy Terms of Use"}),(0,a.jsx)("meta",{name:"title",content:"KTM Buddy Terms of Use"},"title"),(0,a.jsx)("meta",{name:"description",content:""},"description")]}),(0,a.jsx)(l.Z,{title:"KTM Buddy - Terms of Use"}),(0,a.jsxs)("div",{style:{padding:"20px"},children:[(0,a.jsx)("p",{className:"c0",id:"h.gjdgxs",children:(0,a.jsx)("span",{className:"c2 c5 c6",children:"Terms of Use"})}),(0,a.jsx)("p",{className:"c0",children:'This mobile app ("KTMBuddy", the “Mobile App”), is available to you on the condition that you accept without modification the terms, conditions and notices contained herein. Please read these terms and conditions carefully before using the Mobile App. By using the Mobile App or any part of it, including purchasing products and services, you agree that you have read these terms and conditions and that you accept and agree to be bound by them.'}),(0,a.jsx)("p",{className:"c0",children:(0,a.jsx)("span",{className:"c7 c5",children:"Definitions"})}),(0,a.jsx)("p",{className:"c0",children:(0,a.jsx)("span",{className:"c3",children:"The following defined terms have the following meanings within the terms and conditions:"})}),(0,a.jsxs)("ul",{className:"c9 lst-kix_list_1-0 start",children:[(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:'"Mobile App" means the KTMBuddy.'})}),(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:'"Service" means the timetable browsing and any other future features or experiences we provide, including the use of applications and software.'})}),(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:'"Message(s)" means any communications between the Parties transmitted by any of the following means: through the Mobile App, Customer Services Hotline, emails, Online Instant Chat, and Online Enquiry Form.'})})]}),(0,a.jsx)("p",{className:"c10",children:(0,a.jsx)("span",{className:"c1 c2"})}),(0,a.jsx)("p",{className:"c0",children:(0,a.jsx)("span",{className:"c7 c5",children:"General"})}),(0,a.jsxs)("ul",{className:"c9 lst-kix_list_1-0 start",children:[(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:"The Mobile App is a operated to provide timetable information for commuters using the KTM train transportation in Malaysia."})}),(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:"All information displayed are available on KTMB Berhad official website."})})]}),(0,a.jsx)("p",{className:"c0",children:(0,a.jsx)("span",{className:"c7 c5",children:"Liability"})}),(0,a.jsxs)("ul",{className:"c9 lst-kix_list_1-0 start",children:[(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:"We acts merely as a provider, providing an application allowing you to check train timetable. We therefore has no control whatsoever over the availability, quality, legality, safety or accuracy of the time display."})}),(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:"We are not responsible and shall not be liable for any hyperlink to any other website. "})}),(0,a.jsx)("li",{className:"c8",children:(0,a.jsx)("span",{className:"c1 c2",children:"We shall not be liable in any way for any damages, losses, costs, expenses, liabilities or compensation, whether direct or indirect, which arise from or are in connection with your access and use of the Mobile App."})})]}),(0,a.jsx)("p",{className:"c0",children:(0,a.jsx)("span",{className:"c7 c5",children:"Data Protection"})}),(0,a.jsxs)("p",{className:"c0",children:["When using the Mobile App, you agree that we can store, process and use the data you provide. We are committed to safeguarding the privacy of all individuals with respect to their personal data. We therefore make sure that our policies and practices in relation to the collection, use, retention, transfer and access of personal data comply with the requirements of the Personal Data Protection Act 2010 under the laws of Malaysia. Please refer to our Privacy Policy.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"In case of any dispute between the Parties in respect of or in connection with these terms and conditions, our determination shall be final and binding."]}),(0,a.jsx)("p",{className:"c0 c13",children:(0,a.jsx)("span",{className:"c1 c2"})}),(0,a.jsx)("p",{className:"c4",children:(0,a.jsx)("span",{className:"c1 c2"})})]}),(0,a.jsx)(i.Z,{})]})}}let h=()=>(0,a.jsx)(o,{});var d=h}},function(e){e.O(0,[143,214,774,888,179],function(){return e(e.s=12102)}),_N_E=e.O()}]);