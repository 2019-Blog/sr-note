import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'editor-page',
      component: require('@/components/EditorPage/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
