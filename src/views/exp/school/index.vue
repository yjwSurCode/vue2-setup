<template>
  <div>
    <Crumbs title="参赛学校-2023季后赛学校" />
    <div class="school-page">
      <el-table :data="tableData" v-loading="tableLoading" stripe style="width: 100%">
        <el-table-column type="index" align="center" label="序号" width="180"> </el-table-column>
        <el-table-column prop="school" align="center" label="参赛学校" width="180"> </el-table-column>
        <el-table-column prop="groupNickname" align="center" label="领队昵称"> </el-table-column>
        <el-table-column prop="qq" align="center" label="领队QQ">
          <template slot-scope="scope">
            <div>{{ scope.row.qq }}</div>
            <!-- <div>{{ scope.row.extra_score ? scope.row.extra_score[0]?.s : '—' }}</div> -->
          </template>
        </el-table-column>
        <el-table-column prop="association" align="center" label="报名组织群号" width="180"> </el-table-column>
        <el-table-column prop="link" align="center" label="直播链接" width="280"></el-table-column>
      </el-table>
      <div class="pagination-box">
        <!-- <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="15"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalPage"
        >
        </el-pagination> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="totalPage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
import Crumbs from '@/components/Crumbs/index.vue';

import newArr from './link';

import { CompetitionCaseApi } from '@/services/portal-svc';

onMounted(() => {
  pageInit();
});
const tableData = ref([
  {
    rank: 1,
    tid: '8071',
    tname: '春日野',
    total_score: 69.83,
    detail_score: [
      {
        s: 27.97,
        d: '#1 189700 RTOPx2',
        rs: 25.97,
        rd: '#1 189700',
        rtop: 2
      },
      {
        s: 34.64,
        d: '#1 246400 RTOPx3',
        rs: 31.64,
        rd: '#1 246400',
        rtop: 3
      },
      {
        s: 7.22,
        d: '#4 62200 RTOPx1',
        rs: 6.22,
        rd: '#4 62200',
        rtop: 1
      }
    ],
    tag: '#1'
  },
  {
    rank: 1,
    tid: '8071',
    tname: '春日野',
    total_score: 69.83,
    detail_score: [
      {
        s: 27.97,
        d: '#1 189700 RTOPx2',
        rs: 25.97,
        rd: '#1 189700',
        rtop: 2
      },
      {
        s: 34.64,
        d: '#1 246400 RTOPx3',
        rs: 31.64,
        rd: '#1 246400',
        rtop: 3
      },
      {
        s: 7.22,
        d: '#4 62200 RTOPx1',
        rs: 6.22,
        rd: '#4 62200',
        rtop: 1
      }
    ],
    tag: '#1'
  },
  {
    rank: 1,
    tid: '8071',
    tname: '春日野',
    total_score: 69.83,
    detail_score: [
      {
        s: 27.97,
        d: '#1 189700 RTOPx2',
        rs: 25.97,
        rd: '#1 189700',
        rtop: 2
      },
      {
        s: 34.64,
        d: '#1 246400 RTOPx3',
        rs: 31.64,
        rd: '#1 246400',
        rtop: 3
      },
      {
        s: 7.22,
        d: '#4 62200 RTOPx1',
        rs: 6.22,
        rd: '#4 62200',
        rtop: 1
      }
    ],
    tag: '#1'
  },
  {
    rank: 1,
    tid: '8071',
    tname: '春日野',
    total_score: 69.83,
    extra_score: [
      {
        s: 29.93,
        d: '#1 189700 RTOPx2'
      }
    ],
    detail_score: [
      {
        s: 27.97,
        d: '#1 189700 RTOPx2',
        rs: 25.97,
        rd: '#1 189700',
        rtop: 2
      },
      {
        s: 34.64,
        d: '#1 246400 RTOPx3',
        rs: 31.64,
        rd: '#1 246400',
        rtop: 3
      },
      {
        s: 7.22,
        d: '#4 62200 RTOPx1',
        rs: 6.22,
        rd: '#4 62200',
        rtop: 1
      }
    ],
    tag: '#1'
  },
  {
    rank: 1,
    tid: '8071',
    tname: '春日野',
    total_score: 69.83,
    extra_score: [
      {
        s: 29.93,
        d: '#1 189700 RTOPx2'
      }
    ],
    detail_score: [
      {
        s: 27.97,
        d: '#1 189700 RTOPx2',
        rs: 25.97,
        rd: '#1 189700',
        rtop: 2
      },
      {
        s: 34.64,
        d: '#1 246400 RTOPx3',
        rs: 31.64,
        rd: '#1 246400',
        rtop: 3
      },
      {
        s: 7.22,
        d: '#4 62200 RTOPx1',
        rs: 6.22,
        rd: '#4 62200',
        rtop: 1
      }
    ],
    tag: '#1'
  }
]);

const currentPage = 1;
const handleSizeChange = (e: any) => {
  console.log(e, 'handleSizeChange');
};
const handleCurrentChange = (e: any) => {
  console.log(e, 'handleCurrentChange');
  //   1  0 10
  //   2  10 20
  //   3  30 40
  //   4  40 50
  //!
  //   tableData.value = allResultArr.value.splice(e == 1 ? 0 : e * 10, e == 1 ? 10 : e * 10 + 10);
};

const totalPage = ref(1);
const tableLoading = ref(true);

const allResultArr = ref([]);

const pageInit = async () => {
  const res = await CompetitionCaseApi.school_info({ pageNum: 1000 }).then((e) => {
    console.log(e, 'result');

    const resultArr = e.body.rows.filter((item: any) => item.isLeader == 1 && item.status != 2);

    totalPage.value = resultArr.length;
    allResultArr.value = resultArr;

    const _res = resultArr.filter((e: any) => {
      //   e.isLeader == 1 &&
      newArr.find((i) => {
        if (e.school == i.school) {
          return (e.link = i.link ? i.link : '-');
        } else {
          e.link = '-';
        }
      });
    });

    // tableData.value = resultArr.slice(10, 20);
    tableData.value = resultArr;

    tableLoading.value = false;

    console.log(_res, '_res', resultArr);
  });
};
</script>
<style lang="scss" scoped>
.school-page {
  margin: 0px 50px 50px 50px;
}
.detail-score-parent {
  & :nth-child(odd) {
    color: #a95fd2;
  }

  & :nth-child(even) {
    color: #6183e6;
  }
  .detail-score {
    &::after {
      content: ' | ';
      color: #000000;
    }
  }
}

.pagination-box {
  margin: 50px 0px 50px 0px !important;
}
</style>
