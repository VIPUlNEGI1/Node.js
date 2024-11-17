const mongoose = require('mongoose') //connect the db
const { default: mongoose } = require('mongoose')
const { first, uniqueId } = require('lodash')

// connecting the mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Myappp')
// it return the Promise
.then(()=>console.log("Mongodb is connected seccessfully"))
.catch((err)=>console.log("the error ", err))

// creating a schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type:string,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
       type:String 
    }
})

//then we are creating the model
const User = mongoose.model('user',userSchema)