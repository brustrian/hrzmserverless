(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{241:function(e,t,r){var n=r(6);n(n.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},258:function(e,t,r){var content=r(415);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(10).default)("742075de",content,!0,{sourceMap:!1})},414:function(e,t,r){"use strict";var n=r(258);r.n(n).a},415:function(e,t,r){(t=r(9)(!1)).push([e.i,".titGrade1{color:var(--cuarto);margin-bottom:15px}.bit-col-1{width:300px}.bit-col-2{width:calc(100% - 300px);padding-left:15px;padding-right:15px;display:flex;justify-content:flex-start;flex-wrap:wrap}.colorRaya{color:var(--primero)}.miFlexC1{display:flex}",""]),e.exports=t},489:function(e,t,r){"use strict";r(46),r(22),r(18),r(15),r(38);var n=r(23),o=r(11),c=r(403);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={data:function(){return{message:"¡Felicidades! Has terminado.",instructions:"Ve a la página 24 de tu libro, al tema “Usa productos que puedan reutilizarse” y realiza la evaluación del módulo 1. Luego regresa a la plataforma para continuar."}},components:{ProblemThum:r(404).a,PillInfo:c.a},props:["api_data"],methods:{getEstado:function(e){return"en proceso"===e.evento?"active":"sin hacer"===e.evento?"wait":"finalizado"===e.evento?"end":void 0}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.d)(["problemsInfo"]),{},Object(o.d)("modules/user",["user","uid"]))},f=(r(414),r(14)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{staticClass:"pr-3 pl-3 pt-3"},[null!==e.user?r("h1",{staticClass:"titGrade1"},[e._v(e._s(e.user.Grade)+" "+e._s(e.user.Nivel)+" "),r("span",{staticClass:"colorRaya"},[e._v("|")]),e._v(" "+e._s(e.user.Seccion))]):e._e(),e._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"miFlexC1",attrs:{cols:"12"}},[r("div",{staticClass:"bit-col-1"},[r("PillInfo",{attrs:{isTeacher:!1}})],1),e._v(" "),null!==e.problemsInfo&&void 0!==e.problemsInfo?r("div",{staticClass:"bit-col-2"},e._l(e.problemsInfo.problematicas,(function(t,n){return r("ProblemThum",{key:n,attrs:{isTeacher:!1,estado:e.getEstado(t.estado),message:t.estado.mensaje,actualmsg:t.actualmsg,instructions:t.instruc,api_data:t}})})),1):e._e()])],1)],1)],1)}),[],!1,null,null,null);t.a=component.exports},647:function(e,t,r){"use strict";r.r(t);r(46),r(22),r(15),r(38),r(241),r(18),r(24);var n=r(2),o=r(23),c=r(19),l=r.n(c),d=r(11),f=r(246),m=r(489);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{HeadLoger:f.a,PanelAlumno:m.a},middleware:"auth_alumno",computed:O({},Object(d.d)(["api_global","overlay"]),{overlay_vuex:function(){return this.overlay}}),methods:O({},Object(d.b)(["setProblemsInfo"])),checkProblem:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},asyncData:function(e){e.isDev,e.route;var t=e.store;e.env,e.params,e.query,e.req,e.res,e.redirect,e.error;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,i,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.state.problemsInfo){e.next=33;break}return e.prev=1,e.next=4,l.a.get(t.state.api_global+"homelist/"+t.state.modules.user.user.IdAlumno+"/"+t.state.modules.user.user.ciclo+"?api_token=uYOBnJDBgEkQu0kQAPSpUcOxZzdMZaoB61PdXDXoR7A4hc56BsGJj64fI780");case 4:r=e.sent,n=r.data.data,i=0;case 7:if(!(i<n.problematicas.length)){e.next=26;break}if(o=n.problematicas[i],(c=o.results.sort((function(a,b){return null===a.done&&(a.done=""),null===b.done&&(b.done=""),a.done<b.done?1:a.done>b.done?-1:0}))).length>0&&(n.problematicas[i].actualmsg=c[0].messagended),null===o.idTarea){e.next=22;break}return e.prev=12,e.delegateYield(regeneratorRuntime.mark((function e(){var r,c,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t.state.api_global+"problematica/"+o.id+"/"+o.idTarea+"?api_token=uYOBnJDBgEkQu0kQAPSpUcOxZzdMZaoB61PdXDXoR7A4hc56BsGJj64fI780");case 2:r=e.sent,c=r.data.data,d=0,f=0,c.infotabs.forEach((function(e){"finalizado"!==e.order&&(!0===e.data.success&&d++,f++)})),c.habilidades.forEach((function(e){Array.isArray(e.intros)&&e.intros.forEach((function(e){!0===e.success&&d++,f++}))})),n.problematicas[i].totalPer=Math.trunc(d*(100/f));case 9:case"end":return e.stop()}}),e)}))(),"t0",14);case 14:e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),n.problematicas[i].totalPer=0,console.log(e.t1);case 20:e.next=23;break;case 22:n.problematicas[i].totalPer=0;case 23:i++,e.next=7;break;case 26:t.commit("setProblemsInfo",n),e.next=33;break;case 29:e.prev=29,e.t2=e.catch(1),console.log(e.t2),t.commit("setProblemsInfo",null);case 33:case"end":return e.stop()}}),e,null,[[1,29],[12,16]])})))()}},y=r(14),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("HeadLoger",{attrs:{isTeacher:!1,hideOptions:!1}}),e._v(" "),r("PanelAlumno"),e._v(" "),e.overlay_vuex.val?r("v-overlay",{attrs:{opacity:1,color:"white","z-index":"99999"}},[r("div",{staticClass:"d-flex flex-column align-center justify-center"},[r("v-progress-circular",{attrs:{indeterminate:"",size:"64",color:"#622cf5"}}),e._v(" "),r("p",{staticClass:"mt-3 black--text"},[e._v(e._s(e.overlay_vuex.msg))])],1)]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);