!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=83)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=l,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}return a.test(t)?t.replace(o,i):t},e.isEmpty=function(t){return!t&&0!==t||!(!s(t)||0!==t.length)},e.createFrame=function(t){var e=l({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(t){return r[t]}function l(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var u=Object.prototype.toString;e.toString=u;var c=function(t){return"function"==typeof t};c(/x/)&&(e.isFunction=c=function(t){return"function"==typeof t&&"[object Function]"===u.call(t)}),e.isFunction=c;var s=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===u.call(t)};e.isArray=s},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function o(t,e){var n=e&&e.loc,a=void 0,i=void 0;n&&(t+=" - "+(a=n.start.line)+":"+(i=n.start.column));for(var l=Error.prototype.constructor.call(this,t),u=0;u<r.length;u++)this[r[u]]=l[r[u]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(t){}}o.prototype=new Error,e.default=o,t.exports=e.default},function(t,e,n){t.exports=n(40).default},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},function(t,e,n){var r=n(17),o=n(75),a=n(74),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},function(t,e,n){t.exports=n(80)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=c;var o=n(0),a=r(n(1)),i=n(39),l=n(31),u=r(n(29));function c(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}e.VERSION="4.0.11",e.COMPILER_REVISION=7,e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"},c.prototype={constructor:c,logger:u.default,log:u.default.log,registerHelper:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===o.toString.call(t))o.extend(this.partials,t);else{if(void 0===e)throw new a.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var s=u.default.log;e.log=s,e.createFrame=o.createFrame,e.logger=u.default},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,n){var r=n(18),o=n(11);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},function(t,e){t.exports=function(t){return t}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(15))},function(t,e,n){var r=n(5).Symbol;t.exports=r},function(t,e,n){var r=n(6),o=n(3);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e,n){var r=n(77),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},function(t,e,n){var r=n(19);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,c=[],s=!1,f=-1;function d(){s&&u&&(s=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!s){var t=l(d);s=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,s=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||s||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function a(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var i=o>=0?arguments[o]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,r="/"===i.charAt(0))}return e=n(a(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return(t=n(a(t.split("/"),function(t){return!!t}),!r).join("/"))||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(a(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),a=r(n.split("/")),i=Math.min(o.length,a.length),l=i,u=0;u<i;u++)if(o[u]!==a[u]){l=u;break}var c=[];for(u=l;u<o.length;u++)c.push("..");return(c=c.concat(a.slice(l))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(21))},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var a,i=null!=e?e:t.nullContext||{},l=n.helperMissing,u=t.escapeExpression;return'\x3c!-- Modal --\x3e\n<div class="modal fade" id="'+u("function"==typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)?a.call(i,{name:"id",hash:{},data:o}):a)+'" tabindex="-1" role="dialog" aria-labelledby="'+u("function"==typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)?a.call(i,{name:"id",hash:{},data:o}):a)+'Label">\n    <div class="modal-dialog modal-lg" role="document">\n        <div class="modal-content">\n            <div class="modal-header">\n                <div class="flexbox flexbox-align-center flexbox-just-spacebetween">\n                    <h4 class="modal-title" id="'+u("function"==typeof(a=null!=(a=n.id||(null!=e?e.id:e))?a:l)?a.call(i,{name:"id",hash:{},data:o}):a)+'Label">انتخاب فایل</h4>\n                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>\n            </div>\n            <div class="modal-body">\n                <input type="hidden" id="backPath" value="">\n                <input type="hidden" id="nextPagekey" value="">\n                <input type="hidden" id="path" value="">\n                <div class="row fm-wrapper"></div>\n            </div>\n\n            <div class="modal-footer">\n                <div class="row">\n                    <div class="col-xs-12">\n                        <label type="button" class="btn btn-primary" for="vaslapp-file-selector">آپلود فایل</label>\n                        <button type="button" class="btn btn-default" data-dismiss="modal">خروج</button>\n                        \n                        <form class="hidden" id="form-vaslapp-file-uploader">\n                            <input type="file" name="file[]" id="vaslapp-file-selector" multiple>\n                            <input type="text" name="path" id="vaslapp-file-path" value="/">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'},useData:!0})},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var a;return'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\n    <div class="fm-card fm-card-col" data-toggle="backFolder" data-address="'+t.escapeExpression("function"==typeof(a=null!=(a=n.address||(null!=e?e.address:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"address",hash:{},data:o}):a)+'">\n        \n        <div class="fm-preview-box" data-type="undo"></div>\n\n        <div class="fm-name-box content-title">\n            <span class="item-fm-file" data-is-directory="true">بازگشت</span>\n        </div>\n    </div>\n</div>'},useData:!0})},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var a,i=null!=e?e:t.nullContext||{},l=n.helperMissing,u=t.escapeExpression;return'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\n    <div class="fm-card fm-card-col" data-toggle="openFolder" data-address="'+u("function"==typeof(a=null!=(a=n.name||(null!=e?e.name:e))?a:l)?a.call(i,{name:"name",hash:{},data:o}):a)+'">\n\n        <div class="fm-preview-box" data-type="folder"></div>\n\n        <div class="fm-name-box content-title">\n            <div class="flexbox flexbox-just-spacebetween flexbox-align-center">\n                <span class="item-fm-file" data-is-directory="true">'+u("function"==typeof(a=null!=(a=n.name||(null!=e?e.name:e))?a:l)?a.call(i,{name:"name",hash:{},data:o}):a)+"</span>\n            </div>\n        </div>\n\n                   \n    </div>\n</div>"},useData:!0})},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(15))},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=i.COMPILER_REVISION;if(e!==n){if(e<n){var r=i.REVISION_CHANGES[n],o=i.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new a.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:o.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=o.extend({},r,i.hash),i.ids&&(i.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,r,i);var l=e.VM.invokePartial.call(this,n,r,i);if(null==l&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),l=i.partials[i.name](r,i)),null!=l){if(i.indent){for(var u=l.split("\n"),c=0,s=u.length;c<s&&(u[c]||c+1!==s);c++)u[c]=i.indent+u[c];l=u.join("\n")}return l}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,o){var a=this.programs[t],i=this.fn(t);return e||o||r||n?a=l(this,t,i,e,n,r,o):a||(a=this.programs[t]=l(this,t,i)),a},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=o.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=o.data;r._setup(o),!o.partial&&t.useData&&(a=function(t,e){return e&&"root"in e||((e=e?i.createFrame(e):{}).root=t),e}(e,a));var l=void 0,u=t.useBlockParams?[]:void 0;function s(e){return""+t.main(n,e,n.helpers,n.partials,a,u,l)}return t.useDepths&&(l=o.depths?e!=o.depths[0]?[e].concat(o.depths):o.depths:[e]),(s=c(t.main,s,n,o.depths||[],a,u))(e,o)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(r.decorators,e.decorators)))},r._child=function(e,r,o,i){if(t.useBlockParams&&!o)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return l(n,e,t[e],r,0,o,i)},r},e.wrapProgram=l,e.resolvePartial=function(t,e,n){return t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var l=void 0;if(n.fn&&n.fn!==u&&function(){n.data=i.createFrame(n.data);var t=n.fn;l=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=i.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=o.extend({},n.partials,t.partials))}(),void 0===t&&l&&(t=l),void 0===t)throw new a.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=u;var r,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),a=(r=n(1))&&r.__esModule?r:{default:r},i=n(8);function l(t,e,n,r,o,a,i){function l(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||e==i[0]||e===t.nullContext&&null===i[0]||(l=[e].concat(i)),n(t,e,t.helpers,t.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=c(n,l,t,i,r,a)).program=e,l.depth=i?i.length:0,l.blockParams=o||0,l}function u(){return""}function c(t,e,n,r,a,i){if(t.decorator){var l={};e=t.decorator(e,l,n,r&&r[0],a,i,r),o.extend(e,l)}return e}},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];console[e].apply(console,r)}}};e.default=o,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var a=t;return e.partials||(e.partials={},a=function(o,a){var i=n.partials;n.partials=r.extend({},i,e.partials);var l=t(o,a);return n.partials=i,l}),e.partials[o.args[0]]=o.fn,a})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){o.default(t)};var r,o=(r=n(30))&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=r.createFrame(e.data)).contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:r.blockParams([t],[o&&o.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t&&t[e]})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=(r=n(1))&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(0),a=(r=n(1))&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new a.default("Must pass iterator to #each");var n=e.fn,r=e.inverse,i=0,l="",u=void 0,c=void 0;function s(e,r,a){u&&(u.key=e,u.index=r,u.first=0===r,u.last=!!a,c&&(u.contextPath=c+e)),l+=n(t[e],{data:u,blockParams:o.blockParams([t[e],e],[c+e,null])})}if(e.data&&e.ids&&(c=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(u=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var f=t.length;i<f;i++)i in t&&s(i,i,i===t.length-1);else{var d=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==d&&s(d,i-1),d=p,i++);void 0!==d&&s(d,i-1,!0)}return 0===i&&(l=r(this)),l})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,a=n.fn;if(!0===e)return a(this);if(!1===e||null==e)return o(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var i=r.createFrame(n.data);i.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:i}}return a(e,n)})},t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),a.default(t),i.default(t),l.default(t),u.default(t),c.default(t),s.default(t)};var o=r(n(38)),a=r(n(37)),i=r(n(36)),l=r(n(35)),u=r(n(34)),c=r(n(33)),s=r(n(32))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var a=o(n(8)),i=r(n(28)),l=r(n(1)),u=o(n(0)),c=o(n(27)),s=r(n(26));function f(){var t=new a.HandlebarsEnvironment;return u.extend(t,a),t.SafeString=i.default,t.Exception=l.default,t.Utils=u,t.escapeExpression=u.escapeExpression,t.VM=c,t.template=function(e){return c.template(e,t)},t}var d=f();d.create=f,s.default(d),d.default=d,e.default=d,t.exports=e.default},function(t,e,n){var r=n(2);t.exports=(r.default||r).template({1:function(t,e,n,r,o){var a;return'            <img src="'+t.escapeExpression("function"==typeof(a=null!=(a=n.path||(null!=e?e.path:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"path",hash:{},data:o}):a)+'" data-is-directory="false" alt=""> '},compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var a,i,l,u=null!=e?e:t.nullContext||{},c=n.helperMissing,s=t.escapeExpression,f='<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">\n    <div class="fm-card fm-card-col" data-toggle="addFile" data-address="'+s("function"==typeof(i=null!=(i=n.path||(null!=e?e.path:e))?i:c)?i.call(u,{name:"path",hash:{},data:o}):i)+'">\n\n        <div class="fm-preview-box" data-type="insert_drive_file">\n';return i=null!=(i=n.isImage||(null!=e?e.isImage:e))?i:c,l={name:"isImage",hash:{},fn:t.program(1,o,0),inverse:t.noop,data:o},a="function"==typeof i?i.call(u,l):i,n.isImage||(a=n.blockHelperMissing.call(e,a,l)),null!=a&&(f+=a),f+'\n        </div>\n\n\n        <div class="fm-name-box content-title">\n            <div class="flexbox flexbox-just-spacebetween flexbox-align-center">\n                <span class="item-fm-file truncate" data-is-directory="false">'+s("function"==typeof(i=null!=(i=n.name||(null!=e?e.name:e))?i:c)?i.call(u,{name:"name",hash:{},data:o}):i)+"</span>\n            </div>\n        </div>\n\n                  \n    </div>\n</div>"},useData:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initial=function(){var t=document.querySelector("#vaslapp-file-selector");t.addEventListener("change",function(e){if(t.files&&t.files.length){var n={},o=$("meta[name='_csrf']").attr("content");n[$("meta[name='_csrf_header']").attr("content")]=o;var a=$("#form-vaslapp-file-uploader"),i=new FormData(a[0]);$.ajax({url:r.ajax.url,method:"POST",data:i,headers:n,cache:!1,processData:!1,contentType:!1}).then(function(t){1===t.status?this.modalClass.getFilesList({nextPagekey:"",path:"/"},!1,"/"):console.error(t.msg)}).catch(function(t){console.error(t)})}})},this.setCurrentPath=function(t){document.querySelector("#vaslapp-file-path").value=t},this.distroy=function(){document.querySelector("#vaslapp-file-selector").removeEventListener("change")},this.ajax=e,this.modalClass=n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a=(r=n(7))&&r.__esModule?r:{default:r};e.default=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(){this.init=function(){var t=$(o.modal),e=o.button,n=new Event("fm.file.item.select");document.querySelectorAll("[data-toggle='addFile']").forEach(function(r){r.addEventListener("click",function(r){var a=r.currentTarget.dataset;n.detail=a,n.relatedTarget=e;var i=document;""!=o.defaults.target&&(i=document.querySelector(o.defaults.target)),i.dispatchEvent(n),t.modal("hide")})});var r=new Event("fm.folder.item.select");document.querySelectorAll("[data-toggle='openFolder']").forEach(function(n){n.addEventListener("click",function(n){var i=n.currentTarget.dataset;(0,a.default)(i,{backPath:t.find("#backPath").val()}),o.uploader.setCurrentPath(i.address),r.detail=i,r.relatedTarget=e,document.dispatchEvent(r)})});var i=new Event("fm.back.item.select"),l=document.querySelector("[data-toggle='backFolder']");l&&l.addEventListener("click",function(t){var n=t.currentTarget.dataset;(0,a.default)(n,{backPath:""}),i.detail=n,i.relatedTarget=e,document.dispatchEvent(i)})}}.call(this),this.modal=e,this.button=n,this.defaults=r,o=this}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=s(n(43)),a=s(n(42)),i=s(n(7)),l=s(n(41)),u=s(n(25)),c=s(n(24));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=null,this.button=null,this.target=null,this.defaults={},this.enableEvents=function(t){$(r.modal).on("show.bs.modal",function(t){r.button=t.relatedTarget,r.uploader.initial(),r.getFilesList(),r.enableLoadMore()}),$(r.modal).on("hide.bs.modal",function(t){r.removeEvents(),$(r.modal).find(".modal-body .fm-wrapper").html(""),r.uploader.distroy()})},this.removeEvents=function(){document.querySelectorAll("[data-toggle='addFile']").forEach(function(t){$(t).off("click")}),document.querySelectorAll("[data-toggle='openFolder']").forEach(function(t){$(t).off("click")})},this.getFilesList=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{nextPagekey:"",path:"/"},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",o={},a=$("meta[name='_csrf']").attr("content");o[$("meta[name='_csrf_header']").attr("content")]=a,$.ajax({url:r.defaults.ajax.list.url,method:r.defaults.ajax.list.method,data:(0,i.default)(t,r.defaults.ajax.list.data),headers:r.defaults.ajax.list.headers||o}).then(function(t){1===t.status&&r.renderData(t,e,n)}).catch(function(t){console.error(t)})},this.renderData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/";$(r.modal).find("#nextPagekey").val(t.directoryInfo.nextPageKey),$(r.modal).find("#path").val(t.directoryInfo.currentPath),$(r.modal).find("#backPath").val(n),e||$(r.modal).find(".modal-body .fm-wrapper").html(""),!n||e||"/"===t.directoryInfo.currentPath&&"%2F"===t.directoryInfo.currentPath&&""===t.directoryInfo.currentPath||$(r.modal).find(".modal-body .fm-wrapper").append((0,c.default)({address:n})),t.directoryInfo.data.forEach(function(t){t.isDirectory?$(r.modal).find(".modal-body .fm-wrapper").append((0,u.default)({name:t.name})):$(r.modal).find(".modal-body .fm-wrapper").append((0,l.default)({name:t.name,path:t.linkHost+t.linkPath,isImage:!0}))}),new o.default(r.modal,r.button,r.defaults).init()},this.enableLoadMore=function(){$(r.modal).find(".modal-body").off("scroll"),$(r.modal).find(".modal-body").scroll(function(){$(r.modal).find(".fm-wrapper").height()<=$(r.modal).find(".modal-body").scrollTop()+($(r.modal).find(".modal-body").height()+16)&&r.getFilesList({nextPagekey:$(r.modal).find("#nextPagekey").val(),path:$(r.modal).find("#path").val()},!0)})},this.getModal=function(){return r.modal},this.setModal=function(t){r.modal=t},this.defaults=e,r=this,this.uploader=new a.default(this.defaults.ajax.upload,r),document.addEventListener("fm.folder.item.select",function(t){r.getFilesList({nextPagekey:t.detail.nextPagekey||"",path:t.detail.address},!1,t.detail.backPath)},!1),document.addEventListener("fm.back.item.select",function(t){console.info("back",t),r.getFilesList({nextPagekey:t.detail.nextPagekey||"",path:t.detail.address},!1,t.detail.backPath)},!1),r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(n(44)),o=a(n(23));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=document.createElement("div");r.innerHTML=(0,o.default)({id:t.modalId||"fileManagerModal"}),document.body.appendChild(r);var a=n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return a.setModal(document.querySelector("#"+(t.modalId||"fileManagerModal"))),a.enableEvents(),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),e}();e.default=i},function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},function(t,e,n){var r=n(3),o=n(47),a=n(46),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return a(t);var e=o(t),n=[];for(var l in t)("constructor"!=l||!e&&i.call(t,l))&&n.push(l);return n}},function(t,e,n){(function(t){var r=n(16),o="object"==typeof e&&e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,l=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=l}).call(this,n(9)(t))},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,n){var r=n(6),o=n(11),a=n(4),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},function(t,e,n){var r=n(51),o=n(50),a=n(49),i=a&&a.isTypedArray,l=i?o(i):r;t.exports=l},function(t,e){t.exports=function(){return!1}},function(t,e,n){(function(t){var r=n(5),o=n(53),a="object"==typeof e&&e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,l=i&&i.exports===a?r.Buffer:void 0,u=(l?l.isBuffer:void 0)||o;t.exports=u}).call(this,n(9)(t))},function(t,e){var n=Array.isArray;t.exports=n},function(t,e,n){var r=n(6),o=n(4);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},function(t,e,n){var r=n(56),o=n(4),a=Object.prototype,i=a.hasOwnProperty,l=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!l.call(t,"callee")};t.exports=u},function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},function(t,e,n){var r=n(58),o=n(57),a=n(55),i=n(54),l=n(10),u=n(52),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),s=!n&&o(t),f=!n&&!s&&i(t),d=!n&&!s&&!f&&u(t),p=n||s||f||d,h=p?r(t.length,String):[],v=h.length;for(var m in t)!e&&!c.call(t,m)||p&&("length"==m||f&&("offset"==m||"parent"==m)||d&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||l(m,v))||h.push(m);return h}},function(t,e,n){var r=n(59),o=n(48),a=n(12);t.exports=function(t){return a(t)?r(t,!0):o(t)}},function(t,e,n){var r=n(14),o=n(12),a=n(10),i=n(3);t.exports=function(t,e,n){if(!i(n))return!1;var l=typeof e;return!!("number"==l?o(n)&&a(e,n.length):"string"==l&&e in n)&&r(n[e],t)}},function(t,e){var n=Date.now;t.exports=function(t){var e=0,r=0;return function(){var o=n(),a=16-(o-r);if(r=o,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}},function(t,e){t.exports=function(t){return function(){return t}}},function(t,e,n){var r=n(63),o=n(19),a=n(13),i=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:a;t.exports=i},function(t,e,n){var r=n(64),o=n(62)(r);t.exports=o},function(t,e){t.exports=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},function(t,e,n){var r=n(66),o=Math.max;t.exports=function(t,e,n){return e=o(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,l=o(a.length-e,0),u=Array(l);++i<l;)u[i]=a[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=a[i];return c[e]=n(u),r(t,this,c)}}},function(t,e,n){var r=n(13),o=n(67),a=n(65);t.exports=function(t,e){return a(o(t,e,r),t+"")}},function(t,e,n){var r=n(68),o=n(61);t.exports=function(t){return r(function(e,n){var r=-1,a=n.length,i=a>1?n[a-1]:void 0,l=a>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(a--,i):void 0,l&&o(n[0],n[1],l)&&(i=a<3?void 0:i,a=1),e=Object(e);++r<a;){var u=n[r];u&&t(e,u,r,i)}return e})}},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,n){var r=n(5)["__core-js_shared__"];t.exports=r},function(t,e,n){var r,o=n(72),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e,n){var r=n(17),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[l]=n:delete t[l]),o}},function(t,e,n){var r=n(18),o=n(73),a=n(3),i=n(71),l=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,s=u.toString,f=c.hasOwnProperty,d=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?d:l).test(i(t))}},function(t,e,n){var r=n(76),o=n(70);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},function(t,e,n){var r=n(20),o=n(14),a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var i=t[e];a.call(t,e)&&o(i,n)&&(void 0!==n||e in t)||r(t,e,n)}},function(t,e,n){var r=n(78),o=n(20);t.exports=function(t,e,n,a){var i=!n;n||(n={});for(var l=-1,u=e.length;++l<u;){var c=e[l],s=a?a(n[c],t[c],c,n,t):void 0;void 0===s&&(s=t[c]),i?o(n,c,s):r(n,c,s)}return n}},function(t,e,n){var r=n(79),o=n(69),a=n(60),i=o(function(t,e){r(e,a(e),t)});t.exports=i},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FileManager=void 0,n(81);var r=a(n(7)),o=a(n(45));function a(t){return t&&t.__esModule?t:{default:t}}n(22);var i={target:"",modalId:"",ajax:{list:{url:"path.php",method:"POST",data:{},headers:{}},upload:{url:"upload.php",method:"POST",data:{},headers:{}}}},l=e.FileManager=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=(0,r.default)(i,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,i))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),e}();e.default=l},function(t,e,n){t.exports=n(82)}])});