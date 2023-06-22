<script>
export default {
  name: "CardList",
  props: {
    apartment: Object,
  },
};
</script>
<template>
  <div class="card">
    <img v-if="apartment.cover_image" :src="apartment.cover_image" :alt="apartment.title">
    <div class="card-body">
      <h5 class="card-title">{{ apartment.title }}</h5>
      <p class="card-text">{{ apartment.address }}</p>
      <div v-for="service in apartment.services">
        {{ service.name }}
      </div>
      <a href="#" class="btn btn-primary">Info</a>
    </div>
  </div>
</template>
