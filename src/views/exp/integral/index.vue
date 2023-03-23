<template>
  <div>
    <Crumbs title="积分排行-2023季后赛" />
    <div class="integral-page">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="rank" align="center" label="名次" width="180"> </el-table-column>
        <el-table-column prop="tname" align="center" label="学校" width="180"> </el-table-column>
        <el-table-column prop="total_score" align="center" label="分数"> </el-table-column>
        <el-table-column prop="extra" align="center" label="明细(额外)">
          <template slot-scope="scope">
            <div>{{ scope.row.extra_score ? scope.row.extra_score[0]?.s : '—' }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="detail_score" align="center" label="明细(比赛)" width="180">
          <template slot-scope="scope">
            <span class="detail-score-parent" v-if="scope.row.detail_score">
              <span class="detail-score" v-for="(item, index) in scope.row.detail_score" :key="index">{{
                item.s
              }}</span>
            </span>

            <div v-else></div>
          </template>
        </el-table-column>
        <el-table-column prop="tag" align="center" label="组合/状态"> </el-table-column>
      </el-table>
      <div class="pagination">
        <!-- :page-sizes="[100, 200, 300, 400]"    :page-size="100" -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="15"
          :current-page="currentPage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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

// withDefaults(
//   defineProps<{
//     title: string;
//     list: number[];
//   }>(),
//   {
//     title: '',
//     list: () => [4, 5, 6]
//   }
// );

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

tableData.value = [
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
].concat(tableData.value);

const currentPage = 1;
const handleSizeChange = (e: any) => {
  console.log(e, 'handleSizeChange');
};
const handleCurrentChange = (e: any) => {
  console.log(e, 'handleCurrentChange');
};
</script>
<style lang="scss">
.integral-page {
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

.pagination {
  margin-top: 50px;
}
</style>
