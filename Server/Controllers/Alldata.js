import express from 'express' 
import { db } from '../server.js';

const Alldata = express();

Alldata.get('/main' , async(req,res)=>{


    let data ;
    const Collection = db.collection("main")
    const {property , main , country2 , country1} = req.query;

    try {
        if(property==="sector"){
            data = await Collection.find({sector:main}).toArray();
        }
        if(property==="end_year"){
            
            data = await Collection.find({end_year:Number(main)}).toArray();
        }
        if(property==="region"){
            
            data = await Collection.find({region:main}).toArray();
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
        if(property==="pestle"){
            data = await Collection.find({pestle:main}).toArray();
        }
        if(property==="topic"){
            data = await Collection.find({topic:main}).toArray();
        }
        if(property==="radar"){
           const data1 = await Collection.find({country:country1}).toArray();
           const data2 = await Collection.find({country:country2}).toArray();
           data = {c1:data1 , c2: data2}

        }
        if(main==="all"){
           
             data = await Collection.find({}).toArray();
              console.log("done")
        }
        if(property !== "radar"){
            res.status(200).json({valid:true , data:data} )

        }
        else{
            res.status(200).json({valid:true , data1:data.c1 , data2:data.c2} )

        }
        
    } catch (error) {
        console.log(error)
    }

})


export default Alldata