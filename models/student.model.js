const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    nom : String,
    prenom : {type : String},
    age : {type : Number  , default : 13},
    email : {type : String  , required : true},
    password : String,
    genre : String,
    score : {type : Number , default : 0},
    photo : String
})

module.exports = mongoose.model('Student' , StudentSchema)