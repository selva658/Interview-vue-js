<template>
    <nav class="navbar">
      <ul>
        <li v-for="link in navLinks" :key="link.name">
          <router-link :to="link.route">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
     ...mapState({
      admin: (state) => state.admin,
    }),

    navLinks() {
      // Determine which links to display based on user type
      if (this.admin) {
        return [
          { name: "Home", route: "/dashboard" },
          { name: "Notifications", route: "/notification" },
          { name: "Users List", route: "/userlist" },
          { name: "Profile", route: "/editprofile" },
        ];
      } else {
        return [
          { name: "Home", route: "/home" },
          { name: "Profile", route: "/editprofile" },
        ];
      }
    },
  }
 };
</script>

<style scoped>
.navbar {
  background-color: #007bff;
  padding: 10px 0;
  max-width: 80%;
  margin: 0 auto;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
}

.navbar ul li {
  display: inline;
}

.navbar {
  background-color: #007bff;
  padding: 15px 0; /* Increased padding */
}

.navbar ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px; /* Increased padding */
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar ul li a:hover {
  background-color: #0056b3;
}
</style>
