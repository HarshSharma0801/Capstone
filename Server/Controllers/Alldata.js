import express from 'express' 
import { db } from '../server.js';

const Alldata = express();

Alldata.get('/main' , async(req,res)=>{


    let data ;
    const Collection = db.collection("main")
    const {property , main } = req.query;

    try {
        if(property==="sector"){
            data = await Collection.find({sector:main}).toArray();
        }
       
        if(property==="news"){
            data = await Collection.find({DocNumber:Number(main)}).toArray();
            if(data.length==0){
            
               data=[{
                "_id": {
                  "$oid": "659afeca3caf8293ae6c0ba7"
                },
                "end_year": "",
                "intensity": 6,
                "sector": "Energy",
                "topic": "oil",
                "insight": "NM oil patch outlook",
                "url": "https://www.abqjournal.com/928238/nm-oil-patch-outlook.html",
                "region": "Asia",
                "start_year": "",
                "impact": "",
                "added": "January, 17 2017 01:51:10",
                "published": "January, 16 2017 00:00:00",
                "country": "Saudi Arabia",
                "relevance": 3,
                "pestle": "Industries",
                "source": "Abq",
                "title": "Oil prices could climb above $60 quite rapidly.",
                "likelihood": 2,
                "DocNumber": 346
              }]
            }

        }
   
    
            res.status(200).json({valid:true , data:data} )

      

        
        
    } catch (error) {
        console.log(error)
    }

})


export default Alldata