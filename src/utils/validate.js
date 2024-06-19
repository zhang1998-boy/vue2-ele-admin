
/**
 * @param {string} path
 * @returns {Boolean}
 * 邮箱校验
 */
export function validateEmail (rul, val, cb) {
  // debugger
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 定义邮箱格式的正则表达式
  return re.test(val); // 返回true或false，判断输入的字符串是否为有效的邮箱地址
}
/**
 * @param {string} path
 * @returns {Boolean}
 * 手机号校验
 */
export function validatePhoneNumber (rule, value, callback) {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  return re.test(val);
  // if (!reg.test(value)) {
  //   debugger
  //   callback(new Error('手机号格式不正确'))
  // } else {
  //   debugger
  //   callback()
  // }
}
