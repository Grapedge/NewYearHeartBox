(this["webpackJsonpheart-box"]=this["webpackJsonpheart-box"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/back-btn.6ede6a0b.png"},,,,,function(e,t,n){e.exports=n.p+"static/media/meteor.f635af1a.png"},,,function(e,t,n){e.exports=n.p+"static/media/box.7585be2a.png"},function(e,t,n){e.exports=n.p+"static/media/box_open.41631041.png"},function(e,t,n){e.exports=n.p+"static/media/listen.2eabb05c.png"},function(e,t,n){e.exports=n.p+"static/media/speak.8f57d86c.png"},function(e,t,n){e.exports=n.p+"static/media/normal-btn.74f9828b.png"},function(e,t,n){e.exports=n.p+"static/media/secret-btn.15ed08bd.png"},function(e,t,n){e.exports=n.p+"static/media/see.fac6e153.png"},function(e,t,n){e.exports=n.p+"static/media/submit.015a82dd.png"},function(e,t,n){e.exports=n.p+"static/media/desc.b59ccc40.png"},function(e,t,n){e.exports=n.p+"static/media/desc-check.a2143cff.png"},,,,,function(e,t,n){e.exports=n.p+"static/media/cloud.9d855979.png"},function(e,t,n){e.exports=n.p+"static/media/cloud_dark.50a129df.png"},function(e,t,n){e.exports=n.p+"static/media/star.7f649c3e.png"},function(e,t,n){e.exports=n.p+"static/media/moon.8cf6cae2.png"},function(e,t,n){e.exports=n.p+"static/media/sun.35b61d27.png"},,,,,,,function(e,t,n){e.exports=n(62)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(44),s=n.n(c),o=(n(52),n(2)),u=n.n(o),i=n(4),l=n(5),p=n(33),f=n(63),m=n(19),d=n.n(m),b=function(){var e=0,t=function(){return{xyz:[window.innerWidth+500+1e3*Math.random(),300+-600*Math.random(),-360*Math.random()/window.innerWidth*400],key:"meteors-".concat(e++)}},n=function(e){var t=1e3*Math.random()+200;return[0-t,.7*(e[1]+t)+(200-e[2])/200,e[2]]};return Object(p.b)(new Array(20).fill(0).map((function(){return t()})),(function(e){return e.key}),{from:function(e){return{xyz:e.xyz}},enter:function(e){return function(){var r=Object(i.a)(u.a.mark((function r(a){return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,a({xyz:n(e.xyz),config:{duration:3*e.xyz[2]*e.xyz[2]/8+1e4}});case 3:return r.next=5,a({xyz:t().xyz,config:{duration:1}});case 5:r.next=0;break;case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}).map((function(e){var t=e.props,n=e.key;return a.a.createElement(f.a.img,{key:n,style:{transform:t.xyz.interpolate((function(e,t,n){return"perspective(150px) translate3d(".concat(e,"px, ").concat(t,"px, ").concat(n,"px)")}))},src:d.a,className:"meteor"})}))},x=n(17);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=Object(p.a)({from:{opacity:e.start},to:function(){var t=Object(i.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n({opacity:e.end});case 3:return t.next=5,n({opacity:e.start});case 5:t.next=0;break;case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),config:{duration:e.duration}});return a.a.createElement(f.a.img,{src:e.cloudImg,alt:"CloudDark",className:"cloud",style:g({},t,{},e.style)})},y=(n(58),n(22)),k=n.n(y),O=n(23),v=n.n(O),j=a.a.createContext({push:function(){return null},back:function(){return null},path:function(){return""}}),E=function(e){var t=e.config,n=e.defaultPage,c=Object(r.useState)(n),s=Object(l.a)(c,2),o=s[0],u=s[1];var i=Object(r.useState)(new function(e){var t=this;this.history=[e],this.params={},this.back=function(){this.history.length>1&&(this.history.pop(),u(this.path()))},this.push=function(e){this.history.push(e),u(this.path())},this.reset=function(){return t.history=[e]},this.path=function(){return t.history[t.history.length-1]}}(n)),p=Object(l.a)(i,1)[0];return a.a.createElement(j.Provider,{value:p},t[o],a.a.createElement("div",{style:{position:"absolute",top:"0",left:"0",color:"white"}},"DEBUG: ",o))};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=e.from,n=e.to,r=e.duration,c=e.delay,s=Object(p.a)({from:{opacity:t},to:{opacity:n},delay:c||0,config:{duration:r||1e3}});return a.a.createElement(f.a.div,Object.assign({},e,{style:D({},e.style,{},s)}),e.children)}var P=function(e){return new Promise((function(t){setTimeout(t,e)}))},S="http://39.96.42.33:8080",I={fadeDuration:300,openBoxDuration:2500,cloudFadeTime:3e3,wordsFadeDuration:400,defaultHeartWords:"\u4f60\u77e5\u9053\u5417\n\u4f60\u5c06\u4f1a\u542c\u5230\n\u4e00\u4e2a\u5728\u8de8\u5e74\u591c\n\u5e0c\u671b\u4f60\u5e78\u798f\u7684\u4eba\nta\u7684\u5fc3\u58f0",request:{readBox:"".concat(S,"/r_box"),pushBox:"".concat(S,"/w_box"),readSecret:"".concat(S,"/r_secret"),pushSecret:"".concat(S,"/w_secret")},text:{isPC:"\u8bf7\u4f7f\u7528\u624b\u673a\u8bbf\u95ee",pcDesc:" \u201c\u5c71\u4e1c\u5927\u5b66\u5b66\u751f\u5728\u7ebf\u201d\u7f51\u7ad9\u662f\u5728\u5c71\u4e1c\u5927\u5b66\u515a\u59d4\u5b66\u751f\u5de5\u4f5c\u90e8\u9886\u5bfc\u4e0b\uff0c\u7531\u5b66\u751f\u81ea\u4e3b\u8bbe\u8ba1\u3001\u8fd0\u884c\u548c\u7ba1\u7406\u7684\u5927\u578b\u601d\u653f\u7c7b\u5b66\u751f\u7f51\u7ad9\uff0c\u662f\u5c71\u4e1c\u5927\u5b66\u201c\u56fd\u5bb6\u5927\u5b66\u751f\u6587\u5316\u7d20\u8d28\u6559\u80b2\u57fa\u5730\u201d\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5bf9\u6821\u56ed\u6587\u660e\u5efa\u8bbe\u8d77\u5230\u4e86\u79ef\u6781\u7684\u63a8\u52a8\u4f5c\u7528\uff0c\u5728\u5c71\u4e1c\u5927\u5b66\u4e43\u81f3\u5168\u56fd\u9ad8\u6821\u4e2d\u4ea7\u751f\u4e86\u6df1\u8fdc\u7684\u5f71\u54cd\uff0c\u662f\u56fd\u5185\u4e00\u6d41\u7684\u9ad8\u6821\u5b66\u751f\u7f51\u7ad9\u3002",pushBox:"\u201c\u5494\u5566\u201d\uff0c\u4f60\u7684\u5c0f\u76d2\u5b50\u5df2\u7ecf\u5173\u4e0a\u4e86\u3002\u5b83\u5c06\u88ab\u6295\u5165\u79d8\u5bc6\u6cb3\u5e8a\uff0c\u88ab\u968f\u673a\u4e00\u4e2a\u964c\u751f\u4eba\u635e\u8d77\u3002",pushSecret:"\u201c\u5494\u5566\u201d\uff0c\u4f60\u7684\u5c0f\u76d2\u5b50\u5df2\u7ecf\u9501\u4e0a\u4e86\u3002\u5c06\u4f60\u7684\u5bc6\u7801\u544a\u8bc9\u6536\u4fe1\u4eba\uff0c\u8f93\u5165\u5bc6\u7801\uff0cta\u5c06\u6253\u5f00\u4f60\u7684\u795e\u79d8\u76d2\u5b50\u3002\u5bc6\u7801\uff1a",pushFailed:"\u76d2\u5b50\u4e0d\u5c0f\u5fc3\u843d\u8fdb\u5176\u4ed6\u7684\u6cb3\u5e8a\u4e86\uff0c\u91cd\u65b0\u8bd5\u8bd5\u5427~",networkError:"\u7f51\u7edc\u6709\u4e00\u70b9\u95ee\u9898\u5462\uff0c\u91cd\u65b0\u5237\u65b0\u4e00\u4e0b\u5427~",guide:"\u8fd9\u662f\u4e00\u4e2a\u5728\u65f6\u95f4\u548c\u7a7a\u95f4\u4e2d\u6c38\u5b58\u7684\u76d2\u5b50\uff0c\u662f\u53ea\u6709\u4f60\u77e5\u9053\u7684\u65f6\u5149\u80f6\u56ca\u3002\n\u4f60\u5fc3\u91cc\u662f\u4e0d\u662f\u4e00\u76f4\u6709\u4e00\u6bb5\u60f3\u8bf4\u51fa\u7684\u8bdd\uff0c\u88c5\u5728\u4e00\u4e2a\u4e0a\u9501\u7684\u76d2\u5b50\u91cc\uff0c\u6ca1\u6709\u9047\u5230\u5408\u9002\u7684\u673a\u9047\uff0c\u5c06\u5b83\u5e26\u5230\u4e16\u4e0a\u6765\uff1f\u70b9\u51fb\u5de6\u4e0b\u89d2\u3010\u8bf4\u3011\uff0c\u5c06\u8bdd\u8bed\u4ece\u4f60\u5fc3\u91cc\u7684\u76d2\u5b50\u62ff\u51fa\uff0c\u653e\u8fdb\u79d8\u5bc6\u6cb3\u5e8a\u91cc\u7684\u76d2\u5b50\uff0c\u5bc4\u7ed9\u6ce8\u5b9a\u7684\u90a3\u4e2a\u4eba\u3002\n\u4f60\u662f\u6155\u540d\u800c\u6765\uff0c\u624b\u4e0a\u6525\u7740\u4e00\u628a\u79d8\u94a5\u5417\uff1f\u6216\u8005\u53ea\u662f\u4e00\u4e2a\u6d41\u6d6a\u8005\uff0c\u60f3\u5728\u6cb3\u5e8a\u4e0a\u6ca1\u6709\u4e0a\u9501\u7684\u76d2\u5b50\u91cc\u627e\u5230\u52a8\u4eba\u7684\u8bdd\u8bed\uff1f\u70b9\u51fb\u53f3\u4e0b\u89d2\u3010\u542c\u3011\uff0c\u6211\u4eec\u5c06\u628a\u6ce8\u5b9a\u662f\u4f60\u7684\u76d2\u5b50\uff0c\u9001\u5230\u4f60\u7684\u8033\u8fb9\u3002",inputWords:"\u76d2\u5b50\u91cc\u5c0f\u4e8e5\u4e2a\u5b57\u7684\u8bdd\uff0c\u4e0d\u80fd\u88ab\u4eba\u635e\u8d77\u54e6~",wordsMaxLength:"\u76d2\u5b50\u91cc\u5927\u4e8e500\u4e2a\u5b57\u7684\u8bdd\uff0c\u4e0d\u80fd\u88ab\u4eba\u635e\u8d77\u54e6~",passwordRepeat:"\u540c\u6837\u7684\u79d8\u94a5\u5df2\u7ecf\u7ed9\u8fc7\u5176\u4ed6\u4eba\u5566\uff0c\u53e6\u5916\u9009\u4e00\u628a\u5427~",inputPassword:"\u4f60\u8fd8\u6ca1\u6709\u5b9a\u5236\u79d8\u94a5~",passwordMaxLength:"\u79d8\u94a5\u592a\u957f\u5566\uff0c\u6ca1\u6709\u4e0e\u4e4b\u5339\u914d\u7684\u9501\u82af\u5594\u3002\u5c0f\u4e8e20\u4f4d\u7684\u79d8\u94a5\u624d\u6709\u5339\u914d\u7684\u9501\u82af~",passwordError:"\u79d8\u94a5\u662f\u4e0d\u662f\u62ff\u9519\u5566\uff1f\u91cd\u65b0\u8bd5\u8bd5\u5427\u3002",readFailed:"\u76d2\u5b50\u4e0d\u5c0f\u5fc3\u843d\u8fdb\u5176\u4ed6\u7684\u6cb3\u5e8a\u4e86\uff0c\u91cd\u65b0\u8bd5\u8bd5\u5427~"}},B=function(e){var t=Object(r.useContext)(j),n=Object(r.useState)(!1),c=Object(l.a)(n,2),s=c[0],o=c[1],p=I.openBoxDuration,f=function(){var n=Object(i.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!s){n.next=2;break}return n.abrupt("return");case 2:return o(!0),n.next=5,e.onOpenBox();case 5:return n.next=7,P(500+p);case 7:t.push("home");case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return a.a.createElement(C,{from:1,to:s?0:1,delay:p+500,duration:p},a.a.createElement("img",{src:s?v.a:k.a,alt:"Box",className:"box",onClick:f}))},z=(n(59),function(e){return a.a.createElement("div",Object.assign({},e,{className:"cnt-box ".concat(e.className||"")}),a.a.createElement("div",{className:"cnt",style:{textAlign:e.textAlign||"left"}},e.children))}),F=n(24),_=n.n(F),W=n(25),M=n.n(W),A=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(j),o=function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return c(!0),e.next=5,P(I.fadeDuration);case 5:s.params.func=t,s.push("switch-box");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(C,{from:0,to:n?0:1,className:"cntr full-screen",duration:I.fadeDuration},a.a.createElement("div",{className:"size-auto cntr",style:{alignItems:"space-around"}},a.a.createElement(z,null,I.text.guide)),a.a.createElement("div",{className:"btn-cntr"},a.a.createElement("img",{src:M.a,alt:"\u8bf4",onClick:function(){return o("speak")},className:"img-btn"}),a.a.createElement("img",{src:_.a,alt:"\u542c",onClick:function(){return o("listen")},className:"img-btn"})))},L=n(14),R=n.n(L),q=n(26),T=n.n(q),U=n(27),H=n.n(U),J=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(j),o=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,P(I.fadeDuration);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o();case 4:r=s.params.func,s.params.type=t,"normal"===t?s.push(r):"listen"===r?s.push("password"):s.push(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,o();case 4:s.back();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(C,{from:0,to:n?0:1,className:"cntr full-screen",style:{alignItems:"center"},duration:I.fadeDuration},a.a.createElement("div",{className:"btn-cntr",style:{justifyContent:"center"}},a.a.createElement("img",{src:T.a,alt:"\u5c0f\u76d2\u5b50",onClick:function(){return p("normal")},className:"box-btn mr"}),a.a.createElement("img",{src:H.a,alt:"\u795e\u79d8\u76d2\u5b50",onClick:function(){return p("secret")},className:"box-btn ml"})),a.a.createElement("img",{src:R.a,alt:"\u8fd4\u56de",onClick:f,className:"img-btn"}))},G=n(28),V=n.n(G),$=function(){var e=Object(r.useContext)(j),t=e.params,n=t.type,c=t.secretWords,s=Object(r.useState)("secret"===n?c||"":I.defaultHeartWords),o=Object(l.a)(s,2),p=o[0],f=o[1],m=Object(r.useState)("center"),d=Object(l.a)(m,2),b=d[0],x=d[1],h=Object(r.useState)(!1),g=Object(l.a)(h,2),w=g[0],y=g[1],k=Object(r.useState)(!1),O=Object(l.a)(k,2),v=O[0],E=O[1],N=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,P(I.fadeDuration);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!v){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,N();case 4:e.back(),"secret"===e.params.type&&e.back();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=Object(r.useState)(!1),B=Object(l.a)(S,2),F=B[0],_=B[1],W=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=2;break}return e.abrupt("return");case 2:return x("left"),e.prev=3,_(!0),f("loading..."),e.next=8,fetch(I.request.readBox);case 8:return t=e.sent,e.next=11,t.json();case 11:return n=e.sent,y(!0),e.next=15,P(I.wordsFadeDuration);case 15:return f(n.data.box_message),y(!1),e.next=19,P(I.wordsFadeDuration);case 19:e.next=26;break;case 21:e.prev=21,e.t0=e.catch(3),alert(I.text.networkError),console.error(e.t0),_(!1);case 26:_(!1);case 27:case"end":return e.stop()}}),e,null,[[3,21]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(C,{from:0,to:v?0:1,className:"cntr full-screen",style:{alignItems:"center"},duration:I.fadeDuration},a.a.createElement(z,{style:{width:"70%",height:"30%"},textAlign:b},a.a.createElement(C,{from:1,to:w?0:1,duration:I.wordsFadeDuration},p)),"secret"===n?a.a.createElement("br",null):a.a.createElement("img",{src:V.a,alt:"\u8ba9\u6211\u5eb7\u5eb7",onClick:W,className:"img-btn mb mt"}),a.a.createElement("img",{src:R.a,alt:"\u8fd4\u56de",onClick:D,className:"img-btn"}))},K=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s="",o=Object(r.useContext)(j),p=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,P(I.fadeDuration);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,p();case 4:o.back();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=o.params.func,d=Object(r.useState)(!1),b=Object(l.a)(d,2),x=b[0],h=b[1],g=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=2;break}return e.abrupt("return");case 2:if(e.prev=2,h(!0),0!==s.length){e.next=8;break}alert(I.text.inputPassword),e.next=54;break;case 8:if(!(s.length>20)){e.next=12;break}alert(I.text.passwordMaxLength),e.next=54;break;case 12:if("listen"!==m){e.next=34;break}return e.next=15,fetch("".concat(I.request.readSecret,"?box_password=").concat(s));case 15:return t=e.sent,e.next=18,t.json();case 18:if(n=e.sent,h(!1),-1!==n.code){e.next=24;break}alert(I.text.readFailed),e.next=32;break;case 24:if(-2!==n.code){e.next=28;break}alert(I.text.passwordError),e.next=32;break;case 28:return o.params.secretWords=n.data.box_message,e.next=31,p();case 31:o.push(m);case 32:e.next=54;break;case 34:return r=o.params["words-secret"],e.next=37,fetch("".concat(I.request.pushSecret,"?box_message=").concat(encodeURIComponent(r),"&box_password=").concat(encodeURIComponent(s)),{method:"post"});case 37:return a=e.sent,e.next=40,a.json();case 40:if(c=e.sent,h(!1),-1!==c.code){e.next=46;break}alert(I.text.pushFailed),e.next=54;break;case 46:if(-2!==c.code){e.next=50;break}alert(I.text.passwordRepeat),e.next=54;break;case 50:return alert(I.text.pushSecret+s),e.next=53,p();case 53:o.push("check");case 54:e.next=61;break;case 56:e.prev=56,e.t0=e.catch(2),alert(I.text.networkError),console.error(e.t0),h(!1);case 61:case"end":return e.stop()}}),e,null,[[2,56]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(C,{from:0,to:n?0:1,className:"cntr full-screen",style:{alignItems:"center"},duration:I.fadeDuration},a.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},className:"mb"},a.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u5bc6\u7801",className:"input-password",maxLength:20,onChange:function(e){return s=e.target.value}}),a.a.createElement("span",{className:"ml",style:{color:"white"},onClick:g},"\u63d0 \u4ea4")),a.a.createElement("br",null),a.a.createElement("img",{src:R.a,alt:"\u8fd4\u56de",onClick:f,className:"img-btn"}))},Q=n(29),X=n.n(Q),Y=n(30),Z=n.n(Y),ee=n(31),te=n.n(ee),ne=function(e){var t=Object(r.useContext)(j),n=t.params.type,c=Object(r.useState)(!1),s=Object(l.a)(c,2),o=s[0],p=s[1],f=e.check,m=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,P(I.fadeDuration);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,m();case 4:f?(t.reset(),t.params["words-"+n]="",t.push("home")):t.back();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=Object(r.useState)(!1),x=Object(l.a)(b,2),h=x[0],g=x[1],w=function(){var e=Object(i.a)(u.a.mark((function e(){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.params["words-"+n].length){e.next=5;break}return alert(I.text.inputWords),e.abrupt("return");case 5:if(!(t.params["words-"+n].length>500)){e.next=8;break}return alert(I.text.wordsMaxLength),e.abrupt("return");case 8:if(!h){e.next=10;break}return e.abrupt("return");case 10:if(e.prev=10,g(!0),"normal"!==n){e.next=31;break}return e.next=15,fetch("".concat(I.request.pushBox,"?box_message=").concat(encodeURIComponent(t.params["words-"+n])),{method:"post"});case 15:return r=e.sent,e.next=18,r.json();case 18:if(0!==(a=e.sent).code){e.next=28;break}return alert(I.text.pushBox),e.next=23,m();case 23:g(!1),t.push("check"),p(!1),e.next=29;break;case 28:-1===a.code&&(g(!1),alert(I.text.pushFailed));case 29:e.next=35;break;case 31:return e.next=33,m();case 33:g(!1),t.push("password");case 35:e.next=42;break;case 37:e.prev=37,e.t0=e.catch(10),alert(I.text.networkError),console.error(e.t0),g(!1);case 42:case"end":return e.stop()}}),e,null,[[10,37]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(C,{from:0,to:o?0:1,className:"cntr full-screen",style:{alignItems:"center"},duration:I.fadeDuration},a.a.createElement("div",{className:"size-auto",style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"auto"}},a.a.createElement("img",{src:f?te.a:Z.a,alt:"\u8bf4\u51fa\u4f60\u60f3\u5bf9ta\u8bf4\u7684\u8bdd",style:{width:"80%"},className:"mb"}),a.a.createElement("br",null),a.a.createElement(z,{style:{width:"70%",height:"30vh"}},a.a.createElement("textarea",{className:"editor",maxLength:"500",defaultValue:t.params["words-"+n]||"",onChange:function(e){return t.params["words-"+n]=e.target.value}})),a.a.createElement("br",null),a.a.createElement("img",{src:R.a,alt:"\u8fd4\u56de",className:"img-btn",onClick:d})),f?a.a.createElement("br",null):a.a.createElement("img",{src:X.a,alt:"\u63d0\u4ea4",className:"img-btn ".concat(window.innerHeight<1024&&"mb"),onClick:w}))},re=n(46),ae=n(36),ce=n.n(ae),se=n(37),oe=n.n(se),ue=n(38),ie=n.n(ue),le=n(39),pe=n.n(le),fe=n(40),me=n.n(fe),de=[ce.a,oe.a,ie.a,pe.a,me.a,R.a,v.a,k.a,te.a,Z.a,_.a,d.a,T.a,H.a,V.a,M.a,X.a],be=function(){var e=function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],n=0;n<t.length;n++)if(e.indexOf(t[n])>0)return!0;return!1}(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1],o=I.openBoxDuration,m=Object(p.a)({from:{background:"linear-gradient(0deg, #202032, #3f3e50)"},to:{background:c?"linear-gradient(0deg, #191a4f, #3a4887)":"linear-gradient(0deg, #202032, #3f3e50)"},config:{duration:o}});if(!e)return alert(I.text.isPC),a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,I.text.isPC),a.a.createElement("p",null,I.text.pcDesc));var d=[{cloudImg:ce.a,start:1,end:.5,duration:I.cloudFadeTime,style:{zIndex:-998},key:"light"},{cloudImg:oe.a,start:c?.25:.1,end:c?1:.3,duration:I.cloudFadeTime,style:{zIndex:-1e3},key:"dark"}],x={index:a.a.createElement(B,{onOpenBox:Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,P(o);case 3:case"end":return e.stop()}}),e)})))}),home:a.a.createElement(A,null),"switch-box":a.a.createElement(J,null),listen:a.a.createElement($,null),speak:a.a.createElement(ne,null),password:a.a.createElement(K,null),check:a.a.createElement(ne,{check:!0})};return a.a.createElement(re.a,{loadingIndicator:a.a.createElement("div",{className:"pre-loading"},"Loading..."),images:de,autoResolveDelay:5e3,onError:function(){alert(I.text.loadAssetError)}},a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{config:x,defaultPage:"index"}),a.a.createElement(f.a.div,{className:"bg",style:m},a.a.createElement("img",{className:"moon",src:pe.a,alt:"moon"}),a.a.createElement(C,{from:0,to:c?.8:0,duration:o,style:{position:"absoulte",width:"100%",height:"100%"}},a.a.createElement("img",{className:"moon",src:me.a,alt:"sun"})),a.a.createElement(b,null),a.a.createElement("img",{src:ie.a,alt:"star",className:"star"}),d.map((function(e){return a.a.createElement(w,e)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[47,1,2]]]);
//# sourceMappingURL=main.4c93cde3.chunk.js.map