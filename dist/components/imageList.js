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

var ImageList = function (_wepy$component) {
  _inherits(ImageList, _wepy$component);

  function ImageList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageList.__proto__ || Object.getPrototypeOf(ImageList)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
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
      /**
       * [type 列表类型：常规列表/收藏列表]
       * @type {list/collect}
       */
      type: {
        type: String,
        default: 'list'
      }
    }, _this.data = {
      icon_eye: '/images/icon/icon-eye@2x.png',
      icon_eye_active: '/images/icon/icon-eye-active@2x.png',
      icon_star: '/images/icon/icon-star@2x.png',
      icon_star_active: '/images/icon/icon-star-active@2x.png'
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

  return ImageList;
}(_wepy2.default.component);

exports.default = ImageList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlTGlzdC5qcyJdLCJuYW1lcyI6WyJJbWFnZUxpc3QiLCJjb21wb25lbnRzIiwiU3RhcnMiLCJtaXhpbnMiLCJiYXNlIiwiaHR0cCIsInByb3BzIiwibGlzdCIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwidGl0bGUiLCJTdHJpbmciLCJzdGFyIiwibG9hZGluZyIsIkJvb2xlYW4iLCJub01vcmUiLCJkYXRhIiwiaWNvbl9leWUiLCJpY29uX2V5ZV9hY3RpdmUiLCJpY29uX3N0YXIiLCJpY29uX3N0YXJfYWN0aXZlIiwiY29tcHV0ZWQiLCJpc0NvbGxlY3RMaXN0IiwibWV0aG9kcyIsInRvU3RhciIsImJvb2siLCJpbmRleCIsImlzQ29sbGVjdCIsImNvbGxlY3RlZCIsIm5ld1R5cGUiLCJuZXdUeXBlVGV4dCIsIiRwb3N0IiwidXJsIiwiYm9va19pZHMiLCJpZCIsInN1Y2Nlc3MiLCJjb2RlIiwiaXNPYmplY3QiLCJ3eCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImZhaWwiLCJpbWFnZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLFUsR0FBYTtBQUNYQyxhQUFPQTtBQURJLEssUUFHYkMsTSxHQUFTLENBQUNDLGNBQUQsRUFBT0MsY0FBUCxDLFFBQ1RDLEssR0FBUTtBQUNOQyxZQUFNO0FBQ0pDLGNBQU1DLE1BREY7QUFFSkMsaUJBQVM7QUFGTCxPQURBO0FBS05DLGFBQU87QUFDTEgsY0FBTUksTUFERDtBQUVMRixpQkFBUztBQUZKLE9BTEQ7QUFTTkcsWUFBSztBQUNISCxpQkFBUTtBQURMLE9BVEM7QUFZTkksZUFBUztBQUNQTixjQUFNTyxPQURDO0FBRVBMLGlCQUFTO0FBRkYsT0FaSDtBQWdCTk0sY0FBUTtBQUNOUixjQUFNTyxPQURBO0FBRU5MLGlCQUFTO0FBRkgsT0FoQkY7QUFvQk47Ozs7QUFJQUYsWUFBTTtBQUNKQSxjQUFNSSxNQURGO0FBRUpGLGlCQUFTO0FBRkw7QUF4QkEsSyxRQThCUk8sSSxHQUFPO0FBQ0xDLGdCQUFVLDhCQURMO0FBRUxDLHVCQUFpQixxQ0FGWjtBQUdMQyxpQkFBVywrQkFITjtBQUlMQyx3QkFBa0I7QUFKYixLLFFBT1BDLFEsR0FBVztBQUNUQyxtQkFEUywyQkFDTztBQUNkLGVBQU8sS0FBS2YsSUFBTCxLQUFjLFNBQXJCO0FBQ0Q7QUFIUSxLLFFBTVhnQixPLEdBQVU7QUFDUkMsWUFEUSxrQkFDREMsSUFEQyxFQUNLQyxLQURMLEVBQ1k7QUFBQTs7QUFDbEI7QUFDQSxZQUFNQyxZQUFZYixRQUFRVyxRQUFRLENBQUNBLEtBQUtHLFNBQXRCLENBQWxCO0FBQ0EsWUFBTUMsVUFBVUYsWUFBWSxDQUFaLEdBQWdCLENBQWhDO0FBQ0EsWUFBTUcsY0FBY0QsVUFBVSxJQUFWLEdBQWlCLElBQXJDO0FBQ0E7QUFDQSxhQUFLRSxLQUFMLENBQVc7QUFDVEMsZUFBSyxFQURJO0FBRVRoQixnQkFBTTtBQUNKaUIsc0JBQVUsQ0FBQ1IsS0FBS1MsRUFBTixDQUROO0FBRUozQixrQkFBTXNCO0FBRkY7QUFGRyxTQUFYLEVBTUc7QUFDRE0sbUJBQVMsd0JBQWtCO0FBQUEsZ0JBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7QUFBQSxnQkFBVnBCLElBQVUsU0FBVkEsSUFBVTs7QUFDekI7QUFDQSxnQkFBSSxPQUFLcUIsUUFBTCxDQUFjLE9BQUsvQixJQUFMLENBQVVvQixLQUFWLENBQWQsQ0FBSixFQUFxQztBQUNuQyxxQkFBS3BCLElBQUwsQ0FBVW9CLEtBQVYsRUFBaUJFLFNBQWpCLEdBQTZCQyxPQUE3QjtBQUNEO0FBQ0RTLGVBQUdDLFNBQUgsQ0FBYTtBQUNYN0IscUJBQVVvQixXQUFWLHVCQURXO0FBRVhVLG9CQUFNLFNBRks7QUFHWEMsd0JBQVU7QUFIQyxhQUFiO0FBS0QsV0FYQTtBQVlEQyxnQkFBTSxxQkFBa0I7QUFBQSxnQkFBaEJOLElBQWdCLFNBQWhCQSxJQUFnQjtBQUFBLGdCQUFWcEIsSUFBVSxTQUFWQSxJQUFVOztBQUN0QjtBQUNBO0FBQ0E7QUFDQXNCLGVBQUdDLFNBQUgsQ0FBYTtBQUNYN0IscUJBQVVvQixXQUFWLG1DQURXO0FBRVhVLG9CQUFNLFNBRks7QUFHWEcscUJBQU8sOEJBSEk7QUFJWEYsd0JBQVU7QUFKQyxhQUFiO0FBTUQ7QUF0QkEsU0FOSDtBQThCRDtBQXJDTyxLOzs7O0VBaEQyQkcsZUFBS0MsUzs7a0JBQXZCOUMsUyIsImZpbGUiOiJpbWFnZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGh0dHAgZnJvbSAnLi4vbWl4aW5zL2h0dHAnXG4gIGltcG9ydCBiYXNlIGZyb20gJy4uL21peGlucy9iYXNlJ1xuICBpbXBvcnQgU3RhcnMgZnJvbSAnLi9zdGFycydcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgIFN0YXJzOiBTdGFyc1xuICAgIH1cbiAgICBtaXhpbnMgPSBbYmFzZSwgaHR0cF1cbiAgICBwcm9wcyA9IHtcbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgfSxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogJ+aOqOiNkOi/veeVquihqCdcbiAgICAgIH0sXG4gICAgICBzdGFyOntcbiAgICAgICAgZGVmYXVsdDonJ1xuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBub01vcmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogW3R5cGUg5YiX6KGo57G75Z6L77ya5bi46KeE5YiX6KGoL+aUtuiXj+WIl+ihqF1cbiAgICAgICAqIEB0eXBlIHtsaXN0L2NvbGxlY3R9XG4gICAgICAgKi9cbiAgICAgIHR5cGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiAnbGlzdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgaWNvbl9leWU6ICcvaW1hZ2VzL2ljb24vaWNvbi1leWVAMngucG5nJyxcbiAgICAgIGljb25fZXllX2FjdGl2ZTogJy9pbWFnZXMvaWNvbi9pY29uLWV5ZS1hY3RpdmVAMngucG5nJyxcbiAgICAgIGljb25fc3RhcjogJy9pbWFnZXMvaWNvbi9pY29uLXN0YXJAMngucG5nJyxcbiAgICAgIGljb25fc3Rhcl9hY3RpdmU6ICcvaW1hZ2VzL2ljb24vaWNvbi1zdGFyLWFjdGl2ZUAyeC5wbmcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICBpc0NvbGxlY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnY29sbGVjdCdcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9TdGFyKGJvb2ssIGluZGV4KSB7XG4gICAgICAgIC8vIOWwhuimgeWPkeeUn+eahOaUtuiXj+WKqOS9nFxuICAgICAgICBjb25zdCBpc0NvbGxlY3QgPSBCb29sZWFuKGJvb2sgJiYgK2Jvb2suY29sbGVjdGVkKVxuICAgICAgICBjb25zdCBuZXdUeXBlID0gaXNDb2xsZWN0ID8gMCA6IDFcbiAgICAgICAgY29uc3QgbmV3VHlwZVRleHQgPSBuZXdUeXBlID8gJ+a3u+WKoCcgOiAn5Y+W5raIJ1xuICAgICAgICAvLyDmlLbol4/mnKzkuaZcbiAgICAgICAgdGhpcy4kcG9zdCh7XG4gICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBib29rX2lkczogW2Jvb2suaWRdLFxuICAgICAgICAgICAgdHlwZTogbmV3VHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vIOmHjee9ruacrOS5puaUtuiXj+eKtuaAgVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5saXN0W2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5saXN0W2luZGV4XS5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6ICh7Y29kZSwgZGF0YX0pID0+IHtcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6LCD6K+V5Luj56CBID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgIC8vIHRoaXMuYm9vay5jb2xsZWN0ZWQgPSBuZXdUeXBlXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOiwg+ivleS7o+eggSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogYCR7bmV3VHlwZVRleHR95pS26JeP5aSx6LSl77yBYCxcbiAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgICAgICAgICBpbWFnZTogJy9pbWFnZXMvaWNvbi9pY29uLWNhbmNlbC5wbmcnLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=