import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString } from 'vue';

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

const _hoisted_8 = ["id"];

const _hoisted_9 = /*#__PURE__*/createElementVNode("feOffset", {
  result: "offOut",
  in: "SourceGraphic",
  dx: "0",
  dy: "0"
}, null, -1
/* HOISTED */
);

const _hoisted_10 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  result: "blurOut",
  in: "offOut",
  stdDeviation: "10"
}, null, -1
/* HOISTED */
);

const _hoisted_11 = /*#__PURE__*/createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "blurOut",
  mode: "multiply"
}, null, -1
/* HOISTED */
);

const _hoisted_12 = [_hoisted_9, _hoisted_10, _hoisted_11];
const _hoisted_13 = ["id"];

const _hoisted_14 = /*#__PURE__*/createElementVNode("feComponentTransfer", {
  in: "SourceAlpha"
}, [/*#__PURE__*/createElementVNode("feFuncA", {
  type: "table",
  tableValues: "1 0"
})], -1
/* HOISTED */
);

const _hoisted_15 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  stdDeviation: "10"
}, null, -1
/* HOISTED */
);

const _hoisted_16 = /*#__PURE__*/createElementVNode("feOffset", {
  dx: "0",
  dy: "1",
  result: "offsetblur"
}, null, -1
/* HOISTED */
);

const _hoisted_17 = ["flood-color"];

const _hoisted_18 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "offsetblur",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_19 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "SourceAlpha",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_20 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
}), /*#__PURE__*/createElementVNode("feMergeNode")], -1
/* HOISTED */
);

const _hoisted_21 = ["id"];
const _hoisted_22 = ["stop-color"];
const _hoisted_23 = ["stop-color", "stop-opacity"];
const _hoisted_24 = ["id"];
const _hoisted_25 = ["stop-color"];
const _hoisted_26 = ["stop-color", "stop-opacity"];
const _hoisted_27 = ["stop-color", "stop-opacity"];
const _hoisted_28 = ["id"];
const _hoisted_29 = ["stop-color"];
const _hoisted_30 = ["stop-color", "stop-opacity"];
const _hoisted_31 = ["stop-color"];
const _hoisted_32 = ["id"];
const _hoisted_33 = ["stop-color"];
const _hoisted_34 = ["stop-color", "stop-opacity"];
const _hoisted_35 = ["stop-color"];
const _hoisted_36 = ["points", "stroke", "fill"];
const _hoisted_37 = ["points", "stroke"];
const _hoisted_38 = ["points", "stroke"];
const _hoisted_39 = ["x", "y", "width", "height", "fill", "filter"];
const _hoisted_40 = ["begin"];
const _hoisted_41 = ["x", "y", "fill"];
const _hoisted_42 = ["points", "stroke", "fill"];
const _hoisted_43 = ["points", "stroke", "fill"];
const _hoisted_44 = ["points", "stroke", "fill"];
const _hoisted_45 = ["points", "stroke", "fill"];
const _hoisted_46 = ["points", "stroke", "fill"];
const _hoisted_47 = ["points", "stroke", "fill"];
const _hoisted_48 = ["points", "stroke", "fill"];
const _hoisted_49 = ["points", "stroke", "fill"];
const _hoisted_50 = ["points", "fill"];
const _hoisted_51 = ["points", "fill"];
const _hoisted_52 = ["points", "fill"];
const _hoisted_53 = ["points", "fill"];
const _hoisted_54 = ["points", "stroke"];
const _hoisted_55 = ["points", "stroke"];
const _hoisted_56 = ["points", "stroke"];
const _hoisted_57 = ["points", "stroke"];
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
      ref: 'title-7',
      filterId: `title-7-filterId-${id}`,
      defaultColor: ['#7fffff', '#57fffc', '#009caa', '#00ffc5', '#0090ff'],
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
        class: "title-7 title",
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
      , _hoisted_2), createElementVNode("filter", {
        id: `f3-${unref(id)}`,
        x: "-120%",
        y: "-120%",
        width: "400%",
        height: "400%"
      }, _hoisted_12, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("filter", {
        id: `inset-shadow-${unref(id)}`,
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
      }, [_hoisted_14, _hoisted_15, _hoisted_16, createElementVNode("feFlood", {
        "flood-color": unref(data).mergedColor[0],
        "flood-opacity": "0.5",
        result: "color"
      }, null, 8
      /* PROPS */
      , _hoisted_17), _hoisted_18, _hoisted_19, _hoisted_20], 8
      /* PROPS */
      , _hoisted_13), createElementVNode("linearGradient", {
        id: `linear-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_22), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[0],
        "stop-opacity": 0.2
      }, null, 8
      /* PROPS */
      , _hoisted_23)], 8
      /* PROPS */
      , _hoisted_21), createElementVNode("linearGradient", {
        id: `linear-bg-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[0],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_25), createElementVNode("stop", {
        offset: "60%",
        "stop-color": unref(data).mergedColor[0],
        "stop-opacity": 0.2
      }, null, 8
      /* PROPS */
      , _hoisted_26), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[0],
        "stop-opacity": 0.3
      }, null, 8
      /* PROPS */
      , _hoisted_27)], 8
      /* PROPS */
      , _hoisted_24), createElementVNode("linearGradient", {
        id: `linear-left-${unref(id)}`,
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
      , _hoisted_29), createElementVNode("stop", {
        offset: "60%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0.6
      }, null, 8
      /* PROPS */
      , _hoisted_30), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[2]
      }, null, 8
      /* PROPS */
      , _hoisted_31)], 8
      /* PROPS */
      , _hoisted_28), createElementVNode("linearGradient", {
        id: `linear-right-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[2]
      }, null, 8
      /* PROPS */
      , _hoisted_33), createElementVNode("stop", {
        offset: "60%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0.6
      }, null, 8
      /* PROPS */
      , _hoisted_34), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[2],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_35)], 8
      /* PROPS */
      , _hoisted_32)]), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5} 1,
        ${unref(width) * 0.5 - unref(width) * 0.0416 - unref(data).titleWidth * 0.5} 1,
        ${unref(width) * 0.5 - unref(width) * 0.0546 - unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
        ${unref(width) * 0.5 - unref(width) * 0.0416 - unref(data).titleWidth * 0.5} ${unref(height) * 0.846},
        ${unref(width) * 0.5 + unref(width) * 0.0416 + unref(data).titleWidth * 0.5} ${unref(height) * 0.846},
        ${unref(width) * 0.5 + unref(width) * 0.0546 + unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
        ${unref(width) * 0.5 + unref(width) * 0.0416 + unref(data).titleWidth * 0.5} 1,
        ${unref(width) * 0.5} 1
        `,
        stroke: `url(#linear-${unref(id)})`,
        "stroke-width": "2",
        fill: `url(#linear-bg-${unref(id)})`,
        class: "title-7-center"
      }, null, 8
      /* PROPS */
      , _hoisted_36), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.076} ${unref(height) * 0.846},
          ${unref(width) * 0.5 - unref(width) * 0.0375} ${unref(height) * 0.846},
          ${unref(width) * 0.5 - unref(width) * 0.0343} ${unref(height) * 0.73},
          ${unref(width) * 0.5 + unref(width) * 0.0343} ${unref(height) * 0.73},
          ${unref(width) * 0.5 + unref(width) * 0.0375} ${unref(height) * 0.846},
          ${unref(width) * 0.5 + unref(width) * 0.076} ${unref(height) * 0.846}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: "none",
        class: "title-7-center"
      }, null, 8
      /* PROPS */
      , _hoisted_37), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.076} ${unref(height) * 0.884},
          ${unref(width) * 0.5 - unref(width) * 0.0375} ${unref(height) * 0.884},
          ${unref(width) * 0.5 - unref(width) * 0.0343} ${unref(height) - 1},
          ${unref(width) * 0.5 + unref(width) * 0.0343} ${unref(height) - 1},
          ${unref(width) * 0.5 + unref(width) * 0.0375} ${unref(height) * 0.884},
          ${unref(width) * 0.5 + unref(width) * 0.076} ${unref(height) * 0.884}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: "none",
        class: "title-7-center"
      }, null, 8
      /* PROPS */
      , _hoisted_38), (openBlock(), createElementBlock(Fragment, null, renderList(15, i => {
        return createElementVNode("rect", {
          key: `cc${i}`,
          x: unref(width) * 0.5 - unref(width) * 0.001 + unref(width) * (i - 8) * 0.004,
          y: unref(height) * 0.846 - unref(height) * 0.125 / 3,
          width: unref(width) * 0.002,
          height: unref(height) * 0.125,
          fill: unref(data).mergedColor[0],
          filter: `url(#f3-${unref(id)})`,
          "fill-opacity": "1"
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "1;0.4;1",
          dur: "3s",
          begin: `${i * 0.06}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_40)], 8
        /* PROPS */
        , _hoisted_39);
      }), 64
      /* STABLE_FRAGMENT */
      )), createElementVNode("text", {
        class: "title-7-title",
        x: `${unref(width) / 2}`,
        y: unref(height) * 0.45,
        fill: unref(data).mergedColor[1],
        "font-size": "32",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[1]};`),
        "letter-spacing": "10"
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_41), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.069 - unref(data).titleWidth * 0.5} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.065 - unref(data).titleWidth * 0.5} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0546 - unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.069 - unref(data).titleWidth * 0.5} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": "0.6",
        class: "title-7-center-left"
      }, null, 8
      /* PROPS */
      , _hoisted_42), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.069 + unref(data).titleWidth * 0.5} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.065 + unref(data).titleWidth * 0.5} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0546 + unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.069 + unref(data).titleWidth * 0.5} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": "0.6",
        class: "title-7-center-right"
      }, null, 8
      /* PROPS */
      , _hoisted_43), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.01} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0650 - unref(data).titleWidth * 0.5 - unref(width) * 0.01} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5 - unref(width) * 0.01} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5 - unref(width) * 0.01} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.01} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[3],
        "stroke-width": "2",
        fill: unref(data).mergedColor[3],
        "fill-opacity": "0.6",
        class: "title-7-center-left2"
      }, null, 8
      /* PROPS */
      , _hoisted_44), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.02} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0650 - unref(data).titleWidth * 0.5 - unref(width) * 0.02} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5 - unref(width) * 0.02} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5 - unref(width) * 0.02} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.02} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[4],
        "stroke-width": "2",
        fill: unref(data).mergedColor[4],
        "fill-opacity": "0.6",
        class: "title-7-center-left3"
      }, null, 8
      /* PROPS */
      , _hoisted_45), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0650 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.288},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.423},
          ${unref(width) * 0.5 - unref(width) * 0.0690 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": "0.6",
        class: "title-7-center-left4"
      }, null, 8
      /* PROPS */
      , _hoisted_46), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.01} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0650 + unref(data).titleWidth * 0.5 + unref(width) * 0.01} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5 + unref(width) * 0.01} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5 + unref(width) * 0.01} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.01} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[3],
        "stroke-width": "2",
        fill: unref(data).mergedColor[3],
        "fill-opacity": "0.6",
        class: "title-7-center-right2"
      }, null, 8
      /* PROPS */
      , _hoisted_47), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.02} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0650 + unref(data).titleWidth * 0.5 + unref(width) * 0.02} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5 + unref(width) * 0.02} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5 + unref(width) * 0.02} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.02} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[4],
        "stroke-width": "2",
        fill: unref(data).mergedColor[4],
        "fill-opacity": "0.6",
        class: "title-7-center-right3"
      }, null, 8
      /* PROPS */
      , _hoisted_48), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0650 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.288},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.423},
          ${unref(width) * 0.5 + unref(width) * 0.0690 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.288}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": "0.6",
        class: "title-7-center-right4"
      }, null, 8
      /* PROPS */
      , _hoisted_49), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.423 - unref(height) * 0.009},
          ${-unref(width) * 0.05} ${unref(height) * 0.423 - unref(height) * 0.009},
          ${-unref(width) * 0.05} ${unref(height) * 0.423 + unref(height) * 0.009},
          ${unref(width) * 0.5 - unref(width) * 0.0665 - unref(data).titleWidth * 0.5 - unref(width) * 0.03} ${unref(height) * 0.423 + unref(height) * 0.009}
        `,
        fill: `url(#linear-left-${unref(id)})`,
        class: "title-7-left-line"
      }, null, 8
      /* PROPS */
      , _hoisted_50), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.423 - unref(height) * 0.009},
          ${unref(width) + unref(width) * 0.05} ${unref(height) * 0.423 - unref(height) * 0.009},
          ${unref(width) + unref(width) * 0.05} ${unref(height) * 0.423 + unref(height) * 0.009},
          ${unref(width) * 0.5 + unref(width) * 0.0665 + unref(data).titleWidth * 0.5 + unref(width) * 0.03} ${unref(height) * 0.423 + unref(height) * 0.009}
        `,
        fill: `url(#linear-right-${unref(id)})`,
        class: "title-7-right-line"
      }, null, 8
      /* PROPS */
      , _hoisted_51), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5} ${unref(height) * 0.5 - unref(height) * 0.009},
          ${-unref(width) * 0.05} ${unref(height) * 0.5 - unref(height) * 0.009},
          ${-unref(width) * 0.05} ${unref(height) * 0.5},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5} ${unref(height) * 0.5}
        `,
        fill: `url(#linear-left-${unref(id)})`,
        class: "title-7-left-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_52), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5} ${unref(height) * 0.5 - unref(height) * 0.009},
          ${unref(width) + unref(width) * 0.05} ${unref(height) * 0.5 - unref(height) * 0.009},
          ${unref(width) + unref(width) * 0.05} ${unref(height) * 0.5},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5} ${unref(height) * 0.5}
        `,
        fill: `url(#linear-right-${unref(id)})`,
        class: "title-7-right-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_53), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.052 + unref(data).titleWidth * 0.5} ${unref(height) * 0.788},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5} ${unref(height) * 0.5},
          ${unref(width) * 0.5 + unref(width) * 0.07 + unref(data).titleWidth * 0.5} ${unref(height) * 0.5},
          ${unref(width) * 0.5 + unref(width) * 0.059 + unref(data).titleWidth * 0.5} ${unref(height) * 0.788}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "1",
        fill: "none",
        class: "title-7-right-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_54), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 + unref(width) * 0.0520 + unref(data).titleWidth * 0.5 + unref(width) * 0.015} ${unref(height) * 0.788},
          ${unref(width) * 0.5 + unref(width) * 0.0625 + unref(data).titleWidth * 0.5 + unref(width) * 0.015} ${unref(height) * 0.5},
          ${unref(width) * 0.5 + unref(width) * 0.0700 + unref(data).titleWidth * 0.5 + unref(width) * 0.015} ${unref(height) * 0.5},
          ${unref(width) * 0.5 + unref(width) * 0.0590 + unref(data).titleWidth * 0.5 + unref(width) * 0.015} ${unref(height) * 0.788}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "1",
        fill: "none",
        class: "title-7-right-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_55), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.052 - unref(data).titleWidth * 0.5} ${unref(height) * 0.788},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5} ${unref(height) * 0.5},
          ${unref(width) * 0.5 - unref(width) * 0.07 - unref(data).titleWidth * 0.5} ${unref(height) * 0.5},
          ${unref(width) * 0.5 - unref(width) * 0.059 - unref(data).titleWidth * 0.5} ${unref(height) * 0.788}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "1",
        fill: "none",
        class: "title-7-right-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_56), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.5 - unref(width) * 0.0520 - unref(data).titleWidth * 0.5 - unref(width) * 0.015} ${unref(height) * 0.788},
          ${unref(width) * 0.5 - unref(width) * 0.0625 - unref(data).titleWidth * 0.5 - unref(width) * 0.015} ${unref(height) * 0.5},
          ${unref(width) * 0.5 - unref(width) * 0.0700 - unref(data).titleWidth * 0.5 - unref(width) * 0.015} ${unref(height) * 0.5},
          ${unref(width) * 0.5 - unref(width) * 0.0590 - unref(data).titleWidth * 0.5 - unref(width) * 0.015} ${unref(height) * 0.788}
        `,
        stroke: unref(data).mergedColor[2],
        "stroke-width": "1",
        fill: "none",
        class: "title-7-right-line-down"
      }, null, 8
      /* PROPS */
      , _hoisted_57)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title7/index.vue";

script.height = 86;
script.name = 'Title7';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
