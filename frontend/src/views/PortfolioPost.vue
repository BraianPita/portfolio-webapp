<script>
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
            post_data: {}
        }
    },
    methods: {
        getPostData: function() {
            var post_id = this.$route.params.id;
            console.log(post_id);
            this.post_data = post_id;
        }
    }
}
</script>

<template>
    <div class="port-post">
        <h1>{{this.post_data}}</h1>
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