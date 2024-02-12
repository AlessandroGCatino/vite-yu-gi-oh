<template>

    <div class="container">
            <select class="form-select" v-model="store.archetype" @change="createList()">
                <option disabled value="">Seleziona un archetipo...</option>
                <option v-for="(element, index) in archetypes" :key="index">{{ element.archetype_name }}</option>
                <!-- <option value="Blue-Eyes">Blue-Eyes</option>
                <option value="Dark Magician">Dark Magician</option>
                <option value="Exodia">Exodia</option> -->
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
                archetypes: []
            }
        },
        methods: {
            createList(){
                store.loading = true
                if(store.archetype!=""){
                    let filteredUrl = store.apiUrl + `?archetype=${store.archetype}`
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
            axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
            .then(result => {
                this.archetypes = result.data
            })
            this.createList()
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