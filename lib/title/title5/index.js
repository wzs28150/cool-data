import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, normalizeStyle, toDisplayString } from 'vue';

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
  stdDeviation: "20"
}), /*#__PURE__*/createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "blurOut",
  mode: "multiply"
})], -1
/* HOISTED */
);

const _hoisted_9 = ["id"];

const _hoisted_10 = /*#__PURE__*/createElementVNode("feComponentTransfer", {
  in: "SourceAlpha"
}, [/*#__PURE__*/createElementVNode("feFuncA", {
  type: "table",
  tableValues: "1 0"
})], -1
/* HOISTED */
);

const _hoisted_11 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  stdDeviation: "10"
}, null, -1
/* HOISTED */
);

const _hoisted_12 = /*#__PURE__*/createElementVNode("feOffset", {
  dx: "0",
  dy: "1",
  result: "offsetblur"
}, null, -1
/* HOISTED */
);

const _hoisted_13 = ["flood-color"];

const _hoisted_14 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "offsetblur",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_15 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "SourceAlpha",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_16 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
}), /*#__PURE__*/createElementVNode("feMergeNode")], -1
/* HOISTED */
);

const _hoisted_17 = ["points", "stroke", "fill", "filter"];
const _hoisted_18 = ["points", "stroke"];
const _hoisted_19 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_20 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_21 = ["points", "stroke"];
const _hoisted_22 = ["points", "stroke"];
const _hoisted_23 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_24 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_25 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_26 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_27 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_28 = ["points", "stroke", "fill", "fill-opacity"];
const _hoisted_29 = ["x", "y", "fill"];
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
      ref: 'title-5',
      filterId: `title-5-filterId-${id}`,
      defaultColor: ['#8aaafb', '#ffffff', '#08192d'],
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
        class: "title-5 title",
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
        "flood-color": unref(data).mergedColor[1],
        result: "glowColor"
      }, null, 8
      /* PROPS */
      , _hoisted_5), _hoisted_6, _hoisted_7], 8
      /* PROPS */
      , _hoisted_2), _hoisted_8, createElementVNode("filter", {
        id: `inset-shadow-${unref(id)}`,
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
      }, [_hoisted_10, _hoisted_11, _hoisted_12, createElementVNode("feFlood", {
        "flood-color": unref(data).mergedColor[0],
        "flood-opacity": "0.5",
        result: "color"
      }, null, 8
      /* PROPS */
      , _hoisted_13), _hoisted_14, _hoisted_15, _hoisted_16], 8
      /* PROPS */
      , _hoisted_9)]), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.019} 1,
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.019} 1,
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.052} ${unref(height) * 0.5},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.019} ${unref(height) - 1},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.019} ${unref(height) - 1},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.052} ${unref(height) * 0.5},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.019} 1
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": 1,
        filter: `url(#inset-shadow-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.028}  ${unref(height) * 0.858},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 + unref(width) * 0.0005}  ${unref(height) * 0.858},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 + unref(width) * 0.005}  ${unref(height) * 0.934},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 - unref(width) * 0.005}  ${unref(height) * 0.934},

        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 - unref(width) * 0.0005}  ${unref(height) * 0.858},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.028}  ${unref(height) * 0.858}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none",
        class: "title-5-center-line"
      }, null, 8
      /* PROPS */
      , _hoisted_18), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.096}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.052}  ${unref(height) * 0.51},

        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.047}  ${unref(height) * 0.58},

        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.093}  ${unref(height) * 0.58},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.096}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-left-px"
      }, null, 8
      /* PROPS */
      , _hoisted_19), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.096}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.052}  ${unref(height) * 0.51},

        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.047}  ${unref(height) * 0.58},

        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.093}  ${unref(height) * 0.58},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.096}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-right-px"
      }, null, 8
      /* PROPS */
      , _hoisted_20), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.096}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        class: "title-5-left-line"
      }, null, 8
      /* PROPS */
      , _hoisted_21), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.096}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        class: "title-5-right-line"
      }, null, 8
      /* PROPS */
      , _hoisted_22), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.34}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.34 + unref(width) * 0.009}  ${unref(height) * 0.3},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.34 + unref(width) * 0.040}  ${unref(height) * 0.3},
        ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-left-trapezoid"
      }, null, 8
      /* PROPS */
      , _hoisted_23), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29}  ${unref(height) * 0.51},
        ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.34}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.34 - unref(width) * 0.009}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.34 - unref(width) * 0.040}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29}  ${unref(height) * 0.51}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-right-trapezoid"
      }, null, 8
      /* PROPS */
      , _hoisted_24), createElementVNode("polyline", {
        points: `
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.28}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.27}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.28}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29}  ${unref(height) * 0.3}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-left-trapezoid2"
      }, null, 8
      /* PROPS */
      , _hoisted_25), createElementVNode("polyline", {
        points: `
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.28}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.27}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.28}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29}  ${unref(height) * 0.3}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-right-trapezoid2"
      }, null, 8
      /* PROPS */
      , _hoisted_26), createElementVNode("polyline", {
        points: `
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29 + unref(width) * 0.02}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.285 + unref(width) * 0.02}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.275 + unref(width) * 0.02}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.28 + unref(width) * 0.02}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 - unref(data).titleWidth * 0.5 - unref(width) * 0.29 + unref(width) * 0.02}  ${unref(height) * 0.3}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-left-trapezoid3"
      }, null, 8
      /* PROPS */
      , _hoisted_27), createElementVNode("polyline", {
        points: `
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29 - unref(width) * 0.02}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.285 - unref(width) * 0.02}  ${unref(height) * 0.3},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.275 - unref(width) * 0.02}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.28 - unref(width) * 0.02}  ${unref(height) * 0.51},
         ${unref(width) * 0.5 + unref(data).titleWidth * 0.5 + unref(width) * 0.29 - unref(width) * 0.02}  ${unref(height) * 0.3}
        `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0],
        "fill-opacity": 0.3,
        class: "title-5-right-trapezoid3"
      }, null, 8
      /* PROPS */
      , _hoisted_28), createElementVNode("text", {
        class: "title-5-title",
        x: `${unref(width) / 2}`,
        y: unref(height) * 0.52,
        fill: unref(data).mergedColor[1],
        "font-size": "32",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[1]};`),
        "letter-spacing": "4"
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_29)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title5/index.vue";

script.height = 92;
script.name = 'Title5';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
