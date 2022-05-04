<script setup>

  import PortfolioItem from '@/components/PortfolioItem.vue'

</script>

<script>
export default {
  data() {
    return {
      port_items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

<template>
  <div class="port-container">
    <div class="d-flex flex-wrap justify-content-around">

      <PortfolioItem v-for="item in port_items" :key="item" msg="{{item}}" />

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
