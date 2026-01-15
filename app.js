require(`dotenv`).config()
const express = require("express")
const app = express()
const connectDB = require("./db/connection")
const tasks = require("./routes/tasks")
const notFound = require("./middleware/not-found")
const middlewareErrorHandler = require("./middleware/error-handler")
app.use(express.static("./public"))
app.use(express.json())
app.use("/tasks",tasks)
app.use(notFound)
app.use(middlewareErrorHandler)
 
port = 3000

 
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is lesten on ${port}... `))
    } catch(err){
        console.log(err)
    }
}
start()  