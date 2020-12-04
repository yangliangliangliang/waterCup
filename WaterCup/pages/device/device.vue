<template>
	<view class="container" @click="cancel">
		<view class="conTitle">
			<text></text>
			<text>HYDRO UP</text>
			<view class="hover-class" @tap="selectLang">
				<image src="@/static/device/earth.png" mode="aspectFill"></image>
			</view>
		</view>
		<Lang :flag="flag"></Lang>
		<Content></Content>
	</view>
</template>

<script>
	import Content from "@/components/device/Content.vue";
	import Lang from "@/components/device/Lang.vue";
	import session from "@/utils/session.js";
	export default {
		components:{
			Content,
			Lang
		},
		data() {
			return {
				flag:false,
				lang:1
			}
		},
		onLoad(options){ 
			//开启蓝牙
			/* #ifndef H5*/
			uni.openBluetoothAdapter({
			  success(res) {
			    console.log(res)
				console.log(11111111111111111111111111)
			  },
			  fail(err) {
			  	console.log(err)
				console.log(2222222222222222222222)
			  }
			})
			/* #endif */
			
			
			//onLoad在launchlang重新刷新后才有效果
			// console.log(options);
			// console.log(this.$Route.query); 
			var index = this.$store.state.lang.select;
			if(index == 1){
				for (let i = 0; i < 4; i++) {
					uni.setTabBarItem({
						index: i,
						text: this.$store.state.footer_nav[i].name
					});
				};
			};
			if(index == 2){
				for (let i = 0; i < 4; i++) {
					uni.setTabBarItem({
						index: i,
						text: this.$store.state.footer_nav[i].en
					});
				};
			};
			
		},
		methods: { 
			selectLang(index){
				this.flag = !this.flag;
				// session.setSession("lang",JSON.stringify(index))
				// console.log(123)
			},
			cancel(){
				// this.flag = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		position: relative;
	}
	.container {
		width: 100%;
		height: 172*2rpx;
		background: linear-gradient(180deg,#0b85ff, #dfefff);
		color: #49557a;
		text-align: center;
		// position: relative;
		.conTitle{
			color: #FFFFFF;
			font-size: 16*2rpx;
			padding-top: 110rpx;
			padding-bottom: 11*2rpx;
			display: flex;
			justify-content: space-around;
			image{
				position: absolute;
				// right: 2.5%;
				width: 18*2rpx;
				height: 18*2rpx;
			}
		}
	}
</style>
