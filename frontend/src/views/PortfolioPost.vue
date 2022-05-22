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

            this.getCommits();
        },
        getRepoName: function() {
            return this.post_data.repository.full_name.split('/').pop();
        },
        getCommits: async function() {
            console.log(this.post_data.repository)

            var response = await backend.get('/project/commits/' + this.post_data.repository);

            this.commits = response.data;
        }
    }
}
</script>

<template>
    <div class="port-post row" v-if="this.post_data !== undefined">

        <div class="col-md-8">
            <h1>{{this.post_data.title}}</h1>
            <p>Posted on: {{this.post_data.date_posted.toLocaleString('en-us').split('T')[0]}} <!-- -- {{this.post_data}}-->   </p>
            <hr>

            <div v-html="markdownToHTML(this.post_data.content)" class="lead"></div>
        </div>

        <div class="col-md-4">
            <h2>Recent Commits</h2>
            <div class="card m-3 p-3 commit-card" v-for="commit in commits" :key="commit">
            {{commit.commit.author.name}} <br> 
            <p>{{commit.commit.author.date.split('T')[0]}} 
            {{commit.commit.author.date.split('T')[1]}} </p>
                <hr class="mt-0">
                {{commit.commit.message}}
            </div>
        </div>
        

    </div>
</template>

<style scoped>
  .port-post {
    height: 100vh;
    width: 100vw;
    padding: 1rem 1rem;
  }
  .commit-card {
      background-color:rgb(36, 49, 36);
  }

  .commit-card p {
      color:rgb(11, 243, 88);
  }
</style>