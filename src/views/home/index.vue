<template>
  <div>
    <Layout>
      <div class="home-page">
        <el-carousel trigger="click" height="300px">
          <el-carousel-item v-for="(item, index) in swiperList" :key="index">
            <img class="swiper-img" :src="item.img" alt="" />
          </el-carousel-item>
        </el-carousel>

        <div class="intur">
          <div :style="{ textAlign: 'left', fontWeight: 'bold', fontSize: '30px' }">赛事介绍</div>
          <p class="intur-text">
            立直麻将高校联赛起源于上海高校日本麻将团体赛（简称上高赛、高校杯），于2004年由上海财经大学与复旦大学携手创办。从第一届比赛以来，为立直麻将的推广和交流做出了重要的
            贡献。本赛事将继承传统，提供一个能体现竞技麻将精神的平台，继续为各校爱好者提供良好的交流平台，促进友好关系。
            <br style="margin: 10px; height: 50px" />
            <span :style="{ display: 'block' }"> &nbsp; </span>
            本届为该赛事第四届比赛，自第一届起，就吸引了全国各地师生组织和日麻爱好者的注意。虽因受政策，疫情和能力问题，没法做到天麻动漫里面真正的全国性规模和线下模式，但会
            寻求契机慢慢发展，将这一系列比赛努力办下去，也希望可以得到圈内更多的理解，认可和支持。
          </p>
          <div :style="{ textAlign: 'left' }">
            <el-button plain type="primary" @click="goDetail">了解我们<i class="el-icon-d-arrow-right"></i></el-button>
          </div>

          <div class="intur-content">
            <!-- <img
                class="intur-content-img"
                src="@/assets/images/us_left_arrow.png"
                alt=""
              /> -->
            <el-carousel :interval="4000" type="card" height="240px" width="480px">
              <el-carousel-item v-for="(item, index) in inturList" :key="index" :label="`${item.text}`">
                <img class="intur-content-img" @click.prevent="goS(index)" :src="item.img" alt="" />
                <div>123</div>
              </el-carousel-item>
            </el-carousel>
            <!-- <img
                class="intur-content-img"
                src="@/assets/images/us_left_arrow.png"
                alt=""
              /> -->
          </div>
        </div>

        <!-- <div class="com-img">
          <img src="../../assets/images/home-img.png" alt="" />
          <div>
            <div class="com-title">全国高校 参赛学校</div>
            <div>
              全国高校赛，历届吸引了众多高校学生、立直爱好者 、社团、组织前来报名参赛。
            </div>
            <img src="../../assets/images//home-table.png" alt="" />
          </div>
        </div> -->
        <img
          :style="{ width: '100%', display: 'block' }"
          @click="goDetail"
          src="../../assets/images/home1.png"
          alt=""
        />
        <img
          :style="{ width: '100%', display: 'block', cursor: 'pointer' }"
          @click="goDetail"
          src="../../assets/images/home.png"
          alt=""
        />

        <div :style="{ position: 'relative' }">
          <img
            :style="{ width: '100%', display: 'block' }"
            @click="goDetail"
            src="../../assets/images/home-z.png"
            alt=""
          />
          <div class="info" @click="goAdmin">
            <img
              class="info-img"
              :style="{ width: '200px', height: '40px', display: 'block' }"
              @click="goDetail"
              src="../../assets/images/d_home-right.png"
              alt=""
            />
            <div class="info-text">赛事管理</div>
          </div>
        </div>
        <!-- <div class="info">
          <div class="info-title">赛事管理</div>
          <div class="project-card" @click="goTutor">
            <el-row :style="{ display: 'flex', justifyContent: 'center' }">
              <el-col :span="0.5" style="margin-left: 2%; margin-top: 100px">
                <img class="info_arrow" src="@/assets/images/manage_left_arrow.png" />
              </el-col>
              <el-col
                :span="4"
                v-for="(o, index) in 4"
                :key="index"
                :offset="index > 0 ? 2 : 0"
                style="margin-left: 4%"
              >
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    @click="goDetail"
                    src="../../assets/images/info.png"
                    class="image"
                  />
                  <div style="padding: 14px; font-size: 10px">
                    <span>天凤小姐姐和雀神小姐姐开始了麻将桌上全新的博弈~出处。</span>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="0.5" style="margin-left: 3.5%; margin-top: 100px">
                <img class="info_arrow" src="@/assets/images/manage_right_arrow.png" />
              </el-col>
            </el-row>
          </div>
        </div> -->
      </div>
    </Layout>
    <!-- <div>8998---{{ homePageData?.size }}</div> -->
  </div>
</template>

<script setup>
// eslint-disable-next-line prettier/prettier
import Layout from '../../components/Layout/index.vue';
import inturList1 from '../../components/Layout/index.vue';
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
import { CompetitionCaseApi } from '../../services/portal-svc';

const useVM = () => {
  const vm = getCurrentInstance();
  if (!vm) throw new Error('must be called in setup');
  return vm.proxy;
};
const $VM = useVM();

const inturList = ref([
  { img: require('@/assets/images/A1.jpg'), text: '第一届' },
  { img: require('@/assets/images/A2.jpg'), text: '第二届' },
  { img: require('@/assets/images/A3.jpg'), text: '第三届' }
]);

const swiperList = ref([
  { img: require('@/assets/temp/swiper1.jpg'), text: '1' },
  { img: require('@/assets/temp/swiper2.jpg'), text: '1' },
  { img: require('@/assets/temp/swiper3.jpg'), text: '1' },
  { img: require('@/assets/temp/swiper4.jpg'), text: '1' }
]);

const homePageData = ref();

const initPageData = async () => {
  const res = await CompetitionCaseApi.join_room({
    roomId: 1
  });

  homePageData.value = res.body;
  console.log(res, 'res', homePageData.value);
};

onMounted(() => {
  console.log('init');
  initPageData();
});

const goS = (index) => {
  console.log(index);
  if (index == 0) {
    window.open('https://shimo.im/docs/HG8w69hYHHwt6YVd/read');
  } else if (index == 1) {
    window.open('https://docs.qq.com/doc/DQlZZTEVFT2hJZWda');
  } else if (index == 2) {
    window.open('https://docs.qq.com/sheet/DYkd2dWpOakZZdXVN?tab=knq1lp');
  }
};

const goDetail = () => {
  console.log('getCurrentInstance().proxy', getCurrentInstance());
  // $VM.$notify({
  //   title: '提示',
  //   message: '正在建设中。',
  //   duration: 3000
  // });
  $VM.$store.commit('changeNavbar', '5');
  $VM.$router.replace({ path: '/exp/school', query: { id: '1', type: 'home' } });
};

const goTutor = () => {
  console.log('');
  // $VM.$notify({
  //   title: '提示',
  //   message: '正在建设中。',
  //   duration: 3000
  // });
  $VM.$router.replace({ path: '/exp/school', query: { id: '1', type: 'home' } });
};

const goAdmin = () => {
  window.location.href = 'http://129.211.219.138:8081';
};
</script>

<style rel="stylesheet/scss" lang="scss">
.home {
  width: 100%;
  min-width: 1250px;
}
.el-carousel__item {
  min-width: 480px;
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
  margin-bottom: 20px;
}

.info_arrow {
  width: 30px;
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

.swiper-img {
  object-fit: fill;
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

.info {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 100px;
  right: 150px;
  cursor: pointer;
  &-img {
  }

  &-text {
    /* width: 196px; */
    font-size: 30px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 26px;
    margin-left: 10px;
  }
}

.info-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

.intur-text {
  font-size: 15px;
  text-align: left;
}
.intur-content-img {
  min-width: 480px;
  width: 100%;
  height: 100%;
}

.intur-content {
  margin: 30px 0px;
  .is-active > button {
    background-color: #1cefff !important;
  }
}

.com-img {
  height: 560px;
  background-color: #04274a;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .com-title {
    font-family: PingFangSC;
    font-weight: 600;
    color: #ffffff;
  }
}
</style>
