"use strict";

exports.__esModule = true;
exports.default = handleActions;

var _reduceReducers = _interopRequireDefault(require('./../../reduce-reducers/lib/index.js'));

var _invariant = _interopRequireDefault(require('./../../invariant/browser.js'));

var _isPlainObject = _interopRequireDefault(require('./utils/isPlainObject.js'));

var _isMap = _interopRequireDefault(require('./utils/isMap.js'));

var _ownKeys = _interopRequireDefault(require('./utils/ownKeys.js'));

var _flattenReducerMap = _interopRequireDefault(require('./utils/flattenReducerMap.js'));

var _handleAction = _interopRequireDefault(require('./handleAction.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(key, x) {
  return (0, _isMap.default)(x) ? x.get(key) : x[key];
}

function handleActions(handlers, defaultState, options) {
  if (options === void 0) {
    options = {};
  }

  (0, _invariant.default)((0, _isPlainObject.default)(handlers) || (0, _isMap.default)(handlers), 'Expected handlers to be a plain object.');
  var flattenedReducerMap = (0, _flattenReducerMap.default)(handlers, options);
  var reducers = (0, _ownKeys.default)(flattenedReducerMap).map(function (type) {
    return (0, _handleAction.default)(type, get(type, flattenedReducerMap), defaultState);
  });

  var reducer = _reduceReducers.default.apply(void 0, reducers.concat([defaultState]));

  return function (state, action) {
    if (state === void 0) {
      state = defaultState;
    }

    return reducer(state, action);
  };
}