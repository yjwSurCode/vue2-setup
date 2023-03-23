<template>
  <div>
    <Crumbs title="2023-赛事介绍" />
    <div class="introduce-page">
      <p>
        立直麻将高校联赛起源于上海高校日本麻将团体赛（简称上高赛、高校杯），于2014年由上海财经大学与复旦大学携手创办。从第一届比赛以来，为立直麻将
        的推广和交流做出了重要的贡献。本赛事将继承传统，提供一个能体现竞技麻将精神的平台，继续为各校爱好者提供良好的交流平台，促进友好关系。
      </p>
      <p :style="{ marginTop: '3.125rem' }">
        本届为该赛事第四届比赛，自第一届起，就吸引了全国各地师生组织和日麻爱好者的注意。虽因受政策，疫情和能力问题，没法做到天麻动漫里面真正的全国
        性规模和线下模式，但会寻求契机慢慢发展，将这一系列比赛努力办下去，也希望可以得到圈内更多的理解，认可和支持。
      </p>

      <div class="folder-list">
        <div class="folder-list-container" v-for="(item, index) in list" :key="index">
          <p class="folder-text">{{ item.name }} <span class="folder-span">相关信息</span></p>
          <img @click="goI(item.link)" class="folder-img" src="@/assets/temp/forld.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Crumbs from '@/components/Crumbs/index.vue';
import { defineAsyncComponent, computed } from 'vue';
// import Suspense from "vue";
const HelloWorld = defineAsyncComponent(() => import('@/components/v2.7.vue'));

const list = [
  { name: '第一届', link: 'https://shimo.im/docs/HG8w69hYHHwt6YVd/read' },
  { name: '第二届', link: 'https://docs.qq.com/doc/DQlZZTEVFT2hJZWda' },
  { name: '第三届', link: 'https://docs.qq.com/sheet/DYkd2dWpOakZZdXVN?tab=knq1lp' }
];

const goI = (index: string) => {
  console.log(index);
  window.open(index);
};
// import HelloWorld from "@/components/v2.6.vue"; // @ is an alias to /src

// const store = useStore(); // 使用useStore方法

// const permissions = computed(() => $store.getters.permissions)
</script>
<style lang="scss" scoped>
.tempImg {
  width: 100%;
}
.introduce-page {
  /* background-color: #ffffff; */
  padding-bottom: 3.125rem;
  padding: 0rem 6.25rem;
  font-family: PingFangSC-Regular;
  color: black;
  text-align: left;
}

.folder-list {
  display: flex;
  justify-content: space-around;
}
.folder-list-container {
  margin: 3.125rem;
  position: relative;
}
.folder-img {
  width: 150px;
  height: 150px;
}

.folder-text {
  position: absolute;
  top: -5px;
  font-size: 10px;
  left: 5px;
}
.folder-span {
  color: #fff;
}
.sub-btn {
  width: 6.25rem;
  height: 1.875rem;
  line-height: 1.875rem;
  background-color: #527ea3;
  color: #fff;
  margin: 3.125rem auto;
}
</style>
