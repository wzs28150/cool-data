/*
 * @Title:
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-05-17 20:40:44
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-19 08:30:31
 */
import { watch, nextTick } from 'vue';
import { debounce } from './index';

export function getDefaultProps() {
  return {
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    datasetIndex: {
      type: [Number, null],
      default: 0
    },
    encode: {
      type: [Object, null],
      default: null
    }
  };
}

export function watchDefaultProps(props, config, itemConfig, index) {
  watch(
    [
      () => props.name,
      () => props.url,
      () => props.datasetIndex,
      () => props.encode
    ],
    (
      [name, url, datasetIndex, encode],
      [oldName, oldUrl, oldDatasetIndex, oldEncode]
    ) => {
      if (name != oldName) {
        nextTick(() => {
          setName(name);
        });
      }

      if (url != oldUrl) {
        nextTick(() => {
          setUrl(url);
        });
      }

      if (datasetIndex != oldDatasetIndex) {
        nextTick(() => {
          setDatasetIndex(datasetIndex);
        });
      }

      if (encode != oldEncode) {
        nextTick(() => {
          setEncode(encode);
        });
      }
    },
    {
      deep: true,
      immediate: true
    }
  );
  /**
   * 设置系列名
   * @param {String} name
   */
  const setName = (name) => {
    if (index.value != null) {
      config.series[index.value].name = name ? name : '';
    } else {
      itemConfig.name = name ? name : '';
    }
  };
  /**
   * 按系列分设置穿透url
   * @param {String} url
   */
  const setUrl = (url) => {
    if (index.value != null) {
      config.series[index.value].url = url ? url : '';
    } else {
      itemConfig.url = url ? url : '';
    }
  };
  /**
   * 设置数据集id
   * @param {Number} datasetIndex
   */
  const setDatasetIndex = (datasetIndex) => {
    if (index.value != null) {
      config.series[index.value].datasetIndex = datasetIndex ? datasetIndex : 0;
    } else {
      itemConfig.datasetIndex = datasetIndex ? datasetIndex : 0;
    }
  };
  /**
   * 设置数据映射
   * @param {x: String, y: String} encode
   */
  const setEncode = (encode) => {
    if (index.value != null) {
      if (encode) {
        config.series[index.value].encode = encode;
      } else {
        delete config.series[index.value].encode;
      }
    } else {
      if (encode) {
        itemConfig.encode = encode;
      } else {
        delete itemConfig.encode;
      }
    }
  };
}
