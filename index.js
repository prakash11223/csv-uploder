const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const expressLayout = require("express-ejs-layouts");
const db = require("./config/mongoose");
const path = require("path");
// app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//for static files
app.use(express.static("./assests"));
//to make the uploads path available to the browser
app.use("/uploads", express.static(__dirname + "/uploads"));
//for using express layouts
app.use(expressLayout);
//extract style & scripts from subpages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//set up for view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//use express router
app.use("/", require("./routes"));
//app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});