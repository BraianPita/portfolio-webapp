const router = require("express").Router();
const axios = require("axios");

// Get mongoose model for handling schema
const postModel = require('../models/post');

// this route is equivalent to "/clients" post method
router.post("/", (req, res, next) => {

    // Create a new post document using the mongoose schema for validation
    postModel.create(req.body, (err, data) => {
        if (err) next(err);

        else res.json({"message":'New post added.'});
    });    
});

// get all clients
router.get("/", (req, res, next) => {

    // get all clients
    postModel.find((err, data) => {
        if (err) {
            // handle error
            next(err);
        }
        else {
            res.json(data);
        }
    });

});

// get one client by id (_id)
router.get("/:id", (req, res, next) => {

    var id = req.params.id;

    postModel.findOne({_id: id}, (err, data) => {
        if (err) {
            // handle error
            next(err);
        }
        else if (data === null) res.status(404).json({"message":"Project not found."});

        else res.json(data);
    });

});

// route to update a client with specific id
router.put("/:id", (req, res, next) => {

    // get id from url route
    var id = req.params.id;

    // update code
    postModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => {
        if (err) next(err);

        // if there is a modified item from the query
        else if (data.modifiedCount > 0)  res.json({"message":'Client with ID ' + id +  ' updated.'});

        // return error if modified count is 0
        else res.status(404).json({"message":'Update client not found.'});
    });

});


router.delete("/:id", (req, res, next) => {

    // get id from url route
    var id = req.params.id;

    // delete code
    postModel.deleteOne({_id: id}, (err, data) => {

        if (err) next(err);

        else if (data.deletedCount > 0) res.json({"message":'blogpost with ID ' + id +  ' deleted.'});

        // return error if deleted count is 0
        else res.status(404).json({"message":'Delete blogpost not found.'});

    });

});

module.exports = router;