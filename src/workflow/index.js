import WorkflowApproval from './src/workflow-approval.vue';
import WorkflowChart from './src/workflow-chart.vue';
import WorkflowRecordList from './src/workflow-record-list.vue';

const install = function (Vue) {
  Vue.component(WorkflowApproval.name, WorkflowApproval);
  Vue.component(WorkflowRecordList.name, WorkflowRecordList);
  Vue.component(WorkflowChart.name, WorkflowChart);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  WorkflowApproval,
  WorkflowRecordList,
  WorkflowChart
};

