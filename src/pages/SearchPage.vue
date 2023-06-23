<script>
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "../components/main/CardList.vue";

export default {
  name: "SearchPage",
  components: {
    CardList,
  },
  data(){
    return{
      start:0,
      finish:9

    }
  },



  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useSearchStore, ["getServices"]),
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore, ["filteredServices"]),
    next(){
      if(this.finish>=this.services.length-1){
        this.start=0;
        this.finish=9;
      }else{
        this.start+=9;
        this.finish+=9;
      }
      
    },
    prev(){
      if(this.start<=0){
        this.finish=this.services.length-1;
        this.start=this.services.length-9;
      }else{
        this.start-=9;
        this.finish-=9;
      }
    }
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ["apartments"]),
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useSearchStore, ["clicked"]),

  },
  created() {
    this.getData();
    this.getServices();
  },
  mounted() {
    // this.filteredServices();
  },
};
</script>

<template>
  <div class="container">

    <nav>
      <ul class="list-unstyled d-flex justify-content-between align-items-center">
        <li role="button" class="me-3" @click="prev()"><i class="fa-solid fa-chevron-left"></i></li>
        <li role="button" v-for="(service, index) in services.slice(this.start, this.finish)"  class="mx-3">
          <input type="checkbox" class="btn-check" :id="service.id">
          <label class="d-flex flex-column justify-content-center align-items-center" :for="service.id">
            <p class="icona-green" v-html="service.icon"></p>
            <p class="hover-green">{{ service.name }}</p>
          
          </label>

        </li>
        <li role="button" class="ms-3" @click="next()"><i class="fa-solid fa-chevron-right"></i></li>
      </ul>
    </nav>
  </div>
    
    
</template>

<style lang="scss" scoped>

@use "../assets/scss/_partial/variables" as *;
.container {
  margin-top: 150px;
}
.hover-green:hover{
  color: $link;
  text-decoration: 2px underline $link;
}
.icona-green:hover{
  color: $link;
}

</style>
