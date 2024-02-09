<template>

    <div class="container">
            <select class="form-select" v-model="store.archetype">
                <option disabled value="">Seleziona un archetipo...</option>
                <option value="Blue-Eyes">Blue-Eyes</option>
                <option value="Dark Magician">Dark Magician</option>
                <option value="Exodia">Exodia</option>
            </select>
        </div>

</template>

<script>
    import {store} from "../store"
    export default{
        name: "ArchetypeFilter",
        data(){
            return{
                store,
            }
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