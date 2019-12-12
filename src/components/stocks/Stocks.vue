<template>
    <div class="row">
        <app-stock v-bind:key="stock" v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from "./Stock";

    export default {
        components: {
            appStock: Stock
        },
        computed: {
            stocks() {
               return this.$store.getters.stocks;
            } 
        }
    }
</script>

<style scoped>

</style>