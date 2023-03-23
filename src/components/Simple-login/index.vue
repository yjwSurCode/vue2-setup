<template>
  <div class="breadcrumb-com">
    <el-dialog title="请登录" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.pwd" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
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

import { CompetitionCaseApi } from '../../services/portal-svc';

// withDefaults(
//   defineProps<{
//     dialogVisible: boolean;
//   }>(),
//   {
//     dialogVisible: true,
//   }
// );

const useVM = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('must be called in setup');
  return vm.proxy;
};
const $VM = useVM();

console.log('$VM', $VM);

const dialogFormVisible = computed(() => {
  //父组件改变props 不会触发
  console.log($VM.$props, 'props');

  return true;
});

// watch([$VM.$props.dialogVisible], (newV, oldV) => {
//   console.log(newV, oldV, "$VM.$props.dialogVisible");
// });

watchEffect(() => {
  console.log(getCurrentInstance()?.proxy.$props, 'getCurrentInstance()?.proxy.$props.dialogVisible');
});

watch(
  () => getCurrentInstance()?.proxy.$props,
  (newV, oldV) => {
    console.log(newV, oldV, '$VM.$props.dialogVisible');
  },
  { immediate: true, deep: true }
);

const formLabelWidth = '120px';

const form = ref({ name: '', pwd: '' });

const cancle = () => {
  console.log('1');
  $VM.$store.commit('changeNavbar', '3');
  $VM.$router.replace({ path: '/', query: { id: '1', type: 'home' } });
};

const confirm = async () => {
  console.log('1');
  const res = await CompetitionCaseApi.login_svc({
    username: form.value.name,
    password: form.value.pwd
  }).then((e) => {
    console.log(e, 'result');

    if (e.code == '200') {
      $VM.$message({
        message: '登录成功',
        type: 'success'
      });

      localStorage.setItem('token', e.body.token);
      //触发父组件方法
      localStorage.setItem('userAccount', form.value.name);

      $VM.$emit('FatherClick');
    } else {
      $VM.$message({
        message: '登录失败',
        type: 'error'
      });
    }
  });
};
</script>
<style lang="scss">
//! 面包屑的样式
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
