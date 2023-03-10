<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#FF0000"
      text-color="#fff"
      background-color="black"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <img
          src="./image/icon.png"
          style="margin-top: -5px; width: 120px; height: 55px"
        />
      </el-menu-item>
      <!-- <el-menu-item
        index="2"
        style="color: darkblue; font-weight: bolder; font-size: 18px"
      >
        智慧管理实训平台
      </el-menu-item> -->
      <el-menu-item index="3">首页</el-menu-item>
      <el-menu-item index="4">赛事介绍</el-menu-item>
      <el-menu-item index="5">参赛学校</el-menu-item>
      <el-menu-item index="6">积分排行</el-menu-item>
      <el-menu-item index="7">比赛历程</el-menu-item>
      <el-menu-item index="8">报名系统</el-menu-item>
      <el-menu-item index="9">赛事管理</el-menu-item>
      <el-menu-item index="8">联系我们</el-menu-item>
      <el-menu-item index="9">
        <el-input
          :style="{ marginLeft: '100px' }"
          placeholder="请输入内容"
          v-model="inputValue"
          clearable
          suffix-icon="el-icon-search"
        >
        </el-input>
      </el-menu-item>
      <!-- <el-menu-item index="10">
        <a href="" style="color: blue">登录</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a
          href=""
          style="color: red"
          >注册</a
        >
      </el-menu-item> -->
    </el-menu>

    <el-carousel trigger="click" height="300px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img class="swiper-img" src="./image/swiper.png" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="intur">
      <div :style="{ textAlign: 'left', fontWeight: 'bold' }">赛事介绍</div>
      <p>
        麻将，是中国最最最受欢迎的卡牌游戏，历史十分悠久，打法简单，变化无穷，非常有趣。
        2O世纪初，麻将被美国商人JOSEPH P.BABCOCK介绍到西方，从此，麻将成为风靡世界的
        一款来自古老东方的神秘游戏。这是由青红皂白出品、艺术家PNK设计的一款颜值爆表的麻
        将，艺术家用冷淡的线条和撩拨的色彩勾勒出这套史上最为矫情的麻将，为您的享乐之旅增
        添某种奇异的上流体验。
      </p>
      <div :style="{ textAlign: 'left' }">
        <el-button plain type="primary" @click="goDetail"
          >了解我们<i class="el-icon-d-arrow-right"></i
        ></el-button>
      </div>

      <img src="./image/uTools_1676357401715.png" alt="" />
    </div>
    <img src="./image/11111.png" alt="" />

    <div class="info">
      <div class="info-title">赛事资讯</div>

      <div class="project-card" @click="goTutor">
        <el-row>
          <el-col :span="0.5" style="margin-left: 2%; margin-top: 100px">
            <img src="../../assets/images/arrow-left.png" />
          </el-col>
          <el-col
            :span="4"
            v-for="(o, index) in 4"
            :key="o"
            :offset="index > 0 ? 2 : 0"
            style="margin-left: 4%"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img @click="goDetail" src="./image/info.png" class="image" />
              <div style="padding: 14px">
                <span style="margin-left: 40px; font-size: 8px"
                  >天凤小姐姐和雀神小姐姐开始了麻将桌上全新的博弈~出处。</span
                >
              </div>
            </el-card>
          </el-col>
          <el-col :span="0.5" style="margin-left: 3.5%; margin-top: 100px">
            <img src="../../assets/images/arrow-right.png" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import { vuex } from "@/";

export default {
  components: {},
  data() {
    return {
      inputValue: "",
      activeIndex: "",
      searchInput: "",
      category: [],
    };
  },
  computed: {
    // userInfo() {
    //   return vuex(this.$store.getters.userInfo);
    // },
  },
  methods: {
    goDetail() {
      this.$notify({
        title: "提示",
        message: "正在建设中。",
        duration: 0,
      });
    },
    changeIndex(index) {
      console.log(index);
    },
    onSearch(index) {
      console.log(index);
    },
    toPage(index) {
      console.log(index);
    },
    logout(index) {
      console.log(index);
    },
    handleSelect(index) {
      switch (index) {
        case "1":
          this.$router.push({ path: "/home" });
          break;
        case "2":
          this.$router.push({ path: "/home" });
          break;
        case "3":
          this.$router.push({ path: "/home" });
          break;
        default:
          console.log("no ");
      }
      console.log(index);
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
.home {
  width: 100%;
  min-width: 1250px;
}
.el-carousel__item h3 {
  color: white;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
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
  /* border: 2px solid #ffea00; */
}

.swiper-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.intur {
  margin: 50px 200px 0px 200px;

  > img {
    margin-top: 20px;
    width: 100%;
  }
}

.info-title {
  font-weight: bold;
  margin-top: 20px;
}
</style>
