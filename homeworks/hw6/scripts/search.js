Vue.component('search-element',{
    data() {
        return {
            userSearch: '',
        }
    },
    template: `<div class="searchWrapper">
                <form action="#" @submit.prevent="$parent.$parent.$refs.products.filterGoods(userSearch)">
                    <input type="text" class="text" v-model="userSearch">
                    <button type="submit">Искать</button>
                </form>
                </div>`,
});

