<script>
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "../main/CardList.vue";

export default {
  name: "SearchApp",
  components: {
    CardList,
  },
  methods: {
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore,["chePalle"])
  },
  computed: {
    ...mapState(useSearchStore, ["apartments"]),
  },
  mounted(){
    this.chePalle();
  }
};
</script>
<template>
  <!--Search-->
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <form @submit.prevent="searchApartment" class="d-flex" role="search">
        <!-- <input class="form-control me-2" type="search" placeholder="Cerca un indirizzo" aria-label="Search" v-model="searchKey" /> -->
        <div id="address"></div>
        <button class="btn btn-outline-success" type="submit">Cerca</button>
      </form>
    </div>
  </nav>
  <!--/Search-->
</template>
