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
    ...mapActions(useDetailStore, ['sendMessage']),
  },
  computed: {
    ...mapState(useSearchStore, ["services"]),
    ...mapWritableState(useDetailStore, ['detail']),
    ...mapWritableState(useDetailStore, ['name']),
    ...mapWritableState(useDetailStore, ['email']),
    ...mapWritableState(useDetailStore, ['content']),
    ...mapState(useDetailStore, ['messageResult']),
    ...mapState(useDetailStore, ['messageSuccess']),
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
      <div class="p-0 d-flex align-items-center">
        <router-link :to="{ name: 'Search' }" class="me-4 fs-3 text-danger">
          <i class="fa-solid fa-chevron-left"></i>
        </router-link>
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
              <div class="fw-bold mb-3" id="risultato">
                {{ messageResult }}
              </div>
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
                          placeholder="Inserisci il tuo nome" autofocus v-model="name">
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label for="email" class="form-label">Email</label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <font-awesome-icon icon="fa-solid fa-envelope" />
                        </span>
                        <input type="email" name="email" id="email" class="form-control form-control-sm"
                          placeholder="Inserisci la tua email" v-model="email">
                      </div>
                    </div>
                    <div class="mb-3 text-start">
                      <label for="message" class="form-label">Messaggio</label>
                      <textarea name="message" id="message" rows="5" class="form-control form-control-sm"
                        v-model="content"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success" @click.prevent="sendMessage()">Invia</button>
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
    <div v-if="detail.galleries.length > 0" id="img-container" class="d-none d-lg-flex pb-5 flex-wrap ">
      <div class="w-50 rounded-start-2">
        <img class="img-fluid h-100" id="immagine" :src="detail.cover_image" :alt="detail.title" />
      </div>
      <div class="d-none d-lg-flex w-50 flex-wrap ps-1 h-100 rounded-end-2">
        <img class="img-fluid w-50 px-1" v-for="(gallery, index) in detail.galleries.slice(0, 4)"
          :class="[(index >= 2 && index <= 3) ? 'pt-1' : '']" :src="gallery.image_path" :alt="detail.title">
      </div>
    </div>
    <div v-else id="img-container" class="pb-5">
      <img class="rounded-3" id="immagine" :src="detail.cover_image" :alt="detail.title" />
    </div>
    <div  class="pb-5 d-lg-none w-100">
      <img class="rounded-3" id="immagine" :src="detail.cover_image" :alt="detail.title" />
    </div>


    <!--/Contenuto(Immagini e info)-->


    <!--Offcanvas Galleria-->
    <div v-if="detail.galleries.length >0" class="d-flex justify-content-end">
      <button class="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#hasbulla"
        aria-controls="offcanvasExample">
        Vedi più immagini
      </button>
    </div>
    <!--Offcanvas Gallery Body-->
    <div class="offcanvas offcanvas-bottom h-100" tabindex="-1" id="hasbulla"
      aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Galleria</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body container-lg">
        <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
          <div v-for="gallery in detail.galleries" class="w-auto">
            <img id="hasbulla-esiste" class="rounded" :src="gallery.image_path" :alt="gallery.title">
          </div>
        </div>
      </div>
    </div>
    <!--/Offcanvas Gallery Body-->

    <!--/Offcanvas Galleria-->

    <!--/Contenuto(Immagini e info)-->

    <!--Servizi-->
    <div class="row my-4">
      <div class="col-12 col-lg-5 border-end">
        <ul class="row list-unstyled align-items-center justify-content-center mt-2">
          <li class="col-auto border-end text-center">{{ detail.rooms }} Stanze </li>
          <li class="col-auto border-end text-center">{{ detail.bathrooms }} Bagni</li>
          <li class="col-auto border-end text-center">{{ detail.beds }} Letti</li>
          <li class="col-auto text-center">{{ detail.square_meters }} &#x33A1;</li>
        </ul>
        <div class="mt-5 px-2">
          <h4 class="fw-bold mb-4">Servizi inclusi</h4>
          <ul class="list-unstyled d-sm-flex flex-column flex-wrap m-0 d-block" id="service">
            <li class="d-flex align-items-center" v-for="(service, index) in detail.services"
              :class="[index > 13 ? 'd-none' : '']">
              <p v-html="service.icon"></p>
              <p class="ms-2">{{ service.name }}</p>
            </li>
          </ul>
          <div v-if="detail.services.length > 13">
            <button class="btn primary mb-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample">Mostra tutti</button>
          </div>
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

      <div class="col-12 col-lg-7 my-2">
        <h4 class="fw-bold">Dove Alloggerai</h4>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start aling-items-md-center">
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

.container {
  margin-bottom: 100px;
  margin-top: 100px;
}

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


@media screen and (min-width: 576px) {
  #service {
    height: 18.75rem;
  }
}
#hasbulla-esiste {
  width: 300px;
  height: 150px;
}

.btn-outline-success:hover{
  background-color: $link;
}

</style>

