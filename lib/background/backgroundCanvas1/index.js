import { ref, onMounted, resolveComponent, openBlock, createBlock } from 'vue';

const defaultOption = {
  fullScreen: {
    enable: false,
    zIndex: -1
  },
  fpsLimit: 120,
  particles: {
    number: {
      value: 80,
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
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
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
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
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
      console.log(props);
      config.value.fullScreen.enable = props.fullScreen;
      config.value.particles.color.value = props.color; // config.value.particles.links.color = props.color
    });
    return (_ctx, _cache) => {
      const _component_Particles = resolveComponent("Particles");

      return openBlock(), createBlock(_component_Particles, {
        id: "backgroundCanvas1",
        class: "background",
        options: config.value
      }, null, 8
      /* PROPS */
      , ["options"]);
    };
  }

};

script.__file = "packages/background/backgroundCanvas1/index.vue";

script.name = 'BackgroundCanvas1'; // eslint-disable-next-line func-names

script.install = function (Vue) {
  Vue.component(script.name, script);
};

export { script as default };
