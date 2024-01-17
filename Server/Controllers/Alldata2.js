import express from 'express' 
import { db } from '../server.js';

const Alldata2 = express();

Alldata2.get('/main2' , async(req,res)=>{


    let data ;
    const Collection = db.collection("main")
    const {property , main , country2 , country1} = req.query;

    try {
       
        if(property==="end_year"){
            
            data = await Collection.find({end_year:Number(main)}).toArray();
        }
      
      
        if(property==="topic"){
            data = await Collection.find({topic:main}).toArray();
        }
       
            res.status(200).json({valid:true , data:data} )

       
        
    } catch (error) {
        console.log(error)
    }

})


export default Alldata2