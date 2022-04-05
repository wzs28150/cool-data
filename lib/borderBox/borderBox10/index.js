import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, normalizeStyle, createElementVNode, Fragment, renderList, normalizeClass, renderSlot } from 'vue';

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
const _hoisted_4 = {
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
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },

  setup(__props) {
    const props = __props;
    const data = reactive({
      ref: 'border-box-10',
      border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
      defaultColor: ['#1d48c4', '#d3e1f8'],
      mergedColor: []
    }); // 处理尺寸

    const {
      width,
      height
    } = autoResize(data.ref);

    const mergeColor = () => {
      data.mergedColor = deepMerge(deepClone(data.defaultColor, true), props.color || []);
    };

    onMounted(() => {
      mergeColor();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "border-box-10",
        ref: unref(data).ref,
        style: normalizeStyle(`box-shadow: inset 0 0 25px 3px ${unref(data).mergedColor[0]}`)
      }, [(openBlock(), createElementBlock("svg", {
        class: "border-svg-container",
        width: unref(width),
        height: unref(height)
      }, [createElementVNode("polygon", {
        fill: props.backgroundColor,
        points: `
          4, 0 ${unref(width) - 4}, 0 ${unref(width)}, 4 ${unref(width)}, ${unref(height) - 4} ${unref(width) - 4}, ${unref(height)}
          4, ${unref(height)} 0, ${unref(height) - 4} 0, 4
        `
      }, null, 8
      /* PROPS */
      , _hoisted_2)], 8
      /* PROPS */
      , _hoisted_1)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(data).border, item => {
        return openBlock(), createElementBlock("svg", {
          width: "150px",
          height: "150px",
          key: item,
          class: normalizeClass(`${item} border-svg-container`)
        }, [createElementVNode("polygon", {
          fill: unref(data).mergedColor[1],
          points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
        }, null, 8
        /* PROPS */
        , _hoisted_3)], 2
        /* CLASS */
        );
      }), 128
      /* KEYED_FRAGMENT */
      )), createElementVNode("div", _hoisted_4, [renderSlot(_ctx.$slots, "default")])], 4
      /* STYLE */
      );
    };
  }

};

script.__file = "packages/borderBox/borderBox10/index.vue";

script.name = 'BorderBox10';

script.install = app => {
  app.component(script.name, script);
};

export { script as default };
