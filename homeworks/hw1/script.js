'use strict';
const goods = [
    {id:1, title: 'Shirt', price: 150 },
    {id:2, title: 'Socks', price: 50 },
    {id:3, title: 'Jacket', price: 350 },
    {id:4, title: 'Shoes', price: 250 },
  ];
  const renderGoodsItem = (title, price) => `<div class="goods-item">
  <i class="fas fa-tshirt"></i>
  <h3>${title}</h3>
  <p>$${price}</p>
  <button class="addToCart">Add to cart</button>
  </div>`;

  const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  //вывод запятых из-за особенностей метода map, который возвращает новый массив. 
  renderGoodsList(goods);
  