<script>
import axios from "axios";
import { useApiStore } from "../apiStore";
import { useSearchStore } from "../searchStore";
import { useDetailStore } from "../detailStore";
import { useViewStore } from '../viewStore';
import { mapState, mapActions, mapWritableState } from "pinia";


export default {
  name: "DetailsPage",
  methods: {
    ...mapActions(useApiStore, ["getData"]),
    ...mapActions(useDetailStore, ['detailApart']),
    ...mapActions(useViewStore, ['countView']),
  },
  computed: {
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useDetailStore, ['detail']),
  },
  created() {
    this.detailApart();
    this.countView();
  },

};
</script>

<template>
  <div class="container">
    <!--Intestazione Appartemento-->
    <div
      class="p-3 p-lg-4 row row-cols-1 row-cols-lg-2 justify-content-center justify-content-lg-between align-items-center"
      v-if="detail">
      <div class="p-0">
        <h1>{{ detail.title }}</h1>
      </div>
      <div>
        <div id="message">
          <div class="d-flex justify-content-end align-items-center gap-3">
            <div class="bg-text-tertiary fs-5">Host: <strong>{{ detail.user.name }}</strong></div>
            <a class="btn btn-outline-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"><i class="fa-solid fa-envelope me-2"></i>Contattalo</a>
          </div>

          <div class="offcanvas offcanvas-end rounded-2" tabindex="-1" id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h3 class="offcanvas-title">Contatta il proprietario</h3>
              <a type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></a>
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
    <div id="img-container" class=" pb-5">
      <img class="rounded-3" id="immagine" :src="detail.cover_image" :alt="detail.title" />
      <!--In caso aggiungere Gallery-->
    </div>

    <!--/Contenuto(Immagini e info)-->

    <!--Servizi-->
    <div class="row my-4">
      <div class="col-12 col-lg-4 border-end">
        <ul class="row list-unstyled align-items-center justify-content-center mt-2">
          <li class="col-auto border-end text-center">{{ detail.rooms }} Stanze </li>
          <li class="col-auto border-end text-center">{{ detail.bathrooms }} Bagni</li>
          <li class="col-auto border-end text-center">{{ detail.beds }} Letti</li>
          <li class="col-auto text-center">{{ detail.square_meters }} &#x33A1;</li>
        </ul>
        <div class="mt-5 px-2">
          <h4 class="fw-bold mb-4">Servizi inclusi</h4>
          <ul class="list-unstyled">
            <li class="d-flex align-items-center" v-for="(service, index) in detail.services"
              :class="[index >= 5 ? 'd-none' : '']">
              <p v-html="service.icon"></p>
              <p class="ms-2">{{ service.name }}</p>
            </li>
            <li>
              <button class="btn primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample">Mostra tutti</button>
            </li>
          </ul>

          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Servizi Inclusi</h5>
              <a type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></a>
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

      </div>

      <div class="col-12 col-lg-8 my-2">
        <h4 class="fw-bold">Dove Alloggerai</h4>
        <div class="d-flex justify-content-between align-items-center">
          <div class="badge fs-5">{{ detail.address }}</div>
          <div class="text-end fs-5"> <span class="fw-bold">{{ detail.price }}€</span> notte</div>
        </div>

        <div id="map"></div>
      </div>
      <!--/Servizi-->

    </div>
  </div>
  <!--/Servizi Mobile-->
</template>

<style scoped lang="scss">
@use '../assets/scss/_partial/variables' as *;

.primary {
  background-color: $primary;
  color: white;
}

.badge {
  color: $link;
  padding: 0;
  background-color: transparent;
}


#map {
  height: 25rem;
  border-radius: 20px;
  margin: 20px 0;
}

.fa-xmark {
  color: red;
}

#img-container {
  width: 100%;
}

#immagine {
  width: 100%;
}
</style>
