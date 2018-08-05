module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_components_Header__ = __webpack_require__("./src/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_style_css__ = __webpack_require__("./src/styles/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_styles_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Layout__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Tabmenupage__ = __webpack_require__("./src/components/Tabmenupage.js");
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







 // import 'antd/dist/antd.css';
// import Document, { Head, Main, NextScript } from 'next/document'

var MonthPicker = __WEBPACK_IMPORTED_MODULE_4_antd__["DatePicker"].MonthPicker,
    RangePicker = __WEBPACK_IMPORTED_MODULE_4_antd__["DatePicker"].RangePicker,
    WeekPicker = __WEBPACK_IMPORTED_MODULE_4_antd__["DatePicker"].WeekPicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_components_Header__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__src_components_Tabmenupage__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })) // </div>
      ;
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar__ = __webpack_require__("./src/components/Navbar.js");
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "TN Daily"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "headder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navname__ = __webpack_require__("./src/components/Navname.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Selectrole__ = __webpack_require__("./src/components/Selectrole.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Selectstate__ = __webpack_require__("./src/components/Selectstate.js");
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Layout.js";






var Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var text = "\n 55\n";

var LayoutComponent = function LayoutComponent(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "loyoutall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navname__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), props.data.map(function (name) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "layout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "users",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
      className: "name-user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, name)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "Card-role",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Selectrole__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "Card-state",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Selectstate__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    })));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (LayoutComponent);

/***/ }),

/***/ "./src/components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Navbar.js";



var Navbar = function Navbar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "name-tndaily",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "TN DAILY")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "wigth-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "report",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: "file",
    style: {
      fontSize: 16,
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E27\u0E31\u0E19"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "wigth-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "setting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: "setting",
    style: {
      fontSize: 16,
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "wigth-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: "user",
    style: {
      fontSize: 16,
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), "Username", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], {
    type: "caret-down",
    style: {
      fontSize: 10,
      color: '#fff'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./src/components/Navname.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Navname.js";


var Navname = function Navname() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card-tepmenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "name-team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "role",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, " \u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
    className: "state",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "\u0E2A\u0E16\u0E32\u0E19\u0E30")));
};

/* harmony default export */ __webpack_exports__["a"] = (Navname);

/***/ }),

/***/ "./src/components/Selectrole.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Selectrole.js";



var Selectrole = function Selectrole() {
  var Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

  function handleChange(value) {
    console.log("selected ".concat(value));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
    defaultValue: "Admin",
    style: {
      width: 100
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
    value: "Admin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Admin"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
    value: "Editer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Editer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
    value: "Viewer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Viewer")));
};

/* harmony default export */ __webpack_exports__["a"] = (Selectrole);

/***/ }),

/***/ "./src/components/Selectstate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Selectstate.js";



var Selectstate = function Selectstate() {
  var Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

  function handleChange(value) {
    console.log("selected ".concat(value));
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Select"], {
    defaultValue: "\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E1B\u0E01\u0E15\u0E34",
    style: {
      width: 100
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
    value: "\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E1B\u0E01\u0E15\u0E34",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E1B\u0E01\u0E15\u0E34"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Option, {
    value: "\u0E23\u0E30\u0E07\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "\u0E23\u0E30\u0E07\u0E31\u0E1A\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")));
};

/* harmony default export */ __webpack_exports__["a"] = (Selectstate);

/***/ }),

/***/ "./src/components/Tabmenupage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__("antd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Layout__ = __webpack_require__("./src/components/Layout.js");
var _jsxFileName = "C:\\Users\\dell\\Documents\\front-endtnm\\src\\components\\Tabmenupage.js";



var TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

function callback(key) {
  console.log(key);
}

var Tabmenupage = function Tabmenupage() {
  var adminList = ['พี่เซท', 'พี่ไอซ์'];
  var memberList = ['tarn', 'kwan', 'karn', 'ped', 'nan', 'wiw'];
  var team = ['mapmagic', 'shop', 'JTU'];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      background: '#ECECEC',
      height: '1000px',
      padding: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "Tabmenupage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"], {
    defaultActiveKey: "1",
    onChange: callback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabPane, {
    tab: "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E23\u0E30\u0E1A\u0E1A",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Layout__["a" /* default */], {
    data: adminList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabPane, {
    tab: "\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01 slack",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Layout__["a" /* default */], {
    data: memberList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TabPane, {
    tab: "\u0E17\u0E35\u0E21",
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Layout__["a" /* default */], {
    data: team,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })))));
};

/* harmony default export */ __webpack_exports__["a"] = (Tabmenupage);

/***/ }),

/***/ "./src/styles/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map