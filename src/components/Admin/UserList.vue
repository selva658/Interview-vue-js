<template>
  <div class="user-lists">
    <Navbar />
    <div class="container">
      <div class="left">
        <h1>User List</h1>
      </div>
      <div class="right">
        <select class="button-link" @change="sort($event.target.value)">
          <option value="">Sort</option>
          <option value="asc">A-Z</option>
          <option value="dsc">Z-A</option>
        </select>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="(notification, index) in sortedNotifications" :key="index">
            <td>{{ notification.username }}</td>
            <td>{{ notification.email }}</td>
            <td>{{ notification.password }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from "../../NavBar1";
export default {
  components: {
    Navbar,
  },
  computed: {
    notifications() {
      return this.$store.state.userList;
    },
    sortedNotifications() {
      if (this.sortOrder === "asc") {
        return this.notifications
          .slice()
          .sort((a, b) => a.username.localeCompare(b.username));
      } else if (this.sortOrder === "dsc") {
        return this.notifications
          .slice()
          .sort((a, b) => b.username.localeCompare(a.username));
      } else {
        return this.notifications;
      }
    },
  },
  data() {
    return {
      sortOrder: "",
    };
  },
  methods: {
    sort(order) {
      this.sortOrder = order;
    },
  },
  mounted() {
    console.log(this.$store.state.userList.length);
    // if (this.$store.state.userList.length==0) {
    this.$store.dispatch("fetchUserList");
    // }
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
  color: #333;
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
  max-width: 1200px;
  margin: 0 auto;
}

.left h1 {
  margin: 0;
  font-size: 24px;
}

.right .button-link {
  text-decoration: none;
  color: #fff;
  background-color: #28a745;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;
}

.right .button-link:hover {
  background-color: #218838;
}
</style>
