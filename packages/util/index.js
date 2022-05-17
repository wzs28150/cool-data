export function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10);
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }
}

export function debounce(delay, callback) {
  let lastTime;

  return function () {
    clearTimeout(lastTime);

    const [that, args] = [this, arguments];

    lastTime = setTimeout(() => {
      if (callback) callback.apply(that, args);
    }, delay);
  };
}

export function observerDomResize(dom, callback) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

  const observer = new MutationObserver(callback);

  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  });

  return observer;
}

export function getPointDistance(pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0]);

  const minusY = Math.abs(pointOne[1] - pointTwo[1]);

  return Math.sqrt(minusX * minusX + minusY * minusY);
}

export function uuid(hasHyphen) {
  return (
    hasHyphen
      ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
  ).replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function deepMerge(target, merged) {
  for (var key in merged) {
    if (target[key] && typeof target[key] === 'object') {
      deepMerge(target[key], merged[key]);

      continue;
    }

    if (typeof merged[key] === 'object') {
      target[key] = deepClone(merged[key], true);

      continue;
    }

    target[key] = merged[key];
  }

  return target;
}

export function deepClone(object) {
  var recursion =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!object) return object;
  var parse = JSON.parse,
    stringify = JSON.stringify;
  if (!recursion) return parse(stringify(object));
  var clonedObj = object instanceof Array ? [] : {};

  if (object && typeof object === 'object') {
    for (var key in object) {
      // console.log(object);
      // console.log(key,object.hasOwnProperty.call(key));
      if (Object.getOwnPropertyDescriptor(object, key)) {
        if (object[key] && typeof object[key] === 'object') {
          clonedObj[key] = deepClone(object[key], true);
        } else {
          clonedObj[key] = object[key];
        }
      }
    }
  }

  return clonedObj;
}

export function filterNonNumber(array) {
  return array.filter(function (n) {
    return typeof n === 'number';
  });
}

export function mulAdd(nums) {
  nums = filterNonNumber(nums);
  return nums.reduce(function (all, num) {
    return all + num;
  }, 0);
}

export function getCircleRadianPoint(x, y, radius, radian) {
  return [x + Math.cos(radian) * radius, y + Math.sin(radian) * radius];
}

/**
 * 分组排序算法
 */
export const groupAndSort = (groupFields, sortFields, list) => {
  if (Array.isArray(list) && list.length <= 0) {
    return [];
  }
  let tempList = [];
  list = sortByFields(groupFields, list);
  let tempGroupValue = list[0][groupFields];
  for (let i = 0; i < list.length; i++) {
    if (!list[i]) {
      continue;
    }
    if (list[i][groupFields] != tempGroupValue) {
      tempGroupValue = list[i][groupFields];
    }
    addObjToList(groupFields, sortFields, tempGroupValue, list[i], tempList);
    list.splice(i, 1);
    i--;
  }
  return tempList;
};

const addObjToList = (groupFields, sortFields, tempGroupValue, obj, list) => {
  let tempLength = list.length;
  for (let i = 0; i < list.length; i++) {
    if (
      list[i][groupFields] == tempGroupValue &&
      obj[sortFields] <= list[i][sortFields]
    ) {
      list.splice(i, 0, obj);
      return;
    }
  }
  if (tempLength == list.length) {
    list.push(obj);
  }
};
const sortByFields = (sortFields, list) => {
  return list.sort((a, b) => {
    if (a[sortFields] < b[sortFields]) {
      return -1;
    }
    if (a[sortFields] > b[sortFields]) {
      return 1;
    }
    return 0;
  });
};

export function pathTest(path) {
  return /^(http(s)?:|mailto:|tel:)/.test(path);
}

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
      type: Array,
      default: () => {
        return [];
      }
    }
  };
}
