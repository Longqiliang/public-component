# public-component

基于 `Vue 2.7` 的公共组件仓库，当前主要包含两类业务组件：

- `workflow`：工作流审批、流程图、办理记录相关组件
- `mindmap-v2`：基于 `simple-mind-map` 封装的思维导图组件

## 项目概览

### 组件清单

| 模块 | 导出/标签 | 说明 |
| --- | --- | --- |
| `src/workflow` | `WorkflowApproval` / `workflow-approval` | 工作流审批表单，负责初始化流程、节点流转、提交审批等 |
| `src/workflow` | `WorkflowChart` / `workflow-chart` | 根据 `taskid` 或 `busiid` 拉取并展示流程 SVG 图 |
| `src/workflow` | `WorkflowRecordList` / `workflow-record-list` | 展示流程办理记录表格 |
| `src/mindmap-v2` | `ZxMindmapV2` / `zx-mindmap-v2` | 思维导图组件，支持数据归一化、导航、右键菜单、导出图片/PDF/XMind |

### 目录结构

```text
public-component
├─ configs/                 低代码/平台化配置描述
│  ├─ mindmap/
│  └─ workflow/
├─ playground/
│  ├─ vite/                 workflow 源码调试工程
│  └─ webpack/              mindmap 构建产物调试工程
├─ scripts/
│  └─ copy.js               构建后复制脚本
├─ src/
│  ├─ mindmap-v2/
│  └─ workflow/
├─ index.js
├─ package.json
└─ webpack.config.js
```

## 安装与启动

### 1. 安装依赖

仓库使用 `pnpm workspace` 管理，建议直接在根目录安装：

```bash
pnpm install
```

### 2. 启动 workflow 调试环境

```bash
pnpm dev:vite
```

说明：

- 对应目录为 `playground/vite`
- 示例中直接从 `src/workflow/index.js` 引入源码
- 该环境会注册 `ElementUI`、`codexd-ui`，并向 `Vue.prototype.$axios` 注入 `axios`
- `vite.config.js` 已内置 `/waas -> https://preview.56xd.com` 代理配置

### 3. 启动 mindmap 调试环境

```bash
pnpm dev:webpack
```

说明：

- 对应目录为 `playground/webpack`
- 示例默认通过 `@dist/mindmap/index.js` 引入构建产物
- 适合验证 `mindmap-v2` 的打包结果与浏览器表现

### 4. 构建组件

```bash
pnpm build
```