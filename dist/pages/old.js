'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _side_tab = require('./../components/side_tab.js');

var _side_tab2 = _interopRequireDefault(_side_tab);

var _imageList = require('./../components/imageList.js');

var _imageList2 = _interopRequireDefault(_imageList);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Old = function (_wepy$page) {
  _inherits(Old, _wepy$page);

  function Old() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Old);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Old.__proto__ || Object.getPrototypeOf(Old)).call.apply(_ref, [this].concat(args))), _this), _this.mixins = [_base2.default, _http2.default], _this.config = {
      navigationBarTitleText: '类型索引'
    }, _this.$repeat = {}, _this.$props = { "SideTab": { "v-bind:tab.sync": "categories", "xmlns:v-on": "" }, "imageList": { "v-bind:list.sync": "list" }, "SearchBar": { "type": "tag", "xmlns:v-bind": "", "v-bind:placeholder.once": "searchText" } }, _this.$events = { "SideTab": { "v-on:switchTab": "switchTab" } }, _this.components = {
      SideTab: _side_tab2.default,
      imageList: _imageList2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default
    }, _this.mixins = [], _this.data = {
      init: true,
      currentId: '1',
      currentTitle: '搞笑',
      tagList: [],
      list: [],
      categories: {
        'list': [],
        'selectedId': '1',
        'currentTitle': '搞笑'
      }
    }, _this.computed = {}, _this.methods = {
      // 点击分类
      switchTab: function switchTab(item) {
        console.log(item);
        this.currentId = item.id;
        this.currentTitle = item.title;
        this.getList();
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Old, [{
    key: 'onLoad',
    value: function onLoad() {
      this.initPage();
      this.getList();
    }
  }, {
    key: 'onReady',
    value: function onReady() {}
  }, {
    key: 'initPage',
    value: function initPage() {
      this.getAnimeTag();
    }
  }, {
    key: 'search',
    value: function search() {
      wx.navigateTo({
        url: '/pages/searchTag'
      });
    }
  }, {
    key: 'getAnimeTag',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var db;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = wx.cloud.database();
                _context.next = 3;
                return db.collection('tag').get().then(function (res) {
                  _this2.categories.list = res.data;
                  console.log(_this2.categories.list);
                  _this2.$apply();
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAnimeTag() {
        return _ref2.apply(this, arguments);
      }

      return getAnimeTag;
    }()
  }, {
    key: 'getList',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var db, _;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                db = wx.cloud.database();
                _ = db.command;
                _context2.next = 4;
                return db.collection('anime').where({
                  tag: _.in([this.currentTitle])
                }).get().then(function (res) {
                  console.log(res.data);
                  _this3.list = res.data;
                  _this3.$apply();
                });

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getList() {
        return _ref3.apply(this, arguments);
      }

      return getList;
    }()
  }]);

  return Old;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Old , 'pages/old'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC5qcyJdLCJuYW1lcyI6WyJPbGQiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTaWRlVGFiIiwiaW1hZ2VMaXN0IiwiU2VhcmNoQmFyIiwiQWRzIiwiZGF0YSIsImluaXQiLCJjdXJyZW50SWQiLCJjdXJyZW50VGl0bGUiLCJ0YWdMaXN0IiwibGlzdCIsImNhdGVnb3JpZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJzd2l0Y2hUYWIiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImlkIiwidGl0bGUiLCJnZXRMaXN0IiwiZXZlbnRzIiwiaW5pdFBhZ2UiLCJnZXRBbmltZVRhZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImRiIiwiY2xvdWQiLCJkYXRhYmFzZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiJGFwcGx5IiwiXyIsImNvbW1hbmQiLCJ3aGVyZSIsInRhZyIsImluIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUlxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxNLEdBQVMsQ0FBQ0MsY0FBRCxFQUFPQyxjQUFQLEMsUUFDVEMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxtQkFBa0IsWUFBbkIsRUFBZ0MsY0FBYSxFQUE3QyxFQUFYLEVBQTRELGFBQVksRUFBQyxvQkFBbUIsTUFBcEIsRUFBeEUsRUFBb0csYUFBWSxFQUFDLFFBQU8sS0FBUixFQUFjLGdCQUFlLEVBQTdCLEVBQWdDLDJCQUEwQixZQUExRCxFQUFoSCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFdBQVUsRUFBQyxrQkFBaUIsV0FBbEIsRUFBWCxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxlQUFRQSxrQkFEQTtBQUVSQyxpQkFBVUEsbUJBRkY7QUFHUkMsaUJBQVVBLG1CQUhGO0FBSVJDLFdBQUlBO0FBSkksSyxRQU9WWixNLEdBQVMsRSxRQUVUYSxJLEdBQU87QUFDTEMsWUFBSyxJQURBO0FBRUxDLGlCQUFVLEdBRkw7QUFHTEMsb0JBQWEsSUFIUjtBQUlMQyxlQUFRLEVBSkg7QUFLTEMsWUFBSyxFQUxBO0FBTUxDLGtCQUFZO0FBQ1YsZ0JBQU8sRUFERztBQUdSLHNCQUFhLEdBSEw7QUFJUix3QkFBZTtBQUpQO0FBTlAsSyxRQWNQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHFCQUVFQyxJQUZGLEVBRVE7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGFBQUtSLFNBQUwsR0FBaUJRLEtBQUtHLEVBQXRCO0FBQ0EsYUFBS1YsWUFBTCxHQUFvQk8sS0FBS0ksS0FBekI7QUFDQSxhQUFLQyxPQUFMO0FBQ0Q7QUFQTyxLLFFBV1ZDLE0sR0FBUyxFOzs7Ozs2QkFJQTtBQUNQLFdBQUtDLFFBQUw7QUFDQSxXQUFLRixPQUFMO0FBQ0Q7Ozs4QkFDUyxDQUNUOzs7K0JBQ1M7QUFDUixXQUFLRyxXQUFMO0FBQ0Q7Ozs2QkFDTztBQUNOQyxTQUFHQyxVQUFILENBQWM7QUFDVkMsYUFBSztBQURLLE9BQWQ7QUFHRDs7Ozs7Ozs7Ozs7O0FBRU9DLGtCLEdBQUtILEdBQUdJLEtBQUgsQ0FBU0MsUUFBVCxFOzt1QkFDTEYsR0FBR0csVUFBSCxDQUFjLEtBQWQsRUFBcUJDLEdBQXJCLEdBQTJCQyxJQUEzQixDQUFnQyxlQUFLO0FBQ3ZDLHlCQUFLckIsVUFBTCxDQUFnQkQsSUFBaEIsR0FBdUJ1QixJQUFJNUIsSUFBM0I7QUFDQVcsMEJBQVFDLEdBQVIsQ0FBWSxPQUFLTixVQUFMLENBQWdCRCxJQUE1QjtBQUNBLHlCQUFLd0IsTUFBTDtBQUNILGlCQUpLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQ1Asa0IsR0FBS0gsR0FBR0ksS0FBSCxDQUFTQyxRQUFULEU7QUFDTE0saUIsR0FBSVIsR0FBR1MsTzs7dUJBQ05ULEdBQUdHLFVBQUgsQ0FBYyxPQUFkLEVBQXVCTyxLQUF2QixDQUE2QjtBQUMvQkMsdUJBQUtILEVBQUVJLEVBQUYsQ0FBSyxDQUFDLEtBQUsvQixZQUFOLENBQUw7QUFEMEIsaUJBQTdCLEVBR0x1QixHQUhLLEdBR0NDLElBSEQsQ0FHTSxlQUFLO0FBQ2ZoQiwwQkFBUUMsR0FBUixDQUFZZ0IsSUFBSTVCLElBQWhCO0FBQ0EseUJBQUtLLElBQUwsR0FBWXVCLElBQUk1QixJQUFoQjtBQUNBLHlCQUFLNkIsTUFBTDtBQUNELGlCQVBLLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUExRXFCTSxlQUFLQyxJOztrQkFBakJsRCxHIiwiZmlsZSI6Im9sZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgU2lkZVRhYiBmcm9tICcuLi9jb21wb25lbnRzL3NpZGVfdGFiJ1xuICBpbXBvcnQgaW1hZ2VMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VMaXN0J1xuICBpbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xuICBpbXBvcnQgQWRzIGZyb20gJy4uL2NvbXBvbmVudHMvYWRzJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG5cblxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgbWl4aW5zID0gW2Jhc2UsIGh0dHBdXG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+exu+Wei+e0ouW8lSdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlNpZGVUYWJcIjp7XCJ2LWJpbmQ6dGFiLnN5bmNcIjpcImNhdGVnb3JpZXNcIixcInhtbG5zOnYtb25cIjpcIlwifSxcImltYWdlTGlzdFwiOntcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIn0sXCJTZWFyY2hCYXJcIjp7XCJ0eXBlXCI6XCJ0YWdcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6cGxhY2Vob2xkZXIub25jZVwiOlwic2VhcmNoVGV4dFwifX07XHJcbiRldmVudHMgPSB7XCJTaWRlVGFiXCI6e1widi1vbjpzd2l0Y2hUYWJcIjpcInN3aXRjaFRhYlwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgU2lkZVRhYjpTaWRlVGFiLFxuICAgICAgaW1hZ2VMaXN0OmltYWdlTGlzdCxcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBBZHM6QWRzXG4gICAgfVxuXG4gICAgbWl4aW5zID0gW11cblxuICAgIGRhdGEgPSB7XG4gICAgICBpbml0OnRydWUsXG4gICAgICBjdXJyZW50SWQ6JzEnLFxuICAgICAgY3VycmVudFRpdGxlOifmkJ7nrJEnLFxuICAgICAgdGFnTGlzdDpbXSxcbiAgICAgIGxpc3Q6W10sXG4gICAgICBjYXRlZ29yaWVzOiB7XG4gICAgICAgICdsaXN0JzpbXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnc2VsZWN0ZWRJZCc6JzEnLFxuICAgICAgICAgICdjdXJyZW50VGl0bGUnOifmkJ7nrJEnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgLy8g54K55Ye75YiG57G7XG4gICAgICBzd2l0Y2hUYWIoaXRlbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgICB0aGlzLmN1cnJlbnRJZCA9IGl0ZW0uaWQ7XG4gICAgICAgIHRoaXMuY3VycmVudFRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICAgIH1cblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHRoaXMuaW5pdFBhZ2UoKVxuICAgICAgdGhpcy5nZXRMaXN0KClcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICB9XG4gICAgaW5pdFBhZ2UoKXtcbiAgICAgIHRoaXMuZ2V0QW5pbWVUYWcoKVxuICAgIH1cbiAgICBzZWFyY2goKXtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy9zZWFyY2hUYWcnXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldEFuaW1lVGFnKCl7XG4gICAgICBjb25zdCBkYiA9IHd4LmNsb3VkLmRhdGFiYXNlKClcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3RhZycpLmdldCgpLnRoZW4ocmVzPT57XG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLmxpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yaWVzLmxpc3QpXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgIH0pXG4gICAgfVxuICAgIGFzeW5jIGdldExpc3QoKXtcbiAgICAgICBjb25zdCBkYiA9IHd4LmNsb3VkLmRhdGFiYXNlKClcbiAgICAgICBjb25zdCBfID0gZGIuY29tbWFuZFxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdhbmltZScpLndoZXJlKHtcbiAgICAgICAgICAgIHRhZzogXy5pbihbdGhpcy5jdXJyZW50VGl0bGVdKSxcbiAgICAgICAgfSlcbiAgICAgICAgLmdldCgpLnRoZW4ocmVzPT57XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEgO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=