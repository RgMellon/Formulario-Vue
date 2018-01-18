import Vue from 'vue'
import App from './App.vue';
import VeeValidator, { Validator } from 'vee-validate';
import VeeValidate from 'vee-validate';
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask);
Vue.use(VeeValidate);


new Vue({
  el: '#app',
  render: h => h(App)
})
