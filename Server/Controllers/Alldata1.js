import express from 'express' 
import { db } from '../server.js';

const Alldata1 = express();

Alldata1.get('/main1' , async(req,res)=>{


    let data ;
    const Collection = db.collection("main")
    const {property , main } = req.query;

    try {
      
      
        if(property==="region"){
            
            data = await Collection.find({region:main}).toArray();
        }
     
        if(property==="pestle"){
            data = await Collection.find({pestle:main}).toArray();
        }
       
       
            res.status(200).json({valid:true , data:data} )

        
       
        
    } catch (error) {
        console.log(error)
    }

})


export default Alldata1