<script>
import axios from "axios";
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { useDetailStore } from "../detailStore";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  name: "DetailsPage",
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useDetailStore, ['detailApart']),
    ...mapActions(useDetailStore, ['apartmentMap']),
  },
  computed: {
    ...mapState(useApiStore, ["data"]),
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useDetailStore, ['detail']),
  },
  created() {
    this.getData();
    this.detailApart();
  },
  mounted() {
    this.apartmentMap();
  }

};
</script>

<template>
  <div class="container">
    <!--Intestazione Appartemento-->
    <div class="p-4 row row-cols-2 justify-content-between aling-items-center" v-if="detail">
      <div>
        <h1>{{ detail.title }}</h1>
      </div>
      <div class="d-flex align-items-center gap-5 justify-content-end">
        <p class="mb-0 badge">{{ detail.square_meters }} &#x33A1;</p>
        <button type="button" class="badge" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {{ detail.address }}
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content w-100">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Dove alloggerai</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- <div id="modalMap"></div>  -->
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <ul class="d-flex list-unstyled align-items-center mb-0">
            <li>{{ detail.rooms }} Stanze - {{ detail.bathrooms }} Bagni - {{ detail.beds }} Letti</li>
          </ul>
        </div>
        <div class="d-flex align-items-center">
          <p class="me-5 mb-0 fs-5 ">Il proprietario è <strong>{{ detail.user.name }}</strong></p>
          <div class="card px-1">
            <div class="card-body">
              <p class="card-text"><strong>{{ detail.price }}€</strong>/persona</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Contenuto(Immagini e info)-->

    <!--Servizi-->
    <div class="row p-3">
      <div class="col-12 col-lg-4 border-end">
        <h5 class="pb-5">Servizi inclusi</h5>
        <ul class="list-unstyled d-flex flex-column flex-wrap">
          <li class="d-flex align-items-center" v-for="(service, index) in detail.services"
            :class="[index >= 5 ? 'd-none' : '']">
            <p v-html="service.icon"></p>
            <p class="ms-2">{{ service.name }}</p>
          </li>
        </ul>
        <button class="btn primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample">Mostra tutti</button>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Servizi Inclusi</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              <ul class="list-unstyled">
                <li class="d-flex gap-2 align-items-center" v-for="service in detail.services">
                  <p v-html="service.icon"></p>
                  <p class="ms-2">{{ service.name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      <div class="col-12 col-lg-8 px-md-4 mt-5 mt-lg-0">
        <h5 class="">Dove Alloggerai</h5>
        <div class="badge">{{ detail.address }}</div>
        <div id="map"></div>
      </div>
      <!--/Servizi-->

    </div>
    <!--/Servizi Mobile-->
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/_partial/variables' as *;

.primary {
  background-color: $primary;
  color: white;
}

.badge {
  color: $link;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid lightgray;
  background-color: transparent;
}


#map {
  height: 25rem;
  border-radius: 20px;
  margin: 20px 0;
}
</style>
