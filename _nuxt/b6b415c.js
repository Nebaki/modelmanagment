(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1477:function(t,e,n){var content=n(1791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2b71984e",content,!0,{sourceMap:!1})},1790:function(t,e,n){"use strict";n(1477)},1791:function(t,e,n){var o=n(25)(!1);o.push([t.i,".title-container[data-v-3251f50b]{margin-bottom:1.5rem}@media screen and (min-width:769px){.title-container[data-v-3251f50b]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}.title-container .title[data-v-3251f50b]{margin-right:1rem;margin-bottom:0}}.not-logged-in-banner[data-v-3251f50b]{text-align:center;padding:3.5rem 2rem 3rem;z-index:1}@media screen and (max-width:768px){.not-logged-in-banner[data-v-3251f50b]{padding:2.5rem 2rem 1rem}}.not-logged-in-banner .subtitle[data-v-3251f50b]{margin-bottom:1.5rem}",""]),t.exports=o},2142:function(t,e,n){"use strict";n.r(e);var o=n(14),r=(n(29),n(3)),l=n(721),c=n(18),d=n(31),v=n(212),m=n(34),f=n(50),O=n(56),j=n(864),h=n(11),_=n(35),w=n(211),x=Object(r.b)({name:"testimonials",key:"testimonials",scrollToTop:!0,components:{VueMasonryWall:l.a},head:function(){var t={root:this.$root};t.root.localePath=this.localePath;var e=Object(f.a)(t);return Object(v.a)(e,e.t("testimonials.seo.title"),e.t("testimonials.seo.description"))},setup:function(t,e){var n=Object(m.a)(e),l=Object(f.a)(e),v=(Object(O.a)(e).route,Object(d.a)(e,"authPopup").actions.openRegister),x=Object(r.i)(null),k=Object(d.a)(e,"testimonials/testimonials"),C=k.state,I=k.actions.fetch,y=Object(h.f)(C)?1:C.page+1,T=Object(r.i)(y),B=Object(r.i)(!1);!n.loggedIn&&y>1&&C.data.length&&(B.value=!0);var L,R=Object(j.a)({target:x,startFrom:T.value,callback:(L=Object(o.a)(regeneratorRuntime.mark((function t(o){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T.value=o,t.next=3,I({options:{context:e},filters:{page:T.value}});case 3:l=t.sent,n.loggedIn||(M.value.stop(),B.value=!!(null===(r=null==l?void 0:l.data)||void 0===r?void 0:r.length));case 5:case"end":return t.stop()}}),t)}))),function(t){return L.apply(this,arguments)})}),M=(R.reset,R.intersectionObserver);B.value&&M.value.stop(),Object(r.r)([function(){return C.meta},function(){return T.value}],(function(){var t,e;!Object(h.f)(C)&&!Object(h.e)(C)&&((null===(t=C.meta)||void 0===t?void 0:t.current_page)||1)>=((null===(e=C.meta)||void 0===e?void 0:e.last_page)||1)&&M.value.stop()}),{immediate:!0}),Object(r.k)((function(){}),"gSwxp8/c+BY56a2NIP3sGw==");var P=Object(r.a)((function(){return Object(_.a)(l.t("testimonials.content.title"))})),$=Object(w.a)(),E=$.width,F=$.isMobile,z=Object(r.a)((function(){return F.value&&E.value?(E.value-48)/2:320}));return{mdiSortVariant:c.Gb,mdiTune:c.Lb,listEnd:x,notLoggedInBanner:B,openRegister:v,h1Title:P,auth:n,testimonials:C,isFetched:h.d,itemWidth:z}}}),k=x,C=(n(1790),n(10)),component=Object(C.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.h1Title))])]),t._v(" "),n("TestimonialsList"),t._v(" "),n("div",{ref:"listEnd"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.notLoggedInBanner,expression:"notLoggedInBanner"}],staticClass:"not-logged-in-banner"},[n("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("testimonials.not_logged_in_banner.title")))]),t._v(" "),n("BButton",{staticClass:"primary",attrs:{size:"is-medium",rounded:""},on:{click:t.openRegister}},[t._v("\n                "+t._s(t.$t("testimonials.not_logged_in_banner.button"))+"\n            ")])],1)],1)])}),[],!1,null,"3251f50b",null);e.default=component.exports;installComponents(component,{TestimonialsList:n(2087).default})},864:function(t,e,n){"use strict";var o=n(22),r=n(3),l=n(64);e.a=function(t){var e=t.target,n=t.callback,c=t.startFrom,d=Object(r.i)(c||1),v=function(){null==n||n(d.value),d.value++},m=Object(r.i)(Object(l.e)(e,(function(t){Object(o.a)(t,1)[0].isIntersecting&&v()})));return{intersectionObserver:m,reset:function(){d.value=1,m.value.stop(),m.value=Object(l.e)(e,(function(t){Object(o.a)(t,1)[0].isIntersecting&&v()})),v()}}}}}]);