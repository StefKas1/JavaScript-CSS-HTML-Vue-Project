(function(e){function t(t){for(var o,n,s=t[0],l=t[1],c=t[2],m=0,d=[];m<s.length;m++)n=s[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&d.push(i[n][0]),i[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],o=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var o={},i={app:0},r=[];function n(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=o,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/JavaScript-CSS-HTML-Vue-Project/vue-app/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"090e":function(e,t,a){e.exports=a.p+"img/charlie-before.ad8dd615.png"},"09fb":function(e,t,a){e.exports=a.p+"img/pets.d854921c.jpg"},"1c7c":function(e,t,a){e.exports=a.p+"img/sammy-after.8f39d367.png"},"1fd4":function(e,t,a){"use strict";a("d765")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"grid-container",attrs:{id:"app"}},[a("Header"),a("Navigation"),a("Main"),a("Footer")],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"grid-header",attrs:{id:"vue-header"}},[a("img",{attrs:{title:"Tooltip: pets",src:e.src,alt:e.alt,width:e.width,height:e.height}})])},s=[],l={name:"Header",data:function(){return{title:"Tooltip: pets",src:a("09fb"),alt:"Two dogs and a cat from the movie Pets.",width:"1000",height:"300"}}},c=l,u=(a("1fd4"),a("2877")),m=Object(u["a"])(c,n,s,!1,null,"5ccb8580",null),d=m.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"grid-nav"},[a("ul",e._l(e.navigationBar,(function(t){return a("li",{key:t.id},[a("a",{class:e.activePage(t.block.text),attrs:{href:""+t.block.href}},[e._v(e._s(t.block.text))])])})),0)])},h=[],p={name:"Navigation",data:function(){return{navigationBar:[{block:{text:"About me",href:"../../index.html"},id:1},{block:{text:"Reading",href:"../../reading.html"},id:2},{block:{text:"First name - multilingual",href:"../../first-name.html"},id:3},{block:{text:"JavaScript interaction",href:"../../js-interaction.html"},id:4},{block:{text:"Vue pets",href:"index.html"},id:5},{block:{text:"Give feedback",href:"../../give-feedback-db.html"},id:6},{block:{text:"Contact me",href:"../../contact-me.html"},id:7}]}},methods:{activePage:function(e){return"Vue pets"==e?"active-page":""}}},g=p,v=Object(u["a"])(g,f,h,!1,null,null,null),y=v.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"grid-main"},[a("div",{attrs:{id:"vue-main"}},[a("h1",{staticClass:"vue"},[e._v(e._s(e.h1))]),a("section",{staticClass:"vue"},[a("h2",[e._v(e._s(e.h2Welcome))]),e.randomNumber<.25?a("blockquote",{attrs:{title:e.welcomeNote}},[e._v(" "+e._s(e.welcomeMessageCharlie)+" ")]):e.randomNumber>=.25&&e.randomNumber<.5?a("blockquote",{attrs:{title:e.welcomeNote}},[e._v(" "+e._s(e.welcomeMessageLeo)+" ")]):e.randomNumber>=.5&&e.randomNumber<.75?a("blockquote",{attrs:{title:e.welcomeNote}},[e._v(" "+e._s(e.welcomeMessageLucky)+" ")]):a("blockquote",{attrs:{title:e.welcomeNote}},[e._v(" "+e._s(e.welcomeMessageSammy)+" ")])]),a("section",[a("h2",{staticClass:"vue"},[e._v(e._s(e.h2Images))]),a("ul",{staticClass:"vue"},e._l(e.pets,(function(t){return a("li",{key:t.name},[a("a",{attrs:{href:"#"+e.vueToLowerCase(t.name)}},[e._v(e._s(t.name))])])})),0),a("figure",[a("img",{attrs:{id:"charlie",src:e.charlie,alt:e.charlieAltFigcaption},on:{mouseover:e.mouseOverPets,mouseleave:e.mouseLeavePets}}),a("figcaption",{staticClass:"vue"},[e._v(e._s(e.charlieAltFigcaption))])]),a("figure",[a("img",{attrs:{id:"leo",src:e.leo,alt:e.leoAltFigcaption},on:{mouseover:e.mouseOverPets,mouseleave:e.mouseLeavePets}}),a("figcaption",{staticClass:"vue"},[e._v(e._s(e.leoAltFigcaption))])]),a("figure",[a("img",{attrs:{id:"lucky",src:e.lucky,alt:e.luckyAltFigcaption},on:{mouseover:e.mouseOverPets,mouseleave:e.mouseLeavePets}}),a("figcaption",{staticClass:"vue"},[e._v(e._s(e.luckyAltFigcaption))])]),a("figure",[a("img",{attrs:{id:"sammy",src:e.sammy,alt:e.sammyAltFigcaption},on:{mouseover:e.mouseOverPets,mouseleave:e.mouseLeavePets}}),a("figcaption",{staticClass:"vue"},[e._v(e._s(e.sammyAltFigcaption))])])]),a("section",[a("h2",{staticClass:"vue"},[e._v(e._s(e.h2Select))]),a("div",{staticClass:"vue"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selection,expression:"selection"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selection=t.target.multiple?a:a[0]},e.onSelection]}},[a("option",{attrs:{disabled:"",value:""}},[e._v(" Please choose the least beautiful ")]),a("option",[e._v("Charlie")]),a("option",[e._v("Leo")]),a("option",[e._v("Lucky")]),a("option",[e._v("Sammy")])]),a("p",[e._v(e._s(e.selectionResponse))])])])])])},_=[],k={name:"Main",data:function(){return{h1:"Family pets in Vue",h2Welcome:"Random welcome message (reload page)",welcomeNote:"Reload the page to have the change to see another randomly selected welcome message.",h2Images:"You will get to know",randomNumber:0,welcomeMessageCharlie:"Hello, my name is Charlie, and I am pleased to meet you!",welcomeMessageLeo:"Howdy, my name is Leo, and I once climbed up a closet and could not get back down!",welcomeMessageLucky:"Hi, my name is Lucky, and my hobbies are breakfast, lunch, and dinner!",welcomeMessageSammy:"Good day, my name is Sammy, and although it is illogical, I like to stand under tables. Correction: I love it!",pets:[{name:"Charlie"},{name:"Leo"},{name:"Lucky"},{name:"Sammy"}],charlie:a("a4fd"),charlieAfter:a("a4fd"),charlieBefore:a("090e"),charlieAltFigcaption:'Labrador Charlie: "I am here to please!"',leo:a("597f"),leoAfter:a("597f"),leoBefore:a("69dc"),leoAltFigcaption:'Cat Leo: "I can climb anything!"',lucky:a("9012"),luckyAfter:a("9012"),luckyBefore:a("cb88"),luckyAltFigcaption:'Golden Retriever Lucky: "I swear, Charlie ate it!"',sammy:a("1c7c"),sammyAfter:a("1c7c"),sammyBefore:a("d292"),sammyAltFigcaption:'Corgi Sammy: "Indubitably, I am the smartest!"',h2Select:"Which is the least beautiful pet?",selection:"",selectionResponse:"",responses:{Charlie:"Woof! I am happy nonetheless. So, let us go! Off to the next adventure! Geronimo!",Leo:"Meow! Cough - ROAR! Well, you did not choose wisely! I do not forgive so quic... - what was that? Did you see that? Sorry, I do not have time, I have to investigate this.",Lucky:"Woof? I forgive you. Now that we have got that sorted out - where is the food?",Sammy:"A good day to you, sir! Did you know - by inserting neotenous traits, it can make certain subjects gain a cuter, more innocent or more wholesome appearance!?"}}},methods:{vueToLowerCase:function(e){return e.toLowerCase()},mouseOverPets:function(e){"charlie"==e.target.id?this.charlie=this.charlieBefore:"leo"==e.target.id?this.leo=this.leoBefore:"lucky"==e.target.id?this.lucky=this.luckyBefore:"sammy"==e.target.id&&(this.sammy=this.sammyBefore)},mouseLeavePets:function(e){"charlie"==e.target.id?this.charlie=this.charlieAfter:"leo"==e.target.id?this.leo=this.leoAfter:"lucky"==e.target.id?this.lucky=this.luckyAfter:"sammy"==e.target.id&&(this.sammy=this.sammyAfter)},onSelection:function(e){this.selectionResponse=e.target.value+": "+this.responses[e.target.value]},setRandomNumber:function(){this.randomNumber=Math.random()}},created:function(){this.setRandomNumber()}},w=k,C=Object(u["a"])(w,b,_,!1,null,null,null),x=C.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"grid-footer",attrs:{id:"vue-footer"}},[a("p",[e._v(" Copyright ©: "),a("a",{attrs:{href:e.copyrightLink,target:e.target}},[e._v(e._s(e.copyrightPlace))])]),a("p",[e._v("Contact: "),a("a",{attrs:{href:e.hrefMail}},[e._v(e._s(e.email))])])])},A=[],P={name:"Footer",data:function(){return{copyrightLink:"https://en.wikipedia.org/wiki/Stuttgart",copyrightPlace:"Stuttgart, Germany 2021",target:"_blank",email:"kasperza@bu.edu",hrefMail:"mailto:kasperza@bu.edu"}}},S=P,O=Object(u["a"])(S,L,A,!1,null,null,null),M=O.exports,N={name:"App",components:{Header:d,Navigation:y,Main:x,Footer:M}},j=N,F=(a("034f"),Object(u["a"])(j,i,r,!1,null,null,null)),I=F.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(I)}}).$mount("#app")},"597f":function(e,t,a){e.exports=a.p+"img/leo-after.4b184fd0.png"},"69dc":function(e,t,a){e.exports=a.p+"img/leo-before.d6ae907c.png"},"85ec":function(e,t,a){},9012:function(e,t,a){e.exports=a.p+"img/lucky-after.6de7d1a4.png"},a4fd:function(e,t,a){e.exports=a.p+"img/charlie-after.4dc842f0.png"},cb88:function(e,t,a){e.exports=a.p+"img/lucky-before.ae87799c.png"},d292:function(e,t,a){e.exports=a.p+"img/sammy-before.575967fc.png"},d765:function(e,t,a){}});
//# sourceMappingURL=app.e523c40f.js.map