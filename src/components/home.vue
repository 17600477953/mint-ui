<!-- home -->
<template>
  <div>
      <mt-header fixed>
      <div slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button>关闭</mt-button>
      </div>
    </mt-header>
    <!-- <mt-search
        :value.sync="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search> -->
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      selected: ''
    }
  }
}
</script>
<style scoped>
</style>
