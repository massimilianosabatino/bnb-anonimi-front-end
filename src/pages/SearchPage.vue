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
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useSearchStore, ["getServices"]),
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore, ["filteredServices"]),
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ["apartments"]),

  },
  created() {
    this.getData();
    this.getServices();
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
  margin-top: 100px;
  height: calc(100vh - 150px);
}

nav {
  padding-top: 3.125rem;
}

.hover-green {
  font-size: 13px;
}

#service:hover {
  color: $link;
  cursor: pointer;
  text-decoration: 2px underline $link;
}

.active {
  color: $link;
  text-decoration: 2px underline $link;
}

.offcanvas-bottom {
  height: 60% !important;
}
</style>
