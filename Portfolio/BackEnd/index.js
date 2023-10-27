const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const saveRoute = require('./routes/save');
dotenv.config();
const cors = require("cors");

const PORT = 5000;

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successful!"))
    .catch((err)=>{
    console.log("Not working");
});

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(express.json());

app.use("/api/userdata", saveRoute);


app.listen(PORT,()=>{
  console.log("Backend server is running!");
});