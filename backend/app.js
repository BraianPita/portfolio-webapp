// Load packages
var express = require('express');
var app = express();
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
var cors = require('cors')

// needed for API call from frontend
app.use(cors())

// Load dotenv environment variables
require('dotenv').config();

// Improve developer logger in console
app.use(morgan('dev'));

// Use extra modules for express
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// define port
const port = 3001;

// MongoDB Connection
let studentsDB;
// get secret connection string from env variable
let connectionString = process.env.MONGO_URL;
let dbName = 'Portfolio';

// setup mongoose connection to MongoDB database
mongoose
    .connect(connectionString + '/' + dbName, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Database connection Success!");

        // https://medium.com/nerd-for-tech/express-router-for-modular-code-f155d4406897
        // Creating a modular approach to routes using a router

        // reading files as routes
        fs.readdir('./routes',function(err,files){
            if (err) throw err;

            files.forEach(function(file) {
                // load router
                let routerFile = require('./routes/' + file);

                // custom routers as middleware
                app.use("/" + file.replace('.js', ''), routerFile)
            });

            app.listen(port, () => console.log(`Listening to port ${port}`));

        });



    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });



// error handler
app.use(function(err, req, res, next) {
    console.log("ERROR HANDLER:");
    console.error(err.message);

    if (!err.statusCode) err.statusCode = 500;

    // Error response
    res.status(err.statusCode).send(err.message);
});