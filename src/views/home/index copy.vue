<template>
  <div>
    <Layout>
      <div class="home">
        <div class="block">
          <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="message">
          <div style="height: 10px"></div>
          <div :style="{ textAlign: 'left', margin: '20px 0px' }">
            <span class="message-icon">
              <img src="../../assets/images/horn.png" width="25px" height="25px" />
            </span>
            <div class="text-container">
              <span class="message-text">
                消息公告:恭喜张三三获得计算机软件大赛一等奖
              </span>
            </div>
          </div>
        </div>
        <div class="project">
          <div :style="{ textAlign: 'left', display: 'flex', alignItems: 'center' }">
            <span class="project-icon">
              <img src="../../assets/images/two.png" width="30px" height="30px" />
            </span>
            <span class="project-text"> 优秀项目 </span>
            <span style="margin-left: 83%; font-size: 15px; color: blue">
              <a href="">更多>></a>
            </span>
          </div>
          <div class="project-card">
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
                  <img src="../../assets/images/img.png" class="image" />
                  <div style="padding: 14px" @click="goExp">
                    <span style="font-size: 13px; font-weight: bolder; color: darkblue"
                      >基于车联网的自动红绿灯控制系统</span
                    >
                    <span style="font-size: 8px"
                      >系统采用车联网V2I通讯模式，利用V2I通讯协议，实现汽车与交通信号之间.....</span
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
        <div class="tutor">
          <div :style="{ textAlign: 'left', display: 'flex', alignItems: 'center' }">
            <span class="tutor-icon">
              <img src="../../assets/images/three.png" width="30px" height="30px" />
            </span>
            <span class="tutor-text"> 优秀导师 </span>
          </div>
          <div>
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
                    <img src="../../assets/images/tutor.png" class="image" />
                    <div style="padding: 14px">
                      <span
                        style="
                          font-size: 13px;
                          font-weight: bolder;
                          color: darkblue;
                          text-align: center;
                        "
                        >李老师</span
                      >
                      <span style="margin-left: 40px; font-size: 8px"
                        >经验丰富，和蔼可亲</span
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
      </div>
    </Layout>
    <div>8998</div>
  </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
export default {
  name: "home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "请输入关键字",
    };
  },
  mounted(e) {
    console.log(e);
  },
  computed: {
    roles() {
      return this.$store.getters.userInfo.roles;
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    goExp() {
      this.$router.push({ path: "/exp/list" });
      // this.$router.push({ path: "/exp/detail" });
    },
    goTutor() {
      this.$router.push({ path: "/exp/tutor" });
    },
  },
  components: {
    Layout,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
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

.text-container {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  border-radius: 5px;
  background-color: lightgrey;
}

.message-text {
  vertical-align: bottom;
  width: 40%;
  height: 20px;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 10px;
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
  margin-bottom: 20px;
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
</style>
