<script>
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  name: "SearchApp",
  methods: {
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore,["chePalle"]),
  },
  mounted(){
    this.chePalle();
  }
};
</script>
<template>
  <!--Search-->
      <div id="search">
        <form @submit.prevent="searchApartment" class="d-flex justify-content-center gap-3" role="search">
          <div id="address"></div>
          <button class="btn btn-sm btn-success" type="submit">Cerca</button>
        </form>
      </div>
  <!--/Search-->
</template>
<style lang="scss" scoped>
  #address{
    width: 75%;
    background-color: transparent;
  }
</style>
