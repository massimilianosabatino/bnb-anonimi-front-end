<script>
import { useApiStore } from "../../apiStore";
import { useSearchStore } from "../../searchStore";
import { mapState, mapActions, mapWritableState } from "pinia";

export default {
    name: "FilterApp",
    data() {
        return {
            start: 0,
            finish: 9,
            price: 20,
            rooms: 1,
            beds: 1,
            bath: 1
        }
    },
    methods: {
        ...mapState(useApiStore, ["data"]),
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
        ...mapWritableState(useSearchStore, ["clicked"]),
    },
    created(){
        this.getServices();
    }
}
</script>
<template>
    <div class="d-lg-none py-5">
        <button class="btn border border-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom">Filtri</button>

        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Applica Filtri di ricerca</h5>
                <a role="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa-solid fa-xmark"></i></a>
            </div>
            <div class="offcanvas-body small row row-cols-1 row-cols-md-2">
                <div class="mb-5">
                    <div class="pb-3">
                        <div class="fs-5 fw-bold" for="dist">Distanza</div>
                        <div class="row row-cols-3 align-items-center">
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input class="form-check-input" type="radio" name="dist" id="dist" value="20">
                                <label class="form-check-label" for="dist">20km</label>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input class="form-check-input" type="radio" name="dist" id="dist" value="40">
                                <label class="form-check-label" for="dist">40km</label>
                            </div>
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <input class="form-check-input" type="radio" name="dist" id="dist" value="60">
                                <label class="form-check-label" for="dist">60km</label>
                            </div>
                        </div>
                    </div>
                    <div class="pb-3">
                        <label for="price" class="form-label d-block fs-5 fw-bold">Prezzo</label>
                        <input class="form-control" type="number" name="price" id="price" v-model="price">
                    </div>
                    <div class="pb-3">
                        <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                        <input class="form-control" type="number" name="rooms" id="rooms" v-model="rooms">
                    </div>
                    <div>
                        <label class="form-label d-block fs-5 fw-bold" for="beds">Letti</label>
                        <input class="form-control" type="number" name="beds" id="beds" v-model="beds">
                    </div>
                </div>
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
            </div>
        </div>
    </div>

    <!-- Nav bar per il formato desktop -->
    <nav class="d-none d-lg-flex row align-items-start">
        <div class="accordion col-2" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        Filtra
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="pb-3">
                            <div class="fs-5 fw-bold" for="dist">Distanza</div>
                            <div class="row row-cols-3 align-items-center">
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input checked class="form-check-input" type="radio" name="dist" id="dist" value="20">
                                    <label class="form-check-label" for="dist">20km</label>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input class="form-check-input" type="radio" name="dist" id="dist" value="40">
                                    <label class="form-check-label" for="dist">40km</label>
                                </div>
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <input class="form-check-input" type="radio" name="dist" id="dist" value="60">
                                    <label class="form-check-label" for="dist">60km</label>
                                </div>
                            </div>
                        </div>
                        <div class="pb-3">
                            <label class="form-label d-block fs-5 fw-bold" for="rooms">Stanze</label>
                            <input class="form-range" type="range" step="1" name="rooms" id="rooms" v-model="rooms" min="1"
                                max="5">
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
                    </div>
                </div>
            </div>
        </div>
        <ul class="list-unstyled d-flex justify-content-between align-items-center me-0 mb-0 col-auto" v-if="services">

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
</template>
<style lang="scss" scoped>
@use '../../assets/scss/_partial/variables' as * ;

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

.offcanvas-bottom {
    height: 60% !important;
}
</style>