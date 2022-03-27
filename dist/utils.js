/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_"] = factory();
	else
		root["_"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n// 数组分块：将数组拆分成多个 size 长度的区块\r\nfunction chunk(arr, size = 1) {\r\n  if(arr.length === 0) {\r\n    return []\r\n  }\r\n  let result = []\r\n  let temp = []\r\n  arr.forEach(item => {\r\n    if(temp.length === 0) {\r\n      result.push(temp)\r\n    }\r\n    temp.push(item)\r\n    if(temp.length === size) {\r\n      temp = []\r\n    }\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n// 数组合并\r\nfunction concat(arr, ...args) {\r\n  let result = [...arr]\r\n  args.forEach(item => {\r\n    if(Array.isArray(item)) {\r\n      result.push(...item)\r\n    }else {\r\n      result.push(item)\r\n    }\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n// 获取arr1数组中有的元素，arr2数组里面没有的元素\r\nfunction difference(arr1, arr2 = []) {\r\n  if(arr1.length === 0) {\r\n    return []\r\n  }\r\n  if(arr2.length === 0) {\r\n    return [...arr1]\r\n  }\r\n  return arr1.filter(item => !arr2.includes(item))\r\n}\n\n//# sourceURL=webpack://_/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop)\n/* harmony export */ });\n// 得到当前数组过滤掉左边count个后剩余元素组成的数组\r\nfunction drop(arr, count = 1) {\r\n  return arr.filter((item, index) => {\r\n    return index >= count\r\n  })\r\n}\n\n//# sourceURL=webpack://_/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/dropRight.js":
/*!********************************!*\
  !*** ./src/array/dropRight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n// 得到当前数组过滤掉右边count个后剩余元素组成的数组\r\nfunction dropRight(arr, count = 1) {\r\n  return arr.filter((item, index) => {\r\n    return index < arr.length - count\r\n  })    \r\n}\n\n//# sourceURL=webpack://_/./src/array/dropRight.js?");

/***/ }),

/***/ "./src/array/every.js":
/*!****************************!*\
  !*** ./src/array/every.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every)\n/* harmony export */ });\nfunction every(arr, callback) {\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i)\r\n    if(!res) {\r\n      return false\r\n    }\r\n  }\r\n  return true\r\n}\n\n//# sourceURL=webpack://_/./src/array/every.js?");

/***/ }),

/***/ "./src/array/filter.js":
/*!*****************************!*\
  !*** ./src/array/filter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filter\": () => (/* binding */ filter)\n/* harmony export */ });\nfunction filter(arr, callback) {\r\n  let result = []\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i)\r\n    if(res) {\r\n      result.push(arr[i])\r\n    }\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/filter.js?");

/***/ }),

/***/ "./src/array/find.js":
/*!***************************!*\
  !*** ./src/array/find.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find)\n/* harmony export */ });\nfunction find(arr, callback) {\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i)\r\n    if(res) {\r\n      return arr[i]\r\n    }\r\n  }\r\n  return undefined\r\n}\n\n//# sourceURL=webpack://_/./src/array/find.js?");

/***/ }),

/***/ "./src/array/findIndex.js":
/*!********************************!*\
  !*** ./src/array/findIndex.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex)\n/* harmony export */ });\nfunction findIndex(arr, callback) {\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i)\r\n    if(res) {\r\n      return i\r\n    }\r\n  }\r\n  return -1\r\n}\n\n//# sourceURL=webpack://_/./src/array/findIndex.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2),\n/* harmony export */   \"flatten3\": () => (/* binding */ flatten3)\n/* harmony export */ });\n// 数组深度扁平化\r\n// 递归 + concat\r\nfunction flatten1(arr) {\r\n  let result = []\r\n  // 遍历数组\r\n  arr.forEach(item => {\r\n    if(Array.isArray(item)) {\r\n      // 递归调用\r\n      result = result.concat(flatten1(item))\r\n    }else {\r\n      result = result.concat(item)\r\n    }\r\n  })\r\n  return result\r\n}\r\n\r\n// ... + some + concat\r\nfunction flatten2(arr) {\r\n  // arr: [1, 2, [3, 4], [5, 6, [7, 8]]]\r\n  // [].concat(1, 2, [3, 4], [5, 6, [7, 8]])\r\n  // result初始值：[1, 2, 3, 4, 5, 6, [7, 8]]\r\n  let result = [].concat(...arr)\r\n  while(result.some(item => Array.isArray(item))) {\r\n    result = [].concat(...result)\r\n  }\r\n  return result\r\n}\r\n\r\n// 递归 + some + concat\r\nfunction flatten3(arr) {\r\n  return arr.reduce((result, item) => {\r\n    if(Array.isArray(item)) {\r\n      return result.concat(flatten3(item))\r\n    }else {\r\n      return result.concat(item)\r\n    }\r\n  }, [])\r\n}\n\n//# sourceURL=webpack://_/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/map.js":
/*!**************************!*\
  !*** ./src/array/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map)\n/* harmony export */ });\nfunction map(arr, callback) {\r\n  // 声明一个空的数组\r\n  let result = []\r\n  // 变量数组\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let value = arr[i]\r\n    result.push(callback(value, i, arr))\r\n  }\r\n  // 返回结果\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/map.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull)\n/* harmony export */ });\n// 删除数组中的元素，会改变原数组，返回被删除的元素\r\nfunction pull(arr, ...args) {\r\n  // 保存删除的元素\r\n  let result = []\r\n  for(let i = 0; i < arr.length; i++) {\r\n    if(args.includes(arr[i])) {\r\n      // 保存元素\r\n      result.push(arr[i])\r\n      // 删除元素\r\n      arr.splice(i, 1)\r\n      // 下标自减\r\n      i--\r\n    }\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/pullAll.js":
/*!******************************!*\
  !*** ./src/array/pullAll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n// 删除数组中的元素(删除的元素放在数组里面)，会改变原数组，返回被删除的元素\r\nfunction pullAll(arr, args) {\r\n  // 保存删除的元素\r\n  let result = []\r\n  for(let i = 0; i < arr.length; i++) {\r\n    if(args.includes(arr[i])) {\r\n      // 保存元素\r\n      result.push(arr[i])\r\n      // 删除元素\r\n      arr.splice(i, 1)\r\n      // 下标自减\r\n      i--\r\n    }\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/pullAll.js?");

/***/ }),

/***/ "./src/array/reduce.js":
/*!*****************************!*\
  !*** ./src/array/reduce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reduce\": () => (/* binding */ reduce)\n/* harmony export */ });\nfunction reduce(arr, callback, initValue) {\r\n  let result = initValue\r\n  for(let i = 0; i < arr.length; i++) {\r\n    result = callback(result, arr[i], i)\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/reduce.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n// 数组切片\r\nfunction slice(arr, start, end) {\r\n  let result = []\r\n  // 若arr数组长度为0\r\n  if(!arr.length) {\r\n    return []\r\n  }\r\n  // start临界条件\r\n  start = start || 0\r\n  if(start >= arr.length) {\r\n    return []\r\n  }\r\n  // end临界条件\r\n  end = end || arr.length\r\n  if(end < start) {\r\n    end = arr.length\r\n  }\r\n  \r\n  for(let i = start; i < end; i++) {\r\n    result.push(arr[i])\r\n  }\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/some.js":
/*!***************************!*\
  !*** ./src/array/some.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction some(arr, callback) {\r\n  for(let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i)\r\n    if(res) {\r\n      return true\r\n    }\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://_/./src/array/some.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n// 数组去重\r\nfunction unique1(arr) {\r\n  let result = []\r\n  arr.forEach(item => {\r\n    if(result.indexOf(item) === -1) {\r\n      result.push(item)\r\n    }\r\n  })\r\n  return result\r\n}\r\n\r\nfunction unique2(arr) {\r\n  let result = []\r\n  let obj = {}\r\n  arr.forEach(item => {\r\n    // 将item作为下标存储到对象里面\r\n    if(!obj[item]) {\r\n      obj[item] = true\r\n      result.push(item)\r\n    }\r\n  })\r\n  return result\r\n}\r\n\r\nfunction unique3(arr) {\r\n  let set = new Set(arr)\r\n  // 下面两种方法都是ok的\r\n  // return Array.from(set)\r\n  return [...set]\r\n}\n\n//# sourceURL=webpack://_/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/axios.js":
/*!****************************!*\
  !*** ./src/axios/axios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* 发送任意类型请求的函数 */\r\nfunction axios({\r\n  url,\r\n  method='GET',\r\n  params={},\r\n  data={}\r\n}) {\r\n  // 返回一个promise对象\r\n  return new Promise((resolve, reject) => {\r\n\r\n    // 处理method(转大写)\r\n    method = method.toUpperCase()\r\n    \r\n    // 处理query参数(拼接到url上)   id=1&xxx=abc\r\n    /* { id: 1, xxx: 'abc'} */\r\n    let queryString = ''\r\n    Object.keys(params).forEach(key => {\r\n      queryString += `${key}=${params[key]}&`\r\n    })\r\n    if (queryString) { // id=1&xxx=abc&\r\n      // 去除最后的&\r\n      queryString = queryString.substring(0, queryString.length-1)\r\n      // 接到url\r\n      url += '?' + queryString\r\n    }\r\n\r\n\r\n    // 1. 执行异步ajax请求\r\n    // 创建xhr对象\r\n    const request = new XMLHttpRequest()\r\n    // 打开连接(初始化请求, 没有请求)\r\n    request.open(method, url, true)\r\n    \r\n    // 发送请求\r\n    if (method==='GET') {\r\n      request.send()\r\n    } else if (method==='POST' || method==='PUT' || method==='DELETE'){\r\n      // 告诉服务器请求体的格式是json\r\n      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') \r\n       // 发送json格式请求体参数\r\n      request.send(JSON.stringify(data))\r\n    }\r\n    \r\n    // 绑定状态改变的监听\r\n    request.onreadystatechange = function () {\r\n      // 如果请求没有完成, 直接结束\r\n      if (request.readyState!==4) {\r\n        return\r\n      }\r\n      // 如果响应状态码在[200, 300)之间代表成功, 否则失败\r\n      const {status, statusText} = request\r\n      // 2.1. 如果请求成功了, 调用resolve()\r\n      if (status>=200 && status<=299) {\r\n        // 准备结果数据对象response\r\n        const response = {\r\n          data: JSON.parse(request.response),\r\n          status,\r\n          statusText\r\n        }\r\n        resolve(response)\r\n      } else { // 2.2. 如果请求失败了, 调用reject()\r\n        reject(new Error('request error status is ' + status))\r\n      }\r\n    }\r\n  })\r\n}\r\n\r\n/* 发送特定请求的静态方法 */\r\naxios.get = function (url, options) {\r\n  return axios(Object.assign(options, {url, method: 'GET'}))\r\n}\r\naxios.delete = function (url, options) {\r\n  return axios(Object.assign(options, {url, method: 'DELETE'}))\r\n}\r\naxios.post = function (url, data, options) {\r\n  return axios(Object.assign(options, {url, data, method: 'POST'}))\r\n}\r\naxios.put = function (url, data, options) {\r\n  return axios(Object.assign(options, {url, data, method: 'PUT'}))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n\n//# sourceURL=webpack://_/./src/axios/axios.js?");

/***/ }),

/***/ "./src/event-bind/addEventListener.js":
/*!********************************************!*\
  !*** ./src/event-bind/addEventListener.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventListener\": () => (/* binding */ addEventListener)\n/* harmony export */ });\n/* \r\n  语法：addEventListener(element, type, fn, selector)\r\n  说明：如果selector没有，直接给element绑定事件，\r\n    如果selector有，将selector对应的多个元素的事件委托绑定给父元素element\r\n***/\r\n// element是父元素，selector是子元素\r\nfunction addEventListener(element, type, fn, selector) {\r\n  if(typeof element === \"string\") {\r\n    element = document.querySelector(element)\r\n  }\r\n  // 如果没有指定selector, 普通的事件绑定\r\n  if(!selector) {\r\n      element.addEventListener(type, fn)\r\n  }else {\r\n    // 否则是代委托的事件绑定\r\n    element.addEventListener(type, function (event) {\r\n      // 得到真正发生事件的目标元素\r\n      const target = event.target\r\n      // 如果与选择器匹配\r\n      if(target.matches(selector)) {\r\n        // 调用处理事件的回调fn, 并指定this为目标元素, 参数为event\r\n        fn.call(target, event)\r\n      }\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/event-bind/addEventListener.js?");

/***/ }),

/***/ "./src/event-bus/eventBus.js":
/*!***********************************!*\
  !*** ./src/event-bus/eventBus.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 事件总线\r\n// 收集回调函数的数据格式如下：\r\n/* \r\n  {\r\n     add:  [callback1, callback2]\r\n     delete: [callback3]\r\n  }\r\n*/ \r\nclass EventBus {\r\n  constructor() {\r\n    this.callbacks = {}\r\n  }\r\n\r\n  // on方法：绑定事件\r\n  on(type, callback) {\r\n    if(this.callbacks[type]) {\r\n      this.callbacks[type].push(callback)\r\n    }else {\r\n      this.callbacks[type] = [callback]\r\n    }\r\n  }\r\n  \r\n  // emit方法：触发事件\r\n  emit(type, data) {\r\n    const callbacks = this.callbacks[type]\r\n    if(callbacks && callbacks.length) {\r\n      // 遍历\r\n      callbacks.forEach(callback => {\r\n        callback(data)\r\n      })\r\n    }\r\n  }\r\n\r\n  // off方法：移除事件\r\n  // 传入了事件名，就删掉eventName对应的回调\r\n  // 没传入事件名，就删除所有的回调\r\n  off(eventName, callback) {\r\n    if(eventName) {\r\n      delete this.callbacks[eventName]\r\n    }else {\r\n      this.callbacks = {}\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventBus);\n\n//# sourceURL=webpack://_/./src/event-bus/eventBus.js?");

/***/ }),

/***/ "./src/extend/extend.js":
/*!******************************!*\
  !*** ./src/extend/extend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extend\": () => (/* binding */ extend)\n/* harmony export */ });\n// 组合寄生式继承\r\nfunction create(proto) {\r\n  function Fn() { }\r\n  Fn.prototype = proto\r\n  return new Fn()\r\n}\r\n\r\nfunction extend(Child, Parent) {\r\n  Child.prototype = create(Parent.prototype)\r\n  Child.prototype.constructor = Child\r\n}\n\n//# sourceURL=webpack://_/./src/extend/extend.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply(Fn, obj, args) {\r\n  if(obj === undefined || obj === null) {\r\n    // 浏览器环境globalThis为window，node环境globalThis为global\r\n    obj = globalThis\r\n  }\r\n  // 为obj对象添加临时的方法\r\n  obj.temp = Fn\r\n  // 调用temp方法\r\n  let result = obj.temp(...args)\r\n  // 删除添加的temp方法\r\n  delete obj.temp\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\nfunction bind(Fn, obj, ...args1) {\r\n  // 返回一个新的函数\r\n  return function(...args2) {\r\n    if(obj === undefined || obj === null) {\r\n      obj = globalThis\r\n    }\r\n    obj.temp = Fn\r\n    let result = obj.temp(...args1, ...args2)\r\n    delete obj.temp\r\n    return result\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call(Fn, obj, ...args) {\r\n  if(obj === undefined || obj === null) {\r\n    // 浏览器环境globalThis为window，node环境globalThis为global\r\n    obj = globalThis\r\n  }\r\n  // 为obj对象添加临时的方法\r\n  obj.temp = Fn\r\n  // 调用temp方法\r\n  let result = obj.temp(...args)\r\n  // 删除添加的temp方法\r\n  delete obj.temp\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer = null\r\n  // 返回一个函数\r\n  return function(...args) {\r\n    // 清除定时器\r\n    if(timer !== null) clearTimeout(timer)\r\n    // 启动定时器\r\n    timer = setTimeout(() => {\r\n      // 执行回调函数\r\n      callback.call(this, args)\r\n      // 重置定时器变量\r\n      timer = null\r\n    }, delay)\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction throttle(callback, wait) {\r\n  // 定义开始时间\r\n  let start = 0\r\n  // 结果是一个返回函数\r\n  return function(...args) {\r\n    // 定义结束时间\r\n    let current = Date.now()\r\n    if(current - start >= wait) {\r\n      callback.apply(this, args)\r\n      start = current\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EventBus\": () => (/* reexport safe */ _event_bus_eventBus__WEBPACK_IMPORTED_MODULE_33__[\"default\"]),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub_pub_sub__WEBPACK_IMPORTED_MODULE_34__[\"default\"]),\n/* harmony export */   \"addEventListener\": () => (/* reexport safe */ _event_bind_addEventListener__WEBPACK_IMPORTED_MODULE_31__.addEventListener),\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_0__.apply),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_axios__WEBPACK_IMPORTED_MODULE_32__[\"default\"]),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_1__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_2__.call),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_5__.chunk),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_22__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_22__.clone2),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_6__.concat),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_23__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_23__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_23__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_23__.deepClone4),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_7__.difference),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_8__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_dropRight__WEBPACK_IMPORTED_MODULE_9__.dropRight),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_every__WEBPACK_IMPORTED_MODULE_10__.every),\n/* harmony export */   \"extend\": () => (/* reexport safe */ _extend_extend__WEBPACK_IMPORTED_MODULE_30__.extend),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_filter__WEBPACK_IMPORTED_MODULE_11__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_find__WEBPACK_IMPORTED_MODULE_12__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_findIndex__WEBPACK_IMPORTED_MODULE_13__.findIndex),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_14__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_14__.flatten2),\n/* harmony export */   \"flatten3\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_14__.flatten3),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_map__WEBPACK_IMPORTED_MODULE_15__.map),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_24__.mergeObject),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_25__.myInstanceOf),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_26__.newInstance),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string_palindrome__WEBPACK_IMPORTED_MODULE_27__.palindrome),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_16__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pullAll__WEBPACK_IMPORTED_MODULE_17__.pullAll),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_reduce__WEBPACK_IMPORTED_MODULE_18__.reduce),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string_reverseString__WEBPACK_IMPORTED_MODULE_28__.reverseString),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_19__.slice),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_some__WEBPACK_IMPORTED_MODULE_20__.some),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string_truncate__WEBPACK_IMPORTED_MODULE_29__.truncate),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_21__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_21__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_21__.unique3)\n/* harmony export */ });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _array_dropRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/dropRight */ \"./src/array/dropRight.js\");\n/* harmony import */ var _array_every__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/every */ \"./src/array/every.js\");\n/* harmony import */ var _array_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/filter */ \"./src/array/filter.js\");\n/* harmony import */ var _array_find__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/find */ \"./src/array/find.js\");\n/* harmony import */ var _array_findIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/findIndex */ \"./src/array/findIndex.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/map */ \"./src/array/map.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_pullAll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./array/pullAll */ \"./src/array/pullAll.js\");\n/* harmony import */ var _array_reduce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./array/reduce */ \"./src/array/reduce.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_some__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./array/some */ \"./src/array/some.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _string_palindrome__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./string/palindrome */ \"./src/string/palindrome.js\");\n/* harmony import */ var _string_reverseString__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./string/reverseString */ \"./src/string/reverseString.js\");\n/* harmony import */ var _string_truncate__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./string/truncate */ \"./src/string/truncate.js\");\n/* harmony import */ var _extend_extend__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./extend/extend */ \"./src/extend/extend.js\");\n/* harmony import */ var _event_bind_addEventListener__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./event-bind/addEventListener */ \"./src/event-bind/addEventListener.js\");\n/* harmony import */ var _axios_axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./axios/axios */ \"./src/axios/axios.js\");\n/* harmony import */ var _event_bus_eventBus__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./event-bus/eventBus */ \"./src/event-bus/eventBus.js\");\n/* harmony import */ var _pub_sub_pub_sub__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pub-sub/pub-sub */ \"./src/pub-sub/pub-sub.js\");\n/* 函数相关 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 数组相关 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 对象相关 */\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 字符串相关 */\r\n\r\n\r\n\r\n\r\n/* 继承 */\r\n\r\n\r\n/* 自定义事件监听 */\r\n\r\n\r\n/* ajax请求函数 */\r\n\r\n\r\n/* 事件总线 */\r\n\r\n\r\n/* 消息订阅与发布 */\r\n\n\n//# sourceURL=webpack://_/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2)\n/* harmony export */ });\nfunction clone1(target) {\r\n  if(Array.isArray(target)) {\r\n    return [...target]\r\n  }else if(target !== null && typeof target === \"object\") {\r\n    return {...target}\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\nfunction clone2(target) {\r\n  if(target !== null && typeof target === \"object\") {\r\n    let result = Array.isArray(target) ? [] : {}\r\n    for(let key in target) {\r\n      // 判断当前对象身上是否有该属性\r\n      if(target.hasOwnProperty(key)) {\r\n        result[key] = target[key]\r\n      }\r\n    }\r\n    return result\r\n  }else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n// 函数引用丢失，循环引用出错\r\nfunction deepClone1(target) {\r\n  return JSON.parse(JSON.stringify(target))\r\n}\r\n\r\n// 函数属性不会丢失，循环引用出错\r\nfunction deepClone2(target) {\r\n  if(target !== null && typeof target === \"object\") {\r\n    let result = Array.isArray(target) ? [] : {}\r\n    for(let key in target) {\r\n      if(target.hasOwnProperty(key)) {\r\n        result[key] = deepClone2(target[key])\r\n      }\r\n    }\r\n    return result\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\n// 函数属性不会丢失，循环引用不会出错\r\nfunction deepClone3(target, map = new Map()) {\r\n  if(target !== null && typeof target === \"object\") {\r\n    if(map.has(target)) {\r\n      return map.get(target)\r\n    }\r\n    let result = Array.isArray(target) ? [] : {}\r\n    map.set(target, result)\r\n    for(let key in target) {\r\n      if(target.hasOwnProperty(key)) {\r\n        // 需要将map传入\r\n        result[key] = deepClone3(target[key], map)\r\n      }\r\n    }\r\n    return result\r\n  }else {\r\n    return target\r\n  }\r\n}\r\n\r\n// 使用forEach遍历数组，使用Object.keys+forEach遍历对象，提高代码性能\r\n// for...in会遍历对象原型上面的属性，性能比较低\r\nfunction deepClone4(target, map = new Map()) {\r\n  if(target !== null && typeof target === \"object\") {\r\n    if(map.has(target)) {\r\n      return map.get(target)\r\n    }\r\n    let result = Array.isArray(target) ? [] : {}\r\n    map.set(target, result)\r\n    if(Array.isArray(target)) {\r\n      target.forEach((item, index) => {\r\n        result[index] = deepClone4(item, map)\r\n      })\r\n    }else {\r\n      Object.keys(target).forEach(key => {\r\n        result[key] = deepClone4(target[key], map)\r\n      })\r\n    }\r\n    return result\r\n  }else {\r\n    return target\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n//  合并多个对象, 返回一个合并后对象(不改变原对象)\r\nfunction mergeObject(...objs) {\r\n  let result = {}\r\n  objs.forEach(obj => {\r\n    Object.keys(obj).forEach(key => {\r\n      // 检测result对象里面是否有key属性\r\n      if(result.hasOwnProperty(key)) {\r\n        result[key] = [].concat(result[key], obj[key])\r\n      }else {\r\n        result[key] = obj[key]\r\n      }\r\n    })\r\n  })\r\n  return result\r\n}\n\n//# sourceURL=webpack://_/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n// 检测一个对象是否为函数的实例\r\nfunction myInstanceOf(obj, Fn) {\r\n  // 获取obj的隐式原型对象\r\n  let proto = obj.__proto__\r\n  // 遍历原型链\r\n  while(proto) {\r\n    if(Fn.prototype === proto) {\r\n      return true\r\n    }\r\n    proto = proto.__proto__\r\n  }\r\n  return false\r\n}\n\n//# sourceURL=webpack://_/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n// 创建Fn构造函数的实例对象\r\n// new 内部做了什么事情\r\nfunction newInstance(Fn, ...args) {\r\n  // 创建一个新的对象\r\n  let obj = {}\r\n  // 修改函数内部this，并且返回\r\n  const result = Fn.apply(obj, args)\r\n  // 如果函数执行返回的是对象类型，就直接返回这个对象\r\n  if(result instanceof Object) {\r\n    return result\r\n  }\r\n  // 改变原型\r\n  obj.__proto__ = Fn.prototype\r\n  return obj\r\n}\n\n//# sourceURL=webpack://_/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/pub-sub/pub-sub.js":
/*!********************************!*\
  !*** ./src/pub-sub/pub-sub.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 消息发布与订阅: 可以实现对单个消息的取消(事件总线不可以)\r\n// 收集的数据类型格式\r\n/* \r\n  {\r\n    add: {\r\n      token1: callback1, \r\n      token2: callback2\r\n    },\r\n    update: {\r\n      token3: callback3\r\n    }\r\n  }\r\n*/\r\nclass PubSub {\r\n  // 保存所有回调的容器\r\n  static callbacks = {}\r\n  // 用于生成token的标记(为每个订阅提供一个唯一的编号)\r\n  // 通过这个唯一的编号，可以实现对单个消息的取消\r\n  static id = 1\r\n\r\n  // 订阅消息\r\n  static subscribe(channel, callback) {\r\n    // 创建唯一的编号\r\n    let token = \"token_\" + this.id++\r\n    if(this.callbacks[channel]) {\r\n      this.callbacks[channel][token] = callback\r\n    }else {\r\n      this.callbacks[channel] = {\r\n        [token]: callback\r\n      }\r\n    }\r\n    // 返回token (返回唯一标识，为后面取消订阅做准备)\r\n    return token\r\n  }\r\n\r\n  // 发布异步的消息\r\n  static publish(channel, data) {\r\n    // 取出当前消息对应的callbacks\r\n    let callbacks = this.callbacks[channel]\r\n    // 如果有值\r\n    if (callbacks) {\r\n      // 启动定时器, 异步执行所有的回调函数\r\n      setTimeout(() => {\r\n        // 取出对象里面所有的value，这个value就是传入的回调函数\r\n        Object.values(callbacks).forEach(callback => {\r\n          callback(data)\r\n        })\r\n      }, 0)\r\n    }\r\n  }\r\n\r\n  // 发布同步的消息\r\n  static publishSync(channel, data) {\r\n    // 取出当前消息对应的callbacks\r\n    const callbacks = this.callbacks[channel]\r\n    // 如果有值\r\n    if (callbacks) {\r\n      // 立即同步执行所有的回调函数\r\n      Object.values(callbacks).forEach(callback => {\r\n        callback(data)\r\n      })\r\n    }\r\n  }\r\n\r\n  /* 取消消息订阅\r\n   1). 没有传值，flag为undefined，取消所有订阅\r\n   2). flag为token字符串(回调函数唯一标识)，取消token这个订阅\r\n   3). flag为channel字符串(消息名)，取消channel消息下面所有订阅\r\n  ***/\r\n  static unsubscribe(flag) {\r\n    // 如果flag为undefined，清空所有订阅\r\n    if(flag === undefined) {\r\n      this.callbacks = {}\r\n    }else if(typeof flag === \"string\") {\r\n      // 判断是否为token_开头\r\n      if(flag.indexOf(\"token_\") === 0) {\r\n        // 获取用于flag唯一标识的那个对象\r\n        let callbackObj = Object.values(this.callbacks).find(obj => {\r\n          return obj.hasOwnProperty(flag)\r\n        })\r\n        // 删除订阅的消息\r\n        if(callbackObj) {\r\n          delete callbackObj[flag]\r\n        }\r\n      }else {\r\n        delete this.callbacks[flag]\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);\n\n//# sourceURL=webpack://_/./src/pub-sub/pub-sub.js?");

/***/ }),

/***/ "./src/string/palindrome.js":
/*!**********************************!*\
  !*** ./src/string/palindrome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome)\n/* harmony export */ });\n// 功能: 如果给定的字符串是回文，则返回 true ；否则返回 false\r\nfunction palindrome(str) {\r\n  let reverseStr = str.split(\"\").reverse().join(\"\")\r\n  if(reverseStr === str) {\r\n    return true\r\n  }else {\r\n    return false\r\n  }\r\n}\n\n//# sourceURL=webpack://_/./src/string/palindrome.js?");

/***/ }),

/***/ "./src/string/reverseString.js":
/*!*************************************!*\
  !*** ./src/string/reverseString.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString)\n/* harmony export */ });\n// 功能: 生成一个倒序的字符串\r\nfunction reverseString(str) {\r\n  // 将字符串变成数组\r\n  // let arr = [...str]\r\n  let arr = str.split(\"\")\r\n  // 翻转数组\r\n  arr.reverse()\r\n  // 将数组拼接成字符串并返回\r\n  return arr.join(\"\")\r\n}\n\n//# sourceURL=webpack://_/./src/string/reverseString.js?");

/***/ }),

/***/ "./src/string/truncate.js":
/*!********************************!*\
  !*** ./src/string/truncate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n// 功能: 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\r\nfunction truncate(str, size) {\r\n  return str.length > size ? str.slice(0, size) + \"...\" : str\r\n}\n\n//# sourceURL=webpack://_/./src/string/truncate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});