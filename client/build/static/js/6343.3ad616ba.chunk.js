"use strict";(self.webpackChunktranslate_hero=self.webpackChunktranslate_hero||[]).push([[6343],{29478:function(e,t,o){o.r(t);var a=o(29439),n=o(47313),i=o(84222),r=o(40756),s=o(32916),l=o(31387),d=o(14250),c=o(47131),u=o(85554),g=o(11010),p=o(58467),m=o(2135),h=o(3551),v=o(3454),x=o(46417);t.default=function(){var e,t=window.innerWidth,o=(0,p.s0)(),f=(0,u.I0)(),b=(0,p.TH)();var _=n.useState("password"),y=(0,a.Z)(_,2),j=y[0],w=y[1],Z=n.useState(!1),F=(0,a.Z)(Z,2),L=F[0],C=F[1],k=null===b||void 0===b||null===(e=b.state)||void 0===e?void 0:e.languages,S=function(){"password"===j?(C(!L),w("text")):"text"===j&&(C(!L),w("password"))};function N(e,t){var a={email:e,password:t};f((0,g.pH)(a)).then((function(t){null!==t&&void 0!==t&&t.payload&&"Invalid email or password..."!==t.payload?(!function(e){var t={email:e,subject:"Thank you.",message:"\n      You have successfully logged in\n      "};r.ZP.send("service_u5757dr","template_dueh1d9",t,"BikYNuNxSh4MGJ69-").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}(e),o("/In",{state:{languages:"".concat(k),accept:!0}})):l.Am.error("Please enter your email or password again.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})})).catch((function(e){console.error("Error:",e)}))}return n.useEffect((function(){t<768&&(o("/",{state:{languages:"".concat(k),accept:!0}}),l.Am.error("Please change your login tool.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}))})),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("header",{className:null===v.Z||void 0===v.Z?void 0:v.Z.header,children:void 0===k?(0,x.jsx)(i.Z,{navigate:o,languages:"English",accept:!1}):"Thai"===k?(0,x.jsx)(i.Z,{navigate:o,languages:"Thai",accept:!0}):"German"===k?(0,x.jsx)(i.Z,{navigate:o,languages:"German",accept:!0}):(0,x.jsx)(i.Z,{navigate:o,languages:"English",accept:!0})}),(0,x.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"40% auto",justifyContent:"space-between"},children:[(0,x.jsx)("div",{style:{},children:(0,x.jsx)("div",{style:{background:" #FFFFFF",borderRadius:20,padding:30,height:"100%"},children:(0,x.jsxs)("div",{style:{padding:20,height:"100%",display:"grid",gridTemplateColumns:"100%",gridTemplateRows:"10% 10%"},children:[(0,x.jsx)("h2",{className:v.Z.textLogin,children:"Login"}),(0,x.jsx)("p",{className:v.Z.textLogin2,children:"Welcome to Translation Hero!"}),(0,x.jsx)(d.J9,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Please enter your email.",e.password||(t.password="Please enter your password."),t},onSubmit:function(e,t){var a=t.setSubmitting;if(e){var n=null===e||void 0===e?void 0:e.email,i=null===e||void 0===e?void 0:e.password;"ploy_skt_at@hotmail.com"===n?o("/Management",{state:{languages:"".concat(k),accept:!0}}):""!==n&&""!==i?N(n,i):""!==n&&""!==i||l.Am.error("Please enter your email or password again.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),a(!1)}else console.log("err:","\u0e21\u0e31\u0e19\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49"),a(!1)},children:function(e){var t=e.values,a=e.errors,n=e.touched,i=e.handleChange,r=e.handleBlur,l=e.handleSubmit,d=e.isSubmitting;return(0,x.jsxs)("form",{onSubmit:l,children:[(0,x.jsx)("p",{style:{fontWeight:500,fontSize:24,color:"#242424",textAlign:"left",fontFamily:"DBHeavent"},children:h.wT[3].label}),a.email&&n.email&&a.email?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("input",{type:"email",name:"email",placeholder:"Example@mail.com",style:{background:"#FFFFFF",border:"1px solid red",borderRadius:20,width:"100%",height:30,padding:20,paddingLeft:12,margin:10,marginLeft:0},onChange:i,onBlur:r,value:t.email}),(0,x.jsx)("p",{style:{fontWeight:500,fontSize:20,color:"red",textAlign:"left",fontFamily:"DBHeavent"},children:a.email&&n.email&&a.email})]}):(0,x.jsx)("input",{type:"email",name:"email",placeholder:"Example@mail.com",style:{background:"#FFFFFF",border:"1px solid #F1F1F1",borderRadius:20,width:"100%",height:30,padding:20,paddingLeft:12,margin:10,marginLeft:0},onChange:i,onBlur:r,value:t.email}),(0,x.jsx)("p",{style:{fontWeight:500,fontSize:24,color:"#242424",textAlign:"left",fontFamily:"DBHeavent"},children:h.wT[4].label}),(0,x.jsx)("div",{children:a.password&&n.password&&a.password?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{style:{position:"relative",margin:"10px 0px 10px 0px"},children:[(0,x.jsx)("input",{type:j,name:"password",placeholder:"Enter your password",onChange:i,onBlur:r,autoComplete:"on",value:t.password,style:{background:"#FFFFFF",border:"1px solid red",borderRadius:20,width:"100%",height:40,padding:20,paddingLeft:12,margin:10,marginLeft:0}}),(0,x.jsx)(c.Z,{onClick:function(){return S()},style:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:12},children:L?(0,x.jsx)(s.rDJ,{}):(0,x.jsx)(s.rzC,{})})]}),(0,x.jsx)("p",{style:{fontWeight:500,fontSize:20,color:"red",textAlign:"left",fontFamily:"DBHeavent"},children:a.password&&n.password&&a.password})]}):(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{style:{position:"relative",margin:"10px 0px 10px 0px"},children:[(0,x.jsx)("input",{type:j,name:"password",placeholder:"Enter your password",onChange:i,onBlur:r,autoComplete:"on",value:t.password,style:{background:"#FFFFFF",border:"1px solid #F1F1F1",borderRadius:20,width:"100%",height:40,padding:20,paddingLeft:12,margin:10,marginLeft:0}}),(0,x.jsx)(c.Z,{onClick:function(){return S()},style:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:12},children:L?(0,x.jsx)(s.rDJ,{}):(0,x.jsx)(s.rzC,{})})]})})}),(0,x.jsx)(m.rU,{to:"/ForgetPassword",className:v.Z.ForgetPassword,children:(0,x.jsx)("p",{children:h.wT[6].label})}),(0,x.jsx)("button",{type:"submit",disabled:d,className:v.Z.button,children:h.wT[2].label}),(0,x.jsxs)("div",{className:v.Z.box,children:[(0,x.jsx)("p",{className:v.Z.textLi,children:"Don\u2019t have an account?"}),(0,x.jsx)("button",{className:v.Z.button2,onClick:function(){return o("/Signup",{state:{languages:"".concat(k),accept:!0}})},children:(0,x.jsx)("p",{className:v.Z.textLogin3,children:"Signup"})})]})]})}}),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"end"},children:[(0,x.jsx)("div",{children:(0,x.jsx)("p",{className:v.Z.textPolicy,children:h.wT[7].label})}),(0,x.jsx)("div",{style:{marginLeft:50},children:(0,x.jsx)("p",{className:v.Z.textPolicy,children:h.wT[8].label})})]})]})})}),(0,x.jsx)("div",{className:null===v.Z||void 0===v.Z?void 0:v.Z.img_login,children:(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:v.Z.textimg1,children:"Translation Hero"}),(0,x.jsx)("p",{className:v.Z.textimg2,children:"...\u0e40\u0e23\u0e32\u0e22\u0e34\u0e19\u0e14\u0e35\u0e15\u0e49\u0e2d\u0e19\u0e23\u0e31\u0e1a\u0e19\u0e31\u0e01\u0e41\u0e1b\u0e25\u0e17\u0e38\u0e01\u0e17\u0e48\u0e32\u0e19\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a \u0e41\u0e25\u0e30\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e2a\u0e1a\u0e01\u0e32\u0e23\u0e13\u0e4c\u0e43\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e46\u0e1c\u0e48\u0e32\u0e19 \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e21\u0e37\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e48\u0e32\u0e2a\u0e19\u0e43\u0e08..."})]})})]})]})}},84222:function(e,t,o){o(47313);var a=o(1600),n=o(39187),i=o(22102),r=o(76591),s=o(46417);t.Z=function(e){var t=null===e||void 0===e?void 0:e.languages,o=null===e||void 0===e?void 0:e.navigate,l=function(e){o("/",{state:{languages:"".concat(e),accept:!0}})};return(0,s.jsx)(n.Z,{expand:"lg",style:{transition:"initial",boxShadow:"none",position:"initial"},children:(0,s.jsxs)(i.Z,{fluid:!0,style:{backgroundColor:"transparent"},children:[(0,s.jsx)(n.Z.Brand,{href:"/",onClick:function(){return l(t)},children:(0,s.jsx)("img",{src:a.Z,alt:"Logo",style:{marginLeft:"3rem"}})}),(0,s.jsx)(n.Z.Collapse,{children:(0,s.jsx)("button",{className:r.Z.button,onClick:function(){return l(t)},children:(0,s.jsx)("p",{className:r.Z.text,children:"Home"})})})]})})}},40756:function(e,t,o){o.d(t,{ZP:function(){return d}});var a={_origin:"https://api.emailjs.com"},n=function(e,t,o){if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0},i=o(43144),r=o(15671),s=(0,i.Z)((function e(t){(0,r.Z)(this,e),this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"})),l=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(n,i){var r=new XMLHttpRequest;r.addEventListener("load",(function(e){var t=e.target,o=new s(t);200===o.status||"OK"===o.text?n(o):i(o)})),r.addEventListener("error",(function(e){var t=e.target;i(new s(t))})),r.open("POST",a._origin+e,!0),Object.keys(o).forEach((function(e){r.setRequestHeader(e,o[e])})),r.send(t)}))},d={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";a._userID=e,a._origin=t},send:function(e,t,o,i){var r=i||a._userID;n(r,e,t);var s={lib_version:"3.11.0",user_id:r,service_id:e,template_id:t,template_params:o};return l("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},sendForm:function(e,t,o,i){var r=i||a._userID,s=function(e){var t;if(!(t="string"===typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t}(o);n(r,e,t);var d=new FormData(s);return d.append("lib_version","3.11.0"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",r),l("/api/v1.0/email/send-form",d)}}},47131:function(e,t,o){o.d(t,{Z:function(){return y}});var a=o(4942),n=o(63366),i=o(87462),r=o(47313),s=o(83061),l=o(21921),d=o(17551),c=o(17592),u=o(77342),g=o(71848),p=o(91615),m=o(77430),h=o(32298);function v(e){return(0,h.Z)("MuiIconButton",e)}var x=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),f=o(46417),b=["edge","children","className","color","disabled","disableFocusRipple","size"],_=(0,c.ZP)(g.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,"default"!==o.color&&t["color".concat((0,p.Z)(o.color))],o.edge&&t["edge".concat((0,p.Z)(o.edge))],t["size".concat((0,p.Z)(o.size))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})}),(function(e){var t,o=e.theme,n=e.ownerState,r=null==(t=(o.vars||o).palette)?void 0:t[n.color];return(0,i.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,i.Z)({color:null==r?void 0:r.main},!n.disableRipple&&{"&:hover":(0,i.Z)({},r&&{backgroundColor:o.vars?"rgba(".concat(r.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(r.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:o.typography.pxToRem(28)},(0,a.Z)({},"&.".concat(x.disabled),{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}))})),y=r.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiIconButton"}),a=o.edge,r=void 0!==a&&a,d=o.children,c=o.className,g=o.color,m=void 0===g?"default":g,h=o.disabled,x=void 0!==h&&h,y=o.disableFocusRipple,j=void 0!==y&&y,w=o.size,Z=void 0===w?"medium":w,F=(0,n.Z)(o,b),L=(0,i.Z)({},o,{edge:r,color:m,disabled:x,disableFocusRipple:j,size:Z}),C=function(e){var t=e.classes,o=e.disabled,a=e.color,n=e.edge,i=e.size,r={root:["root",o&&"disabled","default"!==a&&"color".concat((0,p.Z)(a)),n&&"edge".concat((0,p.Z)(n)),"size".concat((0,p.Z)(i))]};return(0,l.Z)(r,v,t)}(L);return(0,f.jsx)(_,(0,i.Z)({className:(0,s.Z)(C.root,c),centerRipple:!0,focusRipple:!j,disabled:x,ref:t,ownerState:L},F,{children:d}))}))},3454:function(e,t){t.Z={header:"Login_header__XmyEb",img_login:"Login_img_login__q7Qvm",img_ForgetPassword:"Login_img_ForgetPassword__R43zC",img_CreateNewPassword:"Login_img_CreateNewPassword__Mdffk",textimg1:"Login_textimg1__aADZR",textimg2:"Login_textimg2__cSPfp",textLogin:"Login_textLogin__24KMq",textLogin2:"Login_textLogin2__LZm4j",ForgetPassword:"Login_ForgetPassword__urkYJ",button:"Login_button__PDD82",textPolicy:"Login_textPolicy__-b0CR",textLi:"Login_textLi__nNLq5",textLogin3:"Login_textLogin3__b3xRK",button2:"Login_button2__VzfNL",box:"Login_box__QFcr0"}}}]);