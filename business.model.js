const mongoose = require(id = 'mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    person_name : {
        type : String
    },
    business_name : {
        type : String
    },
    person_nic_no : {
        type : Number
    }
},{
    collection : 'business'
});

module.exports = mongoose.module(name =  'Business',Business)