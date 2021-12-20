(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="http://localhost:3000/vivekportfolio",j="GV.",d="Vivek Ganesan",b="Senior Interior Designer (7+)",h="Organized Interior Designer adept at multi-tasking and developing creative\n       solutions. History of success in coordinating with vendors and managing\n       construction teams to complete projects aligned with client specifications and\n       budget requirements.",u={linkedin:"https://www.linkedin.com/in/vivek-ganesan-37060a212/"},m=[{name:"Residential",description:"During my 7 years in the field, i have worked over 200+ Residential Projects like Apartments,Villas,Individual Villas,Guest House,Mansions.",livePreview:"https://flic.kr/s/aHBqjzvDoK"},{name:"Commercial",description:"I have also worked with Commerical Projects like Offices,Hotels,Jewelery,Bakery",livePreview:"https://flic.kr/s/aHBqjzvKXZ"},{name:"Elevation",description:"some of my Elevation works...",livePreview:"https://flic.kr/s/aHBqjzvDAt"},{name:"Artwork",description:"Interested in Hand Sketching like Building Elevations, Interiors(Modul Kitch,Partitions etc...),",livePreview:"https://flic.kr/s/aHBqjzvDJf"}],O=["3D Studio Max","V-ray","Autocad","Adobe Photoshop","Design Rendering","Project Analysis","Material Cost Estimates"],x="vivek.gv.92@gmail.com",v=n(14),f=n.n(v),k=n(12),p=n.n(k),g=n(16),N=n.n(g),_=n(15),w=n.n(_),y=(n(26),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],d=o[1],b=function(){return d(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[m.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,x?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(p.a,{}):Object(a.jsx)(f.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(w.a,{}):Object(a.jsx)(N.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),P=n(10),E=n.n(P),D=n(17),H=n.n(D),I=n.p+"static/media/VivekGanesanInteriorDesignerResume.7b62465f.PDF",S=(n(33),function(){var e=d,t=b,n=h,c=u;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[Object(a.jsx)("a",{href:I,download:"My_Resume.pdf",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(a.jsxs)(a.Fragment,{children:[c.github&&Object(a.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),c.linkedin&&Object(a.jsx)("a",{href:c.linkedin,target:"_blank","aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})]})]})}),B=n(7),A=n.n(B),V=n(18),z=n.n(V),M=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},A()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsxs)("a",{href:t.livePreview,target:"_blank","aria-label":"live preview",className:"link link--icon",children:[Object(a.jsx)("p",{children:"Click Here"}),Object(a.jsx)(z.a,{})]})]})}),R=(n(36),function(){return m.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(a.jsx)(M,{project:e},A()())}))})]}):null}),q=(n(37),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())}))})]}):null}),G=n(19),J=n.n(G),K=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(J.a,{fontSize:"large"})})}):null}),L=(n(39),function(){return x?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(x),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),F=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:"Created By Vivek Ganesan"})}),T=(n(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(C,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(S,{}),Object(a.jsx)(R,{}),Object(a.jsx)(q,{}),Object(a.jsx)(L,{})]}),Object(a.jsx)(K,{}),Object(a.jsx)(F,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f8d26ff5.chunk.js.map