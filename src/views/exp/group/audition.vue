<template>
  <div>
    <Crumbs title="2023-海选分组" />
    <div class="audition-page">
      <img class="tempImg" src="@/assets/temp/Audition1.png" alt="" />
      <img class="tempImg" src="@/assets/temp/Audition2.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Crumbs from "@/components/Crumbs/index.vue";
import { defineAsyncComponent, computed } from "vue";
// import Suspense from "vue";
const HelloWorld = defineAsyncComponent(() => import("@/components/v2.7.vue"));
// import HelloWorld from "@/components/v2.6.vue"; // @ is an alias to /src

// const store = useStore(); // 使用useStore方法

// const permissions = computed(() => $store.getters.permissions)
</script>
<style lang="scss" scoped>
.tempImg {
  width: 100%;
}
.audition-page {
  /* background-color: #ffffff; */
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
