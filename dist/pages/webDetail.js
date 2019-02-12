"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var webDetail = function (_wepy$page) {
  _inherits(webDetail, _wepy$page);

  function webDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, webDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = webDetail.__proto__ || Object.getPrototypeOf(webDetail)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      path: "https://mp.weixin.qq.com/s/MhnNBpyQS_uDdO6FUlte1w"
    }, _this.events = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(webDetail, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return webDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(webDetail , 'pages/webDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYkRldGFpbC5qcyJdLCJuYW1lcyI6WyJ3ZWJEZXRhaWwiLCJkYXRhIiwicGF0aCIsImV2ZW50cyIsIm1ldGhvZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsWUFBSztBQURBLEssUUFJUEMsTSxHQUFTLEUsUUFJVEMsTyxHQUFVLEU7Ozs7OzZCQUlBLENBQ1Q7Ozs7RUFkb0NDLGVBQUtDLEk7O2tCQUF2Qk4sUyIsImZpbGUiOiJ3ZWJEZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWJEZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICBwYXRoOlwiaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvTWhuTkJweVFTX3VEZE82RlVsdGUxd1wiXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICB9XG4iXX0=