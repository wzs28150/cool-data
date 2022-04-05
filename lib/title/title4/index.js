import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, normalizeStyle, toDisplayString, Fragment, renderList } from 'vue';

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

const _hoisted_8 = /*#__PURE__*/createElementVNode("filter", {
  id: "f3",
  x: "-120%",
  y: "-120%",
  width: "400%",
  height: "400%"
}, [/*#__PURE__*/createElementVNode("feOffset", {
  result: "offOut",
  in: "SourceGraphic",
  dx: "0",
  dy: "0"
}), /*#__PURE__*/createElementVNode("feGaussianBlur", {
  result: "blurOut",
  in: "offOut",
  stdDeviation: "10"
}), /*#__PURE__*/createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "blurOut",
  mode: "multiply"
})], -1
/* HOISTED */
);

const _hoisted_9 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_10 = ["x", "y", "fill"];
const _hoisted_11 = ["points", "stroke"];
const _hoisted_12 = ["points", "filter", "fill", "fill-opacity"];
const _hoisted_13 = ["begin"];
const _hoisted_14 = ["points", "filter", "fill-opacity", "fill"];
const _hoisted_15 = ["begin"];
const _hoisted_16 = ["points", "fill", "fill-opacity"];
const _hoisted_17 = ["points", "fill", "fill-opacity"];
const _hoisted_18 = ["points", "fill", "fill-opacity"];
const _hoisted_19 = ["points", "fill", "fill-opacity"];
const _hoisted_20 = ["points", "fill", "fill-opacity"];
const _hoisted_21 = ["points", "fill", "fill-opacity"];
const _hoisted_22 = ["points", "fill", "fill-opacity"];
const _hoisted_23 = ["points", "fill", "fill-opacity"];
const _hoisted_24 = ["points", "fill", "fill-opacity"];
const _hoisted_25 = ["points", "fill", "fill-opacity"];
const _hoisted_26 = ["points", "fill", "fill-opacity"];
const _hoisted_27 = ["points", "fill", "fill-opacity"];
var script = {
  props: {
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
      ref: 'title-4',
      filterId: `title-4-filterId-${id}`,
      defaultColor: ['#8aaafb', '#ffffff'],
      mergedColor: [],
      titleWidth: 0
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
        class: "title-4 title",
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
        "flood-color": unref(data).mergedColor[0],
        result: "glowColor"
      }, null, 8
      /* PROPS */
      , _hoisted_5), _hoisted_6, _hoisted_7], 8
      /* PROPS */
      , _hoisted_2), _hoisted_8]), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5} 0,
          ${unref(width) * 0.5 - unref(width) * 0.02 - unref(data).titleWidth * 0.5} 0,
          ${unref(width) * 0.5 - unref(width) * 0.028 - unref(data).titleWidth * 0.5} ${unref(height) * 0.18},
          ${unref(width) * 0.5 - unref(width) * 0.008 - unref(data).titleWidth * 0.5} ${unref(height) * 0.59},
          ${unref(width) * 0.5 + unref(width) * 0.008 + unref(data).titleWidth * 0.5} ${unref(height) * 0.59},
          ${unref(width) * 0.5 + unref(width) * 0.028 + unref(data).titleWidth * 0.5} ${unref(height) * 0.18},
          ${unref(width) * 0.5 + unref(width) * 0.02 + unref(data).titleWidth * 0.5} 0,
          ${unref(width) * 0.5} 0
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.6
      }, null, 8
      /* PROPS */
      , _hoisted_9), createElementVNode("text", {
        class: "title-4-title",
        x: `${unref(width) / 2}`,
        y: unref(height) * 0.34,
        fill: unref(data).mergedColor[1],
        "font-size": "30",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[1]};`),
        "letter-spacing": "4"
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_10), createElementVNode("polyline", {
        class: "title-4-center-bottom",
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.046} ${unref(height) * 0.53},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.0365} ${unref(height) * 0.72},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.029} ${unref(height) * 0.72},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.022} ${unref(height) * 0.85},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.005} ${unref(height) * 0.85},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.001} ${unref(height) * 0.76},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 + unref(width) * 0.005} ${unref(height) * 0.88},

          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 - unref(width) * 0.005} ${unref(height) * 0.88},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.001} ${unref(height) * 0.76},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.005} ${unref(height) * 0.85},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.022} ${unref(height) * 0.85},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.029} ${unref(height) * 0.72},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.0365} ${unref(height) * 0.72},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.046} ${unref(height) * 0.53}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_11), (openBlock(), createElementBlock(Fragment, null, renderList(40, i => {
        return createElementVNode("polyline", {
          key: `k${i}`,
          points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.058 - unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.63},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.053 - unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.63},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.043 - unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.88},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.048 - unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.88}
        `,
          filter: `url(#f3)`,
          fill: unref(data).mergedColor[0],
          "fill-opacity": 0.6
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "0.6;0.4;0.6",
          dur: "2s",
          begin: `${i * 0.20}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_13)], 8
        /* PROPS */
        , _hoisted_12);
      }), 64
      /* STABLE_FRAGMENT */
      )), (openBlock(), createElementBlock(Fragment, null, renderList(40, i => {
        return createElementVNode("polyline", {
          key: `s${i}`,
          points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.058 + unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.63},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.053 + unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.63},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.043 + unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.88},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.048 + unref(width) * 0.01 * (i - 1)} ${unref(height) * 0.88}
        `,
          filter: `url(#f3)`,
          "fill-opacity": 0.6,
          fill: unref(data).mergedColor[0]
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "0.6;0.4;0.6",
          dur: "2s",
          begin: `${i * 0.20}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_15)], 8
        /* PROPS */
        , _hoisted_14);
      }), 64
      /* STABLE_FRAGMENT */
      )), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.123} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.056} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.052} ${unref(height) * 0.22},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.044} ${unref(height) * 0.22},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.044} ${unref(height) * 0.36},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.032} ${unref(height) * 0.60},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.037} ${unref(height) * 0.60},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.049} ${unref(height) * 0.36},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.060} ${unref(height) * 0.36},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.065} ${unref(height) * 0.27},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.11} ${unref(height) * 0.27},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.113} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.123} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.056} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.052} ${unref(height) * 0.22},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.044} ${unref(height) * 0.22},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.044} ${unref(height) * 0.36},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.032} ${unref(height) * 0.60},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.037} ${unref(height) * 0.60},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.049} ${unref(height) * 0.36},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.060} ${unref(height) * 0.36},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.065} ${unref(height) * 0.27},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.11} ${unref(height) * 0.27},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.113} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.039} ${unref(height) * 0.26},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.022} ${unref(height) * 0.60},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.028} ${unref(height) * 0.60},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.041} ${unref(height) * 0.34}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_18), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.039} ${unref(height) * 0.26},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.022} ${unref(height) * 0.60},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.028} ${unref(height) * 0.60},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.041} ${unref(height) * 0.34}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_19), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.1585} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.127} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.127} ${unref(height) * 0.27},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.145} ${unref(height) * 0.27},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.148} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_20), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.1585} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.127} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.127} ${unref(height) * 0.27},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.145} ${unref(height) * 0.27},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.148} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_21), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.159 - unref(width) * 0.004} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.162 - unref(width) * 0.004} ${unref(height) * 0.15},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.159 - unref(width) * 0.004} ${unref(height) * 0.20}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_22), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.159 + unref(width) * 0.004} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.162 + unref(width) * 0.004} ${unref(height) * 0.15},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.159 + unref(width) * 0.004} ${unref(height) * 0.20}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_23), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.305} ${unref(height) * 0.22},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.162} ${unref(height) * 0.22},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.157} ${unref(height) * 0.31},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.294} ${unref(height) * 0.31},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.298} ${unref(height) * 0.39},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.305} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_24), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.305} ${unref(height) * 0.22},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.162} ${unref(height) * 0.22},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.157} ${unref(height) * 0.31},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.294} ${unref(height) * 0.31},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.298} ${unref(height) * 0.39},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.305} ${unref(height) * 0.31}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_25), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.306} ${unref(height) * 0.159},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.285} ${unref(height) * 0.159},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.306} ${unref(height) * 0.202},
          ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.316} ${unref(height) * 0.382}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_26), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.306} ${unref(height) * 0.159},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.285} ${unref(height) * 0.159},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.306} ${unref(height) * 0.202},
          ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.316} ${unref(height) * 0.382}
        `,
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.7
      }, null, 8
      /* PROPS */
      , _hoisted_27)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title4/index.vue";

script.height = 94;
script.name = 'Title4';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
