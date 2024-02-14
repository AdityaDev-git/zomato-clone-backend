const express = require ("express");
const  router = require ("./Routes/routes.js");
const connectDB = require ("./connectdb.js");

const host = "localhost";
const app = express()
const port = 5000;


app.use(express.json())
app.use("/",router);


const start = async()=>{
try{
    await connectDB();
    app.listen(port,()=>{
        console.log(`Server running at Port:${port}/`);
    })
} catch(error){
    console.log(error);
}
}
start();