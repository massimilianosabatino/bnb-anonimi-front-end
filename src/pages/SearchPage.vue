<script>
import CardList from "../components/utils/CardList.vue";
import SearchApp from "../components/utils/SearchApp.vue";
import FilterApp from "../components/utils/FilterApp.vue";
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";

import { mapState, mapActions, mapWritableState } from "pinia";


export default {
  name: "SearchPage",
  components: {
    CardList,
    SearchApp,
    FilterApp
  },
  methods:{
    ...mapActions(useApiStore, ["getData"]),

  },
  computed:{
    ...mapState(useApiStore, ["data"]),
  },
  created(){
    this.getData()
  }
};
</script>

<template>
  <main>
    <div class="container">
      <SearchApp/>
      <FilterApp/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

main {
  margin-top: 9.375rem;
}
</style>
