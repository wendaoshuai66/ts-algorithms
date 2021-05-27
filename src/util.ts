
const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object Object]";
};
/**
 * @desc 对比两个值是否相等
 * @param string | number | object;
 */
export function isEqual<T = any>(v1?: T, v2?: T) {
  if (isObject(v1) && isObject(v2)) {
    return JSON.stringify(v1) === JSON.stringify(v2);
  }
  if (v1 === undefined || v2 === undefined) {
    return v1 === undefined && v2 === undefined;
  }
  return v1.toString() === v1.toString();
}
