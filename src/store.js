import { reactive } from "vue"

export const store = reactive({
    archetype: "",
    apiUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardList : [],
    loading: true
})