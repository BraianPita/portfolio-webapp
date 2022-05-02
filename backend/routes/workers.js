const router = require("express").Router();
const activityModel = require('../models/activity');
const workerModel = require('../models/worker');


// routes for mongoDB, node and moongose

//post method for worker
router.post("/", (req, res, next) => {
    workerModel.create(req.body, (err, data) => {   // New worker document is created to use with and for mongoose
        if (err) next(err);
        else res.json({"message":'New worker has been added.'}); // success message
    });
});

// get all workers
router.get("/",(req, res, next) => { //gets all workers
    workerModel.find((err,data) => {
        if (err) {
            next(err); // for errors if any

        }
        else {
            res.json({data:data});
        }
    });
});
//retrieves worker by id
router.get("/:id", (req, res, next) => {
    var id = req.params.id;
    workerModel.findOne({_id: id}, (err, data) => { 
        if (err) next(err);

        else if (data === null) res.status(404).json({"message":"Worker not found."});

        else res.json({data:data});

    });
});

//updates workers
router.put("/:id", (req, res, next) => { 
    var id = req.params.id; // retrieves the id from the url
    workerModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => { //allows for the update process workers
        if(err) next(err);

        else if (data.modifiedCount > 0) res.json({message: 'worker with ID ' + id + ' updated'}); // if workers change it will show

        else res.json({message: 'There is an error trying to update a worker.'}); // if error updating a worker
    
    });
});

// deletes a worker if worker is gone
router.delete("/:id", (req ,res, next) => {
    var id = req.params.id;
    workerModel.deleteOne({_id: id}, (err, data) => { //deletes code
        if (err) next(err);

        else if (data.deletedCount > 0) res.json({"message":'Worker with ID ' + id +  ' deleted.'});

        else res.json({data:data});
    
    });
});

// Aggregate worker activities
router.get("/:id/activities", (req, res, next) => {

    var id = req.params.id;

    // get all activities with id in workerID field
    //https://stackoverflow.com/questions/30537317/mongodb-aggregation-match-if-value-in-array
    activityModel.aggregate([{$match: { $expr: { $in: [ id, "$workerID" ] } } }]).exec(function (err, activityData) {
        if (err) next(err);

        else {
            res.json(activityData);
        }

    });

});

module.exports = router;
