<!--  -->
<template>
  <div class="app-container">
    <mt-header title="布局01">
      <router-link to="/layout" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
      </mt-tab-container-item>
    </mt-tab-container>
    <div>
      <mt-cell
        title="标题文字"
        to="//baidu.com"
        is-link
        value="带链接">
      </mt-cell>
      <mt-cell-swipe
        title="标题文字"
        :right="[
          {
            content: '删除',
            style: { background: 'red', color: '#fff' },
            handler: () => this.$messagebox('delete')
          }
        ]"></mt-cell-swipe>
    </div>
    <div>
      <mt-spinner type="snake" color="#26a2ff"></mt-spinner>
      <mt-spinner type="double-bounce"></mt-spinner>
      <mt-spinner type="triple-bounce"></mt-spinner>
      <mt-spinner type="fading-circle" :size="60"></mt-spinner>
    </div>
    <div style="height:60px;">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '1',
      value: ''
    }
  },
  methods: {
  }
}

</script>
<style lang='scss'>
.mint-searchbar-core{
  text-align: center!important;
}
</style>
