<template>
	<view class="setting">
		<view v-for="(item,index) in setData" :key="index" @tap="open(index)">
			<view class="setItem">
				<view class="setItemlf">
					<view class="" style="font-size: 28rpx; color: #49557A;">
						{{item.zh}}
					</view>
					<view class="" style="font-size: 24rpx; color: #9DA3B2;">
						{{item.en}}
					</view>
				</view>
				
				<view  class="setItemrg"  ref="el" :style="styleObject[index]">
					{{ item.num }}
				</view>
				
			<!-- 	<view v-if="index==0" class="setItemrg" style="background: #FED108;">
					{{ item.num }}
				</view>
				<view v-if="index==1" class="setItemrg" style="background: #B903F8;">
					{{ item.num }}
				</view>
				<view v-if="index==2" class="setItemrg" style="background: #2A85FA;">
					{{ item.num }}
				</view> -->
			</view>
		</view>
		
		 <t-color-picker ref="colorPicker" :color="color" @confirm="confirm"></t-color-picker>
	</view>
</template>

<script>
	 import tColorPicker from '@/components/t-color-picker/t-color-picker.vue';
	 import session from "@/utils/session.js";
	 import {getStore} from "@/utils/index.js";
	export default {
		data() {
			return {
				setData:[],
				activeIndex:0,
				color: {r: 255,g: 0,b: 0,a: 0.6},
				styleObject: {
						0:"background:#FED108",
						1:"background:#B903F8",
						2:"background:#2A85FA",
				}
			}
		},
		onLoad() {
			// console.log(this.styleObject[this.activeIndex])
			var index = getStore.call(this);
			this.setData = this.$store.state.setData[index];
		},
		methods: { 
			open(index) {
			    // 打开颜色选择器
			    this.$refs.colorPicker.open();
				this.activeIndex = index;
				console.log(123)
				this.router.push({name:"search"})
			},
			confirm(e) {
			    console.log('颜色选择器返回值：', e)
				this.styleObject[this.activeIndex] = "background:" + e.hex;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.setting {
		width: 95%;
		background: #F5F8FF;
		.setItem{
			width: 100%;
			height: 73*2rpx;
			margin: 24rpx 32rpx;
			background: #ffffff;
			border-radius: 6*2rpx;
			box-shadow: 0px 0px 10*2rpx 0px rgba(0,0,0,0.05);
			display: flex;
			justify-content: space-between;
			align-items: center;
			.setItemlf{
				width:80%;
				height: 100%;
				display: flex;
				flex-direction: column;
				padding-left: 40rpx;
				line-height:2.5;
			}
			.setItemrg{
				width: 29*2rpx;
				height: 29*2rpx;
				border-radius: 50rpx;
				margin-right: 15rpx;
				color: #FFFFFF;
				text-align: center;
				line-height: 1.5;
			}
		}
	}
</style>
