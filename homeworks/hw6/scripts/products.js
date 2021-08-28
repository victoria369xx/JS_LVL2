Vue.component('goods-list', {
    data() {
        return {
            goods: [],
            catalogUrl: '/catalogData.json',
            filteredGoods:[],
        }
    },
    template: `
    <section class="container">
    <div class="goods_list $emit">
    <goods-item class="goods_item" v-for="good of filteredGoods" :key="good.id_product" :product='good'>
        <slot></slot>
    </goods-item>
</div>
</section>
    `,
    methods: {
        filterGoods(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filteredGoods = this.goods.filter(el => regexp.test(el.product_name));
        },
    },
    mounted() {
        this.$parent.getJson(`${API_URL + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.goods.push(el);
                    this.filteredGoods.push(el);
                }
    
            });
    }
});
Vue.component('goods-item', {
    props: ['product'],
    template: ` <div class="goods_item" data-goodID="id">
    <div class="good_info">
    <h3>{{product.product_name}}</h3>
    <p>{{product.price}}</p>
    </div>
<button class="goods_itemAddBtn" type="button">В корзину</button>    
</div>`
});