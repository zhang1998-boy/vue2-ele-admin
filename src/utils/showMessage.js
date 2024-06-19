
// 在需要使用Message的地方导入
import { notification } from 'ant-design-vue'

// 创建一个错误信息的队列，用于保存已经显示的错误信息
const errorQueue = []

// 封装的函数用于显示错误信息 showMessage('出错啦',‘error’,1000)
const showMessage = (message, type = 'error', duration = 2) => {
  // 检查错误信息是否已经显示过，如果已经显示则直接返回，避免重复显示
  if (errorQueue.includes(message)) {
    return
  }

  // 添加错误信息到队列
  errorQueue.push(message)

  // ant UI的Message组件显示错误信息
  notification.open({
    title: '错误',
    message,
    type: 'error',
    duration,
    onClose: () => {
      // 错误信息显示完毕后，从队列中移除
      const index = errorQueue.indexOf(message)
      if (index > -1) {
        errorQueue.splice(index, 1)
      }
    }
  })
}

// 导出封装好的函数，供拦截器中使用
export default showMessage
