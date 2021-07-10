(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{210:function(e,t,n){"use strict";var r=n(239),a=n(189),c=n(214),i=n(179),o=n(0),s=n(2),l=Object(i.a)((function(e){return{snack:{background:"#04c256",color:"black"},snackError:{background:"#EA2027"}}}));t.a=function(e){var t=l();return Object(s.jsx)(r.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},ContentProps:{classes:{root:e.resMessage.includes("Success")?t.snack:t.snackError}},open:e.open,autoHideDuration:3e3,onClose:e.handleClose,message:e.resMessage,action:Object(s.jsx)(o.Fragment,{children:Object(s.jsx)(a.a,{size:"small",color:"inherit",onClick:e.handleClose,children:Object(s.jsx)(c.a,{fontSize:"small"})})})})}},211:function(e,t,n){"use strict";var r=n(47),a=n(19);t.a=function(e,t){return{handleOnChange:function(n,c){Array.isArray(e)?(t((function(e){return e.map((function(e,t){return c!==t?e:Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{value:n.target.value})))}))})),""!==n.target.value&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{error:!1,helper:""})))}))}))):(t((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{value:n.target.value})))})),""!==n.target.value&&t((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{error:!1,helper:""})))})))},handleValidation:function(n,c){Array.isArray(e)?(""===n.target.value&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{error:!0,helper:"Enter value!"})))}))})),"numerical"===e[c][n.target.name].type&&isNaN(n.target.value)&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(a.a)(Object(a.a)({},e),{},{code:Object(a.a)(Object(a.a)({},e.code),{},{error:!0,helper:"Enter a Number!"})})}))}))):(""===n.target.value&&t((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{error:!0,helper:"Enter a value!"})))})),"numerical"===e[n.target.name].type&&isNaN(n.target.value)&&t((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(r.a)({},n.target.name,Object(a.a)(Object(a.a)({},e[n.target.name]),{},{error:!0,helper:"Enter a Number!"})))})))}}}},213:function(e,t,n){"use strict";var r=n(0),a=n(11);t.a=Object(a.a)(r.createElement("path",{d:"M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"EditRounded")},214:function(e,t,n){"use strict";var r=n(0),a=n(11);t.a=Object(a.a)(r.createElement("path",{d:"M18.3 5.71a.9959.9959 0 00-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"}),"CloseRounded")},239:function(e,t,n){"use strict";var r=n(3),a=n(30),c=n(1),i=n(0),o=(n(6),n(4)),s=n(5),l=n(59),u=n(10),d=n(15),j=n(9),b=n(25);function m(e){return e.substring(2).toLowerCase()}var f=function(e){var t=e.children,n=e.disableReactTree,r=void 0!==n&&n,a=e.mouseEvent,c=void 0===a?"onClick":a,o=e.onClickAway,s=e.touchEvent,l=void 0===s?"onTouchEnd":s,f=i.useRef(!1),p=i.useRef(null),O=i.useRef(!1),g=i.useRef(!1);i.useEffect((function(){return setTimeout((function(){O.current=!0}),0),function(){O.current=!1}}),[]);var h=i.useCallback((function(e){p.current=u.findDOMNode(e)}),[]),x=Object(j.a)(t.ref,h),v=Object(b.a)((function(e){var t=g.current;if(g.current=!1,O.current&&p.current&&!function(e){return document.documentElement.clientWidth<e.clientX||document.documentElement.clientHeight<e.clientY}(e))if(f.current)f.current=!1;else{var n;if(e.composedPath)n=e.composedPath().indexOf(p.current)>-1;else n=!Object(d.a)(p.current).documentElement.contains(e.target)||p.current.contains(e.target);n||!r&&t||o(e)}})),y=function(e){return function(n){g.current=!0;var r=t.props[e];r&&r(n)}},E={ref:x};return!1!==l&&(E[l]=y(l)),i.useEffect((function(){if(!1!==l){var e=m(l),t=Object(d.a)(p.current),n=function(){f.current=!0};return t.addEventListener(e,v),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,v),t.removeEventListener("touchmove",n)}}}),[v,l]),!1!==c&&(E[c]=y(c)),i.useEffect((function(){if(!1!==c){var e=m(c),t=Object(d.a)(p.current);return t.addEventListener(e,v),function(){t.removeEventListener(e,v)}}}),[v,c]),i.createElement(i.Fragment,null,i.cloneElement(t,E))},p=n(7),O=n(42),g=n(190),h=n(146),x=n(13),v=i.forwardRef((function(e,t){var n=e.action,a=e.classes,s=e.className,l=e.message,u=e.role,d=void 0===u?"alert":u,j=Object(r.a)(e,["action","classes","className","message","role"]);return i.createElement(h.a,Object(c.a)({role:d,square:!0,elevation:6,className:Object(o.a)(a.root,s),ref:t},j),i.createElement("div",{className:a.message},l),n?i.createElement("div",{className:a.action},n):null)})),y=Object(s.a)((function(e){var t="light"===e.palette.type?.8:.98,n=Object(x.b)(e.palette.background.default,t);return{root:Object(c.a)({},e.typography.body2,Object(a.a)({color:e.palette.getContrastText(n),backgroundColor:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:e.shape.borderRadius,flexGrow:1},e.breakpoints.up("sm"),{flexGrow:"initial",minWidth:288})),message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiSnackbarContent"})(v),E=i.forwardRef((function(e,t){var n=e.action,a=e.anchorOrigin,s=(a=void 0===a?{vertical:"bottom",horizontal:"center"}:a).vertical,u=a.horizontal,d=e.autoHideDuration,j=void 0===d?null:d,m=e.children,h=e.classes,x=e.className,v=e.ClickAwayListenerProps,E=e.ContentProps,C=e.disableWindowBlurListener,w=void 0!==C&&C,k=e.message,L=e.onClose,T=e.onEnter,P=e.onEntered,S=e.onEntering,N=e.onExit,R=e.onExited,B=e.onExiting,A=e.onMouseEnter,z=e.onMouseLeave,D=e.open,M=e.resumeHideDuration,I=e.TransitionComponent,W=void 0===I?g.a:I,H=e.transitionDuration,F=void 0===H?{enter:l.b.enteringScreen,exit:l.b.leavingScreen}:H,U=e.TransitionProps,J=Object(r.a)(e,["action","anchorOrigin","autoHideDuration","children","classes","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onClose","onEnter","onEntered","onEntering","onExit","onExited","onExiting","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"]),V=i.useRef(),G=i.useState(!0),X=G[0],q=G[1],K=Object(b.a)((function(){L&&L.apply(void 0,arguments)})),Y=Object(b.a)((function(e){L&&null!=e&&(clearTimeout(V.current),V.current=setTimeout((function(){K(null,"timeout")}),e))}));i.useEffect((function(){return D&&Y(j),function(){clearTimeout(V.current)}}),[D,j,Y]);var Q=function(){clearTimeout(V.current)},Z=i.useCallback((function(){null!=j&&Y(null!=M?M:.5*j)}),[j,M,Y]);return i.useEffect((function(){if(!w&&D)return window.addEventListener("focus",Z),window.addEventListener("blur",Q),function(){window.removeEventListener("focus",Z),window.removeEventListener("blur",Q)}}),[w,Z,D]),!D&&X?null:i.createElement(f,Object(c.a)({onClickAway:function(e){L&&L(e,"clickaway")}},v),i.createElement("div",Object(c.a)({className:Object(o.a)(h.root,h["anchorOrigin".concat(Object(p.a)(s)).concat(Object(p.a)(u))],x),onMouseEnter:function(e){A&&A(e),Q()},onMouseLeave:function(e){z&&z(e),Z()},ref:t},J),i.createElement(W,Object(c.a)({appear:!0,in:D,onEnter:Object(O.a)((function(){q(!1)}),T),onEntered:P,onEntering:S,onExit:N,onExited:Object(O.a)((function(){q(!0)}),R),onExiting:B,timeout:F,direction:"top"===s?"down":"up"},U),m||i.createElement(y,Object(c.a)({message:k,action:n},E)))))}));t.a=Object(s.a)((function(e){var t={top:8},n={bottom:8},r={justifyContent:"flex-end"},i={justifyContent:"flex-start"},o={top:24},s={bottom:24},l={right:24},u={left:24},d={left:"50%",right:"auto",transform:"translateX(-50%)"};return{root:{zIndex:e.zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},anchorOriginTopCenter:Object(c.a)({},t,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({},o,d))),anchorOriginBottomCenter:Object(c.a)({},n,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({},s,d))),anchorOriginTopRight:Object(c.a)({},t,r,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},o,l))),anchorOriginBottomRight:Object(c.a)({},n,r,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({left:"auto"},s,l))),anchorOriginTopLeft:Object(c.a)({},t,i,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},o,u))),anchorOriginBottomLeft:Object(c.a)({},n,i,Object(a.a)({},e.breakpoints.up("sm"),Object(c.a)({right:"auto"},s,u)))}}),{flip:!1,name:"MuiSnackbar"})(E)},256:function(e,t,n){"use strict";n.r(t);var r,a=n(16),c=n(207),i=n(194),o=n(189),s=n(146),l=n(192),u=n(204),d=n(0),j=n(11),b=Object(j.a)(d.createElement("path",{d:"M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"}),"ArrowBackIosRounded"),m=n(213),f=Object(j.a)(d.createElement("path",{d:"M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"VpnKeyRounded"),p=n(17),O=n(179),g=n(211),h=n(210),x=n(2),v=Object(O.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"4rem"},container:{backgroundColor:"#454545",display:"grid",gridTemplateRows:"auto auto",minHeight:"450px",width:"400px",borderRadius:"1rem"},header:{boxShadow:"0 2.1px 1.9px -9px rgba(0, 0, 0, 0.065), 0 5px 4.4px -9px rgba(0, 0, 0, 0.093), 0 8.9px 7.9px -9px rgba(0, 0, 0, 0.115), 0 14.8px 13.2px -9px rgba(0, 0, 0, 0.135), 0 24.3px 21.7px -9px rgba(0, 0, 0, 0.157), 0 42.5px 37.9px -9px rgba(0, 0, 0, 0.185), 0 92px 82px -9px rgba(0, 0, 0, 0.25) ;",background:"linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0 0 200px 200px / 50px"},items:{placeSelf:"center"},avatar:{display:"flex",flexDirection:"column",alignItems:"center",background:"linear-gradient(to right, #ee5a6f, #f29263)"},paper:{display:"grid",gridTemplateColumns:"1fr 2fr",minHeight:"60vh",minWidth:"50vw"},data:{padding:"3rem",display:"grid",gridTemplateRows:"auto auto"}}}));t.default=function(){var e=Object(d.useContext)(p.b),t=v(),n=Object(d.useState)({first:{value:"",error:!1,helper:""},last:{value:"",error:!1,helper:""}}),j=Object(a.a)(n,2),O=j[0],y=j[1],E=Object(d.useState)({current:{value:"",error:!1,helper:""},newPass:{value:"",error:!1,helper:""}}),C=Object(a.a)(E,2),w=C[0],k=C[1],L=Object(d.useState)(!1),T=Object(a.a)(L,2),P=T[0],S=T[1],N=Object(d.useState)(!1),R=Object(a.a)(N,2),B=R[0],A=R[1],z=Object(d.useState)(!1),D=Object(a.a)(z,2),M=D[0],I=D[1],W=Object(d.useState)(!1),H=Object(a.a)(W,2),F=H[0],U=H[1],J=Object(d.useState)(!1),V=Object(a.a)(J,2),G=V[0],X=V[1],q=Object(d.useState)(""),K=Object(a.a)(q,2),Y=K[0],Q=K[1],Z=Object(g.a)(O,y),$=Z.handleOnChange,_=Z.handleValidation,ee=Object(g.a)(w,k),te=ee.handleOnChange,ne=ee.handleValidation;return Object(d.useEffect)((function(){fetch("".concat(e.baseURL,"/api/Users/Profile"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e.data&&(r=e.data,U(!0))}))}),[G]),Object(x.jsxs)(d.Fragment,{children:[Object(x.jsx)("div",{className:t.root,children:Object(x.jsxs)(s.a,{className:t.paper,elevation:5,children:[Object(x.jsxs)("div",{className:t.avatar,children:[Object(x.jsx)(c.a,{style:{justifySelf:"center",width:"100px",height:"100px",border:"0.2rem solid lightgray",marginTop:"4rem"}}),Object(x.jsxs)("div",{style:{marginTop:"2.2rem",color:"#eeeeee"},children:[Object(x.jsx)("h4",{style:{marginBottom:"0.4rem"},children:r&&r.firstName.toUpperCase()}),Object(x.jsx)("h4",{children:r&&r.lastName.toUpperCase()})]})]}),M&&Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{style:{padding:"1.5rem",textAlign:"left"},children:[Object(x.jsx)(o.a,{onClick:function(){U(!0),I(!1)},children:Object(x.jsx)(b,{})}),Object(x.jsx)("h4",{style:{display:"inline",marginLeft:".4rem"},children:"Change Password"})]}),Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(x.jsxs)(d.Fragment,{children:[Object(x.jsx)(u.a,{value:w.current.value,error:w.current.error,helperText:w.current.helper,style:{margin:"2rem 0"},placeholder:"Current Password",name:"current",onChange:te,onBlur:ne}),Object(x.jsx)(u.a,{value:w.newPass.value,error:w.newPass.error,helperText:w.newPass.helper,style:{marginBottom:"2rem"},placeholder:"Last Name",name:"newPass",onChange:te,onBlur:ne}),Object(x.jsx)(i.a,{color:"secondary",variant:"contained",onClick:function(){""!==w.current.value&&""!==w.newPass.value&&fetch("".concat(e.baseURL,"/api/Users/Profile/ChangePassword"),{method:"POST",body:JSON.stringify({currentPassword:w.current.value,newPassword:w.newPass.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(U(!0),I(!1),Q("Successfully Changed!")):Q("Something Went Wrong!"),S(!0)}))},children:"Change Password"})]})})]}),B&&Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{style:{padding:"1.5rem",textAlign:"left"},children:[Object(x.jsx)(o.a,{onClick:function(){U(!0),A(!1)},children:Object(x.jsx)(b,{})}),Object(x.jsx)("h4",{style:{display:"inline",marginLeft:".4rem"},children:"Edit Profile"})]}),Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(x.jsxs)(d.Fragment,{children:[Object(x.jsx)(u.a,{value:O.first.value,error:O.first.error,helperText:O.first.helper,style:{margin:"2rem 0"},placeholder:"First Name",name:"first",onChange:$,onBlur:_}),Object(x.jsx)(u.a,{value:O.last.value,error:O.last.error,helperText:O.last.helper,style:{marginBottom:"2rem"},placeholder:"Last Name",name:"last",onChange:$,onBlur:_}),Object(x.jsx)(i.a,{color:"primary",variant:"contained",onClick:function(){""!==O.first.value&&""!==O.last.value&&fetch("".concat(e.baseURL,"/api/Users/Profile"),{method:"POST",body:JSON.stringify({firstName:O.first.value,lastName:O.last.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(A(!1),X(!0),Q("Successfully Added!")):Q("Something Went Wrong!"),S(!0)}))},children:"Save Changes"})]})})]}),F&&Object(x.jsxs)("div",{className:t.data,children:[Object(x.jsxs)(d.Fragment,{children:[Object(x.jsxs)(d.Fragment,{children:[Object(x.jsx)("p",{style:{textAlign:"left",marginBottom:".4rem"},children:"Information"}),Object(x.jsx)(l.a,{})]}),Object(x.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"auto auto",marginTop:"2rem"},children:[Object(x.jsxs)("div",{style:{justifySelf:"start",marginLeft:"0.8rem"},children:[Object(x.jsx)("h5",{style:{textAlign:"left",marginBottom:".4rem"},children:"Code"}),Object(x.jsx)("p",{children:e.userData.code})]}),Object(x.jsxs)("div",{style:{justifySelf:"start",marginLeft:"0.8rem"},children:[Object(x.jsx)("h5",{style:{textAlign:"left",marginBottom:".4rem"},children:"Role"}),Object(x.jsx)("p",{children:e.userRole.toLowerCase()})]})]})]}),Object(x.jsxs)("div",{style:{marginTop:"7rem",alignSelf:"end"},children:[Object(x.jsxs)(i.a,{variant:"contained",size:"small",style:{background:"#2ecc71",width:"10.8rem"},onClick:function(){U(!1),A(!0)},children:[Object(x.jsx)(m.a,{style:{marginRight:"0.3rem"}}),"Edit Profile"]}),Object(x.jsxs)(i.a,{variant:"contained",size:"small",style:{background:"#e74c3c",marginLeft:"1rem",width:"10.8rem"},onClick:function(){U(!1),I(!0)},children:[Object(x.jsx)(f,{style:{marginRight:"0.3rem"}}),"Change Password"]})]})]})]})}),Object(x.jsx)(h.a,{open:P,handleClose:function(){return S(!1)},resMessage:Y})]})}}}]);