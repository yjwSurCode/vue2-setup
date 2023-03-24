<template>
  <div>
    <Crumbs title="2023-报名须知" />
    <div class="notice-page">
      <img class="tempImg" :src="noticeImg" alt="" />
    </div>

    <div class="sub-btn" id="bm">报名</div>
  </div>
</template>

<script setup lang="ts">
import Crumbs from '@/components/Crumbs/index.vue';
import { defineAsyncComponent, computed, ref } from 'vue';

import noticeImg from '../../../assets/temp/temp11.jpg';

// import Suspense from "vue";
const HelloWorld = defineAsyncComponent(() => import('@/components/v2.7.vue'));
// import HelloWorld from "@/components/v2.6.vue"; // @ is an alias to /src

// const store = useStore(); // 使用useStore方法

// const permissions = computed(() => $store.getters.permissions)
</script>
<style lang="scss" scoped>
.tempImg {
  width: 100%;
}
.notice-page {
  background-color: #ffffff;
  padding-bottom: 50px;
}
.sub-btn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  background-color: #527ea3;
  color: #fff;
  margin: 50px auto;
}
</style>
