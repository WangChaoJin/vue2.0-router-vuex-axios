import Vue from "Vue"
import router from './routes'
import store from './store'
import App from './app.vue'

new Vue({
	el:'#app',
  	router,
  	store,
  	render: h => h(App)
})