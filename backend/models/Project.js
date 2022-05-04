const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
    _id: {
        type: String,
        default: () => uuid.v4().replace(/-/gi, '')
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
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    html_url: {
        type:String,
        required:true,
        unique:true
    },
    fork: {
        type: Boolean
    },
    category: {
        type:String
    },
    img_url: {
        type:String
    }
},
    {
        collection: 'project'
    });

module.exports = mongoose.model('project', projectSchema)