webpackHotUpdate(0,{

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(59), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(69), React = __webpack_require__(123); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } (function () {\n\n'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n  value: true\n});\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _react = __webpack_require__(123);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _radium = __webpack_require__(279);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nvar _objectAssign = __webpack_require__(267);\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _styleStyleJsx = __webpack_require__(266);\n\nvar _styleStyleConstsJsx = __webpack_require__(268);\n\nvar WhatWeDo = (function (_React$Component) {\n  _inherits(WhatWeDo, _React$Component);\n\n  function WhatWeDo(props) {\n    _classCallCheck(this, _WhatWeDo);\n\n    _get(Object.getPrototypeOf(_WhatWeDo.prototype), 'constructor', this).call(this, props);\n\n    this.state = { activeItemIndexes: [] };\n    this.selectItem = this.selectItem.bind(this);\n  }\n\n  _createClass(WhatWeDo, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n\n      var minHeight = {\n        minHeight: '200px',\n        position: 'relative',\n        top: '-50px',\n        padding: '70px 20px 20px'\n      };\n\n      var data = {\n        blueHeader: 'Providing the ultimate user experience',\n        blueParagraph: 'By coupling the different services we offer we can create and ultimate turnkey\\n      customer experience that is tuned to making businesses more efficient, productive\\n      and focused on their core compentencies and not internal I.T. challenges.',\n\n        accordion: [{\n          title: 'Direct Users',\n          description: 'A Turnkey I.T. customer experience',\n          content: _react2['default'].createElement(\n            'div',\n            null,\n            _react2['default'].createElement(\n              'p',\n              null,\n              'We service customers of many different sizes, types and market segments by complementing, upgrading or replacing existing platforms - adding our consulting & managed services to achieve organizational benefits and objectives.'\n            ),\n            _react2['default'].createElement(\n              'a',\n              { style: [_styleStyleJsx.button, _styleStyleJsx.babyBlue] },\n              'EXPERIENCE ULTIMATE!'\n            )\n          )\n        }, {\n          title: 'Resellers',\n          description: 'Make your portfolio ultimate',\n          content: _react2['default'].createElement(\n            'div',\n            null,\n            _react2['default'].createElement(\n              'div',\n              null,\n              'Lorem ipsum'\n            )\n          )\n        }]\n      };\n\n      var accordionContentBaseStyle = {\n        marginTop: '20px',\n        overflow: 'hidden',\n        transition: 'max-height 0.3s ease-in-out'\n      };\n\n      var accordionHeight = {\n        open: { maxHeight: '250px' },\n        closed: { maxHeight: '0px' }\n      };\n\n      var accordionItems = data.accordion.map(function (m, i) {\n        return _react2['default'].createElement(\n          'div',\n          { key: i },\n          i ? _react2['default'].createElement('hr', null) : '',\n          _react2['default'].createElement(\n            'a',\n            { className: 'clearfix', onClick: _this.selectItem.bind(_this, i) },\n            _react2['default'].createElement(\n              'div',\n              { style: _styleStyleJsx.smallHeader },\n              m.title\n            ),\n            _react2['default'].createElement(\n              'div',\n              { style: { float: 'left' } },\n              m.description\n            ),\n            _react2['default'].createElement('i', { style: [{ float: 'right', transition: 'transform 0.3s ease' }, _this.state.activeItemIndexes.indexOf(i) > -1 ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }], className: 'fa fa-chevron-down' })\n          ),\n          _react2['default'].createElement(\n            'div',\n            { style: [accordionContentBaseStyle, _this.state.activeItemIndexes.indexOf(i) > -1 ? accordionHeight.open : accordionHeight.closed] },\n            m.content\n          )\n        );\n      });\n\n      var babyBlueHeader = (0, _objectAssign2['default'])({}, _styleStyleJsx.smallHeader);\n      babyBlueHeader.color = _styleStyleConstsJsx.BABY_BLUE;\n\n      return _react2['default'].createElement(\n        'div',\n        null,\n        _react2['default'].createElement(\n          'div',\n          { style: [_styleStyleJsx.blueBackground, minHeight] },\n          _react2['default'].createElement(\n            'div',\n            { style: [_styleStyleJsx.max, _styleStyleJsx.textCenter] },\n            _react2['default'].createElement(\n              'div',\n              { style: babyBlueHeader },\n              data.blueHeader\n            ),\n            _react2['default'].createElement(\n              'p',\n              { style: { color: 'white' } },\n              data.blueParagraph\n            )\n          )\n        ),\n        _react2['default'].createElement(\n          'div',\n          { style: _styleStyleJsx.max },\n          accordionItems\n        )\n      );\n    }\n  }, {\n    key: 'selectItem',\n    value: function selectItem(i) {\n      var arr = this.state.activeItemIndexes.slice();\n      var index = arr.indexOf(i);\n      if (index > -1) {\n        this.setState({ activeItemIndexes: [].concat(_toConsumableArray(arr.slice(0, index)), _toConsumableArray(arr.slice(index + 1, arr.length))) });\n      } else {\n        arr.push(i);\n        this.setState({ activeItemIndexes: arr });\n      }\n    }\n  }]);\n\n  var _WhatWeDo = WhatWeDo;\n  WhatWeDo = (0, _radium2['default'])(WhatWeDo) || WhatWeDo;\n  return WhatWeDo;\n})(_react2['default'].Component);\n\nexports['default'] = WhatWeDo;\nmodule.exports = exports['default'];\n\n/* REACT HOT LOADER */ }).call(this); if (true) { (function () { module.hot.dispose(function (data) { data.makeHot = module.makeHot; }); if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(269), foundReactClasses = false; if (makeExportsHot(module, __webpack_require__(123))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"what-we-do.jsx\" + \": \" + err.message); } }); } } })(); }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/components/panels/what-we-do.jsx\n ** module id = 341\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/components/panels/what-we-do.jsx?");

/***/ }

})