<template>

    <div class="container">
            <select class="form-select" v-model="store.archetype" @change="createList()">
                <option  value="">Seleziona un archetipo...</option>
                <option value="Blue-Eyes">Blue-Eyes</option>
                <option value="Dark Magician">Dark Magician</option>
                <option value="Exodia">Exodia</option>
            </select>
        </div>

</template>

<script>
    import {store} from "../store"
    import axios from "axios"

    export default{
        name: "ArchetypeFilter",
        data(){
            return{
                store,
            }
        },
        methods: {
            createList(){
                store.loading = true
                if(store.archetype!=""){
                    let filteredUrl = store.apiUrl + store.archetype + "&num=20&offset=0"
                    console.log(filteredUrl)
                    axios
                    .get(filteredUrl)
                    .then ( res => {
                        store.cardList = res.data
                    })
                    store.loading = false
                } else {
                    store.cardList = []
                }
            }
        },
        mounted(){
            this.createList
        }
    }
</script>

<style scoped lang="scss">

    div{
        padding: 20px;
        select{
        width: fit-content;
        }
    }

</style>