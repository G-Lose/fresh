import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

// import router from './router/index.js';
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

import router from './routers/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import store from './store/index.js';

new Vue({
  router,
  store,
  render: h => h(App),
  // created() {
  //   // console.log(router, "1")
  // }
}).$mount('#app')