<template>
  <div class="workflow-approval">
    <slot :status="mode"></slot>
    <zx-form :label-width="labelWidth" :save-label-width="labelWidth" :show-reset="false" :show-save="false"
      label-position="top" size="medium" :model="$data" @submit="onSubmit" ref="waasForm">

      <zx-radio-field label="操作" :options="modeOptions" prop="mode"
        :rules="[{ required: true, message: '请选择', trigger: 'change' }]" :value="mode" :disabled="modeDisabled"
        class="has-space workflow-field" key="mode" @change="handleModeChange" v-if="showMode"></zx-radio-field>

      <zx-input-field label="当前节点" readonly :value="nodeInfo.nodename" class="has-space workflow-field"
        v-if="showCurrentNode || isAssist"></zx-input-field>

      <flow-distribution label="下一节点" :options="nextOptions" v-bind="nextNodeProps"
        :approverData.sync="nextApproverDataMap" v-model="nextNodeid" @change="handleNextNodeChange"
        @approver-change="handleApproverChange" @approver-list-change="handleApproverListChange" v-if="_showNextNode"
        v-show="showNextNode" ref="nextNodeRef" key="nextNode"></flow-distribution>

      <flow-distribution label="退回到" :options="lastOptions" v-bind="lastNodeProps"
        :approverData.sync="lastApproverDataMap" v-model="lastNodeid" @change="handleLastNodeChange"
        @approver-list-change="handleLastApproverListChange" v-if="showLastNode" ref="lastNodeRef"
        key="lastNode"></flow-distribution>


      <MemberSelectField label="协办人员" :required="false" :multiple="true" v-model="assister" :data="assisterData"
        :loading="assisterLoading" key="assister" class="has-space" v-if="showAssister"></MemberSelectField>

      <MemberSelectField label="转办人员" :multiple="false" prop="transfer" :rules="[
        { required: true, message: '请选择转办人', trigger: 'change' }
      ]" v-model="transfer" :data="transferData" :loading="transferLoading" key="transfer" v-if="showTransfer">
      </MemberSelectField>
      <!-- 当前节点抄送人 -->
      <MemberSelectField label="抄送人" prop="currentCopierData" :type="copierLeaf" :rules="copierRules" :multiple="true"
        :lazy="true" :load-config="copierDataLoadFn" :search-config="copierDataSearchFn" :node-key="copierNodeKey"
        checkbox-align="right" :class="{ 'has-space': !copierRequired }"
        :disabled="!currentAllowCopyExt || copierDisabled" v-model="currentCopierData"
        :defineList="defaultCurrentCopier" key="currentCopierData" v-if="showCurrentCopier"></MemberSelectField>

      <slot name="approval" :status="mode"></slot>

      <TextareaField :options="opinionData" label="处理意见" select-label="常用意见" placeholder="请选择或输入审批意见" v-model="opinion"
        class="has-space" v-if="isShowApprovalOpinion" />

      <slot name="footer" :status="mode">
      </slot>

    </zx-form>
  </div>
</template>

<script>
import { defaultOptionsMap, flowTypes } from './constant';
import FlowDistribution from './flow-distribution.vue';
import MemberSelectField from './member-select-field.vue';
import TextareaField from './textarea-field.vue';
import { concatObjectValues } from './utils.js';

const setForkNodeId = (value, key) => {
  if (Array.isArray(value)) {
    return value.map((item) => {
      return {
        ...item,
        forkNodeId: key
      };
    });
  }
};

const pickData = (item) => {
  const extra = item.forkNodeId ? { forkNodeId: item.forkNodeId } : {};
  return {
    userId: item.id,
    userName: item.name,
    dataType: item.item,
    ...extra
  };
};

const getOnlyFirst = (str) => {
  const arr = str.split(',');
  if (arr.length === 1) return str;
};

export default {
  name: 'WorkflowApproval',
  provide() {
    return {
      flowApproval: this
    };
  },
  components: {
    FlowDistribution,
    MemberSelectField,
    TextareaField
  },
  data() {
    return {
      labelWidth: 'auto',

      // 操作
      mode: '',
      modeOptions: [],

      // 节点信息
      nodeInfo: {},
      nodeid: '',
      deployid: '',

      selectProps: {
        label: 'nodename',
        value: 'nodeid'
      },

      // 上一节点
      lastNodeid: '',
      lastNode: null,
      lastOptions: [],
      lastApproverDataMap: {},

      backType: '',

      // 下一节点
      nextNodeid: '',
      nextNode: null,
      nextOptions: [],
      nextApproverDataMap: {},
      // 审批人列表map
      nextApproverListMap: {},

      // 转办人
      transfer: [],
      transferData: [],
      transferLoading: false,

      // 抄送人
      copierLeaf: ['user'],
      copierNodeKey: 'id',
      copierLoading: false,

      currentCopierData: [], // 当前节点抄送人
      defaultCurrentCopier: [],
      // 协办人
      isAssist: false, // 协办审批
      assister: [],
      assisterData: [],
      assisterLoading: false,

      // 意见
      opinionShow: false,
      opinion: '',
      opinionData: [],
    }
  },

  props: {
    showOpinion: {
      type: Boolean,
      default: true
    }, // 显示审批意见
    showNextNode: {
      type: Boolean,
      default: true,
    }, // 显示下一节点
    lazy: {
      type: Boolean,
      default: true
    }, // 是否自动初始化数据
    type: {
      type: String,
      default: flowTypes[0]
    },
    formData: {
      type: Object,
      default() {
        return {};
      }
    },
    proxy: {
      type: String,
      default: '/waas'
    },
    serviceid: String, // 流程服务编号

    appid: String, // 应用id

    businame: String, // 业务名称

    taskid: String, // 任务id 为空为申请，否则为审批

    busiid: String, // 业务id

    qyid: String, // 企业id

    userinfo: {
      type: Object,
      default() {
        const userStr = sessionStorage.getItem('user');
        if (userStr) {
          const user = JSON.parse(userStr);
          return {
            ...user,
            username: user.nickname || user.username
          };
        }
        return { userid: '', username: '' };
      }
    },

    httpRequest: Function,

    version: {
      type: String,
      default: 'v2'
    }, // 版本号

    approverVisible: { type: Boolean, default: false }, // 承办人显示
    approverRequired: Boolean, // 承办人必填
    approverDisabled: Boolean, // 承办人禁用
    copierRequired: Boolean, // 抄送人必填
    copierDisabled: Boolean, // 抄送人禁用
    modeDisabled: Boolean, // 操作禁用
  },
  computed: {
    http() {
      return this.httpRequest || this.$axios;
    },
    prefixUrl() {
      return `${this.proxy}/api/${this.version}/flow`;
    },
    approvalProps() {
      return {
        labelWidth: this.nodeLabelWidth,
        approverRequired: this.approverRequired,
        approverDisabled: this.approverDisabled
      };
    },
    nextNodeProps() {
      return {
        ...this.approvalProps,
        approverProp: 'nextApproverDataMap',
        prop: 'nextNodeid',
        approverVisible: this.approverVisible,
        approverMultiple: this.isCurrentForkNode,
        approverDisabled: this.approverDisabled || this.isCurrentForkNode,
        paramsData: this.getPowerItemsParams({ userType: '1' })
      };
    },
    lastNodeProps() {
      return {
        ...this.approvalProps,
        approverProp: 'lastApproverDataMap',

        prop: 'lastNodeid',
        approverDisabled: true,
        approverRequired: true,
        paramsData: this.getPowerItemsParams({ userType: '5' })
      };
    },
    isApproval() {
      return this.type === flowTypes[0];
    },

    // 是否为审批
    isApprovalProcess() {
      return this.taskid ? true : false;
    },

    isShowApprovalOpinion() {
      return this.isApprovalProcess && this.showOpinion;
    },

    // 显示操作
    showMode() {
      return this.isApproval && this.taskid;
    },

    copierRules() {
      return [
        {
          required: this.copierRequired,
          message: '请选择抄送人',
          trigger: 'change'
        }
      ];
    },
    isConsentMode() {
      const modes = ['consent'];
      return modes.includes(this.mode);
    },
    isBackMode() {
      const modes = ['back'];
      return modes.includes(this.mode);
    },
    // 显示下一节点
    // 协办时不显示下一节点
    // 当下一节点选项只有结束节点时隐藏
    _showNextNode() {
      return this.isConsentMode && !this.isAssist && !(this.isEndNode && this.nextOptions.length === 1);
    },
    // 显示上一节点
    showLastNode() {
      return this.isBackMode && !this.isAssist;
    },

    // 显示当前节点
    showCurrentNode() {
      const modes = ['transfer', 'assist', 'hangUp'];
      return modes.includes(this.mode);
    },

    // 当前节点抄送人是否可选
    currentEnableCopy() {
      return this.nodeInfo && this.nodeInfo.authorizeConfig?.enableCopy;
    },
    // 当前节点抄送人是否允许勾选其他人
    currentAllowCopyExt() {
      return this.nodeInfo && this.nodeInfo.authorizeConfig?.allowCopyExt;
    },

    copyShowInWeb() {
      return this.nodeInfo && this.nodeInfo.authorizeConfig?.showInWeb;
    },

    allowCurrentCopier() {
      return !this.isAssist && this.currentEnableCopy;
    },

    showCurrentCopier() {
      return !this.isAssist && this.currentEnableCopy && this.copyShowInWeb;
    },

    // 显示协办人
    showAssister() {
      const modes = ['assist'];
      return modes.includes(this.mode);
    },
    showTransfer() {
      const modes = ['transfer'];
      return modes.includes(this.mode);
    },

    isEndNode() {
      return this.nextNode && this.nextNode.nodetype === 'end';
    },

    isCurrentForkNode() {
      return !!this.nodeInfo?.forkid;
    },

    isCurrentSignNode() {
      return this.nodeInfo && this.nodeInfo.nodetype === 'sign';
    },

    isReject() {
      return this.mode === 'reject';
    },

    nodeBusiid() {
      return this.busiid || this.flowBusiid;
    },

    // 根据当前操作，获取对应节点状态
    getModeNode() {
      switch (this.mode) {
        case 'consent':
          return this.nextNode;
        case 'back':
          return this.lastNode;
        default:
          return this.nodeInfo;
      }
    },

    getState() {
      const node = this.getModeNode;
      return {
        status: this.mode,
        node,
        nodeType: node?.nodetype
      };
    },
  },
  watch: {
    submitLoading: {
      handler(val) {
        if (val !== this.loadingBtn) {
          this.loadingBtn = val;
        }
      },
      immediate: true
    },
    submitDisabled: {
      handler(val) {
        if (val !== this.disabledBtn) {
          this.disabledBtn = val;
        }
      },
      immediate: true
    }
  },

  methods: {
    showMessage(options) {
      const defaultOptions = {
        showClose: true
      };
      let data;
      if (typeof options === 'string') {
        data = {
          ...defaultOptions,
          message: options
        };
      } else {
        data = {
          ...defaultOptions,
          ...options
        };
      }
      return this.$message(data);
    },

    copierDataSearchFn() {
      const { enterid } = this.userinfo;
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/app/depts/${enterid}/users?name={name}`
      };
      return options;
    },
    copierDataLoadFn(level, type, node) {
      let id = node && node[this.copierNodeKey];
      if (level === 0) {
        const { enterid } = this.userinfo;
        id = enterid;
      }

      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/app/depts/${id}/users`
      };
      return options;
    },
    // 开始节点api
    getFirstNodeInfo(params = {}) {
      if (!this.serviceid) {
        throw Error('serviceid 缺失，初始化工作流失败');
      }
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getFirstNodeInfo/${this.serviceid}`,
        params
      };

      return this.http(options);
    },

    // 根据任务id获取节点信息api
    getNodeInfoByTaskid(taskid = this.taskid) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getNodeInfoByTaskid/${taskid}`
      };
      return this.http(options);
    },

    // 下一节点api
    getNextNodeInfo(nodeid, params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getNextNodeInfo/${nodeid}`,
        params
      };
      return this.http(options);
    },

    // 上一节点api
    getLastNodes(taskid, params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/beforeNodes/${taskid}`,
        params
      };
      return this.http(options);
    },

    // 意见列表api
    getOpinionModels(nodeid, params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/getOpinionModels/${nodeid}`,
        params
      };
      return this.http(options);
    },

    // 授权用户列表api
    queryPowerItems(params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/queryPowerItems`,
        params
      };
      return this.http(options);
    },
    // 懒加载抄送人组织架构
    queryCopierListById(id, params) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/app/depts/${id}/users`,
        params
      };
      return this.http(options);
    },

    // 启动流程，保存任务api
    saveFlowData(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/saveFlowData`,
        data
      };
      return this.http(options);
    },

    // 转办任务提交api
    saveTransfor(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/saveTransfor`,
        data
      };
      return this.http(options);
    },

    // 回退任务提交api
    saveFlowBackData(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/saveFlowBackData`,
        data
      };
      return this.http(options);
    },

    // 驳回任务提交api
    abandonBusiness(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/abandonBusiness`,
        data
      };
      return this.http(options);
    },

    // 作废任务提交api
    cancelBusiness(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/cancelBusiness`,
        data
      };
      return this.http(options);
    },

    // 挂起任务提交api
    hangProcess(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/hangProcess`,
        data
      };
      return this.http(options);
    },

    // 获取流程信息
    getIndexInfo(busiid) {
      const options = {
        method: 'GET',
        url: `${this.prefixUrl}/index/${busiid}`
      };
      return this.http(options);
    },

    invalidBusiness(data) {
      const options = {
        method: 'POST',
        url: `${this.prefixUrl}/invalidBusiness`,
        data
      };

      return this.http(options);
    },

    // 获取上一节点信息
    async getLastNode(params) {
      try {
        const result = await this.getLastNodes(this.taskid, params);
        if (Array.isArray(result) && result.length) {
          this.lastOptions = result;
          this.$nextTick(() => {
            this.$refs.lastNodeRef?.checkDefaultFirstOption();
          });
        }

        return Promise.resolve(result);
      } catch (error) {
        console.log(error);
        this.showMessage('获取上一节点信息失败');

        return Promise.reject(error);
      }
    },

    setDefaultLastNode(data) {
      if (data) {
        const { nodeid } = data;
        this.lastNodeid = nodeid;
        this.handleLastNodeChange(nodeid, data);
      }
    },

    // 获取下一步节点信息
    async getNextNode(nodeid, params = {}) {
      const { userid } = this.userinfo;
      const data = {
        taskid: this.taskid,
        userid,
        ...this.formData,
        ...params
      };

      try {
        const result = await this.getNextNodeInfo(nodeid, data);
        if (Array.isArray(result) && result.length) {
          this.nextOptions = result;
          this.$nextTick(() => {
            this.$refs.nextNodeRef?.checkDefaultFirstOption();
          });
        }

        return result;
      } catch (error) {
        this.showMessage('获取下一步节点信息失败');
        return Promise.reject(error);
      }
    },

    // 重置下一步节点信息
    resetNextNode(formData) {
      this.nextNodeid = '';
      this.nextNode = {};
      return this.getNextNode(this.nodeid, formData);
    },

    getPowerItemsParams(params) {
      const { userid } = this.userinfo;
      const data = {
        qyid: this.qyid,
        userid,
        taskid: this.taskid,
        ...this.formData,
        ...params
      };
      return data;
    },

    // 获取上一节点承办人列表
    async getLastApproverData(params) {
      const data = this.getPowerItemsParams({ userType: '5', ...params });

      this.lastApproverLoading = true;
      this.lastApproverData = [];
      this.lastApprover = [];
      this.lastApproverDisableds = [];

      const result = await this.queryPowerItems(data);
      const lastApproverDisableds = [];

      // 上一节点默认全部勾选
      const items = result.map((item) => {
        lastApproverDisableds.push(item.id);
        return {
          ...item,
          disabled: true
        };
      });
      this.lastApproverLoading = false;
      this.lastApproverData = items;
      this.lastApprover = items;
      this.lastApproverDisableds = lastApproverDisableds;

      return items;
    },

    // 设置上一节点承办人
    setLastApprover(data, id) {
      let key = id || getOnlyFirst(this.lastNodeid);
      if (!key) {
        return;
      }

      this.setMapData(this.lastApproverDataMap, key, data);
    },

    // 设置默认承办人
    setApprover(data, id) {
      let key = id || getOnlyFirst(this.nextNodeid);
      if (!key) {
        return;
      }
      this.setMapData(this.nextApproverDataMap, key, data);
    },

    // 下一节点承办人改变时
    handleApproverChange(data, key) {
      this.$emit('approver-change', data, key, this.nextApproverDataMap);
    },

    // 获取协办人列表
    async getAssisterData(params) {
      const { nodeid } = this.nodeInfo;
      const data = this.getPowerItemsParams({
        userType: '3',
        nodeid,
        ...params
      });

      this.assisterLoading = true;
      this.assisterData = [];
      this.assister = [];
      const result = await this.queryPowerItems(data);

      this.assisterLoading = false;
      this.assisterData = result;

      return result;
    },

    // 设置默认协办人
    setAssister(data) {
      this.assister = data;
    },

    // 获取转办人列表
    async getTransferData(params) {
      const { nodeid } = this.nodeInfo;
      const data = this.getPowerItemsParams({
        userType: '4',
        nodeid,
        ...params
      });

      this.transferLoading = true;
      this.transferData = [];
      this.transfer = [];

      const result = await this.queryPowerItems(data);

      this.transferLoading = false;
      this.transferData = result;

      return result;
    },

    // 设置默认转办人
    setTransfer(data) {
      this.transfer = data;
    },

    // 获取默认抄送人列表
    async getDefaultCopier(params) {
      const data = this.getPowerItemsParams({
        userType: '2',
        ...params
      });

      this.copierLoading = true;
      try {
        const items = await this.queryPowerItems(data);
        if (Array.isArray(items)) {
          const result = items.map((item) => {
            return {
              ...item,
              disabled: true
            };
          });
          return result;
        }
        return [];
      } catch (error) {
        throw Error(error);
      } finally {
        this.copierLoading = false;
      }
    },
    // 设置默认抄送人
    setCopier(data) {
      this.currentCopierData = data;
    },

    async getOpinionData(nodeid) {
      this.opinion = '';
      this.opinionData = [];
      const result = await this.getOpinionModels(nodeid, {
        qyid: this.qyid,
        actionType: this.mode
      });

      this.opinionData = result.map((res) => {
        return {
          label: res,
          value: res
        };
      });
    },

    getDefaultModeOptions() {
      return [
        {
          label: defaultOptionsMap.consent,
          value: 'consent'
        }
      ];
    },

    getModeOptions(options = {}) {
      const modeOptions = this.getDefaultModeOptions();
      options &&
        Object.keys(defaultOptionsMap).forEach((key) => {
          if (options[key]) {
            modeOptions.push({
              label: defaultOptionsMap[key],
              value: key
            });
          }
        });

      return modeOptions;
    },

    // 设置审批意见
    setOpinion(value) {
      this.opinion = value;
    },

    getCurrentCopierData() {
      const { nodeid } = this.nodeInfo;
      this.getDefaultCopier({ nodeid }).then((result) => {
        this.currentCopierData = result;
        this.defaultCurrentCopier = result.slice();
      });
    },

    // 操作改变
    handleModeChange(mode) {
      this.mode = mode;
      this.$emit('mode-change', mode);

      this.getOpinionData(this.nodeid);
      switch (mode) {
        case 'consent':
          // 同意
          return;
        case 'transfer':
          // 转办
          // this.getTransferData();

          return;
        case 'assist':
          // 协办
          // this.getAssisterData();
          break;
        case 'back':
          // 退回
          if (this.lastOptions && this.lastNodeid) return;
          this.getLastNode();
          return;
      }
    },

    // 上一节点改变
    async handleLastNodeChange(value, data) {
      const node = data.length === 1 ? data[0] : data;
      this.lastNode = node;
      this.$emit('lastnode-change', value, node);
    },

    setMapData(map, key, data) {
      if (!map[key]) {
        this.$set(map, key, data);
        return;
      }
      map[key] = data;
      return map;
    },

    handleApproverListChange(data, key) {
      // this.approverData = data;
      // 当前节点为分发节点时，默认勾选所有审批人
      // 当审批人只有一个时，默认勾选
      if (this.isCurrentForkNode) {
        this.setMapData(this.nextApproverDataMap, key, [...data]);
      } else if (Array.isArray(data) && data.length === 1) {
        this.setMapData(this.nextApproverDataMap, key, [...data]);
      }
      this.setMapData(this.nextApproverListMap, key, data);
      this.$emit('approver-list-change', data, key, this.nextApproverListMap);
    },

    // 上一节点承办人列表改变时
    handleLastApproverListChange(data, key) {
      // 默认勾选所有承办人
      this.setMapData(this.lastApproverDataMap, key, data);
    },

    // 下一节点改变
    handleNextNodeChange(value, data) {
      const node = data.length === 1 ? data[0] : data;
      this.nextNode = node;
      this.nextApproverListMap = {};
      this.$emit('nextnode-change', value, node);
    },

    handleSubmit() {
      const form = this.$refs.waasForm && this.$refs.waasForm.getForm();
      form.submit();
    },

    getPickData(dataMap) {
      const data = concatObjectValues(dataMap, setForkNodeId);
      if (!data) return;
      return data.map(pickData);
    },

    getToDoUsers() {
      switch (this.mode) {
        case 'consent':
          return this.getPickData(this.nextApproverDataMap);
        case 'back':
          return this.getPickData(this.lastApproverDataMap);

        case 'transfer':
          return this.transfer.map(pickData);
      }
    },
    getCopyUsers() {
      return this.currentCopierData.map(pickData);
    },
    getSubNodeData(data) {
      if (Array.isArray(data)) {
        const joinKeys = ['nodetype', 'nodename', 'nodeid'];
        let nodeMap = {};
        data.forEach((item) => {
          for (const [key, value] of Object.entries(item)) {
            if (!nodeMap[key]) {
              nodeMap[key] = value;
            } else if (joinKeys.includes(key)) {
              nodeMap[key] += ',' + value;
            }
          }
        });
        return nodeMap;
      } else {
        return data;
      }
    },
    getConsentSubmitData() {
      const serviceid = this.serviceid;
      const commonData = this.getCommonData();
      const {
        signid,
        forkid,
        supertaskid,
        nodetype: subnodetype,
        nodename: subnodename,
        nodeid: subnodeid,
        relate,
        pnodeid
      } = this.getSubNodeData(this.nextNode);
      return {
        pnodeid,
        ...commonData,
        serviceid,
        signid,
        forkid,
        supertaskid,
        subnodename,
        subnodetype,
        subnodeid,
        relate
      };
    },

    // 协办人提交数据
    getAssisterSubmitData() {
      const commonData = this.getCommonData();
      return {
        assistTask: true,
        ...commonData
      };
    },
    // 获取协办数据
    getAssistSubmitData() {
      const commonData = this.getCommonData();
      const assistUsers = this.assister.map(pickData);
      const subnodeid = this.nodeInfo.nodeid;
      return {
        ...commonData,
        subnodeid,
        assistUsers
      };
    },

    getTransferSubmitData() {
      let commonData = this.getCommonData();
      // 兼容后端数据
      return {
        targetUser: commonData.toDoUsers,
        taskId: this.taskid,
        originUser: {
          userId: this.userinfo.userid,
          userName: this.userinfo.username,
          dataType: 'user'
        },
        ...commonData
      };
    },

    getBackSubmitData() {
      const commonData = this.getCommonData();

      const {
        signid,
        forkid,
        supertaskid,
        nodetype: subnodetype,
        nodename: subnodename,
        nodeid: subnodeid,
        relate,
        pnodeid
      } = this.getSubNodeData(this.lastNode);

      return {
        pnodeid,
        ...commonData,
        signid,
        forkid,
        supertaskid,
        subnodename,
        subnodetype,
        subnodeid,
        relate
      };
    },

    getRejectSubmitData() {
      let commonData = this.getCommonData();
      if (this.isPrivate) {
        commonData.v20 = this.isAssessment;
      }

      return {
        ...commonData
      };
    },

    getCommonData() {
      const toDoUsers = this.getToDoUsers();
      const copyUsers = this.getCopyUsers();
      const { userid, username } = this.userinfo;
      const { busiid, deployid, nodetype, nodename, nodeid } = this.nodeInfo;

      const parentData = this.pnodeid
        ? {
          pnodeid: this.pnodeid,
          pbusiid: this.pbusiid
        }
        : null;

      return {
        busiid,
        deployid,
        nodetype,
        nodename,
        nodeid,
        toDoUsers,
        copyUsers,
        userid,
        username,
        businame: this.businame,
        taskid: this.taskid,
        appid: this.appid,
        qyid: this.qyid,
        opinion: this.opinion,
        ...this.formData,
        ...parentData
      };
    },

    onSubmit() {
      let data;
      // 协办审批
      if (this.isAssist) {
        data = this.getAssisterSubmitData();
      } else {
        switch (this.mode) {
          case 'consent':
            data = this.getConsentSubmitData();
            break;
          case 'back':
            data = this.getBackSubmitData();
            break;
          case 'assist':
            data = this.getAssistSubmitData();
            break;
          case 'transfer':
            data = this.getTransferSubmitData();
            break;
          case 'reject':
            data = this.getRejectSubmitData();
            break;
          default:
            data = this.getCommonData();
            break;
        }
      }

      if (!this.$listeners?.submit) {
        this.submit(data);
        return;
      }

      this.$emit('submit', data, this.getState, this.submit);
    },

    async submit(data) {

      const state = this.getState;

      try {
        const result = await this.getResponse(data);
        this.$emit('submit-success', data, state, result);
        return result;
      } catch (error) {
        if (error?.message) {
          this.showMessage(error.message);
        }
        this.$emit('submit-error', data, state, error);
        return error;
      } finally {


        this.$emit('submit-end', data, state);
      }
    },

    getResponse(data) {
      switch (this.mode) {
        case 'consent':
          // 同意
          return this.saveFlowData(data);
        case 'transfer':
          // 转办
          return this.saveTransfor(data);
        case 'assist':
          // 协办
          return this.saveFlowData(data);
        case 'hangUp':
          // 挂起
          return this.hangProcess(data);
        case 'reject':
          // 驳回
          return this.abandonBusiness(data);
        case 'back':
          // 退回
          return this.saveFlowBackData(data);
        case 'cancellation':
          // 作废
          return this.cancelBusiness(data);
      }
    },

    // 申请
    async initCreate() {
      const firstNodeInfo = await this.getFirstNodeInfo({
        ...this.formData,
        appid: this.appid
      });

      if (!firstNodeInfo || firstNodeInfo.success === false) {
        this.showMessage('获取节点信息失败，请刷新后重试');
        return Promise.reject(firstNodeInfo);
      }

      this.deployid = firstNodeInfo.deployid;

      this.initFlowData(firstNodeInfo);

      return {
        nodeInfo: firstNodeInfo,
        userinfo: this.userinfo
      };
    },

    // 审批
    async initApproval() {
      const nodeInfo = await this.getNodeInfoByTaskid(this.taskid);

      if (!nodeInfo || nodeInfo.success === false) {
        this.showMessage('获取节点信息失败，请刷新后重试');
        return Promise.reject(nodeInfo);
      }

      this.flowBusiid = nodeInfo.busiid;

      await this.initFlowData(nodeInfo);

      return {
        nodeInfo,
        userinfo: this.userinfo
      };
    },

    async initFlowData(nodeData) {
      if (nodeData) {
        this.nodeInfo = nodeData;

        const { nodeid, busiid, assist, subFlowInfo } = nodeData;
        this.nodeid = nodeid;
        let clickOptions = nodeData.clickOptions;

        // let clickOptions = {
        //   reject: true,
        //   transfer: true,
        //   assist: true,
        //   hangUp: true,
        //   reject: true,
        //   back: true,
        //   cancellation: true
        // };

        if (assist) {
          this.isAssist = true;
          clickOptions = {};
        }

        if (subFlowInfo) {
          this.subProcess = subFlowInfo?.flows;
        }

        this.modeOptions = this.getModeOptions(clickOptions);
        this.$nextTick(() => {
          this.handleModeChange('consent'); // 默认选中同意
        });

        if (!assist) {
          await this.getNextNode(nodeid, {
            busiid
          });
          this.allowCurrentCopier && this.getCurrentCopierData();
        }
      }
    },

    // 详情
    async initDetail() {
      const infoResult = await this.getIndexInfo(this.busiid);
      this.indexInfo = infoResult;
      if (infoResult && infoResult.cancel) {
        const isSelf = this.userinfo.userid === infoResult.startpersonid;
        const endType = infoResult.endtype;
        if (!endType) {
          this.showCancel = isSelf;
        }
      }
      return infoResult;
    },

    async init() {
      try {
        let res;
        if (this.isApproval) {
          if (!this.taskid) {
            res = await this.initCreate();
          } else {
            res = await this.initApproval();
          }
        } else {
          res = await this.initDetail();
        }

        this.$nextTick(() => {
          this.$emit('init-success', res);
        });
      } catch (error) {
        console.log(error);
        this.$emit('init-error', error);
      } finally {
        this.$emit('init-end');
      }
    }
  },

  created() {
    if (this.lazy) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
.workflow-approval {
  font-size: 16px;

  .el-select {
    width: 100%;
  }

  .el-form--label-top .el-form-item__label {
    padding: 0 0 5px;
  }

  .flow-member-list {
    border-bottom: 1px solid #ccc;
    padding-right: 40px;
    position: relative;

    &-item {
      margin-bottom: 5px;
    }

    .flow-member-contact {
      position: absolute;
      right: 0;
      top: 5px;
      display: flex;
      align-items: center;

      &-icon {
        color: #b8b8b8;
        fill: currentColor;
      }

      &-dot {
        color: #ff414b;
        margin-left: 5px;
      }
    }
  }



  .flow-textarea {
    border-radius: inherit;
    padding: 8px 0 0 0;
    border-color: #d2d2d2;

    .el-textarea__inner {
      font-size: 16px;
      padding-left: 10px;
    }

    & .flow-textarea-select {
      bottom: 0;
    }

    &-extra {
      font-size: 16px;
      background: #f6f6f6;
      display: flex;
      justify-content: space-between;
    }

    &-left {
      width: 145px;
      border-right: 1px solid #d2d2d2;
    }

    &-right {
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: #0880f6;

      svg {
        fill: currentColor;
        cursor: pointer;
      }
    }

    &-label {
      color: #0880f6;
      padding: 8px 0;

      &.content-center {
        justify-content: center;
      }
    }

    &-icon {
      margin-right: 0;
      justify-content: center;
    }

    &__caret {
      width: 32px;
      transition: transform .3s;
      transform: rotate(180deg);

      &.is-reverse {
        transform: rotate(0deg);
      }
    }
  }

  .flow-approval-checkbox-group {
    .el-checkbox {
      display: block;
    }
  }

  .flow-approval-tip {
    margin-top: 40px;
    padding: 12px;
    border: 1px solid #ff6969;
    background-color: #fff9e1;
    color: #ff414b;
    font-size: 16px;
    line-height: 1.41;
    min-height: 320px;

    &__label {
      margin-bottom: 15px;
    }

    &__icon {
      width: 10px;
      height: 10px;
      background-color: #ff414b;
      display: inline-block;
    }

    &__content {
      padding-left: 4em;
    }

  }
}
</style>