'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/top', 'pages/img', 'pages/index', 'pages/old', 'pages/user', 'pages/detail', 'pages/search', 'pages/searchTag', 'pages/webDetail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FF5577',
        navigationBarTitleText: '233次元',
        navigationBarTextStyle: '#fff'
      },
      tabBar: {
        color: '#AEADAD',
        selectedColor: '#FF5577',
        backgroundColor: '#fff',
        borderStyle: 'black',
        "list": [{
          pagePath: 'pages/top',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-mark@2x.png',
          text: '追番推荐'
        }, {
          pagePath: 'pages/old',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-shelf@2x.png',
          text: '类型索引'
        }, {
          pagePath: 'pages/user',
          selectedIconPath: './images/tabbars/active.jpg',
          iconPath: './images/tabbars/icon-smile@2x.png',
          text: '我的追番'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.testAsync();
                this.testCloud();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.sleep(3);

              case 2:
                data = _context2.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function testAsync() {
        return _ref2.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'testCloud',
    value: function testCloud() {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力');
      } else {
        wx.cloud.init({
          traceUser: true,
          env: 'dev-9638fc'
        });
      }
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclN0eWxlIiwicGFnZVBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiaWNvblBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwidXNlIiwidGVzdEFzeW5jIiwidGVzdENsb3VkIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsImNsb3VkIiwiZXJyb3IiLCJpbml0IiwidHJhY2VVc2VyIiwiZW52IiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozs7O0FBa0RFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUEvQ2ZDLE1BK0NlLEdBL0NOO0FBQ1BDLGFBQU8sQ0FDTCxXQURLLEVBRUwsV0FGSyxFQUdMLGFBSEssRUFJTCxXQUpLLEVBS0wsWUFMSyxFQU1MLGNBTkssRUFPTCxjQVBLLEVBUUwsaUJBUkssRUFTTCxpQkFUSyxDQURBO0FBWVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixPQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0FaRDtBQWtCUEMsY0FBUTtBQUNOQyxlQUFPLFNBREQ7QUFFTkMsdUJBQWUsU0FGVDtBQUdOQyx5QkFBaUIsTUFIWDtBQUlOQyxxQkFBYSxPQUpQO0FBS0osZ0JBQVEsQ0FBQztBQUNUQyxvQkFBVSxXQUREO0FBRVRDLDRCQUFrQiw2QkFGVDtBQUdUQyxvQkFBVSxtQ0FIRDtBQUlUQyxnQkFBTTtBQUpHLFNBQUQsRUFLUjtBQUNBSCxvQkFBVSxXQURWO0FBRUFDLDRCQUFrQiw2QkFGbEI7QUFHQUMsb0JBQVUsb0NBSFY7QUFJQUMsZ0JBQU07QUFKTixTQUxRLEVBVVA7QUFDREgsb0JBQVUsWUFEVDtBQUVEQyw0QkFBa0IsNkJBRmpCO0FBR0RDLG9CQUFVLG9DQUhUO0FBSURDLGdCQUFNO0FBSkwsU0FWTztBQUxKO0FBbEJELEtBK0NNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSGE7QUFJZDs7Ozs7Ozs7OztBQUdDLHFCQUFLQyxTQUFMO0FBQ0EscUJBQUtDLFNBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHS0MsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdTO0FBQ1QsVUFBSSxDQUFDRyxHQUFHQyxLQUFSLEVBQWU7QUFDYkgsZ0JBQVFJLEtBQVIsQ0FBYyx5QkFBZDtBQUNELE9BRkQsTUFFTztBQUNMRixXQUFHQyxLQUFILENBQVNFLElBQVQsQ0FBYztBQUNaQyxxQkFBVyxJQURDO0FBRVpDLGVBQUs7QUFGTyxTQUFkO0FBSUQ7QUFDRjs7O2dDQUVXQyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtyQixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRHFCLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSixlQUFLckIsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJ3QixJQUFJeEIsUUFBL0I7QUFDQW1CLGdCQUFNQSxHQUFHSyxJQUFJeEIsUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBOUYwQnFCLGVBQUtJLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5pbXBvcnQgeyBzZXRTdG9yZSB9IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG5zZXRTdG9yZShzdG9yZSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3RvcCcsXG4gICAgICAncGFnZXMvaW1nJyxcbiAgICAgICdwYWdlcy9pbmRleCcsXG4gICAgICAncGFnZXMvb2xkJyxcbiAgICAgICdwYWdlcy91c2VyJyxcbiAgICAgICdwYWdlcy9kZXRhaWwnLFxuICAgICAgJ3BhZ2VzL3NlYXJjaCcsXG4gICAgICAncGFnZXMvc2VhcmNoVGFnJyxcbiAgICAgICdwYWdlcy93ZWJEZXRhaWwnXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGNTU3NycsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnMjMz5qyh5YWDJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyNBRUFEQUQnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyNGRjU1NzcnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXJTdHlsZTogJ2JsYWNrJyxcbiAgICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvdG9wJyxcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvYWN0aXZlLmpwZycsXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9pY29uLW1hcmtAMngucG5nJyxcbiAgICAgICAgdGV4dDogJ+i/veeVquaOqOiNkCdcbiAgICAgIH0se1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL29sZCcsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2FjdGl2ZS5qcGcnLFxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL3RhYmJhcnMvaWNvbi1zaGVsZkAyeC5wbmcnLFxuICAgICAgICB0ZXh0OiAn57G75Z6L57Si5byVJ1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXInLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvdGFiYmFycy9hY3RpdmUuanBnJyxcbiAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy90YWJiYXJzL2ljb24tc21pbGVAMngucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahOi/veeVqidcbiAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIHRoaXMudXNlKCdwcm9taXNpZnknKVxuICB9XG5cbiAgYXN5bmMgb25MYXVuY2goKSB7XG4gICAgdGhpcy50ZXN0QXN5bmMoKVxuICAgIHRoaXMudGVzdENsb3VkKClcbiAgfVxuXG4gIHNsZWVwIChzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgIH0sIHMgKiAxMDAwKVxuICAgIH0pXG4gIH1cblxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIHRlc3RDbG91ZCgpe1xuICAgIGlmICghd3guY2xvdWQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+ivt+S9v+eUqCAyLjIuMyDmiJbku6XkuIrnmoTln7rnoYDlupPku6Xkvb/nlKjkupHog73lipsnKVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5jbG91ZC5pbml0KHtcbiAgICAgICAgdHJhY2VVc2VyOiB0cnVlLFxuICAgICAgICBlbnY6ICdkZXYtOTYzOGZjJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==