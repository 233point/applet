'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_wepy$component) {
  _inherits(SearchBar, _wepy$component);

  function SearchBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      height: {
        type: [String, Number],
        default: '240rpx'
      },
      dots: {
        type: Boolean,
        default: true
      }
    }, _this.data = {
      autoplay: true,
      indicatorColor: '#ffffff',
      indicatorActiveColor: '#FF5577'
    }, _this.computed = {
      indicatorDots: function indicatorDots() {
        return Boolean(this.list.length > 1 && this.dots);
      },
      style_height: function style_height() {
        var h = this.height;
        return this.isNumber(+h) ? h + 'rpx' : this.isMatchHeight(h) ? h : '240rpx';
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchBar, [{
    key: 'isMatchHeight',
    value: function isMatchHeight(str) {
      return this.isString(str) ? /\d+(r?px|em)$/.test(str) : false;
    }
  }]);

  return SearchBar;
}(_wepy2.default.component);

exports.default = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJtaXhpbnMiLCJiYXNlIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJoZWlnaHQiLCJTdHJpbmciLCJOdW1iZXIiLCJkb3RzIiwiQm9vbGVhbiIsImRhdGEiLCJhdXRvcGxheSIsImluZGljYXRvckNvbG9yIiwiaW5kaWNhdG9yQWN0aXZlQ29sb3IiLCJjb21wdXRlZCIsImluZGljYXRvckRvdHMiLCJsZW5ndGgiLCJzdHlsZV9oZWlnaHQiLCJoIiwiaXNOdW1iZXIiLCJpc01hdGNoSGVpZ2h0IiwibWV0aG9kcyIsInN0ciIsImlzU3RyaW5nIiwidGVzdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGNBQVE7QUFDTkgsY0FBTSxDQUFDSSxNQUFELEVBQVNDLE1BQVQsQ0FEQTtBQUVOSCxpQkFBUztBQUZILE9BTEY7QUFTTkksWUFBTTtBQUNKTixjQUFNTyxPQURGO0FBRUpMLGlCQUFTO0FBRkw7QUFUQSxLLFFBZVJNLEksR0FBTztBQUNMQyxnQkFBVSxJQURMO0FBRUxDLHNCQUFnQixTQUZYO0FBR0xDLDRCQUFzQjtBQUhqQixLLFFBTVBDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU9OLFFBQVEsS0FBS1IsSUFBTCxDQUFVZSxNQUFWLEdBQW1CLENBQW5CLElBQXdCLEtBQUtSLElBQXJDLENBQVA7QUFDRCxPQUhRO0FBSVRTLGtCQUpTLDBCQUlNO0FBQ2IsWUFBTUMsSUFBSSxLQUFLYixNQUFmO0FBQ0EsZUFBTyxLQUFLYyxRQUFMLENBQWMsQ0FBQ0QsQ0FBZixJQUF1QkEsQ0FBdkIsV0FBZ0MsS0FBS0UsYUFBTCxDQUFtQkYsQ0FBbkIsSUFBd0JBLENBQXhCLEdBQTRCLFFBQW5FO0FBQ0Q7QUFQUSxLLFFBVVhHLE8sR0FBVSxFOzs7OztrQ0FHSUMsRyxFQUFLO0FBQ2pCLGFBQU8sS0FBS0MsUUFBTCxDQUFjRCxHQUFkLElBQXFCLGdCQUFnQkUsSUFBaEIsQ0FBcUJGLEdBQXJCLENBQXJCLEdBQWlELEtBQXhEO0FBQ0Q7Ozs7RUF0Q29DRyxlQUFLQyxTOztrQkFBdkI3QixTIiwiZmlsZSI6InN3aXBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZS5qcydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgbWl4aW5zID0gW2Jhc2VdXG4gICAgcHJvcHMgPSB7XG4gICAgICBsaXN0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgZGVmYXVsdDogW11cbiAgICAgIH0sXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgZGVmYXVsdDogJzI0MHJweCdcbiAgICAgIH0sXG4gICAgICBkb3RzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBpbmRpY2F0b3JDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgaW5kaWNhdG9yQWN0aXZlQ29sb3I6ICcjRkY1NTc3J1xuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgaW5kaWNhdG9yRG90cygpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5saXN0Lmxlbmd0aCA+IDEgJiYgdGhpcy5kb3RzKVxuICAgICAgfSxcbiAgICAgIHN0eWxlX2hlaWdodCgpIHtcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuaGVpZ2h0XG4gICAgICAgIHJldHVybiB0aGlzLmlzTnVtYmVyKCtoKSA/IGAke2h9cnB4YCA6IHRoaXMuaXNNYXRjaEhlaWdodChoKSA/IGggOiAnMjQwcnB4J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgfVxuXG4gICAgaXNNYXRjaEhlaWdodChzdHIpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzU3RyaW5nKHN0cikgPyAvXFxkKyhyP3B4fGVtKSQvLnRlc3Qoc3RyKSA6IGZhbHNlXG4gICAgfVxuICB9XG4iXX0=