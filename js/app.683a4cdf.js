(function(e){function t(t){for(var i,o,m=t[0],r=t[1],c=t[2],l=0,u=[];l<m.length;l++)o=m[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,m=1;m<n.length;m++){var r=n[m];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],r=m.push.bind(m);m.push=t,m=m.slice();for(var c=0;c<m.length;c++)t(m[c]);var d=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5d65":function(e){e.exports=JSON.parse('[{"id":0,"name":"Pizza Indienne","image":"/img/0.jpeg"},{"id":1,"name":"Pizza Kebab","image":"/img/0.jpeg"},{"id":2,"name":"Pizza de l\'avy","image":"/img/0.jpeg"},{"id":3,"name":"Pizza 4 Fromage","image":"/img/0.jpeg"},{"id":4,"name":"Pizza Oriental","image":"/img/1.jpeg"},{"id":5,"name":"Pizza Bel\'Air","image":"/img/1.jpeg"},{"id":6,"name":"Pizza Reine","image":"/img/1.jpeg"},{"id":7,"name":"Pizza Valsiere","image":"/img/1.jpeg"},{"id":25,"name":"Pizza Magharita","image":"/img/1.jpeg"},{"id":8,"name":"Pizza Chorizo","image":"/img/1.jpeg"},{"id":9,"name":"Pasta Oriental","image":"/img/2.jpeg"},{"id":10,"name":"Pasta Indienne","image":"/img/2.jpeg"},{"id":11,"name":"Pasta 4 Fromages","image":"/img/2.jpeg"},{"id":12,"name":"Pasta Saumon","image":"/img/2.jpeg"},{"id":13,"name":"Pasta Carbonara","image":"/img/2.jpeg"},{"id":14,"name":"Pasta Pesto","image":"/img/2.jpeg"},{"id":15,"name":"Couscous","image":"/img/3.jpeg"}]')},cd49:function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("HelloWorld")],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-content",[this.$store.state.pendingsCommand.itemsDesc.length>0?n("div",{staticClass:"layout fab-container",staticStyle:{position:"fixed",bottom:"30px",right:"10px","z-index":"9999"}},[n("command-form")],1):e._e(),n("v-container",{staticStyle:{height:"100%"},attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"3"}},[n("item-list")],1),n("v-col",{attrs:{cols:"9"}},[n("command-list")],1)],1)],1)],1)],1)},m=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"v-card--link ",staticStyle:{height:"100%"},on:{click:e.onItemClick}},[n("v-card-text",{staticClass:"ma-0 pa-0 black--text p-0 m-0",staticStyle:{"font-size":"12px"}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"flex-grow-0 mr-2",attrs:{src:e.item.image,width:"40px",height:"40px"}}),n("div",{},[e._v(" "+e._s(e.item.name)+" ")])],1)])],1)},c=[],d=n("9ab4"),l=n("60a3");let u=class extends l["c"]{onItemClick(){this.$emit("addItem",this.item)}};d["a"]([Object(l["b"])()],u.prototype,"item",void 0),u=d["a"]([l["a"]],u);var p=u,g=p,v=n("2877"),f=Object(v["a"])(g,r,c,!1,null,"97d7fd8e",null),h=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},e._l(e.items,(function(t){return n("div",{staticClass:"col-6"},[n("item",{attrs:{item:t},on:{addItem:function(t){return e.onAddItem(t)}}})],1)})),0)},C=[];let x=class extends l["c"]{constructor(){super(...arguments),this.items=null,this.data=null}created(){this.items=this.$store.state.items,this.data=this.$store.state.commands}onAddItem(e){console.log(e),this.$store.commit("addToPendingCommand",e)}};x=d["a"]([Object(l["a"])({components:{Item:h}})],x);var _=x,j=_,w=Object(v["a"])(j,b,C,!1,null,"467946b2",null),y=w.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("v-card",{staticStyle:{height:"100%"}},[n("v-card-text",{staticClass:"py-0"},[e.commands?n("div",{staticClass:"row"},e._l(e.commands,(function(e){return n("div",{staticClass:"col-6"},[n("CommandDetail",{attrs:{command:e}})],1)})),0):e._e()])],1)],1)},O=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex "},[n("div",{staticClass:"flex-grow-0 mr-1 mb-1"},[n("v-img",{attrs:{src:e.item.item.image,width:"25",height:"25"}})],1),n("div",[e._v(e._s(e.item.item.name))]),n("div",{staticClass:"ml-2",staticStyle:{"font-weight":"bold"}},[e._v("x "+e._s(e.item.count))])])])},k=[];let I=class extends l["c"]{};d["a"]([Object(l["b"])()],I.prototype,"item",void 0),I=d["a"]([Object(l["a"])({components:{}})],I);var z=I,$=z,S=Object(v["a"])($,D,k,!1,null,"cb3e2b68",null),E=S.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"row mt-0"},[n("v-card-text",{staticClass:"ma-0 pa-2 pt-0",staticStyle:{color:"black"}},[n("div",{staticClass:"d-flex"},[n("strong",{staticStyle:{"font-size":"1.2rem"}},[e._v(e._s(e.command.hour)+":"+e._s(e.command.minute))]),n("div",{staticClass:"ml-auto"},[n("v-btn",{staticClass:"mr-2",attrs:{color:"yellow",small:"",fab:"",width:"25px",height:"25px"},on:{click:e.onEdit}},[n("v-icon",{staticStyle:{"font-size":"15px"},attrs:{color:"black"}},[e._v("mdi-pen")])],1),n("v-btn",{attrs:{color:"red",small:"",fab:"",width:"25px",height:"25px"},on:{click:e.onDone}},[n("v-icon",{staticStyle:{"font-size":"15px"},attrs:{color:"white"}},[e._v("mdi-delete")])],1)],1)]),e._l(e.command.itemsDesc,(function(e){return n("div",[n("item-detail-line",{attrs:{item:e}})],1)}))],2)],1)},A=[];let M=class extends l["c"]{onEdit(){this.$store.commit("addCommandToPendingCommand",this.command)}onDone(){this.$store.commit("doneCommand",this.command)}};d["a"]([Object(l["b"])()],M.prototype,"command",void 0),M=d["a"]([Object(l["a"])({components:{ItemDetailLine:E}})],M);var F=M,L=F,N=Object(v["a"])(L,T,A,!1,null,"ca193838",null),H=N.exports;let J=class extends l["c"]{constructor(){super(...arguments),this.commands=null}created(){this.commands=this.$store.state.commands}};J=d["a"]([Object(l["a"])({components:{CommandDetail:H,ItemDetailLine:E}})],J);var V=J,B=V,W=Object(v["a"])(B,P,O,!1,null,"5eccd03a",null),q=W.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex"},[n("v-card",{staticClass:"mr-2"},[n("v-card-text",[n("div",[n("v-row",[n("v-col",[n("v-select",{attrs:{items:e.hours,label:"Heure"},model:{value:e.hour,callback:function(t){e.hour=t},expression:"hour"}})],1),n("v-col",[n("v-select",{attrs:{items:e.minutes,label:"Minute"},model:{value:e.minute,callback:function(t){e.minute=t},expression:"minute"}})],1)],1),n("v-text-field",{attrs:{label:"Description"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._l(e.command.itemsDesc,(function(t,i){return n("div",[n("div",{staticClass:"d-flex "},[n("div",{staticClass:"flex-grow-0 mr-1 mb-1"},[n("v-img",{attrs:{src:t.item.image,width:"30",height:"30"}})],1),n("div",[e._v(e._s(t.item.name))]),n("div",{staticClass:"ml-2",staticStyle:{"font-weight":"bold"}},[e._v("x "+e._s(t.count))]),n("div",{staticClass:"ml-auto"},[n("v-btn",{staticClass:"white--text mr-2",attrs:{color:"green",fab:"",width:"20px",height:"20px"},on:{click:function(n){return e.onIncreaseItem(t.item)}}},[e._v(" +")]),n("v-btn",{staticClass:"white--text",attrs:{color:"red",fab:"",width:"20px",height:"20px"},on:{click:function(n){return e.onDecreaseItem(t.item)}}},[e._v(" -")])],1)])])}))],2)])],1),n("div",{staticClass:"d-flex flex-column-reverse"},[n("v-btn",{staticClass:"mt-2",attrs:{color:"green",dark:"",small:"",fab:""},on:{click:e.onValidate}},[n("v-icon",[e._v("mdi-check")])],1),n("v-btn",{attrs:{color:"red",dark:"",small:"",fab:""},on:{click:e.onCancel}},[n("v-icon",[e._v("mdi-cancel")])],1)],1)],1)},R=[];let G=class extends l["c"]{constructor(){super(...arguments),this.hours=[11,12,13,14,18,19,20,21,22],this.minutes=[0,5,10,15,20,25,30,35,40,45,50,55],this.hour=11,this.minute=0,this.description="",this.command=null}created(){this.command=this.$store.state.pendingsCommand}onIncreaseItem(e){this.$store.commit("addToPendingCommand",e)}onDecreaseItem(e){this.$store.commit("decreasePendingCommandItem",e)}onValidate(){this.$store.commit("addPendingCommandToCommand",{hour:this.hour,minute:this.minute,description:this.description,itemsDesc:this.$store.state.pendingsCommand.itemsDesc})}onCancel(){this.$store.commit("clearPendingCommand")}};G=d["a"]([l["a"]],G);var Q=G,U=Q,X=Object(v["a"])(U,K,R,!1,null,null,null),Y=X.exports;const Z=n("5d65");var ee=i["default"].extend({components:{CommandForm:Y,CommandList:q,ItemList:y,Item:h},created(){this.$store.commit("setItems",Z)}}),te=ee,ne=Object(v["a"])(te,o,m,!1,null,null,null),ie=ne.exports,ae=i["default"].extend({name:"App",components:{HelloWorld:ie},data:()=>({})}),se=ae,oe=Object(v["a"])(se,a,s,!1,null,null,null),me=oe.exports,re=n("2f62");i["default"].use(re["a"]);var ce=function(){return"_"+Math.random().toString(36).substr(2,9)},de=new re["a"].Store({state:{items:[],pendingsCommand:{hour:11,minute:0,description:"",itemsDesc:[]},commands:[],pastCommands:[]},mutations:{setItems(e,t){e.items=t},addToPendingCommand(e,t){let n=e.pendingsCommand.itemsDesc.findIndex(e=>{return e.item.id==t.id});-1!=n?i["default"].set(e.pendingsCommand.itemsDesc[n],"count",e.pendingsCommand.itemsDesc[n].count+1):e.pendingsCommand.itemsDesc=[...e.pendingsCommand.itemsDesc,{item:t,count:1}]},clearPendingCommand(e){e.pendingsCommand.itemsDesc=[]},decreasePendingCommandItem(e,t){let n=e.pendingsCommand.itemsDesc.findIndex(e=>{return e.item.id==t.id});-1!=n&&(1==e.pendingsCommand.itemsDesc[n].count?(e.pendingsCommand.itemsDesc.splice(n,1),e.pendingsCommand.itemsDesc=[...e.pendingsCommand.itemsDesc]):i["default"].set(e.pendingsCommand.itemsDesc[n],"count",e.pendingsCommand.itemsDesc[n].count-1))},addPendingCommandToCommand(e,t){t.id=ce(),e.commands.push(t),e.pendingsCommand.itemsDesc=[]},addCommandToPendingCommand(e,t){let n=e.commands.findIndex(e=>{return e.id==t.id});e.commands.splice(n,1),e.pendingsCommand=t},doneCommand(e,t){let n=e.commands.findIndex(e=>{return e.id==t.id});e.commands.splice(n,1)}},actions:{},modules:{}}),le=n("9483");Object(le["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ue=n("ce5b"),pe=n.n(ue),ge=(n("bf40"),n("ea1f"));i["default"].use(pe.a);var ve=new pe.a({lang:{locales:{fr:ge["a"]},current:"fr"},icons:{iconfont:"mdi"}});i["default"].config.productionTip=!1,new i["default"]({store:de,vuetify:ve,render:e=>e(me)}).$mount("#app")}});
//# sourceMappingURL=app.683a4cdf.js.map