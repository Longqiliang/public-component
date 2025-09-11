const opt = Object.prototype.toString;
export function isObject(obj) {
  return opt.call(obj) === '[object Object]';
}

export function isBoolean(obj) {
  return opt.call(obj) === '[object Boolean]';
}
export function isString(obj) {
  return opt.call(obj) === '[object String]';
}
export function isNumber(obj) {
  return opt.call(obj) === '[object Number]' && obj === obj; // eslint-disable-line
} 

export function walkTreeNode(
  root,
  cb,
  childrenKey = 'children'
) {
  const isNil = (array) => !(Array.isArray(array) && array.length)

  function _walker(parent, children, level) {
    cb(parent, children, level)
    children.forEach((item) => {
      // if (item[lazyKey]) {
      //   cb(item, null, level + 1)
      //   return
      // }
      cb(item, null, level + 1)
      const children = item[childrenKey]
      if (!isNil(children)) {
        _walker(item, children, level + 1)
      }
    })
  }

  root.forEach((item) => {
    // if (item[lazyKey]) {
    //   cb(item, null, 0)
    //   return
    // }
    cb(item, null, 0)
    const children = item[childrenKey]
    if (!isNil(children)) {
      _walker(item, children, 0)
    }
  })
}