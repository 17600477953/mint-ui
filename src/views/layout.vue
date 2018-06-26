<!--  -->
<template>
  <div class="app-container">
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <!-- <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button> -->
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button @click="handleClose">关闭</mt-button>
      <router-link to="/layout01" slot="right">
        <mt-button>
          跳转布局01
          <img src="../assets/imgs/next.png" height="20" width="20" slot="icon">
          </mt-button>
      </router-link>
      <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
    <div class="container">
      <p>当前选中的菜单是：{{selected}}</p>
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="外卖">
          <mt-cell v-for="n in 10" :title="'餐厅 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="订单">
          <mt-cell v-for="n in 5" :title="'订单 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="发现">
          <mt-cell v-for="n in 7" :title="'发现 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <div class="page-part">
           <!-- cell -->
            <mt-cell v-for="n in 12" :title="'我的 ' + n" :key="n"/>
          </div>
          <router-link to="/">
           <!-- button -->
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/imgs/home_1.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/imgs/relase_1.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/imgs/search_1.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/imgs/mine_1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '外卖'
    }
  },

  components: {},
  methods: {
    handleClose () {
      this.$router.push('/citys')
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
