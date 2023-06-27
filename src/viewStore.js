import axios from "axios";    
import { defineStore } from "pinia";
import {router} from "../src/router";

export const useViewStore = defineStore('view',{
    state: () => {
        return {
            api:'http://127.0.0.1:8000/api/views',
            date:null,
         }
    },
    actions: {
        countView(){
            let id_ap=router.currentRoute.value.params.id
            this.date=Date.now();
            axios.post(this.api,{
                visit_date:this.date,
                apartment_id:id_ap
            })
            .then((response)=>{
                console.log(response);
            })
    }
}})