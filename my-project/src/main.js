// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import firstcomponent from './components/firstcomponent.vue'
import secondcomponent from './components/secondcomponent.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes:[
    {
      path:'/first',
      component:firstcomponent
    },
    {
      path:'/second',
      component:secondcomponent
    }
  ]
});

const app = new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')

