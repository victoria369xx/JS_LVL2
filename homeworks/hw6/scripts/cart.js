Vue.component('cart-element',{
    data(){
        return{
            isVisibleCart: false
        }
    },
template:` <div class="cartWrapper">
                <button type="button" @click="showCart">Корзина</button>
                <div class="cartComponent" v-show="isVisibleCart">
                    <div class="cartComponent_flex">
                        <div class="cartColumn">Наименование</div>
                        <div class="cartColumn">Количество</div>
                        <div class="cartColumn">Цена</div>
                        <div class="cartColumn">Стоимость</div>
                    </div>
                    <div class="cartTotal">Всего товаров в корзине на сумму</div>
                </div>
            </div>`,
methods: {
    showCart (){
        this.isVisibleCart = !this.isVisibleCart;
    }
}
});