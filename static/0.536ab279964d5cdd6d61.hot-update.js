webpackHotUpdate(0,{

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(59), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(69), React = __webpack_require__(123); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {\n\n'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(123);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _radium = __webpack_require__(279);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nvar _bannerJsx = __webpack_require__(324);\n\nvar _bannerJsx2 = _interopRequireDefault(_bannerJsx);\n\nvar _pathJsx = __webpack_require__(273);\n\nvar _pathJsx2 = _interopRequireDefault(_pathJsx);\n\nvar _styleStyleJsx = __webpack_require__(266);\n\nvar _tabsJsx = __webpack_require__(325);\n\nvar _panelsManagedServicesJsx = __webpack_require__(344);\n\nvar _panelsManagedServicesJsx2 = _interopRequireDefault(_panelsManagedServicesJsx);\n\nvar _panelsCloudServicesJsx = __webpack_require__(345);\n\nvar _panelsCloudServicesJsx2 = _interopRequireDefault(_panelsCloudServicesJsx);\n\nvar _panelsProfessionalServicesJsx = __webpack_require__(346);\n\nvar _panelsProfessionalServicesJsx2 = _interopRequireDefault(_panelsProfessionalServicesJsx);\n\nvar ProductsAndServices = (function (_React$Component) {\n  _inherits(ProductsAndServices, _React$Component);\n\n  function ProductsAndServices(props) {\n    _classCallCheck(this, _ProductsAndServices);\n\n    _get(Object.getPrototypeOf(_ProductsAndServices.prototype), 'constructor', this).call(this, props);\n\n    this.state = { activeTab: 0 };\n    this.selectTab = this.selectTab.bind(this);\n  }\n\n  _createClass(ProductsAndServices, [{\n    key: 'render',\n    value: function render() {\n      var data = {\n        banner: {\n          big: 'Proucts and Services',\n          small: 'Deilvering the promise'\n        },\n        main: {\n          header: 'A collection of Ultimate I.T. solutions and services',\n          paragraphs: 'Jolera has differentiated itself from other I.T. service providers by\\n        its product and service offerings. Realizing that every organization is\\n        unique and every customer\\'s expectations differ, we have worked dilligently\\n        to present customers with an a la carte product and service offering that can\\n        be custom tailored. Our customers range in size from 5 to 37,000 users,\\n        easily attesting to the success of our winning formula.\\n\\n        Our portfolio can be combined to deliver an ultimate I.T. services platform\\n        or can be used as an extension to your I.T. requirements and business strategy.\\n        Be confident in knowing that regardless of what product, service or\\n        department, you are engaging our key traits of performance, reliability,\\n        accountability and value are ingrained.'\n        }\n      };\n\n      return _react2['default'].createElement(\n        'div',\n        { style: [this.props.footerMargin, _styleStyleJsx.greyBackground] },\n        _react2['default'].createElement(_bannerJsx2['default'], { text: data.banner, image: 'img/servers.jpg', wide: this.props.wide }),\n        _react2['default'].createElement(\n          'div',\n          { style: [_styleStyleJsx.max, { padding: '20px' }] },\n          _react2['default'].createElement(\n            'div',\n            { style: [_styleStyleJsx.smallHeader, _styleStyleJsx.textCenter] },\n            data.main.header\n          ),\n          _react2['default'].createElement(\n            'p',\n            null,\n            data.main.paragraphs\n          )\n        ),\n        _react2['default'].createElement(\n          _tabsJsx.Tabs,\n          { activeTab: this.state.activeTab, onSelect: this.selectTab },\n          _react2['default'].createElement(\n            _tabsJsx.Tab,\n            null,\n            _react2['default'].createElement('img', { style: { marginBottom: '20px' }, src: _pathJsx2['default'] + '/img/icons/fork-knife-medium.png' }),\n            _react2['default'].createElement(\n              'div',\n              null,\n              'Managed Services'\n            )\n          ),\n          _react2['default'].createElement(\n            _tabsJsx.Tab,\n            null,\n            _react2['default'].createElement('img', { style: { marginBottom: '20px' }, src: _pathJsx2['default'] + '/img/icons/cloud-medium.png' }),\n            _react2['default'].createElement(\n              'div',\n              null,\n              'Cloud Services'\n            )\n          ),\n          _react2['default'].createElement(\n            _tabsJsx.Tab,\n            null,\n            _react2['default'].createElement('img', { style: { marginBottom: '20px' }, src: _pathJsx2['default'] + '/img/icons/headset-medium.png' }),\n            _react2['default'].createElement(\n              'div',\n              null,\n              'Professional Services'\n            )\n          )\n        ),\n        _react2['default'].createElement(\n          _tabsJsx.TabPanels,\n          { activeTab: this.state.activeTab },\n          _react2['default'].createElement(\n            _tabsJsx.TabPanel,\n            null,\n            _react2['default'].createElement(_panelsManagedServicesJsx2['default'], null)\n          ),\n          _react2['default'].createElement(\n            _tabsJsx.TabPanel,\n            null,\n            _react2['default'].createElement(_panelsCloudServicesJsx2['default'], null)\n          ),\n          _react2['default'].createElement(\n            _tabsJsx.TabPanel,\n            null,\n            _react2['default'].createElement(_panelsProfessionalServicesJsx2['default'], null)\n          )\n        )\n      );\n    }\n  }, {\n    key: 'selectTab',\n    value: function selectTab(i) {\n      this.setState({ activeTab: i });\n    }\n  }]);\n\n  var _ProductsAndServices = ProductsAndServices;\n  ProductsAndServices = (0, _radium2['default'])(ProductsAndServices) || ProductsAndServices;\n  return ProductsAndServices;\n})(_react2['default'].Component);\n\nexports['default'] = ProductsAndServices;\nmodule.exports = exports['default'];\n\n/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(269), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(123))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"products-and-services.jsx\" + \": \" + err.message); } }); } } })(); }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/pages/products-and-services.jsx\n ** module id = 343\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/pages/products-and-services.jsx?");

/***/ }

})