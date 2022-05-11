<script setup>
defineProps({
  card_data: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <a :href="'/post/' + card_data._id" class="card">
    <img :src="card_data.img_url || '/img/no_image.jpg'" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title project-stopped">{{card_data.name || card_data.repository.full_name}}</h5>
      <p class="card-text">{{card_data.repository.description}}</p>
      <!--<a :href="card_data.repository.html_url" target="_blank" class="btn btn-primary mt-auto">Open Repo</a>--> 
    </div>
  </a>
</template>

<style scoped>
  .card {
    background-color: var(--color-background-mute);
    border-radius: 10px;
    margin: 1rem;
    min-width: 200px;
    width: 18rem;
    color: var(--text-color);
    text-decoration: none;
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
