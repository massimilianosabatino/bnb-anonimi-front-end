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
    class="card p-0 my-2 h-100">
    <img class="card-img-top" v-if="apartment.cover_image" :src="apartment.cover_image" :alt="apartment.title">
    <div class="card-body fs-6 d-flex flex-column justify-content-center">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <hr>
      <p class="card-text">{{ apartment.address }}</p>
      <p class="card-text">
      <ul class="list-unstyled align-items-center d-flex my-3">
        <li class="me-3" v-for="(service, index) in apartment.services" v-show="index <= 5">
          <p v-html="service.icon"></p>
        </li>
        <li v-if="apartment.services.length > 7" class="p-2"><i class="fa-solid fa-ellipsis"></i></li>
      </ul>
      </p>
      <p class="card-text text-end mt-5"><span class="fw-bold">{{ apartment.price }} €</span> a notte</p>
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
.card-title{
  height: 30px;
}
.card-text{
  height: 20px;
}

@media screen and (min-width: 768px) {
  .card-img-top {
    max-height: 12.5rem;
  }
}</style>
