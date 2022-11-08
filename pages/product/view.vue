<template>
    <div>
        <div>this's id is :: {{ product._id }} ::</div>
        <div>this's title is :: {{ product.title }} /
            
            
            ::</div>
        <div>this's id is :: {{ product.price }} ::</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    layout: 'client-layout',
    fetch ({ store }) {
        return store.dispatch('product/load')
    },
    head: {
        title: "durf"
    },
    computed: {
        ...mapState(['product'])
    }
}
</script>