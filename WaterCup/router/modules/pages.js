// router/modules/home.js
const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
		path: '/pages/device/device',
		aliasPath:'/pages/device/device',  //对于h5端你必须在首页加上aliasPath并设置为/
		name: 'device',
		meta: {
			title: "设备",
			isLogined:true
	    },
    },
	{
	  path: '/pages/record/record',
	  aliasPath:'/pages/record/record',  //对于h5端你必须在首页加上aliasPath并设置为/
	  name: 'record',
	    meta: {
	        title: '记录',
	    },
	},{
		path: '/pages/video/video',
		aliasPath:'/pages/video/video', 
		name: 'video',
		meta: {
			title: '教学视频',
	    },
	},{
		path: '/pages/setting/setting',
		aliasPath:'/pages/setting/setting', 
		name: 'setting',
		meta: {
			title: '设置',
	    },
	},{
		path: '/pages/launch/launch',
		aliasPath:'/pages/launch/launch', 
		name: 'launch',
		meta: {
			title: '启动页',
	    },
	},{
		path: '/pages/launchLang/launchLang',
		aliasPath:'/pages/launchLang/launchLang', 
		name: 'launchLang',
		meta: {
			title: '启动页-选择语言',
	    },
	},{
		path: '/pages/search/search',
		aliasPath:'/pages/search/search', 
		name: 'search',
		meta: {
			title: '搜索设备',
	    },
	},{
	    path: '*',
		redirect: { name: 'launch' }
	}
]
export default home