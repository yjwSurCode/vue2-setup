<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<template>
  <Layout>
    <Crumbs />
    <div class="enroll-page">
      <el-form class="form-content" :model="form" ref="formRef" label-position="top" :rules="rules" label-width="80px">
        <div class="form-title">
          <div>第四届全国高校立直麻将网络团体赛参赛</div>
          <div>请根据报名条件酌情考虑自己学校有无参赛能力，恶意填写调查表将会被标记。</div>
          <div>
            <el-button type="primary" plain><i class="el-icon-time"></i>03-01 14:00开始</el-button>
          </div>
        </div>

        <div class="form-item">
          <el-form-item label="选择填写报名内容" required prop="isLeader">
            <div class="form-discribe">是否作为领队</div>
            <el-radio-group v-model="form.isLeader">
              <el-radio :label="1">领队信息</el-radio>
              <el-radio :label="0">队员信息</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="学校名称" required prop="school">
            <div class="form-discribe">请填写参赛学校全称</div>
            <el-input v-model="form.school" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="是否参加第四届比赛" required>
            <div class="form-discribe">不参扣将会直接取消报名预留资格</div>
            <el-radio-group v-model="form.isParticipate">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <div class="form-item" v-if="rules2.groupNickname">
          <el-form-item label="领队昵称" required prop="groupNickname">
            <div class="form-discribe">用于备注，交流时的称呼，请及时更改群昵称。</div>
            <el-input v-model="form.groupNickname" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.coltNickname">
          <el-form-item label="队员昵称" required prop="coltNickname">
            <div class="form-discribe">用于备注，交流时的称呼。</div>
            <el-input v-model="form.coltNickname" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.coltNumber">
          <el-form-item label="队员号码" required prop="coltNumber">
            <div class="form-discribe">请选择队员号码</div>
            <el-select v-model="form.coltNumber" placeholder="请选择">
              <el-option label="1" value="1">1号</el-option>
              <el-option label="2" value="2">2号</el-option>
              <el-option label="3" value="3">3号</el-option>
              <el-option label="4" value="4">4号</el-option>
              <el-option label="5" value="5">5号</el-option>
              <el-option label="6" value="6">6号</el-option>
              <el-option label="7" value="7">7号</el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="QQ" required prop="qq">
            <div class="form-discribe">QQ号码</div>
            <el-input v-model="form.qq" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.association">
          <el-form-item label="参赛组织群号" required prop="association">
            <div class="form-discribe">所参加比赛时社团组织群号</div>
            <el-input v-model="form.association" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.isPublic">
          <el-form-item label="是否愿意公开群号" required prop="isPublic">
            <div class="form-discribe">官方将会帮忙宣传</div>
            <el-radio-group v-model="form.isPublic">
              <el-radio :label="1">愿意</el-radio>
              <el-radio :label="0">不愿意</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.uid">
          <el-form-item label="雀魂UID" required prop="uid">
            <div class="form-discribe">请填写UID</div>
            <el-input v-model="form.uid" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="雀魂昵称" required prop="qhNickname">
            <div class="form-discribe">请填写雀魂昵称</div>
            <el-input v-model="form.qhNickname" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="雀魂段位" required prop="qhSegment">
            <div class="form-discribe">请选择雀魂段位</div>
            <el-select v-model="form.qhSegment" placeholder="请选择">
              <el-option label="无" value="无">无</el-option>
              <el-option label="雀豪以下" value="雀豪以下">雀豪以下</el-option>
              <el-option label="雀豪1" value="雀豪1">雀豪1</el-option>
              <el-option label="雀豪2" value="雀豪2">雀豪2</el-option>
              <el-option label="雀豪3" value="雀豪3">雀豪3</el-option>
              <el-option label="雀圣1" value="雀圣1">雀圣1</el-option>
              <el-option label="雀圣2" value="雀圣2">雀圣2</el-option>
              <el-option label="雀圣3" value="雀圣3">雀圣3</el-option>
              <el-option label="魂天" value="魂天">魂天</el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="天凤昵称" required prop="tfNickname">
            <div class="form-discribe">请填写天凤昵称</div>
            <el-input v-model="form.tfNickname" placeholder="请输入"></el-input>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="天凤段位" required prop="tfSegment">
            <div class="form-discribe">请选择天凤段位</div>
            <el-select v-model="form.tfSegment" placeholder="请选择">
              <el-option label="无" value="无">无</el-option>
              <el-option label="四段以下" value="四段以下">四段以下</el-option>
              <el-option label="四段" value="四段">四段</el-option>
              <el-option label="五段" value="五段">五段</el-option>
              <el-option label="六段" value="六段">六段</el-option>
              <el-option label="七段" value="七段">七段</el-option>
              <el-option label="八段" value="八段">八段</el-option>
              <el-option label="九段" value="九段">九段</el-option>
              <el-option label="十段" value="十段">十段</el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="在籍状态" required prop="stuStatus">
            <div class="form-discribe">请选择在籍状态</div>
            <!-- {{ scope.row.stuStatus ==1 ?'在校生':'毕业生' }} -->
            <el-select v-model="form.stuStatus" placeholder="请选择">
              <el-option label="在校生" :value="1">在校生</el-option>
              <el-option label="毕业生" :value="0">毕业生</el-option>
            </el-select>
          </el-form-item>
        </div>

        <div class="form-item">
          <el-form-item label="在校证明" required prop="certificateImgs">
            <div class="form-discribe-p">
              {{
                !form.isLeader ? '请已确定的队员' : '请已确定的领队'
              }}附上自己的在校信息，在读证明，在校证明，学生证等。并且用空白
              纸张书写上自己昵称，一并拍照上传。请勿遮挡姓名，有效期，年级和学校名称等；
            </div>
            <!-- :on-preview="handlePictureCardPreview"
              :on-change="handleChange"
              
               :on-success="handleAvatarSuccess"
                -->
            <el-upload
              accept="jpg"
              action=""
              list-type="picture-card"
              :before-upload="beforeAvatarUpload"
              :http-request="handleUpload"
              :on-change="handleChange"
              :on-progress="handleProgress"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
              :file-list="fileList"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </div>

        <div class="form-item" v-if="rules2.signImg">
          <el-form-item label="参赛承诺">
            <div class="form-discribe-p">
              本人已与学校组织及参赛选手进行过沟通，可作为领队代表学校组织及选手参加第四届全国高校立直麻
              将网络团体赛，承诺赛程期间一切遵循主办方的赛制规定，共同维护比赛环境；如发生争议，本人将会
              第一时间与主办方进行沟通协商，等待主办方裁决和调和，不私下在本校以外的公开场合，社交平台发
              表对其他参赛学校或个人的负面舆论，攻击言语，以及可能影响比赛正常进行的行为，并约束本校参赛
              组织及人员同样遵守；如违背参赛承诺，一切由本人及所代表的学校组织承担责任，接受主办方的惩罚 措施。
              (签名请与在校证明上的姓名一致)
            </div>

            <el-card shadow="hover">
              <div class="card-title" @click="centerDialogVisible = true">
                点击签名<span :style="{ color: 'grey' }">{{ form.signImg ? '（已上传）' : '（未上传）' }}</span>
              </div>
              <div class="card-text">签名将被记录为图片，可能被复制(?)</div>
            </el-card>
          </el-form-item>
          <!-- <div @click="router.go(0)" >99999</div> -->
        </div>

        <!-- //!dialog -->
        <el-dialog title="绘制签名" :visible.sync="centerDialogVisible" width="60%" center>
          <vue-esign
            ref="esignRef"
            :width="1600"
            :height="800"
            :isCrop="isCrop"
            :lineWidth="lineWidth"
            :lineColor="lineColor"
            :bgColor.sync="bgColor"
          />
          <span slot="footer" class="dialog-footer">
            <el-button @click="handleReset">清空</el-button>
            <el-button type="primary" @click="handleGenerate">确 定</el-button>
          </span>
        </el-dialog>

        <el-form-item>
          <el-button type="primary" plain="" @click="submitForm('form')"
            >&nbsp;&nbsp;&nbsp;提交&nbsp;&nbsp;&nbsp;</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <!-- //  -->

    <SimpleLogin v-if="dialogVisible" @FatherClick="FatherClick"></SimpleLogin>
  </Layout>
</template>
<script setup>
import Layout from '@/components/Layout/index.vue';
import Crumbs from '@/components/Crumbs/index.vue';
import SimpleLogin from '@/components/Simple-login/index.vue';
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
  onMounted,
  watchEffect,
  getCurrentInstance,
  Directive
} from 'vue';
import { mapState } from 'vuex';

import { CompetitionCaseApi } from '../../services/portal-svc';

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

onMounted(() => {
  $VM.$store.commit('changeNavbar', '8');
  console.log('$VM1', $VM, router.currentRoute.query, $VM.$store.state.navbarSelect);
});

// const dialogVisible = computed(() => !localStorage.getItem("userAccount"));
const dialogVisible = ref(!localStorage.getItem('userAccount'));

const FatherClick = () => {
  console.log('fffff', localStorage.getItem('userAccount'));
  // 隐藏
  dialogVisible.value = false;
};

let centerDialogVisible = ref(false);

//! 签名
let esignRef = ref(null);
let lineWidth = ref(6);
let lineColor = ref('#000000');
let bgColor = ref('#f5f5f5');
let resultImg = ref('');
let isCrop = ref(false);

const handleReset = () => {
  esignRef.value.reset();
  centerDialogVisible.value = false;
};

const handleGenerate = () => {
  console.log(esignRef.value, 'esignRef');
  esignRef.value
    .generate()
    .then((res) => {
      console.log(res);
      form.signImg = res;
      centerDialogVisible.value = false;
    })
    .catch((err) => {
      alert(err); // 画布没有签字时会执行这里 'Not Signned'
    });
};

// 附：base64转化成图片
// base64ImgtoFile(dataurl, fileName='file') {
//   const arr = dataurl.split(",");
//   const mime = arr[0].match(/:(.*?);/)[1];
//   const suffix = mime.split('/')[1]
//   const bstr = atob(arr[1]);
//   let n = bstr.length;
//   var u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], `${fileName}.${suffix}`, { type: mime });
// }

//! 上传照片
let dialogImageUrl = ref('');
let img_dialogVisible = ref(false);

const beforeAvatarUpload = (file) => {
  const isJPG_PNG = (file.type === 'image/jpeg') | (file.type === 'image/png');
  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isJPG_PNG) {
    alert('上传头像图片只能是 JPG or PNG 格式!');
    return false;
  }
  if (!isLt2M) {
    alert('上传头像图片大小不能超过 2MB!');
    return false;
  }
  return isJPG_PNG && isLt2M;
};
const handleRemove = (file, fileList) => {
  console.log(file, fileList);

  form.certificateImgs = [];
};
const handleUpload = (file, fileList) => {
  console.log('handleUpload', file, fileList);
};
const handleProgress = (file, fileList) => {
  console.log('handleChange', file, fileList);
};
const handleSuccess = (file, fileList) => {
  console.log('handleSuccess', file, fileList);
};

const handleChange = async (file, fileList) => {
  console.log('handleChange', file, fileList);
  const currentFileName = ref('图片');
  const res = await CompetitionCaseApi.file_upload({
    files: [fileList[fileList.length - 1]]
  }).then((e) => {
    console.log(e, 'result');

    if (e.code === 200) {
      setTimeout(() => {
        $VM.$message({
          message: `${file.name}上传成功`,
          type: 'success'
        });
      }, 500);
      form.certificateImgs.push(...e.body);
      // currentFileName.value = file.name;
    } else {
      //!  处理页面 上传样式
      $VM.$message({
        message: '上传失败',
        type: 'error'
      });
    }
  });
  // form.certificateImgs = fileList;
};

const handlePictureCardPreview = (file) => {
  console.log(file, 'file');
  // this.dialogImageUrl = file.url;
  // this.dialogVisible = true;
};

const fileList = ref();
//!表单验证
const formRef = ref(null);
const form = reactive({
  // 是否参加第四届比赛
  isParticipate: 0,
  // 学校
  school: '',
  // 领队昵称
  groupNickname: '',
  // qq
  qq: '',
  // 参赛组织群号
  association: '',
  // 是否公开
  isPublic: 0,
  // 是不是领队
  isLeader: 1,
  // 证明
  certificateImgs: [],
  // 签名
  signImg: '',
  //! 队员昵称
  coltNickname: '',
  //!3 队员号码
  coltNumber: '',
  //!雀魂昵称
  qhNickname: '',
  //!雀魂段位
  qhSegment: '',
  //! uid
  uid: '',
  //! 天凤昵称
  tfNickname: '',
  //! 天凤段位
  tfSegment: '',
  //! 状态
  stuStatus: ''
  //3 此用户身份账户
  // identityKey: ''
});

//! 这仅仅是提交的提示
const rules = ref({
  isLeader: [
    {
      required: false,
      message: '请选择是否领队',
      trigger: 'change'
    }
  ],
  qq: [{ required: false, message: '请填写QQ', trigger: 'change' }],
  isParticipate: [{ required: false, message: '请选择是否参加第四届比赛', trigger: 'change' }],
  isPublic: [{ required: false, message: '请选择是否公开群号', trigger: 'change' }],
  uid: [{ required: false, message: '请填写uid', trigger: 'change' }],
  association: [
    {
      required: false,
      message: '请填写所参加比赛时社团组织群号',
      trigger: 'change'
    }
  ],
  //bulr 会切换就触发
  coltNickname: [{ required: false, message: '请输入队员昵称', trigger: 'change' }],
  school: [{ required: true, message: '请输入学校昵称', trigger: 'change' }],
  qhNickname: [{ required: true, message: '请填写雀魂昵称', trigger: 'change' }],
  qhSegment: [{ required: true, message: '请选择雀魂段位', trigger: 'change' }],
  tfNickname: [{ required: true, message: '请填写天凤昵称', trigger: 'change' }],
  tfSegment: [{ required: true, message: '请选择天凤段位', trigger: 'change' }],
  stuStatus: [
    { required: true, message: '请选择在籍状态', trigger: 'change' }
    // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  certificateImgs: [{ required: true, message: '请上传学校证明', trigger: 'change' }],
  groupNickname: [{ required: true, message: '请填写领队昵称', trigger: 'change' }]
});

//! 只是显示和隐藏
const rules2 = ref({
  // 是否参加第四届比赛
  isParticipate: true,
  // 学校
  school: true,
  // 领队昵称
  groupNickname: true,
  // qq
  qq: true,
  // 参赛组织群号
  association: true,
  // 是否公开
  isPublic: true,
  // 是不是领队
  isLeader: true,
  // 证明
  certificateImgs: true,
  // 签名
  signImg: true,
  //! 队员昵称
  coltNickname: false,
  //! 队员号码
  coltNumber: false,
  //!雀魂昵称
  qhNickname: true,
  //!雀魂段位
  qhSegment: true,
  //! uid
  uid: true,
  //! 天凤昵称
  tfNickname: true,
  //! 天凤段位
  tfSegment: true,
  //! 状态
  stuStatus: true
});

watch(
  () => form.isLeader,
  (newV, oldV) => {
    console.log(newV, oldV, 'watch');
    if (newV === 0) {
      //!不是领队
      rules2.value = {
        // 是否参加第四届比赛
        isParticipate: false,
        // 是不是领队
        isLeader: false,
        // 领队昵称
        groupNickname: false,
        // 参赛组织群号
        association: false,
        // 签名
        signImg: false,
        // 是否公开
        isPublic: false,
        // 学校
        school: true,
        // qq
        qq: true,
        // 证明
        certificateImgs: true,
        //! 队员昵称
        coltNickname: true,
        //! 队员号码
        coltNumber: true,
        //!雀魂昵称
        qhNickname: true,
        //!雀魂段位
        qhSegment: true,
        //! uid
        uid: true,
        //! 天凤昵称
        tfNickname: true,
        //! 天凤段位
        tfSegment: true,
        //! 状态
        stuStatus: true
      };
    } else {
      // 是领队
      rules2.value = {
        //! 队员昵称
        coltNickname: false,
        //! 队员号码
        coltNumber: false,
        // 是否公开
        isPublic: true,
        // 是否参加第四届比赛
        isParticipate: true,
        // 学校
        school: true,
        // 领队昵称
        groupNickname: true,
        // qq
        qq: true,
        // 参赛组织群号
        association: true,
        // 是不是领队
        isLeader: true,
        // 证明
        certificateImgs: true,
        // 签名
        signImg: true,
        //!雀魂昵称
        qhNickname: true,
        //!雀魂段位
        qhSegment: true,
        //! uid
        uid: true,
        //! 天凤昵称
        tfNickname: true,
        //! 天凤段位
        tfSegment: true,
        //! 状态
        stuStatus: true
      };
    }
  }
);

const handleDropdown = (e) => {
  console.log(e);
};

const submitForm = (formName) => {
  console.log(formRef.value.model, formRef.value['formRef'], formRef.value, 'formRef.value[formName]', form);

  // $VM.$message({
  //   message: '暂时关闭',
  //   type: 'error'
  // });
  // return;

  if (rules2.value.isLeader == true && !form.signImg) {
    $VM.$message({
      message: '请手写签名',
      type: 'error'
    });
    return;
  }

  if (form.certificateImgs.length == 0) {
    $VM.$message({
      message: '请上传证明',
      type: 'error'
    });
    return;
  }

  formRef.value.validate((valid) => {
    if (valid) {
      console.log(form.certificateImgs, 'form.certificateImgs');
      //! 数组转字符串
      const param = { ...form, certificateImgs: form.certificateImgs.join(',') };
      console.log(param, 'param');
      // return;
      const res = CompetitionCaseApi.enroll(param).then((e) => {
        console.log('eeeee', e);
        if (e.value == '操作成功') {
          $VM.$message({
            message: '提交成功',
            type: 'success'
          });
          // router.push('enroll');
          setTimeout(() => {
            router.go(0);
          }, 1000);
          // handleRemove();
          // const obj = Object.assign(form, {
          //   // 是否参加第四届比赛
          //   isParticipate: 0,
          //   // 学校
          //   school: '',
          //   // 领队昵称
          //   groupNickname: '',
          //   // qq
          //   qq: '',
          //   // 参赛组织群号
          //   association: '',
          //   // 是否公开
          //   isPublic: 0,
          //   // 是不是领队
          //   isLeader: 1,
          //   // 证明
          //   certificateImgs: [],
          //   // 签名
          //   signImg: '',
          //   //! 队员昵称
          //   coltNickname: '',
          //   //!3 队员号码
          //   coltNumber: '',
          //   //!雀魂昵称
          //   qhNickname: '',
          //   //!雀魂段位
          //   qhSegment: '',
          //   //! uid
          //   uid: '',
          //   //! 天凤昵称
          //   tfNickname: '',
          //   //! 天凤段位
          //   tfSegment: '',
          //   //! 状态
          //   stuStatus: ''
          //   //3 此用户身份账户
          //   // identityKey: ''
          // });
        } else {
          $VM.$message({
            message: '提交失败,请尝试重新登录再提交',
            type: 'error',
            duration: 2000
          });
          localStorage.removeItem('userAccount');
          localStorage.removeItem('token');
          setTimeout(() => {
            router.go(0);
          }, 2000);
        }
      });

      // console.log(res, "result2");
    } else {
      console.log('error submit!!');
      return false;
    }
  });
};
</script>
<style lang="scss">
.enroll-page {
  background-color: #e6e6e6;
  margin: 10px 200px;
}
.form-content {
  background-color: #f5f5f5;

  .form-title {
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    text-align: left;

    & > :first-child {
      font-weight: bold;
      margin: 10px 0px;
      font-size: 20px;
    }
    & > :nth-child(2) {
      font-family: 'Courier New', Courier, monospace;
      margin: 10px 0px;
    }
  }

  .form-item {
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    .form-discribe {
      position: absolute;
      top: -30px;
      font-weight: 300;
      font-size: 10px;
    }
    .form-discribe-normal {
      line-height: 15px;
      font-weight: 300;
      font-size: 10px;
      position: absolute;
      top: -20px;
    }
    .form-discribe-p {
      line-height: 15px;
      font-weight: 300;
      font-size: 10px;
      margin-bottom: 20px;
    }

    .el-form-item {
      text-align: left;
      font-weight: bold;

      .el-form-item__label {
        color: black !important;
      }
    }
  }

  //签名
  .card-title {
    color: #507fa2;
    font-weight: bold;
    text-align: center;
  }
  .card-text {
    color: #c3c3c3;
    text-align: center;
    font-weight: 400;
  }
}
</style>
