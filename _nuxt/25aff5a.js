(window.webpackJsonp=window.webpackJsonp||[]).push([[298,70,173,179,242],{1029:function(t,e,o){"use strict";o.r(e);var n=o(3),r=o(18),l=Object(n.b)({props:{size:{type:String,default:"is-normal"}},setup:function(t){return{props:t,mdiContentCopy:r.H}}}),c=o(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("IconBase",{attrs:{path:t.mdiContentCopy,size:t.props.size}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconBase:o(30).default})},1060:function(t,e,o){"use strict";o(910)},1061:function(t,e,o){var n=o(25)(!1);n.push([t.i,".copy-box[data-v-dcac5a7c]{display:flex;justify-content:space-between;font-weight:700;padding:.5rem;border-radius:.5rem;background-color:#e7e7e7;cursor:pointer}.text[data-v-dcac5a7c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),t.exports=n},1084:function(t,e,o){"use strict";o.r(e);var n=o(3),r=o(64),l=o(69),c=o(50),d=Object(n.b)({props:{text:String},setup:function(t,e){var o=Object(r.a)({source:t.text}).copy,n=Object(c.a)(e);return{props:t,handleCopy:function(){o(),Object(l.a)(n.t("misc.copied_to_clipboard"),"is-success")}}}}),f=(o(1060),o(10)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"copy-box",on:{click:t.handleCopy}},[o("span",{staticClass:"text"},[t._v(t._s(t.props.text))]),t._v(" "),o("IconContentCopy")],1)}),[],!1,null,"dcac5a7c",null);e.default=component.exports;installComponents(component,{IconContentCopy:o(1029).default})},1577:function(t,e,o){var content=o(2015);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("1e5a45bc",content,!0,{sourceMap:!1})},2014:function(t,e,o){"use strict";o(1577)},2015:function(t,e,o){var n=o(25)(!1);n.push([t.i,"@media screen and (min-width:769px){.share-popup[data-v-5729a567]{padding:3rem 2rem;border-radius:1rem;background:linear-gradient(259.82deg,#fff,#ededed);box-shadow:0 0 6px rgba(0,0,0,.12),0 6px 6px rgba(0,0,0,.12)}}.share-title[data-v-5729a567]{font-size:1.5rem;line-height:2rem;text-align:center;margin-bottom:2rem}.social-buttons[data-v-5729a567]{display:flex;justify-content:space-between;margin-top:2rem}@media screen and (max-width:768px){.social-buttons[data-v-5729a567]{flex-direction:column}}.social-button[data-v-5729a567]{justify-content:center;flex-grow:1}@media screen and (max-width:768px){.social-button[data-v-5729a567]:not(:last-child){margin-bottom:1rem}}@media screen and (min-width:769px){.social-button[data-v-5729a567]:not(:last-child){margin-right:1rem}}.facebook[data-v-5729a567]{background-color:#4267b2}.twitter[data-v-5729a567]{background-color:#2aa3ef}.linkedin[data-v-5729a567]{background-color:#1569bf}.email[data-v-5729a567]{background-color:#000}",""]),t.exports=n},2228:function(t,e,o){"use strict";o.r(e);var n=o(3),r=o(211),l=Object(n.b)({props:{open:Boolean,profile:Object},setup:function(t,e){return{props:t,isMobile:Object(r.a)().isMobile,handleClose:function(){e.emit("close")},url:Object(n.a)((function(){return window.location.origin+window.location.pathname})),handleSocialShare:function(link){window.open(link,"sharer","toolbar=0,status=0,width=548,height=325")}}}}),c=(o(2014),o(10)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("MPopup",{attrs:{active:t.props.open,"on-cancel":t.handleClose,"max-width":"32.5rem",type:"white",buttonInside:!t.isMobile,"mount-to":"body",blurSelector:"#__layout",modalClass:"share-popup-container"}},[o("div",{staticClass:"share-popup"},[o("div",{staticClass:"share-title title-3"},[t._v("\n            "+t._s(t.$t("profile.share.title",{name:t.props.profile.first_name}))+"\n        ")]),t._v(" "),o("CopyBox",{attrs:{text:t.url}}),t._v(" "),o("div",{staticClass:"social-buttons"},[o("BButton",{staticClass:"social-button facebook",attrs:{rounded:"",size:"is-medium"},on:{click:function(e){t.handleSocialShare("http://www.facebook.com/sharer.php?u="+t.url+"&quote="+t.$t("profile.share.greeting",{name:t.props.profile.first_name}))}}},[o("IconFacebook")],1),t._v(" "),o("BButton",{staticClass:"social-button twitter",attrs:{rounded:"",size:"is-medium"},on:{click:function(e){t.handleSocialShare("http://twitter.com/intent/tweet?url="+t.url+"&text="+t.$t("profile.share.greeting",{name:t.props.profile.first_name}))}}},[o("IconTwitter")],1),t._v(" "),o("BButton",{staticClass:"social-button linkedin",attrs:{rounded:"",size:"is-medium"},on:{click:function(e){t.handleSocialShare("https://www.linkedin.com/shareArticle?mini=true&url="+t.url+"&title="+t.$t("profile.share.greeting",{name:t.props.profile.first_name}))}}},[o("IconLinkedin")],1),t._v(" "),o("BButton",{staticClass:"social-button email",attrs:{tag:"a",href:"mailto:?subject="+t.$t("profile.share.email_subject",{details:t.props.profile.first_name})+"&body="+t.$t("profile.share.greeting",{name:t.props.profile.first_name})+": "+t.url,rounded:"",size:"is-medium"}},[o("IconEmail")],1)],1)],1)])}),[],!1,null,"5729a567",null);e.default=component.exports;installComponents(component,{CopyBox:o(1084).default,IconFacebook:o(226).default,IconTwitter:o(885).default,IconLinkedin:o(381).default,IconEmail:o(775).default,MPopup:o(343).default})},775:function(t,e,o){"use strict";o.r(e);var n=o(3),r=o(18),l=Object(n.b)({props:{size:{type:String,default:"is-normal"}},setup:function(t){return{props:t,mdiEmail:r.M}}}),c=o(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("IconBase",{attrs:{path:t.mdiEmail,size:t.props.size}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconBase:o(30).default})},885:function(t,e,o){"use strict";o.r(e);var n=o(3),r=o(18),l=Object(n.b)({props:{size:{type:String,default:"is-normal"}},setup:function(t){return{props:t,mdiTwitter:r.Mb}}}),c=o(10),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("IconBase",{attrs:{path:t.mdiTwitter,size:t.props.size}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconBase:o(30).default})},910:function(t,e,o){var content=o(1061);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("58fd8ce9",content,!0,{sourceMap:!1})}}]);