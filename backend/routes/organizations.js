const router = require("express").Router();
const res = require("express/lib/response");
const organizationModel = require('../models/organization');
const programModel = require('../models/program');
const workerModel = require('../models/worker');
const clientModel = require('../models/clients');
const ActivityModel = 
// model that can work with mongoDB and node is moongose, so this is that schema

//post method for organization
router.post("/", (req, res, next) => {
    organizationModel.create(req.body, (err, data) => {   //organization document is created using mongoose
        if (err) next(err);
        else res.json({"message":'New organization has been added.'}); //if successfully added a message will appear saying that the organization was added
    });
});

router.get("/",(req, res, next) => { //gets all of the organizations
    organizationModel.find((err,data) => {
        if (err) {
            next(err); // handles any errors

        }
        else {
            res.json({data:data});
        }
    });
});
//retrieves organization by id
router.get("/:id", (req, res, next) => {
    var id = req.params.id;
    organizationModel.findOne({_id: id}, (err, data) => {
        if (err) {
            next(err); //handles any errors
        }
        else if (data === null) res.status(404).json({"message":"Organization is not found."});
        else res.json({data:data});
        
    });
});
//updates the organization 
router.put("/:id", (req, res, next) => { 
    var id = req.params.id; // retrieves the id from the url
    organizationModel.updateOne({_id: id}, req.body, {multi:true}, (err, data) => { //allows for the update process to work
        if(err) next(err);
        else if (data.modifiedCount > 0) res.json({message: 'Organization with ID ' + id + ' updated.'}); // if a organization is modified it gives out this message
        else res.status(404).json({"message":'There is an error trying to update Organization.'}); // if there is an error in changing the organization
    
    });
});
// deletes an organization if required 
router.delete("/:id", (req ,res, next) => {
    var id = req.params.id;
    organizationModel.deleteOne({_id: id}, (err, data) => { //deletes code
        if (err) next(err);
        else if (data.deletedCount > 0) res.json({"message":'Organization with ID ' + id + ' deleted.'}); //if organization is deleted this message is shown
        else res.status(404).json({"message":'There is an error trying to delete organization.'}); // if there is an error in deleting the organization this message is shown
    
    });
});

// Aggregate Organization's programs
router.get("/:id/programs", (req, res, next) => {
    var id =req.params.id; // gets all programs with id
    programModel.aggregate([{$match: {orgID:id} }]).exec(function(err,programData){
        if (err) next(err);
        else{
            res.json(programData);
        }
    });
});

//Aggregate organization's workers
router.get("/:id/workers", (req, res, next) => {
    var id=req.params.id; // gets all workers with id
    workerModel.aggregate([{$match: {orgID:id} }]).exec(function(err,workerData){
        if (err) next(err);
        else{
            res.json(workerData);
        }

    });
});


//Aggregate organization's clients
router.get("/:id/clients", (req, res, next) => {
    var id=req.params.id; // gets all workers with id
    clientModel.aggregate([{$match: {"intake.intakeOrg":id} }]).exec(function(err,clientData){
        if (err) next(err);
        else{
            res.json(clientData);
        }

    });
});

//Aggregate organization's activities
router.get("/:id/activities", (req, res, next) => {
    var id=req.params.id; // gets all workers with id
    programModel.aggregate([
        {$match: {orgID:id}},
        {
            $lookup: {
                from:"activity",
                localField:"_id",
                foreignField:"program",
                as:"activity"
            }
        },
        {$unwind:"$activity"},
        {
            $project: {
                _id: "$activity._id",
                program: "$activity.program",
                description: "$activity.description",
                shortNotes: "$activity.shortNotes",
                eventDate: "$activity.eventDate",
                hoursSpent: "$activity.hoursSpent",
                attendees: "$activity.attendees",
                workerID: "$activity.workerID",
                handlingStatus: "$activity.handlingStatus",
                hasUsedServices: "$activity.hasUsedService"
            }
        }
    ]).exec(function(err,activitiesData){
        if (err) next(err);
        else{
            res.json(activitiesData);
        }

    });
});


module.exports = router;