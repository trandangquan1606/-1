const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
    Phone: {
        type:String
    },
    Password:{
        type: String,
    },
    TypeTegister:{
        type:String,
    },
    TokenLogin:{
        type:String,
    },
    DeviceID:{
        type:String
    },
    FcmTokens:{
        type:String
    }
})
module.exports = mongoose.model('User',User)