(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["9c2327f4"],{"94f1":function(e,t,i){"use strict";var s=i("9d1c"),n=i.n(s);n.a},"9d1c":function(e,t,i){},aaff:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",[e.active?[i("q-toolbar",{staticClass:"justify-between",attrs:{color:"dark"}},[i("q-item",{staticClass:"no-padding",staticStyle:{"max-width":"50%"},style:{cursor:e.isNeedSelect?"":"default!important"}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:"140px"},attrs:{label:""}},[e._v(e._s(e.selectedItem.name||"<noname>"))]),i("q-item-tile",{staticStyle:{"font-size":"0.8rem"},attrs:{sublabel:""}},[e._v(e._s(e.selectedItem.id))])],1),i("q-item-side",{staticClass:"text-right"},[i("q-item-tile",{staticClass:"text-center",staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white"}},[e.selectedItem.deleted?i("div",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),e._v("#"+e._s(e.selectedItem.id.toString()))]),e.isNeedSelect?i("q-item-tile",{staticStyle:{display:"inline-block"},attrs:{stamp:"",color:"white",size:"2rem",icon:"mdi-menu-down"}}):e._e()],1),e.isNeedSelect?i("q-popover",{ref:"popoverActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:40,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverActive.hide(),e.$emit("view-data-hide")}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[e._v(e._s(t.name||"<noname>"))])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1)}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1):e._e()],1),e.selectedItem.deleted?e._e():i("q-btn",{staticClass:"on-left",attrs:{title:"Mode (Real-time/History)",flat:"",color:"white",icon:e.modeModel?"playlist_play":"history",rounded:e.$q.platform.is.mobile},on:{click:function(t){e.modeModel=!e.modeModel}}},[e._v("\n        "+e._s(e.$q.platform.is.mobile?"":e.modeModel?"Real-time":"History")+"\n        "),e.newMessagesCount?i("q-chip",{staticClass:"cursor-pointer q-ml-sm",attrs:{small:"",square:"",color:"red"}},[e._v(e._s(e.newMessagesCount))]):e._e()],1),i("div",[e.modeModel&&!e.isEmptyMessages?i("q-icon",{staticClass:"cursor-pointer pull-right",attrs:{title:"Clear all panes",size:"1.5rem",color:"white",name:"mdi-playlist-remove"},nativeOn:{click:function(t){return e.clearHandler(t)}}}):e._e()],1)],1),i("logs",{ref:"logs",style:{minHeight:"calc(100vh - "+(e.isVisibleToolbar?"100px":"50px")+")",position:"relative"},attrs:{mode:e.mode,item:e.selectedItem,limit:e.limit,originPattern:"storage/containers/:id",isEnabled:!0,config:e.config.logs},on:{"view-log-message":e.viewLogMessagesHandler}})]:i("div",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","font-size":"1.5rem"}},[i("div",{staticClass:"text-grey-3",staticStyle:{"margin-top":"50px"}},[e.items.length?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap","margin-top":"20px"},attrs:{flat:"","icon-right":"mdi-menu-down"}},[e._v("\n        Select container\n        "),i("q-popover",{ref:"popoverNotActive",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},[i("VirtualList",{attrs:{size:40,remain:e.items.length>6?6:e.items.length}},e._l(e.items,function(t,s){return e.items.length?i("q-item",{key:s,staticClass:"cursor-pointer",class:{"text-grey-8":t.deleted},attrs:{highlight:""},nativeOn:{click:function(i){e.active=t.id,e.$refs.popoverNotActive.hide()}}},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",style:{maxWidth:e.$q.platform.is.mobile?"":"140px"},attrs:{title:t.name,label:""}},[e._v(e._s(t.name||"<noname>"))])],1),i("q-item-side",{staticClass:"text-center"},[t.deleted?i("q-item-tile",{staticClass:"cheap-modifier"},[i("small",[e._v("DELETED")])]):e._e(),i("q-item-tile",[i("small",[e._v("#"+e._s(t.id.toString()))])])],1)],1):e._e()}))],1),e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"deleted-action",attrs:{icon:"mdi-download"},on:{click:e.getDeletedHandler}},[e._v("see deleted")]):e._e()],1)],1):e._e(),e.items.length?e._e():i("div",[i("div",[e._v(e._s(e.isLoading?"Fetching data..":"Containers not found"))]),!e.isLoading&&e.needShowGetDeletedAction&&1===e.tokenType?i("q-btn",{staticClass:"q-mt-sm",attrs:{icon:"mdi-download",label:"see deleted"},on:{click:e.getDeletedHandler}}):e._e()],1)],1)])],2)},n=[],a=(i("96cf"),i("c973")),l=i.n(a),o=(i("c5f6"),i("3156")),r=i.n(o),c=i("2ce0"),d=i("2f62"),m=i("95ff"),u=i.n(m),h={props:["limit","isLoading","isVisibleToolbar","isNeedSelect","config"],data:function(){return{mode:1,active:null,isInit:!1,needShowGetDeletedAction:!0}},computed:r()({},Object(d["d"])({newMessagesCount:function(e){return e[this.config.logs.vuexModuleName]?e[this.config.logs.vuexModuleName].newMessagesCount:0},isEmptyMessages:function(e){return!!e[this.config.logs.vuexModuleName]&&!e[this.config.logs.vuexModuleName].messages.length},tokenType:function(e){return e.tokenInfo.access?e.tokenInfo.access.type:-1}}),{items:function(){return this.$store.state.items},selectedItem:function(){var e=this;return this.items.filter(function(t){return t.id===e.active})[0]||{}},modeModel:{get:function(){return!!this.mode},set:function(e){var t=Date.now();this.date=e?0:t-t%864e5,this.mode=Number(e),this.$emit("view-data-hide")}}}),methods:r()({},Object(d["b"])(["getDeleted"]),{viewDataHandler:function(e){this.$emit("view-data",e)},viewLogMessagesHandler:function(e){this.$emit("view-log-message",e)},clearHandler:function(){var e=this;this.$q.dialog({title:"Confirm",message:"Do you really want to clear all data from the panes?",ok:!0,cancel:!0}).then(function(){e.$store.commit("".concat(e.config.logs.vuexModuleName,"/clearMessages"))}).catch(function(){})},getDeletedHandler:function(){var e=l()(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDeleted("containers");case 2:this.needShowGetDeletedAction=!1;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}),created:function(){var e=this,t="containers",i=this.$q.localStorage.get.item(t),s=this.$route.params&&this.$route.params.id?this.$route.params.id:null;this.$store.dispatch("getItems",this.isNeedSelect?t:{entity:t,id:s}).then(function(){e.isInit=!0,s?e.items.filter(function(e){return e.id===Number(s)}).length?e.active=Number(s):e.active=null:i&&e.items.filter(function(e){return e.id===i}).length&&(e.active=i),e.selectedItem.deleted&&(e.mode=0)})},destroyed:function(){var e=this.$route.params&&this.$route.params.id?this.$route.params.id:null,t="containers";this.$store.commit("clearItems"),this.$store.dispatch("unsubscribeItems",this.isNeedSelect?t:{entity:t,id:e})},watch:{$route:function(e){e.params&&e.params.id?this.items.filter(function(t){return t.id===Number(e.params.id)}).length?this.active=Number(e.params.id):this.isInit&&(this.active=null):e.params&&!e.params.id&&(this.active=null)},active:function(e){var t=this.items.filter(function(t){return t.id===e})[0]||{};e?(this.$q.localStorage.set("containers",e),this.$router.push("/containers/".concat(e))):this.$router.push("/containers"),t.deleted&&(this.mode=0)}},components:{logs:c["a"],VirtualList:u.a}},f=h,p=(i("94f1"),i("2877")),g=Object(p["a"])(f,s,n,!1,null,null,null);g.options.__file="Containers.vue";t["default"]=g.exports}}]);