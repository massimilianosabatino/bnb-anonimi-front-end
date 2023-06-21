import axios from "axios";
import {defineStore} from 'pinia';


export const useApiStore = defineStore('api',{
    state: ()=>{
        return {
        api: 'http://127.0.0.1:8000/api/apartments',
        data: null
        }
    },
    actions:{
         getData(){
            axios.get(this.api)
                .then((response) => {
                    this.data = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })

        }
    }})





