<script>
import { useApiStore } from "../../apiStore";
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "./CardList.vue";

export default {
    name: "FilterApp",
    components: {
        CardList,
    },
    methods: {
        ...mapActions(useApiStore, ["getData"]),
        ...mapActions(useSearchStore, ["getServices"]),
        ...mapActions(useSearchStore, ['searchApartment']),
        next() {
            if (this.finish < this.services.length - 1) {
                this.start += 9;
                this.finish += 9;
            }
        },
        prev() {
            if (this.start > 0) {
                this.start -= 9;
                this.finish -= 9;
            }
        }
    },
    computed: {
        ...mapState(useSearchStore, ["services"]),
        ...mapState(useSearchStore, ['apartments']),
        ...mapWritableState(useSearchStore, ["clicked"]),
        ...mapState(useApiStore, ["data"]),
        ...mapWritableState(useSearchStore, ["dist"]),
        ...mapWritableState(useSearchStore, ["start"]),
        ...mapWritableState(useSearchStore, ["finish"]),
        ...mapWritableState(useSearchStore, ["price"]),
        ...mapWritableState(useSearchStore, ["rooms"]),
        ...mapWritableState(useSearchStore, ["beds"]),
        ...mapWritableState(useSearchStore, ["bath"]),
    },
    created() {
        this.getServices();
        this.searchApartment();
    },
}
</script>
<template>
    <!-- Filtri formato mobile -->
    <div class="d-lg-none py-5">
        <!-- Pulsante offcanvas bottom -->
        <button class="btn border border-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#ricerca"
            aria-controls="offcanvasBottom">Filtri</button>

        <!-- Offcanvas bottom -->
        <div class="offcanvas offcanvas-bottom rounded-2" tabindex="-1" id="ricerca" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Applica Filtri di ricerca</h5>
                <a role="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></a>
            </div>

            <!-- Contenuto offcanvas bottom -->
            <div class="offcanvas-body small row row-cols-1 row-cols-md-2">
                <div class="mb-5">

                    <!-- Sezione scelta della distanza -->
                    <div class="pb-3">
                        <div class="fs-5 fw-bold" for="dist">Distanza</div>
                        <div class="row row-cols-3 align-items-center">
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input checked class="form-check-input" type="radio" name="mobileDist" id="mobileDist" :value="20"
                                    @change.stop="searchApartment()" v-model="dist">
                                <label class="form-check-label" for="mobileDist">20km</label>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input class="form-check-input" type="radio" name="mobileDist" id="mobileDist" :value="40"
                                    @change.stop="searchApartment()" v-model="dist">
                                <label class="form-check-label" for="mobileDist">40km</label>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input class="form-check-input" type="radio" name="mobileDist" id="mobileDist" :value="60"
                                    @change.stop="searchApartment()" v-model="dist">
                                <label class="form-check-label" for="mobileDist">60km</label>
                            </div>
                        </div>
                    </div>
                    <!-- fine sezione scelta della distanza -->

                    <!-- Sezione filtri aggiuntivi -->
                    <div class="pb-3">
                        <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                        <input class="form-range" type="range" step="1" name="rooms" id="rooms" v-model="rooms" min="1"
                            max="5" @change.stop="searchApartment()">
                        <p class="text-center">{{ rooms }}</p>
                    </div>
                    <div class="pb-3">
                        <label class="form-label d-block fs-5 fw-bold" for="bath">Bagni</label>
                        <input class="form-range" type="range" step="1" name="bath" id="bath" v-model="bath" min="1" max="5"
                            @change.stop="searchApartment()">
                        <p class="text-center">{{ bath }}</p>
                    </div>
                    <div class="pb-3">
                        <label class="form-label d-block fs-5 fw-bold" for="beds">Letti</label>
                        <input class="form-range" type="range" step="1" name="beds" id="beds" v-model="beds" min="1" max="5"
                            @change.stop="searchApartment()">
                        <p class="text-center">{{ beds }}</p>
                    </div>
                    <div>
                        <label for="price" class="form-label d-block fs-5 fw-bold">Prezzo</label>
                        <input class="form-range text-dark" type="range" step="20" name="price" id="price" v-model="price"
                            min="20" max="1000" @change.stop="searchApartment()">
                        <p class="text-center">{{ price }} €</p>
                    </div>
                    <!-- Fine sezione filtri aggiuntivi -->
                </div>
                <!-- Sezione della scelta dei servizi -->
                <ul class="row row-cols-3 row-cols-sm-4 flex-wrap justifyt-content-between list-unstyled">
                    <li v-for="service in services">
                        <input type="checkbox" class="btn-check" :id="service.name" @change.stop="searchApartment()"
                            :value="service.id" v-model="clicked">
                        <label class="d-flex flex-column text-center aling-items-center justify-content-center"
                            :for="service.name" id="service" :class="[clicked.includes(service.id) ? 'active' : 'null']">
                            <p v-html="service.icon"></p>
                            <p class="hover-green">{{ service.name }}</p>
                        </label>
                    </li>
                </ul>
                <!-- fine sezione della scelta dei servizi -->
            </div>
            <!-- Fine contenuto offcanvas bottom -->
        </div>
        <!-- Fine offcanvas bottom -->

        <!-- Card degli appartamenti -->
        <div class="row row-cols-1 g-3 row-cols-md-3 row-cols-lg-4 my-3">
            <div class="col" v-if="apartments" v-for="apartment in apartments">
                <CardList :apartment="apartment" />
            </div>
            <div class="col alert alert-danger" v-else >
                Nessun Appartamento
            </div>
        </div>
        <!-- Fine card degli appartamenti -->
    </div>
    <!-- Fine filtri formato mobile -->

    <!-- Nav bar per il formato desktop -->
    <nav class="d-none d-lg-flex gap-4 align-items-start">
        <!-- Accordion per il formato desktop -->
        <div class="accordion col-2" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <!-- Pulsante per aprire/chiudere accordion -->
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Filtra
                    </button>
                </h2>
                <!-- Contenuto Accordion -->
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <!-- Sezione per la scelta della distanza -->
                        <div class="pb-3">
                            <div class="fs-5 fw-bold" for="dist">Distanza</div>
                            <div class="row row-cols-3 align-items-center">
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input checked class="form-check-input" type="radio" name="dist" id="dist" :value="20"
                                        @change.stop="searchApartment()" v-model="dist">
                                    <label class="form-check-label" for="dist">20km</label>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input class="form-check-input" type="radio" name="dist" id="dist" :value="40"
                                        @change.stop="searchApartment()" v-model="dist">
                                    <label class="form-check-label" for="dist">40km</label>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input class="form-check-input" type="radio" name="dist" id="dist" :value="60"
                                        @change.stop="searchApartment()" v-model="dist">
                                    <label class="form-check-label" for="dist">60km</label>
                                </div>
                            </div>
                        </div>
                        <!-- Fine sezione distanza -->

                        <!-- Filtri aggiuntivi -->
                        <div class="pb-3">
                            <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                            <input class="form-range" type="range" step="1" name="rooms" id="rooms" v-model="rooms" min="1"
                                max="5" @input.stop="searchApartment()">
                            <p class="text-center">{{ rooms }}</p>
                        </div>
                        <div class="pb-3">
                            <label class="form-label d-block fs-5 fw-bold" for="bath">Bagni</label>
                            <input class="form-range" type="range" step="1" name="bath" id="bath" v-model="bath" min="1"
                                max="5" @input.stop="searchApartment()">
                            <p class="text-center">{{ bath }}</p>
                        </div>
                        <div class="pb-3">
                            <label class="form-label d-block fs-5 fw-bold" for="beds">Letti</label>
                            <input class="form-range" type="range" step="1" name="beds" id="beds" v-model="beds" min="1"
                                max="5" @input.stop="searchApartment()">
                            <p class="text-center">{{ beds }}</p>
                        </div>
                        <div>
                            <label for="price" class="form-label d-block fs-5 fw-bold">Prezzo</label>
                            <input class="form-range text-dark" type="range" step="20" name="price" id="price"
                                v-model="price" min="20" max="1000" @input.stop="searchApartment()">
                            <p class="text-center">{{ price }} €</p>
                        </div>
                        <!-- Fine filtri aggiuntivi -->
                    </div>
                </div>
                <!-- Fine contenuto accordion -->
            </div>
        </div>
        <!-- Fine accordion formato desktop -->

        <!-- Nav bar per la selezion dei servizi -->
        <div>
            <ul class="list-unstyled d-flex justify-content-between align-items-center me-0 mb-0 col-auto" v-if="services">

                <!-- Pulsante indietro -->
                <li role="button" class="me-3" :class="[start <= 0 ? 'd-none' : '']" @click="prev()"><i
                        class="fa-solid fa-chevron-left"></i></li>

                <li v-for="(service, index) in services.slice(this.start, this.finish)" class="mx-3">
                    <input type="checkbox" class="btn-check" :id="service.name" @change.stop="searchApartment()"
                        :value="service.id" v-model="clicked">
                    <label class="d-flex flex-column justify-content-center align-items-center" :for="service.name"
                        id="service" :class="[clicked.includes(service.id) ? 'active' : 'null']">
                        <p v-html="service.icon"></p>
                        <p class="hover-green">{{ service.name }}</p>
                    </label>
                </li>

                <!-- Pulsante avanti  -->
                <li role="button" class="ms-3" :class="[finish >= services.length - 1 ? 'd-none' : '']" @click="next()"><i
                        class="fa-solid fa-chevron-right"></i></li>
            </ul>
            <div class="row row-cols-1 g-3 row-cols-md-3 row-cols-lg-4 my-3">
                <div class="col" v-if="apartments" v-for="apartment in apartments">
                    <CardList :apartment="apartment" />
                </div>
                <div class="col alert alert-danger" v-else>
                   Nessun Appartamento
                </div>
            </div>

        </div>
        <!-- Fine nav per la selezione dei servizi -->


    </nav>
    <!-- Fine nav bar per il formato desktop -->
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;

nav {
    padding-top: 3.125rem;
}

.hover-green {
    font-size: 13px;
}

#service:hover {
    color: $link;
    cursor: pointer;
}

.active {
    color: $link;
}

.offcanvas-bottom {
    height: 60% !important;
}
</style>