const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rehbargrowwindia:pJQYJqsUtVSuLsnj@learning.xkvhh.mongodb.net/miniproject")


const userSchema = mongoose.Schema({
    username:String,
    name:String,
    age:String,
    email:String,
    password:String,
    profilepic:{
        type:String,
        default:'default.png'
    },
    posts:[
        {type:mongoose.Schema.ObjectId, ref:"post"}
    ]
})

module.exports = mongoose.model('user',userSchema);