<script>
import { useApiStore } from "../../apiStore";
export default {
  name: "Main",
  useApiStore,
  setup() {
    const store = useApiStore();
    const data = store.data;
    const getData = store.getData;
    return {
      data,
      getData,
    };
  },
  created() {
    this.getData();
    
  },
};
</script>
<template>
  <main>
    <div class="prova">
        <ul>
            <li v-for="apartment in data">{{ apartment.title }}</li>
        </ul>
    </div>
  </main>
</template>
<style></style>
