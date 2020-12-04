import Vue from 'vue';
import Vuex from 'vuex';
import session from "../utils/session.js";
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
		lang:{ 
			select:JSON.parse(session.getSession("lang")),
		},
		footer_nav:[
			{
			    name:'設備',
				en:"Device"
			},
			{
			    name:'記録',
				en:"Record"
			},
			{
			    name:'教學視頻',
				en:"Learning Videos"
			},
			{
			    name:'設置',
				en:"Setting"
			    // name_code:'my',
			    // icon:'/static/footer_icon/d1.png',
			    // select_icon:'/static/footer_icon/d2.png'
			},
			
		],
		langData:[
			[
				{
					context:"3分钟 氢水制作（喝水制式"
				},
				{
					context:"9分钟 氢水制作（喝水制式"
				},
				{
					context:"15分钟 氢气制作（吸氢制式）"
				},
				
			],
			[
				{
					context:"3分鍾氫水制做 (喝水)"
				},
				{
					context:"9分鍾氫水制做 (喝水)"
				},
				{
					context:"15分鍾氫氣制做 (吸氢)"
				},

			],
			[
				{
					context:"3 Mins Hydrogen Water Generated (Drink)"
				},
				{
					context:"9 Mins Hydrogen Water Generated (Drink)"
				},
				{
					context:"15 Mins Hydrogen Generated (Inhale )"
				},
			],
		],
		videoData:[
			[
				{
					video:"",
					title:"产品使用教学视频",
				},
				{
					video:"",
					title:"产品清洁保养教学视频",
				},
				{
					video:"",
					title:"用家分享产品视频",
				},
			],
			[
				{
					video:"",
					title:"產品使用教學視頻",
				},
				{
					video:"",
					title:"產品清潔保養教学视频",
				},
				{
					video:"",
					title:"用家分享產品視頻",
				},
			],
			[
				{
					video:"",
					title:"learning Video for Product Usage",
				},
				{
					video:"",
					title:"Learn Video for product cleaning",
				},
				{
					video:"",
					title:"Video For Product Sharing By Users",
				},
			]
		],
		setData:[
			[
				{
					zh:"3分钟制氢",
					en:"drink water",
					num:3
				},
				{
					zh:"9分钟制氢",
					en:"drink water",
					num:9
				},
				{
					zh:"15分钟制氢",
					en:"breathing",
					num:15
				},
			],
			[
				{
					zh:"3分鍾製氫",
					en:"drink water",
					num:3
				},
				{
					zh:"9分鍾製氫",
					en:"drink water",
					num:9
				},
				{
					zh:"15分鍾製氫",
					en:"breathing",
					num:15
				},
			],
			[
				{
					zh:"3Mins Hydrogen Water Generated",
					en:"drink water",
					num:3
				},
				{
					zh:"9Mins Hydrogen Water Generated",
					en:"drink water",
					num:9
				},
				{
					zh:"15Mins Hydrogen Water Generated",
					en:"breathing",
					num:15
				},
			],
		],
		dataList:[
			[
				{
					do:"喝水",
					num:"300"
				},{
					do:"吸氧",
					num:"30"
				}
			],
			[
				{
					do:"喝水",
					num:"300"
				},{
					do:"吸氧",
					num:"30"
				}
			],
			[
				{
					do:"Drinking Water",
					num:"300"
				},{
					do:"Inhale Hydrogen",
					num:"30"
				}
			],
		],
	
	},
    mutations: {
		addLang(state,index){
			state.lang.select = index;
			session.setSession("lang",JSON.stringify(index))
		},
		changeLang(state,index){
			// Vue.set(state.lang,"select",index);
			// Vue.set(state.lang.select,index);
			// Vue.$forceUpdate(state.lang,"select",index);
			// Vue.$forceUpdate()
			// state.lang.select = index;
		
			// console.log(state.lang.select)
		}
	},
    actions: {}
})
export default store