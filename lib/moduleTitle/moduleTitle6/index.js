import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, toDisplayString } from 'vue';

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
  stdDeviation: "8"
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
const _hoisted_7 = ["fill"];
const _hoisted_8 = ["x", "fill"];
const _hoisted_9 = ["x", "y", "fill"];
var script = {
  props: {
    title: {
      type: String
    },
    color: {
      type: Array,
      default: () => []
    },
    en: {
      type: String
    }
  },

  setup(__props) {
    const props = __props;
    const id = uuid();
    const text = ref();
    const data = reactive({
      ref: 'module-title-6',
      filterId: `module-title-6-filterId-${id}`,
      defaultColor: ['#fff', '#2ccbf8', '#ff8400'],
      titleWidth: 0,
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
        class: "module-title module-title-6",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("defs", null, [createElementVNode("filter", {
        id: `module-title-6-light-${unref(id)}`,
        x: "-120%",
        y: "-120%",
        width: "400%",
        height: "400%"
      }, _hoisted_6, 8
      /* PROPS */
      , _hoisted_2)]), createElementVNode("rect", {
        x: 0,
        y: 0,
        width: 6,
        height: 22,
        rx: "3",
        ry: "3",
        fill: unref(data).mergedColor[1]
      }, null, 8
      /* PROPS */
      , _hoisted_7), createElementVNode("text", {
        class: "border-box-1-title",
        x: `${unref(width) * 0.05}`,
        y: 13,
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
      , _hoisted_8), createElementVNode("text", {
        class: "border-box-1-title",
        x: `${unref(width) * 0.05}`,
        y: `${unref(height) * 0.7}`,
        fill: unref(data).mergedColor[0],
        "fill-opacity": "0.5",
        "font-size": "16",
        "text-anchor": "left",
        "dominant-baseline": "middle",
        ref_key: "text",
        ref: text,
        "letter-spacing": "0"
      }, toDisplayString(__props.en), 9
      /* TEXT, PROPS */
      , _hoisted_9)], 8
      /* PROPS */
      , _hoisted_1))], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/moduleTitle/moduleTitle6/index.vue";

script.mock = {
  btnList: []
};
script.name = 'ModuleTitle6';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
