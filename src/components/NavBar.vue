<template>
  <div>
    <!-- Header component -->
    <div class="header">
      <div class="container">
        <div class="left">
          <h1>FROST AND SULLIVAN L2-TASK</h1>
        </div>
        <div class="right">
          <router-link to="/admin" class="button-link">Admin</router-link>
          <router-link to="/login" class="button-link">Login</router-link>
          <router-link to="/signup" class="button-link">Signup</router-link>  
        </div>
      </div>
    </div>

    <!-- Body content -->
    <div class="body-content">
      <div class="container1">
        <h2>Welcome to Frost and Sullivan L2 Task</h2>
        <p>This is the landing page content. You can add more content here to describe your platform or provide information to users.</p>
        <p>Feel free to customize this section with images, additional text, or any other elements you find suitable for your landing page.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-image: url('https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=600');

  background-position: center;
}

.container {
  max-width: 1200px;
  display:flex;
  justify-content:space-between;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background-color: #333;
  color: #fff;
  padding: 15px 0;
}

.left h1 {
  margin: 0;
  font-size: 24px;
}

.right .button-link {
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;
}

.right .button-link:hover {
  background-color: #0056b3;
}

/* Body content styles */
.body-content {
  padding: 50px 0;
  text-align: center;
}

.body-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
}

.body-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}
</style>
