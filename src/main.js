import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import VueMeta from 'vue-meta';

import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = process.env.NODE_ENV === 'production';
Vue.prototype.$eventHub = new Vue();

Vue.use(VueMeta);
Vue.use(ElementUI, { size: 'small' });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
