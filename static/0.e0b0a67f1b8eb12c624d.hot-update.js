webpackHotUpdate(0,{

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(59), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(69), React = __webpack_require__(123); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {\n\n'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _qwest = __webpack_require__(360);\n\nvar _qwest2 = _interopRequireDefault(_qwest);\n\nvar headers = { 'Accept': 'application/json;odata=verbose' };\n\nvar getItems = function getItems(listName, options, items) {\n  var site = options && options.site && '/' + options.site || '';\n\n  if (options) {\n    var optionsString = Object.keys(options).map(function (key) {\n      if (key !== 'site') {\n        return '$' + key + '=' + options[key];\n      }\n    }).join('&');\n  } else optionsString = '';\n\n  return _qwest2['default'].get(site + '/_api/web/lists/getByTitle(\\'' + listName + '\\')/items?' + optionsString, null, { headers: headers }).then(function (response) {\n\n    var data = JSON.parse(response.response);\n    items = items.concat(data.d.results);\n\n    console.log(items);\n\n    // if (response.data.d.__next && !options.top) {\n    //   return getItemsByUrl(response.data.d.__next, items)\n    // }\n\n    // else return items\n\n    return items;\n  });\n};\n\nexports.getItems = getItems;\n\n/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(269), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(123))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"list.jsx\" + \": \" + err.message); } }); } } })(); }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/sharepoint-services/list.jsx\n ** module id = 359\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/sharepoint-services/list.jsx?");

/***/ }

})