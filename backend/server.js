var express = require('express')
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var url = "mongodb://localhost:27017/";
var cors = require('cors');
var ObjectId = require('mongodb').ObjectId;

app.use(cors())
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("HI... Please wait")
})
app.post("/addEmployee",function(req,res){
    console.log("request received",req.body)
    MongoClient.connect(url,function(err,con){
        if(err){
            console.log("err::",err)
        }
        else{
            var db = con.db('khut');
            db.collection('employees').insertOne(req.body)
            .then(function(newdoc){
                res.json({message:newdoc})
            })
            .catch(()=>{
                res.json({message:'couldnot insert'})
            })
        }
    })
    
})
app.get("/employees",(req,res)=>{
    MongoClient.connect(url,function(err,con){
        if(err){
            console.log("err::",err)
        }
        else{
            var db = con.db('khut');
            db.collection('employees').find().toArray(function(err,docs){
                res.json(docs)
            })
        }
    })
})
//for deleting employee record
app.delete("/deleteEmployee/:id",(req,res)=>{
    console.log(req.params)
    MongoClient.connect(url,function(err,con){
        if(err){
            console.log("err::",err)
        }
        else{
            var db = con.db('khut');
            db.collection('employees')
            .deleteOne({_id:ObjectId(req.params.id)})
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    res.json({message:"please wait"})
})
//for updating employee record
app.put("/updateEmployee",(req,res)=>{
     console.log(req.body)
    MongoClient.connect(url,function(err,con){
        if(err){
            console.log("err::",err)
        }
        else{
            var db = con.db('khut');
            var newvalues = { $set: {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                age:req.body.age
            }};
            console.log(newvalues)
            db.collection('employees')
            .updateOne({_id:ObjectId(req.body._id)},newvalues)
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    })
    res.json({message:"please wait"})
})

app.get("/students",(req,res)=>{
    MongoClient.connect(url,function(err,con){
        if(err){
            console.log("err::",err)
        }
        else{
            var db = con.db('khut');
            db.collection('students').find().toArray(function(err,docs){
                res.json(docs)
            })
        }
    })
})
app.listen(5500,()=>{console.log('server running on 5500')})