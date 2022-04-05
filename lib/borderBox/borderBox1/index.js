import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, Fragment, renderList, normalizeClass, renderSlot } from 'vue';

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
const _hoisted_2 = ["fill", "points"];
const _hoisted_3 = ["fill"];
const _hoisted_4 = ["values"];
const _hoisted_5 = ["fill"];
const _hoisted_6 = ["values"];
const _hoisted_7 = ["fill"];
const _hoisted_8 = ["values"];
const _hoisted_9 = {
  class: "border-box-content"
};
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    }
  },

  setup(__props) {
    const props = __props;
    const data = reactive({
      ref: 'border-box-1',
      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
      defaultColor: ['#4fd2dd', '#235fa7'],
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
        class: "border-box-1",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        class: "border",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `10, 27 10, ${unref(height) - 27} 13, ${unref(height) - 24} 13, ${unref(height) - 21} 24, ${unref(height) - 11}
        38, ${unref(height) - 11} 41, ${unref(height) - 8} 73, ${unref(height) - 8} 75, ${unref(height) - 10} 81, ${unref(height) - 10}
        85, ${unref(height) - 6} ${unref(width) - 85}, ${unref(height) - 6} ${unref(width) - 81}, ${unref(height) - 10} ${unref(width) - 75}, ${unref(height) - 10}
        ${unref(width) - 73}, ${unref(height) - 8} ${unref(width) - 41}, ${unref(height) - 8} ${unref(width) - 38}, ${unref(height) - 11}
        ${unref(width) - 24}, ${unref(height) - 11} ${unref(width) - 13}, ${unref(height) - 21} ${unref(width) - 13}, ${unref(height) - 24}
        ${unref(width) - 10}, ${unref(height) - 27} ${unref(width) - 10}, 27 ${unref(width) - 13}, 25 ${unref(width) - 13}, 21
        ${unref(width) - 24}, 11 ${unref(width) - 38}, 11 ${unref(width) - 41}, 8 ${unref(width) - 73}, 8 ${unref(width) - 75}, 10
        ${unref(width) - 81}, 10 ${unref(width) - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
      }, null, 8
      /* PROPS */
      , _hoisted_2)], 8
      /* PROPS */
      , _hoisted_1)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data).border, item => {
        return openBlock(), createElementBlock("svg", {
          width: "150px",
          height: "150px",
          key: item,
          class: normalizeClass(`${item} border`)
        }, [createElementVNode("polygon", {
          fill: unref(data).mergedColor[0],
          points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
        }, [createElementVNode("animate", {
          attributeName: "fill",
          values: `${unref(data).mergedColor[0]};${unref(data).mergedColor[1]};${unref(data).mergedColor[0]}`,
          dur: "0.5s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_4)], 8
        /* PROPS */
        , _hoisted_3), createElementVNode("polygon", {
          fill: unref(data).mergedColor[1],
          points: "27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
        }, [createElementVNode("animate", {
          attributeName: "fill",
          values: `${unref(data).mergedColor[1]};${unref(data).mergedColor[0]};${unref(data).mergedColor[1]}`,
          dur: "0.5s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_6)], 8
        /* PROPS */
        , _hoisted_5), createElementVNode("polygon", {
          fill: unref(data).mergedColor[0],
          points: "9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
        }, [createElementVNode("animate", {
          attributeName: "fill",
          values: `${unref(data).mergedColor[0]};${unref(data).mergedColor[1]};transparent`,
          dur: "1s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8
        /* PROPS */
        , _hoisted_8)], 8
        /* PROPS */
        , _hoisted_7)], 2
        /* CLASS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), createElementVNode("div", _hoisted_9, [renderSlot(_ctx.$slots, "default")])], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox1/index.vue";

script.name = 'BorderBox1';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
