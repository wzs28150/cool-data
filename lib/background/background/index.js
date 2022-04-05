import { openBlock, createElementBlock, normalizeStyle } from 'vue';

var script = {
  props: {
    img: {
      type: String
    }
  },

  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "background",
        style: normalizeStyle(`background-image:url(${props.img})`)
      }, null, 4
      /* STYLE */
      );
    };
  }

};

script.__file = "packages/background/background/index.vue";

// eslint-disable-next-line func-names

script.list = [];
const bgFile = import.meta.globEager('./bg/*.jpg');
Object.keys(bgFile).forEach(item => {
  const bgItem = bgFile[item].default;
  script.list.push(bgItem);
});
script.name = 'Background';

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
