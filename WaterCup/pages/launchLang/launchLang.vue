<template>
	<view class="container">
		<image src="@/static/launch/launch2.png"></image>
		<view v-for="(item,index) in langData" :key="index">
			<view :class="{'active':isActive==index,'contList':true}"
				@tap="itemClick(index)">
				{{item.context}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langData:[
					{
						context:"中文简体"
					},
					{
						context:"中文繁体"
					},
					{
						context:"English"
					},
				],
				isActive:0,
			}
		},
		onLoad() {
			console.log(this.$store)
		      
		},
		methods: {
			itemClick(index){
				this.isActive = index;
				// this.$Router.push({name:"device",params:{ index: index}});
				uni.reLaunch({
					url: `/pages/device/device?index=${index}`
				});
				this.$store.commit("addLang",index);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		image{
			top: 188*2rpx;
			width: 113*2rpx;
			height: 139*2rpx;
			margin-bottom: 178*3rpx;
		}
		.contList{
			background: red;
			width: 177*2rpx;
			height: 34*2rpx;
			background: #ffffff;
			border: 1px solid #d8d8d8;
			border-radius: 17*2rpx;
			text-align: center;
			line-height: 2.5;
			margin-top: 22*2rpx;
			color: #333333;
			font-size: 14*2rpx;
		}
		.active{
			background: #0088fc;
			color: #FFFFFF;
		}
	}
</style>
