<!--
 * @Author: 张鹏 215683509@qq.com
 * @Date: 2024-06-17 20:52:56
 * @LastEditors: 张鹏 215683509@qq.com
 * @LastEditTime: 2024-06-19 13:38:46
 * @FilePath: /gatherone_oms_fronted/src/views/Home/goodsStructure/index.vue
 * @Description: 人力填报 - 人资管理
-->
<template>
  <div class="table_container">
    <div class="info">
      <div class="rt-title">人资管理</div>
      <div class="info-btn">
        <!-- <el-button type="primary" class="rt-btnInfo" style="margin-right: 12px"
          >导出</el-button
        > -->
        <el-upload
          action=""
          :show-file-list="false"
          :before-upload="handleBeforeUpload"
          :http-request="(e, b) => handleExceed(e, b)"
        >
          <el-button type="primary" class="rt-btn">导入</el-button>
        </el-upload>
        <!-- <el-button type="primary" class="rt-btnInfo right-btn">提交</el-button> -->
      </div>
    </div>
    <el-table
      height="80vh"
      class="rt-table"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        fixed
        label="序号"
        align="center"
        type="index"
        width="50"
      />
      <el-table-column
        v-for="(item, index) in peopleTableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :resizable="item.resizable"
        :align="item.align"
        :fixed="item.fixed"
        :headerAlign="item.headerAlign"
        :show-overflow-tooltip="item.showOverflowTooltip"
      >
        <template #default="scope">
          <span v-if="item.prop === 'level'">
            <span>{{
              scope.row[item.prop] == 0
                ? '总部'
                : scope.row[item.prop] == 1
                ? '城市'
                : '项目'
            }}</span>
          </span>
          <div v-else>{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <div class="Pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="20"
        layout="total, prev, pager, next"
        :total="count"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
// import headTop from "@/components/headTop";
import { peopleTableHeader } from '@/utils/tableHeader'
import { achievementImport, getInfoList } from '@/api/list'
export default {
  data() {
    return {
      peopleTableHeader,
      city: {},
      offset: 0,
      limit: 20,
      count: 0,
      tableData: [],
      currentPage: 1,
      selectTable: {},
      dialogFormVisible: false,
      categoryOptions: [],
      selectedCategory: [],
      address: {},
    }
  },
  created() {
    this.getResturants()
  },
  components: {
    // headTop,
  },
  methods: {
    handleBeforeUpload(file) {
      // 在这里你可以处理文件，比如转换成File对象
      console.log(file) // 这是已经是File对象了
      // 如果你需要将file转成File对象，实际上file已经是File对象了，直接使用即可
      // 如果你需要做其他处理，比如校验等，可以在这里进行
    },
    async handleExceed(e, b) {
      const formData = new FormData()
      formData.append('file', e.file)
      formData.append('type', 9)
      let { retCode } = await achievementImport(formData)
      if (retCode === '0') {
        this.$message.success('导入成功')
        this.getResturants()
      } else {
        this.$message.warn('导入失败')
      }
    },
    // 获取表格数据
    async getResturants() {
      const { latitude, longitude } = this.city
      let { data, retCode } = await getInfoList({}, 'resourcesManagement')
      if (retCode === '0') {
        this.tableData = data
      } else {
        this.tableData = []
      }
    },

    async onExportXls() {
      const title = `【A1】业务数据${getTime()}`
      const realUrl = expUrl.value
      return handleExportXls(title, realUrl)
    },

    //分页部分
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getResturants()
    },
  },
}
</script>

<style lang="less">
// @import "../../style/mixin";
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
  height: 90vh;
  background-color: #fff;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}

.info {
  display: flex;
  justify-content: space-between;
  .rt-title {
    color: #000000;
    font-family: PingFang SC;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -1px;
  }
  .info-btn {
    display: flex;
  }
}
.right-btn {
  margin-left: 12px;
}
</style>
