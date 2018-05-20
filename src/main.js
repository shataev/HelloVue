import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppQuestion from './components/Question.vue';
import AppResultScreen from './components/ResultScreen.vue';
import AppMessage from './components/Message.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppResultScreen', AppResultScreen);
Vue.component('AppMessage', AppMessage);

new Vue({
  el: '#app',
  render: h => h(App)
})
