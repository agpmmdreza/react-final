(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[9],{210:function(e,t,a){"use strict";var n=a(239),l=a(189),r=a(214),c=a(179),i=a(0),o=a(2),s=Object(c.a)((function(e){return{snack:{background:"#04c256",color:"black"},snackError:{background:"#EA2027"}}}));t.a=function(e){var t=s();return Object(o.jsx)(n.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},ContentProps:{classes:{root:e.resMessage.includes("Success")?t.snack:t.snackError}},open:e.open,autoHideDuration:3e3,onClose:e.handleClose,message:e.resMessage,action:Object(o.jsx)(i.Fragment,{children:Object(o.jsx)(l.a,{size:"small",color:"inherit",onClick:e.handleClose,children:Object(o.jsx)(r.a,{fontSize:"small"})})})})}},211:function(e,t,a){"use strict";var n=a(47),l=a(19);t.a=function(e,t){return{handleOnChange:function(a,r){Array.isArray(e)?(t((function(e){return e.map((function(e,t){return r!==t?e:Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{value:a.target.value})))}))})),""!==a.target.value&&t((function(e){return e.map((function(e,t){return r!==t?e:Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{error:!1,helper:""})))}))}))):(t((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{value:a.target.value})))})),""!==a.target.value&&t((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{error:!1,helper:""})))})))},handleValidation:function(a,r){Array.isArray(e)?(""===a.target.value&&t((function(e){return e.map((function(e,t){return r!==t?e:Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{error:!0,helper:"Enter value!"})))}))})),"numerical"===e[r][a.target.name].type&&isNaN(a.target.value)&&t((function(e){return e.map((function(e,t){return r!==t?e:Object(l.a)(Object(l.a)({},e),{},{code:Object(l.a)(Object(l.a)({},e.code),{},{error:!0,helper:"Enter a Number!"})})}))}))):(""===a.target.value&&t((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a value!"})))})),"numerical"===e[a.target.name].type&&isNaN(a.target.value)&&t((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(n.a)({},a.target.name,Object(l.a)(Object(l.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a Number!"})))})))}}}},212:function(e,t,a){"use strict";var n=a(224),l=a(16),r=a(146),c=a(194),i=a(243),o=a(247),s=a(246),d=a(242),u=a(244),b=a(254),j=a(245),h=a(241),O=a(185),p=a(204),m=a(189),g=a(257),f=a(249),x=a(248),y=a(202),C=a(187),v=a(193),w=a(192),T=a(0),A=a(223),k=a(213),B=a(221),I=a(219),S=a(215),F=a(222),L=a(220),H=a(2),N=function(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(function(e,t){return t.toUpperCase()}))},P=function(e,t){return t.split(".").forEach((function(t){e&&(e=e[t])})),e};t.a=function(e){var t=Object(T.useState)(""),a=Object(l.a)(t,2),D=a[0],E=a[1],z=Object(T.useState)(0),R=Object(l.a)(z,2),G=R[0],U=R[1],W=Object(T.useState)(!1),M=Object(l.a)(W,2),J=M[0],V=M[1],Y=Object(T.useState)(!1),Z=Object(l.a)(Y,2),_=Z[0],q=Z[1],K=Object(T.useState)(!1),Q=Object(l.a)(K,2),X=Q[0],$=Q[1];return Object(H.jsxs)(r.a,{elevation:8,style:{width:"90%",borderRadius:"1rem"},children:[Object(H.jsxs)(h.a,{style:{backgroundColor:"#ebe9f5",borderRadius:"1rem 1rem 0 0"},children:[Object(H.jsx)("p",{children:e.tableTitle}),Object(H.jsxs)("div",{style:{display:"flex",marginLeft:"auto",alignSelf:"center"},children:[e.showSearch&&Object(H.jsx)(p.a,{name:"id",value:e.fields.id.value,onChange:e.onChange,placeholder:"Get By ID",style:{alignSelf:"center"},InputProps:{startAdornment:Object(H.jsx)(m.a,{size:"small",style:{alignSelf:"center"},onClick:function(){""!==e.fields.id.value&&e.handleGetById(e.fields.id.value)},children:Object(H.jsx)(S.a,{})})}}),e.showAddByGroup&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return q(!_)},children:_?Object(H.jsx)(I.a,{}):Object(H.jsx)(L.a,{})}),e.showAdd&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return V(!J)},children:J?Object(H.jsx)(I.a,{}):Object(H.jsx)(B.a,{})}),e.idCalled&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return e.reloadPage(!0)},children:Object(H.jsx)(F.a,{})})]})]}),e.showAddByGroup&&Object(H.jsx)(O.a,{in:_,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(H.jsx)(C.a,{variant:"outlined",style:{margin:"0 0.5rem",marginBottom:".5rem"},children:Object(H.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(H.jsxs)(T.Fragment,{children:[e.groupFields.map((function(t,a){return Object(H.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:e.tableHead.map((function(n,l){return n.addField.includes("add")&&Object(H.jsx)("div",{children:Object(H.jsx)(p.a,{multiline:"multiline"in n,value:t[N(n.label)].value,error:t[N(n.label)].error,helperText:t[N(n.label)].helper,style:{width:"7rem",margin:"1rem"},placeholder:n.label,name:N(n.label),onBlur:function(t){return e.onBlurGroup(t,a)},onChange:function(t){return e.onChangeGroup(t,a)}},a)},l)}))},a)})),Object(H.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAddGroup(e.groupFields)},children:"Add Group"}),Object(H.jsx)("div",{children:Object(H.jsx)(m.a,{onClick:function(){e.onSetFieldsGroup((function(t){return[].concat(Object(n.a)(t),[e.INIT_BODY])}))},children:Object(H.jsx)(B.a,{})})})]})})})})}),e.showAdd&&Object(H.jsx)(O.a,{in:J,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(H.jsx)(C.a,{variant:"outlined",style:{margin:".8rem 0.4rem"},children:Object(H.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(H.jsxs)(T.Fragment,{children:[e.tableHead.map((function(t,a){return t.addField.includes("add")&&Object(H.jsx)(p.a,{multiline:"multiline"in t,value:e.fields[N(t.label)].value,error:e.fields[N(t.label)].error,helperText:e.fields[N(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:N(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(H.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAdd(e.fields)},children:"Add"})]})})})})}),Object(H.jsxs)(T.Fragment,{children:[Object(H.jsxs)(d.a,{children:[Object(H.jsx)(w.a,{style:{backgroundColor:"#c4c4c4"}}),Object(H.jsxs)(i.a,{children:[Object(H.jsx)(u.a,{style:{backgroundColor:"#ebe9f5"},children:Object(H.jsx)(j.a,{children:e.tableHead.map((function(e,t){return e.addHeader&&Object(H.jsx)(s.a,{align:e.align,children:e.label},t)}))})}),Object(H.jsx)(o.a,{children:0!==e.response.length?e.response.slice(10*G,10*G+10).map((function(t,a){return Object(H.jsxs)(T.Fragment,{children:[Object(H.jsxs)(j.a,{hover:!0,children:[e.tableHead.map((function(e,a){return e.addHeader&&"Actions"!==e.label&&Object(H.jsx)(s.a,{align:e.align,children:"Master"===e.label?P(t[N(e.secLabel)],""===e.path?"firstName":e.path+".firstName")+" "+P(t[N(e.secLabel)],""===e.path?"lastName":e.path+".lastName"):"Day"===e.label||"Bell"===e.label?P(t[N(e.label)],e.path):"Course"===e.label?e.secLabel?"".concat(P(t[N(e.secLabel)].course,"title")," (").concat(P(t[N(e.secLabel)].course,"unitsCount"),")\n                                        "):"".concat(P(t[N(e.label)],"title")," (").concat(P(t[N(e.label)],"unitsCount"),")\n                                        "):"Course Time"===e.label?"Time Table"===e.secLabel?t[N(e.secLabel)].timeTableBellList.map((function(e,t){return Object(H.jsx)(y.a,{display:"flex",children:Object(H.jsx)(y.a,{m:"auto",children:"".concat(P(e,"day.label")," (").concat(P(e,"bell.label"),")\n                                      ")})},t)})):t[N(e.secLabel)].map((function(e,t){return Object(H.jsx)(y.a,{display:"flex",children:Object(H.jsx)(y.a,{m:"auto",children:"".concat(P(e,"day.label")," (").concat(P(e,"bell.label"),")\n                                              ")})},t)})):t[N(e.label)]},a)})),e.showActions&&Object(H.jsxs)(s.a,{align:"right",children:[e.showEdit&&Object(H.jsx)(m.a,{size:"small",onClick:function(){return E(D===a?"":a)},children:a===D?Object(H.jsx)(I.a,{}):Object(H.jsx)(k.a,{style:{color:"#16a085"}})}),Object(H.jsx)(m.a,{color:"secondary",size:"small",onClick:function(){return $(!0)},children:Object(H.jsx)(A.a,{style:{color:"#e74c3c"}})}),Object(H.jsxs)(g.a,{open:X,onClose:function(){return $(!1)},transitionDuration:200,children:[Object(H.jsx)(x.a,{children:"Are you sure you want to delete?"}),Object(H.jsxs)(f.a,{children:[Object(H.jsx)(c.a,{onClick:function(){return $(!1)},color:"primary",children:"Cancel"}),Object(H.jsx)(c.a,{onClick:function(){e.handleDelete(t.id),$(!1)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})]}),e.showActions&&Object(H.jsx)(j.a,{children:Object(H.jsx)(s.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(H.jsx)(O.a,{in:a===D,timeout:"auto",unmountOnExit:!0,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:Object(H.jsx)(C.a,{variant:"outlined",style:{margin:"0.4rem 0.4rem"},children:Object(H.jsxs)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[e.tableHead.map((function(t,a){return t.addField.includes("update")&&Object(H.jsx)(p.a,{value:e.fields[N(t.label)].value,error:e.fields[N(t.label)].error,helperText:e.fields[N(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:N(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(H.jsx)(c.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleUpdate(t.id,e.fields)},children:"Update"})]})})})})})})]},a)})):Object(H.jsx)(j.a,{children:Object(H.jsx)(s.a,{colSpan:6,style:{textAlign:"center"},children:"There is no data to be shown!"})})})]})]}),Object(H.jsx)(b.a,{component:"div",labelRowsPerPage:"",rowsPerPageOptions:[],count:void 0!==e.pageCount&&Number(e.pageCount),rowsPerPage:10,page:e.pageNum>0&&e.pageCount<10?0:e.pageNum,onChangePage:function(e,t){U(t)}})]})]})}},252:function(e,t,a){"use strict";a.r(t);var n,l,r=a(16),c=a(0),i=a(17),o=a(179),s=a(212),d=a(210),u=a(211),b=a(2),j=[{label:"ID",align:"left",addField:[""],addHeader:!0},{label:"Day",path:"label",align:"center",addField:[],addHeader:!0},{label:"Bell",path:"label",align:"center",addField:[],addHeader:!0},{label:"Master",secLabel:"Master",path:"user",align:"center",addField:[],addHeader:!0},{label:"Day Id",align:"center",addField:["add"],addHeader:!1},{label:"Bell Id",align:"center",addField:["add"],addHeader:!1},{label:"Time Table Id",align:"center",addField:["add"],addHeader:!1}],h=Object(o.a)((function(e){return{container:{display:"flex",minHeight:"450px",width:"auto",justifyContent:"center"},paper:{width:"90%"},table:{},inner:{width:"250px"}}}));t.default=function(){var e=Object(c.useContext)(i.b),t=e.userRole.toLowerCase(),a=Object(c.useState)(!1),o=Object(r.a)(a,2),O=o[0],p=o[1],m=Object(c.useState)(!1),g=Object(r.a)(m,2),f=g[0],x=g[1],y=Object(c.useState)(!1),C=Object(r.a)(y,2),v=C[0],w=C[1],T=Object(c.useState)(!1),A=Object(r.a)(T,2),k=A[0],B=A[1],I=Object(c.useState)(""),S=Object(r.a)(I,2),F=S[0],L=S[1],H=h(),N=Object(c.useState)({id:{value:"",error:!1,helper:"",type:"numerical"},dayId:{value:"",error:!1,helper:""},timeTableId:{value:"",error:!1,helper:"",type:"numerical"},bellId:{value:"",error:!1,helper:"",type:"numerical"}}),P=Object(r.a)(N,2),D=P[0],E=P[1],z=Object(u.a)(D,E),R=z.handleOnChange,G=z.handleValidation;Object(c.useEffect)((function(){"student"!==t&&(j.some((function(e){return"Actions"===e.label}))||j.push({label:"Actions",align:"right",addField:[],addHeader:!0})),f?f&&v&&U():U()}),[v]);var U=function(){fetch("".concat(e.baseURL,"/api/TimeTableBells"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e?(n=e.data.list,l={count:e.data.list.length,totalPages:e.data.totalPage,page:e.data.page},x(!1),x(!0),p(!1),w(!1)):console.log(e.message)}))};return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("div",{className:H.container,children:f&&Object(b.jsx)(s.a,{idCalled:O,reloadPage:function(e){return w(e)},response:n,pageCount:l.count,pageNum:l.page,totalPages:l.totalPages,tableHead:j,tableTitle:"Time Table Bells List",showAdd:"master"===t,showActions:"student"!==t,showEdit:"master"===t,showSearch:!0,fields:D,handleDelete:function(t){fetch("".concat(e.baseURL,"/api/TimeTableBells/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(L("Successfully Deleted!"),w(!0)):L("Something Went Wrong!"),B(!0)}))},handleAdd:function(t){""!==t.timeTableId.value&&""!==t.bellId.value&&""!==t.dayId.value&&fetch("".concat(e.baseURL,"/api/TimeTableBells"),{method:"POST",body:JSON.stringify({dayId:t.dayId.value,bellId:t.bellId.value,timeTableId:t.timeTableId.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(L("Successfully Added!"),w(!0)):L("Something Went Wrong!"),B(!0)}))},handleUpdate:function(e,t){},handleGetById:function(t){fetch("".concat(e.baseURL,"/api/TimeTableBells/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e.data?(n=[e.data],l={count:1,totalPages:1,page:1},x(!1),x(!0),p(!0)):(L("Not Found!"),B(!0))}))},onSetFields:E,onChange:R,onBlur:G})}),Object(b.jsx)(d.a,{open:k,handleClose:function(){return B(!1)},resMessage:F})]})}}}]);