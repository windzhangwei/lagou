module.exports=function(t){var e={},n={0:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{1:"90679e96919f5399ba7a",2:"c76dabbe014e2733b1ed",3:"63d72e1a8776bc1eb173",4:"bb11ee1eacf7f0d9bc3d",5:"c80939d5d80570ceffd4",6:"2958534d8619e93b9f36",7:"f3f222902e606bc96d5d"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=16)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,h){var d,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=d):o&&(d=h?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),d)if(f.functional){f._injectStyles=d;var m=f.render;f.render=function(t,e){return d.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,d):[d]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=require("vue-router")},function(t,e,n){var content=n(20);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(10).default;t.exports.__inject__=function(t){r("72daabed",content,!0,t)}},function(t,e,n){var content=n(22);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(10).default;t.exports.__inject__=function(t){r("3191d5ad",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var r=n(14);const o=n.n(r).a.create({baseURL:"http://realworld.api.fed.lagounews.com"});e.a=({store:t})=>{o.interceptors.request.use((function(e){const{user:n}=t.state;return n&&n.token&&(e.headers.Authorization="Token "+n.token),e}),(function(t){return Promise.reject(t)}))}},function(t,e){t.exports=require("vuex")},function(t,e){t.exports=require("vue-client-only")},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);r&&o[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("dayjs")},function(t,e,n){t.exports=n(25)},function(t,e,n){"use strict";n.r(e),e.default=function({store:t,redirect:e}){if(!t.state.user)return e("/login")}},function(t,e,n){"use strict";n.r(e),e.default=function({store:t,redirect:e}){if(t.state.user)return e("/")}},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(9)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(e=n(9)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));const r=n(24),o=()=>({user:null}),c={setUser(t,data){t.user=data}},l={nuxtServerInit({commit:t},{req:e}){let n=null;if(e.headers.cookie){const t=r.parse(e.headers.cookie);try{n=JSON.parse(t.user)}catch(t){}}t("setUser",n)}}},function(t,e){t.exports=require("cookieparser")},function(t,e,n){"use strict";n.r(e);var r=n(11),o=n(0),c=n.n(o),l=n(12),h=n.n(l);const d={};d.authenticated=n(17),d.authenticated=d.authenticated.default||d.authenticated,d.notAuthenticated=n(18),d.notAuthenticated=d.notAuthenticated.default||d.notAuthenticated;var f=d;function m(t){return t.then(t=>t.default||t)}function x(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function y(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t[n]).map(o=>(e&&e.push(r),t[n][o]))))}function v(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=x(t),"function"==typeof e?e(t,n,r,o):t)))}async function _(t){if(t)return await v(t),{...t,meta:y(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function w(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:"",l}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([_(e.route),_(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function $(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():C(t[0],e).then(()=>$(t.slice(1),e))}function C(t,e){let n;return n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e),n&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function S(t,e){return function(t,e){const n=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",N(e)));return function(e,r){let path="";const data=e||{},o=(r||{}).pretty?O:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const r=data[e.name||"pathMatch"];let c;if(null==r){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(r)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!n[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?O(r,!0):o(r),!n[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],h=l[1],d=l.index;if(path+=t.slice(o,d),o=d+e.length,h){path+=h[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const $=null!=m&&null!=f&&f!==m,C="+"===_||"*"===_,S="?"===_||"*"===_,k=l[2]||c,pattern=y||v;n.push({name:x||r++,prefix:m||"",delimiter:k,optional:S,repeat:C,partial:$,asterisk:Boolean(w),pattern:pattern?T(pattern):w?".*":"[^"+E(k)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e),e)}function k(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function E(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function T(t){return t.replace(/([=!:$/()])/g,"\\$1")}function N(t){return t&&t.sensitive?"":"i"}async function P(){if(!this._fetchOnServer)return;try{await this.$options.fetch.call(this)}catch(t){this.$fetchState.error=k(t)}this.$fetchState.pending=!1,this._fetchKey=this.$ssrContext.nuxt.fetch.length;(this.$vnode.data.attrs=this.$vnode.data.attrs||{})["data-fetch-key"]=this._fetchKey,this.$ssrContext.nuxt.fetch.push(this.$fetchState.error?{_error:this.$fetchState.error}:this._data)}var R={beforeCreate(){var t;(t=this).$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length&&("function"==typeof this.$options.fetchOnServer?this._fetchOnServer=!1!==this.$options.fetchOnServer.call(this):this._fetchOnServer=!1!==this.$options.fetchOnServer,c.a.util.defineReactive(this,"$fetchState",{pending:!0,error:null,timestamp:Date.now()}),function(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}(this,"serverPrefetch",P))}},A=n(13),M=n.n(A),D=n(8),L=n.n(D),U=n(5),F=n.n(U),I=n(2),B=n.n(I);const z=()=>m(n.e(5).then(n.bind(null,30))),K=()=>{},V=B.a.prototype.push;B.a.prototype.push=function(t,e=K,n){return V.call(this,t,e,n)},c.a.use(B.a);const H={mode:"history",base:decodeURI("/"),linkActiveClass:"active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){let r=!1;const o=y(t);(o.length<2&&o.every(t=>!1!==t.options.scrollToTop)||o.some(t=>t.options.scrollToTop))&&(r={x:0,y:0}),n&&(r=n);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(r={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})},routes:[{path:"/",component:()=>m(n.e(4).then(n.bind(null,31))),children:[{path:"",component:()=>m(n.e(2).then(n.bind(null,29))),name:"home"},{path:"/login",component:z,name:"login"},{path:"/register",component:z,name:"register"},{path:"/profile/:username",component:()=>m(n.e(6).then(n.bind(null,32))),name:"profile"},{path:"/settings",component:()=>m(n.e(7).then(n.bind(null,33))),name:"settings"},{path:"/editor",component:()=>m(n.e(3).then(n.bind(null,34))),name:"editor"},{path:"/article/:slug",component:()=>m(n.e(1).then(n.bind(null,28))),name:"article"}]}],fallback:!1};var J={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){const r=e.$createElement;data.nuxtChild=!0;const o=e,c=e.$nuxt.nuxt.transitions,l=e.$nuxt.nuxt.defaultTransition;let h=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&h++,e=e.$parent;data.nuxtChildDepth=h;const d=c[h]||l,f={};X.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const m={};if(Y.forEach(t=>{"function"==typeof d[t]&&(m[t]=d[t].bind(o))}),!1===d.css){const t=m.leave;(!t||t.length<2)&&(m.leave=(e,n)=>{t&&t.call(o,e),o.$nextTick(n)})}let x=r("routerView",data);return n.keepAlive&&(x=r("keep-alive",{props:n.keepAliveProps},[x])),r("transition",{props:f,on:m},[x])}};const X=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],Y=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var W={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},G=n(1);var Q=Object(G.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(19);e.__inject__&&e.__inject__(t)}),null,"bf468686").exports,Z={name:"Nuxt",components:{NuxtChild:J,NuxtError:Q},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||S(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: "+this.errorFromNuxtError.toString()),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(Q,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},tt={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(t){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100||this.percent<=0)&&(this.skipTimerCount=1,this.reversed=!this.reversed))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var et=Object(G.a)(tt,void 0,void 0,!1,(function(t){var e=n(21);e.__inject__&&e.__inject__(t)}),null,"72777eb1").exports;const nt={_default:x(Object(G.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("Nuxt")}),[],!1,null,null,"43e525b2").exports)};var ot={render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:"",nbFetching:0}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline},isFetching(){return this.nbFetching>0}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return y(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];if(t.$options.fetch&&t.$options.fetch.length&&p.push(C(t.$options.fetch,this.context)),t.$fetch)p.push(t.$fetch());else for(const component of function t(e,n=[]){const r=e.$children||[];for(const e of r)e.$fetch?n.push(e):e.$children&&t(e,n);return n}(t.$vnode.componentInstance))p.push(component.$fetch());return t.$options.asyncData&&p.push(C(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(t),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(this.nuxt.err),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&nt["_"+t]||(t="default"),this.layoutName=t,this.layout=nt["_"+t],this.layout},loadLayout:t=>(t&&nt["_"+t]||(t="default"),Promise.resolve(nt["_"+t]))},components:{NuxtLoading:et}},it=n(7),st=n.n(it);c.a.use(st.a);let at={};at=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),function(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in "+e);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}(t,e)}(n(23),"store/index.js"),at.modules=at.modules||{};const ct=at instanceof Function?at:()=>new st.a.Store(Object.assign({strict:!1},at));var ut=n(6),lt=n(15),pt=n.n(lt);c.a.filter("date",(t,e="YYYY-MM-DD HH:mm:ss")=>pt()(t).format(e)),c.a.component(L.a.name,L.a),c.a.component(F.a.name,{...F.a,render:(t,e)=>F.a.render(t,e)}),c.a.component(J.name,J),c.a.component("NChild",J),c.a.component(Z.name,Z),c.a.use(M.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ht={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ft(t){const e=await new B.a(H),n=ct(t);n.$router=e;const r=n.registerModule;n.registerModule=(path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e));const o={head:{meta:[],link:[],style:[],script:[]},store:n,router:e,nuxt:{defaultTransition:ht,transitions:[ht],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ht,{name:t}):Object.assign({},ht,t):ht),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?k(e):null;let n=o.nuxt;return this&&(n=this.nuxt||this.$options.nuxt),n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...ot};n.app=o;const l=t?t.next:t=>o.router.push(t);let h;if(t)h=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);h=e.resolve(path).route}await w(o,{store:n,route:h,next:l,error:o.nuxt.error.bind(o),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error(`inject('${t}', value) has no value provided`);o[t="$"+t]=e,n[t]=o[t];const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof ut.a&&await Object(ut.a)(o.context,d),t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await _(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{store:n,app:o,router:e}}var mt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.config.optionMergeStrategies.serverPrefetch=c.a.config.optionMergeStrategies.created,c.a.__nuxt__fetch__mixin__||(c.a.mixin(R),c.a.__nuxt__fetch__mixin__=!0),c.a.component(mt.name,mt),c.a.component("NLink",mt),global.fetch||(global.fetch=h.a);const xt=()=>new c.a({render:t=>t("div")});const yt=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=yt(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],fetch:[],error:null,state:null,serverRendered:!0,routePath:""};const{app:e,router:n,store:r}=await ft(t),o=new c.a(e);t.nuxt.routePath=e.context.route.path,t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>C(e,{Components:m,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=r.state}},h=async()=>{const n=(Q.options||Q).layout,r="function"==typeof n?n.call(Q,e.context):n;return t.nuxt.layout=r||"default",await o.loadLayout(r),o.setLayout(r),await l(),o},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),h()),m=y(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return xt();if(t.nuxt.error)return h();let v=[];if(v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await $(v,e.context),t.redirected)return xt();if(t.nuxt.error)return h();let _=m.length?m[0].options.layout:Q.layout;if("function"==typeof _&&(_=_(e.context)),await o.loadLayout(_),t.nuxt.error)return h();if(_=o.setLayout(_),t.nuxt.layout=o.layoutName,v=[],_=x(_),_.options.middleware&&(v=v.concat(_.options.middleware)),m.forEach(t=>{t.options.middleware&&(v=v.concat(t.options.middleware))}),v=v.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await $(v,e.context),t.redirected)return xt();if(t.nuxt.error)return h();let w=!0;try{for(const t of m)if("function"==typeof t.options.validate&&(w=await t.options.validate(e.context),!w))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),h()}if(!w)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!m.length)return d();const S=await Promise.all(m.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=C(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch&&n.options.fetch.length?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=S.map(t=>t[0]||{}),t.redirected?xt():t.nuxt.error?h():(await l(),o)}},function(t,e){t.exports=require("markdown-it")}]);