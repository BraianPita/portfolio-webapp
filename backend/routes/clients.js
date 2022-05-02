const router = require("express").Router();
const axios = require("axios");

// Get mongoose model for handling schema
const clientModel = require('../models/clients');
const activityModel = require('../models/activity');

// this route is equivalent to "/clients" post method
router.post("/", (req, res, next) => {

    // Create a new client document using the mongoose schema for validation
    clientModel.create(req.body, (err, data) => {
        if (err) next(err);

        else res.json({"message":'New client added.'});
    });    
});

// get all clients
router.get("/", (req, res, next) => {

    // get all clients
    clientModel.find((err, data) => {
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

    clientModel.findOne({_id: id}, (err, data) => {
        if (err) {
            // handle error
            next(err);
        }
        else if (data === null) res.status(404).json({"message":"Client not found."});

        else res.json({data:data});
    });

});

// route to update a client with specific id
router.put("/:id", (req, res, next) => {

    // get id from url route
    var id = req.params.id;

    // update code
    clientModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => {
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
    clientModel.deleteOne({_id: id}, (err, data) => {

        if (err) next(err);

        else if (data.deletedCount > 0) res.json({"message":'Client with ID ' + id +  ' deleted.'});

        // return error if deleted count is 0
        else res.status(404).json({"message":'Delete client not found.'});

    });

});

// Aggregate client's activities
router.get("/:id/activities", (req, res, next) => {

    var id = req.params.id;

    // get all activities with id in attendees
    //https://stackoverflow.com/questions/30537317/mongodb-aggregation-match-if-value-in-array
    activityModel.aggregate([{$match: { $expr: { $in: [ id, "$attendees" ] } } }]).exec(function (err, activityData) {
        if (err) next(err);

        else {
            res.json(activityData);
        }

    });

});


// External API query route
router.get("/external/:firstname/:lastname/:phone", (req, res, next) => {

    // get url params
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    var phone = req.params.phone;

    // send request to external API using axios
    axios({
        method: 'get',
        url: `https://cis-4339.herokuapp.com/api/v1/data/${firstname}/${lastname}/${phone}`,
      })
        .then(function (response) {

          var res_data  = response.data.data[0];

          // default value for internal id if internal client not found
          res_data.internal_id = "";

          // Aggregate to find if external client exists in internal Database
          clientModel.aggregate([{
            $match: {
                $and: [
                        // firstname, lastname must match
                        {firstName:firstname},
                        {lastName:lastname},
                    {
                        // At least one phone number must match for the client to match
                        $or: [
                            {"contact.homeNum":phone},
                            {"contact.workNum":phone},
                            {"contact.cellNum":phone}
                        ]
                    }
                ]

            }
          }]).exec(function (err, internal_client) {
            if (err) next(err);
    
            else {
                // if found in database, update the internal_id field
                if (internal_client.length > 0)
                    res_data.internal_id = internal_client[0]._id;

                res.json(res_data);
            }
    
        });

          
        })
        .catch(err => {
            // If not found, send 404 not found response
            if (err.response && err.response.status == 404) {
                res.status(404).json({"message":"External client not found"})
            }

            // error handler
            else next(err);
        });

});

module.exports = router;