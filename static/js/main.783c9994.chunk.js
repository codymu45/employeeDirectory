(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(13),o=n.n(r),s=n(3);n(20);var i=function(e){return Object(c.jsx)("div",{className:"table-responsive",children:Object(c.jsx)("table",{className:"table",children:e.children})})};n(21);var l=function(){return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Picture"}),Object(c.jsx)("th",{scope:"col",children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone Number"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"Date of Birth"})]})})};var u=function(e){return Object(c.jsx)("tbody",{children:e.children})};n(22);var j=function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{alt:e.name,src:e.picture})}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.dob})]})};var d=function(e){return Object(c.jsx)("div",{className:"row justify-content-center",children:e.children})};n(23);var b=function(e){return Object(c.jsx)("div",{className:"col-3 d-inline",children:Object(c.jsx)("div",{className:"btn btn-primary",onClick:e.changeButtonText,children:e.text})})};n(24);var h=function(e){return Object(c.jsx)("div",{className:"col-6 d-inline",children:Object(c.jsx)("input",{value:e.value,onChange:e.handleInputChange,className:"form-control mb-3",type:"text",placeholder:"Enter Name"})})};n(25);var m=function(e){return Object(c.jsx)("div",{className:"col-3 d-inline",children:Object(c.jsx)("input",{value:e.value,onChange:e.handleAmountChange,className:"form-control mb-3",type:"number",min:"1",max:"100",placeholder:"# of Employees"})})},f=n(14),O=n.n(f),x=function(e){return O.a.get("https://randomuser.me/api/?results=".concat(e,"&nat=us"))};var v=function(e,t){var n=Object(a.useState)(e),c=Object(s.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e]),r};var p=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(15),f=Object(s.a)(o,2),O=f[0],p=f[1],N=Object(a.useState)(""),g=Object(s.a)(N,2),y=g[0],C=g[1],E=Object(a.useState)("Sort by Name"),S=Object(s.a)(E,2),w=S[0],L=S[1];function B(){x(O).then((function(e){r(e.data.results)})).catch((function(e){return console.log(e)}))}var T=v(y,100);return Object(a.useEffect)((function(){T?x(O).then((function(e){var t=e.data.results.filter((function(e){var t=e.name.first.toLocaleLowerCase(),n=e.name.last.toLocaleLowerCase(),c=y.toLocaleLowerCase(),a="".concat(t," ").concat(n),r="".concat(e.name.first," ").concat(e.name.last);return!!a.includes(c)||!!r.includes(y)||void 0}));r(t)})):B()}),[T]),Object(a.useEffect)((function(){B()}),[O]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)(d,{children:[Object(c.jsx)(m,{handleAmountChange:function(e){var t=e.target.value;p(t),r([])},value:O}),Object(c.jsx)(h,{handleInputChange:function(e){var t=e.target.value;C(t)},value:y}),Object(c.jsx)(b,{changeButtonText:function(e){if(e.preventDefault(),"Sort by Name"===w){L("Undo");var t=n.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}));r(t)}else"Undo"===w&&(L("Sort by Name"),B())},text:w})]}),Object(c.jsxs)(i,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(u,{children:n.map((function(e,t){return Object(c.jsx)(j,{picture:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:(n=e.dob.date,n.slice(0,10))},e.name.last+t);var n}))})]})]})};n(43);var N=function(){return Object(c.jsx)("div",{className:"jumbotron",children:Object(c.jsx)("h1",{children:"Employee Directory"})})};var g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(N,{}),Object(c.jsx)(p,{})]})};o.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.783c9994.chunk.js.map