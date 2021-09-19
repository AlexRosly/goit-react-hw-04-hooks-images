(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),c=t.n(o),i=(t(32),t(7)),p=t.n(i),s=t(15),l=t(12),u=t(6),d=t(16),b=t(9),x=t.n(b);x.a.defaults.baseURL="https://pixabay.com/api",x.a.defaults.params={key:"22619356-ee7eba8b5a411fda9a95fba73",per_page:12,image_type:"photo",orientation:"horizontal",safesearch:"true"};var f,h,g,j=function(){var n=Object(l.a)(p.a.mark((function n(e,t){var a,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x.a.get("/?".concat(x.a.defaults.params,"&q=").concat(e,"&page=").concat(t));case 2:return a=n.sent,r=a.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=t(3),O=t(4),v=O.a.li(f||(f=Object(m.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),w=O.a.img(h||(h=Object(m.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),y=t(1),k=function(n){var e=n.image,t=n.getGalleryElement;return Object(y.jsx)(v,{children:Object(y.jsx)(w,{src:e.webformatURL,alt:e.tags,onClick:function(){return t(e.largeImageURL)}})})};k.defaultProps={tags:""};var S,E,z,L,C,G,P,R,U,q=O.a.ul(g||(g=Object(m.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),F=function(n){var e=n.images,t=n.getGalleryElement;return Object(y.jsx)(q,{children:e.map((function(n){return Object(y.jsx)(k,{image:n,getGalleryElement:t},n.pageURL)}))})},I=O.a.button(S||(S=Object(m.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),J=O.a.div(E||(E=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 12px;\n"]))),T=function(n){var e=n.onClick;return Object(y.jsx)(J,{children:Object(y.jsx)(I,{type:"button",onClick:e,children:"Load more"})})},_=O.a.header(z||(z=Object(m.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),B=O.a.form(L||(L=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),D=O.a.button(C||(C=Object(m.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n']))),H=O.a.span(G||(G=Object(m.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),M=O.a.input(P||(P=Object(m.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),A=function(n){var e=n.onSeacrh;return Object(y.jsx)(_,{children:Object(y.jsxs)(B,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.name.value)},children:[Object(y.jsx)(D,{type:"submit",children:Object(y.jsx)(H,{children:"Search"})}),Object(y.jsx)(M,{type:"text",name:"name",autocomplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},K=O.a.div(R||(R=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),N=O.a.div(U||(U=Object(m.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),Q=document.querySelector("#modal-root");function V(n){var e=n.children,t=n.onClose;Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(n){"Escape"===n.code&&t()};return Object(o.createPortal)(Object(y.jsx)(K,{onClick:function(n){n.currentTarget===n.target&&t()},children:Object(y.jsx)(N,{children:e})}),Q)}V.defaultProps={children:null};var W=t(26),X=t.n(W);function Y(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],r=e[1],o=Object(a.useState)(1),c=Object(u.a)(o,2),i=c[0],b=c[1],x=Object(a.useState)(""),f=Object(u.a)(x,2),h=f[0],g=f[1],m=Object(a.useState)(!1),O=Object(u.a)(m,2),v=O[0],w=O[1],k=Object(a.useState)(!1),S=Object(u.a)(k,2),E=S[0],z=S[1],L=Object(a.useState)(""),C=Object(u.a)(L,2),G=C[0],P=C[1],R=Object(a.useState)(null),U=Object(u.a)(R,2),q=(U[0],U[1]);Object(a.useEffect)((function(){h&&I()}),[h]);var I=function(){var n=Object(l.a)(p.a.mark((function n(){var e,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,j(h,i);case 4:e=n.sent,a=e.hits,r([].concat(Object(s.a)(t),Object(s.a)(a))),b((function(n){return n+1})),1!==i&&J(),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log("Error",n.t0),q({error:n.t0});case 15:return n.prev=15,w(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[1,11,15,18]])})));return function(){return n.apply(this,arguments)}}(),J=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},_=t.length>0&&t.length>=12;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(d.a,{position:"top-right"}),Object(y.jsx)(A,{onSeacrh:function(n){""!==n.trim()?(r([]),b(1),g(n),q(null)):d.b.error("Please enter correct query and try again.")}}),Object(y.jsx)(F,{images:t,getGalleryElement:function(n){P(n),z(!0)}}),_&&Object(y.jsx)(T,{onClick:I,children:"Load more"}),E&&Object(y.jsx)(V,{onClose:function(){z((function(n){return!n}))},children:Object(y.jsx)("img",{src:G,alt:""})}),v&&Object(y.jsx)(X.a,{})]})}c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(Y,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.d856fb66.chunk.js.map