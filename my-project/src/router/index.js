import Vue from 'vue'
import Router from 'vue-router'
import firstcomponent from '../components/firstcomponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstcomponent',
      component: firstcomponent
    }
  ]
})
