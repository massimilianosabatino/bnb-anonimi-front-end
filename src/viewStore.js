import axios from "axios";
import { defineStore } from "pinia";
import { router } from "../src/router";

export const useViewStore = defineStore('view', {
    state: () => {
        return {
            api: 'http://127.0.0.1:8000/api/views',
            ip_address: 0,
            date: null,
        }
    },
    actions: {
         countView() {
            axios.get('https://api.ipify.org?format=json')
                .then((response) => {
                    this.ip_address = response.data.ip;
                    console.log(this.ip_address);
                })
                .then(() => {
                    let id_ap = router.currentRoute.value.params.id
                    this.date = Date.now();
                    axios.post(this.api, {
                        visit_date: this.date,
                        apartment_id: id_ap,
                        ip_address: this.ip_address
                    })
                        .then((response) => {
                            console.log(response);
                        })

                })


        },
        async getIpAddress() {
            axios.get('https://api.ipify.org?format=json')
                .then((response) => {
                    this.ip_address = response.data.ip;
                    console.log(this.ip_address);
                })

        },
        apiCalls() {

            this.countView;
        }
    }
})