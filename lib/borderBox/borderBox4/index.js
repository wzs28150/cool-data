import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, normalizeClass, createElementVNode, renderSlot } from 'vue';

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
const _hoisted_3 = ["stroke", "points"];
const _hoisted_4 = ["stroke", "points"];
const _hoisted_5 = ["stroke", "points"];
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["stroke"];
const _hoisted_8 = ["stroke"];
const _hoisted_9 = ["stroke"];
const _hoisted_10 = ["stroke"];
const _hoisted_11 = ["stroke", "points"];
const _hoisted_12 = ["stroke", "points"];
const _hoisted_13 = {
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
      ref: 'border-box-4',
      defaultColor: ['red', 'rgba(0,0,255,0.8)'],
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
        class: "border-box-4",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: normalizeClass(`border-svg-container ${props.reverse && 'reverse'}`),
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
          ${unref(width) - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
          16, 42 16, ${unref(height) - 32} 41, ${unref(height) - 7} ${unref(width) - 15}, ${unref(height) - 7}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("polyline", {
        class: "bb4-line-1",
        stroke: unref(data).mergedColor[0],
        points: `145, ${unref(height) - 5} 40, ${unref(height) - 5} 10, ${unref(height) - 35}
        10, 40 40, 5 150, 5 170, 20 ${unref(width) - 15}, 20`
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[1],
        class: "bb4-line-2",
        points: `245, ${unref(height) - 1} 36, ${unref(height) - 1} 14, ${unref(height) - 23}
        14, ${unref(height) - 100}`
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("polyline", {
        class: "bb4-line-3",
        stroke: unref(data).mergedColor[0],
        points: `7, ${unref(height) - 40} 7, ${unref(height) - 75}`
      }, null, 8
      /* PROPS */
      , _hoisted_5), createElementVNode("polyline", {
        class: "bb4-line-4",
        stroke: unref(data).mergedColor[0],
        points: `28, 24 13, 41 13, 64`
      }, null, 8
      /* PROPS */
      , _hoisted_6), createElementVNode("polyline", {
        class: "bb4-line-5",
        stroke: unref(data).mergedColor[0],
        points: `5, 45 5, 140`
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("polyline", {
        class: "bb4-line-6",
        stroke: unref(data).mergedColor[1],
        points: `14, 75 14, 180`
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        class: "bb4-line-7",
        stroke: unref(data).mergedColor[1],
        points: `55, 11 147, 11 167, 26 250, 26`
      }, null, 8
      /* PROPS */
      , _hoisted_9), createElementVNode("polyline", {
        class: "bb4-line-8",
        stroke: unref(data).mergedColor[1],
        points: `158, 5 173, 16`
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("polyline", {
        class: "bb4-line-9",
        stroke: unref(data).mergedColor[0],
        points: `200, 17 ${unref(width) - 10}, 17`
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("polyline", {
        class: "bb4-line-10",
        stroke: unref(data).mergedColor[1],
        points: `385, 17 ${unref(width) - 10}, 17`
      }, null, 8
      /* PROPS */
      , _hoisted_12)], 10
      /* CLASS, PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_13, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox4/index.vue";

script.name = 'BorderBox4';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
