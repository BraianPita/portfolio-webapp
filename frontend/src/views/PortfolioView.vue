<script setup>

  import PortfolioItem from '@/components/PortfolioItem.vue'
  
  const USER = 'TODO: your GitHub user name'
  const EMAIL = 'TODO: your GitHub email address'

  const github = require('octokat')({ token: 'TODO: your GitHub API token' })

</script>

<script>
export default {
  data() {
    return {
      port_items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    getLastestCommits: function() {


      return github.fromUrl(`https://api.github.com/users/${USER}/events`)
        .fetch()
        .then(events => {
          let lastCommit

          events.some(event => {
            return event.type === 'PushEvent' && event.payload.commits.reverse().some(commit => {
              if (commit.author.email === EMAIL) {
                lastCommit = {
                  repo: event.repo.name,
                  sha: commit.sha,
                  time: new Date(event.createdAt),
                  message: commit.message,
                  url: commit.url
                }

                return true
              }

              return false
            })
          })

          return lastCommit
        })
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
