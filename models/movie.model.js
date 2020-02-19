const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    year:{
        type:Number,
        required:true
    },    
    ranking:{
        type:Number,
        required:false
    }    
});

const movieModel = mongoose.model('Movies', Schema);

module.exports = movieModel;