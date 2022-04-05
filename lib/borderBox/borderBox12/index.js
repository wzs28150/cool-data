import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, createCommentVNode, renderSlot } from 'vue';

function debounce(delay, callback) {
  let lastTime;
  return function () {
    clearTimeout(lastTime);
    const [that, args] = [this, arguments];
    lastTime = setTimeout(() => {
      if (callback) callback.apply(that, args);
    }, delay);
  };
}
function uuid(hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function deepMerge(target, merged) {
  for (var key in merged) {
    if (target[key] && typeof target[key] === 'object') {
      deepMerge(target[key], merged[key]);
      continue;
    }

    if (typeof merged[key] === 'object') {
      target[key] = deepClone(merged[key], true);
      continue;
    }

    target[key] = merged[key];
  }

  return target;
}
function deepClone(object) {
  var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!object) return object;
  var parse = JSON.parse,
      stringify = JSON.stringify;
  if (!recursion) return parse(stringify(object));
  var clonedObj = object instanceof Array ? [] : {};

  if (object && typeof object === 'object') {
    for (var key in object) {
      // console.log(object);
      // console.log(key,object.hasOwnProperty.call(key));
      if (Object.getOwnPropertyDescriptor(object, key)) {
        if (object[key] && typeof object[key] === 'object') {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}

function autoResize(refName, callback) {
  const width = ref(0);
  const height = ref(0);
  const that = getCurrentInstance();

  const initWH = () => {
    const dom = that.refs[refName];
    width.value = dom ? dom.clientWidth : 0;
    height.value = dom ? dom.clientHeight : 0;

    if (!dom) {
      console.warn("cool-data: Failed to get dom node, component rendering may be abnormal!");
    } else if (!width.value || !height.value) {
      console.warn("cool-data: Component width or height is 0px, rendering abnormality may occur!");
    }

    if (callback) {
      callback(width.value, height.value);
    }
  };

  const debounceInitWHFun = debounce(100, initWH);
  onMounted(() => {
    initWH();
    window.addEventListener("resize", debounceInitWHFun);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("resize", debounceInitWHFun);
  });
  return {
    width,
    height
  };
}

var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var rgbReg = /^(rgb|rgba|RGB|RGBA)/;

function _toConsumableArray2(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
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


function getRgbValue(color) {
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

function getColorFromRgbValue(value) {
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

function fade(color) {
  var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  if (!color) {
    console.error('fade: Missing parameters!');
    return false;
  }

  var rgbValue = getRgbValue(color);
  if (!rgbValue) return false;
  var rgbaValue = [].concat((_toConsumableArray2)(rgbValue), [percent / 100]);
  return getColorFromRgbValue(rgbaValue);
}

const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["id"];

const _hoisted_3 = /*#__PURE__*/createElementVNode("feMorphology", {
  operator: "dilate",
  radius: "1",
  in: "SourceAlpha",
  result: "thicken"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  in: "thicken",
  stdDeviation: "2",
  result: "blurred"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = ["flood-color"];
const _hoisted_6 = ["values"];

const _hoisted_7 = /*#__PURE__*/createElementVNode("feComposite", {
  in: "glowColor",
  in2: "blurred",
  operator: "in",
  result: "softGlowColored"
}, null, -1
/* HOISTED */
);

const _hoisted_8 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "softGlowColored"
}), /*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
})], -1
/* HOISTED */
);

const _hoisted_9 = ["fill", "stroke", "d"];
const _hoisted_10 = ["filter", "stroke"];
const _hoisted_11 = ["filter", "stroke", "d"];
const _hoisted_12 = ["filter", "stroke", "d"];
const _hoisted_13 = ["filter", "stroke", "d"];
const _hoisted_14 = {
  class: "border-box-content"
};
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },

  setup(__props) {
    const props = __props;
    const id = uuid();
    const data = reactive({
      ref: 'border-box-12',
      filterId: `borderr-box-12-filterId-${id}`,
      defaultColor: ['#2e6099', '#7ce7fd'],
      mergedColor: []
    }); // 处理尺寸

    const {
      width,
      height
    } = autoResize(data.ref);

    const mergeColor = () => {
      data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || []);
    };

    onMounted(() => {
      mergeColor();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "border-box-12",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("filter", {
        id: unref(data).filterId,
        height: "150%",
        width: "150%",
        x: "-25%",
        y: "-25%"
      }, [_hoisted_3, _hoisted_4, createElementVNode("feFlood", {
        "flood-color": unref(fade)(unref(data).mergedColor[1] || unref(data).defaultColor[1], 70),
        result: "glowColor"
      }, [createElementVNode("animate", {
        attributeName: "flood-color",
        values: `
                ${unref(fade)(unref(data).mergedColor[1] || unref(data).defaultColor[1], 70)};
                ${unref(fade)(unref(data).mergedColor[1] || unref(data).defaultColor[1], 30)};
                ${unref(fade)(unref(data).mergedColor[1] || unref(data).defaultColor[1], 70)};
              `,
        dur: "3s",
        begin: "0s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_6)], 8
      /* PROPS */
      , _hoisted_5), _hoisted_7, _hoisted_8], 8
      /* PROPS */
      , _hoisted_2)]), unref(width) && unref(height) ? (openBlock(), createElementBlock("path", {
        key: 0,
        fill: props.backgroundColor,
        "stroke-width": "2",
        stroke: unref(data).mergedColor[0],
        d: `
          M15 5 L ${unref(width) - 15} 5 Q ${unref(width) - 5} 5, ${unref(width) - 5} 15
          L ${unref(width) - 5} ${unref(height) - 15} Q ${unref(width) - 5} ${unref(height) - 5}, ${unref(width) - 15} ${unref(height) - 5}
          L 15, ${unref(height) - 5} Q 5 ${unref(height) - 5} 5 ${unref(height) - 15} L 5 15
          Q 5 5 15 5
        `
      }, null, 8
      /* PROPS */
      , _hoisted_9)) : createCommentVNode("v-if", true), createElementVNode("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${unref(data).filterId})`,
        stroke: unref(data).mergedColor[1],
        d: `M 20 5 L 15 5 Q 5 5 5 15 L 5 20`
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${unref(data).filterId})`,
        stroke: unref(data).mergedColor[1],
        d: `M ${unref(width) - 20} 5 L ${unref(width) - 15} 5 Q ${unref(width) - 5} 5 ${unref(width) - 5} 15 L ${unref(width) - 5} 20`
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${unref(data).filterId})`,
        stroke: unref(data).mergedColor[1],
        d: `
          M ${unref(width) - 20} ${unref(height) - 5} L ${unref(width) - 15} ${unref(height) - 5}
          Q ${unref(width) - 5} ${unref(height) - 5} ${unref(width) - 5} ${unref(height) - 15}
          L ${unref(width) - 5} ${unref(height) - 20}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_12), createElementVNode("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${unref(data).filterId})`,
        stroke: unref(data).mergedColor[1],
        d: `
          M 20 ${unref(height) - 5} L 15 ${unref(height) - 5}
          Q 5 ${unref(height) - 5} 5 ${unref(height) - 15}
          L 5 ${unref(height) - 20}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_13)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_14, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox12/index.vue";

script.name = 'BorderBox12';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
