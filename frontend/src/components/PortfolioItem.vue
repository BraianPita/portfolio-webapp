<script setup>
defineProps({
  card_data: {
    type: Object,
    required: true
  }
})
</script>

<script>
export default {
  methods: {
    getRepoName: function() {
      return this.card_data.repository.full_name.split("/").pop();
    }
  }
}
</script>


<template>
  <a :href="'/post/' + card_data._id" class="card">
    <img :src="card_data.img_url || '/img/no_image.jpg'" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column">

      <p class="card-text project-stopped m-0">{{card_data.category}}</p>
      <h6 class="card-title">{{card_data.title}}</h6>
      

      <hr class="mb-1 mt-auto">
      
<!---
      <strong class="text-center">{{getRepoName()}}</strong>

      <a :href="card_data.repository.owner.html_url" target="_blank" class="mx-auto card p-2 flex-row" style="background-color: #333; width: 100%; margin: 0">
          <img :src="this.card_data.repository.owner.avatar_url" alt="avatar" class = "avatar-img ms-2"> <p class="my-auto mx-auto">{{this.card_data.repository.owner.login}}</p>
      </a> 
--->
    </div>
  </a>
</template>

<style scoped>
  .card {
    background-color: var(--color-background-mute);
    border-radius: 10px;
    margin: 1rem;
    min-width: 150px;
    width: 15rem;
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
