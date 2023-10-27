const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authUserRoute = require("./routes/authAdmin");
const authAdminRoute = require("./routes/authAdmin");
const itemRoute = require("./routes/item");
const cors = require("cors");

dotenv.config();
app.use(cors());

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DB Connection Successful!"))
    .catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use("/api/admin/auth", authAdminRoute);
app.use("/api/auth", authUserRoute);
app.use("/api/users", userRoute);
app.use("/api/items", itemRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
})