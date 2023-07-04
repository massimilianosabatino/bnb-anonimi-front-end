<script>
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  name: "SearchApp",
  methods: {
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore, ["searchAddress"]),
  },
  mounted() {
    this.searchAddress();
  }
};
</script>
<template>
  <!--Search-->
  <div id="search" class="w-100">
    <form @submit.prevent="searchApartment" class="d-flex justify-content-end align-items-center gap-3 w-100" role="search">
      <div class="w-100" id="address"></div>
      <router-link :to="{ name: 'Search' }">
        <button class="btn btn-outline-success" type="submit" @click="searchApartment()" id="cerca">Cerca</button>
      </router-link>
    </form>
  </div>
  <!--/Search-->
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
#address {
  width: 75%;
  background-color: transparent;
}
.btn-outline-success:hover{
  background-color: $link;
}
</style>
