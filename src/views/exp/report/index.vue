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
            icon="el-icon-folder-opened"
            type="primary"
            style="margin-left: 0"
            @click="handleExport()"
            size="small"
          >
            批量导出
          </el-button>
        </div>
      </div>
      <div style="margin-top: 20px">
        <el-form
          :inline="true"
          :model="listQuery"
          size="small"
          label-width="140px"
        >
          <el-form-item label="课程名称">
            <el-select
              class="input-width"
              v-model="listQuery.courseName"
              placeholder="请选择课程"
              clearable
            >
              <el-option
                v-for="item in courseOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班级名称">
            <el-select
              class="input-width"
              v-model="listQuery.clzName"
              placeholder="请选择班级"
              clearable
            >
              <el-option
                v-for="item in clzOptions"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-container container">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="学号" width="60">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="班级">
          <template slot-scope="scope">
            <span>{{ scope.row.clzName || "N/A" }}</span>
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
            <span style="margin-left: 20px">{{ scope.row.creditExp }}</span>
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
              <span>{{ scope.row.auditSta || "草稿" }}</span>
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
            <el-tag>
              <span>{{ scope.row.status || "草稿" }}</span>
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="总分">
          <template slot-scope="scope">
            <span>{{ scope.row.credit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="info"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination-container">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="total, prev, pager, next,jumper"
        :current-page.sync="pageIndex"
        :page-size="pageSize"
        :page-count="pageCount"
        :total="pageTotal"
      >
      </el-pagination>
    </div>
    <el-dialog
      title="报告表单"
      :visible="editDiaVisible"
      width="80%"
      top="5vh"
      @close="formDiaCancel"
    >
      <el-form
        ref="form1"
        :rules="formRules"
        :inline="false"
        :model="formData"
        size="small"
        label-width="140px"
      >
        <el-form-item label="报告名称:" prop="name">
          <el-input
            v-model="formData.name"
            class="input-width"
            placeholder="请填写名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="班级名称:" prop="clzName">
          <el-input
            v-model="formData.clzName"
            class="input-width"
            placeholder=""
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生名称:" prop="stuName">
          <el-input
            v-model="formData.stuName"
            class="input-width"
            placeholder=""
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="实验名称:" prop="expName">
          <el-input
            v-model="formData.expName"
            class="input-width"
            placeholder=""
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="报告学分:" prop="creditRapport">
          <el-input
            v-model="formData.creditRapport"
            class="input-width"
            placeholder="请填写名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="实验学分:" prop="creditExp">
          <el-input
            v-model="formData.creditExp"
            class="input-width"
            placeholder="请填写名称"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="总学分:">
          <el-input
            v-model="formData.credit"
            class="input-width"
            placeholder=""
            :disabled="true"
          ></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-refresh"
          v-if="!editDiaVisible"
          @click="resetForm"
        >
          重置</el-button
        >
        <el-button size="mini" @click="formDiaCancel">取消</el-button>
        <el-button size="mini" type="primary" @click="formSubmit"
          >确定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog title="确认删除" :visible.sync="removeDiaVisible" width="25%">
      <span>删除后信息无法挽回,请慎重选择</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" type="primary" @click="removeRapport"
          >确定</el-button
        >
        <el-button size="mini" @click="removeDiaVisible = false"
          >取消</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  findRapportByCourseNameAndClassName,
  removeLogicRapportById,
  findAllRapport,
  updateRapportWithoutExpAndStu,
} from "../../../request/rapport";
import { hasV } from "../../../utils/u";
import { findAllCourses } from "../../../request/course";
import { findAllClasses } from "../../../request/clz";
import {
  RAPPORT,
  RAPPORT_AUDIT,
  RAPPORT_OPTION,
} from "../../../constance/rapport";
import { readExcelToJson, saveJsonToExcel } from "../../../utils/excel-utils";
import {
  validateName,
  validateString,
  validateNotNull,
} from "../../../utils/validate";

export default {
  name: "rapport",
  data() {
    return {
      url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",

      listQuery: {
        clzName: "",
        courseName: "",
      },
      status: [""],
      tableData: [],
      formData: {
        id: "",
        name: "",
        clzName: "",
        stuId: "",
        stuName: "",
        expId: "",
        expName: "",
        creditExp: 0,
        creditRapport: 0,
        credit: 0,
        status: "",
        AuditSta: "",
      },

      // form rule
      formRules: {
        name: [{ required: true, trigger: "blur", validator: validateName }],
        // clzName: [{required: true, trigger: 'blur', validator: validateString}],
        // stuName: [{required: true, trigger: 'blur', validator: validateString}],
        // expName: [{required: true, trigger: 'blur', validator: validateString}],
        creditExp: [
          { required: true, trigger: "blur", validator: validateNotNull },
        ],
        creditRapport: [
          { required: true, trigger: "blur", validator: validateNotNull },
        ],
        credit: [
          { required: true, trigger: "blur", validator: validateNotNull },
        ],
      },

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
      pageCount: 0,
      // cache
      selectRowId: null,
    };
  },
  mounted() {
    this.init();
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
      this.formData = {
        id: "",
        name: "",
        clzName: "",
        stuId: "",
        stuName: "",
        expId: "",
        expName: "",
        creditExp: 0,
        creditRapport: 0,
        credit: 0,
        status: "",
        AuditSta: "",
      };
    },
    formSubmit() {
      this.$refs.form1.validate((valide) => {
        if (valide) {
          updateRapportWithoutExpAndStu(this.formData)
            .then((res) => {
              this.formDiaCancel();
              this.init();
            })
            .catch((err) => {
              this.$message.error("修改失败!");
            });
        }
      });
    },
    removeRapport() {
      if (!hasV(this.selectRowId)) {
        this.$message.error("页面过期,请刷新页面!");
        return;
      }
      removeLogicRapportById(this.selectRowId)
        .then((res) => {
          this.$message.success("删除成功!");
          this.removeDiaVisible = false;
          findRapportByCourseNameAndClassName(
            this.reqFillPagination(this.listQuery)
          ).then((res) => {
            this.respFillPagination(res);
            this.tableData = res.data || [];
          });
        })
        .catch((err) => {
          this.$message.error("删除报告失败!");
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
    init() {
      findAllRapport(this.reqFillPagination())
        .then((res) => {
          console.log(res);
          this.respFillPagination(res);
          this.tableData = res.data || [];
        })
        .catch((err) => {
          this.$message.error("加载主数据失败!");
        });
      findAllCourses(this.reqFillPagination())
        .then((res) => {
          console.log("courses", res);
          this.courseOptions = res.data || [];
        })
        .catch((err) => {
          this.$message.error("加载课程信息失败!");
        });
      findAllClasses(this.reqFillPagination())
        .then((res) => {
          console.log("clz", res);
          this.clzOptions = res.data || [];
        })
        .catch((err) => {
          this.$message.error("加载班级信息失败!");
        });
    },
    handleSearchList() {
      findRapportByCourseNameAndClassName(
        this.reqFillPagination(this.listQuery)
      )
        .then((res) => {
          console.log(res);
          this.tableData = res.data || [];
        })
        .catch((err) => {
          this.$message.error("加载数据失败!");
        });
    },
    handleExport() {
      let arr = [];
      this.tableData.forEach((i) => {
        const data = {
          序号: i.id,
          班级: i.clzName,
          姓名: i.name,
          实验序号: i.expId,
          实验分数: i.creditExp,
          提交状态: i.auditSta,
          审核状态: i.status,
          报告分数: i.creditRapport,
          总分: i.credit,
        };
        arr.push(data);
      });
      saveJsonToExcel(arr, "Rapport" + new Date() + ".xlsx");
    },
    paginationCurrentChange(index) {
      this.loading = true;
      if (hasV(index)) {
        this.pageIndex = index;
      } else {
        this.pageIndex = 0;
      }
      findRapportByCourseNameAndClassName(
        this.reqFillPagination(this.listQuery)
      )
        .then((res) => {
          console.log(res);
          this.tableData = res.data || [];
          this.respFillPagination(res);
          this.loading = false;
        })
        .catch((err) => {
          this.$message.error("加载数据失败!");
          this.loading = false;
        });
    },
    reqFillPagination(params) {
      let newParams = params;
      if (hasV(newParams)) {
        if (hasV(this.pageIndex) && this.pageIndex == 0) {
          this.pageIndex = 1;
        }
        newParams = {
          ...newParams,
          pageIndex: this.pageIndex - 1,
          pageSize: this.pageSize || 6,
        };
      } else {
        if (hasV(this.pageIndex) && this.pageIndex == 0) {
          this.pageIndex = 1;
        }
        newParams = {
          pageIndex: this.pageIndex - 1,
          pageSize: this.pageSize || 6,
        };
      }
      console.log(params, newParams);
      return newParams;
    },
    respFillPagination(res) {
      if (hasV(res.currentPage)) {
        this.pageIndex = res.currentPage + 1;
      }
      if (hasV(res.totalPage)) {
        this.pageCount = res.totalPage;
      }
      if (hasV(res.totalElements)) {
        this.pageTotal = res.totalElements;
      }
    },
    corrigePageIndex() {
      if (!hasV(this.pageIndex) || this.pageIndex == 0) {
        this.pageIndex = 1;
      }
    },
  },
};
</script>

<style scoped>
.app-container {
}
.firstLineFilter {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.searchRightWrapper {
  float: right;
  align-items: center;
  justify-content: space-between;
}

.searchLeftWrapper {
}
</style>
