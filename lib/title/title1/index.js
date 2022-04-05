import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, createCommentVNode, normalizeStyle, toDisplayString } from 'vue';

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

const _hoisted_4 = ["flood-color"];

const _hoisted_5 = /*#__PURE__*/createElementVNode("feComposite", {
  in: "glowColor",
  in2: "blurred",
  operator: "in",
  result: "softGlowColored"
}, null, -1
/* HOISTED */
);

const _hoisted_6 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "softGlowColored"
}), /*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
})], -1
/* HOISTED */
);

const _hoisted_7 = ["points", "stroke"];
const _hoisted_8 = ["points", "stroke"];
const _hoisted_9 = ["points", "stroke"];
const _hoisted_10 = ["points", "stroke"];
const _hoisted_11 = ["cx", "cy", "stroke", "fill"];

const _hoisted_12 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_13 = [_hoisted_12];
const _hoisted_14 = ["cx", "cy", "stroke", "fill"];

const _hoisted_15 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0.25s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_16 = [_hoisted_15];
const _hoisted_17 = ["cx", "cy", "stroke", "fill"];

const _hoisted_18 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0.75s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_19 = [_hoisted_18];
const _hoisted_20 = ["cx", "cy", "stroke", "fill"];

const _hoisted_21 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "1s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_22 = [_hoisted_21];
const _hoisted_23 = ["cx", "cy", "stroke"];
const _hoisted_24 = ["x", "y", "fill"];
const _hoisted_25 = ["cx", "cy", "stroke"];
const _hoisted_26 = ["points", "stroke"];
const _hoisted_27 = ["cx", "cy", "stroke", "fill"];

const _hoisted_28 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_29 = [_hoisted_28];
const _hoisted_30 = ["cx", "cy", "stroke", "fill"];

const _hoisted_31 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0.25s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_32 = [_hoisted_31];
const _hoisted_33 = ["cx", "cy", "stroke", "fill"];

const _hoisted_34 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "0.75s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_35 = [_hoisted_34];
const _hoisted_36 = ["cx", "cy", "stroke", "fill"];

const _hoisted_37 = /*#__PURE__*/createElementVNode("animate", {
  attributeName: "fill-opacity",
  values: "1;0;1",
  dur: "2s",
  begin: "1s",
  repeatCount: "indefinite"
}, null, -1
/* HOISTED */
);

const _hoisted_38 = [_hoisted_37];
const _hoisted_39 = ["points", "stroke"];
const _hoisted_40 = ["points", "stroke"];
const _hoisted_41 = ["points", "stroke"];
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
      ref: 'title-1',
      filterId: `title-1-filterId-${id}`,
      defaultColor: ['#8aaafb', '#8aaafb'],
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
        class: "title-1 title",
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
      }, [_hoisted_3, createCommentVNode(" <feGaussianBlur in=\"thicken\" stdDeviation=\"3\" result=\"blurred\" /> "), createElementVNode("feFlood", {
        "flood-color": unref(data).mergedColor[1],
        result: "glowColor"
      }, null, 8
      /* PROPS */
      , _hoisted_4), _hoisted_5, _hoisted_6], 8
      /* PROPS */
      , _hoisted_2)]), createElementVNode("polyline", {
        points: `0 ${unref(height) * 0.75},${unref(width) * 0.087} ${unref(height) * 0.75},${unref(width) * 0.1} ${unref(height) * 0.4}, ${unref(width) * 0.16} ${unref(height) * 0.4},${unref(width) * 0.166} ${unref(height) * 0.57},${unref(width) / 2 - unref(data).titleWidth / 2 - 18 - 75} ${unref(height) * 0.57}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("polyline", {
        points: `${unref(width) * 0.17} ${unref(height) * 0.45},${unref(width) * 0.3} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-dasharray": "2 2",
        "stroke-width": "1"
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        points: `${unref(width) * 0.17} ${unref(height) * 0.45}, ${unref(width) * 0.18} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2"
      }, null, 8
      /* PROPS */
      , _hoisted_9), createElementVNode("polyline", {
        points: `${unref(width) * 0.29} ${unref(height) * 0.45}, ${unref(width) * 0.3} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2"
      }, null, 8
      /* PROPS */
      , _hoisted_10), createElementVNode("circle", {
        cx: `${unref(width) * 0.107}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c1",
        "fill-opacity": "1"
      }, _hoisted_13, 8
      /* PROPS */
      , _hoisted_11), createElementVNode("circle", {
        cx: `${unref(width) * 0.123}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c2",
        "fill-opacity": "1"
      }, _hoisted_16, 8
      /* PROPS */
      , _hoisted_14), createElementVNode("circle", {
        cx: `${unref(width) * 0.138}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c3",
        "fill-opacity": "1"
      }, _hoisted_19, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("circle", {
        cx: `${unref(width) * 0.153}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c4"
      }, _hoisted_22, 8
      /* PROPS */
      , _hoisted_20), createElementVNode("circle", {
        cx: `${unref(width) / 2 - unref(data).titleWidth / 2 - 10 - 75}`,
        cy: unref(height) * 0.57,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_23), createElementVNode("text", {
        class: "border-box-1-title",
        x: `${unref(width) / 2}`,
        y: `${unref(height) * 0.57}`,
        fill: unref(data).mergedColor[1],
        "font-size": "32",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[1]};`),
        ref_key: "text",
        ref: text,
        "letter-spacing": "4"
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_24), createElementVNode("circle", {
        cx: `${unref(width) / 2 + unref(data).titleWidth / 2 + 10 + 75}`,
        cy: unref(height) * 0.57,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_25), createElementVNode("polyline", {
        points: `${unref(width)} ${unref(height) * 0.75},${unref(width) * 0.913} ${unref(height) * 0.75},${unref(width) * 0.9} ${unref(height) * 0.4},${unref(width) * 0.84} ${unref(height) * 0.4},${unref(width) * 0.834} ${unref(height) * 0.57},${unref(width) / 2 + unref(data).titleWidth / 2 + 18 + 75} ${unref(height) * 0.57}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_26), createElementVNode("circle", {
        cx: `${unref(width) * 0.893}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c1",
        "fill-opacity": "1"
      }, _hoisted_29, 8
      /* PROPS */
      , _hoisted_27), createElementVNode("circle", {
        cx: `${unref(width) * 0.877}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c2",
        "fill-opacity": "1"
      }, _hoisted_32, 8
      /* PROPS */
      , _hoisted_30), createElementVNode("circle", {
        cx: `${unref(width) * 0.862}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c3",
        "fill-opacity": "1"
      }, _hoisted_35, 8
      /* PROPS */
      , _hoisted_33), createElementVNode("circle", {
        cx: `${unref(width) * 0.847}`,
        cy: unref(height) * 0.7 - 2,
        r: "6",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        class: "c4",
        "fill-opacity": "1"
      }, _hoisted_38, 8
      /* PROPS */
      , _hoisted_36), createElementVNode("polyline", {
        points: `${unref(width) * 0.83} ${unref(height) * 0.45},${unref(width) * 0.7} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-dasharray": "2 2",
        "stroke-width": "1"
      }, null, 8
      /* PROPS */
      , _hoisted_39), createElementVNode("polyline", {
        points: `${unref(width) * 0.83} ${unref(height) * 0.45}, ${unref(width) * 0.82} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2"
      }, null, 8
      /* PROPS */
      , _hoisted_40), createElementVNode("polyline", {
        points: `${unref(width) * 0.71} ${unref(height) * 0.45}, ${unref(width) * 0.7} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2"
      }, null, 8
      /* PROPS */
      , _hoisted_41)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title1/index.vue";

script.height = 60;
script.name = 'Title1';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
