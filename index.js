import { createApp } from "vue";
import Loading from "./index.vue";
import {content,typeState,timeOut} from './setData.js'
let instance // 用于挂载 子元素
let unmount  // 用于销毁 子元素
const root = document.createElement('div'); //创建父节点
document.body.appendChild(root); // 在dom节点中添加父节点

// 父级元素的样式：居中
root.className='abc'
root.style.position='fixed'
root.style.top='20px'
root.style.left='50%'
root.style.transform='translateX(-50%)'


function mountComponent(RootComponent) {
    const app = createApp(RootComponent); // 使用vue语法 创建实例
    const box = document.createElement('div'); //创建子节点dom元素
    root.appendChild(box); //向父节点添加子节点
    return {
        instance: app.mount(box), //将创建的实例挂载到 "子节点" 当中
        unmount() {
            setTimeout(() => {
                root.removeChild(box); //倒计时完毕后 从父节点中将子节点删除
            }, timeOut.value);
        },
    };
}
// 创建一个loading组件
export function $Message(Mitem,Mtype,MtimeOut) {
    content.value = Mitem //自定义内容
    typeState.value = Mtype //类型
    timeOut.value = MtimeOut; //时间
    ({ instance, unmount } = mountComponent(Loading)); // 将返回的值结构出来
    instance && unmount() // 短路运算 前者true 进行再执行后者
}
