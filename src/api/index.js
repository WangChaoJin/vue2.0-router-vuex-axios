import axios from 'axios'

axios.defaults.baseURL = 'http://api.cjcool.dev/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const instance = axios.create();
const front_instance = axios.create();
// if(localStorage.getItem('jwt')){
//   instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
// }
// axios拦截请求
axios.interceptors.request.use = instance.interceptors.request.use = front_instance.interceptors.request.use
front_instance.interceptors.request.use(config=>{
  //store.dispatch('showProgress',20)
  return config
},err=>{
  // store.dispatch('showProgress',100)
  return Promise.reject(err)
})
// axios拦截响应
front_instance.interceptors.response.use(response=>{
  store.dispatch('showProgress',100)
  return response
},err=>{
  store.dispatch('showProgress',100)
  return Promise.reject(err)
})
	

export default {
	request(opt){		//opt.url opt.method opt.data
		var opt = opt || {}
		var url = opt.url
		var method = opt.method || 'get'
		var data = opt.data || {}
		var config = opt.config || {} 
		return new Promise((resolve, reject) => {
			if(method == 'get'){
				data = {params:data}
			}
			instance[method](url,data,config).then((res)=>{
			    resolve(res.data);
			}).catch((err)=>{
			    console.log(err);
				reject(err)
			});
		});
	},
	intercept(opt){
		var opt = opt || {}
		var url = opt.url
		var method = opt.method || 'get'
		var data = opt.data || {}
		return new Promise((resolve, reject) => {
			if(method == 'get'){
				var data = {params:data}
			}else if(method == 'post'){
				var data = data
			}
			front_instance[method](url,data).then((res)=>{
			    resolve(res.data);
			}).catch((err)=>{
			    console.log(err);
				reject(err)
			});
		});
	}
} 
