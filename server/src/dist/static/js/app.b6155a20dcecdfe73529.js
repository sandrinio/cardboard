webpackJsonp([1],{"7zck":function(t,e){},Amep:function(t,e){},GQQM:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),s={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return"/login"!==this.$route.path?r("div",[r("v-navigation-drawer",{attrs:{fixed:"",app:"",clipped:t.$vuetify.breakpoint.lgAndUp},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-tile",{on:{click:function(e){t.navigate("dashboard")}}},[r("v-list-tile-action",[r("v-icon",[t._v("home")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),r("v-list-tile",{on:{click:function(e){t.navigate("clients")}}},[r("v-list-tile-action",[r("v-icon",[t._v("contacts")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("Clients")])],1)],1),t._v(" "),r("v-list-tile",{on:{click:function(e){t.navigate("orders")}}},[r("v-list-tile-action",[r("v-icon",[t._v("payment")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",[t._v("Orders")])],1)],1)],1)],1),t._v(" "),r("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:"","clipped-left":t.$vuetify.breakpoint.lgAndUp}},[r("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[t._v("Cardboard")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[r("v-btn",{attrs:{flat:""}},[t._v(t._s(this.$store.state.user.name)+" "+t._s(this.$store.state.user.surname))]),t._v(" "),this.$store.state.isUserLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.logout}},[t._v("Logout")]):r("v-btn",{attrs:{flat:""},on:{click:function(e){t.navigate("login")}}},[t._v("Login")]),t._v(" "),"Admin"===t.$store.state.user.permission?r("v-btn",{attrs:{flat:""},on:{click:function(e){t.navigate("register")}}},[t._v("Register")]):t._e()],1)],1)],1):t._e()},staticRenderFns:[]};var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{attrs:{color:"indigo",app:""}},[e("span",{staticClass:"white--text"},[this._v("© 2018")])])},staticRenderFns:[]};var i={name:"App",data:function(){return{hide:!0}},components:{PageHeader:r("VU/8")({data:function(){return{routes:["Companies","Orders"],drawer:!1}},methods:{navigate:function(t){this.$router.push({name:t})},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({path:"/login"})}}},s,!1,function(t){r("Amep")},"data-v-37cc051c",null).exports,PageFooter:r("VU/8")({data:function(){return{}}},n,!1,function(t){r("a1Q3")},"data-v-1942dc5d",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("page-header"),this._v(" "),e("main",[e("v-container",{attrs:{fluid:"","fill-height":""}},[e("router-view")],1)],1),this._v(" "),e("page-footer")],1)],1)],1)},staticRenderFns:[]};var l=r("VU/8")(i,o,!1,function(t){r("i6lQ")},null,null).exports,c=r("/ocq"),d=r("NYxO"),u=r("424j");a.a.use(d.a);var v=new d.a.Store({strict:!0,plugins:[Object(u.a)()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(t,e){t.token=e,t.isUserLoggedIn=!!e},setUser:function(t,e){t.user=e}},actions:{setToken:function(t,e){(0,t.commit)("setToken",e)},setUser:function(t,e){(0,t.commit)("setUser",e)}}}),p=function(t,e,r){v.state.user?r():r("/login")},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._v(" "),r("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),r("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var f=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){r("ZAj9")},"data-v-46f411a6",null).exports,h=r("mtWM"),_=r.n(h),b=function(){return _.a.create({baseURL:"http://localhost:3000/",headers:{Authorization:"Bearer "+v.state.token}})},y=function(t){return b().post("register",t)},x=function(t){return b().post("login",t)},k={data:function(){return{email:"",password:"",error:"",loading:!1}},methods:{login:function(){var t=this;this.loading=!0;var e={email:this.email,password:this.password};x(e).then(function(e){e.data.error?(t.loading=!1,t.error=e.data.error):(t.loading=!1,t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user),t.$router.push({name:"dashboard"}))}).catch(function(t){console.log(t.data)})},testing:function(){alert("done")}}},g={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("Login")])],1),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[r("v-form",[r("div",{attrs:{title:"Login"}},[r("br"),t._v(" "),r("v-text-field",{attrs:{label:"Email"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("br"),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",attrs:{dark:"",loading:t.loading},on:{click:t.login}},[t._v("\n            Login\n          ")])],1)])],1)],1)])],1)},staticRenderFns:[]};var C=r("VU/8")(k,g,!1,function(t){r("fBH+")},"data-v-45b23504",null).exports,D=r("fZjL"),w=r.n(D),$={data:function(){return{roles:["Admin","User","Advanced"],error:"",email:"",name:"",surname:"",password:"",password2:"",permission:"",loading:!1}},methods:{register:function(){var t=this;this.loading=!0;var e={permission:this.permission,email:this.email,name:this.name,surname:this.surname,password:this.password},r=w()(e).every(function(t){return!!e[t]});return this.password!==this.password2?this.error="პაროლი არ ემთხვევა":r?void y(e).then(function(e){t.loading=!1,t.$store.dispatch("setToken",e.data.token),t.$store.dispatch("setUser",e.data.user),t.$router.push({name:"dashboard"})}).catch(function(t){console.log(t.data)}):this.error="შეავსე ყველა ველი"}}},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("Register")])],1),t._v(" "),r("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[r("div",{attrs:{title:"Login"}},[r("br"),t._v(" "),r("v-text-field",{attrs:{label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("br"),t._v(" "),r("v-text-field",{attrs:{label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("br"),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"account-box",label:"surname"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null}},model:{value:t.surname,callback:function(e){t.surname=e},expression:"surname"}}),t._v(" "),r("v-select",{attrs:{items:t.roles,label:"Select","single-line":"",auto:"","prepend-icon":"star","hide-details":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null}},model:{value:t.permission,callback:function(e){t.permission=e},expression:"permission"}}),t._v(" "),r("br"),t._v(" "),r("v-text-field",{attrs:{label:"Password",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{label:"Re-type Password",type:"password"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.register(e):null}},model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}}),t._v(" "),r("br"),t._v(" "),r("div",{staticClass:"danger-alert",domProps:{innerHTML:t._s(t.error)}}),t._v(" "),r("br"),t._v(" "),r("v-btn",{staticClass:"blue darken-3",attrs:{dark:"",loading:t.loading,keyup:t.register},on:{click:t.register}},[t._v("\n            Register\n          ")])],1)])],1)])],1)},staticRenderFns:[]};var E=r("VU/8")($,T,!1,function(t){r("tvef")},"data-v-6ddab340",null).exports,H=function(t){return b().post(t.id+"/new-product",t)},P=function(t){return b().post("newCompany",t)},Q=function(){return b().get("getCompanyList")},W=function(t){return b().post("deleteCompany",t)},N=function(t){return b().get("getProduct/"+t)},U=function(t){return b().get("getCompany/"+t)},L=function(t,e){return b().post("changeProduct/"+e,t)},j={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v(t._s(t.temporary.company)+" პროდუქტები")])],1),t._v(" "),r("v-card",[r("v-spacer"),t._v(" "),r("v-data-table",{staticClass:"elevation-0",attrs:{items:t.temporary.products,"hide-actions":"","hide-headers":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",{on:{click:function(r){t.navigateTo("/clients/product-show/"+e.item._id)}}},[t._v("\n              "+t._s(e.item.productName)+" - "+t._s(e.item.boxHeight)+"x"+t._s(e.item.boxWidth)+"x"+t._s(e.item.boxThickness))])]}}])})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.navigateTo({name:"newProduct",params:{id:t.temporary._id}})}}},[t._v("New Product")])],1)],1)},staticRenderFns:[]};var A={components:{ProductsComponent:r("VU/8")({props:["temporary"],data:function(){return{}},methods:{navigateTo:function(t){this.$router.push(t)}}},j,!1,function(t){r("bAxu")},"data-v-e998cf98",null).exports},data:function(){return{newCompanyDialog:!1,companyProductListDialog:!1,companyName:"",temporary:{},search:"",loading:!0,headers:[{align:"left",sortable:!1,value:"name"},{text:"Company Name",value:"company"},{text:"Products",value:"products"},{text:"Total Orders",value:"total orders"},{text:"Actions",value:"Actions"}],items:[]}},methods:{saveCompany:function(){var t=this;P({companyName:this.companyName}).then(function(e){t.items.push(e.data.data),t.newCompanyDialog=!1}).catch(function(t){console.log(t.data)})},deleteItem:function(t){var e=this;W({id:t._id}).then(function(r){var a=e.items.indexOf(t);e.items.splice(a,1)}).catch(function(t){console.log(t)})},detailsDialog:function(t){return!0===this.companyProductListDialog?this.companyProductListDialog=!1:(this.temporary=t,this.companyProductListDialog=!0)},navigateTo:function(t){this.$router.push(t)}},mounted:function(){var t=this;Q().then(function(e){t.items=e.data,t.loading=!1}).catch(function(t){console.log(t.data)})}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",fluid:""}},[r("v-flex",{attrs:{md7:"",sm12:""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("კომპანიები")])],1),t._v(" "),r("v-card",[r("v-card-title",[r("v-btn",{staticClass:"primary",attrs:{small:"",dark:""},on:{click:function(e){e.stopPropagation(),t.newCompanyDialog=!0}}},[t._v("New Company")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{attrs:{loading:t.loading,headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.regDate.slice(0,8)))]),t._v(" "),r("td",{staticClass:"text-xs-left pointer",on:{click:function(r){t.detailsDialog(e.item)}}},[t._v(t._s(e.item.company))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.products.length))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.orders))]),t._v(" "),r("td",{staticClass:"justify-center layout px-0"},[r("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(r){t.editItem(e.item)}}},[r("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),r("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(r){t.deleteItem(e.item)}}},[r("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)]}}])},[r("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),t._v(" "),r("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')])],1)],1)],1)]),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.newCompanyDialog,callback:function(e){t.newCompanyDialog=e},expression:"newCompanyDialog"}},[r("v-card",[r("v-card-title",[t._v("\n        ახალი კომპანიის რეგისტრაცია\n      ")]),t._v(" "),r("v-card-text",[r("form",[r("v-text-field",{attrs:{label:"კომპანიის სახელი (ლათინური ასოებით)"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.saveCompany(e):null}},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}})],1)]),t._v(" "),r("v-spacer"),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){e.stopPropagation(),t.newCompanyDialog=!1}}},[t._v("Close")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.saveCompany}},[t._v("Submit")])],1)],1)],1),t._v(" "),r("v-flex",{staticClass:"ml-3",attrs:{md5:"",sm12:""}},[!0===t.companyProductListDialog?r("products-component",{attrs:{temporary:t.temporary}}):t._e()],1)],1)},staticRenderFns:[]};var S=r("VU/8")(A,R,!1,function(t){r("o2/x")},"data-v-3d8ec887",null).exports,F={data:function(){return{items:["3","5"],materials:["Tesline","Fluting","White-tesline"],profileCat:["B","E","C"],company:"",layer1:"",layer2:"",layer3:"",layer4:"",layer5:"",product:{productName:"",layerQuantity:"",layers:[],profile:"",boxHeight:"",boxWidth:"",boxThickness:"",mDividerHeight:"",mDividerWidth:"",mDividerThickness:"",fDividerHeight:"",fDividerWidth:"",fDividerThickness:"",dividersPerBox:""}}},methods:{confirm:function(t){var e=this;t.preventDefault();var r=this.product;r.id=this.$route.params.id,"3"===this.product.layerQuantity?(this.product.layers=[],this.product.layers.push(this.layer1),this.product.layers.push(this.layer2),this.product.layers.push(this.layer3)):(this.product.layers=[],this.product.layers.push(this.layer1),this.product.layers.push(this.layer2),this.product.layers.push(this.layer3),this.product.layers.push(this.layer4),this.product.layers.push(this.layer5)),console.log(r),H(r).then(function(t){e.$router.push({name:"clients"})}).catch(function(t){console.log(t.data)})}},mounted:function(){var t=this;U(this.$route.params.id).then(function(e){t.company=e.data.company,console.log(t.company)}).catch(function(t){console.log(t)})}},V={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{xs8:"","offset-xs2":""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("კომპანია: "+t._s(t.company)+" - ახალი პროდუქტი")])],1),t._v(" "),r("form",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{label:"Product Name"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.productName,callback:function(e){t.$set(t.product,"productName",e)},expression:"product.productName"}})],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{items:t.profileCat,label:"პროფილი","single-line":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.profile,callback:function(e){t.$set(t.product,"profile",e)},expression:"product.profile"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-4",attrs:{xs4:""}},[r("v-select",{attrs:{items:t.items,label:"შრეების რაოდენობა","single-line":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.layerQuantity,callback:function(e){t.$set(t.product,"layerQuantity",e)},expression:"product.layerQuantity"}})],1)],1),t._v(" "),"3"===this.product.layerQuantity||"5"===this.product.layerQuantity?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{sm3:""}},[r("v-select",{attrs:{items:t.materials,label:"შრე #1","single-line":""},model:{value:t.layer1,callback:function(e){t.layer1=e},expression:"layer1"}}),t._v(" "),r("v-select",{attrs:{items:t.materials,label:"შრე #2","single-line":""},model:{value:t.layer2,callback:function(e){t.layer2=e},expression:"layer2"}}),t._v(" "),r("v-select",{attrs:{items:t.materials,label:"შრე #3","single-line":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.layer3,callback:function(e){t.layer3=e},expression:"layer3"}})],1)],1):t._e(),t._v(" "),"5"===this.product.layerQuantity?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{sm3:""}},[r("v-select",{attrs:{items:t.materials,label:"შრე #4","single-line":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.layer4,callback:function(e){t.layer4=e},expression:"layer4"}}),t._v(" "),r("v-select",{attrs:{items:t.materials,label:"შრე #5","single-line":""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.layer5,callback:function(e){t.layer5=e},expression:"layer5"}})],1)],1):t._e(),t._v(" "),r("v-layout",{staticClass:"mt-4"},[r("v-flex",{attrs:{sm4:""}},[r("h3",[t._v("ყუთი")]),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სიგრძე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.boxThickness,callback:function(e){t.$set(t.product,"boxThickness",e)},expression:"product.boxThickness"}}),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სიმაღლე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.boxHeight,callback:function(e){t.$set(t.product,"boxHeight",e)},expression:"product.boxHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სიგანე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.boxWidth,callback:function(e){t.$set(t.product,"boxWidth",e)},expression:"product.boxWidth"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-5",attrs:{sm4:""}},[r("h3",[t._v("მამალი")]),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგრძე",type:"number"},model:{value:t.product.mDividerThickness,callback:function(e){t.$set(t.product,"mDividerThickness",e)},expression:"product.mDividerThickness"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიმაღლე",type:"number"},model:{value:t.product.mDividerHeight,callback:function(e){t.$set(t.product,"mDividerHeight",e)},expression:"product.mDividerHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგანე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.mDividerWidth,callback:function(e){t.$set(t.product,"mDividerWidth",e)},expression:"product.mDividerWidth"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-5",attrs:{sm4:""}},[r("h3",[t._v("დედალი")]),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგრძე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.fDividerThickness,callback:function(e){t.$set(t.product,"fDividerThickness",e)},expression:"product.fDividerThickness"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიმაღლე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.fDividerHeight,callback:function(e){t.$set(t.product,"fDividerHeight",e)},expression:"product.fDividerHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგანე",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.fDividerWidth,callback:function(e){t.$set(t.product,"fDividerWidth",e)},expression:"product.fDividerWidth"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარი თითო ყუთში",type:"number"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.confirm(e):null}},model:{value:t.product.dividersPerBox,callback:function(e){t.$set(t.product,"dividersPerBox",e)},expression:"product.dividersPerBox"}})],1)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:t.confirm}},[t._v("დამატება")])],1)],1)])],1)},staticRenderFns:[]};var O=r("VU/8")(F,V,!1,function(t){r("gpo5")},"data-v-4c7b9ceb",null).exports,B={data:function(){return{items:["3","5"],materials:["Tesline","Fluting","White-tesline"],profileCat:["B","E","C"],company:"",product:{productName:"",layerQuantity:"",layers:[],profile:"",boxHeight:"",boxWidth:"",boxThickness:"",mDividerHeight:"",mDividerWidth:"",mDividerThickness:"",fDividerHeight:"",fDividerWidth:"",fDividerThickness:""},indeterminate:!0}},methods:{confirm:function(t){var e=this;t.preventDefault(),this.product.id=this.$route.params.id;for(var r=[],a=0;a<this.product.layerQuantity;++a)r.push(this.product.layers[a]);this.product.layers=[],this.product.layers=r,L(this.product,this.$route.params.id).then(function(t){e.$router.push({name:"clients"})}).catch(function(t){console.log(t.data)})}},mounted:function(){var t=this;N(this.$route.params.id).then(function(e){t.indeterminate=!1,t.product=e.data}).catch(function(e){t.indeterminate=!1,console.log(e)})}},I={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{xs8:"","offset-xs2":""}},[t.indeterminate?r("v-progress-linear",{attrs:{indeterminate:t.indeterminate}}):t._e(),t._v(" "),r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title")],1),t._v(" "),r("form",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{label:"Product Name"},model:{value:t.product.productName,callback:function(e){t.$set(t.product,"productName",e)},expression:"product.productName"}})],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("v-select",{attrs:{items:t.profileCat,label:"პროფილი","single-line":""},model:{value:t.product.profile,callback:function(e){t.$set(t.product,"profile",e)},expression:"product.profile"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-4",attrs:{xs4:""}},[r("v-select",{attrs:{items:t.items,label:"შრეების რაოდენობა","single-line":""},model:{value:t.product.layerQuantity,callback:function(e){t.$set(t.product,"layerQuantity",e)},expression:"product.layerQuantity"}})],1)],1),t._v(" "),"3"===this.product.layerQuantity||"5"===this.product.layerQuantity?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{sm4:""}},[r("v-select",{attrs:{items:t.materials,label:"Select","single-line":""},model:{value:t.product.layers[0],callback:function(e){t.$set(t.product.layers,0,e)},expression:"product.layers[0]"}})],1),t._v(" "),r("v-flex",{attrs:{sm4:""}},[r("v-select",{staticClass:"ml-2",attrs:{items:t.materials,label:"Select","single-line":""},model:{value:t.product.layers[1],callback:function(e){t.$set(t.product.layers,1,e)},expression:"product.layers[1]"}})],1),t._v(" "),r("v-flex",{attrs:{sm4:""}},[r("v-select",{staticClass:"ml-2",attrs:{items:t.materials,label:"Select","single-line":""},model:{value:t.product.layers[2],callback:function(e){t.$set(t.product.layers,2,e)},expression:"product.layers[2]"}})],1)],1):t._e(),t._v(" "),"5"===this.product.layerQuantity?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{sm3:""}},[r("v-select",{staticClass:"ml-2",attrs:{items:t.materials,label:"Select","single-line":""},model:{value:t.product.layers[3],callback:function(e){t.$set(t.product.layers,3,e)},expression:"product.layers[3]"}})],1),t._v(" "),r("v-flex",{attrs:{sm3:""}},[r("v-select",{staticClass:"ml-2",attrs:{items:t.materials,label:"Select","single-line":""},model:{value:t.product.layers[4],callback:function(e){t.$set(t.product.layers,4,e)},expression:"product.layers[4]"}})],1)],1):t._e(),t._v(" "),r("v-layout",{staticClass:"mt-4"},[r("v-flex",{attrs:{sm4:""}},[r("h3",[t._v("ყუთი")]),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სიმაღლე",type:"number"},model:{value:t.product.boxHeight,callback:function(e){t.$set(t.product,"boxHeight",e)},expression:"product.boxHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სიგანე",type:"number"},model:{value:t.product.boxWidth,callback:function(e){t.$set(t.product,"boxWidth",e)},expression:"product.boxWidth"}}),t._v(" "),r("v-text-field",{attrs:{label:"ყუთის სისქე",type:"number"},model:{value:t.product.boxThickness,callback:function(e){t.$set(t.product,"boxThickness",e)},expression:"product.boxThickness"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-5",attrs:{sm4:""}},[r("h3",[t._v("მამალი")]),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიმაღლე",type:"number"},model:{value:t.product.mDividerHeight,callback:function(e){t.$set(t.product,"mDividerHeight",e)},expression:"product.mDividerHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგანე",type:"number"},model:{value:t.product.mDividerWidth,callback:function(e){t.$set(t.product,"mDividerWidth",e)},expression:"product.mDividerWidth"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სისქე",type:"number"},model:{value:t.product.mDividerThickness,callback:function(e){t.$set(t.product,"mDividerThickness",e)},expression:"product.mDividerThickness"}})],1),t._v(" "),r("v-flex",{staticClass:"ml-5",attrs:{sm4:""}},[r("h3",[t._v("დედალი")]),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიმაღლე",type:"number"},model:{value:t.product.fDividerHeight,callback:function(e){t.$set(t.product,"fDividerHeight",e)},expression:"product.fDividerHeight"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სისქე",type:"number"},model:{value:t.product.fDividerWidth,callback:function(e){t.$set(t.product,"fDividerWidth",e)},expression:"product.fDividerWidth"}}),t._v(" "),r("v-text-field",{attrs:{label:"ტიხარის სიგანე",type:"number"},model:{value:t.product.fDividerThickness,callback:function(e){t.$set(t.product,"fDividerThickness",e)},expression:"product.fDividerThickness"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"primary",attrs:{dark:""},on:{click:t.confirm}},[t._v("change")])],1)],1)],1)],1)},staticRenderFns:[]};var M=r("VU/8")(B,I,!1,function(t){r("GQQM")},"data-v-ee909cdc",null).exports,z=function(t){return b().post("new-order",t)},Y=function(){return b().get("ordersGetter")},G={data:function(){return{orders:[],loading:!0,search:"",headers:[{text:"Deadline",align:"left",sortable:!1,value:"name"},{text:"სტატუსი",value:"status"},{text:"კომპანია",value:"company"},{text:"პროდუქტი",value:"product"},{text:"ყუთის შეკვეთა",value:"boxQuantity"},{text:"ტიხარის შეკვეთა",value:"dividerQuantity"}]}},methods:{deleteItem:function(t){console.log(t)},navigateTo:function(t){this.$router.push(t)}},mounted:function(){var t=this;Y().then(function(e){t.orders=e.data.orders,t.loading=!1}).catch(function(t){console.log(t.data)})}},Z={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{md10:"",xs12:"","offset-md1":""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("შეკვეთები")])],1),t._v(" "),r("v-card",[r("v-card-title",["Admin"===t.$store.state.user.permission?r("v-btn",{staticClass:"primary",attrs:{small:"",dark:""},on:{click:function(e){t.navigateTo({name:"newOrder"})}}},[t._v("New Order\n          ")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{attrs:{loading:t.loading,headers:t.headers,items:t.orders,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.deadline.slice(0,8)))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.status))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.company))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("span",[r("strong",[t._v(t._s(e.item.product))])]),t._v(" - "+t._s(e.item.boxHeight)+"x"+t._s(e.item.boxWidth)+"x"+t._s(e.item.boxThickness))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.boxQuantity))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.dividerQuantity))]),t._v(" "),r("td",{staticClass:"justify-center layout px-0"},[r("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(r){t.deleteItem(e.item)}}},[r("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)]}}])},[r("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),t._v(" "),r("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[t._v('\n            Your search for "'+t._s(t.search)+'" found no results.\n          ')])],1)],1)],1)])],1)},staticRenderFns:[]};var J=r("VU/8")(G,Z,!1,function(t){r("xe+g")},"data-v-6bba7b8a",null).exports,q={data:function(){return{productSelectDisabled:!0,fullData:[],companies:[],products:[],selectedProductDetails:{},showDetails:!1,loading:!0,btnLoading:!1,search:"",order:{company:"",product:"",boxQuantity:"",dividerQuantity:"",deadline:"",comment:""}}},methods:{newOrder:function(){this.btnLoading=!0;var t={company:this.order.company,product:this.order.product.productName,boxQuantity:this.order.boxQuantity,dividerQuantity:this.order.dividerQuantity,boxHeight:this.order.product.boxHeight,boxWidth:this.order.product.boxWidth,boxThickness:this.order.product.boxThickness,mDividerHeight:this.order.product.mDividerHeight,mDividerWidth:this.order.product.mDividerWidth,mDividerThickness:this.order.product.mDividerThickness,fDividerHeight:this.order.product.fDividerHeight,fDividerWidth:this.order.product.fDividerWidth,fDividerThickness:this.order.product.fDividerThickness,deadline:this.order.deadline,comment:this.order.comment};console.log(t),z(this.order).then(function(t){console.log(t.data.msg)}).catch(function(t){console.log(t.data)})}},mounted:function(){var t=this;Q().then(function(e){var r=t;r.fullData=e.data,e.data.forEach(function(t){r.companies.push(t.company)}),t.loading=!1}).catch(function(t){console.log(t.data)})},watch:{"order.company":function(t){var e=this;e.products=[],e.fullData.forEach(function(r){r.company===t&&r.products.forEach(function(t){e.products.push(t)})}),e.productSelectDisabled=!1},"order.product":function(t){this.showDetails=!0,this.selectedProductDetails=t}}},K={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",[r("v-flex",{attrs:{md10:"",xs12:"","offset-md1":""}},[r("div",{staticClass:"white elevation-2"},[r("v-toolbar",{staticClass:"blue darken-3",attrs:{flat:"",dense:"",dark:""}},[r("v-toolbar-title",[t._v("ახალი შეკვეთა")])],1),t._v(" "),t.loading?r("v-progress-linear",{attrs:{loading:t.loading}}):t._e(),t._v(" "),r("v-card",[r("v-form",[r("v-card-title",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("აირჩიეთ კომპანია")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:t.companies},model:{value:t.order.company,callback:function(e){t.$set(t.order,"company",e)},expression:"order.company"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("აირჩიეთ პროდუქტი")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{disabled:t.productSelectDisabled,items:t.products,"item-text":"productName",autocomplete:""},model:{value:t.order.product,callback:function(e){t.$set(t.order,"product",e)},expression:"order.product"}})],1),t._v(" "),t.showDetails?r("v-flex",{attrs:{xs12:""}},[r("table",{attrs:{id:"productInfoTable"}},[r("tr",[r("th",[t._v("შრე - "+t._s(t.selectedProductDetails.layerQuantity))]),t._v(" "),r("th",[t._v("პროფილი")]),t._v(" "),r("th",[t._v("მამალი ტიხარი")]),t._v(" "),r("th",[t._v("დედალი ტიხარი")]),t._v(" "),r("th",[t._v("ყუთი")])]),t._v(" "),r("tr",[r("td",t._l(t.selectedProductDetails.layers,function(e){return r("span",[t._v(t._s(e)),r("br")])})),t._v(" "),r("td",[t._v(t._s(t.selectedProductDetails.profile))]),t._v(" "),r("td",[t._v(t._s(t.selectedProductDetails.mDividerHeight)+"x"+t._s(t.selectedProductDetails.mDividerWidth)+"x"+t._s(t.selectedProductDetails.mDividerThickness))]),t._v(" "),r("td",[t._v(t._s(t.selectedProductDetails.fDividerHeight)+"x"+t._s(t.selectedProductDetails.fDividerWidth)+"x"+t._s(t.selectedProductDetails.fDividerThickness))]),t._v(" "),r("td",[t._v(t._s(t.selectedProductDetails.boxHeight)+"x"+t._s(t.selectedProductDetails.boxWidth)+"x"+t._s(t.selectedProductDetails.boxThickness))])])])]):t._e()],1),t._v(" "),r("v-layout",[r("v-flex",{attrs:{xs4:""}},[r("v-text-field",{attrs:{label:"Box Quantity",type:"number"},model:{value:t.order.boxQuantity,callback:function(e){t.$set(t.order,"boxQuantity",e)},expression:"order.boxQuantity"}}),t._v(" "),r("v-text-field",{attrs:{label:"Divider Quantity",type:"number"},model:{value:t.order.dividerQuantity,callback:function(e){t.$set(t.order,"dividerQuantity",e)},expression:"order.dividerQuantity"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("h4",[t._v("Deadline")]),t._v(" "),r("v-date-picker",{staticClass:"mt-3",attrs:{"full-width":"",landscape:""},model:{value:t.order.deadline,callback:function(e){t.$set(t.order,"deadline",e)},expression:"order.deadline"}})],1)],1),t._v(" "),r("v-layout",{staticClass:"mt-4",attrs:{row:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"input-7-1",label:"Comment","multi-line":""},model:{value:t.order.comment,callback:function(e){t.$set(t.order,"comment",e)},expression:"order.comment"}})],1)],1)],1),t._v(" "),r("v-btn",{staticClass:"primary",attrs:{dark:"",btnLoading:t.btnLoading},on:{click:t.newOrder}},[t._v("\n            Confirm\n          ")])],1)],1)],1)])],1)},staticRenderFns:[]};var X=r("VU/8")(q,K,!1,function(t){r("V5Oz")},"data-v-f4bb1772",null).exports;a.a.use(c.a);var tt=new c.a({mode:"history",routes:[{path:"/",name:"dashboard",component:f,beforeEnter:p},{path:"/login",name:"login",component:C},{path:"/register",name:"register",component:E,beforeEnter:p},{path:"/clients",name:"clients",component:S,beforeEnter:p},{path:"/clients/product-show/:id",name:"productShow",props:!0,component:M,beforeEnter:p},{path:"/clients/:id/new-product",name:"newProduct",props:!0,component:O,beforeEnter:p},{path:"/orders",name:"orders",component:J,beforeEnter:p},{path:"/orders/new",name:"newOrder",component:X,beforeEnter:p}]}),et=r("3EgV"),rt=r.n(et),at=r("9JMe");r("7zck");a.a.config.productionTip=!1,a.a.use(rt.a),Object(at.sync)(v,tt),new a.a({el:"#app",router:tt,store:v,components:{App:l},template:"<App/>"})},V5Oz:function(t,e){},ZAj9:function(t,e){},a1Q3:function(t,e){},bAxu:function(t,e){},"fBH+":function(t,e){},gpo5:function(t,e){},i6lQ:function(t,e){},"o2/x":function(t,e){},tvef:function(t,e){},"xe+g":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6155a20dcecdfe73529.js.map