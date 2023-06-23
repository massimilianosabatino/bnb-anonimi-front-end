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
    <div class="container">
      <div id="search">
        <form @submit.prevent="searchApartment" class="d-flex justify-content-center gap-3" role="search">
          <!-- <input class="form-control me-2" type="search" placeholder="Cerca un indirizzo" aria-label="Search" v-model="searchKey" /> -->
          <div id="address"></div>
          <button class="btn btn-sm btn-success" type="submit">Cerca</button>
        </form>
      </div>
    </div>
  <!--/Search-->
</template>
<style lang="scss" scoped>
#search{
  padding-top: 100px;
}
  #address{
    width: 75%;
    background-color: transparent;
  }
</style>
