"use strict";(self.webpackChunktranslate_hero=self.webpackChunktranslate_hero||[]).push([[688],{19688:function(e,a,s){s.d(a,{Z:function(){return le}});var i=s(1413),r=s(45987),l=s(46123),t=s.n(l),o=s(75192),n=s.n(o),c=s(47313),d=s(46417),f=["as","className","type","tooltip"],v={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"div":s,o=e.className,n=e.type,c=void 0===n?"valid":n,v=e.tooltip,m=void 0!==v&&v,u=(0,r.Z)(e,f);return(0,d.jsx)(l,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:t()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=c.createContext({}),b=s(68524),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],h=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.className,n=e.type,f=void 0===n?"checkbox":n,v=e.isValid,m=void 0!==v&&v,u=e.isInvalid,h=void 0!==u&&u,N=e.as,y=void 0===N?"input":N,Z=(0,r.Z)(e,x),j=(0,c.useContext)(p).controlId;return l=(0,b.vE)(l,"form-check-input"),(0,d.jsx)(y,(0,i.Z)((0,i.Z)({},Z),{},{ref:a,type:f,id:s||j,className:t()(o,l,m&&"is-valid",h&&"is-invalid")}))}));h.displayName="FormCheckInput";var N=h,y=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.htmlFor,n=(0,r.Z)(e,y),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-label"),(0,d.jsx)("label",(0,i.Z)((0,i.Z)({},n),{},{ref:a,htmlFor:o||f,className:t()(l,s)}))}));Z.displayName="FormCheckLabel";var j=Z;var I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],P=c.forwardRef((function(e,a){var s=e.id,l=e.bsPrefix,o=e.bsSwitchPrefix,n=e.inline,f=void 0!==n&&n,v=e.reverse,m=void 0!==v&&v,x=e.disabled,h=void 0!==x&&x,y=e.isValid,Z=void 0!==y&&y,P=e.isInvalid,w=void 0!==P&&P,F=e.feedbackTooltip,k=void 0!==F&&F,C=e.feedback,g=e.feedbackType,R=e.className,E=e.style,z=e.title,S=void 0===z?"":z,T=e.type,V=void 0===T?"checkbox":T,L=e.label,O=e.children,G=e.as,_=void 0===G?"input":G,H=(0,r.Z)(e,I);l=(0,b.vE)(l,"form-check"),o=(0,b.vE)(o,"form-switch");var M=(0,c.useContext)(p).controlId,A=(0,c.useMemo)((function(){return{controlId:s||M}}),[M,s]),q=!O&&null!=L&&!1!==L||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(O,j),B=(0,d.jsx)(N,(0,i.Z)((0,i.Z)({},H),{},{type:"switch"===V?"checkbox":V,ref:a,isValid:Z,isInvalid:w,disabled:h,as:_}));return(0,d.jsx)(p.Provider,{value:A,children:(0,d.jsx)("div",{style:E,className:t()(R,q&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===V&&o),children:O||(0,d.jsxs)(d.Fragment,{children:[B,q&&(0,d.jsx)(j,{title:S,children:L}),C&&(0,d.jsx)(u,{type:g,tooltip:k,children:C})]})})})}));P.displayName="FormCheck";var w=Object.assign(P,{Input:N,Label:j}),F=s(4942),k=(s(21024),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var s,l,o=e.bsPrefix,n=e.type,f=e.size,v=e.htmlSize,m=e.id,u=e.className,x=e.isValid,h=void 0!==x&&x,N=e.isInvalid,y=void 0!==N&&N,Z=e.plaintext,j=e.readOnly,I=e.as,P=void 0===I?"input":I,w=(0,r.Z)(e,k),C=(0,c.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?s=(0,F.Z)({},"".concat(o,"-plaintext"),!0):(l={},(0,F.Z)(l,o,!0),(0,F.Z)(l,"".concat(o,"-").concat(f),f),s=l);return(0,d.jsx)(P,(0,i.Z)((0,i.Z)({},w),{},{type:n,size:v,ref:a,readOnly:j,id:m||C,className:t()(u,s,h&&"is-valid",y&&"is-invalid","color"===n&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var g=Object.assign(C,{Feedback:u}),R=(0,s(28864).Z)("form-floating"),E=["controlId","as"],z=c.forwardRef((function(e,a){var s=e.controlId,l=e.as,t=void 0===l?"div":l,o=(0,r.Z)(e,E),n=(0,c.useMemo)((function(){return{controlId:s}}),[s]);return(0,d.jsx)(p.Provider,{value:n,children:(0,d.jsx)(t,(0,i.Z)((0,i.Z)({},o),{},{ref:a}))})}));z.displayName="FormGroup";var S=z,T=s(29439),V=["as","bsPrefix","className"],L=["className"];var O=c.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,l=e.className,o=(0,r.Z)(e,V);s=(0,b.vE)(s,"col");var n=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return n.forEach((function(e){var a,i,r,l=o[e];delete o[e],"object"===typeof l&&null!=l?(a=l.span,i=l.offset,r=l.order):a=l;var t=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(s).concat(t):"".concat(s).concat(t,"-").concat(a)),null!=r&&f.push("order".concat(t,"-").concat(r)),null!=i&&f.push("offset".concat(t,"-").concat(i))})),[(0,i.Z)((0,i.Z)({},o),{},{className:t().apply(void 0,[l].concat(d,f))}),{as:a,bsPrefix:s,spans:d}]}(e),l=(0,T.Z)(s,2),o=l[0],n=o.className,c=(0,r.Z)(o,L),f=l[1],v=f.as,m=void 0===v?"div":v,u=f.bsPrefix,p=f.spans;return(0,d.jsx)(m,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(n,!p.length&&u)}))}));O.displayName="Col";var G=O,_=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=c.forwardRef((function(e,a){var s=e.as,l=void 0===s?"label":s,o=e.bsPrefix,n=e.column,f=void 0!==n&&n,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,x=e.htmlFor,h=(0,r.Z)(e,_),N=(0,c.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var y="col-form-label";"string"===typeof f&&(y="".concat(y," ").concat(y,"-").concat(f));var Z=t()(u,o,m&&"visually-hidden",f&&y);return x=x||N,f?(0,d.jsx)(G,(0,i.Z)({ref:a,as:"label",className:Z,htmlFor:x},h)):(0,d.jsx)(l,(0,i.Z)({ref:a,className:Z,htmlFor:x},h))}));H.displayName="FormLabel";var M=H,A=["bsPrefix","className","id"],q=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.id,n=(0,r.Z)(e,A),f=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-range"),(0,d.jsx)("input",(0,i.Z)((0,i.Z)({},n),{},{type:"range",ref:a,className:t()(l,s),id:o||f}))}));q.displayName="FormRange";var B=q,D=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],J=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.size,o=e.htmlSize,n=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,x=e.id,h=(0,r.Z)(e,D),N=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-select"),(0,d.jsx)("select",(0,i.Z)((0,i.Z)({},h),{},{size:o,ref:a,className:t()(n,s,l&&"".concat(s,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:x||N}))}));J.displayName="FormSelect";var K=J,Q=["bsPrefix","className","as","muted"],U=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.as,n=void 0===o?"small":o,c=e.muted,f=(0,r.Z)(e,Q);return s=(0,b.vE)(s,"form-text"),(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:t()(l,s,c&&"text-muted")}))}));U.displayName="FormText";var W=U,X=c.forwardRef((function(e,a){return(0,d.jsx)(w,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));X.displayName="Switch";var Y=Object.assign(X,{Input:w.Input,Label:w.Label}),$=["bsPrefix","className","children","controlId","label"],ee=c.forwardRef((function(e,a){var s=e.bsPrefix,l=e.className,o=e.children,n=e.controlId,c=e.label,f=(0,r.Z)(e,$);return s=(0,b.vE)(s,"form-floating"),(0,d.jsxs)(S,(0,i.Z)((0,i.Z)({ref:a,className:t()(l,s),controlId:n},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:n,children:c})]}))}));ee.displayName="FloatingLabel";var ae=ee,se=["className","validated","as"],ie={_ref:n().any,validated:n().bool,as:n().elementType},re=c.forwardRef((function(e,a){var s=e.className,l=e.validated,o=e.as,n=void 0===o?"form":o,c=(0,r.Z)(e,se);return(0,d.jsx)(n,(0,i.Z)((0,i.Z)({},c),{},{ref:a,className:t()(s,l&&"was-validated")}))}));re.displayName="Form",re.propTypes=ie;var le=Object.assign(re,{Group:S,Control:g,Floating:R,Check:w,Switch:Y,Label:M,Text:W,Range:B,Select:K,FloatingLabel:ae})}}]);