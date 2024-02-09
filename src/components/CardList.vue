<template>

    <div class="container">
        <div v-if="store.loading" class="spinner-border" role="status">
        </div>
        <div v-else>
            <div class="founded">

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
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .founded{
        
    }

</style>