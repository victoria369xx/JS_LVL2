const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('header-element',{
    template:`<header class="header">
    <div class="header__icons_flex container">
                <slot></slot>
    </div>
</header>`
});

new Vue({
    el: '#app',
    methods: {
        getJson(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(error => {
                    console.log(error)
                })
        }
    }
});


/*/catalogData.json – получить список товаров;
/getBasket.json – получить содержимое корзины;
/addToBasket.json – добавить товар в корзину;
/deleteFromBasket.json – удалить товар из корзины. */