<template>
    <h1>we have products of these brands</h1>
<div class="logo-container">
    <div class="logo">
    <img src="@/assets/Clothes-logo/adidas-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/chanel-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/fila-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/gucci-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/lacoste-logo.jpg" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/louis-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/nike-logo.jpg" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/polo-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/reebok-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/the-north-face-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/tommy-hilfiger-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/under-armour-logo.png" alt="">
    </div>
    <div class="logo">
    <img src="@/assets/Clothes-logo/zara-logo.png" alt="">
    </div>
  </div>
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
  .logo-container{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 5%;
    padding: 50px;
    border: 5px solid var(--purple);
  }
  h1{
    text-align: center;
  }
  .logo img{
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
</style>