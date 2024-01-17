import React from "react"
import ReactFC from 'react-fusioncharts'
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import Chart from 'fusioncharts/fusioncharts.charts'
import { Select } from "antd";
const { Option } = Select;
ReactFC.fcRoot(FusionCharts , FusionTheme , Chart)
import axios from "axios";
import { useState , useEffect } from "react";

const AreaGraph = ()=>{
    
    const [MainData , setMainData] = useState([]);
    const [Selected , setSelected] = useState("Economic")
  
    const getdata = async() => {
      try {
          await  axios.get('/main' , {
            params:{
              main:Selected,
              property:"pestle"
  
            }
          }).then(res=>{
              if(res.data.valid){
                setMainData(res.data.data)
                  console.log(res.data.data.length)
              }
          })
      } catch (error) {
        console.log(error);
      }
    };
  useEffect(()=>{
      getdata();
  },[Selected])

    const groupedData =MainData && MainData.reduce((accumulator, currentItem) => {
        const { source, relevance } = currentItem;
        if (!accumulator[source]) {
          accumulator[source] = { relevanceSum: Number(relevance), count: 1 };
        } else {
          accumulator[source].relevanceSum += Number(relevance);
          accumulator[source].count += 1;
        }
        return accumulator;
      }, {});
    
      const sources =groupedData && Object.keys(groupedData);
      const LabelSources = groupedData && sources.map(src=>{
        return {"label" : src}
      })
      const averagerelevanceValues = groupedData && sources.map(
        (source) =>{
         return {"value" :  parseInt(groupedData[source].relevanceSum / groupedData[source].count)}
        } 
      );

      console.log(LabelSources && LabelSources);
      console.log( averagerelevanceValues && averagerelevanceValues)

    const ChartConfig = {
        type: 'scrollarea2d',
        dataFormat: 'json',
        width: '1000',
        height: '600',
        dataSource: {
          "chart": {
            "theme": "fusion",
            "caption": "",
            "subCaption": "",
            "xAxisname": "Source",
            "pYAxisName": "Amount",
            "labelDisplay": "AUTO",
            "sYAxisName": "Employees",
            "numberPrefix": "",
            "numVisiblePlot": "8",
            "flatScrollBars": "1",
            "scrollheight": "10"
          },
          "categories": [{
            "category":LabelSources.length>0 && LabelSources
          }],
          "dataset": [{
            "data": averagerelevanceValues && LabelSources.length>0 && averagerelevanceValues
          }]
        }
      }


const handlePestleChange = (name , value)=>{
    setSelected(value.value);
}

const PestlesArr = [
    "Industries",
"Environmental",
"Economic",
"Political",
"Technological",
"Organization",
"Healthcare",
"Social",
"Lifestyles"
]


return (
    <>
          <div className="flex flex-col gap-4 border border-gray-200 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
            <h1 className="font-bold text-gray-500 text-xl">Relevance</h1>

            </div>
            <div className="flex gap-2">
            <h1 className="font-bold text-gray-800">Pestle</h1> -{" "}
            <Select
              className="w-[200px]"
              onChange={handlePestleChange}
              value={Selected}
            >
              {PestlesArr && PestlesArr.map(pestle=>{
                return <Option value={pestle}>{pestle}</Option>
              })}
            </Select>
            </div>
            
          </div>
    <div className="w-[80%]">
        <ReactFC {...ChartConfig}/>
    </div>
    </div>
      </div>

    </>
)

}


export default AreaGraph