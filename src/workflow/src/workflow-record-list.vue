<template>
  <div class="workflow-record-list">
    <zx-table  :loading="loading" :columns="columns" :data="record"></zx-table>
  </div>
</template>

<script >
import { defaultNodeTypeMap } from './constant.js';
export default {
  name: 'WorkflowRecordList',
  props: {
    httpRequest: Function,
    proxy: {
      type: String,
      default: '/waas'
    },
    version: {
      type: String,
      default: 'v2'
    },
    busiid: String, // 业务id
  },
  data() {
    return {
      loading: false,
      columns: [
        {
          name: 'dealtime',
          label: '时间',
          minWidth: 225,
          formatter: (row) => {
            return row.dealtime || row.createtime;
          },
        },
        {
          name: 'nodename',
          label: '节点名称',
          minWidth: 175,
        },
        {
          name: 'username',
          label: '操作者',
          minWidth: 175,
        },
        {
          name: 'dealtype',
          label: '操作',
          minWidth: 175,
          formatter: (row) => {
            return defaultNodeTypeMap[row.dealtype || '0'].name;
          },
        },
        {
          name: 'opinion',
          label: '处理意见',
          minWidth: 490,
          formatter: (row) => {
            return row.opinion || '-';
          },
          align: 'left',
          headerAlign: 'center'
        }
        
      ],
      record: []
    }
  },
  computed: {
    http() {
      return this.httpRequest || this.$axios;
    },
    prefixUrl() {
      return `${this.proxy}/api/${this.version}/flow`;
    },
  },
  watch: {
    busiid: {
      handler() {
        this.init();
      }
    }
  },
  methods: {
    // 流程办理记录api
    getProcessInfo(busiid) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getProcessInfo/${busiid}`
      };

      return this.http(options);
    },
    // 获取流程记录
    async getFlowRecord(busiid) {
      this.loading = true;
      try {
        const processInfo = await this.getProcessInfo(busiid);
        this.record = processInfo;
        return Promise.resolve(processInfo);
      } catch (error) {
        this.showMessage('获取流程记录失败');
        return Promise.reject(error);
      } finally {
        this.loading = false;
      }
    },
    init() {
      this.busiid && this.getFlowRecord(this.busiid);
    }
  },
  created() {
    this.init();
  }
}
</script>

<style lang="scss">
$table-border:  1px solid var(--table-border-color, #d2d2d2);
$table-header-color: var(--table-header-color, #333);
$table-header-bg-color: var(--table-header-bg-color, #f6f6f6);
.workflow-record-list {
  .el-table {
    &--border {
      .el-table__cell {
        border-right: $table-border;
      }
    }

    &--border, &--group {
      border: $table-border;
    }

    .cell {
      padding-left: 20px;
      padding-right: 20px;
    }

    .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{
      border-right: $table-border;
    }

    tr{
      th {
        color: $table-header-color;
        font-weight: normal;
      }
      th, th.el-table__cell {
        background-color: $table-header-bg-color;
      }
    }
    td.el-table__cell, th.el-table__cell.is-leaf {
      border-bottom: $table-border;
    }
  }
}
</style>