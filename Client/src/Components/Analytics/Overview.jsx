import React from 'react'
import {VectorMap} from '@react-jvectormap/core'
import {worldMill} from '@react-jvectormap/world'
import { useState, useEffect } from "react";
import axios from 'axios'
const Overview = ()=>{


    const fetchedCountries = {
        "DZ": 1,
        "AO": 2,
        "AR": 1,
        "AU": 4,
        "AT": 1,
        "AZ": 1,
        "BZ": 1,
        "BR": 5,
        "BF": 1,
        "CA": 6,
        "CN": 24,
        "CO": 2,
        "CY": 1,
        "DK": 1,
        "EG": 6,
        "EE": 1,
        "ET": 1,
        "GA": 1,
        "DE": 3,
        "GH": 2,
        "GR": 1,
        "HU": 1,
        "IN": 19,
        "ID": 9,
        "IR": 19,
        "IQ": 11,
        "JP": 7,
        "JO": 2,
        "KZ": 1,
        "KW": 1,
        "LB": 3,
        "LR": 1,
        "LY": 10,
        "MY": 2,
        "ML": 1,
        "MX": 3,
        "MA": 1,
        "NE": 2,
        "NG": 6,
        "NO": 1,
        "OM": 2,
        "PK": 1,
        "PL": 1,
        "QA": 1,
        "RU": 25,
        "SA": 18,
        "ZA": 3,
        "SS": 1,
        "ES": 2,
        "SY": 2,
        "TR": 1,
        "UA": 2,
        "AE": 1,
        "GB": 6,
        "US": 112,
        "VE": 6
      }
      
const ColorScale = ['#FFA559' , '#FF5F00']

return (
    <>
    <div className='flex flex-col gap-4 py-5'>
    <div className='flex justify-between pr-5'>
        <h1 className='text-xl font-bold'>Reports Overview WorldWide</h1>
        <h1 className='text-sm font-bold'>hover to see</h1>

    </div>
    <div className='rounded-[18px] overflow-hidden'>
    <VectorMap
     map={worldMill}
      backgroundColor='#2C061F'
       borderRadius='16' 
       style={{width:'100%' , height:'700px' , borderRadius:'18px'}}
       series={
        {
            regions:[
               {
                scale:ColorScale,
                values:fetchedCountries,
                min:0,
                max:150
               }
            ]
        }
       }
       onRegionTipShow={function reginalTip(event, label, code) {
        return label.html(`
                <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                  <p>
                  <b>
                  ${label.html()}
                  </b>
                  </p>
                  <p>
                  ${fetchedCountries[code]} ${fetchedCountries[code] > 1 ? 'Reports' : 'Report'}
                  </p>
                  </div>`);
      }}

       /> 
    </div>

    </div>
  
    </>

)

}


export default Overview