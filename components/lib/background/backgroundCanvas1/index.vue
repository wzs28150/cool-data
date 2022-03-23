<template>
  <Particles id="backgroundCanvas1" class="background" :options="config" />
</template>

<script>
import Vue from "vue";
import Particles from "particles.vue";
Vue.use(Particles);
export default {
  name: 'backgroundCanvas1',
  data() {
    return {
      config: {
        fullScreen: {
          enable: false,
          zIndex: -1
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 50
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }
    }

  },
  props:{
    fullScreen: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#ffffff"
    }
  },
  mounted() {
    this.config.fullScreen = this.fullScreen
    this.config.particles.color = this.color
    this.config.particles.links.color = this.color
  }
}
</script>