// JS
import './js/'
import './js/function'
// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)
Vue.component('mainmenu', require('./js/components/Mainmenu.vue').default)
Vue.component('header-component', require('./js/components/header.vue').default)
Vue.component('headerchild-component', require('./js/components/header-child.vue').default)
Vue.component('footer-component', require('./js/components/footer.vue').default)
Vue.component('breadcrumbs-component', require('./js/components/breadcrumbs.vue').default)
Vue.component('description-phone-component', require('./js/components/description-phone.vue').default)
Vue.component('map-ya', require('./js/components/map.vue').default)

import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin)
// Vue init
const app = new Vue({
  el: '#app'
})
