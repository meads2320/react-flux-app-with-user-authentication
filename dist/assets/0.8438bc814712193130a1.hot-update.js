webpackHotUpdate(0,{

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(155); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(155);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(375);\n\nvar _reactRouter = __webpack_require__(294);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // src/components/ContactListItem.js\n\nvar ContactListItem = function (_Component) {\n  _inherits(ContactListItem, _Component);\n\n  function ContactListItem() {\n    _classCallCheck(this, ContactListItem);\n\n    return _possibleConstructorReturn(this, (ContactListItem.__proto__ || Object.getPrototypeOf(ContactListItem)).apply(this, arguments));\n  }\n\n  _createClass(ContactListItem, [{\n    key: 'render',\n    value: function render() {\n      var contact = this.props.contact;\n\n      return _react2.default.createElement(\n        _reactBootstrap.ListGroupItem,\n        null,\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { to: '/contact/' + contact.id },\n          _react2.default.createElement(\n            'h4',\n            null,\n            contact.name\n          )\n        )\n      );\n    }\n  }]);\n\n  return ContactListItem;\n}(_react.Component);\n\nexports.default = ContactListItem;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(359); if (makeExportsHot(module, __webpack_require__(155))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"ContactListItem.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0TGlzdEl0ZW0uanM/ODc1OSJdLCJuYW1lcyI6WyJDb250YWN0TGlzdEl0ZW0iLCJjb250YWN0IiwicHJvcHMiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7OzsrZUFKQTs7SUFNTUEsZTs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSxVQUNDQyxPQURELEdBQ2EsS0FBS0MsS0FEbEIsQ0FDQ0QsT0FERDs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFNLGtCQUFnQkEsUUFBUUUsRUFBOUI7QUFDRTtBQUFBO0FBQUE7QUFBS0Ysb0JBQVFHO0FBQWI7QUFERjtBQURGLE9BREY7QUFPRDs7Ozs7O2tCQUdZSixlIiwiZmlsZSI6IjY0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9jb21wb25lbnRzL0NvbnRhY3RMaXN0SXRlbS5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGlzdEdyb3VwSXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY2xhc3MgQ29udGFjdExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRhY3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGlzdEdyb3VwSXRlbT5cclxuICAgICAgICA8TGluayB0bz17YC9jb250YWN0LyR7Y29udGFjdC5pZH1gfT4gICAgICAgICAgXHJcbiAgICAgICAgICA8aDQ+e2NvbnRhY3QubmFtZX08L2g0PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9MaXN0R3JvdXBJdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RMaXN0SXRlbTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NvbnRhY3RMaXN0SXRlbS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})