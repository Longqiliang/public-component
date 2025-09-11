<template>
  <div
    class="zx-workflow-aproval-select"
    :class="{
      'zx-workflow-aproval-select--border': showIndex
    }"
  >
    <div class="zx-workflow-aproval-select__bardge" v-if="showIndex">
      <span>{{ getIndex(index) }}</span>
    </div>
    <zx-select-field
      :label="label"
      class="workflow-field"
      :options="options"
      :label-val="selectProps.label"
      :item-val="selectProps.value"
      v-model="model"
      v-if="showSelect"
    >
    </zx-select-field>
    <!-- 承办人 -->
    <MemberSelectField
      :label="approverLabel"
      :prop="approverProp"
      :rules="[
        {
          required: approverRequired,
          message: '请选择承办人',
          trigger: 'change'
        }
      ]"
      :multiple="isSignNode"
      :disabled="approverDisabled"
      v-model="computedApporverData"
      :data="approverList"
      :loading="approverLoading"
      :class="{ 'has-space': !approverRequired }"
      @change="handleApproverChange"
      key="approver"
      v-if="approverVisible"
    ></MemberSelectField>
  </div>
</template>

<script>
import { getOption, isNil } from './utils';


import MemberSelectField from './member-select-field.vue';

export default {
  name: 'ApprovalSelect',
  components: {
    MemberSelectField
  },
  inject: {
    flowApproval: {
      default: null
    }
  },
  props: {
    value: {},
    index: [String, Number],
    labelWidth: [String, Number],
    labelKey: {
      type: String,
      default: 'nodename'
    },
    valueKey: {
      type: String,
      default: 'nodeid'
    },

    label: String,
    readonly: Boolean,
    options: {
      type: Array
    },
    showSelect: { type: Boolean, default: true },
    approverVisible: Boolean, // 显示承办人
    approverLabel: {
      type: String,
      default: '承办人'
    },
    approverProp: String,
    approverData: {
      type: Array
    }, // 承办人数据
    approverRequired: Boolean, // 承办人必填
    approverDisabled: Boolean, // 承办人禁用
    paramsData: {
      type: Object
    } // 请求接口额外参数
  },
  data() {
    return {
      node: {},
      nodeId: '',
      approverLoading: false,
      approverList: []
    };
  },
  computed: {
    selectProps() {
      return {
        label: this.labelKey,
        value: this.valueKey
      };
    },
    showIndex() {
      return !isNil(this.index);
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
        // this.node
      }
    },
    computedApporverData: {
      set(value) {
        this.$emit('updateApproverData', value);
      },
      get() {
        return this.approverData || [];
      }
    },
    approverDisableds() {
      return Array.isArray(this.approverData)
        ? this.approverData
            .filter((item) => item.disabled)
            .map((item) => item.id)
        : [];
    },
    // 是否为会签节点
    isSignNode() {
      return this.node && this.node.nodetype === 'sign';
    }
  },
  watch: {
    value() {
      this.setSelected();
    }
  },
  methods: {
    getIndex(index) {
      if (Number(index) < 10) {
        return `0${index}`;
      }
      return index;
    },
    setSelected() {
      let node = getOption(this.options, this.value, this.valueKey);
      this.node = node;
      this.$emit('change', this.value, node);

      const { nodeid } = node;
      this.getApproverList({ nodeid });
    },

    // 承办人改变时
    handleApproverChange(data) {
      this.$emit('approver-change', data);
    },

    // 获取审批人选择列表
    async getApproverList(params) {
      const data = {
        ...this.paramsData,
        ...params
      };
      this.approverLoading = true;
      this.approverList = [];

      try {
        const result = await this.flowApproval?.queryPowerItems(data);
        if (Array.isArray(result)) {
          this.approverList = result;
          this.$emit('approver-list-change', result);
        }

        return result;
      } catch (error) {
        console.log(error, 'error');
        this.flowApproval?.showMessage('获取承办人列表失败，请刷新重试');
        throw Error(error);
      } finally {
        this.approverLoading = false;
      }
    }
  },
  created() {
    this.setSelected();
  }
};
</script>

<style></style>
