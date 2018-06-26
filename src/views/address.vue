<!--  -->
<template>
  <div>
    <p>
      <mt-button @click="openPicker" type="default" size="large" :plain="true">日期选择器</mt-button>
    </p>
    <p @click="fn">
      <mt-palette-button content="+" @expand="main_log('expand')" @expanded="main_log('expanded')" @collapse="main_log('collapse')"
        direction="rt" class="pb" :radius="80" ref="target_1" mainButtonStyle="color:#fff;background-color:#26a2ff;"
        style="left:30px;">
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(1)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(2)"></div>
        <div class="my-icon-button indexicon icon-popup" @touchstart="sub_log(3)"></div>
      </mt-palette-button>
    </p>
    <div>
    </div>
    <mt-datetime-picker
    ref="picker"
    type="date"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    :startDate="startDate"
    :endDate="endDate"
    v-model="pickerValue"
    @confirm="handleConfirm">
  </mt-datetime-picker>
    <mt-picker :slots="myAddressSlots" @change="onValuesChange" value-key="name" :visibleItemCount ="5"></mt-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerValue: '',
      startDate: new Date('2014/1/10'),
      endDate: new Date(),
      myAddressSlots: [
        {
          flex: 1,
          // values: this.getProvinceArr(), // 省份数组
          values: [
            {
              'code': '110000',
              'name': '北京市'
            }
          ],
          className: 'slot1',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          // values: this.getCityArr('北京市'),
          values: [
            {
              'code': '110100',
              'name': '北京市'
            }
          ],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          // values: this.getCountyArr('北京市', '北京市'),
          values: [
            {
              'code': '110101',
              'name': '东城区'
            },
            {
              'code': '110102',
              'name': '西城区'
            },
            {
              'code': '110105',
              'name': '朝阳区'
            },
            {
              'code': '110106',
              'name': '丰台区'
            }
          ],
          className: 'slot5',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    onValuesChange (picker, values) {
      console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    },
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm () {
      console.log(this.pickerValue)
    },
    main_log (val) {
      console.log('main_log', val)
    },
    sub_log (val) {
      console.log('sub_log', val)
      this.$refs.target_1.collapse()
    },
    fn () {
      console.log('fn')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
