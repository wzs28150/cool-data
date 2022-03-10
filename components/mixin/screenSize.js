import { debounce } from "../util/index";
export default {
  props: {
    width: {
      type: Number,
      default: 1920
    },
    height: {
      type: Number,
      default: 1080
    },
    isScale: Boolean,
  },
  methods: {
    calculateScale: debounce(300, (that) => {
      // console.log(that);
      that.scaleX = window.innerWidth / that.width;
      that.scaleY = window.innerHeight / that.height;
    })
  },
  mounted() {
    if (this.isScale) {
      const that = this
      this.calculateScale(that);
      window.onresize = function () {
        that.calculateScale(that);
      }
    }
  }
};
