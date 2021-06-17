module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article/index.tsx":
/*!**************************************!*\
  !*** ./components/Article/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/context */ "./lib/context.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles */ "./components/Article/styles.ts");

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\Article\\index.tsx";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(() => ({
  root: {
    minWidth: 275,
    marginBottom: 10
  },
  title: {
    flexGrow: 1
  },
  tagButton: {
    marginRight: 15
  }
}));

const Article = ({
  post
}) => {
  var _post$tags;

  const {
    setSelectedTag
  } = Object(_lib_context__WEBPACK_IMPORTED_MODULE_8__["UseAppContext"])();
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
    item: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["UnstyledLink"], {
      href: `/posts/${post.slug}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_9__["HoverableCard"], {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
            className: classes.title,
            color: "textSecondary",
            gutterBottom: true,
            children: post.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), post.summary, post.tags && ((_post$tags = post.tags) === null || _post$tags === void 0 ? void 0 : _post$tags.map(tag => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
              className: classes.tagButton,
              label: tag // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              ,
              onClick: () => setSelectedTag(tag)
            }, tag, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, undefined);
          }))]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            size: "small",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: `/posts/${post.slug}`,
              children: "Lire l'article"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 46
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)
  }, post.slug, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./components/Article/styles.ts":
/*!**************************************!*\
  !*** ./components/Article/styles.ts ***!
  \**************************************/
/*! exports provided: HoverableCard, UnstyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverableCard", function() { return HoverableCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnstyledLink", function() { return UnstyledLink; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const HoverableCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Card"])`
    &:hover {
        box-shadow: 5px 5px 10px -3px rgba(0,0,0,0.75);
        cursor: pointer;
    }`;
const UnstyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
    text-decoration: none;
    color: inherited;
`;

/***/ }),

/***/ "./components/Category/index.tsx":
/*!***************************************!*\
  !*** ./components/Category/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Article */ "./components/Article/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/Category/styles.ts");

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\Category\\index.tsx";



const Category = ({
  posts,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["CategoryWrapper"], {
    elevation: 3,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["CategoryTitle"], {
      children: title.charAt(0).toUpperCase() + title.slice(1)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: posts.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Article__WEBPACK_IMPORTED_MODULE_1__["default"], {
          post: post
        }, post.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 25
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./components/Category/styles.ts":
/*!***************************************!*\
  !*** ./components/Category/styles.ts ***!
  \***************************************/
/*! exports provided: CategoryTitle, CategoryWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTitle", function() { return CategoryTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWrapper", function() { return CategoryWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);


const CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    text-align: center;
    background-color: #efefef;
    margin: 10px;
    padding: 5px;
    font-size: 24px;
    font-family: monospace;
    border-radius: 5px;
`;
const CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a)`
    margin-right: 10px;
    padding: 10px;
`;

/***/ }),

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\Header.tsx";

const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      width: '100%',
      height: '500px'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBar */ "./components/TopBar.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.tsx");


var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\Layout.tsx";



const Layout = ({
  tags,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tags: tags
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/TopBar.tsx":
/*!*******************************!*\
  !*** ./components/TopBar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/context */ "./lib/context.tsx");

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\TopBar.tsx";

/* eslint-disable @typescript-eslint/no-unsafe-return */





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  topBar: {
    marginBottom: 30,
    backgroundColor: '#E5989B'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'center'
  },
  tagButton: {
    marginRight: 15
  }
}));

const TopBar = ({
  tags
}) => {
  const {
    setSelectedTag
  } = Object(_lib_context__WEBPACK_IMPORTED_MODULE_5__["UseAppContext"])();
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    className: classes.topBar,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.toolBar,
      children: [tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.tagButton,
        variant: "contained",
        onClick: () => setSelectedTag(tag),
        children: tag
      }, tag, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.tagButton,
        variant: "contained",
        onClick: () => setSelectedTag(undefined),
        children: "Tout"
      }, "all", false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/*! exports provided: getPostSlugs, getPostBySlug, getAllPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostSlugs", function() { return getPostSlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(process.cwd(), 'posts');
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(postsDirectory, `${realSlug}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields));
  return posts;
}

/***/ }),

/***/ "./lib/context.tsx":
/*!*************************!*\
  !*** ./lib/context.tsx ***!
  \*************************/
/*! exports provided: AppWrapper, UseAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseAppContext", function() { return UseAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\lib\\context.tsx";

const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
const AppWrapper = ({
  children
}) => {
  const {
    0: selectedTag,
    1: setSelectedTag
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const theme = {
    yellow: '#FDFFB6',
    blue: '#9BF6FF',
    pink: '#FFADAD',
    green: '#CAFFBF',
    gray: '#ADB5BD',
    black: '#212529',
    white: '#FFFFFC'
  };
  const sharedState = {
    selectedTag,
    setSelectedTag,
    theme
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: sharedState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};
const UseAppContext = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api */ "./lib/api.ts");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Category */ "./components/Category/index.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/context */ "./lib/context.tsx");
/* harmony import */ var _components_Article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Article */ "./components/Article/index.tsx");

var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\pages\\index.tsx";







const Home = ({
  posts,
  tags
}) => {
  const {
    selectedTag
  } = Object(_lib_context__WEBPACK_IMPORTED_MODULE_5__["UseAppContext"])();
  debugger;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tags: tags,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
      item: true,
      xs: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_1___default.a, {
        container: true,
        justify: "center",
        spacing: 2,
        children: selectedTag ? posts.filter(post => {
          var _post$tags;

          return (_post$tags = post.tags) === null || _post$tags === void 0 ? void 0 : _post$tags.includes(selectedTag);
        }).map(post => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Article__WEBPACK_IMPORTED_MODULE_6__["default"], {
            post: post
          }, post.slug, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 29
          }, undefined);
        }) : tags.map(tag => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
            posts: posts.filter(post => {
              var _post$tags2;

              return (_post$tags2 = post.tags) === null || _post$tags2 === void 0 ? void 0 : _post$tags2.includes(tag);
            }),
            title: tag
          }, tag, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, undefined);
        }).concat( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
          posts: posts.filter(post => !post.tags),
          title: "Autres"
        }, 'Other', false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 31
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
}; // eslint-disable-next-line @typescript-eslint/require-await


async function getStaticProps() {
  const posts = Object(_lib_api__WEBPACK_IMPORTED_MODULE_2__["getAllPosts"])(['title', 'slug', 'author', 'tags', 'summary']);
  const tags = new Set();
  posts.forEach(post => {
    var _post$tags3;

    (_post$tags3 = post.tags) === null || _post$tags3 === void 0 ? void 0 : _post$tags3.forEach(tag => {
      tags.add(tag);
    });
  });
  return {
    props: {
      posts,
      tags: Array.from(tags)
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcnRpY2xlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGUvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BCYXIudHN4Iiwid2VicGFjazovLy8uL2xpYi9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnRleHQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJmbGV4R3JvdyIsInRhZ0J1dHRvbiIsIm1hcmdpblJpZ2h0IiwiQXJ0aWNsZSIsInBvc3QiLCJzZXRTZWxlY3RlZFRhZyIsIlVzZUFwcENvbnRleHQiLCJjbGFzc2VzIiwic2x1ZyIsInN1bW1hcnkiLCJ0YWdzIiwibWFwIiwidGFnIiwiSG92ZXJhYmxlQ2FyZCIsInN0eWxlZCIsIkNhcmQiLCJVbnN0eWxlZExpbmsiLCJhIiwiQ2F0ZWdvcnkiLCJwb3N0cyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJDYXRlZ29yeVRpdGxlIiwiZGl2IiwiQ2F0ZWdvcnlXcmFwcGVyIiwiUGFwZXIiLCJIZWFkZXIiLCJ3aWR0aCIsImhlaWdodCIsIkxheW91dCIsImNoaWxkcmVuIiwidG9wQmFyIiwiYmFja2dyb3VuZENvbG9yIiwidG9vbEJhciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIlRvcEJhciIsInVuZGVmaW5lZCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJmcyIsInJlYWRkaXJTeW5jIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJzZWxlY3RlZFRhZyIsInVzZVN0YXRlIiwidGhlbWUiLCJ5ZWxsb3ciLCJibHVlIiwicGluayIsImdyZWVuIiwiZ3JheSIsImJsYWNrIiwid2hpdGUiLCJzaGFyZWRTdGF0ZSIsInVzZUNvbnRleHQiLCJIb21lIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjb25jYXQiLCJnZXRTdGF0aWNQcm9wcyIsIlNldCIsImFkZCIsInByb3BzIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNB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Ozs7Ozs7O0FDMURBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcbmltcG9ydCB7IFVzZUFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9saWIvY29udGV4dCc7XHJcbmltcG9ydCB7IEhvdmVyYWJsZUNhcmQsIFVuc3R5bGVkTGluayB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlUHJvcHMge1xyXG4gICAgcG9zdDogUG9zdDtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1pbldpZHRoOiAyNzUsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHRhZ0J1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxNSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe3Bvc3R9OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtzZXRTZWxlY3RlZFRhZ30gPSBVc2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGtleT17cG9zdC5zbHVnfSBpdGVtPlxyXG4gICAgICAgICAgICA8VW5zdHlsZWRMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8SG92ZXJhYmxlQ2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgcG9zdC50YWdzPy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0NoaXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj48YSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9PkxpcmUgbCdhcnRpY2xlPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0hvdmVyYWJsZUNhcmQ+XHJcbiAgICAgICAgICAgIDwvVW5zdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIb3ZlcmFibGVDYXJkID0gc3R5bGVkKENhcmQpYFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9YFxyXG47XHJcblxyXG5leHBvcnQgY29uc3QgVW5zdHlsZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdGVkO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL0FydGljbGUnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeVRpdGxlLCBDYXRlZ29yeVdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgQ2F0ZWdvcnlQcm9wcyB7XHJcbiAgICBwb3N0czogUG9zdFtdO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoe3Bvc3RzLCB0aXRsZX06IENhdGVnb3J5UHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhdGVnb3J5V3JhcHBlciBlbGV2YXRpb249ezN9PlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlUaXRsZT57dGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXRsZS5zbGljZSgxKX08L0NhdGVnb3J5VGl0bGU+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUga2V5PXtwb3N0LnNsdWd9IHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2F0ZWdvcnlXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5OyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlXcmFwcGVyID0gc3R5bGVkKFBhcGVyKWBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIGhlaWdodDonNTAwcHgnfX0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFRvcEJhciBmcm9tICcuL1RvcEJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgTGF5b3V0ID0gKHt0YWdzLCBjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPFRvcEJhciB0YWdzPXt0YWdzfS8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4gKi9cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgVXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL2xpYi9jb250ZXh0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIHRvcEJhcjoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U1OTg5QicsXHJcbiAgICB9LFxyXG4gICAgdG9vbEJhcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0YWdCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogMTUsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgVG9wQmFyUHJvcHMge1xyXG4gICAgdGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFRvcEJhciA9ICh7dGFnc306IFRvcEJhclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7c2V0U2VsZWN0ZWRUYWd9ID0gVXNlQXBwQ29udGV4dCgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcEJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbEJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWcodW5kZWZpbmVkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyOyIsImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcblxyXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3RzJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3Qge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBhdXRob3I/OiBzdHJpbmc7XHJcbiAgICB0YWdzPzogc3RyaW5nW107XHJcbiAgICBjb250ZW50Pzogc3RyaW5nO1xyXG4gICAgc2x1Zz86IHN0cmluZztcclxuICAgIHN1bW1hcnk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0U2x1Z3MoKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnOiBzdHJpbmcsIGZpZWxkczogc3RyaW5nW10gPSBbXSk6IFBvc3Qge1xyXG4gICAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sICcnKTtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7cmVhbFNsdWd9Lm1kYCk7XHJcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4Jyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0ge307XHJcblxyXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCA9PT0gJ3NsdWcnKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGQgPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGFbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2ZpZWxkXSA9IGRhdGFbZmllbGRdIGFzIHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHM6IHN0cmluZ1tdID0gW10pOiBQb3N0W10ge1xyXG4gICAgY29uc3Qgc2x1Z3MgPSBnZXRQb3N0U2x1Z3MoKTtcclxuICAgIGNvbnN0IHBvc3RzID0gc2x1Z3NcclxuICAgICAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpO1xyXG4gICAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0ge1xyXG4gICAgICAgIHllbGxvdzogJyNGREZGQjYnLFxyXG4gICAgICAgIGJsdWU6ICcjOUJGNkZGJyxcclxuICAgICAgICBwaW5rOiAnI0ZGQURBRCcsXHJcbiAgICAgICAgZ3JlZW46ICcjQ0FGRkJGJyxcclxuICAgICAgICBncmF5OiAnI0FEQjVCRCcsXHJcbiAgICAgICAgYmxhY2s6ICcjMjEyNTI5JyxcclxuICAgICAgICB3aGl0ZTogJyNGRkZGRkMnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaGFyZWRTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFRhZyxcclxuICAgICAgICBzZXRTZWxlY3RlZFRhZyxcclxuICAgICAgICB0aGVtZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlQXBwQ29udGV4dCA9ICgpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn07XHJcbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMsIFBvc3QgfSBmcm9tIFwiLi4vbGliL2FwaVwiO1xuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvQ2F0ZWdvcnknO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBVc2VBcHBDb250ZXh0IH0gZnJvbSAnLi4vbGliL2NvbnRleHQnO1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlJztcbmludGVyZmFjZSBIb21lUHJvcHMge1xuICAgIHBvc3RzOiBQb3N0W107XG4gICAgdGFnczogc3RyaW5nW107XG59XG5cbmNvbnN0IEhvbWUgPSAoeyBwb3N0cywgdGFncyB9OiBIb21lUHJvcHMpID0+IHtcbiAgICBjb25zdCB7c2VsZWN0ZWRUYWd9ID0gVXNlQXBwQ29udGV4dCgpO1xuICAgIGRlYnVnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgdGFncz17dGFnc30+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVGFnID8gXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC50YWdzPy5pbmNsdWRlcyhzZWxlY3RlZFRhZykpLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBrZXk9e3Bvc3Quc2x1Z30gcG9zdD17cG9zdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IGtleT17dGFnfSBwb3N0cz17cG9zdHMuZmlsdGVyKChwb3N0OiBQb3N0KSA9PiBwb3N0LnRhZ3M/LmluY2x1ZGVzKHRhZykpfSB0aXRsZT17dGFnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuY29uY2F0KDxDYXRlZ29yeSBrZXk9J090aGVyJyBwb3N0cz17cG9zdHMuZmlsdGVyKChwb3N0OiBQb3N0KSA9PiAhcG9zdC50YWdzKX0gdGl0bGU9J0F1dHJlcycvPil9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9yZXF1aXJlLWF3YWl0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXG4gICAgICAgICd0aXRsZScsXG4gICAgICAgICdzbHVnJyxcbiAgICAgICAgJ2F1dGhvcicsXG4gICAgICAgICd0YWdzJyxcbiAgICAgICAgJ3N1bW1hcnknLFxuICAgIF0pO1xuICAgIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KCk7XG4gICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICBwb3N0LnRhZ3M/LmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgICAgICAgdGFncy5hZGQodGFnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3RzLFxuICAgICAgICAgICAgdGFnczogQXJyYXkuZnJvbSh0YWdzKSxcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NoaXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=