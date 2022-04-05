import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createCommentVNode, createElementVNode, toDisplayString } from 'vue';

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
const _hoisted_3 = ["stop-color"];
const _hoisted_4 = ["stop-color", "stop-opacity"];
const _hoisted_5 = ["stop-color"];
const _hoisted_6 = ["stop-color"];
const _hoisted_7 = ["id"];
const _hoisted_8 = ["stop-color"];
const _hoisted_9 = ["stop-color"];
const _hoisted_10 = ["id"];

const _hoisted_11 = /*#__PURE__*/createElementVNode("stop", {
  offset: "0%",
  style: {
    "stop-color": "rgb(255,255,0)",
    "stop-opacity": "1"
  }
}, null, -1
/* HOISTED */
);

const _hoisted_12 = /*#__PURE__*/createElementVNode("stop", {
  offset: "100%",
  style: {
    "stop-color": "rgb(255,0,0)",
    "stop-opacity": "1"
  }
}, null, -1
/* HOISTED */
);

const _hoisted_13 = [_hoisted_11, _hoisted_12];

const _hoisted_14 = /*#__PURE__*/createElementVNode("linearGradient", {
  id: "grad1"
}, [/*#__PURE__*/createElementVNode("stop", {
  offset: "0%",
  style: {
    "stop-color": "rgb(255,255,0)",
    "stop-opacity": "1"
  }
}), /*#__PURE__*/createElementVNode("stop", {
  offset: "100%",
  style: {
    "stop-color": "rgb(255,0,0)",
    "stop-opacity": "1"
  }
})], -1
/* HOISTED */
);

const _hoisted_15 = ["points", "fill"];
const _hoisted_16 = ["y", "fill"];
const _hoisted_17 = ["cy", "fill"];
const _hoisted_18 = ["cx", "cy", "fill"];
const _hoisted_19 = ["cx", "cy", "fill"];
const _hoisted_20 = ["points", "fill"];
var script = {
  props: {
    title: {
      type: String
    },
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
      ref: 'module-title-3',
      filterId: `module-title-3-filterId-${id}`,
      defaultColor: ['#fff', '#00794e', '#00ffa6', '#019b6f', '#025146'],
      mergedColor: []
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
        class: "module-title module-title-3",
        ref: unref(data).ref
      }, [createCommentVNode(" <div class=\"module-title-module-main\">\r\n      <div class=\"module-title-3-title\">{{ title }}</div>\r\n    </div>"), (openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("linearGradient", {
        id: `module-title-3-linear-right-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 1
      }, null, 8
      /* PROPS */
      , _hoisted_3), createElementVNode("stop", {
        offset: "30%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 0.4
      }, null, 8
      /* PROPS */
      , _hoisted_4), createElementVNode("stop", {
        offset: "60%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_5), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_6)], 8
      /* PROPS */
      , _hoisted_2), createElementVNode("linearGradient", {
        id: `module-title-3-linear-right2-${unref(id)}`,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, [createElementVNode("stop", {
        offset: "0%",
        "stop-color": unref(data).mergedColor[1]
      }, null, 8
      /* PROPS */
      , _hoisted_8), createElementVNode("stop", {
        offset: "100%",
        "stop-color": unref(data).mergedColor[1],
        "stop-opacity": 0
      }, null, 8
      /* PROPS */
      , _hoisted_9)], 8
      /* PROPS */
      , _hoisted_7), createElementVNode("linearGradient", {
        id: `module-title-3-linear-path-${unref(id)}`
      }, _hoisted_13, 8
      /* PROPS */
      , _hoisted_10), _hoisted_14]), createElementVNode("polyline", {
        points: `
        0 ${unref(height) * 0.3},${unref(width)} ${unref(height) * 0.3},${unref(width)} ${unref(height) * 0.625}, 0 ${unref(height) * 0.625}
        `,
        fill: `url(#module-title-3-linear-right-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_15), createElementVNode("text", {
        class: "border-box-1-title",
        x: 2,
        y: `${unref(height) * 0.4}`,
        fill: unref(data).mergedColor[0],
        "font-size": "20",
        "font-weight": "bold",
        "text-anchor": "left",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        "letter-spacing": "0"
      }, toDisplayString(__props.title), 9
      /* TEXT, PROPS */
      , _hoisted_16), createElementVNode("circle", {
        cx: "4",
        cy: unref(height) - 3,
        r: "3",
        fill: unref(data).mergedColor[2]
      }, null, 8
      /* PROPS */
      , _hoisted_17), createElementVNode("circle", {
        cx: unref(width) * 0.03,
        cy: unref(height) - 3,
        r: "2.5",
        fill: unref(data).mergedColor[3]
      }, null, 8
      /* PROPS */
      , _hoisted_18), createElementVNode("circle", {
        cx: unref(width) * 0.05,
        cy: unref(height) - 3,
        r: "2",
        fill: unref(data).mergedColor[4]
      }, null, 8
      /* PROPS */
      , _hoisted_19), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.07} ${unref(height) - 4},${unref(width)} ${unref(height) - 4},${unref(width)} ${unref(height) - 3}, ${unref(width) * 0.07} ${unref(height) - 3}
        `,
        fill: `url(#module-title-3-linear-right2-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_20)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/moduleTitle/moduleTitle3/index.vue";

script.mock = {
  btnList: []
};
script.name = 'ModuleTitle3';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
