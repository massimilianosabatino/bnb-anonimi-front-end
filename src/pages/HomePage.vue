<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import SearchApp from '../components/utils/SearchApp.vue';
import 'vue3-carousel/dist/carousel.css';

import { useApiStore } from '../apiStore';
import { mapState, mapActions, mapWritableState } from 'pinia';
import { useSearchStore } from '../searchStore';

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Navigation,
        SearchApp,
    },
    methods: {
        ...mapActions(useApiStore, ['getSponsor']),
    },
    computed: {
        ...mapWritableState(useSearchStore,['address']),
        ...mapState(useApiStore, ['sponsor']),
    },
    created() {
        this.address = '';
        this.getSponsor();
    }
})
</script>
<template>
    <main id="home">
        <div class="container">
            <div class="pt-5 pb-3 text-center fw-bold fs-2 testo ">Cerca la tua prossima destinazione</div>
            <SearchApp></SearchApp>
            
            <div id="carousel-desktop" class="d-none d-lg-block">
                <div class="fs-3 text-center fw-bold testo py-3">Appartamenti in evidenza</div>
                <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="5000">
                    <Slide v-for="slide in sponsor" :key="slide">
                        <router-link :to="{ name: 'Details', params: { slug: slide.slug, id: slide.id } }"
                            class="text-decoration-none">
                            <div class="carousel__item card">
                                <img class="card-img-top img-fluid" :src="slide.cover_image" :alt="slide.title">
                                <div class="py-2 border-bottom mx-3" id="title">{{ slide.title }}</div>
                                <div class="p-2" id="address">{{ slide.address }}</div>
                            </div>
                        </router-link>

                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
            <div id="carousel-mobile mb-5" class="d-lg-none">
                <div class="fs-3 text-center fw-bold testo py-3">Appartamenti in evidenza</div>
                <Carousel :wrapAround="true" :autoplay="5000">
                    <Slide v-for="slide in sponsor" :key="slide">
                        <router-link :to="{ name: 'Details', params: { slug: slide.slug, id: slide.id } }"
                            class="text-decoration-none">
                            <div class="carousel__item card">
                                <img class="card-img-top img-fluid" :src="slide.cover_image" :alt="slide.title">
                                <div class="py-2 border-bottom mx-3" id="title">{{ slide.title }}</div>
                                <div class="py-2" id="address">{{ slide.address }}</div>
                            </div>
                        </router-link>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>


        </div>
    </main>
</template>
<style lang="scss" scoped>
router-link:hover {
    scale: 1.1;
}

.container {
    margin-top: 100px;
}
.testo{
    text-shadow: 2px 2px lightgray;
}
#address {
    font-size: 1rem;
}

#title {
    font-size: 1.125rem;
}

#carousel-desktop {
    width: 100%;
    margin-top: 6.25rem;
}

#carousel-mobile {
    width: 100%;
    margin-top: 4.6875rem;
}


.carousel__item {
    min-height: 18.75rem;
    width: 100%;
    color: black;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    img {
        max-height: 200px;
    }
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0);
}</style>
  