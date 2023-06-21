<script>
import { useApiStore } from "../../apiStore";
import {mapState} from "pinia";
import { mapActions } from "pinia";
export default {
  name: "MainApp",
  methods:{
    ...mapActions(useApiStore,['getData']),
    },
  computed:{
     ...mapState(useApiStore,['data'])
    
  },
  created(){
    this.getData()
  }
}

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
