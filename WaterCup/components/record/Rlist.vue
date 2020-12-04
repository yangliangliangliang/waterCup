<template>
	<view class="rlist">
		<view class="Ltext">
			<text>{{ Rlist }}</text>
		</view>
		<view v-for="(item,index) in dataList" :key="index" class="Llist">
				<view class="">
					<image src="@/static/record/shuibei.png" mode=""></image>
				</view>
				<view class="">
					<view style="font-size:32rpx; color:#49557A ;">
						{{ item.context }}
						<text>
							{{$store.state.lang.select == 2?"ml":"毫升"}}
						</text>
					</view>
					<view style="font-size:24rpx; color:#999999 ;padding-top: 8rpx;">
						{{ item.time }}
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
				dataList:[
					{
						context:"300",
						time:"2020-11-13 19:51"
					},{
						context:"300",
						time:"2020-11-13 19:51"
					},{
						context:"300",
						time:"2020-11-13 19:51"
					},
					{
						context:"300",
						time:"2020-11-13 19:51"
					},{
						context:"300",
						time:"2020-11-13 19:51"
					}
				],
				Rlist:'',//=>语言的标明
				reDetails:{
					0:"记录明细",
					1:"詳細記錄",
					2:"Records History"
				},
			};
		},
		created(){
			this.Rlist = this.reDetails[getStore.call(this)];
		},
	};
</script>

<style lang="scss" scoped>
	.rlist{
		width: 95%;
		height: 417*2rpx;
		margin: auto;
		background: #ffffff;
		border-radius: 6*2rpx;
		box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05); 
		margin-top: 22rpx;
		display: flex;
		flex-direction: column;
		.Ltext{
			font-size: 14*2rpx;
			font-weight: 1700;
			color: #49557a;
			padding-left: 32rpx;
			height: 65*2rpx;
			line-height: 5;
		}
		.Llist{
			flex: 1;
			display: flex;
			align-items: center;
			image{
				width: 40rpx;
				height: 40rpx;
				padding-right: 44rpx;
				padding-left: 32rpx;
			}
			.ritem{
				
			}
		}
	}
</style>
