<template>
	<view class="rtitle">
		<block v-for="(item,index) in dataList" :key="index">
			<view class="rItem">
				<view class="rItemlf cm">
					<text style="font-size: 24rpx;margin-right: 65rpx;">{{ item.do }}</text>
					<text style="font-size: 40rpx;">
						{{ item.num }}{{index==0?($store.state.lang.select == 2?"Mins":"毫升"):($store.state.lang.select == 2?"Mins":($store.state.lang.select == 1?"分鍾":"分钟"))}}
					</text>
				</view>
				<view class="rItemrg cm">
					<text class="lf cmm" v-if="index==0">
						{{ timeFlag !==2?"不足":"not Enough"}}
					</text>
					<text class="rg cmm" v-else>
						{{ timeFlag !==2?"充足":"Enough"}}
					</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import {getStore} from "@/utils/index.js";
	export default {
		data() {
			return {
				dataList:[],
				timeFlag:0,
			};
		},
		created() {
			var index = getStore.call(this);
			this.timeFlag = index;
			this.dataList = this.$store.state.dataList[index];
			
		}
		
		
	};
</script>

<style lang="scss" scoped>
	.rtitle{
		width: 95%;
		height: 95*2rpx;
		display: flex;
		justify-content: space-between;
		justify-content:space-between;
		color: #49557A;
		margin: auto;
		.rItem{
			width: 48%;
			height: 100%;
			display: flex;
			border-radius: 6*2rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05); 
			.cm{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				
			}
			.rItemlf{
				flex: 1;
				padding-left: 40rpx;
			}
			.rItemrg{
				font-size: 22rpx;
				width: 39*2rpx;
				border-radius: 11px;
				display: flex;
				align-items: center;
				margin-right: 30rpx;
				.cmm{
					width: 39*3rpx;
					height: 22*3rpx;
					border-radius: 5px;
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
				}
				.lf{
					background: #FEDCDB;
					
				}
				.rg{
					background: #CCE7FF;
				}
			}
		}
	}
</style>
