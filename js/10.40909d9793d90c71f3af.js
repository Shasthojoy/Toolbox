webpackJsonp([10,16,17,18],{315:function(t,e,i){"use strict";function s(t){i(398)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(386),r=i(400),o=i(112),n=s,l=o(a.a,r.a,!1,n,null,null);e.default=l.exports},316:function(t,e,i){"use strict";function s(t){i(401)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(387),r=i(403),o=i(112),n=s,l=o(a.a,r.a,!1,n,null,null);e.default=l.exports},317:function(t,e,i){"use strict";function s(t){i(404)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(388),r=i(406),o=i(112),n=s,l=o(a.a,r.a,!1,n,null,null);e.default=l.exports},322:function(t,e,i){"use strict";function s(t){i(428)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(419),r=i(435),o=i(112),n=s,l=o(a.a,r.a,!1,n,null,null);e.default=l.exports},333:function(t,e){e.f={}.propertyIsEnumerable},334:function(t,e){e.f=Object.getOwnPropertySymbols},337:function(t,e,i){t.exports={default:i(343),__esModule:!0}},343:function(t,e,i){i(344),t.exports=i(5).Object.assign},344:function(t,e,i){var s=i(11);s(s.S+s.F,"Object",{assign:i(345)})},345:function(t,e,i){"use strict";var s=i(58),a=i(334),r=i(333),o=i(40),n=i(118),l=Object.assign;t.exports=!l||i(37)(function(){var t={},e={},i=Symbol(),s="abcdefghijklmnopqrst";return t[i]=7,s.split("").forEach(function(t){e[t]=t}),7!=l({},t)[i]||Object.keys(l({},e)).join("")!=s})?function(t,e){for(var i=o(t),l=arguments.length,c=1,u=a.f,d=r.f;l>c;)for(var p,h=n(arguments[c++]),m=u?s(h).concat(u(h)):s(h),b=m.length,f=0;b>f;)d.call(h,p=m[f++])&&(i[p]=h[p]);return i}:l},367:function(t,e,i){"use strict";e.__esModule=!0;var s=i(337),a=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=a.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}},386:function(t,e,i){"use strict";var s=i(114),a=i.n(s),r=i(36);e.a={props:["object"],data:function(){return{search:""}},computed:{filteredObject:function(){var t=this;return a()(this.object).reduce(function(e,i){return-1!==i.indexOf(t.search)&&(e[i]=t.object[i]),e},{})}},components:{QList:r.r,QListHeader:r.s,QItem:r.m,QItemMain:r.n,QItemSide:r.o,QItemTile:r.p,QTooltip:r.J,QIcon:r.j,QInput:r.l}}},387:function(t,e,i){"use strict";var s=i(114),a=i.n(s),r=i(36);e.a={props:["config","inverted"],data:function(){return{tabModel:""}},computed:{hasData:function(){var t=this;return a()(this.config).reduce(function(e,i){return t.config[i].data&&(e=!0),e},!1)}},methods:{open:function(){this.$refs.modal.open()},openHandler:function(){var t=this,e=0,i=a()(this.config).some(function(i,s){return e=s,!!t.config[i].data});this.tabModel=i?a()(this.config)[e]:a()(this.config)[0]?a()(this.config)[e]:""}},components:{QModal:r.t,QModalLayout:r.u,QToolbar:r.H,QBtn:r.e,QTabs:r.F,QTab:r.D,QTabPane:r.E}}},388:function(t,e,i){"use strict";var s=i(114),a=i.n(s),r=i(36);e.a={name:"json-tree",props:{data:[Object,Array],inverted:!0},data:function(){for(var t=[],e=a()(this.data).length,i=0,s=e;i<s;i++)t.push(!0);return{showObj:t}},computed:{theme:function(){return void 0!==this.inverted?{label:"text-pink-4",typeString:"text-red-3",typeNumberOrBool:"text-blue-3",typeEmpty:"text-grey-5"}:{label:"text-pink-8",typeString:"text-red-6",typeNumberOrBool:"text-blue-6",typeEmpty:"text-grey-6"}}},methods:{toggle:function(t){this.showObj[t]=!this.showObj[t],this.showObj.splice(t,1,this.showObj[t])}},components:{QIcon:r.j}}},398:function(t,e,i){var s=i(399);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("9238df5e",s,!0,{})},399:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,".no-top-bottom-margin{margin-bottom:0;margin-top:0}",""])},400:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("q-item",[i("q-item-side",{attrs:{left:""}},[i("q-icon",{attrs:{color:"white",size:"1.8rem",name:"mdi-view-list"}})],1),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v("Message")])],1),t._v(" "),i("q-item-side",{attrs:{right:""}},[i("q-icon",{staticClass:"pull-right cursor-pointer",attrs:{color:"white",name:"mdi-close",size:"1.8rem"},on:{click:function(e){t.$emit("close")}}})],1)],1),t._v(" "),i("q-item",[i("q-item-main",[i("q-input",{staticClass:"no-top-bottom-margin",attrs:{type:"text",inverted:"",color:"none","float-label":"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),i("q-list",{attrs:{separator:"","no-border":""}},[Object.keys(t.object).length&&Object.keys(t.filteredObject).length?t._e():i("q-item",[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-center text-white",attrs:{label:""}},[t._v("Message is empty")]),t._v(" "),Object.keys(t.object).length?t._e():i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Message has not fields")]),t._v(" "),!Object.keys(t.filteredObject).length&&this.search?i("q-item-tile",{staticClass:"ellipsis text-center text-white",attrs:{sublabel:""}},[t._v("Nothing found on your search")]):t._e()],1)],1),t._v(" "),t._l(Object.keys(t.filteredObject),function(e,s){return Object.keys(t.filteredObject).length?i("q-item",{key:e},[i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis text-bold text-white",attrs:{label:""}},[t._v(t._s(e)),i("q-tooltip",[t._v(t._s(e))])],1),t._v(" "),i("q-item-tile",{staticClass:"ellipsis text-white",attrs:{sublabel:""}},[t._v(t._s(t.filteredObject[e])),i("q-tooltip",[t._v(t._s(t.filteredObject[e]))])],1)],1)],1):t._e()})],2)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},401:function(t,e,i){var s=i(402);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("4e4e9abe",s,!0,{})},402:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,".modal-tabs .q-tabs{height:100%}.modal-tabs .q-tabs .q-tabs-panes{height:100%;overflow:auto}",""])},403:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-modal",{ref:"modal",attrs:{"content-css":{maxWidth:"100vw",maxHeight:"100vh",width:"700px",height:"700px",padding:"50px 0"},"content-classes":{"bg-dark":void 0!==t.inverted,"modal-tabs":!0}},on:{open:t.openHandler,close:function(e){t.tabModel=""}}},[i("q-modal-layout",[i("q-toolbar",{staticStyle:{"justify-content":"flex-end"},attrs:{slot:"footer",color:"dark"},slot:"footer"},[i("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.modal.close()}}},[t._v("Close")])],1),t._v(" "),t.hasData?t._e():i("div",{staticClass:"text-center",class:{"text-white":void 0!==t.inverted},staticStyle:{"font-size":"2rem","margin-top":"50px"}},[t._v("No additional data available")]),t._v(" "),t.hasData?i("q-tabs",{attrs:{color:"dark","no-pane-border":""},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},[t._l(t.config,function(e,s,a){return e.data?[i("q-tab",{attrs:{slot:"title",name:s,label:e.title},slot:"title"}),t._v(" "),i("q-tab-pane",{attrs:{name:s}},[e.wrapper&&"object"==typeof e.wrapper?i(e.wrapper,{tag:"component",attrs:{data:e.data,inverted:t.inverted}}):t._e(),t._v(" "),e.wrapper&&"string"==typeof e.wrapper?i(e.wrapper,{tag:"component",class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))]):t._e(),t._v(" "),e.wrapper?t._e():i("div",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(e.data))])],1)]:t._e()})],2):t._e()],1)],1)},a=[],r={render:s,staticRenderFns:a};e.a=r},404:function(t,e,i){var s=i(405);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("b7504606",s,!0,{})},405:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,".margin-left{margin-left:16px}",""])},406:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"[":"{"))]),t._v(" "),t._l(t.data,function(e,s,a){return i("div",{staticClass:"margin-left"},[e&&"object"==typeof e?i("div",[i("div",{staticClass:"cursor-pointer",on:{click:function(e){t.toggle(t.data.constructor===Array?s:a)}}},[t.showObj[t.data.constructor===Array?s:a]?i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-down"}}):i("q-icon",{staticStyle:{"vertical-align":"baseline"},attrs:{color:void 0!==t.inverted?"white":"dark",name:"mdi-menu-right"}}),t._v(" "),i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : "+t._s(t.data.constructor===Array?"Array ["+e.length+"]":"Object"))])],1),t._v(" "),t.showObj[t.data.constructor===Array?s:a]?i("json-tree",{staticClass:"margin-left",attrs:{data:e,inverted:t.inverted}}):t._e()],1):i("div",[i("span",{class:[t.theme.label]},[t._v(t._s(s))]),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(" : ")]),t._v(" "),i("span",{class:(r={},r[t.theme.typeNumberOrBool]="number"==typeof e||"boolean"==typeof e,r[t.theme.typeString]="string"==typeof e,r[t.theme.typeEmpty]=void 0===e||null===e,r)},[t._v(t._s(JSON.stringify(e)))])])]);var r}),t._v(" "),i("span",{class:{"text-white":void 0!==t.inverted}},[t._v(t._s(t.data.constructor===Array?"]":"}"))])],2)},a=[],r={render:s,staticRenderFns:a};e.a=r},419:function(t,e,i){"use strict";var s=i(113),a=i.n(s),r=i(367),o=i.n(r),n=i(114),l=i.n(n),c=i(36),u=i(126),d=i.n(u),p=i(430),h=(i.n(p),i(432)),m=(i.n(h),i(119)),b=i(434),f=i.n(b),g=i(315),v=i(316),y=i(317);e.a={data:function(){return{version:f.a.version,currentMessage:{},currentData:{},sides:{left:!1,right:!1},currentLimit:1e3,rawConfig:{},config:d.a,tabModel:"",isVisibleToolbar:!0,loadingFlag:!1,isTabsVisible:!0,tabsByGroup:l()(d.a)}},computed:o()({},Object(m.c)({token:function(t){return t.token},isCustomer:function(t){return t.isCustomer},isLoading:function(t){return t.isLoading}}),{configByEntity:function(){return this.config[this.tabModel]},limit:{get:function(){return this.currentLimit},set:function(t){var e=this;t<100?(c.L.create.negative({html:"Please set the count to more than 100.",timeout:1500}),this.currentLimit=100):t>2e3&&this.currentLimit<=2e3?c.a.create({enter:"bounceInRight",leave:"bounceOutRight",color:"amber-9",icon:"warning",html:"You are setting the row count to more than 2000. This can affect your browser performance. Do you want to continue?",position:"top-right",actions:[{label:"Agree",handler:function(){e.currentLimit=t}},{label:"Abort",handler:this.settingsClickHandler}]}):this.currentLimit=t}},logMessageConfig:function(){var t={item_data:{title:"item data",wrapper:y.default,data:this.currentData.item_data},http_data:{title:"http data",wrapper:y.default,data:this.currentData.http_data},properties:{title:"properties",wrapper:y.default,data:this.currentData.properties},pending:{title:"pending",wrapper:y.default,data:this.currentData.pending},current:{title:this.currentData.name+" [upd:"+c.M.formatDate(1e3*this.currentData.updated,"HH:mm:ss")+"]",wrapper:y.default,data:this.currentData.current}},e=l()(t).reduce(function(e,i){return e||!!t[i].data},!1);return e?t:e}}),methods:o()({},Object(m.b)(["setToken","clearToken"]),{exitHandler:function(){this.clearToken(),this.$router.push("/login")},onResizeWindow:function(t){t.width>767?this.isTabsVisible=!0:this.isTabsVisible=!1},viewDataHandler:function(t){this.currentMessage=JSON.parse(a()(t)),this.$refs.layout.showRight()},hideRight:function(){this.$refs.layout.hideRight(),this.currentMessage={}},hideRightHandler:function(){this.hideRight(),this.$refs.main.unselect()},confirmExitHandler:function(){var t=this;c.c.create({title:"Confirm",message:"Do you really want to exit?",buttons:[{label:"No"},{label:"Yes",handler:function(){t.exitHandler()}}]})},settingsHandler:function(){var t=this;c.c.create({title:"Settings",form:{limit:{type:"number",label:"Page row count",model:this.limit,min:100}},buttons:["Cancel",{label:"Ok",handler:function(e){t.limit=e.limit}}]})},viewLogMessagesHandler:function(t){this.currentData=JSON.parse(a()(t)),this.logMessageConfig?(this.rawConfig=this.logMessageConfig,this.$refs.rawViewer.open()):c.L.create({html:"No additional data available",timeout:1500})},disableLoading:Object(c.N)(function(t){t.loadingFlag=!1},200)}),watch:{token:function(t){t||this.$router.push("/login")},$route:function(t){if(this.$route.params.group){var e=this.$route.params.group.split(","),i=e.reduce(function(t,e){if(["hub","storage","mqtt"].includes(e))switch(e){case"hub":t.push("channels"),t.push("devices"),t.push("streams"),t.push("modems");break;case"storage":t.push("containers"),t.push("abques");break;case"mqtt":t.push("mqtt")}return t},[]);i.length&&(this.tabsByGroup=i)}t.params.token?(this.isVisibleToolbar=!t.params.fullscreen,this.setToken(t.params.token),t.params.id&&t.params.type?l()(d.a).includes(t.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+t.params.type+"/"+t.params.id)):(this.tabModel="channels",this.$router.push("/channels")):(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0]))):this.token?"/"===t.path?(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0])):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path):this.$router.push("/login"),this.$refs.layout&&this.hideRight()},isLoading:function(t){t?this.loadingFlag=t:this.disableLoading(this)}},created:function(){var t=c.d.get.item("X-Flespi-Token");if(this.$route.params.group){var e=this.$route.params.group.split(","),i=e.reduce(function(t,e){if(["hub","storage","mqtt"].includes(e))switch(e){case"hub":t.push("channels"),t.push("devices"),t.push("streams"),t.push("modems");break;case"storage":t.push("containers"),t.push("abques");break;case"mqtt":t.push("mqtt")}return t},[]);i.length&&(this.tabsByGroup=i)}this.$route.params.token?(this.isVisibleToolbar=!this.$route.params.fullscreen,this.setToken(this.$route.params.token),this.$route.params.id&&this.$route.params.type?l()(d.a).includes(this.$route.params.type)?(this.tabModel=this.$route.params.type,this.$router.push("/"+this.$route.params.type+"/"+this.$route.params.id)):(this.tabModel="channels",this.$router.push("/channels")):(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0]))):this.token||t?(t&&this.setToken(t),"/"===this.$route.path?(this.tabModel=this.tabsByGroup[0],this.$router.push("/"+this.tabsByGroup[0])):this.$route.meta.moduleName?(this.tabModel=this.$route.meta.moduleName,this.$router.push("/"+this.$route.meta.moduleName+(this.$route.params.id?"/"+this.$route.params.id:""))):this.$router.push(this.$route.path)):this.$router.push("/login")},components:{QLayout:c.q,QToolbar:c.H,QToolbarTitle:c.I,QBtn:c.e,QIcon:c.j,QTabs:c.F,QRouteTab:c.y,ObjectViewer:g.default,RawViewer:v.default,QItem:c.m,QItemMain:c.n,QItemTile:c.p,QItemSide:c.o,QPopover:c.v,QList:c.r,QInnerLoading:c.k,QSpinnerGears:c.C,QWindowResizeObservable:c.K}}},428:function(t,e,i){var s=i(429);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("7168201a",s,!0,{})},429:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,".header__main-toolbar{padding:1px 12px}",""])},430:function(t,e,i){var s=i(431);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("d91e3000",s,!0,{})},431:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,"@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}",""])},432:function(t,e,i){var s=i(433);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(310)("b5201010",s,!0,{})},433:function(t,e,i){e=t.exports=i(309)(!1),e.push([t.i,"@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}",""])},434:function(t,e){t.exports={name:"ToolboX",version:"0.7.16",description:"ToolboX",author:"Siarhei Buntsevich",scripts:{clean:"node build/script.clean.js",dev:"node build/script.dev.js mat flespi",dev_local:"node build/script.dev.js",build:"node build/script.build.js mat flespi",build_local:"node build/script.build.js",lint:"eslint --ext .js,.vue src",deploy:"npm run build && rm -rf deploy && mkdir deploy && cp -R dist/* misc CNAME LICENSE package.json deploy && cp README.md deploy/README.md && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://git.gurtam.net/flespi/frontend/toolbox.git && node_modules/git-directory-deploy/bin/git-directory-deploy.sh -ddeploy -bgh-pages -rhttps://github.com/flespi-software/Toolbox.git && rm -rf deploy"},dependencies:{"babel-runtime":"^6.26.0","flespi-io-js":"git+https://github.com/flespi-software/flespi-io-js.git",leaflet:"^1.3.1",mdi:"^2.1.99","quasar-extras":"0.0.8","quasar-framework":"^0.14.9",qvirtualscroll:"git+https://github.com/flespi-software/QVirtualScroll.git",vue:"^2.5.13","vue-clipboard2":"0.0.8","vue-draggable-resizable":"^1.6.1","vue-router":"^2.8.1",vuex:"^3.0.1"},devDependencies:{autoprefixer:"^6.4.0","babel-core":"^6.0.0","babel-eslint":"^7.0.0","babel-loader":"^7.1.3","babel-plugin-transform-runtime":"^6.0.0","babel-preset-es2015":"^6.0.0","babel-preset-stage-2":"^6.0.0",colors:"^1.1.2","connect-history-api-fallback":"^1.5.0","copy-webpack-plugin":"^4.5.0","css-loader":"^0.28.10","es6-promise":"^4.2.4",eslint:"^4.18.2","eslint-config-standard":"^10.2.1","eslint-friendly-formatter":"^3.0.0","eslint-loader":"^1.9.0","eslint-plugin-html":"^3.2.2","eslint-plugin-import":"^2.9.0","eslint-plugin-node":"^5.2.0","eslint-plugin-promise":"^3.5.0","eslint-plugin-standard":"^3.0.1","eventsource-polyfill":"^0.9.6",express:"^4.16.1","extract-text-webpack-plugin":"^3.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","git-directory-deploy":"^1.5.1",glob:"^7.1.2","html-webpack-plugin":"^2.30.1","http-proxy-middleware":"^0.17.0","json-loader":"^0.5.7",opn:"^5.2.0","optimize-css-assets-webpack-plugin":"^3.2.0","postcss-loader":"^1.0.0","progress-bar-webpack-plugin":"^1.11.0","purify-css":"^1.2.6",shelljs:"^0.7.0",stylus:"^0.54.5","stylus-loader":"^3.0.2","sw-precache-webpack-plugin":"^0.11.4","uglify-es":"^3.3.10","url-loader":"^0.5.7","vue-loader":"^13.6.1","vue-style-loader":"^3.1.1","vue-template-compiler":"^2.5.13",webpack:"^3.11.0","webpack-dev-middleware":"^1.12.0","webpack-hot-middleware":"^2.21.2","webpack-merge":"^4.1.2"}}},435:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabModel?i("div",[i("q-layout",{ref:"layout",attrs:{view:"hHh LpR lFf","page-style":{background:"#333"},"right-class":{"bg-dark":!0}},model:{value:t.sides,callback:function(e){t.sides=e},expression:"sides"}},[t.isVisibleToolbar?i("q-toolbar",{staticClass:"header__main-toolbar",attrs:{slot:"header",color:"dark"},slot:"header"},[i("q-toolbar-title",{style:{minWidth:t.$q.platform.is.mobile?"100px":"210px"}},[i("img",{staticStyle:{height:"30px"},attrs:{src:t.$q.platform.is.mobile?"statics/toolbox_mobile.png":"statics/toolbox50.png",alt:"Track it!"}}),t._v(" "),i("sup",[t._v(t._s(t.version))])]),t._v(" "),i("q-window-resize-observable",{on:{resize:t.onResizeWindow}}),t._v(" "),t.$q.platform.is.desktop&&t.isTabsVisible?i("q-tabs",{style:{maxWidth:"calc(100% - 270px)"},attrs:{color:"dark"},model:{value:t.tabModel,callback:function(e){t.tabModel=e},expression:"tabModel"}},t._l(t.tabsByGroup,function(e,s){return i("q-route-tab",{key:s,attrs:{slot:"title",name:""+e,label:t.config[e].label,hide:"label",to:"/"+e},slot:"title"})})):t._e(),t._v(" "),t.$q.platform.is.mobile||t.$q.platform.is.desktop&&!t.isTabsVisible?i("q-btn",{staticStyle:{display:"flex","flex-wrap":"nowrap",width:"50%"},attrs:{flat:""}},[t.configByEntity?i("q-item",{staticStyle:{"padding-left":"0","padding-right":"0"}},[i("q-item-side",{staticStyle:{"min-width":"20px"},attrs:{icon:t.configByEntity.icon,color:"white"}}),t._v(" "),i("q-item-main",[i("q-item-tile",{staticClass:"ellipsis overflow-hidden",attrs:{label:""}},[t._v(t._s(t.configByEntity.label))])],1),t._v(" "),i("q-item-side",{staticStyle:{"min-width":"20px","margin-left":"10px"},attrs:{right:"",icon:"mdi-menu-down",color:"white"}})],1):t._e(),t._v(" "),i("q-popover",{ref:"popoverTab",attrs:{fit:""}},[i("q-list",{staticClass:"scroll",attrs:{link:"",separator:""}},t._l(t.tabsByGroup,function(e,s){return i("q-item",{key:s,attrs:{to:"/"+e}},[i("q-item",{staticStyle:{padding:"0"},on:{click:function(i){t.tabModel=e,t.$refs.popoverTab.close()}}},[i("q-item-side",{attrs:{icon:t.config[e].icon}}),t._v(" "),i("q-item-main",[i("q-item-tile",{attrs:{label:""}},[t._v(t._s(e))])],1)],1)],1)}))],1)],1):t._e(),t._v(" "),i("q-btn",{attrs:{small:"",flat:"",round:"",icon:"mdi-settings"},on:{click:t.settingsHandler}}),t._v(" "),i("q-btn",{staticClass:"within-iframe-hide",attrs:{small:"",flat:"",round:"",icon:"mdi-exit-to-app"},on:{click:t.confirmExitHandler}})],1):t._e(),t._v(" "),Object.keys(t.currentMessage).length?i("object-viewer",{attrs:{slot:"right",object:t.currentMessage},on:{close:t.hideRightHandler},slot:"right"}):t._e(),t._v(" "),i("raw-viewer",{ref:"rawViewer",attrs:{config:t.rawConfig,inverted:""}}),t._v(" "),t.configByEntity?i("router-view",{ref:"main",attrs:{limit:t.limit,isCustomer:t.isCustomer,isLoading:t.loadingFlag,isVisibleToolbar:t.isVisibleToolbar,config:t.configByEntity},on:{"view-data":t.viewDataHandler,"view-data-hide":function(e){t.$refs.layout.hideRight(),t.currentMessage={}},"view-log-message":t.viewLogMessagesHandler}}):t._e()],1),t._v(" "),i("q-inner-loading",{staticStyle:{"z-index":"2001"},attrs:{visible:t.loadingFlag,dark:""}},[i("q-spinner-gears",{attrs:{size:"100px",color:"white"}})],1)],1):t._e()},a=[],r={render:s,staticRenderFns:a};e.a=r}});