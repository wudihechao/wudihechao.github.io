window.addEventListener("DOMContentLoaded",()=>{var e={lines:[],init:function(){this.lines.forEach(e=>{e.transform("init")})},arrow:function(){this.lines.forEach(e=>{e.transform("arrow")})},close:function(){this.lines.forEach(e=>{e.transform("close")})}};function t(e){this.status=Object.assign({init:{width:"100%",opacity:1,transform:"rotate(0deg)",top:0,left:0}},e.status),this.transform=function(t){Object.assign(document.querySelector(e.el).style,this.status[t])}}var i="right"===CONFIG.sidebar.position;e.lines=[new t({el:".sidebar-toggle-line-first",status:i?{arrow:{width:"50%",transform:"rotate(-45deg)",top:"2px"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px"}}:{arrow:{width:"50%",transform:"rotate(45deg)",top:"2px",left:"50%"},close:{width:"100%",transform:"rotate(-45deg)",top:"5px",left:"0px"}}}),new t({el:".sidebar-toggle-line-middle",status:i?{arrow:{width:"90%"},close:{opacity:0}}:{arrow:{width:"90%",left:"2px"},close:{opacity:0,left:"0px"}}}),new t({el:".sidebar-toggle-line-last",status:i?{arrow:{width:"50%",transform:"rotate(45deg)",top:"-2px"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px"}}:{arrow:{width:"50%",transform:"rotate(-45deg)",top:"-2px",left:"50%"},close:{width:"100%",transform:"rotate(45deg)",top:"-5px",left:"0px"}}})];var s=CONFIG.sidebar.width||320,n={},r={};function d(){var e=document.querySelector(".container").offsetHeight,t=document.getElementById("footer");t.classList.contains("footer-fixed")&&(e+=t.outerHeight(!0)),e<window.innerHeight?t.classList.add("footer-fixed"):t.classList.remove("footer-fixed")}({sidebarEl:document.querySelector(".sidebar"),isSidebarVisible:!1,init:function(){e.init(),window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector("#sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseenter",this.mouseEnterHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("mouseleave",this.mouseLeaveHandler.bind(this)),this.sidebarEl.addEventListener("touchstart",this.touchstartHandler.bind(this)),this.sidebarEl.addEventListener("touchend",this.touchendHandler.bind(this)),this.sidebarEl.addEventListener("touchmove",e=>e.preventDefault()),window.addEventListener("sidebar:show",this.showSidebar.bind(this)),window.addEventListener("sidebar:hide",this.hideSidebar.bind(this))},mousedownHandler:function(e){n.X=e.pageX,n.Y=e.pageY},mouseupHandler:function(e){var t=e.pageX-n.X,i=e.pageY-n.Y,s=Math.sqrt(t*t+i*i)<20&&e.target.matches(".main");this.isSidebarVisible&&(s||e.target.matches("img.medium-zoom-image, .fancybox img"))&&this.hideSidebar()},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar()},mouseEnterHandler:function(){this.isSidebarVisible||e.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||e.init()},touchstartHandler:function(e){r.X=e.touches[0].clientX,r.Y=e.touches[0].clientY},touchendHandler:function(e){var t=e.changedTouches[0].clientX-r.X,s=e.changedTouches[0].clientY-r.Y,n=Math.abs(s)<20&&(t>30&&i||t<-30&&!i);this.isSidebarVisible&&n&&this.hideSidebar()},showSidebar:function(){this.isSidebarVisible=!0,this.sidebarEl.classList.add("sidebar-active"),"function"==typeof Velocity&&Velocity(document.querySelectorAll(".sidebar .motion-element"),i?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0}),e.close(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:400,easing:"linear"},i?{"padding-right":s}:{"padding-left":s}))},hideSidebar:function(){this.isSidebarVisible=!1,this.sidebarEl.classList.remove("sidebar-active"),e.init(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:400,easing:"linear"},i?{"padding-right":0}:{"padding-left":0}))}}).init(),d(),window.addEventListener("resize",d),window.addEventListener("scroll",d)});