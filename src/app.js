const express=require("express");
const router = require("./routes");
const app=express();

app.use(express.json());
app.use("/api",router);
app.use((req,res)=>{
    res.status(404).json({ message: "Route not found" });
});

module.exports=app;