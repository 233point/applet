'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _user = require('./../mixins/user.js');

var _user2 = _interopRequireDefault(_user);

var _animeList = require('./../components/animeList.js');

var _animeList2 = _interopRequireDefault(_animeList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
  _inherits(User, _wepy$page);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: 'onReady',
    value: function onReady() {
      this.initPageData();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      // 初始化页面数据
      this.$getUserInfo(function (info) {
        var uinfo = _this2.getObject(info);
        var userInfo = _this2.getObject(_this2.userInfo);
        _this2.userInfo = Object.assign({}, userInfo, uinfo);
      });
      this.initPageData();
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.initPageData();
    }
  }, {
    key: 'initPageData',
    value: function initPageData() {
      this.getAnime();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this3 = this;

      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: function success(res) {
                _this3.userInfo = Object.assign(_this3.userInfo, res.userInfo);
                _this3.userFlag = true;
                _this3.$apply();
              }
            });
          }
        }
      });
    }
  }, {
    key: 'getAnime',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        var db;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = wx.cloud.database();
                _context.next = 3;
                return db.collection('anime').get().then(function (res) {
                  _this4.collectionList = res.data;
                  console.log("collectionList", _this4.collectionList);
                  _this4.$apply();
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

  return User;
}(_wepy2.default.page);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.config = {
    navigationBarTitleText: '朕的寝宫'
  };
  this.$repeat = {};
  this.$props = { "animeList": { "title": "我的追番", "xmlns:v-bind": "", "v-bind:star.sync": "star", "v-bind:loading.sync": "loading", "v-bind:list.sync": "collectionList", "nomoretitle": "暂无追番", "v-bind:noMore.sync": "noMoreList" } };
  this.$events = {};
  this.components = {
    animeList: _animeList2.default
  };
  this.mixins = [_base2.default, _http2.default, _user2.default];
  this.data = {
    userFlag: true,
    userInfo: {
      nickName: '侍奉无上至尊之人',
      // 头像占位图
      avatarUrl: 'https://cdn.calamus.xyz/user.jpg',
      identity: {
        type: '罪域之骨终成王',
        collection: 1
      }
    },
    collectionList: []
  };
  this.computed = {
    star: function star() {
      return this.collectionList.length;
    },
    identity: function identity() {
      return this.getObject(this.getObject(this.userInfo).identity);
    },
    nickName: function nickName() {
      var info = this.getObject(this.userInfo);
      // 名称或头像不为空的，才认为是授权用户
      return info.nickName || info.avatarUrl ? info.nickName : '未授权用户';
    }
  };
  this.methods = {};
  this.events = {
    'index-emit': function indexEmit() {
      var _ref3;

      var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
      console.log(_this5.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
    }
  };
};


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImluaXRQYWdlRGF0YSIsIiRnZXRVc2VySW5mbyIsImluZm8iLCJ1aW5mbyIsImdldE9iamVjdCIsInVzZXJJbmZvIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0QW5pbWUiLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsInVzZXJGbGFnIiwiJGFwcGx5IiwiZGIiLCJjbG91ZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJjb2xsZWN0aW9uTGlzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiYW5pbWVMaXN0IiwibWl4aW5zIiwiYmFzZSIsImh0dHAiLCJ1c2VyIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJpZGVudGl0eSIsInR5cGUiLCJjb21wdXRlZCIsInN0YXIiLCJsZW5ndGgiLCJtZXRob2RzIiwiZXZlbnRzIiwiJGV2ZW50IiwiJG5hbWUiLCJuYW1lIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUtxQkEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFtRFY7QUFDUCxXQUFLQyxZQUFMO0FBQ0Q7Ozs2QkFDTztBQUFBOztBQUNMO0FBQ0QsV0FBS0MsWUFBTCxDQUFrQixVQUFDQyxJQUFELEVBQVU7QUFDMUIsWUFBTUMsUUFBUSxPQUFLQyxTQUFMLENBQWVGLElBQWYsQ0FBZDtBQUNBLFlBQU1HLFdBQVcsT0FBS0QsU0FBTCxDQUFlLE9BQUtDLFFBQXBCLENBQWpCO0FBQ0EsZUFBS0EsUUFBTCxHQUFnQkMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLFFBQWxCLEVBQTRCRixLQUE1QixDQUFoQjtBQUNELE9BSkQ7QUFLQSxXQUFLSCxZQUFMO0FBQ0Q7Ozt3Q0FDbUI7QUFDbEIsV0FBS0EsWUFBTDtBQUNEOzs7bUNBQ2E7QUFDWixXQUFLUSxRQUFMO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUNQQyxTQUFHQyxVQUFILENBQWM7QUFDUkMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxJQUFJQyxXQUFKLENBQWdCLGdCQUFoQixDQUFKLEVBQXVDO0FBQ3JDO0FBQ0FKLGVBQUdLLFdBQUgsQ0FBZTtBQUNiSCx1QkFBUyxzQkFBTztBQUNkLHVCQUFLTixRQUFMLEdBQWdCQyxPQUFPQyxNQUFQLENBQWMsT0FBS0YsUUFBbkIsRUFBNEJPLElBQUlQLFFBQWhDLENBQWhCO0FBQ0EsdUJBQUtVLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSx1QkFBS0MsTUFBTDtBQUNEO0FBTFksYUFBZjtBQU9EO0FBQ0Y7QUFaTyxPQUFkO0FBY0Q7Ozs7Ozs7Ozs7OztBQUVXQyxrQixHQUFLUixHQUFHUyxLQUFILENBQVNDLFFBQVQsRTs7dUJBQ0xGLEdBQUdHLFVBQUgsQ0FBYyxPQUFkLEVBQXVCQyxHQUF2QixHQUE2QkMsSUFBN0IsQ0FBa0MsZUFBSztBQUN6Qyx5QkFBS0MsY0FBTCxHQUFzQlgsSUFBSVksSUFBMUI7QUFDQUMsMEJBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QixPQUFLSCxjQUFsQztBQUNBLHlCQUFLUCxNQUFMO0FBQ0gsaUJBSkssQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZGb0JXLGVBQUtDLEk7Ozs7O09BQ3JDQyxNLEdBQVM7QUFDUEMsNEJBQXdCO0FBRGpCLEc7T0FHVkMsTyxHQUFVLEU7T0FDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLFNBQVEsTUFBVCxFQUFnQixnQkFBZSxFQUEvQixFQUFrQyxvQkFBbUIsTUFBckQsRUFBNEQsdUJBQXNCLFNBQWxGLEVBQTRGLG9CQUFtQixnQkFBL0csRUFBZ0ksZUFBYyxNQUE5SSxFQUFxSixzQkFBcUIsWUFBMUssRUFBYixFO09BQ1RDLE8sR0FBVSxFO09BQ1RDLFUsR0FBYTtBQUNSQyxlQUFVQTtBQURGLEc7T0FJVkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxFQUFhQyxjQUFiLEM7T0FFVGYsSSxHQUFPO0FBQ0xULGNBQVMsSUFESjtBQUVMVixjQUFVO0FBQ1JtQyxnQkFBVSxVQURGO0FBRVI7QUFDQUMsaUJBQVcsa0NBSEg7QUFJUkMsZ0JBQVU7QUFDUkMsY0FBTSxTQURFO0FBRVJ2QixvQkFBWTtBQUZKO0FBSkYsS0FGTDtBQVdMRyxvQkFBZTtBQVhWLEc7T0FjUHFCLFEsR0FBVztBQUNUQyxRQURTLGtCQUNIO0FBQ0osYUFBTyxLQUFLdEIsY0FBTCxDQUFvQnVCLE1BQTNCO0FBQ0QsS0FIUTtBQUlUSixZQUpTLHNCQUlFO0FBQ1QsYUFBTyxLQUFLdEMsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZSxLQUFLQyxRQUFwQixFQUE4QnFDLFFBQTdDLENBQVA7QUFDRCxLQU5RO0FBT1RGLFlBUFMsc0JBT0U7QUFDVCxVQUFNdEMsT0FBTyxLQUFLRSxTQUFMLENBQWUsS0FBS0MsUUFBcEIsQ0FBYjtBQUNBO0FBQ0EsYUFBUUgsS0FBS3NDLFFBQUwsSUFBaUJ0QyxLQUFLdUMsU0FBdkIsR0FBb0N2QyxLQUFLc0MsUUFBekMsR0FBb0QsT0FBM0Q7QUFDRDtBQVhRLEc7T0FjWE8sTyxHQUFVLEU7T0FJVkMsTSxHQUFTO0FBQ1Asa0JBQWMscUJBQWE7QUFBQTs7QUFDekIsVUFBSUMsa0JBQWMsVUFBS0gsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FyQixjQUFRQyxHQUFSLENBQWUsT0FBS3dCLEtBQXBCLGlCQUFxQ0QsT0FBT0UsSUFBNUMsY0FBeURGLE9BQU9HLE1BQVAsQ0FBY0YsS0FBdkU7QUFDRDtBQUpNLEc7OztrQkE3Q1VuRCxJIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgdXNlciBmcm9tICcuLi9taXhpbnMvdXNlcidcbiAgaW1wb3J0IGFuaW1lTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2FuaW1lTGlzdCdcblxuXG5cblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pyV55qE5a+d5a6rJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiYW5pbWVMaXN0XCI6e1widGl0bGVcIjpcIuaIkeeahOi/veeVqlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzdGFyLnN5bmNcIjpcInN0YXJcIixcInYtYmluZDpsb2FkaW5nLnN5bmNcIjpcImxvYWRpbmdcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImNvbGxlY3Rpb25MaXN0XCIsXCJub21vcmV0aXRsZVwiOlwi5pqC5peg6L+955WqXCIsXCJ2LWJpbmQ6bm9Nb3JlLnN5bmNcIjpcIm5vTW9yZUxpc3RcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgYW5pbWVMaXN0OmFuaW1lTGlzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtiYXNlLCBodHRwLCB1c2VyXVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJGbGFnOnRydWUsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+S+jeWlieaXoOS4iuiHs+WwiuS5i+S6uicsXG4gICAgICAgIC8vIOWktOWDj+WNoOS9jeWbvlxuICAgICAgICBhdmF0YXJVcmw6ICdodHRwczovL2Nkbi5jYWxhbXVzLnh5ei91c2VyLmpwZycsXG4gICAgICAgIGlkZW50aXR5OiB7XG4gICAgICAgICAgdHlwZTogJ+e9quWfn+S5i+mqqOe7iOaIkOeOiycsXG4gICAgICAgICAgY29sbGVjdGlvbjogMVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvbGxlY3Rpb25MaXN0OltdXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBzdGFyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25MaXN0Lmxlbmd0aFxuICAgICAgfSxcbiAgICAgIGlkZW50aXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QodGhpcy5nZXRPYmplY3QodGhpcy51c2VySW5mbykuaWRlbnRpdHkpXG4gICAgICB9LFxuICAgICAgbmlja05hbWUoKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICAvLyDlkI3np7DmiJblpLTlg4/kuI3kuLrnqbrnmoTvvIzmiY3orqTkuLrmmK/mjojmnYPnlKjmiLdcbiAgICAgICAgcmV0dXJuIChpbmZvLm5pY2tOYW1lIHx8IGluZm8uYXZhdGFyVXJsKSA/IGluZm8ubmlja05hbWUgOiAn5pyq5o6I5p2D55So5oi3J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICAnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBvblJlYWR5KCl7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBvblNob3coKXtcbiAgICAgICAvLyDliJ3lp4vljJbpobXpnaLmlbDmja5cbiAgICAgIHRoaXMuJGdldFVzZXJJbmZvKChpbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHVpbmZvID0gdGhpcy5nZXRPYmplY3QoaW5mbylcbiAgICAgICAgY29uc3QgdXNlckluZm8gPSB0aGlzLmdldE9iamVjdCh0aGlzLnVzZXJJbmZvKVxuICAgICAgICB0aGlzLnVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgdXNlckluZm8sIHVpbmZvKVxuICAgICAgfSlcbiAgICAgIHRoaXMuaW5pdFBhZ2VEYXRhKClcbiAgICB9XG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICB0aGlzLmluaXRQYWdlRGF0YSgpXG4gICAgfVxuICAgIGluaXRQYWdlRGF0YSgpe1xuICAgICAgdGhpcy5nZXRBbmltZSgpXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJJbmZvLHJlcy51c2VySW5mbykgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckZsYWcgPSB0cnVlIDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICB9XG4gICAgYXN5bmMgZ2V0QW5pbWUoKXtcbiAgICAgICAgICBjb25zdCBkYiA9IHd4LmNsb3VkLmRhdGFiYXNlKClcbiAgICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCdhbmltZScpLmdldCgpLnRoZW4ocmVzPT57XG4gICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbkxpc3QgPSByZXMuZGF0YSA7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29sbGVjdGlvbkxpc3RcIix0aGlzLmNvbGxlY3Rpb25MaXN0KVxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cbiJdfQ==