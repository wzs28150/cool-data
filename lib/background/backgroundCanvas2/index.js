import { ref, onMounted, resolveComponent, openBlock, createBlock } from 'vue';

/*
 * @Title: 
 * @Descripttion: 
 * @version: 
 * @Author: wzs
 * @Date: 2022-04-05 19:34:45
 * @LastEditors: wzs
 * @LastEditTime: 2022-04-05 19:34:45
 */
const defaultOption = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'bubble'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
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
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
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
  retina_detect: false
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
        id: "backgroundCanvas2",
        class: "background",
        options: config.value
      }, null, 8
      /* PROPS */
      , ["options"]);
    };
  }

};

script.__file = "packages/background/backgroundCanvas2/index.vue";

script.name = 'BackgroundCanvas2'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
