import express from "express"
const app = express()
// app.use(logger)

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) //* THIS WILL ALLOW US TO GET THE FORM 
app.use(express.json()) //* HELP IN WHEN THE USER IS FEATCHING THE DATA OR API'S

app.set("view engine", "ejs")

// app.get('/',(req, res) => {
//     res.render("index", { text: "World" })    
// })

// const userRouter = require("./routes/users")
import userRouter from "./routes/users.js"

app.use('/users', userRouter)


    
app.listen(3000)


//* res.render("index", { text123123123: "World" })

    //* res.download('server.js');  THIS HOW YOU CAN DOWINLOAD ANY FILE IN EXPRESS JS

    //* res.json({ message: "Error" }) IN THIS THE STATUS CODE WILL BE DEFULT LE SEND 

    //* res.status(500).json({ message: "Error" }) SENDING MESSAGE TO CLINT IN JSON FORM 

    //* res.status(500).send("HI")

    //* res.sendStatus(500)  500 MEANS Internal Server Error

    //* res.send("Hi") THIS IS ONLY USE FOR DVELOPMENT PORPUSE 
