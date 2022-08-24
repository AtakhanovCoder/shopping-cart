<template>
  <div class="shop">
    <div class="sneaker-content">
      <div class="sneaker-about">
        <h2 class="sneaker-about-title">MEN'S SNEAKERS: MEMBERS SAVE UP TO 50% OFF</h2>
        <h4>
          From Ultraboost to Superstar, you can find the perfect men's athletic shoes to fit your<br> lifestyle. They're made with your comfort in mind so you can put all of your focus into <br> bryournext session. Members get more.
        </h4>
      </div>
      <h1 class="sneaker-text">Sneakers</h1>
      <h2 class="sneaker-adidas-text">Sneaker Adidas</h2>
      <div class="sneaker-adidas">
        <div class="product">
          <img src="" alt="">
          <div class="product-footer">
            <h2></h2>
            <h1></h1>
            <button>Add to Cart</button>
          </div>
        </div>
        <div class="product">
          <img src="" alt="">
          <div class="product-footer">
            <h2></h2>
            <h1></h1>
            <button>Add to Cart</button>
          </div>
        </div>
        <div class="product">
          <img src="" alt="">
          <div class="product-footer">
            <h2></h2>
            <h1></h1>
            <button>Add to Cart</button>
          </div>
        </div>
        <div class="product">
          <img src="" alt="">
          <div class="product-footer">
            <h2></h2>
            <h1></h1>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .sneaker-about{
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
  }
  .sneaker-about h4{
  }
  .sneaker-about-title{
    padding: 15px;
  }
  .sneaker-text{
    text-align: center;
    margin: 25px;
  }
  .sneaker-adidas-text{
    text-align: center;
    margin: 25px;
  }
  .sneaker-adidas {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 40px;
    margin-top: 40px;
  }
  .product img{
    width: 275px;
    object-fit: contain;
  }
  .product-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-footer button{
    
  }
</style>