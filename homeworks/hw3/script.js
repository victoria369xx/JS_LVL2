'use strict';
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
  return new Promise((resolve, reject) => {
    var xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', url, true);
      xhr.onreadystatechange = () => {
       if (xhr.readyState === 4) {
          if (xhr.status >= 400){
              reject(xhr.responseText);
          }
          else {
              resolve(xhr.responseText)
          }
      }
    }
      xhr.onerror = () =>{
          reject(xhr.responseText);
      }
      xhr.send();
  });
  }

class GoodsItem {
  constructor(id, product_name, price) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
  }
  render() {
    return `<div class="goods-item">
    <i class="fas fa-tshirt"></i>
    <h3>${this.product_name}</h3>
    <p>$${this.price}</p>
    <button class="addToCart">Add to cart</button>
    </div>`
  }
}
class GoodsList {
  constructor() {
    this.goods = [];
    this.allGoods = [];
  }

  fetchGoods() {
    return new Promise((resolve, reject) => {
        makeGETRequest(`${API_URL}/catalogData.json`)
        .then((goods) =>{
          this.goods = JSON.parse(goods);
          resolve();
        })
        .catch((error)=>{
          console.log(error);
          reject(error);
        })
  })
}
render() {
  let listHtml = '';
  this.goods.forEach(good => {
    const goodItem = new GoodsItem(good.id, good.product_name, good.price);
    listHtml += goodItem.render();
  });
  document.querySelector('.goods-list').innerHTML = listHtml;
}

  sum() {
    let sumPrice = 0;
    for (let i = 0; i < this.goods.length; i++) {
      sumPrice += this.goods[i].price;
    }
    return sumPrice;
  }
}

const list = new GoodsList();
list.fetchGoods()
.then(()=>{
  list.render();
})
.catch((error)=>{
  console.log(error);
})

class CartItem extends GoodsItem {
  constructor(id, product_name, price, quantity){
    super(id,product_name,price)
    this.quantity = quantity;
  }
/*render(){
  return `
  <div class="cartWrapper_flex">
  <div class="cartItem_name">Товар</div>
  <div class="cartItem_quantity"> 1 </div>
  <div class="cartItem_price"> 50 000 </div>
  <div class="cartItem_sum"> 0 </div>
</div>
<div class="totalCartValue">
  Товаров в корзине на сумму: $0
</div>
  `
}*/
}

class CartList extends GoodsList {
  constructor(){
    super(this.goods)
    this.cart = [];
  }
  renderItemInCart(){
    ////
  }
  addItemToCart(){
    return new Promise((resolve, reject) => {
      makeGETRequest(`${API_URL}/addToBasket.json`)
      .then((goods) =>{
        this.goods = JSON.parse(goods);
        resolve();
      })
      .catch((error)=>{
        console.log(error);
        reject(error);
      })
})
  }
  remItemFromCart(){
    return new Promise((resolve, reject) => {
      makeGETRequest(`${API_URL}/deleteFromBasket.json`)
      .then((goods) =>{
        this.goods = JSON.parse(goods);
        resolve();
      })
      .catch((error)=>{
        console.log(error);
        reject(error);
      })
})
  }
  getCartList(){
    return new Promise((resolve, reject) => {
      makeGETRequest(`${API_URL}/getBasket.json`)
      .then((goods) =>{
        this.goods = JSON.parse(goods);
        resolve();
      })
      .catch((error)=>{
        console.log(error);
        reject(error);
      })
})
  }
}