import Vue from 'vue'
import App from './App.vue';
import Vuelidate from 'vuelidate'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  render: h => h(App)
})
