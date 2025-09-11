<template>
  <div>
    <workflow-approval v-bind="workflow" ref="workflowRef" @init-success="onInitSuccess" @submit="onSubmit"></workflow-approval>
    <el-button @click="handleClick">保存</el-button>


    <workflow-record-list :busiid="busiid"></workflow-record-list>
    <workflow-chart :busiid="busiid"></workflow-chart>
  </div> 
  
</template>

<script setup>
import { ref } from 'vue';
const workflowRef = ref();

const workflow =  {
    businame: '测试流程',
    type: 'approval',
    qyid: 'b3d797c41d8f47108364c020b0c17efd',

    copierRequired: true,
    taskid: '69a6053a18d54e238d250a0eeb49c5fd',
    appid: '259911d5c8b349479cb082513d267b56',
    serviceid: '8ec0089581f1485e85ff31bf2bb09aaa', // 测试
    // busiid: 'ae2d4e5b952c4e60bf7dab2d36882e53'
}

const busiid = ref('');
 
const onInitSuccess = (result) => {
  const { nodeInfo } = result || {};
  busiid.value = nodeInfo?.busiid;
}  

const handleClick = () => {
  workflowRef.value.handleSubmit();
};

const onSubmit = (data) => {
  console.log(data, 'submit');
}
</script>

<style>

</style>