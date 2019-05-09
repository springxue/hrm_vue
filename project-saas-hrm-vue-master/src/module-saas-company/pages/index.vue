<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
      <!-- element ui的table组件
          data指的就是数据模型
       -->
        <el-table :data="dataList" border style="width: 100%">
        <!--el-table-column 构造表格中的每一列-->
          <el-table-column fixed prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
     </div>
  </div>
</template>

<script>
  import {list} from '@/api/base/company'
  export default {
  name: 'saas-company-index',
  data() {
       return {
          dataList: [ ]
       }
  },
  methods: {
    // 获取列表数据
    getList() {
      // 调用API发起请求
      // res代表响应数据
      list().then(res => {
        this.dataList = res.data.data
        console.log(res.data)
      })
    }
  },
  // 创建完毕状态
  created() {
    this.getList()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
