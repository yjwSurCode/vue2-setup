<template>
  <div class="breadcrumb-com">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        <img :style="{ width: '10px', height: '10px' }" src="@/assets/svg/home.svg" alt="" />
        首页</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/' }"> {{ title ? title.split('-')[0] : '报名系统' }}</el-breadcrumb-item>
      <el-breadcrumb-item class="currentTab" :style="{ color: 'blue' }">{{
        title ? title.split('-')[1] : '报名'
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
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
  Directive
} from 'vue';

withDefaults(
  defineProps<{
    title: string;
    // list: number[];
  }>(),
  {
    title: '',
    // list: () => [4, 5, 6]
  }
);
</script>
<style lang="scss">
/* 不被选中时的颜色 */
.el-breadcrumb > .el-breadcrumb__inner {
  color: #d9bb95 !important;
  font-weight: 400 !important;
}
/* 被选中时的颜色 */
.el-breadcrumb__item:last-child > .el-breadcrumb__inner {
  color: #1cefff !important;
  font-weight: 800 !important;
}

.breadcrumb-com {
  padding: 20px;
  box-shadow: 1px 1px 5px rgb(178, 178, 178);
}
</style>
