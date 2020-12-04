<template>
	<view class="container animated bounceInDown" :style="{height:Qheight + 'px'}">
		<image src="@/static/launch/launch2.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Qheight:0,
				time:3,//页面启动时间
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:(res)=> {
					let height = res.windowHeight - uni.upx2px(0);
					this.Qheight = height;
				}
			})
			let timeS = this.time;
			this.Qtime(timeS);

		},
		methods: {
			Qtime(timeS){
				let timeStart = setInterval(()=>{
					timeS--;
					if(timeS == 0 ){
						clearInterval(timeStart);
						uni.redirectTo({
							url:"/pages/launchLang/launchLang"
						})
					}
					console.log(timeS);
				},1000,timeS)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		image{
			width: 113*2rpx;
			height: 139*2rpx;
		}
	}
	.animated {
		// -webkit-animation-duration: 1s;
		animation-duration: 2s;
		animation-fill-mode: both;
		// webkit-animation-play-state: both;
	}
</style>
