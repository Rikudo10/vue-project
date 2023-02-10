export default {
    productsList(state){
        return state.products
    },
    cartList(state){
        return state.cart
    },
    filteredPost (state) {
        return state.products.filter((product) => product.name.toLowerCase().includes(state.search.toLowerCase()));
      },
      carItemCount (state) {
        return state.cart.length
      },
      getactiveProduct(state){
        return state.activeProduct
      }
      
}