<template>
  <div class="admin-login-page">
    <h2>Admin Login</h2>
    <form @submit.prevent="login">
      <label>Username: </label>
      <input type="text" v-model="username" class="input-field">
      <label>Password: </label>
      <input type="password" v-model="password" class="input-field">
      <button type="submit" class="login-button">Login</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try{ 
        // Send login request to backend
        // Redirect to dashboard upon successful login
          let data={
            username:this.username,
            password:this.password,
        }
        let res =await axios.post("http://localhost:5000/homepage/admin",data)
        console.log(res)
        this.username=''
        this.password=''
         // Dispatch action to store user data in Vuex store
        this.$store.dispatch('loginUser', {
          user: res.data.name,
          password:res.data.password,
          email:res.data.email,
          id:res.data.id,
          admin:res.data.isAdmin
        });
        this.$router.push('/dashboard');

      } catch (error) {
        this.errorMessage = 'Invalid Admin Name or password';
      }
    }
  }
};
</script>

<style scoped>
.admin-login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.admin-login-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.admin-login-page form {
  display: flex;
  flex-direction: column;
}

.admin-login-page label {
  margin-bottom: 5px;
  font-weight: bold;
}

.admin-login-page .input-field {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.admin-login-page .login-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.admin-login-page .login-button:hover {
  background-color: #0056b3;
}
.error {
  color: #ff0000;
  margin-top: 10px;
}
</style>
