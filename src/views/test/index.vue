<template>
    <div class="wrapper">
        <el-form>
            <el-form-item label="l1">
                <el-switch v-model="form.v1"></el-switch>
            </el-form-item>
            <el-form-item label="l2">
                <el-switch v-model="form.v2"></el-switch>
            </el-form-item>
            <el-form-item v-if="form.v1 && form.v2">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess1"
                >
                    <img v-if="form.v3" :src="form.v3" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess2"
                >
                    <img v-if="form.v4" :src="form.v4" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item label="l5">
                <el-switch v-model="form.v5"></el-switch>
            </el-form-item>
            <el-form-item v-if="form.v5">
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess3"
                >
                    <img v-if="form.v6" :src="form.v6" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                v1: false,
                v2: false,
                v3: null,
                v4: null,
                v5: false,
                v6: null,
            },
        };
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleAvatarSuccess1() {},
        handleAvatarSuccess2() {},
    },
};
</script>
<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
