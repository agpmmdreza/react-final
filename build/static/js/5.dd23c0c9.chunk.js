(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{210:function(e,t,a){"use strict";var n=a(239),r=a(189),l=a(214),c=a(179),i=a(0),o=a(2),s=Object(c.a)((function(e){return{snack:{background:"#04c256",color:"black"},snackError:{background:"#EA2027"}}}));t.a=function(e){var t=s();return Object(o.jsx)(n.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},ContentProps:{classes:{root:e.resMessage.includes("Success")?t.snack:t.snackError}},open:e.open,autoHideDuration:3e3,onClose:e.handleClose,message:e.resMessage,action:Object(o.jsx)(i.Fragment,{children:Object(o.jsx)(r.a,{size:"small",color:"inherit",onClick:e.handleClose,children:Object(o.jsx)(l.a,{fontSize:"small"})})})})}},211:function(e,t,a){"use strict";var n=a(47),r=a(19);t.a=function(e,t){return{handleOnChange:function(a,l){Array.isArray(e)?(t((function(e){return e.map((function(e,t){return l!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{value:a.target.value})))}))})),""!==a.target.value&&t((function(e){return e.map((function(e,t){return l!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!1,helper:""})))}))}))):(t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{value:a.target.value})))})),""!==a.target.value&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!1,helper:""})))})))},handleValidation:function(a,l){Array.isArray(e)?(""===a.target.value&&t((function(e){return e.map((function(e,t){return l!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter value!"})))}))})),"numerical"===e[l][a.target.name].type&&isNaN(a.target.value)&&t((function(e){return e.map((function(e,t){return l!==t?e:Object(r.a)(Object(r.a)({},e),{},{code:Object(r.a)(Object(r.a)({},e.code),{},{error:!0,helper:"Enter a Number!"})})}))}))):(""===a.target.value&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a value!"})))})),"numerical"===e[a.target.name].type&&isNaN(a.target.value)&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a Number!"})))})))}}}},212:function(e,t,a){"use strict";var n=a(224),r=a(16),l=a(146),c=a(194),i=a(243),o=a(247),s=a(246),d=a(242),u=a(244),b=a(254),j=a(245),h=a(241),m=a(185),O=a(204),p=a(189),g=a(257),f=a(249),x=a(248),y=a(202),C=a(187),v=a(193),w=a(192),A=a(0),T=a(223),k=a(213),S=a(221),L=a(219),F=a(215),B=a(222),I=a(220),N=a(2),H=function(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(function(e,t){return t.toUpperCase()}))},P=function(e,t){return t.split(".").forEach((function(t){e&&(e=e[t])})),e};t.a=function(e){var t=Object(A.useState)(""),a=Object(r.a)(t,2),D=a[0],E=a[1],z=Object(A.useState)(0),R=Object(r.a)(z,2),G=R[0],U=R[1],W=Object(A.useState)(!1),M=Object(r.a)(W,2),J=M[0],V=M[1],Y=Object(A.useState)(!1),Z=Object(r.a)(Y,2),_=Z[0],q=Z[1],K=Object(A.useState)(!1),Q=Object(r.a)(K,2),X=Q[0],$=Q[1];return Object(N.jsxs)(l.a,{elevation:8,style:{width:"90%",borderRadius:"1rem"},children:[Object(N.jsxs)(h.a,{style:{backgroundColor:"#ebe9f5",borderRadius:"1rem 1rem 0 0"},children:[Object(N.jsx)("p",{children:e.tableTitle}),Object(N.jsxs)("div",{style:{display:"flex",marginLeft:"auto",alignSelf:"center"},children:[e.showSearch&&Object(N.jsx)(O.a,{name:"id",value:e.fields.id.value,onChange:e.onChange,placeholder:"Get By ID",style:{alignSelf:"center"},InputProps:{startAdornment:Object(N.jsx)(p.a,{size:"small",style:{alignSelf:"center"},onClick:function(){""!==e.fields.id.value&&e.handleGetById(e.fields.id.value)},children:Object(N.jsx)(F.a,{})})}}),e.showAddByGroup&&Object(N.jsx)(p.a,{color:"primary",onClick:function(){return q(!_)},children:_?Object(N.jsx)(L.a,{}):Object(N.jsx)(I.a,{})}),e.showAdd&&Object(N.jsx)(p.a,{color:"primary",onClick:function(){return V(!J)},children:J?Object(N.jsx)(L.a,{}):Object(N.jsx)(S.a,{})}),e.idCalled&&Object(N.jsx)(p.a,{color:"primary",onClick:function(){return e.reloadPage(!0)},children:Object(N.jsx)(B.a,{})})]})]}),e.showAddByGroup&&Object(N.jsx)(m.a,{in:_,children:Object(N.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(N.jsx)(C.a,{variant:"outlined",style:{margin:"0 0.5rem",marginBottom:".5rem"},children:Object(N.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(N.jsxs)(A.Fragment,{children:[e.groupFields.map((function(t,a){return Object(N.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:e.tableHead.map((function(n,r){return n.addField.includes("add")&&Object(N.jsx)("div",{children:Object(N.jsx)(O.a,{multiline:"multiline"in n,value:t[H(n.label)].value,error:t[H(n.label)].error,helperText:t[H(n.label)].helper,style:{width:"7rem",margin:"1rem"},placeholder:n.label,name:H(n.label),onBlur:function(t){return e.onBlurGroup(t,a)},onChange:function(t){return e.onChangeGroup(t,a)}},a)},r)}))},a)})),Object(N.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAddGroup(e.groupFields)},children:"Add Group"}),Object(N.jsx)("div",{children:Object(N.jsx)(p.a,{onClick:function(){e.onSetFieldsGroup((function(t){return[].concat(Object(n.a)(t),[e.INIT_BODY])}))},children:Object(N.jsx)(S.a,{})})})]})})})})}),e.showAdd&&Object(N.jsx)(m.a,{in:J,children:Object(N.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(N.jsx)(C.a,{variant:"outlined",style:{margin:".8rem 0.4rem"},children:Object(N.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(N.jsxs)(A.Fragment,{children:[e.tableHead.map((function(t,a){return t.addField.includes("add")&&Object(N.jsx)(O.a,{multiline:"multiline"in t,value:e.fields[H(t.label)].value,error:e.fields[H(t.label)].error,helperText:e.fields[H(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:H(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(N.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAdd(e.fields)},children:"Add"})]})})})})}),Object(N.jsxs)(A.Fragment,{children:[Object(N.jsxs)(d.a,{children:[Object(N.jsx)(w.a,{style:{backgroundColor:"#c4c4c4"}}),Object(N.jsxs)(i.a,{children:[Object(N.jsx)(u.a,{style:{backgroundColor:"#ebe9f5"},children:Object(N.jsx)(j.a,{children:e.tableHead.map((function(e,t){return e.addHeader&&Object(N.jsx)(s.a,{align:e.align,children:e.label},t)}))})}),Object(N.jsx)(o.a,{children:0!==e.response.length?e.response.slice(10*G,10*G+10).map((function(t,a){return Object(N.jsxs)(A.Fragment,{children:[Object(N.jsxs)(j.a,{hover:!0,children:[e.tableHead.map((function(e,a){return e.addHeader&&"Actions"!==e.label&&Object(N.jsx)(s.a,{align:e.align,children:"Master"===e.label?P(t[H(e.secLabel)],""===e.path?"firstName":e.path+".firstName")+" "+P(t[H(e.secLabel)],""===e.path?"lastName":e.path+".lastName"):"Day"===e.label||"Bell"===e.label?P(t[H(e.label)],e.path):"Course"===e.label?e.secLabel?"".concat(P(t[H(e.secLabel)].course,"title")," (").concat(P(t[H(e.secLabel)].course,"unitsCount"),")\n                                        "):"".concat(P(t[H(e.label)],"title")," (").concat(P(t[H(e.label)],"unitsCount"),")\n                                        "):"Course Time"===e.label?"Time Table"===e.secLabel?t[H(e.secLabel)].timeTableBellList.map((function(e,t){return Object(N.jsx)(y.a,{display:"flex",children:Object(N.jsx)(y.a,{m:"auto",children:"".concat(P(e,"day.label")," (").concat(P(e,"bell.label"),")\n                                      ")})},t)})):t[H(e.secLabel)].map((function(e,t){return Object(N.jsx)(y.a,{display:"flex",children:Object(N.jsx)(y.a,{m:"auto",children:"".concat(P(e,"day.label")," (").concat(P(e,"bell.label"),")\n                                              ")})},t)})):t[H(e.label)]},a)})),e.showActions&&Object(N.jsxs)(s.a,{align:"right",children:[e.showEdit&&Object(N.jsx)(p.a,{size:"small",onClick:function(){return E(D===a?"":a)},children:a===D?Object(N.jsx)(L.a,{}):Object(N.jsx)(k.a,{style:{color:"#16a085"}})}),Object(N.jsx)(p.a,{color:"secondary",size:"small",onClick:function(){return $(!0)},children:Object(N.jsx)(T.a,{style:{color:"#e74c3c"}})}),Object(N.jsxs)(g.a,{open:X,onClose:function(){return $(!1)},transitionDuration:200,children:[Object(N.jsx)(x.a,{children:"Are you sure you want to delete?"}),Object(N.jsxs)(f.a,{children:[Object(N.jsx)(c.a,{onClick:function(){return $(!1)},color:"primary",children:"Cancel"}),Object(N.jsx)(c.a,{onClick:function(){e.handleDelete(t.id),$(!1)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})]}),e.showActions&&Object(N.jsx)(j.a,{children:Object(N.jsx)(s.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(N.jsx)(m.a,{in:a===D,timeout:"auto",unmountOnExit:!0,children:Object(N.jsx)("form",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:Object(N.jsx)(C.a,{variant:"outlined",style:{margin:"0.4rem 0.4rem"},children:Object(N.jsxs)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[e.tableHead.map((function(t,a){return t.addField.includes("update")&&Object(N.jsx)(O.a,{value:e.fields[H(t.label)].value,error:e.fields[H(t.label)].error,helperText:e.fields[H(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:H(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(N.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleUpdate(t.id,e.fields)},children:"Update"})]})})})})})})]},a)})):Object(N.jsx)(j.a,{children:Object(N.jsx)(s.a,{colSpan:6,style:{textAlign:"center"},children:"There is no data to be shown!"})})})]})]}),Object(N.jsx)(b.a,{component:"div",labelRowsPerPage:"",rowsPerPageOptions:[],count:void 0!==e.pageCount&&Number(e.pageCount),rowsPerPage:10,page:e.pageNum>0&&e.pageCount<10?0:e.pageNum,onChangePage:function(e,t){U(t)}})]})]})}},251:function(e,t,a){"use strict";a.r(t);var n,r,l=a(16),c=a(0),i=a(17),o=a(179),s=a(212),d=a(210),u=a(211),b=a(2),j=[{label:"ID",align:"left",addField:[""],addHeader:!0},{label:"Course",secLabel:"Time Table",align:"center",addField:[],addHeader:!0},{label:"Course Time",secLabel:"Time Table",align:"center",addField:[],addHeader:!0},{label:"Master",secLabel:"Time Table",path:"master.user",align:"center",addField:[],addHeader:!0},{label:"Message",align:"center",addField:["add"],addHeader:!0,multiline:!0},{label:"Time Table ID",align:"center",addField:["add"],addHeader:!1}],h=Object(o.a)((function(e){return{container:{display:"flex",minHeight:"450px",width:"auto",justifyContent:"center"},paper:{width:"90%"},table:{},inner:{width:"250px"}}}));t.default=function(){var e=Object(c.useContext)(i.b),t=e.userRole.toLowerCase(),a=Object(c.useState)(!1),o=Object(l.a)(a,2),m=o[0],O=o[1],p=Object(c.useState)(!1),g=Object(l.a)(p,2),f=g[0],x=g[1],y=Object(c.useState)(!1),C=Object(l.a)(y,2),v=C[0],w=C[1],A=Object(c.useState)(!1),T=Object(l.a)(A,2),k=T[0],S=T[1],L=Object(c.useState)(""),F=Object(l.a)(L,2),B=F[0],I=F[1],N=h(),H=Object(c.useState)({id:{value:"",error:!1,helper:"",type:"numerical"},message:{value:"",error:!1,helper:""},timeTableId:{value:"",error:!1,helper:"",type:"numerical"}}),P=Object(l.a)(H,2),D=P[0],E=P[1],z=Object(u.a)(D,E),R=z.handleOnChange,G=z.handleValidation;Object(c.useEffect)((function(){"student"!==t&&(j.some((function(e){return"Actions"===e.label}))||j.push({label:"Actions",align:"right",addField:[],addHeader:!0})),f?f&&v&&U():U()}),[v]);var U=function(){fetch("".concat(e.baseURL,"/api/Announcements"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e?(n=e.data.list,r={count:e.data.list.length,totalPages:e.data.totalPage,page:e.data.page},x(!1),x(!0),O(!1),w(!1)):console.log(e.message)}))};return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("div",{className:N.container,children:f&&Object(b.jsx)(s.a,{idCalled:m,reloadPage:function(e){return w(e)},response:n,pageCount:r.count,pageNum:r.page,totalPages:r.totalPages,tableHead:j,tableTitle:" List",showAdd:"admin"===t,showActions:"admin"===t,showSearch:!0,fields:D,handleDelete:function(t){fetch("".concat(e.baseURL,"/api/Announcements/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(I("Successfully Deleted!"),w(!0)):I("Something Went Wrong!"),S(!0)}))},handleAdd:function(t){""!==t.timeTableId.value&&""!==t.message.value&&fetch("".concat(e.baseURL,"/api/Announcements"),{method:"POST",body:JSON.stringify({timeTableId:t.timeTableId.value,message:t.message.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(I("Successfully Added!"),w(!0)):I("Something Went Wrong!"),S(!0)}))},handleUpdate:function(e,t){},handleGetById:function(t){fetch("".concat(e.baseURL,"/api/Announcements/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e.data?(n=[e.data],r={count:1,totalPages:1,page:1},x(!1),x(!0),O(!0)):(I("Not Found!"),S(!0))}))},onSetFields:E,onChange:R,onBlur:G})}),Object(b.jsx)(d.a,{open:k,handleClose:function(){return S(!1)},resMessage:B})]})}}}]);