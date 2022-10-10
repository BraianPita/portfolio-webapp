const router = require("express").Router();
const axios = require('axios');
var fs = require('fs');
var github_info = require('./exclude.github_response.json');


const commitModel = require('../models/commit');
const projectModel = require('../models/project');

// get all workers
router.get("/", async function(req, res, next) { //gets all workers
    /*axios.get('https://api.github.com/search/commits?q=author:BraianPita&sort=author-date&order=desc&page=1').then((res) => {
        console.log(res);
    })*/


    try {
        var message = "Done";
        await commitModel.insertMany(github_info.items, {ordered: false});
        await projectModel.insertMany(github_info.items, {ordered: false});
    }
    catch (err) {
        message += " with some errors."
    }
    finally {
        res.send(message);
    }
    
});


module.exports = router;
