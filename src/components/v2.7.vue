<template>
  <div>
    <h1>{{ count }}--------</h1>
    <slot name="content" msg="hello 啊，树哥!"></slot>
    <h1>{{ _childmsg.count.value }}--------</h1>

    <div v-move class="box">
      <div class="header"></div>
      <div class="spans">内容</div>
    </div>
  </div>
</template>

// vue3 API https://juejin.cn/post/7158331832512020511
<script setup lang="ts">
// eslint-disable-next-line prettier/prettier
import {
  withDefaults,
  defineProps,
  defineExpose,
  useAttrs,
  reactive,
  ref,
  useSlots,
  toRefs,
  watch,
  computed,
  watchEffect,
  getCurrentInstance,
  Directive,
} from "vue";
type Props = {
  msg?: string;
  list?: number[];
};
// 访问router
const useRouter = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error("must be called in setup");
  return vm.proxy.$router;
};
const router = useRouter();

// useSlots useAttrs
const slots = useSlots();
const attrs = useAttrs();
console.log(slots, attrs);

const color = ref("red");
const childmsg = reactive({ count: 1 });
let { count } = toRefs(childmsg);
const _childmsg = { ...toRefs(childmsg) };
setTimeout(() => {
  count.value++;
}, 1000);

//!slot 具名插槽 slot="content" 作用域插槽 slot-scope="{ msg }"
// <Child ref="childRef">
//   <template slot="content" slot-scope="{ msg }">
//     <div>{{ msg }}</div>
//   </template>
// </Child>

// <slot name="content" msg="hello 啊，树哥!"></slot>

//  <Child>
//       <template  v-slot:content="{ msg }">
//         <div>{{ msg }}</div>
//       </template>
//     </Child>

//! toRef  toRefs toRaw
// toRef 如果原始对象是非响应式的,数据会变,但不会更新视图
// toRef返回的值是否具有响应性取决于被解构的对象本身是否具有响应性。响应式数据经过toRef返回的值仍具有响应性，非响应式数据经过toRef返回的值仍没有响应性。
// toRefs相当于对对象内每个属性调用toRef，toRefs返回的对象内的属性使用时需要加.value,主要是方便我们解构使用
// toRaw将响应式对象修改为普通对象-------------数据能变化，视图不变化(失去响应式)

//! computed
//const add = computed(() => count.value +1)   推导得到的类型：ComputedRef<number>

//! watch
// vue3 watch 的作用和 Vue2 中的 watch 作用是一样的，他们都是用来监听响应式状态发生变化的，当响应式状态发生变化时，就会触发一个回调函数。
// watch(data,()=>{},{})  监听ref reactive
// watch([name, age], (newV, oldV) => {console.log(newV, oldV) })
// 监听reactive单个属性 -------->  watch(()=>info.age, (newV, oldV) => { console.log(newV, oldV) })
// 当reactive单个属性是对象是：：： 需要自己开启 deep:true深度监听,不然就不发触发 watch 的回调函数

//! WatchEffect
// WatchEffect 会立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数。（有点像计算属性）如果用到 a 就只会监听 a, 就是用到几个监听几个 而且是非惰性,会默认调用一次
// 采用异步的方式创建一个监听器 不会再组件卸载的时候自动停止
//1: 它会自动停止
// watchEffect(() => {})
// 2: ...这个则不会！
// setTimeout(() => {
//   watchEffect(() => {})
// }, 100)
// 3: 手动调用停止
// const stop = watchEffect(() => {
//   /* ... */
// })

//!  WatchEffect  onInvalidate onTrigger
// let num = ref(0);
// setTimeout(() => {
//   num.value++;
// }, 3000);

// watchEffect(
//   (onInvalidate) => {
//     console.log(num.value, "输出3");
//     onInvalidate(() => {
//       console.log("执行2");
//     });
//   },
//   {
//     flush: "post", //此时这个函数会在组件更新之后去执行
//     onTrigger(e) {
//作为一个调试工具，可在开发中方便调试
//       console.log("触发1", e);
//     },
//   }
// );

//! withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项  defineProps来接收父组件传递的值
// withDefaults(
//   defineProps<{
//     msg: string;
//     list: number[];
//   }>(),
//   {
//     msg: "张麻子",
//     list: () => [4, 5, 6],
//   }
// );

//! defineEmits emits  父组件 @changeMsg="changeMsg"
// const emits = defineEmits(['changeMsg'])
// emits('changeMsg','黄四郎')

//! defineExpose 将方法、变量暴露给父组件使用，父组件才可通过 ref API拿到子组件暴露的数据
// defineExpose({
//   childmsg,
// });
// 父组件 获取子组件name console.log(childRef.value!.name)
// 父组件 执行子组件方法 childRef.value?.changeName()

//! useAttrs和useSlots
// 考虑穿透属性

//! provide inject
// 父组件 const msg = ref('hello 啊，树哥')  provide('msg', msg)
// 子孙组件 const msg = inject<Ref<string>>('msg',ref('hello啊！'))

//! 自定义指令
const vMove: Directive | any = {
  mounted(el: HTMLElement) {
    let moveEl = el.firstElementChild as HTMLElement;
    const mouseDown = (e: MouseEvent) => {
      //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
      console.log(e.clientX, e.clientY, "起始位置", el.offsetLeft);
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
      const move = (e: MouseEvent) => {
        el.style.left = e.clientX - X + "px";
        el.style.top = e.clientY - Y + "px";
        console.log(e.clientX, e.clientY, "位置改变");
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", move);
      });
    };
    moveEl.addEventListener("mousedown", mouseDown);
  },
};
</script>

<style scoped>
.spans {
  /* 使用v-bind绑定组件中定义的变量 */
  color: v-bind("color");
}
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
}

.header {
  height: 20px;
  background: black;
  cursor: move;
}
</style>
