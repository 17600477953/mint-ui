<!--  -->
<template>
  <div class="app-container">
    <mt-header title="form">
      <router-link to="/layout01" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-switch v-model="switchBool" @change="fn">开关</mt-switch>
    </div>
    <mt-checklist
      title="复选框列表"
      :max="2"
      v-model="value"
      align="right"
      :options="options">
    </mt-checklist>
    <mt-radio
      title="单选框列表"
      v-model="radioValue"
      :options="options"
      @change="alertFn">
    </mt-radio>
    <mt-field label="用户名" @blur.native.capture="checkCard" placeholder="请输入用户名" v-model="username" :attr="{ maxlength: 10 }"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
    <mt-field label="邮箱" :state="email_bool" v-model="email"></mt-field>
    <mt-field label="邮箱" state="error" v-model="email"></mt-field>
    <mt-field label="邮箱" state="warning" v-model="email"></mt-field>
    <mt-field label="验证码" v-model="captcha">
      <img src="../assets/imgs/home_1.png" height="45px" width="100px">
    </mt-field>
    <mt-badge type="primary" size="small">30</mt-badge>
    <mt-badge type="error" size="normal">10</mt-badge>
    <mt-badge type="success" size="large">10</mt-badge>
    <mt-badge type="warning" color="#ccc">10</mt-badge>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [],
      captcha: '',
      radioValue: '',
      username: '',
      email: '',
      password: '',
      phone: '',
      website: '',
      number: '',
      birthday: '',
      introduction: '',
      switchBool: false,
      email_bool: 'error',
      options: [
        {
          label: '被禁用',
          value: '值F',
          disabled: true
        },
        {
          label: '选中禁用',
          value: '选中禁用的值',
          disabled: true
        },
        {
          label: '选项A',
          value: '值A'
        },
        {
          label: '选项B',
          value: '值B'
        },
        {
          label: '选项C',
          value: '值C'
        },
        {
          label: '选项D',
          value: '值D'
        }
      ]
    }
  },

  components: {},

  methods: {
    fn () {
      console.log(this.switchBool)
    },
    check () {
      // console.log(this.value)
      console.log(this.radioValue)
    },
    checkCard () {
      console.log(111)
    },
    alertFn () {
      console.log(222)
      console.log(this.radioValue)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
