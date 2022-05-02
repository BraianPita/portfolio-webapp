<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img src="../assets/img/no_image.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title project-stopped">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style scoped>
  .card {
    background-color: var(--color-background-mute);
    border-radius: 10px;
    margin: 1rem;
    min-width: 200px;
    width: 18rem;
  }

  .card-img-top {
    border-radius: 10px 10px 0 0;
  }

  .project-active::before {
    content:"● ";
    color: rgb(43, 247, 43);
  }

  .project-stopped::before {
    content:"● ";
    color: rgb(247, 43, 43);
  }
</style>
