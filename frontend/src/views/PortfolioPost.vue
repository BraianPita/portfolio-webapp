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
            post_data: undefined,
            commits: []
        }
    },
    methods: {
        getPostData: async function() {
            var post_id = this.$route.params.id;
            
            var response = await backend.get('/project/' + post_id);

            this.post_data = response.data;
        },
        getRepoName: function() {
            return this.post_data.repository.full_name.split('/').pop();
        },
        getCommits: async function() {
            var response = await backend.get('/commit/' + post_id);

            this.commits = response.data;
        }
    }
}
</script>

<template>
    <div class="port-post" v-if="this.post_data !== undefined">
        <h1>{{this.post_data.name || getRepoName()}}</h1>
        <p>by: {{this.post_data.repository.owner.login}} -- {{this.post_data}}</p>
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