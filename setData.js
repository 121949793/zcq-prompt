import { ref } from "vue";
export let content = ref('自定义内容') //内容
export let typeState = ref('error')   //类型
export let typeData = {
    // 根据类型映射不同颜色来达到不同状态，[0]为背景颜色,[1]为文字颜色
  'message':['244,244,245','144,147,153'],
  'success':['240,250,235','120,200,80'],
  'warning':['250,245,235','245,215,175'],
  'error':['255,240,240','245,108,108'],
}
export let timeOut = ref(3000) // 毫秒数