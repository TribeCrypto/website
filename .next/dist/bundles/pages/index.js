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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_theme__ = __webpack_require__("./lib/theme.js");



var Button = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: 'Button',
  componentId: 's1a2zoxy-0'
})(['display:flex;align-items:center;justify-content:center;background:linear-gradient(to right,', ',', ');color:#fff;width:100%;border-width:5px;border-radius:3px;border-style:solid;border-image:linear-gradient(to right,', ',', ') 1;padding:10px;font-size:0.8rem;font-weight:300;letter-spacing:3px;text-transform:uppercase;&:focus,&:hover{background:linear-gradient(to right,', ',', ');border-image:linear-gradient(to right,', ',', ') 1;cursor:pointer;outline:none;}&:disabled{cursor:not-allowed;background:transparent;}'], __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.start, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.start, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end, __WEBPACK_IMPORTED_MODULE_1__lib_theme__["a" /* theme */].gradient.end);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_theme__ = __webpack_require__("./lib/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Button__ = __webpack_require__("./components/Button.js");
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/components/Header/index.js';





var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Header__Wrapper',
  componentId: 'g572ty-0'
})(['display:flex;flex-direction:column;align-items:center;height:480px;background:', ';width:100%;'], __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].background.main);

var Tribe = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p.withConfig({
  displayName: 'Header__Tribe',
  componentId: 'g572ty-1'
})(['font-size:4rem;color:#fff;font-weight:100;letter-spacing:15px;margin:85px 0 65px 0;']);

var Subline = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p.withConfig({
  displayName: 'Header__Subline',
  componentId: 'g572ty-2'
})(['display:flex;align-items:center;font-size:1.4rem;color:#fff;font-weight:100;letter-spacing:5px;margin:0;']);

var Bracket = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span.withConfig({
  displayName: 'Header__Bracket',
  componentId: 'g572ty-3'
})(['font-size:2.2rem;']);

__WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */].Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Header__Container',
  componentId: 'g572ty-4'
})(['width:200px;margin:50px 0 0 0;']);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Tribe,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      },
      'TRIBE'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Subline,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Bracket,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        '['
      ),
      ' COMMUNITY BUILT PRIVACY CRYPTOR FOR MASS ADOPTION ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Bracket,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        },
        ']'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */].Container,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__Button__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        'GET TRIBE WALLET'
      )
    )
  );
});

/***/ }),

/***/ "./components/Join/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_theme__ = __webpack_require__("./lib/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./components/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SectionHeader__ = __webpack_require__("./components/SectionHeader.js");
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/components/Join/index.js';







var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Join__Wrapper',
  componentId: 's1p3r8mm-0'
})(['display:flex;flex-direction:column;margin:50px 0;height:480px;background:#fff;width:100%;']);

var Description = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.p.withConfig({
  displayName: 'Join__Description',
  componentId: 's1p3r8mm-1'
})(['margin:0 20%;line-height:30px;font-weight:300;font-size:1.2rem;text-align:center;']);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__SectionHeader__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      },
      'JOIN THE ',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { style: { color: __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].main.main, padding: '0 0 0 10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        },
        'TRIBE'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Description,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      'Tribe is a community built crytocurrency with the focus on mass-adoption. Our goal is to make secure, decentralized and private transactions available to everyone in the world. Anyone is welcome to download the open source code and make contributions to the Tribe code.'
    )
  );
});

/***/ }),

/***/ "./components/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/components/Logo.js';



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var size = _ref.size;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    { width: size ? size : '100%', height: size ? size : '100%', viewBox: '0 0 813 886', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', style: { 'fill-rule': 'evenodd', 'clip-rule': 'evenodd', 'stroke-linejoin': 'round', 'stroke-miterlimit': 1.41421 }, __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'g',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M355.803,12.303l-305.239,176.203c-28.381,16.34 -50.564,54.863 -50.564,87.591l0,352.455c0,32.633 22.04,70.966 50.256,87.401l251.587,169.364l44.152,0l0,-449.665l258.83,0l0,-44.152l-389.861,0l0,44.152l86.879,0l0,396.321l-229.286,-152.548l-0.57,-0.332c-15.271,-8.812 -29.189,-32.918 -29.189,-50.541l0,-352.455c0,-17.622 13.918,-41.705 29.189,-50.54l305.192,-176.204c15.271,-8.835 43.13,-8.835 58.354,0l305.239,176.204c15.272,8.835 29.166,32.918 29.166,50.54l0,352.455c0,17.623 -13.894,41.729 -29.166,50.541l-230.71,157.369l0,-281.227l-44.152,0l0,285.906l0,44.176l44.152,0l252.418,-169.364c28.215,-16.435 50.279,-54.768 50.279,-87.401l0,-352.455c0,-32.728 -22.23,-71.251 -50.611,-87.591l-305.192,-176.203c-14.179,-8.194 -32.395,-12.303 -50.588,-12.303c-18.193,0 -36.386,4.109 -50.565,12.303Z', style: { fill: 'url(#_Linear1)', 'fill-rule': 'nonzero' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M641.947,316.687l-471.135,0l-44.175,0l0,44.175l0,112.482l0,44.175l134.308,0l0,-44.175l-90.133,0l0,-112.482l471.135,0l0,112.482l-213.468,0l-44.199,0l0,44.175l0,285.93l44.199,0l0,-285.93l257.62,0l0,-200.832l-44.152,0Z', style: { fill: 'url(#_Linear2)', 'fill-rule': 'nonzero' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'defs',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'linearGradient',
        { id: '_Linear1', x1: '0', y1: '0', x2: '1', y2: '0', gradientUnits: 'userSpaceOnUse', gradientTransform: 'matrix(812.764,0,0,812.764,-0.00695172,442.649)', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', style: { 'stop-color': '#00b9f1', 'stop-opacity': 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', style: { 'stop-color': '#60c19e', 'stop-opacity': 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'linearGradient',
        { id: '_Linear2', x1: '0', y1: '0', x2: '1', y2: '0', gradientUnits: 'userSpaceOnUse', gradientTransform: 'matrix(559.462,0,0,559.462,126.641,560.056)', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '0', style: { 'stop-color': '#00b9f1', 'stop-opacity': 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('stop', { offset: '1', style: { 'stop-color': '#60c19e', 'stop-opacity': 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      )
    )
  );
});

/***/ }),

/***/ "./components/Navigation/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_theme__ = __webpack_require__("./lib/theme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./components/Logo.js");
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/components/Navigation/index.js';






var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Navigation__Wrapper',
  componentId: 's12edrdw-0'
})(['display:flex;align-items:center;height:80px;background:', ';width:calc(100% - 40%);padding:0 20%;'], __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].background.main);

__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */].Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Navigation__Container',
  componentId: 's12edrdw-1'
})(['width:300px;']);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */].Container,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], { size: '40px', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })
    )
  );
});

/***/ }),

/***/ "./components/SectionHeader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_theme__ = __webpack_require__("./lib/theme.js");
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/components/SectionHeader.js';




var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'SectionHeader__Wrapper',
  componentId: 's16wujjc-0'
})(['display:flex;flex-direction:column;color:', ';font-size:2.4rem;height:100px;font-weight:300;'], __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].text.main);

var Bracket = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'SectionHeader__Bracket',
  componentId: 's16wujjc-1'
})(['font-size:3rem;padding:0 10px;font-weight:300;color:', ';'], function (props) {
  return props.color ? props.color : __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].main.main;
});

var Container = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'SectionHeader__Container',
  componentId: 's16wujjc-2'
})(['display:flex;justify-content:center;']);

var Divider = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.hr.withConfig({
  displayName: 'SectionHeader__Divider',
  componentId: 's16wujjc-3'
})(['border:none;background:', ';height:3px;width:145px;'], __WEBPACK_IMPORTED_MODULE_2__lib_theme__["a" /* theme */].main.main);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      color = _ref.color;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Container,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Bracket,
        { color: color, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        '['
      ),
      children,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Bracket,
        { color: color, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        ']'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Divider, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    })
  );
});

/***/ }),

/***/ "./lib/theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
var theme = {
  background: {
    main: '#311e2f',
    dark: '#1c1d30'
  },
  gradient: {
    start: '#00b9f0',
    end: '#5fc19e'
  },
  main: {
    main: '#55b4a8'
  },
  footer: {
    main: '#231f20'
  },
  text: {
    main: '#929397'
  }
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navigation__ = __webpack_require__("./components/Navigation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Join__ = __webpack_require__("./components/Join/index.js");
var _jsxFileName = '/Users/hashdot/Kode/tribe-cypto.com/website/pages/index.js';







var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'pages__Wrapper',
  componentId: 's1wbo52z-0'
})(['display:flex;flex-direction:column;width:100%;']);

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h1.withConfig({
  displayName: 'pages__Title',
  componentId: 's1wbo52z-1'
})(['color:red;font-size:50px;']);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Wrapper,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Join__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map