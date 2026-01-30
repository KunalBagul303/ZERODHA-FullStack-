// require("dotenv").config();

// const express  = require("express");
// const mongoose =  require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { HoldingsModel} = require('./model/HoldingsModel');
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel} = require("./model/OrdersModel");
// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();





// app.use(cors());
// app.use(bodyParser.json());

// app.get('/allHoldings' , async(req,res) =>{
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// });

// app.get('/allPositions' , async(req,res) =>{
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// });


// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

// app.listen(PORT, ()=> {
//     console.log("App started!");
//     mongoose.connect(uri);
//     console.log("DB connected!");
// });

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoute = require("./routes/AuthRoute"); // ✅ add this

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// ✅ middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoute);


// ✅ auth routes
app.use("/api/auth", authRoute);

// ✅ Holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// ✅ Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// ✅ Orders
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// ✅ connect DB then start server
mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ DB connected!");
    app.listen(PORT, () => {
      console.log(`✅ App started on port ${PORT}`);
    });
  })
  .catch((err) => console.log("❌ Mongo error:", err));
