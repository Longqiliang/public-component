<template>
  <div class="mindmap-sidebar-container">
    <div class="mindmap-sidebar is-vertical">
      
      <div class="mindmap-sidebar-item" @click="exec('UNEXPAND_ALL')">
        <span class="mindmap-sidebar-item-icon">   
           <i class="el-icon-remove"></i>
        </span>
        <span class="mindmap-sidebar-item-text">收起</span>
      </div>
      <div class="mindmap-sidebar-item" @click="exec('EXPAND_ALL')">
        <span class="mindmap-sidebar-item-icon">   
          <i class="el-icon-circle-plus"></i>
        </span>
        <span class="mindmap-sidebar-item-text">展开</span>
      </div>
      <div class="mindmap-sidebar-item" @click="exportVisible = true">
        <span class="mindmap-sidebar-item-icon">   
          <i class="el-icon-upload2"></i>
        </span>
        <span class="mindmap-sidebar-item-text">导出</span>
      </div>
    </div>
    <Export :name="name" :mindMap="mindMap" :visible.sync="exportVisible"/>
  </div>
</template>

<script>
import Export from './export.vue';

export default {
  name: "MindMapsidebar",
  props: {
    mindMap: {
      type: Object
    },
    name: String
  },
  components: {
    Export
  },
  data() {
    return {
      exportVisible: false
    }
  },
  methods: {
    exec(key, disabled, ...args) {
      if(disabled) return;
      this.mindMap.execCommand(key, ...args)
    }
  }
};
</script>