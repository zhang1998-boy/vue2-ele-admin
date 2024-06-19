// 实现Message全局提示可手动关闭
/**
 *   this.$message.success('This is a success message');
      this.$message.error('This is an error message');
      this.$message.warning('This is a warning message');
 */
import { message } from 'ant-design-vue';
/*
  h: 是content自带的参数，表示createElement
  content：文本内容
*/
const createElementVNode = (h, content) => {
  // 延用的官方的文本内容及样式
  const innerText = h('span', { style: { color: '#4a5970', fontSize: '14px' } }, content);
  // 自定义关闭图标
  const innerIcon = h('a-icon', {
    style: { marginLeft: '10px', color: '#1890ff', cursor: 'pointer' },
    attrs: { type: 'close-circle' },
    on: { click: () => message.destroy() },
  });
  // 合并到一个VNode节点中
  const container = h('span', {}, [innerText, innerIcon]);
  return container;
};
// 由于message有多种状态, 这里需要额外处理
const dtMessage = {};
// 给dtMessage循环赋值不同类型的message函数
['error', 'success', 'info', 'warning', 'warn'].forEach((type) => {
  // 处理message[type](config)参数为对象类型
  dtMessage[type] = (content, duration, onClose) => {
    if (typeof content === 'object') {
      return message[type]({ ...content, content: h => createElementVNode(h, content?.content) });
    }
    return message[type](h => createElementVNode(h, content), duration, onClose);
  };
});
export default dtMessage;
