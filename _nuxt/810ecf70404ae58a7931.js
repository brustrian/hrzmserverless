(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{242:function(t,e,r){var content=r(256);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("ae7f6b76",content,!0,{sourceMap:!1})},251:function(t,e,r){var content=r(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("212c9bc3",content,!0,{sourceMap:!1})},252:function(t,e,r){var content=r(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("1c0e1ee1",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";var o={props:["api_data"]},n=(r(255),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("div",{staticClass:"ma-2 mt-1"},[r("v-card",{staticClass:"cBkChng"},[r("div",{staticClass:"bcCont"},[r("img",{attrs:{src:t.api_data.image,alt:""}})]),t._v(" "),r("div",{staticClass:"bcInfobook"},[r("div",[r("h5",[t._v(t._s(t.api_data.nameBook))]),t._v(" "),r("p",{staticClass:"mb-0"},[t._v(t._s(t.api_data.totalProb)+" lecciones")])]),t._v(" "),r("div",[r("h5",[t._v("Código redimido")]),t._v(" "),r("p",{staticClass:"mb-0"},[t._v(t._s(t.api_data.code))])])])])],1)])}),[],!1,null,null,null);e.a=component.exports},254:function(t,e,r){"use strict";r(65),r(241);var o={props:["isTeacher","api_data"],computed:{finalNote:function(){var t=this.api_data.resultHabs.reduce((function(t,e){return t+e.score}),0);return Math.trunc(t/4)}},methods:{formatDate:function(dt){return dt.substring(0,5).replace("-","/")},getIconMono:function(t){return r("Leer"===t?240:"Escuchar"===t?243:"Escribir"===t?244:"Hablar"===t?245:240)}}},n=(r(398),r(14)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-card",{staticClass:"mRounded mr-7 mb-7",attrs:{ripple:!1}},[r("div",{staticClass:"wFullPads boxyInfo"},[r("h5",[t._v(t._s(t.api_data.nameProb))])]),t._v(" "),r("div",{staticClass:"frnjDate"},[r("v-icon",{staticClass:"icnCalendPrbl"},[t._v("mdi-calendar")]),t._v(" "),r("p",{staticClass:"fDatePrblm"},[t._v("Del "+t._s(t.formatDate(t.api_data.init))+" al "+t._s(t.formatDate(t.api_data.end)))]),t._v(" "),r("div",{staticClass:"cnThmMini"},[r("img",{staticClass:"bgProblemThumb",attrs:{src:t.api_data.image,alt:""}})])],1),t._v(" "),r("div",{staticClass:"frnjInfo"},[r("div",{staticClass:"contInfChips1 "},t._l(t.api_data.resultHabs,(function(e,o){return r("div",{key:"hab_"+o,staticClass:"linderMan"},[r("div",{staticClass:"eH"},[r("img",{staticClass:"iconLinder2",attrs:{src:t.getIconMono(e.hab),alt:""}})]),t._v(" "),r("p",{staticClass:"pLinder pLinder2 eH"},[t._v(t._s(e.hab)+": "),r("span",[t._v(t._s(e.score))])])])})),0)]),t._v(" "),r("div",{staticClass:"rndNoteC"},[r("h3",[t._v(t._s(t.finalNote))])]),t._v(" "),t.isTeacher?r("v-row",{staticClass:"sectInfo",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1 d-flex flex-row justify-start align-content-start brdRight1",attrs:{cols:"6"}},[r("div",[r("v-icon",{staticClass:"icnCalendPrbl2"},[t._v("mdi-information-outline")])],1),t._v(" "),r("p",{staticClass:"mb-0"},[t._v("Tienes 20 textos por valorar")])]),t._v(" "),r("v-col",{staticClass:"pa-1 d-flex flex-row justify-start align-content-start",attrs:{cols:"6"}},[r("div",[r("v-icon",{staticClass:"icnCalendPrbl2"},[t._v("mdi-information-outline")])],1),t._v(" "),r("p",{staticClass:"mb-0"},[t._v("Tienes 20 textos por valorar")])])],1):t._e()],1)],1)}),[],!1,null,null,null);e.a=component.exports},255:function(t,e,r){"use strict";var o=r(242);r.n(o).a},256:function(t,e,r){(e=r(9)(!1)).push([t.i,".bcInfobook{display:flex;flex-direction:column;justify-content:space-between;padding:10px}.bcCont{width:150px;height:180px;padding:10px}.bcCont>img{width:100%;height:100%}.cBkChng{width:350px;display:flex;flex-direction:row}",""]),t.exports=e},259:function(t,e,r){var content=r(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("8b7347aa",content,!0,{sourceMap:!1})},260:function(t,e,r){var content=r(419);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("7aedad4f",content,!0,{sourceMap:!1})},261:function(t,e,r){var content=r(421);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("340beb4f",content,!0,{sourceMap:!1})},266:function(t,e,r){"use strict";r(84);var o=r(253),n=r(254),l=r(491),c=l.b.reactiveProp,d={extends:l.a,mixins:[c],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},m={data:function(){return{items:["Primero de primaria (2017)","Segundo de primaria (2018)","Tercero de primaria (2019)"],date1:"",date2:"",dateArray:[],menu:!1,modal:!1,menu1:!1,menu2:!1,datacollection:null,months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]}},props:["api_data"],components:{VcarProblem:n.a,BookCanje:o.a,LineChart:d},created:function(){var t=new Date;this.date1=t.getFullYear()+"-01",this.date2=t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2),this.fillData()},computed:{dateRangeText:function(){return this.dates.join(" ~ ")},getMinDate:function(){return(new Date).getFullYear()+"-01"},getMaxDate:function(){return(new Date).getFullYear()+"-12"},labels:function(){var t=parseInt(this.date1.substring(5)),e=parseInt(this.date2.substring(5));return this.months.filter((function(r,o){var n=o+1;return n>=t&&n<=e}))}},methods:{fillData:function(){this.datacollection={labels:this.labels,datasets:[{label:"Leer",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(246,145,30,1)",data:this.getResults("lec")},{label:"Escribir",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,158,226,1)",data:this.getResults("text")},{label:"Escuchar",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(99,63,152,1)",data:this.getResults("escu")},{label:"Hablar",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(101,178,46,1)",data:this.getResults("exp")}]}},getResults:function(t){var e=this.api_data.find((function(e){return e.type===t})),r=[];return this.dateArray.forEach((function(t){var o=e.results.find((function(e){return e.month===t}));void 0!==o?r.push(o.score):r.push(0)})),r},calcDateArray:function(){for(var t=parseInt(this.date1.substring(5)),e=parseInt(this.date2.substring(5)),r=[],i=t;i<=e;i++)r.push(("0"+i).slice(-2));this.dateArray=r}},watch:{date1:function(){""!==this.date1&&""!==this.date2&&this.date1<=this.date2&&(this.calcDateArray(),this.fillData())},date2:function(){""!==this.date1&&""!==this.date2&&this.date1<=this.date2&&(this.calcDateArray(),this.fillData())}}},h=(r(400),r(14)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-card",{staticClass:"mRounded2"},[r("div",{staticClass:"wFull3 boxyInfo"},[r("h5",[t._v("Gráfica de habilidades")]),t._v(" "),r("div",{staticClass:"inpDater d-flex"},[r("div",{staticClass:"dcolsDate"},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px","max-width":"350px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-text-field",t._g({attrs:{label:"Selecciona rango","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}},o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),r("v-date-picker",{attrs:{type:"month",min:t.getMinDate,max:t.getMaxDate,locale:"es"},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1)],1),t._v(" "),r("div",{staticClass:"dcolsDate"},[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px","max-width":"350px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-text-field",t._g({attrs:{label:"Selecciona rango","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}},o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),r("v-date-picker",{attrs:{type:"month",min:t.getMinDate,max:t.getMaxDate,locale:"es"},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)])]),t._v(" "),r("div",{staticClass:"pa-8 pt-0"},[r("line-chart",{attrs:{"chart-data":t.datacollection,width:21,height:9}})],1)])],1)}),[],!1,null,null,null);e.a=component.exports},398:function(t,e,r){"use strict";var o=r(251);r.n(o).a},399:function(t,e,r){(e=r(9)(!1)).push([t.i,".brdRight1{border-right:1px solid #fff}.sectInfo{background-color:var(--segundo);padding:8px}.rndNoteC>h3{color:var(--cuarto);font-family:var(--Gotham-medium)}.rndNoteC{position:absolute;width:45px;height:45px;display:flex;justify-content:center;align-items:center;border-radius:50px!important;padding:0;background-color:var(--quinto);border:4px solid var(--sexto);box-sizing:content-box;top:-20px;right:-20px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.eH{height:22px!important}.frnjInfo{padding:10px}.pLinder2{width:calc(100% - 45px);margin:0!important}.iconLinder2{width:26px;margin-right:6px;margin-top:-6px}.cnThmMini{position:absolute;width:80px;height:80px;right:10px;bottom:16px;border-radius:10px;overflow:hidden}.bgProblemThumb{position:absolute;width:100%;left:0;right:0;top:0;bottom:0;margin:auto}.icnCalendPrbl{background-color:#fff;color:var(--palet1)!important;border-radius:50px;margin-right:10px;font-size:20px;padding:5px}.icnCalendPrbl2{color:var(--primero)!important;border-radius:50px;margin-right:5px;font-size:20px!important;margin-top:-8px}.fDatePrblm{color:#fff;margin:0!important;font-family:var(--Gotham-book)}.frnjDate{position:relative;width:100%;padding:10px;background-color:var(--palet1);color:var(--sexto);display:flex;flex-direction:column;align-items:flex-start}.mRounded{border-radius:10px!important;min-width:300px;width:300px}.wFullPads{width:100%;padding:20px 100px 20px 20px;border-radius:10px}.boxyInfo h1,.boxyInfo p{color:var(--cuarto)}",""]),t.exports=e},400:function(t,e,r){"use strict";var o=r(252);r.n(o).a},401:function(t,e,r){(e=r(9)(!1)).push([t.i,"",""]),t.exports=e},409:function(t,e,r){var map={"./af":267,"./af.js":267,"./ar":268,"./ar-dz":269,"./ar-dz.js":269,"./ar-kw":270,"./ar-kw.js":270,"./ar-ly":271,"./ar-ly.js":271,"./ar-ma":272,"./ar-ma.js":272,"./ar-sa":273,"./ar-sa.js":273,"./ar-tn":274,"./ar-tn.js":274,"./ar.js":268,"./az":275,"./az.js":275,"./be":276,"./be.js":276,"./bg":277,"./bg.js":277,"./bm":278,"./bm.js":278,"./bn":279,"./bn.js":279,"./bo":280,"./bo.js":280,"./br":281,"./br.js":281,"./bs":282,"./bs.js":282,"./ca":283,"./ca.js":283,"./cs":284,"./cs.js":284,"./cv":285,"./cv.js":285,"./cy":286,"./cy.js":286,"./da":287,"./da.js":287,"./de":288,"./de-at":289,"./de-at.js":289,"./de-ch":290,"./de-ch.js":290,"./de.js":288,"./dv":291,"./dv.js":291,"./el":292,"./el.js":292,"./en-SG":293,"./en-SG.js":293,"./en-au":294,"./en-au.js":294,"./en-ca":295,"./en-ca.js":295,"./en-gb":296,"./en-gb.js":296,"./en-ie":297,"./en-ie.js":297,"./en-il":298,"./en-il.js":298,"./en-nz":299,"./en-nz.js":299,"./eo":300,"./eo.js":300,"./es":301,"./es-do":302,"./es-do.js":302,"./es-us":303,"./es-us.js":303,"./es.js":301,"./et":304,"./et.js":304,"./eu":305,"./eu.js":305,"./fa":306,"./fa.js":306,"./fi":307,"./fi.js":307,"./fo":308,"./fo.js":308,"./fr":309,"./fr-ca":310,"./fr-ca.js":310,"./fr-ch":311,"./fr-ch.js":311,"./fr.js":309,"./fy":312,"./fy.js":312,"./ga":313,"./ga.js":313,"./gd":314,"./gd.js":314,"./gl":315,"./gl.js":315,"./gom-latn":316,"./gom-latn.js":316,"./gu":317,"./gu.js":317,"./he":318,"./he.js":318,"./hi":319,"./hi.js":319,"./hr":320,"./hr.js":320,"./hu":321,"./hu.js":321,"./hy-am":322,"./hy-am.js":322,"./id":323,"./id.js":323,"./is":324,"./is.js":324,"./it":325,"./it-ch":326,"./it-ch.js":326,"./it.js":325,"./ja":327,"./ja.js":327,"./jv":328,"./jv.js":328,"./ka":329,"./ka.js":329,"./kk":330,"./kk.js":330,"./km":331,"./km.js":331,"./kn":332,"./kn.js":332,"./ko":333,"./ko.js":333,"./ku":334,"./ku.js":334,"./ky":335,"./ky.js":335,"./lb":336,"./lb.js":336,"./lo":337,"./lo.js":337,"./lt":338,"./lt.js":338,"./lv":339,"./lv.js":339,"./me":340,"./me.js":340,"./mi":341,"./mi.js":341,"./mk":342,"./mk.js":342,"./ml":343,"./ml.js":343,"./mn":344,"./mn.js":344,"./mr":345,"./mr.js":345,"./ms":346,"./ms-my":347,"./ms-my.js":347,"./ms.js":346,"./mt":348,"./mt.js":348,"./my":349,"./my.js":349,"./nb":350,"./nb.js":350,"./ne":351,"./ne.js":351,"./nl":352,"./nl-be":353,"./nl-be.js":353,"./nl.js":352,"./nn":354,"./nn.js":354,"./pa-in":355,"./pa-in.js":355,"./pl":356,"./pl.js":356,"./pt":357,"./pt-br":358,"./pt-br.js":358,"./pt.js":357,"./ro":359,"./ro.js":359,"./ru":360,"./ru.js":360,"./sd":361,"./sd.js":361,"./se":362,"./se.js":362,"./si":363,"./si.js":363,"./sk":364,"./sk.js":364,"./sl":365,"./sl.js":365,"./sq":366,"./sq.js":366,"./sr":367,"./sr-cyrl":368,"./sr-cyrl.js":368,"./sr.js":367,"./ss":369,"./ss.js":369,"./sv":370,"./sv.js":370,"./sw":371,"./sw.js":371,"./ta":372,"./ta.js":372,"./te":373,"./te.js":373,"./tet":374,"./tet.js":374,"./tg":375,"./tg.js":375,"./th":376,"./th.js":376,"./tl-ph":377,"./tl-ph.js":377,"./tlh":378,"./tlh.js":378,"./tr":379,"./tr.js":379,"./tzl":380,"./tzl.js":380,"./tzm":381,"./tzm-latn":382,"./tzm-latn.js":382,"./tzm.js":381,"./ug-cn":383,"./ug-cn.js":383,"./uk":384,"./uk.js":384,"./ur":385,"./ur.js":385,"./uz":386,"./uz-latn":387,"./uz-latn.js":387,"./uz.js":386,"./vi":388,"./vi.js":388,"./x-pseudo":389,"./x-pseudo.js":389,"./yo":390,"./yo.js":390,"./zh-cn":391,"./zh-cn.js":391,"./zh-hk":392,"./zh-hk.js":392,"./zh-tw":393,"./zh-tw.js":393};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=409},416:function(t,e,r){"use strict";var o=r(259);r.n(o).a},417:function(t,e,r){(e=r(9)(!1)).push([t.i,".imgSelecThumb{width:90px;border-radius:10px;margin-bottom:10px}.grRadiFlex2 .v-input--selection-controls__input{margin:0!important}.txtClipped{max-width:50%!important;margin-top:20px!important;margin-bottom:20px!important}.txtClipped .v-input__slot{background-color:#dcdfff!important;font-family:var(--Gotham-medium)!important}.circleColor{border-radius:70px}.circle1,.circleColor{width:60px;height:60px;margin-bottom:10px}.circle1{border-radius:70px;border:5px solid #ffaebb}.circle2{border-radius:70px;border:5px solid var(--palet2C)}.circle2,.circle3{width:60px;height:60px;margin-bottom:10px}.circle3{border-radius:70px;border:5px solid var(--palet3C)}.circle4{width:60px;height:60px;border-radius:70px;margin-bottom:10px;border:5px solid var(--palet4C)}.bgPalet1{background-color:var(--palet1)}.bgPalet2{background-color:var(--palet2)}.bgPalet3{background-color:var(--palet3)}.bgPalet4{background-color:var(--palet4)}.cnTxImp{padding:50px 50px 10px;display:flex;justify-content:center;flex-direction:column;align-items:center}.cnTxImp .txtcnter{margin-bottom:10px!important;color:var(--coltexto1)!important;font-family:var(--Gotham-light)!important}.bgradious .mdi-google-classroom{font-size:50px!important;color:var(--primero)!important;margin-bottom:20px}.imgAvaSelect{width:90px;border:5px solid var(--primero);border-radius:80px;margin-top:20px}.grRadiFlex2 .v-radio{flex-direction:column-reverse}.grRadiFlex2 .v-input--radio-group__input{justify-content:center}.grRadiFlex2 .v-input__control{width:100%!important}.grRadiFlex2{width:100%;display:flex;justify-content:space-between;flex-direction:row;margin-top:10px!important;margin-bottom:10px!important}.bgradious h5{color:var(--primero)!important}.bgradious{border-radius:10px!important;padding:30px!important;text-align:center;color:var(--cuarto)!important}",""]),t.exports=e},418:function(t,e,r){"use strict";var o=r(260);r.n(o).a},419:function(t,e,r){(e=r(9)(!1)).push([t.i,".btnOptiMenu{position:absolute;right:0;top:0;background-color:var(--cuarto);border-radius:0 0 0 10px;height:40px!important;max-width:30px!important;min-width:30px!important}.bgScndPale1{border-right:10px solid #bb3a4b}.trng{width:0;height:0;border-top:10px solid transparent;border-bottom:10px solid transparent;position:absolute;transform:rotate(-135deg);top:-13px;left:5px}.bgPalet1{background-color:var(--palet1)}.plecaGrade{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:5px;top:24px;left:-13px;cursor:pointer}.plecaGrade h5{color:#fff}.plsClsTh{display:flex;justify-content:center;align-items:center}.pointClThmb{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding-top:10px}.pointClThmb h3{color:var(--cuarto);line-height:var(--interS)}.pointClThmb p{color:var(--cuarto);font-size:var(--textoXXS);line-height:var(--interXXS);font-family:var(--Gotham-book);margin:0!important}.cLogoHb{width:20px}.cLogoHb2{width:40px}.stlDates2 h5{color:var(--primero)}.stlDates2 h4,.stlDates2 h5{font-size:var(--textoXXS);line-height:var(--interXXS)}.stlDates2 h4{color:var(--cuarto)}.stlDates2 p{color:var(--primero);font-size:var(--textoXXS);line-height:var(--interXXS);font-family:var(--Gotham-book);margin:0!important}.pilsDateCont{display:flex;flex-direction:row;padding:5px;background-color:var(--sexto);border-radius:10px;margin-bottom:5px}.dnone{display:none!important}.chHbxtr{padding:15px 24px 5px 15px;max-width:120px}.imgXtra{left:12px}.xtrNmb{padding-left:36px}.xtrThmb{position:absolute;top:0;right:7px;text-align:right}.contAliInfo{justify-content:space-around}.contAliInfo,.contAliInfo2{width:150px;height:100%;background-color:var(--segundo);padding:10px;display:flex;flex-direction:column}.contAliInfo2{max-height:284px;overflow-y:scroll;justify-content:flex-start}.pillState2 h5{font-size:var(--textoXS);line-height:var(--interXS);font-family:var(--Gotham-book);margin-bottom:0!important;color:var(--cuarto)}.pillState2{width:200px;padding:10px;background-color:var(--quinto);min-height:calc(100% - 210px);display:flex;justify-content:flex-end;flex-direction:column}.miniTxtBit{position:absolute;color:var(--cuarto);font-family:var(--gotham-bold);bottom:-23px;font-size:7px;margin-bottom:0!important;letter-spacing:normal;text-transform:none}.btBitMini1{background:var(--cuarto)!important}.cnProThuButs2{width:100%;padding-bottom:10px;display:flex;justify-content:space-between}.boxyState2{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;white-space:nowrap;font-family:var(--Gotham-light);font-size:var(--textoXXXS);margin-top:2px}.boxyState2,.twolines{display:block;max-width:100%;text-overflow:ellipsis;overflow:hidden}.twolines{margin:0 auto;line-height:1;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-family:var(--Gotham-medium)}.dFlexcntBoxy2{padding:5px 10px;color:#fff}.bgTitDeg2,.dFlexcntBoxy2{position:absolute;width:100%;bottom:0;left:0}.bgTitDeg2{height:100px;top:auto!important;transform:rotate(180deg)}.progrss{width:200px;height:10px;background-color:var(--palet1C)}.wprogress{width:10%;height:10px;background-color:var(--palet1);position:relative}.prgssNumb1{margin:0;position:absolute;font-size:10px;font-family:var(--gotham-light);color:var(--sexto);right:0;top:-3px}.bgProblemThumb{position:absolute;width:100%;height:100%;left:0;right:0;top:0;bottom:0;margin:auto}.contThumb{border-radius:10px;border:1px solid #e4e4e4;overflow:hidden;width:fit-content;height:fit-content;width:-webkit-fit-content;width:-moz-fit-content;height:-webkit-fit-content;height:-moz-fit-content;box-shadow:0 0 0 rgba(0,0,0,.05),0 0 10px rgba(0,0,0,.1);margin-right:30px!important;margin-bottom:30px!important;display:flex;flex-direction:row}.contImgThumPr{position:relative;width:200px;height:200px;cursor:pointer}",""]),t.exports=e},420:function(t,e,r){"use strict";var o=r(261);r.n(o).a},421:function(t,e,r){(e=r(9)(!1)).push([t.i,'.titSctName2{color:var(--cuarto);margin-bottom:15px}.titSctName1:before{content:"";position:absolute;width:60px;height:5px;background-color:var(--cuarto);left:0;bottom:-5px}.titSctName1{position:relative;color:var(--cuarto);margin-bottom:15px}@media only screen and (max-width:960px){.titSctName1:before{content:"";position:absolute;width:60px;height:5px;background-color:var(--cuarto);left:0;right:0;margin:auto;bottom:-5px}}.wFull3{display:flex;flex-direction:row;justify-content:space-between}.wFull2,.wFull3{padding:20px;border-radius:10px}.wFull2{width:100%}',""]),t.exports=e},487:function(t,e,r){"use strict";r(46),r(22),r(18),r(15),r(38);var o=r(23),n=r(11),l=r(403),c=r(404),d=r(266),m=(r(84),r(24),r(2)),h=r(19),f=r.n(h);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={data:function(){return{checkbox:!1,radios1:null,radios2:null,switchMe:!1,loadingSave:!1}},computed:x({},Object(n.d)(["api_global","homelistTeacher"]),{showPopup:{get:function(){return this.openDialog},set:function(t){t||this.$emit("close")}}}),props:["openDialog","selectedClass","selectedColor","selectedImage"],methods:x({},Object(n.b)(["showMsgAlert"]),{saveStyle:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingSave=!0,(r=new FormData).set("idGrade",t.selectedClass),r.set("idColor",t.radios1),r.set("idImage",t.radios2),e.prev=5,e.next=8,f.a.post(t.api_global+"stylegrade?api_token=uYOBnJDBgEkQu0kQAPSpUcOxZzdMZaoB61PdXDXoR7A4hc56BsGJj64fI780",r);case 8:e.sent,t.$emit("updateStyle",{selected_color:t.radios1,selected_image:t.radios2}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0),t.showMsgAlert({show:!0,msg:"Ocurrió un error inesperado. Lamentamos el inconveniente.",type:"error"});case 16:t.showPopup=!1,t.loadingSave=!1;case 18:case"end":return e.stop()}}),e,null,[[5,12]])})))()}}),watch:{showPopup:function(){if(this.showPopup){var t=this.selectedColor,e=this.homelistTeacher.colorsGrades.find((function(e){return e.colorcode===t}));this.radios1=void 0===e?null:e.id;var r=this.selectedImage,o=this.homelistTeacher.imagesGrades.find((function(t){return t.image===r}));this.radios2=void 0===o?null:o.id}}}},_=(r(416),r(14));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={data:function(){return{items:[{title:"Administrar"},{title:"Código de clase"}],openDialog1:!1,showPb:!1,showInfo:!1}},props:["api_data"],components:{PopUpAdminClass:Object(_.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-dialog",{attrs:{width:"650"},model:{value:t.showPopup,callback:function(e){t.showPopup=e},expression:"showPopup"}},[r("v-card",{staticClass:"bgradious"},[r("v-icon",[t._v("mdi-google-classroom")]),t._v(" "),r("h1",[t._v("Administra tu clase")]),t._v(" "),r("h4",{staticClass:"mb-8"},[t._v("Crea y comparte el código de clase a tus alumnos.")]),t._v(" "),r("v-form",[r("v-container",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"cnTxImp",attrs:{cols:"12"}},[r("h5",[t._v("Comparte el código de clase a tus alumnos.")]),t._v(" "),r("v-text-field",{staticClass:"txtClipped",attrs:{"append-outer-icon":"mdi-paperclip",solo:"",readonly:"",value:t.selectedClass}})],1)],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("h5",[t._v("Selecciona color")]),t._v(" "),r("v-radio-group",{staticClass:"grRadiFlex2 ",attrs:{row:""},model:{value:t.radios1,callback:function(e){t.radios1=e},expression:"radios1"}},t._l(t.homelistTeacher.colorsGrades,(function(t,e){return r("v-radio",{key:"color_"+e,attrs:{selected:"",color:"indigo",value:t.id}},[r("template",{slot:"label"},[r("div",{staticClass:"circleColor",style:"background-color: "+t.colorcode+";"})])],2)})),1)],1)],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",[r("h5",[t._v("Imagen de fondo")]),t._v(" "),r("v-radio-group",{staticClass:"grRadiFlex2 ",attrs:{row:""},model:{value:t.radios2,callback:function(e){t.radios2=e},expression:"radios2"}},t._l(t.homelistTeacher.imagesGrades,(function(t,e){return r("v-radio",{key:"image_"+e,attrs:{selected:"",color:"indigo",value:t.id}},[r("template",{slot:"label"},[r("img",{staticClass:"imgSelecThumb",attrs:{src:t.image,alt:""}})])],2)})),1)],1)],1)],1)],1),t._v(" "),r("v-btn",{staticClass:"btnBit",attrs:{disabled:null===t.radios1||null===t.radios2,loading:t.loadingSave},on:{click:function(e){return t.saveStyle()}}},[t._v("Modificar")])],1)],1)],1)}),[],!1,null,null,null).exports},computed:y({},Object(n.d)(["homelistTeacher"]),{getTotalStudents:function(){return this.api_data.totalStudents>99?"99+":this.api_data.totalStudents},getColor:function(){return this.api_data.color}}),methods:y({},Object(n.b)(["updateGradeStyle"]),{showP:function(){this.showInfo=!1,this.showPb=!this.showPb},showI:function(){this.showInfo=!this.showInfo,this.showPb=!1},sendClass:function(){var t=this.api_data.idClass;this.$router.push({path:"/clase/"+t})},getActiveTabClass:function(t){return"Lectura"===t?"bgLeer":"Escribir"===t?"bgEscribir":"Escuchar"===t?"bgEscuchar":"Hablar"===t?"bgHablar":""},getActiveTabImage:function(t){return"Lectura"===t?r(240):"Escribir"===t?r(244):"Escuchar"===t?r(243):"Hablar"===t?r(245):""},openAdminPopup:function(){this.openDialog1=!0},updateStyle:function(t){var e=this.homelistTeacher.colorsGrades.find((function(e){return e.id===t.selected_color})),r=void 0===e?null:e.colorcode,o=this.homelistTeacher.imagesGrades.find((function(e){return e.id===t.selected_image})),image=void 0===o?null:o.image,n=this.api_data.idClass;this.updateGradeStyle({idClass:n,color:r,image:image})}})};r(418);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var O={components:{ClaseThumb:Object(_.a)(C,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("PopUpAdminClass",{attrs:{openDialog:t.openDialog1,selectedClass:t.api_data.idClass,selectedColor:t.api_data.color,selectedImage:t.api_data.image},on:{close:function(e){t.openDialog1=!1},updateStyle:function(e){return t.updateStyle(e)}}}),t._v(" "),r("div",{staticClass:"contThumb"},[r("div",{staticClass:"rowThumb1"},[r("div",{staticClass:"contImgThumPr"},[r("img",{staticClass:"bgProblemThumb",attrs:{src:t.api_data.image,alt:""},on:{click:t.sendClass}}),t._v(" "),r("div",{staticClass:"bgTitDeg bgTitDeg2",on:{click:t.sendClass}}),t._v(" "),r("div",{staticClass:"dFlexcntBoxy2",on:{click:t.sendClass}},[r("h5",{staticClass:"twolines"},[t._v(t._s(t.api_data.nameClass))])]),t._v(" "),r("v-menu",{attrs:{bottom:"",left:"","offset-y":""},on:{click:function(t){t.stopPropagation()}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-btn",t._g({staticClass:"btnOptiMenu",attrs:{dark:"",icon:""}},o),[r("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",{on:{click:function(e){return t.openAdminPopup()}}},[t._v("Administrar clase")])],1)],1)],1),t._v(" "),r("v-progress-linear",{attrs:{color:t.getColor,height:"10","buffer-value":"100",value:t.api_data.precent},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value;return[r("p",{staticClass:"prgssNumb1_alu"},[t._v(t._s(Math.ceil(o))+"%")])]}}])}),t._v(" "),r("div",{staticClass:"pillState2"},[r("div",{staticClass:"cnProThuButs2"},[r("div",[r("v-btn",{staticClass:"btBitMini1",attrs:{fab:"","x-small":"",dark:""}},[r("v-icon",[t._v(t._s(t.getTotalStudents))]),t._v(" "),r("p",{staticClass:"miniTxtBit"},[t._v("Por valorar")])],1)],1),t._v(" "),r("div",[r("v-btn",{staticClass:"btBitMini1 mr-2",attrs:{fab:"","x-small":"",dark:""},on:{click:t.showI}},[r("v-icon",[t._v("mdi-flash-alert")]),t._v(" "),r("p",{staticClass:"miniTxtBit"},[t._v("Lecciones")])],1),t._v(" "),r("v-btn",{staticClass:"btBitMini1",attrs:{fab:"","x-small":"",dark:""},on:{click:t.showP}},[r("v-icon",[t._v("mdi-information-variant")]),t._v(" "),r("p",{staticClass:"miniTxtBit"},[t._v("Información")])],1)],1)])])],1),t._v(" "),r("transition",{attrs:{name:"slideWidth"}},[t.showPb||t.showInfo?r("div",{staticClass:"rowThumb2"},[t.showPb?r("div",{staticClass:"contAliInfo"},t._l(t.api_data.totalsHabs,(function(e,o){return r("div",{key:"thab_"+o,staticClass:"pilsDateCont"},[r("div",{staticClass:"plsClsTh"},[r("img",{staticClass:"cLogoHb2",attrs:{src:t.getActiveTabImage(e.hab),alt:""}})]),t._v(" "),r("div",{staticClass:"pointClThmb"},[r("h3",[t._v(t._s(e.score))]),t._v(" "),r("p",[t._v(t._s(e.hab))])])])})),0):t._e(),t._v(" "),t.showInfo?r("div",{staticClass:"contAliInfo2"},t._l(t.api_data.problematics,(function(e,o){return r("div",{key:"problem_"+o,staticClass:"pilsDateCont mb-2"},[r("div",{staticClass:"stlDates2"},[r("h5",[t._v("Lección "+t._s(e.orderP))]),t._v(" "),r("h4",[t._v(t._s(e.nameP))])])])})),0):t._e()]):t._e()])],1),t._v(" "),r("div",{staticClass:"plecaGrade",style:"background-color: "+t.api_data.color+";",on:{click:t.sendClass}},[r("h5",[t._v(t._s(t.api_data.totalStudents)+" Alumnos")]),t._v(" "),r("div",{staticClass:"trng",style:"border-right: 10px solid "+t.api_data.color+"; opacity: 0.65"})])],1)}),[],!1,null,null,null).exports,GraphicModel1:d.a,ProblemThum:c.a,PillInfo:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.d)(["homelistTeacher"]))},P=(r(420),Object(_.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",{staticClass:"pr-3 pl-3 pt-3"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mb-3 d-flex justify-center justify-md-start",attrs:{cols:"12",sm:"12",md:"6"}},[r("h1",{staticClass:"titSctName1"},[t._v("Análisis anual")])]),t._v(" "),r("v-col",{staticClass:" mb-3 d-flex justify-center justify-md-end",attrs:{cols:"12",sm:"12",md:"6"}},[r("h3",{staticClass:"titSctName2"},[t._v("Ciclo activo")])])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:" mb-3 d-flex justify-center justify-md-start",attrs:{cols:"12",sm:"12",md:"12"}},[r("GraphicModel1",{staticStyle:{width:"100%"},attrs:{api_data:t.homelistTeacher.grafic}})],1)],1),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"mt-5 mb-3 d-flex justify-center justify-md-start",attrs:{cols:"12"}},[r("h1",{staticClass:"titSctName1"},[t._v("Mis clases")])]),t._v(" "),r("v-col",{staticClass:"mt-5 mb-3 d-flex justify-center justify-md-start flex-wrap",attrs:{cols:"12"}},t._l(t.homelistTeacher.grades,(function(t,e){return r("ClaseThumb",{key:"clase_"+e,attrs:{api_data:t}})})),1)],1)],1)],1)}),[],!1,null,null,null));e.a=P.exports},648:function(t,e,r){"use strict";r.r(e);r(46),r(22),r(18),r(15),r(38),r(24);var o=r(2),n=r(23),l=r(19),c=r.n(l),d=r(11),m=r(246),h=r(487);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={middleware:"auth_docente",components:{HeadLoger:m.a,PanelDocente:h.a},computed:v({},Object(d.d)(["api_global","overlay","msgAlert"]),{overlay_vuex:function(){return this.overlay},showAlert:{set:function(t){this.updateMsgAlert(t)},get:function(){return this.msgAlert.show}}}),methods:v({},Object(d.b)(["updateMsgAlert"])),asyncData:function(t){t.isDev,t.route;var e=t.store;t.env,t.params,t.query,t.req,t.res,t.redirect,t.error;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e.state.homelistTeacher){t.next=14;break}return t.prev=1,t.next=4,c.a.get(e.state.api_global+"homelistTeacher/"+e.state.modules.user.user.IdMaestro+"/"+e.state.modules.user.user.ciclo+"?api_token=uYOBnJDBgEkQu0kQAPSpUcOxZzdMZaoB61PdXDXoR7A4hc56BsGJj64fI780");case 4:r=t.sent,(o=r.data.data).grades.forEach((function(t,e){var r=t.problematics.sort((function(a,b){return a.orderP-b.orderP}));o.grades[e].problematics=r})),e.commit("setHomelistTeacher",o),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),e.commit("setHomelistTeacher",null);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()}},j=r(14),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-alert",{staticClass:"errorMsgAlert",attrs:{type:t.msgAlert.type,dense:"",tile:"",dismissible:"",transition:"scale-transition"},model:{value:t.showAlert,callback:function(e){t.showAlert=e},expression:"showAlert"}},[t._v(t._s(t.msgAlert.msg))]),t._v(" "),r("HeadLoger",{attrs:{isTeacher:!0,hideOptions:!1}}),t._v(" "),r("PanelDocente")],1)}),[],!1,null,null,null);e.default=component.exports}}]);