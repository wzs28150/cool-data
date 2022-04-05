import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createCommentVNode, createElementVNode, toDisplayString } from 'vue';

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

const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["id"];
const _hoisted_3 = ["stop-color"];
const _hoisted_4 = ["stop-color"];
const _hoisted_5 = ["stop-color"];
const _hoisted_6 = ["id"];
const _hoisted_7 = ["stop-color"];
const _hoisted_8 = ["stop-color"];
const _hoisted_9 = ["stop-color", "stop-opacity"];
const _hoisted_10 = ["id"];
const _hoisted_11 = ["stop-color"];
const _hoisted_12 = ["stop-color"];
const _hoisted_13 = ["stop-color"];
const _hoisted_14 = ["d", "fill"];
const _hoisted_15 = ["d", "fill"];
const _hoisted_16 = ["d", "fill"];
const _hoisted_17 = ["y", "fill"];
const _hoisted_18 = ["points", "fill"];
var script = {
  props: {
    title: {
      type: String
    },
    color: {
      type: Array,
      default: () => []
    },
    title: {
      type: String
    }
  },

  setup(__props) {
    const props = __props;
    const id = uuid();
    const text = ref();
    const data = reactive({
      ref: 'module-title-4',
      filterId: `module-title-4-filterId-${id}`,
      defaultColor: ['#fff', '#4e4894', '#3c3880', '#181745'],
      titleWidth: 0,
      mergedColor: []
    }); // 处理尺寸

    const {
      width,
      height
    } = autoResize(data.ref); // 处理颜色

    const mergeColor = () => {
      data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || []);
    };

    onMounted(() => {
      mergeColor();
      data.titleWidth = text.value.clientWidth * 2;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "module-title module-title-4",
        ref: unref(data).ref
      }, [createCommentVNode(" <div class=\"module-title-module-main\">\r\n      <div class=\"module-title-4-title\">{{ title }}</div>\r\n    </div>"), (openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("linearGradient", {
        id: `module-title-4-linear-left-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("stop", {
        offset: "20%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 1
      }, null, 8
      /* PROPS */
      , _hoisted_5)], 8
      /* PROPS */
      , _hoisted_2), createElementVNode("linearGradient", {
        id: `module-title-4-linear-left2-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("stop", {
        offset: "70%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0.8
      }, null, 8
      /* PROPS */
      , _hoisted_9)], 8
      /* PROPS */
      , _hoisted_6), createElementVNode("linearGradient", {
        id: `module-title-4-linear-left3-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[3],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("stop", {
        offset: "70%",
        "stop-color": unref(data).mergedColor[3],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_12), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[3],
        "stop-opacity": 1
      }, null, 8
      /* PROPS */
      , _hoisted_13)], 8
      /* PROPS */
      , _hoisted_10)]), createElementVNode("path", {
        d: `M0 0 
      L${unref(data).titleWidth + unref(width) * 0.12} 0 
      C ${unref(data).titleWidth + unref(width) * 0.13} 1,${unref(data).titleWidth + unref(width) * 0.13} 4,${unref(data).titleWidth + unref(width) * 0.13} 5 
      C ${unref(data).titleWidth + unref(width) * 0.13} 6,${unref(data).titleWidth + unref(width) * 0.13} 8,${unref(data).titleWidth + unref(width) * 0.13} 9  
      L${unref(data).titleWidth + unref(width) * 0.075} ${unref(height) * 0.78} 
      L0 ${unref(height) * 0.78} 
      L0 0 Z`,
        "stroke-width": "0",
        fill: `url(#module-title-4-linear-left-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_14), createElementVNode("path", {
        d: `M0 0 
      L${unref(data).titleWidth + unref(width) * 0.12 + unref(width) * 0.03} 0 
      C ${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 1,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 4,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 5 
      C ${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 6,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 8,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03} 9  
      L${unref(data).titleWidth + unref(width) * 0.075 + unref(width) * 0.03} ${unref(height) * 0.78} 
      L0 ${unref(height) * 0.78} 
      L0 0 Z`,
        "stroke-width": "0",
        fill: `url(#module-title-4-linear-left2-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_15), createElementVNode("path", {
        d: `M0 0 
      L${unref(data).titleWidth + unref(width) * 0.12 + unref(width) * 0.03 * 2} 0 
      C ${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 1,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 4,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 5 
      C ${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 6,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 8,${unref(data).titleWidth + unref(width) * 0.13 + unref(width) * 0.03 * 2} 9  
      L${unref(data).titleWidth + unref(width) * 0.075 + unref(width) * 0.03 * 2} ${unref(height) * 0.78} 
      L0 ${unref(height) * 0.78} 
      L0 0 Z`,
        "stroke-width": "0",
        fill: `url(#module-title-4-linear-left3-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("text", {
        class: "border-box-1-title",
        x: 2,
        y: `${unref(height) * 0.4375}`,
        fill: unref(data).mergedColor[0],
        "font-size": "20",
        "font-weight": "bold",
        "text-anchor": "left",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        "letter-spacing": "0"
      }, toDisplayString(__props.title), 9
      /* TEXT, PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        points: `
        0 ${unref(height) - 1},${unref(width)} ${unref(height) - 1},${unref(width)} ${unref(height)}, 0 ${unref(height)}
        `,
        fill: unref(data).mergedColor[0],
        "stroke-width": "0"
      }, null, 8
      /* PROPS */
      , _hoisted_18)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/moduleTitle/moduleTitle4/index.vue";

script.mock = {
  btnList: []
};
script.name = 'ModuleTitle4';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
