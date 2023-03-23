<template>
  <div class="app-wrapper">
    <Navbar class="header-layout" :isAdmin="isAdmin"></Navbar>
    <div class="slot-content">
      <slot :isAdmin="isAdmin ? isAdmin : false"></slot>
    </div>
    <Footer class="footer-layout" />
    {{ userInfo }}
  </div>
</template>

<script>
import Navbar from './navbar.vue';
import Footer from './footer.vue';

export default {
  name: 'layout',
  props: ['isAdmin'],
  components: {
    Navbar,
    Footer
  },
  computed: {
    userInfo() {
      return this.$store.getters.userInfo;
    }
  },
  method: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.app-wrapper {
  height: 100vh;
  min-width: 1200px;
}
//! 设置高度
.header-layout {
  height: 65px;
}

.slot-content {
  /* footer+header 180 + 65  如果header占布局就只减header高度65 */
  min-height: calc(100% - 65px);
  box-sizing: border-box;
  //!控制度 footer narbar 之间的
  padding-bottom: 65px+ 180 * 0.6px;
  background: #f5f5f5;
}

.footer-layout {
  //! 里面子元素设置padding
  max-height: 180px;
  height: 180px;
  margin-top: -180px;
  background: #f5f5f5;
  text-align: center;
  font-size: 16px;
  color: #333333;
}
</style>
