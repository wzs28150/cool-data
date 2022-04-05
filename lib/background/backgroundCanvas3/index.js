import { ref, onMounted, resolveComponent, openBlock, createBlock } from 'vue';

/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-05 19:34:45
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-05 20:15:16
 */
const defaultOption = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 6
      }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 50,
      random: false,
      anim: {
        enable: true,
        speed: 10,
        size_min: 40,
        sync: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

var script = {
  props: {
    fullScreen: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#ffffff"
    }
  },

  setup(__props) {
    const props = __props;
    const config = ref(defaultOption);
    onMounted(() => {
      config.value.fullScreen.enable = props.fullScreen;
      config.value.particles.color.value = props.color;
    });
    return (_ctx, _cache) => {
      const _component_Particles = resolveComponent("Particles");

      return openBlock(), createBlock(_component_Particles, {
        id: "backgroundCanvas3",
        class: "background",
        options: config.value
      }, null, 8
      /* PROPS */
      , ["options"]);
    };
  }

};

script.__file = "packages/background/backgroundCanvas3/index.vue";

script.name = 'BackgroundCanvas3'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
