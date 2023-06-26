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
                    this.detail = response.data.results;
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
        }
    }
})