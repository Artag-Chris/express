import express from "express";

const app = express();
const PORT= process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {

    res.status(200).send({
        msg: "Hello World"});   
})

app.get("/api/users", (req, res) => {
res.send([
    {id:1, name: "artag"},
    {id:2, name: "chris"},
    {id:3, name: "josh"},
])
});