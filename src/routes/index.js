
import Vue from 'Vue'
import VueRouter from 'Vue-router'

Vue.use(VueRouter)

const index = () => import(/* webpackChunkName: "index" */ '../components/index') 

export default new VueRouter({
	mode:'history',
	routes:[
		{path:'/index',component:index,name:'index'},
		{path:'*',redirect:'/index'}
	]
})