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
            <div class="griglia d-flex flex-wrap">
                <CardDetails v-for="(element, index) in store.cardList.data" :key="index"
                :imgSource="element.card_images[0].image_url"
                :cardName="element.name"
                :deckArchetype="element.archetype"
                />
            </div>
            
        </div>
    </div>


</template>

<script>
    import CardDetails from "./CardDetails.vue"
    import { store } from "../store";

    export default{
        name: "CardList",
        components:{
            CardDetails
        },
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
    .griglia{
        gap: 15px;
    }

</style>