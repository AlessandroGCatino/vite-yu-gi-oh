<template>

    <HeaderYugi/>
    <main>
       <ArchetypeFilter/>
       <CardList/>
    </main>

</template>

<script>

    import { store } from './store'
    import HeaderYugi from "./components/HeaderYugi.vue"
    import ArchetypeFilter from "./components/ArchetypeFilter.vue"
    import CardList from "./components/CardList.vue"

    
    export default {
        components:{
            HeaderYugi,
            ArchetypeFilter,
            CardList
        },
        data() {
            return{
                store,
            }
        },
        methods: {
            
        },
        mounted(){
            this.createList
        }
    }


</script>


<style lang="scss">

@use "./styles/general.scss";

main{
    background-color: #d48f38;
    padding: 10px;
}

</style>
