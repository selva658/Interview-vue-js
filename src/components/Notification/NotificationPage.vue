<template>
  <div class="user-lists">
  <Navbar/>
    <div class="container">
      <div class="left">
        <h1>Notifications</h1>
      </div>
      <div class="right">
        <router-link to="/createuser" class="button-link">Add User</router-link>
      </div>
    </div>
    <div class="notification-table">
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notification, index) in notifications" :key="index">
            <td>{{ notification.username }}</td>
            <td>{{ notification.email }}</td>
            <td type="password">**********************</td>
            <td>
              <button
                class="button-link"
                @click="
                  acceptNotification(
                    notification.email,
                    notification.username,
                    notification.password
                  )
                "
              >
                Accept
              </button>
            </td>
            <td>
              <button
                class="button-link"
                @click="rejectNotification(notification.email)"
              >
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from '../../NavBar1'
export default {
 components: {
    Navbar
  },
  computed: {
    notifications() {
      return this.$store.state.notifications;
    },
  },
  methods: {
    acceptNotification(email, username, password) {
      // Call the Vuex action to accept the notification
      let data = {
        username,
        email,
        password,
      };
      this.$store.dispatch("acceptNotification", data);
    },
    rejectNotification(email) {
      // Implement reject notification logic if needed
      console.log(email);
      this.$store.dispatch("rejectNotification", { email: email });
    },
  },
  mounted() {
      this.$store.dispatch("fetchNotifications");
  },
};
</script>

<style scoped>
.user-lists {
  margin-top: 20px;
}

.user-lists h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333; /* Adjust the color according to your design */
  margin-left: 40%;
}

.notification-table table {
  width: 100%;
  border-collapse: collapse;
}

.notification-table th,
.notification-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.notification-table th {
  background-color: #f2f2f2;
}

.notification-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.notification-table tbody tr:hover {
  background-color: #ddd;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px; /* Adjust as needed */
  margin: 0 auto; /* Center the container */
}

.left h1 {
  margin: 0;
  font-size: 24px;
}

.button-link {
  text-decoration: none;
  color: #fff;
  background-color: #28a745;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-link:hover {
  background-color: #218838;
}
</style>
