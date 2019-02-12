'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelTag = function (_wepy$component) {
  _inherits(PanelTag, _wepy$component);

  function PanelTag() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PanelTag);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PanelTag.__proto__ || Object.getPrototypeOf(PanelTag)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      searchTags: {
        type: Object,
        default: ['7月新番', '工作细胞']
      },
      searchHistory: {
        type: Object,
        default: ['7月新番', '工作细胞']
      }
    }, _this.methods = {
      tapAll: function tapAll(item) {
        console.log(item);
        wx.navigateTo({
          url: '/pages/search?inputVal=' + item
        });
      },
      tapHistory: function tapHistory(item) {
        console.log(item);
        wx.navigateTo({
          url: '/pages/search?inputVal=' + item
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return PanelTag;
}(_wepy2.default.component);

exports.default = PanelTag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbm5lbFRhZy5qcyJdLCJuYW1lcyI6WyJQYW5lbFRhZyIsInByb3BzIiwic2VhcmNoVGFncyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0Iiwic2VhcmNoSGlzdG9yeSIsIm1ldGhvZHMiLCJ0YXBBbGwiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRhcEhpc3RvcnkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxLLEdBQVE7QUFDTkMsa0JBQVc7QUFDVEMsY0FBS0MsTUFESTtBQUVUQyxpQkFBUSxDQUFDLE1BQUQsRUFBUSxNQUFSO0FBRkMsT0FETDtBQUtOQyxxQkFBYztBQUNaSCxjQUFLQyxNQURPO0FBRVpDLGlCQUFRLENBQUMsTUFBRCxFQUFRLE1BQVI7QUFGSTtBQUxSLEssUUFXUkUsTyxHQUFVO0FBQ1JDLFlBRFEsa0JBQ0RDLElBREMsRUFDSTtBQUNWQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYztBQUNSQyxlQUFLLDRCQUEwQkw7QUFEdkIsU0FBZDtBQUdELE9BTk87QUFPUk0sZ0JBUFEsc0JBT0dOLElBUEgsRUFPUTtBQUNkQyxnQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYztBQUNSQyxlQUFLLDRCQUEwQkw7QUFEdkIsU0FBZDtBQUdEO0FBWk8sSzs7OztFQVowQk8sZUFBS0MsUzs7a0JBQXRCakIsUSIsImZpbGUiOiJwYW5uZWxUYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbFRhZyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIHNlYXJjaFRhZ3M6e1xuICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgZGVmYXVsdDpbJzfmnIjmlrDnlaonLCflt6XkvZznu4bog54nXVxuICAgICAgfSxcbiAgICAgIHNlYXJjaEhpc3Rvcnk6e1xuICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgZGVmYXVsdDpbJzfmnIjmlrDnlaonLCflt6XkvZznu4bog54nXVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXBBbGwoaXRlbSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2VhcmNoP2lucHV0VmFsPScraXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0YXBIaXN0b3J5KGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3NlYXJjaD9pbnB1dFZhbD0nK2l0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=