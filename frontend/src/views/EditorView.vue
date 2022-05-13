<script>
export default {
    data() {
        return {
            post: {
                title: "",
                content: "",
                date_created: new Date().toLocaleString('en-us'),
                img_url: undefined
            }
        }
    }
}
</script>

<template>
    <div id="editor" class="container-flex">
        <div class="row p-5">
            <div class="col-6">
                <input type="text" placeholder="Title" class="form-control" v-model="this.post.title">
                <input type="text" placeholder="Main Image URL" class="form-control" v-model="this.post.img_url">
                <textarea class="form-control" name="post-content" id="post-content" v-model="this.post.content"></textarea>
            </div>
            <div class="col-6" >
                <h1>{{this.post.title}}</h1>
                <p>Posted {{this.post.date_created}}</p>

                <hr>

                <img v-if="this.post.img_url" :src="this.post.img_url" alt="Post image">

                <div v-html="markdownToHTML(this.post.content)">
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
    #editor {
        width: 100vw;
        height: 100%;
    }

    input {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
    }
    input:focus {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
    }

    #post-content {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
        border: 0;
        height: 70vh;
    }

    @media (min-width: 1024px) {
    
        #post-content {
            height: 80vh;
        }
    
    }
</style>