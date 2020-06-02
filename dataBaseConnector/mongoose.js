const mongoose = require('mongoose');// taking mongoose module files...address
// opening a connection at a specified URI below
mongoose.connect("mongodb://localhost/contact_list_db",{ useNewUrlParser: true ,useUnifiedTopology:true });

//accessing the database via connection property..

const db = mongoose.connection;

// checking if error occurs or not

db.on('error', console.error.bind(console,"error occured during connection"));

// if no errors occured while setup it will fire 'open' event once...

db.once('open',function(){
    console.log("database is successfully connected");
});