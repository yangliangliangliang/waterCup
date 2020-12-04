<template>
	<view class="search">
		<view class="searchTitle">
			{{ search }}
		</view>
		<view class="bluetooth com">
			<view class="cengOne com">
				<view class="cengTwo com">
					<image src="@/static/search/bluetoothS.png" mode="aspectFit"></image>
					<cmd-circle cid="circle18"
						type="circle" :percent="p" 
						font-color="#0088FC" 
						:font-size="24" 
						:width="150" 
						:troke-width="1"
						stroke-shape="square" 
						stroke-color="#0088FC" 
						stroke-background="#FFFFFF">
					</cmd-circle>
				</view>
			</view>
		</view>
		
		
		
		<view class="btlist">
			<view v-for="(item,index) in dataList" :key="index">
				{{ item.context }}
			</view>
		</view>
		<view :class="[isActive?'restart comText':'active comText']"
		@tap="scan">
			{{ Rscan }}
		</view>
	</view>
</template>

<script>
	var _this = this;
	var timer;
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue";
	import { getStore } from "@/utils/index.js";
	function debounce(delay){
		console.log(123)
		clearTimeout(timer);
		return ()=>{
			// var arg = arguments;
			clearTimeout(timer);
			// console.log(this)
			timer = setInterval(()=>{
				this.p--;
				if(this.p ==0){
					clearTimeout(timer);
					this.p = 10;
				}
				console.log(timer)
			},delay);
			
		};
	};
	function scan(){
		this.p--;
		console.log(this.p);
	};
	export default {
	    components: {
			cmdCircle
		},
		data() {
			return {
				dataList:[
					{
						context:"136.192.36"
					},{
						context:"136.192.36"
					},{
						context:"136.192.36"
					}
				],
				p: 10,//=>百分比
				isActive:true,
				search:"",
				Rscan:"",
				searchData:{
					0:"搜索设备",
					1:"搜索設備",
					2:"Search device"
				},
				reSearch:{
					0:"重新扫描",
					1:"重新掃描",
					2:"Re-Scan"
				}
			}
		},
		onLoad() { 
			clearTimeout(timer);
			this.search = this.searchData[getStore.call(this)];
			this.Rscan = this.reSearch[getStore.call(this)];
		},
		methods: {
			scan(){
				// debounce.call(this,1000)();
				this.flag = !this.flag;
			},
			
		}
		  	
	}
</script>

<style lang="scss" scoped>
	.search {
		width: 100%;
		height: 812*2rpx;
		background: linear-gradient(180deg,#0b85ff, #dfefff);
		color: #FFFFFF;
		
		.searchTitle{
			text-align: center;
			padding-top: 110rpx;
			font-size: 32rpx;
		}
		.com{
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 500rpx;
		}
		.bluetooth{
			width: 330*2rpx;
			height: 330*2rpx;
			opacity: 0.8;
			background: linear-gradient(175deg,#0b85ff, #dfefff);
			box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
			margin: auto;
			margin-top: 133*2rpx;		
			.cengOne{
				width: 278*2rpx;
				height: 278*2rpx;
				opacity: 1;
				background: linear-gradient(360deg,#FFFFFF, #FFFFFF);
				box-shadow: 0px 3*2rpx 6*2rpx 0px rgba(0,0,0,0.5);
				.cengTwo{
					width: 232*2rpx;
					height: 232*2rpx;
					opacity: 1;
					background: #FFFFFF;
					box-shadow: 0px 3*2rpx 6*2rpx 0px rgba(0,0,0,0.5); 
					position: relative;
					image{
						position: absolute;
						width: 48*2rpx;
						height: 90rpx;
					}
				}
			}
		}
		.btlist{
			margin-top: 94rpx;
			text-align: center;
			font-size: 24rpx;
			view{
				padding: 12rpx 0;
			}
		}
		.comText{
			width: 177*2rpx;
			height: 34*2rpx;
			border-radius: 17*2rpx;
			margin-top: 37*2rpx !important;
			margin: auto;
			text-align: center;
			line-height: 2.2;
			font-size: 28rpx;
		}
		.restart{
			background: #ffffff;
			color: #0088FC;
		}
		.active{
			background: #0088FC;
			color: #FFFFFF;
		}
	}
</style>
