const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    _id: {
        type: String,
        default: () => uuid.v4().replace(/-/gi, '')
    },
    title: {
        type:String
    },
    category: {
        type:String,
        enum: ['personal', 'academic', 'professional']
    },
    img_url: {
        type:String
    },
    content: {
        type:String
    },
    date_posted: {
        type:Date,
        default: Date.now()
    },
    date_updated: {
        type:Date
    },
    repo_url: {
        type:String,
    }
},
    {
        collection: 'post'
    });


postSchema.virtual('repo_url', {
    ref: 'project', // ref model to use
    localField: 'repo_url', // field in mealSchema
    foreignField: 'repository.html_url', // The field in meatSchema. 
});


module.exports = mongoose.models.post || mongoose.model('post', postSchema)