<template>
  <div class="mindmap-navigator-container">
    <!-- <el-tooltip ref="tooltip" effect="dark" placement="top" :content="tooltipContent"></el-tooltip> -->

    <div class="mindmap-navigator-item" v-for="(item, i) in list" :key="i">
      <el-tooltip ref="tooltip" effect="dark" placement="top" :content="item.text">
        <div class="navigator-btn" @click="item.onClick">
          <i :class="item.icon"></i>
        </div>
      </el-tooltip>
    </div>

    <div class="mindmap-navigator-item">
      <Scale :mindMap="mindMap" />
    </div>
  </div>
</template>

<script>
import Scale from './scale.vue';
// import { debounce } from "lodash-es";

export default {
  name: 'Navigator',
  components: {
    Scale
  },
  props: {
    mindMap: {
      type: Object
    }
  },
  data() {
    return {
      tooltipContent: '',
      list: [
        {
          text: '回到根节点',
          icon: 'el-icon-aim',
          tooltip: true,
          onClick: () => this.backToRoot()
        },
        // {
        //   text: '全屏查看',
        //   icon: 'el-icon-full-screen',
        //   tooltip: true
        // }
      ]
    }
  },
  methods: {
    backToRoot(){
      if (this.mindMap) {
        this.mindMap.renderer.setRootNodeCenter()
      }
    }
  },
  // created() {
  //   this.activateTooltip = debounce(
  //     (tooltip) => {
  //       tooltip.handleShowPopper()
  //     },
  //     50
  //   );
  // },
  // methods: {
  //   handleIconMouseEnter(event, item) {
  //     if (item.tooltip && item.text) {
  //       this.tooltipContent = item.text
  //     }
  //     const tooltip = this.$refs.tooltip;
  //     tooltip.referenceElm = event.target;
  //     tooltip.$refs.popper && (tooltip.$refs.popper.style.display = "none");
  //     tooltip.doDestroy();
  //     tooltip.setExpectedState(true);
  //     this.activateTooltip(tooltip);
  //   },
  //   handleIconMouseLeave() {
  //     const tooltip = this.$refs.tooltip;
  //     if (tooltip) {
  //       tooltip.setExpectedState(false);
  //       tooltip.handleClosePopper();
  //     }
  //   },
  // },
}
</script>
