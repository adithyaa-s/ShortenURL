const mongoose = require("mongoose");

async function connectMongoDB(url) {
    return mongoose.createConnection(url);
}

const urlSchema  = new mongoose.Schema({
    shortURL : {
        type:String,
        required:true,
        unique:true,
    },
    redirectURL : {
        type: String,
        required:true,
    },
    visitHistory : [{timestamp : {type : Number}}],
},
    {timestamps : true}
);

const URL = mongoose.model("url",urlSchema);

module.exports = URL;