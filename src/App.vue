<template>

    <HeaderYugi/>

</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import HeaderYugi from "./components/HeaderYugi.vue"
    
    export default {
        components:{
            HeaderYugi,
        },
        data() {
            return{
                store,
            }
        }
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

</style>
