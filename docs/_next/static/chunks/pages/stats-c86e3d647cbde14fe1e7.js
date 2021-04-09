_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"+MOk":function(e,a,t){"use strict";t.r(a);var n=t("HALo"),i=t("vJKn"),s=t.n(i),r=t("rg98"),l=t("q1tI"),d=t.n(l),o=t("iae6"),c=t("ofer"),u=t("StWE"),f=["<20","20s","30s","40s","50s","60s","70s","80s","90+"],v=function(){return new Promise((function(e){Object(u.a)("https://data.ontario.ca/api/3/action/datastore_search?resource_id=455fd63b-603d-4608-8216-7d8647f43350&limit=1000000",(function(a){var t=function(e){var a={};return e.forEach((function(e){var t=e.Age_Group;if(a[t]){a[t].total+=1;var n="Fatal"===e.Outcome1?1:0,i="Resolved"===e.Outcome1?1:0;a[t].deceased+=n,a[t].resolved+=i,a[t].active+=1-n-i}else a[t]={total:1,deceased:"Fatal"===e.Outcome1?1:0,resolved:"Resolved"===e.Outcome1?1:0,active:["Fatal","Resolved"].includes(e.Outcome1)?1:0}})),f.map((function(e){return{ageGroup:e,deceased:a[e].deceased,resolved:a[e].resolved,active:a[e].active,total:a[e].total}}))}(a.result.records);e(t)}))}))},m=t("Cmmz"),_=t("Anlk"),y=t("mPjd"),g=d.a.createElement;a.default=function(){var e=Object(l.useState)([]),a=e[0],t=e[1],i=Object(l.useState)(!0),d=i[0],u=i[1],f=function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v().then(t);case 2:u(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){f()}),[]),g(_.a,{title:"Case statistics"},g(c.a,{variant:"h6"},"Some statistics on Covid-19 cases in Ontario"),d?g("div",{className:"tc"},g(o.a,null),g("p",null,"Hang tight. Just fetching and compiling the data")):g(m.a,Object(n.a)({dataSource:a,xAxisScale:"band"},y.a)))}},"9Rzn":function(e,a,t){"use strict";var n=t("TqRt");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t("q1tI")),s=(0,n(t("8/g6")).default)(i.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBackOutlined");a.default=s},Anlk:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("YFqc"),r=t.n(s),l=t("bXiM"),d=t("5CWz"),o=t("PsDL"),c=t("lO0E"),u=t("ofer"),f=t("9Rzn"),v=t.n(f),m=t("Ji2X"),_=t("R/WZ"),y=t("BomS"),g=i.a.createElement,p=Object(_.a)((function(e){return{toolbar:e.mixins.toolbar,main:{padding:16},appBar:{flexGrow:1},title:{flexGrow:1}}}));a.a=function(e){var a=e.title,t=e.children,n=p();return g("div",null,g(d.a,null),g(l.a,{position:"fixed",className:n.appBar},g(c.a,null,g(o.a,{color:"inherit",edge:"start"},g(r.a,{href:"/"},g(v.a,null))),g(u.a,{variant:"h6",noWrap:!0,className:n.title},a),g(y.a,null))),g("main",{className:n.main},g("div",{className:n.toolbar}),g(m.a,null,t)))}},mPjd:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"a",(function(){return s}));var n=[{title:"Active cases",dataKeyX:"date_string",bars:[{dataKey:"active_cases",fill:"#f9d45c",name:"Active cases",stackId:"a"}]},{title:"Total cases",dataKeyX:"date_string",areas:[{dataKey:"vocsTotal",fill:"#ef8c8c",stroke:"#ef8c8c",name:"Variants of concern",stackId:"a"},{dataKey:"totalNonVOC",fill:"#f9d45c",stroke:"#f9d45c",name:"Vanilla cases",stackId:"a"}]},{title:"New cases",dataKeyX:"date_string",bars:[{dataKey:"new_cases",name:"New cases",fill:"#f9d45c"}],lines:[{dataKey:"new_cases_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Total deaths",dataKeyX:"date_string",areas:[{dataKey:"Deaths",name:"Total deaths",fill:"#ef8c8c"}]},{title:"New deaths",dataKeyX:"date_string",bars:[{dataKey:"new_deaths",name:"New deaths",fill:"#ef8c8c"}],lines:[{dataKey:"new_deaths_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"New tests",dataKeyX:"date_string",bars:[{dataKey:"Total tests completed in the last day",name:"New tests",fill:"#509ee3"}],lines:[{dataKey:"Under Investigation",name:"Pending tests",dot:!1,strokeWidth:2,stroke:"teal"},{dataKey:"tests_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Percent positive",dataKeyX:"date_string",bars:[{dataKey:"percent_positive",name:"Percent positive",fill:"#509ee3"}],lines:[{dataKey:"tests_positive_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{title:"Patients hospitalized",dataKeyX:"date_string",bars:[{dataKey:"Number of patients hospitalized with COVID-19",name:"Patients hospitalized",fill:"#ef8c8c"}]},{title:"Patients in ICU",dataKeyX:"date_string",bars:[{dataKey:"Number of patients in ICU on a ventilator due to COVID-19",fill:"#509ee3",name:"ICU (with ventilator)",stackId:"a"},{dataKey:"icu_no_ventilator",fill:"#7172ad",name:"ICU (no ventilator)",stackId:"a"}]}],i=[{dataKeyX:"date_string",title:"Daily vaccines administered",bars:[{dataKey:"previous_day_doses_administered",name:"Daily doses administered",fill:"#509ee3"}],lines:[{dataKey:"new_vaccines_rolling_average",name:"7 day rolling average",stroke:"black",strokeWidth:2,dot:!1}]},{dataKeyX:"date_string",title:"Total vaccines administered",areas:[{dataKey:"total_doses_administered",name:"Total doses administered",fill:"#509ee3"}]},{dataKeyX:"date_string",title:"Total people fully vaccinated",areas:[{dataKey:"total_individuals_fully_vaccinated",name:"Total people fully vacincated",fill:"#509ee3"}]}],s={title:"Cases by age group",dataKeyX:"ageGroup",bars:[{dataKey:"deceased",fill:"#ef8c8c",name:"Deceased",stackId:"a"},{dataKey:"active",fill:"#f9d45c",name:"Active",stackId:"a"},{dataKey:"resolved",fill:"green",name:"Resolved",stackId:"a"}]}},rg98:function(e,a,t){"use strict";function n(e,a,t,n,i,s,r){try{var l=e[s](r),d=l.value}catch(o){return void t(o)}l.done?a(d):Promise.resolve(d).then(n,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,s){var r=e.apply(a,t);function l(e){n(r,i,s,l,d,"next",e)}function d(e){n(r,i,s,l,d,"throw",e)}l(void 0)}))}}t.d(a,"a",(function(){return i}))},zorG:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stats",function(){return t("+MOk")}])}},[["zorG",0,2,1,3,4]]]);