'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; // alias example
// alias example
// aliasFields example
// aliasFields ignore module example


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _list = require('./../components/wepy-list.js');

var _list2 = _interopRequireDefault(_list);

var _moduleA = {};

var _moduleA2 = _interopRequireDefault(_moduleA);

var _group = require('./../components/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

var _swiper = require('./../components/swiper.js');

var _swiper2 = _interopRequireDefault(_swiper);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _ads = require('./../components/ads.js');

var _ads2 = _interopRequireDefault(_ads);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('moduleA ignored: ', _moduleA2.default); // => moduleA ignored: {}

var Top = (_dec = (0, _wepyRedux.connect)({
  num: function num(state) {
    return state.counter.num;
  },
  asyncNum: function asyncNum(state) {
    return state.counter.asyncNum;
  },
  sumNum: function sumNum(state) {
    return state.counter.num + state.counter.asyncNum;
  }
}), _dec(_class = function (_wepy$page) {
  _inherits(Top, _wepy$page);

  function Top() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Top.__proto__ || Object.getPrototypeOf(Top)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '追番推荐'
    }, _this.$repeat = {}, _this.$props = { "Swiper": { "xmlns:v-bind": "", "v-bind:list.sync": "swipers", "height": "280" }, "Ads": { "v-bind:ads.once": "ads" }, "animeList": { "v-bind:list.sync": "list", "title": "追番推荐", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMoreList" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default,
      counter1: _counter2.default,
      counter2: _counter2.default,
      list: _list2.default,
      group: _group2.default,
      toast: _wepyComToast2.default,
      Swiper: _swiper2.default,
      SearchBar: _searchbar2.default,
      Ads: _ads2.default,
      animeList: _animeList2.default
    }, _this.mixins = [_test2.default], _this.data = {
      swipers: [{ image: 'https://233.calamus.xyz/2.jpg', url: '' }, { image: 'https://233.calamus.xyz/3.jpg', url: '' }],
      ads: ['欢迎加群：575180837', '主站：www.calamus.xyz'],
      list: []
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }
  //wxml事件处理函数对象，存放响应wxml中所捕获到的事件的函数，如bindtap、bindchange

  //WePY组件事件处理函数对象，存放响应组件之间通过$broadcast、$emit、$invoke所传递的事件的函数


  _createClass(Top, [{
    key: 'onReady',
    value: function onReady() {
      this.initPage();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
    }

    //生命周期函数，其他自定义方法等

  }, {
    key: 'initPage',
    value: function initPage() {
      this.getAnime();
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      // 处理轮播图
      this.swipers.push({ image: 'https://233.calamus.xyz/1.jpg', url: '' });
    }
  }, {
    key: 'getAnime',
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
                return db.collection('anime').get().then(function (res) {
                  _this2.list = res.data;
                  console.log(_this2.list);
                  _this2.$apply();
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAnime() {
        return _ref2.apply(this, arguments);
      }

      return getAnime;
    }()
  }]);

  return Top;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Top , 'pages/top'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwibW9kdWxlQSIsIlRvcCIsIm51bSIsInN0YXRlIiwiY291bnRlciIsImFzeW5jTnVtIiwic3VtTnVtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBhbmVsIiwiUGFuZWwiLCJjb3VudGVyMSIsIkNvdW50ZXIiLCJjb3VudGVyMiIsImxpc3QiLCJMaXN0IiwiZ3JvdXAiLCJHcm91cCIsInRvYXN0IiwiVG9hc3QiLCJTd2lwZXIiLCJTZWFyY2hCYXIiLCJBZHMiLCJhbmltZUxpc3QiLCJtaXhpbnMiLCJ0ZXN0TWl4aW4iLCJkYXRhIiwic3dpcGVycyIsImltYWdlIiwidXJsIiwiYWRzIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsImluaXRQYWdlIiwic2VsZiIsImdldEFuaW1lIiwiaW5pdFBhZ2VEYXRhIiwicHVzaCIsImRiIiwid3giLCJjbG91ZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2tCQUd5QztBQUNUO0FBQ1E7QUFDUDs7O0FBTC9COzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFJQUEsUUFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDQyxpQkFBakMsRSxDQUEwQzs7SUFjckJDLEcsV0FacEIsd0JBQVE7QUFDUEMsS0FETyxlQUNGQyxLQURFLEVBQ0s7QUFDVixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQXJCO0FBQ0QsR0FITTtBQUlQRyxVQUpPLG9CQUlHRixLQUpILEVBSVU7QUFDZixXQUFPQSxNQUFNQyxPQUFOLENBQWNDLFFBQXJCO0FBQ0QsR0FOTTtBQU9QQyxRQVBPLGtCQU9DSCxLQVBELEVBT1E7QUFDYixXQUFPQSxNQUFNQyxPQUFOLENBQWNGLEdBQWQsR0FBb0JDLE1BQU1DLE9BQU4sQ0FBY0MsUUFBekM7QUFDRDtBQVRNLENBQVIsQzs7Ozs7Ozs7Ozs7Ozs7Z0xBYUNFLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLFNBQXRDLEVBQWdELFVBQVMsS0FBekQsRUFBVixFQUEwRSxPQUFNLEVBQUMsbUJBQWtCLEtBQW5CLEVBQWhGLEVBQTBHLGFBQVksRUFBQyxvQkFBbUIsTUFBcEIsRUFBMkIsU0FBUSxNQUFuQyxFQUEwQyx1QkFBc0IsU0FBaEUsRUFBMEUsc0JBQXFCLFlBQS9GLEVBQXRILEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGFBQU9DLGVBREM7QUFFUkMsZ0JBQVVDLGlCQUZGO0FBR1JDLGdCQUFVRCxpQkFIRjtBQUlSRSxZQUFNQyxjQUpFO0FBS1JDLGFBQU9DLGVBTEM7QUFNUkMsYUFBT0Msc0JBTkM7QUFPUkMsY0FBT0EsZ0JBUEM7QUFRUkMsaUJBQVVBLG1CQVJGO0FBU1JDLFdBQUlBLGFBVEk7QUFVUkMsaUJBQVVBO0FBVkYsSyxRQWFWQyxNLEdBQVMsQ0FBQ0MsY0FBRCxDLFFBRVRDLEksR0FBTztBQUNMQyxlQUFTLENBQ1AsRUFBQ0MsT0FBTywrQkFBUixFQUF5Q0MsS0FBSyxFQUE5QyxFQURPLEVBRVAsRUFBQ0QsT0FBTywrQkFBUixFQUF5Q0MsS0FBSyxFQUE5QyxFQUZPLENBREo7QUFLTEMsV0FBSSxDQUFDLGdCQUFELEVBQWtCLG9CQUFsQixDQUxDO0FBTUxoQixZQUFLO0FBTkEsSyxRQVNQaUIsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOztBQUxiOztBQUlBOzs7Ozs4QkFJYTtBQUNQLFdBQUtDLFFBQUw7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0Q7O0FBRUg7Ozs7K0JBQ1k7QUFDTixXQUFLQyxRQUFMO0FBQ0EsV0FBS0MsWUFBTDtBQUNIOzs7bUNBQ2E7QUFDWjtBQUNBLFdBQUtaLE9BQUwsQ0FBYWEsSUFBYixDQUFrQixFQUFDWixPQUFPLCtCQUFSLEVBQXdDQyxLQUFJLEVBQTVDLEVBQWxCO0FBQ0Q7Ozs7Ozs7Ozs7OztBQUVTWSxrQixHQUFLQyxHQUFHQyxLQUFILENBQVNDLFFBQVQsRTs7dUJBQ0xILEdBQUdJLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixHQUE2QkMsSUFBN0IsQ0FBa0MsZUFBSztBQUN6Qyx5QkFBS2pDLElBQUwsR0FBWWtDLElBQUl0QixJQUFoQjtBQUNBaEMsMEJBQVFDLEdBQVIsQ0FBWSxPQUFLbUIsSUFBakI7QUFDQSx5QkFBS21DLE1BQUw7QUFDSCxpQkFKSyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOURxQkMsZUFBS0MsSTtrQkFBakJ0RCxHIiwiZmlsZSI6InRvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJyAvLyBhbGlhcyBleGFtcGxlXG4gIGltcG9ydCBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbGlzdCcgLy8gYWxpYXNGaWVsZHMgZXhhbXBsZVxuICBpbXBvcnQgbW9kdWxlQSBmcm9tICdtb2R1bGUtYScgLy8gYWxpYXNGaWVsZHMgaWdub3JlIG1vZHVsZSBleGFtcGxlXG4gIGltcG9ydCBHcm91cCBmcm9tICcuLi9jb21wb25lbnRzL2dyb3VwJ1xuICBpbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG4gIGltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG4gIGltcG9ydCBTd2lwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zd2lwZXInXG4gIGltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXG4gIGltcG9ydCBBZHMgZnJvbSAnLi4vY29tcG9uZW50cy9hZHMnXG4gIGltcG9ydCBhbmltZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9hbmltZUxpc3QnXG5cblxuXG4gIGNvbnNvbGUubG9nKCdtb2R1bGVBIGlnbm9yZWQ6ICcsIG1vZHVsZUEpIC8vID0+IG1vZHVsZUEgaWdub3JlZDoge31cblxuICBAY29ubmVjdCh7XG4gICAgbnVtIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gICAgfSxcbiAgICBhc3luY051bSAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfSxcbiAgICBzdW1OdW0gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW0gKyBzdGF0ZS5jb3VudGVyLmFzeW5jTnVtXG4gICAgfVxuICB9KVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i/veeVquaOqOiNkCdcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIlN3aXBlclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJzd2lwZXJzXCIsXCJoZWlnaHRcIjpcIjI4MFwifSxcIkFkc1wiOntcInYtYmluZDphZHMub25jZVwiOlwiYWRzXCJ9LFwiYW5pbWVMaXN0XCI6e1widi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwidGl0bGVcIjpcIui/veeVquaOqOiNkFwiLFwidi1iaW5kOmxvYWRpbmcuc3luY1wiOlwibG9hZGluZ1wiLFwidi1iaW5kOm5vTW9yZS5zeW5jXCI6XCJub01vcmVMaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHBhbmVsOiBQYW5lbCxcbiAgICAgIGNvdW50ZXIxOiBDb3VudGVyLFxuICAgICAgY291bnRlcjI6IENvdW50ZXIsXG4gICAgICBsaXN0OiBMaXN0LFxuICAgICAgZ3JvdXA6IEdyb3VwLFxuICAgICAgdG9hc3Q6IFRvYXN0LFxuICAgICAgU3dpcGVyOlN3aXBlcixcbiAgICAgIFNlYXJjaEJhcjpTZWFyY2hCYXIsXG4gICAgICBBZHM6QWRzLFxuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFt0ZXN0TWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgc3dpcGVyczogW1xuICAgICAgICB7aW1hZ2U6ICdodHRwczovLzIzMy5jYWxhbXVzLnh5ei8yLmpwZycsIHVybDogJyd9LFxuICAgICAgICB7aW1hZ2U6ICdodHRwczovLzIzMy5jYWxhbXVzLnh5ei8zLmpwZycsIHVybDogJyd9XG4gICAgICBdLFxuICAgICAgYWRzOlsn5qyi6L+O5Yqg576k77yaNTc1MTgwODM3Jywn5Li756uZ77yad3d3LmNhbGFtdXMueHl6J10sXG4gICAgICBsaXN0OltdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBub3cgKCkge1xuICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgIH1cbiAgICB9XG4vL3d4bWzkuovku7blpITnkIblh73mlbDlr7nosaHvvIzlrZjmlL7lk43lupR3eG1s5Lit5omA5o2V6I635Yiw55qE5LqL5Lu255qE5Ye95pWw77yM5aaCYmluZHRhcOOAgWJpbmRjaGFuZ2VcbiAgICBtZXRob2RzID0ge1xuICAgICAgXG4gICAgfVxuLy9XZVBZ57uE5Lu25LqL5Lu25aSE55CG5Ye95pWw5a+56LGh77yM5a2Y5pS+5ZON5bqU57uE5Lu25LmL6Ze06YCa6L+HJGJyb2FkY2FzdOOAgSRlbWl044CBJGludm9rZeaJgOS8oOmAkueahOS6i+S7tueahOWHveaVsFxuICAgIGV2ZW50cyA9IHtcbiAgICAgIFxuICAgIH1cbiAgICBvblJlYWR5KCl7XG4gICAgICB0aGlzLmluaXRQYWdlKCk7XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgIH1cbiAgICBcbiAgLy/nlJ/lkb3lkajmnJ/lh73mlbDvvIzlhbbku5boh6rlrprkuYnmlrnms5XnrYlcbiAgICBpbml0UGFnZSgpe1xuICAgICAgICB0aGlzLmdldEFuaW1lKClcbiAgICAgICAgdGhpcy5pbml0UGFnZURhdGEoKVxuICAgIH1cbiAgICBpbml0UGFnZURhdGEoKXtcbiAgICAgIC8vIOWkhOeQhui9ruaSreWbvlxuICAgICAgdGhpcy5zd2lwZXJzLnB1c2goe2ltYWdlOiAnaHR0cHM6Ly8yMzMuY2FsYW11cy54eXovMS5qcGcnLHVybDonJ30pXG4gICAgfVxuICAgIGFzeW5jIGdldEFuaW1lKCl7XG4gICAgICAgIGNvbnN0IGRiID0gd3guY2xvdWQuZGF0YWJhc2UoKVxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdhbmltZScpLmdldCgpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9KVxuICAgIH1cbiAgfVxuIl19