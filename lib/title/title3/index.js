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

const _hoisted_9 = ["x", "y", "fill"];
const _hoisted_10 = ["points", "fill"];
const _hoisted_11 = ["begin"];
const _hoisted_12 = ["points", "fill"];
const _hoisted_13 = ["begin"];
const _hoisted_14 = {
  class: "title-3-center-line"
};
const _hoisted_15 = ["cx", "cy", "stroke"];
const _hoisted_16 = ["points", "stroke"];
const _hoisted_17 = ["cx", "cy", "stroke"];
const _hoisted_18 = ["points", "stroke"];
const _hoisted_19 = ["x", "y", "rx", "width", "fill", "filter"];
const _hoisted_20 = {
  class: "title-3-left-line"
};
const _hoisted_21 = ["cx", "cy", "stroke", "fill"];
const _hoisted_22 = ["points", "fill"];
const _hoisted_23 = ["points", "fill"];
const _hoisted_24 = ["points", "fill"];
const _hoisted_25 = ["points", "stroke"];
const _hoisted_26 = ["points", "filter", "fill"];
const _hoisted_27 = ["begin"];
const _hoisted_28 = ["cy", "stroke"];
const _hoisted_29 = {
  class: "title-3-right-line"
};
const _hoisted_30 = ["cx", "cy", "stroke", "fill"];
const _hoisted_31 = ["points", "fill"];
const _hoisted_32 = ["points", "fill"];
const _hoisted_33 = ["points", "fill"];
const _hoisted_34 = ["points", "stroke"];
const _hoisted_35 = ["points", "fill"];
const _hoisted_36 = ["cx", "cy", "filter", "fill"];
const _hoisted_37 = ["begin"];
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
    const data = reactive({
      ref: 'title-3',
      filterId: `title-3-filterId-${id}`,
      defaultColor: ['#8aaafb', '#1f33a2'],
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
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "title-3 title",
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
      , _hoisted_2), _hoisted_8]), createElementVNode("text", {
        class: "title-3-title",
        x: `${unref(width) / 2}`,
        y: unref(height) * 0.19,
        fill: unref(data).mergedColor[0],
        "font-size": "32",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "letter-spacing": "4",
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[0]};`)
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_9), createElementVNode("g", null, [(openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
        return createElementVNode("polyline", {
          key: `lxx${i}`,
          points: `${unref(width) * 0.258 + unref(width) * 0.007 * i} ${unref(height) * 0.135}, 
          ${unref(width) * 0.262 + unref(width) * 0.007 * i} ${unref(height) * 0.135},
          ${unref(width) * 0.256 + unref(width) * 0.007 * i} ${unref(height) * 0.23}, 
          ${unref(width) * 0.252 + unref(width) * 0.007 * i} ${unref(height) * 0.23}`,
          fill: unref(data).mergedColor[0],
          "fill-opacity": "1"
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "1;0.5;1",
          dur: "2s",
          begin: `${i * 0.1}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_11)], 8
        /* PROPS */
        , _hoisted_10);
      }), 64
      /* STABLE_FRAGMENT */
      )), (openBlock(), createElementBlock(Fragment, null, renderList(10, i => {
        return createElementVNode("polyline", {
          key: `lx${i}`,
          points: `${unref(width) - unref(width) * 0.258 - unref(width) * 0.007 * i} ${unref(height) * 0.135}, 
          ${unref(width) - unref(width) * 0.262 - unref(width) * 0.007 * i} ${unref(height) * 0.135},
          ${unref(width) - unref(width) * 0.256 - unref(width) * 0.007 * i} ${unref(height) * 0.23}, 
          ${unref(width) - unref(width) * 0.252 + -unref(width) * 0.007 * i} ${unref(height) * 0.23}`,
          fill: unref(data).mergedColor[0],
          "fill-opacity": "1"
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "1;0.5;1",
          dur: "2s",
          begin: `${i * 0.1}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_13)], 8
        /* PROPS */
        , _hoisted_12);
      }), 64
      /* STABLE_FRAGMENT */
      ))]), createElementVNode("g", _hoisted_14, [createElementVNode("circle", {
        cx: `${unref(width) * 0.107}`,
        cy: unref(height) * 0.27,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_15), createElementVNode("polyline", {
        points: `${unref(width) * 0.107 + 7} ${unref(height) * 0.27}, 
          ${unref(width) * 0.23} ${unref(height) * 0.27},
          ${unref(width) * 0.25} ${unref(height) * 0.45},
          ${unref(width) * 0.5} ${unref(height) * 0.45}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("circle", {
        cx: `${unref(width) * 0.893}`,
        cy: unref(height) * 0.27,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("polyline", {
        points: `${unref(width) * 0.893 - 7} ${unref(height) * 0.27}, 
          ${unref(width) * 0.893 - 7 - unref(width) * 0.123} ${unref(height) * 0.27},
          ${unref(width) * 0.893 - 7 - unref(width) * 0.143} ${unref(height) * 0.45},
          ${unref(width) * 0.5} ${unref(height) * 0.45}
          `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_18), createElementVNode("rect", {
        x: unref(width) * 0.35,
        y: unref(height) * 0.45 - 5,
        rx: unref(width) * 0.2,
        ry: "10",
        width: unref(width) * 0.3,
        height: "10",
        fill: unref(data).mergedColor[0],
        "fill-opacity": "0.6",
        filter: `url(#f3)`
      }, null, 8
      /* PROPS */
      , _hoisted_19)]), createElementVNode("g", _hoisted_20, [createElementVNode("circle", {
        cx: `${unref(width) * 0.151 + 7}`,
        cy: unref(height) * 0.162,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_21), createElementVNode("polyline", {
        points: `${unref(width) * 0.151 + 7 + unref(width) * 0.014} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.021} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.031} ${unref(height) * 0.11},
            ${unref(width) * 0.151 + 7 + unref(width) * 0.024} ${unref(height) * 0.11}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_22), createElementVNode("polyline", {
        points: `${unref(width) * 0.151 + 7 + unref(width) * 0.014 + unref(width) * 0.015} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.021 + unref(width) * 0.015} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.036 + unref(width) * 0.015} ${unref(height) * 0.17},
            ${unref(width) * 0.151 + 7 + unref(width) * 0.029 + unref(width) * 0.015} ${unref(height) * 0.17}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_23), createElementVNode("polyline", {
        points: `${unref(width) * 0.151 + 7 + unref(width) * 0.013 + unref(width) * 0.015 * 2} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.02 + unref(width) * 0.015 * 2} 0,
            ${unref(width) * 0.151 + 7 + unref(width) * 0.04 + unref(width) * 0.015 * 2} ${unref(height) * 0.22},
            ${unref(width) * 0.151 + 7 + unref(width) * 0.033 + unref(width) * 0.015 * 2} ${unref(height) * 0.22}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_24), createElementVNode("polyline", {
        points: `${unref(width) * 0.151} ${unref(height) * 0.162},
          ${unref(width) * 0.06} ${unref(height) * 0.162},
          ${unref(width) * 0.05} ${unref(height) * 0.08},
          ${9 + unref(width) * 0.015} ${unref(height) * 0.08},
          9 ${unref(height) * 0.22},
          9 ${unref(height) * 0.95 - 7}
          `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_25), (openBlock(), createElementBlock(Fragment, null, renderList(4, i => {
        return createElementVNode("polyline", {
          key: `k${i}`,
          points: `${9 + unref(width) * 0.015 + unref(width) * 0.007 * (i - 1)} ${unref(height) * 0.14},
            ${9 + unref(width) * 0.02 + unref(width) * 0.007 * (i - 1)} ${unref(height) * 0.14},
            ${9 + unref(width) * 0.017 + unref(width) * 0.007 * (i - 1)} ${unref(height) * 0.2},
            ${9 + unref(width) * 0.012 + unref(width) * 0.007 * (i - 1)} ${unref(height) * 0.2}
          `,
          filter: `url(#${unref(data).filterId})`,
          fill: unref(data).mergedColor[0],
          "fill-opacity": "1"
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "1;0.4;1",
          dur: "2s",
          begin: `${i * 0.25}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_27)], 8
        /* PROPS */
        , _hoisted_26);
      }), 64
      /* STABLE_FRAGMENT */
      )), createElementVNode("circle", {
        cx: 9,
        cy: unref(height) * 0.95,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_28)]), createElementVNode("g", _hoisted_29, [createElementVNode("circle", {
        cx: `${unref(width) * 0.849 - 7}`,
        cy: unref(height) * 0.162,
        r: "7",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_30), createElementVNode("polyline", {
        points: `
            ${unref(width) * 0.849 - 7 - unref(width) * 0.014} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.021} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.031} ${unref(height) * 0.11},
            ${unref(width) * 0.849 - 7 - unref(width) * 0.024} ${unref(height) * 0.11}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_31), createElementVNode("polyline", {
        points: `
            ${unref(width) * 0.849 - 7 - unref(width) * 0.014 - unref(width) * 0.015} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.021 - unref(width) * 0.015} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.036 - unref(width) * 0.015} ${unref(height) * 0.17},
            ${unref(width) * 0.849 - 7 - unref(width) * 0.029 - unref(width) * 0.015} ${unref(height) * 0.17}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_32), createElementVNode("polyline", {
        points: `
            ${unref(width) * 0.849 - 7 - unref(width) * 0.013 - unref(width) * 0.015 * 2} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.02 - unref(width) * 0.015 * 2} 0,
            ${unref(width) * 0.849 - 7 - unref(width) * 0.04 - unref(width) * 0.015 * 2} ${unref(height) * 0.22},
            ${unref(width) * 0.849 - 7 - unref(width) * 0.033 - unref(width) * 0.015 * 2} ${unref(height) * 0.22}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_33), createElementVNode("polyline", {
        points: `${unref(width) * 0.849} ${unref(height) * 0.162},
          ${unref(width) * 0.98} ${unref(height) * 0.162},
          ${unref(width) - 3} ${unref(height) * 0.345}
          `,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_34), createElementVNode("polyline", {
        points: `
          ${unref(width) * 0.98} ${unref(height) * 0.24},
          ${unref(width) * 0.99} ${unref(height) * 0.34},
          ${unref(width) * 0.98} ${unref(height) * 0.34}
          `,
        fill: unref(data).mergedColor[0]
      }, null, 8
      /* PROPS */
      , _hoisted_35), (openBlock(), createElementBlock(Fragment, null, renderList(5, i => {
        return createElementVNode("circle", {
          key: `s${i}`,
          cx: `${unref(width) - 3}`,
          cy: `${unref(height) * 0.38 + unref(height) * 0.04 * (i - 1)}`,
          r: "3",
          filter: `url(#${unref(data).filterId})`,
          fill: unref(data).mergedColor[0],
          "fill-opacity": "1"
        }, [createElementVNode("animate", {
          attributeName: "fill-opacity",
          values: "1;0.4;1",
          dur: "2s",
          begin: `${i * 0.20}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_37)], 8
        /* PROPS */
        , _hoisted_36);
      }), 64
      /* STABLE_FRAGMENT */
      ))])], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title3/index.vue";

script.height = 185;
script.name = 'Title3'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
