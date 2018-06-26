<!--  -->
<template>
  <div>
    <mt-index-list :show-indicator="true">
        <mt-index-section v-for="(item, inde) in userList" :key="inde" :index="item.firstName">
          <div v-for="(child, rank) in item.children" :key="rank" @click="fn(child.name)">
          <mt-cell :title="child.name">
          </mt-cell>
          </div>
        </mt-index-section>
      </mt-index-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [
        {
          firstName: 'A',
          children: [
            {
              name: '安安'
            },
            {
              name: '安禄山'
            }
          ]
        },
        {
          firstName: 'B',
          children: [
            {
              name: '白玉堂'
            },
            {
              name: '白蛇'
            },
            {
              name: '白白'
            },
            {
              name: '白活'
            }
          ]
        },
        {
          firstName: 'C',
          children: [
            {
              name: '菜玉堂'
            },
            {
              name: '彩笔'
            },
            {
              name: '踩死你'
            },
            {
              name: '才来'
            }
          ]
        },
        {
          firstName: 'D',
          children: [
            {
              name: '大不大'
            },
            {
              name: '大'
            },
            {
              name: '真大'
            },
            {
              name: '特别大'
            }
          ]
        }
      ]
    }
  },
  methods: {
    fn (param) {
      console.log(param)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
