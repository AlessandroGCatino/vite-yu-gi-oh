<template>

    <HeaderYugi/>
    <main>
       <ArchetypeFilter/>
    </main>

</template>

<script>
    import axios from 'axios'
    import { store } from './store'
    import HeaderYugi from "./components/HeaderYugi.vue"
    import ArchetypeFilter from "./components/ArchetypeFilter.vue"

    
    export default {
        components:{
    HeaderYugi,
    ArchetypeFilter,
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

main{
    background-color: #d48f38;
}

</style>
