<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <div>
      <p></p>
      <router-link to="/signup">New User?</router-link>
      </div>
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
      try {
        // Send login request to backend
        // Redirect to dashboard upon successful login
          let data={
            username:this.username,
            password:this.password,
        }
        let res =await axios.post("http://localhost:5000/homepage/login",data)
        this.username=''
        this.password=''
         // Dispatch action to store user data in Vuex store
         console.log(res.data)
        this.$store.dispatch('loginUser', {
          user: res.data.name,
          password:res.data.password,
          email:res.data.email,
          id:res.data.id
        });
        this.$router.push('/dashboard');
      } catch (error) {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-page form {
  display: flex;
  flex-direction: column;
}

.login-page input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-page button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-page button:hover {
  background-color: #0056b3;
}

.login-page .error {
  color: #ff0000;
  margin-top: 10px;
}
</style>

