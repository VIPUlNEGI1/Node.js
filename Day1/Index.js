// // first is  we are make http server

// const http =require("http")
// // with this http we make a server

// const myServer = http.createServer(
    
//     // for handle the server we make the handler function for manage our incoming requst
//     (req,res)=>{
// // these function have to arguments which are contains the fires one 
// // req-: it contain the use object which have the request all information like (ipaddress, user and meta data, request user want)

// // and res is used to send the response
// console.log("new req rec.");
// res.end("hello from server")

// // console.log(req.headers)  optional info

//     }

// )
// // and then last run these server we want a port number and port

// myServer.listen(8000,()=>
//     console.log("this is for checking servor was started (optional)"))
// // what is the port




// ============making the log in server=============

const http = require("http")
const fs = require ("fs")

const myServer1 = http.createServer((req,res)=>{
    // making the log
    const log = `${Date.now()}:New Req Rec\n`

    fs.appendFile('log.txt',log,(err,data) =>{

        res.end("hello vipu")
    })
})
myServer1.listen(8000,()=> console.log ('server server'))
