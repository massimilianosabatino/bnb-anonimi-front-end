<script>
export default {
  name: "CardList",
  props: {
    apartment: Object,
  },
};
</script>
<template>
  <router-link :to="{ name: 'Details', params: { slug: apartment.slug, id: apartment.id } }" id="zoom"
    class="card p-0 my-2 h-100 ">
    <img class="card-img-top" v-if="apartment.cover_image" :src="apartment.cover_image" :alt="apartment.title">
    <div class="card-body fs-6 d-flex flex-column justify-content-center">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <hr>
      <p class="card-text">{{ apartment.address }}</p>
      <p class="card-text">
      <ul class="list-unstyled align-items-end d-flex mt-3">
        <li class="mx-2" v-for="(service, index) in apartment.services" v-show="index <= 6">
          <p v-html="service.icon"></p>
        </li>
        <li v-if="apartment.services.length > 7" class="p-2"><i class="fa-solid fa-ellipsis"></i></li>
      </ul>
      </p>
      <p class="card-text text-end"><span class="fw-bold">{{ apartment.price }} €</span> a notte</p>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
.btn-small {
  width: fit-content;
}

.card {
  text-decoration: none;
}

#zoom:hover {
  scale: 1.03;
}

@media screen and (min-width: 768px) {
  .card-img-top {
    max-height: 12.5rem;
  }
}</style>
