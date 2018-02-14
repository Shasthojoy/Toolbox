"use strict";var precacheConfig=[["app.9fcea246d188ccc9d5e2442fe3990db5.css","25aaec46aa9ad100b38a2fc3e28fd593"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/materialdesignicons-webfont.1eccbc4.ttf","1eccbc4c41d49fd81840aef3eaabe862"],["fonts/materialdesignicons-webfont.4b13596.woff2","4b1359677a76d07aa0526d2fddbd77b7"],["fonts/materialdesignicons-webfont.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/toolbox.1da4d62.png","1da4d62342ca95dcdb743a987cfa677a"],["index.html","58237d17e3032a457bdffd261ef20048"],["js/0.9ff9b3718cba0aea036e.js","f2a32b350d62d43b25bde3514236f76a"],["js/1.3bf8946c9ca1deed2012.js","d195ad25c38741e8794654e438f3c7af"],["js/10.e4436f6278d76635a7bf.js","168e890d2a35ffc34131fe90499df48b"],["js/11.60036644655b0ff7ac50.js","e3c511281a8ed6283e195a57d4277d29"],["js/12.618f4ee2af5151d0e194.js","d6bd715688426f7a61e0080c0a8ff67e"],["js/13.e57ef5999188e47ef54d.js","a21457d3f52cf51124cdf6061df95239"],["js/14.425ebd773a6bc004af5e.js","3d80183cfb0a654f3c49155d6ea83c0a"],["js/15.73a7d9729d49b4e2a564.js","738358c75fcda3d6de93db3c3b00392f"],["js/16.36f59f2bad96faa19420.js","bafed92df93b8e72f27133db65b30e5a"],["js/17.dd139b9caf4e521c93e9.js","bc19a81bf2e963f4bf1d148bd6d1b90e"],["js/18.7b2c587bd9a09b076293.js","155c756f24b7d50ac80ac07d2add0b8a"],["js/2.b590620f6dcaca90e58b.js","f864a03161b724d681f3b65b7cb0c041"],["js/3.a6b230ea3d8d628b4726.js","9c3503e7ca8cf9f685950cc2add4fe9e"],["js/4.1ab61873a3acc1df21e4.js","c69eab1302fb08941d7cfdf65fcdc4bd"],["js/5.79c0399380069444c70f.js","aec093f137444b2555640c0de8481661"],["js/6.d5d060fd7a26f2b2407a.js","926dc7360411a45fdfd94614e9a6e8b5"],["js/7.24e8897a9e4f20d91528.js","f9bdc2e54fad7ccb55b77b3bac00b971"],["js/8.06ddcbec73ac26c57727.js","cd64fdc79f4292ce2b69955e2d8ba5cb"],["js/9.debad5c6f7ebb66637d8.js","fd8af0e40fd909f9430c9b6bf2954228"],["js/app.js","7e5f8aa0f14dca71d300145602ed353c"],["js/manifest.js","2a3180eb59fd6f7b49bf6df948d6dba1"],["js/vendor.js","55eb17cc2e1dc1a55fe3b81053999350"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","d5da697eec032a743f6a94d6ef4470be"],["statics/icons/favicon-16x16.png","fa908e7babb7cad954beac016f56d11e"],["statics/icons/favicon-32x32.png","c3d58f5c2a54890cd4e03371aaaf1e11"],["statics/icons/icon-192x192.png","14d6cca701394318ed367e336cf50847"],["statics/icons/icon-512x512.png","823133d6375e12d5237785194dd12c74"],["statics/icons/ms-icon-144x144.png","838698af837cf35dfead7869b02ce5b8"],["statics/manifest.json","e1e0f9f6bf639012521b000d6066edfd"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/toolbox.png","1da4d62342ca95dcdb743a987cfa677a"],["statics/toolbox50.png","525061fbc60090f9b92f626b25a2a976"],["statics/toolbox_mobile.png","cf46c82e435aa040daecaf16508027a3"]],cacheName="sw-precache-v3-toolbox-cache-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});