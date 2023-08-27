import express from "express";
const app = express();
const port = 9000;

app.use("/", (req, res)=>{
    res.json({
        message: "i think it is running"
    })
});

app.listen(port, ()=>{
    console.log(`Starting server at ${port}`);
});