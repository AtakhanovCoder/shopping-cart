<template>
<div class="product-container">
  <h1 class="sneaker-adidas-title">Sneakers Adidas</h1>
  <div class="products">
      <div class="product" v-for="product in products">
        <img :src="product.img" alt="">
        <h2 class="product-name">{{ product.name }}</h2>
        <h1 class="product-price">{{ product.price }}$</h1>
        <div class="product-btn-div">
          <button class="add-cart-btn" @click="addCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      products: this.$store.state.products,
    }
  },
  methods: {
    addCart(product){
    this.$store.commit('addCart',product)
    },
  },
}
</script>
<style scoped>
  :root{
    --purple: #7F31FF;
    --black-gray: #1D1D1C;
  }

  .sneaker-adidas-title{
    text-align: center;
    margin-bottom: 40px;
  }
  .products{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
  }
  .product{
    border: 4px solid var(--purple);
    margin-bottom: 40px;
  }
  .product img{
    width: 265px;

  }
  .product-name{
    text-align: center;
    padding: 5px;
  }
  .product-price{
    text-align: center;
    padding: 5px;
  }
  .product-btn-div{
    display: flex;
    justify-content: center;
  }
  .add-cart-btn{
    background-color: var(--purple);
    border: none;
    color: white;
    width: 160px;
    height: 45px;
    font-size: 20px;
    margin-bottom: 25px;
    transition: ease all .4s;
    cursor: pointer;
  }
  .add-cart-btn:hover{
    border: 2px solid var(--purple);
    background-color: white;
    color: var(--purple);
    transition: ease all .4s;
  }
</style>