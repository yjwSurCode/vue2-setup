"use strict";(self["webpackChunkedu"]=self["webpackChunkedu"]||[]).push([[724],{63724:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var o=function(){var e=this,t=e._self._c,s=e._self._setupProxy;return t("div",[t("h1",[e._v(e._s(s.count)+"--------")]),e._t("content",null,{msg:"hello 啊，树哥!"}),t("h1",[e._v(e._s(s._childmsg.count.value)+"--------")]),t("div",{directives:[{name:"move",rawName:"v-move"}],staticClass:"box"},[t("div",{staticClass:"header"}),t("div",{staticClass:"spans"},[e._v("内容")])])],2)},n=[],l=s(27195),c=(0,l.defineComponent)({__name:"v2.7",setup(e){(0,l.useCssVars)(((e,t)=>({bd862168:t.color})));const t=()=>{const e=(0,l.getCurrentInstance)();if(!e)throw new Error("must be called in setup");return e.proxy.$router},s=t(),o=(0,l.useSlots)(),n=(0,l.useAttrs)();console.log(o,n);const c=(0,l.ref)("red"),u=(0,l.reactive)({count:1});let{count:r}=(0,l.toRefs)(u);const i={...(0,l.toRefs)(u)};setTimeout((()=>{r.value++}),1e3);
//!slot 具名插槽 slot="content" 作用域插槽 slot-scope="{ msg }"
//! toRef  toRefs toRaw
//! computed
//! watch
//! WatchEffect
//!  WatchEffect  onInvalidate onTrigger
//! withDefaults 的第二个参数便是默认参数设置，会被编译为运行时 props 的 default 选项  defineProps来接收父组件传递的值
//! defineEmits emits  父组件 @changeMsg="changeMsg"
//! defineExpose 将方法、变量暴露给父组件使用，父组件才可通过 ref API拿到子组件暴露的数据
//! useAttrs和useSlots
//! provide inject
//! 自定义指令
const d={mounted(e){let t=e.firstElementChild;const s=t=>{console.log(t.clientX,t.clientY,"起始位置",e.offsetLeft);let s=t.clientX-e.offsetLeft,o=t.clientY-e.offsetTop;const n=t=>{e.style.left=t.clientX-s+"px",e.style.top=t.clientY-o+"px",console.log(t.clientX,t.clientY,"位置改变")};document.addEventListener("mousemove",n),document.addEventListener("mouseup",(()=>{document.removeEventListener("mousemove",n)}))};t.addEventListener("mousedown",s)}};return{__sfc:!0,useRouter:t,router:s,slots:o,attrs:n,color:c,childmsg:u,count:r,_childmsg:i,vMove:d}}}),u=c,r=s(1001),i=(0,r.Z)(u,o,n,!1,null,"e5f180b0",null),d=i.exports}}]);