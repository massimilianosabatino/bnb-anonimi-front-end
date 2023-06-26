<script>
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "../components/main/CardList.vue";
import SearchApp from "../components/utils/SearchApp.vue";
import FilterApp from "../components/utils/FilterApp.vue";

export default {
  name: "SearchPage",
  components: {
    CardList,
    SearchApp,
    FilterApp
  },
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
  margin-top: 100px;
  height: calc(100vh - 150px);
}
</style>
