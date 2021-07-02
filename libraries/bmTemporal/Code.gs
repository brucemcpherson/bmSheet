var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var index_umd = createCommonjsModule(function(module, exports) {
  (function(global2, factory) {
    factory(exports);
  })(commonjsGlobal, function(exports2) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor2 = props[i];
        descriptor2.enumerable = descriptor2.enumerable || false;
        descriptor2.configurable = true;
        if ("value" in descriptor2)
          descriptor2.writable = true;
        Object.defineProperty(target, descriptor2.key, descriptor2);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it;
      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          var F = function() {
          };
          return {
            s: F,
            n: function() {
              if (i >= o.length)
                return {
                  done: true
                };
              return {
                done: false,
                value: o[i++]
              };
            },
            e: function(e) {
              throw e;
            },
            f: F
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return {
        s: function() {
          it = o[Symbol.iterator]();
        },
        n: function() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        },
        e: function(e) {
          didErr = true;
          err = e;
        },
        f: function() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err;
          }
        }
      };
    }
    function createCommonjsModule2(fn, basedir, module2) {
      return module2 = {
        path: basedir,
        exports: {},
        require: function(path, base) {
          return commonjsRequire2(path, base === void 0 || base === null ? module2.path : base);
        }
      }, fn(module2, module2.exports), module2.exports;
    }
    function commonjsRequire2() {
      throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
    }
    var BigInteger = createCommonjsModule2(function(module2) {
      var bigInt = function(undefined$12) {
        var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
        var supportsNativeBigInt = typeof BigInt === "function";
        function Integer(v, radix, alphabet, caseSensitive) {
          if (typeof v === "undefined")
            return Integer[0];
          if (typeof radix !== "undefined")
            return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
          return parseValue(v);
        }
        function BigInteger2(value, sign2) {
          this.value = value;
          this.sign = sign2;
          this.isSmall = false;
        }
        BigInteger2.prototype = Object.create(Integer.prototype);
        function SmallInteger(value) {
          this.value = value;
          this.sign = value < 0;
          this.isSmall = true;
        }
        SmallInteger.prototype = Object.create(Integer.prototype);
        function NativeBigInt(value) {
          this.value = value;
        }
        NativeBigInt.prototype = Object.create(Integer.prototype);
        function isPrecise(n) {
          return -MAX_INT < n && n < MAX_INT;
        }
        function smallToArray(n) {
          if (n < 1e7)
            return [n];
          if (n < 1e14)
            return [n % 1e7, Math.floor(n / 1e7)];
          return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
        }
        function arrayToSmall(arr) {
          trim(arr);
          var length = arr.length;
          if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
            switch (length) {
              case 0:
                return 0;
              case 1:
                return arr[0];
              case 2:
                return arr[0] + arr[1] * BASE;
              default:
                return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
            }
          }
          return arr;
        }
        function trim(v) {
          var i2 = v.length;
          while (v[--i2] === 0)
            ;
          v.length = i2 + 1;
        }
        function createArray(length) {
          var x = new Array(length);
          var i2 = -1;
          while (++i2 < length) {
            x[i2] = 0;
          }
          return x;
        }
        function truncate(n) {
          if (n > 0)
            return Math.floor(n);
          return Math.ceil(n);
        }
        function add(a, b) {
          var l_a = a.length, l_b = b.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
          for (i2 = 0; i2 < l_b; i2++) {
            sum = a[i2] + b[i2] + carry;
            carry = sum >= base ? 1 : 0;
            r[i2] = sum - carry * base;
          }
          while (i2 < l_a) {
            sum = a[i2] + carry;
            carry = sum === base ? 1 : 0;
            r[i2++] = sum - carry * base;
          }
          if (carry > 0)
            r.push(carry);
          return r;
        }
        function addAny(a, b) {
          if (a.length >= b.length)
            return add(a, b);
          return add(b, a);
        }
        function addSmall(a, carry) {
          var l = a.length, r = new Array(l), base = BASE, sum, i2;
          for (i2 = 0; i2 < l; i2++) {
            sum = a[i2] - base + carry;
            carry = Math.floor(sum / base);
            r[i2] = sum - carry * base;
            carry += 1;
          }
          while (carry > 0) {
            r[i2++] = carry % base;
            carry = Math.floor(carry / base);
          }
          return r;
        }
        BigInteger2.prototype.add = function(v) {
          var n = parseValue(v);
          if (this.sign !== n.sign) {
            return this.subtract(n.negate());
          }
          var a = this.value, b = n.value;
          if (n.isSmall) {
            return new BigInteger2(addSmall(a, Math.abs(b)), this.sign);
          }
          return new BigInteger2(addAny(a, b), this.sign);
        };
        BigInteger2.prototype.plus = BigInteger2.prototype.add;
        SmallInteger.prototype.add = function(v) {
          var n = parseValue(v);
          var a = this.value;
          if (a < 0 !== n.sign) {
            return this.subtract(n.negate());
          }
          var b = n.value;
          if (n.isSmall) {
            if (isPrecise(a + b))
              return new SmallInteger(a + b);
            b = smallToArray(Math.abs(b));
          }
          return new BigInteger2(addSmall(b, Math.abs(a)), a < 0);
        };
        SmallInteger.prototype.plus = SmallInteger.prototype.add;
        NativeBigInt.prototype.add = function(v) {
          return new NativeBigInt(this.value + parseValue(v).value);
        };
        NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
        function subtract(a, b) {
          var a_l = a.length, b_l = b.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
          for (i2 = 0; i2 < b_l; i2++) {
            difference = a[i2] - borrow - b[i2];
            if (difference < 0) {
              difference += base;
              borrow = 1;
            } else
              borrow = 0;
            r[i2] = difference;
          }
          for (i2 = b_l; i2 < a_l; i2++) {
            difference = a[i2] - borrow;
            if (difference < 0)
              difference += base;
            else {
              r[i2++] = difference;
              break;
            }
            r[i2] = difference;
          }
          for (; i2 < a_l; i2++) {
            r[i2] = a[i2];
          }
          trim(r);
          return r;
        }
        function subtractAny(a, b, sign2) {
          var value;
          if (compareAbs(a, b) >= 0) {
            value = subtract(a, b);
          } else {
            value = subtract(b, a);
            sign2 = !sign2;
          }
          value = arrayToSmall(value);
          if (typeof value === "number") {
            if (sign2)
              value = -value;
            return new SmallInteger(value);
          }
          return new BigInteger2(value, sign2);
        }
        function subtractSmall(a, b, sign2) {
          var l = a.length, r = new Array(l), carry = -b, base = BASE, i2, difference;
          for (i2 = 0; i2 < l; i2++) {
            difference = a[i2] + carry;
            carry = Math.floor(difference / base);
            difference %= base;
            r[i2] = difference < 0 ? difference + base : difference;
          }
          r = arrayToSmall(r);
          if (typeof r === "number") {
            if (sign2)
              r = -r;
            return new SmallInteger(r);
          }
          return new BigInteger2(r, sign2);
        }
        BigInteger2.prototype.subtract = function(v) {
          var n = parseValue(v);
          if (this.sign !== n.sign) {
            return this.add(n.negate());
          }
          var a = this.value, b = n.value;
          if (n.isSmall)
            return subtractSmall(a, Math.abs(b), this.sign);
          return subtractAny(a, b, this.sign);
        };
        BigInteger2.prototype.minus = BigInteger2.prototype.subtract;
        SmallInteger.prototype.subtract = function(v) {
          var n = parseValue(v);
          var a = this.value;
          if (a < 0 !== n.sign) {
            return this.add(n.negate());
          }
          var b = n.value;
          if (n.isSmall) {
            return new SmallInteger(a - b);
          }
          return subtractSmall(b, Math.abs(a), a >= 0);
        };
        SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
        NativeBigInt.prototype.subtract = function(v) {
          return new NativeBigInt(this.value - parseValue(v).value);
        };
        NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
        BigInteger2.prototype.negate = function() {
          return new BigInteger2(this.value, !this.sign);
        };
        SmallInteger.prototype.negate = function() {
          var sign2 = this.sign;
          var small = new SmallInteger(-this.value);
          small.sign = !sign2;
          return small;
        };
        NativeBigInt.prototype.negate = function() {
          return new NativeBigInt(-this.value);
        };
        BigInteger2.prototype.abs = function() {
          return new BigInteger2(this.value, false);
        };
        SmallInteger.prototype.abs = function() {
          return new SmallInteger(Math.abs(this.value));
        };
        NativeBigInt.prototype.abs = function() {
          return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
        };
        function multiplyLong(a, b) {
          var a_l = a.length, b_l = b.length, l = a_l + b_l, r = createArray(l), base = BASE, product, carry, i2, a_i, b_j;
          for (i2 = 0; i2 < a_l; ++i2) {
            a_i = a[i2];
            for (var j = 0; j < b_l; ++j) {
              b_j = b[j];
              product = a_i * b_j + r[i2 + j];
              carry = Math.floor(product / base);
              r[i2 + j] = product - carry * base;
              r[i2 + j + 1] += carry;
            }
          }
          trim(r);
          return r;
        }
        function multiplySmall(a, b) {
          var l = a.length, r = new Array(l), base = BASE, carry = 0, product, i2;
          for (i2 = 0; i2 < l; i2++) {
            product = a[i2] * b + carry;
            carry = Math.floor(product / base);
            r[i2] = product - carry * base;
          }
          while (carry > 0) {
            r[i2++] = carry % base;
            carry = Math.floor(carry / base);
          }
          return r;
        }
        function shiftLeft(x, n) {
          var r = [];
          while (n-- > 0)
            r.push(0);
          return r.concat(x);
        }
        function multiplyKaratsuba(x, y) {
          var n = Math.max(x.length, y.length);
          if (n <= 30)
            return multiplyLong(x, y);
          n = Math.ceil(n / 2);
          var b = x.slice(n), a = x.slice(0, n), d = y.slice(n), c = y.slice(0, n);
          var ac = multiplyKaratsuba(a, c), bd = multiplyKaratsuba(b, d), abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
          var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
          trim(product);
          return product;
        }
        function useKaratsuba(l1, l2) {
          return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
        }
        BigInteger2.prototype.multiply = function(v) {
          var n = parseValue(v), a = this.value, b = n.value, sign2 = this.sign !== n.sign, abs2;
          if (n.isSmall) {
            if (b === 0)
              return Integer[0];
            if (b === 1)
              return this;
            if (b === -1)
              return this.negate();
            abs2 = Math.abs(b);
            if (abs2 < BASE) {
              return new BigInteger2(multiplySmall(a, abs2), sign2);
            }
            b = smallToArray(abs2);
          }
          if (useKaratsuba(a.length, b.length))
            return new BigInteger2(multiplyKaratsuba(a, b), sign2);
          return new BigInteger2(multiplyLong(a, b), sign2);
        };
        BigInteger2.prototype.times = BigInteger2.prototype.multiply;
        function multiplySmallAndArray(a, b, sign2) {
          if (a < BASE) {
            return new BigInteger2(multiplySmall(b, a), sign2);
          }
          return new BigInteger2(multiplyLong(b, smallToArray(a)), sign2);
        }
        SmallInteger.prototype._multiplyBySmall = function(a) {
          if (isPrecise(a.value * this.value)) {
            return new SmallInteger(a.value * this.value);
          }
          return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
        };
        BigInteger2.prototype._multiplyBySmall = function(a) {
          if (a.value === 0)
            return Integer[0];
          if (a.value === 1)
            return this;
          if (a.value === -1)
            return this.negate();
          return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
        };
        SmallInteger.prototype.multiply = function(v) {
          return parseValue(v)._multiplyBySmall(this);
        };
        SmallInteger.prototype.times = SmallInteger.prototype.multiply;
        NativeBigInt.prototype.multiply = function(v) {
          return new NativeBigInt(this.value * parseValue(v).value);
        };
        NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
        function square(a) {
          var l = a.length, r = createArray(l + l), base = BASE, product, carry, i2, a_i, a_j;
          for (i2 = 0; i2 < l; i2++) {
            a_i = a[i2];
            carry = 0 - a_i * a_i;
            for (var j = i2; j < l; j++) {
              a_j = a[j];
              product = 2 * (a_i * a_j) + r[i2 + j] + carry;
              carry = Math.floor(product / base);
              r[i2 + j] = product - carry * base;
            }
            r[i2 + l] = carry;
          }
          trim(r);
          return r;
        }
        BigInteger2.prototype.square = function() {
          return new BigInteger2(square(this.value), false);
        };
        SmallInteger.prototype.square = function() {
          var value = this.value * this.value;
          if (isPrecise(value))
            return new SmallInteger(value);
          return new BigInteger2(square(smallToArray(Math.abs(this.value))), false);
        };
        NativeBigInt.prototype.square = function(v) {
          return new NativeBigInt(this.value * this.value);
        };
        function divMod1(a, b) {
          var a_l = a.length, b_l = b.length, base = BASE, result = createArray(b.length), divisorMostSignificantDigit = b[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b, lambda), quotientDigit, shift, carry, borrow, i2, l, q;
          if (remainder.length <= a_l)
            remainder.push(0);
          divisor.push(0);
          divisorMostSignificantDigit = divisor[b_l - 1];
          for (shift = a_l - b_l; shift >= 0; shift--) {
            quotientDigit = base - 1;
            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
              quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
            }
            carry = 0;
            borrow = 0;
            l = divisor.length;
            for (i2 = 0; i2 < l; i2++) {
              carry += quotientDigit * divisor[i2];
              q = Math.floor(carry / base);
              borrow += remainder[shift + i2] - (carry - q * base);
              carry = q;
              if (borrow < 0) {
                remainder[shift + i2] = borrow + base;
                borrow = -1;
              } else {
                remainder[shift + i2] = borrow;
                borrow = 0;
              }
            }
            while (borrow !== 0) {
              quotientDigit -= 1;
              carry = 0;
              for (i2 = 0; i2 < l; i2++) {
                carry += remainder[shift + i2] - base + divisor[i2];
                if (carry < 0) {
                  remainder[shift + i2] = carry + base;
                  carry = 0;
                } else {
                  remainder[shift + i2] = carry;
                  carry = 1;
                }
              }
              borrow += carry;
            }
            result[shift] = quotientDigit;
          }
          remainder = divModSmall(remainder, lambda)[0];
          return [arrayToSmall(result), arrayToSmall(remainder)];
        }
        function divMod2(a, b) {
          var a_l = a.length, b_l = b.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
          while (a_l) {
            part.unshift(a[--a_l]);
            trim(part);
            if (compareAbs(part, b) < 0) {
              result.push(0);
              continue;
            }
            xlen = part.length;
            highx = part[xlen - 1] * base + part[xlen - 2];
            highy = b[b_l - 1] * base + b[b_l - 2];
            if (xlen > b_l) {
              highx = (highx + 1) * base;
            }
            guess = Math.ceil(highx / highy);
            do {
              check = multiplySmall(b, guess);
              if (compareAbs(check, part) <= 0)
                break;
              guess--;
            } while (guess);
            result.push(guess);
            part = subtract(part, check);
          }
          result.reverse();
          return [arrayToSmall(result), arrayToSmall(part)];
        }
        function divModSmall(value, lambda) {
          var length = value.length, quotient = createArray(length), base = BASE, i2, q, remainder, divisor;
          remainder = 0;
          for (i2 = length - 1; i2 >= 0; --i2) {
            divisor = remainder * base + value[i2];
            q = truncate(divisor / lambda);
            remainder = divisor - q * lambda;
            quotient[i2] = q | 0;
          }
          return [quotient, remainder | 0];
        }
        function divModAny(self2, v) {
          var value, n = parseValue(v);
          if (supportsNativeBigInt) {
            return [new NativeBigInt(self2.value / n.value), new NativeBigInt(self2.value % n.value)];
          }
          var a = self2.value, b = n.value;
          var quotient;
          if (b === 0)
            throw new Error("Cannot divide by zero");
          if (self2.isSmall) {
            if (n.isSmall) {
              return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
            }
            return [Integer[0], self2];
          }
          if (n.isSmall) {
            if (b === 1)
              return [self2, Integer[0]];
            if (b == -1)
              return [self2.negate(), Integer[0]];
            var abs2 = Math.abs(b);
            if (abs2 < BASE) {
              value = divModSmall(a, abs2);
              quotient = arrayToSmall(value[0]);
              var remainder = value[1];
              if (self2.sign)
                remainder = -remainder;
              if (typeof quotient === "number") {
                if (self2.sign !== n.sign)
                  quotient = -quotient;
                return [new SmallInteger(quotient), new SmallInteger(remainder)];
              }
              return [new BigInteger2(quotient, self2.sign !== n.sign), new SmallInteger(remainder)];
            }
            b = smallToArray(abs2);
          }
          var comparison = compareAbs(a, b);
          if (comparison === -1)
            return [Integer[0], self2];
          if (comparison === 0)
            return [Integer[self2.sign === n.sign ? 1 : -1], Integer[0]];
          if (a.length + b.length <= 200)
            value = divMod1(a, b);
          else
            value = divMod2(a, b);
          quotient = value[0];
          var qSign = self2.sign !== n.sign, mod = value[1], mSign = self2.sign;
          if (typeof quotient === "number") {
            if (qSign)
              quotient = -quotient;
            quotient = new SmallInteger(quotient);
          } else
            quotient = new BigInteger2(quotient, qSign);
          if (typeof mod === "number") {
            if (mSign)
              mod = -mod;
            mod = new SmallInteger(mod);
          } else
            mod = new BigInteger2(mod, mSign);
          return [quotient, mod];
        }
        BigInteger2.prototype.divmod = function(v) {
          var result = divModAny(this, v);
          return {
            quotient: result[0],
            remainder: result[1]
          };
        };
        NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger2.prototype.divmod;
        BigInteger2.prototype.divide = function(v) {
          return divModAny(this, v)[0];
        };
        NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v) {
          return new NativeBigInt(this.value / parseValue(v).value);
        };
        SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger2.prototype.over = BigInteger2.prototype.divide;
        BigInteger2.prototype.mod = function(v) {
          return divModAny(this, v)[1];
        };
        NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v) {
          return new NativeBigInt(this.value % parseValue(v).value);
        };
        SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger2.prototype.remainder = BigInteger2.prototype.mod;
        BigInteger2.prototype.pow = function(v) {
          var n = parseValue(v), a = this.value, b = n.value, value, x, y;
          if (b === 0)
            return Integer[1];
          if (a === 0)
            return Integer[0];
          if (a === 1)
            return Integer[1];
          if (a === -1)
            return n.isEven() ? Integer[1] : Integer[-1];
          if (n.sign) {
            return Integer[0];
          }
          if (!n.isSmall)
            throw new Error("The exponent " + n.toString() + " is too large.");
          if (this.isSmall) {
            if (isPrecise(value = Math.pow(a, b)))
              return new SmallInteger(truncate(value));
          }
          x = this;
          y = Integer[1];
          while (true) {
            if (b & true) {
              y = y.times(x);
              --b;
            }
            if (b === 0)
              break;
            b /= 2;
            x = x.square();
          }
          return y;
        };
        SmallInteger.prototype.pow = BigInteger2.prototype.pow;
        NativeBigInt.prototype.pow = function(v) {
          var n = parseValue(v);
          var a = this.value, b = n.value;
          var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
          if (b === _0)
            return Integer[1];
          if (a === _0)
            return Integer[0];
          if (a === _1)
            return Integer[1];
          if (a === BigInt(-1))
            return n.isEven() ? Integer[1] : Integer[-1];
          if (n.isNegative())
            return new NativeBigInt(_0);
          var x = this;
          var y = Integer[1];
          while (true) {
            if ((b & _1) === _1) {
              y = y.times(x);
              --b;
            }
            if (b === _0)
              break;
            b /= _2;
            x = x.square();
          }
          return y;
        };
        BigInteger2.prototype.modPow = function(exp, mod) {
          exp = parseValue(exp);
          mod = parseValue(mod);
          if (mod.isZero())
            throw new Error("Cannot take modPow with modulus 0");
          var r = Integer[1], base = this.mod(mod);
          if (exp.isNegative()) {
            exp = exp.multiply(Integer[-1]);
            base = base.modInv(mod);
          }
          while (exp.isPositive()) {
            if (base.isZero())
              return Integer[0];
            if (exp.isOdd())
              r = r.multiply(base).mod(mod);
            exp = exp.divide(2);
            base = base.square().mod(mod);
          }
          return r;
        };
        NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger2.prototype.modPow;
        function compareAbs(a, b) {
          if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
          }
          for (var i2 = a.length - 1; i2 >= 0; i2--) {
            if (a[i2] !== b[i2])
              return a[i2] > b[i2] ? 1 : -1;
          }
          return 0;
        }
        BigInteger2.prototype.compareAbs = function(v) {
          var n = parseValue(v), a = this.value, b = n.value;
          if (n.isSmall)
            return 1;
          return compareAbs(a, b);
        };
        SmallInteger.prototype.compareAbs = function(v) {
          var n = parseValue(v), a = Math.abs(this.value), b = n.value;
          if (n.isSmall) {
            b = Math.abs(b);
            return a === b ? 0 : a > b ? 1 : -1;
          }
          return -1;
        };
        NativeBigInt.prototype.compareAbs = function(v) {
          var a = this.value;
          var b = parseValue(v).value;
          a = a >= 0 ? a : -a;
          b = b >= 0 ? b : -b;
          return a === b ? 0 : a > b ? 1 : -1;
        };
        BigInteger2.prototype.compare = function(v) {
          if (v === Infinity) {
            return -1;
          }
          if (v === -Infinity) {
            return 1;
          }
          var n = parseValue(v), a = this.value, b = n.value;
          if (this.sign !== n.sign) {
            return n.sign ? 1 : -1;
          }
          if (n.isSmall) {
            return this.sign ? -1 : 1;
          }
          return compareAbs(a, b) * (this.sign ? -1 : 1);
        };
        BigInteger2.prototype.compareTo = BigInteger2.prototype.compare;
        SmallInteger.prototype.compare = function(v) {
          if (v === Infinity) {
            return -1;
          }
          if (v === -Infinity) {
            return 1;
          }
          var n = parseValue(v), a = this.value, b = n.value;
          if (n.isSmall) {
            return a == b ? 0 : a > b ? 1 : -1;
          }
          if (a < 0 !== n.sign) {
            return a < 0 ? -1 : 1;
          }
          return a < 0 ? 1 : -1;
        };
        SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
        NativeBigInt.prototype.compare = function(v) {
          if (v === Infinity) {
            return -1;
          }
          if (v === -Infinity) {
            return 1;
          }
          var a = this.value;
          var b = parseValue(v).value;
          return a === b ? 0 : a > b ? 1 : -1;
        };
        NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
        BigInteger2.prototype.equals = function(v) {
          return this.compare(v) === 0;
        };
        NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger2.prototype.eq = BigInteger2.prototype.equals;
        BigInteger2.prototype.notEquals = function(v) {
          return this.compare(v) !== 0;
        };
        NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger2.prototype.neq = BigInteger2.prototype.notEquals;
        BigInteger2.prototype.greater = function(v) {
          return this.compare(v) > 0;
        };
        NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger2.prototype.gt = BigInteger2.prototype.greater;
        BigInteger2.prototype.lesser = function(v) {
          return this.compare(v) < 0;
        };
        NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger2.prototype.lt = BigInteger2.prototype.lesser;
        BigInteger2.prototype.greaterOrEquals = function(v) {
          return this.compare(v) >= 0;
        };
        NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger2.prototype.geq = BigInteger2.prototype.greaterOrEquals;
        BigInteger2.prototype.lesserOrEquals = function(v) {
          return this.compare(v) <= 0;
        };
        NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger2.prototype.leq = BigInteger2.prototype.lesserOrEquals;
        BigInteger2.prototype.isEven = function() {
          return (this.value[0] & 1) === 0;
        };
        SmallInteger.prototype.isEven = function() {
          return (this.value & 1) === 0;
        };
        NativeBigInt.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0);
        };
        BigInteger2.prototype.isOdd = function() {
          return (this.value[0] & 1) === 1;
        };
        SmallInteger.prototype.isOdd = function() {
          return (this.value & 1) === 1;
        };
        NativeBigInt.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1);
        };
        BigInteger2.prototype.isPositive = function() {
          return !this.sign;
        };
        SmallInteger.prototype.isPositive = function() {
          return this.value > 0;
        };
        NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
        BigInteger2.prototype.isNegative = function() {
          return this.sign;
        };
        SmallInteger.prototype.isNegative = function() {
          return this.value < 0;
        };
        NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
        BigInteger2.prototype.isUnit = function() {
          return false;
        };
        SmallInteger.prototype.isUnit = function() {
          return Math.abs(this.value) === 1;
        };
        NativeBigInt.prototype.isUnit = function() {
          return this.abs().value === BigInt(1);
        };
        BigInteger2.prototype.isZero = function() {
          return false;
        };
        SmallInteger.prototype.isZero = function() {
          return this.value === 0;
        };
        NativeBigInt.prototype.isZero = function() {
          return this.value === BigInt(0);
        };
        BigInteger2.prototype.isDivisibleBy = function(v) {
          var n = parseValue(v);
          if (n.isZero())
            return false;
          if (n.isUnit())
            return true;
          if (n.compareAbs(2) === 0)
            return this.isEven();
          return this.mod(n).isZero();
        };
        NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger2.prototype.isDivisibleBy;
        function isBasicPrime(v) {
          var n = v.abs();
          if (n.isUnit())
            return false;
          if (n.equals(2) || n.equals(3) || n.equals(5))
            return true;
          if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5))
            return false;
          if (n.lesser(49))
            return true;
        }
        function millerRabinTest(n, a) {
          var nPrev = n.prev(), b = nPrev, r = 0, d, i2, x;
          while (b.isEven())
            b = b.divide(2), r++;
          next:
            for (i2 = 0; i2 < a.length; i2++) {
              if (n.lesser(a[i2]))
                continue;
              x = bigInt(a[i2]).modPow(b, n);
              if (x.isUnit() || x.equals(nPrev))
                continue;
              for (d = r - 1; d != 0; d--) {
                x = x.square().mod(n);
                if (x.isUnit())
                  return false;
                if (x.equals(nPrev))
                  continue next;
              }
              return false;
            }
          return true;
        }
        BigInteger2.prototype.isPrime = function(strict) {
          var isPrime = isBasicPrime(this);
          if (isPrime !== undefined$12)
            return isPrime;
          var n = this.abs();
          var bits = n.bitLength();
          if (bits <= 64)
            return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          var logN = Math.log(2) * bits.toJSNumber();
          var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
          for (var a = [], i2 = 0; i2 < t; i2++) {
            a.push(bigInt(i2 + 2));
          }
          return millerRabinTest(n, a);
        };
        NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger2.prototype.isPrime;
        BigInteger2.prototype.isProbablePrime = function(iterations, rng) {
          var isPrime = isBasicPrime(this);
          if (isPrime !== undefined$12)
            return isPrime;
          var n = this.abs();
          var t = iterations === undefined$12 ? 5 : iterations;
          for (var a = [], i2 = 0; i2 < t; i2++) {
            a.push(bigInt.randBetween(2, n.minus(2), rng));
          }
          return millerRabinTest(n, a);
        };
        NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger2.prototype.isProbablePrime;
        BigInteger2.prototype.modInv = function(n) {
          var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
          while (!newR.isZero()) {
            q = r.divide(newR);
            lastT = t;
            lastR = r;
            t = newT;
            r = newR;
            newT = lastT.subtract(q.multiply(newT));
            newR = lastR.subtract(q.multiply(newR));
          }
          if (!r.isUnit())
            throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
          if (t.compare(0) === -1) {
            t = t.add(n);
          }
          if (this.isNegative()) {
            return t.negate();
          }
          return t;
        };
        NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger2.prototype.modInv;
        BigInteger2.prototype.next = function() {
          var value = this.value;
          if (this.sign) {
            return subtractSmall(value, 1, this.sign);
          }
          return new BigInteger2(addSmall(value, 1), this.sign);
        };
        SmallInteger.prototype.next = function() {
          var value = this.value;
          if (value + 1 < MAX_INT)
            return new SmallInteger(value + 1);
          return new BigInteger2(MAX_INT_ARR, false);
        };
        NativeBigInt.prototype.next = function() {
          return new NativeBigInt(this.value + BigInt(1));
        };
        BigInteger2.prototype.prev = function() {
          var value = this.value;
          if (this.sign) {
            return new BigInteger2(addSmall(value, 1), true);
          }
          return subtractSmall(value, 1, this.sign);
        };
        SmallInteger.prototype.prev = function() {
          var value = this.value;
          if (value - 1 > -MAX_INT)
            return new SmallInteger(value - 1);
          return new BigInteger2(MAX_INT_ARR, true);
        };
        NativeBigInt.prototype.prev = function() {
          return new NativeBigInt(this.value - BigInt(1));
        };
        var powersOfTwo = [1];
        while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE)
          powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
        var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
        function shift_isSmall(n) {
          return Math.abs(n) <= BASE;
        }
        BigInteger2.prototype.shiftLeft = function(v) {
          var n = parseValue(v).toJSNumber();
          if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
          }
          if (n < 0)
            return this.shiftRight(-n);
          var result = this;
          if (result.isZero())
            return result;
          while (n >= powers2Length) {
            result = result.multiply(highestPower2);
            n -= powers2Length - 1;
          }
          return result.multiply(powersOfTwo[n]);
        };
        NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger2.prototype.shiftLeft;
        BigInteger2.prototype.shiftRight = function(v) {
          var remQuo;
          var n = parseValue(v).toJSNumber();
          if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
          }
          if (n < 0)
            return this.shiftLeft(-n);
          var result = this;
          while (n >= powers2Length) {
            if (result.isZero() || result.isNegative() && result.isUnit())
              return result;
            remQuo = divModAny(result, highestPower2);
            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
            n -= powers2Length - 1;
          }
          remQuo = divModAny(result, powersOfTwo[n]);
          return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
        };
        NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger2.prototype.shiftRight;
        function bitwise(x, y, fn) {
          y = parseValue(y);
          var xSign = x.isNegative(), ySign = y.isNegative();
          var xRem = xSign ? x.not() : x, yRem = ySign ? y.not() : y;
          var xDigit = 0, yDigit = 0;
          var xDivMod = null, yDivMod = null;
          var result = [];
          while (!xRem.isZero() || !yRem.isZero()) {
            xDivMod = divModAny(xRem, highestPower2);
            xDigit = xDivMod[1].toJSNumber();
            if (xSign) {
              xDigit = highestPower2 - 1 - xDigit;
            }
            yDivMod = divModAny(yRem, highestPower2);
            yDigit = yDivMod[1].toJSNumber();
            if (ySign) {
              yDigit = highestPower2 - 1 - yDigit;
            }
            xRem = xDivMod[0];
            yRem = yDivMod[0];
            result.push(fn(xDigit, yDigit));
          }
          var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
          for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
            sum = sum.multiply(highestPower2).add(bigInt(result[i2]));
          }
          return sum;
        }
        BigInteger2.prototype.not = function() {
          return this.negate().prev();
        };
        NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger2.prototype.not;
        BigInteger2.prototype.and = function(n) {
          return bitwise(this, n, function(a, b) {
            return a & b;
          });
        };
        NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger2.prototype.and;
        BigInteger2.prototype.or = function(n) {
          return bitwise(this, n, function(a, b) {
            return a | b;
          });
        };
        NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger2.prototype.or;
        BigInteger2.prototype.xor = function(n) {
          return bitwise(this, n, function(a, b) {
            return a ^ b;
          });
        };
        NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger2.prototype.xor;
        var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
        function roughLOB(n) {
          var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
          return x & -x;
        }
        function integerLogarithm(value, base) {
          if (base.compareTo(value) <= 0) {
            var tmp = integerLogarithm(value, base.square(base));
            var p = tmp.p;
            var e = tmp.e;
            var t = p.multiply(base);
            return t.compareTo(value) <= 0 ? {p: t, e: e * 2 + 1} : {p, e: e * 2};
          }
          return {p: bigInt(1), e: 0};
        }
        BigInteger2.prototype.bitLength = function() {
          var n = this;
          if (n.compareTo(bigInt(0)) < 0) {
            n = n.negate().subtract(bigInt(1));
          }
          if (n.compareTo(bigInt(0)) === 0) {
            return bigInt(0);
          }
          return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
        };
        NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger2.prototype.bitLength;
        function max(a, b) {
          a = parseValue(a);
          b = parseValue(b);
          return a.greater(b) ? a : b;
        }
        function min(a, b) {
          a = parseValue(a);
          b = parseValue(b);
          return a.lesser(b) ? a : b;
        }
        function gcd(a, b) {
          a = parseValue(a).abs();
          b = parseValue(b).abs();
          if (a.equals(b))
            return a;
          if (a.isZero())
            return b;
          if (b.isZero())
            return a;
          var c = Integer[1], d, t;
          while (a.isEven() && b.isEven()) {
            d = min(roughLOB(a), roughLOB(b));
            a = a.divide(d);
            b = b.divide(d);
            c = c.multiply(d);
          }
          while (a.isEven()) {
            a = a.divide(roughLOB(a));
          }
          do {
            while (b.isEven()) {
              b = b.divide(roughLOB(b));
            }
            if (a.greater(b)) {
              t = b;
              b = a;
              a = t;
            }
            b = b.subtract(a);
          } while (!b.isZero());
          return c.isUnit() ? a : a.multiply(c);
        }
        function lcm(a, b) {
          a = parseValue(a).abs();
          b = parseValue(b).abs();
          return a.divide(gcd(a, b)).multiply(b);
        }
        function randBetween(a, b, rng) {
          a = parseValue(a);
          b = parseValue(b);
          var usedRNG = rng || Math.random;
          var low = min(a, b), high = max(a, b);
          var range = high.subtract(low).add(1);
          if (range.isSmall)
            return low.add(Math.floor(usedRNG() * range));
          var digits = toBase(range, BASE).value;
          var result = [], restricted = true;
          for (var i2 = 0; i2 < digits.length; i2++) {
            var top = restricted ? digits[i2] : BASE;
            var digit = truncate(usedRNG() * top);
            result.push(digit);
            if (digit < top)
              restricted = false;
          }
          return low.add(Integer.fromArray(result, BASE, false));
        }
        var parseBase = function(text, base, alphabet, caseSensitive) {
          alphabet = alphabet || DEFAULT_ALPHABET;
          text = String(text);
          if (!caseSensitive) {
            text = text.toLowerCase();
            alphabet = alphabet.toLowerCase();
          }
          var length = text.length;
          var i2;
          var absBase = Math.abs(base);
          var alphabetValues = {};
          for (i2 = 0; i2 < alphabet.length; i2++) {
            alphabetValues[alphabet[i2]] = i2;
          }
          for (i2 = 0; i2 < length; i2++) {
            var c = text[i2];
            if (c === "-")
              continue;
            if (c in alphabetValues) {
              if (alphabetValues[c] >= absBase) {
                if (c === "1" && absBase === 1)
                  continue;
                throw new Error(c + " is not a valid digit in base " + base + ".");
              }
            }
          }
          base = parseValue(base);
          var digits = [];
          var isNegative = text[0] === "-";
          for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
            var c = text[i2];
            if (c in alphabetValues)
              digits.push(parseValue(alphabetValues[c]));
            else if (c === "<") {
              var start = i2;
              do {
                i2++;
              } while (text[i2] !== ">" && i2 < text.length);
              digits.push(parseValue(text.slice(start + 1, i2)));
            } else
              throw new Error(c + " is not a valid character");
          }
          return parseBaseFromArray(digits, base, isNegative);
        };
        function parseBaseFromArray(digits, base, isNegative) {
          var val = Integer[0], pow = Integer[1], i2;
          for (i2 = digits.length - 1; i2 >= 0; i2--) {
            val = val.add(digits[i2].times(pow));
            pow = pow.times(base);
          }
          return isNegative ? val.negate() : val;
        }
        function stringify(digit, alphabet) {
          alphabet = alphabet || DEFAULT_ALPHABET;
          if (digit < alphabet.length) {
            return alphabet[digit];
          }
          return "<" + digit + ">";
        }
        function toBase(n, base) {
          base = bigInt(base);
          if (base.isZero()) {
            if (n.isZero())
              return {value: [0], isNegative: false};
            throw new Error("Cannot convert nonzero numbers to base 0.");
          }
          if (base.equals(-1)) {
            if (n.isZero())
              return {value: [0], isNegative: false};
            if (n.isNegative())
              return {
                value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
                isNegative: false
              };
            var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            arr.unshift([1]);
            return {
              value: [].concat.apply([], arr),
              isNegative: false
            };
          }
          var neg = false;
          if (n.isNegative() && base.isPositive()) {
            neg = true;
            n = n.abs();
          }
          if (base.isUnit()) {
            if (n.isZero())
              return {value: [0], isNegative: false};
            return {
              value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1),
              isNegative: neg
            };
          }
          var out = [];
          var left = n, divmod;
          while (left.isNegative() || left.compareAbs(base) >= 0) {
            divmod = left.divmod(base);
            left = divmod.quotient;
            var digit = divmod.remainder;
            if (digit.isNegative()) {
              digit = base.minus(digit).abs();
              left = left.next();
            }
            out.push(digit.toJSNumber());
          }
          out.push(left.toJSNumber());
          return {value: out.reverse(), isNegative: neg};
        }
        function toBaseString(n, base, alphabet) {
          var arr = toBase(n, base);
          return (arr.isNegative ? "-" : "") + arr.value.map(function(x) {
            return stringify(x, alphabet);
          }).join("");
        }
        BigInteger2.prototype.toArray = function(radix) {
          return toBase(this, radix);
        };
        SmallInteger.prototype.toArray = function(radix) {
          return toBase(this, radix);
        };
        NativeBigInt.prototype.toArray = function(radix) {
          return toBase(this, radix);
        };
        BigInteger2.prototype.toString = function(radix, alphabet) {
          if (radix === undefined$12)
            radix = 10;
          if (radix !== 10)
            return toBaseString(this, radix, alphabet);
          var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
          while (--l >= 0) {
            digit = String(v[l]);
            str += zeros.slice(digit.length) + digit;
          }
          var sign2 = this.sign ? "-" : "";
          return sign2 + str;
        };
        SmallInteger.prototype.toString = function(radix, alphabet) {
          if (radix === undefined$12)
            radix = 10;
          if (radix != 10)
            return toBaseString(this, radix, alphabet);
          return String(this.value);
        };
        NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
        NativeBigInt.prototype.toJSON = BigInteger2.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
          return this.toString();
        };
        BigInteger2.prototype.valueOf = function() {
          return parseInt(this.toString(), 10);
        };
        BigInteger2.prototype.toJSNumber = BigInteger2.prototype.valueOf;
        SmallInteger.prototype.valueOf = function() {
          return this.value;
        };
        SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
        NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10);
        };
        function parseStringValue(v) {
          if (isPrecise(+v)) {
            var x = +v;
            if (x === truncate(x))
              return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
            throw new Error("Invalid integer: " + v);
          }
          var sign2 = v[0] === "-";
          if (sign2)
            v = v.slice(1);
          var split = v.split(/e/i);
          if (split.length > 2)
            throw new Error("Invalid integer: " + split.join("e"));
          if (split.length === 2) {
            var exp = split[1];
            if (exp[0] === "+")
              exp = exp.slice(1);
            exp = +exp;
            if (exp !== truncate(exp) || !isPrecise(exp))
              throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
            var text = split[0];
            var decimalPlace = text.indexOf(".");
            if (decimalPlace >= 0) {
              exp -= text.length - decimalPlace - 1;
              text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
            }
            if (exp < 0)
              throw new Error("Cannot include negative exponent part for integers");
            text += new Array(exp + 1).join("0");
            v = text;
          }
          var isValid = /^([0-9][0-9]*)$/.test(v);
          if (!isValid)
            throw new Error("Invalid integer: " + v);
          if (supportsNativeBigInt) {
            return new NativeBigInt(BigInt(sign2 ? "-" + v : v));
          }
          var r = [], max2 = v.length, l = LOG_BASE, min2 = max2 - l;
          while (max2 > 0) {
            r.push(+v.slice(min2, max2));
            min2 -= l;
            if (min2 < 0)
              min2 = 0;
            max2 -= l;
          }
          trim(r);
          return new BigInteger2(r, sign2);
        }
        function parseNumberValue(v) {
          if (supportsNativeBigInt) {
            return new NativeBigInt(BigInt(v));
          }
          if (isPrecise(v)) {
            if (v !== truncate(v))
              throw new Error(v + " is not an integer.");
            return new SmallInteger(v);
          }
          return parseStringValue(v.toString());
        }
        function parseValue(v) {
          if (typeof v === "number") {
            return parseNumberValue(v);
          }
          if (typeof v === "string") {
            return parseStringValue(v);
          }
          if (typeof v === "bigint") {
            return new NativeBigInt(v);
          }
          return v;
        }
        for (var i = 0; i < 1e3; i++) {
          Integer[i] = parseValue(i);
          if (i > 0)
            Integer[-i] = parseValue(-i);
        }
        Integer.one = Integer[1];
        Integer.zero = Integer[0];
        Integer.minusOne = Integer[-1];
        Integer.max = max;
        Integer.min = min;
        Integer.gcd = gcd;
        Integer.lcm = lcm;
        Integer.isInstance = function(x) {
          return x instanceof BigInteger2 || x instanceof SmallInteger || x instanceof NativeBigInt;
        };
        Integer.randBetween = randBetween;
        Integer.fromArray = function(digits, base, isNegative) {
          return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
        };
        return Integer;
      }();
      if (module2.hasOwnProperty("exports")) {
        module2.exports = bigInt;
      }
    });
    var shams = function hasSymbols2() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor2 = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor2.value !== symVal || descriptor2.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbols$2 = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return shams();
    };
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr$4 = Object.prototype.toString;
    var funcType = "[object Function]";
    var implementation = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr$4.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(this, args.concat(slice.call(arguments)));
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(that, args.concat(slice.call(arguments)));
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
    var functionBind = Function.prototype.bind || implementation;
    var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);
    var undefined$1;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError$6 = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError$6();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols$1 = hasSymbols$2();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
    var INTRINSICS$1 = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
      "%AsyncFromSyncIteratorPrototype%": undefined$1,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
      "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
      "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols$1 ? getProto(""[Symbol.iterator]()) : undefined$1,
      "%Symbol%": hasSymbols$1 ? Symbol : undefined$1,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError$6,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS$1[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var $concat = functionBind.call(Function.call, Array.prototype.concat);
    var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
    var $replace$1 = functionBind.call(Function.call, String.prototype.replace);
    var $strSlice$1 = functionBind.call(Function.call, String.prototype.slice);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice$1(string, 0, 1);
      var last = $strSlice$1(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace$1(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace$1(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (src(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (src(INTRINSICS$1, intrinsicName)) {
        var value = INTRINSICS$1[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError$6("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    var getIntrinsic = function GetIntrinsic2(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError$6("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError$6('"allowMissing" argument must be a boolean');
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice$1(part, 0, 1);
        var last = $strSlice$1(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (src(INTRINSICS$1, intrinsicRealName)) {
          value = INTRINSICS$1[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError$6("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = src(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS$1[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
    var callBind = createCommonjsModule2(function(module2) {
      var $apply2 = getIntrinsic("%Function.prototype.apply%");
      var $call = getIntrinsic("%Function.prototype.call%");
      var $reflectApply = getIntrinsic("%Reflect.apply%", true) || functionBind.call($call, $apply2);
      var $gOPD2 = getIntrinsic("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = getIntrinsic("%Object.defineProperty%", true);
      var $max = getIntrinsic("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", {value: 1});
        } catch (e) {
          $defineProperty = null;
        }
      }
      module2.exports = function callBind2(originalFunction) {
        var func = $reflectApply(functionBind, $call, arguments);
        if ($gOPD2 && $defineProperty) {
          var desc = $gOPD2(func, "length");
          if (desc.configurable) {
            $defineProperty(func, "length", {value: 1 + $max(0, originalFunction.length - (arguments.length - 1))});
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(functionBind, $apply2, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module2.exports, "apply", {value: applyBind});
      } else {
        module2.exports.apply = applyBind;
      }
    });
    var $indexOf = callBind(getIntrinsic("String.prototype.indexOf"));
    var callBound = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = getIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
    var $Array = getIntrinsic("%Array%");
    var toStr$3 = !$Array.isArray && callBound("Object.prototype.toString");
    var IsArray = $Array.isArray || function IsArray2(argument) {
      return toStr$3(argument) === "[object Array]";
    };
    var $TypeError$5 = getIntrinsic("%TypeError%");
    var $apply = getIntrinsic("%Reflect.apply%", true) || callBound("%Function.prototype.apply%");
    var Call = function Call2(F, V) {
      var argumentsList = arguments.length > 2 ? arguments[2] : [];
      if (!IsArray(argumentsList)) {
        throw new $TypeError$5("Assertion failed: optional `argumentsList`, if provided, must be a List");
      }
      return $apply(F, V, argumentsList);
    };
    var IsPropertyKey = function IsPropertyKey2(argument) {
      return typeof argument === "string" || typeof argument === "symbol";
    };
    var $TypeError$4 = getIntrinsic("%TypeError%");
    var CheckObjectCoercible = function CheckObjectCoercible2(value, optMessage) {
      if (value == null) {
        throw new $TypeError$4(optMessage || "Cannot call method on " + value);
      }
      return value;
    };
    var RequireObjectCoercible = CheckObjectCoercible;
    var $Object = getIntrinsic("%Object%");
    var ToObject = function ToObject2(value) {
      RequireObjectCoercible(value);
      return $Object(value);
    };
    var $TypeError$3 = getIntrinsic("%TypeError%");
    var GetV = function GetV2(V, P) {
      if (!IsPropertyKey(P)) {
        throw new $TypeError$3("Assertion failed: IsPropertyKey(P) is not true");
      }
      var O = ToObject(V);
      return O[P];
    };
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr$2 = Object.prototype.toString;
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var hasToStringTag$1 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
    var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
    var isCallable = reflectApply ? function isCallable2(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value);
    } : function isCallable2(value) {
      if (value === documentDotAll) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (typeof value === "function" && !value.prototype) {
        return true;
      }
      if (hasToStringTag$1) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr$2.call(value);
      return strClass === fnClass || strClass === genClass;
    };
    var IsCallable = isCallable;
    var $TypeError$2 = getIntrinsic("%TypeError%");
    var GetMethod$1 = function GetMethod2(O, P) {
      if (!IsPropertyKey(P)) {
        throw new $TypeError$2("Assertion failed: IsPropertyKey(P) is not true");
      }
      var func = GetV(O, P);
      if (func == null) {
        return void 0;
      }
      if (!IsCallable(func)) {
        throw new $TypeError$2(P + "is not a function");
      }
      return func;
    };
    var $abs$1 = getIntrinsic("%Math.abs%");
    var abs$1 = function abs2(x) {
      return $abs$1(x);
    };
    var $floor$1 = Math.floor;
    var floor$1 = function floor2(x) {
      return $floor$1(x);
    };
    var _isNaN = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
    var $isNaN = Number.isNaN || function(a) {
      return a !== a;
    };
    var _isFinite = Number.isFinite || function(x) {
      return typeof x === "number" && !$isNaN(x) && x !== Infinity && x !== -Infinity;
    };
    var IsInteger = function IsInteger2(argument) {
      if (typeof argument !== "number" || _isNaN(argument) || !_isFinite(argument)) {
        return false;
      }
      var absValue = abs$1(argument);
      return floor$1(absValue) === absValue;
    };
    var $abs = getIntrinsic("%Math.abs%");
    var abs = function abs2(x) {
      return $abs(x);
    };
    var $floor = Math.floor;
    var floor = function floor2(x) {
      return $floor(x);
    };
    var isPrimitive$1 = function isPrimitive2(value) {
      return value === null || typeof value !== "function" && typeof value !== "object";
    };
    var toStr$1 = Object.prototype.toString;
    var ES5internalSlots = {
      "[[DefaultValue]]": function(O) {
        var actualHint;
        if (arguments.length > 1) {
          actualHint = arguments[1];
        } else {
          actualHint = toStr$1.call(O) === "[object Date]" ? String : Number;
        }
        if (actualHint === String || actualHint === Number) {
          var methods = actualHint === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
          var value, i;
          for (i = 0; i < methods.length; ++i) {
            if (isCallable(O[methods[i]])) {
              value = O[methods[i]]();
              if (isPrimitive$1(value)) {
                return value;
              }
            }
          }
          throw new TypeError("No default value");
        }
        throw new TypeError("invalid [[DefaultValue]] hint supplied");
      }
    };
    var es5 = function ToPrimitive2(input) {
      if (isPrimitive$1(input)) {
        return input;
      }
      if (arguments.length > 1) {
        return ES5internalSlots["[[DefaultValue]]"](input, arguments[1]);
      }
      return ES5internalSlots["[[DefaultValue]]"](input);
    };
    var ToPrimitive$1 = es5;
    var ToNumber$1 = function ToNumber2(value) {
      var prim = ToPrimitive$1(value, Number);
      if (typeof prim !== "string") {
        return +prim;
      }
      var trimmed = prim.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
      if (/^0[ob]|^[+-]0x/.test(trimmed)) {
        return NaN;
      }
      return +trimmed;
    };
    var sign = function sign2(number) {
      return number >= 0 ? 1 : -1;
    };
    var ToInteger$1 = function ToInteger2(value) {
      var number = ToNumber$1(value);
      if (_isNaN(number)) {
        return 0;
      }
      if (number === 0 || !_isFinite(number)) {
        return number;
      }
      return sign(number) * floor(abs(number));
    };
    var $test = getIntrinsic("RegExp.prototype.test");
    var regexTester = function regexTester2(regex) {
      return callBind($test, regex);
    };
    var isPrimitive = function isPrimitive2(value) {
      return value === null || typeof value !== "function" && typeof value !== "object";
    };
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
    var isDateObject = function isDateObject2(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
    var isSymbol = createCommonjsModule2(function(module2) {
      var toStr2 = Object.prototype.toString;
      var hasSymbols2 = hasSymbols$2();
      if (hasSymbols2) {
        var symToStr = Symbol.prototype.toString;
        var symStringRegex = /^Symbol\(.*\)$/;
        var isSymbolObject = function isRealSymbolObject(value) {
          if (typeof value.valueOf() !== "symbol") {
            return false;
          }
          return symStringRegex.test(symToStr.call(value));
        };
        module2.exports = function isSymbol2(value) {
          if (typeof value === "symbol") {
            return true;
          }
          if (toStr2.call(value) !== "[object Symbol]") {
            return false;
          }
          try {
            return isSymbolObject(value);
          } catch (e) {
            return false;
          }
        };
      } else {
        module2.exports = function isSymbol2(value) {
          return false;
        };
      }
    });
    var hasSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "symbol";
    var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
      if (typeof O === "undefined" || O === null) {
        throw new TypeError("Cannot call method on " + O);
      }
      if (typeof hint !== "string" || hint !== "number" && hint !== "string") {
        throw new TypeError('hint must be "string" or "number"');
      }
      var methodNames = hint === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"];
      var method, result, i;
      for (i = 0; i < methodNames.length; ++i) {
        method = O[methodNames[i]];
        if (isCallable(method)) {
          result = method.call(O);
          if (isPrimitive$1(result)) {
            return result;
          }
        }
      }
      throw new TypeError("No default value");
    };
    var GetMethod = function GetMethod2(O, P) {
      var func = O[P];
      if (func !== null && typeof func !== "undefined") {
        if (!isCallable(func)) {
          throw new TypeError(func + " returned for property " + P + " of object " + O + " is not a function");
        }
        return func;
      }
      return void 0;
    };
    var es2015 = function ToPrimitive2(input) {
      if (isPrimitive$1(input)) {
        return input;
      }
      var hint = "default";
      if (arguments.length > 1) {
        if (arguments[1] === String) {
          hint = "string";
        } else if (arguments[1] === Number) {
          hint = "number";
        }
      }
      var exoticToPrim;
      if (hasSymbols) {
        if (Symbol.toPrimitive) {
          exoticToPrim = GetMethod(input, Symbol.toPrimitive);
        } else if (isSymbol(input)) {
          exoticToPrim = Symbol.prototype.valueOf;
        }
      }
      if (typeof exoticToPrim !== "undefined") {
        var result = exoticToPrim.call(input, hint);
        if (isPrimitive$1(result)) {
          return result;
        }
        throw new TypeError("unable to convert exotic object to primitive");
      }
      if (hint === "default" && (isDateObject(input) || isSymbol(input))) {
        hint = "string";
      }
      return ordinaryToPrimitive(input, hint === "default" ? "number" : hint);
    };
    var ToPrimitive = function ToPrimitive2(input) {
      if (arguments.length > 1) {
        return es2015(input, arguments[1]);
      }
      return es2015(input);
    };
    var $TypeError$1 = getIntrinsic("%TypeError%");
    var $Number$1 = getIntrinsic("%Number%");
    var $RegExp = getIntrinsic("%RegExp%");
    var $parseInteger = getIntrinsic("%parseInt%");
    var $strSlice = callBound("String.prototype.slice");
    var isBinary = regexTester(/^0b[01]+$/i);
    var isOctal = regexTester(/^0o[0-7]+$/i);
    var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
    var nonWS = ["\x85", "\u200B", "\uFFFE"].join("");
    var nonWSregex = new $RegExp("[" + nonWS + "]", "g");
    var hasNonWS = regexTester(nonWSregex);
    var ws = [
      "	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003",
      "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028",
      "\u2029\uFEFF"
    ].join("");
    var trimRegex = new RegExp("(^[" + ws + "]+)|([" + ws + "]+$)", "g");
    var $replace = callBound("String.prototype.replace");
    var $trim = function(value) {
      return $replace(value, trimRegex, "");
    };
    var ToNumber = function ToNumber2(argument) {
      var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number$1);
      if (typeof value === "symbol") {
        throw new $TypeError$1("Cannot convert a Symbol value to a number");
      }
      if (typeof value === "string") {
        if (isBinary(value)) {
          return ToNumber2($parseInteger($strSlice(value, 2), 2));
        } else if (isOctal(value)) {
          return ToNumber2($parseInteger($strSlice(value, 2), 8));
        } else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
          return NaN;
        } else {
          var trimmed = $trim(value);
          if (trimmed !== value) {
            return ToNumber2(trimmed);
          }
        }
      }
      return $Number$1(value);
    };
    var ToInteger = function ToInteger2(value) {
      var number = ToNumber(value);
      if (number !== 0) {
        number = ToInteger$1(number);
      }
      return number === 0 ? 0 : number;
    };
    var $Math = getIntrinsic("%Math%");
    var $Number = getIntrinsic("%Number%");
    var maxSafeInteger = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;
    var ToLength = function ToLength2(argument) {
      var len = ToInteger(argument);
      if (len <= 0) {
        return 0;
      }
      if (len > maxSafeInteger) {
        return maxSafeInteger;
      }
      return len;
    };
    var $String = getIntrinsic("%String%");
    var $TypeError = getIntrinsic("%TypeError%");
    var ToString = function ToString2(argument) {
      if (typeof argument === "symbol") {
        throw new $TypeError("Cannot convert a Symbol value to a string");
      }
      return $String(argument);
    };
    var Type$1 = function Type2(x) {
      if (x === null) {
        return "Null";
      }
      if (typeof x === "undefined") {
        return "Undefined";
      }
      if (typeof x === "function" || typeof x === "object") {
        return "Object";
      }
      if (typeof x === "number") {
        return "Number";
      }
      if (typeof x === "boolean") {
        return "Boolean";
      }
      if (typeof x === "string") {
        return "String";
      }
    };
    var Type = function Type2(x) {
      if (typeof x === "symbol") {
        return "Symbol";
      }
      if (typeof x === "bigint") {
        return "BigInt";
      }
      return Type$1(x);
    };
    var GetIntrinsic$1 = getIntrinsic;
    var INTRINSICS = {};
    var customUtilInspectFormatters = _defineProperty({}, "Temporal.Duration", function TemporalDuration(depth, options) {
      var descr = options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), "special");
      if (depth < 1)
        return descr;
      var entries = [];
      for (var _i = 0, _arr = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        if (this[prop] !== 0)
          entries.push("  ".concat(prop, ": ").concat(options.stylize(this[prop], "number")));
      }
      return descr + " {\n" + entries.join(",\n") + "\n}";
    });
    function defaultUtilInspectFormatter(depth, options) {
      return options.stylize("".concat(this[Symbol.toStringTag], " <").concat(this, ">"), "special");
    }
    function MakeIntrinsicClass(Class, name) {
      Object.defineProperty(Class.prototype, Symbol.toStringTag, {
        value: name,
        writable: false,
        enumerable: false,
        configurable: true
      });
      {
        Object.defineProperty(Class.prototype, Symbol.for("nodejs.util.inspect.custom"), {
          value: customUtilInspectFormatters[name] || defaultUtilInspectFormatter,
          writable: false,
          enumerable: false,
          configurable: true
        });
      }
      var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class)), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var prop = _step.value;
          var desc = Object.getOwnPropertyDescriptor(Class, prop);
          if (!desc.configurable || !desc.enumerable)
            continue;
          desc.enumerable = false;
          Object.defineProperty(Class, prop, desc);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Class.prototype)), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var _prop = _step2.value;
          var _desc = Object.getOwnPropertyDescriptor(Class.prototype, _prop);
          if (!_desc.configurable || !_desc.enumerable)
            continue;
          _desc.enumerable = false;
          Object.defineProperty(Class.prototype, _prop, _desc);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      DefineIntrinsic(name, Class);
      DefineIntrinsic("".concat(name, ".prototype"), Class.prototype);
    }
    function DefineIntrinsic(name, value) {
      var key = "%".concat(name, "%");
      if (INTRINSICS[key] !== void 0)
        throw new Error("intrinsic ".concat(name, " already exists"));
      INTRINSICS[key] = value;
    }
    function GetIntrinsic(intrinsic) {
      return intrinsic in INTRINSICS ? INTRINSICS[intrinsic] : GetIntrinsic$1(intrinsic);
    }
    var EPOCHNANOSECONDS = "slot-epochNanoSeconds";
    var TIMEZONE_ID = "slot-timezone-identifier";
    var ISO_YEAR = "slot-year";
    var ISO_MONTH = "slot-month";
    var ISO_DAY = "slot-day";
    var ISO_HOUR = "slot-hour";
    var ISO_MINUTE = "slot-minute";
    var ISO_SECOND = "slot-second";
    var ISO_MILLISECOND = "slot-millisecond";
    var ISO_MICROSECOND = "slot-microsecond";
    var ISO_NANOSECOND = "slot-nanosecond";
    var CALENDAR = "slot-calendar";
    var DATE_BRAND = "slot-date-brand";
    var YEAR_MONTH_BRAND = "slot-year-month-brand";
    var MONTH_DAY_BRAND = "slot-month-day-brand";
    var INSTANT = "slot-cached-instant";
    var TIME_ZONE = "slot-time-zone";
    var YEARS = "slot-years";
    var MONTHS = "slot-months";
    var WEEKS = "slot-weeks";
    var DAYS = "slot-days";
    var HOURS = "slot-hours";
    var MINUTES = "slot-minutes";
    var SECONDS = "slot-seconds";
    var MILLISECONDS = "slot-milliseconds";
    var MICROSECONDS = "slot-microseconds";
    var NANOSECONDS = "slot-nanoseconds";
    var CALENDAR_ID = "slot-calendar-identifier";
    var slots = new WeakMap();
    function CreateSlots(container) {
      slots.set(container, Object.create(null));
    }
    function GetSlots(container) {
      return slots.get(container);
    }
    function HasSlot(container) {
      if (!container || _typeof(container) !== "object")
        return false;
      var myslots = GetSlots(container);
      for (var _len = arguments.length, ids = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        ids[_key - 1] = arguments[_key];
      }
      return !!myslots && ids.reduce(function(all, id) {
        return all && id in myslots;
      }, true);
    }
    function GetSlot(container, id) {
      return GetSlots(container)[id];
    }
    function SetSlot(container, id, value) {
      GetSlots(container)[id] = value;
    }
    var ArrayIncludes = Array.prototype.includes;
    var ArrayPrototypePush$2 = Array.prototype.push;
    var ObjectAssign$3 = Object.assign;
    var impl = {};
    var Calendar = /* @__PURE__ */ function() {
      function Calendar2(id) {
        _classCallCheck(this, Calendar2);
        if (arguments.length < 1) {
          throw new RangeError("missing argument: id is required");
        }
        id = ES.ToString(id);
        if (!IsBuiltinCalendar(id))
          throw new RangeError("invalid calendar identifier ".concat(id));
        CreateSlots(this);
        SetSlot(this, CALENDAR_ID, id);
        {
          Object.defineProperty(this, "_repr_", {
            value: "".concat(this[Symbol.toStringTag], " <").concat(id, ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
      _createClass(Calendar2, [{
        key: "id",
        get: function get() {
          return ES.ToString(this);
        }
      }, {
        key: "dateFromFields",
        value: function dateFromFields(fields, options) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(fields) !== "Object")
            throw new TypeError("invalid fields");
          options = ES.GetOptionsObject(options);
          return impl[GetSlot(this, CALENDAR_ID)].dateFromFields(fields, options, this);
        }
      }, {
        key: "yearMonthFromFields",
        value: function yearMonthFromFields(fields, options) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(fields) !== "Object")
            throw new TypeError("invalid fields");
          options = ES.GetOptionsObject(options);
          return impl[GetSlot(this, CALENDAR_ID)].yearMonthFromFields(fields, options, this);
        }
      }, {
        key: "monthDayFromFields",
        value: function monthDayFromFields(fields, options) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(fields) !== "Object")
            throw new TypeError("invalid fields");
          options = ES.GetOptionsObject(options);
          return impl[GetSlot(this, CALENDAR_ID)].monthDayFromFields(fields, options, this);
        }
      }, {
        key: "fields",
        value: function fields(_fields) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          var fieldsArray = [];
          var _iterator = _createForOfIteratorHelper(_fields), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var name = _step.value;
              if (ES.Type(name) !== "String")
                throw new TypeError("invalid fields");
              ArrayPrototypePush$2.call(fieldsArray, name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return impl[GetSlot(this, CALENDAR_ID)].fields(fieldsArray);
        }
      }, {
        key: "mergeFields",
        value: function mergeFields(fields, additionalFields) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          return impl[GetSlot(this, CALENDAR_ID)].mergeFields(fields, additionalFields);
        }
      }, {
        key: "dateAdd",
        value: function dateAdd(date, duration2, options) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          date = ES.ToTemporalDate(date);
          duration2 = ES.ToTemporalDuration(duration2);
          options = ES.GetOptionsObject(options);
          var overflow = ES.ToTemporalOverflow(options);
          return impl[GetSlot(this, CALENDAR_ID)].dateAdd(date, duration2, overflow, this);
        }
      }, {
        key: "dateUntil",
        value: function dateUntil(one, two, options) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          one = ES.ToTemporalDate(one);
          two = ES.ToTemporalDate(two);
          options = ES.GetOptionsObject(options);
          var largestUnit = ES.ToLargestTemporalUnit(options, "days", ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]);
          var _impl$GetSlot$dateUnt = impl[GetSlot(this, CALENDAR_ID)].dateUntil(one, two, largestUnit), years = _impl$GetSlot$dateUnt.years, months = _impl$GetSlot$dateUnt.months, weeks = _impl$GetSlot$dateUnt.weeks, days = _impl$GetSlot$dateUnt.days;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        }
      }, {
        key: "year",
        value: function year(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].year(date);
        }
      }, {
        key: "month",
        value: function month(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (ES.IsTemporalMonthDay(date))
            throw new TypeError("use monthCode on PlainMonthDay instead");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].month(date);
        }
      }, {
        key: "monthCode",
        value: function monthCode(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date) && !ES.IsTemporalMonthDay(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].monthCode(date);
        }
      }, {
        key: "day",
        value: function day(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalMonthDay(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].day(date);
        }
      }, {
        key: "era",
        value: function era(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].era(date);
        }
      }, {
        key: "eraYear",
        value: function eraYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].eraYear(date);
        }
      }, {
        key: "dayOfWeek",
        value: function dayOfWeek(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].dayOfWeek(date);
        }
      }, {
        key: "dayOfYear",
        value: function dayOfYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].dayOfYear(date);
        }
      }, {
        key: "weekOfYear",
        value: function weekOfYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].weekOfYear(date);
        }
      }, {
        key: "daysInWeek",
        value: function daysInWeek(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].daysInWeek(date);
        }
      }, {
        key: "daysInMonth",
        value: function daysInMonth(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].daysInMonth(date);
        }
      }, {
        key: "daysInYear",
        value: function daysInYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].daysInYear(date);
        }
      }, {
        key: "monthsInYear",
        value: function monthsInYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].monthsInYear(date);
        }
      }, {
        key: "inLeapYear",
        value: function inLeapYear(date) {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          if (!ES.IsTemporalYearMonth(date))
            date = ES.ToTemporalDate(date);
          return impl[GetSlot(this, CALENDAR_ID)].inLeapYear(date);
        }
      }, {
        key: "toString",
        value: function toString() {
          if (!ES.IsTemporalCalendar(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR_ID);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return ES.ToString(this);
        }
      }], [{
        key: "from",
        value: function from(item) {
          return ES.ToTemporalCalendar(item);
        }
      }]);
      return Calendar2;
    }();
    MakeIntrinsicClass(Calendar, "Temporal.Calendar");
    DefineIntrinsic("Temporal.Calendar.from", Calendar.from);
    impl["iso8601"] = {
      dateFromFields: function dateFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        fields = ES.PrepareTemporalFields(fields, [["day"], ["month", void 0], ["monthCode", void 0], ["year"]]);
        fields = resolveNonLunisolarMonth(fields);
        var _fields2 = fields, year = _fields2.year, month = _fields2.month, day = _fields2.day;
        var _ES$RegulateISODate = ES.RegulateISODate(year, month, day, overflow);
        year = _ES$RegulateISODate.year;
        month = _ES$RegulateISODate.month;
        day = _ES$RegulateISODate.day;
        return ES.CreateTemporalDate(year, month, day, calendar2);
      },
      yearMonthFromFields: function yearMonthFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        fields = ES.PrepareTemporalFields(fields, [["month", void 0], ["monthCode", void 0], ["year"]]);
        fields = resolveNonLunisolarMonth(fields);
        var _fields3 = fields, year = _fields3.year, month = _fields3.month;
        var _ES$RegulateISOYearMo = ES.RegulateISOYearMonth(year, month, overflow);
        year = _ES$RegulateISOYearMo.year;
        month = _ES$RegulateISOYearMo.month;
        return ES.CreateTemporalYearMonth(year, month, calendar2, 1);
      },
      monthDayFromFields: function monthDayFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        fields = ES.PrepareTemporalFields(fields, [["day"], ["month", void 0], ["monthCode", void 0], ["year", void 0]]);
        if (fields.month !== void 0 && fields.year === void 0 && fields.monthCode === void 0) {
          throw new TypeError("either year or monthCode required with month");
        }
        var useYear = fields.monthCode === void 0;
        var referenceISOYear = 1972;
        fields = resolveNonLunisolarMonth(fields);
        var _fields4 = fields, month = _fields4.month, day = _fields4.day, year = _fields4.year;
        var _ES$RegulateISODate2 = ES.RegulateISODate(useYear ? year : referenceISOYear, month, day, overflow);
        month = _ES$RegulateISODate2.month;
        day = _ES$RegulateISODate2.day;
        return ES.CreateTemporalMonthDay(month, day, calendar2, referenceISOYear);
      },
      fields: function fields(_fields5) {
        return _fields5;
      },
      mergeFields: function mergeFields(fields, additionalFields) {
        var month = fields.month, monthCode = fields.monthCode, original = _objectWithoutProperties(fields, ["month", "monthCode"]);
        var newMonth = additionalFields.month, newMonthCode = additionalFields.monthCode;
        if (newMonth === void 0 && newMonthCode === void 0) {
          original.month = month;
          original.monthCode = monthCode;
        }
        return _objectSpread2(_objectSpread2({}, original), additionalFields);
      },
      dateAdd: function dateAdd(date, duration2, overflow, calendar2) {
        var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days;
        var year = GetSlot(date, ISO_YEAR);
        var month = GetSlot(date, ISO_MONTH);
        var day = GetSlot(date, ISO_DAY);
        var _ES$AddISODate = ES.AddISODate(year, month, day, years, months, weeks, days, overflow);
        year = _ES$AddISODate.year;
        month = _ES$AddISODate.month;
        day = _ES$AddISODate.day;
        return ES.CreateTemporalDate(year, month, day, calendar2);
      },
      dateUntil: function dateUntil(one, two, largestUnit) {
        return ES.DifferenceISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY), largestUnit);
      },
      year: function year(date) {
        return GetSlot(date, ISO_YEAR);
      },
      era: function era() {
        return void 0;
      },
      eraYear: function eraYear() {
        return void 0;
      },
      month: function month(date) {
        return GetSlot(date, ISO_MONTH);
      },
      monthCode: function monthCode(date) {
        return buildMonthCode(GetSlot(date, ISO_MONTH));
      },
      day: function day(date) {
        return GetSlot(date, ISO_DAY);
      },
      dayOfWeek: function dayOfWeek(date) {
        return ES.DayOfWeek(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      },
      dayOfYear: function dayOfYear(date) {
        return ES.DayOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      },
      weekOfYear: function weekOfYear(date) {
        return ES.WeekOfYear(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH), GetSlot(date, ISO_DAY));
      },
      daysInWeek: function daysInWeek() {
        return 7;
      },
      daysInMonth: function daysInMonth(date) {
        return ES.ISODaysInMonth(GetSlot(date, ISO_YEAR), GetSlot(date, ISO_MONTH));
      },
      daysInYear: function daysInYear(date) {
        if (!HasSlot(date, ISO_YEAR))
          date = ES.ToTemporalDate(date);
        return ES.LeapYear(GetSlot(date, ISO_YEAR)) ? 366 : 365;
      },
      monthsInYear: function monthsInYear() {
        return 12;
      },
      inLeapYear: function inLeapYear(date) {
        if (!HasSlot(date, ISO_YEAR))
          date = ES.ToTemporalDate(date);
        return ES.LeapYear(GetSlot(date, ISO_YEAR));
      }
    };
    function monthCodeNumberPart(monthCode) {
      if (!monthCode.startsWith("M")) {
        throw new RangeError("Invalid month code: ".concat(monthCode, ".  Month codes must start with M."));
      }
      var month = +monthCode.slice(1);
      if (isNaN(month))
        throw new RangeError("Invalid month code: ".concat(monthCode));
      return month;
    }
    function buildMonthCode(month) {
      var leap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      return "M".concat(month.toString().padStart(2, "0")).concat(leap ? "L" : "");
    }
    function resolveNonLunisolarMonth(calendarDate) {
      var overflow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      var monthsPerYear = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 12;
      var month = calendarDate.month, monthCode = calendarDate.monthCode;
      if (monthCode === void 0) {
        if (month === void 0)
          throw new TypeError("Either month or monthCode are required");
        if (overflow === "reject")
          ES.RejectToRange(month, 1, monthsPerYear);
        if (overflow === "constrain")
          month = ES.ConstrainToRange(month, 1, monthsPerYear);
        monthCode = buildMonthCode(month);
      } else {
        var numberPart = monthCodeNumberPart(monthCode);
        if (month !== void 0 && month !== numberPart) {
          throw new RangeError("monthCode ".concat(monthCode, " and month ").concat(month, " must match if both are present"));
        }
        if (monthCode !== buildMonthCode(numberPart)) {
          throw new RangeError("Invalid month code: ".concat(monthCode));
        }
        month = numberPart;
        if (month < 1 || month > monthsPerYear)
          throw new RangeError("Invalid monthCode: ".concat(monthCode));
      }
      return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
        month,
        monthCode
      });
    }
    var OneObjectCache = /* @__PURE__ */ function() {
      function OneObjectCache2() {
        var cacheToClone = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        _classCallCheck(this, OneObjectCache2);
        this.map = new Map();
        this.calls = 0;
        this.now = globalThis.performance ? globalThis.performance.now() : Date.now();
        this.hits = 0;
        this.misses = 0;
        if (cacheToClone !== void 0) {
          var i = cacheToClone.length;
          var _iterator2 = _createForOfIteratorHelper(cacheToClone.map.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var _this$map;
              var entry = _step2.value;
              if (++i > OneObjectCache2.MAX_CACHE_ENTRIES)
                break;
              (_this$map = this.map).set.apply(_this$map, _toConsumableArray(entry));
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      _createClass(OneObjectCache2, [{
        key: "get",
        value: function get(key) {
          var result = this.map.get(key);
          if (result) {
            this.hits++;
            this.report();
          }
          this.calls++;
          return result;
        }
      }, {
        key: "set",
        value: function set(key, value) {
          this.map.set(key, value);
          this.misses++;
          this.report();
        }
      }, {
        key: "report",
        value: function report() {
        }
      }, {
        key: "setObject",
        value: function setObject(obj) {
          if (OneObjectCache2.objectMap.get(obj))
            throw new RangeError("object already cached");
          OneObjectCache2.objectMap.set(obj, this);
          this.report();
        }
      }]);
      return OneObjectCache2;
    }();
    OneObjectCache.objectMap = new WeakMap();
    OneObjectCache.MAX_CACHE_ENTRIES = 1e3;
    OneObjectCache.getCacheForObject = function(obj) {
      var cache = OneObjectCache.objectMap.get(obj);
      if (!cache) {
        cache = new OneObjectCache();
        OneObjectCache.objectMap.set(obj, cache);
      }
      return cache;
    };
    function toUtcIsoDateString(_ref) {
      var isoYear = _ref.isoYear, isoMonth = _ref.isoMonth, isoDay = _ref.isoDay;
      var yearString = ES.ISOYearString(isoYear);
      var monthString = ES.ISODateTimePartString(isoMonth);
      var dayString = ES.ISODateTimePartString(isoDay);
      return "".concat(yearString, "-").concat(monthString, "-").concat(dayString, "T00:00Z");
    }
    function simpleDateDiff(one, two) {
      return {
        years: one.year - two.year,
        months: one.month - two.month,
        days: one.day - two.day
      };
    }
    var nonIsoHelperBase = {
      isoToCalendarDate: function isoToCalendarDate(isoDate, cache) {
        var _this = this;
        var isoYear = isoDate.year, isoMonth = isoDate.month, isoDay = isoDate.day;
        var key = JSON.stringify({
          func: "isoToCalendarDate",
          isoYear,
          isoMonth,
          isoDay,
          id: this.id
        });
        var cached = cache.get(key);
        if (cached)
          return cached;
        var dateTimeFormat = new Intl.DateTimeFormat("en-US-u-ca-".concat(this.id), {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          era: this.eraLength,
          timeZone: "UTC"
        });
        var parts, isoString;
        try {
          isoString = toUtcIsoDateString({
            isoYear,
            isoMonth,
            isoDay
          });
          parts = dateTimeFormat.formatToParts(new Date(isoString));
        } catch (e) {
          throw new RangeError("Invalid ISO date: ".concat(JSON.stringify({
            isoYear,
            isoMonth,
            isoDay
          })));
        }
        var result = {};
        var _iterator3 = _createForOfIteratorHelper(parts), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _step3$value = _step3.value, type = _step3$value.type, value = _step3$value.value;
            if (type === "year")
              result.eraYear = +value;
            if (type === "relatedYear")
              result.eraYear = +value;
            if (type === "month") {
              var matches = /^([-0-9.]+)(.*?)$/.exec(value);
              if (!matches || matches.length != 3)
                throw new RangeError("Unexpected month: ".concat(value));
              result.month = +matches[1];
              if (result.month < 1) {
                throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + " (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10527)");
              }
              if (result.month > 13) {
                throw new RangeError("Invalid month ".concat(value, " from ").concat(isoString, "[u-ca-").concat(this.id, "]") + " (probably due to https://bugs.chromium.org/p/v8/issues/detail?id=10529)");
              }
              if (matches[2])
                result.monthExtra = matches[2];
            }
            if (type === "day")
              result.day = +value;
            if (this.hasEra && type === "era" && value != null && value !== "") {
              value = value.split(" (")[0];
              result.era = value.normalize("NFD").replace(/(?:(?![ \x2D0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])/g, "").replace(" ", "-").toLowerCase();
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        if (result.eraYear === void 0) {
          throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(this.id, " calendar. Try Node 14+ or modern browsers."));
        }
        if (this.reviseIntlEra) {
          var _this$reviseIntlEra = this.reviseIntlEra(result, isoDate), era = _this$reviseIntlEra.era, eraYear = _this$reviseIntlEra.eraYear;
          result.era = era;
          result.eraYear = eraYear;
        }
        if (this.checkIcuBugs)
          this.checkIcuBugs(result, isoDate);
        var calendarDate = this.adjustCalendarDate(result, cache, "constrain", true);
        if (calendarDate.year === void 0)
          throw new RangeError("Missing year converting ".concat(JSON.stringify(isoDate)));
        if (calendarDate.month === void 0)
          throw new RangeError("Missing month converting ".concat(JSON.stringify(isoDate)));
        if (calendarDate.day === void 0)
          throw new RangeError("Missing day converting ".concat(JSON.stringify(isoDate)));
        cache.set(key, calendarDate);
        ["constrain", "reject"].forEach(function(overflow) {
          var keyReverse = JSON.stringify({
            func: "calendarToIsoDate",
            year: calendarDate.year,
            month: calendarDate.month,
            day: calendarDate.day,
            overflow,
            id: _this.id
          });
          cache.set(keyReverse, isoDate);
        });
        return calendarDate;
      },
      validateCalendarDate: function validateCalendarDate(calendarDate) {
        var era = calendarDate.era, month = calendarDate.month, year = calendarDate.year, day = calendarDate.day, eraYear = calendarDate.eraYear, monthCode = calendarDate.monthCode, monthExtra = calendarDate.monthExtra;
        if (monthExtra !== void 0)
          throw new RangeError("Unexpected `monthExtra` value");
        if (year === void 0 && eraYear === void 0)
          throw new TypeError("year or eraYear is required");
        if (month === void 0 && monthCode === void 0)
          throw new TypeError("month or monthCode is required");
        if (day === void 0)
          throw new RangeError("Missing day");
        if (monthCode !== void 0) {
          if (typeof monthCode !== "string") {
            throw new RangeError("monthCode must be a string, not ".concat(ES.Type(monthCode).toLowerCase()));
          }
          if (!/^M([01]?\d)(L?)$/.test(monthCode))
            throw new RangeError("Invalid monthCode: ".concat(monthCode));
        }
        if (this.constantEra) {
          if (era !== void 0 && era !== this.constantEra) {
            throw new RangeError("era must be ".concat(this.constantEra, ", not ").concat(era));
          }
          if (eraYear !== void 0 && year !== void 0 && eraYear !== year) {
            throw new RangeError("eraYear ".concat(eraYear, " does not match year ").concat(year));
          }
        }
      },
      adjustCalendarDate: function adjustCalendarDate(calendarDate, cache, overflow) {
        if (this.calendarType === "lunisolar")
          throw new RangeError("Override required for lunisolar calendars");
        this.validateCalendarDate(calendarDate);
        var largestMonth = this.monthsInYear(calendarDate, cache);
        var _calendarDate = calendarDate, month = _calendarDate.month, year = _calendarDate.year, eraYear = _calendarDate.eraYear, monthCode = _calendarDate.monthCode;
        if (this.constantEra) {
          if (year === void 0)
            year = eraYear;
          if (eraYear === void 0)
            eraYear = year;
          calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
            era: this.constantEra,
            year,
            eraYear
          });
        }
        var _resolveNonLunisolarM = resolveNonLunisolarMonth(calendarDate, overflow, largestMonth);
        month = _resolveNonLunisolarM.month;
        monthCode = _resolveNonLunisolarM.monthCode;
        return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          month,
          monthCode
        });
      },
      regulateMonthDayNaive: function regulateMonthDayNaive(calendarDate, overflow, cache) {
        var largestMonth = this.monthsInYear(calendarDate, cache);
        var month = calendarDate.month, day = calendarDate.day;
        if (overflow === "reject") {
          ES.RejectToRange(month, 1, largestMonth);
          ES.RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
        } else {
          month = ES.ConstrainToRange(month, 1, largestMonth);
          day = ES.ConstrainToRange(day, 1, this.maximumMonthLength(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
            month
          })));
        }
        return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
          month,
          day
        });
      },
      calendarToIsoDate: function calendarToIsoDate(date) {
        var _this2 = this;
        var overflow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "constrain";
        var cache = arguments.length > 2 ? arguments[2] : void 0;
        var originalDate = date;
        date = this.adjustCalendarDate(date, cache, overflow, false);
        date = this.regulateMonthDayNaive(date, overflow, cache);
        var _date = date, year = _date.year, month = _date.month, day = _date.day;
        var key = JSON.stringify({
          func: "calendarToIsoDate",
          year,
          month,
          day,
          overflow,
          id: this.id
        });
        var cached = cache.get(key);
        if (cached)
          return cached;
        var keyOriginal;
        if (originalDate.year !== void 0 && originalDate.month !== void 0 && originalDate.day !== void 0 && (originalDate.year !== date.year || originalDate.month !== date.month || originalDate.day !== date.day)) {
          keyOriginal = JSON.stringify({
            func: "calendarToIsoDate",
            year: originalDate.year,
            month: originalDate.month,
            day: originalDate.day,
            overflow,
            id: this.id
          });
          cached = cache.get(keyOriginal);
          if (cached)
            return cached;
        }
        var isoEstimate = this.estimateIsoDate({
          year,
          month,
          day
        });
        var calculateSameMonthResult = function calculateSameMonthResult2(diffDays) {
          var testIsoEstimate = _this2.addDaysIso(isoEstimate, diffDays);
          if (date.day > _this2.minimumMonthLength(date)) {
            var testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);
            while (testCalendarDate.month !== month || testCalendarDate.year !== year) {
              if (overflow === "reject") {
                throw new RangeError("day ".concat(day, " does not exist in month ").concat(month, " of year ").concat(year));
              }
              testIsoEstimate = _this2.addDaysIso(testIsoEstimate, -1);
              testCalendarDate = _this2.isoToCalendarDate(testIsoEstimate, cache);
            }
          }
          return testIsoEstimate;
        };
        var sign2 = 0;
        var roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
        var diff = simpleDateDiff(date, roundtripEstimate);
        if (diff.years !== 0 || diff.months !== 0 || diff.days !== 0) {
          var diffTotalDaysEstimate = diff.years * 365 + diff.months * 30 + diff.days;
          isoEstimate = this.addDaysIso(isoEstimate, diffTotalDaysEstimate);
          roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
          diff = simpleDateDiff(date, roundtripEstimate);
          if (diff.years === 0 && diff.months === 0) {
            isoEstimate = calculateSameMonthResult(diff.days);
          } else {
            sign2 = this.compareCalendarDates(date, roundtripEstimate);
          }
        }
        var increment = 8;
        var maybeConstrained = false;
        while (sign2) {
          isoEstimate = this.addDaysIso(isoEstimate, sign2 * increment);
          var oldRoundtripEstimate = roundtripEstimate;
          roundtripEstimate = this.isoToCalendarDate(isoEstimate, cache);
          var oldSign = sign2;
          sign2 = this.compareCalendarDates(date, roundtripEstimate);
          if (sign2) {
            diff = simpleDateDiff(date, roundtripEstimate);
            if (diff.years === 0 && diff.months === 0) {
              isoEstimate = calculateSameMonthResult(diff.days);
              sign2 = 0;
              maybeConstrained = date.day > this.minimumMonthLength(date);
            } else if (oldSign && sign2 !== oldSign) {
              if (increment > 1) {
                increment /= 2;
              } else {
                if (overflow === "reject") {
                  throw new RangeError("Can't find ISO date from calendar date: ".concat(JSON.stringify(_objectSpread2({}, originalDate))));
                } else {
                  var order = this.compareCalendarDates(roundtripEstimate, oldRoundtripEstimate);
                  if (order > 0)
                    isoEstimate = this.addDaysIso(isoEstimate, -1);
                  maybeConstrained = true;
                  sign2 = 0;
                }
              }
            }
          }
        }
        cache.set(key, isoEstimate);
        if (keyOriginal)
          cache.set(keyOriginal, isoEstimate);
        if (date.year === void 0 || date.month === void 0 || date.day === void 0 || date.monthCode === void 0 || this.hasEra && (date.era === void 0 || date.eraYear === void 0)) {
          throw new RangeError("Unexpected missing property");
        }
        if (!maybeConstrained) {
          var keyReverse = JSON.stringify({
            func: "isoToCalendarDate",
            isoYear: isoEstimate.year,
            isoMonth: isoEstimate.month,
            isoDay: isoEstimate.day,
            id: this.id
          });
          cache.set(keyReverse, date);
        }
        return isoEstimate;
      },
      temporalToCalendarDate: function temporalToCalendarDate(date, cache) {
        var isoDate = {
          year: GetSlot(date, ISO_YEAR),
          month: GetSlot(date, ISO_MONTH),
          day: GetSlot(date, ISO_DAY)
        };
        var result = this.isoToCalendarDate(isoDate, cache);
        return result;
      },
      compareCalendarDates: function compareCalendarDates(date1, date2) {
        date1 = ES.PrepareTemporalFields(date1, [["day"], ["month"], ["year"]]);
        date2 = ES.PrepareTemporalFields(date2, [["day"], ["month"], ["year"]]);
        if (date1.year !== date2.year)
          return ES.ComparisonResult(date1.year - date2.year);
        if (date1.month !== date2.month)
          return ES.ComparisonResult(date1.month - date2.month);
        if (date1.day !== date2.day)
          return ES.ComparisonResult(date1.day - date2.day);
        return 0;
      },
      regulateDate: function regulateDate(calendarDate) {
        var overflow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "constrain";
        var cache = arguments.length > 2 ? arguments[2] : void 0;
        var isoDate = this.calendarToIsoDate(calendarDate, overflow, cache);
        return this.isoToCalendarDate(isoDate, cache);
      },
      addDaysIso: function addDaysIso(isoDate, days) {
        var added = ES.AddISODate(isoDate.year, isoDate.month, isoDate.day, 0, 0, 0, days, "constrain");
        return added;
      },
      addDaysCalendar: function addDaysCalendar(calendarDate, days, cache) {
        var isoDate = this.calendarToIsoDate(calendarDate, "constrain", cache);
        var addedIso = this.addDaysIso(isoDate, days);
        var addedCalendar = this.isoToCalendarDate(addedIso, cache);
        return addedCalendar;
      },
      addMonthsCalendar: function addMonthsCalendar(calendarDate, months, overflow, cache) {
        var _calendarDate2 = calendarDate, day = _calendarDate2.day;
        for (var i = 0, absMonths = Math.abs(months); i < absMonths; i++) {
          var days = months < 0 ? -this.daysInPreviousMonth(calendarDate, cache) : this.daysInMonth(calendarDate, cache);
          var isoDate = this.calendarToIsoDate(calendarDate, "constrain", cache);
          var addedIso = this.addDaysIso(isoDate, days, cache);
          calendarDate = this.isoToCalendarDate(addedIso, cache);
          if (calendarDate.day !== day) {
            calendarDate = this.regulateDate(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
              day
            }), "constrain", cache);
          }
        }
        if (overflow === "reject" && calendarDate.day !== day) {
          throw new RangeError("Day ".concat(day, " does not exist in resulting calendar month"));
        }
        return calendarDate;
      },
      addCalendar: function addCalendar(calendarDate, _ref2, overflow, cache) {
        var _ref2$years = _ref2.years, years = _ref2$years === void 0 ? 0 : _ref2$years, _ref2$months = _ref2.months, months = _ref2$months === void 0 ? 0 : _ref2$months, _ref2$weeks = _ref2.weeks, weeks = _ref2$weeks === void 0 ? 0 : _ref2$weeks, _ref2$days = _ref2.days, days = _ref2$days === void 0 ? 0 : _ref2$days;
        var year = calendarDate.year, month = calendarDate.month, day = calendarDate.day;
        var addedMonths = this.addMonthsCalendar({
          year: year + years,
          month,
          day
        }, months, overflow, cache);
        days += weeks * 7;
        var addedDays = this.addDaysCalendar(addedMonths, days, cache);
        return addedDays;
      },
      untilCalendar: function untilCalendar(calendarOne, calendarTwo, largestUnit, cache) {
        var days = 0;
        var weeks = 0;
        var months = 0;
        var years = 0;
        switch (largestUnit) {
          case "days":
            days = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
            break;
          case "weeks": {
            var totalDays = this.calendarDaysUntil(calendarOne, calendarTwo, cache);
            days = totalDays % 7;
            weeks = (totalDays - days) / 7;
            break;
          }
          case "months":
          case "years": {
            var diffYears = calendarTwo.year - calendarOne.year;
            var diffMonths = calendarTwo.month - calendarOne.month;
            var diffDays = calendarTwo.day - calendarOne.day;
            var sign2 = this.compareCalendarDates(calendarTwo, calendarOne);
            if (largestUnit === "years" && diffYears) {
              var isOneFurtherInYear = diffMonths * sign2 < 0 || diffMonths === 0 && diffDays * sign2 < 0;
              years = isOneFurtherInYear ? diffYears - sign2 : diffYears;
            }
            var yearsAdded = years ? this.addCalendar(calendarOne, {
              years
            }, "constrain", cache) : calendarOne;
            var current;
            var next = yearsAdded;
            do {
              months++;
              current = next;
              next = this.addMonthsCalendar(current, sign2, "constrain", cache);
              if (next.day !== calendarOne.day) {
                next = this.regulateDate(_objectSpread2(_objectSpread2({}, next), {}, {
                  day: calendarOne.day
                }), "constrain", cache);
              }
            } while (this.compareCalendarDates(calendarTwo, next) * sign2 >= 0);
            months--;
            var remainingDays = this.calendarDaysUntil(current, calendarTwo, cache);
            days = remainingDays % 7;
            weeks = (remainingDays - days) / 7;
            break;
          }
        }
        return {
          years,
          months,
          weeks,
          days
        };
      },
      daysInMonth: function daysInMonth(calendarDate, cache) {
        var day = calendarDate.day;
        var max = this.maximumMonthLength(calendarDate);
        var min = this.minimumMonthLength(calendarDate);
        if (min === max)
          return min;
        var increment = day <= max - min ? max : min;
        var isoDate = this.calendarToIsoDate(calendarDate, "constrain", cache);
        var addedIsoDate = this.addDaysIso(isoDate, increment);
        var addedCalendarDate = this.isoToCalendarDate(addedIsoDate, cache);
        var endOfMonthIso = this.addDaysIso(addedIsoDate, -addedCalendarDate.day);
        var endOfMonthCalendar = this.isoToCalendarDate(endOfMonthIso, cache);
        return endOfMonthCalendar.day;
      },
      daysInPreviousMonth: function daysInPreviousMonth(calendarDate, cache) {
        var day = calendarDate.day, month = calendarDate.month, year = calendarDate.year;
        var previousMonthYear = month > 1 ? year : year - 1;
        var previousMonthDate = {
          year: previousMonthYear,
          month,
          day: 1
        };
        var previousMonth = month > 1 ? month - 1 : this.monthsInYear(previousMonthDate, cache);
        previousMonthDate = _objectSpread2(_objectSpread2({}, previousMonthDate), {}, {
          month: previousMonth
        });
        var min = this.minimumMonthLength(previousMonthDate);
        var max = this.maximumMonthLength(previousMonthDate);
        if (min === max)
          return max;
        var isoDate = this.calendarToIsoDate(calendarDate, "constrain", cache);
        var lastDayOfPreviousMonthIso = this.addDaysIso(isoDate, -day);
        var lastDayOfPreviousMonthCalendar = this.isoToCalendarDate(lastDayOfPreviousMonthIso, cache);
        return lastDayOfPreviousMonthCalendar.day;
      },
      startOfCalendarYear: function startOfCalendarYear(calendarDate) {
        return {
          year: calendarDate.year,
          month: 1,
          day: 1
        };
      },
      startOfCalendarMonth: function startOfCalendarMonth(calendarDate) {
        return {
          year: calendarDate.year,
          month: calendarDate.month,
          day: 1
        };
      },
      calendarDaysUntil: function calendarDaysUntil(calendarOne, calendarTwo, cache) {
        var oneIso = this.calendarToIsoDate(calendarOne, "constrain", cache);
        var twoIso = this.calendarToIsoDate(calendarTwo, "constrain", cache);
        return this.isoDaysUntil(oneIso, twoIso);
      },
      isoDaysUntil: function isoDaysUntil(oneIso, twoIso) {
        var duration2 = ES.DifferenceISODate(oneIso.year, oneIso.month, oneIso.day, twoIso.year, twoIso.month, twoIso.day, "days");
        return duration2.days;
      },
      eraLength: "short",
      hasEra: true,
      monthDayFromFields: function monthDayFromFields(fields, overflow, cache) {
        var year = fields.year, month = fields.month, monthCode = fields.monthCode, day = fields.day, era = fields.era, eraYear = fields.eraYear;
        if (monthCode === void 0) {
          if (year === void 0 && (era === void 0 || eraYear === void 0)) {
            throw new TypeError("`monthCode`, `year`, or `era` and `eraYear` is required");
          }
          var _this$adjustCalendarD = this.adjustCalendarDate({
            year,
            month,
            monthCode,
            day,
            era,
            eraYear
          }, cache, overflow);
          monthCode = _this$adjustCalendarD.monthCode;
          year = _this$adjustCalendarD.year;
        }
        var isoYear, isoMonth, isoDay;
        var closestCalendar, closestIso;
        var startDateIso = {
          year: 1972,
          month: 1,
          day: 1
        };
        var _this$isoToCalendarDa = this.isoToCalendarDate(startDateIso, cache), calendarYear = _this$isoToCalendarDa.year;
        for (var i = 0; i < 100; i++) {
          var testCalendarDate = this.adjustCalendarDate({
            day,
            monthCode,
            year: calendarYear - i
          }, cache);
          var isoDate = this.calendarToIsoDate(testCalendarDate, "constrain", cache);
          var roundTripCalendarDate = this.isoToCalendarDate(isoDate, cache);
          isoYear = isoDate.year;
          isoMonth = isoDate.month;
          isoDay = isoDate.day;
          if (roundTripCalendarDate.monthCode === monthCode && roundTripCalendarDate.day === day) {
            return {
              month: isoMonth,
              day: isoDay,
              year: isoYear
            };
          } else if (overflow === "constrain") {
            if (closestCalendar === void 0 || roundTripCalendarDate.monthCode === closestCalendar.monthCode && roundTripCalendarDate.day > closestCalendar.day) {
              closestCalendar = roundTripCalendarDate;
              closestIso = isoDate;
            }
          }
        }
        if (overflow === "constrain" && closestIso !== void 0)
          return closestIso;
        throw new RangeError("No recent ".concat(this.id, " year with monthCode ").concat(monthCode, " and day ").concat(day));
      }
    };
    var helperHebrew = ObjectAssign$3({}, nonIsoHelperBase, {
      id: "hebrew",
      calendarType: "lunisolar",
      inLeapYear: function inLeapYear(calendarDate) {
        var year = calendarDate.year;
        return (7 * year + 1) % 19 < 7;
      },
      monthsInYear: function monthsInYear(calendarDate) {
        return this.inLeapYear(calendarDate) ? 13 : 12;
      },
      minimumMonthLength: function minimumMonthLength(calendarDate) {
        return this.minMaxMonthLength(calendarDate, "min");
      },
      maximumMonthLength: function maximumMonthLength(calendarDate) {
        return this.minMaxMonthLength(calendarDate, "max");
      },
      minMaxMonthLength: function minMaxMonthLength(calendarDate, minOrMax) {
        var month = calendarDate.month, year = calendarDate.year;
        var monthCode = this.getMonthCode(year, month);
        var monthInfo = Object.entries(this.months).find(function(m) {
          return m[1].monthCode === monthCode;
        });
        if (monthInfo === void 0)
          throw new RangeError("unmatched Hebrew month: ".concat(month));
        var daysInMonth = monthInfo[1].days;
        return typeof daysInMonth === "number" ? daysInMonth : daysInMonth[minOrMax];
      },
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        var year = calendarDate.year;
        return {
          year: year - 3760,
          month: 1,
          day: 1
        };
      },
      months: {
        Tishri: {
          leap: 1,
          regular: 1,
          monthCode: "M01",
          days: 30
        },
        Heshvan: {
          leap: 2,
          regular: 2,
          monthCode: "M02",
          days: {
            min: 29,
            max: 30
          }
        },
        Kislev: {
          leap: 3,
          regular: 3,
          monthCode: "M03",
          days: {
            min: 29,
            max: 30
          }
        },
        Tevet: {
          leap: 4,
          regular: 4,
          monthCode: "M04",
          days: 29
        },
        Shevat: {
          leap: 5,
          regular: 5,
          monthCode: "M05",
          days: 30
        },
        Adar: {
          leap: void 0,
          regular: 6,
          monthCode: "M06",
          days: 29
        },
        "Adar I": {
          leap: 6,
          regular: void 0,
          monthCode: "M05L",
          days: 30
        },
        "Adar II": {
          leap: 7,
          regular: void 0,
          monthCode: "M06",
          days: 29
        },
        Nisan: {
          leap: 8,
          regular: 7,
          monthCode: "M07",
          days: 30
        },
        Iyar: {
          leap: 9,
          regular: 8,
          monthCode: "M08",
          days: 29
        },
        Sivan: {
          leap: 10,
          regular: 9,
          monthCode: "M09",
          days: 30
        },
        Tamuz: {
          leap: 11,
          regular: 10,
          monthCode: "M10",
          days: 29
        },
        Av: {
          leap: 12,
          regular: 11,
          monthCode: "M11",
          days: 30
        },
        Elul: {
          leap: 13,
          regular: 12,
          monthCode: "M12",
          days: 29
        }
      },
      getMonthCode: function getMonthCode(year, month) {
        if (this.inLeapYear({
          year
        })) {
          return month === 6 ? buildMonthCode(5, true) : buildMonthCode(month < 6 ? month : month - 1);
        } else {
          return buildMonthCode(month);
        }
      },
      adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
        var overflow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "constrain";
        var fromLegacyDate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var year = calendarDate.year, eraYear = calendarDate.eraYear, month = calendarDate.month, monthCode = calendarDate.monthCode, day = calendarDate.day, monthExtra = calendarDate.monthExtra;
        if (year === void 0)
          year = eraYear;
        if (eraYear === void 0)
          eraYear = year;
        if (fromLegacyDate) {
          if (monthExtra) {
            var monthInfo = this.months[monthExtra];
            if (!monthInfo)
              throw new RangeError("Unrecognized month from formatToParts: ".concat(monthExtra));
            month = this.inLeapYear({
              year
            }) ? monthInfo.leap : monthInfo.regular;
          }
          monthCode = this.getMonthCode(year, month);
          var result = {
            year,
            month,
            day,
            era: void 0,
            eraYear,
            monthCode
          };
          return result;
        } else {
          this.validateCalendarDate(calendarDate);
          if (month === void 0) {
            if (monthCode.endsWith("L")) {
              if (monthCode !== "M05L") {
                throw new RangeError("Hebrew leap month must have monthCode M05L, not ".concat(monthCode));
              }
              month = 6;
              if (!this.inLeapYear({
                year
              })) {
                if (overflow === "reject") {
                  throw new RangeError("Hebrew monthCode M05L is invalid in year ".concat(year, " which is not a leap year"));
                } else {
                  month = 5;
                  day = 30;
                  monthCode = "M05";
                }
              }
            } else {
              month = monthCodeNumberPart(monthCode);
              if (this.inLeapYear({
                year
              }) && month > 6)
                month++;
              var largestMonth = this.monthsInYear({
                year
              });
              if (month < 1 || month > largestMonth)
                throw new RangeError("Invalid monthCode: ".concat(monthCode));
            }
          } else {
            if (overflow === "reject") {
              ES.RejectToRange(month, 1, this.monthsInYear({
                year
              }));
              ES.RejectToRange(day, 1, this.maximumMonthLength(calendarDate));
            } else {
              month = ES.ConstrainToRange(month, 1, this.monthsInYear({
                year
              }));
              day = ES.ConstrainToRange(day, 1, this.maximumMonthLength(_objectSpread2(_objectSpread2({}, calendarDate), {}, {
                month
              })));
            }
            if (monthCode === void 0) {
              monthCode = this.getMonthCode(year, month);
            } else {
              var calculatedMonthCode = this.getMonthCode(year, month);
              if (calculatedMonthCode !== monthCode) {
                throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Hebrew year ").concat(year));
              }
            }
          }
          return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
            day,
            month,
            monthCode,
            year,
            eraYear
          });
        }
      },
      hasEra: false
    });
    var helperIslamic = ObjectAssign$3({}, nonIsoHelperBase, {
      id: "islamic",
      calendarType: "lunar",
      inLeapYear: function inLeapYear(calendarDate, cache) {
        var days = this.daysInMonth({
          year: calendarDate.year,
          month: 12,
          day: 1
        }, cache);
        return days === 30;
      },
      monthsInYear: function monthsInYear() {
        return 12;
      },
      minimumMonthLength: function minimumMonthLength() {
        return 29;
      },
      maximumMonthLength: function maximumMonthLength() {
        return 30;
      },
      DAYS_PER_ISLAMIC_YEAR: 354 + 11 / 30,
      DAYS_PER_ISO_YEAR: 365.2425,
      constantEra: "ah",
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        var _this$adjustCalendarD2 = this.adjustCalendarDate(calendarDate), year = _this$adjustCalendarD2.year;
        return {
          year: Math.floor(year * this.DAYS_PER_ISLAMIC_YEAR / this.DAYS_PER_ISO_YEAR) + 622,
          month: 1,
          day: 1
        };
      }
    });
    var helperPersian = ObjectAssign$3({}, nonIsoHelperBase, {
      id: "persian",
      calendarType: "solar",
      inLeapYear: function inLeapYear(calendarDate, cache) {
        return helperIslamic.inLeapYear(calendarDate, cache);
      },
      monthsInYear: function monthsInYear() {
        return 12;
      },
      minimumMonthLength: function minimumMonthLength(calendarDate) {
        var month = calendarDate.month;
        if (month === 12)
          return 29;
        return month <= 6 ? 31 : 30;
      },
      maximumMonthLength: function maximumMonthLength(calendarDate) {
        var month = calendarDate.month;
        if (month === 12)
          return 30;
        return month <= 6 ? 31 : 30;
      },
      constantEra: "ap",
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        var _this$adjustCalendarD3 = this.adjustCalendarDate(calendarDate), year = _this$adjustCalendarD3.year;
        return {
          year: year + 621,
          month: 1,
          day: 1
        };
      }
    });
    var helperIndian = ObjectAssign$3({}, nonIsoHelperBase, {
      id: "indian",
      calendarType: "solar",
      inLeapYear: function inLeapYear(calendarDate) {
        return isGregorianLeapYear(calendarDate.year + 78);
      },
      monthsInYear: function monthsInYear() {
        return 12;
      },
      minimumMonthLength: function minimumMonthLength(calendarDate) {
        return this.getMonthInfo(calendarDate).length;
      },
      maximumMonthLength: function maximumMonthLength(calendarDate) {
        return this.getMonthInfo(calendarDate).length;
      },
      constantEra: "saka",
      months: {
        1: {
          length: 30,
          month: 3,
          day: 22,
          leap: {
            length: 31,
            month: 3,
            day: 21
          }
        },
        2: {
          length: 31,
          month: 4,
          day: 21
        },
        3: {
          length: 31,
          month: 5,
          day: 22
        },
        4: {
          length: 31,
          month: 6,
          day: 22
        },
        5: {
          length: 31,
          month: 7,
          day: 23
        },
        6: {
          length: 31,
          month: 8,
          day: 23
        },
        7: {
          length: 30,
          month: 9,
          day: 23
        },
        8: {
          length: 30,
          month: 10,
          day: 23
        },
        9: {
          length: 30,
          month: 11,
          day: 22
        },
        10: {
          length: 30,
          month: 12,
          day: 22
        },
        11: {
          length: 30,
          month: 1,
          nextYear: true,
          day: 21
        },
        12: {
          length: 30,
          month: 2,
          nextYear: true,
          day: 20
        }
      },
      getMonthInfo: function getMonthInfo(calendarDate) {
        var month = calendarDate.month;
        var monthInfo = this.months[month];
        if (monthInfo === void 0)
          throw new RangeError("Invalid month: ".concat(month));
        if (this.inLeapYear(calendarDate) && monthInfo.leap)
          monthInfo = monthInfo.leap;
        return monthInfo;
      },
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        calendarDate = this.adjustCalendarDate(calendarDate);
        var monthInfo = this.getMonthInfo(calendarDate);
        var isoYear = calendarDate.year + 78 + (monthInfo.nextYear ? 1 : 0);
        var isoMonth = monthInfo.month;
        var isoDay = monthInfo.day;
        var isoDate = ES.AddISODate(isoYear, isoMonth, isoDay, 0, 0, 0, calendarDate.day - 1, "constrain");
        return isoDate;
      },
      vulnerableToBceBug: new Date("0000-01-01T00:00Z").toLocaleDateString("en-US-u-ca-indian", {
        timeZone: "UTC"
      }) !== "10/11/-79 Saka",
      checkIcuBugs: function checkIcuBugs(calendarDate, isoDate) {
        if (this.vulnerableToBceBug && isoDate.year < 1) {
          throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 0001-01-01") + " (see https://bugs.chromium.org/p/v8/issues/detail?id=10529)");
        }
      }
    });
    function adjustEras(eras) {
      if (eras.length === 0) {
        throw new RangeError("Invalid era data: eras are required");
      }
      if (eras.length === 1 && eras[0].reverseOf) {
        throw new RangeError("Invalid era data: anchor era cannot count years backwards");
      }
      if (eras.length === 1 && !eras[0].name) {
        throw new RangeError("Invalid era data: at least one named era is required");
      }
      if (eras.filter(function(e) {
        return e.reverseOf != null;
      }).length > 1) {
        throw new RangeError("Invalid era data: only one era can count years backwards");
      }
      var anchorEra;
      eras.forEach(function(e) {
        if (e.isAnchor || !e.anchorEpoch && !e.reverseOf) {
          if (anchorEra)
            throw new RangeError("Invalid era data: cannot have multiple anchor eras");
          anchorEra = e;
          e.anchorEpoch = {
            year: e.hasYearZero ? 0 : 1
          };
        } else if (!e.name) {
          throw new RangeError("If era name is blank, it must be the anchor era");
        }
      });
      eras = eras.filter(function(e) {
        return e.name;
      });
      eras.forEach(function(e) {
        var reverseOf = e.reverseOf;
        if (reverseOf) {
          var reversedEra = eras.find(function(era) {
            return era.name === reverseOf;
          });
          if (reversedEra === void 0)
            throw new RangeError("Invalid era data: unmatched reverseOf era: ".concat(reverseOf));
          e.reverseOf = reversedEra;
          e.anchorEpoch = reversedEra.anchorEpoch;
          e.isoEpoch = reversedEra.isoEpoch;
        }
        if (e.anchorEpoch.month === void 0)
          e.anchorEpoch.month = 1;
        if (e.anchorEpoch.day === void 0)
          e.anchorEpoch.day = 1;
      });
      eras.sort(function(e1, e2) {
        if (e1.reverseOf)
          return 1;
        if (e2.reverseOf)
          return -1;
        return e2.isoEpoch.year - e1.isoEpoch.year;
      });
      var lastEraReversed = eras[eras.length - 1].reverseOf;
      if (lastEraReversed) {
        if (lastEraReversed !== eras[eras.length - 2])
          throw new RangeError("Invalid era data: invalid reverse-sign era");
      }
      eras.forEach(function(e, i) {
        e.genericName = "era".concat(eras.length - 1 - i);
      });
      return {
        eras,
        anchorEra: anchorEra || eras[0]
      };
    }
    function isGregorianLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var makeHelperGregorian = function makeHelperGregorian2(id, originalEras) {
      var _adjustEras = adjustEras(originalEras), eras = _adjustEras.eras, anchorEra = _adjustEras.anchorEra;
      return ObjectAssign$3({}, nonIsoHelperBase, {
        id,
        eras,
        anchorEra,
        calendarType: "solar",
        inLeapYear: function inLeapYear(calendarDate) {
          var _this$estimateIsoDate = this.estimateIsoDate(calendarDate), year = _this$estimateIsoDate.year;
          return isGregorianLeapYear(year);
        },
        monthsInYear: function monthsInYear() {
          return 12;
        },
        minimumMonthLength: function minimumMonthLength(calendarDate) {
          var month = calendarDate.month;
          if (month === 2)
            return this.inLeapYear(calendarDate) ? 29 : 28;
          return [4, 6, 9, 11].indexOf(month) >= 0 ? 30 : 31;
        },
        maximumMonthLength: function maximumMonthLength(calendarDate) {
          return this.minimumMonthLength(calendarDate);
        },
        completeEraYear: function completeEraYear(calendarDate) {
          var _this3 = this;
          var checkField = function checkField2(name, value) {
            var currentValue = calendarDate[name];
            if (currentValue != null && currentValue != value) {
              throw new RangeError("Input ".concat(name, " ").concat(currentValue, " doesn't match calculated value ").concat(value));
            }
          };
          var eraFromYear = function eraFromYear2(year2) {
            var eraYear2;
            var adjustedCalendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
              year: year2
            });
            var matchingEra2 = _this3.eras.find(function(e, i) {
              if (i === _this3.eras.length - 1) {
                if (e.reverseOf) {
                  if (year2 > 0)
                    throw new RangeError("Signed year ".concat(year2, " is invalid for era ").concat(e.name));
                  eraYear2 = e.anchorEpoch.year - year2;
                  return true;
                }
                eraYear2 = year2 - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
                return true;
              }
              var comparison = nonIsoHelperBase.compareCalendarDates(adjustedCalendarDate, e.anchorEpoch);
              if (comparison >= 0) {
                eraYear2 = year2 - e.anchorEpoch.year + (e.hasYearZero ? 0 : 1);
                return true;
              }
              return false;
            });
            if (!matchingEra2)
              throw new RangeError("Year ".concat(year2, " was not matched by any era"));
            return {
              eraYear: eraYear2,
              era: matchingEra2.name
            };
          };
          var year = calendarDate.year, eraYear = calendarDate.eraYear, era = calendarDate.era;
          if (year != null) {
            var _eraFromYear = eraFromYear(year);
            eraYear = _eraFromYear.eraYear;
            era = _eraFromYear.era;
            checkField("era", era);
            checkField("eraYear", eraYear);
          } else if (eraYear != null) {
            var matchingEra = era === void 0 ? void 0 : this.eras.find(function(e) {
              return e.name === era || e.genericName === era;
            });
            if (!matchingEra)
              throw new RangeError("Era ".concat(era, " (ISO year ").concat(eraYear, ") was not matched by any era"));
            if (eraYear < 1 && matchingEra.reverseOf) {
              throw new RangeError("Years in ".concat(era, " era must be positive, not ").concat(year));
            }
            if (matchingEra.reverseOf) {
              year = matchingEra.anchorEpoch.year - eraYear;
            } else {
              year = eraYear + matchingEra.anchorEpoch.year - (matchingEra.hasYearZero ? 0 : 1);
            }
            checkField("year", year);
            var _eraFromYear2 = eraFromYear(year);
            eraYear = _eraFromYear2.eraYear;
            era = _eraFromYear2.era;
          } else {
            throw new RangeError("Either `year` or `eraYear` and `era` are required");
          }
          return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
            year,
            eraYear,
            era
          });
        },
        adjustCalendarDate: function adjustCalendarDate(calendarDate, cache, overflow) {
          var _calendarDate3 = calendarDate, month = _calendarDate3.month, monthCode = _calendarDate3.monthCode;
          if (month === void 0)
            calendarDate = _objectSpread2(_objectSpread2({}, calendarDate), {}, {
              month: monthCodeNumberPart(monthCode)
            });
          this.validateCalendarDate(calendarDate);
          calendarDate = this.completeEraYear(calendarDate);
          calendarDate = ES.Call(nonIsoHelperBase.adjustCalendarDate, this, [calendarDate, cache, overflow]);
          return calendarDate;
        },
        estimateIsoDate: function estimateIsoDate(calendarDate) {
          calendarDate = this.adjustCalendarDate(calendarDate);
          var _calendarDate4 = calendarDate, year = _calendarDate4.year, month = _calendarDate4.month, day = _calendarDate4.day;
          var anchorEra2 = this.anchorEra;
          var isoYearEstimate = year + anchorEra2.isoEpoch.year - (anchorEra2.hasYearZero ? 0 : 1);
          return ES.RegulateISODate(isoYearEstimate, month, day, "constrain");
        },
        v8IsVulnerableToJulianBug: new Date("+001001-01-01T00:00Z").toLocaleDateString("en-US-u-ca-japanese", {
          timeZone: "UTC"
        }).startsWith("12"),
        calendarIsVulnerableToJulianBug: false,
        checkIcuBugs: function checkIcuBugs(calendarDate, isoDate) {
          if (this.calendarIsVulnerableToJulianBug && this.v8IsVulnerableToJulianBug) {
            var beforeJulianSwitch = ES.CompareISODate(isoDate.year, isoDate.month, isoDate.day, 1582, 10, 15) < 0;
            if (beforeJulianSwitch) {
              throw new RangeError("calendar '".concat(this.id, "' is broken for ISO dates before 1582-10-15") + " (see https://bugs.chromium.org/p/chromium/issues/detail?id=1173158)");
            }
          }
        }
      });
    };
    var makeHelperOrthodox = function makeHelperOrthodox2(id, originalEras) {
      var base = makeHelperGregorian(id, originalEras);
      return ObjectAssign$3(base, {
        inLeapYear: function inLeapYear(calendarDate) {
          var year = calendarDate.year;
          return (year + 1) % 4 === 0;
        },
        monthsInYear: function monthsInYear() {
          return 13;
        },
        minimumMonthLength: function minimumMonthLength(calendarDate) {
          var month = calendarDate.month;
          if (month === 13)
            return this.inLeapYear(calendarDate) ? 6 : 5;
          return 30;
        },
        maximumMonthLength: function maximumMonthLength(calendarDate) {
          return this.minimumMonthLength(calendarDate);
        }
      });
    };
    var helperEthioaa = makeHelperOrthodox("ethioaa", [{
      name: "era0",
      isoEpoch: {
        year: -5492,
        month: 7,
        day: 17
      }
    }]);
    var helperCoptic = makeHelperOrthodox("coptic", [{
      name: "era1",
      isoEpoch: {
        year: 284,
        month: 8,
        day: 29
      }
    }, {
      name: "era0",
      reverseOf: "era1"
    }]);
    var helperEthiopic = makeHelperOrthodox("ethiopic", [{
      name: "era0",
      isoEpoch: {
        year: -5492,
        month: 7,
        day: 17
      }
    }, {
      name: "era1",
      isoEpoch: {
        year: 8,
        month: 8,
        day: 27
      },
      anchorEpoch: {
        year: 5501
      }
    }]);
    var helperRoc = ObjectAssign$3({}, makeHelperGregorian("roc", [{
      name: "minguo",
      isoEpoch: {
        year: 1912,
        month: 1,
        day: 1
      }
    }, {
      name: "before-roc",
      reverseOf: "minguo"
    }]), {
      calendarIsVulnerableToJulianBug: true
    });
    var helperBuddhist = ObjectAssign$3({}, makeHelperGregorian("buddhist", [{
      name: "be",
      hasYearZero: true,
      isoEpoch: {
        year: -543,
        month: 1,
        day: 1
      }
    }]), {
      calendarIsVulnerableToJulianBug: true
    });
    var helperGregory = ObjectAssign$3({}, makeHelperGregorian("gregory", [{
      name: "ce",
      isoEpoch: {
        year: 1,
        month: 1,
        day: 1
      }
    }, {
      name: "bce",
      reverseOf: "ce"
    }]), {
      reviseIntlEra: function reviseIntlEra(calendarDate) {
        var era = calendarDate.era, eraYear = calendarDate.eraYear;
        if (era === "bc")
          era = "bce";
        if (era === "ad")
          era = "ce";
        return {
          era,
          eraYear
        };
      }
    });
    var helperJapanese = ObjectAssign$3({}, makeHelperGregorian("japanese", [
      {
        name: "reiwa",
        isoEpoch: {
          year: 2019,
          month: 5,
          day: 1
        },
        anchorEpoch: {
          year: 2019,
          month: 5,
          day: 1
        }
      },
      {
        name: "heisei",
        isoEpoch: {
          year: 1989,
          month: 1,
          day: 8
        },
        anchorEpoch: {
          year: 1989,
          month: 1,
          day: 8
        }
      },
      {
        name: "showa",
        isoEpoch: {
          year: 1926,
          month: 12,
          day: 25
        },
        anchorEpoch: {
          year: 1926,
          month: 12,
          day: 25
        }
      },
      {
        name: "taisho",
        isoEpoch: {
          year: 1912,
          month: 7,
          day: 30
        },
        anchorEpoch: {
          year: 1912,
          month: 7,
          day: 30
        }
      },
      {
        name: "meiji",
        isoEpoch: {
          year: 1868,
          month: 9,
          day: 8
        },
        anchorEpoch: {
          year: 1868,
          month: 9,
          day: 8
        }
      },
      {
        name: "ce",
        isoEpoch: {
          year: 1,
          month: 1,
          day: 1
        }
      },
      {
        name: "bce",
        reverseOf: "ce"
      }
    ]), {
      eraLength: "long",
      calendarIsVulnerableToJulianBug: true,
      reviseIntlEra: function reviseIntlEra(calendarDate, isoDate) {
        var era = calendarDate.era, eraYear = calendarDate.eraYear;
        var isoYear = isoDate.year;
        if (this.eras.find(function(e) {
          return e.name === era;
        }))
          return {
            era,
            eraYear
          };
        return isoYear < 1 ? {
          era: "bce",
          eraYear: 1 - isoYear
        } : {
          era: "ce",
          eraYear: isoYear
        };
      }
    });
    var helperChinese = ObjectAssign$3({}, nonIsoHelperBase, {
      id: "chinese",
      calendarType: "lunisolar",
      inLeapYear: function inLeapYear(calendarDate, cache) {
        var months = this.getMonthList(calendarDate.year, cache);
        return Object.entries(months).length === 13;
      },
      monthsInYear: function monthsInYear(calendarDate, cache) {
        return this.inLeapYear(calendarDate, cache) ? 13 : 12;
      },
      minimumMonthLength: function minimumMonthLength() {
        return 29;
      },
      maximumMonthLength: function maximumMonthLength() {
        return 30;
      },
      getMonthList: function getMonthList(calendarYear, cache) {
        var _this4 = this;
        if (calendarYear === void 0) {
          throw new TypeError("Missing year");
        }
        var key = JSON.stringify({
          func: "getMonthList",
          calendarYear,
          id: this.id
        });
        var cached = cache.get(key);
        if (cached)
          return cached;
        var dateTimeFormat = new Intl.DateTimeFormat("en-US-u-ca-".concat(this.id), {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          era: "short",
          timeZone: "UTC"
        });
        var getCalendarDate = function getCalendarDate2(isoYear, daysPastFeb1) {
          var isoStringFeb1 = toUtcIsoDateString({
            isoYear,
            isoMonth: 2,
            isoDay: 1
          });
          var legacyDate = new Date(isoStringFeb1);
          legacyDate.setUTCDate(daysPastFeb1 + 1);
          var newYearGuess = dateTimeFormat.formatToParts(legacyDate);
          var calendarMonthString2 = newYearGuess.find(function(tv) {
            return tv.type === "month";
          }).value;
          var calendarDay2 = +newYearGuess.find(function(tv) {
            return tv.type === "day";
          }).value;
          var calendarYearToVerify2 = newYearGuess.find(function(tv) {
            return tv.type === "relatedYear";
          });
          if (calendarYearToVerify2 !== void 0) {
            calendarYearToVerify2 = +calendarYearToVerify2.value;
          } else {
            throw new RangeError("Intl.DateTimeFormat.formatToParts lacks relatedYear in ".concat(_this4.id, " calendar. Try Node 14+ or modern browsers."));
          }
          return {
            calendarMonthString: calendarMonthString2,
            calendarDay: calendarDay2,
            calendarYearToVerify: calendarYearToVerify2
          };
        };
        var isoDaysDelta = 17;
        var _getCalendarDate = getCalendarDate(calendarYear, isoDaysDelta), calendarMonthString = _getCalendarDate.calendarMonthString, calendarDay = _getCalendarDate.calendarDay, calendarYearToVerify = _getCalendarDate.calendarYearToVerify;
        if (calendarMonthString !== "1") {
          isoDaysDelta += 29;
          var _getCalendarDate2 = getCalendarDate(calendarYear, isoDaysDelta);
          calendarMonthString = _getCalendarDate2.calendarMonthString;
          calendarDay = _getCalendarDate2.calendarDay;
        }
        isoDaysDelta -= calendarDay - 5;
        var result = {};
        var monthIndex = 1;
        var oldCalendarDay;
        var oldMonthString;
        var done = false;
        do {
          var _getCalendarDate3 = getCalendarDate(calendarYear, isoDaysDelta);
          calendarMonthString = _getCalendarDate3.calendarMonthString;
          calendarDay = _getCalendarDate3.calendarDay;
          calendarYearToVerify = _getCalendarDate3.calendarYearToVerify;
          if (oldCalendarDay) {
            result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
          }
          if (calendarYearToVerify !== calendarYear) {
            done = true;
          } else {
            result[calendarMonthString] = {
              monthIndex: monthIndex++
            };
            isoDaysDelta += 30;
          }
          oldCalendarDay = calendarDay;
          oldMonthString = calendarMonthString;
        } while (!done);
        result[oldMonthString].daysInMonth = oldCalendarDay + 30 - calendarDay;
        cache.set(key, result);
        return result;
      },
      estimateIsoDate: function estimateIsoDate(calendarDate) {
        var year = calendarDate.year, month = calendarDate.month;
        return {
          year,
          month: month >= 12 ? 12 : month + 1,
          day: 1
        };
      },
      adjustCalendarDate: function adjustCalendarDate(calendarDate, cache) {
        var overflow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "constrain";
        var fromLegacyDate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var year = calendarDate.year, month = calendarDate.month, monthExtra = calendarDate.monthExtra, day = calendarDate.day, monthCode = calendarDate.monthCode, eraYear = calendarDate.eraYear;
        if (fromLegacyDate) {
          year = eraYear;
          if (monthExtra && monthExtra !== "bis")
            throw new RangeError("Unexpected leap month suffix: ".concat(monthExtra));
          var _monthCode = buildMonthCode(month, monthExtra !== void 0);
          var monthString = "".concat(month).concat(monthExtra || "");
          var months = this.getMonthList(year, cache);
          var monthInfo = months[monthString];
          if (monthInfo === void 0)
            throw new RangeError("Unmatched month ".concat(monthString, " in Chinese year ").concat(year));
          month = monthInfo.monthIndex;
          return {
            year,
            month,
            day,
            era: void 0,
            eraYear,
            monthCode: _monthCode
          };
        } else {
          this.validateCalendarDate(calendarDate);
          if (year === void 0)
            year = eraYear;
          if (eraYear === void 0)
            eraYear = year;
          if (month === void 0) {
            var _months = this.getMonthList(year, cache);
            var numberPart = monthCode.replace("L", "bis").slice(1);
            if (numberPart[0] === "0")
              numberPart = numberPart.slice(1);
            var _monthInfo = _months[numberPart];
            month = _monthInfo && _monthInfo.monthIndex;
            if (month === void 0 && monthCode.endsWith("L") && !["M01L", "M12L", "M13L"].includes(monthCode) && overflow === "constrain") {
              var withoutML = monthCode.slice(1, -1);
              if (withoutML[0] === "0")
                withoutML = withoutML.slice(1);
              _monthInfo = _months[withoutML];
              if (_monthInfo) {
                var _monthInfo2 = _monthInfo;
                day = _monthInfo2.daysInMonth;
                month = _monthInfo2.monthIndex;
                monthCode = buildMonthCode(withoutML);
              }
            }
            if (month === void 0) {
              throw new RangeError("Unmatched month ".concat(monthCode, " in Chinese year ").concat(year));
            }
          } else if (monthCode === void 0) {
            var _months2 = this.getMonthList(year, cache);
            var monthEntries = Object.entries(_months2);
            var largestMonth = monthEntries.length;
            if (overflow === "reject") {
              ES.RejectToRange(month, 1, largestMonth);
              ES.RejectToRange(day, 1, this.maximumMonthLength());
            } else {
              month = ES.ConstrainToRange(month, 1, largestMonth);
              day = ES.ConstrainToRange(day, 1, this.maximumMonthLength());
            }
            var matchingMonthEntry = monthEntries.find(function(_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2), v = _ref4[1];
              return v.monthIndex === month;
            });
            if (matchingMonthEntry === void 0) {
              throw new RangeError("Invalid month ".concat(month, " in Chinese year ").concat(year));
            }
            monthCode = buildMonthCode(matchingMonthEntry[0].replace("bis", ""), matchingMonthEntry[0].indexOf("bis") !== -1);
          } else {
            var _months3 = this.getMonthList(year, cache);
            var _numberPart = monthCode.replace("L", "bis").slice(1);
            if (_numberPart[0] === "0")
              _numberPart = _numberPart.slice(1);
            var _monthInfo3 = _months3[_numberPart];
            if (!_monthInfo3)
              throw new RangeError("Unmatched monthCode ".concat(monthCode, " in Chinese year ").concat(year));
            if (month !== _monthInfo3.monthIndex) {
              throw new RangeError("monthCode ".concat(monthCode, " doesn't correspond to month ").concat(month, " in Chinese year ").concat(year));
            }
          }
          return _objectSpread2(_objectSpread2({}, calendarDate), {}, {
            year,
            eraYear,
            month,
            monthCode,
            day
          });
        }
      },
      hasEra: false
    });
    var helperDangi = ObjectAssign$3({}, _objectSpread2(_objectSpread2({}, helperChinese), {}, {
      id: "dangi"
    }));
    var nonIsoGeneralImpl = {
      dateFromFields: function dateFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        var cache = new OneObjectCache();
        fields = ES.PrepareTemporalFields(fields, [["day"], ["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]);
        var _this$helper$calendar = this.helper.calendarToIsoDate(fields, overflow, cache), year = _this$helper$calendar.year, month = _this$helper$calendar.month, day = _this$helper$calendar.day;
        var result = ES.CreateTemporalDate(year, month, day, calendar2);
        cache.setObject(result);
        return result;
      },
      yearMonthFromFields: function yearMonthFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        var cache = new OneObjectCache();
        fields = ES.PrepareTemporalFields(fields, [["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]);
        var _this$helper$calendar2 = this.helper.calendarToIsoDate(_objectSpread2(_objectSpread2({}, fields), {}, {
          day: 1
        }), overflow, cache), year = _this$helper$calendar2.year, month = _this$helper$calendar2.month, day = _this$helper$calendar2.day;
        var result = ES.CreateTemporalYearMonth(year, month, calendar2, day);
        cache.setObject(result);
        return result;
      },
      monthDayFromFields: function monthDayFromFields(fields, options, calendar2) {
        var overflow = ES.ToTemporalOverflow(options);
        var cache = new OneObjectCache();
        fields = ES.PrepareTemporalFields(fields, [["day"], ["era", void 0], ["eraYear", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]]);
        var _this$helper$monthDay = this.helper.monthDayFromFields(fields, overflow, cache), year = _this$helper$monthDay.year, month = _this$helper$monthDay.month, day = _this$helper$monthDay.day;
        var result = ES.CreateTemporalMonthDay(month, day, calendar2, year);
        cache.setObject(result);
        return result;
      },
      fields: function fields(_fields6) {
        if (_fields6.includes("year"))
          _fields6 = [].concat(_toConsumableArray(_fields6), ["era", "eraYear"]);
        return _fields6;
      },
      mergeFields: function mergeFields(fields, additionalFields) {
        var month = fields.month, monthCode = fields.monthCode, year = fields.year, era = fields.era, eraYear = fields.eraYear, original = _objectWithoutProperties(fields, ["month", "monthCode", "year", "era", "eraYear"]);
        var newMonth = additionalFields.month, newMonthCode = additionalFields.monthCode, newYear = additionalFields.year, newEra = additionalFields.era, newEraYear = additionalFields.eraYear;
        if (newMonth === void 0 && newMonthCode === void 0) {
          original.month = month;
          original.monthCode = monthCode;
        }
        if (newYear === void 0 && newEra === void 0 && newEraYear === void 0) {
          original.year = year;
          original.era = era;
          original.eraYear = eraYear;
        }
        return _objectSpread2(_objectSpread2({}, original), additionalFields);
      },
      dateAdd: function dateAdd(date, duration2, overflow, calendar2) {
        var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days;
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        var added = this.helper.addCalendar(calendarDate, {
          years,
          months,
          weeks,
          days
        }, overflow, cache);
        var isoAdded = this.helper.calendarToIsoDate(added, "constrain", cache);
        var year = isoAdded.year, month = isoAdded.month, day = isoAdded.day;
        var newTemporalObject = ES.CreateTemporalDate(year, month, day, calendar2);
        var newCache = new OneObjectCache(cache);
        newCache.setObject(newTemporalObject);
        return newTemporalObject;
      },
      dateUntil: function dateUntil(one, two, largestUnit) {
        var cacheOne = OneObjectCache.getCacheForObject(one);
        var cacheTwo = OneObjectCache.getCacheForObject(two);
        var calendarOne = this.helper.temporalToCalendarDate(one, cacheOne);
        var calendarTwo = this.helper.temporalToCalendarDate(two, cacheTwo);
        var result = this.helper.untilCalendar(calendarOne, calendarTwo, largestUnit, cacheOne);
        return result;
      },
      year: function year(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.year;
      },
      month: function month(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.month;
      },
      day: function day(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.day;
      },
      era: function era(date) {
        if (!this.helper.hasEra)
          return void 0;
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.era;
      },
      eraYear: function eraYear(date) {
        if (!this.helper.hasEra)
          return void 0;
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.eraYear;
      },
      monthCode: function monthCode(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        return calendarDate.monthCode;
      },
      dayOfWeek: function dayOfWeek(date) {
        return impl["iso8601"].dayOfWeek(date);
      },
      dayOfYear: function dayOfYear(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.isoToCalendarDate(date, cache);
        var startOfYear = this.helper.startOfCalendarYear(calendarDate);
        var diffDays = this.helper.calendarDaysUntil(startOfYear, calendarDate, cache);
        return diffDays + 1;
      },
      weekOfYear: function weekOfYear(date) {
        return impl["iso8601"].weekOfYear(date);
      },
      daysInWeek: function daysInWeek(date) {
        return impl["iso8601"].daysInWeek(date);
      },
      daysInMonth: function daysInMonth(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        var max = this.helper.maximumMonthLength(calendarDate);
        var min = this.helper.minimumMonthLength(calendarDate);
        if (max === min)
          return max;
        var startOfMonthCalendar = this.helper.startOfCalendarMonth(calendarDate);
        var startOfNextMonthCalendar = this.helper.addMonthsCalendar(startOfMonthCalendar, 1, "constrain", cache);
        var result = this.helper.calendarDaysUntil(startOfMonthCalendar, startOfNextMonthCalendar, cache);
        return result;
      },
      daysInYear: function daysInYear(date) {
        if (!HasSlot(date, ISO_YEAR))
          date = ES.ToTemporalDate(date);
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        var startOfYearCalendar = this.helper.startOfCalendarYear(calendarDate);
        var startOfNextYearCalendar = this.helper.addCalendar(startOfYearCalendar, {
          years: 1
        }, "constrain", cache);
        var result = this.helper.calendarDaysUntil(startOfYearCalendar, startOfNextYearCalendar, cache);
        return result;
      },
      monthsInYear: function monthsInYear(date) {
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        var result = this.helper.monthsInYear(calendarDate, cache);
        return result;
      },
      inLeapYear: function inLeapYear(date) {
        if (!HasSlot(date, ISO_YEAR))
          date = ES.ToTemporalDate(date);
        var cache = OneObjectCache.getCacheForObject(date);
        var calendarDate = this.helper.temporalToCalendarDate(date, cache);
        var result = this.helper.inLeapYear(calendarDate, cache);
        return result;
      }
    };
    impl["hebrew"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperHebrew
    });
    impl["islamic"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperIslamic
    });
    ["islamic-umalqura", "islamic-tbla", "islamic-civil", "islamic-rgsa", "islamicc"].forEach(function(id) {
      impl[id] = ObjectAssign$3({}, nonIsoGeneralImpl, {
        helper: _objectSpread2(_objectSpread2({}, helperIslamic), {}, {
          id
        })
      });
    });
    impl["persian"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperPersian
    });
    impl["ethiopic"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperEthiopic
    });
    impl["ethioaa"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperEthioaa
    });
    impl["coptic"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperCoptic
    });
    impl["chinese"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperChinese
    });
    impl["dangi"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperDangi
    });
    impl["roc"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperRoc
    });
    impl["indian"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperIndian
    });
    impl["buddhist"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperBuddhist
    });
    impl["japanese"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperJapanese
    });
    impl["gregory"] = ObjectAssign$3({}, nonIsoGeneralImpl, {
      helper: helperGregory
    });
    var BUILTIN_CALENDAR_IDS = Object.keys(impl);
    function IsBuiltinCalendar(id) {
      return ArrayIncludes.call(BUILTIN_CALENDAR_IDS, id);
    }
    var tzComponent = /\.[-A-Za-z_]|\.\.[-A-Za-z._]{1,12}|\.[-A-Za-z_][-A-Za-z._]{0,12}|[A-Za-z_][-A-Za-z._]{0,13}/;
    var offsetNoCapture = /(?:[+\u2212-][0-2][0-9](?::?[0-5][0-9](?::?[0-5][0-9](?:[.,]\d{1,9})?)?)?)/;
    var timeZoneID = new RegExp("(?:(?:".concat(tzComponent.source, ")(?:\\/(?:").concat(tzComponent.source, "))*|Etc/GMT[-+]\\d{1,2}|").concat(offsetNoCapture.source, ")"));
    var calComponent = /[A-Za-z0-9]{3,8}/;
    var calendarID = new RegExp("(?:".concat(calComponent.source, "(?:-").concat(calComponent.source, ")*)"));
    var yearpart = /(?:[+\u2212-]\d{6}|\d{4})/;
    var datesplit = new RegExp("(".concat(yearpart.source, ")(?:-(\\d{2})-(\\d{2})|(\\d{2})(\\d{2}))"));
    var timesplit = /(\d{2})(?::(\d{2})(?::(\d{2})(?:[.,](\d{1,9}))?)?|(\d{2})(?:(\d{2})(?:[.,](\d{1,9}))?)?)?/;
    var offset = /([+\u2212-])([01][0-9]|2[0-3])(?::?([0-5][0-9])(?::?([0-5][0-9])(?:[.,](\d{1,9}))?)?)?/;
    var zonesplit = new RegExp("(?:([zZ])|(?:".concat(offset.source, ")?)(?:\\[(").concat(timeZoneID.source, ")\\])?"));
    var calendar = new RegExp("\\[u-ca=(".concat(calendarID.source, ")\\]"));
    var instant$1 = new RegExp("^".concat(datesplit.source, "(?:(?:T|\\s+)").concat(timesplit.source, ")?").concat(zonesplit.source, "(?:").concat(calendar.source, ")?$"), "i");
    var datetime = new RegExp("^".concat(datesplit.source, "(?:(?:T|\\s+)").concat(timesplit.source, ")?(?:").concat(zonesplit.source, ")?(?:").concat(calendar.source, ")?$"), "i");
    var time = new RegExp("^".concat(timesplit.source, "(?:").concat(zonesplit.source, ")?(?:").concat(calendar.source, ")?$"), "i");
    var yearmonth = new RegExp("^(".concat(yearpart.source, ")-?(\\d{2})$"));
    var monthday = /^(?:--)?(\d{2})-?(\d{2})$/;
    var fraction = /(\d+)(?:[.,](\d{1,9}))?/;
    var durationDate = /(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?/;
    var durationTime = new RegExp("(?:".concat(fraction.source, "H)?(?:").concat(fraction.source, "M)?(?:").concat(fraction.source, "S)?"));
    var duration = new RegExp("^([+\u2212-])?P".concat(durationDate.source, "(?:T(?!$)").concat(durationTime.source, ")?$"), "i");
    var ArrayPrototypePush$1 = Array.prototype.push;
    var IntlDateTimeFormat$1 = globalThis.Intl.DateTimeFormat;
    var MathMin = Math.min;
    var MathMax = Math.max;
    var MathAbs = Math.abs;
    var MathFloor = Math.floor;
    var MathSign = Math.sign;
    var MathTrunc = Math.trunc;
    var NumberIsNaN = Number.isNaN;
    var NumberIsFinite = Number.isFinite;
    var NumberMaxSafeInteger = Number.MAX_SAFE_INTEGER;
    var NumberIsInteger = Number.isInteger;
    var ObjectAssign$2 = Object.assign;
    var ObjectCreate$2 = Object.create;
    var ObjectDefineProperty = Object.defineProperty;
    var ObjectIs = Object.is;
    var ObjectEntries = Object.entries;
    var DAYMILLIS = 864e5;
    var NS_MIN = BigInteger(-86400).multiply(1e17);
    var NS_MAX = BigInteger(86400).multiply(1e17);
    var YEAR_MIN = -271821;
    var YEAR_MAX = 275760;
    var BEFORE_FIRST_DST = BigInteger(-388152).multiply(1e13);
    var ToPositiveInteger = function ToPositiveInteger2(value, property) {
      value = ToInteger(value);
      if (value < 1) {
        if (property !== void 0) {
          throw new RangeError("property '".concat(property, "' cannot be a a number less than one"));
        }
        throw new RangeError("Cannot convert a number less than one to a positive integer");
      }
      return value;
    };
    var BUILTIN_CASTS = new Map([["year", ToInteger], ["month", ToPositiveInteger], ["monthCode", ToString], ["day", ToPositiveInteger], ["hour", ToInteger], ["minute", ToInteger], ["second", ToInteger], ["millisecond", ToInteger], ["microsecond", ToInteger], ["nanosecond", ToInteger], ["years", ToInteger], ["months", ToInteger], ["weeks", ToInteger], ["days", ToInteger], ["hours", ToInteger], ["minutes", ToInteger], ["seconds", ToInteger], ["milliseconds", ToInteger], ["microseconds", ToInteger], ["nanoseconds", ToInteger], ["era", ToString], ["eraYear", ToInteger], ["offset", ToString]]);
    var ES2020 = {
      Call,
      GetMethod: GetMethod$1,
      IsInteger,
      ToInteger,
      ToLength,
      ToNumber,
      ToPrimitive,
      ToString,
      Type
    };
    var ES = ObjectAssign$2({}, ES2020, {
      ToPositiveInteger,
      IsTemporalInstant: function IsTemporalInstant(item) {
        return HasSlot(item, EPOCHNANOSECONDS) && !HasSlot(item, TIME_ZONE, CALENDAR);
      },
      IsTemporalTimeZone: function IsTemporalTimeZone(item) {
        return HasSlot(item, TIMEZONE_ID);
      },
      IsTemporalCalendar: function IsTemporalCalendar(item) {
        return HasSlot(item, CALENDAR_ID);
      },
      IsTemporalDuration: function IsTemporalDuration(item) {
        return HasSlot(item, YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS, MILLISECONDS, MICROSECONDS, NANOSECONDS);
      },
      IsTemporalDate: function IsTemporalDate(item) {
        return HasSlot(item, DATE_BRAND);
      },
      IsTemporalTime: function IsTemporalTime(item) {
        return HasSlot(item, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND) && !HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY);
      },
      IsTemporalDateTime: function IsTemporalDateTime(item) {
        return HasSlot(item, ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND);
      },
      IsTemporalYearMonth: function IsTemporalYearMonth(item) {
        return HasSlot(item, YEAR_MONTH_BRAND);
      },
      IsTemporalMonthDay: function IsTemporalMonthDay(item) {
        return HasSlot(item, MONTH_DAY_BRAND);
      },
      IsTemporalZonedDateTime: function IsTemporalZonedDateTime(item) {
        return HasSlot(item, EPOCHNANOSECONDS, TIME_ZONE, CALENDAR);
      },
      TemporalTimeZoneFromString: function TemporalTimeZoneFromString(stringIdent) {
        var _ES$ParseTemporalTime = ES.ParseTemporalTimeZoneString(stringIdent), ianaName = _ES$ParseTemporalTime.ianaName, offset2 = _ES$ParseTemporalTime.offset, z = _ES$ParseTemporalTime.z;
        if (z)
          ianaName = "UTC";
        var result = ES.GetCanonicalTimeZoneIdentifier(ianaName || offset2);
        if (offset2 && ianaName && ianaName !== offset2) {
          var ns = ES.ParseTemporalInstant(stringIdent);
          var offsetNs = ES.GetIANATimeZoneOffsetNanoseconds(ns, result);
          if (ES.FormatTimeZoneOffsetString(offsetNs) !== offset2) {
            throw new RangeError("invalid offset ".concat(offset2, "[").concat(ianaName, "]"));
          }
        }
        return result;
      },
      FormatCalendarAnnotation: function FormatCalendarAnnotation(id, showCalendar) {
        if (showCalendar === "never")
          return "";
        if (showCalendar === "auto" && id === "iso8601")
          return "";
        return "[u-ca=".concat(id, "]");
      },
      ParseISODateTime: function ParseISODateTime(isoString, _ref) {
        var zoneRequired = _ref.zoneRequired;
        var regex = zoneRequired ? instant$1 : datetime;
        var match = regex.exec(isoString);
        if (!match)
          throw new RangeError("invalid ISO 8601 string: ".concat(isoString));
        var yearString = match[1];
        if (yearString[0] === "\u2212")
          yearString = "-".concat(yearString.slice(1));
        var year = ES.ToInteger(yearString);
        var month = ES.ToInteger(match[2] || match[4]);
        var day = ES.ToInteger(match[3] || match[5]);
        var hour = ES.ToInteger(match[6]);
        var minute = ES.ToInteger(match[7] || match[10]);
        var second = ES.ToInteger(match[8] || match[11]);
        if (second === 60)
          second = 59;
        var fraction2 = (match[9] || match[12]) + "000000000";
        var millisecond = ES.ToInteger(fraction2.slice(0, 3));
        var microsecond = ES.ToInteger(fraction2.slice(3, 6));
        var nanosecond = ES.ToInteger(fraction2.slice(6, 9));
        var offset2, z;
        if (match[13]) {
          offset2 = "+00:00";
          z = "Z";
        } else if (match[14] && match[15]) {
          var offsetSign = match[14] === "-" || match[14] === "\u2212" ? "-" : "+";
          var offsetHours = match[15] || "00";
          var offsetMinutes = match[16] || "00";
          var offsetSeconds = match[17] || "00";
          var offsetFraction = match[18] || "0";
          offset2 = "".concat(offsetSign).concat(offsetHours, ":").concat(offsetMinutes);
          if (+offsetFraction) {
            while (offsetFraction.endsWith("0")) {
              offsetFraction = offsetFraction.slice(0, -1);
            }
            offset2 += ":".concat(offsetSeconds, ".").concat(offsetFraction);
          } else if (+offsetSeconds) {
            offset2 += ":".concat(offsetSeconds);
          }
          if (offset2 === "-00:00")
            offset2 = "+00:00";
        }
        var ianaName = match[19];
        if (ianaName) {
          try {
            ianaName = ES.GetCanonicalTimeZoneIdentifier(ianaName).toString();
          } catch (_unused) {
          }
        }
        var calendar2 = match[20];
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond,
          ianaName,
          offset: offset2,
          z,
          calendar: calendar2
        };
      },
      ParseTemporalInstantString: function ParseTemporalInstantString(isoString) {
        return ES.ParseISODateTime(isoString, {
          zoneRequired: true
        });
      },
      ParseTemporalZonedDateTimeString: function ParseTemporalZonedDateTimeString(isoString) {
        return ES.ParseISODateTime(isoString, {
          zoneRequired: true
        });
      },
      ParseTemporalDateTimeString: function ParseTemporalDateTimeString(isoString) {
        return ES.ParseISODateTime(isoString, {
          zoneRequired: false
        });
      },
      ParseTemporalDateString: function ParseTemporalDateString(isoString) {
        return ES.ParseISODateTime(isoString, {
          zoneRequired: false
        });
      },
      ParseTemporalTimeString: function ParseTemporalTimeString(isoString) {
        var match = time.exec(isoString);
        var hour, minute, second, millisecond, microsecond, nanosecond, calendar2;
        if (match) {
          hour = ES.ToInteger(match[1]);
          minute = ES.ToInteger(match[2] || match[5]);
          second = ES.ToInteger(match[3] || match[6]);
          if (second === 60)
            second = 59;
          var fraction2 = (match[4] || match[7]) + "000000000";
          millisecond = ES.ToInteger(fraction2.slice(0, 3));
          microsecond = ES.ToInteger(fraction2.slice(3, 6));
          nanosecond = ES.ToInteger(fraction2.slice(6, 9));
          calendar2 = match[15];
        } else {
          var _ES$ParseISODateTime = ES.ParseISODateTime(isoString, {
            zoneRequired: false
          });
          hour = _ES$ParseISODateTime.hour;
          minute = _ES$ParseISODateTime.minute;
          second = _ES$ParseISODateTime.second;
          millisecond = _ES$ParseISODateTime.millisecond;
          microsecond = _ES$ParseISODateTime.microsecond;
          nanosecond = _ES$ParseISODateTime.nanosecond;
          calendar2 = _ES$ParseISODateTime.calendar;
        }
        return {
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond,
          calendar: calendar2
        };
      },
      ParseTemporalYearMonthString: function ParseTemporalYearMonthString(isoString) {
        var match = yearmonth.exec(isoString);
        var year, month, calendar2, referenceISODay;
        if (match) {
          var yearString = match[1];
          if (yearString[0] === "\u2212")
            yearString = "-".concat(yearString.slice(1));
          year = ES.ToInteger(yearString);
          month = ES.ToInteger(match[2]);
          calendar2 = match[3];
        } else {
          var _ES$ParseISODateTime2 = ES.ParseISODateTime(isoString, {
            zoneRequired: false
          });
          year = _ES$ParseISODateTime2.year;
          month = _ES$ParseISODateTime2.month;
          calendar2 = _ES$ParseISODateTime2.calendar;
          referenceISODay = _ES$ParseISODateTime2.day;
        }
        return {
          year,
          month,
          calendar: calendar2,
          referenceISODay
        };
      },
      ParseTemporalMonthDayString: function ParseTemporalMonthDayString(isoString) {
        var match = monthday.exec(isoString);
        var month, day, calendar2, referenceISOYear;
        if (match) {
          month = ES.ToInteger(match[1]);
          day = ES.ToInteger(match[2]);
        } else {
          var _ES$ParseISODateTime3 = ES.ParseISODateTime(isoString, {
            zoneRequired: false
          });
          month = _ES$ParseISODateTime3.month;
          day = _ES$ParseISODateTime3.day;
          calendar2 = _ES$ParseISODateTime3.calendar;
          referenceISOYear = _ES$ParseISODateTime3.year;
        }
        return {
          month,
          day,
          calendar: calendar2,
          referenceISOYear
        };
      },
      ParseTemporalTimeZoneString: function ParseTemporalTimeZoneString(stringIdent) {
        try {
          var canonicalIdent = ES.GetCanonicalTimeZoneIdentifier(stringIdent);
          if (canonicalIdent) {
            canonicalIdent = canonicalIdent.toString();
            if (ES.ParseOffsetString(canonicalIdent) !== null)
              return {
                offset: canonicalIdent
              };
            return {
              ianaName: canonicalIdent
            };
          }
        } catch (_unused2) {
        }
        try {
          return ES.ParseISODateTime(stringIdent, {
            zoneRequired: true
          });
        } catch (_unused3) {
          throw new RangeError("Invalid time zone: ".concat(stringIdent));
        }
      },
      ParseTemporalDurationString: function ParseTemporalDurationString(isoString) {
        var match = duration.exec(isoString);
        if (!match)
          throw new RangeError("invalid duration: ".concat(isoString));
        if (match.slice(2).every(function(element) {
          return element === void 0;
        })) {
          throw new RangeError("invalid duration: ".concat(isoString));
        }
        var sign2 = match[1] === "-" || match[1] === "\u2212" ? -1 : 1;
        var years = ES.ToInteger(match[2]) * sign2;
        var months = ES.ToInteger(match[3]) * sign2;
        var weeks = ES.ToInteger(match[4]) * sign2;
        var days = ES.ToInteger(match[5]) * sign2;
        var hours = ES.ToInteger(match[6]) * sign2;
        var fHours = match[7];
        var minutes = ES.ToInteger(match[8]) * sign2;
        var fMinutes = match[9];
        var seconds = ES.ToInteger(match[10]) * sign2;
        var fSeconds = match[11] + "000000000";
        var milliseconds = ES.ToInteger(fSeconds.slice(0, 3)) * sign2;
        var microseconds = ES.ToInteger(fSeconds.slice(3, 6)) * sign2;
        var nanoseconds = ES.ToInteger(fSeconds.slice(6, 9)) * sign2;
        fHours = fHours ? sign2 * ES.ToInteger(fHours) / Math.pow(10, fHours.length) : 0;
        fMinutes = fMinutes ? sign2 * ES.ToInteger(fMinutes) / Math.pow(10, fMinutes.length) : 0;
        var _ES$DurationHandleFra = ES.DurationHandleFractions(fHours, minutes, fMinutes, seconds, 0, milliseconds, 0, microseconds, 0, nanoseconds, 0);
        minutes = _ES$DurationHandleFra.minutes;
        seconds = _ES$DurationHandleFra.seconds;
        milliseconds = _ES$DurationHandleFra.milliseconds;
        microseconds = _ES$DurationHandleFra.microseconds;
        nanoseconds = _ES$DurationHandleFra.nanoseconds;
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      ParseTemporalInstant: function ParseTemporalInstant(isoString) {
        var _ES$ParseTemporalInst = ES.ParseTemporalInstantString(isoString), year = _ES$ParseTemporalInst.year, month = _ES$ParseTemporalInst.month, day = _ES$ParseTemporalInst.day, hour = _ES$ParseTemporalInst.hour, minute = _ES$ParseTemporalInst.minute, second = _ES$ParseTemporalInst.second, millisecond = _ES$ParseTemporalInst.millisecond, microsecond = _ES$ParseTemporalInst.microsecond, nanosecond = _ES$ParseTemporalInst.nanosecond, offset2 = _ES$ParseTemporalInst.offset;
        var epochNs = ES.GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (epochNs === null)
          throw new RangeError("DateTime outside of supported range");
        if (!offset2)
          throw new RangeError("Temporal.Instant requires a time zone offset");
        var offsetNs = ES.ParseOffsetString(offset2);
        return epochNs.subtract(offsetNs);
      },
      RegulateISODateTime: function RegulateISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, overflow) {
        switch (overflow) {
          case "reject":
            ES.RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
            break;
          case "constrain":
            var _ES$ConstrainISODateT = ES.ConstrainISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
            year = _ES$ConstrainISODateT.year;
            month = _ES$ConstrainISODateT.month;
            day = _ES$ConstrainISODateT.day;
            hour = _ES$ConstrainISODateT.hour;
            minute = _ES$ConstrainISODateT.minute;
            second = _ES$ConstrainISODateT.second;
            millisecond = _ES$ConstrainISODateT.millisecond;
            microsecond = _ES$ConstrainISODateT.microsecond;
            nanosecond = _ES$ConstrainISODateT.nanosecond;
            break;
        }
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      RegulateISODate: function RegulateISODate(year, month, day, overflow) {
        switch (overflow) {
          case "reject":
            ES.RejectISODate(year, month, day);
            break;
          case "constrain":
            var _ES$ConstrainISODate = ES.ConstrainISODate(year, month, day);
            year = _ES$ConstrainISODate.year;
            month = _ES$ConstrainISODate.month;
            day = _ES$ConstrainISODate.day;
            break;
        }
        return {
          year,
          month,
          day
        };
      },
      RegulateTime: function RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow) {
        switch (overflow) {
          case "reject":
            ES.RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
            break;
          case "constrain":
            var _ES$ConstrainTime = ES.ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);
            hour = _ES$ConstrainTime.hour;
            minute = _ES$ConstrainTime.minute;
            second = _ES$ConstrainTime.second;
            millisecond = _ES$ConstrainTime.millisecond;
            microsecond = _ES$ConstrainTime.microsecond;
            nanosecond = _ES$ConstrainTime.nanosecond;
            break;
        }
        return {
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      RegulateISOYearMonth: function RegulateISOYearMonth(year, month, overflow) {
        var referenceISODay = 1;
        switch (overflow) {
          case "reject":
            ES.RejectISODate(year, month, referenceISODay);
            break;
          case "constrain":
            var _ES$ConstrainISODate2 = ES.ConstrainISODate(year, month);
            year = _ES$ConstrainISODate2.year;
            month = _ES$ConstrainISODate2.month;
            break;
        }
        return {
          year,
          month
        };
      },
      DurationHandleFractions: function DurationHandleFractions(fHours, minutes, fMinutes, seconds, fSeconds, milliseconds, fMilliseconds, microseconds, fMicroseconds, nanoseconds, fNanoseconds) {
        if (fHours !== 0) {
          [minutes, fMinutes, seconds, fSeconds, milliseconds, fMilliseconds, microseconds, fMicroseconds, nanoseconds, fNanoseconds].forEach(function(val) {
            if (val !== 0)
              throw new RangeError("only the smallest unit can be fractional");
          });
          var mins = fHours * 60;
          minutes = MathTrunc(mins);
          fMinutes = mins % 1;
        }
        if (fMinutes !== 0) {
          [seconds, fSeconds, milliseconds, fMilliseconds, microseconds, fMicroseconds, nanoseconds, fNanoseconds].forEach(function(val) {
            if (val !== 0)
              throw new RangeError("only the smallest unit can be fractional");
          });
          var secs = fMinutes * 60;
          seconds = MathTrunc(secs);
          fSeconds = secs % 1;
        }
        if (fSeconds !== 0) {
          [milliseconds, fMilliseconds, microseconds, fMicroseconds, nanoseconds, fNanoseconds].forEach(function(val) {
            if (val !== 0)
              throw new RangeError("only the smallest unit can be fractional");
          });
          var mils = fSeconds * 1e3;
          milliseconds = MathTrunc(mils);
          fMilliseconds = mils % 1;
        }
        if (fMilliseconds !== 0) {
          [microseconds, fMicroseconds, nanoseconds, fNanoseconds].forEach(function(val) {
            if (val !== 0)
              throw new RangeError("only the smallest unit can be fractional");
          });
          var mics = fMilliseconds * 1e3;
          microseconds = MathTrunc(mics);
          fMicroseconds = mics % 1;
        }
        if (fMicroseconds !== 0) {
          [nanoseconds, fNanoseconds].forEach(function(val) {
            if (val !== 0)
              throw new RangeError("only the smallest unit can be fractional");
          });
          var nans = fMicroseconds * 1e3;
          nanoseconds = MathTrunc(nans);
        }
        return {
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      ToTemporalDurationRecord: function ToTemporalDurationRecord(item) {
        if (ES.IsTemporalDuration(item)) {
          return {
            years: GetSlot(item, YEARS),
            months: GetSlot(item, MONTHS),
            weeks: GetSlot(item, WEEKS),
            days: GetSlot(item, DAYS),
            hours: GetSlot(item, HOURS),
            minutes: GetSlot(item, MINUTES),
            seconds: GetSlot(item, SECONDS),
            milliseconds: GetSlot(item, MILLISECONDS),
            microseconds: GetSlot(item, MICROSECONDS),
            nanoseconds: GetSlot(item, NANOSECONDS)
          };
        }
        var props = ES.ToPartialRecord(item, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"], function(v) {
          v = ES.ToNumber(v);
          if (MathFloor(v) !== v) {
            throw new RangeError("unsupported fractional value ".concat(v));
          }
          return v;
        });
        if (!props)
          throw new TypeError("invalid duration-like");
        var _props$years = props.years, years = _props$years === void 0 ? 0 : _props$years, _props$months = props.months, months = _props$months === void 0 ? 0 : _props$months, _props$weeks = props.weeks, weeks = _props$weeks === void 0 ? 0 : _props$weeks, _props$days = props.days, days = _props$days === void 0 ? 0 : _props$days, _props$hours = props.hours, hours = _props$hours === void 0 ? 0 : _props$hours, _props$minutes = props.minutes, minutes = _props$minutes === void 0 ? 0 : _props$minutes, _props$seconds = props.seconds, seconds = _props$seconds === void 0 ? 0 : _props$seconds, _props$milliseconds = props.milliseconds, milliseconds = _props$milliseconds === void 0 ? 0 : _props$milliseconds, _props$microseconds = props.microseconds, microseconds = _props$microseconds === void 0 ? 0 : _props$microseconds, _props$nanoseconds = props.nanoseconds, nanoseconds = _props$nanoseconds === void 0 ? 0 : _props$nanoseconds;
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      ToLimitedTemporalDuration: function ToLimitedTemporalDuration(item) {
        var disallowedProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var record;
        if (ES.Type(item) === "Object") {
          record = ES.ToTemporalDurationRecord(item);
        } else {
          var str = ES.ToString(item);
          record = ES.ParseTemporalDurationString(str);
        }
        var _record = record, years = _record.years, months = _record.months, weeks = _record.weeks, days = _record.days, hours = _record.hours, minutes = _record.minutes, seconds = _record.seconds, milliseconds = _record.milliseconds, microseconds = _record.microseconds, nanoseconds = _record.nanoseconds;
        ES.RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var _iterator = _createForOfIteratorHelper(disallowedProperties), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var property = _step.value;
            if (record[property] !== 0) {
              throw new RangeError("Duration field ".concat(property, " not supported by Temporal.Instant. Try Temporal.ZonedDateTime instead."));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return record;
      },
      ToTemporalDurationOverflow: function ToTemporalDurationOverflow(options) {
        return ES.GetOption(options, "overflow", ["constrain", "balance"], "constrain");
      },
      ToTemporalOverflow: function ToTemporalOverflow(options) {
        return ES.GetOption(options, "overflow", ["constrain", "reject"], "constrain");
      },
      ToTemporalDisambiguation: function ToTemporalDisambiguation(options) {
        return ES.GetOption(options, "disambiguation", ["compatible", "earlier", "later", "reject"], "compatible");
      },
      ToTemporalRoundingMode: function ToTemporalRoundingMode(options, fallback) {
        return ES.GetOption(options, "roundingMode", ["ceil", "floor", "trunc", "halfExpand"], fallback);
      },
      NegateTemporalRoundingMode: function NegateTemporalRoundingMode(roundingMode) {
        switch (roundingMode) {
          case "ceil":
            return "floor";
          case "floor":
            return "ceil";
          default:
            return roundingMode;
        }
      },
      ToTemporalOffset: function ToTemporalOffset(options, fallback) {
        return ES.GetOption(options, "offset", ["prefer", "use", "ignore", "reject"], fallback);
      },
      ToShowCalendarOption: function ToShowCalendarOption(options) {
        return ES.GetOption(options, "calendarName", ["auto", "always", "never"], "auto");
      },
      ToShowTimeZoneNameOption: function ToShowTimeZoneNameOption(options) {
        return ES.GetOption(options, "timeZoneName", ["auto", "never"], "auto");
      },
      ToShowOffsetOption: function ToShowOffsetOption(options) {
        return ES.GetOption(options, "offset", ["auto", "never"], "auto");
      },
      ToTemporalRoundingIncrement: function ToTemporalRoundingIncrement(options, dividend, inclusive) {
        var maximum = Infinity;
        if (dividend !== void 0)
          maximum = dividend;
        if (!inclusive && dividend !== void 0)
          maximum = dividend > 1 ? dividend - 1 : 1;
        var increment = ES.GetNumberOption(options, "roundingIncrement", 1, maximum, 1);
        if (dividend !== void 0 && dividend % increment !== 0) {
          throw new RangeError("Rounding increment must divide evenly into ".concat(dividend));
        }
        return increment;
      },
      ToTemporalDateTimeRoundingIncrement: function ToTemporalDateTimeRoundingIncrement(options, smallestUnit) {
        var maximumIncrements = {
          years: void 0,
          months: void 0,
          weeks: void 0,
          days: void 0,
          hours: 24,
          minutes: 60,
          seconds: 60,
          milliseconds: 1e3,
          microseconds: 1e3,
          nanoseconds: 1e3
        };
        return ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
      },
      ToSecondsStringPrecision: function ToSecondsStringPrecision(options) {
        var singular = new Map([["minutes", "minute"], ["seconds", "second"], ["milliseconds", "millisecond"], ["microseconds", "microsecond"], ["nanoseconds", "nanosecond"]]);
        var allowed = new Set(["minute", "second", "millisecond", "microsecond", "nanosecond"]);
        var smallestUnit = ES.GetOption(options, "smallestUnit", [].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), void 0);
        if (singular.has(smallestUnit))
          smallestUnit = singular.get(smallestUnit);
        switch (smallestUnit) {
          case "minute":
            return {
              precision: "minute",
              unit: "minute",
              increment: 1
            };
          case "second":
            return {
              precision: 0,
              unit: "second",
              increment: 1
            };
          case "millisecond":
            return {
              precision: 3,
              unit: "millisecond",
              increment: 1
            };
          case "microsecond":
            return {
              precision: 6,
              unit: "microsecond",
              increment: 1
            };
          case "nanosecond":
            return {
              precision: 9,
              unit: "nanosecond",
              increment: 1
            };
        }
        var digits = options.fractionalSecondDigits;
        if (digits === void 0 || digits === "auto")
          return {
            precision: "auto",
            unit: "nanosecond",
            increment: 1
          };
        digits = ES.ToNumber(digits);
        if (NumberIsNaN(digits) || digits < 0 || digits > 9) {
          throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digits));
        }
        var precision = MathFloor(digits);
        switch (precision) {
          case 0:
            return {
              precision,
              unit: "second",
              increment: 1
            };
          case 1:
          case 2:
          case 3:
            return {
              precision,
              unit: "millisecond",
              increment: Math.pow(10, 3 - precision)
            };
          case 4:
          case 5:
          case 6:
            return {
              precision,
              unit: "microsecond",
              increment: Math.pow(10, 6 - precision)
            };
          case 7:
          case 8:
          case 9:
            return {
              precision,
              unit: "nanosecond",
              increment: Math.pow(10, 9 - precision)
            };
        }
      },
      ToDurationSecondsStringPrecision: function ToDurationSecondsStringPrecision(options) {
        var plural = new Map([["second", "seconds"], ["millisecond", "milliseconds"], ["microsecond", "microseconds"], ["nanosecond", "nanoseconds"]]);
        var allowed = new Set(["seconds", "milliseconds", "microseconds", "nanoseconds"]);
        var smallestUnit = ES.GetOption(options, "smallestUnit", [].concat(_toConsumableArray(allowed), _toConsumableArray(plural.keys())), void 0);
        if (plural.has(smallestUnit))
          smallestUnit = plural.get(smallestUnit);
        switch (smallestUnit) {
          case "seconds":
            return {
              precision: 0,
              unit: "seconds",
              increment: 1
            };
          case "milliseconds":
            return {
              precision: 3,
              unit: "milliseconds",
              increment: 1
            };
          case "microseconds":
            return {
              precision: 6,
              unit: "microseconds",
              increment: 1
            };
          case "nanoseconds":
            return {
              precision: 9,
              unit: "nanoseconds",
              increment: 1
            };
        }
        var digits = options.fractionalSecondDigits;
        if (digits === void 0 || digits === "auto")
          return {
            precision: "auto",
            unit: "nanoseconds",
            increment: 1
          };
        digits = ES.ToNumber(digits);
        if (NumberIsNaN(digits) || digits < 0 || digits > 9) {
          throw new RangeError("fractionalSecondDigits must be 'auto' or 0 through 9, not ".concat(digits));
        }
        var precision = MathFloor(digits);
        switch (precision) {
          case 0:
            return {
              precision,
              unit: "seconds",
              increment: 1
            };
          case 1:
          case 2:
          case 3:
            return {
              precision,
              unit: "milliseconds",
              increment: Math.pow(10, 3 - precision)
            };
          case 4:
          case 5:
          case 6:
            return {
              precision,
              unit: "microseconds",
              increment: Math.pow(10, 6 - precision)
            };
          case 7:
          case 8:
          case 9:
            return {
              precision,
              unit: "nanoseconds",
              increment: Math.pow(10, 9 - precision)
            };
        }
      },
      ToLargestTemporalUnit: function ToLargestTemporalUnit(options, fallback) {
        var disallowedStrings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        var plural = new Map([["year", "years"], ["month", "months"], ["day", "days"], ["hour", "hours"], ["minute", "minutes"], ["second", "seconds"], ["millisecond", "milliseconds"], ["microsecond", "microseconds"], ["nanosecond", "nanoseconds"]].filter(function(_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2), pl = _ref3[1];
          return !disallowedStrings.includes(pl);
        }));
        var allowed = new Set(["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]);
        var _iterator2 = _createForOfIteratorHelper(disallowedStrings), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var s = _step2.value;
            allowed.delete(s);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var retval = ES.GetOption(options, "largestUnit", ["auto"].concat(_toConsumableArray(allowed), _toConsumableArray(plural.keys())), "auto");
        if (retval === "auto")
          return fallback;
        if (plural.has(retval))
          return plural.get(retval);
        return retval;
      },
      ToLargestTemporalDurationUnit: function ToLargestTemporalDurationUnit(options) {
        var plural = new Map([["year", "years"], ["month", "months"], ["day", "days"], ["hour", "hours"], ["minute", "minutes"], ["second", "seconds"], ["millisecond", "milliseconds"], ["microsecond", "microseconds"], ["nanosecond", "nanoseconds"]]);
        var retval = ES.GetOption(options, "largestUnit", ["auto"].concat(_toConsumableArray(plural.keys()), _toConsumableArray(plural.values()), ["weeks"]));
        if (plural.has(retval))
          return plural.get(retval);
        return retval;
      },
      ToSmallestTemporalUnit: function ToSmallestTemporalUnit(options) {
        var disallowedStrings = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var singular = new Map([["days", "day"], ["hours", "hour"], ["minutes", "minute"], ["seconds", "second"], ["milliseconds", "millisecond"], ["microseconds", "microsecond"], ["nanoseconds", "nanosecond"]].filter(function(_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2), sing = _ref5[1];
          return !disallowedStrings.includes(sing);
        }));
        var allowed = new Set(["day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"]);
        var _iterator3 = _createForOfIteratorHelper(disallowedStrings), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var s = _step3.value;
            allowed.delete(s);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var value = ES.GetOption(options, "smallestUnit", [].concat(_toConsumableArray(allowed), _toConsumableArray(singular.keys())), void 0);
        if (value === void 0)
          throw new RangeError("smallestUnit option is required");
        if (singular.has(value))
          return singular.get(value);
        return value;
      },
      ToSmallestTemporalDurationUnit: function ToSmallestTemporalDurationUnit(options, fallback) {
        var disallowedStrings = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
        var plural = new Map([["year", "years"], ["month", "months"], ["day", "days"], ["hour", "hours"], ["minute", "minutes"], ["second", "seconds"], ["millisecond", "milliseconds"], ["microsecond", "microseconds"], ["nanosecond", "nanoseconds"]].filter(function(_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2), pl = _ref7[1];
          return !disallowedStrings.includes(pl);
        }));
        var allowed = new Set(["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"]);
        var _iterator4 = _createForOfIteratorHelper(disallowedStrings), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var s = _step4.value;
            allowed.delete(s);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var value = ES.GetOption(options, "smallestUnit", [].concat(_toConsumableArray(allowed), _toConsumableArray(plural.keys())), fallback);
        if (plural.has(value))
          return plural.get(value);
        return value;
      },
      ToTemporalDurationTotalUnit: function ToTemporalDurationTotalUnit(options) {
        var plural = new Map([["year", "years"], ["month", "months"], ["day", "days"], ["hour", "hours"], ["minute", "minutes"], ["second", "seconds"], ["millisecond", "milliseconds"], ["microsecond", "microseconds"], ["nanosecond", "nanoseconds"]]);
        var value = ES.GetOption(options, "unit", [].concat(_toConsumableArray(plural.values()), _toConsumableArray(plural.keys()), ["weeks"]), void 0);
        if (plural.has(value))
          return plural.get(value);
        return value;
      },
      ToRelativeTemporalObject: function ToRelativeTemporalObject(options) {
        var relativeTo = options.relativeTo;
        if (relativeTo === void 0)
          return relativeTo;
        var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2, timeZone2, offset2;
        if (ES.Type(relativeTo) === "Object") {
          if (ES.IsTemporalZonedDateTime(relativeTo) || ES.IsTemporalDateTime(relativeTo))
            return relativeTo;
          if (ES.IsTemporalDate(relativeTo)) {
            return ES.CreateTemporalDateTime(GetSlot(relativeTo, ISO_YEAR), GetSlot(relativeTo, ISO_MONTH), GetSlot(relativeTo, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(relativeTo, CALENDAR));
          }
          calendar2 = ES.GetOptionalTemporalCalendar(relativeTo);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "month", "monthCode", "year"]);
          var fields = ES.ToTemporalDateTimeFields(relativeTo, fieldNames);
          var dateOptions = ObjectCreate$2(null);
          dateOptions.overflow = "constrain";
          var _ES$InterpretTemporal = ES.InterpretTemporalDateTimeFields(calendar2, fields, dateOptions);
          year = _ES$InterpretTemporal.year;
          month = _ES$InterpretTemporal.month;
          day = _ES$InterpretTemporal.day;
          hour = _ES$InterpretTemporal.hour;
          minute = _ES$InterpretTemporal.minute;
          second = _ES$InterpretTemporal.second;
          millisecond = _ES$InterpretTemporal.millisecond;
          microsecond = _ES$InterpretTemporal.microsecond;
          nanosecond = _ES$InterpretTemporal.nanosecond;
          offset2 = relativeTo.offset;
          timeZone2 = relativeTo.timeZone;
        } else {
          var ianaName;
          var _ES$ParseISODateTime4 = ES.ParseISODateTime(ES.ToString(relativeTo), {
            zoneRequired: false
          });
          year = _ES$ParseISODateTime4.year;
          month = _ES$ParseISODateTime4.month;
          day = _ES$ParseISODateTime4.day;
          hour = _ES$ParseISODateTime4.hour;
          minute = _ES$ParseISODateTime4.minute;
          second = _ES$ParseISODateTime4.second;
          millisecond = _ES$ParseISODateTime4.millisecond;
          microsecond = _ES$ParseISODateTime4.microsecond;
          nanosecond = _ES$ParseISODateTime4.nanosecond;
          calendar2 = _ES$ParseISODateTime4.calendar;
          ianaName = _ES$ParseISODateTime4.ianaName;
          offset2 = _ES$ParseISODateTime4.offset;
          if (ianaName)
            timeZone2 = ianaName;
          if (!calendar2)
            calendar2 = ES.GetISO8601Calendar();
          calendar2 = ES.ToTemporalCalendar(calendar2);
        }
        if (timeZone2) {
          timeZone2 = ES.ToTemporalTimeZone(timeZone2);
          var offsetNs = null;
          if (offset2)
            offsetNs = ES.ParseOffsetString(ES.ToString(offset2));
          var epochNanoseconds = ES.InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetNs, timeZone2, "compatible", "reject");
          return ES.CreateTemporalZonedDateTime(epochNanoseconds, timeZone2, calendar2);
        }
        return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
      },
      ValidateTemporalUnitRange: function ValidateTemporalUnitRange(largestUnit, smallestUnit) {
        var validUnits = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
        if (validUnits.indexOf(largestUnit) > validUnits.indexOf(smallestUnit)) {
          throw new RangeError("largestUnit ".concat(largestUnit, " cannot be smaller than smallestUnit ").concat(smallestUnit));
        }
      },
      DefaultTemporalLargestUnit: function DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
        var _iterator5 = _createForOfIteratorHelper(ObjectEntries({
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        })), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var _step5$value = _slicedToArray(_step5.value, 2), prop = _step5$value[0], v = _step5$value[1];
            if (v !== 0)
              return prop;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return "nanoseconds";
      },
      LargerOfTwoTemporalDurationUnits: function LargerOfTwoTemporalDurationUnits(unit1, unit2) {
        var validUnits = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
        if (validUnits.indexOf(unit1) > validUnits.indexOf(unit2))
          return unit2;
        return unit1;
      },
      CastIfDefined: function CastIfDefined(value, cast) {
        if (value !== void 0) {
          return cast(value);
        }
        return value;
      },
      ToPartialRecord: function ToPartialRecord(bag, fields, callerCast) {
        if (ES.Type(bag) !== "Object")
          return false;
        var any;
        var _iterator6 = _createForOfIteratorHelper(fields), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            var property = _step6.value;
            var value = bag[property];
            if (value !== void 0) {
              any = any || {};
              if (callerCast === void 0 && BUILTIN_CASTS.has(property)) {
                any[property] = BUILTIN_CASTS.get(property)(value);
              } else if (callerCast !== void 0) {
                any[property] = callerCast(value);
              } else {
                any[property] = value;
              }
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        return any ? any : false;
      },
      PrepareTemporalFields: function PrepareTemporalFields(bag, fields) {
        if (ES.Type(bag) !== "Object")
          return false;
        var result = {};
        var any = false;
        var _iterator7 = _createForOfIteratorHelper(fields), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            var fieldRecord = _step7.value;
            var _fieldRecord = _slicedToArray(fieldRecord, 2), property = _fieldRecord[0], defaultValue = _fieldRecord[1];
            var value = bag[property];
            if (value === void 0) {
              if (fieldRecord.length === 1) {
                throw new TypeError("required property '".concat(property, "' missing or undefined"));
              }
              value = defaultValue;
            } else {
              any = true;
              if (BUILTIN_CASTS.has(property)) {
                value = BUILTIN_CASTS.get(property)(value);
              }
            }
            result[property] = value;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if (!any) {
          throw new TypeError("no supported properties found");
        }
        if (result["era"] === void 0 !== (result["eraYear"] === void 0)) {
          throw new RangeError("properties 'era' and 'eraYear' must be provided together");
        }
        return result;
      },
      ToTemporalDateFields: function ToTemporalDateFields(bag, fieldNames) {
        var entries = [["day", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]];
        fieldNames.forEach(function(fieldName) {
          if (!entries.some(function(_ref8) {
            var _ref9 = _slicedToArray(_ref8, 1), name = _ref9[0];
            return name === fieldName;
          })) {
            entries.push([fieldName, void 0]);
          }
        });
        return ES.PrepareTemporalFields(bag, entries);
      },
      ToTemporalDateTimeFields: function ToTemporalDateTimeFields(bag, fieldNames) {
        var entries = [["day", void 0], ["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["month", void 0], ["monthCode", void 0], ["nanosecond", 0], ["second", 0], ["year", void 0]];
        fieldNames.forEach(function(fieldName) {
          if (!entries.some(function(_ref10) {
            var _ref11 = _slicedToArray(_ref10, 1), name = _ref11[0];
            return name === fieldName;
          })) {
            entries.push([fieldName, void 0]);
          }
        });
        return ES.PrepareTemporalFields(bag, entries);
      },
      ToTemporalMonthDayFields: function ToTemporalMonthDayFields(bag, fieldNames) {
        var entries = [["day", void 0], ["month", void 0], ["monthCode", void 0], ["year", void 0]];
        fieldNames.forEach(function(fieldName) {
          if (!entries.some(function(_ref12) {
            var _ref13 = _slicedToArray(_ref12, 1), name = _ref13[0];
            return name === fieldName;
          })) {
            entries.push([fieldName, void 0]);
          }
        });
        return ES.PrepareTemporalFields(bag, entries);
      },
      ToTemporalTimeRecord: function ToTemporalTimeRecord(bag) {
        return ES.PrepareTemporalFields(bag, [["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["nanosecond", 0], ["second", 0]]);
      },
      ToTemporalYearMonthFields: function ToTemporalYearMonthFields(bag, fieldNames) {
        var entries = [["month", void 0], ["monthCode", void 0], ["year", void 0]];
        fieldNames.forEach(function(fieldName) {
          if (!entries.some(function(_ref14) {
            var _ref15 = _slicedToArray(_ref14, 1), name = _ref15[0];
            return name === fieldName;
          })) {
            entries.push([fieldName, void 0]);
          }
        });
        return ES.PrepareTemporalFields(bag, entries);
      },
      ToTemporalZonedDateTimeFields: function ToTemporalZonedDateTimeFields(bag, fieldNames) {
        var entries = [["day", void 0], ["hour", 0], ["microsecond", 0], ["millisecond", 0], ["minute", 0], ["month", void 0], ["monthCode", void 0], ["nanosecond", 0], ["second", 0], ["year", void 0], ["offset", void 0], ["timeZone"]];
        fieldNames.forEach(function(fieldName) {
          if (!entries.some(function(_ref16) {
            var _ref17 = _slicedToArray(_ref16, 1), name = _ref17[0];
            return name === fieldName;
          })) {
            entries.push([fieldName, void 0]);
          }
        });
        return ES.PrepareTemporalFields(bag, entries);
      },
      ToTemporalDate: function ToTemporalDate(item) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ObjectCreate$2(null);
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalDate(item))
            return item;
          if (ES.IsTemporalZonedDateTime(item)) {
            item = ES.BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
          }
          if (ES.IsTemporalDateTime(item)) {
            return ES.CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
          }
          var _calendar = ES.GetOptionalTemporalCalendar(item);
          var fieldNames = ES.CalendarFields(_calendar, ["day", "month", "monthCode", "year"]);
          var fields = ES.ToTemporalDateFields(item, fieldNames);
          return ES.DateFromFields(_calendar, fields, options);
        }
        ES.ToTemporalOverflow(options);
        var _ES$ParseTemporalDate = ES.ParseTemporalDateString(ES.ToString(item)), year = _ES$ParseTemporalDate.year, month = _ES$ParseTemporalDate.month, day = _ES$ParseTemporalDate.day, calendar2 = _ES$ParseTemporalDate.calendar;
        var TemporalPlainDate = GetIntrinsic("%Temporal.PlainDate%");
        return new TemporalPlainDate(year, month, day, calendar2);
      },
      InterpretTemporalDateTimeFields: function InterpretTemporalDateTimeFields(calendar2, fields, options) {
        var _ES$ToTemporalTimeRec = ES.ToTemporalTimeRecord(fields), hour = _ES$ToTemporalTimeRec.hour, minute = _ES$ToTemporalTimeRec.minute, second = _ES$ToTemporalTimeRec.second, millisecond = _ES$ToTemporalTimeRec.millisecond, microsecond = _ES$ToTemporalTimeRec.microsecond, nanosecond = _ES$ToTemporalTimeRec.nanosecond;
        var date = ES.DateFromFields(calendar2, fields, options);
        var year = GetSlot(date, ISO_YEAR);
        var month = GetSlot(date, ISO_MONTH);
        var day = GetSlot(date, ISO_DAY);
        var overflow = ES.ToTemporalOverflow(options);
        var _ES$RegulateTime = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
        hour = _ES$RegulateTime.hour;
        minute = _ES$RegulateTime.minute;
        second = _ES$RegulateTime.second;
        millisecond = _ES$RegulateTime.millisecond;
        microsecond = _ES$RegulateTime.microsecond;
        nanosecond = _ES$RegulateTime.nanosecond;
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      ToTemporalDateTime: function ToTemporalDateTime(item) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ObjectCreate$2(null);
        var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2;
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalDateTime(item))
            return item;
          if (ES.IsTemporalZonedDateTime(item)) {
            return ES.BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
          }
          if (ES.IsTemporalDate(item)) {
            return ES.CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(item, CALENDAR));
          }
          calendar2 = ES.GetOptionalTemporalCalendar(item);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
          var fields = ES.ToTemporalDateTimeFields(item, fieldNames);
          var _ES$InterpretTemporal2 = ES.InterpretTemporalDateTimeFields(calendar2, fields, options);
          year = _ES$InterpretTemporal2.year;
          month = _ES$InterpretTemporal2.month;
          day = _ES$InterpretTemporal2.day;
          hour = _ES$InterpretTemporal2.hour;
          minute = _ES$InterpretTemporal2.minute;
          second = _ES$InterpretTemporal2.second;
          millisecond = _ES$InterpretTemporal2.millisecond;
          microsecond = _ES$InterpretTemporal2.microsecond;
          nanosecond = _ES$InterpretTemporal2.nanosecond;
        } else {
          ES.ToTemporalOverflow(options);
          var _ES$ParseTemporalDate2 = ES.ParseTemporalDateTimeString(ES.ToString(item));
          year = _ES$ParseTemporalDate2.year;
          month = _ES$ParseTemporalDate2.month;
          day = _ES$ParseTemporalDate2.day;
          hour = _ES$ParseTemporalDate2.hour;
          minute = _ES$ParseTemporalDate2.minute;
          second = _ES$ParseTemporalDate2.second;
          millisecond = _ES$ParseTemporalDate2.millisecond;
          microsecond = _ES$ParseTemporalDate2.microsecond;
          nanosecond = _ES$ParseTemporalDate2.nanosecond;
          calendar2 = _ES$ParseTemporalDate2.calendar;
          ES.RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          if (calendar2 === void 0)
            calendar2 = ES.GetISO8601Calendar();
          calendar2 = ES.ToTemporalCalendar(calendar2);
        }
        return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
      },
      ToTemporalDuration: function ToTemporalDuration(item) {
        var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalDuration(item))
            return item;
          var _ES$ToTemporalDuratio = ES.ToTemporalDurationRecord(item);
          years = _ES$ToTemporalDuratio.years;
          months = _ES$ToTemporalDuratio.months;
          weeks = _ES$ToTemporalDuratio.weeks;
          days = _ES$ToTemporalDuratio.days;
          hours = _ES$ToTemporalDuratio.hours;
          minutes = _ES$ToTemporalDuratio.minutes;
          seconds = _ES$ToTemporalDuratio.seconds;
          milliseconds = _ES$ToTemporalDuratio.milliseconds;
          microseconds = _ES$ToTemporalDuratio.microseconds;
          nanoseconds = _ES$ToTemporalDuratio.nanoseconds;
        } else {
          var _ES$ParseTemporalDura = ES.ParseTemporalDurationString(ES.ToString(item));
          years = _ES$ParseTemporalDura.years;
          months = _ES$ParseTemporalDura.months;
          weeks = _ES$ParseTemporalDura.weeks;
          days = _ES$ParseTemporalDura.days;
          hours = _ES$ParseTemporalDura.hours;
          minutes = _ES$ParseTemporalDura.minutes;
          seconds = _ES$ParseTemporalDura.seconds;
          milliseconds = _ES$ParseTemporalDura.milliseconds;
          microseconds = _ES$ParseTemporalDura.microseconds;
          nanoseconds = _ES$ParseTemporalDura.nanoseconds;
        }
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        return new TemporalDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
      },
      ToTemporalInstant: function ToTemporalInstant(item) {
        if (ES.IsTemporalInstant(item))
          return item;
        if (ES.IsTemporalZonedDateTime(item)) {
          var _TemporalInstant = GetIntrinsic("%Temporal.Instant%");
          return new _TemporalInstant(GetSlot(item, EPOCHNANOSECONDS));
        }
        var ns = ES.ParseTemporalInstant(ES.ToString(item));
        var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
        return new TemporalInstant(ns);
      },
      ToTemporalMonthDay: function ToTemporalMonthDay(item) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ObjectCreate$2(null);
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalMonthDay(item))
            return item;
          var _calendar2, calendarAbsent;
          if (HasSlot(item, CALENDAR)) {
            _calendar2 = GetSlot(item, CALENDAR);
            calendarAbsent = false;
          } else {
            _calendar2 = item.calendar;
            calendarAbsent = _calendar2 === void 0;
            if (_calendar2 === void 0)
              _calendar2 = ES.GetISO8601Calendar();
            _calendar2 = ES.ToTemporalCalendar(_calendar2);
          }
          var fieldNames = ES.CalendarFields(_calendar2, ["day", "month", "monthCode", "year"]);
          var fields = ES.ToTemporalMonthDayFields(item, fieldNames);
          if (calendarAbsent && fields.month !== void 0 && fields.monthCode === void 0 && fields.year === void 0) {
            fields.year = 1972;
          }
          return ES.MonthDayFromFields(_calendar2, fields, options);
        }
        ES.ToTemporalOverflow(options);
        var _ES$ParseTemporalMont = ES.ParseTemporalMonthDayString(ES.ToString(item)), month = _ES$ParseTemporalMont.month, day = _ES$ParseTemporalMont.day, referenceISOYear = _ES$ParseTemporalMont.referenceISOYear, calendar2 = _ES$ParseTemporalMont.calendar;
        if (calendar2 === void 0)
          calendar2 = ES.GetISO8601Calendar();
        calendar2 = ES.ToTemporalCalendar(calendar2);
        if (referenceISOYear === void 0) {
          ES.RejectISODate(1972, month, day);
          return ES.CreateTemporalMonthDay(month, day, calendar2);
        }
        var result = ES.CreateTemporalMonthDay(month, day, calendar2, referenceISOYear);
        var canonicalOptions = ObjectCreate$2(null);
        return ES.MonthDayFromFields(calendar2, result, canonicalOptions);
      },
      ToTemporalTime: function ToTemporalTime(item) {
        var overflow = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "constrain";
        var hour, minute, second, millisecond, microsecond, nanosecond, calendar2;
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalTime(item))
            return item;
          if (ES.IsTemporalZonedDateTime(item)) {
            item = ES.BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(item, TIME_ZONE), GetSlot(item, INSTANT), GetSlot(item, CALENDAR));
          }
          if (ES.IsTemporalDateTime(item)) {
            var _TemporalPlainTime = GetIntrinsic("%Temporal.PlainTime%");
            return new _TemporalPlainTime(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
          }
          calendar2 = ES.GetOptionalTemporalCalendar(item);
          if (ES.ToString(calendar2) !== "iso8601") {
            throw new RangeError("PlainTime can only have iso8601 calendar");
          }
          var _ES$ToTemporalTimeRec2 = ES.ToTemporalTimeRecord(item);
          hour = _ES$ToTemporalTimeRec2.hour;
          minute = _ES$ToTemporalTimeRec2.minute;
          second = _ES$ToTemporalTimeRec2.second;
          millisecond = _ES$ToTemporalTimeRec2.millisecond;
          microsecond = _ES$ToTemporalTimeRec2.microsecond;
          nanosecond = _ES$ToTemporalTimeRec2.nanosecond;
          var _ES$RegulateTime2 = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
          hour = _ES$RegulateTime2.hour;
          minute = _ES$RegulateTime2.minute;
          second = _ES$RegulateTime2.second;
          millisecond = _ES$RegulateTime2.millisecond;
          microsecond = _ES$RegulateTime2.microsecond;
          nanosecond = _ES$RegulateTime2.nanosecond;
        } else {
          var _ES$ParseTemporalTime2 = ES.ParseTemporalTimeString(ES.ToString(item));
          hour = _ES$ParseTemporalTime2.hour;
          minute = _ES$ParseTemporalTime2.minute;
          second = _ES$ParseTemporalTime2.second;
          millisecond = _ES$ParseTemporalTime2.millisecond;
          microsecond = _ES$ParseTemporalTime2.microsecond;
          nanosecond = _ES$ParseTemporalTime2.nanosecond;
          calendar2 = _ES$ParseTemporalTime2.calendar;
          ES.RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
          if (calendar2 !== void 0 && calendar2 !== "iso8601") {
            throw new RangeError("PlainTime can only have iso8601 calendar");
          }
        }
        var TemporalPlainTime = GetIntrinsic("%Temporal.PlainTime%");
        return new TemporalPlainTime(hour, minute, second, millisecond, microsecond, nanosecond);
      },
      ToTemporalYearMonth: function ToTemporalYearMonth(item) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ObjectCreate$2(null);
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalYearMonth(item))
            return item;
          var _calendar3 = ES.GetOptionalTemporalCalendar(item);
          var fieldNames = ES.CalendarFields(_calendar3, ["month", "monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(item, fieldNames);
          return ES.YearMonthFromFields(_calendar3, fields, options);
        }
        ES.ToTemporalOverflow(options);
        var _ES$ParseTemporalYear = ES.ParseTemporalYearMonthString(ES.ToString(item)), year = _ES$ParseTemporalYear.year, month = _ES$ParseTemporalYear.month, referenceISODay = _ES$ParseTemporalYear.referenceISODay, calendar2 = _ES$ParseTemporalYear.calendar;
        if (calendar2 === void 0)
          calendar2 = ES.GetISO8601Calendar();
        calendar2 = ES.ToTemporalCalendar(calendar2);
        if (referenceISODay === void 0) {
          ES.RejectISODate(year, month, 1);
          return ES.CreateTemporalYearMonth(year, month, calendar2);
        }
        var result = ES.CreateTemporalYearMonth(year, month, calendar2, referenceISODay);
        var canonicalOptions = ObjectCreate$2(null);
        return ES.YearMonthFromFields(calendar2, result, canonicalOptions);
      },
      InterpretISODateTimeOffset: function InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetNs, timeZone2, disambiguation, offsetOpt) {
        var DateTime = GetIntrinsic("%Temporal.PlainDateTime%");
        var dt = new DateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (offsetNs === null || offsetOpt === "ignore") {
          var _instant = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, disambiguation);
          return GetSlot(_instant, EPOCHNANOSECONDS);
        }
        if (offsetOpt === "use") {
          var epochNs = ES.GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          if (epochNs === null)
            throw new RangeError("ZonedDateTime outside of supported range");
          return epochNs.minus(offsetNs);
        }
        var possibleInstants = ES.GetPossibleInstantsFor(timeZone2, dt);
        var _iterator8 = _createForOfIteratorHelper(possibleInstants), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            var candidate = _step8.value;
            var candidateOffset = ES.GetOffsetNanosecondsFor(timeZone2, candidate);
            if (candidateOffset === offsetNs)
              return GetSlot(candidate, EPOCHNANOSECONDS);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        if (offsetOpt === "reject") {
          var offsetStr = ES.FormatTimeZoneOffsetString(offsetNs);
          var timeZoneString = ES.IsTemporalTimeZone(timeZone2) ? GetSlot(timeZone2, TIMEZONE_ID) : "time zone";
          throw new RangeError("Offset ".concat(offsetStr, " is invalid for ").concat(dt, " in ").concat(timeZoneString));
        }
        var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, disambiguation);
        return GetSlot(instant2, EPOCHNANOSECONDS);
      },
      ToTemporalZonedDateTime: function ToTemporalZonedDateTime(item) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ObjectCreate$2(null);
        var year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, timeZone2, offset2, calendar2;
        if (ES.Type(item) === "Object") {
          if (ES.IsTemporalZonedDateTime(item))
            return item;
          calendar2 = ES.GetOptionalTemporalCalendar(item);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
          var fields = ES.ToTemporalZonedDateTimeFields(item, fieldNames);
          var _ES$InterpretTemporal3 = ES.InterpretTemporalDateTimeFields(calendar2, fields, options);
          year = _ES$InterpretTemporal3.year;
          month = _ES$InterpretTemporal3.month;
          day = _ES$InterpretTemporal3.day;
          hour = _ES$InterpretTemporal3.hour;
          minute = _ES$InterpretTemporal3.minute;
          second = _ES$InterpretTemporal3.second;
          millisecond = _ES$InterpretTemporal3.millisecond;
          microsecond = _ES$InterpretTemporal3.microsecond;
          nanosecond = _ES$InterpretTemporal3.nanosecond;
          timeZone2 = ES.ToTemporalTimeZone(fields.timeZone);
          offset2 = fields.offset;
          if (offset2 !== void 0)
            offset2 = ES.ToString(offset2);
        } else {
          ES.ToTemporalOverflow(options);
          var ianaName;
          var _ES$ParseTemporalZone = ES.ParseTemporalZonedDateTimeString(ES.ToString(item));
          year = _ES$ParseTemporalZone.year;
          month = _ES$ParseTemporalZone.month;
          day = _ES$ParseTemporalZone.day;
          hour = _ES$ParseTemporalZone.hour;
          minute = _ES$ParseTemporalZone.minute;
          second = _ES$ParseTemporalZone.second;
          millisecond = _ES$ParseTemporalZone.millisecond;
          microsecond = _ES$ParseTemporalZone.microsecond;
          nanosecond = _ES$ParseTemporalZone.nanosecond;
          ianaName = _ES$ParseTemporalZone.ianaName;
          offset2 = _ES$ParseTemporalZone.offset;
          calendar2 = _ES$ParseTemporalZone.calendar;
          if (!ianaName)
            throw new RangeError("time zone ID required in brackets");
          var TemporalTimeZone = GetIntrinsic("%Temporal.TimeZone%");
          timeZone2 = new TemporalTimeZone(ianaName);
          if (!calendar2)
            calendar2 = ES.GetISO8601Calendar();
          calendar2 = ES.ToTemporalCalendar(calendar2);
        }
        var offsetNs = null;
        if (offset2)
          offsetNs = ES.ParseOffsetString(offset2);
        var disambiguation = ES.ToTemporalDisambiguation(options);
        var offsetOpt = ES.ToTemporalOffset(options, "reject");
        var epochNanoseconds = ES.InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetNs, timeZone2, disambiguation, offsetOpt);
        return ES.CreateTemporalZonedDateTime(epochNanoseconds, timeZone2, calendar2);
      },
      CreateTemporalDateSlots: function CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar2) {
        ES.RejectISODate(isoYear, isoMonth, isoDay);
        ES.RejectDateRange(isoYear, isoMonth, isoDay);
        CreateSlots(result);
        SetSlot(result, ISO_YEAR, isoYear);
        SetSlot(result, ISO_MONTH, isoMonth);
        SetSlot(result, ISO_DAY, isoDay);
        SetSlot(result, CALENDAR, calendar2);
        SetSlot(result, DATE_BRAND, true);
        {
          ObjectDefineProperty(result, "_repr_", {
            value: "".concat(result[Symbol.toStringTag], " <").concat(ES.TemporalDateToString(result), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      CreateTemporalDate: function CreateTemporalDate(isoYear, isoMonth, isoDay) {
        var calendar2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ES.GetISO8601Calendar();
        var TemporalPlainDate = GetIntrinsic("%Temporal.PlainDate%");
        var result = ObjectCreate$2(TemporalPlainDate.prototype);
        ES.CreateTemporalDateSlots(result, isoYear, isoMonth, isoDay, calendar2);
        return result;
      },
      CreateTemporalDateTimeSlots: function CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, \u00B5s, ns, calendar2) {
        ES.RejectDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, \u00B5s, ns);
        ES.RejectDateTimeRange(isoYear, isoMonth, isoDay, h, min, s, ms, \u00B5s, ns);
        CreateSlots(result);
        SetSlot(result, ISO_YEAR, isoYear);
        SetSlot(result, ISO_MONTH, isoMonth);
        SetSlot(result, ISO_DAY, isoDay);
        SetSlot(result, ISO_HOUR, h);
        SetSlot(result, ISO_MINUTE, min);
        SetSlot(result, ISO_SECOND, s);
        SetSlot(result, ISO_MILLISECOND, ms);
        SetSlot(result, ISO_MICROSECOND, \u00B5s);
        SetSlot(result, ISO_NANOSECOND, ns);
        SetSlot(result, CALENDAR, calendar2);
        {
          Object.defineProperty(result, "_repr_", {
            value: "".concat(result[Symbol.toStringTag], " <").concat(ES.TemporalDateTimeToString(result, "auto"), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      CreateTemporalDateTime: function CreateTemporalDateTime(isoYear, isoMonth, isoDay, h, min, s, ms, \u00B5s, ns) {
        var calendar2 = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : ES.GetISO8601Calendar();
        var TemporalPlainDateTime = GetIntrinsic("%Temporal.PlainDateTime%");
        var result = ObjectCreate$2(TemporalPlainDateTime.prototype);
        ES.CreateTemporalDateTimeSlots(result, isoYear, isoMonth, isoDay, h, min, s, ms, \u00B5s, ns, calendar2);
        return result;
      },
      CreateTemporalMonthDaySlots: function CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar2, referenceISOYear) {
        ES.RejectISODate(referenceISOYear, isoMonth, isoDay);
        ES.RejectDateRange(referenceISOYear, isoMonth, isoDay);
        CreateSlots(result);
        SetSlot(result, ISO_MONTH, isoMonth);
        SetSlot(result, ISO_DAY, isoDay);
        SetSlot(result, ISO_YEAR, referenceISOYear);
        SetSlot(result, CALENDAR, calendar2);
        SetSlot(result, MONTH_DAY_BRAND, true);
        {
          Object.defineProperty(result, "_repr_", {
            value: "".concat(result[Symbol.toStringTag], " <").concat(ES.TemporalMonthDayToString(result), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      CreateTemporalMonthDay: function CreateTemporalMonthDay(isoMonth, isoDay) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        var referenceISOYear = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1972;
        var TemporalPlainMonthDay = GetIntrinsic("%Temporal.PlainMonthDay%");
        var result = ObjectCreate$2(TemporalPlainMonthDay.prototype);
        ES.CreateTemporalMonthDaySlots(result, isoMonth, isoDay, calendar2, referenceISOYear);
        return result;
      },
      CreateTemporalYearMonthSlots: function CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar2, referenceISODay) {
        ES.RejectISODate(isoYear, isoMonth, referenceISODay);
        ES.RejectYearMonthRange(isoYear, isoMonth);
        CreateSlots(result);
        SetSlot(result, ISO_YEAR, isoYear);
        SetSlot(result, ISO_MONTH, isoMonth);
        SetSlot(result, ISO_DAY, referenceISODay);
        SetSlot(result, CALENDAR, calendar2);
        SetSlot(result, YEAR_MONTH_BRAND, true);
        {
          Object.defineProperty(result, "_repr_", {
            value: "".concat(result[Symbol.toStringTag], " <").concat(ES.TemporalYearMonthToString(result), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      CreateTemporalYearMonth: function CreateTemporalYearMonth(isoYear, isoMonth) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        var referenceISODay = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        var TemporalPlainYearMonth = GetIntrinsic("%Temporal.PlainYearMonth%");
        var result = ObjectCreate$2(TemporalPlainYearMonth.prototype);
        ES.CreateTemporalYearMonthSlots(result, isoYear, isoMonth, calendar2, referenceISODay);
        return result;
      },
      CreateTemporalZonedDateTimeSlots: function CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone2, calendar2) {
        ES.RejectInstantRange(epochNanoseconds);
        CreateSlots(result);
        SetSlot(result, EPOCHNANOSECONDS, epochNanoseconds);
        SetSlot(result, TIME_ZONE, timeZone2);
        SetSlot(result, CALENDAR, calendar2);
        var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
        var instant2 = new TemporalInstant(GetSlot(result, EPOCHNANOSECONDS));
        SetSlot(result, INSTANT, instant2);
        {
          Object.defineProperty(result, "_repr_", {
            value: "".concat(result[Symbol.toStringTag], " <").concat(ES.TemporalZonedDateTimeToString(result, "auto"), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      },
      CreateTemporalZonedDateTime: function CreateTemporalZonedDateTime(epochNanoseconds, timeZone2) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        var TemporalZonedDateTime = GetIntrinsic("%Temporal.ZonedDateTime%");
        var result = ObjectCreate$2(TemporalZonedDateTime.prototype);
        ES.CreateTemporalZonedDateTimeSlots(result, epochNanoseconds, timeZone2, calendar2);
        return result;
      },
      GetISO8601Calendar: function GetISO8601Calendar() {
        var TemporalCalendar = GetIntrinsic("%Temporal.Calendar%");
        return new TemporalCalendar("iso8601");
      },
      CalendarFields: function CalendarFields(calendar2, fieldNames) {
        var fields = ES.GetMethod(calendar2, "fields");
        if (fields !== void 0)
          fieldNames = ES.Call(fields, calendar2, [fieldNames]);
        var result = [];
        var _iterator9 = _createForOfIteratorHelper(fieldNames), _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
            var name = _step9.value;
            if (ES.Type(name) !== "String")
              throw new TypeError("bad return from calendar.fields()");
            ArrayPrototypePush$1.call(result, name);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return result;
      },
      CalendarMergeFields: function CalendarMergeFields(calendar2, fields, additionalFields) {
        var mergeFields = ES.GetMethod(calendar2, "mergeFields");
        if (mergeFields === void 0)
          return _objectSpread2(_objectSpread2({}, fields), additionalFields);
        return ES.Call(mergeFields, calendar2, [fields, additionalFields]);
      },
      CalendarDateAdd: function CalendarDateAdd(calendar2, date, duration2, options, dateAdd) {
        if (dateAdd === void 0) {
          dateAdd = ES.GetMethod(calendar2, "dateAdd");
        }
        var result = ES.Call(dateAdd, calendar2, [date, duration2, options]);
        if (!ES.IsTemporalDate(result))
          throw new TypeError("invalid result");
        return result;
      },
      CalendarDateUntil: function CalendarDateUntil(calendar2, date, otherDate, options, dateUntil) {
        if (dateUntil === void 0) {
          dateUntil = ES.GetMethod(calendar2, "dateUntil");
        }
        var result = ES.Call(dateUntil, calendar2, [date, otherDate, options]);
        if (!ES.IsTemporalDuration(result))
          throw new TypeError("invalid result");
        return result;
      },
      CalendarYear: function CalendarYear(calendar2, dateLike) {
        var year = ES.GetMethod(calendar2, "year");
        var result = ES.Call(year, calendar2, [dateLike]);
        if (result === void 0) {
          throw new RangeError("calendar year result must be an integer");
        }
        return ES.ToInteger(result);
      },
      CalendarMonth: function CalendarMonth(calendar2, dateLike) {
        var month = ES.GetMethod(calendar2, "month");
        var result = ES.Call(month, calendar2, [dateLike]);
        if (result === void 0) {
          throw new RangeError("calendar month result must be a positive integer");
        }
        return ES.ToPositiveInteger(result);
      },
      CalendarMonthCode: function CalendarMonthCode(calendar2, dateLike) {
        var monthCode = ES.GetMethod(calendar2, "monthCode");
        var result = ES.Call(monthCode, calendar2, [dateLike]);
        if (result === void 0) {
          throw new RangeError("calendar monthCode result must be a string");
        }
        return ES.ToString(result);
      },
      CalendarDay: function CalendarDay(calendar2, dateLike) {
        var day = ES.GetMethod(calendar2, "day");
        var result = ES.Call(day, calendar2, [dateLike]);
        if (result === void 0) {
          throw new RangeError("calendar day result must be a positive integer");
        }
        return ES.ToPositiveInteger(result);
      },
      CalendarEra: function CalendarEra(calendar2, dateLike) {
        var era = ES.GetMethod(calendar2, "era");
        var result = ES.Call(era, calendar2, [dateLike]);
        if (result !== void 0) {
          result = ES.ToString(result);
        }
        return result;
      },
      CalendarEraYear: function CalendarEraYear(calendar2, dateLike) {
        var eraYear = ES.GetMethod(calendar2, "eraYear");
        var result = ES.Call(eraYear, calendar2, [dateLike]);
        if (result !== void 0) {
          result = ES.ToInteger(result);
        }
        return result;
      },
      CalendarDayOfWeek: function CalendarDayOfWeek(calendar2, dateLike) {
        var dayOfWeek = ES.GetMethod(calendar2, "dayOfWeek");
        return ES.Call(dayOfWeek, calendar2, [dateLike]);
      },
      CalendarDayOfYear: function CalendarDayOfYear(calendar2, dateLike) {
        var dayOfYear = ES.GetMethod(calendar2, "dayOfYear");
        return ES.Call(dayOfYear, calendar2, [dateLike]);
      },
      CalendarWeekOfYear: function CalendarWeekOfYear(calendar2, dateLike) {
        var weekOfYear = ES.GetMethod(calendar2, "weekOfYear");
        return ES.Call(weekOfYear, calendar2, [dateLike]);
      },
      CalendarDaysInWeek: function CalendarDaysInWeek(calendar2, dateLike) {
        var daysInWeek = ES.GetMethod(calendar2, "daysInWeek");
        return ES.Call(daysInWeek, calendar2, [dateLike]);
      },
      CalendarDaysInMonth: function CalendarDaysInMonth(calendar2, dateLike) {
        var daysInMonth = ES.GetMethod(calendar2, "daysInMonth");
        return ES.Call(daysInMonth, calendar2, [dateLike]);
      },
      CalendarDaysInYear: function CalendarDaysInYear(calendar2, dateLike) {
        var daysInYear = ES.GetMethod(calendar2, "daysInYear");
        return ES.Call(daysInYear, calendar2, [dateLike]);
      },
      CalendarMonthsInYear: function CalendarMonthsInYear(calendar2, dateLike) {
        var monthsInYear = ES.GetMethod(calendar2, "monthsInYear");
        return ES.Call(monthsInYear, calendar2, [dateLike]);
      },
      CalendarInLeapYear: function CalendarInLeapYear(calendar2, dateLike) {
        var inLeapYear = ES.GetMethod(calendar2, "inLeapYear");
        return ES.Call(inLeapYear, calendar2, [dateLike]);
      },
      ToTemporalCalendar: function ToTemporalCalendar(calendarLike) {
        if (ES.Type(calendarLike) === "Object") {
          if (HasSlot(calendarLike, CALENDAR))
            return GetSlot(calendarLike, CALENDAR);
          if (!("calendar" in calendarLike))
            return calendarLike;
          calendarLike = calendarLike.calendar;
          if (ES.Type(calendarLike) === "Object" && !("calendar" in calendarLike))
            return calendarLike;
        }
        var identifier = ES.ToString(calendarLike);
        var TemporalCalendar = GetIntrinsic("%Temporal.Calendar%");
        if (IsBuiltinCalendar(identifier))
          return new TemporalCalendar(identifier);
        var calendar2;
        try {
          var _ES$ParseISODateTime5 = ES.ParseISODateTime(identifier, {
            zoneRequired: false
          });
          calendar2 = _ES$ParseISODateTime5.calendar;
        } catch (_unused4) {
          throw new RangeError("Invalid calendar: ".concat(identifier));
        }
        if (!calendar2)
          calendar2 = "iso8601";
        return new TemporalCalendar(calendar2);
      },
      GetOptionalTemporalCalendar: function GetOptionalTemporalCalendar(item) {
        if (HasSlot(item, CALENDAR))
          return GetSlot(item, CALENDAR);
        var calendar2 = item.calendar;
        if (calendar2 === void 0)
          return ES.GetISO8601Calendar();
        return ES.ToTemporalCalendar(calendar2);
      },
      CalendarCompare: function CalendarCompare(one, two) {
        var cal1 = ES.ToString(one);
        var cal2 = ES.ToString(two);
        return cal1 < cal2 ? -1 : cal1 > cal2 ? 1 : 0;
      },
      CalendarEquals: function CalendarEquals(one, two) {
        if (one === two)
          return true;
        var cal1 = ES.ToString(one);
        var cal2 = ES.ToString(two);
        return cal1 === cal2;
      },
      ConsolidateCalendars: function ConsolidateCalendars(one, two) {
        if (one === two)
          return two;
        var sOne = ES.ToString(one);
        var sTwo = ES.ToString(two);
        if (sOne === sTwo || sOne === "iso8601") {
          return two;
        } else if (sTwo === "iso8601") {
          return one;
        } else {
          throw new RangeError("irreconcilable calendars");
        }
      },
      DateFromFields: function DateFromFields(calendar2, fields, options) {
        var dateFromFields = ES.GetMethod(calendar2, "dateFromFields");
        var result = ES.Call(dateFromFields, calendar2, [fields, options]);
        if (!ES.IsTemporalDate(result))
          throw new TypeError("invalid result");
        return result;
      },
      YearMonthFromFields: function YearMonthFromFields(calendar2, fields, options) {
        var yearMonthFromFields = ES.GetMethod(calendar2, "yearMonthFromFields");
        var result = ES.Call(yearMonthFromFields, calendar2, [fields, options]);
        if (!ES.IsTemporalYearMonth(result))
          throw new TypeError("invalid result");
        return result;
      },
      MonthDayFromFields: function MonthDayFromFields(calendar2, fields, options) {
        var monthDayFromFields = ES.GetMethod(calendar2, "monthDayFromFields");
        var result = ES.Call(monthDayFromFields, calendar2, [fields, options]);
        if (!ES.IsTemporalMonthDay(result))
          throw new TypeError("invalid result");
        return result;
      },
      ToTemporalTimeZone: function ToTemporalTimeZone(temporalTimeZoneLike) {
        if (ES.Type(temporalTimeZoneLike) === "Object") {
          if (ES.IsTemporalZonedDateTime(temporalTimeZoneLike))
            return GetSlot(temporalTimeZoneLike, TIME_ZONE);
          if (!("timeZone" in temporalTimeZoneLike))
            return temporalTimeZoneLike;
          temporalTimeZoneLike = temporalTimeZoneLike.timeZone;
          if (ES.Type(temporalTimeZoneLike) === "Object" && !("timeZone" in temporalTimeZoneLike)) {
            return temporalTimeZoneLike;
          }
        }
        var identifier = ES.ToString(temporalTimeZoneLike);
        var timeZone2 = ES.TemporalTimeZoneFromString(identifier);
        var TemporalTimeZone = GetIntrinsic("%Temporal.TimeZone%");
        return new TemporalTimeZone(timeZone2);
      },
      TimeZoneEquals: function TimeZoneEquals(one, two) {
        if (one === two)
          return true;
        var tz1 = ES.ToString(one);
        var tz2 = ES.ToString(two);
        return tz1 === tz2;
      },
      TemporalDateTimeToDate: function TemporalDateTimeToDate(dateTime2) {
        return ES.CreateTemporalDate(GetSlot(dateTime2, ISO_YEAR), GetSlot(dateTime2, ISO_MONTH), GetSlot(dateTime2, ISO_DAY), GetSlot(dateTime2, CALENDAR));
      },
      TemporalDateTimeToTime: function TemporalDateTimeToTime(dateTime2) {
        var Time = GetIntrinsic("%Temporal.PlainTime%");
        return new Time(GetSlot(dateTime2, ISO_HOUR), GetSlot(dateTime2, ISO_MINUTE), GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND));
      },
      GetOffsetNanosecondsFor: function GetOffsetNanosecondsFor(timeZone2, instant2) {
        var getOffsetNanosecondsFor = ES.GetMethod(timeZone2, "getOffsetNanosecondsFor");
        if (getOffsetNanosecondsFor === void 0) {
          getOffsetNanosecondsFor = GetIntrinsic("%Temporal.TimeZone.prototype.getOffsetNanosecondsFor%");
        }
        var offsetNs = ES.Call(getOffsetNanosecondsFor, timeZone2, [instant2]);
        if (typeof offsetNs !== "number") {
          throw new TypeError("bad return from getOffsetNanosecondsFor");
        }
        if (!NumberIsInteger(offsetNs) || MathAbs(offsetNs) > 864e11) {
          throw new RangeError("out-of-range return from getOffsetNanosecondsFor");
        }
        return offsetNs;
      },
      BuiltinTimeZoneGetOffsetStringFor: function BuiltinTimeZoneGetOffsetStringFor(timeZone2, instant2) {
        var offsetNs = ES.GetOffsetNanosecondsFor(timeZone2, instant2);
        return ES.FormatTimeZoneOffsetString(offsetNs);
      },
      BuiltinTimeZoneGetPlainDateTimeFor: function BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, instant2, calendar2) {
        var ns = GetSlot(instant2, EPOCHNANOSECONDS);
        var offsetNs = ES.GetOffsetNanosecondsFor(timeZone2, instant2);
        var _ES$GetISOPartsFromEp = ES.GetISOPartsFromEpoch(ns), year = _ES$GetISOPartsFromEp.year, month = _ES$GetISOPartsFromEp.month, day = _ES$GetISOPartsFromEp.day, hour = _ES$GetISOPartsFromEp.hour, minute = _ES$GetISOPartsFromEp.minute, second = _ES$GetISOPartsFromEp.second, millisecond = _ES$GetISOPartsFromEp.millisecond, microsecond = _ES$GetISOPartsFromEp.microsecond, nanosecond = _ES$GetISOPartsFromEp.nanosecond;
        var _ES$BalanceISODateTim = ES.BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond + offsetNs);
        year = _ES$BalanceISODateTim.year;
        month = _ES$BalanceISODateTim.month;
        day = _ES$BalanceISODateTim.day;
        hour = _ES$BalanceISODateTim.hour;
        minute = _ES$BalanceISODateTim.minute;
        second = _ES$BalanceISODateTim.second;
        millisecond = _ES$BalanceISODateTim.millisecond;
        microsecond = _ES$BalanceISODateTim.microsecond;
        nanosecond = _ES$BalanceISODateTim.nanosecond;
        return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
      },
      BuiltinTimeZoneGetInstantFor: function BuiltinTimeZoneGetInstantFor(timeZone2, dateTime2, disambiguation) {
        var Instant2 = GetIntrinsic("%Temporal.Instant%");
        var possibleInstants = ES.GetPossibleInstantsFor(timeZone2, dateTime2);
        var numInstants = possibleInstants.length;
        if (numInstants === 1)
          return possibleInstants[0];
        if (numInstants) {
          switch (disambiguation) {
            case "compatible":
            case "earlier":
              return possibleInstants[0];
            case "later":
              return possibleInstants[numInstants - 1];
            case "reject": {
              throw new RangeError("multiple instants found");
            }
          }
        }
        var utcns = ES.GetEpochFromISOParts(GetSlot(dateTime2, ISO_YEAR), GetSlot(dateTime2, ISO_MONTH), GetSlot(dateTime2, ISO_DAY), GetSlot(dateTime2, ISO_HOUR), GetSlot(dateTime2, ISO_MINUTE), GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND));
        if (utcns === null)
          throw new RangeError("DateTime outside of supported range");
        var dayBefore = new Instant2(utcns.minus(864e11));
        var dayAfter = new Instant2(utcns.plus(864e11));
        var offsetBefore = ES.GetOffsetNanosecondsFor(timeZone2, dayBefore);
        var offsetAfter = ES.GetOffsetNanosecondsFor(timeZone2, dayAfter);
        var nanoseconds = offsetAfter - offsetBefore;
        var diff = ES.ToTemporalDurationRecord({
          nanoseconds
        }, "reject");
        switch (disambiguation) {
          case "earlier": {
            var earlier = dateTime2.subtract(diff);
            return ES.GetPossibleInstantsFor(timeZone2, earlier)[0];
          }
          case "compatible":
          case "later": {
            var later = dateTime2.add(diff);
            var possible = ES.GetPossibleInstantsFor(timeZone2, later);
            return possible[possible.length - 1];
          }
          case "reject": {
            throw new RangeError("no such instant found");
          }
        }
      },
      GetPossibleInstantsFor: function GetPossibleInstantsFor(timeZone2, dateTime2) {
        var getPossibleInstantsFor = ES.GetMethod(timeZone2, "getPossibleInstantsFor");
        var possibleInstants = ES.Call(getPossibleInstantsFor, timeZone2, [dateTime2]);
        var result = [];
        var _iterator10 = _createForOfIteratorHelper(possibleInstants), _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
            var instant2 = _step10.value;
            if (!ES.IsTemporalInstant(instant2)) {
              throw new TypeError("bad return from getPossibleInstantsFor");
            }
            ArrayPrototypePush$1.call(result, instant2);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        return result;
      },
      ISOYearString: function ISOYearString(year) {
        var yearString;
        if (year < 1e3 || year > 9999) {
          var sign2 = year < 0 ? "-" : "+";
          var yearNumber = MathAbs(year);
          yearString = sign2 + "000000".concat(yearNumber).slice(-6);
        } else {
          yearString = "".concat(year);
        }
        return yearString;
      },
      ISODateTimePartString: function ISODateTimePartString(part) {
        return "00".concat(part).slice(-2);
      },
      FormatSecondsStringPart: function FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision) {
        if (precision === "minute")
          return "";
        var secs = ":".concat(ES.ISODateTimePartString(second));
        var fraction2 = millisecond * 1e6 + microsecond * 1e3 + nanosecond;
        if (precision === "auto") {
          if (fraction2 === 0)
            return secs;
          fraction2 = "".concat(fraction2).padStart(9, "0");
          while (fraction2[fraction2.length - 1] === "0") {
            fraction2 = fraction2.slice(0, -1);
          }
        } else {
          if (precision === 0)
            return secs;
          fraction2 = "".concat(fraction2).padStart(9, "0").slice(0, precision);
        }
        return "".concat(secs, ".").concat(fraction2);
      },
      TemporalInstantToString: function TemporalInstantToString(instant2, timeZone2, precision) {
        var outputTimeZone = timeZone2;
        if (outputTimeZone === void 0) {
          var TemporalTimeZone = GetIntrinsic("%Temporal.TimeZone%");
          outputTimeZone = new TemporalTimeZone("UTC");
        }
        var iso = ES.GetISO8601Calendar();
        var dateTime2 = ES.BuiltinTimeZoneGetPlainDateTimeFor(outputTimeZone, instant2, iso);
        var year = ES.ISOYearString(GetSlot(dateTime2, ISO_YEAR));
        var month = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_MONTH));
        var day = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_DAY));
        var hour = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_HOUR));
        var minute = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_MINUTE));
        var seconds = ES.FormatSecondsStringPart(GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND), precision);
        var timeZoneString = "Z";
        if (timeZone2 !== void 0)
          timeZoneString = ES.BuiltinTimeZoneGetOffsetStringFor(outputTimeZone, instant2);
        return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(timeZoneString);
      },
      TemporalDurationToString: function TemporalDurationToString(duration2) {
        var precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
        function formatNumber(num) {
          if (num <= NumberMaxSafeInteger)
            return num.toString(10);
          return BigInteger(num).toString();
        }
        var years = GetSlot(duration2, YEARS);
        var months = GetSlot(duration2, MONTHS);
        var weeks = GetSlot(duration2, WEEKS);
        var days = GetSlot(duration2, DAYS);
        var hours = GetSlot(duration2, HOURS);
        var minutes = GetSlot(duration2, MINUTES);
        var seconds = GetSlot(duration2, SECONDS);
        var ms = GetSlot(duration2, MILLISECONDS);
        var \u00B5s = GetSlot(duration2, MICROSECONDS);
        var ns = GetSlot(duration2, NANOSECONDS);
        var sign2 = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, ms, \u00B5s, ns);
        if (options) {
          var unit = options.unit, increment = options.increment, roundingMode = options.roundingMode;
          var _ES$RoundDuration = ES.RoundDuration(0, 0, 0, 0, 0, 0, seconds, ms, \u00B5s, ns, increment, unit, roundingMode);
          seconds = _ES$RoundDuration.seconds;
          ms = _ES$RoundDuration.milliseconds;
          \u00B5s = _ES$RoundDuration.microseconds;
          ns = _ES$RoundDuration.nanoseconds;
        }
        var dateParts = [];
        if (years)
          dateParts.push("".concat(formatNumber(MathAbs(years)), "Y"));
        if (months)
          dateParts.push("".concat(formatNumber(MathAbs(months)), "M"));
        if (weeks)
          dateParts.push("".concat(formatNumber(MathAbs(weeks)), "W"));
        if (days)
          dateParts.push("".concat(formatNumber(MathAbs(days)), "D"));
        var timeParts = [];
        if (hours)
          timeParts.push("".concat(formatNumber(MathAbs(hours)), "H"));
        if (minutes)
          timeParts.push("".concat(formatNumber(MathAbs(minutes)), "M"));
        var secondParts = [];
        var total = ES.TotalDurationNanoseconds(0, 0, 0, seconds, ms, \u00B5s, ns, 0);
        var _total$divmod = total.divmod(1e3);
        total = _total$divmod.quotient;
        ns = _total$divmod.remainder;
        var _total$divmod2 = total.divmod(1e3);
        total = _total$divmod2.quotient;
        \u00B5s = _total$divmod2.remainder;
        var _total$divmod3 = total.divmod(1e3);
        seconds = _total$divmod3.quotient;
        ms = _total$divmod3.remainder;
        var fraction2 = MathAbs(ms.toJSNumber()) * 1e6 + MathAbs(\u00B5s.toJSNumber()) * 1e3 + MathAbs(ns.toJSNumber());
        var decimalPart;
        if (precision === "auto") {
          if (fraction2 !== 0) {
            decimalPart = "".concat(fraction2).padStart(9, "0");
            while (decimalPart[decimalPart.length - 1] === "0") {
              decimalPart = decimalPart.slice(0, -1);
            }
          }
        } else if (precision !== 0) {
          decimalPart = "".concat(fraction2).padStart(9, "0").slice(0, precision);
        }
        if (decimalPart)
          secondParts.unshift(".", decimalPart);
        if (!seconds.isZero() || secondParts.length)
          secondParts.unshift(seconds.abs().toString());
        if (secondParts.length)
          timeParts.push("".concat(secondParts.join(""), "S"));
        if (timeParts.length)
          timeParts.unshift("T");
        if (!dateParts.length && !timeParts.length)
          return "PT0S";
        return "".concat(sign2 < 0 ? "-" : "", "P").concat(dateParts.join("")).concat(timeParts.join(""));
      },
      TemporalDateToString: function TemporalDateToString(date) {
        var showCalendar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
        var year = ES.ISOYearString(GetSlot(date, ISO_YEAR));
        var month = ES.ISODateTimePartString(GetSlot(date, ISO_MONTH));
        var day = ES.ISODateTimePartString(GetSlot(date, ISO_DAY));
        var calendarID2 = ES.ToString(GetSlot(date, CALENDAR));
        var calendar2 = ES.FormatCalendarAnnotation(calendarID2, showCalendar);
        return "".concat(year, "-").concat(month, "-").concat(day).concat(calendar2);
      },
      TemporalDateTimeToString: function TemporalDateTimeToString(dateTime2, precision) {
        var showCalendar = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
        var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : void 0;
        var year = GetSlot(dateTime2, ISO_YEAR);
        var month = GetSlot(dateTime2, ISO_MONTH);
        var day = GetSlot(dateTime2, ISO_DAY);
        var hour = GetSlot(dateTime2, ISO_HOUR);
        var minute = GetSlot(dateTime2, ISO_MINUTE);
        var second = GetSlot(dateTime2, ISO_SECOND);
        var millisecond = GetSlot(dateTime2, ISO_MILLISECOND);
        var microsecond = GetSlot(dateTime2, ISO_MICROSECOND);
        var nanosecond = GetSlot(dateTime2, ISO_NANOSECOND);
        if (options) {
          var unit = options.unit, increment = options.increment, roundingMode = options.roundingMode;
          var _ES$RoundISODateTime = ES.RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);
          year = _ES$RoundISODateTime.year;
          month = _ES$RoundISODateTime.month;
          day = _ES$RoundISODateTime.day;
          hour = _ES$RoundISODateTime.hour;
          minute = _ES$RoundISODateTime.minute;
          second = _ES$RoundISODateTime.second;
          millisecond = _ES$RoundISODateTime.millisecond;
          microsecond = _ES$RoundISODateTime.microsecond;
          nanosecond = _ES$RoundISODateTime.nanosecond;
        }
        year = ES.ISOYearString(year);
        month = ES.ISODateTimePartString(month);
        day = ES.ISODateTimePartString(day);
        hour = ES.ISODateTimePartString(hour);
        minute = ES.ISODateTimePartString(minute);
        var seconds = ES.FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
        var calendarID2 = ES.ToString(GetSlot(dateTime2, CALENDAR));
        var calendar2 = ES.FormatCalendarAnnotation(calendarID2, showCalendar);
        return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds).concat(calendar2);
      },
      TemporalMonthDayToString: function TemporalMonthDayToString(monthDay) {
        var showCalendar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
        var month = ES.ISODateTimePartString(GetSlot(monthDay, ISO_MONTH));
        var day = ES.ISODateTimePartString(GetSlot(monthDay, ISO_DAY));
        var resultString = "".concat(month, "-").concat(day);
        var calendar2 = GetSlot(monthDay, CALENDAR);
        var calendarID2 = ES.ToString(calendar2);
        if (calendarID2 !== "iso8601") {
          var year = ES.ISOYearString(GetSlot(monthDay, ISO_YEAR));
          resultString = "".concat(year, "-").concat(resultString);
        }
        var calendarString = ES.FormatCalendarAnnotation(calendarID2, showCalendar);
        if (calendarString)
          resultString += calendarString;
        return resultString;
      },
      TemporalYearMonthToString: function TemporalYearMonthToString(yearMonth) {
        var showCalendar = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
        var year = ES.ISOYearString(GetSlot(yearMonth, ISO_YEAR));
        var month = ES.ISODateTimePartString(GetSlot(yearMonth, ISO_MONTH));
        var resultString = "".concat(year, "-").concat(month);
        var calendar2 = GetSlot(yearMonth, CALENDAR);
        var calendarID2 = ES.ToString(calendar2);
        if (calendarID2 !== "iso8601") {
          var day = ES.ISODateTimePartString(GetSlot(yearMonth, ISO_DAY));
          resultString += "-".concat(day);
        }
        var calendarString = ES.FormatCalendarAnnotation(calendarID2, showCalendar);
        if (calendarString)
          resultString += calendarString;
        return resultString;
      },
      TemporalZonedDateTimeToString: function TemporalZonedDateTimeToString(zdt, precision) {
        var showCalendar = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "auto";
        var showTimeZone = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto";
        var showOffset = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "auto";
        var options = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : void 0;
        var instant2 = GetSlot(zdt, INSTANT);
        if (options) {
          var unit = options.unit, increment = options.increment, roundingMode = options.roundingMode;
          var ns = ES.RoundInstant(GetSlot(zdt, EPOCHNANOSECONDS), increment, unit, roundingMode);
          var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
          instant2 = new TemporalInstant(ns);
        }
        var tz = GetSlot(zdt, TIME_ZONE);
        var iso = ES.GetISO8601Calendar();
        var dateTime2 = ES.BuiltinTimeZoneGetPlainDateTimeFor(tz, instant2, iso);
        var year = ES.ISOYearString(GetSlot(dateTime2, ISO_YEAR));
        var month = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_MONTH));
        var day = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_DAY));
        var hour = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_HOUR));
        var minute = ES.ISODateTimePartString(GetSlot(dateTime2, ISO_MINUTE));
        var seconds = ES.FormatSecondsStringPart(GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND), precision);
        var result = "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute).concat(seconds);
        if (showOffset !== "never")
          result += ES.BuiltinTimeZoneGetOffsetStringFor(tz, instant2);
        if (showTimeZone !== "never")
          result += "[".concat(tz, "]");
        var calendarID2 = ES.ToString(GetSlot(zdt, CALENDAR));
        result += ES.FormatCalendarAnnotation(calendarID2, showCalendar);
        return result;
      },
      ParseOffsetString: function ParseOffsetString(string) {
        var match = OFFSET.exec(String(string));
        if (!match)
          return null;
        var sign2 = match[1] === "-" || match[1] === "\u2212" ? -1 : 1;
        var hours = +match[2];
        var minutes = +(match[3] || 0);
        var seconds = +(match[4] || 0);
        var nanoseconds = +((match[5] || 0) + "000000000").slice(0, 9);
        return sign2 * (((hours * 60 + minutes) * 60 + seconds) * 1e9 + nanoseconds);
      },
      GetCanonicalTimeZoneIdentifier: function GetCanonicalTimeZoneIdentifier(timeZoneIdentifier) {
        var offsetNs = ES.ParseOffsetString(timeZoneIdentifier);
        if (offsetNs !== null)
          return ES.FormatTimeZoneOffsetString(offsetNs);
        var formatter = new IntlDateTimeFormat$1("en-us", {
          timeZone: String(timeZoneIdentifier),
          hour12: false,
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
        return formatter.resolvedOptions().timeZone;
      },
      GetIANATimeZoneOffsetNanoseconds: function GetIANATimeZoneOffsetNanoseconds(epochNanoseconds, id) {
        var _ES$GetIANATimeZoneDa = ES.GetIANATimeZoneDateTimeParts(epochNanoseconds, id), year = _ES$GetIANATimeZoneDa.year, month = _ES$GetIANATimeZoneDa.month, day = _ES$GetIANATimeZoneDa.day, hour = _ES$GetIANATimeZoneDa.hour, minute = _ES$GetIANATimeZoneDa.minute, second = _ES$GetIANATimeZoneDa.second, millisecond = _ES$GetIANATimeZoneDa.millisecond, microsecond = _ES$GetIANATimeZoneDa.microsecond, nanosecond = _ES$GetIANATimeZoneDa.nanosecond;
        var utc = ES.GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (utc === null)
          throw new RangeError("Date outside of supported range");
        return +utc.minus(epochNanoseconds);
      },
      FormatTimeZoneOffsetString: function FormatTimeZoneOffsetString(offsetNanoseconds) {
        var sign2 = offsetNanoseconds < 0 ? "-" : "+";
        offsetNanoseconds = MathAbs(offsetNanoseconds);
        var nanoseconds = offsetNanoseconds % 1e9;
        var seconds = MathFloor(offsetNanoseconds / 1e9) % 60;
        var minutes = MathFloor(offsetNanoseconds / 6e10) % 60;
        var hours = MathFloor(offsetNanoseconds / 36e11);
        var hourString = ES.ISODateTimePartString(hours);
        var minuteString = ES.ISODateTimePartString(minutes);
        var secondString = ES.ISODateTimePartString(seconds);
        var post = "";
        if (nanoseconds) {
          var fraction2 = "".concat(nanoseconds).padStart(9, "0");
          while (fraction2[fraction2.length - 1] === "0") {
            fraction2 = fraction2.slice(0, -1);
          }
          post = ":".concat(secondString, ".").concat(fraction2);
        } else if (seconds) {
          post = ":".concat(secondString);
        }
        return "".concat(sign2).concat(hourString, ":").concat(minuteString).concat(post);
      },
      GetEpochFromISOParts: function GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        var legacyDate = new Date();
        legacyDate.setUTCHours(hour, minute, second, millisecond);
        legacyDate.setUTCFullYear(year, month - 1, day);
        var ms = legacyDate.getTime();
        if (NumberIsNaN(ms))
          return null;
        var ns = BigInteger(ms).multiply(1e6);
        ns = ns.plus(BigInteger(microsecond).multiply(1e3));
        ns = ns.plus(BigInteger(nanosecond));
        if (ns.lesser(NS_MIN) || ns.greater(NS_MAX))
          return null;
        return ns;
      },
      GetISOPartsFromEpoch: function GetISOPartsFromEpoch(epochNanoseconds) {
        var _bigInt$divmod = BigInteger(epochNanoseconds).divmod(1e6), quotient = _bigInt$divmod.quotient, remainder = _bigInt$divmod.remainder;
        var epochMilliseconds = +quotient;
        var nanos = +remainder;
        if (nanos < 0) {
          nanos += 1e6;
          epochMilliseconds -= 1;
        }
        var microsecond = MathFloor(nanos / 1e3) % 1e3;
        var nanosecond = nanos % 1e3;
        var item = new Date(epochMilliseconds);
        var year = item.getUTCFullYear();
        var month = item.getUTCMonth() + 1;
        var day = item.getUTCDate();
        var hour = item.getUTCHours();
        var minute = item.getUTCMinutes();
        var second = item.getUTCSeconds();
        var millisecond = item.getUTCMilliseconds();
        return {
          epochMilliseconds,
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      GetIANATimeZoneDateTimeParts: function GetIANATimeZoneDateTimeParts(epochNanoseconds, id) {
        var _ES$GetISOPartsFromEp2 = ES.GetISOPartsFromEpoch(epochNanoseconds), epochMilliseconds = _ES$GetISOPartsFromEp2.epochMilliseconds, millisecond = _ES$GetISOPartsFromEp2.millisecond, microsecond = _ES$GetISOPartsFromEp2.microsecond, nanosecond = _ES$GetISOPartsFromEp2.nanosecond;
        var _ES$GetFormatterParts = ES.GetFormatterParts(id, epochMilliseconds), year = _ES$GetFormatterParts.year, month = _ES$GetFormatterParts.month, day = _ES$GetFormatterParts.day, hour = _ES$GetFormatterParts.hour, minute = _ES$GetFormatterParts.minute, second = _ES$GetFormatterParts.second;
        return ES.BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
      },
      GetIANATimeZoneNextTransition: function GetIANATimeZoneNextTransition(epochNanoseconds, id) {
        var uppercap = ES.SystemUTCEpochNanoSeconds() + 366 * DAYMILLIS * 1e6;
        var leftNanos = epochNanoseconds;
        var leftOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
        var rightNanos = leftNanos;
        var rightOffsetNs = leftOffsetNs;
        while (leftOffsetNs === rightOffsetNs && BigInteger(leftNanos).compare(uppercap) === -1) {
          rightNanos = BigInteger(leftNanos).plus(2 * 7 * DAYMILLIS * 1e6);
          rightOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
          if (leftOffsetNs === rightOffsetNs) {
            leftNanos = rightNanos;
          }
        }
        if (leftOffsetNs === rightOffsetNs)
          return null;
        var result = bisect(function(epochNs) {
          return ES.GetIANATimeZoneOffsetNanoseconds(epochNs, id);
        }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
        return result;
      },
      GetIANATimeZonePreviousTransition: function GetIANATimeZonePreviousTransition(epochNanoseconds, id) {
        var lowercap = BEFORE_FIRST_DST;
        var rightNanos = epochNanoseconds;
        var rightOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(rightNanos, id);
        var leftNanos = rightNanos;
        var leftOffsetNs = rightOffsetNs;
        while (rightOffsetNs === leftOffsetNs && BigInteger(rightNanos).compare(lowercap) === 1) {
          leftNanos = BigInteger(rightNanos).minus(2 * 7 * DAYMILLIS * 1e6);
          leftOffsetNs = ES.GetIANATimeZoneOffsetNanoseconds(leftNanos, id);
          if (rightOffsetNs === leftOffsetNs) {
            rightNanos = leftNanos;
          }
        }
        if (rightOffsetNs === leftOffsetNs)
          return null;
        var result = bisect(function(epochNs) {
          return ES.GetIANATimeZoneOffsetNanoseconds(epochNs, id);
        }, leftNanos, rightNanos, leftOffsetNs, rightOffsetNs);
        return result;
      },
      GetFormatterParts: function GetFormatterParts(timeZone2, epochMilliseconds) {
        var formatter = new IntlDateTimeFormat$1("en-us", {
          timeZone: timeZone2,
          hour12: false,
          era: "short",
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
        var datetime2 = formatter.format(new Date(epochMilliseconds));
        var _datetime$split = datetime2.split(/,\s+/), _datetime$split2 = _slicedToArray(_datetime$split, 3), date = _datetime$split2[0], fullYear = _datetime$split2[1], time2 = _datetime$split2[2];
        var _date$split = date.split(" "), _date$split2 = _slicedToArray(_date$split, 2), month = _date$split2[0], day = _date$split2[1];
        var _fullYear$split = fullYear.split(" "), _fullYear$split2 = _slicedToArray(_fullYear$split, 2), year = _fullYear$split2[0], era = _fullYear$split2[1];
        var _time$split = time2.split(":"), _time$split2 = _slicedToArray(_time$split, 3), hour = _time$split2[0], minute = _time$split2[1], second = _time$split2[2];
        return {
          year: era === "BC" ? -year + 1 : +year,
          month: +month,
          day: +day,
          hour: hour === "24" ? 0 : +hour,
          minute: +minute,
          second: +second
        };
      },
      GetIANATimeZoneEpochValue: function GetIANATimeZoneEpochValue(id, year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        var ns = ES.GetEpochFromISOParts(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
        if (ns === null)
          throw new RangeError("DateTime outside of supported range");
        var dayNanos = BigInteger(DAYMILLIS).multiply(1e6);
        var nsEarlier = ns.minus(dayNanos);
        if (nsEarlier.lesser(NS_MIN))
          nsEarlier = ns;
        var nsLater = ns.plus(dayNanos);
        if (nsLater.greater(NS_MAX))
          nsLater = ns;
        var earliest = ES.GetIANATimeZoneOffsetNanoseconds(nsEarlier, id);
        var latest = ES.GetIANATimeZoneOffsetNanoseconds(nsLater, id);
        var found = earliest === latest ? [earliest] : [earliest, latest];
        return found.map(function(offsetNanoseconds) {
          var epochNanoseconds = BigInteger(ns).minus(offsetNanoseconds);
          var parts = ES.GetIANATimeZoneDateTimeParts(epochNanoseconds, id);
          if (year !== parts.year || month !== parts.month || day !== parts.day || hour !== parts.hour || minute !== parts.minute || second !== parts.second || millisecond !== parts.millisecond || microsecond !== parts.microsecond || nanosecond !== parts.nanosecond) {
            return void 0;
          }
          return epochNanoseconds;
        }).filter(function(x) {
          return x !== void 0;
        });
      },
      LeapYear: function LeapYear(year) {
        if (year === void 0)
          return false;
        var isDiv4 = year % 4 === 0;
        var isDiv100 = year % 100 === 0;
        var isDiv400 = year % 400 === 0;
        return isDiv4 && (!isDiv100 || isDiv400);
      },
      ISODaysInMonth: function ISODaysInMonth(year, month) {
        var DoM = {
          standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        };
        return DoM[ES.LeapYear(year) ? "leapyear" : "standard"][month - 1];
      },
      DayOfWeek: function DayOfWeek(year, month, day) {
        var m = month + (month < 3 ? 10 : -2);
        var Y = year - (month < 3 ? 1 : 0);
        var c = MathFloor(Y / 100);
        var y = Y - c * 100;
        var d = day;
        var pD = d;
        var pM = MathFloor(2.6 * m - 0.2);
        var pY = y + MathFloor(y / 4);
        var pC = MathFloor(c / 4) - 2 * c;
        var dow = (pD + pM + pY + pC) % 7;
        return dow + (dow <= 0 ? 7 : 0);
      },
      DayOfYear: function DayOfYear(year, month, day) {
        var days = day;
        for (var m = month - 1; m > 0; m--) {
          days += ES.ISODaysInMonth(year, m);
        }
        return days;
      },
      WeekOfYear: function WeekOfYear(year, month, day) {
        var doy = ES.DayOfYear(year, month, day);
        var dow = ES.DayOfWeek(year, month, day) || 7;
        var doj = ES.DayOfWeek(year, 1, 1);
        var week = MathFloor((doy - dow + 10) / 7);
        if (week < 1) {
          if (doj === 5 || doj === 6 && ES.LeapYear(year - 1)) {
            return 53;
          } else {
            return 52;
          }
        }
        if (week === 53) {
          if ((ES.LeapYear(year) ? 366 : 365) - doy < 4 - dow) {
            return 1;
          }
        }
        return week;
      },
      DurationSign: function DurationSign(y, mon, w, d, h, min, s, ms, \u00B5s, ns) {
        for (var _i = 0, _arr = [y, mon, w, d, h, min, s, ms, \u00B5s, ns]; _i < _arr.length; _i++) {
          var prop = _arr[_i];
          if (prop !== 0)
            return prop < 0 ? -1 : 1;
        }
        return 0;
      },
      BalanceISOYearMonth: function BalanceISOYearMonth(year, month) {
        if (!NumberIsFinite(year) || !NumberIsFinite(month))
          throw new RangeError("infinity is out of range");
        month -= 1;
        year += MathFloor(month / 12);
        month %= 12;
        if (month < 0)
          month += 12;
        month += 1;
        return {
          year,
          month
        };
      },
      BalanceISODate: function BalanceISODate(year, month, day) {
        if (!NumberIsFinite(day))
          throw new RangeError("infinity is out of range");
        var _ES$BalanceISOYearMon = ES.BalanceISOYearMonth(year, month);
        year = _ES$BalanceISOYearMon.year;
        month = _ES$BalanceISOYearMon.month;
        var daysInYear = 0;
        var testYear = month > 2 ? year : year - 1;
        while (daysInYear = ES.LeapYear(testYear) ? 366 : 365, day < -daysInYear) {
          year -= 1;
          testYear -= 1;
          day += daysInYear;
        }
        testYear += 1;
        while (daysInYear = ES.LeapYear(testYear) ? 366 : 365, day > daysInYear) {
          year += 1;
          testYear += 1;
          day -= daysInYear;
        }
        while (day < 1) {
          var _ES$BalanceISOYearMon2 = ES.BalanceISOYearMonth(year, month - 1);
          year = _ES$BalanceISOYearMon2.year;
          month = _ES$BalanceISOYearMon2.month;
          day += ES.ISODaysInMonth(year, month);
        }
        while (day > ES.ISODaysInMonth(year, month)) {
          day -= ES.ISODaysInMonth(year, month);
          var _ES$BalanceISOYearMon3 = ES.BalanceISOYearMonth(year, month + 1);
          year = _ES$BalanceISOYearMon3.year;
          month = _ES$BalanceISOYearMon3.month;
        }
        return {
          year,
          month,
          day
        };
      },
      BalanceISODateTime: function BalanceISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        var deltaDays;
        var _ES$BalanceTime = ES.BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);
        deltaDays = _ES$BalanceTime.deltaDays;
        hour = _ES$BalanceTime.hour;
        minute = _ES$BalanceTime.minute;
        second = _ES$BalanceTime.second;
        millisecond = _ES$BalanceTime.millisecond;
        microsecond = _ES$BalanceTime.microsecond;
        nanosecond = _ES$BalanceTime.nanosecond;
        var _ES$BalanceISODate = ES.BalanceISODate(year, month, day + deltaDays);
        year = _ES$BalanceISODate.year;
        month = _ES$BalanceISODate.month;
        day = _ES$BalanceISODate.day;
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      BalanceTime: function BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond) {
        if (!NumberIsFinite(hour) || !NumberIsFinite(minute) || !NumberIsFinite(second) || !NumberIsFinite(millisecond) || !NumberIsFinite(microsecond) || !NumberIsFinite(nanosecond)) {
          throw new RangeError("infinity is out of range");
        }
        microsecond += MathFloor(nanosecond / 1e3);
        nanosecond = ES.NonNegativeModulo(nanosecond, 1e3);
        millisecond += MathFloor(microsecond / 1e3);
        microsecond = ES.NonNegativeModulo(microsecond, 1e3);
        second += MathFloor(millisecond / 1e3);
        millisecond = ES.NonNegativeModulo(millisecond, 1e3);
        minute += MathFloor(second / 60);
        second = ES.NonNegativeModulo(second, 60);
        hour += MathFloor(minute / 60);
        minute = ES.NonNegativeModulo(minute, 60);
        var deltaDays = MathFloor(hour / 24);
        hour = ES.NonNegativeModulo(hour, 24);
        return {
          deltaDays,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      TotalDurationNanoseconds: function TotalDurationNanoseconds(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, offsetShift) {
        if (days !== 0)
          nanoseconds = BigInteger(nanoseconds).subtract(offsetShift);
        hours = BigInteger(hours).add(BigInteger(days).multiply(24));
        minutes = BigInteger(minutes).add(hours.multiply(60));
        seconds = BigInteger(seconds).add(minutes.multiply(60));
        milliseconds = BigInteger(milliseconds).add(seconds.multiply(1e3));
        microseconds = BigInteger(microseconds).add(milliseconds.multiply(1e3));
        return BigInteger(nanoseconds).add(microseconds.multiply(1e3));
      },
      NanosecondsToDays: function NanosecondsToDays(nanoseconds, relativeTo) {
        var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
        var sign2 = MathSign(nanoseconds);
        nanoseconds = BigInteger(nanoseconds);
        var dayLengthNs = 864e11;
        if (sign2 === 0)
          return {
            days: 0,
            nanoseconds: BigInteger.zero,
            dayLengthNs
          };
        if (!ES.IsTemporalZonedDateTime(relativeTo)) {
          var _days;
          var _nanoseconds$divmod = nanoseconds.divmod(dayLengthNs);
          _days = _nanoseconds$divmod.quotient;
          nanoseconds = _nanoseconds$divmod.remainder;
          _days = _days.toJSNumber();
          return {
            days: _days,
            nanoseconds,
            dayLengthNs: sign2 * dayLengthNs
          };
        }
        var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
        var start = GetSlot(relativeTo, INSTANT);
        var endNs = startNs.add(nanoseconds);
        var end = new TemporalInstant(endNs);
        var timeZone2 = GetSlot(relativeTo, TIME_ZONE);
        var calendar2 = GetSlot(relativeTo, CALENDAR);
        var dtStart = ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, start, calendar2);
        var dtEnd = ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, end, calendar2);
        var _ES$DifferenceISODate = ES.DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar2, "days"), days = _ES$DifferenceISODate.days;
        var intermediateNs = ES.AddZonedDateTime(start, timeZone2, calendar2, 0, 0, 0, days, 0, 0, 0, 0, 0, 0);
        if (sign2 === 1) {
          while (days > 0 && intermediateNs.greater(endNs)) {
            --days;
            intermediateNs = ES.AddZonedDateTime(start, timeZone2, calendar2, 0, 0, 0, days, 0, 0, 0, 0, 0, 0);
          }
        }
        nanoseconds = endNs.subtract(intermediateNs);
        var isOverflow = false;
        var relativeInstant = new TemporalInstant(intermediateNs);
        do {
          var oneDayFartherNs = ES.AddZonedDateTime(relativeInstant, timeZone2, calendar2, 0, 0, 0, sign2, 0, 0, 0, 0, 0, 0);
          var relativeNs = GetSlot(relativeInstant, EPOCHNANOSECONDS);
          dayLengthNs = oneDayFartherNs.subtract(relativeNs).toJSNumber();
          isOverflow = nanoseconds.subtract(dayLengthNs).multiply(sign2).geq(0);
          if (isOverflow) {
            nanoseconds = nanoseconds.subtract(dayLengthNs);
            relativeInstant = new TemporalInstant(oneDayFartherNs);
            days += sign2;
          }
        } while (isOverflow);
        return {
          days,
          nanoseconds,
          dayLengthNs
        };
      },
      BalanceDuration: function BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit) {
        var relativeTo = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : void 0;
        if (ES.IsTemporalZonedDateTime(relativeTo)) {
          var endNs = ES.AddZonedDateTime(GetSlot(relativeTo, INSTANT), GetSlot(relativeTo, TIME_ZONE), GetSlot(relativeTo, CALENDAR), 0, 0, 0, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var startNs = GetSlot(relativeTo, EPOCHNANOSECONDS);
          nanoseconds = endNs.subtract(startNs);
        } else {
          nanoseconds = ES.TotalDurationNanoseconds(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
        }
        if (largestUnit === "years" || largestUnit === "months" || largestUnit === "weeks" || largestUnit === "days") {
          var _ES$NanosecondsToDays = ES.NanosecondsToDays(nanoseconds, relativeTo);
          days = _ES$NanosecondsToDays.days;
          nanoseconds = _ES$NanosecondsToDays.nanoseconds;
        } else {
          days = 0;
        }
        var sign2 = nanoseconds.lesser(0) ? -1 : 1;
        nanoseconds = nanoseconds.abs();
        microseconds = milliseconds = seconds = minutes = hours = BigInteger.zero;
        switch (largestUnit) {
          case "years":
          case "months":
          case "weeks":
          case "days":
          case "hours":
            var _nanoseconds$divmod2 = nanoseconds.divmod(1e3);
            microseconds = _nanoseconds$divmod2.quotient;
            nanoseconds = _nanoseconds$divmod2.remainder;
            var _microseconds$divmod = microseconds.divmod(1e3);
            milliseconds = _microseconds$divmod.quotient;
            microseconds = _microseconds$divmod.remainder;
            var _milliseconds$divmod = milliseconds.divmod(1e3);
            seconds = _milliseconds$divmod.quotient;
            milliseconds = _milliseconds$divmod.remainder;
            var _seconds$divmod = seconds.divmod(60);
            minutes = _seconds$divmod.quotient;
            seconds = _seconds$divmod.remainder;
            var _minutes$divmod = minutes.divmod(60);
            hours = _minutes$divmod.quotient;
            minutes = _minutes$divmod.remainder;
            break;
          case "minutes":
            var _nanoseconds$divmod3 = nanoseconds.divmod(1e3);
            microseconds = _nanoseconds$divmod3.quotient;
            nanoseconds = _nanoseconds$divmod3.remainder;
            var _microseconds$divmod2 = microseconds.divmod(1e3);
            milliseconds = _microseconds$divmod2.quotient;
            microseconds = _microseconds$divmod2.remainder;
            var _milliseconds$divmod2 = milliseconds.divmod(1e3);
            seconds = _milliseconds$divmod2.quotient;
            milliseconds = _milliseconds$divmod2.remainder;
            var _seconds$divmod2 = seconds.divmod(60);
            minutes = _seconds$divmod2.quotient;
            seconds = _seconds$divmod2.remainder;
            break;
          case "seconds":
            var _nanoseconds$divmod4 = nanoseconds.divmod(1e3);
            microseconds = _nanoseconds$divmod4.quotient;
            nanoseconds = _nanoseconds$divmod4.remainder;
            var _microseconds$divmod3 = microseconds.divmod(1e3);
            milliseconds = _microseconds$divmod3.quotient;
            microseconds = _microseconds$divmod3.remainder;
            var _milliseconds$divmod3 = milliseconds.divmod(1e3);
            seconds = _milliseconds$divmod3.quotient;
            milliseconds = _milliseconds$divmod3.remainder;
            break;
          case "milliseconds":
            var _nanoseconds$divmod5 = nanoseconds.divmod(1e3);
            microseconds = _nanoseconds$divmod5.quotient;
            nanoseconds = _nanoseconds$divmod5.remainder;
            var _microseconds$divmod4 = microseconds.divmod(1e3);
            milliseconds = _microseconds$divmod4.quotient;
            microseconds = _microseconds$divmod4.remainder;
            break;
          case "microseconds":
            var _nanoseconds$divmod6 = nanoseconds.divmod(1e3);
            microseconds = _nanoseconds$divmod6.quotient;
            nanoseconds = _nanoseconds$divmod6.remainder;
            break;
          case "nanoseconds":
            break;
          default:
            throw new Error("assert not reached");
        }
        hours = hours.toJSNumber() * sign2;
        minutes = minutes.toJSNumber() * sign2;
        seconds = seconds.toJSNumber() * sign2;
        milliseconds = milliseconds.toJSNumber() * sign2;
        microseconds = microseconds.toJSNumber() * sign2;
        nanoseconds = nanoseconds.toJSNumber() * sign2;
        return {
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      UnbalanceDurationRelative: function UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        var sign2 = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var calendar2;
        if (relativeTo) {
          relativeTo = ES.ToTemporalDateTime(relativeTo);
          calendar2 = GetSlot(relativeTo, CALENDAR);
        }
        var oneYear = new TemporalDuration(sign2);
        var oneMonth = new TemporalDuration(0, sign2);
        var oneWeek = new TemporalDuration(0, 0, sign2);
        switch (largestUnit) {
          case "years":
            break;
          case "months":
            {
              if (!calendar2)
                throw new RangeError("a starting point is required for months balancing");
              var dateAdd = ES.GetMethod(calendar2, "dateAdd");
              var dateUntil = ES.GetMethod(calendar2, "dateUntil");
              while (MathAbs(years) > 0) {
                var addOptions = ObjectCreate$2(null);
                var newRelativeTo = ES.CalendarDateAdd(calendar2, relativeTo, oneYear, addOptions, dateAdd);
                var untilOptions = ObjectCreate$2(null);
                untilOptions.largestUnit = "months";
                var oneYearMonths = ES.CalendarDateUntil(calendar2, relativeTo, newRelativeTo, untilOptions, dateUntil).months;
                relativeTo = newRelativeTo;
                months += oneYearMonths;
                years -= sign2;
              }
            }
            break;
          case "weeks":
            if (!calendar2)
              throw new RangeError("a starting point is required for weeks balancing");
            while (MathAbs(years) > 0) {
              var oneYearDays = void 0;
              var _ES$MoveRelativeDate = ES.MoveRelativeDate(calendar2, relativeTo, oneYear);
              relativeTo = _ES$MoveRelativeDate.relativeTo;
              oneYearDays = _ES$MoveRelativeDate.days;
              days += oneYearDays;
              years -= sign2;
            }
            while (MathAbs(months) > 0) {
              var oneMonthDays = void 0;
              var _ES$MoveRelativeDate2 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
              relativeTo = _ES$MoveRelativeDate2.relativeTo;
              oneMonthDays = _ES$MoveRelativeDate2.days;
              days += oneMonthDays;
              months -= sign2;
            }
            break;
          default:
            while (MathAbs(years) > 0) {
              if (!calendar2)
                throw new RangeError("a starting point is required for balancing calendar units");
              var _oneYearDays = void 0;
              var _ES$MoveRelativeDate3 = ES.MoveRelativeDate(calendar2, relativeTo, oneYear);
              relativeTo = _ES$MoveRelativeDate3.relativeTo;
              _oneYearDays = _ES$MoveRelativeDate3.days;
              days += _oneYearDays;
              years -= sign2;
            }
            while (MathAbs(months) > 0) {
              if (!calendar2)
                throw new RangeError("a starting point is required for balancing calendar units");
              var _oneMonthDays = void 0;
              var _ES$MoveRelativeDate4 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
              relativeTo = _ES$MoveRelativeDate4.relativeTo;
              _oneMonthDays = _ES$MoveRelativeDate4.days;
              days += _oneMonthDays;
              months -= sign2;
            }
            while (MathAbs(weeks) > 0) {
              if (!calendar2)
                throw new RangeError("a starting point is required for balancing calendar units");
              var oneWeekDays = void 0;
              var _ES$MoveRelativeDate5 = ES.MoveRelativeDate(calendar2, relativeTo, oneWeek);
              relativeTo = _ES$MoveRelativeDate5.relativeTo;
              oneWeekDays = _ES$MoveRelativeDate5.days;
              days += oneWeekDays;
              weeks -= sign2;
            }
            break;
        }
        return {
          years,
          months,
          weeks,
          days
        };
      },
      BalanceDurationRelative: function BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo) {
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        var sign2 = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        if (sign2 === 0)
          return {
            years,
            months,
            weeks,
            days
          };
        var calendar2;
        if (relativeTo) {
          relativeTo = ES.ToTemporalDateTime(relativeTo);
          calendar2 = GetSlot(relativeTo, CALENDAR);
        }
        var oneYear = new TemporalDuration(sign2);
        var oneMonth = new TemporalDuration(0, sign2);
        var oneWeek = new TemporalDuration(0, 0, sign2);
        switch (largestUnit) {
          case "years": {
            if (!calendar2)
              throw new RangeError("a starting point is required for years balancing");
            var newRelativeTo, oneYearDays;
            var _ES$MoveRelativeDate6 = ES.MoveRelativeDate(calendar2, relativeTo, oneYear);
            newRelativeTo = _ES$MoveRelativeDate6.relativeTo;
            oneYearDays = _ES$MoveRelativeDate6.days;
            while (MathAbs(days) >= MathAbs(oneYearDays)) {
              days -= oneYearDays;
              years += sign2;
              relativeTo = newRelativeTo;
              var _ES$MoveRelativeDate7 = ES.MoveRelativeDate(calendar2, relativeTo, oneYear);
              newRelativeTo = _ES$MoveRelativeDate7.relativeTo;
              oneYearDays = _ES$MoveRelativeDate7.days;
            }
            var oneMonthDays;
            var _ES$MoveRelativeDate8 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
            newRelativeTo = _ES$MoveRelativeDate8.relativeTo;
            oneMonthDays = _ES$MoveRelativeDate8.days;
            while (MathAbs(days) >= MathAbs(oneMonthDays)) {
              days -= oneMonthDays;
              months += sign2;
              relativeTo = newRelativeTo;
              var _ES$MoveRelativeDate9 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
              newRelativeTo = _ES$MoveRelativeDate9.relativeTo;
              oneMonthDays = _ES$MoveRelativeDate9.days;
            }
            var dateAdd = ES.GetMethod(calendar2, "dateAdd");
            var addOptions = ObjectCreate$2(null);
            newRelativeTo = ES.CalendarDateAdd(calendar2, relativeTo, oneYear, addOptions, dateAdd);
            var dateUntil = ES.GetMethod(calendar2, "dateUntil");
            var untilOptions = ObjectCreate$2(null);
            untilOptions.largestUnit = "months";
            var oneYearMonths = ES.CalendarDateUntil(calendar2, relativeTo, newRelativeTo, untilOptions, dateUntil).months;
            while (MathAbs(months) >= MathAbs(oneYearMonths)) {
              months -= oneYearMonths;
              years += sign2;
              relativeTo = newRelativeTo;
              var _addOptions = ObjectCreate$2(null);
              newRelativeTo = ES.CalendarDateAdd(calendar2, relativeTo, oneYear, _addOptions, dateAdd);
              var _untilOptions = ObjectCreate$2(null);
              _untilOptions.largestUnit = "months";
              oneYearMonths = ES.CalendarDateUntil(calendar2, relativeTo, newRelativeTo, _untilOptions, dateUntil).months;
            }
            break;
          }
          case "months": {
            if (!calendar2)
              throw new RangeError("a starting point is required for months balancing");
            var _newRelativeTo, _oneMonthDays2;
            var _ES$MoveRelativeDate10 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
            _newRelativeTo = _ES$MoveRelativeDate10.relativeTo;
            _oneMonthDays2 = _ES$MoveRelativeDate10.days;
            while (MathAbs(days) >= MathAbs(_oneMonthDays2)) {
              days -= _oneMonthDays2;
              months += sign2;
              relativeTo = _newRelativeTo;
              var _ES$MoveRelativeDate11 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
              _newRelativeTo = _ES$MoveRelativeDate11.relativeTo;
              _oneMonthDays2 = _ES$MoveRelativeDate11.days;
            }
            break;
          }
          case "weeks": {
            if (!calendar2)
              throw new RangeError("a starting point is required for weeks balancing");
            var _newRelativeTo2, oneWeekDays;
            var _ES$MoveRelativeDate12 = ES.MoveRelativeDate(calendar2, relativeTo, oneWeek);
            _newRelativeTo2 = _ES$MoveRelativeDate12.relativeTo;
            oneWeekDays = _ES$MoveRelativeDate12.days;
            while (MathAbs(days) >= MathAbs(oneWeekDays)) {
              days -= oneWeekDays;
              weeks += sign2;
              relativeTo = _newRelativeTo2;
              var _ES$MoveRelativeDate13 = ES.MoveRelativeDate(calendar2, relativeTo, oneWeek);
              _newRelativeTo2 = _ES$MoveRelativeDate13.relativeTo;
              oneWeekDays = _ES$MoveRelativeDate13.days;
            }
            break;
          }
        }
        return {
          years,
          months,
          weeks,
          days
        };
      },
      CalculateOffsetShift: function CalculateOffsetShift(relativeTo, y, mon, w, d, h, min, s, ms, \u00B5s, ns) {
        if (ES.IsTemporalZonedDateTime(relativeTo)) {
          var instant2 = GetSlot(relativeTo, INSTANT);
          var timeZone2 = GetSlot(relativeTo, TIME_ZONE);
          var calendar2 = GetSlot(relativeTo, CALENDAR);
          var offsetBefore = ES.GetOffsetNanosecondsFor(timeZone2, instant2);
          var after = ES.AddZonedDateTime(instant2, timeZone2, calendar2, y, mon, w, d, h, min, s, ms, \u00B5s, ns);
          var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
          var instantAfter = new TemporalInstant(after);
          var offsetAfter = ES.GetOffsetNanosecondsFor(timeZone2, instantAfter);
          return offsetAfter - offsetBefore;
        }
        return 0;
      },
      ConstrainToRange: function ConstrainToRange(value, min, max) {
        return MathMin(max, MathMax(min, value));
      },
      ConstrainISODate: function ConstrainISODate(year, month, day) {
        month = ES.ConstrainToRange(month, 1, 12);
        day = ES.ConstrainToRange(day, 1, ES.ISODaysInMonth(year, month));
        return {
          year,
          month,
          day
        };
      },
      ConstrainTime: function ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond) {
        hour = ES.ConstrainToRange(hour, 0, 23);
        minute = ES.ConstrainToRange(minute, 0, 59);
        second = ES.ConstrainToRange(second, 0, 59);
        millisecond = ES.ConstrainToRange(millisecond, 0, 999);
        microsecond = ES.ConstrainToRange(microsecond, 0, 999);
        nanosecond = ES.ConstrainToRange(nanosecond, 0, 999);
        return {
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      ConstrainISODateTime: function ConstrainISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        var _ES$ConstrainISODate3 = ES.ConstrainISODate(year, month, day);
        year = _ES$ConstrainISODate3.year;
        month = _ES$ConstrainISODate3.month;
        day = _ES$ConstrainISODate3.day;
        var _ES$ConstrainTime2 = ES.ConstrainTime(hour, minute, second, millisecond, microsecond, nanosecond);
        hour = _ES$ConstrainTime2.hour;
        minute = _ES$ConstrainTime2.minute;
        second = _ES$ConstrainTime2.second;
        millisecond = _ES$ConstrainTime2.millisecond;
        microsecond = _ES$ConstrainTime2.microsecond;
        nanosecond = _ES$ConstrainTime2.nanosecond;
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      RejectToRange: function RejectToRange(value, min, max) {
        if (value < min || value > max)
          throw new RangeError("value out of range: ".concat(min, " <= ").concat(value, " <= ").concat(max));
      },
      RejectISODate: function RejectISODate(year, month, day) {
        ES.RejectToRange(month, 1, 12);
        ES.RejectToRange(day, 1, ES.ISODaysInMonth(year, month));
      },
      RejectDateRange: function RejectDateRange(year, month, day) {
        ES.RejectDateTimeRange(year, month, day, 12, 0, 0, 0, 0, 0);
      },
      RejectTime: function RejectTime(hour, minute, second, millisecond, microsecond, nanosecond) {
        ES.RejectToRange(hour, 0, 23);
        ES.RejectToRange(minute, 0, 59);
        ES.RejectToRange(second, 0, 59);
        ES.RejectToRange(millisecond, 0, 999);
        ES.RejectToRange(microsecond, 0, 999);
        ES.RejectToRange(nanosecond, 0, 999);
      },
      RejectDateTime: function RejectDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        ES.RejectISODate(year, month, day);
        ES.RejectTime(hour, minute, second, millisecond, microsecond, nanosecond);
      },
      RejectDateTimeRange: function RejectDateTimeRange(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond) {
        ES.RejectToRange(year, YEAR_MIN, YEAR_MAX);
        if (year === YEAR_MIN && ES.GetEpochFromISOParts(year, month, day + 1, hour, minute, second, millisecond, microsecond, nanosecond - 1) == null || year === YEAR_MAX && ES.GetEpochFromISOParts(year, month, day - 1, hour, minute, second, millisecond, microsecond, nanosecond + 1) == null) {
          throw new RangeError("DateTime outside of supported range");
        }
      },
      RejectInstantRange: function RejectInstantRange(epochNanoseconds) {
        if (epochNanoseconds.lesser(NS_MIN) || epochNanoseconds.greater(NS_MAX)) {
          throw new RangeError("Instant outside of supported range");
        }
      },
      RejectYearMonthRange: function RejectYearMonthRange(year, month) {
        ES.RejectToRange(year, YEAR_MIN, YEAR_MAX);
        if (year === YEAR_MIN) {
          ES.RejectToRange(month, 4, 12);
        } else if (year === YEAR_MAX) {
          ES.RejectToRange(month, 1, 9);
        }
      },
      RejectDurationSign: function RejectDurationSign(y, mon, w, d, h, min, s, ms, \u00B5s, ns) {
        var sign2 = ES.DurationSign(y, mon, w, d, h, min, s, ms, \u00B5s, ns);
        for (var _i2 = 0, _arr2 = [y, mon, w, d, h, min, s, ms, \u00B5s, ns]; _i2 < _arr2.length; _i2++) {
          var prop = _arr2[_i2];
          var propSign = MathSign(prop);
          if (propSign !== 0 && propSign !== sign2)
            throw new RangeError("mixed-sign values not allowed as duration fields");
        }
      },
      RejectDuration: function RejectDuration(y, mon, w, d, h, min, s, ms, \u00B5s, ns) {
        var sign2 = ES.DurationSign(y, mon, w, d, h, min, s, ms, \u00B5s, ns);
        for (var _i3 = 0, _arr3 = [y, mon, w, d, h, min, s, ms, \u00B5s, ns]; _i3 < _arr3.length; _i3++) {
          var prop = _arr3[_i3];
          if (!NumberIsFinite(prop))
            throw new RangeError("infinite values not allowed as duration fields");
          var propSign = MathSign(prop);
          if (propSign !== 0 && propSign !== sign2)
            throw new RangeError("mixed-sign values not allowed as duration fields");
        }
      },
      DifferenceISODate: function DifferenceISODate(y1, m1, d1, y2, m2, d2) {
        var largestUnit = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : "days";
        switch (largestUnit) {
          case "years":
          case "months": {
            var sign2 = -ES.CompareISODate(y1, m1, d1, y2, m2, d2);
            if (sign2 === 0)
              return {
                years: 0,
                months: 0,
                weeks: 0,
                days: 0
              };
            var start = {
              year: y1,
              month: m1,
              day: d1
            };
            var end = {
              year: y2,
              month: m2,
              day: d2
            };
            var years = end.year - start.year;
            var mid = ES.AddISODate(y1, m1, d1, years, 0, 0, 0, "constrain");
            var midSign = -ES.CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
            if (midSign === 0) {
              return largestUnit === "years" ? {
                years,
                months: 0,
                weeks: 0,
                days: 0
              } : {
                years: 0,
                months: years * 12,
                weeks: 0,
                days: 0
              };
            }
            var months = end.month - start.month;
            if (midSign !== sign2) {
              years -= sign2;
              months += sign2 * 12;
            }
            mid = ES.AddISODate(y1, m1, d1, years, months, 0, 0, "constrain");
            midSign = -ES.CompareISODate(mid.year, mid.month, mid.day, y2, m2, d2);
            if (midSign === 0) {
              return largestUnit === "years" ? {
                years,
                months,
                weeks: 0,
                days: 0
              } : {
                years: 0,
                months: months + years * 12,
                weeks: 0,
                days: 0
              };
            }
            if (midSign !== sign2) {
              months -= sign2;
              if (months === -sign2) {
                years -= sign2;
                months = 11 * sign2;
              }
              mid = ES.AddISODate(y1, m1, d1, years, months, 0, 0, "constrain");
              midSign = -ES.CompareISODate(y1, m1, d1, mid.year, mid.month, mid.day);
            }
            var days = 0;
            if (mid.month === end.month && mid.year === end.year) {
              days = end.day - mid.day;
            } else if (sign2 < 0) {
              days = -mid.day - (ES.ISODaysInMonth(end.year, end.month) - end.day);
            } else {
              days = end.day + (ES.ISODaysInMonth(mid.year, mid.month) - mid.day);
            }
            if (largestUnit === "months") {
              months += years * 12;
              years = 0;
            }
            return {
              years,
              months,
              weeks: 0,
              days
            };
          }
          case "weeks":
          case "days": {
            var larger, smaller, _sign;
            if (ES.CompareISODate(y1, m1, d1, y2, m2, d2) < 0) {
              smaller = {
                year: y1,
                month: m1,
                day: d1
              };
              larger = {
                year: y2,
                month: m2,
                day: d2
              };
              _sign = 1;
            } else {
              smaller = {
                year: y2,
                month: m2,
                day: d2
              };
              larger = {
                year: y1,
                month: m1,
                day: d1
              };
              _sign = -1;
            }
            var _years = larger.year - smaller.year;
            var _days2 = ES.DayOfYear(larger.year, larger.month, larger.day) - ES.DayOfYear(smaller.year, smaller.month, smaller.day);
            while (_years > 0) {
              _days2 += ES.LeapYear(smaller.year + _years - 1) ? 366 : 365;
              _years -= 1;
            }
            var weeks = 0;
            if (largestUnit === "weeks") {
              weeks = MathFloor(_days2 / 7);
              _days2 %= 7;
            }
            weeks *= _sign;
            _days2 *= _sign;
            return {
              years: 0,
              months: 0,
              weeks,
              days: _days2
            };
          }
          default:
            throw new Error("assert not reached");
        }
      },
      DifferenceTime: function DifferenceTime(h1, min1, s1, ms1, \u00B5s1, ns1, h2, min2, s2, ms2, \u00B5s2, ns2) {
        var hours = h2 - h1;
        var minutes = min2 - min1;
        var seconds = s2 - s1;
        var milliseconds = ms2 - ms1;
        var microseconds = \u00B5s2 - \u00B5s1;
        var nanoseconds = ns2 - ns1;
        var sign2 = ES.DurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        hours *= sign2;
        minutes *= sign2;
        seconds *= sign2;
        milliseconds *= sign2;
        microseconds *= sign2;
        nanoseconds *= sign2;
        var deltaDays = 0;
        var _ES$BalanceTime2 = ES.BalanceTime(hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        deltaDays = _ES$BalanceTime2.deltaDays;
        hours = _ES$BalanceTime2.hour;
        minutes = _ES$BalanceTime2.minute;
        seconds = _ES$BalanceTime2.second;
        milliseconds = _ES$BalanceTime2.millisecond;
        microseconds = _ES$BalanceTime2.microsecond;
        nanoseconds = _ES$BalanceTime2.nanosecond;
        deltaDays *= sign2;
        hours *= sign2;
        minutes *= sign2;
        seconds *= sign2;
        milliseconds *= sign2;
        microseconds *= sign2;
        nanoseconds *= sign2;
        return {
          deltaDays,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      DifferenceInstant: function DifferenceInstant(ns1, ns2, increment, unit, roundingMode) {
        var diff = ns2.minus(ns1);
        var remainder = diff.mod(864e11);
        var wholeDays = diff.minus(remainder);
        var roundedRemainder = ES.RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
        var roundedDiff = wholeDays.plus(roundedRemainder);
        var nanoseconds = +roundedDiff.mod(1e3);
        var microseconds = +roundedDiff.divide(1e3).mod(1e3);
        var milliseconds = +roundedDiff.divide(1e6).mod(1e3);
        var seconds = +roundedDiff.divide(1e9);
        return {
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      DifferenceISODateTime: function DifferenceISODateTime(y1, mon1, d1, h1, min1, s1, ms1, \u00B5s1, ns1, y2, mon2, d2, h2, min2, s2, ms2, \u00B5s2, ns2, calendar2, largestUnit) {
        var options = arguments.length > 20 && arguments[20] !== void 0 ? arguments[20] : ObjectCreate$2(null);
        var _ES$DifferenceTime = ES.DifferenceTime(h1, min1, s1, ms1, \u00B5s1, ns1, h2, min2, s2, ms2, \u00B5s2, ns2), deltaDays = _ES$DifferenceTime.deltaDays, hours = _ES$DifferenceTime.hours, minutes = _ES$DifferenceTime.minutes, seconds = _ES$DifferenceTime.seconds, milliseconds = _ES$DifferenceTime.milliseconds, microseconds = _ES$DifferenceTime.microseconds, nanoseconds = _ES$DifferenceTime.nanoseconds;
        var timeSign = ES.DurationSign(0, 0, 0, deltaDays, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        var _ES$BalanceISODate2 = ES.BalanceISODate(y1, mon1, d1 + deltaDays);
        y1 = _ES$BalanceISODate2.year;
        mon1 = _ES$BalanceISODate2.month;
        d1 = _ES$BalanceISODate2.day;
        var dateSign = ES.CompareISODate(y2, mon2, d2, y1, mon1, d1);
        if (dateSign === -timeSign) {
          var _ES$BalanceISODate3 = ES.BalanceISODate(y1, mon1, d1 - timeSign);
          y1 = _ES$BalanceISODate3.year;
          mon1 = _ES$BalanceISODate3.month;
          d1 = _ES$BalanceISODate3.day;
          var _ES$BalanceDuration = ES.BalanceDuration(-timeSign, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          hours = _ES$BalanceDuration.hours;
          minutes = _ES$BalanceDuration.minutes;
          seconds = _ES$BalanceDuration.seconds;
          milliseconds = _ES$BalanceDuration.milliseconds;
          microseconds = _ES$BalanceDuration.microseconds;
          nanoseconds = _ES$BalanceDuration.nanoseconds;
        }
        var date1 = ES.CreateTemporalDate(y1, mon1, d1, calendar2);
        var date2 = ES.CreateTemporalDate(y2, mon2, d2, calendar2);
        var dateLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", largestUnit);
        var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
          largestUnit: dateLargestUnit
        });
        var _ES$CalendarDateUntil = ES.CalendarDateUntil(calendar2, date1, date2, untilOptions), years = _ES$CalendarDateUntil.years, months = _ES$CalendarDateUntil.months, weeks = _ES$CalendarDateUntil.weeks, days = _ES$CalendarDateUntil.days;
        var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
        days = _ES$BalanceDuration2.days;
        hours = _ES$BalanceDuration2.hours;
        minutes = _ES$BalanceDuration2.minutes;
        seconds = _ES$BalanceDuration2.seconds;
        milliseconds = _ES$BalanceDuration2.milliseconds;
        microseconds = _ES$BalanceDuration2.microseconds;
        nanoseconds = _ES$BalanceDuration2.nanoseconds;
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      DifferenceZonedDateTime: function DifferenceZonedDateTime(ns1, ns2, timeZone2, calendar2, largestUnit, options) {
        var nsDiff = ns2.subtract(ns1);
        if (nsDiff.isZero()) {
          return {
            years: 0,
            months: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0,
            microseconds: 0,
            nanoseconds: 0
          };
        }
        var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
        var start = new TemporalInstant(ns1);
        var end = new TemporalInstant(ns2);
        var dtStart = ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, start, calendar2);
        var dtEnd = ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, end, calendar2);
        var _ES$DifferenceISODate2 = ES.DifferenceISODateTime(GetSlot(dtStart, ISO_YEAR), GetSlot(dtStart, ISO_MONTH), GetSlot(dtStart, ISO_DAY), GetSlot(dtStart, ISO_HOUR), GetSlot(dtStart, ISO_MINUTE), GetSlot(dtStart, ISO_SECOND), GetSlot(dtStart, ISO_MILLISECOND), GetSlot(dtStart, ISO_MICROSECOND), GetSlot(dtStart, ISO_NANOSECOND), GetSlot(dtEnd, ISO_YEAR), GetSlot(dtEnd, ISO_MONTH), GetSlot(dtEnd, ISO_DAY), GetSlot(dtEnd, ISO_HOUR), GetSlot(dtEnd, ISO_MINUTE), GetSlot(dtEnd, ISO_SECOND), GetSlot(dtEnd, ISO_MILLISECOND), GetSlot(dtEnd, ISO_MICROSECOND), GetSlot(dtEnd, ISO_NANOSECOND), calendar2, largestUnit, options), years = _ES$DifferenceISODate2.years, months = _ES$DifferenceISODate2.months, weeks = _ES$DifferenceISODate2.weeks, days = _ES$DifferenceISODate2.days;
        var intermediateNs = ES.AddZonedDateTime(start, timeZone2, calendar2, years, months, weeks, 0, 0, 0, 0, 0, 0, 0);
        var timeRemainderNs = ns2.subtract(intermediateNs);
        var intermediate = ES.CreateTemporalZonedDateTime(intermediateNs, timeZone2, calendar2);
        var _ES$NanosecondsToDays2 = ES.NanosecondsToDays(timeRemainderNs, intermediate);
        timeRemainderNs = _ES$NanosecondsToDays2.nanoseconds;
        days = _ES$NanosecondsToDays2.days;
        var _ES$BalanceDuration3 = ES.BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs, "hours"), hours = _ES$BalanceDuration3.hours, minutes = _ES$BalanceDuration3.minutes, seconds = _ES$BalanceDuration3.seconds, milliseconds = _ES$BalanceDuration3.milliseconds, microseconds = _ES$BalanceDuration3.microseconds, nanoseconds = _ES$BalanceDuration3.nanoseconds;
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      AddISODate: function AddISODate(year, month, day, years, months, weeks, days, overflow) {
        year += years;
        month += months;
        var _ES$BalanceISOYearMon4 = ES.BalanceISOYearMonth(year, month);
        year = _ES$BalanceISOYearMon4.year;
        month = _ES$BalanceISOYearMon4.month;
        var _ES$RegulateISODate = ES.RegulateISODate(year, month, day, overflow);
        year = _ES$RegulateISODate.year;
        month = _ES$RegulateISODate.month;
        day = _ES$RegulateISODate.day;
        days += 7 * weeks;
        day += days;
        var _ES$BalanceISODate4 = ES.BalanceISODate(year, month, day);
        year = _ES$BalanceISODate4.year;
        month = _ES$BalanceISODate4.month;
        day = _ES$BalanceISODate4.day;
        return {
          year,
          month,
          day
        };
      },
      AddTime: function AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds) {
        hour += hours;
        minute += minutes;
        second += seconds;
        millisecond += milliseconds;
        microsecond += microseconds;
        nanosecond += nanoseconds;
        var deltaDays = 0;
        var _ES$BalanceTime3 = ES.BalanceTime(hour, minute, second, millisecond, microsecond, nanosecond);
        deltaDays = _ES$BalanceTime3.deltaDays;
        hour = _ES$BalanceTime3.hour;
        minute = _ES$BalanceTime3.minute;
        second = _ES$BalanceTime3.second;
        millisecond = _ES$BalanceTime3.millisecond;
        microsecond = _ES$BalanceTime3.microsecond;
        nanosecond = _ES$BalanceTime3.nanosecond;
        return {
          deltaDays,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      SubtractDate: function SubtractDate(year, month, day, years, months, weeks, days, overflow) {
        days += 7 * weeks;
        day -= days;
        var _ES$BalanceISODate5 = ES.BalanceISODate(year, month, day);
        year = _ES$BalanceISODate5.year;
        month = _ES$BalanceISODate5.month;
        day = _ES$BalanceISODate5.day;
        month -= months;
        year -= years;
        var _ES$BalanceISOYearMon5 = ES.BalanceISOYearMonth(year, month);
        year = _ES$BalanceISOYearMon5.year;
        month = _ES$BalanceISOYearMon5.month;
        var _ES$RegulateISODate2 = ES.RegulateISODate(year, month, day, overflow);
        year = _ES$RegulateISODate2.year;
        month = _ES$RegulateISODate2.month;
        day = _ES$RegulateISODate2.day;
        return {
          year,
          month,
          day
        };
      },
      AddDuration: function AddDuration(y1, mon1, w1, d1, h1, min1, s1, ms1, \u00B5s1, ns1, y2, mon2, w2, d2, h2, min2, s2, ms2, \u00B5s2, ns2, relativeTo) {
        var largestUnit1 = ES.DefaultTemporalLargestUnit(y1, mon1, w1, d1, h1, min1, s1, ms1, \u00B5s1, ns1);
        var largestUnit2 = ES.DefaultTemporalLargestUnit(y2, mon2, w2, d2, h2, min2, s2, ms2, \u00B5s2, ns2);
        var largestUnit = ES.LargerOfTwoTemporalDurationUnits(largestUnit1, largestUnit2);
        var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
        if (!relativeTo) {
          if (largestUnit === "years" || largestUnit === "months" || largestUnit === "weeks") {
            throw new RangeError("relativeTo is required for years, months, or weeks arithmetic");
          }
          years = months = weeks = 0;
          var _ES$BalanceDuration4 = ES.BalanceDuration(d1 + d2, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, \u00B5s1 + \u00B5s2, ns1 + ns2, largestUnit);
          days = _ES$BalanceDuration4.days;
          hours = _ES$BalanceDuration4.hours;
          minutes = _ES$BalanceDuration4.minutes;
          seconds = _ES$BalanceDuration4.seconds;
          milliseconds = _ES$BalanceDuration4.milliseconds;
          microseconds = _ES$BalanceDuration4.microseconds;
          nanoseconds = _ES$BalanceDuration4.nanoseconds;
        } else if (ES.IsTemporalDateTime(relativeTo)) {
          var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
          var calendar2 = GetSlot(relativeTo, CALENDAR);
          var datePart = ES.CreateTemporalDate(GetSlot(relativeTo, ISO_YEAR), GetSlot(relativeTo, ISO_MONTH), GetSlot(relativeTo, ISO_DAY), calendar2);
          var dateDuration1 = new TemporalDuration(y1, mon1, w1, d1, 0, 0, 0, 0, 0, 0);
          var dateDuration2 = new TemporalDuration(y2, mon2, w2, d2, 0, 0, 0, 0, 0, 0);
          var dateAdd = ES.GetMethod(calendar2, "dateAdd");
          var firstAddOptions = ObjectCreate$2(null);
          var intermediate = ES.CalendarDateAdd(calendar2, datePart, dateDuration1, firstAddOptions, dateAdd);
          var secondAddOptions = ObjectCreate$2(null);
          var end = ES.CalendarDateAdd(calendar2, intermediate, dateDuration2, secondAddOptions, dateAdd);
          var dateLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", largestUnit);
          var differenceOptions = ObjectCreate$2(null);
          differenceOptions.largestUnit = dateLargestUnit;
          var _ES$CalendarDateUntil2 = ES.CalendarDateUntil(calendar2, datePart, end, differenceOptions);
          years = _ES$CalendarDateUntil2.years;
          months = _ES$CalendarDateUntil2.months;
          weeks = _ES$CalendarDateUntil2.weeks;
          days = _ES$CalendarDateUntil2.days;
          var _ES$BalanceDuration5 = ES.BalanceDuration(days, h1 + h2, min1 + min2, s1 + s2, ms1 + ms2, \u00B5s1 + \u00B5s2, ns1 + ns2, largestUnit);
          days = _ES$BalanceDuration5.days;
          hours = _ES$BalanceDuration5.hours;
          minutes = _ES$BalanceDuration5.minutes;
          seconds = _ES$BalanceDuration5.seconds;
          milliseconds = _ES$BalanceDuration5.milliseconds;
          microseconds = _ES$BalanceDuration5.microseconds;
          nanoseconds = _ES$BalanceDuration5.nanoseconds;
        } else {
          var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
          var timeZone2 = GetSlot(relativeTo, TIME_ZONE);
          var _calendar4 = GetSlot(relativeTo, CALENDAR);
          var intermediateNs = ES.AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone2, _calendar4, y1, mon1, w1, d1, h1, min1, s1, ms1, \u00B5s1, ns1);
          var endNs = ES.AddZonedDateTime(new TemporalInstant(intermediateNs), timeZone2, _calendar4, y2, mon2, w2, d2, h2, min2, s2, ms2, \u00B5s2, ns2);
          if (largestUnit !== "years" && largestUnit !== "months" && largestUnit !== "weeks" && largestUnit !== "days") {
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            var _ES$DifferenceInstant = ES.DifferenceInstant(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, 1, "nanoseconds", "halfExpand");
            seconds = _ES$DifferenceInstant.seconds;
            milliseconds = _ES$DifferenceInstant.milliseconds;
            microseconds = _ES$DifferenceInstant.microseconds;
            nanoseconds = _ES$DifferenceInstant.nanoseconds;
            var _ES$BalanceDuration6 = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
            hours = _ES$BalanceDuration6.hours;
            minutes = _ES$BalanceDuration6.minutes;
            seconds = _ES$BalanceDuration6.seconds;
            milliseconds = _ES$BalanceDuration6.milliseconds;
            microseconds = _ES$BalanceDuration6.microseconds;
            nanoseconds = _ES$BalanceDuration6.nanoseconds;
          } else {
            var _ES$DifferenceZonedDa = ES.DifferenceZonedDateTime(GetSlot(relativeTo, EPOCHNANOSECONDS), endNs, timeZone2, _calendar4, largestUnit);
            years = _ES$DifferenceZonedDa.years;
            months = _ES$DifferenceZonedDa.months;
            weeks = _ES$DifferenceZonedDa.weeks;
            days = _ES$DifferenceZonedDa.days;
            hours = _ES$DifferenceZonedDa.hours;
            minutes = _ES$DifferenceZonedDa.minutes;
            seconds = _ES$DifferenceZonedDa.seconds;
            milliseconds = _ES$DifferenceZonedDa.milliseconds;
            microseconds = _ES$DifferenceZonedDa.microseconds;
            nanoseconds = _ES$DifferenceZonedDa.nanoseconds;
          }
        }
        ES.RejectDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      AddInstant: function AddInstant(epochNanoseconds, h, min, s, ms, \u00B5s, ns) {
        var sum = BigInteger.zero;
        sum = sum.plus(BigInteger(ns));
        sum = sum.plus(BigInteger(\u00B5s).multiply(1e3));
        sum = sum.plus(BigInteger(ms).multiply(1e6));
        sum = sum.plus(BigInteger(s).multiply(1e9));
        sum = sum.plus(BigInteger(min).multiply(60 * 1e9));
        sum = sum.plus(BigInteger(h).multiply(60 * 60 * 1e9));
        var result = BigInteger(epochNanoseconds).plus(sum);
        ES.RejectInstantRange(result);
        return result;
      },
      AddDateTime: function AddDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options) {
        var deltaDays = 0;
        var _ES$AddTime = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        deltaDays = _ES$AddTime.deltaDays;
        hour = _ES$AddTime.hour;
        minute = _ES$AddTime.minute;
        second = _ES$AddTime.second;
        millisecond = _ES$AddTime.millisecond;
        microsecond = _ES$AddTime.microsecond;
        nanosecond = _ES$AddTime.nanosecond;
        days += deltaDays;
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        var datePart = ES.CreateTemporalDate(year, month, day, calendar2);
        var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var addedDate = ES.CalendarDateAdd(calendar2, datePart, dateDuration, options);
        return {
          year: GetSlot(addedDate, ISO_YEAR),
          month: GetSlot(addedDate, ISO_MONTH),
          day: GetSlot(addedDate, ISO_DAY),
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      AddZonedDateTime: function AddZonedDateTime(instant2, timeZone2, calendar2, years, months, weeks, days, h, min, s, ms, \u00B5s, ns, options) {
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        if (ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0) === 0) {
          return ES.AddInstant(GetSlot(instant2, EPOCHNANOSECONDS), h, min, s, ms, \u00B5s, ns);
        }
        var dt = ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, instant2, calendar2);
        var datePart = ES.CreateTemporalDate(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), calendar2);
        var dateDuration = new TemporalDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var addedDate = ES.CalendarDateAdd(calendar2, datePart, dateDuration, options);
        var dtIntermediate = ES.CreateTemporalDateTime(GetSlot(addedDate, ISO_YEAR), GetSlot(addedDate, ISO_MONTH), GetSlot(addedDate, ISO_DAY), GetSlot(dt, ISO_HOUR), GetSlot(dt, ISO_MINUTE), GetSlot(dt, ISO_SECOND), GetSlot(dt, ISO_MILLISECOND), GetSlot(dt, ISO_MICROSECOND), GetSlot(dt, ISO_NANOSECOND), calendar2);
        var instantIntermediate = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dtIntermediate, "compatible");
        return ES.AddInstant(GetSlot(instantIntermediate, EPOCHNANOSECONDS), h, min, s, ms, \u00B5s, ns);
      },
      RoundNumberToIncrement: function RoundNumberToIncrement(quantity, increment, mode) {
        if (increment === 1)
          return quantity;
        var _quantity$divmod = quantity.divmod(increment), quotient = _quantity$divmod.quotient, remainder = _quantity$divmod.remainder;
        if (remainder.equals(BigInteger.zero))
          return quantity;
        var sign2 = remainder.lt(BigInteger.zero) ? -1 : 1;
        switch (mode) {
          case "ceil":
            if (sign2 > 0)
              quotient = quotient.add(sign2);
            break;
          case "floor":
            if (sign2 < 0)
              quotient = quotient.add(sign2);
            break;
          case "trunc":
            break;
          case "halfExpand":
            if (remainder.multiply(2).abs() >= increment)
              quotient = quotient.add(sign2);
            break;
        }
        return quotient.multiply(increment);
      },
      RoundInstant: function RoundInstant(epochNs, increment, unit, roundingMode) {
        var remainder = epochNs.mod(864e11);
        if (remainder.lesser(0))
          remainder = remainder.plus(864e11);
        var wholeDays = epochNs.minus(remainder);
        var roundedRemainder = ES.RoundNumberToIncrement(remainder, nsPerTimeUnit[unit] * increment, roundingMode);
        return wholeDays.plus(roundedRemainder);
      },
      RoundISODateTime: function RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
        var dayLengthNs = arguments.length > 12 && arguments[12] !== void 0 ? arguments[12] : 864e11;
        var deltaDays = 0;
        var _ES$RoundTime = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode, dayLengthNs);
        deltaDays = _ES$RoundTime.deltaDays;
        hour = _ES$RoundTime.hour;
        minute = _ES$RoundTime.minute;
        second = _ES$RoundTime.second;
        millisecond = _ES$RoundTime.millisecond;
        microsecond = _ES$RoundTime.microsecond;
        nanosecond = _ES$RoundTime.nanosecond;
        var _ES$BalanceISODate6 = ES.BalanceISODate(year, month, day + deltaDays);
        year = _ES$BalanceISODate6.year;
        month = _ES$BalanceISODate6.month;
        day = _ES$BalanceISODate6.day;
        return {
          year,
          month,
          day,
          hour,
          minute,
          second,
          millisecond,
          microsecond,
          nanosecond
        };
      },
      RoundTime: function RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode) {
        var dayLengthNs = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 864e11;
        var quantity = BigInteger.zero;
        switch (unit) {
          case "day":
          case "hour":
            quantity = BigInteger(hour);
          case "minute":
            quantity = quantity.multiply(60).plus(minute);
          case "second":
            quantity = quantity.multiply(60).plus(second);
          case "millisecond":
            quantity = quantity.multiply(1e3).plus(millisecond);
          case "microsecond":
            quantity = quantity.multiply(1e3).plus(microsecond);
          case "nanosecond":
            quantity = quantity.multiply(1e3).plus(nanosecond);
        }
        var nsPerUnit = unit === "day" ? dayLengthNs : nsPerTimeUnit[unit];
        var rounded = ES.RoundNumberToIncrement(quantity, nsPerUnit * increment, roundingMode);
        var result = rounded.divide(nsPerUnit).toJSNumber();
        switch (unit) {
          case "day":
            return {
              deltaDays: result,
              hour: 0,
              minute: 0,
              second: 0,
              millisecond: 0,
              microsecond: 0,
              nanosecond: 0
            };
          case "hour":
            return ES.BalanceTime(result, 0, 0, 0, 0, 0);
          case "minute":
            return ES.BalanceTime(hour, result, 0, 0, 0, 0);
          case "second":
            return ES.BalanceTime(hour, minute, result, 0, 0, 0);
          case "millisecond":
            return ES.BalanceTime(hour, minute, second, result, 0, 0);
          case "microsecond":
            return ES.BalanceTime(hour, minute, second, millisecond, result, 0);
          case "nanosecond":
            return ES.BalanceTime(hour, minute, second, millisecond, microsecond, result);
        }
      },
      DaysUntil: function DaysUntil(earlier, later) {
        return ES.DifferenceISODate(GetSlot(earlier, ISO_YEAR), GetSlot(earlier, ISO_MONTH), GetSlot(earlier, ISO_DAY), GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), "days").days;
      },
      MoveRelativeDate: function MoveRelativeDate(calendar2, relativeTo, duration2) {
        var options = ObjectCreate$2(null);
        var later = ES.CalendarDateAdd(calendar2, relativeTo, duration2, options);
        var days = ES.DaysUntil(relativeTo, later);
        relativeTo = ES.CreateTemporalDateTime(GetSlot(later, ISO_YEAR), GetSlot(later, ISO_MONTH), GetSlot(later, ISO_DAY), GetSlot(relativeTo, ISO_HOUR), GetSlot(relativeTo, ISO_MINUTE), GetSlot(relativeTo, ISO_SECOND), GetSlot(relativeTo, ISO_MILLISECOND), GetSlot(relativeTo, ISO_MICROSECOND), GetSlot(relativeTo, ISO_NANOSECOND), GetSlot(relativeTo, CALENDAR));
        return {
          relativeTo,
          days
        };
      },
      MoveRelativeZonedDateTime: function MoveRelativeZonedDateTime(relativeTo, years, months, weeks, days) {
        var timeZone2 = GetSlot(relativeTo, TIME_ZONE);
        var calendar2 = GetSlot(relativeTo, CALENDAR);
        var intermediateNs = ES.AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone2, calendar2, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        return ES.CreateTemporalZonedDateTime(intermediateNs, timeZone2, calendar2);
      },
      AdjustRoundedDurationDays: function AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, increment, unit, roundingMode, relativeTo) {
        if (!ES.IsTemporalZonedDateTime(relativeTo) || unit === "years" || unit === "months" || unit === "weeks" || unit === "days" || unit === "nanoseconds" && increment === 1) {
          return {
            years,
            months,
            weeks,
            days,
            hours,
            minutes,
            seconds,
            milliseconds,
            microseconds,
            nanoseconds
          };
        }
        var timeRemainderNs = ES.TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
        var direction = MathSign(timeRemainderNs.toJSNumber());
        var timeZone2 = GetSlot(relativeTo, TIME_ZONE);
        var calendar2 = GetSlot(relativeTo, CALENDAR);
        var dayStart = ES.AddZonedDateTime(GetSlot(relativeTo, INSTANT), timeZone2, calendar2, years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
        var dayEnd = ES.AddZonedDateTime(new TemporalInstant(dayStart), timeZone2, calendar2, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0);
        var dayLengthNs = dayEnd.subtract(dayStart);
        if (timeRemainderNs.subtract(dayLengthNs).multiply(direction).geq(0)) {
          var _ES$AddDuration = ES.AddDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, 0, 0, 0, direction, 0, 0, 0, 0, 0, 0, relativeTo);
          years = _ES$AddDuration.years;
          months = _ES$AddDuration.months;
          weeks = _ES$AddDuration.weeks;
          days = _ES$AddDuration.days;
          timeRemainderNs = ES.RoundInstant(timeRemainderNs.subtract(dayLengthNs), increment, unit, roundingMode);
          var _ES$BalanceDuration7 = ES.BalanceDuration(0, 0, 0, 0, 0, 0, timeRemainderNs.toJSNumber(), "hours");
          hours = _ES$BalanceDuration7.hours;
          minutes = _ES$BalanceDuration7.minutes;
          seconds = _ES$BalanceDuration7.seconds;
          milliseconds = _ES$BalanceDuration7.milliseconds;
          microseconds = _ES$BalanceDuration7.microseconds;
          nanoseconds = _ES$BalanceDuration7.nanoseconds;
        }
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        };
      },
      RoundDuration: function RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, increment, unit, roundingMode) {
        var relativeTo = arguments.length > 13 && arguments[13] !== void 0 ? arguments[13] : void 0;
        var TemporalDuration = GetIntrinsic("%Temporal.Duration%");
        var calendar2, zdtRelative;
        if (relativeTo) {
          if (ES.IsTemporalZonedDateTime(relativeTo)) {
            zdtRelative = relativeTo;
            relativeTo = ES.BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(relativeTo, TIME_ZONE), GetSlot(relativeTo, INSTANT), GetSlot(relativeTo, CALENDAR));
          } else if (!ES.IsTemporalDateTime(relativeTo)) {
            throw new TypeError("starting point must be PlainDateTime or ZonedDateTime");
          }
          calendar2 = GetSlot(relativeTo, CALENDAR);
        }
        var dayLengthNs;
        if (unit === "years" || unit === "months" || unit === "weeks" || unit === "days") {
          nanoseconds = ES.TotalDurationNanoseconds(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 0);
          var intermediate;
          if (zdtRelative) {
            intermediate = ES.MoveRelativeZonedDateTime(zdtRelative, years, months, weeks, days);
          }
          var deltaDays;
          var _ES$NanosecondsToDays3 = ES.NanosecondsToDays(nanoseconds, intermediate);
          deltaDays = _ES$NanosecondsToDays3.days;
          nanoseconds = _ES$NanosecondsToDays3.nanoseconds;
          dayLengthNs = _ES$NanosecondsToDays3.dayLengthNs;
          dayLengthNs = MathAbs(dayLengthNs);
          days += deltaDays;
          hours = minutes = seconds = milliseconds = microseconds = 0;
        }
        var total;
        switch (unit) {
          case "years": {
            if (!calendar2)
              throw new RangeError("A starting point is required for years rounding");
            var yearsDuration = new TemporalDuration(years);
            var dateAdd = ES.GetMethod(calendar2, "dateAdd");
            var firstAddOptions = ObjectCreate$2(null);
            var yearsLater = ES.CalendarDateAdd(calendar2, relativeTo, yearsDuration, firstAddOptions, dateAdd);
            var yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
            var secondAddOptions = ObjectCreate$2(null);
            var yearsMonthsWeeksLater = ES.CalendarDateAdd(calendar2, relativeTo, yearsMonthsWeeks, secondAddOptions, dateAdd);
            var monthsWeeksInDays = ES.DaysUntil(yearsLater, yearsMonthsWeeksLater);
            relativeTo = yearsLater;
            days += monthsWeeksInDays;
            var thirdAddOptions = ObjectCreate$2(null);
            var daysLater = ES.CalendarDateAdd(calendar2, relativeTo, {
              days
            }, thirdAddOptions, dateAdd);
            var untilOptions = ObjectCreate$2(null);
            untilOptions.largestUnit = "years";
            var yearsPassed = ES.CalendarDateUntil(calendar2, relativeTo, daysLater, untilOptions).years;
            years += yearsPassed;
            var oldRelativeTo = relativeTo;
            var fourthAddOptions = ObjectCreate$2(null);
            relativeTo = ES.CalendarDateAdd(calendar2, relativeTo, {
              years: yearsPassed
            }, fourthAddOptions, dateAdd);
            var daysPassed = ES.DaysUntil(oldRelativeTo, relativeTo);
            days -= daysPassed;
            var oneYear = new TemporalDuration(days < 0 ? -1 : 1);
            var _ES$MoveRelativeDate14 = ES.MoveRelativeDate(calendar2, relativeTo, oneYear), oneYearDays = _ES$MoveRelativeDate14.days;
            oneYearDays = MathAbs(oneYearDays);
            var divisor = BigInteger(oneYearDays).multiply(dayLengthNs);
            nanoseconds = divisor.multiply(years).plus(BigInteger(days).multiply(dayLengthNs)).plus(nanoseconds);
            var rounded = ES.RoundNumberToIncrement(nanoseconds, divisor * increment, roundingMode);
            total = nanoseconds.toJSNumber() / divisor;
            years = rounded.divide(divisor).toJSNumber();
            nanoseconds = months = weeks = days = 0;
            break;
          }
          case "months": {
            if (!calendar2)
              throw new RangeError("A starting point is required for months rounding");
            var yearsMonths = new TemporalDuration(years, months);
            var _dateAdd = ES.GetMethod(calendar2, "dateAdd");
            var _firstAddOptions = ObjectCreate$2(null);
            var yearsMonthsLater = ES.CalendarDateAdd(calendar2, relativeTo, yearsMonths, _firstAddOptions, _dateAdd);
            var _yearsMonthsWeeks = new TemporalDuration(years, months, weeks);
            var _secondAddOptions = ObjectCreate$2(null);
            var _yearsMonthsWeeksLater = ES.CalendarDateAdd(calendar2, relativeTo, _yearsMonthsWeeks, _secondAddOptions, _dateAdd);
            var weeksInDays = ES.DaysUntil(yearsMonthsLater, _yearsMonthsWeeksLater);
            relativeTo = yearsMonthsLater;
            days += weeksInDays;
            var sign2 = MathSign(days);
            var oneMonth = new TemporalDuration(0, days < 0 ? -1 : 1);
            var oneMonthDays;
            var _ES$MoveRelativeDate15 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
            relativeTo = _ES$MoveRelativeDate15.relativeTo;
            oneMonthDays = _ES$MoveRelativeDate15.days;
            while (MathAbs(days) >= MathAbs(oneMonthDays)) {
              months += sign2;
              days -= oneMonthDays;
              var _ES$MoveRelativeDate16 = ES.MoveRelativeDate(calendar2, relativeTo, oneMonth);
              relativeTo = _ES$MoveRelativeDate16.relativeTo;
              oneMonthDays = _ES$MoveRelativeDate16.days;
            }
            oneMonthDays = MathAbs(oneMonthDays);
            var _divisor = BigInteger(oneMonthDays).multiply(dayLengthNs);
            nanoseconds = _divisor.multiply(months).plus(BigInteger(days).multiply(dayLengthNs)).plus(nanoseconds);
            var _rounded = ES.RoundNumberToIncrement(nanoseconds, _divisor * increment, roundingMode);
            total = nanoseconds.toJSNumber() / _divisor;
            months = _rounded.divide(_divisor).toJSNumber();
            nanoseconds = weeks = days = 0;
            break;
          }
          case "weeks": {
            if (!calendar2)
              throw new RangeError("A starting point is required for weeks rounding");
            var _sign2 = MathSign(days);
            var oneWeek = new TemporalDuration(0, 0, days < 0 ? -1 : 1);
            var oneWeekDays;
            var _ES$MoveRelativeDate17 = ES.MoveRelativeDate(calendar2, relativeTo, oneWeek);
            relativeTo = _ES$MoveRelativeDate17.relativeTo;
            oneWeekDays = _ES$MoveRelativeDate17.days;
            while (MathAbs(days) >= MathAbs(oneWeekDays)) {
              weeks += _sign2;
              days -= oneWeekDays;
              var _ES$MoveRelativeDate18 = ES.MoveRelativeDate(calendar2, relativeTo, oneWeek);
              relativeTo = _ES$MoveRelativeDate18.relativeTo;
              oneWeekDays = _ES$MoveRelativeDate18.days;
            }
            oneWeekDays = MathAbs(oneWeekDays);
            var _divisor2 = BigInteger(oneWeekDays).multiply(dayLengthNs);
            nanoseconds = _divisor2.multiply(weeks).plus(BigInteger(days).multiply(dayLengthNs)).plus(nanoseconds);
            var _rounded2 = ES.RoundNumberToIncrement(nanoseconds, _divisor2 * increment, roundingMode);
            total = nanoseconds.toJSNumber() / _divisor2;
            weeks = _rounded2.divide(_divisor2).toJSNumber();
            nanoseconds = days = 0;
            break;
          }
          case "days": {
            var _divisor3 = BigInteger(dayLengthNs);
            nanoseconds = _divisor3.multiply(days).plus(nanoseconds);
            var _rounded3 = ES.RoundNumberToIncrement(nanoseconds, _divisor3 * increment, roundingMode);
            total = nanoseconds.toJSNumber() / _divisor3;
            days = _rounded3.divide(_divisor3).toJSNumber();
            nanoseconds = 0;
            break;
          }
          case "hours": {
            var _divisor4 = 36e11;
            nanoseconds = BigInteger(hours).multiply(36e11).plus(BigInteger(minutes).multiply(6e10)).plus(BigInteger(seconds).multiply(1e9)).plus(BigInteger(milliseconds).multiply(1e6)).plus(BigInteger(microseconds).multiply(1e3)).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / _divisor4;
            var _rounded4 = ES.RoundNumberToIncrement(nanoseconds, _divisor4 * increment, roundingMode);
            hours = _rounded4.divide(_divisor4).toJSNumber();
            minutes = seconds = milliseconds = microseconds = nanoseconds = 0;
            break;
          }
          case "minutes": {
            var _divisor5 = 6e10;
            nanoseconds = BigInteger(minutes).multiply(6e10).plus(BigInteger(seconds).multiply(1e9)).plus(BigInteger(milliseconds).multiply(1e6)).plus(BigInteger(microseconds).multiply(1e3)).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / _divisor5;
            var _rounded5 = ES.RoundNumberToIncrement(nanoseconds, _divisor5 * increment, roundingMode);
            minutes = _rounded5.divide(_divisor5).toJSNumber();
            seconds = milliseconds = microseconds = nanoseconds = 0;
            break;
          }
          case "seconds": {
            var _divisor6 = 1e9;
            nanoseconds = BigInteger(seconds).multiply(1e9).plus(BigInteger(milliseconds).multiply(1e6)).plus(BigInteger(microseconds).multiply(1e3)).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / _divisor6;
            var _rounded6 = ES.RoundNumberToIncrement(nanoseconds, _divisor6 * increment, roundingMode);
            seconds = _rounded6.divide(_divisor6).toJSNumber();
            milliseconds = microseconds = nanoseconds = 0;
            break;
          }
          case "milliseconds": {
            var _divisor7 = 1e6;
            nanoseconds = BigInteger(milliseconds).multiply(1e6).plus(BigInteger(microseconds).multiply(1e3)).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / _divisor7;
            var _rounded7 = ES.RoundNumberToIncrement(nanoseconds, _divisor7 * increment, roundingMode);
            milliseconds = _rounded7.divide(_divisor7).toJSNumber();
            microseconds = nanoseconds = 0;
            break;
          }
          case "microseconds": {
            var _divisor8 = 1e3;
            nanoseconds = BigInteger(microseconds).multiply(1e3).plus(nanoseconds);
            total = nanoseconds.toJSNumber() / _divisor8;
            var _rounded8 = ES.RoundNumberToIncrement(nanoseconds, _divisor8 * increment, roundingMode);
            microseconds = _rounded8.divide(_divisor8).toJSNumber();
            nanoseconds = 0;
            break;
          }
          case "nanoseconds": {
            total = nanoseconds;
            nanoseconds = ES.RoundNumberToIncrement(BigInteger(nanoseconds), increment, roundingMode);
            break;
          }
        }
        return {
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds,
          total
        };
      },
      CompareISODate: function CompareISODate(y1, m1, d1, y2, m2, d2) {
        for (var _i4 = 0, _arr4 = [[y1, y2], [m1, m2], [d1, d2]]; _i4 < _arr4.length; _i4++) {
          var _arr4$_i = _slicedToArray(_arr4[_i4], 2), x = _arr4$_i[0], y = _arr4$_i[1];
          if (x !== y)
            return ES.ComparisonResult(x - y);
        }
        return 0;
      },
      AssertPositiveInteger: function AssertPositiveInteger(num) {
        if (!NumberIsFinite(num) || MathAbs(num) !== num)
          throw new RangeError("invalid positive integer: ".concat(num));
        return num;
      },
      NonNegativeModulo: function NonNegativeModulo(x, y) {
        var result = x % y;
        if (ObjectIs(result, -0))
          return 0;
        if (result < 0)
          result += y;
        return result;
      },
      ToBigInt: function ToBigInt(arg) {
        if (BigInteger.isInstance(arg)) {
          return arg;
        }
        var prim = ES.ToPrimitive(arg, Number);
        switch (_typeof(prim)) {
          case "undefined":
          case "object":
          case "number":
          case "symbol":
            throw new TypeError("cannot convert ".concat(_typeof(arg), " to bigint"));
          case "string":
            if (!prim.match(/^\s*(?:[+-]?\d+\s*)?$/)) {
              throw new SyntaxError("invalid BigInt syntax");
            }
          case "bigint":
            try {
              return BigInteger(prim);
            } catch (e) {
              if (e instanceof Error && e.message.startsWith("Invalid integer"))
                throw new SyntaxError(e.message);
              throw e;
            }
          case "boolean":
            if (prim) {
              return BigInteger(1);
            } else {
              return BigInteger.zero;
            }
        }
      },
      SystemUTCEpochNanoSeconds: function() {
        var ns = Date.now() % 1e6;
        return function() {
          var ms = Date.now();
          var result = BigInteger(ms).multiply(1e6).plus(ns);
          ns = ms % 1e6;
          return BigInteger.min(NS_MAX, BigInteger.max(NS_MIN, result));
        };
      }(),
      SystemTimeZone: function SystemTimeZone() {
        var fmt = new IntlDateTimeFormat$1("en-us");
        var TemporalTimeZone = GetIntrinsic("%Temporal.TimeZone%");
        return new TemporalTimeZone(ES.TemporalTimeZoneFromString(fmt.resolvedOptions().timeZone));
      },
      ComparisonResult: function ComparisonResult(value) {
        return value < 0 ? -1 : value > 0 ? 1 : value;
      },
      GetOptionsObject: function GetOptionsObject(options) {
        if (options === void 0)
          return ObjectCreate$2(null);
        if (ES.Type(options) === "Object")
          return options;
        throw new TypeError("Options parameter must be an object, not ".concat(options === null ? "null" : "a ".concat(_typeof(options))));
      },
      GetOption: function GetOption(options, property, allowedValues, fallback) {
        var value = options[property];
        if (value !== void 0) {
          value = ES.ToString(value);
          if (!allowedValues.includes(value)) {
            throw new RangeError("".concat(property, " must be one of ").concat(allowedValues.join(", "), ", not ").concat(value));
          }
          return value;
        }
        return fallback;
      },
      GetNumberOption: function GetNumberOption(options, property, minimum, maximum, fallback) {
        var value = options[property];
        if (value === void 0)
          return fallback;
        value = ES.ToNumber(value);
        if (NumberIsNaN(value) || value < minimum || value > maximum) {
          throw new RangeError("".concat(property, " must be between ").concat(minimum, " and ").concat(maximum, ", not ").concat(value));
        }
        return MathFloor(value);
      }
    });
    var OFFSET = new RegExp("^".concat(offset.source, "$"));
    function bisect(getState, left, right) {
      var lstate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : getState(left);
      var rstate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : getState(right);
      left = BigInteger(left);
      right = BigInteger(right);
      while (right.minus(left).greater(1)) {
        var middle = left.plus(right).divide(2);
        var mstate = getState(middle);
        if (mstate === lstate) {
          left = middle;
          lstate = mstate;
        } else if (mstate === rstate) {
          right = middle;
          rstate = mstate;
        } else {
          throw new Error("invalid state in bisection ".concat(lstate, " - ").concat(mstate, " - ").concat(rstate));
        }
      }
      return right;
    }
    var nsPerTimeUnit = {
      hour: 36e11,
      hours: 36e11,
      minute: 6e10,
      minutes: 6e10,
      second: 1e9,
      seconds: 1e9,
      millisecond: 1e6,
      milliseconds: 1e6,
      microsecond: 1e3,
      microseconds: 1e3,
      nanosecond: 1,
      nanoseconds: 1
    };
    var TimeZone = /* @__PURE__ */ function() {
      function TimeZone2(timeZoneIdentifier) {
        _classCallCheck(this, TimeZone2);
        if (arguments.length < 1) {
          throw new RangeError("missing argument: identifier is required");
        }
        timeZoneIdentifier = ES.GetCanonicalTimeZoneIdentifier(timeZoneIdentifier);
        CreateSlots(this);
        SetSlot(this, TIMEZONE_ID, timeZoneIdentifier);
        {
          Object.defineProperty(this, "_repr_", {
            value: "".concat(this[Symbol.toStringTag], " <").concat(timeZoneIdentifier, ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
      _createClass(TimeZone2, [{
        key: "id",
        get: function get() {
          return ES.ToString(this);
        }
      }, {
        key: "getOffsetNanosecondsFor",
        value: function getOffsetNanosecondsFor(instant2) {
          if (!ES.IsTemporalTimeZone(this))
            throw new TypeError("invalid receiver");
          instant2 = ES.ToTemporalInstant(instant2);
          var id = GetSlot(this, TIMEZONE_ID);
          var offsetNs = ES.ParseOffsetString(id);
          if (offsetNs !== null)
            return offsetNs;
          return ES.GetIANATimeZoneOffsetNanoseconds(GetSlot(instant2, EPOCHNANOSECONDS), id);
        }
      }, {
        key: "getOffsetStringFor",
        value: function getOffsetStringFor(instant2) {
          instant2 = ES.ToTemporalInstant(instant2);
          return ES.BuiltinTimeZoneGetOffsetStringFor(this, instant2);
        }
      }, {
        key: "getPlainDateTimeFor",
        value: function getPlainDateTimeFor(instant2) {
          var calendar2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ES.GetISO8601Calendar();
          instant2 = ES.ToTemporalInstant(instant2);
          calendar2 = ES.ToTemporalCalendar(calendar2);
          return ES.BuiltinTimeZoneGetPlainDateTimeFor(this, instant2, calendar2);
        }
      }, {
        key: "getInstantFor",
        value: function getInstantFor(dateTime2) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          dateTime2 = ES.ToTemporalDateTime(dateTime2);
          options = ES.GetOptionsObject(options);
          var disambiguation = ES.ToTemporalDisambiguation(options);
          return ES.BuiltinTimeZoneGetInstantFor(this, dateTime2, disambiguation);
        }
      }, {
        key: "getPossibleInstantsFor",
        value: function getPossibleInstantsFor(dateTime2) {
          if (!ES.IsTemporalTimeZone(this))
            throw new TypeError("invalid receiver");
          dateTime2 = ES.ToTemporalDateTime(dateTime2);
          var Instant2 = GetIntrinsic("%Temporal.Instant%");
          var id = GetSlot(this, TIMEZONE_ID);
          var offsetNs = ES.ParseOffsetString(id);
          if (offsetNs !== null) {
            var epochNs = ES.GetEpochFromISOParts(GetSlot(dateTime2, ISO_YEAR), GetSlot(dateTime2, ISO_MONTH), GetSlot(dateTime2, ISO_DAY), GetSlot(dateTime2, ISO_HOUR), GetSlot(dateTime2, ISO_MINUTE), GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND));
            if (epochNs === null)
              throw new RangeError("DateTime outside of supported range");
            return [new Instant2(epochNs.minus(offsetNs))];
          }
          var possibleEpochNs = ES.GetIANATimeZoneEpochValue(id, GetSlot(dateTime2, ISO_YEAR), GetSlot(dateTime2, ISO_MONTH), GetSlot(dateTime2, ISO_DAY), GetSlot(dateTime2, ISO_HOUR), GetSlot(dateTime2, ISO_MINUTE), GetSlot(dateTime2, ISO_SECOND), GetSlot(dateTime2, ISO_MILLISECOND), GetSlot(dateTime2, ISO_MICROSECOND), GetSlot(dateTime2, ISO_NANOSECOND));
          return possibleEpochNs.map(function(ns) {
            return new Instant2(ns);
          });
        }
      }, {
        key: "getNextTransition",
        value: function getNextTransition(startingPoint) {
          if (!ES.IsTemporalTimeZone(this))
            throw new TypeError("invalid receiver");
          startingPoint = ES.ToTemporalInstant(startingPoint);
          var id = GetSlot(this, TIMEZONE_ID);
          if (ES.ParseOffsetString(id) !== null || id === "UTC") {
            return null;
          }
          var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
          var Instant2 = GetIntrinsic("%Temporal.Instant%");
          epochNanoseconds = ES.GetIANATimeZoneNextTransition(epochNanoseconds, id);
          return epochNanoseconds === null ? null : new Instant2(epochNanoseconds);
        }
      }, {
        key: "getPreviousTransition",
        value: function getPreviousTransition(startingPoint) {
          if (!ES.IsTemporalTimeZone(this))
            throw new TypeError("invalid receiver");
          startingPoint = ES.ToTemporalInstant(startingPoint);
          var id = GetSlot(this, TIMEZONE_ID);
          if (ES.ParseOffsetString(id) !== null || id === "UTC") {
            return null;
          }
          var epochNanoseconds = GetSlot(startingPoint, EPOCHNANOSECONDS);
          var Instant2 = GetIntrinsic("%Temporal.Instant%");
          epochNanoseconds = ES.GetIANATimeZonePreviousTransition(epochNanoseconds, id);
          return epochNanoseconds === null ? null : new Instant2(epochNanoseconds);
        }
      }, {
        key: "toString",
        value: function toString() {
          if (!ES.IsTemporalTimeZone(this))
            throw new TypeError("invalid receiver");
          return String(GetSlot(this, TIMEZONE_ID));
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          return ES.ToString(this);
        }
      }], [{
        key: "from",
        value: function from(item) {
          return ES.ToTemporalTimeZone(item);
        }
      }]);
      return TimeZone2;
    }();
    MakeIntrinsicClass(TimeZone, "Temporal.TimeZone");
    DefineIntrinsic("Temporal.TimeZone.prototype.getOffsetNanosecondsFor", TimeZone.prototype.getOffsetNanosecondsFor);
    var DATE = Symbol("date");
    var YM = Symbol("ym");
    var MD = Symbol("md");
    var TIME = Symbol("time");
    var DATETIME = Symbol("datetime");
    var ZONED = Symbol("zoneddatetime");
    var INST = Symbol("instant");
    var ORIGINAL = Symbol("original");
    var TZ_RESOLVED = Symbol("timezone");
    var TZ_GIVEN = Symbol("timezone-id-given");
    var CAL_ID = Symbol("calendar-id");
    var descriptor = function descriptor2(value) {
      return {
        value,
        enumerable: true,
        writable: false,
        configurable: true
      };
    };
    var IntlDateTimeFormat = globalThis.Intl.DateTimeFormat;
    var ObjectAssign$1 = Object.assign;
    function DateTimeFormat() {
      var locale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : IntlDateTimeFormat().resolvedOptions().locale;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (!(this instanceof DateTimeFormat))
        return new DateTimeFormat(locale, options);
      this[TZ_GIVEN] = options.timeZone ? options.timeZone : null;
      this[ORIGINAL] = new IntlDateTimeFormat(locale, options);
      this[TZ_RESOLVED] = new TimeZone(this.resolvedOptions().timeZone);
      this[CAL_ID] = this.resolvedOptions().calendar;
      this[DATE] = new IntlDateTimeFormat(locale, dateAmend(options));
      this[YM] = new IntlDateTimeFormat(locale, yearMonthAmend(options));
      this[MD] = new IntlDateTimeFormat(locale, monthDayAmend(options));
      this[TIME] = new IntlDateTimeFormat(locale, timeAmend(options));
      this[DATETIME] = new IntlDateTimeFormat(locale, datetimeAmend(options));
      this[ZONED] = new IntlDateTimeFormat(locale, zonedDateTimeAmend(options));
      this[INST] = new IntlDateTimeFormat(locale, instantAmend(options));
    }
    DateTimeFormat.supportedLocalesOf = function() {
      return IntlDateTimeFormat.supportedLocalesOf.apply(IntlDateTimeFormat, arguments);
    };
    var properties = {
      resolvedOptions: descriptor(resolvedOptions),
      format: descriptor(format),
      formatRange: descriptor(formatRange)
    };
    if ("formatToParts" in IntlDateTimeFormat.prototype) {
      properties.formatToParts = descriptor(formatToParts);
    }
    if ("formatRangeToParts" in IntlDateTimeFormat.prototype) {
      properties.formatRangeToParts = descriptor(formatRangeToParts);
    }
    DateTimeFormat.prototype = Object.create(IntlDateTimeFormat.prototype, properties);
    function resolvedOptions() {
      return this[ORIGINAL].resolvedOptions();
    }
    function adjustFormatterTimeZone(formatter, timeZone2) {
      if (!timeZone2)
        return formatter;
      var options = formatter.resolvedOptions();
      return new IntlDateTimeFormat(options.locale, _objectSpread2(_objectSpread2({}, options), {}, {
        timeZone: timeZone2
      }));
    }
    function format(datetime2) {
      var _this$ORIGINAL;
      var _extractOverrides = extractOverrides(datetime2, this), instant2 = _extractOverrides.instant, formatter = _extractOverrides.formatter, timeZone2 = _extractOverrides.timeZone;
      if (instant2 && formatter) {
        formatter = adjustFormatterTimeZone(formatter, timeZone2);
        return formatter.format(instant2.epochMilliseconds);
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      return (_this$ORIGINAL = this[ORIGINAL]).format.apply(_this$ORIGINAL, [datetime2].concat(rest));
    }
    function formatToParts(datetime2) {
      var _this$ORIGINAL2;
      var _extractOverrides2 = extractOverrides(datetime2, this), instant2 = _extractOverrides2.instant, formatter = _extractOverrides2.formatter, timeZone2 = _extractOverrides2.timeZone;
      if (instant2 && formatter) {
        formatter = adjustFormatterTimeZone(formatter, timeZone2);
        return formatter.formatToParts(instant2.epochMilliseconds);
      }
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      return (_this$ORIGINAL2 = this[ORIGINAL]).formatToParts.apply(_this$ORIGINAL2, [datetime2].concat(rest));
    }
    function formatRange(a, b) {
      if (isTemporalObject(a) || isTemporalObject(b)) {
        if (!sameTemporalType(a, b)) {
          throw new TypeError("Intl.DateTimeFormat.formatRange accepts two values of the same type");
        }
        var _extractOverrides3 = extractOverrides(a, this), aa = _extractOverrides3.instant, aformatter = _extractOverrides3.formatter, atz = _extractOverrides3.timeZone;
        var _extractOverrides4 = extractOverrides(b, this), bb = _extractOverrides4.instant, bformatter = _extractOverrides4.formatter, btz = _extractOverrides4.timeZone;
        if (atz && btz && atz !== btz) {
          throw new RangeError("cannot format range between different time zones");
        }
        if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
          var formatter = adjustFormatterTimeZone(aformatter, atz);
          return formatter.formatRange(aa.epochMilliseconds, bb.epochMilliseconds);
        }
      }
      return this[ORIGINAL].formatRange(a, b);
    }
    function formatRangeToParts(a, b) {
      if (isTemporalObject(a) || isTemporalObject(b)) {
        if (!sameTemporalType(a, b)) {
          throw new TypeError("Intl.DateTimeFormat.formatRangeToParts accepts two values of the same type");
        }
        var _extractOverrides5 = extractOverrides(a, this), aa = _extractOverrides5.instant, aformatter = _extractOverrides5.formatter, atz = _extractOverrides5.timeZone;
        var _extractOverrides6 = extractOverrides(b, this), bb = _extractOverrides6.instant, bformatter = _extractOverrides6.formatter, btz = _extractOverrides6.timeZone;
        if (atz && btz && atz !== btz) {
          throw new RangeError("cannot format range between different time zones");
        }
        if (aa && bb && aformatter && bformatter && aformatter === bformatter) {
          var formatter = adjustFormatterTimeZone(aformatter, atz);
          return formatter.formatRangeToParts(aa.epochMilliseconds, bb.epochMilliseconds);
        }
      }
      return this[ORIGINAL].formatRangeToParts(a, b);
    }
    function amend() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var amended = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      options = ObjectAssign$1({}, options);
      for (var _i = 0, _arr = ["year", "month", "day", "hour", "minute", "second", "weekday", "timeZoneName"]; _i < _arr.length; _i++) {
        var opt = _arr[_i];
        options[opt] = opt in amended ? amended[opt] : options[opt];
        if (options[opt] === false || options[opt] === void 0)
          delete options[opt];
      }
      return options;
    }
    function timeAmend(options) {
      options = amend(options, {
        year: false,
        month: false,
        day: false,
        weekday: false,
        timeZoneName: false
      });
      if (!hasTimeOptions(options)) {
        options = ObjectAssign$1({}, options, {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
      }
      return options;
    }
    function yearMonthAmend(options) {
      options = amend(options, {
        day: false,
        hour: false,
        minute: false,
        second: false,
        weekday: false,
        timeZoneName: false
      });
      if (!("year" in options || "month" in options)) {
        options = ObjectAssign$1(options, {
          year: "numeric",
          month: "numeric"
        });
      }
      return options;
    }
    function monthDayAmend(options) {
      options = amend(options, {
        year: false,
        hour: false,
        minute: false,
        second: false,
        weekday: false,
        timeZoneName: false
      });
      if (!("month" in options || "day" in options)) {
        options = ObjectAssign$1({}, options, {
          month: "numeric",
          day: "numeric"
        });
      }
      return options;
    }
    function dateAmend(options) {
      options = amend(options, {
        hour: false,
        minute: false,
        second: false,
        timeZoneName: false
      });
      if (!hasDateOptions(options)) {
        options = ObjectAssign$1({}, options, {
          year: "numeric",
          month: "numeric",
          day: "numeric"
        });
      }
      return options;
    }
    function datetimeAmend(options) {
      options = amend(options, {
        timeZoneName: false
      });
      if (!hasTimeOptions(options) && !hasDateOptions(options)) {
        options = ObjectAssign$1({}, options, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
      }
      return options;
    }
    function zonedDateTimeAmend(options) {
      if (!hasTimeOptions(options) && !hasDateOptions(options)) {
        options = ObjectAssign$1({}, options, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
        if (options.timeZoneName === void 0)
          options.timeZoneName = "short";
      }
      return options;
    }
    function instantAmend(options) {
      if (!hasTimeOptions(options) && !hasDateOptions(options)) {
        options = ObjectAssign$1({}, options, {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        });
      }
      return options;
    }
    function hasDateOptions(options) {
      return "year" in options || "month" in options || "day" in options || "weekday" in options;
    }
    function hasTimeOptions(options) {
      return "hour" in options || "minute" in options || "second" in options;
    }
    function isTemporalObject(obj) {
      return ES.IsTemporalDate(obj) || ES.IsTemporalTime(obj) || ES.IsTemporalDateTime(obj) || ES.IsTemporalZonedDateTime(obj) || ES.IsTemporalYearMonth(obj) || ES.IsTemporalMonthDay(obj) || ES.IsTemporalInstant(obj);
    }
    function sameTemporalType(x, y) {
      if (!isTemporalObject(x) || !isTemporalObject(y))
        return false;
      if (ES.IsTemporalTime(x) && !ES.IsTemporalTime(y))
        return false;
      if (ES.IsTemporalDate(x) && !ES.IsTemporalDate(y))
        return false;
      if (ES.IsTemporalDateTime(x) && !ES.IsTemporalDateTime(y))
        return false;
      if (ES.IsTemporalZonedDateTime(x) && !ES.IsTemporalZonedDateTime(y))
        return false;
      if (ES.IsTemporalYearMonth(x) && !ES.IsTemporalYearMonth(y))
        return false;
      if (ES.IsTemporalMonthDay(x) && !ES.IsTemporalMonthDay(y))
        return false;
      if (ES.IsTemporalInstant(x) && !ES.IsTemporalInstant(y))
        return false;
      return true;
    }
    function extractOverrides(temporalObj, main) {
      var DateTime = GetIntrinsic("%Temporal.PlainDateTime%");
      if (ES.IsTemporalTime(temporalObj)) {
        var hour = GetSlot(temporalObj, ISO_HOUR);
        var minute = GetSlot(temporalObj, ISO_MINUTE);
        var second = GetSlot(temporalObj, ISO_SECOND);
        var millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
        var microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
        var nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
        var datetime2 = new DateTime(1970, 1, 1, hour, minute, second, millisecond, microsecond, nanosecond, main[CAL_ID]);
        return {
          instant: ES.BuiltinTimeZoneGetInstantFor(main[TZ_RESOLVED], datetime2, "compatible"),
          formatter: main[TIME]
        };
      }
      if (ES.IsTemporalYearMonth(temporalObj)) {
        var isoYear = GetSlot(temporalObj, ISO_YEAR);
        var isoMonth = GetSlot(temporalObj, ISO_MONTH);
        var referenceISODay = GetSlot(temporalObj, ISO_DAY);
        var calendar2 = ES.ToString(GetSlot(temporalObj, CALENDAR));
        if (calendar2 !== main[CAL_ID]) {
          throw new RangeError("cannot format PlainYearMonth with calendar ".concat(calendar2, " in locale with calendar ").concat(main[CAL_ID]));
        }
        var _datetime = new DateTime(isoYear, isoMonth, referenceISODay, 12, 0, 0, 0, 0, 0, calendar2);
        return {
          instant: ES.BuiltinTimeZoneGetInstantFor(main[TZ_RESOLVED], _datetime, "compatible"),
          formatter: main[YM]
        };
      }
      if (ES.IsTemporalMonthDay(temporalObj)) {
        var referenceISOYear = GetSlot(temporalObj, ISO_YEAR);
        var _isoMonth = GetSlot(temporalObj, ISO_MONTH);
        var isoDay = GetSlot(temporalObj, ISO_DAY);
        var _calendar = ES.ToString(GetSlot(temporalObj, CALENDAR));
        if (_calendar !== main[CAL_ID]) {
          throw new RangeError("cannot format PlainMonthDay with calendar ".concat(_calendar, " in locale with calendar ").concat(main[CAL_ID]));
        }
        var _datetime2 = new DateTime(referenceISOYear, _isoMonth, isoDay, 12, 0, 0, 0, 0, 0, _calendar);
        return {
          instant: ES.BuiltinTimeZoneGetInstantFor(main[TZ_RESOLVED], _datetime2, "compatible"),
          formatter: main[MD]
        };
      }
      if (ES.IsTemporalDate(temporalObj)) {
        var _isoYear = GetSlot(temporalObj, ISO_YEAR);
        var _isoMonth2 = GetSlot(temporalObj, ISO_MONTH);
        var _isoDay = GetSlot(temporalObj, ISO_DAY);
        var _calendar2 = ES.ToString(GetSlot(temporalObj, CALENDAR));
        if (_calendar2 !== "iso8601" && _calendar2 !== main[CAL_ID]) {
          throw new RangeError("cannot format PlainDate with calendar ".concat(_calendar2, " in locale with calendar ").concat(main[CAL_ID]));
        }
        var _datetime3 = new DateTime(_isoYear, _isoMonth2, _isoDay, 12, 0, 0, 0, 0, 0, main[CAL_ID]);
        return {
          instant: ES.BuiltinTimeZoneGetInstantFor(main[TZ_RESOLVED], _datetime3, "compatible"),
          formatter: main[DATE]
        };
      }
      if (ES.IsTemporalDateTime(temporalObj)) {
        var _isoYear2 = GetSlot(temporalObj, ISO_YEAR);
        var _isoMonth3 = GetSlot(temporalObj, ISO_MONTH);
        var _isoDay2 = GetSlot(temporalObj, ISO_DAY);
        var _hour = GetSlot(temporalObj, ISO_HOUR);
        var _minute = GetSlot(temporalObj, ISO_MINUTE);
        var _second = GetSlot(temporalObj, ISO_SECOND);
        var _millisecond = GetSlot(temporalObj, ISO_MILLISECOND);
        var _microsecond = GetSlot(temporalObj, ISO_MICROSECOND);
        var _nanosecond = GetSlot(temporalObj, ISO_NANOSECOND);
        var _calendar3 = ES.ToString(GetSlot(temporalObj, CALENDAR));
        if (_calendar3 !== "iso8601" && _calendar3 !== main[CAL_ID]) {
          throw new RangeError("cannot format PlainDateTime with calendar ".concat(_calendar3, " in locale with calendar ").concat(main[CAL_ID]));
        }
        var _datetime4 = temporalObj;
        if (_calendar3 === "iso8601") {
          _datetime4 = new DateTime(_isoYear2, _isoMonth3, _isoDay2, _hour, _minute, _second, _millisecond, _microsecond, _nanosecond, main[CAL_ID]);
        }
        return {
          instant: ES.BuiltinTimeZoneGetInstantFor(main[TZ_RESOLVED], _datetime4, "compatible"),
          formatter: main[DATETIME]
        };
      }
      if (ES.IsTemporalZonedDateTime(temporalObj)) {
        var _calendar4 = ES.ToString(GetSlot(temporalObj, CALENDAR));
        if (_calendar4 !== "iso8601" && _calendar4 !== main[CAL_ID]) {
          throw new RangeError("cannot format ZonedDateTime with calendar ".concat(_calendar4, " in locale with calendar ").concat(main[CAL_ID]));
        }
        var timeZone2 = GetSlot(temporalObj, TIME_ZONE);
        var objTimeZone = ES.ToString(timeZone2);
        if (main[TZ_GIVEN] && main[TZ_GIVEN] !== objTimeZone) {
          throw new RangeError("timeZone option ".concat(main[TZ_GIVEN], " doesn't match actual time zone ").concat(objTimeZone));
        }
        return {
          instant: GetSlot(temporalObj, INSTANT),
          formatter: main[ZONED],
          timeZone: objTimeZone
        };
      }
      if (ES.IsTemporalInstant(temporalObj)) {
        return {
          instant: temporalObj,
          formatter: main[INST]
        };
      }
      return {};
    }
    var intl = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      DateTimeFormat
    });
    var Instant = /* @__PURE__ */ function() {
      function Instant2(epochNanoseconds) {
        _classCallCheck(this, Instant2);
        if (arguments.length < 1) {
          throw new TypeError("missing argument: epochNanoseconds is required");
        }
        var ns = ES.ToBigInt(epochNanoseconds);
        ES.RejectInstantRange(ns);
        CreateSlots(this);
        SetSlot(this, EPOCHNANOSECONDS, ns);
        {
          var repr = ES.TemporalInstantToString(this, void 0, "auto");
          Object.defineProperty(this, "_repr_", {
            value: "".concat(this[Symbol.toStringTag], " <").concat(repr, ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
      _createClass(Instant2, [{
        key: "epochSeconds",
        get: function get() {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          var value = GetSlot(this, EPOCHNANOSECONDS);
          return +value.divide(1e9);
        }
      }, {
        key: "epochMilliseconds",
        get: function get() {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          var value = BigInteger(GetSlot(this, EPOCHNANOSECONDS));
          return +value.divide(1e6);
        }
      }, {
        key: "epochMicroseconds",
        get: function get() {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          var value = GetSlot(this, EPOCHNANOSECONDS);
          return bigIntIfAvailable$2(value.divide(1e3));
        }
      }, {
        key: "epochNanoseconds",
        get: function get() {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          return bigIntIfAvailable$2(GetSlot(this, EPOCHNANOSECONDS));
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          var _ES$ToLimitedTemporal = ES.ToLimitedTemporalDuration(temporalDurationLike, ["years", "months", "weeks", "days"]), hours = _ES$ToLimitedTemporal.hours, minutes = _ES$ToLimitedTemporal.minutes, seconds = _ES$ToLimitedTemporal.seconds, milliseconds = _ES$ToLimitedTemporal.milliseconds, microseconds = _ES$ToLimitedTemporal.microseconds, nanoseconds = _ES$ToLimitedTemporal.nanoseconds;
          ES.RejectDurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var ns = ES.AddInstant(GetSlot(this, EPOCHNANOSECONDS), hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          return new Instant2(ns);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          var _ES$ToLimitedTemporal2 = ES.ToLimitedTemporalDuration(temporalDurationLike, ["years", "months", "weeks", "days"]), hours = _ES$ToLimitedTemporal2.hours, minutes = _ES$ToLimitedTemporal2.minutes, seconds = _ES$ToLimitedTemporal2.seconds, milliseconds = _ES$ToLimitedTemporal2.milliseconds, microseconds = _ES$ToLimitedTemporal2.microseconds, nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;
          ES.RejectDurationSign(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var ns = ES.AddInstant(GetSlot(this, EPOCHNANOSECONDS), -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
          return new Instant2(ns);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalInstant(other);
          var disallowedUnits = ["years", "months", "weeks", "days"];
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds", disallowedUnits);
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("seconds", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var maximumIncrements = {
            hours: 24,
            minutes: 60,
            seconds: 60,
            milliseconds: 1e3,
            microseconds: 1e3,
            nanoseconds: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var onens = GetSlot(this, EPOCHNANOSECONDS);
          var twons = GetSlot(other, EPOCHNANOSECONDS);
          var _ES$DifferenceInstant = ES.DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode), seconds = _ES$DifferenceInstant.seconds, milliseconds = _ES$DifferenceInstant.milliseconds, microseconds = _ES$DifferenceInstant.microseconds, nanoseconds = _ES$DifferenceInstant.nanoseconds;
          var hours, minutes;
          var _ES$BalanceDuration = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          hours = _ES$BalanceDuration.hours;
          minutes = _ES$BalanceDuration.minutes;
          seconds = _ES$BalanceDuration.seconds;
          milliseconds = _ES$BalanceDuration.milliseconds;
          microseconds = _ES$BalanceDuration.microseconds;
          nanoseconds = _ES$BalanceDuration.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalInstant(other);
          var disallowedUnits = ["years", "months", "weeks", "days"];
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds", disallowedUnits);
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("seconds", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var maximumIncrements = {
            hours: 24,
            minutes: 60,
            seconds: 60,
            milliseconds: 1e3,
            microseconds: 1e3,
            nanoseconds: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var onens = GetSlot(other, EPOCHNANOSECONDS);
          var twons = GetSlot(this, EPOCHNANOSECONDS);
          var _ES$DifferenceInstant2 = ES.DifferenceInstant(onens, twons, roundingIncrement, smallestUnit, roundingMode), seconds = _ES$DifferenceInstant2.seconds, milliseconds = _ES$DifferenceInstant2.milliseconds, microseconds = _ES$DifferenceInstant2.microseconds, nanoseconds = _ES$DifferenceInstant2.nanoseconds;
          var hours, minutes;
          var _ES$BalanceDuration2 = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          hours = _ES$BalanceDuration2.hours;
          minutes = _ES$BalanceDuration2.minutes;
          seconds = _ES$BalanceDuration2.seconds;
          milliseconds = _ES$BalanceDuration2.milliseconds;
          microseconds = _ES$BalanceDuration2.microseconds;
          nanoseconds = _ES$BalanceDuration2.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "round",
        value: function round(options) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          if (options === void 0)
            throw new TypeError("options parameter is required");
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalUnit(options, ["day"]);
          var roundingMode = ES.ToTemporalRoundingMode(options, "halfExpand");
          var maximumIncrements = {
            hour: 24,
            minute: 1440,
            second: 86400,
            millisecond: 864e5,
            microsecond: 864e8,
            nanosecond: 864e11
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], true);
          var ns = GetSlot(this, EPOCHNANOSECONDS);
          var roundedNs = ES.RoundInstant(ns, roundingIncrement, smallestUnit, roundingMode);
          return new Instant2(roundedNs);
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalInstant(other);
          var one = GetSlot(this, EPOCHNANOSECONDS);
          var two = GetSlot(other, EPOCHNANOSECONDS);
          return BigInteger(one).equals(two);
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var timeZone2 = options.timeZone;
          if (timeZone2 !== void 0)
            timeZone2 = ES.ToTemporalTimeZone(timeZone2);
          var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options), precision = _ES$ToSecondsStringPr.precision, unit = _ES$ToSecondsStringPr.unit, increment = _ES$ToSecondsStringPr.increment;
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var ns = GetSlot(this, EPOCHNANOSECONDS);
          var roundedNs = ES.RoundInstant(ns, increment, unit, roundingMode);
          var roundedInstant = new Instant2(roundedNs);
          return ES.TemporalInstantToString(roundedInstant, timeZone2, precision);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalInstantToString(this, void 0, "auto");
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.Instant");
        }
      }, {
        key: "toZonedDateTime",
        value: function toZonedDateTime(item) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(item) !== "Object") {
            throw new TypeError("invalid argument in toZonedDateTime");
          }
          var calendarLike = item.calendar;
          if (calendarLike === void 0) {
            throw new TypeError("missing calendar property in toZonedDateTime");
          }
          var calendar2 = ES.ToTemporalCalendar(calendarLike);
          var temporalTimeZoneLike = item.timeZone;
          if (temporalTimeZoneLike === void 0) {
            throw new TypeError("missing timeZone property in toZonedDateTime");
          }
          var timeZone2 = ES.ToTemporalTimeZone(temporalTimeZoneLike);
          return ES.CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }, {
        key: "toZonedDateTimeISO",
        value: function toZonedDateTimeISO(item) {
          if (!ES.IsTemporalInstant(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(item) === "Object") {
            var timeZoneProperty = item.timeZone;
            if (timeZoneProperty !== void 0) {
              item = timeZoneProperty;
            }
          }
          var timeZone2 = ES.ToTemporalTimeZone(item);
          var calendar2 = ES.GetISO8601Calendar();
          return ES.CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }], [{
        key: "fromEpochSeconds",
        value: function fromEpochSeconds(epochSeconds) {
          epochSeconds = ES.ToNumber(epochSeconds);
          var epochNanoseconds = BigInteger(epochSeconds).multiply(1e9);
          ES.RejectInstantRange(epochNanoseconds);
          return new Instant2(epochNanoseconds);
        }
      }, {
        key: "fromEpochMilliseconds",
        value: function fromEpochMilliseconds(epochMilliseconds) {
          epochMilliseconds = ES.ToNumber(epochMilliseconds);
          var epochNanoseconds = BigInteger(epochMilliseconds).multiply(1e6);
          ES.RejectInstantRange(epochNanoseconds);
          return new Instant2(epochNanoseconds);
        }
      }, {
        key: "fromEpochMicroseconds",
        value: function fromEpochMicroseconds(epochMicroseconds) {
          epochMicroseconds = ES.ToBigInt(epochMicroseconds);
          var epochNanoseconds = epochMicroseconds.multiply(1e3);
          ES.RejectInstantRange(epochNanoseconds);
          return new Instant2(epochNanoseconds);
        }
      }, {
        key: "fromEpochNanoseconds",
        value: function fromEpochNanoseconds(epochNanoseconds) {
          epochNanoseconds = ES.ToBigInt(epochNanoseconds);
          ES.RejectInstantRange(epochNanoseconds);
          return new Instant2(epochNanoseconds);
        }
      }, {
        key: "from",
        value: function from(item) {
          if (ES.IsTemporalInstant(item)) {
            return new Instant2(GetSlot(item, EPOCHNANOSECONDS));
          }
          return ES.ToTemporalInstant(item);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalInstant(one);
          two = ES.ToTemporalInstant(two);
          one = GetSlot(one, EPOCHNANOSECONDS);
          two = GetSlot(two, EPOCHNANOSECONDS);
          if (BigInteger(one).lesser(two))
            return -1;
          if (BigInteger(one).greater(two))
            return 1;
          return 0;
        }
      }]);
      return Instant2;
    }();
    MakeIntrinsicClass(Instant, "Temporal.Instant");
    function bigIntIfAvailable$2(wrapper) {
      return typeof BigInt === "undefined" ? wrapper : wrapper.value;
    }
    var PlainDate = /* @__PURE__ */ function() {
      function PlainDate2(isoYear, isoMonth, isoDay) {
        var calendar2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ES.GetISO8601Calendar();
        _classCallCheck(this, PlainDate2);
        isoYear = ES.ToInteger(isoYear);
        isoMonth = ES.ToInteger(isoMonth);
        isoDay = ES.ToInteger(isoDay);
        calendar2 = ES.ToTemporalCalendar(calendar2);
        if (arguments.length < 3) {
          throw new RangeError("missing argument: isoYear, isoMonth and isoDay are required");
        }
        ES.CreateTemporalDateSlots(this, isoYear, isoMonth, isoDay, calendar2);
      }
      _createClass(PlainDate2, [{
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "era",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEra(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "eraYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEraYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "year",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "month",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthCode",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthCode(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "day",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDay(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "dayOfWeek",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "dayOfYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "weekOfYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInWeek",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInMonth",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthsInYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "inLeapYear",
        get: function get() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarInLeapYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "with",
        value: function _with(temporalDateLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalDateLike) !== "Object") {
            throw new TypeError("invalid argument");
          }
          if (HasSlot(temporalDateLike, CALENDAR) || HasSlot(temporalDateLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalDateLike.calendar !== void 0) {
            throw new TypeError("with() does not support a calendar property");
          }
          if (temporalDateLike.timeZone !== void 0) {
            throw new TypeError("with() does not support a timeZone property");
          }
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "month", "monthCode", "year"]);
          var props = ES.ToPartialRecord(temporalDateLike, fieldNames);
          if (!props) {
            throw new TypeError("invalid date-like");
          }
          var fields = ES.ToTemporalDateFields(this, fieldNames);
          fields = ES.CalendarMergeFields(calendar2, fields, props);
          fields = ES.ToTemporalDateFields(fields, fieldNames);
          options = ES.GetOptionsObject(options);
          return ES.DateFromFields(calendar2, fields, options);
        }
      }, {
        key: "withCalendar",
        value: function withCalendar(calendar2) {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return new PlainDate2(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), calendar2);
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          options = ES.GetOptionsObject(options);
          var _duration = duration2, years = _duration.years, months = _duration.months, weeks = _duration.weeks, days = _duration.days, hours = _duration.hours, minutes = _duration.minutes, seconds = _duration.seconds, milliseconds = _duration.milliseconds, microseconds = _duration.microseconds, nanoseconds = _duration.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, "days");
          days = _ES$BalanceDuration.days;
          duration2 = {
            years,
            months,
            weeks,
            days
          };
          return ES.CalendarDateAdd(GetSlot(this, CALENDAR), this, duration2, options);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          options = ES.GetOptionsObject(options);
          var _duration2 = duration2, years = _duration2.years, months = _duration2.months, weeks = _duration2.weeks, days = _duration2.days, hours = _duration2.hours, minutes = _duration2.minutes, seconds = _duration2.seconds, milliseconds = _duration2.milliseconds, microseconds = _duration2.microseconds, nanoseconds = _duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, "days");
          days = _ES$BalanceDuration2.days;
          duration2 = {
            years: -years,
            months: -months,
            weeks: -weeks,
            days: -days
          };
          return ES.CalendarDateAdd(GetSlot(this, CALENDAR), this, duration2, options);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDate(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var disallowedUnits = ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "days", disallowedUnits);
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, void 0, false);
          var result = ES.CalendarDateUntil(calendar2, this, other, options);
          if (smallestUnit === "days" && roundingIncrement === 1)
            return result;
          var years = result.years, months = result.months, weeks = result.weeks, days = result.days;
          var relativeTo = ES.CreateTemporalDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(this, CALENDAR));
          var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, relativeTo);
          years = _ES$RoundDuration.years;
          months = _ES$RoundDuration.months;
          weeks = _ES$RoundDuration.weeks;
          days = _ES$RoundDuration.days;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDate(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var disallowedUnits = ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "days", disallowedUnits);
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit, disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, void 0, false);
          var _ES$CalendarDateUntil = ES.CalendarDateUntil(calendar2, this, other, options), years = _ES$CalendarDateUntil.years, months = _ES$CalendarDateUntil.months, weeks = _ES$CalendarDateUntil.weeks, days = _ES$CalendarDateUntil.days;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          if (smallestUnit === "days" && roundingIncrement === 1) {
            return new Duration2(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
          }
          var relativeTo = ES.CreateTemporalDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), 0, 0, 0, 0, 0, 0, GetSlot(this, CALENDAR));
          var _ES$RoundDuration2 = ES.RoundDuration(years, months, weeks, days, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), relativeTo);
          years = _ES$RoundDuration2.years;
          months = _ES$RoundDuration2.months;
          weeks = _ES$RoundDuration2.weeks;
          days = _ES$RoundDuration2.days;
          return new Duration2(-years, -months, -weeks, -days, 0, 0, 0, 0, 0, 0);
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDate(other);
          for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
            var slot = _arr[_i];
            var val1 = GetSlot(this, slot);
            var val2 = GetSlot(other, slot);
            if (val1 !== val2)
              return false;
          }
          return ES.CalendarEquals(this, other);
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var showCalendar = ES.ToShowCalendarOption(options);
          return ES.TemporalDateToString(this, showCalendar);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateToString(this);
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.PlainDate");
        }
      }, {
        key: "toPlainDateTime",
        value: function toPlainDateTime() {
          var temporalTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var year = GetSlot(this, ISO_YEAR);
          var month = GetSlot(this, ISO_MONTH);
          var day = GetSlot(this, ISO_DAY);
          var calendar2 = GetSlot(this, CALENDAR);
          if (temporalTime === void 0)
            return ES.CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar2);
          temporalTime = ES.ToTemporalTime(temporalTime);
          var hour = GetSlot(temporalTime, ISO_HOUR);
          var minute = GetSlot(temporalTime, ISO_MINUTE);
          var second = GetSlot(temporalTime, ISO_SECOND);
          var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
          var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
          var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "toZonedDateTime",
        value: function toZonedDateTime(item) {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var timeZone2, temporalTime;
          if (ES.Type(item) === "Object") {
            var timeZoneLike = item.timeZone;
            if (timeZoneLike === void 0) {
              timeZone2 = ES.ToTemporalTimeZone(item);
            } else {
              timeZone2 = ES.ToTemporalTimeZone(timeZoneLike);
              temporalTime = item.plainTime;
            }
          } else {
            timeZone2 = ES.ToTemporalTimeZone(item);
          }
          var year = GetSlot(this, ISO_YEAR);
          var month = GetSlot(this, ISO_MONTH);
          var day = GetSlot(this, ISO_DAY);
          var calendar2 = GetSlot(this, CALENDAR);
          var hour = 0, minute = 0, second = 0, millisecond = 0, microsecond = 0, nanosecond = 0;
          if (temporalTime !== void 0) {
            temporalTime = ES.ToTemporalTime(temporalTime);
            hour = GetSlot(temporalTime, ISO_HOUR);
            minute = GetSlot(temporalTime, ISO_MINUTE);
            second = GetSlot(temporalTime, ISO_SECOND);
            millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
            microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
            nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
          }
          var dt = ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, "compatible");
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }, {
        key: "toPlainYearMonth",
        value: function toPlainYearMonth() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          return ES.YearMonthFromFields(calendar2, fields);
        }
      }, {
        key: "toPlainMonthDay",
        value: function toPlainMonthDay() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "monthCode"]);
          var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
          return ES.MonthDayFromFields(calendar2, fields);
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalDate(this))
            throw new TypeError("invalid receiver");
          return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          if (ES.IsTemporalDate(item)) {
            ES.ToTemporalOverflow(options);
            return ES.CreateTemporalDate(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR));
          }
          return ES.ToTemporalDate(item, options);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalDate(one);
          two = ES.ToTemporalDate(two);
          return ES.CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
        }
      }]);
      return PlainDate2;
    }();
    MakeIntrinsicClass(PlainDate, "Temporal.PlainDate");
    var PlainDateTime = /* @__PURE__ */ function() {
      function PlainDateTime2(isoYear, isoMonth, isoDay) {
        var hour = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var minute = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        var second = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        var millisecond = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
        var microsecond = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0;
        var nanosecond = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
        var calendar2 = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : ES.GetISO8601Calendar();
        _classCallCheck(this, PlainDateTime2);
        isoYear = ES.ToInteger(isoYear);
        isoMonth = ES.ToInteger(isoMonth);
        isoDay = ES.ToInteger(isoDay);
        hour = ES.ToInteger(hour);
        minute = ES.ToInteger(minute);
        second = ES.ToInteger(second);
        millisecond = ES.ToInteger(millisecond);
        microsecond = ES.ToInteger(microsecond);
        nanosecond = ES.ToInteger(nanosecond);
        calendar2 = ES.ToTemporalCalendar(calendar2);
        if (arguments.length < 3) {
          throw new RangeError("missing argument: isoYear, isoMonth and isoDay are required");
        }
        ES.CreateTemporalDateTimeSlots(this, isoYear, isoMonth, isoDay, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
      }
      _createClass(PlainDateTime2, [{
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "year",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "month",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthCode",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthCode(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "day",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDay(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "hour",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_HOUR);
        }
      }, {
        key: "minute",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MINUTE);
        }
      }, {
        key: "second",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_SECOND);
        }
      }, {
        key: "millisecond",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MILLISECOND);
        }
      }, {
        key: "microsecond",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MICROSECOND);
        }
      }, {
        key: "nanosecond",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_NANOSECOND);
        }
      }, {
        key: "era",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEra(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "eraYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEraYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "dayOfWeek",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfWeek(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "dayOfYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "weekOfYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarWeekOfYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInWeek",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInWeek(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInMonth",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthsInYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "inLeapYear",
        get: function get() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarInLeapYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "with",
        value: function _with(temporalDateTimeLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalDateTimeLike) !== "Object") {
            throw new TypeError("invalid argument");
          }
          if (HasSlot(temporalDateTimeLike, CALENDAR) || HasSlot(temporalDateTimeLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalDateTimeLike.calendar !== void 0) {
            throw new TypeError("with() does not support a calendar property");
          }
          if (temporalDateTimeLike.timeZone !== void 0) {
            throw new TypeError("with() does not support a timeZone property");
          }
          options = ES.GetOptionsObject(options);
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
          var props = ES.ToPartialRecord(temporalDateTimeLike, fieldNames);
          if (!props) {
            throw new TypeError("invalid date-time-like");
          }
          var fields = ES.ToTemporalDateTimeFields(this, fieldNames);
          fields = ES.CalendarMergeFields(calendar2, fields, props);
          fields = ES.ToTemporalDateTimeFields(fields, fieldNames);
          var _ES$InterpretTemporal = ES.InterpretTemporalDateTimeFields(calendar2, fields, options), year = _ES$InterpretTemporal.year, month = _ES$InterpretTemporal.month, day = _ES$InterpretTemporal.day, hour = _ES$InterpretTemporal.hour, minute = _ES$InterpretTemporal.minute, second = _ES$InterpretTemporal.second, millisecond = _ES$InterpretTemporal.millisecond, microsecond = _ES$InterpretTemporal.microsecond, nanosecond = _ES$InterpretTemporal.nanosecond;
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "withPlainTime",
        value: function withPlainTime() {
          var temporalTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var year = GetSlot(this, ISO_YEAR);
          var month = GetSlot(this, ISO_MONTH);
          var day = GetSlot(this, ISO_DAY);
          var calendar2 = GetSlot(this, CALENDAR);
          if (temporalTime === void 0)
            return ES.CreateTemporalDateTime(year, month, day, 0, 0, 0, 0, 0, 0, calendar2);
          temporalTime = ES.ToTemporalTime(temporalTime);
          var hour = GetSlot(temporalTime, ISO_HOUR);
          var minute = GetSlot(temporalTime, ISO_MINUTE);
          var second = GetSlot(temporalTime, ISO_SECOND);
          var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
          var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
          var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "withPlainDate",
        value: function withPlainDate(temporalDate) {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          temporalDate = ES.ToTemporalDate(temporalDate);
          var year = GetSlot(temporalDate, ISO_YEAR);
          var month = GetSlot(temporalDate, ISO_MONTH);
          var day = GetSlot(temporalDate, ISO_DAY);
          var calendar2 = GetSlot(temporalDate, CALENDAR);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          calendar2 = ES.ConsolidateCalendars(GetSlot(this, CALENDAR), calendar2);
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "withCalendar",
        value: function withCalendar(calendar2) {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return new PlainDateTime2(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar2);
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          options = ES.GetOptionsObject(options);
          var calendar2 = GetSlot(this, CALENDAR);
          var _ES$AddDateTime = ES.AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar2, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options), year = _ES$AddDateTime.year, month = _ES$AddDateTime.month, day = _ES$AddDateTime.day, hour = _ES$AddDateTime.hour, minute = _ES$AddDateTime.minute, second = _ES$AddDateTime.second, millisecond = _ES$AddDateTime.millisecond, microsecond = _ES$AddDateTime.microsecond, nanosecond = _ES$AddDateTime.nanosecond;
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          options = ES.GetOptionsObject(options);
          var calendar2 = GetSlot(this, CALENDAR);
          var _ES$AddDateTime2 = ES.AddDateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), calendar2, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options), year = _ES$AddDateTime2.year, month = _ES$AddDateTime2.month, day = _ES$AddDateTime2.day, hour = _ES$AddDateTime2.hour, minute = _ES$AddDateTime2.minute, second = _ES$AddDateTime2.second, millisecond = _ES$AddDateTime2.millisecond, microsecond = _ES$AddDateTime2.microsecond, nanosecond = _ES$AddDateTime2.nanosecond;
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDateTime(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
          var _ES$DifferenceISODate = ES.DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar2, largestUnit, options), years = _ES$DifferenceISODate.years, months = _ES$DifferenceISODate.months, weeks = _ES$DifferenceISODate.weeks, days = _ES$DifferenceISODate.days, hours = _ES$DifferenceISODate.hours, minutes = _ES$DifferenceISODate.minutes, seconds = _ES$DifferenceISODate.seconds, milliseconds = _ES$DifferenceISODate.milliseconds, microseconds = _ES$DifferenceISODate.microseconds, nanoseconds = _ES$DifferenceISODate.nanoseconds;
          var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);
          years = _ES$RoundDuration.years;
          months = _ES$RoundDuration.months;
          weeks = _ES$RoundDuration.weeks;
          days = _ES$RoundDuration.days;
          hours = _ES$RoundDuration.hours;
          minutes = _ES$RoundDuration.minutes;
          seconds = _ES$RoundDuration.seconds;
          milliseconds = _ES$RoundDuration.milliseconds;
          microseconds = _ES$RoundDuration.microseconds;
          nanoseconds = _ES$RoundDuration.nanoseconds;
          var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          days = _ES$BalanceDuration.days;
          hours = _ES$BalanceDuration.hours;
          minutes = _ES$BalanceDuration.minutes;
          seconds = _ES$BalanceDuration.seconds;
          milliseconds = _ES$BalanceDuration.milliseconds;
          microseconds = _ES$BalanceDuration.microseconds;
          nanoseconds = _ES$BalanceDuration.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDateTime(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("days", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
          var _ES$DifferenceISODate2 = ES.DifferenceISODateTime(GetSlot(this, ISO_YEAR), GetSlot(this, ISO_MONTH), GetSlot(this, ISO_DAY), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_YEAR), GetSlot(other, ISO_MONTH), GetSlot(other, ISO_DAY), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), calendar2, largestUnit, options), years = _ES$DifferenceISODate2.years, months = _ES$DifferenceISODate2.months, weeks = _ES$DifferenceISODate2.weeks, days = _ES$DifferenceISODate2.days, hours = _ES$DifferenceISODate2.hours, minutes = _ES$DifferenceISODate2.minutes, seconds = _ES$DifferenceISODate2.seconds, milliseconds = _ES$DifferenceISODate2.milliseconds, microseconds = _ES$DifferenceISODate2.microseconds, nanoseconds = _ES$DifferenceISODate2.nanoseconds;
          var _ES$RoundDuration2 = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), this);
          years = _ES$RoundDuration2.years;
          months = _ES$RoundDuration2.months;
          weeks = _ES$RoundDuration2.weeks;
          days = _ES$RoundDuration2.days;
          hours = _ES$RoundDuration2.hours;
          minutes = _ES$RoundDuration2.minutes;
          seconds = _ES$RoundDuration2.seconds;
          milliseconds = _ES$RoundDuration2.milliseconds;
          microseconds = _ES$RoundDuration2.microseconds;
          nanoseconds = _ES$RoundDuration2.nanoseconds;
          var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          days = _ES$BalanceDuration2.days;
          hours = _ES$BalanceDuration2.hours;
          minutes = _ES$BalanceDuration2.minutes;
          seconds = _ES$BalanceDuration2.seconds;
          milliseconds = _ES$BalanceDuration2.milliseconds;
          microseconds = _ES$BalanceDuration2.microseconds;
          nanoseconds = _ES$BalanceDuration2.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
        }
      }, {
        key: "round",
        value: function round(options) {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          if (options === void 0)
            throw new TypeError("options parameter is required");
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalUnit(options);
          var roundingMode = ES.ToTemporalRoundingMode(options, "halfExpand");
          var maximumIncrements = {
            day: 1,
            hour: 24,
            minute: 60,
            second: 60,
            millisecond: 1e3,
            microsecond: 1e3,
            nanosecond: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var year = GetSlot(this, ISO_YEAR);
          var month = GetSlot(this, ISO_MONTH);
          var day = GetSlot(this, ISO_DAY);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          var _ES$RoundISODateTime = ES.RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);
          year = _ES$RoundISODateTime.year;
          month = _ES$RoundISODateTime.month;
          day = _ES$RoundISODateTime.day;
          hour = _ES$RoundISODateTime.hour;
          minute = _ES$RoundISODateTime.minute;
          second = _ES$RoundISODateTime.second;
          millisecond = _ES$RoundISODateTime.millisecond;
          microsecond = _ES$RoundISODateTime.microsecond;
          nanosecond = _ES$RoundISODateTime.nanosecond;
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, GetSlot(this, CALENDAR));
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalDateTime(other);
          for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
            var slot = _arr[_i];
            var val1 = GetSlot(this, slot);
            var val2 = GetSlot(other, slot);
            if (val1 !== val2)
              return false;
          }
          return ES.CalendarEquals(this, other);
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options), precision = _ES$ToSecondsStringPr.precision, unit = _ES$ToSecondsStringPr.unit, increment = _ES$ToSecondsStringPr.increment;
          var showCalendar = ES.ToShowCalendarOption(options);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          return ES.TemporalDateTimeToString(this, precision, showCalendar, {
            unit,
            increment,
            roundingMode
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateTimeToString(this, "auto");
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.PlainDateTime");
        }
      }, {
        key: "toZonedDateTime",
        value: function toZonedDateTime(temporalTimeZoneLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var timeZone2 = ES.ToTemporalTimeZone(temporalTimeZoneLike);
          options = ES.GetOptionsObject(options);
          var disambiguation = ES.ToTemporalDisambiguation(options);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, this, disambiguation);
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, GetSlot(this, CALENDAR));
        }
      }, {
        key: "toPlainDate",
        value: function toPlainDate() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateTimeToDate(this);
        }
      }, {
        key: "toPlainYearMonth",
        value: function toPlainYearMonth() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          return ES.YearMonthFromFields(calendar2, fields);
        }
      }, {
        key: "toPlainMonthDay",
        value: function toPlainMonthDay() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "monthCode"]);
          var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
          return ES.MonthDayFromFields(calendar2, fields);
        }
      }, {
        key: "toPlainTime",
        value: function toPlainTime() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateTimeToTime(this);
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalDateTime(this))
            throw new TypeError("invalid receiver");
          return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoHour: GetSlot(this, ISO_HOUR),
            isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
            isoMillisecond: GetSlot(this, ISO_MILLISECOND),
            isoMinute: GetSlot(this, ISO_MINUTE),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoNanosecond: GetSlot(this, ISO_NANOSECOND),
            isoSecond: GetSlot(this, ISO_SECOND),
            isoYear: GetSlot(this, ISO_YEAR)
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          if (ES.IsTemporalDateTime(item)) {
            ES.ToTemporalOverflow(options);
            return ES.CreateTemporalDateTime(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND), GetSlot(item, CALENDAR));
          }
          return ES.ToTemporalDateTime(item, options);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalDateTime(one);
          two = ES.ToTemporalDateTime(two);
          for (var _i2 = 0, _arr2 = [ISO_YEAR, ISO_MONTH, ISO_DAY, ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
            var slot = _arr2[_i2];
            var val1 = GetSlot(one, slot);
            var val2 = GetSlot(two, slot);
            if (val1 !== val2)
              return ES.ComparisonResult(val1 - val2);
          }
          return 0;
        }
      }]);
      return PlainDateTime2;
    }();
    MakeIntrinsicClass(PlainDateTime, "Temporal.PlainDateTime");
    var Duration = /* @__PURE__ */ function() {
      function Duration2() {
        var years = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var months = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var weeks = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var days = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var hours = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        var minutes = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        var seconds = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0;
        var milliseconds = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0;
        var microseconds = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
        var nanoseconds = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0;
        _classCallCheck(this, Duration2);
        years = ES.ToInteger(years);
        months = ES.ToInteger(months);
        weeks = ES.ToInteger(weeks);
        days = ES.ToInteger(days);
        hours = ES.ToInteger(hours);
        minutes = ES.ToInteger(minutes);
        seconds = ES.ToInteger(seconds);
        milliseconds = ES.ToInteger(milliseconds);
        microseconds = ES.ToInteger(microseconds);
        nanoseconds = ES.ToInteger(nanoseconds);
        var sign2 = ES.DurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        for (var _i = 0, _arr = [years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds]; _i < _arr.length; _i++) {
          var prop = _arr[_i];
          if (!Number.isFinite(prop))
            throw new RangeError("infinite values not allowed as duration fields");
          var propSign = Math.sign(prop);
          if (propSign !== 0 && propSign !== sign2)
            throw new RangeError("mixed-sign values not allowed as duration fields");
        }
        CreateSlots(this);
        SetSlot(this, YEARS, years);
        SetSlot(this, MONTHS, months);
        SetSlot(this, WEEKS, weeks);
        SetSlot(this, DAYS, days);
        SetSlot(this, HOURS, hours);
        SetSlot(this, MINUTES, minutes);
        SetSlot(this, SECONDS, seconds);
        SetSlot(this, MILLISECONDS, milliseconds);
        SetSlot(this, MICROSECONDS, microseconds);
        SetSlot(this, NANOSECONDS, nanoseconds);
        {
          Object.defineProperty(this, "_repr_", {
            value: "".concat(this[Symbol.toStringTag], " <").concat(ES.TemporalDurationToString(this), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
      _createClass(Duration2, [{
        key: "years",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, YEARS);
        }
      }, {
        key: "months",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, MONTHS);
        }
      }, {
        key: "weeks",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, WEEKS);
        }
      }, {
        key: "days",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, DAYS);
        }
      }, {
        key: "hours",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, HOURS);
        }
      }, {
        key: "minutes",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, MINUTES);
        }
      }, {
        key: "seconds",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, SECONDS);
        }
      }, {
        key: "milliseconds",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, MILLISECONDS);
        }
      }, {
        key: "microseconds",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, MICROSECONDS);
        }
      }, {
        key: "nanoseconds",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, NANOSECONDS);
        }
      }, {
        key: "sign",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return ES.DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS));
        }
      }, {
        key: "blank",
        get: function get() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return ES.DurationSign(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS)) === 0;
        }
      }, {
        key: "with",
        value: function _with(durationLike) {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          var props = ES.ToPartialRecord(durationLike, ["days", "hours", "microseconds", "milliseconds", "minutes", "months", "nanoseconds", "seconds", "weeks", "years"]);
          if (!props) {
            throw new TypeError("invalid duration-like");
          }
          var _props$years = props.years, years = _props$years === void 0 ? GetSlot(this, YEARS) : _props$years, _props$months = props.months, months = _props$months === void 0 ? GetSlot(this, MONTHS) : _props$months, _props$weeks = props.weeks, weeks = _props$weeks === void 0 ? GetSlot(this, WEEKS) : _props$weeks, _props$days = props.days, days = _props$days === void 0 ? GetSlot(this, DAYS) : _props$days, _props$hours = props.hours, hours = _props$hours === void 0 ? GetSlot(this, HOURS) : _props$hours, _props$minutes = props.minutes, minutes = _props$minutes === void 0 ? GetSlot(this, MINUTES) : _props$minutes, _props$seconds = props.seconds, seconds = _props$seconds === void 0 ? GetSlot(this, SECONDS) : _props$seconds, _props$milliseconds = props.milliseconds, milliseconds = _props$milliseconds === void 0 ? GetSlot(this, MILLISECONDS) : _props$milliseconds, _props$microseconds = props.microseconds, microseconds = _props$microseconds === void 0 ? GetSlot(this, MICROSECONDS) : _props$microseconds, _props$nanoseconds = props.nanoseconds, nanoseconds = _props$nanoseconds === void 0 ? GetSlot(this, NANOSECONDS) : _props$nanoseconds;
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "negated",
        value: function negated() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return new Duration2(-GetSlot(this, YEARS), -GetSlot(this, MONTHS), -GetSlot(this, WEEKS), -GetSlot(this, DAYS), -GetSlot(this, HOURS), -GetSlot(this, MINUTES), -GetSlot(this, SECONDS), -GetSlot(this, MILLISECONDS), -GetSlot(this, MICROSECONDS), -GetSlot(this, NANOSECONDS));
        }
      }, {
        key: "abs",
        value: function abs2() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return new Duration2(Math.abs(GetSlot(this, YEARS)), Math.abs(GetSlot(this, MONTHS)), Math.abs(GetSlot(this, WEEKS)), Math.abs(GetSlot(this, DAYS)), Math.abs(GetSlot(this, HOURS)), Math.abs(GetSlot(this, MINUTES)), Math.abs(GetSlot(this, SECONDS)), Math.abs(GetSlot(this, MILLISECONDS)), Math.abs(GetSlot(this, MICROSECONDS)), Math.abs(GetSlot(this, NANOSECONDS)));
        }
      }, {
        key: "add",
        value: function add(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          var _ES$ToLimitedTemporal = ES.ToLimitedTemporalDuration(other), years = _ES$ToLimitedTemporal.years, months = _ES$ToLimitedTemporal.months, weeks = _ES$ToLimitedTemporal.weeks, days = _ES$ToLimitedTemporal.days, hours = _ES$ToLimitedTemporal.hours, minutes = _ES$ToLimitedTemporal.minutes, seconds = _ES$ToLimitedTemporal.seconds, milliseconds = _ES$ToLimitedTemporal.milliseconds, microseconds = _ES$ToLimitedTemporal.microseconds, nanoseconds = _ES$ToLimitedTemporal.nanoseconds;
          options = ES.GetOptionsObject(options);
          var relativeTo = ES.ToRelativeTemporalObject(options);
          var _ES$AddDuration = ES.AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, relativeTo);
          years = _ES$AddDuration.years;
          months = _ES$AddDuration.months;
          weeks = _ES$AddDuration.weeks;
          days = _ES$AddDuration.days;
          hours = _ES$AddDuration.hours;
          minutes = _ES$AddDuration.minutes;
          seconds = _ES$AddDuration.seconds;
          milliseconds = _ES$AddDuration.milliseconds;
          microseconds = _ES$AddDuration.microseconds;
          nanoseconds = _ES$AddDuration.nanoseconds;
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "subtract",
        value: function subtract(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          var _ES$ToLimitedTemporal2 = ES.ToLimitedTemporalDuration(other), years = _ES$ToLimitedTemporal2.years, months = _ES$ToLimitedTemporal2.months, weeks = _ES$ToLimitedTemporal2.weeks, days = _ES$ToLimitedTemporal2.days, hours = _ES$ToLimitedTemporal2.hours, minutes = _ES$ToLimitedTemporal2.minutes, seconds = _ES$ToLimitedTemporal2.seconds, milliseconds = _ES$ToLimitedTemporal2.milliseconds, microseconds = _ES$ToLimitedTemporal2.microseconds, nanoseconds = _ES$ToLimitedTemporal2.nanoseconds;
          options = ES.GetOptionsObject(options);
          var relativeTo = ES.ToRelativeTemporalObject(options);
          var _ES$AddDuration2 = ES.AddDuration(GetSlot(this, YEARS), GetSlot(this, MONTHS), GetSlot(this, WEEKS), GetSlot(this, DAYS), GetSlot(this, HOURS), GetSlot(this, MINUTES), GetSlot(this, SECONDS), GetSlot(this, MILLISECONDS), GetSlot(this, MICROSECONDS), GetSlot(this, NANOSECONDS), -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, relativeTo);
          years = _ES$AddDuration2.years;
          months = _ES$AddDuration2.months;
          weeks = _ES$AddDuration2.weeks;
          days = _ES$AddDuration2.days;
          hours = _ES$AddDuration2.hours;
          minutes = _ES$AddDuration2.minutes;
          seconds = _ES$AddDuration2.seconds;
          milliseconds = _ES$AddDuration2.milliseconds;
          microseconds = _ES$AddDuration2.microseconds;
          nanoseconds = _ES$AddDuration2.nanoseconds;
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "round",
        value: function round(options) {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          if (options === void 0)
            throw new TypeError("options parameter is required");
          var years = GetSlot(this, YEARS);
          var months = GetSlot(this, MONTHS);
          var weeks = GetSlot(this, WEEKS);
          var days = GetSlot(this, DAYS);
          var hours = GetSlot(this, HOURS);
          var minutes = GetSlot(this, MINUTES);
          var seconds = GetSlot(this, SECONDS);
          var milliseconds = GetSlot(this, MILLISECONDS);
          var microseconds = GetSlot(this, MICROSECONDS);
          var nanoseconds = GetSlot(this, NANOSECONDS);
          var defaultLargestUnit = ES.DefaultTemporalLargestUnit(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, void 0);
          var smallestUnitPresent = true;
          if (!smallestUnit) {
            smallestUnitPresent = false;
            smallestUnit = "nanoseconds";
          }
          defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits(defaultLargestUnit, smallestUnit);
          var largestUnit = ES.ToLargestTemporalDurationUnit(options);
          var largestUnitPresent = true;
          if (!largestUnit) {
            largestUnitPresent = false;
            largestUnit = defaultLargestUnit;
          }
          if (largestUnit === "auto")
            largestUnit = defaultLargestUnit;
          if (!smallestUnitPresent && !largestUnitPresent) {
            throw new RangeError("at least one of smallestUnit or largestUnit is required");
          }
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "halfExpand");
          var maximumIncrements = {
            years: void 0,
            months: void 0,
            weeks: void 0,
            days: void 0,
            hours: 24,
            minutes: 60,
            seconds: 60,
            milliseconds: 1e3,
            microseconds: 1e3,
            nanoseconds: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var relativeTo = ES.ToRelativeTemporalObject(options);
          var _ES$UnbalanceDuration = ES.UnbalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);
          years = _ES$UnbalanceDuration.years;
          months = _ES$UnbalanceDuration.months;
          weeks = _ES$UnbalanceDuration.weeks;
          days = _ES$UnbalanceDuration.days;
          var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);
          years = _ES$RoundDuration.years;
          months = _ES$RoundDuration.months;
          weeks = _ES$RoundDuration.weeks;
          days = _ES$RoundDuration.days;
          hours = _ES$RoundDuration.hours;
          minutes = _ES$RoundDuration.minutes;
          seconds = _ES$RoundDuration.seconds;
          milliseconds = _ES$RoundDuration.milliseconds;
          microseconds = _ES$RoundDuration.microseconds;
          nanoseconds = _ES$RoundDuration.nanoseconds;
          var _ES$AdjustRoundedDura = ES.AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, relativeTo);
          years = _ES$AdjustRoundedDura.years;
          months = _ES$AdjustRoundedDura.months;
          weeks = _ES$AdjustRoundedDura.weeks;
          days = _ES$AdjustRoundedDura.days;
          hours = _ES$AdjustRoundedDura.hours;
          minutes = _ES$AdjustRoundedDura.minutes;
          seconds = _ES$AdjustRoundedDura.seconds;
          milliseconds = _ES$AdjustRoundedDura.milliseconds;
          microseconds = _ES$AdjustRoundedDura.microseconds;
          nanoseconds = _ES$AdjustRoundedDura.nanoseconds;
          var _ES$BalanceDurationRe = ES.BalanceDurationRelative(years, months, weeks, days, largestUnit, relativeTo);
          years = _ES$BalanceDurationRe.years;
          months = _ES$BalanceDurationRe.months;
          weeks = _ES$BalanceDurationRe.weeks;
          days = _ES$BalanceDurationRe.days;
          if (ES.IsTemporalZonedDateTime(relativeTo)) {
            relativeTo = ES.MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
          }
          var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit, relativeTo);
          days = _ES$BalanceDuration.days;
          hours = _ES$BalanceDuration.hours;
          minutes = _ES$BalanceDuration.minutes;
          seconds = _ES$BalanceDuration.seconds;
          milliseconds = _ES$BalanceDuration.milliseconds;
          microseconds = _ES$BalanceDuration.microseconds;
          nanoseconds = _ES$BalanceDuration.nanoseconds;
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "total",
        value: function total(options) {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          var years = GetSlot(this, YEARS);
          var months = GetSlot(this, MONTHS);
          var weeks = GetSlot(this, WEEKS);
          var days = GetSlot(this, DAYS);
          var hours = GetSlot(this, HOURS);
          var minutes = GetSlot(this, MINUTES);
          var seconds = GetSlot(this, SECONDS);
          var milliseconds = GetSlot(this, MILLISECONDS);
          var microseconds = GetSlot(this, MICROSECONDS);
          var nanoseconds = GetSlot(this, NANOSECONDS);
          options = ES.GetOptionsObject(options);
          var unit = ES.ToTemporalDurationTotalUnit(options, void 0);
          if (unit === void 0)
            throw new RangeError("unit option is required");
          var relativeTo = ES.ToRelativeTemporalObject(options);
          var _ES$UnbalanceDuration2 = ES.UnbalanceDurationRelative(years, months, weeks, days, unit, relativeTo);
          years = _ES$UnbalanceDuration2.years;
          months = _ES$UnbalanceDuration2.months;
          weeks = _ES$UnbalanceDuration2.weeks;
          days = _ES$UnbalanceDuration2.days;
          var intermediate;
          if (ES.IsTemporalZonedDateTime(relativeTo)) {
            intermediate = ES.MoveRelativeZonedDateTime(relativeTo, years, months, weeks, 0);
          }
          var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, unit, intermediate);
          days = _ES$BalanceDuration2.days;
          hours = _ES$BalanceDuration2.hours;
          minutes = _ES$BalanceDuration2.minutes;
          seconds = _ES$BalanceDuration2.seconds;
          milliseconds = _ES$BalanceDuration2.milliseconds;
          microseconds = _ES$BalanceDuration2.microseconds;
          nanoseconds = _ES$BalanceDuration2.nanoseconds;
          var _ES$RoundDuration2 = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, 1, unit, "trunc", relativeTo), total2 = _ES$RoundDuration2.total;
          return total2;
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var _ES$ToDurationSeconds = ES.ToDurationSecondsStringPrecision(options), precision = _ES$ToDurationSeconds.precision, unit = _ES$ToDurationSeconds.unit, increment = _ES$ToDurationSeconds.increment;
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          return ES.TemporalDurationToString(this, precision, {
            unit,
            increment,
            roundingMode
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDurationToString(this);
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalDuration(this))
            throw new TypeError("invalid receiver");
          if (typeof Intl !== "undefined" && typeof Intl.DurationFormat !== "undefined") {
            return new Intl.DurationFormat(locales, options).format(this);
          }
          console.warn("Temporal.Duration.prototype.toLocaleString() requires Intl.DurationFormat.");
          return ES.TemporalDurationToString(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() to compare Temporal.Duration");
        }
      }], [{
        key: "from",
        value: function from(item) {
          if (ES.IsTemporalDuration(item)) {
            return new Duration2(GetSlot(item, YEARS), GetSlot(item, MONTHS), GetSlot(item, WEEKS), GetSlot(item, DAYS), GetSlot(item, HOURS), GetSlot(item, MINUTES), GetSlot(item, SECONDS), GetSlot(item, MILLISECONDS), GetSlot(item, MICROSECONDS), GetSlot(item, NANOSECONDS));
          }
          return ES.ToTemporalDuration(item);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
          one = ES.ToTemporalDuration(one);
          two = ES.ToTemporalDuration(two);
          options = ES.GetOptionsObject(options);
          var relativeTo = ES.ToRelativeTemporalObject(options);
          var y1 = GetSlot(one, YEARS);
          var mon1 = GetSlot(one, MONTHS);
          var w1 = GetSlot(one, WEEKS);
          var d1 = GetSlot(one, DAYS);
          var h1 = GetSlot(one, HOURS);
          var min1 = GetSlot(one, MINUTES);
          var s1 = GetSlot(one, SECONDS);
          var ms1 = GetSlot(one, MILLISECONDS);
          var \u00B5s1 = GetSlot(one, MICROSECONDS);
          var ns1 = GetSlot(one, NANOSECONDS);
          var y2 = GetSlot(two, YEARS);
          var mon2 = GetSlot(two, MONTHS);
          var w2 = GetSlot(two, WEEKS);
          var d2 = GetSlot(two, DAYS);
          var h2 = GetSlot(two, HOURS);
          var min2 = GetSlot(two, MINUTES);
          var s2 = GetSlot(two, SECONDS);
          var ms2 = GetSlot(two, MILLISECONDS);
          var \u00B5s2 = GetSlot(two, MICROSECONDS);
          var ns2 = GetSlot(two, NANOSECONDS);
          var shift1 = ES.CalculateOffsetShift(relativeTo, y1, mon1, w1, d1, h1, min1, s1, ms1, \u00B5s1, ns1);
          var shift2 = ES.CalculateOffsetShift(relativeTo, y2, mon2, w2, d2, h2, min2, s2, ms2, \u00B5s2, ns2);
          if (y1 !== 0 || y2 !== 0 || mon1 !== 0 || mon2 !== 0 || w1 !== 0 || w2 !== 0) {
            var _ES$UnbalanceDuration3 = ES.UnbalanceDurationRelative(y1, mon1, w1, d1, "days", relativeTo);
            d1 = _ES$UnbalanceDuration3.days;
            var _ES$UnbalanceDuration4 = ES.UnbalanceDurationRelative(y2, mon2, w2, d2, "days", relativeTo);
            d2 = _ES$UnbalanceDuration4.days;
          }
          ns1 = ES.TotalDurationNanoseconds(d1, h1, min1, s1, ms1, \u00B5s1, ns1, shift1);
          ns2 = ES.TotalDurationNanoseconds(d2, h2, min2, s2, ms2, \u00B5s2, ns2, shift2);
          return ES.ComparisonResult(ns1.minus(ns2).toJSNumber());
        }
      }]);
      return Duration2;
    }();
    MakeIntrinsicClass(Duration, "Temporal.Duration");
    var ObjectCreate$1 = Object.create;
    var PlainMonthDay = /* @__PURE__ */ function() {
      function PlainMonthDay2(isoMonth, isoDay) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        var referenceISOYear = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1972;
        _classCallCheck(this, PlainMonthDay2);
        isoMonth = ES.ToInteger(isoMonth);
        isoDay = ES.ToInteger(isoDay);
        calendar2 = ES.ToTemporalCalendar(calendar2);
        referenceISOYear = ES.ToInteger(referenceISOYear);
        if (arguments.length < 2) {
          throw new RangeError("missing argument: isoMonth and isoDay are required");
        }
        ES.CreateTemporalMonthDaySlots(this, isoMonth, isoDay, calendar2, referenceISOYear);
      }
      _createClass(PlainMonthDay2, [{
        key: "monthCode",
        get: function get() {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthCode(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "day",
        get: function get() {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDay(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "with",
        value: function _with(temporalMonthDayLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalMonthDayLike) !== "Object") {
            throw new TypeError("invalid argument");
          }
          if (HasSlot(temporalMonthDayLike, CALENDAR) || HasSlot(temporalMonthDayLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalMonthDayLike.calendar !== void 0) {
            throw new TypeError("with() does not support a calendar property");
          }
          if (temporalMonthDayLike.timeZone !== void 0) {
            throw new TypeError("with() does not support a timeZone property");
          }
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "month", "monthCode", "year"]);
          var props = ES.ToPartialRecord(temporalMonthDayLike, fieldNames);
          if (!props) {
            throw new TypeError("invalid month-day-like");
          }
          var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
          fields = ES.CalendarMergeFields(calendar2, fields, props);
          fields = ES.ToTemporalMonthDayFields(fields, fieldNames);
          options = ES.GetOptionsObject(options);
          return ES.MonthDayFromFields(calendar2, fields, options);
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalMonthDay(other);
          for (var _i = 0, _arr = [ISO_MONTH, ISO_DAY, ISO_YEAR]; _i < _arr.length; _i++) {
            var slot = _arr[_i];
            var val1 = GetSlot(this, slot);
            var val2 = GetSlot(other, slot);
            if (val1 !== val2)
              return false;
          }
          return ES.CalendarEquals(this, other);
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var showCalendar = ES.ToShowCalendarOption(options);
          return ES.TemporalMonthDayToString(this, showCalendar);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalMonthDayToString(this);
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use equals() to compare Temporal.PlainMonthDay");
        }
      }, {
        key: "toPlainDate",
        value: function toPlainDate(item) {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var receiverFieldNames = ES.CalendarFields(calendar2, ["day", "monthCode"]);
          var fields = ES.ToTemporalMonthDayFields(this, receiverFieldNames);
          var inputFieldNames = ES.CalendarFields(calendar2, ["year"]);
          var inputEntries = [["year", void 0]];
          inputFieldNames.forEach(function(fieldName) {
            if (!inputEntries.some(function(_ref) {
              var _ref2 = _slicedToArray(_ref, 1), name = _ref2[0];
              return name === fieldName;
            })) {
              inputEntries.push([fieldName, void 0]);
            }
          });
          var inputFields = ES.PrepareTemporalFields(item, inputEntries);
          var mergedFields = ES.CalendarMergeFields(calendar2, fields, inputFields);
          var mergedFieldNames = _toConsumableArray(new Set([].concat(_toConsumableArray(receiverFieldNames), _toConsumableArray(inputFieldNames))));
          var mergedEntries = [];
          mergedFieldNames.forEach(function(fieldName) {
            if (!mergedEntries.some(function(_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1), name = _ref4[0];
              return name === fieldName;
            })) {
              mergedEntries.push([fieldName, void 0]);
            }
          });
          mergedFields = ES.PrepareTemporalFields(mergedFields, mergedEntries);
          var options = ObjectCreate$1(null);
          return ES.DateFromFields(calendar2, mergedFields, options);
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalMonthDay(this))
            throw new TypeError("invalid receiver");
          return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          if (ES.IsTemporalMonthDay(item)) {
            ES.ToTemporalOverflow(options);
            return ES.CreateTemporalMonthDay(GetSlot(item, ISO_MONTH), GetSlot(item, ISO_DAY), GetSlot(item, CALENDAR), GetSlot(item, ISO_YEAR));
          }
          return ES.ToTemporalMonthDay(item, options);
        }
      }]);
      return PlainMonthDay2;
    }();
    MakeIntrinsicClass(PlainMonthDay, "Temporal.PlainMonthDay");
    var now = {
      instant,
      plainDateTime,
      plainDateTimeISO,
      plainDate,
      plainDateISO,
      plainTimeISO,
      timeZone,
      zonedDateTime,
      zonedDateTimeISO
    };
    function instant() {
      var Instant2 = GetIntrinsic("%Temporal.Instant%");
      return new Instant2(ES.SystemUTCEpochNanoSeconds());
    }
    function plainDateTime(calendarLike) {
      var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : timeZone();
      return function() {
        var timeZone2 = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        var calendar2 = ES.ToTemporalCalendar(calendarLike);
        var inst = instant();
        return ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, inst, calendar2);
      }();
    }
    function plainDateTimeISO() {
      var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : timeZone();
      return function() {
        var timeZone2 = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        var calendar2 = ES.GetISO8601Calendar();
        var inst = instant();
        return ES.BuiltinTimeZoneGetPlainDateTimeFor(timeZone2, inst, calendar2);
      }();
    }
    function zonedDateTime(calendarLike) {
      var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : timeZone();
      return function() {
        var timeZone2 = ES.ToTemporalTimeZone(temporalTimeZoneLike);
        var calendar2 = ES.ToTemporalCalendar(calendarLike);
        return ES.CreateTemporalZonedDateTime(ES.SystemUTCEpochNanoSeconds(), timeZone2, calendar2);
      }();
    }
    function zonedDateTimeISO() {
      var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : timeZone();
      return zonedDateTime(ES.GetISO8601Calendar(), temporalTimeZoneLike);
    }
    function plainDate(calendarLike) {
      var temporalTimeZoneLike = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : timeZone();
      return ES.TemporalDateTimeToDate(plainDateTime(calendarLike, temporalTimeZoneLike));
    }
    function plainDateISO() {
      var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : timeZone();
      return ES.TemporalDateTimeToDate(plainDateTimeISO(temporalTimeZoneLike));
    }
    function plainTimeISO() {
      var temporalTimeZoneLike = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : timeZone();
      return ES.TemporalDateTimeToTime(plainDateTimeISO(temporalTimeZoneLike));
    }
    function timeZone() {
      return ES.SystemTimeZone();
    }
    var ObjectAssign = Object.assign;
    function TemporalTimeToString(time2, precision) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
      var hour = GetSlot(time2, ISO_HOUR);
      var minute = GetSlot(time2, ISO_MINUTE);
      var second = GetSlot(time2, ISO_SECOND);
      var millisecond = GetSlot(time2, ISO_MILLISECOND);
      var microsecond = GetSlot(time2, ISO_MICROSECOND);
      var nanosecond = GetSlot(time2, ISO_NANOSECOND);
      if (options) {
        var unit = options.unit, increment = options.increment, roundingMode = options.roundingMode;
        var _ES$RoundTime = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, increment, unit, roundingMode);
        hour = _ES$RoundTime.hour;
        minute = _ES$RoundTime.minute;
        second = _ES$RoundTime.second;
        millisecond = _ES$RoundTime.millisecond;
        microsecond = _ES$RoundTime.microsecond;
        nanosecond = _ES$RoundTime.nanosecond;
      }
      hour = ES.ISODateTimePartString(hour);
      minute = ES.ISODateTimePartString(minute);
      var seconds = ES.FormatSecondsStringPart(second, millisecond, microsecond, nanosecond, precision);
      return "".concat(hour, ":").concat(minute).concat(seconds);
    }
    var PlainTime = /* @__PURE__ */ function() {
      function PlainTime2() {
        var isoHour = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var isoMinute = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var isoSecond = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
        var isoMillisecond = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
        var isoMicrosecond = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
        var isoNanosecond = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
        _classCallCheck(this, PlainTime2);
        isoHour = ES.ToInteger(isoHour);
        isoMinute = ES.ToInteger(isoMinute);
        isoSecond = ES.ToInteger(isoSecond);
        isoMillisecond = ES.ToInteger(isoMillisecond);
        isoMicrosecond = ES.ToInteger(isoMicrosecond);
        isoNanosecond = ES.ToInteger(isoNanosecond);
        ES.RejectTime(isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond);
        CreateSlots(this);
        SetSlot(this, ISO_HOUR, isoHour);
        SetSlot(this, ISO_MINUTE, isoMinute);
        SetSlot(this, ISO_SECOND, isoSecond);
        SetSlot(this, ISO_MILLISECOND, isoMillisecond);
        SetSlot(this, ISO_MICROSECOND, isoMicrosecond);
        SetSlot(this, ISO_NANOSECOND, isoNanosecond);
        SetSlot(this, CALENDAR, ES.GetISO8601Calendar());
        {
          Object.defineProperty(this, "_repr_", {
            value: "".concat(this[Symbol.toStringTag], " <").concat(TemporalTimeToString(this, "auto"), ">"),
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
      _createClass(PlainTime2, [{
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "hour",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_HOUR);
        }
      }, {
        key: "minute",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MINUTE);
        }
      }, {
        key: "second",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_SECOND);
        }
      }, {
        key: "millisecond",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MILLISECOND);
        }
      }, {
        key: "microsecond",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_MICROSECOND);
        }
      }, {
        key: "nanosecond",
        get: function get() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, ISO_NANOSECOND);
        }
      }, {
        key: "with",
        value: function _with(temporalTimeLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalTimeLike) !== "Object") {
            throw new TypeError("invalid argument");
          }
          if (HasSlot(temporalTimeLike, CALENDAR) || HasSlot(temporalTimeLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalTimeLike.calendar !== void 0) {
            throw new TypeError("with() does not support a calendar property");
          }
          if (temporalTimeLike.timeZone !== void 0) {
            throw new TypeError("with() does not support a timeZone property");
          }
          options = ES.GetOptionsObject(options);
          var overflow = ES.ToTemporalOverflow(options);
          var props = ES.ToPartialRecord(temporalTimeLike, ["hour", "microsecond", "millisecond", "minute", "nanosecond", "second"]);
          if (!props) {
            throw new TypeError("invalid time-like");
          }
          var fields = ES.ToTemporalTimeRecord(this);
          var _ObjectAssign = ObjectAssign(fields, props), hour = _ObjectAssign.hour, minute = _ObjectAssign.minute, second = _ObjectAssign.second, millisecond = _ObjectAssign.millisecond, microsecond = _ObjectAssign.microsecond, nanosecond = _ObjectAssign.nanosecond;
          var _ES$RegulateTime = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, overflow);
          hour = _ES$RegulateTime.hour;
          minute = _ES$RegulateTime.minute;
          second = _ES$RegulateTime.second;
          millisecond = _ES$RegulateTime.millisecond;
          microsecond = _ES$RegulateTime.microsecond;
          nanosecond = _ES$RegulateTime.nanosecond;
          return new PlainTime2(hour, minute, second, millisecond, microsecond, nanosecond);
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          var _ES$AddTime = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          hour = _ES$AddTime.hour;
          minute = _ES$AddTime.minute;
          second = _ES$AddTime.second;
          millisecond = _ES$AddTime.millisecond;
          microsecond = _ES$AddTime.microsecond;
          nanosecond = _ES$AddTime.nanosecond;
          var _ES$RegulateTime2 = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, "reject");
          hour = _ES$RegulateTime2.hour;
          minute = _ES$RegulateTime2.minute;
          second = _ES$RegulateTime2.second;
          millisecond = _ES$RegulateTime2.millisecond;
          microsecond = _ES$RegulateTime2.microsecond;
          nanosecond = _ES$RegulateTime2.nanosecond;
          return new PlainTime2(hour, minute, second, millisecond, microsecond, nanosecond);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          var _ES$AddTime2 = ES.AddTime(hour, minute, second, millisecond, microsecond, nanosecond, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
          hour = _ES$AddTime2.hour;
          minute = _ES$AddTime2.minute;
          second = _ES$AddTime2.second;
          millisecond = _ES$AddTime2.millisecond;
          microsecond = _ES$AddTime2.microsecond;
          nanosecond = _ES$AddTime2.nanosecond;
          var _ES$RegulateTime3 = ES.RegulateTime(hour, minute, second, millisecond, microsecond, nanosecond, "reject");
          hour = _ES$RegulateTime3.hour;
          minute = _ES$RegulateTime3.minute;
          second = _ES$RegulateTime3.second;
          millisecond = _ES$RegulateTime3.millisecond;
          microsecond = _ES$RegulateTime3.microsecond;
          nanosecond = _ES$RegulateTime3.nanosecond;
          return new PlainTime2(hour, minute, second, millisecond, microsecond, nanosecond);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalTime(other);
          options = ES.GetOptionsObject(options);
          var largestUnit = ES.ToLargestTemporalUnit(options, "hours", ["years", "months", "weeks", "days"]);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var maximumIncrements = {
            hours: 24,
            minutes: 60,
            seconds: 60,
            milliseconds: 1e3,
            microseconds: 1e3,
            nanoseconds: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var _ES$DifferenceTime = ES.DifferenceTime(GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND), GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND)), hours = _ES$DifferenceTime.hours, minutes = _ES$DifferenceTime.minutes, seconds = _ES$DifferenceTime.seconds, milliseconds = _ES$DifferenceTime.milliseconds, microseconds = _ES$DifferenceTime.microseconds, nanoseconds = _ES$DifferenceTime.nanoseconds;
          var _ES$RoundDuration = ES.RoundDuration(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode);
          hours = _ES$RoundDuration.hours;
          minutes = _ES$RoundDuration.minutes;
          seconds = _ES$RoundDuration.seconds;
          milliseconds = _ES$RoundDuration.milliseconds;
          microseconds = _ES$RoundDuration.microseconds;
          nanoseconds = _ES$RoundDuration.nanoseconds;
          var _ES$BalanceDuration = ES.BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          hours = _ES$BalanceDuration.hours;
          minutes = _ES$BalanceDuration.minutes;
          seconds = _ES$BalanceDuration.seconds;
          milliseconds = _ES$BalanceDuration.milliseconds;
          microseconds = _ES$BalanceDuration.microseconds;
          nanoseconds = _ES$BalanceDuration.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalTime(other);
          options = ES.GetOptionsObject(options);
          var largestUnit = ES.ToLargestTemporalUnit(options, "hours", ["years", "months", "weeks", "days"]);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var maximumIncrements = {
            hours: 24,
            minutes: 60,
            seconds: 60,
            milliseconds: 1e3,
            microseconds: 1e3,
            nanoseconds: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var _ES$DifferenceTime2 = ES.DifferenceTime(GetSlot(other, ISO_HOUR), GetSlot(other, ISO_MINUTE), GetSlot(other, ISO_SECOND), GetSlot(other, ISO_MILLISECOND), GetSlot(other, ISO_MICROSECOND), GetSlot(other, ISO_NANOSECOND), GetSlot(this, ISO_HOUR), GetSlot(this, ISO_MINUTE), GetSlot(this, ISO_SECOND), GetSlot(this, ISO_MILLISECOND), GetSlot(this, ISO_MICROSECOND), GetSlot(this, ISO_NANOSECOND)), hours = _ES$DifferenceTime2.hours, minutes = _ES$DifferenceTime2.minutes, seconds = _ES$DifferenceTime2.seconds, milliseconds = _ES$DifferenceTime2.milliseconds, microseconds = _ES$DifferenceTime2.microseconds, nanoseconds = _ES$DifferenceTime2.nanoseconds;
          var _ES$RoundDuration2 = ES.RoundDuration(0, 0, 0, 0, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode));
          hours = _ES$RoundDuration2.hours;
          minutes = _ES$RoundDuration2.minutes;
          seconds = _ES$RoundDuration2.seconds;
          milliseconds = _ES$RoundDuration2.milliseconds;
          microseconds = _ES$RoundDuration2.microseconds;
          nanoseconds = _ES$RoundDuration2.nanoseconds;
          hours = -hours;
          minutes = -minutes;
          seconds = -seconds;
          milliseconds = -milliseconds;
          microseconds = -microseconds;
          nanoseconds = -nanoseconds;
          var _ES$BalanceDuration2 = ES.BalanceDuration(0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
          hours = _ES$BalanceDuration2.hours;
          minutes = _ES$BalanceDuration2.minutes;
          seconds = _ES$BalanceDuration2.seconds;
          milliseconds = _ES$BalanceDuration2.milliseconds;
          microseconds = _ES$BalanceDuration2.microseconds;
          nanoseconds = _ES$BalanceDuration2.nanoseconds;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(0, 0, 0, 0, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "round",
        value: function round(options) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          if (options === void 0)
            throw new TypeError("options parameter is required");
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalUnit(options, ["day"]);
          var roundingMode = ES.ToTemporalRoundingMode(options, "halfExpand");
          var maximumIncrements = {
            hour: 24,
            minute: 60,
            second: 60,
            millisecond: 1e3,
            microsecond: 1e3,
            nanosecond: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          var _ES$RoundTime2 = ES.RoundTime(hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode);
          hour = _ES$RoundTime2.hour;
          minute = _ES$RoundTime2.minute;
          second = _ES$RoundTime2.second;
          millisecond = _ES$RoundTime2.millisecond;
          microsecond = _ES$RoundTime2.microsecond;
          nanosecond = _ES$RoundTime2.nanosecond;
          return new PlainTime2(hour, minute, second, millisecond, microsecond, nanosecond);
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalTime(other);
          for (var _i = 0, _arr = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i < _arr.length; _i++) {
            var slot = _arr[_i];
            var val1 = GetSlot(this, slot);
            var val2 = GetSlot(other, slot);
            if (val1 !== val2)
              return false;
          }
          return true;
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options), precision = _ES$ToSecondsStringPr.precision, unit = _ES$ToSecondsStringPr.unit, increment = _ES$ToSecondsStringPr.increment;
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          return TemporalTimeToString(this, precision, {
            unit,
            increment,
            roundingMode
          });
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return TemporalTimeToString(this, "auto");
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.PlainTime");
        }
      }, {
        key: "toPlainDateTime",
        value: function toPlainDateTime(temporalDate) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          temporalDate = ES.ToTemporalDate(temporalDate);
          var year = GetSlot(temporalDate, ISO_YEAR);
          var month = GetSlot(temporalDate, ISO_MONTH);
          var day = GetSlot(temporalDate, ISO_DAY);
          var calendar2 = GetSlot(temporalDate, CALENDAR);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          return ES.CreateTemporalDateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, calendar2);
        }
      }, {
        key: "toZonedDateTime",
        value: function toZonedDateTime(item) {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(item) !== "Object") {
            throw new TypeError("invalid argument");
          }
          var dateLike = item.plainDate;
          if (dateLike === void 0) {
            throw new TypeError("missing date property");
          }
          var temporalDate = ES.ToTemporalDate(dateLike);
          var timeZoneLike = item.timeZone;
          if (timeZoneLike === void 0) {
            throw new TypeError("missing timeZone property");
          }
          var timeZone2 = ES.ToTemporalTimeZone(timeZoneLike);
          var year = GetSlot(temporalDate, ISO_YEAR);
          var month = GetSlot(temporalDate, ISO_MONTH);
          var day = GetSlot(temporalDate, ISO_DAY);
          var calendar2 = GetSlot(temporalDate, CALENDAR);
          var hour = GetSlot(this, ISO_HOUR);
          var minute = GetSlot(this, ISO_MINUTE);
          var second = GetSlot(this, ISO_SECOND);
          var millisecond = GetSlot(this, ISO_MILLISECOND);
          var microsecond = GetSlot(this, ISO_MICROSECOND);
          var nanosecond = GetSlot(this, ISO_NANOSECOND);
          var PlainDateTime2 = GetIntrinsic("%Temporal.PlainDateTime%");
          var dt = new PlainDateTime2(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, "compatible");
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalTime(this))
            throw new TypeError("invalid receiver");
          return {
            calendar: GetSlot(this, CALENDAR),
            isoHour: GetSlot(this, ISO_HOUR),
            isoMicrosecond: GetSlot(this, ISO_MICROSECOND),
            isoMillisecond: GetSlot(this, ISO_MILLISECOND),
            isoMinute: GetSlot(this, ISO_MINUTE),
            isoNanosecond: GetSlot(this, ISO_NANOSECOND),
            isoSecond: GetSlot(this, ISO_SECOND)
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          var overflow = ES.ToTemporalOverflow(options);
          if (ES.IsTemporalTime(item)) {
            return new PlainTime2(GetSlot(item, ISO_HOUR), GetSlot(item, ISO_MINUTE), GetSlot(item, ISO_SECOND), GetSlot(item, ISO_MILLISECOND), GetSlot(item, ISO_MICROSECOND), GetSlot(item, ISO_NANOSECOND));
          }
          return ES.ToTemporalTime(item, overflow);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalTime(one);
          two = ES.ToTemporalTime(two);
          for (var _i2 = 0, _arr2 = [ISO_HOUR, ISO_MINUTE, ISO_SECOND, ISO_MILLISECOND, ISO_MICROSECOND, ISO_NANOSECOND]; _i2 < _arr2.length; _i2++) {
            var slot = _arr2[_i2];
            var val1 = GetSlot(one, slot);
            var val2 = GetSlot(two, slot);
            if (val1 !== val2)
              return ES.ComparisonResult(val1 - val2);
          }
          return 0;
        }
      }]);
      return PlainTime2;
    }();
    MakeIntrinsicClass(PlainTime, "Temporal.PlainTime");
    var ObjectCreate = Object.create;
    var PlainYearMonth = /* @__PURE__ */ function() {
      function PlainYearMonth2(isoYear, isoMonth) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        var referenceISODay = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        _classCallCheck(this, PlainYearMonth2);
        isoYear = ES.ToInteger(isoYear);
        isoMonth = ES.ToInteger(isoMonth);
        calendar2 = ES.ToTemporalCalendar(calendar2);
        referenceISODay = ES.ToInteger(referenceISODay);
        if (arguments.length < 2) {
          throw new RangeError("missing argument: isoYear and isoMonth are required");
        }
        ES.CreateTemporalYearMonthSlots(this, isoYear, isoMonth, calendar2, referenceISODay);
      }
      _createClass(PlainYearMonth2, [{
        key: "year",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "month",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthCode",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthCode(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "era",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEra(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "eraYear",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEraYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInMonth",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInMonth(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "daysInYear",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "monthsInYear",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthsInYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "inLeapYear",
        get: function get() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarInLeapYear(GetSlot(this, CALENDAR), this);
        }
      }, {
        key: "with",
        value: function _with(temporalYearMonthLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalYearMonthLike) !== "Object") {
            throw new TypeError("invalid argument");
          }
          if (HasSlot(temporalYearMonthLike, CALENDAR) || HasSlot(temporalYearMonthLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalYearMonthLike.calendar !== void 0) {
            throw new TypeError("with() does not support a calendar property");
          }
          if (temporalYearMonthLike.timeZone !== void 0) {
            throw new TypeError("with() does not support a timeZone property");
          }
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["month", "monthCode", "year"]);
          var props = ES.ToPartialRecord(temporalYearMonthLike, fieldNames);
          if (!props) {
            throw new TypeError("invalid year-month-like");
          }
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          fields = ES.CalendarMergeFields(calendar2, fields, props);
          fields = ES.ToTemporalYearMonthFields(fields, fieldNames);
          options = ES.GetOptionsObject(options);
          return ES.YearMonthFromFields(calendar2, fields, options);
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var _ES$BalanceDuration = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, "days");
          days = _ES$BalanceDuration.days;
          options = ES.GetOptionsObject(options);
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          var sign2 = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
          var day = sign2 < 0 ? ES.CalendarDaysInMonth(calendar2, this) : 1;
          var startDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, fields), {}, {
            day
          }));
          var addedDate = ES.CalendarDateAdd(calendar2, startDate, _objectSpread2(_objectSpread2({}, duration2), {}, {
            days
          }), options);
          var addedDateFields = ES.ToTemporalYearMonthFields(addedDate, fieldNames);
          return ES.YearMonthFromFields(calendar2, addedDateFields, options);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          duration2 = {
            years: -duration2.years,
            months: -duration2.months,
            weeks: -duration2.weeks,
            days: -duration2.days,
            hours: -duration2.hours,
            minutes: -duration2.minutes,
            seconds: -duration2.seconds,
            milliseconds: -duration2.milliseconds,
            microseconds: -duration2.microseconds,
            nanoseconds: -duration2.nanoseconds
          };
          var _duration = duration2, years = _duration.years, months = _duration.months, weeks = _duration.weeks, days = _duration.days, hours = _duration.hours, minutes = _duration.minutes, seconds = _duration.seconds, milliseconds = _duration.milliseconds, microseconds = _duration.microseconds, nanoseconds = _duration.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          var _ES$BalanceDuration2 = ES.BalanceDuration(days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, "days");
          days = _ES$BalanceDuration2.days;
          options = ES.GetOptionsObject(options);
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          var sign2 = ES.DurationSign(years, months, weeks, days, 0, 0, 0, 0, 0, 0);
          var day = sign2 < 0 ? ES.CalendarDaysInMonth(calendar2, this) : 1;
          var startDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, fields), {}, {
            day
          }));
          var addedDate = ES.CalendarDateAdd(calendar2, startDate, _objectSpread2(_objectSpread2({}, duration2), {}, {
            days
          }), options);
          var addedDateFields = ES.ToTemporalYearMonthFields(addedDate, fieldNames);
          return ES.YearMonthFromFields(calendar2, addedDateFields, options);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalYearMonth(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarID2 = ES.ToString(calendar2);
          var otherCalendarID = ES.ToString(otherCalendar);
          if (calendarID2 !== otherCalendarID) {
            throw new RangeError("cannot compute difference between months of ".concat(calendarID2, " and ").concat(otherCalendarID, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var disallowedUnits = ["weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "months", disallowedUnits);
          var largestUnit = ES.ToLargestTemporalUnit(options, "years", disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, void 0, false);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var otherFields = ES.ToTemporalYearMonthFields(other, fieldNames);
          var thisFields = ES.ToTemporalYearMonthFields(this, fieldNames);
          var otherDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, otherFields), {}, {
            day: 1
          }));
          var thisDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, thisFields), {}, {
            day: 1
          }));
          var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
            largestUnit
          });
          var result = ES.CalendarDateUntil(calendar2, thisDate, otherDate, untilOptions);
          if (smallestUnit === "months" && roundingIncrement === 1)
            return result;
          var years = result.years, months = result.months;
          var relativeTo = ES.CreateTemporalDateTime(GetSlot(thisDate, ISO_YEAR), GetSlot(thisDate, ISO_MONTH), GetSlot(thisDate, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar2);
          var _ES$RoundDuration = ES.RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, roundingMode, relativeTo);
          years = _ES$RoundDuration.years;
          months = _ES$RoundDuration.months;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(years, months, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalYearMonth(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarID2 = ES.ToString(calendar2);
          var otherCalendarID = ES.ToString(otherCalendar);
          if (calendarID2 !== otherCalendarID) {
            throw new RangeError("cannot compute difference between months of ".concat(calendarID2, " and ").concat(otherCalendarID, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var disallowedUnits = ["weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "months", disallowedUnits);
          var largestUnit = ES.ToLargestTemporalUnit(options, "years", disallowedUnits);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, void 0, false);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var otherFields = ES.ToTemporalYearMonthFields(other, fieldNames);
          var thisFields = ES.ToTemporalYearMonthFields(this, fieldNames);
          var otherDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, otherFields), {}, {
            day: 1
          }));
          var thisDate = ES.DateFromFields(calendar2, _objectSpread2(_objectSpread2({}, thisFields), {}, {
            day: 1
          }));
          var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
            largestUnit
          });
          var _ES$CalendarDateUntil = ES.CalendarDateUntil(calendar2, thisDate, otherDate, untilOptions), years = _ES$CalendarDateUntil.years, months = _ES$CalendarDateUntil.months;
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          if (smallestUnit === "months" && roundingIncrement === 1) {
            return new Duration2(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          var relativeTo = ES.CreateTemporalDateTime(GetSlot(thisDate, ISO_YEAR), GetSlot(thisDate, ISO_MONTH), GetSlot(thisDate, ISO_DAY), 0, 0, 0, 0, 0, 0, calendar2);
          var _ES$RoundDuration2 = ES.RoundDuration(years, months, 0, 0, 0, 0, 0, 0, 0, 0, roundingIncrement, smallestUnit, ES.NegateTemporalRoundingMode(roundingMode), relativeTo);
          years = _ES$RoundDuration2.years;
          months = _ES$RoundDuration2.months;
          return new Duration2(-years, -months, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalYearMonth(other);
          for (var _i = 0, _arr = [ISO_YEAR, ISO_MONTH, ISO_DAY]; _i < _arr.length; _i++) {
            var slot = _arr[_i];
            var val1 = GetSlot(this, slot);
            var val2 = GetSlot(other, slot);
            if (val1 !== val2)
              return false;
          }
          return ES.CalendarEquals(this, other);
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var showCalendar = ES.ToShowCalendarOption(options);
          return ES.TemporalYearMonthToString(this, showCalendar);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalYearMonthToString(this);
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.PlainYearMonth");
        }
      }, {
        key: "toPlainDate",
        value: function toPlainDate(item) {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var receiverFieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, receiverFieldNames);
          var inputFieldNames = ES.CalendarFields(calendar2, ["day"]);
          var inputEntries = [["day"]];
          inputFieldNames.forEach(function(fieldName) {
            if (!inputEntries.some(function(_ref) {
              var _ref2 = _slicedToArray(_ref, 1), name = _ref2[0];
              return name === fieldName;
            })) {
              inputEntries.push([fieldName, void 0]);
            }
          });
          var inputFields = ES.PrepareTemporalFields(item, inputEntries);
          var mergedFields = ES.CalendarMergeFields(calendar2, fields, inputFields);
          var mergedFieldNames = _toConsumableArray(new Set([].concat(_toConsumableArray(receiverFieldNames), _toConsumableArray(inputFieldNames))));
          var mergedEntries = [];
          mergedFieldNames.forEach(function(fieldName) {
            if (!mergedEntries.some(function(_ref3) {
              var _ref4 = _slicedToArray(_ref3, 1), name = _ref4[0];
              return name === fieldName;
            })) {
              mergedEntries.push([fieldName, void 0]);
            }
          });
          mergedFields = ES.PrepareTemporalFields(mergedFields, mergedEntries);
          var options = ObjectCreate(null);
          options.overflow = "reject";
          return ES.DateFromFields(calendar2, mergedFields, options);
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalYearMonth(this))
            throw new TypeError("invalid receiver");
          return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(this, ISO_DAY),
            isoMonth: GetSlot(this, ISO_MONTH),
            isoYear: GetSlot(this, ISO_YEAR)
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          if (ES.IsTemporalYearMonth(item)) {
            ES.ToTemporalOverflow(options);
            return ES.CreateTemporalYearMonth(GetSlot(item, ISO_YEAR), GetSlot(item, ISO_MONTH), GetSlot(item, CALENDAR), GetSlot(item, ISO_DAY));
          }
          return ES.ToTemporalYearMonth(item, options);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalYearMonth(one);
          two = ES.ToTemporalYearMonth(two);
          return ES.CompareISODate(GetSlot(one, ISO_YEAR), GetSlot(one, ISO_MONTH), GetSlot(one, ISO_DAY), GetSlot(two, ISO_YEAR), GetSlot(two, ISO_MONTH), GetSlot(two, ISO_DAY));
        }
      }]);
      return PlainYearMonth2;
    }();
    MakeIntrinsicClass(PlainYearMonth, "Temporal.PlainYearMonth");
    var ArrayPrototypePush = Array.prototype.push;
    var ZonedDateTime = /* @__PURE__ */ function() {
      function ZonedDateTime2(epochNanoseconds, timeZone2) {
        var calendar2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ES.GetISO8601Calendar();
        _classCallCheck(this, ZonedDateTime2);
        if (arguments.length < 1) {
          throw new TypeError("missing argument: epochNanoseconds is required");
        }
        epochNanoseconds = ES.ToBigInt(epochNanoseconds);
        timeZone2 = ES.ToTemporalTimeZone(timeZone2);
        calendar2 = ES.ToTemporalCalendar(calendar2);
        ES.CreateTemporalZonedDateTimeSlots(this, epochNanoseconds, timeZone2, calendar2);
      }
      _createClass(ZonedDateTime2, [{
        key: "calendar",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, CALENDAR);
        }
      }, {
        key: "timeZone",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(this, TIME_ZONE);
        }
      }, {
        key: "year",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "month",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonth(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "monthCode",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthCode(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "day",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDay(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "hour",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_HOUR);
        }
      }, {
        key: "minute",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_MINUTE);
        }
      }, {
        key: "second",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_SECOND);
        }
      }, {
        key: "millisecond",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_MILLISECOND);
        }
      }, {
        key: "microsecond",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_MICROSECOND);
        }
      }, {
        key: "nanosecond",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return GetSlot(dateTime(this), ISO_NANOSECOND);
        }
      }, {
        key: "era",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEra(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "eraYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarEraYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "epochSeconds",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var value = GetSlot(this, EPOCHNANOSECONDS);
          return +value.divide(1e9);
        }
      }, {
        key: "epochMilliseconds",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var value = GetSlot(this, EPOCHNANOSECONDS);
          return +value.divide(1e6);
        }
      }, {
        key: "epochMicroseconds",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var value = GetSlot(this, EPOCHNANOSECONDS);
          return bigIntIfAvailable$1(value.divide(1e3));
        }
      }, {
        key: "epochNanoseconds",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return bigIntIfAvailable$1(GetSlot(this, EPOCHNANOSECONDS));
        }
      }, {
        key: "dayOfWeek",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfWeek(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "dayOfYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDayOfYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "weekOfYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarWeekOfYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "hoursInDay",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var dt = dateTime(this);
          var DateTime = GetIntrinsic("%Temporal.PlainDateTime%");
          var year = GetSlot(dt, ISO_YEAR);
          var month = GetSlot(dt, ISO_MONTH);
          var day = GetSlot(dt, ISO_DAY);
          var today = new DateTime(year, month, day, 0, 0, 0, 0, 0, 0);
          var tomorrowFields = ES.AddISODate(year, month, day, 0, 0, 0, 1, "reject");
          var tomorrow = new DateTime(tomorrowFields.year, tomorrowFields.month, tomorrowFields.day, 0, 0, 0, 0, 0, 0);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var todayNs = GetSlot(ES.BuiltinTimeZoneGetInstantFor(timeZone2, today, "compatible"), EPOCHNANOSECONDS);
          var tomorrowNs = GetSlot(ES.BuiltinTimeZoneGetInstantFor(timeZone2, tomorrow, "compatible"), EPOCHNANOSECONDS);
          return tomorrowNs.subtract(todayNs).toJSNumber() / 36e11;
        }
      }, {
        key: "daysInWeek",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInWeek(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "daysInMonth",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInMonth(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "daysInYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarDaysInYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "monthsInYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarMonthsInYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "inLeapYear",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.CalendarInLeapYear(GetSlot(this, CALENDAR), dateTime(this));
        }
      }, {
        key: "offset",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.BuiltinTimeZoneGetOffsetStringFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
        }
      }, {
        key: "offsetNanoseconds",
        get: function get() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.GetOffsetNanosecondsFor(GetSlot(this, TIME_ZONE), GetSlot(this, INSTANT));
        }
      }, {
        key: "with",
        value: function _with(temporalZonedDateTimeLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          if (ES.Type(temporalZonedDateTimeLike) !== "Object") {
            throw new TypeError("invalid zoned-date-time-like");
          }
          if (HasSlot(temporalZonedDateTimeLike, CALENDAR) || HasSlot(temporalZonedDateTimeLike, TIME_ZONE)) {
            throw new TypeError("with() does not support a calendar or timeZone property");
          }
          if (temporalZonedDateTimeLike.calendar !== void 0) {
            throw new TypeError("calendar invalid for with(). use withCalendar()");
          }
          if (temporalZonedDateTimeLike.timeZone !== void 0) {
            throw new TypeError("timeZone invalid for with(). use withTimeZone()");
          }
          options = ES.GetOptionsObject(options);
          var disambiguation = ES.ToTemporalDisambiguation(options);
          var offset2 = ES.ToTemporalOffset(options, "prefer");
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "hour", "microsecond", "millisecond", "minute", "month", "monthCode", "nanosecond", "second", "year"]);
          ArrayPrototypePush.call(fieldNames, "offset");
          var props = ES.ToPartialRecord(temporalZonedDateTimeLike, fieldNames);
          if (!props) {
            throw new TypeError("invalid zoned-date-time-like");
          }
          var fields = ES.ToTemporalZonedDateTimeFields(this, fieldNames);
          fields = ES.CalendarMergeFields(calendar2, fields, props);
          fields = ES.ToTemporalZonedDateTimeFields(fields, fieldNames);
          var _ES$InterpretTemporal = ES.InterpretTemporalDateTimeFields(calendar2, fields, options), year = _ES$InterpretTemporal.year, month = _ES$InterpretTemporal.month, day = _ES$InterpretTemporal.day, hour = _ES$InterpretTemporal.hour, minute = _ES$InterpretTemporal.minute, second = _ES$InterpretTemporal.second, millisecond = _ES$InterpretTemporal.millisecond, microsecond = _ES$InterpretTemporal.microsecond, nanosecond = _ES$InterpretTemporal.nanosecond;
          var offsetNs = ES.ParseOffsetString(fields.offset);
          var epochNanoseconds = ES.InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetNs, timeZone2, disambiguation, offset2);
          return ES.CreateTemporalZonedDateTime(epochNanoseconds, GetSlot(this, TIME_ZONE), calendar2);
        }
      }, {
        key: "withPlainDate",
        value: function withPlainDate(temporalDate) {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          temporalDate = ES.ToTemporalDate(temporalDate);
          var year = GetSlot(temporalDate, ISO_YEAR);
          var month = GetSlot(temporalDate, ISO_MONTH);
          var day = GetSlot(temporalDate, ISO_DAY);
          var calendar2 = GetSlot(temporalDate, CALENDAR);
          var thisDt = dateTime(this);
          var hour = GetSlot(thisDt, ISO_HOUR);
          var minute = GetSlot(thisDt, ISO_MINUTE);
          var second = GetSlot(thisDt, ISO_SECOND);
          var millisecond = GetSlot(thisDt, ISO_MILLISECOND);
          var microsecond = GetSlot(thisDt, ISO_MICROSECOND);
          var nanosecond = GetSlot(thisDt, ISO_NANOSECOND);
          calendar2 = ES.ConsolidateCalendars(GetSlot(this, CALENDAR), calendar2);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var PlainDateTime2 = GetIntrinsic("%Temporal.PlainDateTime%");
          var dt = new PlainDateTime2(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, "compatible");
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }, {
        key: "withPlainTime",
        value: function withPlainTime() {
          var temporalTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var PlainTime2 = GetIntrinsic("%Temporal.PlainTime%");
          temporalTime = temporalTime == void 0 ? new PlainTime2() : ES.ToTemporalTime(temporalTime);
          var thisDt = dateTime(this);
          var year = GetSlot(thisDt, ISO_YEAR);
          var month = GetSlot(thisDt, ISO_MONTH);
          var day = GetSlot(thisDt, ISO_DAY);
          var calendar2 = GetSlot(this, CALENDAR);
          var hour = GetSlot(temporalTime, ISO_HOUR);
          var minute = GetSlot(temporalTime, ISO_MINUTE);
          var second = GetSlot(temporalTime, ISO_SECOND);
          var millisecond = GetSlot(temporalTime, ISO_MILLISECOND);
          var microsecond = GetSlot(temporalTime, ISO_MICROSECOND);
          var nanosecond = GetSlot(temporalTime, ISO_NANOSECOND);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var PlainDateTime2 = GetIntrinsic("%Temporal.PlainDateTime%");
          var dt = new PlainDateTime2(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dt, "compatible");
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, calendar2);
        }
      }, {
        key: "withTimeZone",
        value: function withTimeZone(timeZone2) {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          timeZone2 = ES.ToTemporalTimeZone(timeZone2);
          return ES.CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), timeZone2, GetSlot(this, CALENDAR));
        }
      }, {
        key: "withCalendar",
        value: function withCalendar(calendar2) {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          calendar2 = ES.ToTemporalCalendar(calendar2);
          return ES.CreateTemporalZonedDateTime(GetSlot(this, EPOCHNANOSECONDS), GetSlot(this, TIME_ZONE), calendar2);
        }
      }, {
        key: "add",
        value: function add(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          options = ES.GetOptionsObject(options);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var calendar2 = GetSlot(this, CALENDAR);
          var epochNanoseconds = ES.AddZonedDateTime(GetSlot(this, INSTANT), timeZone2, calendar2, years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, options);
          return ES.CreateTemporalZonedDateTime(epochNanoseconds, timeZone2, calendar2);
        }
      }, {
        key: "subtract",
        value: function subtract(temporalDurationLike) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var duration2 = ES.ToLimitedTemporalDuration(temporalDurationLike);
          var years = duration2.years, months = duration2.months, weeks = duration2.weeks, days = duration2.days, hours = duration2.hours, minutes = duration2.minutes, seconds = duration2.seconds, milliseconds = duration2.milliseconds, microseconds = duration2.microseconds, nanoseconds = duration2.nanoseconds;
          ES.RejectDurationSign(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
          options = ES.GetOptionsObject(options);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var calendar2 = GetSlot(this, CALENDAR);
          var epochNanoseconds = ES.AddZonedDateTime(GetSlot(this, INSTANT), timeZone2, calendar2, -years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds, options);
          return ES.CreateTemporalZonedDateTime(epochNanoseconds, timeZone2, calendar2);
        }
      }, {
        key: "until",
        value: function until(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalZonedDateTime(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("hours", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
          var ns1 = GetSlot(this, EPOCHNANOSECONDS);
          var ns2 = GetSlot(other, EPOCHNANOSECONDS);
          var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
          if (largestUnit !== "years" && largestUnit !== "months" && largestUnit !== "weeks" && largestUnit !== "days") {
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            var _ES$DifferenceInstant = ES.DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode);
            seconds = _ES$DifferenceInstant.seconds;
            milliseconds = _ES$DifferenceInstant.milliseconds;
            microseconds = _ES$DifferenceInstant.microseconds;
            nanoseconds = _ES$DifferenceInstant.nanoseconds;
            var _ES$BalanceDuration = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
            hours = _ES$BalanceDuration.hours;
            minutes = _ES$BalanceDuration.minutes;
            seconds = _ES$BalanceDuration.seconds;
            milliseconds = _ES$BalanceDuration.milliseconds;
            microseconds = _ES$BalanceDuration.microseconds;
            nanoseconds = _ES$BalanceDuration.nanoseconds;
          } else {
            var timeZone2 = GetSlot(this, TIME_ZONE);
            if (!ES.TimeZoneEquals(timeZone2, GetSlot(other, TIME_ZONE))) {
              throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
            }
            var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
              largestUnit
            });
            var _ES$DifferenceZonedDa = ES.DifferenceZonedDateTime(ns1, ns2, timeZone2, calendar2, largestUnit, untilOptions);
            years = _ES$DifferenceZonedDa.years;
            months = _ES$DifferenceZonedDa.months;
            weeks = _ES$DifferenceZonedDa.weeks;
            days = _ES$DifferenceZonedDa.days;
            hours = _ES$DifferenceZonedDa.hours;
            minutes = _ES$DifferenceZonedDa.minutes;
            seconds = _ES$DifferenceZonedDa.seconds;
            milliseconds = _ES$DifferenceZonedDa.milliseconds;
            microseconds = _ES$DifferenceZonedDa.microseconds;
            nanoseconds = _ES$DifferenceZonedDa.nanoseconds;
            var _ES$RoundDuration = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);
            years = _ES$RoundDuration.years;
            months = _ES$RoundDuration.months;
            weeks = _ES$RoundDuration.weeks;
            days = _ES$RoundDuration.days;
            hours = _ES$RoundDuration.hours;
            minutes = _ES$RoundDuration.minutes;
            seconds = _ES$RoundDuration.seconds;
            milliseconds = _ES$RoundDuration.milliseconds;
            microseconds = _ES$RoundDuration.microseconds;
            nanoseconds = _ES$RoundDuration.nanoseconds;
            var _ES$AdjustRoundedDura = ES.AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);
            years = _ES$AdjustRoundedDura.years;
            months = _ES$AdjustRoundedDura.months;
            weeks = _ES$AdjustRoundedDura.weeks;
            days = _ES$AdjustRoundedDura.days;
            hours = _ES$AdjustRoundedDura.hours;
            minutes = _ES$AdjustRoundedDura.minutes;
            seconds = _ES$AdjustRoundedDura.seconds;
            milliseconds = _ES$AdjustRoundedDura.milliseconds;
            microseconds = _ES$AdjustRoundedDura.microseconds;
            nanoseconds = _ES$AdjustRoundedDura.nanoseconds;
          }
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds);
        }
      }, {
        key: "since",
        value: function since(other) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalZonedDateTime(other);
          var calendar2 = GetSlot(this, CALENDAR);
          var otherCalendar = GetSlot(other, CALENDAR);
          var calendarId = ES.ToString(calendar2);
          var otherCalendarId = ES.ToString(otherCalendar);
          if (calendarId !== otherCalendarId) {
            throw new RangeError("cannot compute difference between dates of ".concat(calendarId, " and ").concat(otherCalendarId, " calendars"));
          }
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalDurationUnit(options, "nanoseconds");
          var defaultLargestUnit = ES.LargerOfTwoTemporalDurationUnits("hours", smallestUnit);
          var largestUnit = ES.ToLargestTemporalUnit(options, defaultLargestUnit);
          ES.ValidateTemporalUnitRange(largestUnit, smallestUnit);
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          roundingMode = ES.NegateTemporalRoundingMode(roundingMode);
          var roundingIncrement = ES.ToTemporalDateTimeRoundingIncrement(options, smallestUnit);
          var ns1 = GetSlot(this, EPOCHNANOSECONDS);
          var ns2 = GetSlot(other, EPOCHNANOSECONDS);
          var years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds;
          if (largestUnit !== "years" && largestUnit !== "months" && largestUnit !== "weeks" && largestUnit !== "days") {
            years = 0;
            months = 0;
            weeks = 0;
            days = 0;
            var _ES$DifferenceInstant2 = ES.DifferenceInstant(ns1, ns2, roundingIncrement, smallestUnit, roundingMode);
            seconds = _ES$DifferenceInstant2.seconds;
            milliseconds = _ES$DifferenceInstant2.milliseconds;
            microseconds = _ES$DifferenceInstant2.microseconds;
            nanoseconds = _ES$DifferenceInstant2.nanoseconds;
            var _ES$BalanceDuration2 = ES.BalanceDuration(0, 0, 0, seconds, milliseconds, microseconds, nanoseconds, largestUnit);
            hours = _ES$BalanceDuration2.hours;
            minutes = _ES$BalanceDuration2.minutes;
            seconds = _ES$BalanceDuration2.seconds;
            milliseconds = _ES$BalanceDuration2.milliseconds;
            microseconds = _ES$BalanceDuration2.microseconds;
            nanoseconds = _ES$BalanceDuration2.nanoseconds;
          } else {
            var timeZone2 = GetSlot(this, TIME_ZONE);
            if (!ES.TimeZoneEquals(timeZone2, GetSlot(other, TIME_ZONE))) {
              throw new RangeError("When calculating difference between time zones, largestUnit must be 'hours' or smaller because day lengths can vary between time zones due to DST or time zone offset changes.");
            }
            var untilOptions = _objectSpread2(_objectSpread2({}, options), {}, {
              largestUnit
            });
            var _ES$DifferenceZonedDa2 = ES.DifferenceZonedDateTime(ns1, ns2, timeZone2, calendar2, largestUnit, untilOptions);
            years = _ES$DifferenceZonedDa2.years;
            months = _ES$DifferenceZonedDa2.months;
            weeks = _ES$DifferenceZonedDa2.weeks;
            days = _ES$DifferenceZonedDa2.days;
            hours = _ES$DifferenceZonedDa2.hours;
            minutes = _ES$DifferenceZonedDa2.minutes;
            seconds = _ES$DifferenceZonedDa2.seconds;
            milliseconds = _ES$DifferenceZonedDa2.milliseconds;
            microseconds = _ES$DifferenceZonedDa2.microseconds;
            nanoseconds = _ES$DifferenceZonedDa2.nanoseconds;
            var _ES$RoundDuration2 = ES.RoundDuration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);
            years = _ES$RoundDuration2.years;
            months = _ES$RoundDuration2.months;
            weeks = _ES$RoundDuration2.weeks;
            days = _ES$RoundDuration2.days;
            hours = _ES$RoundDuration2.hours;
            minutes = _ES$RoundDuration2.minutes;
            seconds = _ES$RoundDuration2.seconds;
            milliseconds = _ES$RoundDuration2.milliseconds;
            microseconds = _ES$RoundDuration2.microseconds;
            nanoseconds = _ES$RoundDuration2.nanoseconds;
            var _ES$AdjustRoundedDura2 = ES.AdjustRoundedDurationDays(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds, roundingIncrement, smallestUnit, roundingMode, this);
            years = _ES$AdjustRoundedDura2.years;
            months = _ES$AdjustRoundedDura2.months;
            weeks = _ES$AdjustRoundedDura2.weeks;
            days = _ES$AdjustRoundedDura2.days;
            hours = _ES$AdjustRoundedDura2.hours;
            minutes = _ES$AdjustRoundedDura2.minutes;
            seconds = _ES$AdjustRoundedDura2.seconds;
            milliseconds = _ES$AdjustRoundedDura2.milliseconds;
            microseconds = _ES$AdjustRoundedDura2.microseconds;
            nanoseconds = _ES$AdjustRoundedDura2.nanoseconds;
          }
          var Duration2 = GetIntrinsic("%Temporal.Duration%");
          return new Duration2(-years, -months, -weeks, -days, -hours, -minutes, -seconds, -milliseconds, -microseconds, -nanoseconds);
        }
      }, {
        key: "round",
        value: function round(options) {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          if (options === void 0)
            throw new TypeError("options parameter is required");
          options = ES.GetOptionsObject(options);
          var smallestUnit = ES.ToSmallestTemporalUnit(options);
          var roundingMode = ES.ToTemporalRoundingMode(options, "halfExpand");
          var maximumIncrements = {
            day: 1,
            hour: 24,
            minute: 60,
            second: 60,
            millisecond: 1e3,
            microsecond: 1e3,
            nanosecond: 1e3
          };
          var roundingIncrement = ES.ToTemporalRoundingIncrement(options, maximumIncrements[smallestUnit], false);
          var dt = dateTime(this);
          var year = GetSlot(dt, ISO_YEAR);
          var month = GetSlot(dt, ISO_MONTH);
          var day = GetSlot(dt, ISO_DAY);
          var hour = GetSlot(dt, ISO_HOUR);
          var minute = GetSlot(dt, ISO_MINUTE);
          var second = GetSlot(dt, ISO_SECOND);
          var millisecond = GetSlot(dt, ISO_MILLISECOND);
          var microsecond = GetSlot(dt, ISO_MICROSECOND);
          var nanosecond = GetSlot(dt, ISO_NANOSECOND);
          var DateTime = GetIntrinsic("%Temporal.PlainDateTime%");
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var calendar2 = GetSlot(this, CALENDAR);
          var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
          var instantStart = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dtStart, "compatible");
          var endNs = ES.AddZonedDateTime(instantStart, timeZone2, calendar2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
          var dayLengthNs = endNs.subtract(GetSlot(instantStart, EPOCHNANOSECONDS));
          var _ES$RoundISODateTime = ES.RoundISODateTime(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, roundingIncrement, smallestUnit, roundingMode, dayLengthNs);
          year = _ES$RoundISODateTime.year;
          month = _ES$RoundISODateTime.month;
          day = _ES$RoundISODateTime.day;
          hour = _ES$RoundISODateTime.hour;
          minute = _ES$RoundISODateTime.minute;
          second = _ES$RoundISODateTime.second;
          millisecond = _ES$RoundISODateTime.millisecond;
          microsecond = _ES$RoundISODateTime.microsecond;
          nanosecond = _ES$RoundISODateTime.nanosecond;
          var offsetNs = ES.GetOffsetNanosecondsFor(timeZone2, GetSlot(this, INSTANT));
          var epochNanoseconds = ES.InterpretISODateTimeOffset(year, month, day, hour, minute, second, millisecond, microsecond, nanosecond, offsetNs, timeZone2, "compatible", "prefer");
          return ES.CreateTemporalZonedDateTime(epochNanoseconds, timeZone2, GetSlot(this, CALENDAR));
        }
      }, {
        key: "equals",
        value: function equals(other) {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          other = ES.ToTemporalZonedDateTime(other);
          var one = GetSlot(this, EPOCHNANOSECONDS);
          var two = GetSlot(other, EPOCHNANOSECONDS);
          if (!BigInteger(one).equals(two))
            return false;
          if (!ES.TimeZoneEquals(GetSlot(this, TIME_ZONE), GetSlot(other, TIME_ZONE)))
            return false;
          return ES.CalendarEquals(GetSlot(this, CALENDAR), GetSlot(other, CALENDAR));
        }
      }, {
        key: "toString",
        value: function toString() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          options = ES.GetOptionsObject(options);
          var _ES$ToSecondsStringPr = ES.ToSecondsStringPrecision(options), precision = _ES$ToSecondsStringPr.precision, unit = _ES$ToSecondsStringPr.unit, increment = _ES$ToSecondsStringPr.increment;
          var roundingMode = ES.ToTemporalRoundingMode(options, "trunc");
          var showCalendar = ES.ToShowCalendarOption(options);
          var showTimeZone = ES.ToShowTimeZoneNameOption(options);
          var showOffset = ES.ToShowOffsetOption(options);
          return ES.TemporalZonedDateTimeToString(this, precision, showCalendar, showTimeZone, showOffset, {
            unit,
            increment,
            roundingMode
          });
        }
      }, {
        key: "toLocaleString",
        value: function toLocaleString() {
          var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return new DateTimeFormat(locales, options).format(this);
        }
      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalZonedDateTimeToString(this, "auto");
        }
      }, {
        key: "valueOf",
        value: function valueOf() {
          throw new TypeError("use compare() or equals() to compare Temporal.ZonedDateTime");
        }
      }, {
        key: "startOfDay",
        value: function startOfDay() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var dt = dateTime(this);
          var DateTime = GetIntrinsic("%Temporal.PlainDateTime%");
          var dtStart = new DateTime(GetSlot(dt, ISO_YEAR), GetSlot(dt, ISO_MONTH), GetSlot(dt, ISO_DAY), 0, 0, 0, 0, 0, 0);
          var timeZone2 = GetSlot(this, TIME_ZONE);
          var instant2 = ES.BuiltinTimeZoneGetInstantFor(timeZone2, dtStart, "compatible");
          return ES.CreateTemporalZonedDateTime(GetSlot(instant2, EPOCHNANOSECONDS), timeZone2, GetSlot(this, CALENDAR));
        }
      }, {
        key: "toInstant",
        value: function toInstant() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var TemporalInstant = GetIntrinsic("%Temporal.Instant%");
          return new TemporalInstant(GetSlot(this, EPOCHNANOSECONDS));
        }
      }, {
        key: "toPlainDate",
        value: function toPlainDate() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateTimeToDate(dateTime(this));
        }
      }, {
        key: "toPlainTime",
        value: function toPlainTime() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return ES.TemporalDateTimeToTime(dateTime(this));
        }
      }, {
        key: "toPlainDateTime",
        value: function toPlainDateTime() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          return dateTime(this);
        }
      }, {
        key: "toPlainYearMonth",
        value: function toPlainYearMonth() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["monthCode", "year"]);
          var fields = ES.ToTemporalYearMonthFields(this, fieldNames);
          return calendar2.yearMonthFromFields(fields, {});
        }
      }, {
        key: "toPlainMonthDay",
        value: function toPlainMonthDay() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var calendar2 = GetSlot(this, CALENDAR);
          var fieldNames = ES.CalendarFields(calendar2, ["day", "monthCode"]);
          var fields = ES.ToTemporalMonthDayFields(this, fieldNames);
          return calendar2.monthDayFromFields(fields, {});
        }
      }, {
        key: "getISOFields",
        value: function getISOFields() {
          if (!ES.IsTemporalZonedDateTime(this))
            throw new TypeError("invalid receiver");
          var dt = dateTime(this);
          var tz = GetSlot(this, TIME_ZONE);
          return {
            calendar: GetSlot(this, CALENDAR),
            isoDay: GetSlot(dt, ISO_DAY),
            isoHour: GetSlot(dt, ISO_HOUR),
            isoMicrosecond: GetSlot(dt, ISO_MICROSECOND),
            isoMillisecond: GetSlot(dt, ISO_MILLISECOND),
            isoMinute: GetSlot(dt, ISO_MINUTE),
            isoMonth: GetSlot(dt, ISO_MONTH),
            isoNanosecond: GetSlot(dt, ISO_NANOSECOND),
            isoSecond: GetSlot(dt, ISO_SECOND),
            isoYear: GetSlot(dt, ISO_YEAR),
            offset: ES.BuiltinTimeZoneGetOffsetStringFor(tz, GetSlot(this, INSTANT)),
            timeZone: tz
          };
        }
      }], [{
        key: "from",
        value: function from(item) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
          options = ES.GetOptionsObject(options);
          if (ES.IsTemporalZonedDateTime(item)) {
            ES.ToTemporalOverflow(options);
            ES.ToTemporalDisambiguation(options);
            ES.ToTemporalOffset(options, "reject");
            return ES.CreateTemporalZonedDateTime(GetSlot(item, EPOCHNANOSECONDS), GetSlot(item, TIME_ZONE), GetSlot(item, CALENDAR));
          }
          return ES.ToTemporalZonedDateTime(item, options);
        }
      }, {
        key: "compare",
        value: function compare(one, two) {
          one = ES.ToTemporalZonedDateTime(one);
          two = ES.ToTemporalZonedDateTime(two);
          var ns1 = GetSlot(one, EPOCHNANOSECONDS);
          var ns2 = GetSlot(two, EPOCHNANOSECONDS);
          if (BigInteger(ns1).lesser(ns2))
            return -1;
          if (BigInteger(ns1).greater(ns2))
            return 1;
          return 0;
        }
      }]);
      return ZonedDateTime2;
    }();
    MakeIntrinsicClass(ZonedDateTime, "Temporal.ZonedDateTime");
    function bigIntIfAvailable$1(wrapper) {
      return typeof BigInt === "undefined" ? wrapper : wrapper.value;
    }
    function dateTime(zdt) {
      return ES.BuiltinTimeZoneGetPlainDateTimeFor(GetSlot(zdt, TIME_ZONE), GetSlot(zdt, INSTANT), GetSlot(zdt, CALENDAR));
    }
    var temporal = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      Instant,
      Calendar,
      PlainDate,
      PlainDateTime,
      Duration,
      PlainMonthDay,
      now,
      PlainTime,
      TimeZone,
      PlainYearMonth,
      ZonedDateTime
    });
    function toTemporalInstant2() {
      var epochNanoseconds = BigInteger(+this).multiply(1e6);
      return new Instant(bigIntIfAvailable(epochNanoseconds));
    }
    function bigIntIfAvailable(wrapper) {
      return typeof BigInt === "undefined" ? wrapper : wrapper.value;
    }
    exports2.Intl = intl;
    exports2.Temporal = temporal;
    exports2.toTemporalInstant = toTemporalInstant2;
    Object.defineProperty(exports2, "__esModule", {value: true});
  });
});

var Intl$1 = index_umd.Intl;
var Temporal = index_umd.Temporal;
var toTemporalInstant = index_umd.toTemporalInstant;

