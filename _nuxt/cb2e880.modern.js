(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{1393:function(t,e,n){var content=n(1709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("2b71984e",content,!0,{sourceMap:!1})},1708:function(t,e,n){"use strict";n(1393)},1709:function(t,e,n){var o=n(17)(!1);o.push([t.i,".title-container[data-v-3251f50b]{margin-bottom:1.5rem}@media screen and (min-width:769px){.title-container[data-v-3251f50b]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}.title-container .title[data-v-3251f50b]{margin-right:1rem;margin-bottom:0}}.not-logged-in-banner[data-v-3251f50b]{text-align:center;padding:3.5rem 2rem 3rem;z-index:1}@media screen and (max-width:768px){.not-logged-in-banner[data-v-3251f50b]{padding:2.5rem 2rem 1rem}}.not-logged-in-banner .subtitle[data-v-3251f50b]{margin-bottom:1.5rem}",""]),t.exports=o},2054:function(t,e,n){"use strict";n.r(e);var o=n(14),l=n(3),r=n(637),c=n(15),d=n(21),v=n(151),m=n(23),O=n(30),f=n(33),j=n(775),h=n(11),_=n(24),w=n(150),x=Object(l.b)({name:"testimonials",key:"testimonials",scrollToTop:!0,components:{VueMasonryWall:r.a},head(){var t={root:this.$root};t.root.localePath=this.localePath;var e=Object(O.a)(t);return Object(v.a)(e,e.t("testimonials.seo.title"),e.t("testimonials.seo.description"))},setup(t,e){var n=Object(m.a)(e),r=Object(O.a)(e),{route:v}=Object(f.a)(e),{actions:{openRegister:x}}=Object(d.a)(e,"authPopup"),y=Object(l.i)(null),{state:C,actions:{fetch:I}}=Object(d.a)(e,"testimonials/testimonials"),k=Object(h.f)(C)?1:C.page+1,T=Object(l.i)(k),B=Object(l.i)(!1);!n.loggedIn&&k>1&&C.data.length&&(B.value=!0);var L,{reset:M,intersectionObserver:P}=Object(j.a)({target:y,startFrom:T.value,callback:(L=Object(o.a)((function*(t){var o;T.value=t;var l=yield I({options:{context:e},filters:{page:T.value}});n.loggedIn||(P.value.stop(),B.value=!!(null===(o=null==l?void 0:l.data)||void 0===o?void 0:o.length))})),function(t){return L.apply(this,arguments)})});B.value&&P.value.stop(),Object(l.r)([()=>C.meta,()=>T.value],(()=>{var t,e;!Object(h.f)(C)&&!Object(h.e)(C)&&((null===(t=C.meta)||void 0===t?void 0:t.current_page)||1)>=((null===(e=C.meta)||void 0===e?void 0:e.last_page)||1)&&P.value.stop()}),{immediate:!0}),Object(l.k)((()=>{}),"gSwxp8/c+BY56a2NIP3sGw==");var $=Object(l.a)((()=>Object(_.a)(r.t("testimonials.content.title")))),{width:E,isMobile:F}=Object(w.a)(),R=Object(l.a)((()=>F.value&&E.value?(E.value-48)/2:320));return{mdiSortVariant:c.Gb,mdiTune:c.Lb,listEnd:y,notLoggedInBanner:B,openRegister:x,h1Title:$,auth:n,testimonials:C,isFetched:h.d,itemWidth:R}}}),y=x,C=(n(1708),n(10)),component=Object(C.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.h1Title))])]),t._v(" "),n("TestimonialsList"),t._v(" "),n("div",{ref:"listEnd"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.notLoggedInBanner,expression:"notLoggedInBanner"}],staticClass:"not-logged-in-banner"},[n("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("testimonials.not_logged_in_banner.title")))]),t._v(" "),n("BButton",{staticClass:"primary",attrs:{size:"is-medium",rounded:""},on:{click:t.openRegister}},[t._v("\n                "+t._s(t.$t("testimonials.not_logged_in_banner.button"))+"\n            ")])],1)],1)])}),[],!1,null,"3251f50b",null);e.default=component.exports;installComponents(component,{TestimonialsList:n(2001).default})},775:function(t,e,n){"use strict";n(25),n(26);var o=n(3),l=n(39);e.a=t=>{var{target:e,callback:n,startFrom:r}=t,c=Object(o.i)(r||1),d=()=>{null==n||n(c.value),c.value++},v=Object(o.i)(Object(l.e)(e,(t=>{var[{isIntersecting:e}]=t;e&&d()})));return{intersectionObserver:v,reset:()=>{c.value=1,v.value.stop(),v.value=Object(l.e)(e,(t=>{var[{isIntersecting:e}]=t;e&&d()})),d()}}}}}]);