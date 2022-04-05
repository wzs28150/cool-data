import { reactive, onMounted, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, renderSlot, toDisplayString, Fragment, renderList, normalizeClass, createStaticVNode } from 'vue';

var hexReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
var rgbReg = /^(rgb|rgba|RGB|RGBA)/;
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

const _hoisted_1 = {
  class: "module-title-module-main"
};
const _hoisted_2 = {
  class: "module-title-1-icon"
};
const _hoisted_3 = {
  class: "module-title-1-title"
};
const _hoisted_4 = {
  class: "module-title-1-btn-list"
};
const _hoisted_5 = ["data-index"];

const _hoisted_6 = /*#__PURE__*/createStaticVNode("<div class=\"module-title-1-line\"><div class=\"module-title-1-line-line\"></div><div class=\"module-title-1-line-circle\"><div class=\"module-title-1-line-circle1\"></div><div class=\"module-title-1-line-circle2\"></div><div class=\"module-title-1-line-circle3\"></div></div></div>", 1);
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    btnList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    title: {
      type: String
    }
  },

  setup(__props) {
    const props = __props;
    const data = reactive({
      ref: 'title-1',
      active: 0,
      defaultColor: ['#fff', '#1d80da', '#02f4ff'],
      mergedColor: []
    }); // 处理颜色

    const mergeColor = () => {
      data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || []);
    };

    const rgb = color => {
      return color ? getRgbValue(color) : color;
    };

    const change = e => {
      data.active = e.target.dataset.index;
    };

    onMounted(() => {
      mergeColor();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "module-title module-title-1",
        style: normalizeStyle(`--module-title-1-text-color: ${rgb(unref(data).mergedColor[0])};--module-title-1-main-color: ${rgb(unref(data).mergedColor[1])};--module-title-1-circle-color: ${unref(data).mergedColor[2]};`)
      }, [createElementVNode("div", _hoisted_1, [createElementVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "icon")]), createElementVNode("div", _hoisted_3, toDisplayString(props.title), 1
      /* TEXT */
      ), createElementVNode("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.btnList, (item, index) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(`item ${index == unref(data).active ? 'on' : ''}`),
          key: index,
          onClick: change,
          "data-index": index
        }, toDisplayString(item.label), 11
        /* TEXT, CLASS, PROPS */
        , _hoisted_5);
      }), 128
      /* KEYED_FRAGMENT */
      ))])]), _hoisted_6], 4
      /* STYLE */
      );
    };
  }

};

script.__file = "packages/moduleTitle/moduleTitle1/index.vue";

script.height = 60;
script.name = 'ModuleTitle1';
script.mock = {
  btnList: [{
    'label': '本月',
    'value': '1'
  }, {
    'label': '近三月',
    'value': '2'
  }, {
    'label': '近半年',
    'value': '3'
  }]
};

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
