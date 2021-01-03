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


var _jsxFileName = "C:\\Users\\alari\\code\\internet-simple\\components\\Layout.tsx";


const Layout = ({
  tags,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tags: tags
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
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
  const sharedState = {
    selectedTag,
    setSelectedTag
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: sharedState,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
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
            lineNumber: 21,
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
            lineNumber: 26,
            columnNumber: 29
          }, undefined);
        }).concat( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
          posts: posts.filter(post => !post.tags),
          title: "Autres"
        }, 'Other', false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 31
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcnRpY2xlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGUvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9saWIvY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NoaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZsZXhHcm93IiwidGFnQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJBcnRpY2xlIiwicG9zdCIsInNldFNlbGVjdGVkVGFnIiwiVXNlQXBwQ29udGV4dCIsImNsYXNzZXMiLCJzbHVnIiwic3VtbWFyeSIsInRhZ3MiLCJtYXAiLCJ0YWciLCJIb3ZlcmFibGVDYXJkIiwic3R5bGVkIiwiQ2FyZCIsIlVuc3R5bGVkTGluayIsImEiLCJDYXRlZ29yeSIsInBvc3RzIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNhdGVnb3J5VGl0bGUiLCJkaXYiLCJDYXRlZ29yeVdyYXBwZXIiLCJQYXBlciIsIkxheW91dCIsImNoaWxkcmVuIiwidG9wQmFyIiwiYmFja2dyb3VuZENvbG9yIiwidG9vbEJhciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIlRvcEJhciIsInVuZGVmaW5lZCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJmcyIsInJlYWRkaXJTeW5jIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJzZWxlY3RlZFRhZyIsInVzZVN0YXRlIiwic2hhcmVkU3RhdGUiLCJ1c2VDb250ZXh0IiwiSG9tZSIsImZpbHRlciIsImluY2x1ZGVzIiwiY29uY2F0IiwiZ2V0U3RhdGljUHJvcHMiLCJTZXQiLCJhZGQiLCJwcm9wcyIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUMs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c0IsRUFJdEIsTUFKc0IsRUFLdEIsU0FMc0IsQ0FBRCxDQUF6QjtBQU9BLFFBQU05QyxJQUFJLEdBQUcsSUFBSTRELEdBQUosRUFBYjtBQUNBbkQsT0FBSyxDQUFDbUMsT0FBTixDQUFlbEQsSUFBRCxJQUFVO0FBQUE7O0FBQ3BCLG1CQUFBQSxJQUFJLENBQUNNLElBQUwsNERBQVc0QyxPQUFYLENBQW9CMUMsR0FBRCxJQUFTO0FBQ3hCRixVQUFJLENBQUM2RCxHQUFMLENBQVMzRCxHQUFUO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPO0FBQ0g0RCxTQUFLLEVBQUU7QUFDSHJELFdBREc7QUFFSFQsVUFBSSxFQUFFK0QsS0FBSyxDQUFDQyxJQUFOLENBQVdoRSxJQUFYO0FBRkg7QUFESixHQUFQO0FBTUg7QUFFY3VELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDekRBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcbmltcG9ydCB7IFVzZUFwcENvbnRleHQgfSBmcm9tICcuLi8uLi9saWIvY29udGV4dCc7XHJcbmltcG9ydCB7IEhvdmVyYWJsZUNhcmQsIFVuc3R5bGVkTGluayB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmludGVyZmFjZSBBcnRpY2xlUHJvcHMge1xyXG4gICAgcG9zdDogUG9zdDtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIG1pbldpZHRoOiAyNzUsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIHRhZ0J1dHRvbjoge1xyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxNSxcclxuICAgIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEFydGljbGUgPSAoe3Bvc3R9OiBBcnRpY2xlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtzZXRTZWxlY3RlZFRhZ30gPSBVc2VBcHBDb250ZXh0KCk7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGtleT17cG9zdC5zbHVnfSBpdGVtPlxyXG4gICAgICAgICAgICA8VW5zdHlsZWRMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8SG92ZXJhYmxlQ2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGd1dHRlckJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnN1bW1hcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRhZ3MgJiYgcG9zdC50YWdzPy5tYXAoKHRhZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRhZyh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0NoaXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj48YSBocmVmPXtgL3Bvc3RzLyR7cG9zdC5zbHVnfWB9PkxpcmUgbCdhcnRpY2xlPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0hvdmVyYWJsZUNhcmQ+XHJcbiAgICAgICAgICAgIDwvVW5zdHlsZWRMaW5rPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xyXG4iLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIb3ZlcmFibGVDYXJkID0gc3R5bGVkKENhcmQpYFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IC0zcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9YFxyXG47XHJcblxyXG5leHBvcnQgY29uc3QgVW5zdHlsZWRMaW5rID0gc3R5bGVkLmFgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdGVkO1xyXG5gO1xyXG4iLCJpbXBvcnQgeyBQb3N0IH0gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL0FydGljbGUnO1xyXG5pbXBvcnQgeyBDYXRlZ29yeVRpdGxlLCBDYXRlZ29yeVdyYXBwZXIgfSBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG5pbnRlcmZhY2UgQ2F0ZWdvcnlQcm9wcyB7XHJcbiAgICBwb3N0czogUG9zdFtdO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoe3Bvc3RzLCB0aXRsZX06IENhdGVnb3J5UHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhdGVnb3J5V3JhcHBlciBlbGV2YXRpb249ezN9PlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlUaXRsZT57dGl0bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aXRsZS5zbGljZSgxKX08L0NhdGVnb3J5VGl0bGU+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUga2V5PXtwb3N0LnNsdWd9IHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2F0ZWdvcnlXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5OyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhdGVnb3J5VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlXcmFwcGVyID0gc3R5bGVkKFBhcGVyKWBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmA7IiwiaW1wb3J0IFRvcEJhciBmcm9tICcuL1RvcEJhcic7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe3RhZ3MsIGNoaWxkcmVufSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VG9wQmFyIHRhZ3M9e3RhZ3N9Lz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuICovXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCB7IFVzZUFwcENvbnRleHQgfSBmcm9tICcuLi9saWIvY29udGV4dCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICB0b3BCYXI6IHtcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFNTk4OUInLFxyXG4gICAgfSxcclxuICAgIHRvb2xCYXI6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICB9LFxyXG4gICAgdGFnQnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDE1LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIFRvcEJhclByb3BzIHtcclxuICAgIHRhZ3M6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBUb3BCYXIgPSAoe3RhZ3N9OiBUb3BCYXJQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3NldFNlbGVjdGVkVGFnfSA9IFVzZUFwcENvbnRleHQoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy50b3BCYXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFnKHVuZGVmaW5lZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICAgIDwvQXBwQmFyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjsiLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xyXG5cclxuY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBqb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3N0IHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgYXV0aG9yPzogc3RyaW5nO1xyXG4gICAgdGFncz86IHN0cmluZ1tdO1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIHNsdWc/OiBzdHJpbmc7XHJcbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdFNsdWdzKCkge1xyXG4gICAgcmV0dXJuIGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RCeVNsdWcoc2x1Zzogc3RyaW5nLCBmaWVsZHM6IHN0cmluZ1tdID0gW10pOiBQb3N0IHtcclxuICAgIGNvbnN0IHJlYWxTbHVnID0gc2x1Zy5yZXBsYWNlKC9cXC5tZCQvLCAnJyk7XHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IGpvaW4ocG9zdHNEaXJlY3RvcnksIGAke3JlYWxTbHVnfS5tZGApO1xyXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xyXG4gICAgY29uc3QgeyBkYXRhLCBjb250ZW50IH0gPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IHt9O1xyXG5cclxuICAvLyBFbnN1cmUgb25seSB0aGUgbWluaW1hbCBuZWVkZWQgZGF0YSBpcyBleHBvc2VkXHJcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQgPT09ICdzbHVnJykge1xyXG4gICAgICAgICAgICBpdGVtc1tmaWVsZF0gPSByZWFsU2x1ZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgaXRlbXNbZmllbGRdID0gY29udGVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICBpdGVtc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1zO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoZmllbGRzOiBzdHJpbmdbXSA9IFtdKTogUG9zdFtdIHtcclxuICAgIGNvbnN0IHNsdWdzID0gZ2V0UG9zdFNsdWdzKCk7XHJcbiAgICBjb25zdCBwb3N0cyA9IHNsdWdzXHJcbiAgICAgICAgLm1hcCgoc2x1ZykgPT4gZ2V0UG9zdEJ5U2x1ZyhzbHVnLCBmaWVsZHMpKTtcclxuICAgIHJldHVybiBwb3N0cztcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcFdyYXBwZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBzaGFyZWRTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFRhZyxcclxuICAgICAgICBzZXRTZWxlY3RlZFRhZyxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VBcHBDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufTtcclxuIiwiaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IGdldEFsbFBvc3RzLCBQb3N0IH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4uL2NvbXBvbmVudHMvQ2F0ZWdvcnknO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgVXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL2xpYi9jb250ZXh0JztcclxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vY29tcG9uZW50cy9BcnRpY2xlJztcclxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XHJcbiAgICBwb3N0czogUG9zdFtdO1xyXG4gICAgdGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBwb3N0cywgdGFncyB9OiBIb21lUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHtzZWxlY3RlZFRhZ30gPSBVc2VBcHBDb250ZXh0KCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgdGFncz17dGFnc30+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkVGFnID8gXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMuZmlsdGVyKChwb3N0KSA9PiBwb3N0LnRhZ3M/LmluY2x1ZGVzKHNlbGVjdGVkVGFnKSkubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBrZXk9e3Bvc3Quc2x1Z30gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pIDpcclxuICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBrZXk9e3RhZ30gcG9zdHM9e3Bvc3RzLmZpbHRlcigocG9zdDogUG9zdCkgPT4gcG9zdC50YWdzPy5pbmNsdWRlcyh0YWcpKX0gdGl0bGU9e3RhZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5jb25jYXQoPENhdGVnb3J5IGtleT0nT3RoZXInIHBvc3RzPXtwb3N0cy5maWx0ZXIoKHBvc3Q6IFBvc3QpID0+ICFwb3N0LnRhZ3MpfSB0aXRsZT0nQXV0cmVzJy8+KX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcmVxdWlyZS1hd2FpdFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcclxuICAgICAgICAndGl0bGUnLFxyXG4gICAgICAgICdzbHVnJyxcclxuICAgICAgICAnYXV0aG9yJyxcclxuICAgICAgICAndGFncycsXHJcbiAgICAgICAgJ3N1bW1hcnknLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCB0YWdzID0gbmV3IFNldCgpO1xyXG4gICAgcG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xyXG4gICAgICAgIHBvc3QudGFncz8uZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgIHRhZ3MuYWRkKHRhZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdHMsXHJcbiAgICAgICAgICAgIHRhZ3M6IEFycmF5LmZyb20odGFncyksXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9