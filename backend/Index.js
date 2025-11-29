const {OrdersModel} = require("./model/OrdersModel");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { PositionsModel } = require("./model/PositionModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

mongoose.connect(URI)
    .then(() => {
        console.log(" Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    })
    .catch(err => console.error(" MongoDB connection error:", err));


    app.get("/testing", (req, res) => {
    res.send("Working");
})


app.use(cors());
app.use(bodyParser.json());

app.get("/allholding", async (req, res) => {
    let allholding = await HoldingsModel.find({});
    res.send(allholding);
})

app.get("/position", async (req, res) => {
    let allposition = await PositionsModel.find({});
    res.send(allposition);
})

app.post("/newOrder",async (req,res)=>{
let newOrder = OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
})
newOrder.save();
res.send("Order Created");
})

app.get("/allorders",async(req,res)=>{
 let allorders = await OrdersModel.find({});
    res.send(allorders);
})


