<template>
  <div class="workflow-svg-container">
    <div class="workflow-svg-header">
      <div class="workflow-svg-title">
        <span>流程图</span>
      </div>
      <div class="workflow-svg-label">
        <div class="workflow-svg-label__item">
          <Point class="icon is-primary" />
          <span>已办理</span>
        </div>
        <div class="workflow-svg-label__item">
          <Point class="icon is-success" />
          <span>办理中</span>
        </div>
        <div class="workflow-svg-label__item">
          <Point class="icon is-gray" />
          <span>未办理</span>
        </div>
        <div class="workflow-svg-label__item">
          <Point class="icon is-danger" />
          <span>驳回</span>
        </div>
      </div>
    </div>
    <div class="workflow-svg-content" v-loading="svgLoading">
      <div
        class="workflow-svg"
        ref="svgRef"
        v-if="svgHtml"
        v-html="svgHtml"
      ></div>
    </div>
  </div>
</template>

<script>
import Point from './svg/point.vue';
import { addClass, removeClass } from './utils';

// const getNodeCell = function (event) {
//   let cell = event.target;

//   while (cell && cell.tagName.toUpperCase() !== 'SVG') {
//     if (
//       cell.tagName.toUpperCase() === 'G' &&
//       cell.classList.contains('x6-node')
//     ) {
//       return cell;
//     }
//     cell = cell.parentNode;
//   }
//   return null;
// };

export default {
  name: 'WorkflowChart',
  components: {
    Point
  },
  props: {
    proxy: {
      type: String,
      default: '/waas'
    },
    httpRequest: Function,
    version: {
      type: String,
      default: 'v2'
    }, // 版本号
    taskid: String, // 任务id
    busiid: String
  },
  data() {
    return {
      virtualElement: null,
      svgHtml: null,
      show: false,
      nodeMaps: {},
      currentNode: {},
      svgLoading: false,
      popoverLoading: false
    };
  },
  computed: {
    prefixUrl() {
      return `${this.proxy}/api/${this.version}/flow`;
    },
    http() {
      return this.httpRequest || this.$axios;
    },
  },
  watch: {
    busiid: {
      handler() {
        this.init();
      },
    }
  },
  methods: {
    // 根据任务ID获取流程svg
    getFlowChartSvgByTaskid(params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getFlowChartSvgByTaskid/${this.taskid}`,
        params
      };
      return this.http(options);
    },
    // 根据busiid获取流程图svg
    getFlowChartSvgByBusiId(params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getFlowChartSvgByBusiId/${this.busiid}`,
        params
      };
      return this.http(options);
    },
    // 返回流程各节点信息状态
    getNodeStatus(params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getNodeStatus/${this.busiid}`,
        params
      };
      return this.http(options);
    },
    getNodeTask(code) {
      const busiid = this.busiid;
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getNodeTask/${code}`,
        params: {
          busiid
        }
      };
      return this.http(options);
    },
    resetCurrentNode() {
      this.currentNode = {};
    },
    async getNodeData(nodeId) {
      this.popoverLoading = true;
      this.resetCurrentNode();
      if (this.nodeMaps[nodeId]) {
        this.currentNode = this.nodeMaps[nodeId];
        this.popoverLoading = false;
        return this.nodeMaps[nodeId];
      }
      try {
        const result = await this.getNodeTask(nodeId);

        this.nodeMaps[nodeId] = result;
        this.currentNode = result;
        return result;
      } catch (error) {
        return error;
      } finally {
        this.popoverLoading = false;
      }
    },
    setSvgGrayMode() {
      const svgRef = this.$refs.svgRef;
      if (!svgRef) return;
      const nodes = svgRef.querySelectorAll('.x6-node');
      // const svgEl = svgRef.querySelector('svg');
      for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        addClass(node, 'gray-mode');
      }
      // this.addListener(svgEl);
    },
    setSvgNodeStatus(status) {
      if (Array.isArray(status)) {
        const svgRef = this.$refs.svgRef;
        status.forEach((item) => {
          const { flownodeid, dealtype } = item;
          if (flownodeid && dealtype !== '') {
            const nodeEl = svgRef.querySelector(
              `.x6-node[data-cell-id='${flownodeid}']`
            );
            if (nodeEl) {
              removeClass(nodeEl, 'gray-mode');
              const cls = this.getSvgNodeTypeClass(dealtype);
              addClass(nodeEl, cls);
            }
          }
        });
      }
    },

    getSvgNodeTypeClass(type) {
      switch (type) {
        case '0':
          return 'is-success';
        case '2':
          return 'is-danger';
        case '4':
          return 'is-danger';
        default:
          return 'is-primary';
      }
    },

    async init() {
      if (!(this.busiid || this.taskid)) return;
      this.svgLoading = true;
      let svgString;
      if (this.busiid) {
        svgString = await this.getFlowChartSvgByBusiId();
      } else if (this.taskid) {
        svgString = await this.getFlowChartSvgByTaskid();
      }

      if(!svgString) {
        this.svgLoading = false;
        return;
      }

      this.svgHtml = svgString;
      this.$nextTick(async () => {
        this.setSvgGrayMode();
        if (this.busiid) {
          const status = await this.getNodeStatus();
          this.setSvgNodeStatus(status);
        }

        this.svgLoading = false;
      });
    },
    // addListener(svgRef) {
    //   svgRef.addEventListener('click', this.showPopover);
    // },
    // removeListener(svgRef) {
    //   svgRef.removeEventListener('click', this.showPopover);
    // },
    // showPopover(e) {
    //   // const { clineX: x, clineY: y } = e;
    //   const nodeCell = getNodeCell(e);

    //   if (nodeCell) {
    //     this.virtualElement = nodeCell;
    //     const cellId = nodeCell.getAttribute('data-cell-id');
    //     if (cellId) {
    //       this.getNodeData(cellId);
    //     }
    //     this.$refs.popover && this.$refs.popover.updateReference();
    //   }
    // },
    // handlePopoverClose() {
    //   this.$refs.popover && this.$refs.popover.doClose();
    // }
  },
  created() {
    this.init();
  }
};
</script>
