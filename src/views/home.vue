<!--  -->
<template>
  <div>
    <div class="tip">
      <mt-button type="default" icon="more" size="small" @click="tipFn">default</mt-button>
      <mt-button type="primary" size="small" @click="tipIcon">primary</mt-button>
      <mt-button type="danger" size="small" @click="tipClose">danger</mt-button>
    </div>
    <div class="tip">
      <mt-button type="default" icon="more" size="small" @click="tipFn">default</mt-button>
      <mt-button type="primary" size="small" @click="tipIcon">primary</mt-button>
      <mt-button type="danger" size="small" @click="tipClose">danger</mt-button>
    </div>
    <div>
      <mt-button type="danger" size="large" @click="actionSheet">actionsheet</mt-button>
      <mt-actionsheet
      :actions= "data"
      v-model="sheetVisible">
      </mt-actionsheet>
    </div>
    <div style="width:100%;">
      <mt-button type="primary" size="large" @click="popupVisible=!popupVisible">poptest</mt-button>
      <mt-popup
        v-model="popupVisible"
        :modal="false"
        popup-transition="popup-fade"
        position="bottom">
        <div class="pop">
          hellowrld
        </div>
      </mt-popup>
    </div>
    <div class="swiper">
      <mt-swipe ref="swipe" :auto="0" @change="handleChange">
        <mt-swipe-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.url" alt="" @click="confn(index)">
        </mt-swipe-item>
      </mt-swipe>
      <div class="indexBtn">
        {{index}}/3
      </div>
    </div>
    <div style="margin-top:10px;">
      <mt-range
        v-model="rangeValue">
        <div slot="start">0</div>
        <div slot="end">100</div>
      </mt-range>
    </div>
    <div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
// import { Swipe, SwipeItem } from 'mint-ui'
export default {
  data () {
    return {
      str: 'hellowrld',
      popupVisible: false,
      activeIndex: 0,
      rangeValue: 0,
      index: 1,
      slots: [
        {
          flex: 1,
          // values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          values: ['A', 'B', 'C', 'D'],
          className: 'slot1',
          textAlign: 'left'
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'right'
        }
      ],
      imgList: [
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529904664750&di=67d0a0210c435561ced9c59b6dd02e29&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F79%2F01%2F87u58PICZ6N_1024.jpg'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2275838481,3292444870&fm=27&gp=0.jpg'
        },
        {
          url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529904750157&di=ab0362fb12c0fc549c85ac08974ae2d3&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F14%2F11%2F81u58PICTX9_1024.jpg'
        }
      ],
      data: [
        {
          name: '拍照',
          method: this.getCamera // 调用methods中的函数
        },
        {
          name: '从相册中选择',
          method: this.getLibrary// 调用methods中的函数
        },
        {
          name: '选择文件',
          method: this.getCamera
        }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    }
  },
  created () {
    // 加载动画
    // this.$indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // })
    // this.$indicator.open('加载中...')
    setTimeout(() => {
      this.$indicator.close()
    }, 2000)
  },
  methods: {
    onValuesChange (picker, values) {
      console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    tipFn () {
      MessageBox('提示', '操作成功')
      // this.$toast({
      //   message: '提示HAHAH',
      //   position: 'top',
      //   duration: 5000
      // })
    },
    tipIcon () {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
      // this.$toast({
      //   position: 'middle',
      //   message: '操作成功',
      //   iconClass: 'more'
      // })
    },
    tipClose () {
      MessageBox.prompt('请输入姓名').then(({ value, action }) => {
        console.log(1)
      }).catch(() => {
        console.log(2)
      })
      // let instance = this.$toast('提示信息')
      // setTimeout(() => {
      //   instance.close()
      // }, 2000)
    },
    actionSheet: function () {
      this.sheetVisible = true
    },
    getCamera: function () {
      console.log('打开照相机')
    },
    getLibrary: function () {
      console.log('打开相册')
    },
    confn (param) {
      console.log(param)
    },
    handleChange (param) {
      this.index = param + 1
      console.log(this.index)
    }
  },
  mounted () {
    this.activeIndex = this.$refs.swipe.index
    console.log(this.$refs.swipe.index)
  },
  watch: {
    activeIndex: function (val, oldval) {
      console.log(1)
    }
  }
}
</script>
<style>
.mint-swipe-indicator.is-active{
  background: green;
  opacity: 1;
}
</style>

<style lang='scss' scoped>
.pop{
  width: 375px;
  height: 30px;
  color: #fff;
  line-height: 30px;
  border-radius: 5px;
  text-align: center;
  background: rgba(0, 0, 0, 0.4)
}
.swiper{
  width: 100%;
  height: 15rem;
  position: relative;
  .indexBtn{
    width: 4rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background: rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    border-radius: 2rem;
    position: absolute;
    left: 2rem;
    bottom: 1rem;
  }
}
.mint-swipe{
  div > div{
    width: 100%;
    line-height: 15rem;
    text-align: center;
    background: yellow;
    img{
      width: 100%;
      height: 15rem;
    }
  }
}
</style>
