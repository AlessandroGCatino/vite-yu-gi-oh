<template>

    <div class="container">
        <div v-if="store.cardList.length == 0">
            <h3 class="text-center text-danger">Seleziona un archetipo per vedere le carte!</h3>
        </div>
        <div v-else-if="store.loading" class="spinner-border" role="status">
        </div>
        <div v-else>
            <div class="founded">
                <h6>Found {{ store.cardList.data.length }} cards</h6>
            </div>
        </div>
    </div>


</template>

<script>

    import { store } from "../store";

    export default{
        name: "CardList",
        data(){
            return{
                store,
            }
        },
        methods:{
        }
    }

</script>

<style scoped lang="scss">

    .container{
        background-color: white;
        padding: 20px;
        .spinner-border{
            margin: 0 auto;
            display: block;
        }
    }
    .founded{
        background-color: #212529;
        color: white;
        padding: 10px;
    }

</style>