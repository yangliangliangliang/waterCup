<template>
	<view class="context">
		<view class="conTitle">
			<view>
				<image src="@/static/device/bluetooth.png" mode="aspectFill"></image>
				<text style="padding: 0 12rpx;font-size: 24rpx;">
					{{ isLink }}：136.192.36
				</text>
				<image src="@/static/device/dayu.png" mode="aspectFill"></image>
			</view>
			<view class="">
				<image src="@/static/device/dian.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="conTx">
				<view class="">
					<image src="@/static/device/shuibei2.png" mode="aspectFit"></image>
				</view>
				
				<view class="indexData" v-if="flag">
					<block v-for="(item,index) in langData" :key="index" >
						<image v-if="isActive==index" src="@/static/device/select.png" mode="aspectFill"></image>
						<image v-else src="@/static/device/unselect.png" mode="aspectFill"></image>
						<view :class="{'active':isActive==index,'contList':true}"
							@tap="itemClick(index)">
							{{item.context}}
						</view>
					</block>
					<view class="begin" @tap="beginTap">
						{{ begin }}
					</view>
				</view>
				<view  class="indexData" v-else>
					<cntdown :isActive="isActive"></cntdown>
				</view>
		</view>
	</view>
</template>

<script>
	import cntdown from "./cntdown.vue";
	import {getStore} from "@/utils/index.js";
	export default {
		components:{
			cntdown
		},
		data() {
			return {
				langData:[],
				isActive:0,
				flag:true,
				isLink:"",//=>是否连接
				begin:"",//=>开始
				linkData:{
					0:"已连接",
					1:"已連接",
					2:"Connected"
				},
				beginData:{
					0:"开始",
					1:"開始",
					2:"Begin"
				},
				time:"",//=>选择的时间
			}
		},
		created() {
			this.setData();
		},
		methods: {
			setData(){
				var index = getStore.call(this);
				this.isLink = this.linkData[index];
				this.begin = this.beginData[index];
				this.langData =  this.$store.state.langData[index];
			},
			itemClick(index){
				this.isActive = index
				console.log(this.isActive)
			},
			beginTap(){
				this.flag = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.context{
		height: 609*2rpx;
		width: 95%;
		background: #FFFFFF;
		border-radius: 6*2rpx;
		box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05); 
		margin: auto;
		position: relative;
		.conTitle{
			width: 95%;
			display: flex;
			justify-content: space-between;
			margin: auto;
			padding-top: 12*2rpx;
			image{
				width: 12*2rpx;
				height: 12*2rpx;
			}
		}
		.conTx{
			width: 100%;
			height: 100%;
			margin-top: 23*2rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
				image{
					top: 18*2rpx;
					width: 113*3rpx;
					height: 139*3rpx;
				}
				.contList{
					margin-bottom: 20*2rpx;
					font-size: 14*2rpx;
					margin-left: 15rpx;
				}
				.indexData{
					margin-top: 94rpx;
					width: 206*2rpx;
					height: 20*2rpx;
					.begin{
						width: 177*2rpx;
						height: 34*2rpx;
						background: #0088fc;
						border-radius: 17*2rpx;
						color: #FFFFFF;
						font-size: 28rpx;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					image{
						height: 16*2rpx;
						width: 16*2rpx;
						vertical-align: bottom;
						left: -50%;
					}
				}
			}
		
	}	
</style>
