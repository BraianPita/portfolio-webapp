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
        ref: 'project'
    }

},
    {
        collection: 'post'
    });





module.exports = mongoose.models.post || mongoose.model('post', postSchema)