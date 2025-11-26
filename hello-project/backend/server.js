const express = require("express");
const app = express();
app.get("/", (req,res)=> res.send("Hello World from Node Backend!"));
app.listen(3000, ()=> console.log("Backend running on 3000"));
