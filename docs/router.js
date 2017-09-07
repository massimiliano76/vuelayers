import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: 'C_BASE_URL',
  routes: routes,
})
router.beforeEach((to, from, next) => {
  document.title = [to.meta.title || document.title, 'C_PKG_FULLNAME.js Docs'].join(' :: ')

  const metaKeywords = document.head.querySelector('meta[name="keywords"]')
  metaKeywords.setAttribute('content', to.meta.keywords || metaKeywords.getAttribute('content'))

  const metaDescription = document.head.querySelector('meta[name="description"]')
  metaDescription.setAttribute('content', to.meta.description || metaDescription.getAttribute('content'))

  next()
})

export default router
