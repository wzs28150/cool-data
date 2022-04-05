import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, toDisplayString, renderSlot } from 'vue';

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
  radius: "2",
  in: "SourceAlpha",
  result: "thicken"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  in: "thicken",
  stdDeviation: "3",
  result: "blurred"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = ["flood-color"];

const _hoisted_6 = /*#__PURE__*/createElementVNode("feComposite", {
  in: "glowColor",
  in2: "blurred",
  operator: "in",
  result: "softGlowColored"
}, null, -1
/* HOISTED */
);

const _hoisted_7 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "softGlowColored"
}), /*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
})], -1
/* HOISTED */
);

const _hoisted_8 = ["fill", "points"];
const _hoisted_9 = ["stroke", "filter", "points"];
const _hoisted_10 = ["stroke", "points"];
const _hoisted_11 = ["stroke", "points"];
const _hoisted_12 = ["stroke", "fill", "filter", "points"];
const _hoisted_13 = ["filter", "fill", "points"];

const _hoisted_14 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "1;0.7;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_15 = [_hoisted_14];
const _hoisted_16 = ["filter", "fill", "points"];

const _hoisted_17 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.7;0.4;0.7",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_18 = [_hoisted_17];
const _hoisted_19 = ["filter", "fill", "points"];

const _hoisted_20 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.5;0.2;0.5",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_21 = [_hoisted_20];
const _hoisted_22 = ["filter", "fill", "points"];

const _hoisted_23 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "1;0.7;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_24 = [_hoisted_23];
const _hoisted_25 = ["filter", "fill", "points"];

const _hoisted_26 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.7;0.4;0.7",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_27 = [_hoisted_26];
const _hoisted_28 = ["filter", "fill", "points"];

const _hoisted_29 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "opacity",
  values: "0.5;0.2;0.5",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_30 = [_hoisted_29];
const _hoisted_31 = ["x"];
const _hoisted_32 = ["fill", "filter", "points"];
const _hoisted_33 = ["fill", "filter", "points"];
const _hoisted_34 = {
  class: "border-box-content"
};
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    titleWidth: {
      type: Number,
      default: 90
    },
    title: {
      type: String,
      default: ''
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
      ref: 'border-box-11',
      filterId: `border-box-11-filterId-${id}`,
      defaultColor: ['#8aaafb', '#1f33a2'],
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
        class: "border-box-11",
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
        "flood-color": unref(data).mergedColor[1],
        result: "glowColor"
      }, null, 8
      /* PROPS */
      , _hoisted_5), _hoisted_6, _hoisted_7], 8
      /* PROPS */
      , _hoisted_2)]), createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
          20, 32 ${unref(width) * 0.5 - props.titleWidth / 2}, 32 ${unref(width) * 0.5 - props.titleWidth / 2 + 20}, 53
          ${unref(width) * 0.5 + props.titleWidth / 2 - 20}, 53 ${unref(width) * 0.5 + props.titleWidth / 2}, 32
          ${unref(width) - 20}, 32 ${unref(width) - 8}, 48 ${unref(width) - 8}, ${unref(height) - 25} ${unref(width) - 20}, ${unref(height) - 8}
          20, ${unref(height) - 8} 8, ${unref(height) - 25} 8, 50
        `
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        filter: `url(#${unref(data).filterId})`,
        points: `
          ${(unref(width) - props.titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (unref(height) - 167) / 2}
          13, ${55 + (unref(height) - 167) / 2} 13, ${135 + (unref(height) - 167) / 2}
          7, ${140 + (unref(height) - 167) / 2} 7, ${unref(height) - 27}
          20, ${unref(height) - 7} ${unref(width) - 20}, ${unref(height) - 7} ${unref(width) - 7}, ${unref(height) - 27}
          ${unref(width) - 7}, ${140 + (unref(height) - 167) / 2} ${unref(width) - 13}, ${135 + (unref(height) - 167) / 2}
          ${unref(width) - 13}, ${55 + (unref(height) - 167) / 2} ${unref(width) - 7}, ${50 + (unref(height) - 167) / 2}
          ${unref(width) - 7}, 50 ${unref(width) - 20}, 30 ${(unref(width) + props.titleWidth) / 2}, 30
          ${(unref(width) + props.titleWidth) / 2 - 20}, 7 ${(unref(width) - props.titleWidth) / 2 + 20}, 7
          ${(unref(width) - props.titleWidth) / 2}, 30 ${(unref(width) - props.titleWidth) / 2 + 20}, 52
          ${(unref(width) + props.titleWidth) / 2 - 20}, 52 ${(unref(width) + props.titleWidth) / 2}, 30
        `
      }, null, 8
      /* PROPS */
      , _hoisted_9), createElementVNode("polygon", {
        stroke: unref(data).mergedColor[0],
        fill: "transparent",
        points: `
          ${(unref(width) + props.titleWidth) / 2 - 5}, 30 ${(unref(width) + props.titleWidth) / 2 - 21}, 11
          ${(unref(width) + props.titleWidth) / 2 - 27}, 11 ${(unref(width) + props.titleWidth) / 2 - 8}, 34
        `
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("polygon", {
        stroke: unref(data).mergedColor[0],
        fill: "transparent",
        points: `
          ${(unref(width) - props.titleWidth) / 2 + 5}, 30 ${(unref(width) - props.titleWidth) / 2 + 22}, 49
          ${(unref(width) - props.titleWidth) / 2 + 28}, 49 ${(unref(width) - props.titleWidth) / 2 + 8}, 26
        `
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("polygon", {
        stroke: unref(data).mergedColor[0],
        fill: unref(fade)(unref(data).mergedColor[1] || unref(data).defaultColor[1], 30),
        filter: `url(#${unref(data).filterId})`,
        points: `
          ${(unref(width) + props.titleWidth) / 2 - 11}, 37 ${(unref(width) + props.titleWidth) / 2 - 32}, 11
          ${(unref(width) - props.titleWidth) / 2 + 23}, 11 ${(unref(width) - props.titleWidth) / 2 + 11}, 23
          ${(unref(width) - props.titleWidth) / 2 + 33}, 49 ${(unref(width) + props.titleWidth) / 2 - 22}, 49
        `
      }, null, 8
      /* PROPS */
      , _hoisted_12), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "1",
        points: `
          ${(unref(width) - props.titleWidth) / 2 - 10}, 37 ${(unref(width) - props.titleWidth) / 2 - 31}, 37
          ${(unref(width) - props.titleWidth) / 2 - 25}, 46 ${(unref(width) - props.titleWidth) / 2 - 4}, 46
        `
      }, _hoisted_15, 8
      /* PROPS */
      , _hoisted_13), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "0.7",
        points: `
          ${(unref(width) - props.titleWidth) / 2 - 40}, 37 ${(unref(width) - props.titleWidth) / 2 - 61}, 37
          ${(unref(width) - props.titleWidth) / 2 - 55}, 46 ${(unref(width) - props.titleWidth) / 2 - 34}, 46
        `
      }, _hoisted_18, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "0.5",
        points: `
          ${(unref(width) - props.titleWidth) / 2 - 70}, 37 ${(unref(width) - props.titleWidth) / 2 - 91}, 37
          ${(unref(width) - props.titleWidth) / 2 - 85}, 46 ${(unref(width) - props.titleWidth) / 2 - 64}, 46
        `
      }, _hoisted_21, 8
      /* PROPS */
      , _hoisted_19), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "1",
        points: `
          ${(unref(width) + props.titleWidth) / 2 + 30}, 37 ${(unref(width) + props.titleWidth) / 2 + 9}, 37
          ${(unref(width) + props.titleWidth) / 2 + 3}, 46 ${(unref(width) + props.titleWidth) / 2 + 24}, 46
        `
      }, _hoisted_24, 8
      /* PROPS */
      , _hoisted_22), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "0.7",
        points: `
          ${(unref(width) + props.titleWidth) / 2 + 60}, 37 ${(unref(width) + props.titleWidth) / 2 + 39}, 37
          ${(unref(width) + props.titleWidth) / 2 + 33}, 46 ${(unref(width) + props.titleWidth) / 2 + 54}, 46
        `
      }, _hoisted_27, 8
      /* PROPS */
      , _hoisted_25), createElementVNode("polygon", {
        filter: `url(#${unref(data).filterId})`,
        fill: unref(data).mergedColor[0],
        opacity: "0.5",
        points: `
          ${(unref(width) + props.titleWidth) / 2 + 90}, 37 ${(unref(width) + props.titleWidth) / 2 + 69}, 37
          ${(unref(width) + props.titleWidth) / 2 + 63}, 46 ${(unref(width) + props.titleWidth) / 2 + 84}, 46
        `
      }, _hoisted_30, 8
      /* PROPS */
      , _hoisted_28), createElementVNode("text", {
        class: "border-box-11-title",
        x: `${unref(width) / 2}`,
        y: "32",
        fill: "#fff",
        "font-size": "18",
        "text-anchor": "middle",
        "dominant-baseline": "middle"
      }, toDisplayString(__props.title), 9
      /* TEXT, PROPS */
      , _hoisted_31), createElementVNode("polygon", {
        fill: unref(data).mergedColor[0],
        filter: `url(#${unref(data).filterId})`,
        points: `
          7, ${53 + (unref(height) - 167) / 2} 11, ${57 + (unref(height) - 167) / 2}
          11, ${133 + (unref(height) - 167) / 2} 7, ${137 + (unref(height) - 167) / 2}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_32), createElementVNode("polygon", {
        fill: unref(data).mergedColor[0],
        filter: `url(#${unref(data).filterId})`,
        points: `
          ${unref(width) - 7}, ${53 + (unref(height) - 167) / 2} ${unref(width) - 11}, ${57 + (unref(height) - 167) / 2}
          ${unref(width) - 11}, ${133 + (unref(height) - 167) / 2} ${unref(width) - 7}, ${137 + (unref(height) - 167) / 2}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_33)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_34, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox11/index.vue";

script.name = 'BorderBox11';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
