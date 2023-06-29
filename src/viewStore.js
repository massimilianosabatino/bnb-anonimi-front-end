import axios from "axios";
import { defineStore } from "pinia";
import { router } from "../src/router";

export const useViewStore = defineStore('view', {
    state: () => {
        return {
            api: 'http://127.0.0.1:8000/api/views',
            ip_address: null,
        }
    },

    actions: {
        countView() {
            let date = new Date().toJSON().slice(0, 10);
            console.log(localStorage.getItem('ip_address'));
            axios.post(this.api, {
                visit_date: date,
                apartment_id: router.currentRoute.value.params.id,
                ip_address: localStorage.getItem('ip_address'),
            })
                .then((response) => {
                   console.log(response);
                })


        },
        getIpAddress() {
            console.log('pre chiamata')
            if (!this.ip_address) {
                console.log('in fi');
                axios.get('https://api.ipify.org?format=json', { headers: 'Access-Control-Allow-Origin' })
                    .then((response) => {
                        this.ip_address= response.data.ip;
                        localStorage.setItem('ip_address',this.ip_address)
                        console.log(this.ip_address);
                    })
            }

        },
    }
})