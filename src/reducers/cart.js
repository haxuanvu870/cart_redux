import * as Types from "./../constants/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
var initiallState = data ? data : [];
// var initiallState = [
//   {
//     product: {
//       id: 1,
//       name: "IP 11",
//       image:
//         "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png",
//       description: "Do apple sản xuất",
//       price: 500,
//       inventory: 10,
//       rating: 4,
//     },
//     quantity: 3,
//   },
//   {
//     product: {
//       id: 3,
//       name: "IP XS MAS",
//       image:
//         "https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x400.jpg",
//       description: "Do apple sản xuất",
//       price: 300,
//       inventory: 5,
//       rating: 5,
//     },
//     quantity: 1,
//   },
// ];

const cart = (state = initiallState, action) => {
  var { product, quantity } =  action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity += quantity;
      }
      else{
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
      case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state.splice(index,1);
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
      case Types.UPDATE_QUANTITY_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
var findProductInCart = (cart, product)=>{
  var index = -1;
  if(cart.length >0){
    for(var i= 0; i< cart.length; i++){
      if(cart[i].product.id === product.id){
        index = i;
        break;
      }
    }
  }
  return index;
}
export default cart;
