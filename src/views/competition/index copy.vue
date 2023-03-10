<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="black"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <img class="navbar-img" src="./image/icon.png" alt="" />
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">消息中心</el-menu-item>
      <el-menu-item index="5">消息中心</el-menu-item>

      <el-menu-item index="6"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <el-menu-item index="7">
      <el-input
        placeholder="请输入内容"
        v-model="inputValue"
        clearable
        suffix-icon="el-icon-search"
      >
      </el-input
    ></el-menu-item>
    <el-menu-item index="8">消息中心</el-menu-item>
  </div>
</template>
<script setup>
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

const inputValue = ref();
const activeIndex2 = ref("1");
const defaultActive = ref("1");
const handleSelect = () => {
  console.log("1");
};
</script>
<style>
.navbar-img {
  position: absolute;
  left: 0;
  width: 100px;
  z-index: 99;
  height: 50px;
}
</style>
