<template>
  <div class="blog-container">
    <div class="blog-line-1">
      <div class="blog">
        <div class="blog-image">
          <img src="@/assets/Blog/adidas-t-shirt-1.jpg" alt="">        
        </div>
        <div class="blog-title">
          <p>Adidas Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur aspernatur nam maxime nostrum placeat eius earumlo
              quaerat iste voluptatum ullam odio mollitia enim ipsa doloremque</p>
          <button>do you like it</button>
        </div>
      </div>
    </div>
    <div class="blog-line-2">
      <div class="blog">
        <div class="blog-title">
          <p>Adidas Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur aspernatur nam maxime nostrum placeat eius earumlo
              quaerat iste voluptatum ullam odio mollitia enim ipsa doloremque</p>
          <button>do you like it</button>
        </div>        
        <div class="blog-image">
          <img src="@/assets/Blog/nike-sneaker-1.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="blog-line-3">
      <div class="blog">        
      <div class="blog-image" id="sneaker-2">
        <img src="@/assets/Blog/nike-sneaker-2.jpg" alt="" class="sneaker-2">
      </div>
      <div class="blog-title">
          <p>Adidas Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur aspernatur nam maxime nostrum placeat eius earumlo
              quaerat iste voluptatum ullam odio mollitia enim ipsa doloremque</p>
          <button>do you like it</button>
      </div>
    </div>
    </div>
    <div class="blog">
      <div class="blog-title">
          <p>Adidas Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Consectetur aspernatur nam maxime nostrum placeat eius earumlo
              quaerat iste voluptatum ullam odio mollitia enim ipsa doloremque</p>
          <button>do you like it</button>
      </div>      
      <div class="blog-image">
        <img src="@/assets/Blog/adidas-headset.jpg" alt="" height="70%">
      </div>

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
    .blog{
      display: flex;
      justify-content: space-around;
      margin-top: 120px;
      gap: 40px;
      flex-wrap: wrap;
    }
    .blog-image img{
      width: 80vh;
      border-radius: 20px;
      border: 7px solid var(--purple);
      object-fit: contain;
    }
    .blog-title p{
      width: 80vh;
      margin-left: 0;
      margin-right: 100%;
      font-size: 25px;
    }
    .blog-title button{
      margin-top: 23px;
      width: 175px;
      height: 50px;
      font-size: 20px;
      border: none;
      background-color: var(--purple);
      color: white;
      font-weight: bold;
      transition: .4s;
      cursor: pointer;
    }
    .blog-title button:hover{
      transition: .4s;
      background-color: white;
      color: var(--purple);
      border: 2px solid var(--purple);
    }
    #sneaker-2 img{
      width: 500px;
      height: 400px;
    }
    @media (max-width: 700px) {
      .blog-image{
        display: flex;
        justify-content: center;
      }
      .blog-image img{
        width: 80%;
        border-radius: 20px;
        border: 7px solid var(--purple);
        object-fit: contain;
      }
      .blog-title{
        width: 100%;
      }
      .blog-title p{
        width: 90%;
        font-size: 25px;
        margin-left: 25px;
        margin-right: 10px;
      }
      .blog-title button{
        margin-left: 25%;
      }
    }
    @media (max-width: 650px) {
      #sneaker-2 img{
        width: 100%;
        height: 400px;
      }
    }
</style>