(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(6),r=n.n(s),o=(n(18),n(11)),l=n(4),i=n(13),d=n(3),j=n(1);var u=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("span",{children:n}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsx)("small",{children:a}),Object(j.jsx)(d.a,{className:"delete-icon",size:"1.3em",onClick:function(){c(t)}})]})]})};var h=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],r=c[1];return Object(j.jsxs)("div",{className:"note new",children:[Object(j.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type your notes here...",onChange:function(e){200-e.target.value.length>=0&&r(e.target.value)},value:s,autoFocus:!0}),Object(j.jsxs)("div",{className:"note-footer",children:[Object(j.jsxs)("small",{children:[200-s.length," Remaining"]}),Object(j.jsx)("button",{className:"save-btn",onClick:function(){s.trim().length>0?(t(s),r("")):alert("Type something in note!(Empty)")},children:"Save"})]})]})};var b=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(j.jsxs)("div",{className:"notes-list",children:[Object(j.jsx)(h,{handleAddNote:n}),t.map((function(e){return Object(j.jsx)(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:a},e.id)}))]})};var O=function(e){var t=e.handleSearchNote;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)(d.b,{className:"search-icon",size:"1.3em"}),Object(j.jsx)("input",{type:"text",onChange:function(e){return t(e.target.value)},className:"search-input",placeholder:"Search your notes..."})]})},x=n(10),m=n(12);n(20);var v=function(e){var t=e.handleDarkMode,n=e.darkMode;return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{children:"Notes"}),Object(j.jsx)(m.a,{content:Object(j.jsx)("small",{children:"Dark/Light Mode Toggle"}),children:Object(j.jsx)("button",{className:"togg-btn",onClick:function(){return t((function(e){return!e}))},children:n?Object(j.jsx)(d.c,{className:"sun-icon",size:"1.3em"}):Object(j.jsx)(x.a,{size:"1.3em"})})})]})};var f=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),d=r[0],u=r[1],h=Object(a.useState)(!1),x=Object(l.a)(h,2),m=x[0],f=x[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]),Object(j.jsx)("div",{className:m?"dark-mode":null,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{darkMode:m,handleDarkMode:f}),Object(j.jsx)(O,{handleSearchNote:u}),Object(j.jsx)(b,{notes:n.filter((function(e){return e.text.toLowerCase().includes(d.toLowerCase())})),handleAddNote:function(e){var t=new Date,a={id:Object(i.a)(),text:e,date:t.toLocaleDateString()},s=[].concat(Object(o.a)(n),[a]);c(s)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}}),n.length<=0?Object(j.jsx)("h2",{className:"empty-msg",children:"Add your notes..."}):null]})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9afebfeb.chunk.js.map