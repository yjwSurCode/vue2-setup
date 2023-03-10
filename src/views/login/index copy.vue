<template>
    <div>
        <el-card class="login-form-layout">
            <h2 class="login-title color-main">教师系统管理平台</h2>
            <el-tabs v-model="formActiveTab" @tab-click="formSwitchTab">
                <el-tab-pane label="我是校外导师"></el-tab-pane>
                <el-tab-pane label="我是校内导师"></el-tab-pane>
                <el-tab-pane label="我是服务机构"></el-tab-pane>
            </el-tabs>
            <div class="login-container">
                <div class="ml60">
                    <el-form
                        autoComplete="on"
                        :model="loginForm"
                        :rules="loginRules"
                        ref="loginForm"
                        label-position="left"
                    >
                        <el-form-item label="账号:" prop="username">
                            <el-input
                                name="username"
                                type="text"
                                v-model="loginForm.username"
                                autoComplete="on"
                                placeholder="请输入用户名或者工号"
                            />
                        </el-form-item>
                        <el-form-item label="密码:" prop="password">
                            <el-input
                                name="password"
                                :type="pwdType"
                                @keyup.enter.native="handleLogin"
                                v-model="loginForm.password"
                                autoComplete="on"
                                placeholder="请输入密码"
                            >
                            </el-input>
                        </el-form-item>
                        <el-form-item label="验证:" prop="code">
                            <div class="fsb" style="width: 220px">
                                <div style="width: 120px">
                                    <el-input name="code" v-model="loginForm.code" placeholder="验证码"> </el-input>
                                </div>
                                <!-- <div class="flex1"></div> -->
                                <div class="link" :underline="false" @click="refreshCode" style="height: 40px">
                                    <Sverify :identifyCode="identifyCode" :contentHeight="40" :contentWidth="80" />
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 60px; text-align: center">
                            <el-button
                                type="primary"
                                style="width: 240px"
                                :loading="loading"
                                @click.native.prevent="handleLogin"
                            >
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="register-container">
                <div class="f0" style="float: right">
                    <span class="span3">还没注册?</span>
                    <el-link class="ml10" :underline="false" type="success">注册</el-link>
                </div>
            </div>
        </el-card>
        <img :src="login_center_bg" class="login-center-layout" />
    </div>
</template>

<script>
import { validateUsername, validatePass, validateSlider, validateNotNull } from '@/utils/validate';
import login_center_bg from '@/assets/images/login_center_bg.png';
import { loginWithPwd } from '../../request/system';
import { EXT_TEACHER, INT_TEACHER, ORGANIZATION, STUDENT } from '@/constance/roles';
import Sverify from '@/components/verify/index';

export default {
    name: 'login',
    components: {
        Sverify,
    },
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
                sliderHasPassed: false,
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePass }],
                sliderHasPassed: [{ required: true, trigger: 'blur', validator: validateSlider }],
                code: [{ required: true, trigger: 'blur', validator: validateNotNull }],
            },
            showPuzzle: false,
            loading: false,
            pwdType: 'password',
            login_center_bg,
            dialogVisible: false,
            supportDialogVisible: false,

            // constance
            EXT_TEACHER,
            INT_TEACHER,
            ORGANIZATION,
            STUDENT,

            // config
            formActiveTab: '2',
            identifyCode: '',
            identifyCodes: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd'],
        };
    },
    mounted() {
        this.$store.dispatch('initUserDataFromCookie').then((res) => this.$router.push({ path: '/home' }));
        this.refreshCode();
    },
    methods: {
        // 生成随机数
        randomNum(min, max) {
            max = max + 1;
            return Math.floor(Math.random() * (max - min) + min);
        },
        // 更新验证码
        refreshCode() {
            this.identifyCode = '';
            this.makeCode(this.identifyCodes, 4);
            console.log('当前验证码:', this.identifyCode);
        },
        // 随机生成验证码字符串
        makeCode(data, len) {
            console.log('data, len:', data, len);
            for (let i = 0; i < len; i++) {
                this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length - 1)];
            }
        },
        handleVerify() {
            this.showPuzzle = true;
        },
        verifySuccess() {
            this.showPuzzle = false;
            this.loginForm.sliderHasPassed = true;
            this.$message({
                showClose: true,
                message: '验证通过',
                type: 'success',
            });
        },
        verifyFail() {
            this.showPuzzle = false;
            this.$message({
                showClose: true,
                message: '验证失败',
                type: 'error',
            });
        },
        showPwd() {
            if (this.pwdType === 'password') {
                this.pwdType = '';
            } else {
                this.pwdType = 'password';
            }
        },
        formSwitchTab(row) {
            if (this.formActiveTab * 1 == row.index * 1) return;

            this.formActiveTab = row.index;
            this.loginForm = {
                username: '',
                password: '',
                code: '',
            };
            // this.$refs.loginForm.resetFields()
            // this.$forceUpdate()
        },
        handleLogin() {
            let type;
            if (this.formActiveTab == '0' || this.formActiveTab == 0) {
                type = EXT_TEACHER;
            } else if (this.formActiveTab == '1' || this.formActiveTab == 1) {
                type = INT_TEACHER;
            } else if (this.formActiveTab == '2' || this.formActiveTab == 2) {
                type = ORGANIZATION;
            }
            this.loading = true;
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    loginWithPwd(this.loginForm.username, this.loginForm.password, type)
                        .then((res) => {
                            console.log(res);
                            const {
                                nickname,
                                realName,
                                username,
                                lastLoginTime,
                                isDisabled,
                                avatar,
                                mail,
                                token,
                                roles,
                                id,
                            } = res.data;
                            this.$store.dispatch('initUserInfo', {
                                nickname,
                                realName,
                                username,
                                isDisabled,
                                avatar,
                                lastLoginTime,
                                mail,
                                roles,
                                id,
                            });
                            this.$store.dispatch('initToken', token);

                            this.loading = false;
                            this.$router.push({ path: '/home' });
                        })
                        .catch((err) => {
                            console.log(err);
                            this.$message.error(err.msg || '账号或者密码错误!');
                            this.loginForm.password = '';
                            this.loading = false;
                        });
                } else {
                    this.$message.error('参数验证不合规!');
                    this.loading = false;
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 500px;
    margin: 140px auto;
    border-top: 10px solid #409eff;
}

.login-title {
    text-align: center;
}

.login-center-layout {
    background: #409eff;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
}

.login-container {
    width: 480px;
    margin-top: 20px;
}
.el-tab-pane {
    display: flex;
    justify-content: center;
}

.register-container {
    position: relative;
}
.el-form-item {
    display: flex;
}

.el-form-item__label::before {
    visibility: hidden;
}
</style>
