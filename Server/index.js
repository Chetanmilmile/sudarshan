const express = require("express");
const app = express();
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();
const app5 = express();
const app6 = express();
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const cors = require("cors");


const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get("/" ,(req,res) => {
    res.send("hello")
})


app.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM customer"
    db.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app.post("/api/post", (req, res) => {
    const {name, contact,email,gender,states,city} = req.body;
    const sqlInsert = "INSERT INTO customer (name,contact,email,gender,states,city) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert ,[name,contact,email,gender,states,city], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});
app.listen(7010, () => {
    console.log("server is running on port 7010");
})



// ---------------------------- addProduct---------------------------



const db1 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app1.use(cors());
app1.use(express.json());
app1.use(bodyParser.urlencoded({extend: true}));

app1.get("/" ,(req,res) => {
    res.send("hello")
})


app1.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM categories"
    db1.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app1.post("/api/post", (req, res) => {
    const {name, info,image} = req.body;
    const sqlInsert = "INSERT INTO categories (name,info,image) VALUES (?,?,?)";
    db1.query(sqlInsert ,[name,info,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});
app1.listen(7011, () => {
    console.log("server is running on port 7011");
})


// ---------------------------- Vegetables---------------------------


const db2 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app2.use(cors());
app2.use(express.json());
app2.use(bodyParser.urlencoded({extend: true}));

app2.get("/" ,(req,res) => {
    res.send("hello")
})


app2.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM Vegetable"
    db2.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app2.post("/api/post", (req, res) => {
    const {name, info,image} = req.body;
    const sqlInsert = "INSERT INTO Vegetable (name,info,image) VALUES (?,?,?)";
    db2.query(sqlInsert ,[name,info,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});
app2.listen(7012, () => {
    console.log("server is running on port 7012");
})


// ---------------------------- Plants---------------------------


const db3 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app3.use(cors());
app3.use(express.json());
app3.use(bodyParser.urlencoded({extend: true}));

app3.get("/" ,(req,res) => {
    res.send("hello")
})


app3.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM Plants"
    db3.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app3.post("/api/post", (req, res) => {
    const {name, info,image} = req.body;
    const sqlInsert = "INSERT INTO Plants (name,info,image) VALUES (?,?,?)";
    db3.query(sqlInsert ,[name,info,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});
app3.listen(7013, () => {
    console.log("server is running on port 7013");
})

// ---------------------------- Seeds---------------------------



const db4 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app4.use(cors());
app4.use(express.json());
app4.use(bodyParser.urlencoded({extend: true}));

app4.get("/" ,(req,res) => {
    res.send("hello")
})


app4.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM categories"
    db4.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app4.post("/api/post", (req, res) => {
    const {name, info,image} = req.body;
    const sqlInsert = "INSERT INTO categories (name,info,image) VALUES (?,?,?)";
    db4.query(sqlInsert ,[name,info,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});
app4.listen(7014, () => {
    console.log("server is running on port 7014");
})



// ---------------------------- Category---------------------------
const db5 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app5.use(cors());
app5.use(express.json());
app5.use(bodyParser.urlencoded({extend: true}));

app5.get("/" ,(req,res) => {
    res.send("hello")
})


app5.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM category"
    db5.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app5.post("/api/post", (req, res) => {
    const {name, quantity,date} = req.body;
    const sqlInsert = "INSERT INTO category (name,quantity,date) VALUES (?,?,?)";
    db5.query(sqlInsert ,[name,quantity,date], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app5.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM category WHERE id = ?";
    db5.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app5.listen(7015, () => {
    console.log("server is running on port 7015");
})

// ---------------------------- SubCategory---------------------------


const db6 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app6.use(cors());
app6.use(express.json());
app6.use(bodyParser.urlencoded({extend: true}));

app6.get("/" ,(req,res) => {
    res.send("hello")
})


app6.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM subcategory"
    db6.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app6.post("/api/post", (req, res) => {
    const {name,category, quantity,date} = req.body;
    const sqlInsert = "INSERT INTO subcategory (name,category,quantity,date) VALUES (?,?,?,?)";
    db6.query(sqlInsert ,[name,category,quantity,date], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app6.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM subcategory WHERE id = ?";
    db6.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app6.listen(7016, () => {
    console.log("server is running on port 7016");
})
