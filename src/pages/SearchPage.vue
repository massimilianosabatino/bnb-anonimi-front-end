<script>
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "../components/main/CardList.vue";

export default {
  name: "SearchPage",
  components: {
    CardList,
  },
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useSearchStore, ["getServices"]),
    ...mapActions(useSearchStore, ["searchApartment"]),
    ...mapActions(useSearchStore, ["filteredServices"])
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
  mounted(){
    // this.filteredServices();
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-2">
        <ul class="list-unstyled">
          <li v-for="service in services">
            <input
              type="checkbox"
              class="btn-check"
              :id="service.id"
              autocomplete="off"
              :value="service.id"
              :name="service.name"
              @change.stop="searchApartment()"
              v-model="clicked"
            />
            <label
              class="btn btn-outline-dark d-flex p-1 m-0 justify-content-center align-items-center rounded-2 flex-column"
              :for="service.id"
              >{{ service.name }}</label
            ><br />
          </li>
        </ul>
      </div>
      <div class="col-10">
        <!-- <div v-if="apartments !== null" class="row g-3">
          <div class="col col-md-4" v-for="apartment in apartments">
            <div v-if="apartment.services" class="prova">
              <ul>
                <li v-for="service in apartment.services">
                  <CardList v-if="service.id==clicked " :apartment="apartment" />
                </li>
              </ul>
            </div>
          </div>
        </div> -->

        <div v-if="apartments !== null" class="row g-3">
          <div class="col col-md-4" v-for="apartment in apartments">
            <CardList :apartment="apartment" />
          </div>
        </div>
        <div v-else class="alert alert-danger">
          Nessun appartamento
        </div>
        <!-- <div v-else class="row g-3">
          <div class="col col-md-4" v-for="apartment in data">
            <CardList :apartment="apartment" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
main {
  margin-top: 100px;
}
</style>
