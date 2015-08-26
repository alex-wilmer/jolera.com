webpackHotUpdate(0,{

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(59), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(69), React = __webpack_require__(123); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {\n\n'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(123);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _radium = __webpack_require__(279);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nvar _objectAssign = __webpack_require__(267);\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _styleStyleConstsJsx = __webpack_require__(268);\n\nvar _styleStyleJsx = __webpack_require__(266);\n\nvar _pathJsx = __webpack_require__(273);\n\nvar _pathJsx2 = _interopRequireDefault(_pathJsx);\n\nvar OurServices = (function (_React$Component) {\n  _inherits(OurServices, _React$Component);\n\n  function OurServices() {\n    _classCallCheck(this, _OurServices);\n\n    _get(Object.getPrototypeOf(_OurServices.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(OurServices, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n\n      var wrapper = (0, _objectAssign2['default'])({}, _styleStyleJsx.textCenter, {\n        margin: _styleStyleConstsJsx.SPACING + 30 + 'px 0 ' + _styleStyleConstsJsx.SPACING + 'px'\n      });\n\n      var tileBaseStyle = {\n        width: this.props.wide ? 'calc(33.33% - ' + (_styleStyleConstsJsx.SPACING - 6) + 'px) ' : '300px',\n        minHeight: this.props.wide ? '295px' : '300px',\n        backgroundColor: 'white',\n        padding: '20px',\n        color: '' + _styleStyleConstsJsx.BLUE\n      };\n\n      tileBaseStyle = this.props.wide ? (0, _objectAssign2['default'])({}, tileBaseStyle, { float: 'left' }) : (0, _objectAssign2['default'])({}, tileBaseStyle, { display: 'block', margin: '0 auto' });\n\n      var data = [{\n        title: 'Managed Services',\n        description: 'Providing complete peace of mind, care and support for all your\\n          infrastructure elements',\n        slogan: 'Experience Tranquility',\n        icon: _pathJsx2['default'] + '/img/icons/forkknife-service.png'\n      }, {\n        title: 'Cloud Services',\n        description: 'Leveraging our dedicated and private infrastructure services for easy\\n          integration, scaling and extension of your I.T. needs',\n        slogan: 'Be Cloud Ready!',\n        icon: _pathJsx2['default'] + '/img/icons/cloud-service.png'\n      }, {\n        title: 'Professional Services',\n        description: 'Turnkey consulting and implementation teams that own customer visions\\n          and needs',\n        slogan: 'Experience Delivery',\n        icon: _pathJsx2['default'] + '/img/icons/headset-service.png'\n      }];\n\n      var tiles = data.map(function (m, i) {\n        var tileStyleWide = i && _this.props.wide ? (0, _objectAssign2['default'])({}, tileBaseStyle, {\n          marginLeft: _styleStyleConstsJsx.SPACING + 'px'\n        }) : tileBaseStyle;\n\n        var tileStyle = i && !_this.props.wide ? (0, _objectAssign2['default'])({}, tileBaseStyle, {\n          marginTop: _styleStyleConstsJsx.SPACING + 'px'\n        }) : tileBaseStyle;\n\n        return _react2['default'].createElement(\n          'a',\n          { style: _this.props.wide ? tileStyleWide : tileStyle },\n          _react2['default'].createElement('img', { src: m.icon }),\n          _react2['default'].createElement(\n            'div',\n            { style: _styleStyleJsx.smallHeader },\n            m.title\n          ),\n          _react2['default'].createElement(\n            'div',\n            { style: { fontSize: '0.85em' } },\n            m.description\n          ),\n          _react2['default'].createElement(\n            'div',\n            { style: _styleStyleJsx.smallHeader },\n            m.slogan\n          )\n        );\n      });\n\n      return _react2['default'].createElement(\n        'div',\n        { style: wrapper },\n        _react2['default'].createElement(\n          'div',\n          { style: _styleStyleJsx.smallHeader },\n          'Our Services'\n        ),\n        tiles,\n        _react2['default'].createElement(\n          'div',\n          null,\n          ' '\n        ),\n        _react2['default'].createElement(\n          'div',\n          null,\n          _react2['default'].createElement(\n            'a',\n            { style: [_styleStyleJsx.button, _styleStyleJsx.babyBlue] },\n            'VIEW ALL SERVICES'\n          )\n        )\n      );\n    }\n  }]);\n\n  var _OurServices = OurServices;\n  OurServices = (0, _radium2['default'])(OurServices) || OurServices;\n  return OurServices;\n})(_react2['default'].Component);\n\nexports['default'] = OurServices;\nmodule.exports = exports['default'];\n\n/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(269), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(123))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"our-services.jsx\" + \": \" + err.message); } }); } } })(); }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/our-services.jsx\n ** module id = 297\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/our-services.jsx?");

/***/ }

})