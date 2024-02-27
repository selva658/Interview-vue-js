<template>
  <div class="profile-page">
    <h2>Profile</h2>
    <form @submit.prevent="updateProfile">
      <label>Username: </label>
      <input
        type="text"
        v-model="user"
        :disabled="!canEdit"
        class="input-field"
      />
      <label>Email: </label>
      <input
        type="email"
        v-model="email"
        :disabled="true"
        class="input-field"
      />
      <label>Password: </label>
      <input
        type="password"
        v-model="password"
        :disabled="!canEdit"
        class="input-field"
      />
      <button v-if="!canEdit" class="save-button">come back after 15 Minutes</button>
      <button v-else class="save-button">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: this.$store.state.user,
      email: this.$store.state.email,
      password: this.$store.state.password,
      isAdmin: this.$store.state.admin,
      lastEditTime: null,
      min:new Date().getMinutes()
    };
  },

  computed: {
    buttonText() {
      return this.isAdmin ? "Update Data" : "Request To Update";
    },
    canEdit(){

      let t1 = this.$store.state.isEdit
      if(t1 != 15){
      console.log(t1,"t1")
      let t2 = new Date().getTime()
      console.log(t2,"t2")
      const differenceMs = Math.abs(t2- t1);
      const seconds = Math.floor(differenceMs / 1000);
      const minutes = Math.floor(seconds / 60);
      console.log(minutes)
      if(minutes<15){
        return false
      }
      else{
        return true
      }
      }
      else return true
    }
  },

  methods: {
    async updateProfile() {
      try {
        let data = {
          username: this.user,
          password: this.password,
          email: this.email,
          id: this.$store.state.id,
        };

        let res = await axios.post(
          "http://localhost:5000/homepage/update/userprofile",
          data
        );
        console.log(res)
        this.$store.dispatch('disableShow', new Date().getTime());
        this.$router.push("/dashboard");

      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-page h2 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-page form {
  display: flex;
  flex-direction: column;
}

.profile-page label {
  margin-bottom: 5px;
  font-weight: bold;
}

.profile-page .input-field {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.profile-page .save-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.profile-page .save-button:hover {
  background-color: #0056b3;
}
</style>
