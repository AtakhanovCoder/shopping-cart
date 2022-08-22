<template>
  <div class="trend-content">
    <h1>LATEST NEWS</h1>
    <h2>Adidas New Trends</h2>
    <div class="trend-products">
      <div class="product">
          <img src="@/assets/Trend/adidas-sneaker-1.jpg" alt="">
         <div class="product-footer">
          <h2>Adidas Sneaker</h2>
          <h1>150$</h1>
          <div class="button-content">
            <button>
              <router-link to="/shop">Add to Cart</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="product">
          <img src="@/assets/Trend/adidas-sweater-1.jpg" alt="">
         <div class="product-footer">
          <h2>Adidas Sweater</h2>
          <h1>130$</h1>
          <div class="button-content">
            <button>
              <router-link to="/shop">Add to Cart</router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="product">
          <img src="@/assets/Trend/adidas-t-shirt-1.jpg" alt="">
         <div class="product-footer">
          <h2>Adidas T-shirt</h2>
          <h1>75$</h1>
          <div class="button-content">
            <button>
              <router-link to="/shop">Add to Cart</router-link>
            </button>
          </div>
        </div>
      </div>
      <router-view/>
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
  .trend-content h1, .trend-content h2 {
    text-align: center;
    padding: 20px;
  }
  .trend-products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
  }
  .product{
    border: 4px solid var(--purple);
    width: 275px;
  }
  .product img{
    width: 100%;
    height: 38vh;
    padding: 10px; 
    object-fit: contain;
  }
  .product-footer h1{
    padding: 5px;
  }
  .product-footer h2{
    padding: 5px;
  }
  .product-footer button{
  margin-bottom: 15px;
  width: 150px;
  height: 45px;
  font-size: 20px;
  border: none;
  background-color: var(--purple);
  color: white;
  font-weight: bold;
  transition: .4s;
  }
  .product-footer button a{
    color: white;
  }
  .product-footer button:hover{
    transition: .4s;
    background-color: white;
    border: 2px solid var(--purple);
    color: var(--purple);
  }
  .product-footer button:hover a{
      color: var(--purple);
  }
  .button-content{
    display: flex;
    justify-content: center;
  }
</style>