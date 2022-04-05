import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, normalizeStyle, unref, createElementVNode, renderSlot } from 'vue';

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
const _hoisted_2 = ["stroke"];
const _hoisted_3 = ["stroke", "points"];
const _hoisted_4 = ["stroke", "points"];
const _hoisted_5 = ["stroke", "points"];
const _hoisted_6 = ["stroke"];
const _hoisted_7 = ["stroke", "points"];
const _hoisted_8 = ["stroke", "points"];
const _hoisted_9 = ["stroke", "points"];
const _hoisted_10 = {
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
      ref: 'border-box-7',
      defaultColor: ['rgba(128,128,128,0.3)', 'rgba(128,128,128,0.8)'],
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
        class: "border-box-7",
        style: normalizeStyle(`box-shadow: inset 0 0 40px ${unref(data).mergedColor[0]}; border: 1px solid ${unref(data).mergedColor[0]}; background-color: ${props.backgroundColor}`),
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polyline", {
        class: "bb7-line-width-2",
        stroke: unref(data).mergedColor[0],
        points: `0, 25 0, 0 25, 0`
      }, null, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("polyline", {
        class: "bb7-line-width-2",
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 25}, 0 ${unref(width)}, 0 ${unref(width)}, 25`
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("polyline", {
        class: "bb7-line-width-2",
        stroke: unref(data).mergedColor[0],
        points: `${unref(width) - 25}, ${unref(height)} ${unref(width)}, ${unref(height)} ${unref(width)}, ${unref(height) - 25}`
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("polyline", {
        class: "bb7-line-width-2",
        stroke: unref(data).mergedColor[0],
        points: `0, ${unref(height) - 25} 0, ${unref(height)} 25, ${unref(height)}`
      }, null, 8
      /* PROPS */
      , _hoisted_5), createElementVNode("polyline", {
        class: "bb7-line-width-5",
        stroke: unref(data).mergedColor[1],
        points: `0, 10 0, 0 10, 0`
      }, null, 8
      /* PROPS */
      , _hoisted_6), createElementVNode("polyline", {
        class: "bb7-line-width-5",
        stroke: unref(data).mergedColor[1],
        points: `${unref(width) - 10}, 0 ${unref(width)}, 0 ${unref(width)}, 10`
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("polyline", {
        class: "bb7-line-width-5",
        stroke: unref(data).mergedColor[1],
        points: `${unref(width) - 10}, ${unref(height)} ${unref(width)}, ${unref(height)} ${unref(width)}, ${unref(height) - 10}`
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        class: "bb7-line-width-5",
        stroke: unref(data).mergedColor[1],
        points: `0, ${unref(height) - 10} 0, ${unref(height)} 10, ${unref(height)}`
      }, null, 8
      /* PROPS */
      , _hoisted_9)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_10, [renderSlot(_ctx.$slots, "default")])], 4
      /* STYLE */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox7/index.vue";

script.name = 'BorderBox7';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
