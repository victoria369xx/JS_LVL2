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
  }
  addToCart(){
//
  }
  removeFromCart(){
//
  }

}

class Cart {
  constructor(){
    this.cart = [];
  }
  getCartList(){
    //
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
