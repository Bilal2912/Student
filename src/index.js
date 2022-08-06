const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = 8000;
const Record = require('../src/models/board');
const Product = require('../src/models/prod');
const Buy = require('./models/buy');
const Reg = require('./models/reg');
// const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'fhdhfsdfnkjsnfkjnkjdsnfkdsfjsfodsjkfnj@!@sjfuiohdsiuhfihsdf';
require("../src/db/conn");

const stpath = path.join(__dirname,"../public");
const temppath = path.join(__dirname,"../templates/views")
const partpath = path.join(__dirname,"../templates/partials")
// console.log(path.join(__dirname,"../public"));
let em = '';

app.set("view engine","hbs");
app.set("views", temppath);
hbs.registerPartials(partpath);

app.use(express.static(stpath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/index",(req,res)=>{
    res.render("index");
})
app.get("/inventory",(req,res)=>{
    res.render("inventory");
})
app.get("/orders",(req,res)=>{
    res.render("orders");
})
app.get("/noti",(req,res)=>{
    res.render("noti");
})
app.get("/issued",(req,res)=>{
    res.render("issued");
})

app.post("/board", async(req,res)=>{
    try {
        const addnewRecord = new Record(req.body);
        console.log(req.body);
        const insertRecord = await addnewRecord.save();
        res.status(201).send(insertRecord);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/board", async(req,res)=>{
    try {
        const getrecords = await Record.find({}).sort({boardno:1});
        res.status(200).send(getrecords);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const getrecord = await Record.findOne({boardno:boardno});
        res.status(200).send(getrecord);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.patch("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const updaterecord = await Record.findOneAndUpdate({boardno:boardno},req.body,{
            new:true
        });
        res.status(200).send(updaterecord);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.delete("/board/:bn", async(req,res)=>{
    try {
        const boardno = req.params.bn;
        const deleterecord = await Record.deleteOne({boardno:boardno});
        res.status(200).send(deleterecord);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/issuenow", async(req,res)=>{
    try {
        const buy = new Buy({
            name:req.body.name,
            uid:req.body.uid,
            email:req.body.email,
            contact:req.body.contact,
            year:req.body.year,
            branch:req.body.branch,
            subject:req.body.subject,
            facname:req.body.facname,
            ssd:req.body.ssd,
            sed:req.body.sed,
            brd:req.body.brd,
            issdate:req.body.issdate,
            retdate:req.body.retdate,
            autho:req.body.autho,
            pname:req.body.pname
        })
        // const addnewIssue = new Buy(buy);
        // // console.log(addnewIssue);
        // const insertIssue = await addnewIssue.save();
        const issued = await buy.save();
        // // res.status(201).send(insertIssue);
        // window.location.href = "http://localhost:8000/issued"
        res.redirect('http://localhost:8000/issued');
    } catch (error) {
        res.status(400).send(error);
    }
})

app.get("/issuenow", async(req,res)=>{
    try {
        console.log(em);
        const getIssues = await Buy.find({email:em});
        res.status(200).send(getIssues);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/product", async(req,res)=>{
    try {
        const addnewProduct = new Product(req.body);
        console.log(addnewProduct);
        const insertProduct = await addnewProduct.save();
        // console.log(insertProduct)
        res.status(201).send(insertProduct);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/product", async(req,res)=>{
    try {
        const getProducts = await Product.find({});
        res.status(200).send(getProducts);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.get("/product/:pd", async(req,res)=>{
    try {
        const prod = req.params.pd;
        const getProduct = await Product.findOne({name:prod});
        res.status(200).send(getProduct);
    } catch (error) {
        res.status(400).send(error);
    }
})
app.patch("/product/:pd", async(req,res)=>{
    try {
        const prod = req.params.pd;
        const updateProduct = await Product.findOneAndUpdate({name:prod},req.body,{
            new:true
        });
        res.status(200).send(updateProduct);
    } catch (error) {
        res.status(404).send(error);
    }
})
app.delete("/product/:pd", async(req,res)=>{
    try {
        const prod = req.params.pd;
        const deleteProduct = await Product.deleteOne({name:prod});
        res.status(200).send(deleteProduct);
    } catch (error) {
        res.status(404).send(error);
    }
})

app.post("/registud", async(req,res)=>{
    try {
        // console.log(req.body.name, req.body.uid, req.body.email, req.body.password);
        const stud = new Reg({
            name: req.body.name,
            uid: req.body.uid,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password,10)
        })
        const studentEmail = await Reg.findOne({email:stud.email});
        if(studentEmail==null){
            const registered = await stud.save();
            return res.json({status: 'ok', data: 'Registered Successfully. Please Login'})
        }
        else{
            return res.json({status: 'error', data: 'You are already a user. Please Sign In'})
        }
    } catch (error) {
        return res.json({status: 'error', data: error.message})
    }
})

app.post("/logstud", async(req,res)=>{
    try {
        const {email, password} = req.body;
        em = req.body.email;
        console.log("Hi",em);

        const stud = await Reg.findOne({email});
        if(stud==null){
            return res.json({status:'error', data:'Please Create an Account first'})
        }
        else{
            if(await bcrypt.compare(password,stud.password)){
                const token = jwt.sign({
                    id:stud._id, 
                    email:stud.email
                }, JWT_SECRET)
                console.log(token);
                return res.json({status:'ok', data:token});
            }
            else{
                return res.json({status:'error', data:'Invalid Credentials'})
            }
        }
    } catch (error) {
        return res.json({status:'error', data:error.message});
    }
    // res.json({status:'ok', data:'nkfsdhfshdf'})
})

app.post("/chgpass", async(req,res)=>{
    try {
        const {email, currpassword, updatedpassword, token} = req.body;
        console.log(req.body);
        try{
            const stud = jwt.verify(token,JWT_SECRET);
            // console.log(stud);
            const student = await Reg.findOne({email});
            if(student==null){
                return res.json({status:'error', data:'Please Enter Valid Email ID'});
            }
            else{
                if(await bcrypt.compare(currpassword,student.password)){
                    const newpass = await bcrypt.hash(updatedpassword,10);
                    const changed = await Reg.findOneAndUpdate({email:student.email},{$set:{password:newpass}},{
                        new:true
                    });
                    return res.json({status:'ok', data:'Password Updated Successfully. Please Login Again'});
                }
                else{
                    return res.json({status:'error', data:'Current Password is Invalid'});
                }
            }
        }
        catch(error){
            console.log(error);
            return res.json({status:'error', data:"Please Login First"});
        }
    } catch (error) {
        return res.json({status:'error', data:error.message});
    }
})

app.listen(port,()=>{
    console.log("Listening on Port 8000");
})