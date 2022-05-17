/*
 * @Title:
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-05-17 15:47:57
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-17 16:07:26
 */
import { defineProps } from 'vue';
export default function common() {
  const props = defineProps({
    encode: {
      type: Array,
      default: () => {
        return [];
      }
    }
  });

}
