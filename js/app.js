webpackJsonp([16],{102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(53),i=n(5),o=n(103),r=n(105),a=n(106);i.default.use(o.a),i.default.use(s.a);var d={token:"",server:window._SERVER,items:[],offline:!1,isCustomer:!1};t.default=new s.a.Store({state:d,actions:r.a,mutations:a.a})},104:function(e,t){},105:function(e,t,n){"use strict";var s=n(44),i=n.n(s),o=n(45),r=n.n(o),a=n(5),d=function(){var e=r()(i.a.mark(function e(t,n){var s,o,r,d,c=t.state,l=t.commit;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=31;break}s="",o={},e.t0=n,e.next="devices"===e.t0?5:"channels"===e.t0?8:"streams"===e.t0?11:"modems"===e.t0?14:17;break;case 5:return s=c.server+"/registry/devices/all",o={fields:"id,name,ident"},e.abrupt("break",17);case 8:return s=c.server+"/gw/channels/all",o={fields:"id,name,uri,protocol_name"},e.abrupt("break",17);case 11:return s=c.server+"/registry/streams/all",o={fields:"id,name,configuration"},e.abrupt("break",17);case 14:return s=c.server+"/gw/modems/all",o={fields:"id,name,configuration"},e.abrupt("break",17);case 17:if(!c.token){e.next=31;break}return e.prev=18,e.next=21,a.default.http.get(s,{params:o});case 21:return r=e.sent,e.next=24,r.json();case 24:d=e.sent,l("setItems",d.result),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(18),l("reqFailed",e.t1);case 31:case"end":return e.stop()}},e,this,[[18,28]])}));return function(t,n){return e.apply(this,arguments)}}(),c=function(){var e=r()(i.a.mark(function e(t){var n,s=(t.state,t.commit);return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.http.get("/statics/icons/favicon-16x16.png?_="+(new Date).getTime());case 3:n=e.sent,200===n.status&&s("setOfflineFlag",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=r()(i.a.mark(function e(t){var n,s,o=t.state;t.commit;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.default.http.get(o.server+"/platform/customer");case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,s.result&&s.result.length&&(o.isCustomer=!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),o.isCustomer=!1;case 14:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}();t.a={getItems:d,checkConnection:c,getCustomer:l}},106:function(e,t,n){"use strict";function s(e){}function i(e,t){switch(t.status){case 0:r(e,!0),l.default.set(e,"token","");break;case 401:d(e)}}function o(e,t){l.default.set(e,"items",t)}function r(e,t){l.default.set(e,"offline",t)}function a(e,t){var n=t.replace("FlespiToken ","");t&&n.match(/^[a-z0-9]+$/i)?(l.default.http.headers.common.Authorization="FlespiToken "+n,c.d.set("X-Flespi-Token",n)):(n="",d(e)),l.default.set(e,"token",n)}function d(e){var t=c.b.get("X-Flespi-Token"),n=c.d.get.item("X-Flespi-Token");t&&n&&t===n&&c.b.remove("X-Flespi-Token"),c.d.remove("X-Flespi-Token"),l.default.http.headers.common.Authorization="",l.default.set(e,"token","")}var c=n(23),l=n(5);t.a={reqStart:s,setItems:o,reqFailed:i,setToken:a,clearToken:d,setOfflineFlag:r}},108:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t,n){"use strict";function s(e){n(113)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(114),o=n(115),r=n(40),a=s,d=r(i.a,o.a,!1,a,null,null);t.default=d.exports},113:function(e,t){},114:function(e,t,n){"use strict";t.a={}},115:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},i=[],o={render:s,staticRenderFns:i};t.a=o},54:function(e,t){e.exports={channels:{label:"Channels",icon:"merge_type",logs:{vuexModuleName:"channelsLogs",cols:[{name:"timestamp",width:100,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"received",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"host",width:150,display:!0,description:"Connected device's address (source) or IP address from which HTTP request was received (host)"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"channelsMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right",needShowDate:!1},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},devices:{label:"Devices",icon:"mdi-developer-board",logs:{vuexModuleName:"devicesLogs",cols:[{name:"timestamp",width:100,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:400,display:!0,description:"Log event code and description"},{name:"name",title:"setting",width:80,display:!0,description:"Setting name"},{name:"ident",width:150,display:!0,description:"Connected device's identification string"},{name:"msgs",title:"messages",width:85,display:!0,description:"Number of messages received"},{name:"recv",title:"recived",width:85,display:!0,description:"Number of bytes received"},{name:"send",title:"sent",width:85,display:!0,description:"Number of bytes sent"},{name:"source",width:150,display:!0,description:"Connected device's address"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"},{name:"duration",width:85,display:!0,description:"Connection duration in seconds"},{name:"transport",width:85,display:!0,description:"Connected device's transport: tcp, udp, http etc"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}},messages:{vuexModuleName:"devicesMessages",actions:[{icon:"mdi-content-copy",label:"copy",classes:"",type:"copy"}],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},streams:{label:"Streams",icon:"mdi-call-split",logs:{vuexModuleName:"streamsLogs",cols:[{name:"timestamp",width:100,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"messages_count",title:"messages",width:100,display:!0,description:"Number of messages has sent"},{name:"host",width:150,display:!0,description:"IP address from which HTTP request was received"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}},modems:{label:"Modems",icon:"router",logs:{vuexModuleName:"modemsLogs",cols:[{name:"timestamp",width:100,display:!0,description:"Log event time"},{name:"event_code",title:"event",width:450,display:!0,description:"Log event code and description"},{name:"source_addr",width:100,display:!0,description:"SMS source address"},{name:"dest_addr",width:100,display:!0,description:"SMS destination address"},{name:"text",width:150,display:!0,description:"textual SMS contents"},{name:"hex",width:150,display:!0,description:"hex representation of binary SMS contents"}],actions:[],viewConfig:{needShowFilter:!0,needShowMode:!1,needShowPageScroll:"right left",needShowDate:!0,needShowEtc:!0},theme:{color:"white",bgColor:"dark",contentInverted:!0,controlsInverted:!0}}}}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(5),i=n(23),o=n(61),r=n(93),a=n.n(r),d=n(109),c=(n.n(d),n(111));n.n(c);n(56),window._SERVER="https://flespi.io",-1!==window.location.host.indexOf("localhost:9004")&&-1!==window.location.host.indexOf("localhost:9005")&&(window._SERVER="");var l=n(102).default;s.default.use(a.a),s.default.config.productionTip=!1,s.default.use(i.J),n(107),new s.default({el:"#q-app",router:o.a,store:l,render:function(e){return e(n(112).default)}})},56:function(e,t){},61:function(e,t,n){"use strict";function s(e){return function(){return n(68)("./"+e+".vue")}}var i=n(41),o=n.n(i),r=n(5),a=n(67),d=n(54),c=n.n(d);r.default.use(a.a),t.a=new a.a({routes:[{path:"/",component:s("Index"),children:function(e){return o()(e).reduce(function(e,t){return e.push({path:t,component:s(t+"/Index")}),e.push({path:t+"/:id",component:s(t+"/Index")}),e},[])}(c.a)},{path:"/token/:token/type/:type/id/:id",component:s("Index")},{path:"/token/:token/type/:type/id/:id/fullscreen/:fullscreen",component:s("Index")},{path:"/login",component:s("Login")},{path:"/login/:token",component:s("Login")}]})},68:function(e,t,n){function s(e){var t=i[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"./Index.vue":[127,7],"./JsonTree.vue":[124,14],"./Login.vue":[128,10],"./ObjectViewer.vue":[122,13],"./RawViewer.vue":[123,12],"./channels/Index.vue":[129,0],"./channels/messages/Index.vue":[125,2],"./channels/messages/MessagesListItem.vue":[120,9],"./devices/Index.vue":[130,1],"./devices/messages/Index.vue":[126,3],"./devices/messages/MessagesListItem.vue":[121,8],"./logs/Index.vue":[119,6],"./logs/LogsListItem.vue":[118,11],"./modems/Index.vue":[131,5],"./streams/Index.vue":[132,4]};s.keys=function(){return Object.keys(i)},s.id=68,e.exports=s}},[55]);