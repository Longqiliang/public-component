import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

export const routes = [
  {
    path: '/workflow',
    component: () => import('../view/workflow.vue')
  },
  {
     path: '/mindmap',
    component: () => import('../view/mindmap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router;