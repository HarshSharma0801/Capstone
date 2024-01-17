import React from "react";
import { Doughnut } from "react-chartjs-2";
import {  Select } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import { Chart as ChartJS , ArcElement , Legend , Tooltip , Colors  } from "chart.js";
import axios from "axios";

const DoughnutChart = () => {
ChartJS.register(ArcElement, Tooltip, Legend , Colors);


const [MainData, setMainData] = useState([]);
const [Selected, setSelected] = useState("production");

const getdata = async () => {
  try {
    await axios
      .get("/main", {
        params: {
          main: Selected,
          property: "topic",
        },
      })
      .then((res) => {
        if (res.data.valid) {
          setMainData(res.data.data);
          console.log(res.data);
        }
      });
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  getdata();
}, [Selected]);

const groupedData =
  MainData &&
  MainData.reduce((accumulator, currentItem) => {
    const { region } = currentItem;
    if (!accumulator[region] && region!=="") {
      accumulator[region] = {  count: 1 };
    } else {
        if(region!==""){
            accumulator[region].count += 1;
        }
    }
    return accumulator;
  }, {});

console.log(groupedData && groupedData);
const regions = groupedData && Object.keys(groupedData);
const NumberOfReports =
  groupedData &&
  regions.map((region) =>
    parseInt(groupedData[region].count)
  );
  const barGraphColors = [
    "#1f77b4", // blue
    "#2ca02c", // green
    "#d62728", // red
    "#9467bd", // purple
    "#F4CE14", // yellow-green
    "#ff7f0e", // orange
    "#e377c2", // pink
    "#7f7f7f", // gray
    "#17becf", // cyan
    "#8c564b", // brown
    "#1a9850", // dark green
    "#fc8d59", // salmon
    "#9e9ac8", // lavender
    "#fdae61", // light orange
    "#ad494a"  // maroon
   

  
  ];
const data = {
    labels: regions && regions,
    datasets: [
      {
        label: "Reports",
        data: NumberOfReports && NumberOfReports,
        backgroundColor: barGraphColors
      },
    ],
  };

  const TopicArr = ['gas', 'oil', 'consumption', 'market', 'gdp', 'war', 'production', 'export', 'battery', '', 'biofuel', 'policy', 'economy', 'strategy', 'robot', 'growth', 'economic', 'energy', 'food', 'administration', 'unemployment', 'trade', 'demand', 'economic growth', 'industry', 'capital', 'worker', 'tension', 'terrorism', 'transport', 'peak oil', 'vehicle', 'tourist', 'artificial intelligence', 'climate', 'power', 'crisis', 'ice', 'population', 'politics', 'business', 'work', 'coal', 'gamification', 'finance', 'interest rate', 'risk', 'inflation', 'asylum', 'resource', 'plastic', 'electricity', 'bank', 'gasoline', 'car', 'money', 'technology', 'aquaculture', 'city', 'investment', 'revenue', 'emission', 'climate change', 'infrastructure', 'government', 'security', 'software', 'building', 'transportation', 'wealth', 'clothing', 'shortage', 'debt', 'agriculture', 'tax', 'carbon', 'brexit', 'workforce', 'change', 'automaker', 'nuclear', '3D', 'water', 'data', 'fossil fuel', 'election', 'greenhouse gas', 'information', 'shale gas', 'factory', 'farm', 'communication', 'storm', 'consumer', 'material', 'Washington', 'pollution', 'fracking']

  const options = {}


  const handleTopicChange = (name , value)=>{
    setSelected(value.value)
  }
  return <>
     <div className="flex flex-col gap-4 border  border-gray-200 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
            <h1 className="font-bold text-gray-500 text-xl">Reports</h1>

            </div>
            <div className="flex gap-2">
            <h1 className="font-bold text-gray-800">Topic</h1> -{" "}
            <Select
              className="w-[200px]"
              onChange={handleTopicChange}
              value={Selected}
            >
              {TopicArr && TopicArr.map(topic=>{
                return <Option value={topic}>{topic}</Option>
              })}
            </Select>
            </div>
            
          </div>
  <div >
  <Doughnut height={600} data={data}  options={options}/>
  </div>
  </div>
      </div>
  </>;
};

export default DoughnutChart;
