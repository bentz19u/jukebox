webpackJsonp([1],{"/11o":function(t,e){},Ej5q:function(t,e){},Mx02:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Xrl+"),n("fLmE");var i=n("7+uW"),s=n("EOUi"),a=n.n(s),o=n("mtWM"),r=n.n(o),l=n("NYxO");i.a.use(l.a);var c=new l.a.Store({modules:{splitter:{namespaced:!0,state:{open:!1},mutations:{toggle:function(t,e){t.open="boolean"==typeof e?e:!t.open}}}}}),u={name:"item",props:["item"],data:function(){return{}},methods:{showModal:function(){window.bus.$emit("historiqueAdd",this.item),window.bus.$emit("initVideo",this.item.id)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-list-item",{attrs:{tappable:""},on:{click:function(e){t.showModal()}}},[n("div",{staticClass:"left"},[n("img",{staticClass:"thumbnail",attrs:{src:t.item.thumbnail}})]),t._v(" "),n("div",{staticClass:"center"},[n("div",{staticClass:"title"},[t._v("\n        "+t._s(t.item.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"user"},[n("v-ons-icon",{attrs:{icon:"fa-user"}}),n("span",{staticStyle:{"font-size":"12px"}},[t._v(" "+t._s(t.item.author?t.item.author:"Anonymous"))])],1),t._v(" "),n("div",{staticClass:"desc"},[t._v("\n        "+t._s(t.item.description)+"\n      ")])])])},staticRenderFns:[]};var m=n("VU/8")(u,d,!1,function(t){n("Ej5q")},"data-v-5387ad42",null).exports,p={name:"search",data:function(){return{list:[],modalVisible:!1,message:"You haven't search for any video yet!"}},components:{item:m},methods:{initSearch:function(t){var e=this;axios.get("https://www.googleapis.com/youtube/v3/search",{params:{key:"AIzaSyAaVxe2e6AbU3FD2pKTQh1_AySRHC1NY8I",type:"video",maxResults:"10",pageToken:"",part:"id,snippet",fields:"items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken",q:t}}).then(function(t){if(e.list=[],0===t.data.items.length)e.message="No videos founds.";else{e.message="";for(var n=t.data.items.length-1;n>=0;n--)e.list.push({id:t.data.items[n].id.videoId,title:t.data.items[n].snippet.title,description:t.data.items[n].snippet.description,thumbnail:t.data.items[n].snippet.thumbnails.default.url,author:t.data.items[n].snippet.channelTitle})}}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;window.bus.$on("initSearch",function(e){t.initSearch(e)})}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[""!=t.message?n("p",[t._v(t._s(t.message))]):t._e(),t._v(" "),n("v-ons-list",t._l(t.list,function(t){return n("item",{key:t.id,attrs:{item:t}})}))],1)},staticRenderFns:[]};var h=n("VU/8")(p,f,!1,function(t){n("mxxx")},"data-v-7f166cd1",null).exports,v={name:"history",data:function(){return{list:[]}},components:{item:m},mounted:function(){var t=this;window.bus.$on("historiqueAdd",function(e){-1==t.list.indexOf(e)&&t.list.push(e)})}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("v-ons-list",this._l(this.list,function(t){return e("item",{key:t.id,attrs:{item:t}})}))],1)},staticRenderFns:[]};var w=n("VU/8")(v,b,!1,function(t){n("exv5")},"data-v-0e9580ce",null).exports,_={name:"modal",data:function(){return{modalVisible:!1,videoId:""}},methods:{showModal:function(){this.modalVisible=!0}},mounted:function(){var t=this;window.bus.$on("initVideo",function(e){t.videoId="http://www.youtube.com/embed/"+e,t.showModal()})}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-modal",{attrs:{visible:t.modalVisible},on:{click:function(e){t.modalVisible=!1}}},[n("div",{staticClass:"modal__content"},[n("div",{attrs:{id:"player"}},[n("iframe",{attrs:{allowfullscreen:"1",allow:"autoplay; encrypted-media",title:"YouTube video player",frameborder:"0",src:t.videoId}})])])])},staticRenderFns:[]};var g=n("VU/8")(_,y,!1,function(t){n("/11o")},"data-v-5b706bfd",null).exports,x={name:"toolBar",data:function(){return{tabs:[{label:"Search",page:h,key:"homePage"},{label:"History",page:w,key:"newsPage"}],query:""}},components:{Search:h,History:w,Modal:g},methods:{search:function(){console.log(this.query),window.bus.$emit("initSearch",this.query)}},beforeCreate:function(){}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-toolbar",[n("form",{on:{submit:[function(t){t.preventDefault()},t.search]}},[n("v-ons-input",{attrs:{id:"search",type:"search",modifier:"transparent","input-id":"android-search-input",placeholder:"Search for videos in YouTube"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)]),t._v(" "),n("v-ons-tabbar",{attrs:{swipeable:"",position:"auto",tabs:this.tabs,visible:!0}}),t._v(" "),n("modal")],1)},staticRenderFns:[]};var V={name:"app",computed:{menuIsOpen:{get:function(){return this.$store.state.splitter.open},set:function(t){this.$store.commit("splitter/toggle",t)}}},components:{ToolBar:n("VU/8")(x,$,!1,function(t){n("qbLi"),n("dR7h")},"data-v-79707e82",null).exports}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",{attrs:{id:"app"}},[e("toolBar")],1)},staticRenderFns:[]};var k=n("VU/8")(V,q,!1,function(t){n("Mx02")},"data-v-d0eac50e",null).exports;i.a.config.productionTip=!1,window.axios=r.a.create(),window.bus=new i.a,i.a.use(a.a,r.a),new i.a({el:"#app",store:c,template:"<App/>",components:{App:k},beforeCreate:function(){this.$ons.platform.select("android")}})},"Xrl+":function(t,e){},dR7h:function(t,e){},exv5:function(t,e){},fLmE:function(t,e){},mxxx:function(t,e){},qbLi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4122e0e539c146815e68.js.map