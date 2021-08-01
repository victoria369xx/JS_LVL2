'use strict';
class GoodsItem {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price; 
  }
  render (){
    return `<div class="goods-item">
    <i class="fas fa-tshirt"></i>
    <h3>${this.title}</h3>
    <p>$${this.price}</p>
    <button class="addToCart">Add to cart</button>
    </div>`
  }
}
class GoodsList {
  constructor(){
    this.goods = [];
    this.allGoods = [];
  }
  fetchGoods(){
    this.goods = [
      {id:1, title: 'Shirt', price: 150},
      {id:2, title: 'Socks', price: 50},
      {id:3, title: 'Jacket', price: 350},
      {id:4, title: 'Shoes', price: 250},
    ]
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.id, good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  //Задание 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
  sum(){
    let sumPrice = 0;
    for (let i=0; i<this.goods.length; i++){
      sumPrice += this.goods[i].price;
    }
    console.log(sumPrice); // результат в консоли
  }

}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sum();

//Задание 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями
class Cart {
  constructor(){}
showCart(){
    //
  }
recalculateCart(){
  //
}
clearCart(){
  //
}
}

class CartItem extends GoodsItem {
  constructor (quantity){
    this.quantity = quantity;
  }
  addToCart (){
    //
  }
  removeFromCart (){
    //
  }
}