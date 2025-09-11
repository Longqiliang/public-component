<template>
  <div
    v-if="isShow"
    class="mindmap-contextmenu menus"
    :style="{ left: left + 'px', top: top + 'px' }"
    :class="{ isDark: isDark }"
  >
    <template v-if="type === 'svg'">
      <div class="menu-item" @click="exec('RETURN_CENTER')">
        <span class="name">回到根节点</span>
        <span class="desc">Ctrl + Enter</span>
      </div>

      <div class="menu-item" @click="exec('EXPAND_ALL')">
        <span class="name">展开所有</span>
      </div>

      <div class="menu-item" @click="exec('UNEXPAND_ALL')">
        <span class="name">收起所有</span>
      </div>

      <div class="menu-item" @click="exec('RETURN_CENTER')">
        <span class="name">展开到</span>
        <div class="sub-menus menus">
          <div class="menu-item" v-for="(item, index) in expandList" :key="item" @click="exec('UNEXPAND_TO_LEVEL', false, index + 1)">
            {{ item }}
          </div>
        </div>
      </div>

      <div class="menu-item" @click="exec('RESET_LAYOUT')">
        <span class="name">一键整理布局</span>
         <span class="desc">Ctrl + L</span>
      </div>

       <div class="menu-item" @click="exec('FIT_CANVAS')">
        <span class="name">适应画布</span>
        <span class="desc">Ctrl + i</span>
      </div>

    </template>
  </div>
</template>

<script>
export default {
  name: "MindmapContextmenu",
  props: {
    mindMap: {
      type: Object,
    },
    isDark: Boolean
  },
  data() {
    return {
      isShow: false,
      left: 0,
      top: 0,
      node: null,
      type: "",
      isMousedown: false,
      mosuedownX: 0,
      mosuedownY: 0,
      expandList: ['一级主题', '二级主题', '三级主题', '四级主题', '五级主题', '六级主题']
    };
  },
  created() {
    this.mindMap.on('svg_mousedown', this.onMousedown);
    this.mindMap.on('mouseup', this.onMouseup);
  },
  beforeDestroy() {
    this.mindMap.off('svg_mousedown', this.onMousedown);
    this.mindMap.off('mouseup', this.onMouseup)
  },
  methods: {
    exec(key, disabled, ...args) {
      if (disabled) return;
      switch (key) {
        case 'RETURN_CENTER':
          this.mindMap.renderer.setRootNodeCenter()
          break
        case 'FIT_CANVAS':
          this.mindMap.view.fit()
          break
        default:
           this.mindMap.execCommand(key, ...args)
          break
      }
      this.hide()
    },

    onMousedown(e) {
      let target = e.target;
      if (e.which !== 3 || target.tagName !== 'svg') {
        this.hide()
        return
      }
      this.mosuedownX = e.clientX
      this.mosuedownY = e.clientY
      this.isMousedown = true
    },

    onMouseup(e) {
      if (!this.isMousedown) {
        return
      }
      this.isMousedown = false
      if (
        Math.abs(this.mosuedownX - e.clientX) > 3 ||
        Math.abs(this.mosuedownY - e.clientY) > 3
      ) {
        this.hide()
        return
      }
      this.show2(e)
    },

    show2(e) {
      this.type = 'svg'
      this.left = e.clientX + 10
      this.top = e.clientY + 10
      this.isShow = true
    },

    hide() {
      this.isShow = false
      this.left = 0
      this.top = 0
      this.type = ''
    },
  },
};
</script>
