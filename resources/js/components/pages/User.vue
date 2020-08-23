<template>
  <div>
    <p v-show="isError">Failed to get infomations... ;_;</p>
    <h1>USer Info</h1>
    <table>
      <tr>
        <th>ID</th>
        <td>{{ user.id }}</td>
      </tr>
      <tr>
        <th>User Name</th>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{{ user.email }}</td>
      </tr>
      <tr>
        <th>Resistrated Date</th>
        <td>{{ user.created_at }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isError: false,
        user: ()
      }
    },
    created() {
      axios.get('/api/me').then(res => {
        this.user  = res.data;
      }).catch(error => {
        this.isError = true;
      });
    }
  }
</script>