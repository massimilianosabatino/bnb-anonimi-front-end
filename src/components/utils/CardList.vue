<script>
export default {
  name: "CardList",
  props: {
    apartment: Object,
  },
};
</script>
<template>
  <div class="card" >
    <img class="card-img-top" v-if="apartment.cover_image" :src="apartment.cover_image" :alt="apartment.title">
    <div class="card-body">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <p class="card-text">{{ apartment.address }}</p>
     <router-link :to="{ name: 'Details', params: {slug: apartment.slug, id:apartment.id} }" class="btn btn-dark">Info</router-link>
    </div>
  </div>
</template>
