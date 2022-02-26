//require the library
const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb+srv://Prakash11223:GpOtvEJoCB42rgcY@cluster0.fm6qp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

//acquire the connection to check if it is successful or not
const db = mongoose.connection;

//error
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

//up and running then print the msg
db.once("open", function() {
    console.log("Successfully connected to MongoDB database");
});

module.exports = db;