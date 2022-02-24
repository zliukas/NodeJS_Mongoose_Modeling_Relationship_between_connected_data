const mongoose = require("mongoose");

const Comment = mongoose.model('Comment', new mongoose.Schema({
    name:String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }
    
  }))

  module.exports = Comment;
