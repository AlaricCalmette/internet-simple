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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcnRpY2xlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FydGljbGUvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vbGliL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9saWIvY29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NoaXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZsZXhHcm93IiwidGFnQnV0dG9uIiwibWFyZ2luUmlnaHQiLCJBcnRpY2xlIiwicG9zdCIsInNldFNlbGVjdGVkVGFnIiwiVXNlQXBwQ29udGV4dCIsImNsYXNzZXMiLCJzbHVnIiwic3VtbWFyeSIsInRhZ3MiLCJtYXAiLCJ0YWciLCJIb3ZlcmFibGVDYXJkIiwic3R5bGVkIiwiQ2FyZCIsIlVuc3R5bGVkTGluayIsImEiLCJDYXRlZ29yeSIsInBvc3RzIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNhdGVnb3J5VGl0bGUiLCJkaXYiLCJDYXRlZ29yeVdyYXBwZXIiLCJQYXBlciIsIkxheW91dCIsImNoaWxkcmVuIiwidG9wQmFyIiwiYmFja2dyb3VuZENvbG9yIiwidG9vbEJhciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIlRvcEJhciIsInVuZGVmaW5lZCIsInBvc3RzRGlyZWN0b3J5Iiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJnZXRQb3N0U2x1Z3MiLCJmcyIsInJlYWRkaXJTeW5jIiwiZ2V0UG9zdEJ5U2x1ZyIsImZpZWxkcyIsInJlYWxTbHVnIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwiZGF0YSIsImNvbnRlbnQiLCJtYXR0ZXIiLCJpdGVtcyIsImZvckVhY2giLCJmaWVsZCIsImdldEFsbFBvc3RzIiwic2x1Z3MiLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJzZWxlY3RlZFRhZyIsInVzZVN0YXRlIiwidGhlbWUiLCJ5ZWxsb3ciLCJibHVlIiwicGluayIsImdyZWVuIiwiZ3JheSIsImJsYWNrIiwid2hpdGUiLCJzaGFyZWRTdGF0ZSIsInVzZUNvbnRleHQiLCJIb21lIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJjb25jYXQiLCJnZXRTdGF0aWNQcm9wcyIsIlNldCIsImFkZCIsInByb3BzIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxPQUFPO0FBQ2hDQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFLEdBRFI7QUFFRkMsZ0JBQVksRUFBRTtBQUZaLEdBRDBCO0FBS2hDQyxPQUFLLEVBQUU7QUFDSEMsWUFBUSxFQUFFO0FBRFAsR0FMeUI7QUFRaENDLFdBQVMsRUFBRTtBQUNQQyxlQUFXLEVBQUU7QUFETjtBQVJxQixDQUFQLENBQUQsQ0FBNUI7O0FBYUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQTBCO0FBQUE7O0FBQ3RDLFFBQU07QUFBQ0M7QUFBRCxNQUFtQkMsa0VBQWEsRUFBdEM7QUFDQSxRQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFDQSxzQkFDSSxxRUFBQyw2REFBRDtBQUFzQixRQUFJLE1BQTFCO0FBQUEsMkJBQ0kscUVBQUMsb0RBQUQ7QUFBYyxVQUFJLEVBQUcsVUFBU1UsSUFBSSxDQUFDSSxJQUFLLEVBQXhDO0FBQUEsNkJBQ0kscUVBQUMscURBQUQ7QUFBZSxpQkFBUyxFQUFFRCxPQUFPLENBQUNYLElBQWxDO0FBQUEsZ0NBQ0kscUVBQUMsb0VBQUQ7QUFBQSxrQ0FDSSxxRUFBQyxtRUFBRDtBQUFZLHFCQUFTLEVBQUVXLE9BQU8sQ0FBQ1IsS0FBL0I7QUFBc0MsaUJBQUssRUFBQyxlQUE1QztBQUE0RCx3QkFBWSxNQUF4RTtBQUFBLHNCQUNLSyxJQUFJLENBQUNMO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUlLSyxJQUFJLENBQUNLLE9BSlYsRUFLS0wsSUFBSSxDQUFDTSxJQUFMLG1CQUFhTixJQUFJLENBQUNNLElBQWxCLCtDQUFhLFdBQVdDLEdBQVgsQ0FBZ0JDLEdBQUQsSUFBUztBQUNsQyxnQ0FDSSxxRUFBQyw2REFBRDtBQUVBLHVCQUFTLEVBQUVMLE9BQU8sQ0FBQ04sU0FGbkI7QUFHQSxtQkFBSyxFQUFFVyxHQUhQLENBSUE7QUFKQTtBQUtBLHFCQUFPLEVBQUUsTUFBTVAsY0FBYyxDQUFDTyxHQUFEO0FBTDdCLGVBQ0tBLEdBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQVNILFdBVmEsQ0FBYixDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQWtCSSxxRUFBQyxvRUFBRDtBQUFBLGlDQUNJLHFFQUFDLCtEQUFEO0FBQVEsZ0JBQUksRUFBQyxPQUFiO0FBQUEsbUNBQXFCO0FBQUcsa0JBQUksRUFBRyxVQUFTUixJQUFJLENBQUNJLElBQUssRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixLQUFXSixJQUFJLENBQUNJLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTRCSCxDQS9CRDs7QUFpQ2VMLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNVSxhQUFhLEdBQUdDLHdEQUFNLENBQUNDLHNEQUFELENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0EsTUFKTztBQU9BLE1BQU1DLFlBQVksR0FBR0Ysd0RBQU0sQ0FBQ0csQ0FBRTtBQUNyQztBQUNBO0FBQ0EsQ0FITyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7QUFDQTs7QUFPQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQztBQUFDQyxPQUFEO0FBQVFwQjtBQUFSLENBQUQsS0FBbUM7QUFDaEQsc0JBQ0kscUVBQUMsdURBQUQ7QUFBaUIsYUFBUyxFQUFFLENBQTVCO0FBQUEsNEJBQ0kscUVBQUMscURBQUQ7QUFBQSxnQkFBZ0JBLEtBQUssQ0FBQ3FCLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixLQUFnQ3RCLEtBQUssQ0FBQ3VCLEtBQU4sQ0FBWSxDQUFaO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLGdCQUNLSCxLQUFLLENBQUNSLEdBQU4sQ0FBV1AsSUFBRCxJQUFVO0FBQ2pCLDRCQUNJLHFFQUFDLGdEQUFEO0FBQXlCLGNBQUksRUFBRUE7QUFBL0IsV0FBY0EsSUFBSSxDQUFDSSxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBR0gsT0FKQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWJEOztBQWVlVSx1RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUssYUFBYSxHQUFHVCx3REFBTSxDQUFDVSxHQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU1DLGVBQWUsR0FBR1gsd0RBQU0sQ0FBQ1ksOERBQUQsQ0FBUTtBQUM3QztBQUNBO0FBQ0EsQ0FITyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYlA7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBQ2pCLE1BQUQ7QUFBT2tCO0FBQVAsQ0FBRCxLQUFzQjtBQUNqQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLCtDQUFEO0FBQVEsVUFBSSxFQUFFbEI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFDS2tCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURKO0FBUUgsQ0FURDs7QUFXZUQscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWpDLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxPQUFPO0FBQ2hDa0MsUUFBTSxFQUFFO0FBQ0ovQixnQkFBWSxFQUFFLEVBRFY7QUFFSmdDLG1CQUFlLEVBQUU7QUFGYixHQUR3QjtBQUtoQ0MsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxNQURKO0FBRUxDLGtCQUFjLEVBQUU7QUFGWCxHQUx1QjtBQVNoQ2hDLFdBQVMsRUFBRTtBQUNQQyxlQUFXLEVBQUU7QUFETjtBQVRxQixDQUFQLENBQUQsQ0FBNUI7O0FBa0JBLE1BQU1nQyxNQUFNLEdBQUcsQ0FBQztBQUFDeEI7QUFBRCxDQUFELEtBQXlCO0FBQ3BDLFFBQU07QUFBQ0w7QUFBRCxNQUFtQkMsa0VBQWEsRUFBdEM7QUFDQSxRQUFNQyxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFDQSxzQkFDSSxxRUFBQywrREFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUEwQixhQUFTLEVBQUVhLE9BQU8sQ0FBQ3NCLE1BQTdDO0FBQUEsMkJBQ1EscUVBQUMsZ0VBQUQ7QUFBUyxlQUFTLEVBQUV0QixPQUFPLENBQUN3QixPQUE1QjtBQUFBLGlCQUNLckIsSUFBSSxDQUFDQyxHQUFMLENBQVNDLEdBQUcsaUJBQ1QscUVBQUMsK0RBQUQ7QUFDSSxpQkFBUyxFQUFFTCxPQUFPLENBQUNOLFNBRHZCO0FBRUksZUFBTyxFQUFDLFdBRlo7QUFJSSxlQUFPLEVBQUUsTUFBTUksY0FBYyxDQUFDTyxHQUFELENBSmpDO0FBQUEsa0JBTUtBO0FBTkwsU0FHU0EsR0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURILENBREwsZUFXSSxxRUFBQywrREFBRDtBQUNJLGlCQUFTLEVBQUVMLE9BQU8sQ0FBQ04sU0FEdkI7QUFFSSxlQUFPLEVBQUMsV0FGWjtBQUlJLGVBQU8sRUFBRSxNQUFNSSxjQUFjLENBQUM4QixTQUFELENBSmpDO0FBQUE7QUFBQSxTQUdRLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3QkgsQ0EzQkQ7O0FBNkJlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNRSxjQUFjLEdBQUdDLGlEQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixFQUFELEVBQWdCLE9BQWhCLENBQTNCO0FBV08sU0FBU0MsWUFBVCxHQUF3QjtBQUMzQixTQUFPQyx5Q0FBRSxDQUFDQyxXQUFILENBQWVOLGNBQWYsQ0FBUDtBQUNIO0FBRU0sU0FBU08sYUFBVCxDQUF1Qm5DLElBQXZCLEVBQXFDb0MsTUFBZ0IsR0FBRyxFQUF4RCxFQUFrRTtBQUNyRSxRQUFNQyxRQUFRLEdBQUdyQyxJQUFJLENBQUNzQyxPQUFMLENBQWEsT0FBYixFQUFzQixFQUF0QixDQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBR1YsaURBQUksQ0FBQ0QsY0FBRCxFQUFrQixHQUFFUyxRQUFTLEtBQTdCLENBQXJCO0FBQ0EsUUFBTUcsWUFBWSxHQUFHUCx5Q0FBRSxDQUFDUSxZQUFILENBQWdCRixRQUFoQixFQUEwQixNQUExQixDQUFyQjtBQUNBLFFBQU07QUFBRUcsUUFBRjtBQUFRQztBQUFSLE1BQW9CQyxrREFBTSxDQUFDSixZQUFELENBQWhDO0FBRUEsUUFBTUssS0FBSyxHQUFHLEVBQWQsQ0FOcUUsQ0FRdkU7O0FBQ0VULFFBQU0sQ0FBQ1UsT0FBUCxDQUFnQkMsS0FBRCxJQUFXO0FBQ3RCLFFBQUlBLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ2xCRixXQUFLLENBQUNFLEtBQUQsQ0FBTCxHQUFlVixRQUFmO0FBQ0g7O0FBQ0QsUUFBSVUsS0FBSyxLQUFLLFNBQWQsRUFBeUI7QUFDckJGLFdBQUssQ0FBQ0UsS0FBRCxDQUFMLEdBQWVKLE9BQWY7QUFDSDs7QUFFRCxRQUFJRCxJQUFJLENBQUNLLEtBQUQsQ0FBUixFQUFpQjtBQUNiRixXQUFLLENBQUNFLEtBQUQsQ0FBTCxHQUFlTCxJQUFJLENBQUNLLEtBQUQsQ0FBbkI7QUFDSDtBQUNKLEdBWEQ7QUFhQSxTQUFPRixLQUFQO0FBQ0g7QUFFTSxTQUFTRyxXQUFULENBQXFCWixNQUFnQixHQUFHLEVBQXhDLEVBQW9EO0FBQ3ZELFFBQU1hLEtBQUssR0FBR2pCLFlBQVksRUFBMUI7QUFDQSxRQUFNckIsS0FBSyxHQUFHc0MsS0FBSyxDQUNkOUMsR0FEUyxDQUNKSCxJQUFELElBQVVtQyxhQUFhLENBQUNuQyxJQUFELEVBQU9vQyxNQUFQLENBRGxCLENBQWQ7QUFFQSxTQUFPekIsS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERDtBQUVBLE1BQU11QyxVQUFVLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBaEM7QUFFTyxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFDaEM7QUFBRCxDQUFELEtBQWdCO0FBQ3RDLFFBQU07QUFBQSxPQUFDaUMsV0FBRDtBQUFBLE9BQWN4RDtBQUFkLE1BQWdDeUQsc0RBQVEsQ0FBQyxJQUFELENBQTlDO0FBRUEsUUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLFVBQU0sRUFBRSxTQURFO0FBRVZDLFFBQUksRUFBRSxTQUZJO0FBR1ZDLFFBQUksRUFBRSxTQUhJO0FBSVZDLFNBQUssRUFBRSxTQUpHO0FBS1ZDLFFBQUksRUFBRSxTQUxJO0FBTVZDLFNBQUssRUFBRSxTQU5HO0FBT1ZDLFNBQUssRUFBRTtBQVBHLEdBQWQ7QUFVQSxRQUFNQyxXQUFXLEdBQUc7QUFDaEJWLGVBRGdCO0FBRWhCeEQsa0JBRmdCO0FBR2hCMEQ7QUFIZ0IsR0FBcEI7QUFNQSxzQkFDSSxxRUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUVRLFdBQTVCO0FBQUEsY0FDUzNDO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F4Qk07QUEwQkEsTUFBTXRCLGFBQWEsR0FBRyxNQUFNO0FBQy9CO0FBQ0EsU0FBT2tFLHdEQUFVLENBQUNkLFVBQUQsQ0FBakI7QUFDSCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLE1BQU1lLElBQUksR0FBRyxDQUFDO0FBQUV0RCxPQUFGO0FBQVNUO0FBQVQsQ0FBRCxLQUFnQztBQUN6QyxRQUFNO0FBQUNtRDtBQUFELE1BQWdCdkQsa0VBQWEsRUFBbkM7QUFDQSxzQkFDSSxxRUFBQywwREFBRDtBQUFRLFFBQUksRUFBRUksSUFBZDtBQUFBLDJCQUNJLHFFQUFDLDZEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBQSw2QkFDSSxxRUFBQyw2REFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBZ0IsZUFBTyxFQUFDLFFBQXhCO0FBQWlDLGVBQU8sRUFBRSxDQUExQztBQUFBLGtCQUNLbUQsV0FBVyxHQUNaMUMsS0FBSyxDQUFDdUQsTUFBTixDQUFjdEUsSUFBRDtBQUFBOztBQUFBLCtCQUFVQSxJQUFJLENBQUNNLElBQWYsK0NBQVUsV0FBV2lFLFFBQVgsQ0FBb0JkLFdBQXBCLENBQVY7QUFBQSxTQUFiLEVBQXlEbEQsR0FBekQsQ0FBOERQLElBQUQsSUFBVTtBQUNuRSw4QkFDSSxxRUFBQywyREFBRDtBQUF5QixnQkFBSSxFQUFFQTtBQUEvQixhQUFjQSxJQUFJLENBQUNJLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREo7QUFHSCxTQUpELENBRFksR0FNWkUsSUFBSSxDQUFDQyxHQUFMLENBQVVDLEdBQUQsSUFBaUI7QUFDdEIsOEJBQ0kscUVBQUMsNERBQUQ7QUFBb0IsaUJBQUssRUFBRU8sS0FBSyxDQUFDdUQsTUFBTixDQUFjdEUsSUFBRDtBQUFBOztBQUFBLG9DQUFnQkEsSUFBSSxDQUFDTSxJQUFyQixnREFBZ0IsWUFBV2lFLFFBQVgsQ0FBb0IvRCxHQUFwQixDQUFoQjtBQUFBLGFBQWIsQ0FBM0I7QUFBbUYsaUJBQUssRUFBRUE7QUFBMUYsYUFBZUEsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKO0FBR0gsU0FKRCxFQUlHZ0UsTUFKSCxlQUlVLHFFQUFDLDREQUFEO0FBQXNCLGVBQUssRUFBRXpELEtBQUssQ0FBQ3VELE1BQU4sQ0FBY3RFLElBQUQsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDTSxJQUFuQyxDQUE3QjtBQUF1RSxlQUFLLEVBQUM7QUFBN0UsV0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSlY7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1CSCxDQXJCRCxDLENBdUJBOzs7QUFDTyxlQUFlbUUsY0FBZixHQUFnQztBQUNuQyxRQUFNMUQsS0FBSyxHQUFHcUMsNERBQVcsQ0FBQyxDQUN0QixPQURzQixFQUV0QixNQUZzQixFQUd0QixRQUhzQixFQUl0QixNQUpzQixFQUt0QixTQUxzQixDQUFELENBQXpCO0FBT0EsUUFBTTlDLElBQUksR0FBRyxJQUFJb0UsR0FBSixFQUFiO0FBQ0EzRCxPQUFLLENBQUNtQyxPQUFOLENBQWVsRCxJQUFELElBQVU7QUFBQTs7QUFDcEIsbUJBQUFBLElBQUksQ0FBQ00sSUFBTCw0REFBVzRDLE9BQVgsQ0FBb0IxQyxHQUFELElBQVM7QUFDeEJGLFVBQUksQ0FBQ3FFLEdBQUwsQ0FBU25FLEdBQVQ7QUFDSCxLQUZEO0FBR0gsR0FKRDtBQUtBLFNBQU87QUFDSG9FLFNBQUssRUFBRTtBQUNIN0QsV0FERztBQUVIVCxVQUFJLEVBQUV1RSxLQUFLLENBQUNDLElBQU4sQ0FBV3hFLElBQVg7QUFGSDtBQURKLEdBQVA7QUFNSDtBQUVjK0QsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6REEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi9saWIvYXBpJztcclxuaW1wb3J0IHsgVXNlQXBwQ29udGV4dCB9IGZyb20gJy4uLy4uL2xpYi9jb250ZXh0JztcclxuaW1wb3J0IHsgSG92ZXJhYmxlQ2FyZCwgVW5zdHlsZWRMaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xyXG5cclxuaW50ZXJmYWNlIEFydGljbGVQcm9wcyB7XHJcbiAgICBwb3N0OiBQb3N0O1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCgpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgICAgbWluV2lkdGg6IDI3NSxcclxuICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgdGFnQnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDE1LFxyXG4gICAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQXJ0aWNsZSA9ICh7cG9zdH06IEFydGljbGVQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qge3NldFNlbGVjdGVkVGFnfSA9IFVzZUFwcENvbnRleHQoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEdyaWQga2V5PXtwb3N0LnNsdWd9IGl0ZW0+XHJcbiAgICAgICAgICAgIDxVbnN0eWxlZExpbmsgaHJlZj17YC9wb3N0cy8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxIb3ZlcmFibGVDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3VtbWFyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGFncyAmJiBwb3N0LnRhZ3M/Lm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRhZ0J1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkVGFnKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQ2hpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPjxhIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+TGlyZSBsJ2FydGljbGU8L2E+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDwvSG92ZXJhYmxlQ2FyZD5cclxuICAgICAgICAgICAgPC9VbnN0eWxlZExpbms+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XHJcbiIsImltcG9ydCB7IENhcmQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvdmVyYWJsZUNhcmQgPSBzdHlsZWQoQ2FyZClgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggLTNweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1gXHJcbjtcclxuXHJcbmV4cG9ydCBjb25zdCBVbnN0eWxlZExpbmsgPSBzdHlsZWQuYWBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0ZWQ7XHJcbmA7XHJcbiIsImltcG9ydCB7IFBvc3QgfSBmcm9tICcuLi8uLi9saWIvYXBpJztcclxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vQXJ0aWNsZSc7XHJcbmltcG9ydCB7IENhdGVnb3J5VGl0bGUsIENhdGVnb3J5V3JhcHBlciB9IGZyb20gJy4vc3R5bGVzJztcclxuXHJcbmludGVyZmFjZSBDYXRlZ29yeVByb3BzIHtcclxuICAgIHBvc3RzOiBQb3N0W107XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICh7cG9zdHMsIHRpdGxlfTogQ2F0ZWdvcnlQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2F0ZWdvcnlXcmFwcGVyIGVsZXZhdGlvbj17M30+XHJcbiAgICAgICAgICAgIDxDYXRlZ29yeVRpdGxlPnt0aXRsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRpdGxlLnNsaWNlKDEpfTwvQ2F0ZWdvcnlUaXRsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBrZXk9e3Bvc3Quc2x1Z30gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXRlZ29yeVdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnlUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXRlZ29yeVdyYXBwZXIgPSBzdHlsZWQoUGFwZXIpYFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuYDsiLCJpbXBvcnQgVG9wQmFyIGZyb20gJy4vVG9wQmFyJztcclxuXHJcbmNvbnN0IExheW91dCA9ICh7dGFncywgY2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUb3BCYXIgdGFncz17dGFnc30vPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm4gKi9cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHsgVXNlQXBwQ29udGV4dCB9IGZyb20gJy4uL2xpYi9jb250ZXh0JztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcclxuICAgIHRvcEJhcjoge1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMzAsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0U1OTg5QicsXHJcbiAgICB9LFxyXG4gICAgdG9vbEJhcjoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcidcclxuICAgIH0sXHJcbiAgICB0YWdCdXR0b246IHtcclxuICAgICAgICBtYXJnaW5SaWdodDogMTUsXHJcbiAgICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgVG9wQmFyUHJvcHMge1xyXG4gICAgdGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFRvcEJhciA9ICh7dGFnc306IFRvcEJhclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7c2V0U2VsZWN0ZWRUYWd9ID0gVXNlQXBwQ29udGV4dCgpO1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvcEJhcn0+XHJcbiAgICAgICAgICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMudG9vbEJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZ3MubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWdCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWcodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGFnQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUYWcodW5kZWZpbmVkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9BcHBCYXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyOyIsImltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcblxyXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3Bvc3RzJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3Qge1xyXG4gICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICBhdXRob3I/OiBzdHJpbmc7XHJcbiAgICB0YWdzPzogc3RyaW5nW107XHJcbiAgICBjb250ZW50Pzogc3RyaW5nO1xyXG4gICAgc2x1Zz86IHN0cmluZztcclxuICAgIHN1bW1hcnk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0U2x1Z3MoKSB7XHJcbiAgICByZXR1cm4gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdEJ5U2x1ZyhzbHVnOiBzdHJpbmcsIGZpZWxkczogc3RyaW5nW10gPSBbXSk6IFBvc3Qge1xyXG4gICAgY29uc3QgcmVhbFNsdWcgPSBzbHVnLnJlcGxhY2UoL1xcLm1kJC8sICcnKTtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7cmVhbFNsdWd9Lm1kYCk7XHJcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGY4Jyk7XHJcbiAgICBjb25zdCB7IGRhdGEsIGNvbnRlbnQgfSA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0ge307XHJcblxyXG4gIC8vIEVuc3VyZSBvbmx5IHRoZSBtaW5pbWFsIG5lZWRlZCBkYXRhIGlzIGV4cG9zZWRcclxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCA9PT0gJ3NsdWcnKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2ZpZWxkXSA9IHJlYWxTbHVnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGQgPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICBpdGVtc1tmaWVsZF0gPSBjb250ZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGFbZmllbGRdKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zW2ZpZWxkXSA9IGRhdGFbZmllbGRdIGFzIHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaXRlbXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0cyhmaWVsZHM6IHN0cmluZ1tdID0gW10pOiBQb3N0W10ge1xyXG4gICAgY29uc3Qgc2x1Z3MgPSBnZXRQb3N0U2x1Z3MoKTtcclxuICAgIGNvbnN0IHBvc3RzID0gc2x1Z3NcclxuICAgICAgICAubWFwKChzbHVnKSA9PiBnZXRQb3N0QnlTbHVnKHNsdWcsIGZpZWxkcykpO1xyXG4gICAgcmV0dXJuIHBvc3RzO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwV3JhcHBlciA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0ge1xyXG4gICAgICAgIHllbGxvdzogJyNGREZGQjYnLFxyXG4gICAgICAgIGJsdWU6ICcjOUJGNkZGJyxcclxuICAgICAgICBwaW5rOiAnI0ZGQURBRCcsXHJcbiAgICAgICAgZ3JlZW46ICcjQ0FGRkJGJyxcclxuICAgICAgICBncmF5OiAnI0FEQjVCRCcsXHJcbiAgICAgICAgYmxhY2s6ICcjMjEyNTI5JyxcclxuICAgICAgICB3aGl0ZTogJyNGRkZGRkMnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzaGFyZWRTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFRhZyxcclxuICAgICAgICBzZXRTZWxlY3RlZFRhZyxcclxuICAgICAgICB0aGVtZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hhcmVkU3RhdGV9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlQXBwQ29udGV4dCA9ICgpID0+IHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn07XHJcbiIsImltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBnZXRBbGxQb3N0cywgUG9zdCB9IGZyb20gXCIuLi9saWIvYXBpXCI7XHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3J5JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IFVzZUFwcENvbnRleHQgfSBmcm9tICcuLi9saWIvY29udGV4dCc7XHJcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XHJcbmludGVyZmFjZSBIb21lUHJvcHMge1xyXG4gICAgcG9zdHM6IFBvc3RbXTtcclxuICAgIHRhZ3M6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBIb21lID0gKHsgcG9zdHMsIHRhZ3MgfTogSG9tZVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7c2VsZWN0ZWRUYWd9ID0gVXNlQXBwQ29udGV4dCgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHRhZ3M9e3RhZ3N9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFRhZyA/IFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC50YWdzPy5pbmNsdWRlcyhzZWxlY3RlZFRhZykpLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFydGljbGUga2V5PXtwb3N0LnNsdWd9IHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkga2V5PXt0YWd9IHBvc3RzPXtwb3N0cy5maWx0ZXIoKHBvc3Q6IFBvc3QpID0+IHBvc3QudGFncz8uaW5jbHVkZXModGFnKSl9IHRpdGxlPXt0YWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY29uY2F0KDxDYXRlZ29yeSBrZXk9J090aGVyJyBwb3N0cz17cG9zdHMuZmlsdGVyKChwb3N0OiBQb3N0KSA9PiAhcG9zdC50YWdzKX0gdGl0bGU9J0F1dHJlcycvPil9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3JlcXVpcmUtYXdhaXRcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgcG9zdHMgPSBnZXRBbGxQb3N0cyhbXHJcbiAgICAgICAgJ3RpdGxlJyxcclxuICAgICAgICAnc2x1ZycsXHJcbiAgICAgICAgJ2F1dGhvcicsXHJcbiAgICAgICAgJ3RhZ3MnLFxyXG4gICAgICAgICdzdW1tYXJ5JyxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgdGFncyA9IG5ldyBTZXQoKTtcclxuICAgIHBvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcclxuICAgICAgICBwb3N0LnRhZ3M/LmZvckVhY2goKHRhZykgPT4ge1xyXG4gICAgICAgICAgICB0YWdzLmFkZCh0YWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3RzLFxyXG4gICAgICAgICAgICB0YWdzOiBBcnJheS5mcm9tKHRhZ3MpLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==