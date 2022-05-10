<script setup>

  import PortfolioItem from '@/components/PortfolioItem.vue'

</script>

<script>
import {backend} from '../assets/backend.js';

export default {
  data() {
    return {
      port_items: []
    }
  },
  created() {
    this.getProjects();
  },
  methods: {
    getProjects : async function() {
      var data = await backend.get('/project');
      console.log(data.data.data);
      this.port_items = data.data.data;
    }
  }
}
</script>

<template>
  <div class="port-container">
    <div class="d-flex flex-wrap justify-content-around">

      <PortfolioItem v-for="item in port_items" :key="item" :card_data="item" />

    </div>
  </div>
</template>

<style>

@media (min-width: 1024px) {
  .port-container {
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    display: block;
  }
}
</style>
