import axios from "axios";
import { defineStore } from 'pinia';
import { router } from "../src/router";


export const useDetailStore = defineStore('detail', {
    state: () => {
        return {
            api: 'http://127.0.0.1:8000/api/apartment/',
            detail: null,
        }
    },
    actions: {
        detailApart() {
            axios.get(`${this.api}${router.currentRoute.value.params.id}`)
                .then((response) => {
                    console.log(response);
                    this.detail = response.data.results;
                })
        }
    }
})