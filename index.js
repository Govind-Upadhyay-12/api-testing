import express from "express";
const app = express();
const port = 9000;

app.use("/", (req, res)=>{
    res.json({
        name: "Govind",
        age: 20
    })
});

app.listen(port, ()=>{
    console.log(`Starting server at ${port}`);
});