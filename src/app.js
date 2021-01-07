/*Importing the required modules*/
import express from "express";
import bodyParser from "body-parser";

/*Mongoose is the tool we use to interact with the database*/
import mongoose from "mongoose";

/*Create the express server*/
const app = express();

/*These are middleware to help parse data.*/
app.use(express.json());
app.use(bodyParser.json())
app.use(express.static("public"));



/*This is the initialization of the database where we connect to the database*/
mongoose.connect("mongodb+srv://J-Lee12:Somi-1210@cluster0.qcn1j.mongodb.net/ReactKeeperApp?retryWrites=true&w=majority\n" +
    " Copy", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected')
});


/*These are the routes accesses, they are linked to the folders with the routes*/
app.use('/api', require('./routes/noteRoutes'))

/*The endpoint listening for any requests.*/
app.listen(process.env.PORT || 8000, () =>
  console.log('KeeperApi listening on port 8000!'),
);



