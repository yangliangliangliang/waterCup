<template>
    <view class="Rtime" v-show="showTime">
        <view class="test">
            <view @click="onShowDatePicker('date')">
				{{ Rtime }}
			</view>
            <view  @click="onShowDatePicker('range')">
				{{ timerange }}
			</view>
        </view>
        <mx-date-picker 
			:show="showPicker" 
			:type="type" 
			:value="value" 
			:show-tips="true" 
			:begin-text="'开始'" 
			:end-text="'结束'" 
			:show-seconds="true" 
			@confirm="onSelected" 
			@cancel="onSelected" />
    </view>
</template>

<script>
    import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	import {getStore} from "@/utils/index.js";
	
    export default {
		props:{
			showTime: {
				type: Boolean,
				default: false
			},
		},
        components: {
            MxDatePicker
        },
        data() {
            return {
                showPicker: false,
                date: '2019/01/01',
                time: '15:00:12',
                datetime: '2019/01/01 15:00:12',
                range: ['2019/01/01','2019/01/06'],
                rangetime: ['2019/01/08 14:00','2019/01/16 13:59'],
                type: 'rangetime',
                value: '',
				Rtime:"",
				timeSelect:{
					0:"时间选择",
					1:"時間選擇",
					2:"Time selection"
				},
				timerange:"",
				timeRange:{
					0:"时间选择",
					1:"時間選擇範圍",
					2:"Time frame"
				},
            }
        },
		created(){
			this.Rtime = this.timeSelect[getStore.call(this)];
			this.timerange = this.timeRange[getStore.call(this)];
		},
        methods: {
            onShowDatePicker(type){//显示
                this.type = type;
                this.showPicker = true;
                this.value = this[type];
            },
            onSelected(e) {//选择
                this.showPicker = false;
			
                if(e) {
                    this[this.type] = e.value; 
                    //选择的值
                    console.log('value => '+ e.value);
                    //原始的Date对象
                    console.log('date => ' + e.date);
					this.$emit("timeFlag",false)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
	page{
		position: relative;
		
	}
	.Rtime{
		position: absolute;
		top: 25%;
		color: #333333;
		font-size: 28rpx;
		
		.test{
			background: #F7F7F7;
			border-radius: 12rpx;
			width: 248rpx;
			height: 240rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
		}
	}
</style>
