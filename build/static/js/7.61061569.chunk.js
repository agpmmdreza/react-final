(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[7],{210:function(e,t,a){"use strict";var n=a(239),r=a(189),c=a(214),l=a(179),o=a(0),i=a(2),s=Object(l.a)((function(e){return{snack:{background:"#04c256",color:"black"},snackError:{background:"#EA2027"}}}));t.a=function(e){var t=s();return Object(i.jsx)(n.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},ContentProps:{classes:{root:e.resMessage.includes("Success")?t.snack:t.snackError}},open:e.open,autoHideDuration:3e3,onClose:e.handleClose,message:e.resMessage,action:Object(i.jsx)(o.Fragment,{children:Object(i.jsx)(r.a,{size:"small",color:"inherit",onClick:e.handleClose,children:Object(i.jsx)(c.a,{fontSize:"small"})})})})}},211:function(e,t,a){"use strict";var n=a(47),r=a(19);t.a=function(e,t){return{handleOnChange:function(a,c){Array.isArray(e)?(t((function(e){return e.map((function(e,t){return c!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{value:a.target.value})))}))})),""!==a.target.value&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!1,helper:""})))}))}))):(t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{value:a.target.value})))})),""!==a.target.value&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!1,helper:""})))})))},handleValidation:function(a,c){Array.isArray(e)?(""===a.target.value&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter value!"})))}))})),"numerical"===e[c][a.target.name].type&&isNaN(a.target.value)&&t((function(e){return e.map((function(e,t){return c!==t?e:Object(r.a)(Object(r.a)({},e),{},{code:Object(r.a)(Object(r.a)({},e.code),{},{error:!0,helper:"Enter a Number!"})})}))}))):(""===a.target.value&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a value!"})))})),"numerical"===e[a.target.name].type&&isNaN(a.target.value)&&t((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(n.a)({},a.target.name,Object(r.a)(Object(r.a)({},e[a.target.name]),{},{error:!0,helper:"Enter a Number!"})))})))}}}},212:function(e,t,a){"use strict";var n=a(224),r=a(16),c=a(146),l=a(194),o=a(243),i=a(247),s=a(246),u=a(242),d=a(244),j=a(254),b=a(245),h=a(241),O=a(185),g=a(204),m=a(189),p=a(257),f=a(249),x=a(248),C=a(202),y=a(187),v=a(193),k=a(192),S=a(0),w=a(223),A=a(213),L=a(221),T=a(219),F=a(215),B=a(222),P=a(220),H=a(2),N=function(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(function(e,t){return t.toUpperCase()}))},D=function(e,t){return t.split(".").forEach((function(t){e&&(e=e[t])})),e};t.a=function(e){var t=Object(S.useState)(""),a=Object(r.a)(t,2),I=a[0],E=a[1],z=Object(S.useState)(0),R=Object(r.a)(z,2),U=R[0],M=R[1],G=Object(S.useState)(!1),W=Object(r.a)(G,2),J=W[0],V=W[1],Y=Object(S.useState)(!1),Z=Object(r.a)(Y,2),_=Z[0],q=Z[1],K=Object(S.useState)(!1),Q=Object(r.a)(K,2),X=Q[0],$=Q[1];return Object(H.jsxs)(c.a,{elevation:8,style:{width:"90%",borderRadius:"1rem"},children:[Object(H.jsxs)(h.a,{style:{backgroundColor:"#ebe9f5",borderRadius:"1rem 1rem 0 0"},children:[Object(H.jsx)("p",{children:e.tableTitle}),Object(H.jsxs)("div",{style:{display:"flex",marginLeft:"auto",alignSelf:"center"},children:[e.showSearch&&Object(H.jsx)(g.a,{name:"id",value:e.fields.id.value,onChange:e.onChange,placeholder:"Get By ID",style:{alignSelf:"center"},InputProps:{startAdornment:Object(H.jsx)(m.a,{size:"small",style:{alignSelf:"center"},onClick:function(){""!==e.fields.id.value&&e.handleGetById(e.fields.id.value)},children:Object(H.jsx)(F.a,{})})}}),e.showAddByGroup&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return q(!_)},children:_?Object(H.jsx)(T.a,{}):Object(H.jsx)(P.a,{})}),e.showAdd&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return V(!J)},children:J?Object(H.jsx)(T.a,{}):Object(H.jsx)(L.a,{})}),e.idCalled&&Object(H.jsx)(m.a,{color:"primary",onClick:function(){return e.reloadPage(!0)},children:Object(H.jsx)(B.a,{})})]})]}),e.showAddByGroup&&Object(H.jsx)(O.a,{in:_,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(H.jsx)(y.a,{variant:"outlined",style:{margin:"0 0.5rem",marginBottom:".5rem"},children:Object(H.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(H.jsxs)(S.Fragment,{children:[e.groupFields.map((function(t,a){return Object(H.jsx)("div",{style:{display:"flex",flexDirection:"row"},children:e.tableHead.map((function(n,r){return n.addField.includes("add")&&Object(H.jsx)("div",{children:Object(H.jsx)(g.a,{multiline:"multiline"in n,value:t[N(n.label)].value,error:t[N(n.label)].error,helperText:t[N(n.label)].helper,style:{width:"7rem",margin:"1rem"},placeholder:n.label,name:N(n.label),onBlur:function(t){return e.onBlurGroup(t,a)},onChange:function(t){return e.onChangeGroup(t,a)}},a)},r)}))},a)})),Object(H.jsx)(l.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAddGroup(e.groupFields)},children:"Add Group"}),Object(H.jsx)("div",{children:Object(H.jsx)(m.a,{onClick:function(){e.onSetFieldsGroup((function(t){return[].concat(Object(n.a)(t),[e.INIT_BODY])}))},children:Object(H.jsx)(L.a,{})})})]})})})})}),e.showAdd&&Object(H.jsx)(O.a,{in:J,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center"},children:Object(H.jsx)(y.a,{variant:"outlined",style:{margin:".8rem 0.4rem"},children:Object(H.jsx)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:Object(H.jsxs)(S.Fragment,{children:[e.tableHead.map((function(t,a){return t.addField.includes("add")&&Object(H.jsx)(g.a,{multiline:"multiline"in t,value:e.fields[N(t.label)].value,error:e.fields[N(t.label)].error,helperText:e.fields[N(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:N(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(H.jsx)(l.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleAdd(e.fields)},children:"Add"})]})})})})}),Object(H.jsxs)(S.Fragment,{children:[Object(H.jsxs)(u.a,{children:[Object(H.jsx)(k.a,{style:{backgroundColor:"#c4c4c4"}}),Object(H.jsxs)(o.a,{children:[Object(H.jsx)(d.a,{style:{backgroundColor:"#ebe9f5"},children:Object(H.jsx)(b.a,{children:e.tableHead.map((function(e,t){return e.addHeader&&Object(H.jsx)(s.a,{align:e.align,children:e.label},t)}))})}),Object(H.jsx)(i.a,{children:0!==e.response.length?e.response.slice(10*U,10*U+10).map((function(t,a){return Object(H.jsxs)(S.Fragment,{children:[Object(H.jsxs)(b.a,{hover:!0,children:[e.tableHead.map((function(e,a){return e.addHeader&&"Actions"!==e.label&&Object(H.jsx)(s.a,{align:e.align,children:"Master"===e.label?D(t[N(e.secLabel)],""===e.path?"firstName":e.path+".firstName")+" "+D(t[N(e.secLabel)],""===e.path?"lastName":e.path+".lastName"):"Day"===e.label||"Bell"===e.label?D(t[N(e.label)],e.path):"Course"===e.label?e.secLabel?"".concat(D(t[N(e.secLabel)].course,"title")," (").concat(D(t[N(e.secLabel)].course,"unitsCount"),")\n                                        "):"".concat(D(t[N(e.label)],"title")," (").concat(D(t[N(e.label)],"unitsCount"),")\n                                        "):"Course Time"===e.label?"Time Table"===e.secLabel?t[N(e.secLabel)].timeTableBellList.map((function(e,t){return Object(H.jsx)(C.a,{display:"flex",children:Object(H.jsx)(C.a,{m:"auto",children:"".concat(D(e,"day.label")," (").concat(D(e,"bell.label"),")\n                                      ")})},t)})):t[N(e.secLabel)].map((function(e,t){return Object(H.jsx)(C.a,{display:"flex",children:Object(H.jsx)(C.a,{m:"auto",children:"".concat(D(e,"day.label")," (").concat(D(e,"bell.label"),")\n                                              ")})},t)})):t[N(e.label)]},a)})),e.showActions&&Object(H.jsxs)(s.a,{align:"right",children:[e.showEdit&&Object(H.jsx)(m.a,{size:"small",onClick:function(){return E(I===a?"":a)},children:a===I?Object(H.jsx)(T.a,{}):Object(H.jsx)(A.a,{style:{color:"#16a085"}})}),Object(H.jsx)(m.a,{color:"secondary",size:"small",onClick:function(){return $(!0)},children:Object(H.jsx)(w.a,{style:{color:"#e74c3c"}})}),Object(H.jsxs)(p.a,{open:X,onClose:function(){return $(!1)},transitionDuration:200,children:[Object(H.jsx)(x.a,{children:"Are you sure you want to delete?"}),Object(H.jsxs)(f.a,{children:[Object(H.jsx)(l.a,{onClick:function(){return $(!1)},color:"primary",children:"Cancel"}),Object(H.jsx)(l.a,{onClick:function(){e.handleDelete(t.id),$(!1)},color:"primary",autoFocus:!0,children:"Delete"})]})]})]})]}),e.showActions&&Object(H.jsx)(b.a,{children:Object(H.jsx)(s.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(H.jsx)(O.a,{in:a===I,timeout:"auto",unmountOnExit:!0,children:Object(H.jsx)("form",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:Object(H.jsx)(y.a,{variant:"outlined",style:{margin:"0.4rem 0.4rem"},children:Object(H.jsxs)(v.a,{style:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[e.tableHead.map((function(t,a){return t.addField.includes("update")&&Object(H.jsx)(g.a,{value:e.fields[N(t.label)].value,error:e.fields[N(t.label)].error,helperText:e.fields[N(t.label)].helper,style:{width:"10rem",margin:"1rem"},placeholder:t.label,name:N(t.label),onBlur:e.onBlur,onChange:e.onChange},a)})),Object(H.jsx)(l.a,{variant:"contained",color:"primary",style:{marginLeft:"auto",marginRight:"1rem"},onClick:function(){e.handleUpdate(t.id,e.fields)},children:"Update"})]})})})})})})]},a)})):Object(H.jsx)(b.a,{children:Object(H.jsx)(s.a,{colSpan:6,style:{textAlign:"center"},children:"There is no data to be shown!"})})})]})]}),Object(H.jsx)(j.a,{component:"div",labelRowsPerPage:"",rowsPerPageOptions:[],count:void 0!==e.pageCount&&Number(e.pageCount),rowsPerPage:10,page:e.pageNum>0&&e.pageCount<10?0:e.pageNum,onChangePage:function(e,t){M(t)}})]})]})}},258:function(e,t,a){"use strict";a.r(t);var n,r,c=a(16),l=a(0),o=a(17),i=a(179),s=a(194),u=a(185),d=a(189),j=a(204),b=a(146),h=a(187),O=a(212),g=a(210),m=a(11),p=Object(m.a)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"}),"CheckCircleOutlineRounded"),f=a(215),x=a(211),C=a(2),y=[{label:"ID",align:"left",addField:[""],addHeader:!0},{label:"Course",align:"center",addField:[],addHeader:!0},{label:"Course Time",secLabel:"Time Table Bell List",align:"center",addField:[],addHeader:!0},{label:"Master",secLabel:"Master",path:"user",align:"center",addField:[],addHeader:!0}],v=[{label:"ID",align:"left",addField:[""],addHeader:!0},{label:"Master",secLabel:"User",path:"",align:"left",addField:[],addHeader:!0}],k=Object(i.a)((function(e){return{container:{display:"flex",flexDirection:"column",minHeight:"450px",justifyContent:"center",alignItems:"center"},paper:{width:"90%"}}}));t.default=function(){var e=Object(l.useContext)(o.b),t=e.userRole.toLowerCase(),a=Object(l.useState)(!1),i=Object(c.a)(a,2),m=i[0],S=i[1],w=Object(l.useState)(""),A=Object(c.a)(w,2),L=A[0],T=A[1],F=Object(l.useState)({source:"",value:!1}),B=Object(c.a)(F,2),P=B[0],H=B[1],N=Object(l.useState)(!1),D=Object(c.a)(N,2),I=D[0],E=D[1],z=Object(l.useState)(!1),R=Object(c.a)(z,2),U=R[0],M=R[1],G=Object(l.useState)(!1),W=Object(c.a)(G,2),J=W[0],V=W[1],Y=Object(l.useState)(""),Z=Object(c.a)(Y,2),_=Z[0],q=Z[1],K=Object(l.useState)(!1),Q=Object(c.a)(K,2),X=Q[0],$=Q[1],ee=Object(l.useState)([{label:"ID",align:"left",addField:[""],addHeader:!0},{label:"Title",align:"center",addField:["add","update"],addHeader:!0},{label:"Units Count",align:"center",addField:["add","update"],addHeader:!0}]),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],re=k(),ce=Object(l.useState)({id:{value:"",error:!1,helper:"",type:"numerical"},title:{value:"",error:!1,helper:""},unitsCount:{value:"",error:!1,helper:"",type:"numerical"}}),le=Object(c.a)(ce,2),oe=le[0],ie=le[1],se=Object(x.a)(oe,ie),ue=se.handleOnChange,de=se.handleValidation;Object(l.useEffect)((function(){"admin"===t&&(ae.some((function(e){return"Actions"===e.label}))||ae.push({label:"Actions",align:"right",addField:[],addHeader:!0})),I||"student"===t?I&&U?je():"student"===t&&(n=[],r={count:0,totalPages:0,page:0},$(!0)):je()}),[U]);var je=function(){fetch("".concat(e.baseURL,"/api/Courses"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e?(n=e.data.list,r={count:e.data.list.length,totalPages:e.data.totalPage,page:e.data.page},E(!1),E(!0),S(!1),M(!1)):console.log(e.message)}))};return Object(C.jsxs)(l.Fragment,{children:[Object(C.jsxs)("div",{className:re.container,children:[Object(C.jsxs)("div",{style:{marginBottom:"1rem",width:"90%"},children:[Object(C.jsxs)(h.a,{style:{padding:".8rem",backgroundColor:"#ebe9f5"},children:["master"===t&&Object(C.jsx)(s.a,{style:{marginRight:".5rem"},onClick:function(){return H((function(e){return{source:"choose",value:!e.value}}))},children:"Choose Course"}),Object(C.jsx)(s.a,{variant:"outlined",color:"secondary",style:{marginRight:".5rem"},onClick:function(){return H((function(e){return{source:"TimeTables",value:!e.value}}))},children:"TimeTables by Course ID"}),Object(C.jsx)(s.a,{variant:"outlined",color:"secondary",onClick:function(){H((function(e){return{source:"Masters",value:!e.value}}))},children:"Masters by Course ID"})]}),Object(C.jsx)("div",{children:Object(C.jsx)(u.a,{in:P.value,timeout:"auto",unmountOnExit:!0,children:Object(C.jsxs)(b.a,{style:{height:"5rem",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(C.jsx)(j.a,{placeholder:"Course ID",onChange:function(e){return T(e.target.value)}}),Object(C.jsx)(d.a,{color:"secondary",onClick:function(){""!==L&&fetch("".concat(e.baseURL,"/api/Courses/").concat(L,"/").concat(P.source),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e.data?(n=e.data.list,r={count:e.data.list.length,totalPages:e.data.totalPage,page:e.data.page},"Choose"===P.source&&("success"===e.status?(q("Successfuly Chosen!"),V(!0)):(q(e.message),V(!0))),ne("Masters"===P.source?v:y),E(!1),$(!1),$(!0)):(q(e.message),V(!0))}))},children:"Choose"===P.source?Object(C.jsx)(p,{}):Object(C.jsx)(f.a,{})})]})})})]}),X&&Object(C.jsx)(l.Fragment,{children:Object(C.jsx)(O.a,{reloadPage:function(e){return M(e)},response:n,pageCount:r.count,pageNum:r.page,totalPages:r.totalPages,tableHead:ae,tableTitle:"Courses List"})},P.value),I&&"student"!==t&&Object(C.jsx)(O.a,{idCalled:m,reloadPage:function(e){return M(e)},response:n,pageCount:r.count,pageNum:r.page,totalPages:r.totalPages,tableHead:ae,tableTitle:"Courses List",showEdit:"admin"===t,showAdd:"admin"===t,showActions:"admin"===t,showSearch:!0,fields:oe,handleDelete:function(t){fetch("".concat(e.baseURL,"/api/Courses/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(q("Successfully Deleted!"),M(!0)):q("Something Went Wrong!"),V(!0)}))},handleAdd:function(t){""!==t.title.value&&""!==t.unitsCount.value&&fetch("".concat(e.baseURL,"/api/Courses"),{method:"POST",body:JSON.stringify({title:t.title.value,unitsCount:t.unitsCount.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(q("Successfully Added!"),M(!0)):q("Something Went Wrong!"),V(!0)}))},handleUpdate:function(t,a){""!==a.title.value&&""!==a.unitsCount.value&&fetch("".concat(e.baseURL,"/api/Courses/").concat(t),{method:"PUT",body:JSON.stringify({title:a.title.value,unitsCount:a.unitsCount.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){"success"===e.status?(q("Successfully Updated!"),M(!0)):null===e.data?q("No match found!"):q("Something Went Wrong!"),V(!0)}))},handleGetById:function(t){fetch("".concat(e.baseURL,"/api/Courses/").concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)}}).then((function(e){return e.json()})).then((function(e){null!=e.data?(n=[e.data],r={count:1,totalPages:1,page:1},E(!1),E(!0),S(!0)):(q("Not Found!"),V(!0))}))},onSetFields:ie,onChange:ue,onBlur:de})]}),Object(C.jsx)(g.a,{open:J,handleClose:function(){return V(!1)},resMessage:_})]})}}}]);