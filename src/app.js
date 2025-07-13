import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//data jason formate ma ave to
app.use(express.json({limit:"16kb"}))

//data url mathi avano hoi to
app.use(express.urlencoded({extended:true,limit:"16kb"}))

//file or folder store karva public banava mate
app.use(express.static("public"))
app.use(cookieParser())


export{app}