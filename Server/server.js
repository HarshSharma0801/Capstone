import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Alldata from './Controllers/Alldata.js'
import Alldata1 from './Controllers/Alldata1.js'
import Alldata2 from './Controllers/Alldata2.js'
import Alldata3 from './Controllers/Alldata3.js'
import test from './Controllers/test.js'
const app = express();

const PORT = process.env.PORT || 3000;

//Some Boiler Plate
app.use(express.json({
  limit: '50mb'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//db
mongoose.connect(process.env.Mongo_ConnectionString);
  
  export const db = mongoose.connection;
  db.on("error", function () {
    console.log("Error Connecting");
  });
  
  
  db.on("open", function () {
    console.log("Successfull Connected to Database ");
  });




//Routes
app.use(test)
app.use(Alldata)
app.use(Alldata1)
app.use(Alldata2)
app.use(Alldata3)


  app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})