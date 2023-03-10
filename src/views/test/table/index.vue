<template>
    <div class="app-container">
        <TableComponent :table="tableConfig" :request="requestConfig" :form="formConfig" />
    </div>
</template>

<script>
import {
    findRapportByCourseNameAndClassName,
    removeLogicRapportById,
    updateRapportWithoutExpAndStu,
} from '../../../request/rapport';
import { hasV } from '../../../utils/u';
import { RAPPORT, RAPPORT_AUDIT, RAPPORT_OPTION } from '../../../constance/rapport';
import TableComponent from '../../../components/Table/index.vue';
import { json } from '../../../utils/request-utils';

export default {
    name: 'test',
    components: {
        TableComponent,
    },
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',

            tableConfig: [
                {
                    name: 'id',
                    label: '序号',
                    type: 'span',
                },
                {
                    name: 'queType',
                    label: '题型',
                    type: 'span',
                },
                {
                    name: 'name',
                    label: '题干',
                    type: 'span',
                },
                {
                    name: 'answers',
                    label: '选项',
                    type: 'span',
                },
                {
                    name: 'rightAns',
                    label: '正确答案',
                    type: 'span',
                },
                {
                    label: '操作',
                    type: 'operation',
                    fixed: 'right',
                },
            ],
            requestConfig: [
                {
                    type: 'main',
                    remove: 'Question/removeLogicByIdMock',
                    add: '',
                    update: '',
                    find: 'Question/findByExpIdAndType',
                    findById: 'Question/findById',
                },
            ],
            formConfig: [{}],

            // visible
            editDiaVisible: false,

            // status constance
            RAPPORT,
            RAPPORT_AUDIT,
            RAPPORT_OPTION,

            // dialugue
            removeDiaVisible: false,

            // config
            loading: false,
            pageIndex: 1,
            pageSize: 6,
            pageTotal: 0,

            // cache
            selectRowId: null,
        };
    },
    mounted() {
        this.init();
        json('Demo/hi', {}, {});
    },

    computed: {
        roles() {
            return this.$store.getters.userInfo.roles;
        },
    },

    methods: {
        formDiaCancel() {
            this.freshForm();
            this.editDiaVisible = false;
        },
        freshForm() {
            this.formData = {};
        },
        formSubmit() {
            updateRapportWithoutExpAndStu(this.formData)
                .then((res) => {
                    this.formDiaCancel();
                    this.init();
                })
                .catch((err) => {
                    this.$message.error('修改失败!');
                });
        },
        removeRapport() {
            if (!hasV(this.selectRowId)) {
                this.$message.error('页面过期,请刷新页面!');
                return;
            }
            removeLogicRapportById(this.selectRowId)
                .then((res) => {
                    this.$message.success('删除成功!');
                    this.removeDiaVisible = false;
                    findRapportByCourseNameAndClassName(this.reqFillPagination(this.listQuery)).then((res) => {
                        this.respFillPagination(res);
                        this.tableData = res.data || [];
                    });
                })
                .catch((err) => {
                    this.$message.error('删除失败!');
                    this.removeDiaVisible = false;
                });
        },
        handleEdit(index, row) {
            this.editDiaVisible = true;
            this.selectRowId = row.id;
            this.formData = row;
        },
        handleDelete(index, row) {
            this.removeDiaVisible = true;
            this.selectRowId = row.id;
        },
        init() {},
    },
};
</script>

<style scoped>
.app-container {
}
</style>
