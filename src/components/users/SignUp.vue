<template>
  <div class="signup-page">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="email" v-model="email" placeholder="Email" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Sign Up</button>
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
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async signup() {
      try {
        let data={
            username:this.username,
            email:this.email,
            password:this.password
        }
        await axios.post("http://localhost:5000/homepage/signup",data)
        this.$router.push('/login');
      } catch (error) {
        this.errorMessage = 'Username or email is already taken';
      }
    }
  }
};
</script>

<style scoped>
.signup-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.signup-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.signup-page form {
  display: flex;
  flex-direction: column;
}

.signup-page input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup-page button {
  padding: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-page button:hover {
  background-color: #218838;
}

.signup-page .error {
  color: #ff0000;
  margin-top: 10px;
}
</style>

