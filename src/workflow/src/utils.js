
import { reduce } from 'lodash-es';

export function isNil(val) {
  return val === null || val === undefined;
}

export function isDef(val) {
  return val !== undefined && val !== null;
}

export function getOption(options, value, valueKey) {
  if (!value || !options) {
    return;
  }
  let option;
  const isObject =
    Object.prototype.toString.call(value).toLowerCase() === '[object object]';

  for (let index = 0; index < options.length; index++) {
    const column = options[index];
    const isEqual = isObject
      ? getValueByPath(column, valueKey) === getValueByPath(value, valueKey)
      : column[valueKey] === value;
    if (isEqual) {
      option = column;
      break;
    }
  }
  if (option) {
    return option;
  }
}

export function getPropData(data = {}, props = {}, prop) {
  const config = props[prop];
  // console.log(data,config,'adada')
  if (typeof config === 'function') {
    return config(data);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    const dataProp = data[prop];
    return dataProp === 'undefined' ? '' : dataProp;
  }
}


/**
 * Add class to element
 * @param {HTMLElement} el
 * @param {string} cls
 */
export function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/**
 * Remove class from element
 * @param {HTMLElement} el
 * @param {string} cls
 */
export function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export const concatObjectValues = (obj, fn) => {
  return reduce(
    obj,
    (result, value, key) => {
      let data = value;
      if (fn) {
        data = fn && fn(value, key);
      }
      return result.concat(data);
    },
    []
  );
};
