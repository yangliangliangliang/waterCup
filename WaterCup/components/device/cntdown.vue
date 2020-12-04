<template>
		<view class="cntdown com">
			<view class="cdtitle">
				<text style="color:#9DA3B2;font-size: 24rpx;">
					{{ cntdown }}
				</text>
				<view style="color: #0088FC;font-size: 40rpx;">
					{{ second}}
					{{$store.state.lang.select==2?"second":"秒"}}
				</view>
			</view>
			<cmd-circle 
				cid="circle18"
				type="circle" 
				:percent="p" 
				font-color="#0088FC" 
				:font-size="24" 
				:width="150" 
				:stroke-width="8"
				stroke-shape="square" 
				stroke-color="#0088FC" 
				stroke-background="#C7E2FD">
			</cmd-circle>
			
			<view class="end com">
				{{ end }}
			</view>
		</view>
</template>

<script>
	var timer;
	import cmdCircle from "@/components/cmd-circle/cmd-circle.vue";
	import {getStore} from "@/utils/index.js"
	export default {
		props:{
			isActive:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		components: {
			cmdCircle
		},
		watch:{
			second(){
				return 123
			}
		},
		data() {
			return {
				p:100,
				second:180,
				end:"",
				cntdown:"",
				cdData:{
					0:"倒计时",
					1:"倒計時",
					2:"Count Down"
				},
				endData:{
					0:"结束",
					1:"結束",
					2:"end"
				},
				delay:12,//=>pinlv
			};
		},
		created(){
			this.changeData();
			this.setData();
			this.countDown();
		},
		methods: {
			setData(){
				var index = getStore.call(this);
				this.end = this.endData[index];
				this.cntdown = this.cdData[index];
			},
			changeData(){
				switch(this.isActive){
					case 1:
					this.second = 9*60;
					
					break;
					case 2:
					this.second = 15*60
					break;
				}
			},
			countDown(){
				timer = setInterval(()=>{
					this.p = this.p - 50;
					// 540*x
					clearInterval(timer)
					console.log(timer,111)
				},1000)
				console.log(timer)
			},
		}
	};
</script>

<style lang="scss" scoped>
	.com{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cntdown{
		flex-direction: column;
		position: relative;
		margin-top: 94rpx;
		.cdtitle{
			position: absolute;
			top:25%;
			// right: 50%;
			transform: translateX(-2%);
		}
		.end{
			margin-top: 50rpx;
			width: 177*2rpx;
			height: 34*2rpx;
			background: #0088fc;
			border-radius: 17*2px;
			font-size: 28rpx;
			color: #FFFFFF;
		}
	}

</style>
