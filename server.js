const express= require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRouter=require("../backend/routes/userRoute")
dotenv.config();
const cors=require("cors")
app.use(cors())

app.use(express.json())
mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected successfully")
    app.listen(process.env.PORT || 8000, (err)=>{
        if (err) console.log(err);
        console.log("running successfully at ", process.env.PORT)
    });
})
.catch((err)=>console.log(err))


app.use(userRouter)