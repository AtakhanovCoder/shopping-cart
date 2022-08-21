<template>
  <main>
    <div class="main-title">
      <!-- <h1>we have very comfortable <br>
      stylish and unique clothes</h1>
      <h2>ULTRABOOST CLIMACOOL 1 DNA Sneaker</h2>
      <span>172$</span>
      <span>155$</span> -->
      <h3>
      stylish and unique clothes
      </h3>
      <h1>ULTRABOOST CLIMA <br>COOL1 DNA Sneaker</h1>
      <button class="price-1">150$</button>
      <button class="price-2">100$</button>
    </div>
    <div class="main-photo">
      <img src="../assets/Sneakers/sneaker-adidas-1.jpg" alt="">
    </div>
  </main>
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
main{
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 90vh;
}
.main-title h1{
  color: var(--purple);
  padding: 10px;
}
.main-title h3{
  margin-left: 0px;
  font-size: 20px;
  padding: 10px;
}
.main-title .price-1{
  margin-top: 10px;
  margin-left: 50px;
  width: 100px;
  height: 45px;
  font-size: 29px;
  border: none;
  background-color: var(--purple);
  color: white;
  font-weight: bold;
  text-decoration: line-through;
  transition: .4s;
}
.main-title .price-1:hover{
  transition: .4s;
  background-color: white;
  border: 2px solid var(--purple);
  color: var(--purple);
}
.main-title .price-2 {
  margin-left: 20px;
  width: 100px;
  height: 45px;
  font-size: 29px;
  border: none;
  background-color: var(--purple);
  color: white;
  font-weight: bold;
}

.main-title .price-2:hover{
  transition: .4s;
  background-color: white;
  border: 2px solid var(--purple);
  color: var(--purple);
}
.main-photo img{
  width: 100%;
  height: 60vh;
  border-radius: 50%;
  border: 10px solid var(--purple);
}
@media (max-width: 450px){
  main{
    display: flex;
    flex-wrap: wrap;
  }
}
@media (max-width: 750px) {
  main{
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .main-photo img{
  width: 100%;
  height: 40vh;
  }
  .main-title h1, .main-title h3{
    text-align: center;
  }
}
</style>