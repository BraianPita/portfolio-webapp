<script>

import {backend} from '../assets/backend';

export default {
    created() {

        this.post_id = this.$route.params.id;

        // get data
        this.getPostData();
        //this.getCommits();

        this.$watch(
        () => this.$route.params,
        (toParams, previousParams) => {
            // react to route changes...
        });
        },
    data() {
        return {
            post_id: undefined,
            post_data: undefined,
            commits: []
        }
    },
    methods: {
        getPostData: async function() {
            
            var response = await backend.get('/blogpost/' + this.post_id);

            this.post_data = response.data;
        },
        getRepoName: function() {
            return this.post_data.repository.full_name.split('/').pop();
        },
        getCommits: async function() {
            var response = await backend.get('/project/commits/' + this.post_id);

            this.commits = response.data;
        }
    }
}
</script>

<template>
    <div class="port-post" v-if="this.post_data !== undefined">
        <h1>{{this.post_data.title}}</h1>
        <p>Posted on: {{this.post_data.date_posted.toLocaleString('en-us').split('T')[0]}} <!-- -- {{this.post_data}}-->   </p>
        <hr>

        <div v-html="markdownToHTML(this.post_data.content)" class="lead"></div>


        <h2>Recent Commits</h2>
        <div class="card bg-dark m-3 p-3" v-for="commit in commits" :key="commit">{{commit.commit.author.name}} - {{commit.commit.author.date}}
            <hr class="mt-0">
            {{commit.commit.message}}
        </div>

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