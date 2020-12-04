import Vue from 'vue';
import App from './App';
import router from './router';
// import store from '@/store/index.js'
// import { http } from '@/common/api/service.js'
import store from './store';
import { RouterMount } from '@/common/uni-simple-router/index.js';

Vue.config.productionTip = false

App.mpType = 'app';
Vue.prototype.router = router;
Vue.prototype.$store = store

const app = new Vue({
	...App,
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
