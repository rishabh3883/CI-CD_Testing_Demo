import express from "express";
import sum from "./sum.js";

const app = express();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.get("/home", async (req, res) => {
    res.json({
        msg : "Iam root!"
    });
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;
    
    res.json({ ans : parseInt(a) + parseInt(b) });

})