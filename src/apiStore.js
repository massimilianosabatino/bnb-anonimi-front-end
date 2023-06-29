import axios from "axios";
import { defineStore } from 'pinia';


export const useApiStore = defineStore('api', {
    state: () => {
        return {
            api: 'http://127.0.0.1:8000/api/apartments',
            sponsorApi: 'http://127.0.0.1:8000/api/sponsor',
            data: null,
            sponsor: null,
        }
    },
    actions: {
        getData() {
            axios.get(this.api)
                .then((response) => {
                    this.data = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })

        },
        getSponsor() {
            axios.get(this.sponsorApi)
                .then((response) => {
                    this.sponsor = response.data.result;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
})






