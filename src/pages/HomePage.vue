<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import SearchApp from '../components/utils/SearchApp.vue';
import 'vue3-carousel/dist/carousel.css';

import { useApiStore } from '../apiStore';
import { mapState,mapActions } from 'pinia';

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Navigation,
        SearchApp,
    },
    methods:{
        ...mapActions(useApiStore, ['getData']),
    },
    computed: {
    ...mapState(useApiStore, ["data"]),
    },
    created(){
        this.getData();
    }
})
</script>
<template>
    <main id="home">
        <div class="container">
            <SearchApp></SearchApp>
            <div id="carousel-desktop" class="d-none d-lg-block">
                <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" :autoplay="5000">
                    <Slide v-for="slide in data" :key="slide">
                        <div class="carousel__item">
                            <img class="img-fluid" :src="slide.cover_image" :alt="slide.title">
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
            <div id="carousel-mobile" class="d-lg-none">
                <Carousel :wrapAround="true" :autoplay="5000">
                    <Slide v-for="slide in data" :key="slide">
                        <div class="carousel__item">
                            <img class="img-fluid" :src="slide.cover_image" :alt="slide.title">
                        </div>
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
// #home {
//     width: 100%;
//     margin-top: 100px;
//     height: calc(100dvh - 9.375rem);
// }
.container {
    margin-top: 6.25rem;
    height: calc(100dvh - 9.375rem);
}

#carousel-desktop {
    margin-top: 9.375rem;
    width: 100%;
}
#carousel-mobile{
    width: 100%;
    margin-top: 4.6875rem;
}


.carousel__item {
    min-height: 18.75rem;
    width: 100%;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
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
}
</style>
  