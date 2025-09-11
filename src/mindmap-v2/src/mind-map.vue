<template>
  <div class="mindmap-container">
    <div ref="mindMapRef" class="mindmap"></div>
    <template v-if="mindMap">
      <Navigator v-if="navigator" :mindMap="mindMap" />
      <Contextmenu v-if="contextmenu" :mindMap="mindMap" />
      <SideBar v-if="sidebar" :mindMap="mindMap" :name="name" />
      <!-- <Popover
        v-if="popover"
        ref="popoverRef"
        :reference="reference"
        :visible-arrow="false"
        placement="right-start"
        v-model="visible"
        v-bind="popoverProps"
      >
        <slot name="popover" :node="node">
        </slot>
      </Popover> -->
    </template>
  </div>
</template>

<script>
import MindMap from "simple-mind-map";
import Select from "simple-mind-map/src/plugins/Select.js";
import Drag from "simple-mind-map/src/plugins/Drag.js";
import Export from "simple-mind-map/src/plugins/Export.js";
import ExportPDF from "simple-mind-map/src/plugins/ExportPDF.js";
import ExportXMind from "simple-mind-map/src/plugins/ExportXMind.js";

// import Popover from "./popover.vue";
import Navigator from "./navigator.vue";
import Contextmenu from "./contextmenu.vue";
import SideBar from "./sidebar.vue";

import { walkTreeNode, isObject } from "./util";
import { debounce } from 'lodash-es';

// 注册自定义主题
// customThemeList.forEach(item => {
//   MindMap.defineTheme(item.value, item.theme)
// })


MindMap.usePlugin(Drag)
  .usePlugin(Select)
  .usePlugin(ExportPDF)
  .usePlugin(ExportXMind)
  .usePlugin(Export);

export default {
  name: "ZxMindmapV2",
  components: {
    // Popover,
    Navigator,
    Contextmenu,
    SideBar,
  },
  props: {
    value: {},
    props: {
      type: Object,
      default() {
        return {
          label: "text",
          id: "id",
          children: "children",
        };
      },
    },
    fit: Boolean,
    name: String,
    theme: {
      type: String,
      default: "default",
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    readonly: { type: Boolean, default: true },
    popover: {
      type: [Boolean, Object],
      default: false,
    },

    sidebar: {
      type: Boolean,
      default: true,
    },
    contextmenu: {
      type: Boolean,
      default: true,
    },
    navigator: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    value(v) {
      this.setData(v);
    },
    readonly() {
      this.mindMap.setMode(this.readonly ? "readonly" : "edit");
    },
  },
  computed: {
    popoverProps() {
      return isObject(this.popover) ? this.popover : {};
    }
  },
  data() {
    return {
      mindMap: null,
      reference: null,
      visible: false,
      node: {}
    };
  },
  mounted() {
    this.init();
    this.mouseEvent();
  },
  beforeDestroy() {
    if (this.popover) {
      this.mindMap.off("node_mouseenter", this.debounceFn);
      this.mindMap.off("node_mouseleave", this.doClose);
    }
  },
  methods: {
    normalize(data) {
      const labelName = this.props?.label || "text";
      const idName = this.props?.id || "uid";
      const childrenName = this.props?.children || "children";
      const result = Array.isArray(data) ? data : [data];
      walkTreeNode(
        result,
        (parent) => {
          if (!parent.data) parent.data = {};
          parent.data.text = parent[labelName];
          parent.data.uid = parent[idName];
          if (childrenName !== 'children') {
            parent[childrenName] && (parent.children = parent[childrenName]) 
          }
        },
        childrenName
      );
      return Array.isArray(data) ? result : result[0];
    },
    setData(data) {
      if (data.root) {
        this.mindMap.setFullData(data);
      } else {
        const mindMapData = this.normalize(data);

        this.mindMap.setData(mindMapData);
      }
      this.mindMap.view.reset();
    },
    getOptions() {
      let options = Object.assign({
        fit: false,
        initRootNodePosition: ['center', 'center'],
        exportPaddingX: 30,
        exportPaddingY: 30,
      }, this.options);

      if (this.fit) {
        options.fit = true;
      }

      if (this.readonly) {
        options.readonly = true;
      }

      return {
        layout: this.layout,
        theme: this.theme,
        ...options
      }
    },
    init() {
      const options = this.getOptions();
      this.mindMap = new MindMap({
        el: this.$refs.mindMapRef,
        ...options
      });

      // 重写 setRootNodeCenter 回到原点方法
      Object.defineProperty(this.mindMap.renderer, 'setRootNodeCenter', {
        value: function() {
          const width = this.mindMap.draw.width()
          const root = this.mindMap.renderer.root
          const left = root.left
          const top = root.top
          const node = {
            width,
            height: root.height,
            left,
            top
          }
          this.mindMap.renderer.moveNodeToCenter(node)
        }
      })

      this.setData(this.value);
    
    },
    doShow(el, event) {
      const { nodeData } = el;
      this.reference = event.target;
      this.visible = true;
      this.node = nodeData;
    },
    doClose() {
      this.reference = null;
      this.visible = false;
    },
    mouseEvent() {
      if (this.popover) {
        this.debounceFn = debounce(this.doShow, 200);
        this.mindMap.on("node_mouseenter", this.debounceFn);
        this.mindMap.on("node_mouseleave", this.doClose);
      }
    },

    handleResize() {
      this.mindMap.resize()
    },
    reRender() {
      this.mindMap.reRender()
    },
    execCommand(...args) {
      this.mindMap.execCommand(...args)
    },

    export(...args) {
      return this.mindMap.export(...args)
    }
  },
};
</script>

<style lang="scss">
@import "../style/index.scss";
</style>