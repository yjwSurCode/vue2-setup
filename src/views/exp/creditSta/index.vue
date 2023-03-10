<template>
    <div class="app-container">
        <div class="filter-container container">
            <div class="firstLineFilter">
                <div class="searchLeftWrapper">
                    <i class="el-icon-search"></i>
                    <span>筛选搜索</span>
                </div>
                <div class="searchRightWrapper">
                    <el-button
                        icon="el-icon-search"
                        type="primary"
                        @click="handleSearchList()"
                        style="margin-left: 0"
                        size="small"
                    >
                        搜 索
                    </el-button>
                    <el-button
                        @click="handleResetSearch()"
                        size="small"
                        type="primary"
                        icon="el-icon-refresh"
                        style="margin-left: 0"
                    >
                        重 置
                    </el-button>
                </div>
            </div>
            <div style="margin-top: 20px">
                <el-form :inline="true" :model="listQuery" size="small" label-width="140px">
                    <el-form-item label="班级名称">
                        <el-select class="input-width" v-model="listQuery.college" placeholder="请选择班级" clearable>
                            <el-option
                                v-for="item in clzOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="实验名称">
                        <el-select class="input-width" v-model="listQuery.college" placeholder="请选择实验" clearable>
                            <el-option
                                v-for="item in expOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="card-container container">
            <el-row>
                <el-col :span="8">
                    <div class="echart-container">
                        <div class="font-title-large">本班各分数段人次</div>
                        <Echarts id="line" />
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="echart-container">
                        <div class="font-title-large">错误步骤(前十)</div>
                        <el-table :data="null" style="width: 100%">
                            <el-table-column label="步骤">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.clzName }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="次数">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="echart-container">
                        <div class="font-title-large">错误步骤(后十)</div>
                        <el-table :data="null" style="width: 100%">
                            <el-table-column label="步骤">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.clzName }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="次数">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.name }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-card class="table-container">
            <el-table :data="null" style="width: 100%">
                <el-table-column label="学号" width="60">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.code }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="班级">
                    <template slot-scope="scope">
                        <span>{{ scope.row.clzName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="姓名">
                    <template slot-scope="scope">
                        <span>{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="实验" width="180">
                    <template slot-scope="scope">
                        <span class="nowrap">{{ scope.row.expName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="实验分数">
                    <template slot-scope="scope">
                        <span style="margin-left: 20px">{{ scope.row.expCredit }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="报告分数">
                    <template slot-scope="scope">
                        <span style="margin-left: 20px">{{ scope.row.rapportCredit }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="提交状态">
                    <template slot-scope="scope">
                        <el-tag type="success">
                            <span>{{ scope.row.handleStatus }}</span>
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="审核状态">
                    <template slot-scope="scope">
                        <el-tag>
                            <span>{{ scope.row.status }}</span>
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="总分">
                    <template slot-scope="scope">
                        <span>{{ scope.row.total }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
        <div class="pagination-container">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                layout="total, prev, pager, next,jumper"
                :current-page.sync="pageIndex"
                :total="total"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Echarts from '../../../components/Echarts/index.vue';

export default {
    name: 'creditSta',
    components: {
        Echarts,
    },
    data() {
        return {
            url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            listQuery: {
                college: '',
                expName: '',
            },
            // config
            loading: false,
            pageIndex: 0,
            pageSize: 12,
            collegeOptions: [],
            total: 0,
        };
    },
    mounted() {
        this.collegeOptions = [
            {
                label: '1',
                value: '1',
            },
            {
                label: '2',
                value: '2',
            },
            {
                label: '3',
                value: '3',
            },
        ];
    },

    computed: {
        roles() {
            return this.$store.getters.userInfo.roles;
        },
    },

    methods: {
        handleSearchList() {},
        handleResetSearch() {},
        handleAddExp() {},
        handleCurrentChange() {},
        clickCard() {
            console.log('object');
        },
    },
};
</script>

<style scoped>
.app-container {
}

.card-container {
    margin-top: 20px;
    padding: 4px;
    display: flex;
    flex-direction: row;
}

.echart-container {
    min-width: 350px;
    height: 300px;
}
</style>
