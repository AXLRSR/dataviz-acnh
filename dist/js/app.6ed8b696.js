(function(t){function e(e){for(var a,i,s=e[0],o=e[1],l=e[2],b=0,f=[];b<s.length;b++)i=s[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"071c":function(t,e,n){"use strict";n("1704")},"0751":function(t,e,n){},"0753":function(t,e,n){"use strict";n("ba42")},"0df4":function(t,e,n){t.exports=n.p+"img/nookwallet.a1c74d9a.png"},"150b":function(t,e,n){},1704:function(t,e,n){},"1eb6":function(t,e,n){"use strict";n("cc8d")},3367:function(t,e,n){t.exports=n.p+"img/villagers.48c3b2b7.png"},"4b6b":function(t,e,n){"use strict";n("bf45")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,r,i){var s=Object(a["w"])("StatusBar"),o=Object(a["w"])("router-view");return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(s),Object(a["i"])(o)],64)}var r=n("e58a"),i=n.n(r),s=n("c90a"),o=n.n(s),l=n("62c1"),u=n.n(l),b={class:"status-bar"},f=Object(a["i"])("div",{class:"status-bar__left"},[Object(a["i"])("img",{src:i.a,alt:""}),Object(a["i"])("img",{src:o.a,alt:""})],-1),p={class:"status-bar__center"},O={key:0,class:"status-bar__time"},j=Object(a["i"])("div",{class:"status-bar__right"},[Object(a["i"])("img",{src:u.a,alt:""})],-1);function m(t,e,n,c,r,i){return Object(a["r"])(),Object(a["f"])("div",b,[f,Object(a["i"])("div",p,[this.hours?(Object(a["r"])(),Object(a["f"])("span",O,Object(a["y"])(r.hours)+":"+Object(a["y"])(r.minutes)+" "+Object(a["y"])(r.ampm),1)):Object(a["g"])("",!0)]),j])}var g={data:function(){return{hours:null,minutes:null,ampm:null}},mounted:function(){this.showTime()},methods:{showTime:function(){var t=this;setInterval((function(){var e=new Date,n=e.getHours(),a=e.getMinutes(),c=n>=12?"pm":"am";n%=12,n=n||12,a=a<10?"0"+a:a,t.hours=n,t.minutes=a,t.ampm=c}),1e3)}}};n("f55e");g.render=m;var d=g,h={components:{StatusBar:d}};n("bc12");h.render=c;var _=h,v=n("6c02"),y=n("b092"),w=n.n(y),k=n("9efa"),B=n.n(k),x=n("3367"),A=n.n(x),S=n("0df4"),T=n.n(S),L={class:"screen home"},V=Object(a["i"])("h1",null,"Welcome!",-1),E={class:"home__item",key:"fish"},P=Object(a["i"])("div",{class:"home__link__icon"},[Object(a["i"])("img",{src:w.a,alt:"Fish"})],-1),C=Object(a["i"])("span",{class:"home__link__title"},"Fish",-1),H={class:"home__item",key:"bugs"},M=Object(a["i"])("div",{class:"home__link__icon"},[Object(a["i"])("img",{src:B.a,alt:"Bugs"})],-1),F=Object(a["i"])("span",{class:"home__link__title"},"Bugs",-1),I={class:"home__item",key:"villagers"},z=Object(a["i"])("div",{class:"home__link__icon"},[Object(a["i"])("img",{src:A.a,alt:"Villagers"})],-1),D=Object(a["i"])("span",{class:"home__link__title"},"Villagers",-1),N={class:"home__item",key:"about"},R=Object(a["i"])("div",{class:"home__link__icon"},[Object(a["i"])("img",{src:T.a,alt:"About"})],-1),U=Object(a["i"])("span",{class:"home__link__title"},"About",-1);function X(t,e,n,c,r,i){var s=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["f"])("div",L,[Object(a["i"])(a["b"],{name:"title",appear:""},{default:Object(a["B"])((function(){return[V]})),_:1}),Object(a["i"])(a["c"],{tag:"div",class:"home__grid",name:"apps",appear:""},{default:Object(a["B"])((function(){return[Object(a["i"])("div",E,[Object(a["i"])(s,{to:{name:"Fish"},class:"home__link"},{default:Object(a["B"])((function(){return[P,C]})),_:1})]),Object(a["i"])("div",H,[Object(a["i"])(s,{to:{name:"Bugs"},class:"home__link"},{default:Object(a["B"])((function(){return[M,F]})),_:1})]),Object(a["i"])("div",I,[Object(a["i"])(s,{to:{name:"Villagers"},class:"home__link"},{default:Object(a["B"])((function(){return[z,D]})),_:1})]),Object(a["i"])("div",N,[Object(a["i"])(s,{to:{name:"About"},class:"home__link"},{default:Object(a["B"])((function(){return[R,U]})),_:1})])]})),_:1})])}var J={};n("c47a");J.render=X;var Z=J,G={class:"screen about"},W=Object(a["i"])("div",{class:"about__container"},[Object(a["i"])("p",{class:"about__speech"},[Object(a["i"])("span",null,"Hello!")]),Object(a["i"])("p",{class:"about__item"},[Object(a["i"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"home",class:"svg-inline--fa fa-home fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[Object(a["i"])("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})]),Object(a["i"])("span",null,"France")]),Object(a["i"])("p",{class:"about__item"},[Object(a["i"])("span",null,"Front-End Developer")]),Object(a["i"])("p",{class:"about__item"},[Object(a["i"])("span",null,"AXLRSR")]),Object(a["i"])("p",{class:"about__item"},[Object(a["i"])("a",{href:"https://axlrsr.fr/",target:"_blank",rel:"noopener noreferrer"},[Object(a["i"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"external-link-alt",class:"svg-inline--fa fa-external-link-alt fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[Object(a["i"])("path",{fill:"currentColor",d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"})]),Object(a["i"])("span",null,"axlrsr.fr")])])],-1),q=Object(a["i"])("p",{class:"about__credits"},[Object(a["h"])("Icons from "),Object(a["i"])("a",{href:"https://www.animal-crossing.com/new-horizons",target:"_blank",rel:"noopener noreferrer"},"Animal Crossing: New Horizons"),Object(a["h"])(" and "),Object(a["i"])("a",{href:"https://fontawesome.com/",target:"_blank",rel:"noopener noreferrer"},"Font Awesome")],-1);function K(t,e,n,c,r,i){var s=Object(a["w"])("AppTitle");return Object(a["r"])(),Object(a["f"])("div",G,[Object(a["i"])(s,{title:"About"}),Object(a["i"])(a["b"],{name:"about",appear:""},{default:Object(a["B"])((function(){return[W]})),_:1}),Object(a["i"])(a["b"],{name:"credits",appear:""},{default:Object(a["B"])((function(){return[q]})),_:1})])}var Q={class:"app-title"},Y=Object(a["i"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"arrow-left",class:"svg-inline--fa fa-arrow-left fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[Object(a["i"])("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"})],-1),$={class:"app-title__title"};function tt(t,e,n,c,r,i){var s=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["f"])("div",Q,[Object(a["i"])(s,{to:{name:"Home"},class:"app-title__back"},{default:Object(a["B"])((function(){return[Y]})),_:1}),Object(a["i"])(a["b"],{name:"title",appear:""},{default:Object(a["B"])((function(){return[Object(a["i"])("h1",$,Object(a["y"])(n.title),1)]})),_:1})])}var et={props:["title"]};n("4b6b");et.render=tt;var nt=et,at={components:{AppTitle:nt}};n("1eb6");at.render=K;var ct=at,rt={class:"screen fish"};function it(t,e,n,c,r,i){var s=Object(a["w"])("AppTitle"),o=Object(a["w"])("StatsProgress");return Object(a["r"])(),Object(a["f"])("div",rt,[Object(a["i"])(s,{title:"Fish"}),Object(a["i"])(o,{type:"fish",stats:r.location},null,8,["stats"])])}n("d3b7"),n("b0c0");var st={key:0,class:"stats-progress__table"},ot={class:"stats-progress__legend"},lt={class:"stats-progress__cell__left"},ut={class:"stats-progress__name"},bt={class:"stats-progress__rarity"},ft={key:0,class:"stats-progress__hint"};function pt(t,e,n,c,r,i){return Object(a["r"])(),Object(a["f"])(a["a"],null,[Object(a["i"])("div",{class:"stats-progress "+n.type},[Object(a["i"])(a["c"],{tag:"div",class:"stats-progress__container",onBeforeEnter:c.beforeEnterItem,onEnter:c.enterItem,appear:""},{default:Object(a["B"])((function(){return[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["v"])(n.stats,(function(t,e){return Object(a["r"])(),Object(a["f"])("div",{key:t.key,onClick:function(e){return i.viewTable(t.key)},"data-index":e,class:"stats-progress__item",style:"width: "+t.percentage+"%;"},null,12,["onClick","data-index"])})),128))]})),_:1},8,["onBeforeEnter","onEnter"])],2),(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["v"])(n.stats,(function(t){return Object(a["r"])(),Object(a["f"])("div",{key:t.key},[r.display[t.key]?(Object(a["r"])(),Object(a["f"])("div",st,[Object(a["i"])("p",ot,Object(a["y"])(t.key)+" - "+Object(a["y"])(t.percentage)+"%",1),Object(a["i"])(a["c"],{tag:"div",class:"stats-progress__inner",onBeforeEnter:c.beforeEnterCell,onEnter:c.enterCell,appear:""},{default:Object(a["B"])((function(){return[(Object(a["r"])(!0),Object(a["f"])(a["a"],null,Object(a["v"])(t.item,(function(t,e){return Object(a["r"])(),Object(a["f"])("div",{key:e,"data-index":e,class:"stats-progress__cell"},[Object(a["i"])("div",lt,[Object(a["i"])("img",{class:"stats-progress__icon",src:t.icon,alt:""},null,8,["src"]),Object(a["i"])("span",ut,Object(a["y"])(t.name),1)]),Object(a["i"])("span",bt,Object(a["y"])(t.rarity),1)],8,["data-index"])})),128))]})),_:2},1032,["onBeforeEnter","onEnter"])])):Object(a["g"])("",!0)])})),128)),r.isTableDisplay?Object(a["g"])("",!0):(Object(a["r"])(),Object(a["f"])("p",ft,"Click anywhere on the graph above"))],64)}var Ot=n("cffa"),jt={props:["type","stats"],setup:function(){var t=function(t){t.style.transform="scaleX(0)"},e=function(t,e){Ot["a"].to(t,{transform:"scaleX(1)",duration:.2,onComplete:e,delay:.2*t.dataset.index,ease:"linear"})},n=function(t){t.style.opacity=0,t.style.transform="scale(.2)"},a=function(t,e){Ot["a"].to(t,{opacity:1,transform:"scale(1)",duration:.4,onComplete:e,delay:.05*t.dataset.index,ease:"Back.easeOut.config(1.4)"})};return{beforeEnterItem:t,enterItem:e,beforeEnterCell:n,enterCell:a}},data:function(){return{display:{},isTableDisplay:!1}},methods:{viewTable:function(t){for(var e in this.isTableDisplay=!0,this.display)this.display[e]=!1;this.display[t]=!this.display[t]}}};n("7ae7");jt.render=pt;var mt=jt,gt=n("2ef0"),dt={components:{AppTitle:nt,StatsProgress:mt},data:function(){return{location:{}}},mounted:function(){var t=this;fetch("http://acnhapi.com/v1/fish").then((function(t){return t.json()})).then((function(e){var n=Object(gt["map"])(e,(function(t){return{name:Object(gt["get"])(t,"name.name-USen"),icon:Object(gt["get"])(t,"icon_uri"),location:Object(gt["nth"])(Object(gt["split"])(Object(gt["get"])(t,"availability.location","")," "),0),rarity:Object(gt["get"])(t,"availability.rarity")}})),a=Object(gt["map"])(Object(gt["groupBy"])(n,"location"),(function(t,e){return{key:e,item:t,total:t.length,percentage:100*t.length/n.length}}));t.location=Object(gt["orderBy"])(a,(function(t){return t.total}),"desc")})).catch((function(t){return console.log(t.message)}))}};n("071c");dt.render=it;var ht=dt,_t={class:"screen bugs"};function vt(t,e,n,c,r,i){var s=Object(a["w"])("AppTitle"),o=Object(a["w"])("StatsProgress");return Object(a["r"])(),Object(a["f"])("div",_t,[Object(a["i"])(s,{title:"Bugs"}),Object(a["i"])(o,{type:"bugs",stats:r.location},null,8,["stats"])])}var yt={components:{AppTitle:nt,StatsProgress:mt},data:function(){return{location:{}}},methods:{sortLocation:function(t){switch(!0){case/flying/gi.test(t):return"Flying";case/tree/gi.test(t):return"Trees";case/ground/gi.test(t):return"Ground";case/flowers/gi.test(t):return"Flowers";case/rocks/gi.test(t):return"Rocks";default:return"Miscellaneous"}}},mounted:function(){var t=this;fetch("http://acnhapi.com/v1/bugs").then((function(t){return t.json()})).then((function(e){var n=Object(gt["map"])(e,(function(e){return{name:Object(gt["get"])(e,"name.name-USen"),icon:Object(gt["get"])(e,"icon_uri"),location:t.sortLocation(Object(gt["get"])(e,"availability.location","")),rarity:Object(gt["get"])(e,"availability.rarity")}})),a=Object(gt["map"])(Object(gt["groupBy"])(n,"location"),(function(t,e){return{key:e,item:t,total:t.length,percentage:100*t.length/n.length}}));t.location=Object(gt["orderBy"])(a,(function(t){return t.total}),"desc")})).catch((function(t){return console.log(t.message)}))}};n("8ea0");yt.render=vt;var wt=yt,kt={class:"screen villagers"};function Bt(t,e,n,c,r,i){var s=Object(a["w"])("AppTitle"),o=Object(a["w"])("StatsProgress");return Object(a["r"])(),Object(a["f"])("div",kt,[Object(a["i"])(s,{title:"Villagers"}),Object(a["i"])(o,{type:"villagers",stats:r.location},null,8,["stats"])])}n("a9e3"),n("35b3");var xt={components:{AppTitle:nt,StatsProgress:mt},data:function(){return{location:{}}},mounted:function(){var t=this;fetch("http://acnhapi.com/v1/villagers").then((function(t){return t.json()})).then((function(e){var n=Object(gt["map"])(e,(function(t){return{name:Object(gt["get"])(t,"name.name-USen"),icon:Object(gt["get"])(t,"icon_uri"),location:Object(gt["get"])(t,"personality",""),rarity:Object(gt["get"])(t,"species")}})),a=Object(gt["map"])(Object(gt["groupBy"])(n,"location"),(function(t,e){return{key:e,item:t,total:t.length,percentage:Math.round(100*(100*t.length/n.length+Number.EPSILON))/100}}));t.location=Object(gt["orderBy"])(a,(function(t){return t.total}),"desc")})).catch((function(t){return console.log(t.message)}))}};n("0753");xt.render=Bt;var At=xt,St=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:ct},{path:"/fish",name:"Fish",component:ht},{path:"/bugs",name:"Bugs",component:wt},{path:"/villagers",name:"Villagers",component:At}],Tt=Object(v["a"])({history:Object(v["b"])("/"),routes:St}),Lt=Tt;n("150b");Object(a["e"])(_).use(Lt).mount("#app")},"62c1":function(t,e,n){t.exports=n.p+"img/icn-location.2c1b5dfb.svg"},"7ae7":function(t,e,n){"use strict";n("8639")},8639:function(t,e,n){},"8ea0":function(t,e,n){"use strict";n("e15f")},"9acc":function(t,e,n){},"9efa":function(t,e,n){t.exports=n.p+"img/bugs.376b04a6.png"},b092:function(t,e,n){t.exports=n.p+"img/fish.cd2dc2da.png"},ba42:function(t,e,n){},bc12:function(t,e,n){"use strict";n("0751")},bf45:function(t,e,n){},c47a:function(t,e,n){"use strict";n("9acc")},c90a:function(t,e,n){t.exports=n.p+"img/icn-nook.a66c5811.svg"},cc8d:function(t,e,n){},e15f:function(t,e,n){},e58a:function(t,e,n){t.exports=n.p+"img/icn-network.4c74058c.svg"},ecf6:function(t,e,n){},f55e:function(t,e,n){"use strict";n("ecf6")}});
//# sourceMappingURL=app.6ed8b696.js.map