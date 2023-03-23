<template>
  <div class="footer">
    <div class="footbottom">
      <div class="footbottom-content">
        <p>合作伙伴【商务合作】关于我们</p>
        Copyright@2019-209917 zhiqu.com ALL Rights Reserved微屏软件科技(上海)有限公司
        <p></p>
        <p>
          禁止不良竞技，拒绝非法赌博。注意自我保护，谨防上当受骗。健康博弈益赌，沉迷游戏伤身。合理安排时间，享受健康生活。
        </p>
        <p>联系电话：021-53522130 公司地址：上海市浦东新区 五星路676弄17号楼</p>
        <p>京1CP备16233805号-1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created(e) {
    console.log(e);
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.footer {
  clear: both;
  width: 100%;
  background: #282a2e;

  .footbottom {
    padding-top: 10px;
    height: 100%;
    width: 100%;
    background: #282a2e;
    color: #ffffff;
    font-size: 14px;
    background: url('@/assets/images/footer_bgc.jpg');
    background-position: center;

    p {
      margin: 1px;
    }

    .footbottom-content {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
