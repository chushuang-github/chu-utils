/* 函数相关 */
export { apply } from './function/apply'
export { bind } from './function/bind'
export { call } from './function/call'
export { debounce } from './function/debounce'
export { throttle } from './function/throttle'


/* 数组相关 */
export { chunk } from './array/chunk'
export { concat } from './array/concat'
export { difference } from './array/difference'
export { drop } from './array/drop'
export { dropRight } from'./array/dropRight'
export { every } from './array/every'
export { filter } from './array/filter'
export { find } from './array/find'
export { findIndex } from './array/findIndex'
export { flatten1, flatten2, flatten3 } from './array/flatten'
export { map } from './array/map'
export { pull } from './array/pull'
export { pullAll } from './array/pullAll'
export { reduce } from './array/reduce'
export { slice } from './array/slice'
export { some } from './array/some'
export { unique1, unique2, unique3 } from './array/unique'


/* 对象相关 */
export { clone1, clone2 } from './object/clone'
export { deepClone1, deepClone2, deepClone3, deepClone4 } from './object/deepClone'
export { mergeObject } from './object/mergeObject'
export { myInstanceOf } from './object/myInstanceOf'
export { newInstance } from './object/newInstance'

/* 字符串相关 */
export { palindrome } from "./string/palindrome"
export { reverseString } from "./string/reverseString"
export { truncate } from './string/truncate'

/* 继承 */
export { extend } from './extend/extend'

/* 自定义事件监听 */
export { addEventListener } from './event-bind/addEventListener'

/* ajax请求函数 */
export { default as axios } from './axios/axios'

/* 事件总线 */
export {default as EventBus} from './event-bus/eventBus'

/* 消息订阅与发布 */
export {default as PubSub} from './pub-sub/pub-sub'