<script>

import {backend} from '../assets/backend';

export default {
    created() {
        this.getPostData();
        this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            // react to route changes...
        });
        },
    data() {
        return {
            post_data: undefined
        }
    },
    methods: {
        getPostData: async function() {
            var post_id = this.$route.params.id;
            
            var response = await backend.get('/project/' + post_id);

            this.post_data = response.data;
        }
    }
}
</script>

<template>
    <div class="port-post" v-if="this.post_data !== undefined">
        <h1>{{this.post_data.repository.full_name}}</h1>
        <p>by: {{this.post_data.owner.login}} -- {{this.post_data}}</p>
        <hr>
    </div>
</template>

<style scoped>
  .port-post {
    height: 100vh;
    width: 100vw;
    padding: 1rem 10rem;
    display: block;
  }
</style>