<template>
	<view class="video">
		<view v-for="(item,index) in videoData" :key="index">
			<view class="setItem">
				<view class="">
					<video src="" controls class="setvideo"></video>
				</view>
				<view style="font-size: 28rpx; color: #49557A; margin: 20rpx;">
					{{item.title}}
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	import {getStore} from "@/utils/index.js";
	export default {
		data() {
			return {
				videoData:[],
			}
		},
		onLoad() { 
			var index = getStore.call(this);
			this.videoData = this.$store.state.videoData[index];
		},
		methods: { }
	}
</script>

<style lang="scss" scoped>
	.video {
		background: #F5F8FF;
		.setItem{
			width: 95%;
			height: 223*2rpx;
			background: #ffffff;
			border-radius: 12*2rpx;
			box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05); 
			margin: 24rpx 32rpx;
			.setvideo{
				width: 100%;
				height: 181*2rpx;
				border-radius: 12*2rpx;
				box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05); 
			}
		}
	}
</style>
