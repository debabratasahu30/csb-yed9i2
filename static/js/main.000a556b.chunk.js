(this["webpackJsonpcurd-operation"]=this["webpackJsonpcurd-operation"]||[]).push([[0],{12:function(e,t,r){},14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(5),s=r.n(c),j=r(6),u=r(7),b=(r(12),r(0)),i=function(e){return Object(b.jsx)("button",{className:"submit-btn",type:e.type||"button",onClick:e.onClick,children:e.children})},a=(r(14),function(e){return Object(b.jsx)("div",{className:"card-container",children:e.children})}),d=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)();return Object(b.jsxs)(a,{children:[Object(b.jsxs)("h3",{children:["Add User Form",Object(b.jsx)("hr",{})]}),Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault();var c=t.current.value,s=r.current.value;return 0===c.trim().length||0===s.trim().length?alert("Name or Age should no be blank"):s<=0?(r.current.value="",alert("Age should be greater than 0")):(e.onAddUser(c,s),t.current.value="",void(r.current.value=""))},children:[Object(b.jsx)("label",{htmlFor:"username",children:"Username"}),Object(b.jsx)("input",{id:"username",type:"text",ref:t}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"age",children:"Age (Years)"}),Object(b.jsx)("input",{id:"age",type:"number",ref:r}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(i,{type:"submit",children:"Add User"})]})]})},o=function(e){return Object(b.jsxs)(a,{children:[Object(b.jsxs)("h3",{children:["List of Above Added Users",Object(b.jsx)("hr",{})]}),Object(b.jsx)("ul",{children:e.users.map((function(e){return Object(b.jsxs)("li",{children:[e.name," (",e.age," Years Old)"]},e.id)}))})]})};function l(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1];return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(d,{onAddUser:function(e,t){c((function(r){return[].concat(Object(j.a)(r),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(o,{users:r})]})}var O=document.getElementById("root");s.a.render(Object(b.jsx)(n.StrictMode,{children:Object(b.jsx)(l,{})}),O)}},[[15,1,2]]]);
//# sourceMappingURL=main.000a556b.chunk.js.map