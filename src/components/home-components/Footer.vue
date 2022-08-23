<template>
  <footer>
    <div class="footer-1">
      <div class="column-1">
        <div class="shopping-cart-text">
          <h1 class="shop">Shopping</h1><h1 class="cart">Cart</h1>
        </div>
        <div class="shopping-cart-title">
          <h2>Far far away, behind the word mountains, far from the countries.</h2>
        </div>
      </div>
      <div class="column-2">
        <div class="links">
          <router-link to="/home">Home</router-link>
          <router-link to="/shop">Shop</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
      <div class="column-3">
        <div class="input-icon">
          <div class="input-div">
            <input type="text">
            <button><i class="fa-solid fa-envelope"></i></button>
          </div>
          <div class="icon-div">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  :root{
    --purple: #7F31FF;
    --black-gray: #1D1D1C;
  }
  h1,h2,h3,h4,h5,a{
    color: white;
  }
  footer{
    border-top: 5px solid var(--purple);
    margin-top: 75px;
    background-color: var(--black-gray);
  }
  .footer-1{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
  }
  .column-1{
    width: 280px;
    margin-top: 30px;
  }
  .column-2{
    margin-top: 30px;
  }
  .shopping-cart-title{
    margin: 15px 0px;
  }
  .links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 35vh;
  }
  .links a{
    font-size: 25px;
  }
  .input-div input{
    width: 250px;
    height: 45px;
    font-size: 23px;
    border: 3px solid var(--purple);
    outline: none;
  }
  .input-div button{
    font-size: 23px;
    width: 50px;
    background-color: var(--purple);
    border: none;
    height: 45px;
    transition: .4s;
  }
  .input-div button:hover{
    background-color: white;
    border: 2px solid var(--purple);
    transition: .4s;
  }
  .input-div button:hover i{
    color: var(--purple);
    transition: .4s;
  }
  .input-div button i{
    color: white;
  }
  .input-icon{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 44vh;
    flex-direction: column; 
  }
  .icon-div{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 75px;
  }
  .icon-div i{
    font-size: 45px;
    color: var(--purple);
    transition: .4s;
  }
  .icon-div i:hover{
    color: #fff;
    transition: .4s;
  }
</style>