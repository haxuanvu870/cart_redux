// import *

var initiallState = [
  {
    id: 1,
    name: "IP 11",
    image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/300x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone11-purple-select-2019.png",
    description: "Do apple sản xuất",
    price: 500,
    inventory: 10,
    rating:4
  },
  {
    id: 2,
    name: "Samsung S10 Plus",
    image: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863636051023338_ss-galaxy-s10-plus-den-1.png",
    description: "Do samsung sản xuất",
    price: 400,
    inventory: 12,
    rating:3
  },
  {
    id: 3,
    name: "IP XS MAS",
    image: "https://cdn.tgdd.vn/Products/Images/42/190322/iphone-xs-max-256gb-white-400x400.jpg",
    description: "Do apple sản xuất",
    price: 300,
    inventory: 5,
    rating:5
  },
];

const products = (state =initiallState, action)=>{
    switch (action.type) {
    
        default:return [...state];
    }
}
export default products;
