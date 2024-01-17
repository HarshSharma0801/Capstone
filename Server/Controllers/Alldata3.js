import express from 'express' 
import { db } from '../server.js';

const Alldata3 = express();

Alldata3.get('/main3' , async(req,res)=>{


    let data ;
    const Collection = db.collection("main")
    const {property , main , country2 , country1} = req.query;

    try {
   
        if(property==="radar"){
           const data1 = await Collection.find({country:country1}).toArray();
           const data2 = await Collection.find({country:country2}).toArray();
           data = {c1:data1 , c2: data2}

        }
    
    
       
            res.status(200).json({valid:true , data1:data.c1 , data2:data.c2} )

        
        
    } catch (error) {
        console.log(error)
    }

})


export default Alldata3