<template>
	<div class="index">
		<h1>{{title}}</h1>
		<h2>My name is {{name}}</h2>
	</div>
</template>
<script>
import { mapState } from 'Vuex'
export default{
	data(){
		return{
			
		}
	},
	computed:{
		...mapState(['title','name'])
	},
	created(){
		this.$store.dispatch('getName','WangChaoJin')
	},
	methods:{
		
	}
}
</script>
<style lang="less">
*{
	margin: 0;
	padding: 0;
}
.index{
	h1,h2{
		line-height: 60px;
		text-align:center;
	}
}
</style>
