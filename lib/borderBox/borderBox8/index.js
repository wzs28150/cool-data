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
const _hoisted_2 = ["id", "d"];
const _hoisted_3 = ["id"];

const _hoisted_4 = /*#__PURE__*/createElementVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = /*#__PURE__*/createElementVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1
/* HOISTED */
);

const _hoisted_6 = [_hoisted_4, _hoisted_5];
const _hoisted_7 = ["id"];
const _hoisted_8 = ["fill"];
const _hoisted_9 = ["dur", "path"];
const _hoisted_10 = ["fill", "points"];
const _hoisted_11 = ["stroke", "xlink:href"];
const _hoisted_12 = ["stroke", "xlink:href", "mask"];
const _hoisted_13 = ["from", "to", "dur"];
const _hoisted_14 = {
  class: "border-box-content"
};
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
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
      ref: 'border-box-8',
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,
      defaultColor: ['#235fa7', '#4fd2dd'],
      mergedColor: []
    });
    const pathD = ref();
    const length = ref(); // 处理尺寸

    const {
      width,
      height
    } = autoResize(data.ref, (width, height) => {
      if (props.reverse) {
        pathD.value = `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`;
      } else {
        pathD.value = `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`;
      }

      length.value = (width + height - 5) * 2;
    });

    const mergeColor = () => {
      data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || []);
    };

    onMounted(() => {
      mergeColor();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "border-box-8",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("path", {
        id: unref(data).path,
        d: pathD.value,
        fill: "transparent"
      }, null, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("radialGradient", {
        id: unref(data).gradient,
        cx: "50%",
        cy: "50%",
        r: "50%"
      }, _hoisted_6, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("mask", {
        id: unref(data).mask
      }, [createElementVNode("circle", {
        cx: "0",
        cy: "0",
        r: "150",
        fill: `url(#${unref(data).gradient})`
      }, [createElementVNode("animateMotion", {
        dur: `${__props.dur}s`,
        path: pathD.value,
        rotate: "auto",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_9)], 8
      /* PROPS */
      , _hoisted_8)], 8
      /* PROPS */
      , _hoisted_7)]), createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `5, 5 ${unref(width) - 5}, 5 ${unref(width) - 5} ${unref(height) - 5} 5, ${unref(height) - 5}`
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("use", {
        stroke: unref(data).mergedColor[0],
        "stroke-width": "1",
        "xlink:href": `#${unref(data).path}`
      }, null, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("use", {
        stroke: unref(data).mergedColor[1],
        "stroke-width": "3",
        "xlink:href": `#${unref(data).path}`,
        mask: `url(#${unref(data).mask})`
      }, [createElementVNode("animate", {
        attributeName: "stroke-dasharray",
        from: `0, ${length.value}`,
        to: `${length.value}, 0`,
        dur: `${props.dur}s`,
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_13)], 8
      /* PROPS */
      , _hoisted_12)], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", _hoisted_14, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox8/index.vue";

script.name = 'BorderBox8';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
