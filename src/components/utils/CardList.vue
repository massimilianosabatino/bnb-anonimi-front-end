<script>
export default {
  name: "CardList",
  props: {
    apartment: Object,
  },
};
</script>
<template>
  <div class="card p-0 my-2 h-100 " >
    <img class="card-img-top" v-if="apartment.cover_image" :src="apartment.cover_image" :alt="apartment.title">
    <div class="card-body fs-6 d-flex flex-column">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <p class="card-text">{{ apartment.address }}</p>
     <router-link :to="{ name: 'Details', params: {slug: apartment.slug, id:apartment.id} }" class="btn btn-outline-dark mt-auto btn-small">Info</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn-small{
  width: fit-content;
}
</style>
