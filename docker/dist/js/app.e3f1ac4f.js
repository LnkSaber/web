(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],l=0,d=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"58f54841"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("router-view")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal",router:""}},[n("el-menu-item",{attrs:{index:"/"}},[t._v("首页")]),n("el-menu-item",{attrs:{index:"/postvideo"}},[t._v("投稿页面")]),n("el-menu-item",{attrs:{index:"/about"}},[t._v("关于我们")])],1)},i=[],s={name:"NavBar"},c=s,l=n("2877"),f=Object(l["a"])(c,u,i,!1,null,"a26a82e4",null),d=f.exports,p={name:"app",components:{NavBar:d}},v=p,m=Object(l["a"])(v,o,a,!1,null,null,null),h=m.exports,b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"top"},[n("el-row",{attrs:{gutter:20}},t._l(t.videos,(function(e){return n("el-col",{key:e.id,attrs:{span:4}},[n("el-card",{staticClass:"video-card"},[n("img",{staticClass:"video-avatar"}),n("div",[n("span",{staticClass:"video-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"video-bottom bottom clearfix"}),n("span",{staticClass:"video-info"},[t._v(t._s(e.info.substring(0,40)))])])])],1)})),1)],1)])},y=[],_=n("76e5"),w={name:"home",data:function(){return{videos:[]}},methods:{load:function(){var t=this;_["a"]().then((function(e){t.videos=e.data}))}},components:{},beforeMount:function(){this.load()}},j=w,O=(n("cccb"),Object(l["a"])(j,g,y,!1,null,null,null)),x=O.exports;r["default"].use(b["a"]);var C=new b["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/postvideo",name:"PostVideo",component:function(){return n.e("about").then(n.bind(null,"43fd"))}}]}),P=n("2f62");r["default"].use(P["a"]);var k=new P["a"].Store({state:{},mutations:{},actions:{}}),E=n("5c96"),S=n.n(E);n("0fae");r["default"].use(S.a),r["default"].config.productionTip=!1,new r["default"]({router:C,store:k,render:function(t){return t(h)}}).$mount("#app")},"76e5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n("bc3a"),o=n.n(r),a=function(t){return o.a.post("/api/v1/videos",t).then((function(t){return t.data}))},u=function(){return o.a.get("/api/v1/videos").then((function(t){return t.data}))}},cccb:function(t,e,n){"use strict";var r=n("d563"),o=n.n(r);o.a},d563:function(t,e,n){}});
//# sourceMappingURL=app.e3f1ac4f.js.map