(window.webpackJsonp=window.webpackJsonp||[]).push([[418,130,246,307],{1127:function(t,e,n){var content=n(1320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("fd07b4da",content,!0,{sourceMap:!1})},1319:function(t,e,n){"use strict";n(1127)},1320:function(t,e,n){var o=n(25)(!1);o.push([t.i,".ranking-item[data-v-071d2fd0]{margin-bottom:1rem;box-shadow:0 0 6px rgba(0,0,0,.12),0 6px 6px rgba(0,0,0,.12)}@media screen and (min-width:769px){.ranking-item[data-v-071d2fd0]{margin-bottom:2rem}}.ranking-item-inner[data-v-071d2fd0]{display:flex;align-items:flex-end;height:100%;padding:1.5rem 1rem;font-size:1.5rem;line-height:2rem;font-weight:700;color:#fff}.image-credit[data-v-071d2fd0]{position:absolute;top:.75rem;left:.25rem;transform-origin:left bottom;transform:rotate(90deg);font-size:8px;font-weight:400;line-height:normal;text-shadow:1px 1px 1px rgba(29,29,31,.5)}",""]),t.exports=o},1474:function(t,e,n){var content=n(1781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c0e38768",content,!0,{sourceMap:!1})},1617:function(t,e,n){"use strict";n.r(e);n(133);var o=n(3),r=Object(o.b)({props:{id:Number,title:String,slug:String,image_credit:String,image:Object},setup:function(t){return{props:t}}}),l=(n(1319),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ImageBlock",{staticClass:"ranking-item",attrs:{link:t.localePath({name:"ranking-category",params:{category:t.props.slug}}),image:t.props.image,ratio:1.0925,mobileRatio:.9}},[n("div",{staticClass:"ranking-item-inner"},[t._v("\n        "+t._s(t.props.title)+"\n\n        "),t.props.image_credit?n("div",{staticClass:"image-credit"},[t._v("\n            "+t._s(t.props.image_credit)+"\n        ")]):t._e()])])}),[],!1,null,"071d2fd0",null);e.default=component.exports;installComponents(component,{ImageBlock:n(680).default})},1780:function(t,e,n){"use strict";n(1474)},1781:function(t,e,n){var o=n(25)(!1);o.push([t.i,".busy-wrapper[data-v-029335e8]{min-height:14rem}",""]),t.exports=o},2139:function(t,e,n){"use strict";n.r(e);var o=n(3),r=n(31),l=n(212),c=n(11),d=Object(o.b)({head:function(){return Object(l.a)(this.$root.$i18n,"rankings.seo.title","rankings.seo.description")},setup:function(t,e){var n=Object(r.a)(e,"rankings/rankings"),l=n.state,d=n.actions.fetch,f=function(){if(Object(c.f)(l))return d({options:{context:e}})};return Object(o.k)((function(){return f()}),"LDqFlM8a17zvczLIXbCYgw=="),Object(o.f)((function(){return f()})),{rankings:l,isFetched:c.d}}}),f=(n(1780),n(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"rankings section container"},[n("h1",{staticClass:"title"},[t._v(t._s(t.$t("rankings.content.title")))]),t._v(" "),n("BusyWrapper",{attrs:{busy:!t.isFetched(t.rankings)}},[n("GridColumns",t._l(t.rankings.data,(function(e){return n("div",{key:e.id,staticClass:"column is-12-mobile is-4-tablet is-3-desktop"},[n("RankingsItem",t._b({},"RankingsItem",e,!1))],1)})),0)],1)],1)}),[],!1,null,"029335e8",null);e.default=component.exports;installComponents(component,{RankingsItem:n(1617).default,GridColumns:n(676).default,BusyWrapper:n(339).default})},675:function(t,e,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7ac9a822",content,!0,{sourceMap:!1})},676:function(t,e,n){"use strict";n.r(e);var o=n(3),r=Object(o.b)({props:{isReversed:Boolean},setup:function(t){return{props:t}}}),l=(n(677),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"columns is-multiline is-mobile is-variable is-2-mobile is-4-tablet",class:{"is-reversed":t.props.isReversed}},[t._t("default")],2)}),[],!1,null,"0f89ce49",null);e.default=component.exports},677:function(t,e,n){"use strict";n(675)},678:function(t,e,n){var o=n(25)(!1);o.push([t.i,".columns[data-v-0f89ce49]{box-sizing:border-box}",""]),t.exports=o},679:function(t,e,n){var content=n(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("44aee70d",content,!0,{sourceMap:!1})},680:function(t,e,n){"use strict";n.r(e);n(133),n(344);var o=n(3),r=n(211),l=Object(o.b)({props:{image:Object,link:String,externalLink:Boolean,ratio:Number,mobileRatio:Number,noShadow:Boolean,alt:String,lazy:{type:Boolean,default:!0},rounded:{type:Boolean,default:!0}},setup:function(t){var e=Object(r.a)().isMobile,component=Object(o.a)((function(){return t.link?t.externalLink?"a":"NuxtLink":"div"})),n=Object(o.a)((function(){return e.value&&t.mobileRatio?t.mobileRatio:t.ratio}));return{props:t,component:component,computedRatio:n}}}),c=(n(681),n(10)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component,{tag:"component",staticClass:"image-block",class:{rounded:t.props.rounded},style:{paddingTop:1/t.computedRatio*100+"%"},attrs:{to:t.props.link,href:t.props.link}},[t.props.image?n("ResponsiveImage",{staticClass:"image-block-image",attrs:{image:t.props.image,alt:t.props.alt,lazy:t.props.lazy}}):t._e(),t._v(" "),n("div",{staticClass:"image-block-inner",class:{"no-shadow":t.props.noShadow}},[t._t("default")],2)],1)}),[],!1,null,"175b520a",null);e.default=d.exports;installComponents(d,{ResponsiveImage:n(340).default})},681:function(t,e,n){"use strict";n(679)},682:function(t,e,n){var o=n(25)(!1);o.push([t.i,".image-block[data-v-175b520a]{position:relative;display:block;width:100%;background-color:#f2f2f2;overflow:hidden}.image-block.rounded[data-v-175b520a]{border-radius:1.5rem}.image-block-image[data-v-175b520a]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.image-block-image[data-v-175b520a],.image-block-inner[data-v-175b520a]{position:absolute;top:0;left:0;right:0;bottom:0}.image-block-inner[data-v-175b520a]:not(.no-shadow){background:linear-gradient(0deg,rgba(0,0,0,.8),transparent 50%)}",""]),t.exports=o}}]);