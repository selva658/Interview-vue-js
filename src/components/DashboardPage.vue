<template>
  <div class="admin-dashboard-page">
    <nav class="navbar">
      <ul>
        <li v-for="link in navLinks" :key="link.name">
          <router-link :to="link.route">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="grid-container">
      <div v-for="(item, index) in items" :key="index" class="grid-item">
        <img :src="item.image" alt="Item Image" />
        <div class='selva'>
        <p class="save-button">{{ item.name }}</p>
        <p class="save-button">Add</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminDashboardPage",
  data() {
    return {
      items:[
    {
      name: "Item 1",
      image:
        "https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 2",
      image:
        "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 3",
      image:
        "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 4",
      image:
        "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 5",
      image:
        "https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 6",
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 7",
      image:
        "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 8",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 9",
      image:
        "https://images.pexels.com/photos/110686/pexels-photo-110686.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 10",
      image:
        "https://images.pexels.com/photos/668465/pexels-photo-668465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 11",
      image:
        "https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 12",
      image:
        "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 13",
      image:
        "https://images.pexels.com/photos/639086/pexels-photo-639086.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 14",
      image:
        "https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 15",
      image:
        "https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Item 16",
      image:
        "https://images.pexels.com/photos/259637/pexels-photo-259637.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more sample data as needed
  ]
    };
  },
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
  },
};
</script>

<style scoped>
.admin-dashboard-page {
  max-width: 80%;
  margin: 0 auto;
}

.navbar {
  background-color: #007bff;
  padding: 10px 0;
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


.grid-container {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
}

.grid-item {
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

.grid-item img {
  max-width: 100%;
  height: 200px; /* Set a fixed height for images */
  object-fit: cover; /* Maintain aspect ratio */
}
.selva{
  display:flex;
  justify-content: space-evenly;
}

.save-button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width:15%
}

.save-button:hover {
  background-color: #0056b3;
}
</style>
