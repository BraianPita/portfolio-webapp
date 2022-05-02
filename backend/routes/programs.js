const router = require("express").Router();
const activityModel = require('../models/activity');
const clientsModel = require('../models/clients');
const organizationModel = require('../models/organization');
const programModel = require('../models/program');
const workerModel = require('../models/worker');

// routes for mongoDB, node and moongose

//post method for program
router.post("/", (req, res, next) => {
    programModel.create(req.body, (err, data) => {   // program document is created using mongoose
        if (err) next(err);
        else res.json({"message":'New program has been added.'}); //if successfully added a program
    });
});

router.get("/",(req, res, next) => { //gets program
    programModel.find((err,data) => {
        if (err) {
            next(err); // handles any errors

        }
        else {
            res.json({data:data});
        }
    });
});
//retrieves program by id
router.get("/:id", (req, res, next) => {
    var id = req.params.id;
    programModel.findOne({_id: id}).populate("orgID").exec((err, data) => { 
        if (err) next(err);

        else if (data === null) res.status(404).json({"message":"Program not found."});

        else res.json({data:data});

    });
});

//updates the program
router.put("/:id", (req, res, next) => { 
    var id = req.params.id; // retrieves the id from the url
    programModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => { //allows for the update process to work
        if(err) next(err);
        else if (data.modifiedCount > 0) res.json({message: 'program with ID ' + id + ' updated.'}); // if a program is modified it gives out this message
        else res.json({"message": 'There is an error trying to update program.'}); // if there is an error in changing the program
    
    });
});

// deletes program
router.delete("/:id", (req ,res, next) => {
    var id = req.params.id;
    programModel.deleteOne({_id: id}, (err, data) => { //deletes code
        if (err) next(err);

        else if (data.deletedCount > 0) res.json({"message":'Program with ID ' + id + ' deleted.'});

        else res.json({data:data});
    
    });
});

// Aggregate program's activities
router.get("/:id/activities", (req, res, next) => {
    var id =req.params.id; // gets all programs with id
    activityModel.aggregate([{$match: {program:id} }]).exec(function(err,activityData){
        if (err) next(err);
        else{
            res.json(activityData);
        }
    });
});

module.exports = router;