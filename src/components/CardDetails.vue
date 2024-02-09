<script>
    import { store } from '../store';
    export default{
        name: "CardDetails",
        props:{
            imgSource: String,
            cardName: String,
            deckArchetype: String
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<template>

    <div class="cardYugi">
        <figure>
            <img :src="imgSource" :alt="cardName">
        </figure>
        <div class="text-center">
            <p>{{ cardName }}</p>
            <span>{{ deckArchetype }}</span>
        </div>
    </div>

</template>

<style scoped lang="scss">

div.cardYugi{
    width: calc( (100%/5) - (12px) );
    color: white;
    background-color: #d48f38;
    figure{
        margin: 0;
        img{
            display: block;
            width: 100%;
        }
    }
    div{
        padding: 10px;
        span{
            color: black;
        }
    }
}

</style>