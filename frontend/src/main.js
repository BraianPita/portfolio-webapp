import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// create app
const app = createApp(App)


// global imports
import {marked} from 'marked';


const methodsMixin = {
    methods: {
        markdownToHTML: function(input) {
            return marked(input);
        }
    }
}

app.mixin(methodsMixin);

app.use(router)

app.mount('#app')
