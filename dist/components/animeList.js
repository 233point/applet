'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _http = require('./../mixins/http.js');

var _http2 = _interopRequireDefault(_http);

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _stars = require('./stars.js');

var _stars2 = _interopRequireDefault(_stars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var animeList = function (_wepy$component) {
  _inherits(animeList, _wepy$component);

  function animeList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, animeList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = animeList.__proto__ || Object.getPrototypeOf(animeList)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "Stars": { "xmlns:v-bind": "", "v-bind:star.once": "item.stars" } }, _this.$events = {}, _this.components = {
      Stars: _stars2.default
    }, _this.mixins = [_base2.default, _http2.default], _this.props = {
      list: {
        type: Object,
        default: []
      },
      title: {
        type: String,
        default: '推荐追番表'
      },
      star: {
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      noMore: {
        type: Boolean,
        default: true
      },
      nomoretitle: {
        type: String,
        default: '暂无推荐'
      },
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
      }
    }, _this.data = {
      icon_eye: '/images/icon/addBefore.jpg',
      icon_eye_active: '/images/icon/addAfter.jpg'
    }, _this.computed = {
      isCollectList: function isCollectList() {
        return this.type === 'collect';
      }
    }, _this.methods = {
      toStar: function toStar(book, index) {
        var _this2 = this;

        // 将要发生的收藏动作
        var isCollect = Boolean(book && +book.collected);
        var newType = isCollect ? 0 : 1;
        var newTypeText = newType ? '添加' : '取消';
        // 收藏本书
        this.$post({
          url: '',
          data: {
            book_ids: [book.id],
            type: newType
          }
        }, {
          success: function success(_ref2) {
            var code = _ref2.code,
                data = _ref2.data;

            // 重置本书收藏状态
            if (_this2.isObject(_this2.list[index])) {
              _this2.list[index].collected = newType;
            }
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\uFF01',
              icon: 'success',
              duration: 1000
            });
          },
          fail: function fail(_ref3) {
            var code = _ref3.code,
                data = _ref3.data;

            // =============================== 调试代码 ===============================
            // this.book.collected = newType
            // =============================== 调试代码 ===============================
            wx.showToast({
              title: newTypeText + '\u6536\u85CF\u5931\u8D25\uFF01',
              icon: 'loading',
              image: '/images/icon/icon-cancel.png',
              duration: 1000
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return animeList;
}(_wepy2.default.component);

exports.default = animeList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1lTGlzdC5qcyJdLCJuYW1lcyI6WyJhbmltZUxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJTdGFycyIsIm1peGlucyIsImJhc2UiLCJodHRwIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJ0aXRsZSIsIlN0cmluZyIsInN0YXIiLCJsb2FkaW5nIiwiQm9vbGVhbiIsIm5vTW9yZSIsIm5vbW9yZXRpdGxlIiwiZGF0YSIsImljb25fZXllIiwiaWNvbl9leWVfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInRvU3RhciIsImJvb2siLCJpbmRleCIsImlzQ29sbGVjdCIsImNvbGxlY3RlZCIsIm5ld1R5cGUiLCJuZXdUeXBlVGV4dCIsIiRwb3N0IiwidXJsIiwiYm9va19pZHMiLCJpZCIsInN1Y2Nlc3MiLCJjb2RlIiwiaXNPYmplY3QiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImZhaWwiLCJpbWFnZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDcEJDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsWUFBdEMsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNSQyxhQUFPQTtBQURDLEssUUFHVkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUZKLE9BTEQ7QUFTTkcsWUFBSztBQUNISCxpQkFBUTtBQURMLE9BVEM7QUFZTkksZUFBUztBQUNQTixjQUFNTyxPQURDO0FBRVBMLGlCQUFTO0FBRkYsT0FaSDtBQWdCTk0sY0FBUTtBQUNOUixjQUFNTyxPQURBO0FBRU5MLGlCQUFTO0FBRkgsT0FoQkY7QUFvQk5PLG1CQUFZO0FBQ1ZULGNBQUtJLE1BREs7QUFFVkYsaUJBQVE7QUFGRSxPQXBCTjtBQXdCTjs7OztBQUlBRixZQUFNO0FBQ0pBLGNBQU1JLE1BREY7QUFFSkYsaUJBQVM7QUFGTDtBQTVCQSxLLFFBa0NSUSxJLEdBQU87QUFDTEMsZ0JBQVUsNEJBREw7QUFFTEMsdUJBQWlCO0FBRlosSyxRQUtQQyxRLEdBQVc7QUFDVEMsbUJBRFMsMkJBQ087QUFDZCxlQUFPLEtBQUtkLElBQUwsS0FBYyxTQUFyQjtBQUNEO0FBSFEsSyxRQU1YZSxPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZWixRQUFRVSxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxFQURJO0FBRVRkLGdCQUFNO0FBQ0plLHNCQUFVLENBQUNSLEtBQUtTLEVBQU4sQ0FETjtBQUVKMUIsa0JBQU1xQjtBQUZGO0FBRkcsU0FBWCxFQU1HO0FBQ0RNLG1CQUFTLHdCQUFrQjtBQUFBLGdCQUFoQkMsSUFBZ0IsU0FBaEJBLElBQWdCO0FBQUEsZ0JBQVZsQixJQUFVLFNBQVZBLElBQVU7O0FBQ3pCO0FBQ0EsZ0JBQUksT0FBS21CLFFBQUwsQ0FBYyxPQUFLOUIsSUFBTCxDQUFVbUIsS0FBVixDQUFkLENBQUosRUFBcUM7QUFDbkMscUJBQUtuQixJQUFMLENBQVVtQixLQUFWLEVBQWlCRSxTQUFqQixHQUE2QkMsT0FBN0I7QUFDRDtBQUNEUyxlQUFHQyxTQUFILENBQWE7QUFDWDVCLHFCQUFVbUIsV0FBVix1QkFEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVO0FBSEMsYUFBYjtBQUtELFdBWEE7QUFZREMsZ0JBQU0scUJBQWtCO0FBQUEsZ0JBQWhCTixJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVmxCLElBQVUsU0FBVkEsSUFBVTs7QUFDdEI7QUFDQTtBQUNBO0FBQ0FvQixlQUFHQyxTQUFILENBQWE7QUFDWDVCLHFCQUFVbUIsV0FBVixtQ0FEVztBQUVYVSxvQkFBTSxTQUZLO0FBR1hHLHFCQUFPLDhCQUhJO0FBSVhGLHdCQUFVO0FBSkMsYUFBYjtBQU1EO0FBdEJBLFNBTkg7QUE4QkQ7QUFyQ08sSzs7OztFQXJEMkJHLGVBQUtDLFM7O2tCQUF2QmhELFMiLCJmaWxlIjoiYW5pbWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBodHRwIGZyb20gJy4uL21peGlucy9odHRwJ1xuICBpbXBvcnQgYmFzZSBmcm9tICcuLi9taXhpbnMvYmFzZSdcbiAgaW1wb3J0IFN0YXJzIGZyb20gJy4vc3RhcnMnXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYW5pbWVMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJTdGFyc1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c3Rhci5vbmNlXCI6XCJpdGVtLnN0YXJzXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXJzOiBTdGFyc1xuICAgIH1cbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG5vbW9yZXRpdGxlOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6J+aaguaXoOaOqOiNkCdcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFt0eXBlIOWIl+ihqOexu+Wei++8muW4uOinhOWIl+ihqC/mlLbol4/liJfooahdXG4gICAgICAgKiBAdHlwZSB7bGlzdC9jb2xsZWN0fVxuICAgICAgICovXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ2xpc3QnXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGljb25fZXllOiAnL2ltYWdlcy9pY29uL2FkZEJlZm9yZS5qcGcnLFxuICAgICAgaWNvbl9leWVfYWN0aXZlOiAnL2ltYWdlcy9pY29uL2FkZEFmdGVyLmpwZydcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIGlzQ29sbGVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdjb2xsZWN0J1xuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1N0YXIoYm9vaywgaW5kZXgpIHtcbiAgICAgICAgLy8g5bCG6KaB5Y+R55Sf55qE5pS26JeP5Yqo5L2cXG4gICAgICAgIGNvbnN0IGlzQ29sbGVjdCA9IEJvb2xlYW4oYm9vayAmJiArYm9vay5jb2xsZWN0ZWQpXG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSBpc0NvbGxlY3QgPyAwIDogMVxuICAgICAgICBjb25zdCBuZXdUeXBlVGV4dCA9IG5ld1R5cGUgPyAn5re75YqgJyA6ICflj5bmtognXG4gICAgICAgIC8vIOaUtuiXj+acrOS5plxuICAgICAgICB0aGlzLiRwb3N0KHtcbiAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGJvb2tfaWRzOiBbYm9vay5pZF0sXG4gICAgICAgICAgICB0eXBlOiBuZXdUeXBlXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgc3VjY2VzczogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8g6YeN572u5pys5Lmm5pS26JeP54q25oCBXG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmxpc3RbaW5kZXhdKSkge1xuICAgICAgICAgICAgICB0aGlzLmxpc3RbaW5kZXhdLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/vvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogKHtjb2RlLCBkYXRhfSkgPT4ge1xuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDosIPor5Xku6PnoIEgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgLy8gdGhpcy5ib29rLmNvbGxlY3RlZCA9IG5ld1R5cGVcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBgJHtuZXdUeXBlVGV4dH3mlLbol4/lpLHotKXvvIFgLFxuICAgICAgICAgICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICAgICAgICAgIGltYWdlOiAnL2ltYWdlcy9pY29uL2ljb24tY2FuY2VsLnBuZycsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdfQ==