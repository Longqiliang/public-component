


import ElementUI from 'element-ui';
import Vue from 'vue';

import 'element-ui/lib/theme-chalk/index.css';

import router from './router';


import 'codexd-ui/lib/style/index.css';
import App from './App.vue';
import CodexdUI from './codexd-ui.js';
// import Questionnaire from "../../src/index.js";
import axios from 'axios';

import workflow from '../../../src/workflow/index.js';

console.log(workflow, 'workflow')
Vue.use(ElementUI);
Vue.use(CodexdUI);
Vue.use(workflow);

sessionStorage.setItem('access_token', '7a96be77-f25a-403e-9308-1ec06726e128');

const user = {
  nickname: '代码兄弟',
  userid: 'cc6723e4939b4f47b1076267f68c713d'
};
sessionStorage.setItem('user', JSON.stringify(user));
axios.interceptors.request.use(
  (config) => {
    let headers = {};
    let authToken = sessionStorage.getItem('access_token');
    headers.Authorization = `Bearer ` + authToken;
    if (authToken != null) {
      headers.Authorization = `Bearer ` + authToken;
    }
    config.headers = Object.assign(headers, config.headers);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')