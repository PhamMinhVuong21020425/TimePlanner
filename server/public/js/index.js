(self["webpackChunkserver"] = self["webpackChunkserver"] || []).push([["/public/js/index"],{

/***/ "./src/views/main/App.tsx":
/*!********************************!*\
  !*** ./src/views/main/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var NotFound_1 = __importDefault(__webpack_require__(/*! ./pages/NotFound */ "./src/views/main/pages/NotFound.tsx"));
var Contact_1 = __importDefault(__webpack_require__(/*! ./pages/Contact */ "./src/views/main/pages/Contact.tsx"));
var Home_1 = __importDefault(__webpack_require__(/*! ./pages/Home */ "./src/views/main/pages/Home.tsx"));
var Layout_1 = __importDefault(__webpack_require__(/*! ./pages/Layout */ "./src/views/main/pages/Layout.tsx"));
var Task_1 = __importDefault(__webpack_require__(/*! ./pages/Task */ "./src/views/main/pages/Task.tsx"));
var LoginForm_1 = __importDefault(__webpack_require__(/*! ./components/LoginForm */ "./src/views/main/components/LoginForm.tsx"));
var SignUpForm_1 = __importDefault(__webpack_require__(/*! ./pages/SignUpForm */ "./src/views/main/pages/SignUpForm.tsx"));
var Admin_1 = __importDefault(__webpack_require__(/*! ./pages/Admin */ "./src/views/main/pages/Admin.tsx"));
__webpack_require__(/*! ./index.css */ "./src/views/main/index.css");
__webpack_require__(/*! ./App.css */ "./src/views/main/App.css");
var Setting_1 = __importDefault(__webpack_require__(/*! ./pages/Setting */ "./src/views/main/pages/Setting.tsx"));
function App() {
  return react_1["default"].createElement(react_router_dom_1.BrowserRouter, null, react_1["default"].createElement(react_router_dom_1.Routes, null, react_1["default"].createElement(react_router_dom_1.Route, {
    path: "/",
    element: react_1["default"].createElement(Layout_1["default"], null)
  }, react_1["default"].createElement(react_router_dom_1.Route, {
    index: true,
    element: react_1["default"].createElement(Home_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "contact",
    element: react_1["default"].createElement(Contact_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "login",
    element: react_1["default"].createElement(LoginForm_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "signup",
    element: react_1["default"].createElement(SignUpForm_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "admin",
    element: react_1["default"].createElement(Admin_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "profile",
    element: react_1["default"].createElement(Setting_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "task/:task_id",
    element: react_1["default"].createElement(Task_1["default"], null)
  }), react_1["default"].createElement(react_router_dom_1.Route, {
    path: "*",
    element: react_1["default"].createElement(NotFound_1["default"], null)
  }))));
}
exports["default"] = App;

/***/ }),

/***/ "./src/views/main/components/AddTaskModal.tsx":
/*!****************************************************!*\
  !*** ./src/views/main/components/AddTaskModal.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var taskAction_1 = __webpack_require__(/*! ../redux/actions/taskAction */ "./src/views/main/redux/actions/taskAction.ts");
var Tasks_1 = __webpack_require__(/*! ../types/Tasks */ "./src/views/main/types/Tasks.ts");
function AddTaskModal(_ref) {
  var _this = this;
  var id = _ref.id,
    isShowing = _ref.isShowing,
    hide = _ref.hide;
  var _ref2 = (0, react_1.useState)(Object.assign(Object.assign({}, Tasks_1.initTask), {
      parent_task_id: id
    })),
    _ref3 = _slicedToArray(_ref2, 2),
    data = _ref3[0],
    setData = _ref3[1];
  var _ref4 = (0, react_1.useState)(false),
    _ref5 = _slicedToArray(_ref4, 2),
    isInvalid = _ref5[0],
    setIsInvalid = _ref5[1];
  var dispatch = (0, react_redux_1.useDispatch)();
  var handleDataChange = function handleDataChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setData(function (prevState) {
      return Object.assign(Object.assign({}, prevState), _defineProperty({}, name, value));
    });
    setIsInvalid(false);
  };
  var handleSave = function handleSave(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            if (data.taskName.trim() == '') {
              setIsInvalid(true);
            } else {
              hide();
              // const res = await request.post(`task/${id}`, data);
              // console.log(res.data);
              dispatch((0, taskAction_1.addTaskAction)(data));
              setData(Object.assign(Object.assign({}, Tasks_1.initTask), {
                parent_task_id: id
              }));
            }
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var handleCancel = function handleCancel() {
    hide();
    setIsInvalid(false);
  };
  return isShowing ? react_1["default"].createElement("div", {
    className: "z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-poppins"
  }, react_1["default"].createElement("div", {
    className: "bg-white p-4 rounded-md"
  }, react_1["default"].createElement("div", {
    className: "text-xs text-gray-500"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSave,
    className: "w-full max-w-lg"
  }, react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-6"
  }, react_1["default"].createElement("div", {
    className: "w-full md:w-1/2 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, "Task Name"), react_1["default"].createElement("input", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "text",
    name: "taskName",
    onChange: handleDataChange,
    value: data.taskName,
    placeholder: ""
  }), isInvalid && react_1["default"].createElement("p", {
    className: "text-red-500 text-xs italic"
  }, "Please fill out this field.")), react_1["default"].createElement("div", {
    className: "w-full md:w-1/2 px-3"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-last-name"
  }, "Type"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("select", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    name: "type",
    onChange: handleDataChange,
    value: data.type,
    placeholder: ""
  }, react_1["default"].createElement("option", null, "WORK_OR_STUDY"), react_1["default"].createElement("option", null, "ENTERTAINMENT_OR_HOBBY"), react_1["default"].createElement("option", null, "BASIC_NEED"), react_1["default"].createElement("option", null, "HOUSEWORK"), react_1["default"].createElement("option", null, "SPORT_OR_WORKOUT"), react_1["default"].createElement("option", null, "SOCIAL_ACTIVITY"), react_1["default"].createElement("option", null, "WASTED_TIME"), react_1["default"].createElement("option", null, "OTHERS"))))), react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-6"
  }, react_1["default"].createElement("div", {
    className: "w-full px-3"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-password"
  }, "Description"), react_1["default"].createElement("textarea", {
    className: "text-xs w-full rounded-md border-gray-300 bg-gray-100",
    id: "grid-password",
    name: "description",
    onChange: handleDataChange,
    value: data.description
  }), react_1["default"].createElement("p", {
    className: "text-gray-600 text-xs italic"
  }, "Make it as long and as crazy as you'd like"))), react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-2"
  }, react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-city"
  }, "Start time"), react_1["default"].createElement("input", {
    className: "appearance-none text-xs block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-city",
    type: "datetime-local",
    name: "startTime",
    onChange: handleDataChange,
    value: data.startTime,
    placeholder: "Albuquerque"
  })), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-state"
  }, "Priority"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("select", {
    className: "block text-xs appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-state",
    name: "priority",
    onChange: handleDataChange,
    value: data.priority
  }, react_1["default"].createElement("option", null, "LOW"), react_1["default"].createElement("option", null, "MEDIUM"), react_1["default"].createElement("option", null, "HIGH")))), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "uppercase block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-zip"
  }, "Finish time"), react_1["default"].createElement("input", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-zip",
    type: "datetime-local",
    name: "finishTime",
    onChange: handleDataChange,
    value: data.finishTime,
    placeholder: "90210"
  }))), react_1["default"].createElement("button", {
    className: "bg-emerald-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer",
    type: "submit"
  }, "Save"), react_1["default"].createElement("button", {
    className: "bg-amber-500 px-2 py-1 rounded-sm text-white text-xs mx-2 cursor-pointer",
    onClick: handleCancel
  }, "Cancel"))))) : null;
}
exports["default"] = AddTaskModal;

/***/ }),

/***/ "./src/views/main/components/AdminPeople.tsx":
/*!***************************************************!*\
  !*** ./src/views/main/components/AdminPeople.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var userAction_1 = __webpack_require__(/*! ../redux/actions/userAction */ "./src/views/main/redux/actions/userAction.ts");
function AdminPeople() {
  // const [users, setUsers] = useState<User[]>();
  var users = (0, react_redux_1.useSelector)(function (state) {
    return state.userState.users;
  });
  var dispatch = (0, react_redux_1.useDispatch)();
  (0, react_2.useEffect)(function () {
    // request.get<User[]>('user/getAllUser')
    //     .then(response => {
    //         setUsers(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    dispatch((0, userAction_1.fetchUsersAction)());
  }, []);
  function getRandomColor() {
    var colorList = ["bg-red-400", "bg-rose-400", "bg-orange-500", "bg-lime-400", "bg-pink-400", "bg-cyan-400", "bg-sky-400", "bg-indigo-400", "bg-emerald-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];
    // Get a random number between 0 and the length of the color list
    var randomNumber = Math.floor(Math.random() * colorList.length);
    // Return the color at the random index
    return colorList[randomNumber];
  }
  return react_1["default"].createElement("div", {
    className: "flex justify-center items-center h-screen"
  }, react_1["default"].createElement("div", {
    className: "w-[70%] border-[1.5px] h-auto p-4 rounded-md font-poppins text-gray-500"
  }, react_1["default"].createElement("div", {
    className: "font-bold mb-2"
  }, "User Leaderboard"), react_1["default"].createElement("hr", null), users === null || users === void 0 ? void 0 : users.map(function (i) {
    return react_1["default"].createElement("div", {
      className: "flex justify-between items-center"
    }, react_1["default"].createElement("div", {
      className: "flex items-center my-2"
    }, react_1["default"].createElement("div", {
      className: "w-[35px] h-[35px] ".concat(getRandomColor(), " rounded-full flex items-center justify-center text-white font-bold")
    }, i.name[0]), react_1["default"].createElement("div", {
      className: "ml-2"
    }, react_1["default"].createElement("div", {
      className: "font-bold text-sm"
    }, i.name), react_1["default"].createElement("div", {
      className: "text-xs"
    }, i.email))), react_1["default"].createElement("button", {
      className: "text-green-400"
    }, react_1["default"].createElement(fi_1.FiEdit, null)));
  })));
}
exports["default"] = AdminPeople;

/***/ }),

/***/ "./src/views/main/components/AdminReport.tsx":
/*!***************************************************!*\
  !*** ./src/views/main/components/AdminReport.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var echarts_for_react_1 = __importDefault(__webpack_require__(/*! echarts-for-react */ "./node_modules/echarts-for-react/esm/index.js"));
var UserReport = function UserReport() {
  var option = {
    title: {
      text: 'User Report',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Toddler', 'Preschooler', 'Grade Schooler', 'Teen', 'Young Adult', 'Adult', 'Senior']
    },
    series: [{
      name: 'User Report',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 10,
        name: 'Toddler'
      }, {
        value: 20,
        name: 'Preschooler'
      }, {
        value: 30,
        name: 'Grade Schooler'
      }, {
        value: 40,
        name: 'Teen'
      }, {
        value: 50,
        name: 'Young Adult'
      }, {
        value: 60,
        name: 'Adult'
      }, {
        value: 70,
        name: 'Senior'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0,0,0,.5)'
        }
      }
    }]
  };
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option,
    style: {
      height: 400
    }
  }));
};
function weakestTopicStyle(name, percent) {
  return react_1["default"].createElement("div", {
    className: "my-4 flex justify-normal items-center"
  }, react_1["default"].createElement("div", {
    className: "flex justify-center items-center"
  }, react_1["default"].createElement("div", {
    className: "border-[1.5px] border-red-400 w-[40px] h-[40px] rounded-md flex items-center text-center justify-center font-bold text-xs text-red-500"
  }, "".concat(percent, "%"))), react_1["default"].createElement("div", {
    className: "mx-3 w-full"
  }, react_1["default"].createElement("div", {
    className: "text-xs font-bold text-gray-600"
  }, name), react_1["default"].createElement("div", {
    className: "my-2"
  }, react_1["default"].createElement("div", {
    className: "bg-red-300 h-[5px] rounded-md w-[".concat(percent, "%]")
  }))));
}
function strongestTopicStyle(name, percent) {
  return react_1["default"].createElement("div", {
    className: "my-4 flex justify-normal items-center"
  }, react_1["default"].createElement("div", {
    className: "flex justify-center items-center"
  }, react_1["default"].createElement("div", {
    className: "border-[1.5px] border-green-400 w-[40px] h-[40px] rounded-md flex items-center text-center justify-center font-bold text-xs text-green-500"
  }, "".concat(percent, "%"))), react_1["default"].createElement("div", {
    className: "mx-3 w-full"
  }, react_1["default"].createElement("div", {
    className: "text-xs font-bold text-gray-600"
  }, name), react_1["default"].createElement("div", {
    className: "my-2"
  }, react_1["default"].createElement("div", {
    className: "bg-green-300 h-[5px] rounded-md w-[".concat(percent, "%]")
  }))));
}
function WeakestTopic() {
  return react_1["default"].createElement("div", {
    className: "w-1/2 mr-2 rounded-md border-[1.5px] border-gray-200"
  }, react_1["default"].createElement("div", {
    className: "p-4"
  }, react_1["default"].createElement("div", {
    className: "text-base text-red-400 underline underline-offset-8"
  }, "Weakest Topic"), react_1["default"].createElement("div", null, weakestTopicStyle("Sleeping", 95)), react_1["default"].createElement("div", null, weakestTopicStyle("Watching TV", 80)), react_1["default"].createElement("div", null, weakestTopicStyle("Eating", 70))));
}
function StrongestTopic() {
  return react_1["default"].createElement("div", {
    className: "w-1/2 ml-2 rounded-md border-[1.5px] border-gray-200"
  }, react_1["default"].createElement("div", {
    className: "p-4"
  }, react_1["default"].createElement("div", {
    className: "text-base text-green-500 underline underline-offset-8"
  }, "Strongest Topic"), react_1["default"].createElement("div", null, strongestTopicStyle("Japanese", 30)), react_1["default"].createElement("div", null, strongestTopicStyle("Weaboo", 80)), react_1["default"].createElement("div", null, strongestTopicStyle("Combatting", 20)), react_1["default"].createElement("div", null, strongestTopicStyle("Studying", 10))));
}
var AdminReport = function AdminReport() {
  return react_1["default"].createElement("div", {
    className: "m-3 rounded-md shadow-md"
  }, react_1["default"].createElement("div", {
    className: "p-4"
  }, react_1["default"].createElement("div", {
    className: "flex"
  }, react_1["default"].createElement(WeakestTopic, null), react_1["default"].createElement(StrongestTopic, null)), react_1["default"].createElement("div", {
    className: 'p-6'
  }, react_1["default"].createElement(UserReport, null))));
};
exports["default"] = AdminReport;

/***/ }),

/***/ "./src/views/main/components/AdminSideBar.tsx":
/*!****************************************************!*\
  !*** ./src/views/main/components/AdminSideBar.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
function styleOption(text, color) {
  // Get first letter of text
  // Only works for ()
  var firstLetter = text[0];
  return react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 hover:bg-".concat(color, "-200 py-2 px-3 rounded-md")
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] px-2 flex items-center justify-center bg-".concat(color, "-400 text-white rounded-sm text-sm font-bold")
  }, firstLetter), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, text));
}
var AdminSideBar = function AdminSideBar(_ref) {
  var handleClicked = _ref.handleClicked,
    currentOption = _ref.currentOption;
  var navigate = (0, react_router_dom_1.useNavigate)();
  var handleLogout = function handleLogout() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var confirmation, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            confirmation = window.confirm("Are you sure want to log out?");
            if (!confirmation) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return request_1["default"].get('logout');
          case 4:
            res = _context.sent;
            if (res.data.success) {
              navigate('/login');
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  return react_1["default"].createElement("div", {
    className: "m-3 rounded-md shadow-md h-screen font-poppins"
  }, react_1["default"].createElement("div", {
    className: "p-4"
  }, react_1["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, react_1["default"].createElement("div", {
    className: "w-2/3 font-bold text-gray-700 mx-auto my-4 text-center "
  }, "TimePlanner")), react_1["default"].createElement("hr", null), react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 ".concat(currentOption == "Reports" ? "bg-emerald-200" : "hover:bg-emerald-200", " py-2 px-3 rounded-md"),
    onClick: function onClick() {
      return handleClicked("Reports");
    }
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-emerald-400 text-white rounded-sm text-sm text-bold"
  }, "R"), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, "Reports")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 ".concat(currentOption == "People" ? "bg-yellow-200" : "hover:bg-yellow-200", " py-2 px-3 rounded-md"),
    onClick: function onClick() {
      return handleClicked("People");
    }
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-yellow-400 text-white rounded-sm text-sm text-bold"
  }, "P"), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, "People")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 ".concat(currentOption == "Activities" ? "bg-violet-200" : "hover:bg-violet-200", " py-2 px-3 rounded-md"),
    onClick: function onClick() {
      return handleClicked("Activities");
    }
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-violet-400 text-white rounded-sm text-sm text-bold"
  }, "A"), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, "Activities")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 ".concat(currentOption == "Settings" ? "bg-cyan-200" : "hover:bg-cyan-200", " py-2 px-3 rounded-md"),
    onClick: function onClick() {
      return handleClicked("Settings");
    }
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-cyan-400 text-white rounded-sm text-sm text-bold"
  }, "S"), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, "Settings")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center mt-2 ".concat(currentOption == "Logout" ? "bg-pink-200" : "hover:bg-pink-200", " py-2 px-3 rounded-md"),
    onClick: function onClick() {
      handleClicked("Logout");
      handleLogout();
    }
  }, react_1["default"].createElement("div", {
    className: "w-[20px] h-[20px] font-bold px-2 flex items-center justify-center bg-pink-300 text-white rounded-sm text-sm text-bold"
  }, "L"), react_1["default"].createElement("div", {
    className: "w-[90%] mx-4 text-gray-700 text-sm"
  }, "Logout"))));
};
exports["default"] = AdminSideBar;

/***/ }),

/***/ "./src/views/main/components/Calendar.tsx":
/*!************************************************!*\
  !*** ./src/views/main/components/Calendar.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var WeekCalendar_1 = __importDefault(__webpack_require__(/*! ./WeekCalendar */ "./src/views/main/components/WeekCalendar.tsx"));
function Calendar() {
  var todo = [{
    startDate: new Date("1995-07-31T03:25:00"),
    endDate: new Date("1995-07-31T03:25:00"),
    title: "Brainstorming",
    description: "Utilities for controlling the font size of an element."
  }, {
    startDate: new Date("1995-07-31T03:25:00"),
    endDate: new Date("1995-07-31T03:25:00"),
    title: "Brainstorming",
    description: "Utilities for controlling the font size of an element."
  }];
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "p-4 rounded-md items-center mx-auto"
  }, react_1["default"].createElement(WeekCalendar_1["default"], null)));
}
exports["default"] = Calendar;

/***/ }),

/***/ "./src/views/main/components/ChildTask.tsx":
/*!*************************************************!*\
  !*** ./src/views/main/components/ChildTask.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var EditTaskModal_1 = __importDefault(__webpack_require__(/*! ./EditTaskModal */ "./src/views/main/components/EditTaskModal.tsx"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function taskStyle(i, handleClicked) {
  var id = i.task_id;
  switch (i.priority) {
    case 'LOW':
      return react_1["default"].createElement("div", {
        className: "bg-emerald-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "font-bold bg-emerald-300 px-2 py-1 rounded-md text-emerald-600 text-xs -translate-y-6 z-0"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 z-0"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-emerald-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case 'MEDIUM':
      return react_1["default"].createElement("div", {
        className: " bg-amber-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "font-bold bg-amber-300 px-2 py-1 rounded-md text-amber-600 text-xs -translate-y-6 z-0"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 z-0"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-amber-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case 'HIGH':
      return react_1["default"].createElement("div", {
        className: "bg-rose-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "font-bold bg-rose-300 px-2 py-1 rounded-md text-rose-600 text-xs -translate-y-6 z-0"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 z-0"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-rose-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    default:
      return null;
      break;
  }
}
function buttonStyle(i) {
  return react_1["default"].createElement("div", null, i.status === 'STOPPED' ? react_1["default"].createElement("button", {
    className: "font-bold text-xs text-rose-600 bg-rose-200 px-2 py-1 rounded-md"
  }, "Stopped") : i.status === 'INPROGRESS' ? react_1["default"].createElement("button", {
    className: "font-bold text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md"
  }, "In Progress") : i.status === 'COMPLETED' ? react_1["default"].createElement("button", {
    className: "font-bold text-xs text-green-600 bg-green-200 px-2 py-1 rounded-md"
  }, "Completed") : null);
}
function ChildTask(_ref) {
  var id = _ref.id;
  // const todo: Task[] = [
  //     {
  //         id: 1,
  //         started_time: new Date('1995-12-17T03:20:00'),
  //         finished_time: new Date('1995-12-20T03:20:00'),
  //         task_name: 'Project X',
  //         title: 'Brainstorming',
  //         description:
  //             'An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.',
  //         priority: 'HIGH',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 2,
  //         started_time: new Date('1995-01-17T03:24:00'),
  //         finished_time: new Date('1995-01-20T03:24:00'),
  //         task_name: 'Project Y',
  //         title: 'Brainstorming',
  //         description:
  //             'When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.',
  //         priority: 'LOW',
  //         status: 'COMPLETED',
  //     },
  //     {
  //         id: 3,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project Z',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'LOW',
  //         status: 'STOPPED',
  //     },
  //     {
  //         id: 4,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'New Year Celebration',
  //         description: 'Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 5,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'LOW',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 6,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'STOPPED',
  //     },
  //     {
  //         id: 7,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project Z',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'COMPLETED',
  //     },
  // ];
  var _ref2 = (0, react_1.useState)("0"),
    _ref3 = _slicedToArray(_ref2, 2),
    currentId = _ref3[0],
    setCurrentId = _ref3[1];
  var _ref4 = (0, react_1.useState)([]),
    _ref5 = _slicedToArray(_ref4, 2),
    todo = _ref5[0],
    setTodo = _ref5[1];
  var dispatch = (0, react_redux_1.useDispatch)();
  var tasks = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasks;
  });
  (0, react_1.useEffect)(function () {
    var childTasks = tasks.filter(function (item) {
      return item.parent_task_id === id;
    });
    setTodo(childTasks);
    // request.get<Task[]>(`task/child/${id}`)
    //     .then(response => {
    //         setTodo(response.data);
    //     })
    //     .catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
  }, [id, tasks]);
  // function editTask(id: string, newData: Task) {
  //     // for (let i = 0; i < todo.length; i++) {
  //     //     if (todo[i].id === id) {
  //     //         todo[i] = newData;
  //     //     }
  //     // }
  // }
  var _ref6 = (0, react_1.useState)(false),
    _ref7 = _slicedToArray(_ref6, 2),
    showEditTask = _ref7[0],
    setShowEditTask = _ref7[1];
  function handleClicked(id) {
    setCurrentId(id);
    setShowEditTask(true);
  }
  // const handleSave = () => {
  //     dispatch({
  //         type: 'SET_TASK_INPUT',
  //         payload: 'OK'
  //     });
  // }
  var handleCancel = function handleCancel() {
    setShowEditTask(false);
  };
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "font-poppins"
  }, react_1["default"].createElement("div", {
    className: "flex justify-center"
  }, react_1["default"].createElement("div", {
    className: "w-[80%] grid grid-cols-3 gap-1"
  }, todo === null || todo === void 0 ? void 0 : todo.map(function (i) {
    return react_1["default"].createElement("div", {
      className: "m-4"
    }, react_1["default"].createElement("div", null, taskStyle(i, handleClicked)));
  })))), react_1["default"].createElement("div", null, showEditTask && react_1["default"].createElement(EditTaskModal_1["default"], {
    id: currentId,
    showFunction: handleCancel
  })));
}
exports["default"] = ChildTask;

/***/ }),

/***/ "./src/views/main/components/CurrentTask.tsx":
/*!***************************************************!*\
  !*** ./src/views/main/components/CurrentTask.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
var useModal_1 = __importDefault(__webpack_require__(/*! ../utils/useModal */ "./src/views/main/utils/useModal.ts"));
var AddTaskModal_1 = __importDefault(__webpack_require__(/*! ./AddTaskModal */ "./src/views/main/components/AddTaskModal.tsx"));
var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var wi_1 = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
var ai_1 = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
var tfi_1 = __webpack_require__(/*! react-icons/tfi */ "./node_modules/react-icons/tfi/index.esm.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function buttonStyle(i) {
  return react_1["default"].createElement("div", null, i.status === 'STOPPED' ? react_1["default"].createElement("button", {
    className: "font-bold ml-2 text-xs text-rose-600 bg-rose-200 px-2 py-1 rounded-md"
  }, "Stopped") : i.status === 'INPROGRESS' ? react_1["default"].createElement("button", {
    className: "font-bold ml-2 text-xs text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md"
  }, "In Progress") : i.status === 'COMPLETED' ? react_1["default"].createElement("button", {
    className: "font-bold ml-2 text-xs text-green-600 bg-green-200 px-2 py-1 rounded-md"
  }, "Completed") : null);
}
function styleTask(i, handleclicked) {
  switch (i.priority) {
    case "LOW":
      return react_1["default"].createElement("div", {
        className: "w-[80%] px-2 py-4 m-4 rounded-md"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
        className: "flex justify-between items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center font-bold text-lg"
      }, react_1["default"].createElement("button", null, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/"
      }, react_1["default"].createElement(ai_1.AiOutlineHome, null))), react_1["default"].createElement("div", {
        className: "ml-2"
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "bg-emerald-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3"
      }, i.priority)), react_1["default"].createElement("button", {
        className: "text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold",
        onClick: function onClick() {
          return handleclicked();
        }
      }, "Add Task +")), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-gray-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(fa_1.FaTelegramPlane, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Started Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.startTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-orange-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(tfi_1.TfiAlarmClock, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Finish Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.finishTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      }), react_1["default"].createElement("div", {
        className: "flex items-center my-2"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(wi_1.WiSolarEclipse, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Status :")), react_1["default"].createElement("div", null, buttonStyle(i))), react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(fa_1.FaRegKeyboard, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Description : ")), react_1["default"].createElement("div", {
        className: "text-xs w-[40%] ml-4 bg-emerald-50 p-2 rounded-md"
      }, i.description)), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      })));
      break;
    case "MEDIUM":
      return react_1["default"].createElement("div", {
        className: "w-[80%] px-2 py-4 m-4 rounded-md"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
        className: "flex justify-between items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center font-bold text-lg"
      }, react_1["default"].createElement("button", null, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/"
      }, react_1["default"].createElement(ai_1.AiOutlineHome, null))), react_1["default"].createElement("div", {
        className: "ml-2"
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "bg-amber-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3"
      }, i.priority)), react_1["default"].createElement("button", {
        className: "text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold",
        onClick: function onClick() {
          return handleclicked();
        }
      }, "Add Task +")), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-gray-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(fa_1.FaTelegramPlane, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Started Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.startTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-orange-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(tfi_1.TfiAlarmClock, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Finish Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.finishTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      }), react_1["default"].createElement("div", {
        className: "flex items-center my-2"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(wi_1.WiSolarEclipse, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Status :")), react_1["default"].createElement("div", null, buttonStyle(i))), react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(fa_1.FaRegKeyboard, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Description : ")), react_1["default"].createElement("div", {
        className: "text-xs w-[40%] ml-4 bg-amber-50 p-2 rounded-md"
      }, i.description)), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      })));
      break;
    case "HIGH":
      // data: {priority: "HIGH", status: "COMPLETED", task_id: "1", task_name: "Task 1", type: "WORK"}
      return react_1["default"].createElement("div", {
        className: "w-[80%] px-2 py-4 m-4 rounded-md"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
        className: "flex justify-between items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement("div", {
        className: "flex items-center font-bold text-lg"
      }, react_1["default"].createElement("button", null, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/"
      }, react_1["default"].createElement(ai_1.AiOutlineHome, null))), react_1["default"].createElement("div", {
        className: "ml-2"
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "bg-rose-500 text-white px-2 py-[2px] rounded-md text-xs font-bold ml-4 -translate-y-3"
      }, i.priority)), react_1["default"].createElement("button", {
        className: "text-white bg-teal-500 px-2 py-1 rounded-md text-xs font-bold",
        onClick: function onClick() {
          return handleclicked();
        }
      }, "Add Task +")), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-gray-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(fa_1.FaTelegramPlane, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Started Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.startTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("div", {
        className: "flex items-center text-xs my-1 text-orange-400"
      }, react_1["default"].createElement("div", {
        className: "flex items-center"
      }, react_1["default"].createElement(tfi_1.TfiAlarmClock, null), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Finish Time :")), react_1["default"].createElement("div", {
        className: "ml-2"
      }, (0, moment_1["default"])(i.finishTime).format('YYYY-MM-DD HH:mm:ss'))), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      }), react_1["default"].createElement("div", {
        className: "flex items-center my-4"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(wi_1.WiSolarEclipse, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Status :")), react_1["default"].createElement("div", null, buttonStyle(i))), react_1["default"].createElement("div", {
        className: "flex items-center my-4"
      }, react_1["default"].createElement("div", {
        className: "flex items-center text-xs text-gray-400"
      }, react_1["default"].createElement("div", null, react_1["default"].createElement(fa_1.FaRegKeyboard, null)), react_1["default"].createElement("div", {
        className: "ml-2"
      }, "Description : ")), react_1["default"].createElement("div", {
        className: "text-xs w-[40%] ml-4 bg-rose-50 p-2 rounded-md"
      }, i.description)), react_1["default"].createElement("hr", {
        className: "border-[1px]  mt-4 border-gray-400"
      })));
      break;
  }
}
function CurrentTask(_ref) {
  var id = _ref.id;
  var _ref2 = (0, react_2.useState)({
      task_id: id,
      parent_task_id: "",
      startTime: "",
      finishTime: "",
      taskName: "",
      title: "",
      description: "",
      priority: "LOW",
      status: "INPROGRESS",
      type: "BASIC_NEED"
    }),
    _ref3 = _slicedToArray(_ref2, 2),
    data = _ref3[0],
    setData = _ref3[1];
  var _ref4 = (0, useModal_1["default"])(),
    isShowing = _ref4.isShowing,
    toggle = _ref4.toggle;
  var tasks = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasks;
  });
  (0, react_2.useEffect)(function () {
    var currentTask = tasks.find(function (item) {
      return item.task_id === id;
    });
    currentTask = currentTask ? currentTask : data;
    setData(currentTask);
    // const fetchData = async () => {
    //     try {
    //         const response = await request.get(`task/${id}`);
    //         let result = response.data;
    //         result.started_time = moment(result.started_time).format('YYYY-MM-DD HH:mm:ss');
    //         result.finished_time = moment(result.finished_time).format('YYYY-MM-DD HH:mm:ss');
    //         setData(result);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // fetchData();
  }, [id]);
  var handleclicked = function handleclicked() {
    toggle();
  };
  return react_1["default"].createElement("div", {
    className: "flex justify-center items-center mt-8 p-2 text-gray-600 font-poppins"
  }, styleTask(data, handleclicked), react_1["default"].createElement(AddTaskModal_1["default"], {
    id: id,
    isShowing: isShowing,
    hide: toggle
  }));
}
exports["default"] = CurrentTask;

/***/ }),

/***/ "./src/views/main/components/EditTaskModal.tsx":
/*!*****************************************************!*\
  !*** ./src/views/main/components/EditTaskModal.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var Tasks_1 = __webpack_require__(/*! ../types/Tasks */ "./src/views/main/types/Tasks.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
var taskAction_1 = __webpack_require__(/*! ../redux/actions/taskAction */ "./src/views/main/redux/actions/taskAction.ts");
function EditTaskModal(_ref) {
  var _this = this;
  var id = _ref.id,
    showFunction = _ref.showFunction;
  var _ref2 = (0, react_2.useState)(Object.assign(Object.assign({}, Tasks_1.initTask), {
      task_id: id
    })),
    _ref3 = _slicedToArray(_ref2, 2),
    data = _ref3[0],
    setData = _ref3[1];
  var tasks = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasks;
  });
  var dispatch = (0, react_redux_1.useDispatch)();
  (0, react_2.useEffect)(function () {
    var response = tasks.find(function (item) {
      return item.task_id === id;
    });
    var result = response ? response : data;
    result.startTime = (0, moment_1["default"])(result.startTime).format('YYYY-MM-DD HH:mm:ss');
    result.finishTime = (0, moment_1["default"])(result.finishTime).format('YYYY-MM-DD HH:mm:ss');
    setData(result);
  }, []);
  var handleDataChange = function handleDataChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setData(function (prevState) {
      return Object.assign(Object.assign({}, prevState), _defineProperty({}, name, value));
    });
  };
  var handleSave = function handleSave(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            // const res = await request.post(`task/update/${id}`, data);
            // console.log(res.data);
            dispatch((0, taskAction_1.editTaskAction)(data));
            showFunction();
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var handleCancel = function handleCancel() {
    showFunction();
  };
  var handleDelete = function handleDelete(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var confirmation;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            confirmation = window.confirm("Are you sure want to delete this task?");
            if (confirmation) {
              // const res = await request.delete(`task/delete/${id}`);
              dispatch((0, taskAction_1.deleteTaskAction)(data));
              showFunction();
              // console.log(res.data);
            } else {
              event.preventDefault();
            }
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  };
  return react_1["default"].createElement("div", {
    className: "z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-poppins"
  }, react_1["default"].createElement("div", {
    className: "bg-white p-4 rounded-md"
  }, react_1["default"].createElement("div", {
    className: "text-xs text-gray-500"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSave,
    className: "w-full max-w-lg"
  }, react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-6"
  }, react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, "Name the task"), react_1["default"].createElement("input", {
    className: "text-xs block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
    id: "grid-first-name",
    type: "text",
    name: "taskName",
    value: data.taskName,
    onChange: handleDataChange,
    placeholder: "",
    required: true
  })), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-last-name"
  }, "Type"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("select", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-last-name",
    name: "type",
    value: data.type,
    onChange: handleDataChange,
    placeholder: ""
  }, react_1["default"].createElement("option", null, "WORK_OR_STUDY"), react_1["default"].createElement("option", null, "ENTERTAINMENT_OR_HOBBY"), react_1["default"].createElement("option", null, "BASIC_NEED"), react_1["default"].createElement("option", null, "HOUSEWORK"), react_1["default"].createElement("option", null, "SPORT_OR_WORKOUT"), react_1["default"].createElement("option", null, "SOCIAL_ACTIVITY"), react_1["default"].createElement("option", null, "WASTED_TIME"), react_1["default"].createElement("option", null, "OTHERS")))), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "block tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-first-name"
  }, "Status"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("select", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    name: "status",
    onChange: handleDataChange,
    value: data.status
  }, react_1["default"].createElement("option", null, "INPROGRESS"), react_1["default"].createElement("option", null, "STOPPED"), react_1["default"].createElement("option", null, "COMPLETED"))))), react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-6"
  }, react_1["default"].createElement("div", {
    className: "w-full px-3"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-password"
  }, "Description"), react_1["default"].createElement("textarea", {
    className: "text-xs w-full rounded-md border-gray-300 bg-gray-100",
    id: "grid-password",
    name: "description",
    onChange: handleDataChange,
    value: data.description
  }), react_1["default"].createElement("p", {
    className: "text-gray-600 text-xs italic"
  }, "Make it as long and as crazy as you'd like"))), react_1["default"].createElement("div", {
    className: "flex flex-wrap -mx-3 mb-2"
  }, react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-city"
  }, "Start time"), react_1["default"].createElement("input", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-city",
    type: "datetime-local",
    name: "startTime",
    value: data.startTime,
    onChange: handleDataChange
  })), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-state"
  }, "Priority"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement("select", {
    className: "text-xs block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-state",
    name: "priority",
    onChange: handleDataChange,
    value: data.priority
  }, react_1["default"].createElement("option", null, "LOW"), react_1["default"].createElement("option", null, "MEDIUM"), react_1["default"].createElement("option", null, "HIGH")))), react_1["default"].createElement("div", {
    className: "w-full md:w-1/3 px-3 mb-6 md:mb-0"
  }, react_1["default"].createElement("label", {
    className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
    htmlFor: "grid-zip"
  }, "Finish time"), react_1["default"].createElement("input", {
    className: "text-xs appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "grid-zip",
    type: "datetime-local",
    name: "finishTime",
    value: data.finishTime,
    onChange: handleDataChange
  }))), react_1["default"].createElement("div", {
    className: "flex"
  }, react_1["default"].createElement("button", {
    className: "bg-emerald-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer",
    type: "submit"
  }, "SAVE"), react_1["default"].createElement("button", {
    className: "bg-amber-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer",
    onClick: handleCancel
  }, "CANCEL"), react_1["default"].createElement("button", {
    className: "bg-rose-500 px-2 py-1 rounded-sm text-white text-xs my-4 cursor-pointer ml-auto",
    onClick: handleDelete
  }, "DELETE"))))));
}
exports["default"] = EditTaskModal;

/***/ }),

/***/ "./src/views/main/components/IconWeather.tsx":
/*!***************************************************!*\
  !*** ./src/views/main/components/IconWeather.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var IconWeather = function IconWeather(_ref) {
  var iconName = _ref.iconName;
  // const [iconUrls, setIconUrls] = useState<Icon[]>([]);
  var icons = (0, react_redux_1.useSelector)(function (state) {
    return state.otherState.iconsWeather;
  });
  var item = icons.find(function (icon) {
    return icon.iconName === iconName;
  });
  // const dispatch = useDispatch();
  // useEffect(() => {
  // const fetchIcon = async () => {
  //     try {
  //         const response = await request.get(`getIcon/${iconName}`);
  //         setIconUrls([...response.data]);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };
  // fetchIcon();
  // }, []);
  return react_1["default"].createElement("div", {
    key: item === null || item === void 0 ? void 0 : item.id
  }, react_1["default"].createElement("img", {
    loading: "lazy",
    src: item === null || item === void 0 ? void 0 : item.iconImage,
    alt: item === null || item === void 0 ? void 0 : item.iconName
  }));
};
exports["default"] = IconWeather;

/***/ }),

/***/ "./src/views/main/components/Loading.tsx":
/*!***********************************************!*\
  !*** ./src/views/main/components/Loading.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Loading() {
  return react_1["default"].createElement("div", {
    className: "flex justify-center h-36 items-center"
  }, react_1["default"].createElement("div", {
    className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
    role: "status"
  }, react_1["default"].createElement("span", {
    className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  }, "Loading...")));
}
exports["default"] = Loading;

/***/ }),

/***/ "./src/views/main/components/LoginForm.tsx":
/*!*************************************************!*\
  !*** ./src/views/main/components/LoginForm.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function LoginForm() {
  var _this = this;
  var _ref = (0, react_1.useState)(''),
    _ref2 = _slicedToArray(_ref, 2),
    username = _ref2[0],
    setUsername = _ref2[1];
  var _ref3 = (0, react_1.useState)(''),
    _ref4 = _slicedToArray(_ref3, 2),
    password = _ref4[0],
    setPassword = _ref4[1];
  var _ref5 = (0, react_1.useState)(false),
    _ref6 = _slicedToArray(_ref5, 2),
    isInvalid = _ref6[0],
    setIsInvalid = _ref6[1];
  var _ref7 = (0, react_1.useState)(false),
    _ref8 = _slicedToArray(_ref7, 2),
    isLoading = _ref8[0],
    setIsLoading = _ref8[1];
  var navigate = (0, react_router_dom_1.useNavigate)();
  var handleUsernameChange = function handleUsernameChange(event) {
    setIsInvalid(false);
    setUsername(event.target.value);
  };
  var handlePasswordChange = function handlePasswordChange(event) {
    setIsInvalid(false);
    setPassword(event.target.value);
  };
  var handleSubmit = function handleSubmit(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            data = {
              email: username,
              password: password
            };
            if (!(data.email === '' || data.password.length < 3)) {
              _context.next = 7;
              break;
            }
            setIsInvalid(true);
            setIsLoading(false);
            return _context.abrupt("return");
          case 7:
            _context.next = 9;
            return request_1["default"].post('login', data);
          case 9:
            res = _context.sent;
            if (res.data.userId === 1) {
              navigate('/admin');
            } else if (res.data.message === 'Email or password is invalid.') {
              setIsInvalid(true);
            } else {
              navigate('/');
            }
            // console.log(res.data.message);
            setIsLoading(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  return react_1["default"].createElement("div", {
    className: 'flex h-screen justify-center items-center'
  }, react_1["default"].createElement("div", {
    className: "flex h-screen w-1/3 items-center justify-center font-poppins"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md sm:w-full md:w-full lg:w-full"
  }, react_1["default"].createElement("div", {
    className: "m-5 text-center text-xl font-bold text-gray-600"
  }, "Log In"), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "username"
  }, "Email"), react_1["default"].createElement("input", {
    className: "focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    id: "username",
    type: "email",
    placeholder: "\u2710   Email",
    name: "email",
    value: username,
    onChange: handleUsernameChange
  })), react_1["default"].createElement("div", {
    className: 'mb-6'
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "password"
  }, "Password"), react_1["default"].createElement("input", {
    className: "focus:shadow-outline mb-3 w-full appearance-none rounded border py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    id: "password",
    type: "password",
    name: "password",
    placeholder: "\u2710   Password",
    value: password,
    onChange: handlePasswordChange
  }), isInvalid && react_1["default"].createElement("p", {
    className: "text-red-500 text-sm italic"
  }, "Email or password is invalid.")), react_1["default"].createElement("div", {
    className: "flex items-center justify-center"
  }, react_1["default"].createElement("button", {
    className: "focus:shadow-outline w-full rounded bg-emerald-400 py-2 px-4 font-bold text-white hover:bg-emerald-500 focus:outline-none",
    type: "submit",
    disabled: isLoading
  }, isLoading ? "Loading..." : "Sign In")), react_1["default"].createElement("div", {
    className: "my-3 text-center text-sm text-emerald-400"
  }, "Forgot Password?"), react_1["default"].createElement("div", {
    className: "my-3 text-center text-ml"
  }, "Don't have an account?", ' ', react_1["default"].createElement(react_router_dom_1.Link, {
    to: "/signup",
    className: "text-blue-500"
  }, "Register")), react_1["default"].createElement("hr", null), react_1["default"].createElement("div", {
    className: "mt-5 flex items-center justify-center"
  }, react_1["default"].createElement("button", {
    type: "submit",
    className: "mx-5 flex items-center justify-between rounded-md border-2 border-blue-400 p-2"
  }, react_1["default"].createElement(fa_1.FaFacebook, {
    className: "mr-2 text-[20px] text-blue-500"
  }), react_1["default"].createElement("span", {
    className: "text-sm"
  }, "Facebook")), react_1["default"].createElement("button", {
    className: "mx-5 flex items-center justify-between rounded-md border-2 border-green-400 p-2",
    type: "submit"
  }, react_1["default"].createElement(fa_1.FaGithub, {
    className: "mr-2 text-[20px] text-black-800"
  }), react_1["default"].createElement("span", {
    className: "text-sm"
  }, "GitHub"))))));
}
exports["default"] = LoginForm;

/***/ }),

/***/ "./src/views/main/components/Menu.tsx":
/*!********************************************!*\
  !*** ./src/views/main/components/Menu.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var bs_1 = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var hi_1 = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
var ti_1 = __webpack_require__(/*! react-icons/ti */ "./node_modules/react-icons/ti/index.esm.js");
var hi_2 = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function default_1(_ref) {
  var showButtonAddTask = _ref.showButtonAddTask,
    handleOptionButton = _ref.handleOptionButton;
  var _ref2 = (0, react_1.useState)("ToDoList"),
    _ref3 = _slicedToArray(_ref2, 2),
    activeButton = _ref3[0],
    setActiveButton = _ref3[1];
  var handleButtonClick = function handleButtonClick(option) {
    setActiveButton(option);
    handleOptionButton(option);
  };
  return react_1["default"].createElement("div", {
    className: "m-3 flex items-center text-gray-600 justify-between p-3 font-poppins text-sm rounded-md"
  }, react_1["default"].createElement("button", {
    className: "flex w-1/6 place-items-center justify-center rounded-md px-4 py-2 ".concat(activeButton === "ToDoList" ? "bg-teal-200" : ""),
    onClick: function onClick() {
      return handleButtonClick("ToDoList");
    }
  }, react_1["default"].createElement(react_router_dom_1.Link, {
    to: '/'
  }, react_1["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, react_1["default"].createElement(fa_1.FaTasks, {
    className: "mr-3"
  }), react_1["default"].createElement("span", null, "Tasks")))), react_1["default"].createElement("button", {
    className: "flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ".concat(activeButton === "Weather" ? "bg-teal-200" : ""),
    onClick: function onClick() {
      return handleButtonClick("Weather");
    }
  }, react_1["default"].createElement(ti_1.TiWeatherPartlySunny, {
    className: "mr-3"
  }), react_1["default"].createElement("span", null, "Weather")), react_1["default"].createElement("button", {
    className: "flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ".concat(activeButton === "Calendar" ? "bg-teal-200" : ""),
    onClick: function onClick() {
      return handleButtonClick("Calendar");
    }
  }, react_1["default"].createElement(bs_1.BsCalendar3, {
    className: "mr-3"
  }), react_1["default"].createElement("span", null, "Calendar")), react_1["default"].createElement("button", {
    className: "flex w-1/6 place-items-center text-gray-600 justify-center rounded-md px-4 py-2 ".concat(activeButton === "Report" ? "bg-teal-200" : ""),
    onClick: function onClick() {
      return handleButtonClick("Report");
    }
  }, react_1["default"].createElement(hi_1.HiOutlineDocumentReport, {
    className: "mr-3 text-lg"
  }), react_1["default"].createElement("span", null, "Reports")), showButtonAddTask && react_1["default"].createElement("button", {
    className: "w-1/6 rounded-md border-2 bg-rose-500 -400 px-4 py-2 text-white cursor-pointer mx-2",
    onClick: function onClick() {
      return handleButtonClick("AddTask");
    }
  }, react_1["default"].createElement("div", {
    className: "flex items-center justify-center"
  }, "Add task", react_1["default"].createElement("div", {
    className: "ml-3 font-bold"
  }, react_1["default"].createElement(hi_2.HiOutlinePlus, null)))));
}
exports["default"] = default_1;

/***/ }),

/***/ "./src/views/main/components/Notification.tsx":
/*!****************************************************!*\
  !*** ./src/views/main/components/Notification.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var md_1 = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
var react_3 = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.cjs");
function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
}
var notifications = [{
  id: 1,
  title: 'Support Vector Machine',
  description: 'Project X, a machine learning project using support vector machines, has been created by John Doe.',
  href: '/projects/X',
  start_time: 'March 16, 2022 10:00 AM',
  finish_time: 'March 16, 2022 11:00 AM'
}, {
  id: 2,
  title: 'React training scheduled',
  description: 'A React training session has been scheduled for the development team on March 20, 2022. The session will cover the basics of React and best practices for building scalable web applications.',
  href: '/training/react',
  start_time: 'March 20, 2022 9:00 AM',
  finish_time: 'March 20, 2022 12:00 PM'
}, {
  id: 3,
  title: 't-SNE Algorithm',
  description: 'The t-SNE analysis for Project Y is complete. You can now view the results in the project dashboard.',
  href: '/projects/Y/results',
  start_time: 'April 1, 2022 3:00 PM',
  finish_time: 'April 1, 2022 4:00 PM'
}
// More notifications...
];

function Notification() {
  return react_1["default"].createElement(react_3.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, react_1["default"].createElement("div", null, react_1["default"].createElement(react_3.Menu.Button, {
    className: "flex items-center justify-center"
  }, react_1["default"].createElement(md_1.MdOutlineNotificationsActive, null))), react_1["default"].createElement(react_3.Transition, {
    as: react_2.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, react_1["default"].createElement(react_3.Menu.Items, {
    className: "absolute left-0 z-10 mt-2 w-72 text-sm p-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-emerald-200"
  }, notifications.map(function (noti) {
    return react_1["default"].createElement(react_3.Menu.Item, {
      key: noti.id
    }, function (_ref) {
      var active = _ref.active;
      return react_1["default"].createElement("a", {
        href: noti.href,
        className: classNames(active ? 'bg-emerald-50 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm rounded-md')
      }, react_1["default"].createElement("p", {
        className: "text-gray-700 font-bold"
      }, noti.title), react_1["default"].createElement("p", {
        className: "text-xs my-1"
      }, noti.description), react_1["default"].createElement("p", {
        className: "text-xs my-2"
      }, noti.start_time));
    });
  }))));
}
exports["default"] = Notification;

/***/ }),

/***/ "./src/views/main/components/Report.tsx":
/*!**********************************************!*\
  !*** ./src/views/main/components/Report.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var chart_js_1 = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.cjs");
var chart_js_2 = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.cjs");
// import { Pie, Doughnut, Bar, Line } from "react-chartjs-2";
var chart_js_3 = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.cjs");
//Echarts for react
var echarts_for_react_1 = __importDefault(__webpack_require__(/*! echarts-for-react */ "./node_modules/echarts-for-react/esm/index.js"));
// import { useFormState } from "react-hook-form";
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
// import { ClassNames } from '@emotion/react';
var react_query_1 = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
var Loading_1 = __importDefault(__webpack_require__(/*! ./Loading */ "./src/views/main/components/Loading.tsx"));
var fetchTypeTask = function fetchTypeTask() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request_1["default"].get('task/getTypeTask');
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var fetchPriorityTask = function fetchPriorityTask() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return request_1["default"].get('task/getPriorityTask');
        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
};
var fetchStatusTask = function fetchStatusTask(status) {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return request_1["default"].get("task/getStatusTask/".concat(status));
        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
};
chart_js_1.Chart.register(chart_js_3.ArcElement, chart_js_3.Tooltip, chart_js_3.Legend, chart_js_3.Colors, chart_js_2.CategoryScale, chart_js_2.LinearScale, chart_js_2.PointElement, chart_js_2.BarElement, chart_js_2.LineElement);
var mydata = {
  "lineChartData": {
    // ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"]
    "low": [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
    "medium": [2, 3, 20, 5, 1, 4, 2, 3, 20, 5, 1, 4],
    "high": [3, 10, 13, 15, 22, 30, 3, 10, 13, 15, 22, 30]
  },
  "barChartData": {
    // [WORK_OR_STUDY, ENTERTAINMENT_OR_HOBBY, BASIC_NEED, HOUSEWORK, SPORT_OR_WORKOUT, SOCIAL_ACTIVITY, WASTED_TIME, OTHERS]
    "task": [25, 20, 15, 10, 5, 15, 5, 5]
  },
  "pieChartData": {
    // [LOW, MEDIUM, HIGH]
    "inprogress": [12, 19, 3],
    "stopped": [2, 3, 1],
    "completed": [3, 10, 13]
  }
};
var LineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  datasets: [{
    label: "LOW",
    data: mydata.lineChartData.low,
    borderColor: "rgba(80, 200, 120, 1)",
    backgroundColor: "rgba(80, 200, 120, 0.5)"
  }, {
    label: "MEDIUM",
    data: mydata.lineChartData.medium,
    borderColor: "rgba(255, 206, 86, 1)",
    backgroundColor: "rgba(255, 206, 86, 0.5)"
  }, {
    label: "HIGH",
    data: mydata.lineChartData.high,
    borderColor: "rgba(255, 99, 132, 1)",
    backgroundColor: "rgba(255, 99, 132, 0.5)"
  }]
};
var LineChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        color: "gray",
        lineWidth: 0.3
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black"
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black"
      }
    }
  },
  elements: {
    line: {
      borderWidth: 1.5
    },
    point: {
      radius: 0
    }
  },
  // change font size
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Comic Sans MS",
          size: 10,
          weight: "bold"
        }
      }
    }
  }
};
var BarChartData = {
  labels: ["WORK_OR_STUDY", "ENTERTAINMENT_OR_HOBBY", "BASIC_NEED", "HOUSEWORK", "SPORT_OR_WORKOUT", "SOCIAL_ACTIVITY", "WASTED_TIME", "OTHERS"],
  datasets: [{
    data: mydata.barChartData.task,
    backgroundColor: ["rgba(128, 0, 0, 0.5)", "rgba(128, 64, 0, 0.5)", "rgba(128, 0, 64, 0.5)", "rgba(128, 64, 64, 0.5)", "rgba(128, 0, 128, 0.5)", "rgba(128, 64, 128, 0.5)", "rgba(128, 128, 0, 0.5)", "rgba(128, 128, 64, 0.5)"],
    borderColor: ["rgba(128, 0, 0, 1)", "rgba(128, 64, 0, 1)", "rgba(128, 0, 64, 1)", "rgba(128, 64, 64, 1)", "rgba(128, 0, 128, 1)", "rgba(128, 64, 128, 1)", "rgba(128, 128, 0, 1)", "rgba(128, 128, 64, 1)"]
  }]
};
var BarChartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: false,
        color: "gray",
        lineWidth: 0.3
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black"
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: true,
        weight: "bold",
        color: "black"
      }
    }
  },
  elements: {
    bar: {
      borderWidth: 1.5
    },
    point: {
      radius: 0
    }
  },
  // change font size
  plugins: {
    legend: {
      labels: {
        font: {
          family: "Comic Sans MS",
          size: 10,
          weight: "bold"
        }
      }
    }
  }
};
var UserBarChart = function UserBarChart() {
  var myDict = {
    "WORK_OR_STUDY": 0,
    "ENTERTAINMENT_OR_HOBBY": 0,
    "BASIC_NEED": 0,
    "HOUSEWORK": 0,
    "SPORT_OR_WORKOUT": 0,
    "SOCIAL_ACTIVITY": 0,
    "WASTED_TIME": 0,
    "OTHERS": 0
  };
  var _ref = (0, react_2.useState)([]),
    _ref2 = _slicedToArray(_ref, 2),
    count = _ref2[0],
    setCount = _ref2[1];
  var _ref3 = (0, react_query_1.useQuery)('type', fetchTypeTask),
    responseData = _ref3.data,
    isLoading = _ref3.isLoading;
  (0, react_2.useEffect)(function () {
    responseData === null || responseData === void 0 ? void 0 : responseData.forEach(function (i) {
      myDict[i.type] = i.count;
      // console.log(myDict[i.type]);
    });

    var cnt = [];
    while (cnt.length < 8) {
      cnt.push(myDict["BASIC_NEED"]);
      cnt.push(myDict["ENTERTAINMENT_OR_HOBBY"]);
      cnt.push(myDict["HOUSEWORK"]);
      cnt.push(myDict["OTHERS"]);
      cnt.push(myDict["SOCIAL_ACTIVITY"]);
      cnt.push(myDict["SPORT_OR_WORKOUT"]);
      cnt.push(myDict["WASTED_TIME"]);
      cnt.push(myDict["WORK_OR_STUDY"]);
    }
    setCount(cnt);
  }, [responseData]);
  var option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: "category",
      data: ["BASIC_NEED", "ENTERTAINMENT_OR_HOBBY", "HOUSEWORK", "OTHERS", "SOCIAL_ACTIVITY", "SPORT_OR_WORKOUT", "WASTED_TIME", "WORK_OR_STUDY"]
    },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 0,
      max: 20,
      text: ['High', 'Low'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [{
      name: "Task",
      type: "bar",
      data: count
    }]
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option,
    style: {
      height: 400
    }
  });
};
var FirstUserPieChart = function FirstUserPieChart() {
  // Fetch data
  var _ref4 = (0, react_2.useState)([]),
    _ref5 = _slicedToArray(_ref4, 2),
    data = _ref5[0],
    setData = _ref5[1];
  var _ref6 = (0, react_query_1.useQuery)('statusInprogress', function () {
      return fetchStatusTask("INPROGRESS");
    }),
    responseData = _ref6.data,
    isLoading = _ref6.isLoading;
  (0, react_2.useEffect)(function () {
    var inprogressCount = responseData === null || responseData === void 0 ? void 0 : responseData.map(function (i) {
      return i.count;
    });
    if (inprogressCount) setData(inprogressCount);
  }, [responseData]);
  var option = {
    title: {
      text: 'IN PROGRESS',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['LOW', 'MEDIUM', 'HIGH']
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [{
      name: 'IN PROGRESS',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: data[0],
        name: 'LOW'
      }, {
        value: data[1],
        name: 'MEDIUM'
      }, {
        value: data[2],
        name: 'HIGH'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0,0,0,.5)'
        }
      }
    }]
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option
  });
};
var SecondUserPieChart = function SecondUserPieChart() {
  var _ref7 = (0, react_2.useState)([]),
    _ref8 = _slicedToArray(_ref7, 2),
    data = _ref8[0],
    setData = _ref8[1];
  var _ref9 = (0, react_query_1.useQuery)('statusStopped', function () {
      return fetchStatusTask("STOPPED");
    }),
    responseData = _ref9.data,
    isLoading = _ref9.isLoading;
  (0, react_2.useEffect)(function () {
    var stoppedCount = responseData === null || responseData === void 0 ? void 0 : responseData.map(function (i) {
      return i.count;
    });
    if (stoppedCount) setData(stoppedCount);
  }, [responseData]);
  var option = {
    title: {
      text: 'STOPPED',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['LOW', 'MEDIUM', 'HIGH']
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [{
      name: 'STOPPED',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: data[0],
        name: 'LOW'
      }, {
        value: data[1],
        name: 'MEDIUM'
      }, {
        value: data[2],
        name: 'HIGH'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0,0,0,.5)'
        }
      }
    }]
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option
  });
};
var ThirdUserPieChart = function ThirdUserPieChart() {
  var _ref10 = (0, react_2.useState)([]),
    _ref11 = _slicedToArray(_ref10, 2),
    data = _ref11[0],
    setData = _ref11[1];
  var _ref12 = (0, react_query_1.useQuery)('statusCompleted', function () {
      return fetchStatusTask("COMPLETED");
    }),
    responseData = _ref12.data,
    isLoading = _ref12.isLoading;
  (0, react_2.useEffect)(function () {
    var completedCount = responseData === null || responseData === void 0 ? void 0 : responseData.map(function (i) {
      return i.count;
    });
    if (completedCount) setData(completedCount);
  }, [responseData]);
  var option = {
    title: {
      text: 'COMPLETED',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} Task'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['LOW', 'MEDIUM', 'HIGH']
    },
    color: ['#34d399', 'orange', '#FF6666'],
    series: [{
      name: 'COMPLETED',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: data[0],
        name: 'LOW'
      }, {
        value: data[1],
        name: 'MEDIUM'
      }, {
        value: data[2],
        name: 'HIGH'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0,0,0,.5)'
        }
      }
    }]
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option
  });
};
var UserLineChart = function UserLineChart() {
  // Fetch data low, medium, high task
  var _ref13 = (0, react_2.useState)({
      low: [],
      medium: [],
      high: []
    }),
    _ref14 = _slicedToArray(_ref13, 2),
    lineChartData = _ref14[0],
    setLineChartData = _ref14[1];
  var _ref15 = (0, react_query_1.useQuery)('priority', fetchPriorityTask),
    responseData = _ref15.data,
    isLoading = _ref15.isLoading;
  (0, react_2.useEffect)(function () {
    var formattedData = {
      low: Array(12).fill(0),
      medium: Array(12).fill(0),
      high: Array(12).fill(0)
    };
    responseData === null || responseData === void 0 ? void 0 : responseData.forEach(function (row) {
      var priority = row.priority;
      var monthIndex = row.month - 1;
      if (priority === "LOW") formattedData.low[monthIndex] = row.count;
      if (priority === "MEDIUM") formattedData.medium[monthIndex] = row.count;
      if (priority === "HIGH") formattedData.high[monthIndex] = row.count;
    });
    setLineChartData(formattedData);
  }, [responseData]);
  // console.log(lineChartData);
  var option = {
    title: {
      text: new Date().getFullYear().toString()
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['LOW', 'MEDIUM', 'HIGH']
    },
    grid: {
      left: '2%',
      right: '3%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'LOW',
      type: 'line',
      stack: '',
      data: lineChartData.low,
      smooth: false,
      color: '#34d399'
    }, {
      name: 'MEDIUM',
      type: 'line',
      stack: '',
      data: lineChartData.medium,
      smooth: false,
      color: '#fbbf24'
    }, {
      name: 'HIGH',
      type: 'line',
      stack: '',
      data: lineChartData.high,
      smooth: false,
      color: '#fb7185'
    }]
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement(echarts_for_react_1["default"], {
    option: option
  });
};
function Report() {
  return (
    // <div className="flex items-center justify-center rounded-md m-3">
    //   <div className="w-1/2 h-1/2">
    //     <div>
    //       <div className="mx-auto my-10">
    //         <Line data={LineChartData} options={LineChartOptions} />
    //       </div>
    //     </div>
    //     <div className="mx-auto my-10">
    //       <Bar data={BarChartData} options={BarChartOptions} />
    //     </div>
    //     <div>
    //       <Bar data={YearBarChartData} options={BarChartOptions} />
    //     </div>
    //     <div className="w-1/2 mx-auto my-10">
    //       <div className="flex items-center justify-center">
    //         <Pie data={LowPieChartData} options={PieChartOptions} />
    //         <Pie data={MediumChartData} options={PieChartOptions} />
    //         <Pie data={HighPieChartData} options={PieChartOptions} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
      className: "text-gray-600 font-poppins p-4"
    }, react_1["default"].createElement("div", {
      className: "font-bold"
    }, "I. Monthly Progress of Low, Medium, and High Tasks"), react_1["default"].createElement("div", {
      className: "text-xs my-2"
    }, "A line chart shows the progress of low, medium, and high tasks each month. The x-axis represents the months, while the y-axis represents the number of tasks completed. Each line corresponds to a different level of task difficulty, with the low task line representing the easiest tasks, the medium task line representing moderately difficult tasks, and the high task line representing the most challenging tasks. Viewers can quickly identify trends and patterns in the completion of tasks over time."), react_1["default"].createElement("div", {
      className: "flex justify-center items-center my-4"
    }, react_1["default"].createElement("div", {
      className: "w-1/2"
    }, react_1["default"].createElement(UserLineChart, null)))), react_1["default"].createElement("div", {
      className: "text-gray-600 font-poppins p-4"
    }, react_1["default"].createElement("div", {
      className: "font-bold"
    }, "II. Bar Chart of Task Distribution by Activity Category"), react_1["default"].createElement("div", {
      className: "text-xs my-2"
    }, "This bar chart displays the number of tasks in common categories such as work or study, entertainment or hobby, basic needs, housework, sport or workout, social activity, wasted time, and others. Each bar represents an activity category, and the height corresponds to the number of tasks. This chart allows for easy comparison of task distribution across categories and can help identify patterns or trends over time or among different groups."), react_1["default"].createElement("div", {
      className: "flex justify-center items-center my-4"
    }, react_1["default"].createElement("div", {
      className: "w-1/2"
    }, react_1["default"].createElement(UserBarChart, null)))), react_1["default"].createElement("div", {
      className: "text-gray-600 font-poppins p-4"
    }, react_1["default"].createElement("div", {
      className: "font-bold"
    }, "III. Task Status Breakdown: In Progress, Stopped, and Completed"), react_1["default"].createElement("div", {
      className: "text-xs my-2"
    }, "This pie chart series shows the breakdown of tasks by priority level (low, medium, high) across three categories: in progress, stopped, and completed. Each pie chart represents one of the categories and is divided into three slices, one for each priority level. This visual representation helps identify areas that require additional attention and provides a clear understanding of the overall project progress."), react_1["default"].createElement("div", {
      className: "flex justify-center items-center my-4"
    }, react_1["default"].createElement("div", {
      className: "w-1/2"
    }, react_1["default"].createElement(FirstUserPieChart, null), react_1["default"].createElement(SecondUserPieChart, null), react_1["default"].createElement(ThirdUserPieChart, null)))))
  );
}
exports["default"] = (0, react_2.memo)(Report);

/***/ }),

/***/ "./src/views/main/components/SideBar.tsx":
/*!***********************************************!*\
  !*** ./src/views/main/components/SideBar.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var TimeLine_1 = __importDefault(__webpack_require__(/*! ./TimeLine */ "./src/views/main/components/TimeLine.tsx"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var UserDropDown_1 = __importDefault(__webpack_require__(/*! ./UserDropDown */ "./src/views/main/components/UserDropDown.tsx"));
var Notification_1 = __importDefault(__webpack_require__(/*! ./Notification */ "./src/views/main/components/Notification.tsx"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var userAction_1 = __webpack_require__(/*! ../redux/actions/userAction */ "./src/views/main/redux/actions/userAction.ts");
// const todo: Task[] = [
//   {
//     id: 10,
//     started_time: new Date("1995-12-17T03:20:00"),
//     finished_time: new Date("1995-12-17T03:20:00"),
//     task_name: "Project X",
//     title: "Brainstorming",
//     description:
//       "An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time. An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.",
//     priority: "HIGH",
//     status: "INPROGRESS",
//   },
//   {
//     id: 11,
//     started_time: new Date("1995-01-17T03:24:00"),
//     finished_time: new Date("1995-01-17T03:24:00"),
//     task_name: "Project Y",
//     title: "Brainstorming",
//     description:
//       "When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.",
//     priority: "LOW",
//     status: "COMPLETED",
//   },
//   {
//     id: 12,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project Z",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "MEDIUM",
//     status: "STOPPED",
//   },
//   {
//     id: 13,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project W",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "HIGH",
//     status: "INPROGRESS",
//   },
//   {
//     id: 14,
//     started_time: new Date("1995-07-31T03:25:00"),
//     finished_time: new Date("1995-07-31T03:25:00"),
//     task_name: "Project Z",
//     title: "Brainstorming",
//     description: "Utilities for controlling the font size of an element.",
//     priority: "LOW",
//     status: "COMPLETED",
//   },
// ];
function SideBar() {
  var currentUser = (0, react_redux_1.useSelector)(function (state) {
    return state.userState.currentUser;
  });
  var dispatch = (0, react_redux_1.useDispatch)();
  (0, react_2.useEffect)(function () {
    // request.get<Task[]>('task/today')
    //   .then(response => {
    //     setTodo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    // request.get('user')
    //   .then(response => {
    //     setUserInfo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    dispatch((0, userAction_1.getCurrentUserAction)());
  }, []);
  return react_1["default"].createElement("div", {
    className: "rounded-md m-3 font-poppins"
  }, react_1["default"].createElement("div", {
    className: "flex items-center justify-between my-3 px-4 mx-2"
  }, react_1["default"].createElement("div", {
    className: ""
  }, react_1["default"].createElement(UserDropDown_1["default"], {
    firstCharacter: currentUser.name.slice(0, 1)
  })), react_1["default"].createElement("div", {
    className: "w-[50%] pl-4"
  }, react_1["default"].createElement("div", {
    className: "text-sm mb-1 text-gray-600"
  }, currentUser.name), react_1["default"].createElement("div", {
    className: "text-xs text-gray-500"
  }, currentUser.email)), react_1["default"].createElement("div", {
    className: "w-[25%] flex items-center text-gray-600 justify-center text-xl"
  }, react_1["default"].createElement(Notification_1["default"], null))), react_1["default"].createElement("div", {
    className: "flex items-center justify-center"
  }, react_1["default"].createElement("hr", {
    className: "w-[90%]"
  })), react_1["default"].createElement("div", {
    className: "p-4"
  }, react_1["default"].createElement(TimeLine_1["default"], null)));
}
exports["default"] = SideBar;

/***/ }),

/***/ "./src/views/main/components/TimeLine.tsx":
/*!************************************************!*\
  !*** ./src/views/main/components/TimeLine.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var EditTaskModal_1 = __importDefault(__webpack_require__(/*! ./EditTaskModal */ "./src/views/main/components/EditTaskModal.tsx"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var taskAction_1 = __webpack_require__(/*! ../redux/actions/taskAction */ "./src/views/main/redux/actions/taskAction.ts");
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
function formatDate(date) {
  return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join("/");
}
function styleButton(i) {
  switch (i.status) {
    case "STOPPED":
      // TODO
      return react_1["default"].createElement("button", {
        className: "text-xs font-bold text-rose-600 bg-rose-200 px-2 py-1 rounded-md"
      }, "Stopped");
      break;
    case "INPROGRESS":
      // TODO
      return react_1["default"].createElement("button", {
        className: "text-xs font-bold text-cyan-600 bg-cyan-200 px-2 py-1 rounded-md"
      }, "In Progress");
      break;
    case "COMPLETED":
      // TODO
      return react_1["default"].createElement("button", {
        className: "text-xs font-bold text-green-600 bg-green-200 px-2 py-1 rounded-md"
      }, "Completed");
      break;
  }
}
function styleTask(i, handleClicked) {
  switch (i.priority) {
    case "LOW":
      // TODO
      return react_1["default"].createElement("div", {
        className: "bg-emerald-50 rounded-md p-4 ml-4"
      }, react_1["default"].createElement("div", {
        className: "font-bold text-base text-gray-600 -translate-y-2 break-words"
      }, i.taskName), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex mt-5 justify-between items-center"
      }, styleButton(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-emerald-500",
        onClick: function onClick() {
          return handleClicked(i.task_id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case "MEDIUM":
      // TODO
      return react_1["default"].createElement("div", {
        className: "bg-amber-50 rounded-md p-4 ml-4"
      }, react_1["default"].createElement("div", {
        className: "font-bold text-base text-gray-600 -translate-y-2 break-words"
      }, i.taskName), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex mt-5 justify-between items-center"
      }, styleButton(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-amber-500",
        onClick: function onClick() {
          return handleClicked(i.task_id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case "HIGH":
      // TODO
      return react_1["default"].createElement("div", {
        className: "bg-rose-50 rounded-md p-4 ml-4"
      }, react_1["default"].createElement("div", {
        className: "font-bold text-base text-gray-600 -translate-y-2 break-words"
      }, i.taskName), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex mt-5 justify-between items-center"
      }, styleButton(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-rose-500",
        onClick: function onClick() {
          return handleClicked(i.task_id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
  }
}
function TimeLine() {
  var _ref = (0, react_2.useState)("0"),
    _ref2 = _slicedToArray(_ref, 2),
    currentId = _ref2[0],
    setCurrentId = _ref2[1];
  var _ref3 = (0, react_2.useState)(false),
    _ref4 = _slicedToArray(_ref3, 2),
    showEditTask = _ref4[0],
    setShowEditTask = _ref4[1];
  var dispatch = (0, react_redux_1.useDispatch)();
  var todo = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasksToday;
  });
  (0, react_2.useEffect)(function () {
    // request.get<Task[]>('task/today')
    //   .then(response => {
    //     setTodo(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    dispatch((0, taskAction_1.getTasksTodayAction)());
  }, [dispatch]);
  function handleClicked(id) {
    setCurrentId(id);
    setShowEditTask(true);
    // console.log(currentId);
  }

  var handleCancel = function handleCancel() {
    setShowEditTask(false);
  };
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "flex p-4 rounded-md justify-between"
  }, react_1["default"].createElement("div", {
    className: "text-sm text-center font-bold text-gray-600"
  }, "To Do's List"), react_1["default"].createElement("div", {
    className: "text-xs text-center text-gray-400"
  }, "Today ", formatDate(new Date()))), todo === null || todo === void 0 ? void 0 : todo.map(function (i) {
    return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
      className: "flex p-4 rounded-md"
    }, react_1["default"].createElement("div", {
      className: "w-[30%]"
    }, react_1["default"].createElement("div", {
      className: "text-sm text-center text-gray-600"
    }, padTo2Digits(new Date((0, moment_1["default"])(i.startTime).format('YYYY-MM-DD HH:mm:ss')).getHours()) + ":" + padTo2Digits(new Date((0, moment_1["default"])(i.startTime).format('YYYY-MM-DD HH:mm:ss')).getMinutes())), react_1["default"].createElement("hr", null)), react_1["default"].createElement("div", {
      className: "w-[70%]"
    }, styleTask(i, handleClicked))), react_1["default"].createElement("div", {
      className: "flex items-center justify-center"
    }, react_1["default"].createElement("hr", {
      className: "w-full"
    })));
  })), react_1["default"].createElement("div", null, showEditTask && react_1["default"].createElement(EditTaskModal_1["default"], {
    id: currentId,
    showFunction: handleCancel
  })));
}
exports["default"] = TimeLine;

/***/ }),

/***/ "./src/views/main/components/ToDoList.tsx":
/*!************************************************!*\
  !*** ./src/views/main/components/ToDoList.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fi_1 = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var EditTaskModal_1 = __importDefault(__webpack_require__(/*! ./EditTaskModal */ "./src/views/main/components/EditTaskModal.tsx"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var taskAction_1 = __webpack_require__(/*! ../redux/actions/taskAction */ "./src/views/main/redux/actions/taskAction.ts");
var otherAction_1 = __webpack_require__(/*! ../redux/actions/otherAction */ "./src/views/main/redux/actions/otherAction.ts");
function taskStyle(i, handleClicked) {
  var id = i.task_id;
  switch (i.priority) {
    case 'LOW':
      return react_1["default"].createElement("div", {
        className: "bg-emerald-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "bg-emerald-300 px-2 py-1 font-bold rounded-md text-emerald-600 text-xs -translate-y-6"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 break-words"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-emerald-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case 'MEDIUM':
      return react_1["default"].createElement("div", {
        className: " bg-amber-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "bg-amber-300 px-2 py-1 font-bold rounded-md text-amber-600 text-xs -translate-y-6"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 break-words"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-amber-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    case 'HIGH':
      return react_1["default"].createElement("div", {
        className: "bg-rose-50 rounded-md p-4"
      }, react_1["default"].createElement("div", {
        className: "text-xs text-center w-3/5 rounded-md"
      }, react_1["default"].createElement("div", {
        className: "bg-rose-300 px-2 py-1 font-bold rounded-md text-rose-600 text-xs -translate-y-6"
      }, i.type.replace(/_/g, " "))), react_1["default"].createElement("div", {
        key: id,
        className: "font-bold text-base text-gray-600 -translate-y-3 break-words"
      }, react_1["default"].createElement(react_router_dom_1.Link, {
        to: "/task/".concat(id)
      }, i.taskName)), react_1["default"].createElement("div", {
        className: "text-gray-600 text-xs whitespace-normal break-words"
      }, i.description), react_1["default"].createElement("div", {
        className: "flex justify-between items-center mt-5"
      }, buttonStyle(i), react_1["default"].createElement("button", {
        className: "px-2 py-1 text-rose-500",
        onClick: function onClick() {
          return handleClicked(id);
        }
      }, react_1["default"].createElement(fi_1.FiEdit, null))));
      break;
    default:
      return null;
      break;
  }
}
function buttonStyle(i) {
  return react_1["default"].createElement("div", null, i.status === 'STOPPED' ? react_1["default"].createElement("button", {
    className: "text-xs text-rose-600 bg-rose-200 font-bold px-2 py-1 rounded-md"
  }, "Stopped") : i.status === 'INPROGRESS' ? react_1["default"].createElement("button", {
    className: "text-xs text-cyan-600 bg-cyan-200 font-bold px-2 py-1 rounded-md"
  }, "In Progress") : i.status === 'COMPLETED' ? react_1["default"].createElement("button", {
    className: "text-xs text-green-600 bg-green-200 font-bold px-2 py-1 rounded-md"
  }, "Completed") : null);
}
function ToDoList() {
  // const todo: Task[] = [
  //     {
  //         id: 1,
  //         started_time: new Date('1995-12-17T03:20:00'),
  //         finished_time: new Date('1995-12-20T03:20:00'),
  //         task_name: 'Project X',
  //         title: 'Brainstorming',
  //         description:
  //             'An existing Date object. This effectively makes a copy of the existing Date object with the same date and time.',
  //         priority: 'HIGH',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 2,
  //         started_time: new Date('1995-01-17T03:24:00'),
  //         finished_time: new Date('1995-01-20T03:24:00'),
  //         task_name: 'Project Y',
  //         title: 'Brainstorming',
  //         description:
  //             'When no parameters are provided, the newly-created Date object represents the current date and time as of the time of instantiation.',
  //         priority: 'LOW',
  //         status: 'COMPLETED',
  //     },
  //     {
  //         id: 3,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project Z',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'LOW',
  //         status: 'STOPPED',
  //     },
  //     {
  //         id: 4,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'New Year Celebration',
  //         description: 'Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element. Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 5,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'LOW',
  //         status: 'INPROGRESS',
  //     },
  //     {
  //         id: 6,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project W',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'STOPPED',
  //     },
  //     {
  //         id: 7,
  //         started_time: new Date('1995-07-31T03:25:00'),
  //         finished_time: new Date('1995-08-20T03:25:00'),
  //         task_name: 'Project Z',
  //         title: 'Brainstorming',
  //         description: 'Utilities for controlling the font size of an element.',
  //         priority: 'MEDIUM',
  //         status: 'COMPLETED',
  //     },
  // ];
  var _ref = (0, react_2.useState)("0"),
    _ref2 = _slicedToArray(_ref, 2),
    currentId = _ref2[0],
    setCurrentId = _ref2[1];
  var dispatch = (0, react_redux_1.useDispatch)();
  (0, react_2.useEffect)(function () {
    dispatch((0, taskAction_1.fetchTasksAction)());
    dispatch((0, otherAction_1.fetchIconsWeatherAction)());
  }, [dispatch]);
  var tasks = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasks;
  });
  var todo = tasks.filter(function (item) {
    return Boolean(!item.parent_task_id);
  });
  // function editTask(id: string, newData: Task) {
  //     // for (let i = 0; i < todo.length; i++) {
  //     //     if (todo[i].id === id) {
  //     //         todo[i] = newData;
  //     //     }
  //     // }
  // }
  var _ref3 = (0, react_2.useState)(false),
    _ref4 = _slicedToArray(_ref3, 2),
    showEditTask = _ref4[0],
    setShowEditTask = _ref4[1];
  function handleClicked(id) {
    setCurrentId(id);
    setShowEditTask(true);
    console.log(id);
  }
  // const handleSave = () => {
  //     dispatch()
  // }
  var handleCancel = function handleCancel() {
    setShowEditTask(false);
  };
  return react_1["default"].createElement("div", null, react_1["default"].createElement("div", {
    className: "font-poppins"
  }, react_1["default"].createElement("div", {
    className: "flex justify-between"
  }, react_1["default"].createElement("div", {
    className: "w-1/3 rounded-md mx-3 p-2"
  }, react_1["default"].createElement("div", {
    className: "flex items-center px-4"
  }, react_1["default"].createElement("div", {
    className: "bg-cyan-500 w-[6px] h-[6px] rounded-md mr-4"
  }), react_1["default"].createElement("div", {
    className: "text-cyan-500 font-bold text-sm"
  }, "In Progress")), react_1["default"].createElement("hr", {
    className: "border-2 border-cyan-400 rounded-md my-2 mx-4"
  }), react_1["default"].createElement("div", null, todo === null || todo === void 0 ? void 0 : todo.map(function (i) {
    return react_1["default"].createElement("div", {
      className: "m-4"
    }, i.status === 'INPROGRESS' ? react_1["default"].createElement("div", null, taskStyle(i, handleClicked)) : null);
  }))), react_1["default"].createElement("div", {
    className: "w-1/3 rounded-md mx-2 p-2"
  }, react_1["default"].createElement("div", {
    className: "flex items-center px-4"
  }, react_1["default"].createElement("div", {
    className: "bg-rose-500 w-[6px] h-[6px] rounded-md mr-4"
  }), react_1["default"].createElement("div", {
    className: "text-rose-500 font-bold text-sm"
  }, "Stopped")), react_1["default"].createElement("hr", {
    className: "border-2 border-rose-400 rounded-md my-2 mx-4"
  }), react_1["default"].createElement("div", null, todo === null || todo === void 0 ? void 0 : todo.map(function (i) {
    return react_1["default"].createElement("div", {
      className: "m-4"
    }, i.status === 'STOPPED' ? react_1["default"].createElement("div", null, taskStyle(i, handleClicked)) : null);
  }))), react_1["default"].createElement("div", {
    className: "w-1/3 rounded-md mx-2 p-2"
  }, react_1["default"].createElement("div", {
    className: "flex items-center px-4"
  }, react_1["default"].createElement("div", {
    className: "bg-green-500 w-[6px] h-[6px] rounded-md mr-4"
  }), react_1["default"].createElement("div", {
    className: "text-green-500 font-bold text-sm"
  }, "Completed")), react_1["default"].createElement("hr", {
    className: "border-2 border-green-400 rounded-md my-2 mx-4"
  }), react_1["default"].createElement("div", null, todo === null || todo === void 0 ? void 0 : todo.map(function (i) {
    return react_1["default"].createElement("div", {
      className: "m-4"
    }, i.status === 'COMPLETED' ? react_1["default"].createElement("div", null, taskStyle(i, handleClicked)) : null);
  }))))), react_1["default"].createElement("div", null, showEditTask && react_1["default"].createElement(EditTaskModal_1["default"], {
    id: currentId,
    showFunction: handleCancel
  })));
}
exports["default"] = ToDoList;

/***/ }),

/***/ "./src/views/main/components/UserDropDown.tsx":
/*!****************************************************!*\
  !*** ./src/views/main/components/UserDropDown.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_3 = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/index.cjs");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
}
function getRandomColor() {
  var colorList = ["bg-red-400", "bg-rose-400", "bg-orange-500", "bg-lime-400", "bg-pink-400", "bg-cyan-400", "bg-sky-400", "bg-indigo-400", "bg-emerald-400", "bg-green-400", "bg-yellow-400", "bg-purple-400"];
  // Get a random number between 0 and the length of the color list
  var randomNumber = Math.floor(Math.random() * colorList.length);
  // Return the color at the random index
  return colorList[randomNumber];
}
function UserDropDown(_ref) {
  var _this = this;
  var firstCharacter = _ref.firstCharacter;
  var currentUser = (0, react_redux_1.useSelector)(function (state) {
    return state.userState.currentUser;
  });
  var navigate = (0, react_router_dom_1.useNavigate)();
  var handleLogout = function handleLogout() {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var confirmation, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            confirmation = window.confirm("Are you sure want to log out?");
            if (!confirmation) {
              _context.next = 6;
              break;
            }
            _context.next = 4;
            return request_1["default"].get('logout');
          case 4:
            res = _context.sent;
            if (res.data.success) {
              navigate('/login');
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  return react_1["default"].createElement(react_3.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, react_1["default"].createElement("div", null, currentUser.image ? react_1["default"].createElement(react_3.Menu.Button, {
    className: 'flex items-center justify-center px-3 py-2'
  }, react_1["default"].createElement("img", {
    src: currentUser.image,
    alt: 'avatar',
    width: "50",
    height: "50",
    className: 'rounded-full'
  })) : react_1["default"].createElement(react_3.Menu.Button, {
    className: "flex items-center justify-center w-[50px] h-[50px] gap-x-1.5 rounded-full bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
  }, firstCharacter)), react_1["default"].createElement(react_3.Transition, {
    as: react_2.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, react_1["default"].createElement(react_3.Menu.Items, {
    className: "absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, react_1["default"].createElement("div", {
    className: "py-1"
  }, react_1["default"].createElement(react_3.Menu.Item, null, function (_ref2) {
    var active = _ref2.active;
    return react_1["default"].createElement("div", {
      className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
    }, react_1["default"].createElement(react_router_dom_1.Link, {
      to: "/profile"
    }, "Edit Profile"));
  })), react_1["default"].createElement("div", {
    className: "py-1"
  }, react_1["default"].createElement(react_3.Menu.Item, null, function (_ref3) {
    var active = _ref3.active;
    return react_1["default"].createElement(react_router_dom_1.Link, {
      to: "#",
      className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
    }, "Archive");
  })), react_1["default"].createElement("div", {
    className: "py-1"
  }, react_1["default"].createElement(react_3.Menu.Item, null, function (_ref4) {
    var active = _ref4.active;
    return react_1["default"].createElement(react_router_dom_1.Link, {
      to: "#",
      className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
    }, "Share");
  }), react_1["default"].createElement(react_3.Menu.Item, null, function (_ref5) {
    var active = _ref5.active;
    return react_1["default"].createElement(react_router_dom_1.Link, {
      to: "#",
      className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')
    }, "Add to favorites");
  })), react_1["default"].createElement("div", {
    className: "py-1"
  }, react_1["default"].createElement(react_3.Menu.Item, null, function (_ref6) {
    var active = _ref6.active;
    return react_1["default"].createElement("button", {
      className: classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm'),
      onClick: handleLogout
    }, "Log out");
  })))));
}
exports["default"] = UserDropDown;

/***/ }),

/***/ "./src/views/main/components/UserProfile.tsx":
/*!***************************************************!*\
  !*** ./src/views/main/components/UserProfile.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var solid_1 = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
var Users_1 = __webpack_require__(/*! ../types/Users */ "./src/views/main/types/Users.ts");
var Loading_1 = __importDefault(__webpack_require__(/*! ./Loading */ "./src/views/main/components/Loading.tsx"));
var react_query_1 = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
var fetchUserProfile = function fetchUserProfile() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request_1["default"].get("user/profile");
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
};
var avatar = null;
var UserProfile = function UserProfile() {
  var _ref = (0, react_1.useState)(Users_1.initUser),
    _ref2 = _slicedToArray(_ref, 2),
    user = _ref2[0],
    setUser = _ref2[1];
  var _ref3 = (0, react_1.useState)(false),
    _ref4 = _slicedToArray(_ref3, 2),
    isDisable = _ref4[0],
    setIsDisable = _ref4[1];
  var navigate = (0, react_router_dom_1.useNavigate)();
  var _ref5 = (0, react_query_1.useQuery)("userInfo", fetchUserProfile),
    userInfo = _ref5.data,
    isLoading = _ref5.isLoading;
  (0, react_1.useEffect)(function () {
    if (userInfo) setUser(userInfo);
  }, [userInfo]);
  var handlePreviewAvatar = function handlePreviewAvatar(event) {
    var _a;
    var files = (_a = event.target.files) !== null && _a !== void 0 ? _a : [];
    if (!files || !files[0].type.startsWith("image/")) return;
    if (avatar) URL.revokeObjectURL(user.image);
    avatar = files[0];
    var preview = URL.createObjectURL(avatar);
    setUser(function (prevState) {
      return Object.assign(Object.assign({}, prevState), {
        image: preview
      });
    });
  };
  var handleUserChange = function handleUserChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setUser(function (prevState) {
      return Object.assign(Object.assign({}, prevState), _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(event) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var formData, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            event.preventDefault();
            setIsDisable(true);
            if (!avatar) {
              _context2.next = 9;
              break;
            }
            formData = new FormData();
            formData.append("avatar", avatar);
            _context2.next = 7;
            return request_1["default"].post("upload", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            });
          case 7:
            res = _context2.sent;
            if (res.data.success) {
              user.image = res.data.image;
            }
          case 9:
            _context2.next = 11;
            return request_1["default"].put("user/editProfile", user);
          case 11:
            navigate("/");
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  };
  var handleCancel = function handleCancel() {
    navigate("/");
  };
  return isLoading ? react_1["default"].createElement(Loading_1["default"], null) : react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "mx-20 my-10 font-poppins"
  }, react_1["default"].createElement("div", {
    className: "space-y-12"
  }, react_1["default"].createElement("div", {
    className: "border-b border-gray-900/10 pb-12"
  }, react_1["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Profile"), react_1["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "This information will be displayed publicly so be careful what you share."), react_1["default"].createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, react_1["default"].createElement("div", {
    className: "sm:col-span-4"
  }, react_1["default"].createElement("label", {
    htmlFor: "username",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Username"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("div", {
    className: "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-600 sm:max-w-md"
  }, react_1["default"].createElement("span", {
    className: "flex select-none items-center pl-3 text-gray-500 sm:text-sm"
  }, "workcation.com/"), react_1["default"].createElement("input", {
    type: "text",
    name: "name",
    id: "username",
    value: user.name,
    onChange: handleUserChange,
    autoComplete: "username",
    className: "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
  })))), react_1["default"].createElement("div", {
    className: "col-span-full"
  }, react_1["default"].createElement("label", {
    htmlFor: "about",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "About"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("textarea", {
    id: "about",
    name: "about",
    value: user.about,
    rows: 3,
    onChange: handleUserChange,
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  })), react_1["default"].createElement("p", {
    className: "mt-3 text-sm leading-6 text-gray-600"
  }, "Write a few sentences about yourself.")), react_1["default"].createElement("div", {
    className: "col-span-full"
  }, react_1["default"].createElement("label", {
    htmlFor: "",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Avatar"), react_1["default"].createElement("div", {
    className: "mt-2 flex items-center gap-x-3"
  }, user.image ? react_1["default"].createElement("img", {
    className: "rounded-full",
    src: user.image,
    alt: "avatar",
    width: "50",
    height: "50"
  }) : react_1["default"].createElement(solid_1.UserCircleIcon, {
    className: "h-14 w-14 text-gray-300",
    "aria-hidden": "true"
  }), react_1["default"].createElement("label", {
    htmlFor: "avatar",
    className: "relative cursor-pointer rounded-md bg-white font-semibold text-emerald-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-600 focus-within:ring-offset-2 hover:text-emerald-500"
  }, react_1["default"].createElement("input", {
    type: "file",
    name: "avatar",
    id: "avatar",
    onChange: handlePreviewAvatar,
    className: "cursor-pointer file:rounded-md hover:file:cursor-pointer file:bg-blue-50 file:border-2 file:text-blue-700"
  })))))), react_1["default"].createElement("div", {
    className: "border-b border-gray-900/10 pb-12"
  }, react_1["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Personal Information"), react_1["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "Use a permanent address where you can receive mail."), react_1["default"].createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
  }, react_1["default"].createElement("div", {
    className: "sm:col-span-4"
  }, react_1["default"].createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Email address"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    value: user.email,
    onChange: handleUserChange,
    readOnly: true,
    autoComplete: "email",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))), react_1["default"].createElement("div", {
    className: "sm:col-span-3"
  }, react_1["default"].createElement("label", {
    htmlFor: "country",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Country"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("select", {
    id: "country",
    name: "country",
    value: user.country,
    onChange: handleUserChange,
    autoComplete: "country",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:max-w-xs sm:text-sm sm:leading-6"
  }, react_1["default"].createElement("option", null, "Viet Nam"), react_1["default"].createElement("option", null, "Japan"), react_1["default"].createElement("option", null, "United States"), react_1["default"].createElement("option", null, "Canada"), react_1["default"].createElement("option", null, "England")))), react_1["default"].createElement("div", {
    className: "sm:col-span-3"
  }, react_1["default"].createElement("label", {
    htmlFor: "phone_number",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Telephone"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "phone_number",
    value: user.phone_number,
    onChange: handleUserChange,
    id: "phone_number",
    autoComplete: "phone_number",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))), react_1["default"].createElement("div", {
    className: "col-span-full"
  }, react_1["default"].createElement("label", {
    htmlFor: "address",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Street address"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "address",
    value: user.address,
    onChange: handleUserChange,
    id: "address",
    autoComplete: "address",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))), react_1["default"].createElement("div", {
    className: "sm:col-span-2 sm:col-start-1"
  }, react_1["default"].createElement("label", {
    htmlFor: "company",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Company"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "company",
    id: "company",
    value: user.company,
    onChange: handleUserChange,
    autoComplete: "company",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))), react_1["default"].createElement("div", {
    className: "sm:col-span-2"
  }, react_1["default"].createElement("label", {
    htmlFor: "job",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Job"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "job",
    id: "job",
    value: user.job,
    onChange: handleUserChange,
    autoComplete: "job",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))), react_1["default"].createElement("div", {
    className: "sm:col-span-2"
  }, react_1["default"].createElement("label", {
    htmlFor: "university",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "University"), react_1["default"].createElement("div", {
    className: "mt-2"
  }, react_1["default"].createElement("input", {
    type: "text",
    name: "university",
    id: "university",
    value: user.university,
    onChange: handleUserChange,
    autoComplete: "university",
    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
  }))))), react_1["default"].createElement("div", {
    className: "border-b border-gray-900/10 pb-12"
  }, react_1["default"].createElement("h2", {
    className: "text-base font-semibold leading-7 text-gray-900"
  }, "Notifications"), react_1["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "We'll always let you know about important changes, but you pick what else you want to hear about."), react_1["default"].createElement("div", {
    className: "mt-10 space-y-10"
  }, react_1["default"].createElement("fieldset", null, react_1["default"].createElement("legend", {
    className: "text-sm font-semibold leading-6 text-gray-900"
  }, "By Email"), react_1["default"].createElement("div", {
    className: "mt-6 space-y-6"
  }, react_1["default"].createElement("div", {
    className: "relative flex gap-x-3"
  }, react_1["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, react_1["default"].createElement("input", {
    id: "comments",
    name: "comments",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
  })), react_1["default"].createElement("div", {
    className: "text-sm leading-6"
  }, react_1["default"].createElement("label", {
    htmlFor: "comments",
    className: "font-medium text-gray-900"
  }, "Comments"), react_1["default"].createElement("p", {
    className: "text-gray-500"
  }, "Get notified when someones posts a comment on a posting."))), react_1["default"].createElement("div", {
    className: "relative flex gap-x-3"
  }, react_1["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, react_1["default"].createElement("input", {
    id: "candidates",
    name: "candidates",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
  })), react_1["default"].createElement("div", {
    className: "text-sm leading-6"
  }, react_1["default"].createElement("label", {
    htmlFor: "candidates",
    className: "font-medium text-gray-900"
  }, "Candidates"), react_1["default"].createElement("p", {
    className: "text-gray-500"
  }, "Get notified when a candidate applies for a job."))), react_1["default"].createElement("div", {
    className: "relative flex gap-x-3"
  }, react_1["default"].createElement("div", {
    className: "flex h-6 items-center"
  }, react_1["default"].createElement("input", {
    id: "offers",
    name: "offers",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
  })), react_1["default"].createElement("div", {
    className: "text-sm leading-6"
  }, react_1["default"].createElement("label", {
    htmlFor: "offers",
    className: "font-medium text-gray-900"
  }, "Offers"), react_1["default"].createElement("p", {
    className: "text-gray-500"
  }, "Get notified when a candidate accepts or rejects an offer."))))), react_1["default"].createElement("fieldset", null, react_1["default"].createElement("legend", {
    className: "text-sm font-semibold leading-6 text-gray-900"
  }, "Push Notifications"), react_1["default"].createElement("p", {
    className: "mt-1 text-sm leading-6 text-gray-600"
  }, "These are delivered via SMS to your mobile phone."), react_1["default"].createElement("div", {
    className: "mt-6 space-y-6"
  }, react_1["default"].createElement("div", {
    className: "flex items-center gap-x-3"
  }, react_1["default"].createElement("input", {
    id: "push-everything",
    name: "push-notifications",
    type: "radio",
    className: "h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-600"
  }), react_1["default"].createElement("label", {
    htmlFor: "push-everything",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Everything")), react_1["default"].createElement("div", {
    className: "flex items-center gap-x-3"
  }, react_1["default"].createElement("input", {
    id: "push-email",
    name: "push-notifications",
    type: "radio",
    className: "h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-600"
  }), react_1["default"].createElement("label", {
    htmlFor: "push-email",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "Same as email")), react_1["default"].createElement("div", {
    className: "flex items-center gap-x-3"
  }, react_1["default"].createElement("input", {
    id: "push-nothing",
    name: "push-notifications",
    type: "radio",
    className: "h-4 w-4 border-gray-300 text-emerald-600 focus:ring-emerald-600"
  }), react_1["default"].createElement("label", {
    htmlFor: "push-nothing",
    className: "block text-sm font-medium leading-6 text-gray-900"
  }, "No push notifications"))))))), react_1["default"].createElement("div", {
    className: "mt-6 flex items-center justify-end gap-x-6"
  }, react_1["default"].createElement("button", {
    type: "button",
    onClick: handleCancel,
    className: "text-sm font-semibold leading-6 text-gray-900"
  }, "Cancel"), react_1["default"].createElement("button", {
    type: "submit",
    disabled: isDisable,
    className: "rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
  }, "Save")));
};
exports["default"] = UserProfile;

/***/ }),

/***/ "./src/views/main/components/Weather.tsx":
/*!***********************************************!*\
  !*** ./src/views/main/components/Weather.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var io5_1 = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
var wi_1 = __webpack_require__(/*! react-icons/wi */ "./node_modules/react-icons/wi/index.esm.js");
var hi2_1 = __webpack_require__(/*! react-icons/hi2 */ "./node_modules/react-icons/hi2/index.esm.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs"));
var IconWeather_1 = __importDefault(__webpack_require__(/*! ./IconWeather */ "./src/views/main/components/IconWeather.tsx"));
var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function getTime(text) {
  // format: 2023-05-12 06:00:00
  // expected: 06:00
  var time = text.slice(11, 16); // extract "HH:MM" from "YYYY-MM-DD HH:MM:SS"
  // return the extracted time
  return time;
}
var API_KEY = "bf0fca40ef5c3565bb0d7b06f9952fae";
var API_URL = "https://api.openweathermap.org/data/2.5/forecast";
var Weather = function Weather() {
  var _ref = (0, react_1.useState)(null),
    _ref2 = _slicedToArray(_ref, 2),
    weatherData = _ref2[0],
    setWeatherData = _ref2[1];
  var _ref3 = (0, react_1.useState)('hanoi'),
    _ref4 = _slicedToArray(_ref3, 2),
    city = _ref4[0],
    setCity = _ref4[1];
  var _ref5 = (0, react_1.useState)("hanoi"),
    _ref6 = _slicedToArray(_ref5, 2),
    data = _ref6[0],
    setData = _ref6[1];
  var handleChange = function handleChange(event) {
    setData(event.target.value);
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setCity(data);
  };
  (0, react_1.useEffect)(function () {
    var fetchWeatherData = function fetchWeatherData() {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios_1["default"].get(API_URL, {
                params: {
                  q: city,
                  appid: API_KEY,
                  units: 'metric'
                }
              });
            case 3:
              response = _context.sent;
              setWeatherData(response.data);
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
    };
    fetchWeatherData();
  }, [city]);
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement("div", {
    className: "flex m-auto items-center justify-center font-poppins"
  }, react_1["default"].createElement("div", {
    className: "w-[80%]"
  }, weatherData ? react_1["default"].createElement("div", null, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "flex items-center justify-between"
  }, react_1["default"].createElement("input", {
    type: "text",
    onChange: handleChange,
    className: "bg-white border-2 focus:border-green-400 hover:border-green-400 placeholder-gray-400 px-4 py-2 rounded-full text-sm w-[95%]",
    placeholder: ""
  }), react_1["default"].createElement("button", {
    type: "submit"
  }, react_1["default"].createElement("div", {
    className: "text-xl"
  }, react_1["default"].createElement(hi2_1.HiMagnifyingGlass, null)))), react_1["default"].createElement("div", {
    className: " my-2 p-4 rounded-md bg-gradient-to-r from-cyan-100 from-10% to-cyan-200 text-gray-600"
  }, react_1["default"].createElement("div", {
    className: "text-sm my-2 font-bold"
  }, "Current Weather"), react_1["default"].createElement("div", {
    className: "flex justify-between"
  }, react_1["default"].createElement("div", {
    className: "w-1/2"
  }, react_1["default"].createElement("div", {
    className: "text-center text-xl font-bold"
  }, weatherData.city.name), react_1["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, react_1["default"].createElement("div", {
    className: "w-1/2"
  }, react_1["default"].createElement("div", {
    className: "flex justify-center text-6xl"
  }, react_1["default"].createElement(IconWeather_1["default"], {
    iconName: weatherData.list[0].weather[0].icon
  })), react_1["default"].createElement("div", {
    className: "text-center text-sm font-bold text-gray-500"
  }, weatherData.list[0].weather[0].description)), react_1["default"].createElement("div", {
    className: "text-4xl w-1/2"
  }, weatherData.list[0].main.temp, "\xB0C"))), react_1["default"].createElement("div", {
    className: "w-1/2"
  }, react_1["default"].createElement("div", {
    className: "text-sm font-bold"
  }, "Feels Like ", weatherData.list[0].main.feels_like, "\xB0C"), react_1["default"].createElement("div", {
    className: "flex justify-between text-sm my-1"
  }, react_1["default"].createElement("div", {
    className: "w-1/3 items-center flex"
  }, react_1["default"].createElement(fa_1.FaLongArrowAltUp, {
    className: "mr-2"
  }), weatherData.list[0].main.temp_min, "\xB0C"), react_1["default"].createElement("div", {
    className: "flex items-center w-2/3"
  }, react_1["default"].createElement(fa_1.FaLongArrowAltDown, {
    className: "mr-2"
  }), weatherData.list[0].main.temp_max, "\xB0C")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center text-sm"
  }, react_1["default"].createElement("div", {
    className: "w-1/3 flex items-center font-bold"
  }, react_1["default"].createElement(io5_1.IoWaterSharp, {
    className: "mr-2"
  }), "Humidity"), react_1["default"].createElement("div", {
    className: "w-2/3"
  }, weatherData.list[0].main.humidity, "%")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center text-sm my-1"
  }, react_1["default"].createElement("div", {
    className: "w-1/3 flex items-center font-bold"
  }, react_1["default"].createElement(wi_1.WiCloudyWindy, {
    className: "mr-2"
  }), "Wind"), react_1["default"].createElement("div", {
    className: "w-2/3"
  }, weatherData.list[0].wind.speed, " kph")), react_1["default"].createElement("div", {
    className: "flex justify-between items-center text-sm"
  }, react_1["default"].createElement("div", {
    className: "w-1/3 flex items-center font-bold"
  }, react_1["default"].createElement(wi_1.WiCloudyWindy, {
    className: "mr-2"
  }), "Pressure"), react_1["default"].createElement("div", {
    className: "w-2/3"
  }, weatherData.list[0].main.pressure, " hPa")))))) : null, react_1["default"].createElement("div", {
    className: "p-4 rounded-md bg-gradient-to-l from-cyan-100 from-10% to-cyan-200 to-80% text-gray-600"
  }, react_1["default"].createElement("div", {
    className: "text-sm my-2 font-bold"
  }, "Extend Forecast"), react_1["default"].createElement("div", null, weatherData ? react_1["default"].createElement("div", {
    className: "flex justify-between"
  }, weatherData.list.slice(1, 9).map(function (weatherDay) {
    return react_1["default"].createElement("div", {
      className: "mx-2"
    }, react_1["default"].createElement("div", {
      className: "text-center text-sm font-bold"
    }, getTime(weatherDay.dt_txt)), react_1["default"].createElement("div", {
      className: "flex items-center justify-center"
    }, react_1["default"].createElement("div", {
      className: ""
    }, react_1["default"].createElement(IconWeather_1["default"], {
      iconName: weatherDay.weather[0].icon
    }))), react_1["default"].createElement("div", {
      className: "text-xs text-center text-gray-500 font-bold"
    }, weatherDay.weather[0].description));
  })) : null, react_1["default"].createElement("div", null, weatherData ? react_1["default"].createElement("div", {
    className: "flex justify-between items-center"
  }, weatherData.list.slice(1, 9).map(function (weatherDay) {
    return react_1["default"].createElement("div", {
      className: "flex justify-center w-[12.5%]"
    }, react_1["default"].createElement("div", {
      className: "flex w-full justify-between items-center my-3 divide-x divide-emerald-400"
    }, react_1["default"].createElement("div", {
      className: "text-xs flex justify-center items-center w-1/2 text-center"
    }, react_1["default"].createElement(fa_1.FaLongArrowAltUp, {
      className: "mr-[0.5px]"
    }), Math.round(weatherDay.main.temp_min) - 1, "\xB0"), react_1["default"].createElement("div", {
      className: "text-xs flex justify-center items-center w-1/2 text-center"
    }, react_1["default"].createElement(fa_1.FaLongArrowAltDown, {
      className: "mr-[0.5px]"
    }), Math.round(weatherDay.main.temp_max) + 1, "\xB0")));
  })) : null))))));
};
exports["default"] = react_1["default"].memo(Weather);

/***/ }),

/***/ "./src/views/main/components/WeekCalendar.tsx":
/*!****************************************************!*\
  !*** ./src/views/main/components/WeekCalendar.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var format_1 = __importDefault(__webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js"));
var getDay_1 = __importDefault(__webpack_require__(/*! date-fns/getDay */ "./node_modules/date-fns/esm/getDay/index.js"));
var parse_1 = __importDefault(__webpack_require__(/*! date-fns/parse */ "./node_modules/date-fns/esm/parse/index.js"));
var startOfWeek_1 = __importDefault(__webpack_require__(/*! date-fns/startOfWeek */ "./node_modules/date-fns/esm/startOfWeek/index.js"));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_big_calendar_1 = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
// import DatePicker from "react-datepicker";
__webpack_require__(/*! ../App.css */ "./src/views/main/App.css");
__webpack_require__(/*! ../styles/react-big-calendar.css */ "./src/views/main/styles/react-big-calendar.css");
__webpack_require__(/*! ../styles/Calendar.css */ "./src/views/main/styles/Calendar.css");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var taskAction_1 = __webpack_require__(/*! ../redux/actions/taskAction */ "./src/views/main/redux/actions/taskAction.ts");
var locales = {
  //"en-US": require("date-fns/locale/en-US"),
  "vi": __webpack_require__(/*! date-fns/locale/vi */ "./node_modules/date-fns/esm/locale/vi/index.js")
};
var localizer = (0, react_big_calendar_1.dateFnsLocalizer)({
  format: format_1["default"],
  parse: parse_1["default"],
  startOfWeek: startOfWeek_1["default"],
  getDay: getDay_1["default"],
  locales: locales
});
// interface Task {
//     title: string;
//     start: Date;
//     end: Date;
//     allDay?: boolean;
// }
// const Tasks: Task[] = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2023, 4, 11),
//         end: new Date(2023, 4, 13),
//     },
//     {
//         title: "Conversation",
//         start: new Date(2023, 6, 7),
//         end: new Date(2023, 6, 10),
//     },
//     {
//         title: "Playing",
//         start: new Date(2023, 6, 20),
//         end: new Date(2023, 6, 23),
//     },
// ];
function WeekCalendar() {
  // const [newTask, setNewTask] = useState<Task>({
  //     title: "",
  //     start: new Date(),
  //     end: new Date(),
  // });
  var dispatch = (0, react_redux_1.useDispatch)();
  (0, react_1.useEffect)(function () {
    dispatch((0, taskAction_1.fetchTasksAction)());
  }, [dispatch]);
  var allTasks = (0, react_redux_1.useSelector)(function (state) {
    return state.taskState.tasks;
  });
  // useEffect(() => {
  //     request.get<Task[]>('task')
  //         .then(response => {
  //             setAllTasks(response.data);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching data:', error);
  //         });
  // }, []);
  // function handleAddTask() {
  //     for (let i = 0; i < allTasks.length; i++) {
  //         const d1 = new Date(allTasks[i].start);
  //         const d2 = new Date(newTask.start);
  //         const d3 = new Date(allTasks[i].end);
  //         const d4 = new Date(newTask.end);
  //         if (
  //             (d1 <= d2 && d2 <= d3) ||
  //             (d1 <= d4 && d4 <= d3)
  //         ) {
  //             alert("Clash, collision");
  //             break;
  //         }
  //     }
  //     setAllTasks([...allTasks, newTask]);
  // }
  return react_1["default"].createElement("div", {
    className: "App"
  }, react_1["default"].createElement(react_big_calendar_1.Calendar, {
    localizer: localizer,
    events: allTasks,
    titleAccessor: function titleAccessor(event) {
      return event.taskName;
    },
    startAccessor: function startAccessor(event) {
      return new Date(event.startTime);
    },
    endAccessor: function endAccessor(event) {
      return new Date(event.finishTime);
    },
    style: {
      height: 500,
      margin: "50px",
      color: "gray",
      backgroundColor: "white",
      fontFamily: "sans-serif",
      fontSize: "13px"
    },
    className: "my-calendar"
  }));
}
exports["default"] = WeekCalendar;

/***/ }),

/***/ "./src/views/main/index.tsx":
/*!**********************************!*\
  !*** ./src/views/main/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var client_1 = __importDefault(__webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js"));
__webpack_require__(/*! ./index.css */ "./src/views/main/index.css");
__webpack_require__(/*! ./App.css */ "./src/views/main/App.css");
var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/views/main/App.tsx"));
var reportWebVitals_1 = __importDefault(__webpack_require__(/*! ./reportWebVitals */ "./src/views/main/reportWebVitals.ts"));
var store_1 = __importDefault(__webpack_require__(/*! ./redux/store */ "./src/views/main/redux/store.ts"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_query_1 = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
var queryClient = new react_query_1.QueryClient();
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null, react_1["default"].createElement(react_redux_1.Provider, {
  store: store_1["default"]
}, react_1["default"].createElement(react_query_1.QueryClientProvider, {
  client: queryClient
}, react_1["default"].createElement(App_1["default"], null)))));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1["default"])();

/***/ }),

/***/ "./src/views/main/pages/Admin.tsx":
/*!****************************************!*\
  !*** ./src/views/main/pages/Admin.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AdminSideBar_1 = __importDefault(__webpack_require__(/*! ../components/AdminSideBar */ "./src/views/main/components/AdminSideBar.tsx"));
var AdminReport_1 = __importDefault(__webpack_require__(/*! ../components/AdminReport */ "./src/views/main/components/AdminReport.tsx"));
var AdminPeople_1 = __importDefault(__webpack_require__(/*! ../components/AdminPeople */ "./src/views/main/components/AdminPeople.tsx"));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Admin = function Admin() {
  var _ref = (0, react_1.useState)("Reports"),
    _ref2 = _slicedToArray(_ref, 2),
    selectedOption = _ref2[0],
    setSelectedOption = _ref2[1];
  function handleClicked(option) {
    setSelectedOption(option);
  }
  function renderContent(option) {
    switch (option) {
      case "Reports":
        return react_1["default"].createElement(AdminReport_1["default"], null);
      case "People":
        return react_1["default"].createElement(AdminPeople_1["default"], null);
      case "Activities":
        return react_1["default"].createElement("div", null, "Activities");
      case "Settings":
        return react_1["default"].createElement("div", null, "Settings");
    }
  }
  return react_1["default"].createElement("div", {
    className: "flex font-poppins"
  }, react_1["default"].createElement("div", {
    className: "w-[20%]"
  }, react_1["default"].createElement(AdminSideBar_1["default"], {
    handleClicked: handleClicked,
    currentOption: selectedOption
  })), react_1["default"].createElement("div", {
    className: "w-[80%]"
  }, renderContent(selectedOption)));
};
exports["default"] = Admin;

/***/ }),

/***/ "./src/views/main/pages/Contact.tsx":
/*!******************************************!*\
  !*** ./src/views/main/pages/Contact.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var Contact = function Contact() {
  var navigate = (0, react_router_dom_1.useNavigate)();
  (0, react_2.useEffect)(function () {
    navigate('/');
  }, []);
  return react_1["default"].createElement(react_1["default"].Fragment, null);
};
exports["default"] = Contact;

/***/ }),

/***/ "./src/views/main/pages/Home.tsx":
/*!***************************************!*\
  !*** ./src/views/main/pages/Home.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
var useModal_1 = __importDefault(__webpack_require__(/*! ../utils/useModal */ "./src/views/main/utils/useModal.ts"));
var Loading_1 = __importDefault(__webpack_require__(/*! ../components/Loading */ "./src/views/main/components/Loading.tsx"));
var Weather_1 = __importDefault(__webpack_require__(/*! ../components/Weather */ "./src/views/main/components/Weather.tsx"));
var ToDoList_1 = __importDefault(__webpack_require__(/*! ../components/ToDoList */ "./src/views/main/components/ToDoList.tsx"));
var SideBar_1 = __importDefault(__webpack_require__(/*! ../components/SideBar */ "./src/views/main/components/SideBar.tsx"));
var Menu_1 = __importDefault(__webpack_require__(/*! ../components/Menu */ "./src/views/main/components/Menu.tsx"));
var AddTaskModal = (0, react_2.lazy)(function () {
  return Promise.resolve().then(function () {
    return __importStar(__webpack_require__(/*! ../components/AddTaskModal */ "./src/views/main/components/AddTaskModal.tsx"));
  });
});
var Calendar = (0, react_2.lazy)(function () {
  return Promise.resolve().then(function () {
    return __importStar(__webpack_require__(/*! ../components/Calendar */ "./src/views/main/components/Calendar.tsx"));
  });
});
var Report = (0, react_2.lazy)(function () {
  return Promise.resolve().then(function () {
    return __importStar(__webpack_require__(/*! ../components/Report */ "./src/views/main/components/Report.tsx"));
  });
});
var Home = function Home() {
  var _ref = (0, react_2.useState)(""),
    _ref2 = _slicedToArray(_ref, 2),
    selectedOption = _ref2[0],
    setSelectedOption = _ref2[1];
  var _ref3 = (0, react_2.useState)(false),
    _ref4 = _slicedToArray(_ref3, 2),
    isRerender = _ref4[0],
    setIsRerender = _ref4[1];
  var _ref5 = (0, useModal_1["default"])(),
    isShowing = _ref5.isShowing,
    toggle = _ref5.toggle;
  var navigate = (0, react_router_dom_1.useNavigate)();
  (0, react_2.useEffect)(function () {
    var isLogin = function isLogin() {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return request_1["default"].get('check-login');
            case 3:
              response = _context.sent;
              if (response.data.message === 'NotLogin') {
                navigate('/login');
              }
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
    };
    isLogin();
  }, [navigate, selectedOption]);
  var handleOptionButton = function handleOptionButton(option) {
    if (option === "AddTask") {
      toggle();
      setIsRerender(!isRerender);
    } else {
      setSelectedOption(option);
    }
  };
  var renderContent = function renderContent() {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        return react_1["default"].createElement(ToDoList_1["default"], null);
      case "Calendar":
        return react_1["default"].createElement(Calendar, null);
      case "Report":
        return react_1["default"].createElement(Report, null);
      case "Weather":
        return react_1["default"].createElement(Weather_1["default"], null);
      default:
        return react_1["default"].createElement(ToDoList_1["default"], null);
    }
  };
  return react_1["default"].createElement(react_2.Suspense, {
    fallback: react_1["default"].createElement(Loading_1["default"], null)
  }, react_1["default"].createElement("div", {
    className: "flex"
  }, react_1["default"].createElement("div", {
    className: "w-[30%]"
  }, react_1["default"].createElement(SideBar_1["default"], null)), react_1["default"].createElement("div", {
    className: "w-[70%]"
  }, react_1["default"].createElement(Menu_1["default"], {
    handleOptionButton: handleOptionButton,
    showButtonAddTask: true
  }), renderContent(), react_1["default"].createElement(AddTaskModal, {
    id: null,
    isShowing: isShowing,
    hide: toggle
  }))));
};
exports["default"] = Home;

/***/ }),

/***/ "./src/views/main/pages/Layout.tsx":
/*!*****************************************!*\
  !*** ./src/views/main/pages/Layout.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var react_helmet_async_1 = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
var Layout = function Layout() {
  return react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(react_helmet_async_1.HelmetProvider, null, react_1["default"].createElement("div", null, react_1["default"].createElement(react_helmet_async_1.Helmet, null, react_1["default"].createElement("title", null, "Time Planner"), react_1["default"].createElement("meta", {
    name: "description",
    content: "Generated by create-t3-app"
  }), react_1["default"].createElement("link", {
    rel: "icon",
    href: "/favicon.ico"
  })))), react_1["default"].createElement("main", null), react_1["default"].createElement(react_router_dom_1.Outlet, null), " ");
};
exports["default"] = Layout;

/***/ }),

/***/ "./src/views/main/pages/NotFound.tsx":
/*!*******************************************!*\
  !*** ./src/views/main/pages/NotFound.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
function NotFound() {
  return react_1["default"].createElement("div", {
    className: "flex items-center justify-center w-screen h-screen bg-gradient-to-r bg-blue-200 to-blue-400"
  }, react_1["default"].createElement("div", {
    className: "px-40 py-20 bg-white rounded-md shadow-xl"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, react_1["default"].createElement("h1", {
    className: "font-bold text-blue-600 text-9xl"
  }, "404"), react_1["default"].createElement("h6", {
    className: "mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
  }, react_1["default"].createElement("span", {
    className: "text-red-500"
  }, "Oops!"), " Page not found"), react_1["default"].createElement("p", {
    className: "mb-8 text-center text-gray-500 md:text-lg"
  }, "The page you're looking for doesn't exist."), react_1["default"].createElement(react_router_dom_1.Link, {
    to: "/",
    className: "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
  }, "Go home"))));
}
exports["default"] = NotFound;

/***/ }),

/***/ "./src/views/main/pages/Setting.tsx":
/*!******************************************!*\
  !*** ./src/views/main/pages/Setting.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SideBar_1 = __importDefault(__webpack_require__(/*! ../components/SideBar */ "./src/views/main/components/SideBar.tsx"));
var UserProfile_1 = __importDefault(__webpack_require__(/*! ../components/UserProfile */ "./src/views/main/components/UserProfile.tsx"));
function Setting() {
  return react_1["default"].createElement("div", {
    className: "flex"
  }, react_1["default"].createElement("div", {
    className: "w-[30%]"
  }, react_1["default"].createElement(SideBar_1["default"], null)), react_1["default"].createElement("div", {
    className: "w-[70%]"
  }, react_1["default"].createElement(UserProfile_1["default"], null)));
}
exports["default"] = Setting;

/***/ }),

/***/ "./src/views/main/pages/SignUpForm.tsx":
/*!*********************************************!*\
  !*** ./src/views/main/pages/SignUpForm.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../utils/request */ "./src/views/main/utils/request.ts"));
var fa_1 = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function SignUpForm() {
  var _this = this;
  var _ref = (0, react_1.useState)({
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    _ref2 = _slicedToArray(_ref, 2),
    dataUser = _ref2[0],
    setDataUser = _ref2[1];
  var _ref3 = (0, react_1.useState)({
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }),
    _ref4 = _slicedToArray(_ref3, 2),
    message = _ref4[0],
    setMessage = _ref4[1];
  var _ref5 = (0, react_1.useState)(false),
    _ref6 = _slicedToArray(_ref5, 2),
    isLoading = _ref6[0],
    setIsLoading = _ref6[1];
  var navigate = (0, react_router_dom_1.useNavigate)();
  var handleDataUserChange = function handleDataUserChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setMessage(Object.assign(Object.assign({}, message), _defineProperty({}, name, '')));
    setDataUser(function (prevState) {
      return Object.assign(Object.assign({}, prevState), _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(event) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _a, _b, isValid, errorMessage, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            setIsLoading(true);
            isValid = true;
            errorMessage = Object.assign({}, message);
            if (((_a = dataUser.fullname) === null || _a === void 0 ? void 0 : _a.trim()) === '') {
              errorMessage = Object.assign(Object.assign({}, errorMessage), {
                fullname: 'Full name is not null.'
              });
              isValid = false;
            }
            if (((_b = dataUser.email) === null || _b === void 0 ? void 0 : _b.trim()) === '') {
              errorMessage = Object.assign(Object.assign({}, errorMessage), {
                email: 'Email is not null.'
              });
              isValid = false;
            }
            if (dataUser.password.length < 3) {
              errorMessage = Object.assign(Object.assign({}, errorMessage), {
                password: 'Password must be at least 3 characters long.'
              });
              isValid = false;
            }
            if (dataUser.password !== dataUser.confirmPassword) {
              errorMessage = Object.assign(Object.assign({}, errorMessage), {
                confirmPassword: 'Passwords must not match.'
              });
              isValid = false;
            }
            if (!isValid) {
              _context.next = 16;
              break;
            }
            _context.next = 11;
            return request_1["default"].post('login/signup', dataUser);
          case 11:
            res = _context.sent;
            console.log(res);
            navigate('/login');
            _context.next = 17;
            break;
          case 16:
            setMessage(errorMessage);
          case 17:
            setIsLoading(false);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  return react_1["default"].createElement("div", {
    className: 'flex h-screen justify-center items-center'
  }, react_1["default"].createElement("div", {
    className: "flex h-screen w-1/3 items-center justify-center font-poppins"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "mb-4 w-full rounded bg-white px-8 pt-6 pb-8 shadow-md sm:w-full md:w-full lg:w-full"
  }, react_1["default"].createElement("div", {
    className: "m-5 text-center text-xl font-bold text-gray-600"
  }, "Sign up"), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "fullname"
  }, "Full Name"), react_1["default"].createElement("input", {
    type: "text",
    id: "fullname",
    className: "focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    name: "fullname",
    placeholder: "\u2710 Full Name",
    value: dataUser.fullname,
    onChange: handleDataUserChange
  }), react_1["default"].createElement("p", {
    className: "mt-2 text-red-500 text-sm italic"
  }, message.fullname)), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "email"
  }, "Email"), react_1["default"].createElement("input", {
    type: "email",
    id: "email",
    className: "focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    name: "email",
    placeholder: "\u2710 Email",
    value: dataUser.email,
    onChange: handleDataUserChange
  }), react_1["default"].createElement("p", {
    className: "mt-2 text-red-500 text-sm italic"
  }, message.email)), react_1["default"].createElement("div", {
    className: "mb-4"
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "password"
  }, "Password"), react_1["default"].createElement("input", {
    type: "password",
    id: "password",
    className: "focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    name: "password",
    placeholder: "\u2710 Password",
    value: dataUser.password,
    onChange: handleDataUserChange
  }), react_1["default"].createElement("p", {
    className: "mt-2 text-red-500 text-sm italic"
  }, message.password)), react_1["default"].createElement("div", {
    className: "mb-6"
  }, react_1["default"].createElement("label", {
    className: "mb-2 block font-bold text-gray-700",
    htmlFor: "confirmPassword"
  }, "Confirm Password"), react_1["default"].createElement("input", {
    type: "password",
    id: "confirmPassword",
    className: "focus:shadow-outline w-full appearance-none rounded py-2 px-3 text-sm leading-tight text-gray-700 focus:border-green-300 focus:outline-none",
    name: "confirmPassword",
    placeholder: "\u2710 Confirm Password",
    value: dataUser.confirmPassword,
    onChange: handleDataUserChange
  }), react_1["default"].createElement("p", {
    className: "mt-2 text-red-500 text-sm italic"
  }, message.confirmPassword)), react_1["default"].createElement("div", {
    className: "flex items-center justify-center"
  }, react_1["default"].createElement("button", {
    className: "focus:shadow-outline w-full rounded bg-emerald-400 py-2 px-4 font-bold text-white hover:bg-emerald-500 focus:outline-none",
    type: "submit",
    disabled: isLoading
  }, isLoading ? "Loading..." : "Create Account")), react_1["default"].createElement("div", {
    className: "my-3 text-center text-ml"
  }, "Already have an account?", ' ', react_1["default"].createElement(react_router_dom_1.Link, {
    to: "../login",
    className: "text-blue-500"
  }, "Login")), react_1["default"].createElement("hr", null), react_1["default"].createElement("div", {
    className: "mt-5 flex items-center justify-center"
  }, react_1["default"].createElement("button", {
    type: "submit",
    className: "mx-5 flex items-center justify-between rounded-md border-2 border-blue-400 p-2"
  }, react_1["default"].createElement(fa_1.FaFacebook, {
    className: "mr-2 text-[20px] text-blue-500"
  }), react_1["default"].createElement("span", {
    className: "text-sm"
  }, "Facebook")), react_1["default"].createElement("button", {
    className: "mx-5 flex items-center justify-between rounded-md border-2 border-green-400 p-2",
    type: "submit"
  }, react_1["default"].createElement(fa_1.FaGithub, {
    className: "mr-2 text-[20px] text-black-800"
  }), react_1["default"].createElement("span", {
    className: "text-sm"
  }, "GitHub"))))));
}
exports["default"] = SignUpForm;

/***/ }),

/***/ "./src/views/main/pages/Task.tsx":
/*!***************************************!*\
  !*** ./src/views/main/pages/Task.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_2 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var Calendar_1 = __importDefault(__webpack_require__(/*! ../components/Calendar */ "./src/views/main/components/Calendar.tsx"));
var Report_1 = __importDefault(__webpack_require__(/*! ../components/Report */ "./src/views/main/components/Report.tsx"));
var SideBar_1 = __importDefault(__webpack_require__(/*! ../components/SideBar */ "./src/views/main/components/SideBar.tsx"));
var Weather_1 = __importDefault(__webpack_require__(/*! ../components/Weather */ "./src/views/main/components/Weather.tsx"));
var CurrentTask_1 = __importDefault(__webpack_require__(/*! ../components/CurrentTask */ "./src/views/main/components/CurrentTask.tsx"));
var ChildTask_1 = __importDefault(__webpack_require__(/*! ../components/ChildTask */ "./src/views/main/components/ChildTask.tsx"));
var Menu_1 = __importDefault(__webpack_require__(/*! ../components/Menu */ "./src/views/main/components/Menu.tsx"));
var Task = function Task() {
  var _ref = (0, react_2.useState)(""),
    _ref2 = _slicedToArray(_ref, 2),
    selectedOption = _ref2[0],
    setSelectedOption = _ref2[1];
  var _ref3 = (0, react_2.useState)(true),
    _ref4 = _slicedToArray(_ref3, 2),
    showCurrentTask = _ref4[0],
    setShowCurrentTask = _ref4[1];
  var _ref5 = (0, react_router_dom_1.useParams)(),
    task_id = _ref5.task_id;
  var handleOptionButton = function handleOptionButton(option) {
    setSelectedOption(option);
    if (option === "Calendar" || option === "Weather" || option === "Report") setShowCurrentTask(false);else {
      setShowCurrentTask(true);
    }
  };
  // const handleShowAddTask = () => {
  //   setShowAddTask(!showAddTask);
  // };
  var renderCurrentTask = function renderCurrentTask() {
    if (task_id) {
      return showCurrentTask && react_1["default"].createElement(CurrentTask_1["default"], {
        id: task_id
      });
    }
  };
  var renderContent = function renderContent() {
    // Add tasks, add projects
    switch (selectedOption) {
      case "ToDoList":
        if (task_id) return react_1["default"].createElement(ChildTask_1["default"], {
          id: task_id
        });
        break;
      case "Calendar":
        return react_1["default"].createElement(Calendar_1["default"], null);
        break;
      case "Report":
        return react_1["default"].createElement(Report_1["default"], null);
      case "Weather":
        return react_1["default"].createElement(Weather_1["default"], null);
        break;
      default:
        if (task_id) return react_1["default"].createElement(ChildTask_1["default"], {
          id: task_id
        });
        break;
    }
  };
  return react_1["default"].createElement("div", {
    className: "flex"
  }, react_1["default"].createElement("div", {
    className: "w-[30%]"
  }, react_1["default"].createElement(SideBar_1["default"], null)), react_1["default"].createElement("div", {
    className: "w-[70%]"
  }, react_1["default"].createElement(Menu_1["default"], {
    handleOptionButton: handleOptionButton,
    showButtonAddTask: false
  }), renderCurrentTask(), renderContent()));
};
exports["default"] = Task;

/***/ }),

/***/ "./src/views/main/redux/actions/otherAction.ts":
/*!*****************************************************!*\
  !*** ./src/views/main/redux/actions/otherAction.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fetchIconsWeatherAction = void 0;
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var request_1 = __importDefault(__webpack_require__(/*! ../../utils/request */ "./src/views/main/utils/request.ts"));
var fetchIconsRequest = function fetchIconsRequest() {
  return {
    type: ActionType.FETCH_ICONS_REQUEST
  };
};
var fetchIconsSuccess = function fetchIconsSuccess(data) {
  return {
    type: ActionType.FETCH_ICONS_SUCCESS,
    payload: data
  };
};
var fetchIconsFailure = function fetchIconsFailure(error) {
  return {
    type: ActionType.FETCH_ICONS_FAILURE,
    payload: error
  };
};
var fetchIconsWeatherAction = function fetchIconsWeatherAction() {
  return function (dispatch) {
    dispatch(fetchIconsRequest());
    request_1["default"].get("getIcon").then(function (response) {
      dispatch(fetchIconsSuccess(response.data));
    })["catch"](function (error) {
      dispatch(fetchIconsFailure(error));
    });
  };
};
exports.fetchIconsWeatherAction = fetchIconsWeatherAction;

/***/ }),

/***/ "./src/views/main/redux/actions/taskAction.ts":
/*!****************************************************!*\
  !*** ./src/views/main/redux/actions/taskAction.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.deleteTaskAction = exports.editTaskAction = exports.addTaskAction = exports.deleteTaskSuccess = exports.editTaskSuccess = exports.postTaskFailure = exports.postTaskSuccess = exports.postTaskRequest = exports.getTasksTodayAction = exports.fetchTasksAction = void 0;
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var request_1 = __importDefault(__webpack_require__(/*! ../../utils/request */ "./src/views/main/utils/request.ts"));
var fetchTasksRequest = function fetchTasksRequest() {
  return {
    type: ActionType.FETCH_TASKS_REQUEST
  };
};
var fetchTasksSuccess = function fetchTasksSuccess(data) {
  return {
    type: ActionType.FETCH_TASKS_SUCCESS,
    payload: data
  };
};
var fetchTasksFailure = function fetchTasksFailure(error) {
  return {
    type: ActionType.FETCH_TASKS_FAILURE,
    payload: error
  };
};
var getTasksTodaySuccess = function getTasksTodaySuccess(data) {
  return {
    type: ActionType.GET_TASKS_TODAY_ACTION,
    payload: data
  };
};
var fetchTasksAction = function fetchTasksAction() {
  return function (dispatch) {
    dispatch(fetchTasksRequest());
    request_1["default"].get("task").then(function (response) {
      dispatch(fetchTasksSuccess(response.data));
    })["catch"](function (error) {
      dispatch(fetchTasksFailure(error));
    });
  };
};
exports.fetchTasksAction = fetchTasksAction;
var getTasksTodayAction = function getTasksTodayAction() {
  return function (dispatch) {
    dispatch(fetchTasksRequest());
    request_1["default"].get("task/today").then(function (response) {
      dispatch(getTasksTodaySuccess(response.data));
      dispatch((0, exports.fetchTasksAction)());
    })["catch"](function (error) {
      dispatch(fetchTasksFailure(error));
    });
  };
};
exports.getTasksTodayAction = getTasksTodayAction;
var postTaskRequest = function postTaskRequest() {
  return {
    type: ActionType.POST_TASK_REQUEST
  };
};
exports.postTaskRequest = postTaskRequest;
var postTaskSuccess = function postTaskSuccess(data) {
  return {
    type: ActionType.ADD_TASK_ACTION,
    payload: data
  };
};
exports.postTaskSuccess = postTaskSuccess;
var postTaskFailure = function postTaskFailure(error) {
  return {
    type: ActionType.POST_TASK_FAILURE,
    payload: error
  };
};
exports.postTaskFailure = postTaskFailure;
var editTaskSuccess = function editTaskSuccess(data) {
  return {
    type: ActionType.EDIT_TASK_ACTION,
    payload: data
  };
};
exports.editTaskSuccess = editTaskSuccess;
var deleteTaskSuccess = function deleteTaskSuccess(data) {
  return {
    type: ActionType.DELETE_TASK_ACTION,
    payload: data
  };
};
exports.deleteTaskSuccess = deleteTaskSuccess;
var addTaskAction = function addTaskAction(data) {
  return function (dispatch) {
    dispatch((0, exports.postTaskRequest)());
    request_1["default"].post("task/".concat(data.parent_task_id), data).then(function (response) {
      dispatch((0, exports.postTaskSuccess)(data));
      dispatch((0, exports.getTasksTodayAction)());
    })["catch"](function (error) {
      dispatch((0, exports.postTaskFailure)(error));
    });
  };
};
exports.addTaskAction = addTaskAction;
var editTaskAction = function editTaskAction(data) {
  return function (dispatch) {
    dispatch((0, exports.postTaskRequest)());
    request_1["default"].post("task/update/".concat(data.task_id), data).then(function (response) {
      dispatch((0, exports.editTaskSuccess)(data));
      dispatch((0, exports.getTasksTodayAction)());
    })["catch"](function (error) {
      dispatch((0, exports.postTaskFailure)(error));
    });
  };
};
exports.editTaskAction = editTaskAction;
var deleteTaskAction = function deleteTaskAction(data) {
  return function (dispatch) {
    dispatch((0, exports.postTaskRequest)());
    request_1["default"]["delete"]("task/delete/".concat(data.task_id)).then(function (response) {
      dispatch((0, exports.deleteTaskSuccess)(data));
      dispatch((0, exports.getTasksTodayAction)());
    })["catch"](function (error) {
      dispatch((0, exports.postTaskFailure)(error));
    });
  };
};
exports.deleteTaskAction = deleteTaskAction;

/***/ }),

/***/ "./src/views/main/redux/actions/userAction.ts":
/*!****************************************************!*\
  !*** ./src/views/main/redux/actions/userAction.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getCurrentUserAction = exports.fetchUsersAction = void 0;
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var request_1 = __importDefault(__webpack_require__(/*! ../../utils/request */ "./src/views/main/utils/request.ts"));
var fetchUsersRequest = function fetchUsersRequest() {
  return {
    type: ActionType.FETCH_USERS_REQUEST
  };
};
var fetchUsersSuccess = function fetchUsersSuccess(data) {
  return {
    type: ActionType.FETCH_USERS_SUCCESS,
    payload: data
  };
};
var fetchUsersFailure = function fetchUsersFailure(error) {
  return {
    type: ActionType.FETCH_USERS_FAILURE,
    payload: error
  };
};
var getCurrentUserSuccess = function getCurrentUserSuccess(data) {
  return {
    type: ActionType.GET_CURRENT_USER_ACTION,
    payload: data
  };
};
var fetchUsersAction = function fetchUsersAction() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    request_1["default"].get("user/getAllUser").then(function (response) {
      dispatch(fetchUsersSuccess(response.data));
    })["catch"](function (error) {
      dispatch(fetchUsersFailure(error));
    });
  };
};
exports.fetchUsersAction = fetchUsersAction;
var getCurrentUserAction = function getCurrentUserAction() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    request_1["default"].get("user").then(function (response) {
      dispatch(getCurrentUserSuccess(response.data));
    })["catch"](function (error) {
      dispatch(fetchUsersFailure(error));
    });
  };
};
exports.getCurrentUserAction = getCurrentUserAction;

/***/ }),

/***/ "./src/views/main/redux/reducers/otherReducer.ts":
/*!*******************************************************!*\
  !*** ./src/views/main/redux/reducers/otherReducer.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var initialState = {
  iconsWeather: [],
  loading: false,
  error: null
};
var otherReducer = function otherReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ActionType.FETCH_ICONS_REQUEST:
      return Object.assign(Object.assign({}, state), {
        loading: true
      });
    case ActionType.FETCH_ICONS_SUCCESS:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        iconsWeather: action.payload
      });
    case ActionType.FETCH_ICONS_FAILURE:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        error: action.payload
      });
    default:
      return state;
  }
};
exports["default"] = otherReducer;

/***/ }),

/***/ "./src/views/main/redux/reducers/rootReducer.ts":
/*!******************************************************!*\
  !*** ./src/views/main/redux/reducers/rootReducer.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var taskReducer_1 = __importDefault(__webpack_require__(/*! ./taskReducer */ "./src/views/main/redux/reducers/taskReducer.ts"));
var userReducer_1 = __importDefault(__webpack_require__(/*! ./userReducer */ "./src/views/main/redux/reducers/userReducer.ts"));
var otherReducer_1 = __importDefault(__webpack_require__(/*! ./otherReducer */ "./src/views/main/redux/reducers/otherReducer.ts"));
var rootReducer = (0, redux_1.combineReducers)({
  taskState: taskReducer_1["default"],
  userState: userReducer_1["default"],
  otherState: otherReducer_1["default"]
});
exports["default"] = rootReducer;

/***/ }),

/***/ "./src/views/main/redux/reducers/taskReducer.ts":
/*!******************************************************!*\
  !*** ./src/views/main/redux/reducers/taskReducer.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var initialState = {
  tasks: [],
  tasksToday: [],
  loading: false,
  error: null
};
var taskReducer = function taskReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ActionType.FETCH_TASKS_REQUEST:
      return Object.assign(Object.assign({}, state), {
        loading: true
      });
    case ActionType.FETCH_TASKS_SUCCESS:
      var payload = action.payload;
      var data = [];
      payload.forEach(function (item) {
        data.push({
          task_id: item.task_id,
          parent_task_id: item.parent_task_id,
          startTime: item.started_time,
          finishTime: item.finished_time,
          taskName: item.task_name,
          title: item.title,
          description: item.description,
          priority: item.priority,
          status: item.status,
          type: item.type
        });
      });
      return Object.assign(Object.assign({}, state), {
        loading: false,
        tasks: data
      });
    case ActionType.GET_TASKS_TODAY_ACTION:
      var payloadToday = action.payload;
      var dataToday = [];
      payloadToday.forEach(function (item) {
        dataToday.push({
          task_id: item.task_id,
          parent_task_id: item.parent_task_id,
          startTime: item.started_time,
          finishTime: item.finished_time,
          taskName: item.task_name,
          title: item.title,
          description: item.description,
          priority: item.priority,
          status: item.status,
          type: item.type
        });
      });
      return Object.assign(Object.assign({}, state), {
        loading: false,
        tasksToday: dataToday
      });
    case ActionType.FETCH_TASKS_FAILURE:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        error: action.payload
      });
    case ActionType.POST_TASK_REQUEST:
      return Object.assign(Object.assign({}, state), {
        loading: true
      });
    case ActionType.ADD_TASK_ACTION:
      var tasksAfterAdd = [action.payload].concat(_toConsumableArray(state.tasks));
      return Object.assign(Object.assign({}, state), {
        loading: false,
        tasks: tasksAfterAdd
      });
    case ActionType.POST_TASK_FAILURE:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        error: action.payload
      });
    case ActionType.EDIT_TASK_ACTION:
      var newTasks = _toConsumableArray(state.tasks);
      var indexTaskUpdate = newTasks.findIndex(function (element) {
        return element.task_id === action.payload.task_id;
      });
      if (indexTaskUpdate !== -1) newTasks[indexTaskUpdate] = action.payload;
      return Object.assign(Object.assign({}, state), {
        loading: false,
        tasks: newTasks
      });
    case ActionType.DELETE_TASK_ACTION:
      var tasksAfterDelete = state.tasks.filter(function (element) {
        return element.task_id !== action.payload.task_id;
      });
      return Object.assign(Object.assign({}, state), {
        loading: false,
        tasks: tasksAfterDelete
      });
    default:
      return state;
  }
};
exports["default"] = taskReducer;

/***/ }),

/***/ "./src/views/main/redux/reducers/userReducer.ts":
/*!******************************************************!*\
  !*** ./src/views/main/redux/reducers/userReducer.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var ActionType = __importStar(__webpack_require__(/*! ../types */ "./src/views/main/redux/types/index.ts"));
var Users_1 = __webpack_require__(/*! ../../types/Users */ "./src/views/main/types/Users.ts");
var initialState = {
  users: [],
  currentUser: Users_1.initUser,
  loading: false,
  error: null
};
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ActionType.FETCH_USERS_REQUEST:
      return Object.assign(Object.assign({}, state), {
        loading: true
      });
    case ActionType.FETCH_USERS_SUCCESS:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        users: action.payload
      });
    case ActionType.FETCH_USERS_FAILURE:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        error: action.payload
      });
    case ActionType.GET_CURRENT_USER_ACTION:
      return Object.assign(Object.assign({}, state), {
        loading: false,
        currentUser: action.payload
      });
    case ActionType.GET_ALL_USER_ACTION:
      return state;
    default:
      return state;
  }
};
exports["default"] = userReducer;

/***/ }),

/***/ "./src/views/main/redux/store.ts":
/*!***************************************!*\
  !*** ./src/views/main/redux/store.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
var rootReducer_1 = __importDefault(__webpack_require__(/*! ./reducers/rootReducer */ "./src/views/main/redux/reducers/rootReducer.ts"));
var Users_1 = __webpack_require__(/*! ../types/Users */ "./src/views/main/types/Users.ts");
// export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
var initialState = {
  taskState: {
    tasks: [],
    tasksToday: [],
    loading: false,
    error: null
  },
  userState: {
    users: [],
    currentUser: Users_1.initUser,
    loading: false,
    error: null
  },
  otherState: {
    iconsWeather: [],
    loading: false,
    error: null
  }
};
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
var store = (0, redux_1.legacy_createStore)(rootReducer_1["default"], initialState, composeEnhancers((0, redux_1.applyMiddleware)(redux_thunk_1["default"])));
exports["default"] = store;

/***/ }),

/***/ "./src/views/main/redux/types/index.ts":
/*!*********************************************!*\
  !*** ./src/views/main/redux/types/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.FETCH_ICONS_FAILURE = exports.FETCH_ICONS_REQUEST = exports.FETCH_ICONS_SUCCESS = void 0;
__exportStar(__webpack_require__(/*! ./taskTypes */ "./src/views/main/redux/types/taskTypes.ts"), exports);
__exportStar(__webpack_require__(/*! ./userTypes */ "./src/views/main/redux/types/userTypes.ts"), exports);
exports.FETCH_ICONS_SUCCESS = "FETCH_ICONS_SUCCESS";
exports.FETCH_ICONS_REQUEST = "FETCH_ICONS_REQUEST";
exports.FETCH_ICONS_FAILURE = "FETCH_ICONS_FAILURE";

/***/ }),

/***/ "./src/views/main/redux/types/taskTypes.ts":
/*!*************************************************!*\
  !*** ./src/views/main/redux/types/taskTypes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DELETE_TASK_ACTION = exports.EDIT_TASK_ACTION = exports.ADD_TASK_ACTION = exports.POST_TASK_FAILURE = exports.POST_TASK_SUCCESS = exports.POST_TASK_REQUEST = exports.GET_TASKS_TODAY_ACTION = exports.FETCH_TASKS_FAILURE = exports.FETCH_TASKS_SUCCESS = exports.FETCH_TASKS_REQUEST = void 0;
exports.FETCH_TASKS_REQUEST = "FETCH_TASKS_REQUEST";
exports.FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
exports.FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";
exports.GET_TASKS_TODAY_ACTION = "GET_TASKS_TODAY_ACTION";
exports.POST_TASK_REQUEST = 'POST_TASK_REQUEST';
exports.POST_TASK_SUCCESS = 'POST_TASK_SUCCESS';
exports.POST_TASK_FAILURE = 'POST_TASK_FAILURE';
exports.ADD_TASK_ACTION = "ADD_TASK_ACTION";
exports.EDIT_TASK_ACTION = "EDIT_TASK_ACTION";
exports.DELETE_TASK_ACTION = "DELETE_TASK_ACTION";

/***/ }),

/***/ "./src/views/main/redux/types/userTypes.ts":
/*!*************************************************!*\
  !*** ./src/views/main/redux/types/userTypes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GET_CURRENT_USER_ACTION = exports.GET_ALL_USER_ACTION = exports.FETCH_USERS_FAILURE = exports.FETCH_USERS_SUCCESS = exports.FETCH_USERS_REQUEST = void 0;
exports.FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
exports.FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
exports.FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
exports.GET_ALL_USER_ACTION = "GET_ALL_USER_ACTION";
exports.GET_CURRENT_USER_ACTION = "GET_CURRENT_USER_ACTION";

/***/ }),

/***/ "./src/views/main/reportWebVitals.ts":
/*!*******************************************!*\
  !*** ./src/views/main/reportWebVitals.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    Promise.resolve().then(function () {
      return __importStar(__webpack_require__(/*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js"));
    }).then(function (_ref) {
      var getCLS = _ref.getCLS,
        getFID = _ref.getFID,
        getFCP = _ref.getFCP,
        getLCP = _ref.getLCP,
        getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
exports["default"] = reportWebVitals;

/***/ }),

/***/ "./src/views/main/types/Tasks.ts":
/*!***************************************!*\
  !*** ./src/views/main/types/Tasks.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initTask = void 0;
var moment_1 = __importDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));
exports.initTask = {
  task_id: "",
  parent_task_id: "",
  startTime: (0, moment_1["default"])().format('YYYY-MM-DD HH:mm:ss'),
  finishTime: (0, moment_1["default"])().format('YYYY-MM-DD HH:mm:ss'),
  taskName: "",
  title: "",
  description: "",
  priority: "LOW",
  status: "INPROGRESS",
  type: "BASIC_NEED"
};

/***/ }),

/***/ "./src/views/main/types/Users.ts":
/*!***************************************!*\
  !*** ./src/views/main/types/Users.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initUser = void 0;
exports.initUser = {
  id: 0,
  name: "",
  age: "",
  email: "",
  about: "",
  image: "",
  address: "",
  phone_number: "",
  country: "",
  company: "",
  job: "",
  university: "",
  gender: null
};

/***/ }),

/***/ "./src/views/main/utils/request.ts":
/*!*****************************************!*\
  !*** ./src/views/main/utils/request.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs"));
var request = axios_1["default"].create({
  baseURL: '/',
  withCredentials: true // Cho phép server gửi cookie
});

exports["default"] = request;

/***/ }),

/***/ "./src/views/main/utils/useModal.ts":
/*!******************************************!*\
  !*** ./src/views/main/utils/useModal.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var useModal = function useModal() {
  var _ref = (0, react_1.useState)(false),
    _ref2 = _slicedToArray(_ref, 2),
    isShowing = _ref2[0],
    setIsShowing = _ref2[1];
  function toggle() {
    setIsShowing(!isShowing);
  }
  return {
    isShowing: isShowing,
    toggle: toggle
  };
};
exports["default"] = useModal;

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/App.css":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/App.css ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n.react-datepicker__year-read-view--down-arrow,\r\n.react-datepicker__month-read-view--down-arrow,\r\n.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {\r\n  border-color: #ccc;\r\n  border-style: solid;\r\n  border-width: 3px 3px 0 0;\r\n  content: \"\";\r\n  display: block;\r\n  height: 9px;\r\n  position: absolute;\r\n  top: 6px;\r\n  width: 9px;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\r\n  margin-left: -4px;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\r\n  box-sizing: content-box;\r\n  position: absolute;\r\n  border: 8px solid transparent;\r\n  height: 0;\r\n  width: 1px;\r\n  content: \"\";\r\n  z-index: -1;\r\n  border-width: 8px;\r\n  left: -8px;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\r\n  border-bottom-color: #aeaeae;\r\n}\r\n\r\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {\r\n  top: 0;\r\n  margin-top: -8px;\r\n}\r\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\r\n  border-top: none;\r\n  border-bottom-color: #f0f0f0;\r\n}\r\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {\r\n  top: 0;\r\n}\r\n.react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {\r\n  top: -1px;\r\n  border-bottom-color: #aeaeae;\r\n}\r\n\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle {\r\n  bottom: 0;\r\n  margin-bottom: -8px;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\r\n  border-bottom: none;\r\n  border-top-color: #fff;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::after {\r\n  bottom: 0;\r\n}\r\n.react-datepicker-popper[data-placement^=top] .react-datepicker__triangle::before {\r\n  bottom: -1px;\r\n  border-top-color: #aeaeae;\r\n}\r\n\r\n.react-datepicker-wrapper {\r\n  display: inline-block;\r\n  padding: 0;\r\n  border: 0;\r\n  width: 100%;\r\n}\r\n\r\n.react-datepicker {\r\n  font-family: \"Helvetica Neue\", helvetica, arial, sans-serif;\r\n  font-size: 0.8rem;\r\n  background-color: #fff;\r\n  color: #000;\r\n  border: 1px solid #aeaeae;\r\n  border-radius: 0.3rem;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.react-datepicker--time-only .react-datepicker__triangle {\r\n  left: 35px;\r\n}\r\n.react-datepicker--time-only .react-datepicker__time-container {\r\n  border-left: 0;\r\n}\r\n.react-datepicker--time-only .react-datepicker__time,\r\n.react-datepicker--time-only .react-datepicker__time-box {\r\n  border-bottom-left-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n\r\n.react-datepicker__triangle {\r\n  position: absolute;\r\n  left: 50px;\r\n}\r\n\r\n.react-datepicker-popper {\r\n  z-index: 1;\r\n}\r\n.react-datepicker-popper[data-placement^=bottom] {\r\n  padding-top: 10px;\r\n}\r\n.react-datepicker-popper[data-placement=bottom-end] .react-datepicker__triangle, .react-datepicker-popper[data-placement=top-end] .react-datepicker__triangle {\r\n  left: auto;\r\n  right: 50px;\r\n}\r\n.react-datepicker-popper[data-placement^=top] {\r\n  padding-bottom: 10px;\r\n}\r\n.react-datepicker-popper[data-placement^=right] {\r\n  padding-left: 8px;\r\n}\r\n.react-datepicker-popper[data-placement^=right] .react-datepicker__triangle {\r\n  left: auto;\r\n  right: 42px;\r\n}\r\n.react-datepicker-popper[data-placement^=left] {\r\n  padding-right: 8px;\r\n}\r\n.react-datepicker-popper[data-placement^=left] .react-datepicker__triangle {\r\n  left: 42px;\r\n  right: auto;\r\n}\r\n\r\n.react-datepicker__header {\r\n  text-align: center;\r\n  background-color: #f0f0f0;\r\n  border-bottom: 1px solid #aeaeae;\r\n  border-top-left-radius: 0.3rem;\r\n  padding: 8px 0;\r\n  position: relative;\r\n}\r\n.react-datepicker__header--time {\r\n  padding-bottom: 8px;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.react-datepicker__header--time:not(.react-datepicker__header--time--only) {\r\n  border-top-left-radius: 0;\r\n}\r\n.react-datepicker__header:not(.react-datepicker__header--has-time-select) {\r\n  border-top-right-radius: 0.3rem;\r\n}\r\n\r\n.react-datepicker__year-dropdown-container--select,\r\n.react-datepicker__month-dropdown-container--select,\r\n.react-datepicker__month-year-dropdown-container--select,\r\n.react-datepicker__year-dropdown-container--scroll,\r\n.react-datepicker__month-dropdown-container--scroll,\r\n.react-datepicker__month-year-dropdown-container--scroll {\r\n  display: inline-block;\r\n  margin: 0 15px;\r\n}\r\n\r\n.react-datepicker__current-month,\r\n.react-datepicker-time__header,\r\n.react-datepicker-year-header {\r\n  margin-top: 0;\r\n  color: #000;\r\n  font-weight: bold;\r\n  font-size: 0.944rem;\r\n}\r\n\r\n.react-datepicker-time__header {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n.react-datepicker__navigation {\r\n  align-items: center;\r\n  background: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 2px;\r\n  padding: 0;\r\n  border: none;\r\n  z-index: 1;\r\n  height: 32px;\r\n  width: 32px;\r\n  text-indent: -999em;\r\n  overflow: hidden;\r\n}\r\n.react-datepicker__navigation--previous {\r\n  left: 2px;\r\n}\r\n.react-datepicker__navigation--next {\r\n  right: 2px;\r\n}\r\n.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {\r\n  right: 85px;\r\n}\r\n.react-datepicker__navigation--years {\r\n  position: relative;\r\n  top: 0;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.react-datepicker__navigation--years-previous {\r\n  top: 4px;\r\n}\r\n.react-datepicker__navigation--years-upcoming {\r\n  top: -4px;\r\n}\r\n.react-datepicker__navigation:hover *::before {\r\n  border-color: #a6a6a6;\r\n}\r\n\r\n.react-datepicker__navigation-icon {\r\n  position: relative;\r\n  top: -1px;\r\n  font-size: 20px;\r\n  width: 0;\r\n}\r\n.react-datepicker__navigation-icon--next {\r\n  left: -2px;\r\n}\r\n.react-datepicker__navigation-icon--next::before {\r\n  transform: rotate(45deg);\r\n  left: -7px;\r\n}\r\n.react-datepicker__navigation-icon--previous {\r\n  right: -2px;\r\n}\r\n.react-datepicker__navigation-icon--previous::before {\r\n  transform: rotate(225deg);\r\n  right: -7px;\r\n}\r\n\r\n.react-datepicker__month-container {\r\n  float: left;\r\n}\r\n\r\n.react-datepicker__year {\r\n  margin: 0.4rem;\r\n  text-align: center;\r\n}\r\n.react-datepicker__year-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  max-width: 180px;\r\n}\r\n.react-datepicker__year .react-datepicker__year-text {\r\n  display: inline-block;\r\n  width: 4rem;\r\n  margin: 2px;\r\n}\r\n\r\n.react-datepicker__month {\r\n  margin: 0.4rem;\r\n  text-align: center;\r\n}\r\n.react-datepicker__month .react-datepicker__month-text,\r\n.react-datepicker__month .react-datepicker__quarter-text {\r\n  display: inline-block;\r\n  width: 4rem;\r\n  margin: 2px;\r\n}\r\n\r\n.react-datepicker__input-time-container {\r\n  clear: both;\r\n  width: 100%;\r\n  float: left;\r\n  margin: 5px 0 10px 15px;\r\n  text-align: left;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__caption {\r\n  display: inline-block;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container {\r\n  display: inline-block;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input {\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input {\r\n  width: auto;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-inner-spin-button,\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__input input[type=time] {\r\n  -moz-appearance: textfield;\r\n}\r\n.react-datepicker__input-time-container .react-datepicker-time__input-container .react-datepicker-time__delimiter {\r\n  margin-left: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n.react-datepicker__time-container {\r\n  float: right;\r\n  border-left: 1px solid #aeaeae;\r\n  width: 85px;\r\n}\r\n.react-datepicker__time-container--with-today-button {\r\n  display: inline;\r\n  border: 1px solid #aeaeae;\r\n  border-radius: 0.3rem;\r\n  position: absolute;\r\n  right: -87px;\r\n  top: 0;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time {\r\n  position: relative;\r\n  background: white;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {\r\n  width: 85px;\r\n  overflow-x: hidden;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {\r\n  list-style: none;\r\n  margin: 0;\r\n  height: calc(195px + (1.7rem / 2));\r\n  overflow-y: scroll;\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  width: 100%;\r\n  box-sizing: content-box;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {\r\n  height: 30px;\r\n  padding: 5px 10px;\r\n  white-space: nowrap;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {\r\n  cursor: pointer;\r\n  background-color: #f0f0f0;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {\r\n  background-color: #216ba5;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {\r\n  background-color: #216ba5;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {\r\n  color: #ccc;\r\n}\r\n.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {\r\n  cursor: default;\r\n  background-color: transparent;\r\n}\r\n\r\n.react-datepicker__week-number {\r\n  color: #ccc;\r\n  display: inline-block;\r\n  width: 1.7rem;\r\n  line-height: 1.7rem;\r\n  text-align: center;\r\n  margin: 0.166rem;\r\n}\r\n.react-datepicker__week-number.react-datepicker__week-number--clickable {\r\n  cursor: pointer;\r\n}\r\n.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {\r\n  border-radius: 0.3rem;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.react-datepicker__day-names,\r\n.react-datepicker__week {\r\n  white-space: nowrap;\r\n}\r\n\r\n.react-datepicker__day-names {\r\n  margin-bottom: -8px;\r\n}\r\n\r\n.react-datepicker__day-name,\r\n.react-datepicker__day,\r\n.react-datepicker__time-name {\r\n  color: #000;\r\n  display: inline-block;\r\n  width: 1.7rem;\r\n  line-height: 1.7rem;\r\n  text-align: center;\r\n  margin: 0.166rem;\r\n}\r\n\r\n.react-datepicker__month--selected, .react-datepicker__month--in-selecting-range, .react-datepicker__month--in-range,\r\n.react-datepicker__quarter--selected,\r\n.react-datepicker__quarter--in-selecting-range,\r\n.react-datepicker__quarter--in-range {\r\n  border-radius: 0.3rem;\r\n  background-color: #216ba5;\r\n  color: #fff;\r\n}\r\n.react-datepicker__month--selected:hover, .react-datepicker__month--in-selecting-range:hover, .react-datepicker__month--in-range:hover,\r\n.react-datepicker__quarter--selected:hover,\r\n.react-datepicker__quarter--in-selecting-range:hover,\r\n.react-datepicker__quarter--in-range:hover {\r\n  background-color: #1d5d90;\r\n}\r\n.react-datepicker__month--disabled,\r\n.react-datepicker__quarter--disabled {\r\n  color: #ccc;\r\n  pointer-events: none;\r\n}\r\n.react-datepicker__month--disabled:hover,\r\n.react-datepicker__quarter--disabled:hover {\r\n  cursor: default;\r\n  background-color: transparent;\r\n}\r\n\r\n.react-datepicker__day,\r\n.react-datepicker__month-text,\r\n.react-datepicker__quarter-text,\r\n.react-datepicker__year-text {\r\n  cursor: pointer;\r\n}\r\n.react-datepicker__day:hover,\r\n.react-datepicker__month-text:hover,\r\n.react-datepicker__quarter-text:hover,\r\n.react-datepicker__year-text:hover {\r\n  border-radius: 0.3rem;\r\n  background-color: #f0f0f0;\r\n}\r\n.react-datepicker__day--today,\r\n.react-datepicker__month-text--today,\r\n.react-datepicker__quarter-text--today,\r\n.react-datepicker__year-text--today {\r\n  font-weight: bold;\r\n}\r\n.react-datepicker__day--highlighted,\r\n.react-datepicker__month-text--highlighted,\r\n.react-datepicker__quarter-text--highlighted,\r\n.react-datepicker__year-text--highlighted {\r\n  border-radius: 0.3rem;\r\n  background-color: #3dcc4a;\r\n  color: #fff;\r\n}\r\n.react-datepicker__day--highlighted:hover,\r\n.react-datepicker__month-text--highlighted:hover,\r\n.react-datepicker__quarter-text--highlighted:hover,\r\n.react-datepicker__year-text--highlighted:hover {\r\n  background-color: #32be3f;\r\n}\r\n.react-datepicker__day--highlighted-custom-1,\r\n.react-datepicker__month-text--highlighted-custom-1,\r\n.react-datepicker__quarter-text--highlighted-custom-1,\r\n.react-datepicker__year-text--highlighted-custom-1 {\r\n  color: magenta;\r\n}\r\n.react-datepicker__day--highlighted-custom-2,\r\n.react-datepicker__month-text--highlighted-custom-2,\r\n.react-datepicker__quarter-text--highlighted-custom-2,\r\n.react-datepicker__year-text--highlighted-custom-2 {\r\n  color: green;\r\n}\r\n.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,\r\n.react-datepicker__month-text--selected,\r\n.react-datepicker__month-text--in-selecting-range,\r\n.react-datepicker__month-text--in-range,\r\n.react-datepicker__quarter-text--selected,\r\n.react-datepicker__quarter-text--in-selecting-range,\r\n.react-datepicker__quarter-text--in-range,\r\n.react-datepicker__year-text--selected,\r\n.react-datepicker__year-text--in-selecting-range,\r\n.react-datepicker__year-text--in-range {\r\n  border-radius: 0.3rem;\r\n  background-color: #216ba5;\r\n  color: #fff;\r\n}\r\n.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,\r\n.react-datepicker__month-text--selected:hover,\r\n.react-datepicker__month-text--in-selecting-range:hover,\r\n.react-datepicker__month-text--in-range:hover,\r\n.react-datepicker__quarter-text--selected:hover,\r\n.react-datepicker__quarter-text--in-selecting-range:hover,\r\n.react-datepicker__quarter-text--in-range:hover,\r\n.react-datepicker__year-text--selected:hover,\r\n.react-datepicker__year-text--in-selecting-range:hover,\r\n.react-datepicker__year-text--in-range:hover {\r\n  background-color: #1d5d90;\r\n}\r\n.react-datepicker__day--keyboard-selected,\r\n.react-datepicker__month-text--keyboard-selected,\r\n.react-datepicker__quarter-text--keyboard-selected,\r\n.react-datepicker__year-text--keyboard-selected {\r\n  border-radius: 0.3rem;\r\n  background-color: #bad9f1;\r\n  color: rgb(0, 0, 0);\r\n}\r\n.react-datepicker__day--keyboard-selected:hover,\r\n.react-datepicker__month-text--keyboard-selected:hover,\r\n.react-datepicker__quarter-text--keyboard-selected:hover,\r\n.react-datepicker__year-text--keyboard-selected:hover {\r\n  background-color: #1d5d90;\r\n}\r\n.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,\r\n.react-datepicker__month-text--in-range,\r\n.react-datepicker__quarter-text--in-range,\r\n.react-datepicker__year-text--in-range),\r\n.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,\r\n.react-datepicker__month-text--in-range,\r\n.react-datepicker__quarter-text--in-range,\r\n.react-datepicker__year-text--in-range),\r\n.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,\r\n.react-datepicker__month-text--in-range,\r\n.react-datepicker__quarter-text--in-range,\r\n.react-datepicker__year-text--in-range),\r\n.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,\r\n.react-datepicker__month-text--in-range,\r\n.react-datepicker__quarter-text--in-range,\r\n.react-datepicker__year-text--in-range) {\r\n  background-color: rgba(33, 107, 165, 0.5);\r\n}\r\n.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range,\r\n.react-datepicker__month-text--in-selecting-range,\r\n.react-datepicker__quarter-text--in-selecting-range,\r\n.react-datepicker__year-text--in-selecting-range),\r\n.react-datepicker__month--selecting-range .react-datepicker__month-text--in-range:not(.react-datepicker__day--in-selecting-range,\r\n.react-datepicker__month-text--in-selecting-range,\r\n.react-datepicker__quarter-text--in-selecting-range,\r\n.react-datepicker__year-text--in-selecting-range),\r\n.react-datepicker__month--selecting-range .react-datepicker__quarter-text--in-range:not(.react-datepicker__day--in-selecting-range,\r\n.react-datepicker__month-text--in-selecting-range,\r\n.react-datepicker__quarter-text--in-selecting-range,\r\n.react-datepicker__year-text--in-selecting-range),\r\n.react-datepicker__month--selecting-range .react-datepicker__year-text--in-range:not(.react-datepicker__day--in-selecting-range,\r\n.react-datepicker__month-text--in-selecting-range,\r\n.react-datepicker__quarter-text--in-selecting-range,\r\n.react-datepicker__year-text--in-selecting-range) {\r\n  background-color: #f0f0f0;\r\n  color: #000;\r\n}\r\n.react-datepicker__day--disabled,\r\n.react-datepicker__month-text--disabled,\r\n.react-datepicker__quarter-text--disabled,\r\n.react-datepicker__year-text--disabled {\r\n  cursor: default;\r\n  color: #ccc;\r\n}\r\n.react-datepicker__day--disabled:hover,\r\n.react-datepicker__month-text--disabled:hover,\r\n.react-datepicker__quarter-text--disabled:hover,\r\n.react-datepicker__year-text--disabled:hover {\r\n  background-color: transparent;\r\n}\r\n\r\n.react-datepicker__month-text.react-datepicker__month--selected:hover, .react-datepicker__month-text.react-datepicker__month--in-range:hover, .react-datepicker__month-text.react-datepicker__quarter--selected:hover, .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,\r\n.react-datepicker__quarter-text.react-datepicker__month--selected:hover,\r\n.react-datepicker__quarter-text.react-datepicker__month--in-range:hover,\r\n.react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,\r\n.react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {\r\n  background-color: #216ba5;\r\n}\r\n.react-datepicker__month-text:hover,\r\n.react-datepicker__quarter-text:hover {\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.react-datepicker__input-container {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n.react-datepicker__input-container .react-datepicker__calendar-icon {\r\n  position: absolute;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.react-datepicker__view-calendar-icon input {\r\n  padding: 6px 10px 5px 25px;\r\n}\r\n\r\n.react-datepicker__year-read-view,\r\n.react-datepicker__month-read-view,\r\n.react-datepicker__month-year-read-view {\r\n  border: 1px solid transparent;\r\n  border-radius: 0.3rem;\r\n  position: relative;\r\n}\r\n.react-datepicker__year-read-view:hover,\r\n.react-datepicker__month-read-view:hover,\r\n.react-datepicker__month-year-read-view:hover {\r\n  cursor: pointer;\r\n}\r\n.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,\r\n.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,\r\n.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,\r\n.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,\r\n.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,\r\n.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {\r\n  border-top-color: #b3b3b3;\r\n}\r\n.react-datepicker__year-read-view--down-arrow,\r\n.react-datepicker__month-read-view--down-arrow,\r\n.react-datepicker__month-year-read-view--down-arrow {\r\n  transform: rotate(135deg);\r\n  right: -16px;\r\n  top: 0;\r\n}\r\n\r\n.react-datepicker__year-dropdown,\r\n.react-datepicker__month-dropdown,\r\n.react-datepicker__month-year-dropdown {\r\n  background-color: #f0f0f0;\r\n  position: absolute;\r\n  width: 50%;\r\n  left: 25%;\r\n  top: 30px;\r\n  z-index: 1;\r\n  text-align: center;\r\n  border-radius: 0.3rem;\r\n  border: 1px solid #aeaeae;\r\n}\r\n.react-datepicker__year-dropdown:hover,\r\n.react-datepicker__month-dropdown:hover,\r\n.react-datepicker__month-year-dropdown:hover {\r\n  cursor: pointer;\r\n}\r\n.react-datepicker__year-dropdown--scrollable,\r\n.react-datepicker__month-dropdown--scrollable,\r\n.react-datepicker__month-year-dropdown--scrollable {\r\n  height: 150px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.react-datepicker__year-option,\r\n.react-datepicker__month-option,\r\n.react-datepicker__month-year-option {\r\n  line-height: 20px;\r\n  width: 100%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.react-datepicker__year-option:first-of-type,\r\n.react-datepicker__month-option:first-of-type,\r\n.react-datepicker__month-year-option:first-of-type {\r\n  border-top-left-radius: 0.3rem;\r\n  border-top-right-radius: 0.3rem;\r\n}\r\n.react-datepicker__year-option:last-of-type,\r\n.react-datepicker__month-option:last-of-type,\r\n.react-datepicker__month-year-option:last-of-type {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  user-select: none;\r\n  border-bottom-left-radius: 0.3rem;\r\n  border-bottom-right-radius: 0.3rem;\r\n}\r\n.react-datepicker__year-option:hover,\r\n.react-datepicker__month-option:hover,\r\n.react-datepicker__month-year-option:hover {\r\n  background-color: #ccc;\r\n}\r\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,\r\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,\r\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {\r\n  border-bottom-color: #b3b3b3;\r\n}\r\n.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,\r\n.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,\r\n.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {\r\n  border-top-color: #b3b3b3;\r\n}\r\n.react-datepicker__year-option--selected,\r\n.react-datepicker__month-option--selected,\r\n.react-datepicker__month-year-option--selected {\r\n  position: absolute;\r\n  left: 15px;\r\n}\r\n\r\n.react-datepicker__close-icon {\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: 0;\r\n  outline: 0;\r\n  padding: 0 6px 0 0;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n.react-datepicker__close-icon::after {\r\n  cursor: pointer;\r\n  background-color: #216ba5;\r\n  color: #fff;\r\n  border-radius: 50%;\r\n  height: 16px;\r\n  width: 16px;\r\n  padding: 2px;\r\n  font-size: 12px;\r\n  line-height: 1;\r\n  text-align: center;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  content: \"×\";\r\n}\r\n\r\n.react-datepicker__today-button {\r\n  background: #f0f0f0;\r\n  border-top: 1px solid #aeaeae;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  padding: 5px 0;\r\n  clear: left;\r\n}\r\n\r\n.react-datepicker__portal {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  left: 0;\r\n  top: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  z-index: 2147483647;\r\n}\r\n.react-datepicker__portal .react-datepicker__day-name,\r\n.react-datepicker__portal .react-datepicker__day,\r\n.react-datepicker__portal .react-datepicker__time-name {\r\n  width: 3rem;\r\n  line-height: 3rem;\r\n}\r\n@media (max-width: 400px), (max-height: 550px) {\r\n  .react-datepicker__portal .react-datepicker__day-name,\r\n  .react-datepicker__portal .react-datepicker__day,\r\n  .react-datepicker__portal .react-datepicker__time-name {\r\n    width: 2rem;\r\n    line-height: 2rem;\r\n  }\r\n}\r\n.react-datepicker__portal .react-datepicker__current-month,\r\n.react-datepicker__portal .react-datepicker-time__header {\r\n  font-size: 1.44rem;\r\n}\r\n\r\n.react-datepicker__children-container {\r\n  width: 13.8rem;\r\n  margin: 0.4rem;\r\n  padding-right: 0.2rem;\r\n  padding-left: 0.2rem;\r\n  height: auto;\r\n}\r\n\r\n.react-datepicker__aria-live {\r\n  position: absolute;\r\n  -webkit-clip-path: circle(0);\r\n          clip-path: circle(0);\r\n  border: 0;\r\n  height: 1px;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  padding: 0;\r\n  width: 1px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.react-datepicker__calendar-icon {\r\n  width: 1em;\r\n  height: 1em;\r\n  vertical-align: -0.125em;\r\n}\r\n\r\n.App {\r\n    text-align: center;\r\n}\r\n\r\n.my-datepicker {\r\n    margin-right: 10px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/Calendar.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/Calendar.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".my-calendar .rbc-toolbar button.rbc-active {\r\n    background-color: #86efac;\r\n    border: 0;\r\n}\r\n\r\n.my-calendar .rbc-header {\r\n    font-size: small;\r\n    font-family: Poppins;\r\n    background-color: #bbf7d0;\r\n    padding: 5px;\r\n    color: #4b5563;\r\n    font-weight: 500;\r\n}\r\n\r\n.my-calendar .rbc-event-content {\r\n    font-family: Poppins;\r\n    font-size: x-small;\r\n}\r\n\r\n.my-calendar .rbc-event-allday {\r\n    background-color: #34d399;\r\n    padding: 3px;\r\n    font-weight: 500;\r\n}\r\n\r\n.my-calendar .rbc-off-range-bg {\r\n    background-color: #f4f4f5;\r\n}\r\n\r\n.my-calendar .rbc-today {\r\n    background-color: #bbf7d0;\r\n}\r\n\r\n.my-calendar .rbc-toolbar {\r\n    font-family: Poppins;\r\n}\r\n\r\n.my-calendar .rbc-toolbar-label {\r\n    font-size: medium;\r\n    color: #374151;\r\n}\r\n\r\n.my-calendar .rbc-toolbar .rbc-btn-group {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    font-size: x-small;\r\n}\r\n\r\n.my-calendar .rbc-time-view  {\r\n    border-radius: 0.375rem;\r\n}\r\n\r\n.my-calendar .rbc-month-view  {\r\n    border-radius: 0.375rem;\r\n}\r\n\r\n.my-calendar .rbc-agenda-view  {\r\n    border-radius: 0.375rem;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/react-big-calendar.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/react-big-calendar.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\r\n.rbc-btn {\r\n  color: inherit;\r\n  font: inherit;\r\n  margin: 0;\r\n}\r\n\r\nbutton.rbc-btn {\r\n  overflow: visible;\r\n  text-transform: none;\r\n  -webkit-appearance: button;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton[disabled].rbc-btn {\r\n  cursor: not-allowed;\r\n}\r\n\r\nbutton.rbc-input::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n.rbc-calendar {\r\n  box-sizing: border-box;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: stretch;\r\n}\r\n\r\n.rbc-calendar *,\r\n.rbc-calendar *:before,\r\n.rbc-calendar *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n.rbc-abs-full, .rbc-row-bg {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.rbc-ellipsis, .rbc-show-more, .rbc-row-segment .rbc-event-content, .rbc-event-label {\r\n  display: block;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.rbc-rtl {\r\n  direction: rtl;\r\n}\r\n\r\n.rbc-off-range {\r\n  color: #999999;\r\n}\r\n\r\n.rbc-off-range-bg {\r\n  background: #e6e6e6;\r\n}\r\n\r\n.rbc-header {\r\n  overflow: hidden;\r\n  flex: 1 0 0%;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  padding: 0 3px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-weight: bold;\r\n  font-size: 90%;\r\n  min-height: 0;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.rbc-header + .rbc-header {\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-header + .rbc-header {\r\n  border-left-width: 0;\r\n  border-right: 1px solid #ddd;\r\n}\r\n.rbc-header > a, .rbc-header > a:active, .rbc-header > a:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.rbc-button-link {\r\n  color: inherit;\r\n  background: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  -webkit-user-select: text;\r\n     -moz-user-select: text;\r\n          user-select: text;\r\n}\r\n\r\n.rbc-row-content {\r\n  position: relative;\r\n  -moz-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  z-index: 4;\r\n}\r\n\r\n.rbc-row-content-scrollable {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n.rbc-row-content-scrollable .rbc-row-content-scroll-container {\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n  /* Hide scrollbar for Chrome, Safari and Opera */\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n.rbc-row-content-scrollable .rbc-row-content-scroll-container::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n.rbc-today {\r\n  background-color: #eaf6ff;\r\n}\r\n\r\n.rbc-toolbar {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  font-size: 16px;\r\n}\r\n.rbc-toolbar .rbc-toolbar-label {\r\n  flex-grow: 1;\r\n  padding: 0 10px;\r\n  text-align: center;\r\n}\r\n.rbc-toolbar button {\r\n  color: #373a3c;\r\n  display: inline-block;\r\n  margin: 0;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  background: none;\r\n  background-image: none;\r\n  border: 1px solid #ccc;\r\n  padding: 0.375rem 1rem;\r\n  border-radius: 4px;\r\n  line-height: normal;\r\n  white-space: nowrap;\r\n}\r\n.rbc-toolbar button:active, .rbc-toolbar button.rbc-active {\r\n  background-image: none;\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n.rbc-toolbar button:active:hover, .rbc-toolbar button:active:focus, .rbc-toolbar button.rbc-active:hover, .rbc-toolbar button.rbc-active:focus {\r\n  color: #373a3c;\r\n  background-color: #d4d4d4;\r\n  border-color: #8c8c8c;\r\n}\r\n.rbc-toolbar button:focus {\r\n  color: #373a3c;\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n.rbc-toolbar button:hover {\r\n  color: #373a3c;\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n\r\n.rbc-btn-group {\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n}\r\n.rbc-btn-group > button:first-child:not(:last-child) {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.rbc-btn-group > button:last-child:not(:first-child) {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child) {\r\n  border-radius: 4px;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child) {\r\n  border-radius: 4px;\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n.rbc-btn-group > button:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n.rbc-btn-group button + button {\r\n  margin-left: -1px;\r\n}\r\n.rbc-rtl .rbc-btn-group button + button {\r\n  margin-left: 0;\r\n  margin-right: -1px;\r\n}\r\n.rbc-btn-group + .rbc-btn-group, .rbc-btn-group + button {\r\n  margin-left: 10px;\r\n}\r\n\r\n.rbc-event, .rbc-day-slot .rbc-background-event {\r\n  border: none;\r\n  box-sizing: border-box;\r\n  box-shadow: none;\r\n  margin: 0;\r\n  padding: 2px 5px;\r\n  background-color: #3174ad;\r\n  border-radius: 5px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.rbc-slot-selecting .rbc-event, .rbc-slot-selecting .rbc-day-slot .rbc-background-event, .rbc-day-slot .rbc-slot-selecting .rbc-background-event {\r\n  cursor: inherit;\r\n  pointer-events: none;\r\n}\r\n.rbc-event.rbc-selected, .rbc-day-slot .rbc-selected.rbc-background-event {\r\n  background-color: #265985;\r\n}\r\n.rbc-event:focus, .rbc-day-slot .rbc-background-event:focus {\r\n  outline: 5px auto #3b99fc;\r\n}\r\n\r\n.rbc-event-label {\r\n  font-size: 80%;\r\n}\r\n\r\n.rbc-event-overlaps {\r\n  box-shadow: -1px 1px 5px 0px rgba(51, 51, 51, 0.5);\r\n}\r\n\r\n.rbc-event-continues-prior {\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.rbc-event-continues-after {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.rbc-event-continues-earlier {\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.rbc-event-continues-later {\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n.rbc-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.rbc-row-segment {\r\n  padding: 0 1px 1px 1px;\r\n}\r\n.rbc-selected-cell {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.rbc-show-more {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  z-index: 4;\r\n  font-weight: bold;\r\n  font-size: 85%;\r\n  height: auto;\r\n  line-height: normal;\r\n  color: #3174ad;\r\n}\r\n.rbc-show-more:hover, .rbc-show-more:focus {\r\n  color: #265985;\r\n}\r\n\r\n.rbc-month-view {\r\n  position: relative;\r\n  border: 1px solid #ddd;\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 0 0;\r\n  width: 100%;\r\n  -moz-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n  height: 100%;\r\n}\r\n\r\n.rbc-month-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.rbc-month-row {\r\n  display: flex;\r\n  position: relative;\r\n  flex-direction: column;\r\n  flex: 1 0 0;\r\n  flex-basis: 0px;\r\n  overflow: hidden;\r\n  height: 100%;\r\n}\r\n.rbc-month-row + .rbc-month-row {\r\n  border-top: 1px solid #ddd;\r\n}\r\n\r\n.rbc-date-cell {\r\n  flex: 1 1 0;\r\n  min-width: 0;\r\n  padding-right: 5px;\r\n  text-align: right;\r\n}\r\n.rbc-date-cell.rbc-now {\r\n  font-weight: bold;\r\n}\r\n.rbc-date-cell > a, .rbc-date-cell > a:active, .rbc-date-cell > a:visited {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.rbc-row-bg {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex: 1 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.rbc-day-bg {\r\n  flex: 1 0 0%;\r\n}\r\n.rbc-day-bg + .rbc-day-bg {\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-day-bg + .rbc-day-bg {\r\n  border-left-width: 0;\r\n  border-right: 1px solid #ddd;\r\n}\r\n\r\n.rbc-overlay {\r\n  position: absolute;\r\n  z-index: 5;\r\n  border: 1px solid #e5e5e5;\r\n  background-color: #fff;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);\r\n  padding: 10px;\r\n}\r\n.rbc-overlay > * + * {\r\n  margin-top: 1px;\r\n}\r\n\r\n.rbc-overlay-header {\r\n  border-bottom: 1px solid #e5e5e5;\r\n  margin: -10px -10px 5px -10px;\r\n  padding: 2px 10px;\r\n}\r\n\r\n.rbc-agenda-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 0 0;\r\n  overflow: auto;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table {\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n  border-spacing: 0;\r\n  border-collapse: collapse;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table tbody > tr > td {\r\n  padding: 5px 10px;\r\n  vertical-align: top;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  text-transform: lowercase;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td {\r\n  border-left-width: 0;\r\n  border-right: 1px solid #ddd;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table tbody > tr + tr {\r\n  border-top: 1px solid #ddd;\r\n}\r\n.rbc-agenda-view table.rbc-agenda-table thead > tr > th {\r\n  padding: 3px 5px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th {\r\n  text-align: right;\r\n}\r\n\r\n.rbc-agenda-time-cell {\r\n  text-transform: lowercase;\r\n}\r\n.rbc-agenda-time-cell .rbc-continues-after:after {\r\n  content: \" »\";\r\n}\r\n.rbc-agenda-time-cell .rbc-continues-prior:before {\r\n  content: \"« \";\r\n}\r\n\r\n.rbc-agenda-date-cell,\r\n.rbc-agenda-time-cell {\r\n  white-space: nowrap;\r\n}\r\n\r\n.rbc-agenda-event-cell {\r\n  width: 100%;\r\n}\r\n\r\n.rbc-time-column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100%;\r\n}\r\n.rbc-time-column .rbc-timeslot-group {\r\n  flex: 1;\r\n}\r\n\r\n.rbc-timeslot-group {\r\n  border-bottom: 1px solid #ddd;\r\n  min-height: 40px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n}\r\n\r\n.rbc-time-gutter,\r\n.rbc-header-gutter {\r\n  flex: none;\r\n}\r\n\r\n.rbc-label {\r\n  padding: 0 5px;\r\n}\r\n\r\n.rbc-day-slot {\r\n  position: relative;\r\n}\r\n.rbc-day-slot .rbc-events-container {\r\n  bottom: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  margin-right: 10px;\r\n  top: 0;\r\n}\r\n.rbc-day-slot .rbc-events-container.rbc-rtl {\r\n  left: 10px;\r\n  right: 0;\r\n}\r\n.rbc-day-slot .rbc-event, .rbc-day-slot .rbc-background-event {\r\n  border: 1px solid #265985;\r\n  display: flex;\r\n  max-height: 100%;\r\n  min-height: 20px;\r\n  flex-flow: column wrap;\r\n  align-items: flex-start;\r\n  overflow: hidden;\r\n  position: absolute;\r\n}\r\n.rbc-day-slot .rbc-background-event {\r\n  opacity: 0.75;\r\n}\r\n.rbc-day-slot .rbc-event-label {\r\n  flex: none;\r\n  padding-right: 5px;\r\n  width: auto;\r\n}\r\n.rbc-day-slot .rbc-event-content {\r\n  width: 100%;\r\n  flex: 1 1 0;\r\n  word-wrap: break-word;\r\n  line-height: 1;\r\n  height: 100%;\r\n  min-height: 1em;\r\n}\r\n.rbc-day-slot .rbc-time-slot {\r\n  border-top: 1px solid #f7f7f7;\r\n}\r\n\r\n.rbc-time-view-resources .rbc-time-gutter,\r\n.rbc-time-view-resources .rbc-time-header-gutter {\r\n  position: sticky;\r\n  left: 0;\r\n  background-color: white;\r\n  border-right: 1px solid #ddd;\r\n  z-index: 10;\r\n  margin-right: -1px;\r\n}\r\n.rbc-time-view-resources .rbc-time-header {\r\n  overflow: hidden;\r\n}\r\n.rbc-time-view-resources .rbc-time-header-content {\r\n  min-width: auto;\r\n  flex: 1 0 0;\r\n  flex-basis: 0px;\r\n}\r\n.rbc-time-view-resources .rbc-time-header-cell-single-day {\r\n  display: none;\r\n}\r\n.rbc-time-view-resources .rbc-day-slot {\r\n  min-width: 140px;\r\n}\r\n.rbc-time-view-resources .rbc-header,\r\n.rbc-time-view-resources .rbc-day-bg {\r\n  width: 140px;\r\n  flex: 1 1 0;\r\n  flex-basis: 0 px;\r\n}\r\n\r\n.rbc-time-header-content + .rbc-time-header-content {\r\n  margin-left: -1px;\r\n}\r\n\r\n.rbc-time-slot {\r\n  flex: 1 0 0;\r\n}\r\n.rbc-time-slot.rbc-now {\r\n  font-weight: bold;\r\n}\r\n\r\n.rbc-day-header {\r\n  text-align: center;\r\n}\r\n\r\n.rbc-slot-selection {\r\n  z-index: 10;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: white;\r\n  font-size: 75%;\r\n  width: 100%;\r\n  padding: 3px;\r\n}\r\n\r\n.rbc-slot-selecting {\r\n  cursor: move;\r\n}\r\n\r\n.rbc-time-view {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n  min-height: 0;\r\n}\r\n.rbc-time-view .rbc-time-gutter {\r\n  white-space: nowrap;\r\n  text-align: right;\r\n}\r\n.rbc-time-view .rbc-allday-cell {\r\n  box-sizing: content-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.rbc-time-view .rbc-allday-cell + .rbc-allday-cell {\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-time-view .rbc-allday-events {\r\n  position: relative;\r\n  z-index: 4;\r\n}\r\n.rbc-time-view .rbc-row {\r\n  box-sizing: border-box;\r\n  min-height: 20px;\r\n}\r\n\r\n.rbc-time-header {\r\n  display: flex;\r\n  flex: 0 0 auto;\r\n  flex-direction: row;\r\n}\r\n.rbc-time-header.rbc-overflowing {\r\n  border-right: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-time-header.rbc-overflowing {\r\n  border-right-width: 0;\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-time-header > .rbc-row:first-child {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n.rbc-time-header > .rbc-row.rbc-row-resource {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.rbc-time-header-cell-single-day {\r\n  display: none;\r\n}\r\n\r\n.rbc-time-header-content {\r\n  flex: 1;\r\n  display: flex;\r\n  min-width: 0;\r\n  flex-direction: column;\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-time-header-content {\r\n  border-left-width: 0;\r\n  border-right: 1px solid #ddd;\r\n}\r\n.rbc-time-header-content > .rbc-row.rbc-row-resource {\r\n  border-bottom: 1px solid #ddd;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.rbc-time-content {\r\n  display: flex;\r\n  flex: 1 0 0%;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  border-top: 2px solid #ddd;\r\n  overflow-y: auto;\r\n  position: relative;\r\n}\r\n.rbc-time-content > .rbc-time-gutter {\r\n  flex: none;\r\n}\r\n.rbc-time-content > * + * > * {\r\n  border-left: 1px solid #ddd;\r\n}\r\n.rbc-rtl .rbc-time-content > * + * > * {\r\n  border-left-width: 0;\r\n  border-right: 1px solid #ddd;\r\n}\r\n.rbc-time-content > .rbc-day-slot {\r\n  width: 100%;\r\n  -moz-user-select: none;\r\n       user-select: none;\r\n  -webkit-user-select: none;\r\n}\r\n\r\n.rbc-current-time-indicator {\r\n  position: absolute;\r\n  z-index: 3;\r\n  left: 0;\r\n  right: 0;\r\n  height: 1px;\r\n  background-color: #74ad31;\r\n  pointer-events: none;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/views/main/index.css":
/*!**********************************!*\
  !*** ./src/views/main/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/main/App.css":
/*!********************************!*\
  !*** ./src/views/main/App.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./App.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_App_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_App_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/views/main/styles/Calendar.css":
/*!********************************************!*\
  !*** ./src/views/main/styles/Calendar.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_Calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./Calendar.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/Calendar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_Calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_Calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/views/main/styles/react-big-calendar.css":
/*!******************************************************!*\
  !*** ./src/views/main/styles/react-big-calendar.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./react-big-calendar.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[7].oneOf[1].use[2]!./src/views/main/styles/react-big-calendar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_7_oneOf_1_use_2_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["public/css/index","/public/js/vendor~node_modules_a","/public/js/vendor~node_modules_d","/public/js/vendor~node_modules_echarts_i","/public/js/vendor~node_modules_echarts_lib_chart_b","/public/js/vendor~node_modules_echarts_lib_chart_l","/public/js/vendor~node_modules_echarts_lib_component_a","/public/js/vendor~node_modules_echarts_lib_c","/public/js/vendor~node_modules_echarts_lib_i","/public/js/vendor~node_modules_echarts_lib_l","/public/js/vendor~node_modules_f","/public/js/vendor~node_modules_i","/public/js/vendor~node_modules_m","/public/js/vendor~node_modules_react-b","/public/js/vendor~node_modules_react-dom_cjs_react-dom_development_js_ac892209","/public/js/vendor~node_modules_react-f","/public/js/vendor~node_modules_react-icons_bs_index_esm_js_72b31f3f","/public/js/vendor~node_modules_react-icons_fa_index_esm_js_14fda43c","/public/js/vendor~node_modules_react-icons_hi2","/public/js/vendor~node_modules_react-icons_io5_index_esm_js_7068cb15","/public/js/vendor~node_modules_react-icons_l","/public/js/vendor~node_modules_react-icons_md_index_esm_js_ae205d8b","/public/js/vendor~node_modules_react-icons_t","/public/js/vendor~node_modules_react-","/public/js/vendor~node_modules_redux-","/public/js/vendor~node_modules_r","/public/js/vendor~node_modules_t"], () => (__webpack_exec__("./src/views/main/index.tsx"), __webpack_exec__("./src/views/main/index.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);