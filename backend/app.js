const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require("./routes/excersises")
const usersRouter = require("./routes/users")


app.use('/excersises', exercisesRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})