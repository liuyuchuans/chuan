<template>
    <el-container>
        <el-table
            :data="tableData"
            align="center"
            header-align="center"
            style="width: 100%"
            :row-class-name="tableRowClassName">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column label="操作" class-name="remove">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-container>
  
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table th,.el-table td{
    text-align: center;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          
            date: '2019-05-01',
            name: '刘小',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2019-05-02',
            name: '张小',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2019-05-03',
            name: '马小',
            address: '上海市普陀区金沙江路 1518 弄',
        }, {
            date: '2019-05-04',
            name: '二小',
            address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      handleDelete(index){
          this.tableData.splice(index,1)
      }
    },
  }
</script>