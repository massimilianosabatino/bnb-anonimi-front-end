<script>
import { useApiStore } from "../../apiStore";
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";
import CardList from "./CardList.vue";
import SearchApp from "./SearchApp.vue";

export default {
    name: "FilterApp",
    components: {
        CardList,
        SearchApp
    },
    methods: {
        ...mapActions(useApiStore, ["getData"]),
        ...mapActions(useSearchStore, ["getServices"]),
        ...mapActions(useSearchStore, ['searchApartment']),
        ...mapActions(useSearchStore, ['toggle']),
        ...mapActions(useSearchStore, ['reset']),
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
        ...mapState(useSearchStore, ['response']),
        ...mapWritableState(useSearchStore, ['active']),
    },
    created() {
        this.getServices();
        this.searchApartment();
    },
}
</script>
<template>
    <nav class="row flex-column flex-lg-row justify-content-center align-items-center w-100 flex-nowrap mb-4">
        <!-- Accordion per i filtri -->
        <div class="accordion col-2 d-none d-lg-block" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <!-- Pulsante per aprire/chiudere accordion -->
                    <button class="accordion-button collapsed text-center p-2" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Filtra
                    </button>
                </h2>
                <!-- Contenuto Accordion -->
                <div id="collapseOne" class="accordion-collapse collapse z-3 position-absolute"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-body border-link rounded my-3 p-4">
                        <form class="d-flex flex-column">
                            <!-- Sezione per la scelta della distanza -->
                            <div class="pb-3">
                                <div class="fs-5 fw-bold" for="dist">Distanza</div>
                                <div class="row row-cols-3 align-items-center">
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input checked class="form-check-input" type="radio" name="dist" id="dist"
                                            :value="20" v-model="dist">
                                        <label class="form-check-label" for="dist">20km</label>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input class="form-check-input" type="radio" name="dist" id="dist" :value="40"
                                            v-model="dist">
                                        <label class="form-check-label" for="dist">40km</label>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input class="form-check-input" type="radio" name="dist" id="dist" :value="60"
                                            v-model="dist">
                                        <label class="form-check-label" for="dist">60km</label>
                                    </div>
                                </div>
                            </div>
                            <!-- Fine sezione distanza -->

                            <!-- Filtri aggiuntivi -->
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                                <input class="form-range" type="range" step="1" name="rooms" id="rooms" v-model="rooms"
                                    min="1" max="5">
                                <p class="text-center">{{ rooms }}</p>
                            </div>
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="bath">Bagni</label>
                                <input class="form-range" type="range" step="1" name="bath" id="bath" v-model="bath" min="1"
                                    max="5">
                                <p class="text-center">{{ bath }}</p>
                            </div>
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="beds">Letti</label>
                                <input class="form-range" type="range" step="1" name="beds" id="beds" v-model="beds" min="1"
                                    max="5">
                                <p class="text-center">{{ beds }}</p>
                            </div>
                            <div>
                                <label for="price" class="form-label d-block fs-5 fw-bold">Prezzo</label>
                                <input class="form-range text-dark" type="range" step="20" name="price" id="price"
                                    v-model="price" min="20" max="1000">
                                <p class="text-center">{{ price }} €</p>
                            </div>
                            <!-- Fine filtri aggiuntivi -->
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <div class="btn pippo" @click.prevent="searchApartment(), toggle()">
                                    Applica
                                </div>
                                <div class="btn btn-danger" @click.prevent="reset()">
                                    Reset
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Barra di ricerca -->
        <div class="col-12 col-lg-10 mb-3 mb-lg-0">
            <SearchApp></SearchApp>
        </div>
        <!-- Offcanvas servizi filtri mobile -->
        <div class="d-lg-none">
            <button class="btn border border-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#ricerca"
                aria-controls="offcanvasBottom">Filtri</button>

            <!-- Offcanvas bottom -->
            <div class="offcanvas offcanvas-bottom rounded-2" tabindex="-1" id="ricerca"
                aria-labelledby="offcanvasBottomLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Applica Filtri di ricerca</h5>
                    <a role="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></a>
                </div>

                <!-- Contenuto offcanvas bottom -->
                <div class="offcanvas-body small row row-cols-1 row-cols-md-2">
                    <form>
                        <div class="mb-5">
                            <!-- Sezione scelta della distanza -->
                            <div class="pb-3">
                                <div class="fs-5 fw-bold" for="dist">Distanza</div>
                                <div class="row row-cols-3 align-items-center">
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input checked class="form-check-input" type="radio" name="mobileDist"
                                            id="mobileDist" :value="20" v-model="dist">
                                        <label class="form-check-label" for="mobileDist">20km</label>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input class="form-check-input" type="radio" name="mobileDist" id="mobileDist"
                                            :value="40" v-model="dist">
                                        <label class="form-check-label" for="mobileDist">40km</label>
                                    </div>
                                    <div class="d-flex flex-column justify-content-center align-items-center">
                                        <input class="form-check-input" type="radio" name="mobileDist" id="mobileDist"
                                            :value="60" v-model="dist">
                                        <label class="form-check-label" for="mobileDist">60km</label>
                                    </div>
                                </div>
                            </div>


                            <!-- fine sezione scelta della distanza -->

                            <!-- Sezione filtri aggiuntivi -->
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                                <input class="form-range" type="range" step="1" name="rooms" id="rooms" v-model="rooms"
                                    min="1" max="5">
                                <p class="text-center">{{ rooms }}</p>
                            </div>
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="bath">Bagni</label>
                                <input class="form-range" type="range" step="1" name="bath" id="bath" v-model="bath" min="1"
                                    max="5">
                                <p class="text-center">{{ bath }}</p>
                            </div>
                            <div class="pb-3">
                                <label class="form-label d-block fs-5 fw-bold" for="beds">Letti</label>
                                <input class="form-range" type="range" step="1" name="beds" id="beds" v-model="beds" min="1"
                                    max="5">
                                <p class="text-center">{{ beds }}</p>
                            </div>
                            <div>
                                <label for="price" class="form-label d-block fs-5 fw-bold">Prezzo</label>
                                <input class="form-range text-dark" type="range" step="20" name="price" id="price"
                                    v-model="price" min="20" max="1000">
                                <p class="text-center">{{ price }} €</p>
                            </div>
                            <div class="btn pippo align-self-center" @click.prevent="searchApartment(), toggle()">
                                Applica
                            </div>
                        </div>
                    </form>
                    <!-- Fine sezione filtri aggiuntivi -->
                    <!-- Sezione della scelta dei servizi -->
                    <ul class="row row-cols-3 row-cols-sm-4 flex-wrap justifyt-content-between list-unstyled">
                        <li v-for="service in services">
                            <input type="checkbox" class="btn-check" :id="service.name" @change.stop="searchApartment()"
                                :value="service.id" v-model="clicked">
                            <label class="d-flex flex-column text-center aling-items-center justify-content-center"
                                :for="service.name" id="service"
                                :class="[clicked.includes(service.id) ? 'active' : 'null']">
                                <p v-html="service.icon"></p>
                                <p class="hover-green">{{ service.name }}</p>
                            </label>
                        </li>
                    </ul>
                    <!-- fine sezione della scelta dei servizi -->

                </div>
                <!-- Fine contenuto offcanvas bottom -->
            </div>
        </div>
        <!-- Fine offcanvas bottom -->
    </nav>
    <div class="row justify-content-center w-100 d-none d-lg-flex">
        <ul class="list-unstyled d-flex justify-content-between align-items-center me-0 mb-0 col-auto" v-if="services">

            <!-- Pulsante indietro -->
            <li role="button" class="me-3" :class="[start <= 0 ? 'd-none' : '']" @click="prev()"><i
                    class="fa-solid fa-chevron-left"></i></li>

            <li v-for="(service, index) in services.slice(this.start, this.finish)" class="mx-3 my-3">
                <input type="checkbox" class="btn-check" :id="service.name" @change.stop="searchApartment()"
                    :value="service.id" v-model="clicked">
                <label class="d-flex flex-column justify-content-center align-items-center" :for="service.name" id="service"
                    :class="[clicked.includes(service.id) ? 'active' : 'null']">
                    <p class="fs-5" v-html="service.icon"></p>
                    <p class="hover-green fs-6">{{ service.name }}</p>
                </label>
            </li>

            <!-- Pulsante avanti  -->
            <li role="button" class="ms-3" :class="[finish >= services.length - 1 ? 'd-none' : '']" @click="next()">
                <i class="fa-solid fa-chevron-right"></i>
            </li>
        </ul>
    </div>
    <div class="px-2 px-lg-0">
        <ul class="list-unstyled d-lg-flex align-items-center ms-2 justify-content-center my-3 d-none" v-if="active">
            <li class="fw-bold">Filtri di ricerca:</li>
            <li class="px-3 border-end">Distanza: {{ dist }} km</li>
            <li class="px-3 border-end">Min Stanze: {{ rooms }}</li>
            <li class="px-3 border-end">Min Bagni: {{ bath }}</li>
            <li class="px-3 border-end">Min Letti: {{ beds }}</li>
            <li class="px-3">Prezzo max: {{ price }}€</li>
        </ul>
        <ul class="list-unstyled d-lg-none" v-if="active">
            <li class="fw-bold">Filtri di ricerca:</li>
            <li class="py-3 border-bottom">Distanza: {{ dist }} km</li>
            <li class="py-3 border-bottom">Min Stanze: {{ rooms }}</li>
            <li class="py-3 border-bottom">Min Bagni: {{ bath }}</li>
            <li class="py-3 border-bottom">Min Letti: {{ beds }}</li>
            <li class="py-3">Prezzo max: {{ price }}€</li>
        </ul>
    </div>

    <div class="row row-cols-1 g-3 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mb-3" id="apart">
        <div class="col" v-if="apartments" v-for="apartment in apartments">
            <CardList :apartment="apartment" />
        </div>

    </div>

    <template v-if="!apartments && response">
        <div class="alert text-center h-100">
            Nessun appartamento trovato nella ricerca
        </div>
    </template>
    <!--- Loading--->
    <div v-else-if="!apartments" class="d-flex justify-content-center align-items-center franco">
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <!--- Loading--->
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as *;
@use '../../assets/scss/_partial/loading' as *;

nav {
    padding-top: 3.125rem;
}

#apart {
    padding-bottom: 70px;
}

.hover-green {
    font-size: 13px;
}

#service:hover {
    color: $link;
    cursor: pointer;
}

.pippo {
    border: 1px solid $link;
}

.pippo:hover {
    background-color: $link;
    color: black;
    cursor: pointer;
}

.active {
    color: $link;
}

.offcanvas-bottom {
    height: 60% !important;
}

.border-link {
    border: 1px solid $link;
}

.franco {
    height: calc(90vh - 150px);
}
</style>