import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode } from 'vue';

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

const _hoisted_3 = /*#__PURE__*/createElementVNode("feOffset", {
  result: "offOut",
  in: "SourceGraphic",
  dx: "0",
  dy: "0"
}, null, -1
/* HOISTED */
);

const _hoisted_4 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  result: "blurOut",
  in: "offOut",
  stdDeviation: "10"
}, null, -1
/* HOISTED */
);

const _hoisted_5 = /*#__PURE__*/createElementVNode("feBlend", {
  in: "SourceGraphic",
  in2: "blurOut",
  mode: "multiply"
}, null, -1
/* HOISTED */
);

const _hoisted_6 = [_hoisted_3, _hoisted_4, _hoisted_5];
const _hoisted_7 = ["id"];

const _hoisted_8 = /*#__PURE__*/createElementVNode("feComponentTransfer", {
  in: "SourceAlpha"
}, [/*#__PURE__*/createElementVNode("feFuncA", {
  type: "table",
  tableValues: "1 0"
})], -1
/* HOISTED */
);

const _hoisted_9 = /*#__PURE__*/createElementVNode("feGaussianBlur", {
  stdDeviation: "20"
}, null, -1
/* HOISTED */
);

const _hoisted_10 = /*#__PURE__*/createElementVNode("feOffset", {
  dx: "0",
  dy: "1",
  result: "offsetblur"
}, null, -1
/* HOISTED */
);

const _hoisted_11 = ["flood-color"];

const _hoisted_12 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "offsetblur",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_13 = /*#__PURE__*/createElementVNode("feComposite", {
  in2: "SourceAlpha",
  operator: "in"
}, null, -1
/* HOISTED */
);

const _hoisted_14 = /*#__PURE__*/createElementVNode("feMerge", null, [/*#__PURE__*/createElementVNode("feMergeNode", {
  in: "SourceGraphic"
}), /*#__PURE__*/createElementVNode("feMergeNode")], -1
/* HOISTED */
);

const _hoisted_15 = {
  style: {
    "transform": "rotateX(75deg)",
    "transform-origin": "center"
  }
};
const _hoisted_16 = ["r", "cx", "cy", "stroke", "fill", "filter"];
const _hoisted_17 = ["r", "cx", "cy", "stroke"];
const _hoisted_18 = ["from", "to"];
const _hoisted_19 = ["r", "cx", "cy", "stroke"];
const _hoisted_20 = ["from", "to"];
const _hoisted_21 = ["r", "cx", "cy", "stroke"];
const _hoisted_22 = ["from", "to"];
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },

  setup(__props) {
    const props = __props;
    const id = uuid();
    ref();
    const data = reactive({
      ref: 'decoration-1',
      filterId: `decoration-1-filterId-${id}`,
      defaultColor: ['#8aaafb', '#ffffff', '#08192d'],
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
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "decoration-1 decoration",
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
      }, _hoisted_6, 8
      /* PROPS */
      , _hoisted_2), createElementVNode("filter", {
        id: `inset-shadow-${unref(id)}`,
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
      }, [_hoisted_8, _hoisted_9, _hoisted_10, createElementVNode("feFlood", {
        "flood-color": unref(data).mergedColor[0],
        "flood-opacity": "0.3",
        result: "color"
      }, null, 8
      /* PROPS */
      , _hoisted_11), _hoisted_12, _hoisted_13, _hoisted_14], 8
      /* PROPS */
      , _hoisted_7)]), createElementVNode("g", _hoisted_15, [createElementVNode("circle", {
        r: unref(width) ? unref(width) * 0.5 - 2 : unref(width) * 0.5,
        cx: unref(width) * 0.5,
        cy: unref(height) * 0.5,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: unref(data).mergedColor[2],
        "fill-opacity": 1,
        filter: `url(#inset-shadow-${unref(id)})`
      }, null, 8
      /* PROPS */
      , _hoisted_16), createElementVNode("circle", {
        r: unref(width) ? unref(width) * 0.3 - 8 : unref(width) * 0.3,
        cx: unref(width) * 0.5,
        cy: unref(height) * 0.5,
        "stroke-dasharray": "15 10",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "8",
        fill: "none"
      }, [createElementVNode("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0,${unref(width) * 0.5},${unref(height) * 0.5}`,
        to: `-360,${unref(width) * 0.5},${unref(height) * 0.5}`,
        begin: "0s",
        dur: "10s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_18)], 8
      /* PROPS */
      , _hoisted_17), createElementVNode("circle", {
        r: unref(width) ? unref(width) * 0.3 - 2 : unref(width) * 0.3,
        cx: unref(width) * 0.5,
        cy: unref(height) * 0.5,
        stroke: unref(data).mergedColor[0],
        "stroke-width": "2",
        fill: "none"
      }, [createElementVNode("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0,${unref(width) * 0.5},${unref(height) * 0.5}`,
        to: `-360,${unref(width) * 0.5},${unref(height) * 0.5}`,
        begin: "0s",
        dur: "10s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_20)], 8
      /* PROPS */
      , _hoisted_19), createElementVNode("circle", {
        r: unref(width) ? unref(width) * 0.2 - 15 : unref(width) * 0.2,
        cx: unref(width) * 0.5,
        cy: unref(height) * 0.5,
        "stroke-dasharray": "6 12",
        stroke: unref(data).mergedColor[0],
        "stroke-width": "15",
        fill: "none"
      }, [createElementVNode("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        from: `0,${unref(width) * 0.5},${unref(height) * 0.5}`,
        to: `360,${unref(width) * 0.5},${unref(height) * 0.5}`,
        begin: "0s",
        dur: "10s",
        repeatCount: "indefinite"
      }, null, 8
      /* PROPS */
      , _hoisted_22)], 8
      /* PROPS */
      , _hoisted_21)])], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/decoration/decoration1/index.vue";

script.width = 300;
script.height = 300;
script.name = 'Decoration1';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
