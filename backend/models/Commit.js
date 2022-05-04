const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commitSchema = new Schema({
        _id: {
            type: String,
            default: () => uuid.v4().replace(/-/gi, '')
        },
        commit: {
            url: {
                type: String,
                required: true,
                unique: true
            },
            author: {
                date: {
                    type: Date,
                    required: true,
                    default: Date.now,
                    index: true
                },
                name: {
                    type: String,
                    default: "BraianPita"
                }
            },
            message: {
                type: String
            }
        },
        repository: {
            html_url: {
                type:String
            }
        }
    },
    {
        collection: 'commit'
    });

module.exports = mongoose.model('commit', commitSchema)