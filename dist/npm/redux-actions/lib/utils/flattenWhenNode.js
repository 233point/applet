"use strict";

exports.__esModule = true;
exports.default = void 0;

var _constants = require('./../constants.js');

var _isMap = _interopRequireDefault(require('./isMap.js'));

var _ownKeys = _interopRequireDefault(require('./ownKeys.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(key, x) {
  return (0, _isMap.default)(x) ? x.get(key) : x[key];
}

var _default = function _default(predicate) {
  return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? _constants.DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;

    if (partialFlatMap === void 0) {
      partialFlatMap = {};
    }

    if (partialFlatActionType === void 0) {
      partialFlatActionType = '';
    }

    function connectNamespace(type) {
      var _ref2;

      if (!partialFlatActionType) return type;
      var types = type.toString().split(_constants.ACTION_TYPE_DELIMITER);
      var partials = partialFlatActionType.split(_constants.ACTION_TYPE_DELIMITER);
      return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
        return types.map(function (t) {
          return "" + p + namespace + t;
        });
      })).join(_constants.ACTION_TYPE_DELIMITER);
    }

    function connectPrefix(type) {
      if (partialFlatActionType || !prefix) {
        return type;
      }

      return "" + prefix + namespace + type;
    }

    (0, _ownKeys.default)(map).forEach(function (type) {
      var nextNamespace = connectPrefix(connectNamespace(type));
      var mapValue = get(type, map);

      if (predicate(mapValue)) {
        flatten(mapValue, {
          namespace: namespace,
          prefix: prefix
        }, partialFlatMap, nextNamespace);
      } else {
        partialFlatMap[nextNamespace] = mapValue;
      }
    });
    return partialFlatMap;
  };
};

exports.default = _default;