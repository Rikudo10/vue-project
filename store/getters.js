export default {
    productsList(state){
        return state.products
    },
    cartList(state){
        return state.cart
    },
    filteredPost (state) {
        return state.products.filter(product => product.name.inclueds(state.search))
      }
}