(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0160":function(e,t,i){},"23e70":function(e,t,i){},"45ef":function(e,t,i){"use strict";var n=i("23e70"),s=i.n(n);s.a},9617:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bio"},[i("div",{staticClass:"spacer"}),i("v-container",[i("h1",[e._v("My Experience Timeline")]),i("div",{staticClass:"spacer"}),i("v-timeline",e._l(e.years,(function(t,n){return i("v-timeline-item",{key:n,attrs:{color:t.color,icon:t.icon,"fill-dot":"",dense:e.$vuetify.breakpoint.smAndDown},scopedSlots:e._u([{key:"opposite",fn:function(){return[i("span",{class:t.color+"--text",domProps:{textContent:e._s(t.year)}})]},proxy:!0}],null,!0)},[i("div",{staticClass:"py-4"},[i("h2",{class:"headline font-weight-light  "+t.color+"--text"},[e._v(e._s(t.job))]),t.tools?i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.text))]),i("v-list-item-subtitle",[e._v(e._s(t.tools))])],1)],1):i("div",{staticClass:"pt-1"},[e._v(e._s(t.text))])],1)])})),1),i("div",{staticClass:"spacer"})],1)],1)},s=[],o={data:function(){return{years:[{color:"green",year:"November 2019 - Present",job:"Computer engineer",text:"Instituto de Emprego da Madeira",tools:"Technologies: PHP, Lumen, Node, Vue.js, Microsoft SQL, Docker",icon:"far fa-building"},{color:"orange",year:"September 2017 - Present",job:"Master in Informatics Engineering",text:"Universidade da Madeira",tools:"Technologies: Docker, IOT, Python, C#, PHP, Laravel, Node",icon:"fas fa-graduation-cap"},{color:"red",year:"May 2019 - November 2019",job:"Computer engineer",text:"Inocentro",tools:"Technologies: Kubernetes, Docker, Lumen, Laravel, Node.js, Vue.js, Python, C#, AWS, Code integration, MongoDB, Microsoft SQL",icon:"fas fa-cubes"},{color:"cyan",year:"August 2018 - May 2019",job:"Computer engineer",text:"ODKAS",tools:"Technologies: SAPUI5, OPENUI5, Laravel, PHP, JavaScript, CSS, Java, Android, SAP, ABAP, Microsoft SQL",icon:"fas fa-globe-africa"},{color:"green",year:"December 2017 - August 2018",job:"Professional internship",text:"Instituto de Emprego da Madeira",icon:"far fa-building"},{color:"orange",year:"September 2014 - July 2019",job:"Degree in Computer Engineering",text:"Universidade da Madeira",tools:"Technologies: Java, C++, Python, PHP",icon:"fas fa-graduation-cap"}]}}},a=o,r=(i("45ef"),i("2877")),l=i("6544"),c=i.n(l),m=i("a523"),u=i("da13"),d=i("5d23"),h=i("5530"),v=(i("0160"),i("58df")),f=i("7560"),p=Object(v["a"])(f["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(h["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),g=(i("c96a"),i("9d26")),b=i("a9ad"),_=Object(v["a"])(b["a"],f["a"]),C=_.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(g["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",Object(h["a"])({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:Object(h["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}}),y=Object(r["a"])(a,n,s,!1,null,"53e624ac",null);t["default"]=y.exports;c()(y,{VContainer:m["a"],VListItem:u["a"],VListItemContent:d["a"],VListItemSubtitle:d["b"],VListItemTitle:d["c"],VTimeline:p,VTimelineItem:C})},f820:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("h1",[e._v("This is an about page")])])}],o=i("2877"),a={},r=Object(o["a"])(a,n,s,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=about.e43648b6.js.map