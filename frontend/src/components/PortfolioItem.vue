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
      <a :href="card_data.author.html_url" target="_blank" class="mt-auto mx-auto card p-2 flex-row" style="background-color: #333; width: 100%; margin: 0">
          <img :src="this.card_data.author.avatar_url" alt="avatar" class = "avatar-img ms-2"> <p class="my-auto mx-auto">{{this.card_data.author.login}}</p>
      </a> 
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

  .avatar-img {
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
</style>
