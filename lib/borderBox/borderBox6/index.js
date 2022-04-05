import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, renderSlot } from 'vue';

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
const _hoisted_2 = ["fill", "points"];
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["fill", "cx"];
const _hoisted_5 = ["fill", "cx", "cy"];
const _hoisted_6 = ["fill", "cy"];
const _hoisted_7 = ["stroke", "points"];
const _hoisted_8 = ["stroke", "points"];
const _hoisted_9 = ["stroke", "points"];
const _hoisted_10 = ["stroke", "points"];
const _hoisted_11 = ["stroke"];
const _hoisted_12 = ["stroke"];
const _hoisted_13 = ["stroke", "points"];
const _hoisted_14 = ["stroke", "points"];
const _hoisted_15 = ["stroke", "points"];
const _hoisted_16 = ["stroke", "points"];
const _hoisted_17 = ["stroke", "points"];
const _hoisted_18 = ["stroke", "points"];
const _hoisted_19 = {
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
    const data = reactive({
      ref: 'border-box-6',
      defaultColor: ['rgba(255, 255, 255, 0.35)', 'gray'],
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
        class: "border-box-6",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
          9, 7 ${unref(width) - 9}, 7 ${unref(width) - 9}, ${unref(height) - 7} 9, ${unref(height) - 7}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("circle", {
        fill: unref(data).mergedColor[1],
        cx: "5",
        cy: "5",
        r: "2"
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("circle", {
        fill: unref(data).mergedColor[1],
        cx: unref(width) - 5,
        cy: "5",
        r: "2"
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("circle", {
        fill: unref(data).mergedColor[1],
        cx: unref(width) - 5,
        cy: unref(height) - 5,
        r: "2"
      }, null, 8
      /* PROPS */
      , _hoisted_5), createElementVNode("circle", {
        fill: unref(data).mergedColor[1],
        cx: "5",
        cy: unref(height) - 5,
        r: "2"
      }, null, 8
      /* PROPS */
      , _hoisted_6), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `10, 4 ${unref(width) - 10}, 4`
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `10, ${unref(height) - 4} ${unref(width) - 10}, ${unref(height) - 4}`
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `5, 70 5, ${unref(height) - 70}`
      }, null, 8
      /* PROPS */
      , _hoisted_9), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 5}, 70 ${unref(width) - 5}, ${unref(height) - 70}`
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `3, 10, 3, 50`
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `7, 30 7, 80`
      }, null, 8
      /* PROPS */
      , _hoisted_12), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 3}, 10 ${unref(width) - 3}, 50`
      }, null, 8
      /* PROPS */
      , _hoisted_13), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 7}, 30 ${unref(width) - 7}, 80`
      }, null, 8
      /* PROPS */
      , _hoisted_14), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `3, ${unref(height) - 10} 3, ${unref(height) - 50}`
      }, null, 8
      /* PROPS */
      , _hoisted_15), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `7, ${unref(height) - 30} 7, ${unref(height) - 80}`
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 3}, ${unref(height) - 10} ${unref(width) - 3}, ${unref(height) - 50}`
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 7}, ${unref(height) - 30} ${unref(width) - 7}, ${unref(height) - 80}`
      }, null, 8
      /* PROPS */
      , _hoisted_18)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_19, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox6/index.vue";

script.name = 'BorderBox6';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
