(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,n){(function(e){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){n(6);var i=n(7)(n(4),n(8),null,null);t.exports=i.exports},function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i={strings:{type:Array,required:!1,default:function(){return["Hello World!"]}},stringsElement:{type:String,required:!1,default:null},typeSpeed:{type:Number,required:!1,default:50},startDelay:{type:Number,required:!1,default:0},backSpeed:{type:Number,required:!1,default:0},smartBackspace:{type:Boolean,required:!1,default:!0},shuffle:{type:Boolean,required:!1,default:!1},backDelay:{type:Number,required:!1,default:700},fadeOut:{type:Boolean,required:!1,default:!1},fadeOutClass:{type:String,required:!1,default:"typed-fade-out"},fadeOutDelay:{type:Number,required:!1,default:500},loop:{type:Boolean,required:!1,default:!1},loopCount:{type:Number,required:!1,default:1/0},showCursor:{type:Boolean,required:!1,default:!0},cursorChar:{type:String,required:!1,default:"|"},autoInsertCss:{type:Boolean,required:!1,default:!0},attr:{type:String,required:!1,default:null},bindInputFocusEvents:{type:Boolean,required:!1,default:!1},contentType:{type:String,required:!1,default:"html"}},r=function(t,e){return e.onComplete=function(){t.$emit("onComplete")},e.preStringTyped=function(){t.$emit("preStringTyped")},e.onStringTyped=function(){t.$emit("onStringTyped")},e.onLastStringBackspaced=function(){t.$emit("onLastStringBackspaced")},e.onTypingPaused=function(){t.$emit("onTypingPaused")},e.onTypingResumed=function(){t.$emit("onTypingResumed")},e.onReset=function(){t.$emit("onReset")},e.onStop=function(){t.$emit("onStop")},e.onStart=function(){t.$emit("onStart")},e.onDestroy=function(){t.$emit("onDestroy")},e}},function(t,n,i){"use strict";function r(t){t.component("vue-typed-js",o.a)}Object.defineProperty(n,"__esModule",{value:!0}),n.install=r;var s=i(0),o=i.n(s);i.d(n,"VueTypedJs",(function(){return o.a}));var a={version:"0.1.2",install:r};n.default=a;var u=null;"undefined"!=typeof window?u=window.Vue:void 0!==e&&(u=e.Vue),u&&u.use(a)},function(t,e,n){(function(t){var n,i,r,s,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */s=function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(1),s=n(3),o=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),r.initializer.load(this,n,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=s.htmlParser.typeHtmlChars(t,e,n);var i=0,o=t.substr(e);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,i=parseInt(o),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&(r++,!(e+r>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+r),l=t.substring(e+r+1);t=u+c+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e===t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),i)}),i):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var i=t.substr(0,e);this.replaceText(i),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=s.htmlParser.backSpaceHtmlChars(t,e,n);var i=t.substr(0,e);if(n.replaceText(i),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&i===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),i)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){if(this.cursor&&!this.pause.status&&this.cursorBlinking!==t){this.cursorBlinking=t;var e=t?"infinite":0;this.cursor.style.animationIterationCount=e}}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(2),a=(i=o)&&i.__esModule?i:{default:i},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=r({},a.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var i=Array.prototype.slice.apply(t.stringsElement.children),s=i.length;if(s)for(var o=0;o<s;o+=1){var u=i[o];t.strings.push(u.innerHTML.trim())}}for(var o in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[o]=o;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&t.showCursor&&t.fadeOut){var e=document.createElement("style");e.type="text/css";var n="";t.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=n,document.body.appendChild(e))}}}]),t}();e.default=u;var c=new u;e.initializer=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var i=t.substr(e).charAt(0);if("<"===i||"&"===i){var r;for(r="<"===i?">":";";t.substr(e+1).charAt(0)!==r&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var i=t.substr(e).charAt(0);if(">"===i||";"===i){var r;for(r=">"===i?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=i;var r=new i;e.htmlParser=r}])},"object"===o(e)&&"object"===o(t)?t.exports=s():(i=[],void 0!==(r="function"==typeof(n=s)?n.apply(e,i):n)&&(t.exports=r))}).call(e,n(5)(t))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n.n(i),s=n(1);e.default={name:"vue-typed-js",props:s.a,data:function(){return{typedObj:null}},methods:{throwError:function(t){throw new TypeError(t)},initTypedJS:function(){var t=this.$refs.typedElement.querySelector(".typing");if(this.$slots.default.length>1)this.throwError("Just one child element allowed inside <"+this.$options.name+"> component.");else if(1===this.$slots.default.length){var e=this.$props;e=n.i(s.b)(this,e),this.typedObj=new r.a(t,e)}}},mounted:function(){this.initTypedJS()}}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){},function(t,e){t.exports=function(t,e,n,i){var r,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(r=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var u=a.computed||(a.computed={});Object.keys(i).forEach((function(t){var e=i[t];u[t]=function(){return e}}))}return{esModule:r,exports:s,options:a}}},function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"typedElement",staticClass:"typed-element"},[this._t("default")],2)},staticRenderFns:[]}}])}).call(this,n(35))},222:function(t,e,n){},223:function(t,e,n){},224:function(t,e,n){},225:function(t,e,n){"use strict";var i=n(221);n.o(i,"VueTypedJs")&&n.d(e,"VueTypedJs",(function(){return i.VueTypedJs}));n(226)},226:function(t,e,n){},227:function(t,e,n){t.exports=n.p+"assets/img/mibuilding-logo-original.fe2f48e8.svg"},228:function(t,e,n){t.exports=n.p+"assets/img/mibuilding-logo.83a3d35c.svg"},229:function(t,e,n){t.exports=n.p+"assets/img/dashboard-mibuilding.0d86a295.svg"},230:function(t,e,n){"use strict";var i=n(222);n.n(i).a},231:function(t,e,n){"use strict";var i=n(223);n.n(i).a},232:function(t,e,n){"use strict";var i=n(224);n.n(i).a},233:function(t,e,n){"use strict";n.r(e);var i=n(225),r=[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("picture",[e("source",{attrs:{srcset:n(227),media:"(min-width: 1200px)"}}),e("img",{attrs:{src:n(228),alt:"mibuilding logo",width:"200px;"}})])])}],s={name:"Nav"},o=n(44),a=Object(o.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"1db9a992",null).exports,u=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"dashboard",attrs:{src:n(229)}})])}],c={name:"Dashboard"},l=(n(230),Object(o.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),u,!1,null,"06e4d2a2",null).exports),p={name:"Mail",data:function(){return{email:"",success:!1,msg:"NOTIFY ME"}},methods:{subscribe:function(t){console.log(t)}}},f=(n(231),Object(o.a)(p,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"ml-form-embed",attrs:{"data-account":"1786098:h9a6o3f6n8","data-form":"1647718:n0r8y4"}})])}],!1,null,"49dd4024",null).exports),d={metaInfo:{title:"Smart building management system | mibuilding",meta:[{keywords:"buildings, events, apartments, residential, management, automatic rent, emergency, announcement, portal, app, web, visitor management system, errands, office, portal"},{key:"twitter:card",name:"twitter:card",content:"product"},{key:"twitter:site",name:"twitter:site",content:"@mibuilding"},{key:"twitter:title",name:"twitter:title",content:"Smart way to manage your buildings and events"},{key:"twitter:description",name:"twitter:description",content:"If you manage a building, event, apartment or office, you have to try mibuilding!"},{key:"twitter:image",name:"twitter:image",content:"https://www.mibuilding.eu/assets/img/dashboard-mibuilding.0d86a295.svg"},{key:"og:type",property:"og:type",content:"product"},{key:"og:title",property:"og:title",content:"mibuilding"},{key:"og:description",property:"og:description",content:"smart way to manage your building and events"},{key:"og:url",property:"og:url",content:"https://www.mibuilding.eu"},{key:"og:image",property:"og:image",content:"https://www.mibuilding.eu/dashboard.png"},{key:"og:image:width",property:"og:image:width",content:"1600"},{key:"product:price:amount",property:"product:price:amount",content:"25"},{key:"product:price:currency",property:"product:price:currency",content:"EUR"}],script:[{src:"mailerlite.js",body:!0},{innerHTML:JSON.stringify({"@context":"http://schema.org/","@type":"SoftwareApplication",name:"mibuilding",applicationCategory:"Real Estate, Event management, Business, Organiser",operatingSystem:"Windows 10, OSX, MAC, WEB, IOS, Android",aggregateRating:{"@type":"AggregateRating",ratingValue:"5",ratingCount:"500"},offers:{"@type":"Offer",priceCurrency:"EUR",price:"25.00"}})}]},components:{Nav:a,Dashboard:l,Mail:f,VueTypedJs:i.VueTypedJs}},h=(n(232),Object(o.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"grid-wrap"},[e("header",[e("Nav")],1),e("div",{staticClass:"content"},[e("p",{staticClass:"coming-soon"},[this._v("\n          Coming soon\n        ")]),e("vue-typed-js",{attrs:{typeSpeed:50,cursorChar:"_",loop:!0,backDelay:2e3,backSpeed:10,fadeOut:!1,strings:["co-working","events","office","apartments","buildings"]}},[e("h1",{staticClass:"main"},[this._v("A smart way to manage your "),e("br"),e("span",{staticClass:"color typing"})])])],1),e("div",{staticClass:"image-container"},[e("Dashboard")],1),e("div",{staticClass:"mail-list"},[e("Mail")],1),e("footer",[this._v("\n        mibuilding.eu\n      ")])])])}),[],!1,null,"4e0b1046",null));e.default=h.exports}}]);