const mongoose = require('mongoose');   


const authorSchema = new mongoose.Schema({
    author:String
})


module.exports = mongoose.model('Author', authorSchema);  // Exporting the model to use in other files