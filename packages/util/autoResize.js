import {
  ref,
  getCurrentInstance,
  onMounted,
  onBeforeUnmount,
} from "vue";

import { debounce } from "./index";

export default function autoResize(refName, callback) {
  const width = ref(0);
  const height = ref(0);
  const that = getCurrentInstance();

  const initWH = () => {
    const dom = that.refs[refName];
    width.value = dom ? dom.clientWidth : 0;
    height.value = dom ? dom.clientHeight : 0;
    if (!dom) {
      console.warn(
        "cool-data: Failed to get dom node, component rendering may be abnormal!"
      );
    } else if (!width.value || !height.value) {
      console.warn(
        "cool-data: Component width or height is 0px, rendering abnormality may occur!"
      );
    }
    if(callback){
      callback(width.value, height.value)
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
    height,
  };
}
