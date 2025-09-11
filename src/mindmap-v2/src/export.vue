<template>
  <el-dialog class="mindmap-export-dialog" title="导出" :append-to-body="true" :visible.sync="syncVisible" width="50%" top="15vh">
    <div class="download-list">
      <div
        class="download-list-item"
        v-for="item in downTypeList"
        :key="item.type"
        :class="{ active: exportType === item.type }"
        @click="exportType = item.type"
      >
        <i class="download-list-item__icon" >
          <component :is='item.icon'></component>
        </i>
        <div class="download-list-item__content">
          <div class="download-list-item__label">{{ item.name }}</div>
          <div class="download-list-item__description">{{ item.desc }}</div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" :loading="loading" @click="confirm"
        >确定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { PdfIcon, PngIcon, SvgIcon, XMindIcon } from './icons';
const downTypeList = [
  {
    name: "图片",
    type: "png",
    icon: "PngIcon",
    desc: "适合查看分享",
  },
  {
    name: "SVG",
    type: "svg",
    icon: "SvgIcon",
    desc: "可缩放矢量图形",
  },
  {
    name: "PDF",
    type: "pdf",
    icon: "PdfIcon",
    desc: "适合打印",
  },
  {
    name: "XMind",
    type: "xmind",
    icon: "XMindIcon",
    desc: "XMind格式",
  },
];

export default {
  name: "Export",
  components: {
    PngIcon,
    SvgIcon,
    PdfIcon,
    XMindIcon,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    mindMap: {
      type: Object,
    },
    name: { type: String, default: "思维导图" },
  },
  computed: {
    syncVisible: {
      set(v) {
        this.$emit("update:visible", v);
      },
      get() {
        return this.visible;
      },
    },
  },
  data() {
    return {
      exportType: "xmind",
      loading: false,
      downTypeList,
    };
  },
  methods: {
    async export(...args) {
      try {
        this.loading = true;
        await this.mindMap.export(...args);
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    cancel() {
      this.$emit("update:visible", false);
    },
    confirm() {
      switch (this.exportType) {
        case "svg":
          this.export(
            this.exportType,
            true,
            this.name,
            `* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }`
          );
          break;
        default:
          this.export(this.exportType, true, this.name);
          break;
      }
    },
  },
};
</script>

