"use strict";(self.webpackChunktranslate_hero=self.webpackChunktranslate_hero||[]).push([[526],{46330:function(e,o,n){n.d(o,{Z:function(){return q}});var r=n(4942),t=n(63366),a=n(87462),i=n(47313),c=n(83061),l=n(21921),s=n(17551),d=n(29439),u=n(91615),p=n(17592),m=n(53800),v=n(99008),f=n(71848),h=n(77430),b=n(32298);function Z(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=n(46417),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(f.Z)((function(e){var o=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),y=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),P=i.forwardRef((function(e,o){var n=e.autoFocus,r=e.checked,i=e.checkedIcon,s=e.className,p=e.defaultChecked,f=e.disabled,h=e.disableFocusRipple,b=void 0!==h&&h,P=e.edge,C=void 0!==P&&P,S=e.icon,R=e.id,w=e.inputProps,F=e.inputRef,j=e.name,N=e.onBlur,B=e.onChange,M=e.onFocus,z=e.readOnly,I=e.required,L=void 0!==I&&I,q=e.tabIndex,O=e.type,E=e.value,T=(0,t.Z)(e,g),H=(0,m.Z)({controlled:r,default:Boolean(p),name:"SwitchBase",state:"checked"}),A=(0,d.Z)(H,2),D=A[0],G=A[1],V=(0,v.Z)(),$=f;V&&"undefined"===typeof $&&($=V.disabled);var _="checkbox"===O||"radio"===O,W=(0,a.Z)({},e,{checked:D,disabled:$,disableFocusRipple:b,edge:C}),J=function(e){var o=e.classes,n=e.checked,r=e.disabled,t=e.edge,a={root:["root",n&&"checked",r&&"disabled",t&&"edge".concat((0,u.Z)(t))],input:["input"]};return(0,l.Z)(a,Z,o)}(W);return(0,k.jsxs)(x,(0,a.Z)({component:"span",className:(0,c.Z)(J.root,s),centerRipple:!0,focusRipple:!b,disabled:$,tabIndex:null,role:void 0,onFocus:function(e){M&&M(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){N&&N(e),V&&V.onBlur&&V.onBlur(e)},ownerState:W,ref:o},T,{children:[(0,k.jsx)(y,(0,a.Z)({autoFocus:n,checked:r,defaultChecked:p,className:J.input,disabled:$,id:_?R:void 0,name:j,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;G(o),B&&B(e,o)}},readOnly:z,ref:F,required:L,ownerState:W,tabIndex:q,type:O},"checkbox"===O&&void 0===E?{}:{value:E},w)),D?i:S]}))})),C=n(81171),S=(0,C.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),R=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),w=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),F=n(77342);function j(e){return(0,b.Z)("MuiCheckbox",e)}var N=(0,h.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),B=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],M=(0,p.ZP)(P,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,n.indeterminate&&o.indeterminate,"default"!==n.color&&o["color".concat((0,u.Z)(n.color))]]}})((function(e){var o,n=e.theme,t=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(o={},(0,r.Z)(o,"&.".concat(N.checked,", &.").concat(N.indeterminate),{color:(n.vars||n).palette[t.color].main}),(0,r.Z)(o,"&.".concat(N.disabled),{color:(n.vars||n).palette.action.disabled}),o))})),z=(0,k.jsx)(R,{}),I=(0,k.jsx)(S,{}),L=(0,k.jsx)(w,{}),q=i.forwardRef((function(e,o){var n,r,s=(0,F.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,p=void 0===d?z:d,m=s.color,v=void 0===m?"primary":m,f=s.icon,h=void 0===f?I:f,b=s.indeterminate,Z=void 0!==b&&b,g=s.indeterminateIcon,x=void 0===g?L:g,y=s.inputProps,P=s.size,C=void 0===P?"medium":P,S=s.className,R=(0,t.Z)(s,B),w=Z?x:h,N=Z?x:p,q=(0,a.Z)({},s,{color:v,indeterminate:Z,size:C}),O=function(e){var o=e.classes,n=e.indeterminate,r=e.color,t={root:["root",n&&"indeterminate","color".concat((0,u.Z)(r))]},i=(0,l.Z)(t,j,o);return(0,a.Z)({},o,i)}(q);return(0,k.jsx)(M,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":Z},y),icon:i.cloneElement(w,{fontSize:null!=(n=w.props.fontSize)?n:C}),checkedIcon:i.cloneElement(N,{fontSize:null!=(r=N.props.fontSize)?r:C}),ownerState:q,ref:o,className:(0,c.Z)(O.root,S)},R,{classes:O}))}))},83929:function(e,o,n){n.d(o,{Z:function(){return C}});var r=n(4942),t=n(63366),a=n(87462),i=n(47313),c=n(83061),l=n(21921),s=n(99008),d=n(63984),u=n(61113),p=n(91615),m=n(17592),v=n(77342),f=n(77430),h=n(32298);function b(e){return(0,h.Z)("MuiFormControlLabel",e)}var Z=(0,f.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),k=n(80300),g=n(46417),x=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],y=(0,m.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[(0,r.Z)({},"& .".concat(Z.label),o.label),o.root,o["labelPlacement".concat((0,p.Z)(n.labelPlacement))]]}})((function(e){var o=e.theme,n=e.ownerState;return(0,a.Z)((0,r.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(Z.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,r.Z)({},"& .".concat(Z.label),(0,r.Z)({},"&.".concat(Z.disabled),{color:(o.vars||o).palette.text.disabled})))})),P=(0,m.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,o){return o.asterisk}})((function(e){var o=e.theme;return(0,r.Z)({},"&.".concat(Z.error),{color:(o.vars||o).palette.error.main})})),C=i.forwardRef((function(e,o){var n,r,m=(0,v.Z)({props:e,name:"MuiFormControlLabel"}),f=m.className,h=m.componentsProps,Z=void 0===h?{}:h,C=m.control,S=m.disabled,R=m.disableTypography,w=m.label,F=m.labelPlacement,j=void 0===F?"end":F,N=m.required,B=m.slotProps,M=void 0===B?{}:B,z=(0,t.Z)(m,x),I=(0,s.Z)(),L=null!=(n=null!=S?S:C.props.disabled)?n:null==I?void 0:I.disabled,q=null!=N?N:C.props.required,O={disabled:L,required:q};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof C.props[e]&&"undefined"!==typeof m[e]&&(O[e]=m[e])}));var E=(0,k.Z)({props:m,muiFormControl:I,states:["error"]}),T=(0,a.Z)({},m,{disabled:L,labelPlacement:j,required:q,error:E.error}),H=function(e){var o=e.classes,n=e.disabled,r=e.labelPlacement,t=e.error,a=e.required,i={root:["root",n&&"disabled","labelPlacement".concat((0,p.Z)(r)),t&&"error",a&&"required"],label:["label",n&&"disabled"],asterisk:["asterisk",t&&"error"]};return(0,l.Z)(i,b,o)}(T),A=null!=(r=M.typography)?r:Z.typography,D=w;return null==D||D.type===u.Z||R||(D=(0,g.jsx)(u.Z,(0,a.Z)({component:"span"},A,{className:(0,c.Z)(H.label,null==A?void 0:A.className),children:D}))),(0,g.jsxs)(y,(0,a.Z)({className:(0,c.Z)(H.root,f),ownerState:T,ref:o},z,{children:[i.cloneElement(C,O),q?(0,g.jsxs)(d.Z,{direction:"row",alignItems:"center",children:[D,(0,g.jsxs)(P,{ownerState:T,"aria-hidden":!0,className:H.asterisk,children:["\u2009","*"]})]}):D]}))}))},63984:function(e,o,n){n.d(o,{Z:function(){return w}});var r=n(4942),t=n(63366),a=n(87462),i=n(47313),c=n(83061),l=n(13019),s=n(21921),d=n(32298),u=(0,n(36541).ZP)(),p=n(14614),m=n(39028),v=n(9456),f=n(54929),h=n(86886),b=n(46417),Z=["component","direction","spacing","divider","children","className","useFlexGap"],k=(0,v.Z)(),g=u("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}});function x(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:k})}function y(e,o){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,t){return e.push(r),t<n.length-1&&e.push(i.cloneElement(o,{key:"separator-".concat(t)})),e}),[])}var P=function(e){var o=e.ownerState,n=e.theme,t=(0,a.Z)({display:"flex",flexDirection:"column"},(0,f.k9)({theme:n},(0,f.P$)({values:o.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(o.spacing){var i=(0,h.hB)(n),c=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof o.spacing&&null!=o.spacing[n]||"object"===typeof o.direction&&null!=o.direction[n])&&(e[n]=!0),e}),{}),s=(0,f.P$)({values:o.direction,base:c}),d=(0,f.P$)({values:o.spacing,base:c});"object"===typeof s&&Object.keys(s).forEach((function(e,o,n){if(!s[e]){var r=o>0?s[n[o-1]]:"column";s[e]=r}}));t=(0,l.Z)(t,(0,f.k9)({theme:n},d,(function(e,n){return o.useFlexGap?{gap:(0,h.NA)(i,e)}:{"& > :not(style) ~ :not(style)":(0,r.Z)({margin:0},"margin".concat((t=n?s[n]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,h.NA)(i,e))};var t})))}return t=(0,f.dt)(n.breakpoints,t)};var C=n(17592),S=n(77342),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.createStyledComponent,n=void 0===o?g:o,r=e.useThemeProps,l=void 0===r?x:r,u=e.componentName,p=void 0===u?"MuiStack":u,v=n(P),f=i.forwardRef((function(e,o){var n=l(e),r=(0,m.Z)(n),i=r.component,u=void 0===i?"div":i,f=r.direction,h=void 0===f?"column":f,k=r.spacing,g=void 0===k?0:k,x=r.divider,P=r.children,C=r.className,S=r.useFlexGap,R=void 0!==S&&S,w=(0,t.Z)(r,Z),F={direction:h,spacing:g,useFlexGap:R},j=(0,s.Z)({root:["root"]},(function(e){return(0,d.Z)(p,e)}),{});return(0,b.jsx)(v,(0,a.Z)({as:u,ownerState:F,ref:o,className:(0,c.Z)(j.root,C)},w,{children:x?y(P,x):P}))}));return f}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiStack"})}}),w=R}}]);