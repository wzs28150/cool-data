import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, normalizeStyle, toDisplayString, Fragment, renderList, renderSlot } from 'vue';

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

const _hoisted_8 = ["x", "y", "fill"];
const _hoisted_9 = ["points", "stroke"];
const _hoisted_10 = ["points", "filter", "fill"];
const _hoisted_11 = ["begin"];
const _hoisted_12 = ["points", "stroke"];
const _hoisted_13 = ["points", "filter", "fill"];
const _hoisted_14 = ["begin"];
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
      ref: 'title-2',
      filterId: `title-2-filterId-${id}`,
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
      data.titleWidth = text.value.clientWidth * 2;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "title-2 title",
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
      , _hoisted_2)]), createElementVNode("text", {
        class: "border-box-2-title",
        x: `${unref(width) / 2}`,
        y: `${unref(height) * 0.46}`,
        fill: unref(data).mergedColor[0],
        "font-size": "32",
        "font-family": "shishang",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        style: normalizeStyle(`text-shadow: 0 0 5px ${unref(data).mergedColor[0]};`),
        ref_key: "text",
        ref: text,
        "letter-spacing": "4"
      }, toDisplayString(__props.title), 13
      /* TEXT, STYLE, PROPS */
      , _hoisted_8), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5} ${unref(height) * 0.15}, 
        ${unref(width) * 0.5 - unref(width) * 0.198 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.15}, 
        ${unref(width) * 0.5 - unref(width) * 0.204 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.285}, 
        ${unref(width) * 0.5 - unref(width) * 0.204 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.48},
        ${unref(width) * 0.5 - unref(width) * 0.185 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.82},
        ${unref(width) * 0.5 - unref(width) * 0.119 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.82},
        ${unref(width) * 0.5 - unref(width) * 0.114 + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.711},
        ${unref(width) * 0.5} ${unref(height) * 0.711}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_9), (openBlock(), createElementBlock(Fragment, null, renderList(3, i => {
        return createElementVNode("polyline", {
          key: `k${i}`,
          points: `
         ${unref(width) * 0.5 - unref(width) * 0.177 + unref(width) * 0.02 * (i - 1) + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.72}, 
         ${unref(width) * 0.5 - unref(width) * 0.161 + unref(width) * 0.02 * (i - 1) + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.72}, 
         ${unref(width) * 0.5 - unref(width) * 0.163 + unref(width) * 0.02 * (i - 1) + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.76},
         ${unref(width) * 0.5 - unref(width) * 0.179 + unref(width) * 0.02 * (i - 1) + unref(width) * 0.05 - unref(data).titleWidth * 0.5} ${unref(height) * 0.76}
        `,
          filter: `url(#${unref(data).filterId})`,
          fill: unref(data).mergedColor[0],
          opacity: "1"
        }, [createElementVNode("animate", {
          attributeName: "opacity",
          values: "1;0.7;1",
          dur: "2s",
          begin: `${i * 0.33}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_11)], 8
        /* PROPS */
        , _hoisted_10);
      }), 64
      /* STABLE_FRAGMENT */
      )), createElementVNode("polyline", {
        points: `
        ${unref(width) * 0.5} ${unref(height) * 0.15}, 
        ${unref(width) * 0.5 + unref(width) * 0.198 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.15}, 
        ${unref(width) * 0.5 + unref(width) * 0.204 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.285}, 
        ${unref(width) * 0.5 + unref(width) * 0.204 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.48},
        ${unref(width) * 0.5 + unref(width) * 0.185 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.82},
        ${unref(width) * 0.5 + unref(width) * 0.119 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.82},
        ${unref(width) * 0.5 + unref(width) * 0.114 - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.711},  
        ${unref(width) * 0.5} ${unref(height) * 0.711}`,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, null, 8
      /* PROPS */
      , _hoisted_12), (openBlock(), createElementBlock(Fragment, null, renderList(3, i => {
        return createElementVNode("polyline", {
          key: i,
          points: `${unref(width) * 0.5 + unref(width) * 0.177 - unref(width) * 0.02 * (i - 1) - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.72}, 
        ${unref(width) * 0.5 + unref(width) * 0.161 - unref(width) * 0.02 * (i - 1) - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.72}, 
        ${unref(width) * 0.5 + unref(width) * 0.163 - unref(width) * 0.02 * (i - 1) - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.76},
        ${unref(width) * 0.5 + unref(width) * 0.179 - unref(width) * 0.02 * (i - 1) - unref(width) * 0.05 + unref(data).titleWidth * 0.5} ${unref(height) * 0.76}`,
          filter: `url(#${unref(data).filterId})`,
          fill: unref(data).mergedColor[0],
          opacity: "0.7"
        }, [createElementVNode("animate", {
          attributeName: "opacity",
          values: "1;0.7;1",
          dur: "2s",
          begin: `${i * 0.33}s`,
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_14)], 8
        /* PROPS */
        , _hoisted_13);
      }), 64
      /* STABLE_FRAGMENT */
      ))], 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", {
        class: "title-2-left",
        style: normalizeStyle(`width: ${unref(width) * 0.5 - unref(width) * 0.204 + unref(width) * 0.05 - unref(data).titleWidth * 0.5}px; height: 100%;`)
      }, [renderSlot(_ctx.$slots, "left")], 4
      /* STYLE */
      ), createElementVNode("div", {
        class: "title-2-right",
        style: normalizeStyle(`width: ${unref(width) * 0.5 - unref(width) * 0.204 - unref(width) * 0.05 + unref(data).titleWidth * 0.5}px; height: 100%;`)
      }, [renderSlot(_ctx.$slots, "right")], 4
      /* STYLE */
      )], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/title/title2/index.vue";

script.height = 104;
script.name = 'Title2';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
