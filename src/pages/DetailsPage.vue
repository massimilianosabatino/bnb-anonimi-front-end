<script>
import axios from "axios";
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { useDetailStore } from "../detailStore";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
  name: "DetailsPage",
  methods: {
    ...mapActions(useDetailStore, ['detailApart']),
    ...mapActions(useDetailStore, ['apartmentMap']),
  },
  computed: {
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useDetailStore, ['detail']),
  },
  created() {
    this.detailApart();
  },

};
</script>

<template>
  <div class="container">
    <!--Intestazione Appartemento-->
    <div class="p-3 p-lg-4 row row-cols-1 row-cols-lg-2 justify-content-center" v-if="detail">
      <div class="p-0">
        <h1>{{ detail.title }}</h1>
      </div>
      <div class="row align-items-center p-0">
        <p class="mb-0 badge col-12 col-lg-2 me-2 mb-3 mb-lg-0 ">{{ detail.square_meters }} &#x33A1;</p>
        <button type="button" class="badge col-12 col-lg-7 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {{ detail.address.substring(0,25) }}
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
        <div class="fs-3 col-12 col-lg-2 text-end order-first order-lg-last mb-3 mb-lg-0" id="message">
          <a type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i
              class="fa-solid fa-envelope"></i></a>

          <div class="offcanvas offcanvas-end rounded-2" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h3 class="offcanvas-title">Contatta il proprietario</h3>
              <a type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="fa-solid fa-xmark"></i></a>
            </div>
            <div class="offcanvas-body">
              <div class="row">
                <div class="col-12">
                  <form action="" method="post">
                    <div class="mb-3 text-start">
                      <label for="name" class="form-label">Nome</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <font-awesome-icon icon="fa-solid fa-user" />
                        </span>
                        <input type="text" name="name" id="name" class="form-control form-control-sm"
                          placeholder="Inserisci il tuo nome" autofocus>
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label for="email" class="form-label">Email</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <font-awesome-icon icon="fa-solid fa-envelope" />
                        </span>
                        <input type="email" name="email" id="email" class="form-control form-control-sm"
                          placeholder="Inserisci la tua email">
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label for="message" class="form-label">Messaggio</label>
                      <textarea name="message" id="message" rows="5" class="form-control form-control-sm"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Invia</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
    <!--/Intestazione Appartemento-->

    <!--Contenuto(Immagini e info)-->
    <div class="">
      <div>
        <img class="rounded-3 img-fluid" :src="detail.cover_image" :alt="detail.title" />
        <!--In caso aggiungere Gallery-->
      </div>
      <div class="row row-cols-1 row-cols-md-2 justify-content-center align-items-center mt-5 mb-3 px-2">
        <div>
          <ul class="row row-cols-1 row-cols-md-2 list-unstyled align-items-center mb-0 text-center">
            <li>{{ detail.rooms }} Stanze - {{ detail.bathrooms }} Bagni - {{ detail.beds }} Letti</li>
          </ul>
        </div>
        <div class="row row-cols-1 row-cols-md-2 align-items-center my-3 my-md-0">
          <p class="mb-0 fs-5 text-md-end">Il proprietario è <strong>{{ detail.user.name }}</strong></p>
          <div class="card px-1">
            <div class="card-body">
              <p class="card-text text-center"><strong>{{ detail.price }}€</strong>/persona</p>
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
            <a type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="fa-solid fa-xmark"></i></a>
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
        <div class="badge">{{ detail.address.substring(0,25) }}</div>
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

.fa-xmark{
  color: red;
}

</style>
