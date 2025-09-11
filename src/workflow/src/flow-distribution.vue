<template>
  <div>
    <zx-select-field
      :label="label"
      class="workflow-field"
      v-model="nodeId"
      :options="getOptions"
      :label-width="labelWidth"
      @change="handleNodeChange"
      :label-val="selectProps.label"
      :item-val="selectProps.value"
      :prop="prop"
      :rules="[{ required: true, message: '请选择', trigger: 'change' }]"
      ref="select"
    >
    </zx-select-field>

    <template v-for="(node, index) in distributionNode">
      <approval-select
        label="分发节点"
        :index="getIndex(index)"
        :label-width="labelWidth"
        :options="[node]"
        :value="node[valueKey]"
        :key="node[valueKey]"
        :paramsData="paramsData"
        :showSelect="distributionNode.length > 1"
        :approverVisible="getApproverStatus(node)"
        :approverData="getPickerData(approverData, node[valueKey])"
        :approverProp="getApproverProp(node[valueKey])"
        @approver-change="handleApproverChange($event, node[valueKey])"
        @approver-list-change="handleApproverListChange($event, node[valueKey])"
        @updateApproverData="updateApproverData($event, node[valueKey])"
        v-bind="$attrs"
      ></approval-select>
    </template>
  </div> 
</template>

<script>
import ApprovalSelect from './approval-select.vue';

export default {
  name: 'FlowDistribution',
  inheritAttrs: false,
  components: {
    [ApprovalSelect.name]: ApprovalSelect
  },
  props: {
    prop: { type: String },
    approverProp: { type: String },
    value: {},
    labelWidth: [String, Number],
    label: String,
    options: {
      type: Array
    },
    paramsData: {
      type: Object
    },

    valueKey: {
      type: String,
      default: 'nodeid'
    },

    approverMultiple: Boolean,
    approverData: {
      type: Object,
      default() {
        return {};
      }
    },

    approverVisible: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    nodeId: {
      set(val) {
        this.$emit('input', val);
      },
      get() {
        return this.value;
      }
    },
    getOptions() {
      if (!Array.isArray(this.options)) return [];
      const result = this.options.reduce((pre, cur, index) => {
        let item = {
          text: cur.nodename,
          value: cur.nodeid,
          forkid: cur.forkid,
          data: [cur]
        };

        if (index > 0 && cur.forkid && cur.forkid === pre[index - 1].forkid) {
          const prevItem = pre[index - 1];
          prevItem.text += ',' + cur.nodename;
          prevItem.value += ',' + cur.nodeid;
          prevItem.data.push(cur);
          return pre;
        }

        pre.push(item);
        return pre;
      }, []);
      return result;
    },

    distributionNode() {
      const optionIndex = this.getValueIndex(this.value);
      if (optionIndex > -1) {
        return this.getOptions[optionIndex]['data'];
      } else {
        return [];
      }
    }
  },
  data() {
    return {
      selectProps: {
        label: 'text',
        value: 'value'
      }
    };
  },
  methods: {
    getApproverProp(key) {
      return this.approverProp ? `${this.approverProp}.${key}` : null;
    },
    getIndex(index) {
      const currentNum =
        this.distributionNode.length > 1 ? `${index + 1}` : null;
      const num = Number(currentNum) < 10 ? `0${currentNum}` : index;
      return currentNum && `节点-${num}`;
    },
    getApproverStatus(node) {
      return this.approverVisible && node && node.nodetype !== 'end';
    },
    getPickerData(map, key) {
      if (map && key) {
        return map[key];
      }
    },
    getValueIndex(value) {
      const index = this.getOptions.findIndex((item) => item.value === value);
      return index;
    },
    handleNodeChange(value, data) {
      this.$emit('change', value, data['data'], data);
      // 节点切换重置选人数据
      this.resetPickerData();
    },
    checkDefaultFirstOption() {
      let index = -1;
      for (let i = 0; i !== this.getOptions.length; ++i) {
        const option = this.getOptions[i];
        if (!option.disabled) {
          index = i;
          break;
        }
      }
      const firstOption = this.getOptions[index];
      this.$emit('input', firstOption.value);
      this.$emit('change', firstOption.value, firstOption.data, firstOption);
    },
    resetPickerData() {
      this.$emit('update:approverData', {});
    },
    handleApproverChange(data, key) {
      this.$emit('approver-change', data, key);
    },
    handleApproverListChange(data, key) {
      this.$emit('approver-list-change', data, key);
    },
    updateApproverData(data, key) {
      const approverData = {
        ...this.approverData,
        [key]: data
      };
      this.$emit('update:approverData', approverData);
    },
    
  }
};
</script>
