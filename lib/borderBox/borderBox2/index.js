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
const _hoisted_3 = ["stroke", "points"];
const _hoisted_4 = ["stroke", "points"];
const _hoisted_5 = ["fill"];
const _hoisted_6 = ["fill", "cx"];
const _hoisted_7 = ["fill", "cx", "cy"];
const _hoisted_8 = ["fill", "cy"];
const _hoisted_9 = {
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
    }
  },

  setup(__props) {
    const props = __props;
    const data = reactive({
      ref: 'border-box-2',
      defaultColor: ['#fff', 'rgba(255, 255, 255, 0.6)'],
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
        class: "border-box-2",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
        7, 7 ${unref(width) - 7}, 7 ${unref(width) - 7}, ${unref(height) - 7} 7, ${unref(height) - 7}
      `
      }, null, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[0],
        points: `2, 2 ${unref(width) - 2} ,2 ${unref(width) - 2}, ${unref(height) - 2} 2, ${unref(height) - 2} 2, 2`
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("polyline", {
        stroke: unref(data).mergedColor[1],
        points: `6, 6 ${unref(width) - 6}, 6 ${unref(width) - 6}, ${unref(height) - 6} 6, ${unref(height) - 6} 6, 6`
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("circle", {
        fill: unref(data).mergedColor[0],
        cx: "11",
        cy: "11",
        r: "1"
      }, null, 8
      /* PROPS */
      , _hoisted_5), createElementVNode("circle", {
        fill: unref(data).mergedColor[0],
        cx: unref(width) - 11,
        cy: "11",
        r: "1"
      }, null, 8
      /* PROPS */
      , _hoisted_6), createElementVNode("circle", {
        fill: unref(data).mergedColor[0],
        cx: unref(width) - 11,
        cy: unref(height) - 11,
        r: "1"
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("circle", {
        fill: unref(data).mergedColor[0],
        cx: "11",
        cy: unref(height) - 11,
        r: "1"
      }, null, 8
      /* PROPS */
      , _hoisted_8)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_9, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox2/index.vue";

script.name = 'BorderBox2';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
