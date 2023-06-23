<script>
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { mapState, mapActions } from "pinia";

export default {
  name: "DetailsPage",
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useSearchStore, ["getServices"]),
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ["services"]),
  },
  created() {
    this.getData();
    this.getServices();
  },

};
</script>

<template>
  <div class="container">
    <!--Intestazione Appartemento-->
    <div class="container container-head">
      <h1>Title</h1>
      <p>Info appartment</p>
      <p>Address</p>
    </div>
    <!--/Intestazione Appartemento-->

    <!--Contenuto(Immagini e info)-->
    <div class="container mb-0">
      <div>
        <img class="rounded-3" src="https://picsum.photos/seed/picsum/500/300" alt="apartment title" />
        <!--In caso aggiungere Gallery-->
      </div>
      <div class="d-flex justify-content-between align-items-center my-5">
        <div>
          <ul class="d-flex list-unstyled align-items-center">
            <li>Stanze-Bagni-Metri-ecc</li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <p class="me-5">Proprietario</p>
          <div class="card px-1">
            <div class="card-body">
              <p class="card-text"><strong>Prezzo</strong> a notte</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Contenuto(Immagini e info)-->

    <!--Servizi-->
    <div class="container d-none d-lg-block">
      <h5>Servizi inclusi</h5>
      <div id="desktop-services" class="row p-3">
        <ul class="list-unstyled col d-flex flex-column flex-wrap h-100">
          <li class="d-flex align-items-center" v-for="service in services">
            <p v-html="service.icon"></p>
            <p class="ms-2">{{ service.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <!--/Servizi-->
    <!--Servizi Mobile-->
    <div class="container d-lg-none mb-4">
      <button class="btn primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample">Servizi Inclusi</button>
      <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Servizi Inclusi </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul class="list-unstyled">
              <li class="d-flex gap-2 align-items-center" v-for="service in services">
                <p v-html="service.icon"></p>
                <p class="ms-2">{{ service.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--/Servizi Mobile-->
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/_partial/variables' as *;

.primary{
background-color: $primary;
color: white;
}
#desktop-services {
  height: 300px;
}


</style>
