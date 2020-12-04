<template>
	<view class="" v-show="flag">
		<view class="Dlang"  >
			<image src="@/static/device/area.png" mode="aspectFill"></image>
		</view>
		<view class="lang">
			<view v-for="(item,index) in dataList" :key="index" 
				:class="{'active':isActive==index,'contList':true}"
				@tap="selectlang(index)">
				{{item.context}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			flag:Boolean,
		},
		data() {
			return {
				dataList:[
					{
						context:"中文简体"
					},{
						context:"中文繁体"
					},{
						context:"English"
					}
				],
				isActive:0,
			}
		},
		methods: { 
			selectlang(index){
				var storeIndex = this.$store.state.lang.select;
				this.isActive = index;
				this.$store.commit("addLang",index);
				// this.$store.commit("changeLang",index);
				// this.$set(state.lang,"select",index);
				// this.$store.commit("changeLang",JSON.parse(index));
				if(storeIndex == index )return;
				uni.reLaunch({
					url:"/pages/device/device"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		position: relative;
	}
	.Dlang{
		position: absolute;
		width: 124*2rpx;
		height: 153*2rpx;
		z-index: 12;
		top: 40%;
		right: 3.5%;
		color: #333333;
		font-size: 28rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}	
	.lang{
		width: 124*2rpx;
		height: 153*2rpx;
		position: absolute;
		z-index: 12;
		right: 3.5%;
		// background: red;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		border-radius: 12rpx;
		top: 40%;
		.active{
			color: #0088FC;
		}
	}
</style>
