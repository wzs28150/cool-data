var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
var rgbaReg = /^(rgba|RGBA)/;

function _toConsumableArray2(arr) {
  if (Array.isArray(arr)) {
      for (var i = 0,
      arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
      }
      return arr2;
  } else {
      return Array.from(arr);
  }
}
/**
 * 验证颜色
 * @param {String} color 
 * @returns {String|Boolean}
 */
function validator(color) {
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  if (isHex || isRgb) return color;

  if (!color) {
    console.error('Color: Invalid color!');
    return false;
  }

  return color;
}

/**
 * 获取颜色rbb数组 16进制转
 * @param {String} color 
 * @returns  {Array<Number>}
 */
function getRgbValueFromHex(color) {
  color = color.replace('#', '');
  if (color.length === 3) color = Array.from(color).map(function (hexNum) {
    return hexNum + hexNum;
  }).join('');
  color = color.split('');
  return new Array(3).fill(0).map(function (t, i) {
    return parseInt("0x".concat(color[i * 2]).concat(color[i * 2 + 1]));
  });
}
/**
 * 获取颜色rbb数组 rgb字符串转
 * @param {String} color 
 * @returns  {Array<Number>}
 */
function getRgbValueFromRgb(color) {
  return color.replace(/rgb\(|rgba\(|\)/g, '').split(',').slice(0, 3).map(function (n) {
    return parseInt(n);
  });
}
/**
 * 获取颜色rbb数组 任意格式
 * @param {String} color 
 * @returns  {Array<Number>}
 */
export function getRgbValue(color) {
  if (!color) {
    console.error('getRgbValue: Missing parameters!');
    return false;
  }

  color = validator(color);
  if (!color) return false;
  var isHex = hexReg.test(color);
  var isRgb = rgbReg.test(color);
  var lowerColor = color.toLowerCase();
  if (isHex) return getRgbValueFromHex(lowerColor);
  if (isRgb) return getRgbValueFromRgb(lowerColor);
}

/**
 * rgb数组转颜色字符串
 * @param {Array<Number>} value 长度为3rgb 长度为4rgba
 * @returns {String|Boolean} 返回rgb或rgba 根据value长度判断返回类型
 */
export function getColorFromRgbValue(value) {
  if (!value) {
    console.error('getColorFromRgbValue: Missing parameters!');
    return false;
  }

  var valueLength = value.length;

  if (valueLength !== 3 && valueLength !== 4) {
    console.error('getColorFromRgbValue: Value is illegal!');
    return false;
  }

  var color = valueLength === 3 ? 'rgb(' : 'rgba(';
  color += value.join(',') + ')';
  return color;
}
/**
 * 调整颜色不透明度 渐变闪烁
 * @param {String} color Hex|Rgb|Rgba
 * @returns Rgba color
 */
export function fade(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (!color) {
    console.error('fade: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var rgbaValue = [].concat((0, _toConsumableArray2)(rgbValue), [percent / 100]);
  return getColorFromRgbValue(rgbaValue);
}

/**
 * 转rgb方法
 * @param {*} color Hex|Rgb|Rgba
 * @param {*} opacity 
 * @returns 返回rgb 或 rgba颜色字符串
 */
export function toRgb(color, opacity) {
  if (!color) {
    console.error('toRgb: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var addOpacity = typeof opacity === 'number';
  if (addOpacity) return 'rgba(' + rgbValue.join(',') + ",".concat(opacity, ")");
  return 'rgb(' + rgbValue.join(',') + ')';
}