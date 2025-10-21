import JSZip from 'jszip'
import { getTextFromHtml } from 'simple-mind-map/src/utils/index'
import { getXmindContentXmlData, handleNodeImageToXmind, parseNodeGeneralizationToXmind } from 'simple-mind-map/src/utils/xmind'


// FIXME：固定导出样式，后续根据需求可调整为根据themeConfig 配置生成xmind样式
// const xmindStyle = {
//   rootTopic: {
//     'svg:fill': "#CF2C2CFF",
//     "line-color": "#CF2C2CFF",
//     "border-line-color": "#CF2C2CFF",
//     "border-line-width": "3pt",
//     "border-line-pattern": "solid",
//     "line-class": "org.xmind.branchConnection.elbow"
//   }
// }
const transformToXmind = async (data, name, transformStyleFn) => {
  const id = 'simpleMindMap_' + Date.now()
  const imageList = []
  // 转换核心数据
  let newTree = {}
  let waitLoadImageList = []
  let walk = async (node, newNode, index) => {
    let newData = {
      id: node.data.uid,
      structureClass: 'org.xmind.ui.logic.right',
      title: getTextFromHtml(node.data.text), // 节点文本
      children: {
        attached: []
      }
    }
    // 备注
    if (node.data.note !== undefined) {
      newData.notes = {
        realHTML: {
          content: node.data.note
        },
        plain: {
          content: node.data.note
        }
      }
    }
    // 超链接
    if (node.data.hyperlink !== undefined) {
      newData.href = node.data.hyperlink
    }
    // 标签
    if (node.data.tag !== undefined) {
      newData.labels = (node.data.tag || []).map(item => {
        return typeof item === 'object' && item !== null ? item.text : item
      })
    }
    // 图片
    handleNodeImageToXmind(node, newNode, waitLoadImageList, imageList)
    // 样式
    if(transformStyleFn && typeof transformStyleFn === 'function') {
      newData.style = transformStyleFn(newData, node, index)
    }

    // 暂时不考虑样式
    if (index === 0) {
      newData.class = 'topic'
      newNode.id = id
      newNode.class = 'sheet'
      newNode.title = name
      newNode.extensions = []
      newNode.topicPositioning = 'fixed'
      newNode.topicOverlapping = 'overlap'
      newNode.coreVersion = '2.100.0'
      newNode.rootTopic = newData
    } else {
      //if()
      Object.keys(newData).forEach(key => {
        newNode[key] = newData[key]
      })
    }
    
    // 概要
    const { summary, summaries } = parseNodeGeneralizationToXmind(node)
    if (index === 0) {
      if (summaries.length > 0) {
        newNode.rootTopic.children.summary = summary
        newNode.rootTopic.summaries = summaries
      }
    } else {
      if (summaries.length > 0) {
        newNode.children.summary = summary
        newNode.summaries = summaries
      }
    }
    index = index + 1
    // 子节点
    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        let newChild = {}
        walk(child, newChild, index)
        newData.children.attached.push(newChild)
      })
    }
  }
  let index = 0
  walk(data, newTree, index)
  await Promise.all(waitLoadImageList)
  console.log(newTree, data, '----newTree');

  const contentData = [newTree]
  // 创建压缩包
  const zip = new JSZip()
  zip.file('content.json', JSON.stringify(contentData))
  zip.file(
    'metadata.json',
    `{"modifier":"","dataStructureVersion":"2","creator":{"name":"mind-map"},"layoutEngineVersion":"3","activeSheetId":"${id}"}`
  )
  zip.file('content.xml', getXmindContentXmlData())
  const manifestData = {
    'file-entries': {
      'content.json': {},
      'metadata.json': {},
      'Thumbnails/thumbnail.png': {}
    }
  }
  // 图片
  if (imageList.length > 0) {
    imageList.forEach(item => {
      manifestData['file-entries']['resources/' + item.name] = {}
      const img = zip.folder('resources')
      img.file(item.name, item.data, { base64: true })
    })
  }
  zip.file('manifest.json', JSON.stringify(manifestData))
  const zipData = await zip.generateAsync({ type: 'blob' })
  return zipData
}


class ExportXMind { 
   //  构造函数
  constructor(opt) {
    this.mindMap = opt.mindMap
  }

  // 导出xmind
  async xmind(data, name, fn) {
    const zipData = await transformToXmind(data, name, fn)
    return zipData
  }

  // 获取解析器
  getXmind() {
    return xmind
  }
}

ExportXMind.instanceName = 'doExportXMind'

export default ExportXMind