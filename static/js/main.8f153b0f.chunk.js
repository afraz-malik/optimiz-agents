(this["webpackJsonpoptimiz-agent"]=this["webpackJsonpoptimiz-agent"]||[]).push([[0],{15:function(e,t,a){e.exports={footer:"Footer_footer__13wuQ",left:"Footer_left__3FkzN",right:"Footer_right__2DNwO"}},25:function(e,t,a){},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(10),i=a.n(s),l=(a(25),a(26),a(7)),o=a(2),r=a(6),j=a(8),d=a.n(j),b=a(0),m=function(){var e=Object(c.useState)({search:!1,notification:!1,profile:!1}),t=Object(r.a)(e,2),a=t[0],n=t[1],s=function(e){"notification"===e&&n(Object(o.a)(Object(o.a)({},a),{},{notification:!a.notification})),"search"===e&&(document.getElementById("input").style.display="block",document.getElementById("input").focus(),n(Object(o.a)(Object(o.a)({},a),{},{search:!a.search}))),"closesearch"===e&&""===document.getElementById("input").value&&(document.getElementById("input").style.display="none",console.log(),n(Object(o.a)(Object(o.a)({},a),{},{search:!a.search}))),"profile"===e&&n(Object(o.a)(Object(o.a)({},a),{},{profile:!a.profile}))};return Object(b.jsxs)("div",{className:d.a.navbar,children:[Object(b.jsx)("div",{className:d.a.leftnav,children:Object(b.jsx)("h3",{children:"DEFAULT BRAND TEXT"})}),Object(b.jsxs)("div",{className:d.a.rightnav,children:[Object(b.jsxs)("div",{className:d.a.search,children:[Object(b.jsx)("img",{alt:"",src:"images/search.svg ",onClick:function(){return s("search")},style:a.search?{display:"none"}:{display:"block"}}),Object(b.jsx)("input",{type:"text",id:"input",onBlur:function(){return s("closesearch")}})]}),Object(b.jsxs)("div",{className:d.a.notification,children:[Object(b.jsx)("img",{className:d.a.notificationimg,alt:"",src:"images/notification.svg",onClick:function(){return s("notification")},onBlur:function(){return s("notification")}}),Object(b.jsx)("img",{className:d.a.dot,alt:"",src:"images/dot.svg"}),Object(b.jsx)("div",{className:d.a.notificationBoxmodel,style:a.notification?{display:"block"}:{display:"none"},children:Object(b.jsx)("h2",{children:"No New Notification"})})]}),Object(b.jsx)("div",{className:d.a.anime,children:Object(b.jsx)("img",{alt:"",src:"images/anime.png"})})]})]})},u=a(4),x=a.n(u),h=a(12),O=a(19),p=function(e){var t=e.showForm,a=Object(l.c)(),n=Object(c.useState)({fname:"",lname:"",email:"",company:"",phone:"",userRoles:"",password:""}),s=Object(r.a)(n,2),i=s[0],j=s[1],d=function(e){j(Object(o.a)(Object(o.a)({},i),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({type:"ADD_CLIENT",payload:i}),O.a.success("Added Success fully"),j({fname:"",lname:"",email:"",company:"",phone:"",userRoles:"",password:""})},children:[Object(b.jsxs)("div",{className:x.a.row,children:[Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(b.jsx)("input",{type:"text",name:"fname",value:i.fname,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(b.jsx)("input",{type:"text",name:"lname",value:i.lname,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(b.jsx)("input",{type:"email",name:"email",value:i.email,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"company",children:"Company"}),Object(b.jsx)("input",{type:"text",name:"company",value:i.company,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"phone",children:"Phone number"}),Object(b.jsx)("input",{type:"text",name:"phone",value:i.phone,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"userRoles",children:"User Roles"}),Object(b.jsx)("input",{type:"text",name:"userRoles",autoComplete:"current-password",value:i.userRoles,onChange:d})]}),Object(b.jsxs)("div",{className:x.a.col,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Passwords"}),Object(b.jsx)("input",{type:"password",name:"password",autoComplete:"current-password",value:i.password,onChange:d})]})]}),Object(b.jsxs)("div",{className:x.a.buttons,children:[Object(b.jsxs)("button",{className:x.a.addbtn,type:"submit",children:[" ","Add Client"]}),Object(b.jsx)("button",{className:x.a.cancel,type:"button",onClick:function(){return t()},children:"Cancel"})]})]})},_=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],s=function(){n(!a)};return Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsxs)("div",{className:x.a.add,children:[Object(b.jsx)("div",{className:x.a.text,children:Object(b.jsx)("h2",{children:"Add New Clients"})}),Object(b.jsx)("div",{className:x.a.button,style:a?{display:"none"}:{display:"block"},children:Object(b.jsx)("button",{onClick:function(){return s()},children:"Add Client"})})]}),Object(b.jsx)("div",{style:a?{display:"block"}:{display:"none"},children:Object(b.jsx)(p,{showForm:s})})]})},v=a(11),f=a(5),g=a.n(f),N=a(9),y=a.n(N),C=function(e){var t=e.toggleEditBox,a=e.client,n=e.index,s=e.title,i=Object(l.c)(),j=Object(c.useState)(a),d=Object(r.a)(j,2),m=d[0],u=d[1],x=function(e){u(Object(o.a)(Object(o.a)({},m),{},Object(h.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:y.a.outerbox,children:Object(b.jsxs)("div",{className:y.a.box,children:[Object(b.jsx)("div",{className:y.a.head,children:Object(b.jsx)("h2",{children:s})}),Object(b.jsx)("div",{className:y.a.body,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i({type:"EDIT_CLIENT",payload:{newClient:m,index:n}}),t()},children:[Object(b.jsx)("label",{children:"First Name"}),Object(b.jsx)("input",{type:"text",name:"fname",onChange:x,value:m.fname}),Object(b.jsx)("label",{children:"Last Name"}),Object(b.jsx)("input",{type:"text",name:"lname",onChange:x,value:m.lname}),Object(b.jsx)("label",{children:"Company"}),Object(b.jsx)("input",{type:"text",name:"company",onChange:x,value:m.company}),Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",name:"email",onChange:x,value:m.email}),Object(b.jsx)("label",{children:"User Role"}),Object(b.jsx)("input",{type:"text",name:"userRoles",onChange:x,value:m.userRoles}),Object(b.jsxs)("div",{className:y.a.buttons,children:[Object(b.jsxs)("button",{className:y.a.addbtn,type:"submit",children:[" ","Update"]}),Object(b.jsx)("button",{type:"button",className:y.a.cancel,onClick:function(){return t()},children:"Cancel"})]})]})})]})})},w=function(e){var t=e.counter;return Object(b.jsx)("div",{className:g.a.numbers,children:t})},E=function(e){var t=e.client,a=e.index,n=Object(l.c)(),s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],j=i[1],d=function(){j(!o)};return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[t.fname," ",t.lname]}),Object(b.jsx)("td",{children:t.company}),Object(b.jsx)("td",{children:t.phone}),Object(b.jsx)("td",{children:t.email}),Object(b.jsx)("td",{children:Object(b.jsxs)("div",{className:g.a.actions,children:[Object(b.jsx)("img",{alt:"",src:"images/edit.svg",onClick:function(){return d()}}),Object(b.jsx)("img",{alt:"",src:"images/delete.svg",onClick:function(){window.confirm("Are you sure you want to delete?")&&n({type:"DELETE_CLIENT",payload:a})}}),o?Object(b.jsx)(C,{toggleEditBox:d,client:t,index:a,title:"Edit Client Detail"}):null]})})]})},B=function(e){var t=e.clients,a=e.title,n=Object(c.useState)({value:""}),s=Object(r.a)(n,2),i=s[0],l=s[1],j=t.filter((function(e){return e.fname.toLowerCase().includes(i.value.toLowerCase())||e.lname.toLowerCase().includes(i.value.toLowerCase())||e.company.toLowerCase().includes(i.value.toLowerCase())||e.email.toLowerCase().includes(i.value.toLowerCase())}));return Object(b.jsxs)("div",{className:g.a.database,children:[Object(b.jsxs)("div",{className:g.a.top,children:[Object(b.jsx)("div",{className:g.a.text,children:Object(b.jsx)("h3",{children:a})}),Object(b.jsx)("div",{className:g.a.gear,children:Object(b.jsx)("img",{alt:"",src:"images/gear.svg"})})]}),Object(b.jsxs)("div",{className:g.a.action,children:[Object(b.jsxs)("div",{className:g.a.search,children:[Object(b.jsx)("img",{alt:"",src:"images/search2.svg"}),Object(b.jsx)("input",{type:"text",placeholder:"Search for usernames, company...",onChange:function(e){l(Object(o.a)(Object(o.a)({},i),{},{value:e.target.value}))},value:i.value})]}),Object(b.jsxs)("div",{className:g.a.filter,children:[Object(b.jsx)("img",{alt:"",src:"images/filter.svg"}),Object(b.jsx)("h5",{children:"Filter"})]}),Object(b.jsxs)("div",{className:g.a.export,children:[Object(b.jsx)("img",{alt:"",src:"images/export.svg"}),Object(b.jsx)("h5",{children:"Export"})]})]}),Object(b.jsxs)("div",{className:g.a.table,children:[Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"NAME"}),Object(b.jsx)("th",{children:"COMPANY"}),Object(b.jsx)("th",{children:"PHONE NUMBER"}),Object(b.jsx)("th",{children:"EMAIL"}),Object(b.jsx)("th",{children:"ACTIONS"})]})}),Object(b.jsx)("tbody",{children:j.map((function(e,t){return Object(b.jsx)(E,{index:t,client:e},t)}))})]}),Object(b.jsxs)("div",{className:g.a.pages,children:[Object(b.jsx)("div",{className:g.a.back,children:"<"}),Object(v.a)(Array(3)).map((function(e,t){return Object(b.jsx)(w,{counter:t+1},t)})),Object(b.jsx)("div",{className:g.a.front,children:">"})]})]})]})},A=a(15),D=a.n(A),L=function(){return Object(b.jsxs)("div",{className:D.a.footer,children:[Object(b.jsx)("div",{className:D.a.left,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"CREATEIVE TIM"}),Object(b.jsx)("li",{children:"ABOUT US"}),Object(b.jsx)("li",{children:"BLOG"})]})}),Object(b.jsxs)("div",{className:D.a.right,children:["\xa9 2018 made with by ",Object(b.jsx)("span",{children:"Creative Tim "}),"for a better web."]})]})},F=Object(l.b)((function(e){return{clients:e.clientReducer.clients}}))((function(e){var t=e.clients;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(b.jsx)(m,{}),Object(b.jsx)(_,{}),Object(b.jsx)(B,{clients:t,title:"List of Clients"})]}),Object(b.jsx)(L,{})]})}));var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(F,{})})},I=a(20),T=function(e,t,a){return e.map((function(e,c){return c!==a?e:Object(o.a)({},t)}))},R=function(e,t){return[].concat(Object(v.a)(e.slice(0,t)),Object(v.a)(e.slice(t+1)))},S={clients:[{fname:"Esther",lname:"Howard",email:"jessica.hansaon@example.com",company:"Binford Ltd.",phone:"(505)555-0125",userRoles:"Admin",password:""},{fname:"Theresa",lname:"Webb",email:"michelle.rivera@example.com",company:"Biffco Enterprises Ltd.",phone:"(217) 555-0113",userRoles:"Admin",password:""},{fname:"Jacob",lname:"Jones",email:"dolores.chambers@example.com",company:"Acme Co.",phone:"(208) 555-0112",userRoles:"Admin",password:""}]},M=Object(I.a)({reducer:{clientReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CLIENT":return Object.assign({},e,{clients:[].concat(Object(v.a)(e.clients),[t.payload])});case"EDIT_CLIENT":var a=T(e.clients,t.payload.newClient,t.payload.index);return Object(o.a)(Object(o.a)({},e),{},{clients:a});case"DELETE_CLIENT":var c=R(e.clients,t.payload);return Object(o.a)(Object(o.a)({},e),{},{clients:c});default:return e}}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(l.a,{store:M,children:Object(b.jsx)(k,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,a){e.exports={container:"AddBox_container__3X_eD",add:"AddBox_add__1jm9N",text:"AddBox_text__Lr7LW",button:"AddBox_button__2HysL",row:"AddBox_row__1XYOL",col:"AddBox_col__3OnbL",buttons:"AddBox_buttons__3iCVu",addbtn:"AddBox_addbtn__1HsdK",cancel:"AddBox_cancel__2SelY"}},5:function(e,t,a){e.exports={database:"Database_database__3jbUv",top:"Database_top__1MFWK",text:"Database_text__15hdE",action:"Database_action__3z_qC",filter:"Database_filter__3M6rl",export:"Database_export__4BO-j",search:"Database_search__faaQ1",table:"Database_table__1vWaH",actions:"Database_actions__2xiDz",pages:"Database_pages__3zCIH",back:"Database_back__1vQ1F",front:"Database_front__128uM",numbers:"Database_numbers__2D3ol"}},8:function(e,t,a){e.exports={navbar:"Navbar_navbar__jq-Th",leftnav:"Navbar_leftnav__gXXCY",rightnav:"Navbar_rightnav__2-pNC",search:"Navbar_search__3Q2wJ",notification:"Navbar_notification__3AMiM",dot:"Navbar_dot__1SfgO",notificationimg:"Navbar_notificationimg__ixMIL",anime:"Navbar_anime__2sIu_",notificationBoxmodel:"Navbar_notificationBoxmodel__7wraw"}},9:function(e,t,a){e.exports={outerbox:"EditBox_outerbox__Xk5gU",box:"EditBox_box__EVFg1",head:"EditBox_head__2t8g8",body:"EditBox_body__3iV7u",buttons:"EditBox_buttons__jbCpA",addbtn:"EditBox_addbtn__1FAGI",cancel:"EditBox_cancel__NE4lN"}}},[[31,1,2]]]);
//# sourceMappingURL=main.8f153b0f.chunk.js.map