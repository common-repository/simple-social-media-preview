parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KlXm":[function(require,module,exports) {

},{}],"BEhD":[function(require,module,exports) {
module.exports={style:require("./style.pcss")};
},{"./style.pcss":"KlXm"}],"s08D":[function(require,module,exports) {
module.exports={style:require("./style.pcss")};
},{"./style.pcss":"KlXm"}],"PlVF":[function(require,module,exports) {
window.common=window.common||{},jQuery(document).ready(function(){console.log("Common: jQuery $ is working.")});
},{}],"uI9n":[function(require,module,exports) {
module.exports={index:require("./index.js")};
},{"./index.js":"PlVF"}],"bWY4":[function(require,module,exports) {
window.admin=window.admin||{},jQuery(document).ready(function(){console.log("hello from Admin. jQuery $ is working.")});
},{}],"cDSD":[function(require,module,exports) {
module.exports={index:require("./index.js")};
},{"./index.js":"bWY4"}],"sfHE":[function(require,module,exports) {
"use strict";var s=u(require("../src/Common/pcss/*.pcss")),r=u(require("../src/Admin/pcss/*.pcss")),e=u(require("../src/Common/js/*.js")),c=u(require("../src/Admin/js/*.js"));function u(s){return s&&s.__esModule?s:{default:s}}
},{"../src/Common/pcss/*.pcss":"BEhD","../src/Admin/pcss/*.pcss":"s08D","../src/Common/js/*.js":"uI9n","../src/Admin/js/*.js":"cDSD"}]},{},["sfHE"], null)
//# sourceMappingURL=admin.js.map