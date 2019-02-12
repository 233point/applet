'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "animeList": { "xmlns:v-bind": "", "v-bind:title.once": "title" } }, _this.$events = {}, _this.components = {
      SearchBar: _searchbar2.default,
      animeList: _animeList2.default
    }, _this.mixins = [], _this.data = {
      // inputVal:'111',
      title: '搜索结果',
      search: ''
    }, _this.computed = {
      inputVal: function inputVal() {
        var _this2 = this;

        setTimeout(function () {
          console.log(_this2.search);
          return _this2.search;
        }, 2000);
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'onLoad',
    value: function onLoad(query) {
      var inputVal = query.inputVal;
      console.log("query", query.inputVal);
      this.search = query.inputVal;
      this.title = query.inputVal;
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/search'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiU2VhcmNoQmFyIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiZGF0YSIsInRpdGxlIiwic2VhcmNoIiwiY29tcHV0ZWQiLCJpbnB1dFZhbCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImV2ZW50cyIsInF1ZXJ5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLE9BQXZDLEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsaUJBQVVBLG1CQURGO0FBRVJDLGlCQUFVQTtBQUZGLEssUUFLVkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0w7QUFDQUMsYUFBTSxNQUZEO0FBR0xDLGNBQU87QUFIRixLLFFBTVBDLFEsR0FBVztBQUNUQyxjQURTLHNCQUNDO0FBQUE7O0FBQ1JDLG1CQUFXLFlBQU07QUFDZkMsa0JBQVFDLEdBQVIsQ0FBWSxPQUFLTCxNQUFqQjtBQUNBLGlCQUFPLE9BQUtBLE1BQVo7QUFDRCxTQUhELEVBR0csSUFISDtBQUlEO0FBTlEsSyxRQVNYTSxPLEdBQVUsRSxRQUdWQyxNLEdBQVMsRTs7Ozs7OEJBR0EsQ0FDUjs7OzJCQUNNQyxLLEVBQU87QUFDWixVQUFNTixXQUFXTSxNQUFNTixRQUF2QjtBQUNBRSxjQUFRQyxHQUFSLENBQVksT0FBWixFQUFvQkcsTUFBTU4sUUFBMUI7QUFDQSxXQUFLRixNQUFMLEdBQWNRLE1BQU1OLFFBQXBCO0FBQ0EsV0FBS0gsS0FBTCxHQUFhUyxNQUFNTixRQUFuQjtBQUNEOzs7O0VBMUNpQ08sZUFBS0MsSTs7a0JBQXBCdEIsTSIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcbiAgaW1wb3J0IGFuaW1lTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1lTGlzdCdcblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aQnOe0oidcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImFuaW1lTGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGl0bGUub25jZVwiOlwidGl0bGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2VhcmNoQmFyOlNlYXJjaEJhcixcbiAgICAgIGFuaW1lTGlzdDphbmltZUxpc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIC8vIGlucHV0VmFsOicxMTEnLFxuICAgICAgdGl0bGU6J+aQnOe0oue7k+aenCcsXG4gICAgICBzZWFyY2g6JydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlucHV0VmFsKCl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoKVxuICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaDtcbiAgICAgICAgfSwgMjAwMClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cbiAgICBvblJlYWR5KCl7XG4gICAgfVxuICAgIG9uTG9hZChxdWVyeSkge1xuICAgICAgY29uc3QgaW5wdXRWYWwgPSBxdWVyeS5pbnB1dFZhbDtcbiAgICAgIGNvbnNvbGUubG9nKFwicXVlcnlcIixxdWVyeS5pbnB1dFZhbClcbiAgICAgIHRoaXMuc2VhcmNoID0gcXVlcnkuaW5wdXRWYWwgO1xuICAgICAgdGhpcy50aXRsZSA9IHF1ZXJ5LmlucHV0VmFsXG4gICAgfVxuICB9XG4iXX0=