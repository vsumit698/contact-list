const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    phone: {
        type : String,
        required : true
    }
});

// creating model (ContactModel) through using contactSchema..

const ContactModel = mongoose.model("ContactModel",contactSchema);
module.exports.ContactModel = ContactModel;