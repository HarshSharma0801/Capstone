import React from "react";
import { Pie } from "react-chartjs-2";
import { Select } from "antd";
const { Option } = Select;
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip,
  Colors,
} from "chart.js";
import axios from "axios";

const PieChart = () => {
  ChartJS.register(ArcElement, Legend, Tooltip, Colors);

  const [MainData, setMainData] = useState([]);
  const [Selected, setSelected] = useState("Eastern Europe");

  const getdata = async () => {
    try {
      await axios
        .get("/main", {
          params: {
            main: Selected,
            property: "region",
          },
        })
        .then((res) => {
          if (res.data.valid) {
            setMainData(res.data.data);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getdata();
  },[Selected])

  const groupedData =
    MainData &&
    MainData.reduce((accumulator, currentItem) => {
      const { sector, relevance } = currentItem;
      if (!accumulator[sector]) {
        accumulator[sector] = { relevanceSum: Number(relevance), count: 1 };
      } else {
        accumulator[sector].relevanceSum += Number(relevance);
        accumulator[sector].count += 1;
      }
      return accumulator;
    }, {});

  console.log(groupedData);
  const sectors = groupedData && Object.keys(groupedData);
  const averagerelevanceValues =
    sectors &&
    sectors.map((sector) =>
      parseInt(groupedData[sector].relevanceSum / groupedData[sector].count)
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
    "#ad494a", // maroon
  ];

  const data = {
    labels: sectors && sectors,
    datasets: [
      {
        label: "Relevance",
        data: averagerelevanceValues.length > 0 && averagerelevanceValues,
        backgroundColor: barGraphColors,
      },
    ],
  };

  const option = {};

  const RegionArr = [
    "Northern America",
    "Central America",
    "World",
    "Western Africa",
    "Western Asia",
    "Eastern Europe",
    "Central Africa",
    "Northern Africa",
    "Southern Africa",
    "Southern Asia",
    "Central Asia",
    "Eastern Asia",
    "South America",
    "South-Eastern Asia",
    "Eastern Africa",
    "Europe",
    "Western Europe",
    "Northern Europe",
    "Southern Europe",
    "Oceania",
    "Africa",
    "Asia",
    "world",
  ];
 
  const handleRegionChange = (name , value)=>{
    setSelected(value.value);
  }

  return (
    <>
      <div className="flex flex-col gap-4 border   border-gray-200 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-gray-500 text-xl">Regions</h1>
            </div>
            <div className="flex gap-2">
              <h1 className="font-bold text-gray-800">region</h1> -{" "}
              <Select
                className="w-[200px]"
                onChange={handleRegionChange}
                value={Selected}
              >
                {RegionArr &&
                  RegionArr.map((reg) => {
                    return <Option value={reg}>{reg}</Option>;
                  })}
              </Select>
            </div>
          </div>
          <div className="w-[100%] flex justify-center">
          <div className="flex justify-center w-[50%]">
            <Pie data={data} options={option} />
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default PieChart;
