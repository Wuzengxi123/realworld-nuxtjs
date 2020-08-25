<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin?"Sign in":"Sign up"}}</h1>
          <p class="text-xs-center">
            <!-- <a href>Have an account?</a> -->
            <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
          </p>
          <ul class="error-messages">
            <!-- <li>That email is already taken</li> -->
            <template v-for="(messages,field) in errors">
              <li v-for="(message,index) in messages" :key="index">{{field}} {{message}}</li>
            </template>
          </ul>
          <!--提交表单 -->
          <form @submit.prevent="onsubmit">
            <fieldset v-if="!isLogin" class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                minlength="8"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">{{ isLogin?"Sign in":"Sign up"}}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import request from "@/utils/request";
import { login, register } from "@/api/user";
// 仅仅在客户端加载
const Cookie = process.client?require('js-cookie'):undefined


export default {
  name: "loginIndex",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async onsubmit() {
      try {
        // 提交表单请求登录
        const { data } = this.isLogin
          ? await login({ user: this.user })
          : await register({ user: this.user });
        console.log(data);
        // TODO:保存用户登录信息
        this.$store.commit('setUser', data.user)
        // 防止刷新数据丢失
        Cookie.set('user',data.user)
        // 登录成功跳转回首页
        this.$router.push("/");
      } catch (error) {
        console.dir(error);
        this.errors = error.response.data.errors;
      }
    }
  },
};
</script>

<style>
</style>