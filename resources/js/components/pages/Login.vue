<template>
  <div>
    <p v-show="isError">Failed to authenticate... ToT</p>
    <form @submit.prevent="login">
      <h1>Log in</h1>
      mail address: <input type="email" v-model="email">
      password: <input type="password" v-if="password">
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isError: false,
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        axios.post('api/login', {
          email: this.email,
          password: this.password
        }).then(res => {
          const token = res.data.access_token;
          axios.defaults.headers.common['Authorization'] = 'Bearer' + token;
          state.isLogin = true;
          this.$router.push({path: '/'});
        }).catch(error => {
          this.isError = true;
        });
      }
    }
  }
</script>