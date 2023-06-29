import axios from "axios";
import { defineStore } from 'pinia';
import { router } from "../src/router";
import { faI } from "@fortawesome/free-solid-svg-icons";


export const useDetailStore = defineStore('detail', {
    state: () => {
        return {
            api: 'http://127.0.0.1:8000/api/apartment/',
            messageApi: 'http://127.0.0.1:8000/api/message',
            detail: null,
            name: '',
            email: '',
            content: '',
            messageSuccess: null,
            messageResult: null,
        }
    },
    actions: {
        detailApart() {
            axios.get(`${this.api}${router.currentRoute.value.params.id}`)
                .then((response) => {
                    this.detail = response.data.results;
                }).then(() => {
                    this.apartmentMap();
                })
        },
        apartmentMap() {
            let HQ = { lat: this.detail.latitude, lon: this.detail.longitude }
            let map = tt.map({
                key: "fwPUxAVYf58pWhjrpiwpEvGyY6AmWr7U",
                container: "map",
                center: HQ,
                zoom: 16,
            })
            var marker = new tt.Marker().setLngLat(HQ).addTo(map);
        },
        sendMessage() {
            const today = new Date().toJSON().slice(0, 10);
            this.messageSucces = null;
            this.messageResult = null;
            axios.post(this.messageApi, {
                id: this.detail.id,
                name: this.name,
                email: this.email,
                content: this.content,
                date: today,
            }).then((response) => {
                this.messageResult = response.data.result;
                this.messageSuccess = response.data.success;
            }).then(() => {
                if (this.messageSuccess) {
                    this.name = '';
                    this.email = '';
                    this.content = '';
                }
                let result = document.getElementById('risultato');
                if (this.messageSuccess == true) {
                    result.classList.remove('text-danger');
                    result.classList.add('text-success'); 
                    setTimeout(function () {
                        result.innerText = '';
                    }, 3000) 
                }
                if(this.messageSuccess === false){
                    result.classList.remove('text-succes');
                    result.classList.add('text-danger'); 
                    setTimeout(function () {
                        result.innerText = '';
                    }, 3000)
                }
                result.innerText = this.messageResult;
            })
        },
    }
})