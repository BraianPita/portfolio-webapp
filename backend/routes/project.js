const router = require("express").Router();
const axios = require("axios");

// Get mongoose model for handling schema
const projectModel = require('../models/Project');

// this route is equivalent to "/clients" post method
router.post("/", (req, res, next) => {

    // Create a new project document using the mongoose schema for validation
    projectModel.create(req.body, (err, data) => {
        if (err) next(err);

        else res.json({"message":'New project added.'});
    });    
});

// get all clients
router.get("/", (req, res, next) => {

    // get all clients
    projectModel.find((err, data) => {
        if (err) {
            // handle error
            next(err);
        }
        else {
            res.json({data:data});
        }
    });

});

// get one client by id (_id)
router.get("/:id", (req, res, next) => {

    var id = req.params.id;

    projectModel.findOne({_id: id}, (err, data) => {
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
    projectModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => {
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
    projectModel.deleteOne({_id: id}, (err, data) => {

        if (err) next(err);

        else if (data.deletedCount > 0) res.json({"message":'Client with ID ' + id +  ' deleted.'});

        // return error if deleted count is 0
        else res.status(404).json({"message":'Delete client not found.'});

    });

});

module.exports = router;