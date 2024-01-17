import express from 'express' 
import { db } from '../server.js';

const test = express();

test.get('/' , async(req,res)=>{
 

    try {
        
    
            res.status(200).send("hello test")

      

        
        
    } catch (error) {
        console.log(error)
    }

})


export default test