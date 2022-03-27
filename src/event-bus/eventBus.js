// 事件总线
// 收集回调函数的数据格式如下：
/* 
  {
     add:  [callback1, callback2]
     delete: [callback3]
  }
*/ 
class EventBus {
  constructor() {
    this.callbacks = {}
  }

  // on方法：绑定事件
  on(type, callback) {
    if(this.callbacks[type]) {
      this.callbacks[type].push(callback)
    }else {
      this.callbacks[type] = [callback]
    }
  }
  
  // emit方法：触发事件
  emit(type, data) {
    const callbacks = this.callbacks[type]
    if(callbacks && callbacks.length) {
      // 遍历
      callbacks.forEach(callback => {
        callback(data)
      })
    }
  }

  // off方法：移除事件
  // 传入了事件名，就删掉eventName对应的回调
  // 没传入事件名，就删除所有的回调
  off(eventName, callback) {
    if(eventName) {
      delete this.callbacks[eventName]
    }else {
      this.callbacks = {}
    }
  }
}

export default EventBus