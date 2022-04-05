import { ref, getCurrentInstance, onMounted, onBeforeUnmount, reactive, openBlock, createElementBlock, unref, createElementVNode, renderSlot, createStaticVNode } from 'vue';

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

const _hoisted_2 = /*#__PURE__*/createStaticVNode("<rect x=\"38\" y=\"40\" width=\"4\" height=\"10\" fill=\"#fff\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"translate\" values=\"0 0; 0 20; 0 0\" begin=\"0\" dur=\"0.6s\" repeatCount=\"indefinite\"></animateTransform></rect><rect x=\"48\" y=\"40\" width=\"4\" height=\"10\" fill=\"#fff\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"translate\" values=\"0 0; 0 20; 0 0\" begin=\"0.2s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animateTransform></rect><rect x=\"58\" y=\"40\" width=\"4\" height=\"10\" fill=\"#fff\"><animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"translate\" values=\"0 0; 0 20; 0 0\" begin=\"0.4s\" dur=\"0.6s\" repeatCount=\"indefinite\"></animateTransform></rect>", 3);

const _hoisted_5 = [_hoisted_2];
var script = {
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },

  setup(__props) {
    const props = __props;
    const text = ref();
    const data = reactive({
      ref: 'loading-3',
      defaultColor: ['#8aaafb', '#8aaafb'],
      mergedColor: [],
      textHeight: 0
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
      data.textHeight = text.value.offsetHeight;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "loading-3 data-loading",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        "enable-background": "new 0 0 0 0",
        "xml:space": "preserve",
        width: unref(width),
        height: unref(height) ? unref(height) - unref(data).textHeight : 0
      }, _hoisted_5, 8
      /* PROPS */
      , _hoisted_1)), createElementVNode("div", {
        class: "loading-text",
        ref_key: "text",
        ref: text
      }, [renderSlot(_ctx.$slots, "default")], 512
      /* NEED_PATCH */
      )], 512
      /* NEED_PATCH */
      );
    };
  }

};

script.__file = "packages/loading/loading3/index.vue";

/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-05 17:26:47
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-05 17:50:25
 */
script.name = 'Loading3'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
