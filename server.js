const express = require('express');
const path = require('path');
const port = 8000;
// using mongoose to start a connection with mongoDB
const db = require("./dataBaseConnector/mongoose")
// taking access of (contact model) created in model folder
const ContactModel = require("./models/contact_model").ContactModel;
// express application
const app = express();
// setting ejs template engine to application
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
// middlewares
app.use(express.urlencoded());
app.use(express.static("staticFiles"));

//request handler....
app.get('/',function(request,response){
    
    ContactModel.find({},function(error,SelectedContacts){
        if(error){
            console.log("Error in finding contacts ",error)
            return;
        } 

        response.render('home',{contact_list:SelectedContacts,title:"Contact App"});
    });

});
app.all("/add-contact",function(request,response){
    console.log(request.body);
    ContactModel.create(request.body,function(error,newContact){
        if(error) {
            console.log("Error while creating contact",error);
            return;
        }
    
    });
    response.redirect("back");
});
app.get("/delete-contact/",function(request,response){
    ContactModel.findOneAndDelete({_id:request.query.id},function(error,contact){
        if(error){
            console.log("Error while deleting a contact");
        }
        console.log(contact.name);
    });
    
    response.redirect("/");
});
////////////////////////////////////////////
app.listen(port,function(error){
    if(error) {
        console.log(error);
        return;
    }
    console.log("Server is running via port",port);
});
