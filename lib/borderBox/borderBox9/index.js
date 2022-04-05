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

const _hoisted_3 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "x1",
  values: "0%;100%;0%",
  dur: "10s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "x2",
  values: "100%;0%;100%",
  dur: "10s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = ["stop-color"];
const _hoisted_6 = ["values"];
const _hoisted_7 = ["stop-color"];
const _hoisted_8 = ["values"];
const _hoisted_9 = ["id"];
const _hoisted_10 = ["points"];
const _hoisted_11 = ["points"];
const _hoisted_12 = ["points"];
const _hoisted_13 = ["points"];
const _hoisted_14 = ["points"];
const _hoisted_15 = ["points"];
const _hoisted_16 = ["points"];
const _hoisted_17 = ["points"];
const _hoisted_18 = ["points"];
const _hoisted_19 = ["fill", "points"];
const _hoisted_20 = ["width", "height", "fill", "mask"];
const _hoisted_21 = {
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
      ref: 'border-box-9',
      gradientId: `border-box-9-gradient-${id}`,
      maskId: `border-box-9-mask-${id}`,
      defaultColor: ['#11eefd', '#0078d2'],
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
        class: "border-box-9",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("linearGradient", {
        id: unref(data).gradientId,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%"
      }, [_hoisted_3, _hoisted_4, createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[0]
      }, [createElementVNode("animate", {
        attributeName: "stop-color",
        values: `${unref(data).mergedColor[0]};${unref(data).mergedColor[1]};${unref(data).mergedColor[0]}`,
        dur: "10s",
        begin: "0s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_6)], 8
      /* PROPS */
      , _hoisted_5), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[1]
      }, [createElementVNode("animate", {
        attributeName: "stop-color",
        values: `${unref(data).mergedColor[1]};${unref(data).mergedColor[0]};${unref(data).mergedColor[1]}`,
        dur: "10s",
        begin: "0s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_8)], 8
      /* PROPS */
      , _hoisted_7)], 8
      /* PROPS */
      , _hoisted_2), createElementVNode("mask", {
        id: unref(data).maskId
      }, [createElementVNode("polyline", {
        stroke: "#fff",
        "stroke-width": "3",
        fill: "transparent",
        points: `8, ${unref(height) * 0.4} 8, 3, ${unref(width) * 0.4 + 7}, 3`
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("polyline", {
        fill: "#fff",
        points: `8, ${unref(height) * 0.15} 8, 3, ${unref(width) * 0.1 + 7}, 3
              ${unref(width) * 0.1}, 8 14, 8 14, ${unref(height) * 0.15 - 7}
            `
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("polyline", {
        stroke: "#fff",
        "stroke-width": "3",
        fill: "transparent",
        points: `${unref(width) * 0.5}, 3 ${unref(width) - 3}, 3, ${unref(width) - 3}, ${unref(height) * 0.25}`
      }, null, 8
      /* PROPS */
      , _hoisted_12), createElementVNode("polyline", {
        fill: "#fff",
        points: `
              ${unref(width) * 0.52}, 3 ${unref(width) * 0.58}, 3
              ${unref(width) * 0.58 - 7}, 9 ${unref(width) * 0.52 + 7}, 9
            `
      }, null, 8
      /* PROPS */
      , _hoisted_13), createElementVNode("polyline", {
        fill: "#fff",
        points: `
              ${unref(width) * 0.9}, 3 ${unref(width) - 3}, 3 ${unref(width) - 3}, ${unref(height) * 0.1}
              ${unref(width) - 9}, ${unref(height) * 0.1 - 7} ${unref(width) - 9}, 9 ${unref(width) * 0.9 + 7}, 9
            `
      }, null, 8
      /* PROPS */
      , _hoisted_14), createElementVNode("polyline", {
        stroke: "#fff",
        "stroke-width": "3",
        fill: "transparent",
        points: `8, ${unref(height) * 0.5} 8, ${unref(height) - 3} ${unref(width) * 0.3 + 7}, ${unref(height) - 3}`
      }, null, 8
      /* PROPS */
      , _hoisted_15), createElementVNode("polyline", {
        fill: "#fff",
        points: `
              8, ${unref(height) * 0.55} 8, ${unref(height) * 0.7}
              2, ${unref(height) * 0.7 - 7} 2, ${unref(height) * 0.55 + 7}
            `
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("polyline", {
        stroke: "#fff",
        "stroke-width": "3",
        fill: "transparent",
        points: `${unref(width) * 0.35}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) * 0.35}`
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        fill: "#fff",
        points: `
              ${unref(width) * 0.92}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) - 3} ${unref(width) - 3}, ${unref(height) * 0.8}
              ${unref(width) - 9}, ${unref(height) * 0.8 + 7} ${unref(width) - 9}, ${unref(height) - 9} ${unref(width) * 0.92 + 7}, ${unref(height) - 9}
            `
      }, null, 8
      /* PROPS */
      , _hoisted_18)], 8
      /* PROPS */
      , _hoisted_9)]), createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
          15, 9 ${unref(width) * 0.1 + 1}, 9 ${unref(width) * 0.1 + 4}, 6 ${unref(width) * 0.52 + 2}, 6
          ${unref(width) * 0.52 + 6}, 10 ${unref(width) * 0.58 - 7}, 10 ${unref(width) * 0.58 - 2}, 6
          ${unref(width) * 0.9 + 2}, 6 ${unref(width) * 0.9 + 6}, 10 ${unref(width) - 10}, 10 ${unref(width) - 10}, ${unref(height) * 0.1 - 6}
          ${unref(width) - 6}, ${unref(height) * 0.1 - 1} ${unref(width) - 6}, ${unref(height) * 0.8 + 1} ${unref(width) - 10}, ${unref(height) * 0.8 + 6}
          ${unref(width) - 10}, ${unref(height) - 10} ${unref(width) * 0.92 + 7}, ${unref(height) - 10}  ${unref(width) * 0.92 + 2}, ${unref(height) - 6}
          11, ${unref(height) - 6} 11, ${unref(height) * 0.15 - 2} 15, ${unref(height) * 0.15 - 7}
        `
      }, null, 8
      /* PROPS */
      , _hoisted_19), createElementVNode("rect", {
        x: "0",
        y: "0",
        width: unref(width),
        height: unref(height),
        fill: `url(#${unref(data).gradientId})`,
        mask: `url(#${unref(data).maskId})`
      }, null, 8
      /* PROPS */
      , _hoisted_20)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_21, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox9/index.vue";

script.name = 'BorderBox9';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
