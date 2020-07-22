import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Routes from './components/routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode:'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
  router:router
}).$mount('#app')
