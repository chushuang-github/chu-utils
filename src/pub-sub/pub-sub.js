// 消息发布与订阅: 可以实现对单个消息的取消(事件总线不可以)
// 收集的数据类型格式
/* 
  {
    add: {
      token1: callback1, 
      token2: callback2
    },
    update: {
      token3: callback3
    }
  }
*/
class PubSub {
  // 保存所有回调的容器
  static callbacks = {}
  // 用于生成token的标记(为每个订阅提供一个唯一的编号)
  // 通过这个唯一的编号，可以实现对单个消息的取消
  static id = 1

  // 订阅消息
  static subscribe(channel, callback) {
    // 创建唯一的编号
    let token = "token_" + this.id++
    if(this.callbacks[channel]) {
      this.callbacks[channel][token] = callback
    }else {
      this.callbacks[channel] = {
        [token]: callback
      }
    }
    // 返回token (返回唯一标识，为后面取消订阅做准备)
    return token
  }

  // 发布异步的消息
  static publish(channel, data) {
    // 取出当前消息对应的callbacks
    let callbacks = this.callbacks[channel]
    // 如果有值
    if (callbacks) {
      // 启动定时器, 异步执行所有的回调函数
      setTimeout(() => {
        // 取出对象里面所有的value，这个value就是传入的回调函数
        Object.values(callbacks).forEach(callback => {
          callback(data)
        })
      }, 0)
    }
  }

  // 发布同步的消息
  static publishSync(channel, data) {
    // 取出当前消息对应的callbacks
    const callbacks = this.callbacks[channel]
    // 如果有值
    if (callbacks) {
      // 立即同步执行所有的回调函数
      Object.values(callbacks).forEach(callback => {
        callback(data)
      })
    }
  }

  /* 取消消息订阅
   1). 没有传值，flag为undefined，取消所有订阅
   2). flag为token字符串(回调函数唯一标识)，取消token这个订阅
   3). flag为channel字符串(消息名)，取消channel消息下面所有订阅
  ***/
  static unsubscribe(flag) {
    // 如果flag为undefined，清空所有订阅
    if(flag === undefined) {
      this.callbacks = {}
    }else if(typeof flag === "string") {
      // 判断是否为token_开头
      if(flag.indexOf("token_") === 0) {
        // 获取用于flag唯一标识的那个对象
        let callbackObj = Object.values(this.callbacks).find(obj => {
          return obj.hasOwnProperty(flag)
        })
        // 删除订阅的消息
        if(callbackObj) {
          delete callbackObj[flag]
        }
      }else {
        delete this.callbacks[flag]
      }
    }
  }
}

export default PubSub