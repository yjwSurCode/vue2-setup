<template>
  <div>
    <Crumbs title="2023-赛事规则" />
    <div class="rule-page">
      <img class="tempImg" :src="ruleImg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Crumbs from '@/components/Crumbs/index.vue';
import { defineAsyncComponent, computed } from 'vue';
import ruleImg from '@/assets/temp/temp44.jpg';
const HelloWorld = defineAsyncComponent(() => import('@/components/v2.7.vue'));
// import HelloWorld from "@/components/v2.6.vue"; // @ is an alias to /src

// const store = useStore(); // 使用useStore方法

// const permissions = computed(() => $store.getters.permissions)
</script>
<style lang="scss" scoped>
.tempImg {
  width: 100%;
}
.rule-page {
  background-color: #ffffff;
  padding-bottom: 50px;
  padding: 0px 100px;
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
