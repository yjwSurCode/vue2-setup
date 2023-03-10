<template>
  <div class="navbar-page" :style="isAdmin ? { position: 'absolute', marginLeft: '200px' } : {}">
    <!-- //! 统一高度 -->
    <el-menu
      :style="{ height: '65px' }"
      :default-active="$VM.$store.state.navbarSelect"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#1cefff"
      text-color="#fff"
      background-color="black"
      @select="handleSelect"
    >
      <el-menu-item index="2">
        <img src="../../assets/images/icon.jpg" style="margin-top: -5px; width: 120px; padding: 10px 10px" />
      </el-menu-item>
      <el-menu-item index="3">首页</el-menu-item>
      <el-menu-item index="4">赛事介绍</el-menu-item>
      <el-menu-item index="5">
        <!-- <router-link to="/enroll">home</router-link> -->
        参赛学校</el-menu-item
      >
      <el-menu-item index="6">积分排行</el-menu-item>
      <el-menu-item index="7">比赛历程</el-menu-item>
      <el-menu-item index="8">报名系统</el-menu-item>
      <el-menu-item index="9">赛事管理</el-menu-item>
      <el-menu-item index="10">联系我们</el-menu-item>
      <el-menu-item index="11" :style="{ right: '50px', position: 'absolute' }">
        <el-input
          :style="{ marginLeft: '0px' }"
          placeholder="请输入内容"
          v-model="inputValue"
          clearable
          suffix-icon="el-icon-search"
        >
        </el-input>
      </el-menu-item>

      <el-menu-item index="11" :style="{ right: '0px', position: 'absolute' }">
        <el-dropdown @command="callbackM">
          <i class="el-icon-user"></i>
          <!-- <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right"></i> </span> -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="logoutM">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
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
  Directive,
  onMounted
} from 'vue';

// emptyAvatar
import { mapState, mapMutations } from 'vuex';

const useVM = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('must be called in setup');
  return vm.proxy;
};
const useRouter = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('must be called in setup');
  return vm.proxy.$router;
};
const $VM = useVM();
const router = useRouter();

withDefaults(
  defineProps<{
    isAdmin: boolean;
    // list: number[]
  }>(),
  {
    isAdmin: false
    // list: () => [4, 5, 6],
  }
);

const _navbarSelect = ref($VM.$store.state.navbarSelect);
const userInfo = ref('123');

onMounted(() => {
  console.log('$VM', $VM.$store);
  // _navbarSelect.value = $VM.$store._mutations.changeNavbar("888");

  // $VM.$store.commit("changeNavbar", "5");

  // const mapState({
  //   // 箭头函数可使代码更简练
  //   count: (state: any) => state.count,
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: "count",
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   },
  // });

  // const a = {
  //   ...mapMutations({
  //     add: "increment", // 将 `this.add()` 映射为 `this.$store.commit('increment')`
  //   }),
  // };
});

const callbackM = () => {
  console.log(1);
  localStorage.removeItem('userAccount');
  localStorage.removeItem('token');
};

const logoutM = () => {
  console.log(2);
  localStorage.removeItem('userAccount');
  localStorage.removeItem('token');
};
const handleUser = () => {
  console.log(1);
};

const activeIndex = ref('3');
const inputValue = ref('');
const handleSelect = (index: string) => {
  console.log(index, typeof index, router);

  switch (index) {
    case '1':
      router.replace('/');
      break;
    case '2':
      router.replace('/');
      $VM.$store.commit('changeNavbar', '2');
      break;
    case '3':
      router.replace('/');
      $VM.$store.commit('changeNavbar', '3');
      break;
    case '4':
      $VM.$store.commit('changeNavbar', '4');
      // $VM.$store.dispatch("asyncChangeNavbar", "8");
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    case '5':
      $VM.$store.commit('changeNavbar', '5');
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    case '6':
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    case '7':
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    case '8':
      $VM.$store.commit('changeNavbar', '8');
      router.replace({ path: '/enroll', query: { id: '1', type: 'home' } });
      break;
    case '9':
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    case '10':
      $VM.$notify({
        title: '提示',
        message: '正在建设中。',
        duration: 3000
      });
      break;
    default:
      console.log('no ');
  }
  console.log(index);
};
</script>
<style lang="scss">
.navbar-page {
  width: 100%;

  //! 改变高度
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
    height: 65px;
  }

  //! 改变背景颜色
  .el-menu-item:hover {
    background-color: rgb(75, 74, 74) !important;
  }

  .el-carousel__item h3 {
    color: white;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: lightblue;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: pink;
  }
  .message {
    height: 60px;
    background-color: white;
  }
  .message-icon {
    display: inline-block;
    margin-left: 20px;
    vertical-align: bottom;
    width: 25px;
    height: 25px;
  }
  .message-text {
    display: inline-block;
    vertical-align: bottom;
    width: 40%;
    height: 20px;
    margin-left: 15px;
    font-size: 15px;
    background-color: lightgrey;
  }
  .project {
    height: 400px;
    background-color: white;
  }
  .project-icon {
    display: inline-block;
    margin-left: 20px;
    vertical-align: bottom;
    width: 25px;
    height: 25px;
  }
  .project-text {
    display: inline-block;
    vertical-align: bottom;
    width: 40%;
    height: 20px;
    margin-left: 15px;
    color: darkblue;
    font-size: 20px;
    font-weight: bolder;
  }
  .project-card {
    width: 100%;
    margin-top: 20px;
  }
  .tutor {
    height: 400px;
    background-color: white;
  }
  .tutor-icon {
    display: inline-block;
    margin-left: 20px;
    vertical-align: bottom;
    width: 25px;
    height: 25px;
  }
  .tutor-text {
    display: inline-block;
    vertical-align: bottom;
    width: 40%;
    height: 20px;
    margin-left: 15px;
    color: darkblue;
    font-size: 20px;
    font-weight: bolder;
  }
  .image {
    width: 100%;
    display: block;
  }

  .el-input__inner {
    border: 2px solid #1cefff !important;
    border-radius: 50px !important;
    border-top: 2px solid #1cefff !important;
    border-left: 2px solid #1cefff !important;
    border-right: 2px solid #1cefff !important;
    border-bottom: 1px solid #1cefff !important;
  }
  .el-menu-item i {
    color: #1cefff !important;
  }
}
</style>
