<template>
  <div>
    <!-- <Suspense>
      <template #default>
        // 异步组件-默认渲染的页面 
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" text="TEXT">
          <template v-slot:content="{ msg }">
            <div>{{ msg }}11111111</div>
          </template>
        </HelloWorld>
      </template>
      <template #fallback>
      // 页面还没加载出来展示的页面
        <div>loading...</div>
      </template>
    </Suspense> -->

    <!-- <Teleport to="body">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" text="TEXT">
        <template v-slot:content="{ msg }">
          <div>{{ msg }}11111111</div>
        </template>
      </HelloWorld>
    </Teleport> -->
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent ,computed } from "vue";
// import Suspense from "vue";
const HelloWorld = defineAsyncComponent(() => import("@/components/v2.7.vue"));
// import HelloWorld from "@/components/v2.6.vue"; // @ is an alias to /src

// const store = useStore(); // 使用useStore方法

// const permissions = computed(() => $store.getters.permissions)

</script>
