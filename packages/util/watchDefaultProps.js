/*
 * @Title:
 * @Descripttion:
 * @version:
 * @Author: wzs
 * @Date: 2022-05-17 20:40:44
 * @LastEditors: wzs
 * @LastEditTime: 2022-05-17 21:58:09
 */
import { watch, getCurrentInstance, nextTick } from 'vue';
import { debounce } from './index';
// import moduleName from 'vue';
export default function watchDefaultProps() {
  const that = getCurrentInstance();
  const props = that.props;
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
      immediate: true
    }
  );
  /**
   * 设置系列名
   * @param {String} name
   */
  const setName = (name) => {
    const { index, config, itemConfig } = that.setupState;
    if (index != null) {
      config.series[index].name = name ? name : '';
    } else {
      itemConfig.name = name ? name : '';
    }
  };
  /**
   * 按系列分设置穿透url
   * @param {String} url
   */
  const setUrl = (url) => {
    const { index, config, itemConfig } = that.setupState;
    if (index != null) {
      config.series[index].url = url ? url : '';
    } else {
      itemConfig.url = url ? url : '';
    }
  };
  /**
   * 设置数据集id
   * @param {Number} datasetIndex
   */
  const setDatasetIndex = (datasetIndex) => {
    const { index, config, itemConfig } = that.setupState;
    if (index != null) {
      config.series[index].datasetIndex = datasetIndex ? datasetIndex : 0;
    } else {
      itemConfig.datasetIndex = datasetIndex ? datasetIndex : 0;
    }
  };
  /**
   * 设置数据映射
   * @param {x: String, y: String} encode
   */
  const setEncode = (encode) => {
    const { index, config, itemConfig } = that.setupState;
    if (index != null) {
      config.series[index].encode = encode ? encode : null;
    } else {
      itemConfig.encode = encode ? encode : null;
    }
  };
}
