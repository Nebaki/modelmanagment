(window.webpackJsonp=window.webpackJsonp||[]).push([[5,56,57,172,227,247],{595:function(e,t,o){var content=o(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("44aee70d",content,!0,{sourceMap:!1})},596:function(e,t,o){"use strict";o.r(t);var r=o(3),d=o(150),n=Object(r.b)({props:{image:Object,link:String,externalLink:Boolean,ratio:Number,mobileRatio:Number,noShadow:Boolean,alt:String,lazy:{type:Boolean,default:!0},rounded:{type:Boolean,default:!0}},setup(e){var{isMobile:t}=Object(d.a)(),component=Object(r.a)((()=>e.link?e.externalLink?"a":"NuxtLink":"div")),o=Object(r.a)((()=>t.value&&e.mobileRatio?e.mobileRatio:e.ratio));return{props:e,component:component,computedRatio:o}}}),l=(o(597),o(10)),c=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o(e.component,{tag:"component",staticClass:"image-block",class:{rounded:e.props.rounded},style:{paddingTop:1/e.computedRatio*100+"%"},attrs:{to:e.props.link,href:e.props.link}},[e.props.image?o("ResponsiveImage",{staticClass:"image-block-image",attrs:{image:e.props.image,alt:e.props.alt,lazy:e.props.lazy}}):e._e(),e._v(" "),o("div",{staticClass:"image-block-inner",class:{"no-shadow":e.props.noShadow}},[e._t("default")],2)],1)}),[],!1,null,"175b520a",null);t.default=c.exports;installComponents(c,{ResponsiveImage:o(264).default})},597:function(e,t,o){"use strict";o(595)},598:function(e,t,o){var r=o(17)(!1);r.push([e.i,".image-block[data-v-175b520a]{position:relative;display:block;width:100%;background-color:#f2f2f2;overflow:hidden}.image-block.rounded[data-v-175b520a]{border-radius:1.5rem}.image-block-image[data-v-175b520a]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.image-block-image[data-v-175b520a],.image-block-inner[data-v-175b520a]{position:absolute;top:0;left:0;right:0;bottom:0}.image-block-inner[data-v-175b520a]:not(.no-shadow){background:linear-gradient(0deg,rgba(0,0,0,.8),transparent 50%)}",""]),e.exports=r},681:function(e,t,o){"use strict";o.r(t);var r=o(3),d=o(15),n=Object(r.b)({props:{size:{type:String,default:"is-normal"}},setup:e=>({props:e,mdiPlusCircle:d.Bb})}),l=o(10),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("IconBase",{attrs:{path:e.mdiPlusCircle,size:e.props.size}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconBase:o(20).default})},698:function(e,t,o){"use strict";o.r(t);var r=o(14),d=o(3),n=o(1142),l=o.n(n),c=o(1143),v=o.n(c),m=o(23),f=o(21),h=o(11),w=Object(d.b)({props:{imageID:Number,boardTitle:String,visible:Boolean,disabled:Boolean,noPadding:Boolean},setup(e,t){var n=Object(m.a)(t),c=Object(d.i)(!1),w=Object(d.i)(!1),B=Object(d.i)(null),x=Object(d.i)(null),{state:C,actions:{fetch:_,create:k,edit:A,deleteItem:I}}=Object(f.a)(t,"boards/boards"),{state:y,actions:{setLastBoardID:j}}=Object(f.a)(t,"boards/widget"),{actions:{openRegister:O}}=Object(f.a)(t,"authPopup");Object(d.f)((()=>{n.loggedIn&&Object(h.f)(C)&&_({options:{context:t}})}));var z=Object(d.a)((()=>{var t,o={};return null===(t=C.data)||void 0===t||t.forEach((t=>{var r=t.items_ids.find((i=>i.image_id===e.imageID));r&&(o[t.board_id]={boardID:t.board_id,updated_at:r.updated_at})})),o})),D=Object(d.a)((()=>Object.keys(z.value).length>0)),M=Object(d.a)((()=>{var e,t=D.value?null===(e=v()(l()(z.value),"updated_at"))||void 0===e?void 0:e.boardID:y.lastBoardID;if(t){var o=C.data.find((b=>b.board_id===t));if(o)return o}return C.data[0]||null})),T=o=>{A({options:{context:t},boardID:o,params:{image_id:e.imageID}}),j({boardID:o})},E=o=>{var r,d=C.data.find((b=>b.board_id===o)),n=null===(r=null==d?void 0:d.items_ids.find((i=>i.image_id===e.imageID)))||void 0===r?void 0:r.item_id;I({options:{context:t},params:{board_id:o,item_id:n}})},R=function(){var o=Object(r.a)((function*(title){var o=yield k({options:{context:t},params:{title:title,visibility:!1,image_id:e.imageID}});o.success&&j({boardID:o.data.board_id}),B.value&&(B.value.scrollTop=B.value.scrollHeight)}));return function(e){return o.apply(this,arguments)}}(),S=Object(d.a)((()=>!!t.slots.trigger)),N=o(965);return Object(d.r)(w,(()=>{w.value&&setTimeout((()=>{var{top:e,width:t,height:o}=document.body.getBoundingClientRect(),{top:r,left:d,width:n,height:l}=x.value.$refs.trigger.getBoundingClientRect(),{width:c,height:v}=x.value.$refs.dropdownMenu.getBoundingClientRect(),m=Math.max(d+window.scrollX-(c-n)/2,0),f=t-(m+c);f<0&&(m+=f),x.value.$refs.dropdownMenu.style.left=m+"px";var h=r-e+l,w=o-(h+v);w<0&&(h+=w),x.value.$refs.dropdownMenu.style.top=h+"px"}),0)})),{props:e,auth:n,hover:c,active:w,allBoards:C,lastSavedBoard:M,savedInBoards:z,getCover:e=>e.cover[0]?e.cover[0].image:N,isFetching:h.e,isFetched:h.d,handleAddBoard:R,handleAddToBoard:T,handleTriggerButtonClick:()=>{M.value&&(z.value[M.value.board_id]?E(M.value.board_id):T(M.value.board_id))},handleRemoveFromBoard:E,boardsListRef:B,isSavedSomewhere:D,hasCustomTrigger:S,openRegister:O,dropdownRef:x,toggleDropdown:()=>{var e;null===(e=x.value)||void 0===e||e.toggle()}}}}),B=w,x=(o(966),o(968),o(10)),component=Object(x.a)(B,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boards-container",class:{"custom-trigger":e.hasCustomTrigger},on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[e._t("default"),e._v(" "),e.props.disabled||!e.hasCustomTrigger||e.auth.loggedIn?e.props.disabled||e.hasCustomTrigger||e.auth.loggedIn&&(!e.isFetched(e.allBoards,!0)||0!==e.allBoards.data.length)||!(e.props.visible||e.hover||e.active)?!e.props.disabled&&e.allBoards.data.length>0&&(e.props.visible||e.hover||e.active)?o("BDropdown",{ref:"dropdownRef",staticClass:"boards-dropdown",class:{padding:!e.props.noPadding},attrs:{appendToBody:""},on:{"active-change":function(t){e.active=t}},scopedSlots:e._u([{key:"trigger",fn:function(){return[e._t("trigger",(function(){return[e.lastSavedBoard?o("div",{staticClass:"boards-trigger"},[o("div",{staticClass:"board-cover"},[o("ImageBlock",{attrs:{image:e.getCover(e.lastSavedBoard),ratio:1,lazy:!1,"no-shadow":""}})],1),e._v(" "),o("div",{staticClass:"board-title"},[e._v("\n                        "+e._s(e.lastSavedBoard.title)+"\n                    ")]),e._v(" "),o("IconChevronUp",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}]}),e._v(" "),o("IconChevronDown",{directives:[{name:"show",rawName:"v-show",value:!e.active,expression:"!active"}]}),e._v(" "),o("BButton",{staticClass:"is-shadowless board-trigger-save",class:{primary:!e.savedInBoards[e.lastSavedBoard.board_id],secondary:e.savedInBoards[e.lastSavedBoard.board_id]},attrs:{rounded:""},on:{click:function(t){return t.stopPropagation(),e.handleTriggerButtonClick.apply(null,arguments)}}},[e._v("\n                        "+e._s(e.savedInBoards[e.lastSavedBoard.board_id]?e.$t("boards.widget.saved"):e.$t("boards.widget.save"))+"\n                    ")])],1):e._e()]}),{active:e.active,saved:e.isSavedSomewhere})]},proxy:!0}],null,!0)},[e._v(" "),o("BusyWrapper",{staticClass:"boards-menu",attrs:{busy:e.isFetching(e.allBoards)}},[o("div",{staticClass:"boards-title-container"},[o("IconCloseCircle",{staticClass:"boards-close is-hidden-tablet",attrs:{size:"is-medium"},nativeOn:{click:function(t){return e.toggleDropdown.apply(null,arguments)}}}),e._v(" "),o("div",{staticClass:"boards-title"},[e._v("\n                    "+e._s(e.props.boardTitle)+"\n                ")])],1),e._v(" "),o("div",{staticClass:"boards-list-container"},[o("div",{ref:"boardsListRef",staticClass:"boards-list"},e._l(e.allBoards.data,(function(t){return o("div",{key:t.board_id,staticClass:"boards-list-item"},[o("div",{staticClass:"board-cover"},[o("ImageBlock",{attrs:{image:e.getCover(t),ratio:1,lazy:!1,"no-shadow":""}})],1),e._v(" "),o("div",{staticClass:"board-title"},[e._v("\n                            "+e._s(t.title)+"\n                        ")]),e._v(" "),e.savedInBoards[t.board_id]?o("div",{staticClass:"tiny-button remove-button",on:{click:function(o){return e.handleRemoveFromBoard(t.board_id)}}},[e._v("\n                            "+e._s(e.$t("boards.widget.remove"))+"\n                        ")]):o("div",{staticClass:"tiny-button add-button",on:{click:function(o){return e.handleAddToBoard(t.board_id)}}},[e._v("\n                            "+e._s(e.$t("boards.widget.add"))+"\n\n                            "),o("IconPlusCircle",{attrs:{size:"is-small"}})],1)])})),0)]),e._v(" "),o("div",{staticClass:"boards-add-container"},[o("BoardWidgetAddBoard",{attrs:{addBoard:e.handleAddBoard}})],1)])],1):e._e():o("BoardWidgetAddBoard",{staticClass:"boards-outside-add-button",attrs:{addBoard:e.handleAddBoard}}):o("div",{on:{click:e.openRegister}},[e._t("trigger",null,{active:!1,saved:!1})],2)],2)}),[],!1,null,"1a885f23",null);t.default=component.exports;installComponents(component,{BoardWidgetAddBoard:o(936).default,ImageBlock:o(596).default,IconChevronUp:o(163).default,IconChevronDown:o(162).default,IconCloseCircle:o(790).default,IconPlusCircle:o(681).default,BusyWrapper:o(263).default})},752:function(e,t,o){var content=o(859);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("02abd324",content,!0,{sourceMap:!1})},753:function(e,t,o){var content=o(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("a8995adc",content,!0,{sourceMap:!1})},790:function(e,t,o){"use strict";o.r(t);var r=o(3),d=o(15),n=Object(r.b)({props:{size:{type:String,default:"is-normal"}},setup:e=>({props:e,mdiCloseCircle:d.F})}),l=o(10),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("IconBase",{attrs:{path:e.mdiCloseCircle,size:e.props.size}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{IconBase:o(20).default})},804:function(e,t,o){var content=o(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("36dd2f36",content,!0,{sourceMap:!1})},805:function(e,t,o){var content=o(969);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("b18c5570",content,!0,{sourceMap:!1})},858:function(e,t,o){"use strict";o(752)},859:function(e,t,o){var r=o(17)(!1);r.push([e.i,".boards-add[data-v-904e458c]{display:flex;align-items:center;height:3.5rem;border-radius:1.75rem;background-color:#e7e7e7}.add-mode[data-v-904e458c]{display:flex;justify-content:space-between;width:100%;padding:0 .25rem}.add-mode-input[data-v-904e458c]{flex-grow:1}.add-mode-input[data-v-904e458c],.initial-mode[data-v-904e458c]{display:flex;align-items:center}.initial-mode[data-v-904e458c]{width:100%;height:100%;font-weight:700;padding:0 1rem;overflow:hidden;cursor:pointer}.initial-mode .icon[data-v-904e458c]{margin-right:.25rem}.boards-add-label[data-v-904e458c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=r},860:function(e,t,o){"use strict";o(753)},861:function(e,t,o){var r=o(17)(!1);r.push([e.i,".add-mode-input .input{font-weight:700}",""]),e.exports=r},936:function(e,t,o){"use strict";o.r(t);var r=o(3),d=o(23),n=o(21),l=Object(r.b)({props:{addBoard:Function},setup(e,t){var o=Object(d.a)(t),{actions:{openRegister:l}}=Object(n.a)(t,"authPopup"),c=Object(r.i)(!1),title=Object(r.i)("");return{props:e,addMode:c,title:title,handleSave:()=>{title.value&&(e.addBoard(title.value),c.value=!1,title.value="")},handleInitialButtonClick:()=>{o.loggedIn?c.value=!0:l()}}}}),c=(o(858),o(860),o(10)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boards-add"},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.addMode,expression:"addMode"}],staticClass:"add-mode"},[o("BInput",{staticClass:"add-mode-input",attrs:{placeholder:e.$t("boards.widget.add_board_placeholder"),size:"is-small",rounded:"",autofocus:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),o("BButton",{staticClass:"primary is-shadowless board-trigger-save",attrs:{rounded:""},on:{click:e.handleSave}},[e._v("\n            "+e._s(e.$t("boards.widget.add"))+"\n        ")])],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.addMode,expression:"!addMode"}],staticClass:"initial-mode",on:{click:e.handleInitialButtonClick}},[o("IconPlusCircle",{attrs:{size:"is-small"}}),e._v(" "),o("div",{staticClass:"boards-add-label"},[e._v(e._s(e.$t("boards.widget.add_new_board")))])],1)])}),[],!1,null,"904e458c",null);t.default=component.exports;installComponents(component,{IconPlusCircle:o(681).default})},965:function(e,t,o){e.exports={srcSet:o.p+"images/placeholder-cover-80.png 80w",images:[{path:o.p+"images/placeholder-cover-80.png",width:80,height:80}],src:o.p+"images/placeholder-cover-80.png",toString:function(){return o.p+"images/placeholder-cover-80.png"},placeholder:"data:image/png;base64,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",width:80,height:80}},966:function(e,t,o){"use strict";o(804)},967:function(e,t,o){var r=o(17)(!1);r.push([e.i,'.boards-container[data-v-1a885f23]{position:relative}.boards-container[data-v-1a885f23]:not(.custom-trigger){min-height:3.5rem}.boards-container:not(.custom-trigger)>.boards-dropdown.padding[data-v-1a885f23]{position:absolute;top:1rem;left:1rem;right:1rem}.boards-dropdown .background[data-v-1a885f23]{z-index:50}.boards-trigger[data-v-1a885f23]{height:3.5rem;display:flex;justify-content:space-between;align-items:center;border-radius:1.75rem;background-color:hsla(0,0%,100%,.9);box-shadow:0 0 6px rgba(0,0,0,.12),0 6px 6px rgba(0,0,0,.12);cursor:pointer}.boards-trigger .icon[data-v-1a885f23]{margin-right:.5rem}.board-cover[data-v-1a885f23]{width:2.5rem;height:2.5rem;flex-shrink:0;border-radius:50%;margin:0 .5rem}.board-title[data-v-1a885f23]{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-grow:1}.board-trigger-save[data-v-1a885f23]{margin-right:.25rem}.boards-menu[data-v-1a885f23]{display:flex;flex-direction:column;max-height:31rem;padding-top:.5rem;color:#1d1d1f}.boards-title-container[data-v-1a885f23]{display:flex;padding:0 1rem;margin-bottom:1rem}.boards-close[data-v-1a885f23]{color:rgba(0,0,0,.4);margin-right:1.5rem}.boards-title[data-v-1a885f23]{flex-grow:1;font-size:.75rem;font-weight:700;color:#929292;text-align:center}@media screen and (max-width:768px){.boards-title[data-v-1a885f23]{font-size:1.5rem;color:#1d1d1f;text-align:left}}.boards-list-container[data-v-1a885f23]{position:relative;display:flex;min-height:0}@media screen and (min-width:769px){.boards-list-container[data-v-1a885f23]:after{content:"";display:block;position:absolute;bottom:0;left:0;right:0;height:3rem;background:linear-gradient(180deg,transparent,#fff);pointer-events:none}}.boards-list[data-v-1a885f23]{width:100%;padding:0 1rem;overflow-y:auto}.boards-list .board-cover[data-v-1a885f23]{margin-left:0}.boards-list-item[data-v-1a885f23]{justify-content:space-between;margin-bottom:1.5rem}.boards-list-item[data-v-1a885f23],.tiny-button[data-v-1a885f23]{display:flex;align-items:center}.tiny-button[data-v-1a885f23]{height:1.5rem;border-radius:.75rem;font-size:.75rem;font-weight:700;color:#fff;cursor:pointer}.add-button[data-v-1a885f23]{padding:0 .25rem 0 .5rem;background:linear-gradient(259.82deg,#f5245e,#d1053e)}.add-button .icon[data-v-1a885f23]{margin-left:.25rem}.remove-button[data-v-1a885f23]{padding:0 .5rem;background-color:#c5c5c5}.boards-add-container[data-v-1a885f23]{padding:0 1rem}.boards-outside-add-button[data-v-1a885f23]{position:absolute;top:1rem;left:1rem;right:1rem;box-shadow:0 0 6px rgba(0,0,0,.12),0 6px 6px rgba(0,0,0,.12)}',""]),e.exports=r},968:function(e,t,o){"use strict";o(805)},969:function(e,t,o){var r=o(17)(!1);r.push([e.i,".boards-dropdown .dropdown-trigger{width:100%;max-width:100%}.boards-dropdown .dropdown-menu{width:22.5rem}@media screen and (max-width:768px){.boards-dropdown.is-mobile-modal>.dropdown-menu{display:flex;justify-content:center;align-items:center;top:0!important;bottom:0!important;left:0!important;right:0!important;width:auto;max-width:none;max-height:none;padding:1rem;transform:translate(0);pointer-events:none;z-index:99!important}.boards-dropdown.is-mobile-modal .dropdown-content{max-width:100%;pointer-events:all}}.boards-dropdown .background{z-index:50}",""]),e.exports=r}}]);