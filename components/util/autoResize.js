import { reactive, nextTick, ref,getCurrentInstance  } from "vue";
import { debounce, observerDomResize } from "./index";
export default function () {
  const data = reactive({
    dom: "",
    width: 0,
    height: 0,
    debounceInitWHFun: "",
    domObserver: "",
  });

  const instance = getCurrentInstance()

  const autoResizeMixinInit = async (refName) => {
    
    await initWH(false, refName);
    getDebounceInitWHFun();
    bindDomResizeCallback();
    return new Promise((resolve)=>{
      resolve({
        width: data.width,
        height: data.height
      })
    })
  };
  const initWH = (resize = true, refName='') => {
    return new Promise((resolve) => {
      nextTick(() => {
        // console.log(instance.refs[refName]);
        const dom = (data.dom = instance.refs[refName]);
        // console.log(dom);
        data.width = dom ? dom.clientWidth : 0;
        data.height = dom ? dom.clientHeight : 0;
        if (!dom) {
          console.warn(
            "cool-data: Failed to get dom node, component rendering may be abnormal!"
          );
        } else if (!data.width || !data.height) {
          console.warn(
            "cool-data: Component width or height is 0px, rendering abnormality may occur!"
          );
        }
        resolve();
      });
    });
  };
  const getDebounceInitWHFun = () => {
    let { initWH } = data;
    data.debounceInitWHFun = debounce(100, initWH);
  };

  const bindDomResizeCallback = () => {
    const { dom, debounceInitWHFun } = data;
    data.domObserver = observerDomResize(dom, debounceInitWHFun);
    window.addEventListener("resize", debounceInitWHFun);
  };

  const unbindDomResizeCallback = () => {
    let { domObserver, debounceInitWHFun } = data;
    if (!domObserver) return;

    domObserver.disconnect();
    domObserver.takeRecords();
    domObserver = null;

    window.removeEventListener("resize", debounceInitWHFun);
  };

  return {
    width: data.width,
    height: data.height,
    autoResizeMixinInit: autoResizeMixinInit,
    unbindDomResizeCallback,
  };
}
