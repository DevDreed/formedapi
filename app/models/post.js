// load the things we need
var mongoose = require('mongoose');

// define the schema for our posts model
var postSchema = mongoose.Schema({
    published: Date,
    content: String,
    created_at: Date,
    updated_at: Date,
    user_id: Number,
    group_id: Number    
});


// create the model for post and expose it to our app
module.exports = mongoose.model('Post', postSchema);