<script>
import axios from "axios";
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { useDetailStore } from "../detailStore";
import { useViewStore } from '../viewStore';
import { mapState, mapActions,mapWritableState } from "pinia";

export default {
  name: "DetailsPage",
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useDetailStore, ['detailApart']),
    ...mapActions(useViewStore,['countView']),
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useDetailStore, ['detail']),
  },
  created() {
    this.getData();
    this.detailApart();
    this.countView();
  },

};
</script>

<template>
  <div class="container h-100">
    <!--Intestazione Appartemento-->
    <div class="container container-head pt-4" v-if="detail">
      <h1>{{ detail.title }}</h1>
      <p>{{ detail.square_meters}} &#x33A1;</p>
      <p>{{ detail.address}}</p>
    </div>
    <!--/Intestazione Appartemento-->

    <!--Contenuto(Immagini e info)-->
    <div class="container mb-0">
      <div>
        <img class="rounded-3 img-fluid" :src="detail.cover_image" :alt="detail.title" />
        <!--In caso aggiungere Gallery-->
      </div>
      <div class="d-flex justify-content-between align-items-center my-5">
        <div>
          <ul class="d-flex list-unstyled align-items-center">
            <li>{{ detail.rooms }} Stanze - {{ detail.bathrooms }} Bagni - {{detail.beds  }} Letti</li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <p class="me-5 mb-0 fs-5 ">Il proprietario è <strong>{{ detail.user.name}}</strong></p>
          <div class="card px-1">
            <div class="card-body">
              <p class="card-text"><strong>{{ detail.price}}€</strong>/persona</p>
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
          <li class="d-flex align-items-center" v-for="service in detail.services">
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
      <div class="offcanvas offcanvas-bottom rounded-2 h-50" tabindex="-1" id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Servizi Inclusi </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <ul class="list-unstyled row row-cols-1 row-cols-sm-2">
              <li class="d-flex gap-2 align-items-center" v-for="service in detail.services">
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

// .container{
//   margin-top: 6.25rem;
// }
.primary{
background-color: $primary;
color: white;
}
#desktop-services {
  height: 300px;
}

</style>
