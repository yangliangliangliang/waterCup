<template>
	<view class="container">
		<view class="selectTime">
			<text class="conTitle" @tap="timeselect">
				{{ Rtime }}
			</text>
			<Rtime :showTime="showTime" @timeFlag="timeFlag"></Rtime>
		</view>
	
		<Rtitle></Rtitle>
		
		<Rlist></Rlist>
		
	</view>
</template>

<script>
	import Rtitle from "@/components/record/Rtitle.vue";
	import Rlist from "@/components/record/Rlist.vue";
	import Rtime from "@/components/record/Rtime.vue";
	import { getStore } from "@/utils/index.js";
	export default {
		components:{
			Rtitle,
			Rlist,
			Rtime
		},
		data() {
			return {
				showTime:false,
				Rtime:"",
				timeSelect:{
					0:"时间选择",
					1:"時間選擇",
					2:"Time select"
				}
			}
		},
		onLoad(){
			this.Rtime = this.timeSelect[getStore.call(this)];
		},
		methods: {
			timeselect(){
				this.showTime = !this.showTime;
			},
			timeFlag(options){
				this.showTime = options;
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		background: #f5f8ff;
		height: 172*2rpx;
		.selectTime{
			width: 100%;
			height: 54*2rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.conTitle{
				// width: 100%;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		
		
	}
</style>
