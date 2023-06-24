<script>
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "../components/main/CardList.vue";
import SearchApp from "../components/utils/SearchApp.vue";

export default {
  name: "SearchPage",
  components: {
    CardList,
    SearchApp,
  },
  data() {
    return {
      start: 0,
      finish: 9

    }
  },
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useSearchStore, ["getServices"]),
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore, ["filteredServices"]),
    next() {
      if (this.finish >= this.services.length - 1) {
        this.start = 0;
        this.finish = 9;
      } else {
        this.start += 9;
        this.finish += 9;
      }

    },
    prev() {
      if (this.start <= 0) {
        this.finish = this.services.length - 1;
        this.start = this.services.length - 9;
      } else {
        this.start -= 9;
        this.finish -= 9;
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
  <main>
    <div class="container">

      <SearchApp></SearchApp>

      <nav>
        <ul class="list-unstyled d-flex justify-content-between align-items-center mb-0">

          <!-- Pulsante indietro -->
          <li role="button" class="me-3" @click="prev()"><i class="fa-solid fa-chevron-left"></i></li>

          <li v-for="(service, index) in services.slice(this.start, this.finish)" class="mx-3">
            <input type="checkbox" class="btn-check" :id="service.name" @change.stop="searchApartment()"
              :value="service.id" v-model="clicked">
            <label class="d-flex flex-column justify-content-center align-items-center" :for="service.name" id="service"
              :class="[clicked.includes(service.id) ? 'active' : 'null']">
              <p v-html="service.icon"></p>
              <p class="hover-green">{{ service.name }}</p>
            </label>
          </li>

          <!-- Pulsante avanti  -->
          <li role="button" class="ms-3" @click="next()"><i class="fa-solid fa-chevron-right"></i></li>
        </ul>
      </nav>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

main{
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
</style>
