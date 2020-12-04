
import Vue from 'vue'
import modules from './modules'
import session from '@/utils/session.js'
import Router from '@/common/uni-simple-router/index.js'

Vue.use(Router)

const whiteRouter = ["/pages/login/login"]

//初始化
const router = new Router({
	 // mode: 'history',
    routes: [...modules]
});


router.beforeEach((to, from, next) => {
	// if(session.getSession("token")){
	// 	next()
	// }else{
	// 	if(whiteRouter.indexOf(to.path) !== -1){
	// 		// console.log(to.path)
	// 		next()
	// 	}else{
	// 		next("/pages/login/login")
	// 	}
	// }
	// console.log(to)
	next()
})



router.afterEach((to, from) => {
})
export default router;