const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    _id: {
        type: String,
        default: () => uuid.v4().replace(/-/gi, '')
    },
    name: {
        type:String,
    },
    owner: {
        login: {
            type: String,
            required: true,
            default: "BraianPita"
        },
        avatar_url: {
            type: String
        },
        html_url: {
            type: String
        }
    },
    repository: {
        full_name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        html_url: {
            type:String,
            required:true,
            unique:true,
            index:true
        },
        fork: {
            type: Boolean
        }
    },
    category: {
        type:String,
        enum: ['personal', 'academic', 'professional']
    },
    img_url: {
        type:String
    }
},
    {
        collection: 'project'
    });

module.exports = mongoose.model('project', projectSchema)