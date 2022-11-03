const mongoose = require('mongoose')

 const connectMongodb = ()=>{
    try {
      mongoose.connect('mongodb+srv://duongbaxinh:abc.123@cluster0.18zy7fx.mongodb.net/?retryWrites=true&w=majority')
       console.log('connect successed')
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = connectMongodb;