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

const _hoisted_2 = /*#__PURE__*/createStaticVNode("<path fill=\"#fff\" d=\"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\r\n  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z\"><animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\"></animateTransform></path><path fill=\"#fff\" d=\"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\r\n  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z\"><animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"1s\" from=\"0 50 50\" to=\"-360 50 50\" repeatCount=\"indefinite\"></animateTransform></path><path fill=\"#fff\" d=\"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\r\n  L82,35.7z\"><animateTransform attributeName=\"transform\" attributeType=\"XML\" type=\"rotate\" dur=\"2s\" from=\"0 50 50\" to=\"360 50 50\" repeatCount=\"indefinite\"></animateTransform></path>", 3);

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
      ref: 'loading-2',
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
        class: "loading-2 data-loading",
        ref: unref(data).ref
      }, [(openBlock(), createElementBlock("svg", {
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        "enable-background": "new 0 0 100 100",
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

script.__file = "packages/loading/loading2/index.vue";

/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-05 17:26:47
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-05 17:48:01
 */
script.name = 'Loading2'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
