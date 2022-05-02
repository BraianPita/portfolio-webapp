const router = require("express").Router();
const activityModel = require('../models/activity');
const clientsModel = require('../models/clients');
const programModel = require('../models/program');
const workerModel = require('../models/worker');
// model that can work with mongoDB and node is moongose, so this is that schema

//post method for activity
router.post("/", (req, res, next) => {
    activityModel.create(req.body, (err, data) => {   //activity document is created using mongoose
        if (err) next(err);
        else res.json({"message":'New activity has been added.'}); //if successfully added a message will appear saying that the activity was added
    });
});

router.get("/",(req, res, next) => { //gets all of the activity
    activityModel.find((err,data) => {
        if (err) {
            next(err); // handles any errors

        }
        else {
            res.json({data:data});
        }
    });
});
//retrieves activity by id
router.get("/:id", (req, res, next) => {
    var id = req.params.id;

    // https://stackoverflow.com/questions/18867628/mongoose-deep-population-populate-a-populated-field
    // populate populated field
    activityModel.findOne({_id: id}).populate("workerID attendees").populate({path:'program', populate: {path:'orgID'}}).exec(function (err, activityData) {
        if (err) { next(err);
        }
        else if (activityData === null) res.status(404).json({"message":'Activity is not found.'});

        else {
            res.json({data:activityData});
        }

    });
});

//updates the activity 
router.put("/:id", (req, res, next) => { 
    var id = req.params.id; // retrieves the id from the url
    activityModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => { //allows for the update process to work
        if(err) next(err);
        else if (data.modifiedCount > 0) res.json({"message":'activity with ID ' + id + ' updated'}); // if a activity is modified it gives out this message
        else res.status(404).json({"message":'There is an error trying to update activity.'}); // if there is an error in changing the activity
    
    });
});

// deletes an activity if required 
router.delete("/:id", (req ,res, next) => {
    var id =req.params.id;
    activityModel.deleteOne({_id: id}, (err, data) => { //deletes code
        if (err) next(err);
        else if (data.deletedCount > 0)res.json({"message":'Activity with ID ' + id + ' deleted.'}); //if activity is deleted this message is shown
        else res.status(404).json({"message":'There is an error trying to delete activity.'}); // if there is an error in deleting activity this message is shown
    
    });
});

module.exports = router;