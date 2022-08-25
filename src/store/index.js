import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        img: require('@/assets/Shop/Sneaker/sneaker-adidas-1.jpg'),
        name: 'NMD_R1 Shoes',
        price: 150,
      },
      {
        img: require('@/assets/Shop/Sneaker/sneaker-adidas-2.jpg'),
        name: 'Racer TR21 Shoes',
        price: 45,
      },
      {
        img: require('@/assets/Shop/Sneaker/sneaker-adidas-3.jpg'),
        name: 'Forum Low Shoes',
        price: '150$',
      },
      {
        img: require('@/assets/Shop/Sneaker/sneaker-adidas-4.jpg'),
        name: 'Continental 80 Shoes',
        price: 59,
      },
    ],
    addedProducts: []
  },
  getters: {
  },
  mutations: {
    addCart(state,product){
      state.addedProducts.push(product)
      console.log(state.addedProducts)
    }
  },
  actions: {
  },
  modules: {
  }
})
