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
  <nav>
    <div class="container">
      <form @submit.prevent="searchApartment" class="d-flex justify-content-center w-100" role="search">
        <!-- <input class="form-control me-2" type="search" placeholder="Cerca un indirizzo" aria-label="Search" v-model="searchKey" /> -->
        <div id="address"></div>
        <button class="btn btn-success" type="submit">Cerca</button>
      </form>
    </div>
  </nav>
  <!--/Search-->
</template>
<style lang="scss" scoped>
  #address{
    width: 100%;
    background-color: transparent;
  }
</style>
