'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideTab = function (_wepy$component) {
  _inherits(SideTab, _wepy$component);

  function SideTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SideTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideTab.__proto__ || Object.getPrototypeOf(SideTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: {
        twoWay: true
      }
    }, _this.data = {}, _this.methods = {
      switchTab: function switchTab(select) {
        this.tab.selectedId = select.id;
        this.$emit('switchTab', select);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SideTab, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("side", this.tab.list);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return SideTab;
}(_wepy2.default.component);

exports.default = SideTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVfdGFiLmpzIl0sIm5hbWVzIjpbIlNpZGVUYWIiLCJwcm9wcyIsInRhYiIsInR3b1dheSIsImRhdGEiLCJtZXRob2RzIiwic3dpdGNoVGFiIiwic2VsZWN0Iiwic2VsZWN0ZWRJZCIsImlkIiwiJGVtaXQiLCJldmVudHMiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxnQkFBUTtBQURMO0FBREMsSyxRQUtSQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsTUFERixFQUNVO0FBQ2hCLGFBQUtMLEdBQUwsQ0FBU00sVUFBVCxHQUFzQkQsT0FBT0UsRUFBN0I7QUFDQSxhQUFLQyxLQUFMLENBQVcsV0FBWCxFQUF3QkgsTUFBeEI7QUFDRDtBQUpPLEssUUFNVkksTSxHQUFTLEU7Ozs7Ozs7Ozs7O0FBRVBDLHdCQUFRQyxHQUFSLENBQVksTUFBWixFQUFtQixLQUFLWCxHQUFMLENBQVNZLElBQTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZmlDQyxlQUFLQyxTOztrQkFBckJoQixPIiwiZmlsZSI6InNpZGVfdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVUYWIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgcHJvcHMgPSB7XG4gICAgICB0YWI6IHtcbiAgICAgICAgdHdvV2F5OiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhID0ge307XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHN3aXRjaFRhYihzZWxlY3QpIHtcbiAgICAgICAgdGhpcy50YWIuc2VsZWN0ZWRJZCA9IHNlbGVjdC5pZDtcbiAgICAgICAgdGhpcy4kZW1pdCgnc3dpdGNoVGFiJywgc2VsZWN0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50cyA9IHt9O1xuICAgIGFzeW5jIG9uTG9hZCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2lkZVwiLHRoaXMudGFiLmxpc3QpXG4gICAgfVxuICB9XG4iXX0=