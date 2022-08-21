<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/shop">Shop</router-link>

    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/cart"><i class="fa-solid fa-bag-shopping"></i><span class="notif">0</span></router-link>
  </nav>
  <router-view/>  
</template>
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
:root{
  --purple: #7F31FF;
  --black-gray: #1D1D1C;
}
nav a{
  font-size: 36px;
  color: white;
}
nav{
  display: flex;
  justify-content: space-evenly;
  border-bottom: 5px solid var(--purple);
  padding: 10px;
  background-color: var(--black-gray);
}
nav a.router-link-exact-active, nav a.router-link-exact-active i {
  color: var(--purple);
}
nav a i{
  color: white;
}
.notif{
  position: relative;
  bottom: 20px;
  right: 10px;
  font-size: 20px;
  background-color: red;
  color: #fff;
  padding: 0px 7px;
  border-radius: 50px;
}

</style>
