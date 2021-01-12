//jshint esversion:6
//Variable Declarations & Requiring Modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

//Setting up the EJS properties
app.set("view engine", "ejs");

items=[];
workItems=[];

//Route for the home page

app.get("/", function(req, res) {
let day=date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});


app.post("/", function(req, res) {
var listItem = req.body.newItem;
if(req.body.list==="Work")
{workItems.push(listItem);
  res.redirect("/work");
}
else
  {items.push(listItem);
  res.redirect("/");
}

});
//Route for Work ToDo List Page
app.get("/work",function(req,res){
res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.post("/work",function(req,res){
  let items=req.body.newItem;
  workItems.push(items);
  res.redirect("/work");
});


//Running up the server

app.listen(3000, function() {
  console.log("The Server has started on port 3000");
});
