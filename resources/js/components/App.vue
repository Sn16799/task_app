<template>
  <div>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/login">LogIn</router-link></li>
      <li><router-link to="/user">UserInfo</router-link></li>
      <li><router-link @click="logout">LogOut</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        axios.post('/api/logout').then(res => {
          axios.defaults.headers.common['Authorization'] = '';
          state.isLogin = false;
          this.$router.push({path: '/'});
        })
      }
    }
  }
</script>