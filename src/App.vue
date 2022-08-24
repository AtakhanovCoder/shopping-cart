<template ref="body">
  <nav>
      <input type="checkbox" id="click">
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    <router-link to="/cart" class="cart"><i class="fa-solid fa-bag-shopping"></i><span class="notif">0</span></router-link>      
  </nav>
  <router-view/>  
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {

  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  color: #293462;
}
html{
  scroll-behavior: smooth;
}
:root{
  --purple: #7F31FF;
  --black-gray: #1D1D1C;
}
nav a.router-link-exact-active, nav a.router-link-exact-active i {
  color: var(--purple);
}
nav{
  height: 80px;
  background: var(--black-gray);
  border-bottom: 5px solid var(--purple);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px 0px 100px;
}

nav .cart{
  font-size: 33px;
  font-weight: 600;
}
.notif {
  background-color: red;
  color: white;
  font-size: 16px;
  display: inline-block;
  width: 25px;
  border-radius: 50px;
  height: 25px;
  text-align: center;
  position: relative;
  bottom: 15px;
  right: 10px;
}
nav .cart i{
  color: #fff;
}

nav ul{
  display: flex;
}
nav ul li{
  margin: 0px 50px;
}
nav ul li a{
  color: #fff;
  text-decoration: none;
  font-size: 23px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 8px 10px;
  border-radius: 5px; 
  transition: all .3s ease;
}
nav .menu-btn i{
  color: #fff;
  font-size: 33px;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 0;
  right: 0;
}
#click{
  display: none;
}
@media (max-width: 940px) {
  #click:checked ~ .menu-btn i:before{
    content: "\f00d";
  }
  nav ul{
    position: absolute;
    top: 80px;
    left: -100%;
    background: var(--black-gray);
    height: 60vh;
    width: 100%;
    display: block;
    text-align: center;
    transition: all .3s ease;
  }
  nav ul li{
    margin: 40px 0;
  }
  #click:checked ~ ul{
    left: 0%;
  }
  #click:checked ~ body{
    margin: 500px;
  }
  nav ul li a{
    font-size: 20px;
    display: block;
  }
  nav .menu-btn i{
    display: block;
    margin: 20px 35px;
  } 
  nav .cart{
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px 40px;
  }
}
</style>