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
            <div class="col-lg-6">
                <form action="POST" class="d-flex flex-column">
                    
                    <div class="d-flex flex-row mb-3">
                        <input type="url" placeholder="Github Repository Link" class="form-control border-secondary me-2">
                        <select class="form-control border-secondary me-2 w-50" name="project-category" id="project-category">
                            <option value="" selected>Select Category</option>
                            <option value="personal">Personal</option>
                            <option value="school">School</option>
                            <option value="professional">Professional</option>
                        </select>
                        <button class="btn btn-primary">Submit</button>
                    </div>

                    <input type="text" placeholder="Title" class="form-control border-secondary rounded-0 border-0 border-bottom" v-model="this.post.title">
                    <input type="text" placeholder="Main Image URL" class="form-control border-secondary rounded-0 border-0 border-bottom" v-model="this.post.img_url">
                    <textarea class="form-control" name="post-content" id="post-content" v-model="this.post.content"></textarea>
                </form>
            </div>
            <div class="col-lg-6" >
                <h1 class="display-5 weight-bold text-light">{{this.post.title}}</h1>
                <p>Posted {{this.post.date_created}}</p>

                <hr>

                <img v-if="this.post.img_url" :src="this.post.img_url" alt="Post image">

                <div v-html="markdownToHTML(this.post.content)" class="lead">
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

    select,
    input {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
    }
    select:focus,
    input:focus {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
    }

    #post-content {
        background-color: var(--color-background-mute);
        color: var(--color-mute);
        border: 0;
        height: 70vh;
        resize: none;
    }

    *:focus {
        outline:none !important;
        box-shadow: none !important;
        filter: brightness(150%) !important;
    }

    @media (min-width: 1024px) {
    
        #post-content {
            height: 80vh;
        }
    
    }
</style>