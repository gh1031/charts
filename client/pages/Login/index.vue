<template>
  <div class="login-page">
    <Form
      :model="loginData"
      class="form"
      :label-width="50"
    >
      <FormItem
        label="用户名"
      >
        <Input
          v-model="loginData.username"
          placeholder="请输入用户名"
        />
      </FormItem>
      <FormItem
        label="密码"
      >
        <Input
          v-model="loginData.password"
          placeholder="请输入密码"
          type="password"
        />
      </FormItem>
      <Button
        type="primary"
        style="width: 100%"
        @click="handleLogin"
      >
        登陆
      </Button>
    </Form>
  </div>
</template>

<script>
import { fetchUserInfo as login } from 'client/api';

export default {
  data() {
    return {
      loginData: {}
    }
  },
  methods: {
    async handleLogin() {
      await login(this.loginData);
      window.location.replace('/');
    }
  },
}
</script>

<style lang="less">
.login-page {
  display: flex;
  height: 100%;

  .form {
    margin: auto;
    min-width: 400px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 24px;
  }
}
</style>