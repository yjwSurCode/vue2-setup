<template>
    <div>11{{ msg }}</div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
// 例如：import  《组件名称》  from '《组件路径》 ';

export default {
    // import 引入的组件需要注入到对象中才能使用
    components: {},
    props: {},
    data() {
        // 这里存放数据
        return { msg: '6' };
    },
    // 计算属性 类似于 data 概念
    computed: {},
    // 监控 data 中的数据变化
    watch: {},
    // 方法集合
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this 实例）
    created(e) {
        console.log(e);
    },
    // 生命周期 - 挂载完成（可以访问 DOM 元素）
    mounted(e) {
        console.log(e);
    },
    beforeCreate(e) {
        console.log(e);
    },
    beforeMount(e) {
        console.log(e);
    }, // 生命周期 - 挂载之前
    beforeUpdate(e) {
        console.log(e);
    }, // 生命周期 - 更新之前
    updated(e) {
        console.log(e);
    }, // 生命周期 - 更新之后
    beforeDestroy(e) {
        console.log(e);
    }, // 生命周期 - 销毁之前
    destroyed(e) {
        console.log(e);
    }, // 生命周期 - 销毁完成
    activated(e) {
        console.log(e);
    }, // 如果页面有 keep-alive 缓存功能,这个函数会触发
};
</script>

<style scoped></style>
