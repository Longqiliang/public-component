<template>
  <div class="mindmap-scale-container" :class="{ isDark: isDark }">
    <el-tooltip
      class="item"
      effect="dark"
      content="缩小"
      placement="top"
    >
      <div class="scale-btn el-icon-minus" @click="narrow"></div>
    </el-tooltip>
    <div class="scaleInfo">
      <input
        type="text"
        v-model="scaleNum"
        @change="onScaleNumChange"
        @focus="onScaleNumInputFocus"
      />
      <span>%</span>
    </div>
    <el-tooltip
      class="item"
      effect="dark"
      content="放大"
      placement="top"
    >
      <div class="scale-btn el-icon-plus" @click="enlarge"></div>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Scale',
  props: {
    mindMap: {
      type: Object
    },
    isDark: {
      type: Boolean
    }
  },
  data() {
    return {
      scaleNum: 100,
      cacheScaleNum: 0
    }
  },
  watch: {
    mindMap(val, oldVal) {
      if (val && !oldVal) {
        this.mindMap.on('scale', scale => {
          this.scaleNum = this.toPer(scale)
        })
        this.scaleNum = this.toPer(this.mindMap.view.scale)
      }
    }
  },
  methods: {
    // 转换成百分数
    toPer(scale) {
      return (scale * 100).toFixed(0)
    },

    // 缩小
    narrow() {
      this.mindMap.view.narrow()
    },

    // 放大
    enlarge() {
      this.mindMap.view.enlarge()
    },

    // 聚焦时缓存当前缩放倍数
    onScaleNumInputFocus() {
      this.cacheScaleNum = this.scaleNum
    },

    // 手动输入缩放倍数
    onScaleNumChange() {
      const scaleNum = Number(this.scaleNum)
      if (Number.isNaN(scaleNum) || scaleNum <= 0) {
        this.scaleNum = this.cacheScaleNum
      } else {
        const cx = this.mindMap.width / 2
        const cy = this.mindMap.height / 2
        this.mindMap.view.setScale(this.scaleNum / 100, cx, cy)
      }
    }
  }
}
</script>
