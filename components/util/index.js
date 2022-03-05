export function randomExtend (minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10)
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
  }
}

export function debounce (delay, callback) {
  let lastTime

  return function () {
    clearTimeout(lastTime)

    const [that, args] = [this, arguments]

    lastTime = setTimeout(() => {
      callback.apply(that, args)
    }, delay)
  }
}

export function observerDomResize (dom, callback) {
  const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

  const observer = new MutationObserver(callback)

  observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })

  return observer
}

export function getPointDistance (pointOne, pointTwo) {
  const minusX = Math.abs(pointOne[0] - pointTwo[0])

  const minusY = Math.abs(pointOne[1] - pointTwo[1])

  return Math.sqrt(minusX * minusX + minusY * minusY)
}

export function uuid (hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
		const r = Math.random() * 16 | 0
		const v = c == 'x' ? r : (r & 0x3 | 0x8)
		return v.toString(16)
  })
}


export function deepMerge (target, merged) {
  for (var key in merged) {
    if (target[key] && typeof target[key] === 'object') {
      deepMerge(target[key], merged[key])

      continue
    }

    if (typeof merged[key] === 'object') {
      target[key] = deepClone(merged[key], true)

      continue
    }

    target[key] = merged[key]
  }

  return target
}

export function deepClone(object) {
  var recursion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!object) return object;
  var parse = JSON.parse,
      stringify = JSON.stringify;
  if (!recursion) return parse(stringify(object));
  var clonedObj = object instanceof Array ? [] : {};

  if (object && typeof(object) === 'object') {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] && typeof(object[key]) === 'object') {
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


export function getPolylineLength(points) {
  var lineSegments = new Array(points.length - 1).fill(0).map(function (foo, i) {
    return [points[i], points[i + 1]];
  });
  var lengths = lineSegments.map(function (item) {
    return getTwoPointDistance.apply(void 0, (0, _toConsumableArray2["default"])(item));
  });
  return mulAdd(lengths);
}

export function getCircleRadianPoint(x, y, radius, radian) {
  return [x + cos(radian) * radius, y + sin(radian) * radius];
}
