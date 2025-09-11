import MindMap from './src/mind-map.vue';

const install = function (Vue) {
  Vue.component(MindMap.name, MindMap);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  MindMap
};