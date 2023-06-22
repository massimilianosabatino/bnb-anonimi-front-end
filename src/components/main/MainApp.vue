<script>
import { useApiStore } from "../../apiStore";
import { useSearchStore } from "../../searchStore";
import { mapState,mapActions } from "pinia";
import CardList from "./CardList.vue";
import SearchApp from "../utils/SearchApp.vue";
export default {
  name: "MainApp",
  components: {
    CardList,
    SearchApp
  },
  methods: {
    ...mapActions(useApiStore, ["getData"]),
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ['address'])
  },
  created() {
    this.getData();
  },
};
</script>

<template>
  <div class="container">
    <SearchApp />
    <div v-if="address!==null" class="row g-3">
      <div class="col col-md-4" v-for="apartment in address">
        <CardList :apartment="apartment" />
      </div>
    </div>
    <div v-else class="row g-3">
      <div class="col col-md-4" v-for="apartment in data">
        <CardList :apartment="apartment" />
      </div>
    </div>
  </div>
</template>
<style>
</style>
