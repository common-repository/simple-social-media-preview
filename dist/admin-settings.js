// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"P7UR":[function(require,module,exports) {

},{}],"FPxS":[function(require,module,exports) {

},{"./wordpress.pcss":"P7UR","./react-notifications.pcss":"P7UR"}],"d9r0":[function(require,module,exports) {
module.exports = {
  "style": require("./style.pcss"),
  "wordpress": require("./wordpress.pcss"),
  "react-notifications": require("./react-notifications.pcss")
};
},{"./style.pcss":"FPxS","./wordpress.pcss":"P7UR","./react-notifications.pcss":"P7UR"}],"J7Ww":[function(require,module,exports) {
module.exports=wp.element;
},{}],"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"awqi":[function(require,module,exports) {
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var l = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    z = n ? Symbol.for("react.memo") : 60115,
    A = n ? Symbol.for("react.lazy") : 60116,
    B = "function" === typeof Symbol && Symbol.iterator;

function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var D = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    E = {};

function F(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

F.prototype.isReactComponent = {};

F.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

F.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function G() {}

G.prototype = F.prototype;

function H(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = E;
  this.updater = c || D;
}

var I = H.prototype = new G();
I.constructor = H;
l(I, F.prototype);
I.isPureReactComponent = !0;
var J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, c) {
  var e,
      d = {},
      g = null,
      k = null;
  if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (1 === f) d.children = c;else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];

    d.children = h;
  }
  if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: d,
    _owner: J.current
  };
}

function N(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g,
    Q = [];

function R(a, b, c, e) {
  if (Q.length) {
    var d = Q.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c;
    d.context = e;
    d.count = 0;
    return d;
  }

  return {
    result: a,
    keyPrefix: b,
    func: c,
    context: e,
    count: 0
  };
}

function S(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q.length && Q.push(a);
}

function T(a, b, c, e) {
  var d = typeof a;
  if ("undefined" === d || "boolean" === d) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (d) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return c(e, a, "" === b ? "." + U(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];
    var f = b + U(d, k);
    g += T(d, f, c, e);
  } else if (null === a || "object" !== typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = b + U(d, k++), g += T(d, f, c, e);else if ("object" === d) throw c = "" + a, Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
  return g;
}

function V(a, b, c) {
  return null == a ? 0 : T(a, "", b, c);
}

function U(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function W(a, b) {
  a.func.call(a.context, b, a.count++);
}

function aa(a, b, c) {
  var e = a.result,
      d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X(a, e, c, function (a) {
    return a;
  }) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a));
}

function X(a, b, c, e, d) {
  var g = "";
  null != c && (g = ("" + c).replace(P, "$&/") + "/");
  b = R(b, g, e, d);
  V(a, aa, b);
  S(b);
}

var Y = {
  current: null
};

function Z() {
  var a = Y.current;
  if (null === a) throw Error(C(321));
  return a;
}

var ba = {
  ReactCurrentDispatcher: Y,
  ReactCurrentBatchConfig: {
    suspense: null
  },
  ReactCurrentOwner: J,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l
};
exports.Children = {
  map: function (a, b, c) {
    if (null == a) return a;
    var e = [];
    X(a, e, null, b, c);
    return e;
  },
  forEach: function (a, b, c) {
    if (null == a) return a;
    b = R(null, null, b, c);
    V(a, W, b);
    S(b);
  },
  count: function (a) {
    return V(a, function () {
      return null;
    }, null);
  },
  toArray: function (a) {
    var b = [];
    X(a, b, null, function (a) {
      return a;
    });
    return b;
  },
  only: function (a) {
    if (!O(a)) throw Error(C(143));
    return a;
  }
};
exports.Component = F;
exports.Fragment = r;
exports.Profiler = u;
exports.PureComponent = H;
exports.StrictMode = t;
exports.Suspense = y;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;

exports.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(C(267, a));
  var e = l({}, a.props),
      d = a.key,
      g = a.ref,
      k = a._owner;

  if (null != b) {
    void 0 !== b.ref && (g = b.ref, k = J.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var f = a.type.defaultProps;

    for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
  }

  var h = arguments.length - 2;
  if (1 === h) e.children = c;else if (1 < h) {
    f = Array(h);

    for (var m = 0; m < h; m++) f[m] = arguments[m + 2];

    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};

exports.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: w,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: v,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: x,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: A,
    _ctor: a,
    _status: -1,
    _result: null
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: z,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.useCallback = function (a, b) {
  return Z().useCallback(a, b);
};

exports.useContext = function (a, b) {
  return Z().useContext(a, b);
};

exports.useDebugValue = function () {};

exports.useEffect = function (a, b) {
  return Z().useEffect(a, b);
};

exports.useImperativeHandle = function (a, b, c) {
  return Z().useImperativeHandle(a, b, c);
};

exports.useLayoutEffect = function (a, b) {
  return Z().useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return Z().useMemo(a, b);
};

exports.useReducer = function (a, b, c) {
  return Z().useReducer(a, b, c);
};

exports.useRef = function (a) {
  return Z().useRef(a);
};

exports.useState = function (a) {
  return Z().useState(a);
};

exports.version = "16.14.0";
},{"object-assign":"J4Nk"}],"n8MK":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"otjH":[function(require,module,exports) {
var define;
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["react-notifications-component"]=n(require("react")):t["react-notifications-component"]=n(t.React)}(this,(function(t){return(()=>{"use strict";var n={359:n=>{n.exports=t}},e={};function i(t){var o=e[t];if(void 0!==o)return o.exports;var r=e[t]={exports:{}};return n[t](r,r.exports,i),r.exports}i.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return i.d(n,{a:n}),n},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ReactNotifications:()=>D,Store:()=>k});var t,n,e,r,a=i(359),c=i.n(a),s=!0,u=768,f=325,l="rnc__notification-item";!function(t){t.BOTTOM_LEFT="bottom-left",t.BOTTOM_RIGHT="bottom-right",t.BOTTOM_CENTER="bottom-center",t.TOP_LEFT="top-left",t.TOP_RIGHT="top-right",t.TOP_CENTER="top-center",t.CENTER="center",t.TOP_FULL="top-full",t.BOTTOM_FULL="bottom-full"}(t||(t={})),function(t){t.TOP="top",t.BOTTOM="bottom"}(n||(n={})),function(t){t.SUCCESS="success",t.DANGER="danger",t.INFO="info",t.DEFAULT="default",t.WARNING="warning"}(e||(e={})),function(t){t.TIMEOUT="timeout",t.CLICK="click",t.TOUCH="touch",t.MANUAL="manual"}(r||(r={}));var d=function(t){return null==t};function m(n){return n===t.BOTTOM_FULL||n===t.BOTTOM_LEFT||n===t.BOTTOM_RIGHT||n===t.BOTTOM_CENTER}function p(n){return n===t.TOP_FULL||n===t.TOP_LEFT||n===t.TOP_RIGHT||n===t.TOP_CENTER}function h(t){var n=t.type,i=t.content,o=t.userDefinedTypes,r=[l];if(i)return r;if(d(o))return function(t){switch(t){case e.DEFAULT:return[l,"rnc__notification-item--default"];case e.SUCCESS:return[l,"rnc__notification-item--success"];case e.DANGER:return[l,"rnc__notification-item--danger"];case e.WARNING:return[l,"rnc__notification-item--warning"];case e.INFO:return[l,"rnc__notification-item--info"];default:return[l]}}(n);var a=o.find((function(t){return t.name===n}));return r.concat(a.htmlClasses)}function y(t,n){var e=t.duration,i=t.timingFunction,o=t.delay;return"".concat(e,"ms ").concat(n," ").concat(i," ").concat(o,"ms")}function v(t){return t?(0|16*Math.random()).toString(16):"100000000000100000000000".replace(/1|0/g,v)}function b(t,n){var e=n.duration,i=n.timingFunction,o=n.delay,r=t||{};return d(r.duration)&&(r.duration=e),d(r.timingFunction)&&(r.timingFunction=i),d(r.delay)&&(r.delay=o),r}function E(t,n,i){var o=t,r=o.id,a=o.type,c=o.insert,s=o.content,u=o.container,f=o.animationIn,l=o.animationOut,m=o.slidingEnter,p=o.slidingExit,h=o.touchRevert,y=o.touchSlidingExit,E=o.dismiss,g=o.width,O=o.onRemoval;o.id=r||v(),o.type=s?null:a.toLowerCase(),n&&!s&&(o.userDefinedTypes=function(t,n){var i=t.content,o=t.type;if(!i&&o!==e.SUCCESS&&o!==e.DANGER&&o!==e.INFO&&o!==e.DEFAULT&&o!==e.WARNING&&n)return n}(o,n)),o.width=d(g)?i:g,o.container=u.toLowerCase(),o.insert=(c||"top").toLowerCase(),o.dismiss=function(t){var n=t,e={duration:0,click:!0,touch:!0,onScreen:!1,pauseOnHover:!1,waitForAnimation:!1,showIcon:!1};return n?(Object.keys(e).forEach((function(t){d(n[t])&&(n[t]=e[t])})),n):e}(E),o.animationIn=f||[],o.animationOut=l||[],o.onRemoval=O||function(){};var T=function(t,n,e){return{duration:t,timingFunction:n,delay:e}};o.slidingEnter=b(m,T(600,"linear",0)),o.slidingExit=b(p,T(600,"linear",0)),o.touchRevert=b(h,T(600,"linear",0));var _=y||{},S=_.swipe||{},N=_.fade||{};return o.touchSlidingExit=_,o.touchSlidingExit.swipe=b(S,T(600,"linear",0)),o.touchSlidingExit.fade=b(N,T(300,"linear",0)),o}function g(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var O=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=n,this.remaining=e,this.resume()}var n,e,i;return n=t,(e=[{key:"pause",value:function(){clearTimeout(this.timerId),this.remaining-=Date.now()-this.start}},{key:"resume",value:function(){this.start=Date.now(),clearTimeout(this.timerId),this.timerId=setTimeout(this.callback,this.remaining)}},{key:"clear",value:function(){clearTimeout(this.timerId)}}])&&g(n.prototype,e),i&&g(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function _(t){return function(t){if(Array.isArray(t))return S(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return S(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function N(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w(t,n){return w=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},w(t,n)}function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=j(t);if(n){var o=j(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return C(this,e)}}function C(t,n){if(n&&("object"===T(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var M=function(e){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&w(t,n)}(u,e);var i,o,a,s=R(u);function u(t){var n;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),(n=s.call(this,t)).onClick=function(){var t=n.props.notification.dismiss;(t.click||t.showIcon)&&n.removeNotification(r.CLICK)},n.onTouchStart=function(t){var e=t.touches[0].pageX;n.setState((function(t){var n=t.parentStyle;return{startX:e,currentX:e,parentStyle:Object.assign(Object.assign({},n),{position:"relative"})}}))},n.onTouchMove=function(t){var e=t.touches[0].pageX,i=n.state.startX,o=n.props,a=o.toggleRemoval,c=o.notification,s=c.id,u=c.onRemoval,f=c.slidingExit,l=c.touchSlidingExit,d=l.swipe,m=l.fade,p=e-i,h=n.rootElementRef.current.offsetWidth,v=window.innerWidth+h,b="".concat(e-i>=0?v:-v,"px");if(function(t,n){return Math.abs(t)>=.4*n}(p,h)){var E=y(d,"left"),g=y(m,"opacity"),O=function(){a(s,(function(){return u(s,r.TOUCH)}))};return n.setState((function(t){var e=t.parentStyle;return{touchEnabled:!1,parentStyle:Object.assign(Object.assign({},e),{left:b,opacity:0,transition:"".concat(E,", ").concat(g)}),onTransitionEnd:function(){n.setState((function(t){var n=t.parentStyle;return{parentStyle:Object.assign(Object.assign({},n),{height:"0px",overflow:"hidden",transition:y(f,"height")}),onTransitionEnd:O}}))}}}))}return n.setState((function(t){var n=t.parentStyle;return{currentX:e,parentStyle:Object.assign(Object.assign({},n),{left:"".concat(0+p,"px")})}}))},n.onTouchEnd=function(){var t=n.props.notification.touchRevert;n.setState((function(n){var e=n.parentStyle;return{parentStyle:Object.assign(Object.assign({},e),{left:0,transition:y(t,"left")})}}))},n.onMouseEnter=function(){n.timer?n.timer.pause():n.setState({animationPlayState:"paused"})},n.onMouseLeave=function(){n.timer?n.timer.resume():n.setState({animationPlayState:"running"})},n.rootElementRef=c().createRef();var e=t.defaultNotificationWidth,i=t.notification,o=t.isMobile,a=i.width;return n.state={parentStyle:{height:"0px",overflow:"hidden",width:"".concat(a||e,"px")},htmlClassList:h(i),animationPlayState:"running",touchEnabled:!0},o&&(n.state.parentStyle.width="100%"),n}return i=u,(o=[{key:"componentWillUnmount",value:function(){this.timer&&this.timer.clear()}},{key:"componentDidMount",value:function(){var e=this,i=this.props,o=i.notification,a=i.notificationsCount,c=o.dismiss,s=c.duration,u=c.onScreen,f=function(e,i){return!(i<=1)&&i>1&&(e.insert===n.TOP&&p(e.container)||e.insert===n.BOTTOM&&m(e.container)||e.container===t.CENTER)}(o,a),l=this.rootElementRef.current.scrollHeight,d=function(){s&&!u&&(e.timer=new O((function(){return e.removeNotification(r.TIMEOUT)}),s))};this.setState((function(t){return{parentStyle:{width:t.parentStyle.width,height:"".concat(l,"px"),transition:f?y(o.slidingEnter,"height"):"10ms height"},onTransitionEnd:d}}),(function(){requestAnimationFrame((function(){e.setState((function(t){return{htmlClassList:[].concat(_(o.animationIn),_(t.htmlClassList))}}))}))}))}},{key:"componentDidUpdate",value:function(t){if(this.props.hasBeenRemoved&&!t.hasBeenRemoved&&this.removeNotification(r.MANUAL),t!==this.props&&!this.props.hasBeenRemoved){var n=this.props.notification.container,e=this.rootElementRef.current.children[0].scrollHeight;this.setState((function(t){var i=t.parentStyle;return{parentStyle:Object.assign(Object.assign({},i),{height:"".concat(e+(n.endsWith("full")?0:15),"px")})}}))}}},{key:"removeNotification",value:function(t){var n=this,e=this.props,i=e.notification,o=e.toggleRemoval,r=i.id,a=i.onRemoval,c=i.dismiss.waitForAnimation,s=[].concat(_(i.animationOut),_(h(i))),u=function(){return o(r,(function(){return a(r,t)}))},f={height:"0px",overflow:"hidden",transition:y(i.slidingExit,"height")};return c?this.setState((function(t){var e=t.parentStyle.width;return{htmlClassList:s,onAnimationEnd:function(){n.setState({parentStyle:Object.assign({width:e},f),onTransitionEnd:u})}}})):this.setState((function(t){var n=t.parentStyle.width;return{parentStyle:Object.assign({width:n},f),onTransitionEnd:u,htmlClassList:s}}))}},{key:"renderTimer",value:function(){var t=this,n=this.props.notification.dismiss,e=n.duration,i=n.onScreen,o=this.state.animationPlayState;if(e&&i){var a={animationName:"timer",animationDuration:"".concat(e,"ms"),animationTimingFunction:"linear",animationFillMode:"forwards",animationDelay:"0",animationPlayState:o};return c().createElement("div",{className:"rnc__notification-timer"},c().createElement("div",{className:"rnc__notification-timer-filler",onAnimationEnd:function(){return t.removeNotification(r.TIMEOUT)},style:a}))}}},{key:"renderCustomContent",value:function(){var t=this.state.htmlClassList,n=this.props.notification,e=n.id,i=n.content,o=n.dismiss,r=o.duration,a=o.pauseOnHover,s=r>0&&a;return c().createElement("div",{className:"".concat(_(t).join(" ")),onMouseEnter:s?this.onMouseEnter:null,onMouseLeave:s?this.onMouseLeave:null},c().isValidElement(i)?i:c().createElement(i,Object.assign({},{id:e,notificationConfig:Object.assign({},this.props.notification)})))}},{key:"renderNotification",value:function(){var t=this.props.notification,n=t.title,e=t.message,i=t.dismiss,o=i.showIcon,r=i.duration,a=i.pauseOnHover,s=this.state.htmlClassList,u=r>0&&a;return c().createElement("div",{className:"".concat(_(s).join(" ")),onMouseEnter:u?this.onMouseEnter:null,onMouseLeave:u?this.onMouseLeave:null},c().createElement("div",{className:"rnc__notification-content"},o&&c().createElement("div",{className:"rnc__notification-close-mark",onClick:this.onClick}),n&&c().createElement("div",{className:"rnc__notification-title"},n),c().createElement("div",{className:"rnc__notification-message"},e),this.renderTimer()))}},{key:"render",value:function(){var t=this.props.notification,n=t.content,e=t.dismiss.click,i=this.state,o=i.parentStyle,r=i.onAnimationEnd,a=i.onTransitionEnd,s=i.touchEnabled;return c().createElement("div",{ref:this.rootElementRef,onClick:e?this.onClick:null,style:o,className:"rnc__notification",onAnimationEnd:r,onTransitionEnd:a,onTouchStart:s?this.onTouchStart:null,onTouchMove:s?this.onTouchMove:null,onTouchEnd:s?this.onTouchEnd:null},n?this.renderCustomContent():this.renderNotification())}}])&&N(i.prototype,o),a&&N(i,a),Object.defineProperty(i,"prototype",{writable:!1}),u}(c().Component);function L(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}const k=new(function(){function t(){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.incrementCounter=function(){return n.counter+=1},this.getCounter=function(){return n.counter},this.counter=0,this.add=null}var n,e,i;return n=t,(e=[{key:"addNotification",value:function(t){this.incrementCounter();var n=E(t,this.types,this.defaultNotificationWidth);return this.add(n)}},{key:"register",value:function(t){var n=t.addNotification,e=t.removeNotification,i=t.removeAllNotifications,o=t.types,r=t.defaultNotificationWidth;this.add=n,this.removeNotification=e,this.removeAllNotifications=i,this.defaultNotificationWidth=r,this.types=o}}])&&L(n.prototype,e),i&&L(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}());function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function A(t){return function(t){if(Array.isArray(t))return I(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return I(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return I(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function x(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function F(t,n){return F=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},F(t,n)}function B(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=W(t);if(n){var o=W(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return U(this,e)}}function U(t,n){if(n&&("object"===P(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function W(t){return W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},W(t)}var D=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&F(t,n)}(a,n);var e,i,o,r=B(a);function a(t){var n;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,a),(n=r.call(this,t)).handleResize=function(){n.setState({windowWidth:window.innerWidth})},n.add=function(t){return n.setState((function(n){var e=A(n.notifications),i=e.findIndex((function(n){return n.id===t.id}));return i>-1?(e[i]=t,{notifications:e}):{notifications:"top"===t.insert?[t].concat(A(e)):[].concat(A(e),[t])}})),t.id},n.remove=function(t){n.setState((function(n){return{notifications:n.notifications.map((function(n){return n.id===t&&(n.hasBeenRemoved=!0),n}))}}))},n.removeAllNotifications=function(){n.setState({notifications:n.state.notifications.map((function(t){return Object.assign(Object.assign({},t),{hasBeenRemoved:!0})}))})},n.toggleRemoval=function(t,e){n.setState((function(n){return{notifications:n.notifications.filter((function(n){return n.id!==t}))}}),e)},n.state={isMobile:d(t.isMobile)?s:t.isMobile,breakpoint:d(t.breakpoint)?u:t.breakpoint,notifications:[],windowWidth:void 0},n}return e=a,(i=[{key:"componentDidMount",value:function(){var t=this.props,n=t.types,e=t.defaultNotificationWidth;k.register({addNotification:this.add,removeNotification:this.remove,removeAllNotifications:this.removeAllNotifications,defaultNotificationWidth:e||f,types:n}),this.setState({windowWidth:window.innerWidth}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"renderNotifications",value:function(t,n){var e=this;return t.map((function(i){return c().createElement(M,{id:i.id,key:i.id,isMobile:n,defaultNotificationWidth:e.props.defaultNotificationWidth,notification:i,toggleRemoval:e.toggleRemoval,notificationsCount:t.length,hasBeenRemoved:i.hasBeenRemoved})}))}},{key:"renderMobileNotifications",value:function(n){var e=n.className,i=n.id,o=function(n){var e=[],i=[];return n.forEach((function(n){var o=n.container,r=t.CENTER;p(o)||o===r?e.push(n):m(o)&&i.push(n)})),{top:e,bottom:i}}(this.state.notifications),r=this.renderNotifications(o.top,!0),a=this.renderNotifications(o.bottom,!0);return c().createElement("div",{id:i,key:"mobile",className:"rnc__base ".concat(e||"")},c().createElement("div",{className:"rnc__notification-container--mobile-top"},r),c().createElement("div",{className:"rnc__notification-container--mobile-bottom"},a))}},{key:"renderScreenNotifications",value:function(n){var e=n.className,i=n.id,o=function(n){var e=[],i=[],o=[],r=[],a=[],c=[],s=[],u=[],f=[];return n.forEach((function(n){var l=n.container;l===t.TOP_FULL?u.push(n):l===t.BOTTOM_FULL?f.push(n):l===t.TOP_LEFT?e.push(n):l===t.TOP_RIGHT?i.push(n):l===t.TOP_CENTER?o.push(n):l===t.BOTTOM_LEFT?r.push(n):l===t.BOTTOM_RIGHT?a.push(n):l===t.BOTTOM_CENTER?c.push(n):l===t.CENTER&&s.push(n)})),{topFull:u,bottomFull:f,topLeft:e,topRight:i,topCenter:o,bottomLeft:r,bottomRight:a,bottomCenter:c,center:s}}(this.state.notifications),r=this.renderNotifications(o.topFull,!1),a=this.renderNotifications(o.bottomFull,!1),s=this.renderNotifications(o.topLeft,!1),u=this.renderNotifications(o.topRight,!1),f=this.renderNotifications(o.topCenter,!1),l=this.renderNotifications(o.bottomLeft,!1),d=this.renderNotifications(o.bottomRight,!1),m=this.renderNotifications(o.bottomCenter,!1),p=this.renderNotifications(o.center,!1);return c().createElement("div",{id:i,key:"screen",className:"rnc__base ".concat(e||"")},c().createElement("div",{className:"rnc__notification-container--top-full"},r),c().createElement("div",{className:"rnc__notification-container--bottom-full"},a),c().createElement("div",{className:"rnc__notification-container--top-left"},s),c().createElement("div",{className:"rnc__notification-container--top-right"},u),c().createElement("div",{className:"rnc__notification-container--bottom-left"},l),c().createElement("div",{className:"rnc__notification-container--bottom-right"},d),c().createElement("div",{className:"rnc__notification-container--top-center"},f),c().createElement("div",{className:"rnc__notification-container--center"},c().createElement("div",{className:"rnc__util--flex-center"},p)),c().createElement("div",{className:"rnc__notification-container--bottom-center"},m))}},{key:"render",value:function(){var t=this.props.isMobile,n=this.state,e=n.windowWidth,i=n.breakpoint;return t&&e<=i?this.renderMobileNotifications(this.props):this.renderScreenNotifications(this.props)}}])&&x(e.prototype,i),o&&x(e,o),Object.defineProperty(e,"prototype",{writable:!1}),a}(c().Component)})(),o})()}));
//# sourceMappingURL=index.js.map
},{"react":"n8MK"}],"W1kX":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

/*global wp, settingsData */

/**
 * WordPress dependencies.
 */
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon;
var _x = wp.i18n._x;

var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "container bg-white relative shadow p-4"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "".concat(settingsData.pluginInfo.name, " ").concat(settingsData.pluginInfo.settingsWord)), /*#__PURE__*/React.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-2"
  }, /*#__PURE__*/React.createElement("img", {
    src: settingsData.imagesBaseUrl + 'fake-logo.png' // Source: https://unsplash.com/photos/2LowviVHZ-E
    ,
    alt: _x('Logo', 'logo alt text'),
    title: _x('Logo', 'logo title text')
  }), /*#__PURE__*/React.createElement("span", {
    className: "version text",
    title: _x("Version: ".concat(settingsData.pluginInfo.version), 'version title text')
  }, _x("Version: ".concat(settingsData.pluginInfo.version), 'version text'))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-md p-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-bold sm:text-lg"
  }, _x('Hi! Thanks for installing my plugin.', 'heading welcome')), /*#__PURE__*/React.createElement("p", {
    className: "pt-2 sm:text-xl"
  }, _x('With this plugin, you can now implement that thingy, this thang, and four other many lorem ipsum stuffs. Scroll down to get things setup just how you want them.', 'heading about')))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    isSecondary: true,
    isSmall: true,
    target: "_blank",
    href: "https://wordpress.org/support/"
  }, /*#__PURE__*/React.createElement(Dashicon, {
    icon: "editor-help"
  }), _x('Ask a question', 'button text'))), /*#__PURE__*/React.createElement("div", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement(Button, {
    isPrimary: true,
    isSmall: true,
    href: "".concat(settingsData.pluginInfo.customizerPanelUrl)
  }, _x('Direct link to this plugin\'s Customizer panel', 'button text'))));
};

var _default = Header;
exports.default = _default;
},{"@wordpress/element":"J7Ww"}],"IxO8":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"OUZ9":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"vKPt":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"NVR6":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"UyFj":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"NVR6"}],"Rom6":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"HETk":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":"OUZ9","./iterableToArrayLimit.js":"vKPt","./unsupportedIterableToArray.js":"UyFj","./nonIterableRest.js":"Rom6"}],"rWM8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _element = require("@wordpress/element");

var _reactNotificationsComponent = require("react-notifications-component");

require("react-notifications-component/dist/theme.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * WordPress dependencies.
 */
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Button = _wp$components.Button,
    Dashicon = _wp$components.Dashicon,
    ExternalLink = _wp$components.ExternalLink,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Placeholder = _wp$components.Placeholder,
    RadioControl = _wp$components.RadioControl,
    SelectControl = _wp$components.SelectControl,
    Spinner = _wp$components.Spinner,
    TabPanel = _wp$components.TabPanel,
    ToggleControl = _wp$components.ToggleControl;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect,
    useRef = _wp$element.useRef,
    useState = _wp$element.useState;
var _x = wp.i18n._x;

var Main = function Main() {
  // The data handling.
  var _useState = useState(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isAPILoaded = _useState2[0],
      setAPILoaded = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAPISaving = _useState4[0],
      setAPISaving = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      notification = _useState6[0],
      setNotification = _useState6[1];

  var settingsRef = useRef(null); // To process each one of our Settings fields, which is required in React when using "controlled inputs".

  var _useState7 = useState(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      myToggle = _useState8[0],
      setMyToggle = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      myTextInput = _useState10[0],
      setMyTextInput = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      myRadio = _useState12[0],
      setMyRadio = _useState12[1];

  var _useState13 = useState([]),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      myMultiSelect = _useState14[0],
      setMyMultiSelect = _useState14[1]; // Disable the multi-select while awaiting save to complete.


  var getDaysOptions = function getDaysOptions(disabled) {
    var choices = settingsData.choicesFor.my_multi_select;

    if (disabled) {
      return choices.map(function (choice) {
        return _objectSpread(_objectSpread({}, choice), {}, {
          'disabled': true
        });
      });
    }

    return choices;
  };

  var setOptions = function setOptions(option, value) {
    switch (option) {
      case 'myToggle':
        setMyToggle(value);
        break;

      case 'myTextInput':
        setMyTextInput(value);
        break;

      case 'myRadio':
        setMyRadio(value);
        break;

      case 'myMultiSelect':
        setMyMultiSelect(value);
        break;
    }
  };

  var changeOptions = function changeOptions(option, state, value) {
    var model = new wp.api.models.Settings((0, _defineProperty2.default)({}, option, value));
    var save = model.save();
    /**
     * In case API response never comes back (if PHP is terminated) or takes unexpectedly long (if paused during a
     * PHP breakpoint), still clear the API Saving flag so components aren't disabled forever (avoid page reload if
     * API failed). The timeout is greater than 1000 (updating notification) + 800 (saved notification).
     */

    setTimeout(function () {
      setAPISaving(false);
    }, 5000);
    setAPISaving(true);
    addNotification(_x('Updating settings…', 'notification'), 'info', 1000);
    save.success(function (response, status) {
      _reactNotificationsComponent.store.removeNotification(notification); // Avoid showing success message when stuff really didn't happen as expected.


      if (null === response[option]) {
        status = 'error';
      }

      if ('success' === status) {
        setOptions(state, response[option]);
        setTimeout(function () {
          addNotification(_x('Settings saved.', 'notification'), 'success');
          setAPISaving(false);
        }, 800);
      }

      if ('error' === status) {
        setTimeout(function () {
          addNotification(_x('An unknown error occurred.', 'notification'), 'danger');
          setAPISaving(false);
        }, 800);
      }

      settingsRef.current.fetch();
    });
    save.error(function (response, status) {
      _reactNotificationsComponent.store.removeNotification(notification);

      setTimeout(function () {
        var params;
        var msg;

        if (response.responseJSON.data.params) {
          params = response.responseJSON.data.params;
          msg = params[Object.keys(params)[0]];
        } else {
          msg = response.responseJSON.message;
        }

        addNotification(msg ? msg : _x('An unknown error occurred.', 'notification'), 'danger');
        setAPISaving(false);
      }, 1500); // Longer than success' to allow reading the error message.
    });
  };

  var addNotification = function addNotification(message, type) {
    var theDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2500;

    var notification = _reactNotificationsComponent.store.addNotification({
      message: message,
      type: type,
      insert: 'top',
      container: 'bottom-left',
      isMobile: true,
      dismiss: {
        duration: theDuration,
        showIcon: true
      }
    });

    setNotification(notification);
  };

  useEffect(function () {
    wp.api.loadPromise.then(function () {
      settingsRef.current = new wp.api.models.Settings();

      if (false === isAPILoaded) {
        settingsRef.current.fetch().then(function (response) {
          // 'response' is the result from the Settings API containing all the settings exposed via REST API, plus some general site info.
          setAPILoaded(true);
          setMyToggle(Boolean(response[settingsData.optionsInfo.prefix + 'my_toggle']));
          setMyTextInput(response[settingsData.optionsInfo.prefix + 'my_textinput']);
          setMyRadio(response[settingsData.optionsInfo.prefix + 'my_radio']);
          setMyMultiSelect(response[settingsData.optionsInfo.prefix + 'my_multi_select']);
        });
      }
    });
  }, []);

  if (!isAPILoaded) {
    return /*#__PURE__*/React.createElement(Placeholder, null, /*#__PURE__*/React.createElement(Spinner, null));
  }

  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "main container"
  }, /*#__PURE__*/React.createElement(TabPanel, {
    className: "tabs",
    initialTabName: "tab1",
    tabs: [{
      name: 'tab1',
      title: /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Dashicon, {
        icon: "admin-settings"
      }), " Tab 1"),
      className: "tab-one"
    }, {
      name: 'tab2',
      title: /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Dashicon, {
        icon: "external"
      }), " Tab 2"),
      className: "tab-two"
    }]
  }, function (tab) {
    if ('tab1' === tab.name) {
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: _x('A section with a toggle', 'panel title')
      }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(ToggleControl, {
        label: _x('My Toggle', 'toggle input label'),
        help: 'The help text for this control.',
        checked: myToggle,
        onChange: function onChange() {
          return changeOptions(settingsData.optionsInfo.prefix + 'my_toggle', 'myToggle', !myToggle);
        }
      }))), /*#__PURE__*/React.createElement(PanelBody, {
        title: _x('Another section', 'panel title')
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Another thing goes here."))));
    } else if ('tab2' === tab.name) {
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
        title: _x('APIs & Posts', 'panel title')
      }, /*#__PURE__*/React.createElement(PanelRow, null, /*#__PURE__*/React.createElement(BaseControl, {
        label: _x('A text input', 'text input label'),
        help: 'Allows lowercase, uppercase, underscores, and hyphens.'
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: myTextInput,
        placeholder: _x('abc_ABC-123', 'text input placeholder'),
        disabled: isAPISaving,
        onChange: function onChange(e) {
          return setMyTextInput(e.target.value);
        },
        onKeyPress: function onKeyPress(event) {
          if (event.key === 'Enter') {
            document.getElementById('forMyTextInput').click();
          }
        }
      }), /*#__PURE__*/React.createElement(Button, {
        id: 'forMyTextInput',
        isPrimary: true,
        disabled: isAPISaving,
        onClick: function onClick() {
          return changeOptions(settingsData.optionsInfo.prefix + 'my_textinput', 'myTextInput', myTextInput);
        }
      }, _x('Save', 'button text')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ExternalLink, {
        href: "https://developers.google.com/maps/documentation/javascript/get-api-key"
      }, _x('Get API Key', 'external link')))), /*#__PURE__*/React.createElement(RadioControl, {
        label: _x('My Radio', 'input label'),
        help: _x('Pick one of these… and only one. (FYI: They are the public post types.)', 'input help'),
        selected: myRadio,
        options: settingsData.choicesFor.my_radio,
        onChange: function onChange(myRadio) {
          return changeOptions(settingsData.optionsInfo.prefix + 'my_radio', 'myRadio', myRadio);
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        multiple: true,
        label: _x('Multi-select component', 'input label'),
        help: _x('Which one(s) do you want? Notice it disables while awaiting the save to complete. Nifty! Plus, #6 is always disabled.', 'input help'),
        value: myMultiSelect // We need to make sure we start as an array, not as `null`, or else the component won't load at all.
        ,
        options: getDaysOptions(isAPISaving),
        onChange: function onChange(myMultiSelect) {
          return changeOptions(settingsData.optionsInfo.prefix + 'my_multi_select', 'myMultiSelect', myMultiSelect);
        }
      }))));
    }
  })));
};

var _default = Main;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":"IxO8","@babel/runtime/helpers/slicedToArray":"HETk","@wordpress/element":"J7Ww","react-notifications-component":"otjH","react-notifications-component/dist/theme.css":"P7UR"}],"slvk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = require("@wordpress/element");

/*global wp */

/**
 * WordPress dependencies.
 */
var Button = wp.components.Button;
var _x = wp.i18n._x;

var Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, _x('Got a question for us?', 'info section heading')), /*#__PURE__*/React.createElement("p", null, _x('Translatable footer text via JS.', 'dummy text in footer, just for testing')), /*#__PURE__*/React.createElement("p", null, _x('We would love to hear from you.', 'info section paragraph')), /*#__PURE__*/React.createElement(Button, {
    isSecondary: true,
    target: "_blank",
    href: "https://wordpress.org/support/plugin/sharizard-wordpress"
  }, _x('Ask a question', 'button text for external support link')), /*#__PURE__*/React.createElement(Button, {
    isSecondary: true,
    target: "_blank",
    href: "https://wordpress.org/support/plugin/sharizard-wordpress/reviews/?rate=5#new-post"
  }, _x('Leave a review', 'button text for online review'))));
};

var _default = Footer;
exports.default = _default;
},{"@wordpress/element":"J7Ww"}],"qeiI":[function(require,module,exports) {
"use strict";

var _element = require("@wordpress/element");

var _reactNotificationsComponent = _interopRequireDefault(require("react-notifications-component"));

var _Header = _interopRequireDefault(require("./Header"));

var _Main = _interopRequireDefault(require("./Main"));

var _Footer = _interopRequireDefault(require("./Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All of the code for your admin's Settings Page belongs in this file (import from other files in this directory).
 *
 * The single/concatenated .js file gets enqueued from src/Admin/class-Assets.php.
 */

/*global wp, settingsData */

/**
 * Internal dependencies.
 */
var Fragment = wp.element.Fragment;
/**
 * WordPress dependencies.
 */

var App = function App() {
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(_reactNotificationsComponent.default, null), /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_Main.default, null), /*#__PURE__*/React.createElement(_Footer.default, null));
};

wp.element.render( /*#__PURE__*/React.createElement(App, null), document.getElementById(settingsData.entryId));
},{"@wordpress/element":"J7Ww","react-notifications-component":"otjH","./Header":"W1kX","./Main":"rWM8","./Footer":"slvk"}],"b5MT":[function(require,module,exports) {
"use strict";

var _ = _interopRequireDefault(require("../src/Admin/Settings/pcss/*.pcss"));

var _index = _interopRequireDefault(require("../src/Admin/Settings/js/index.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"../src/Admin/Settings/pcss/*.pcss":"d9r0","../src/Admin/Settings/js/index.jsx":"qeiI"}]},{},["b5MT"], null)