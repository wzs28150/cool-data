import { onMounted, ref, defineProps } from "vue";
import { debounce } from "./index";
// import moduleName from 'vue';
export default function screenSize() {
  const props = defineProps({
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
    isScale: Boolean,
  });

  const scaleX = ref(1);
  const scaleY = ref(1);

  const calculateScale = debounce(300, () => {
    // console.log(that);
    scaleX.value = window.innerWidth / props.width;
    scaleY.value = window.innerHeight / props.height;
  });

  onMounted(() => {
    if (props.isScale) {
      calculateScale();
      window.onresize = function () {
        that.calculateScale(that);
      };
    }
  });

  return {
    scaleX,
    scaleY,
  };
}
