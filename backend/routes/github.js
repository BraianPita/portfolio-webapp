const router = require("express").Router();
const axios = require('axios');

// get all workers
router.get("/commits",(req, res, next) => { //gets all workers
    axios.get('https://api.github.com/search/commits?q=author:BraianPita&sort=author-date&order=desc&page=1').then((res) => {
        console.log(res);
    })
});


module.exports = router;
