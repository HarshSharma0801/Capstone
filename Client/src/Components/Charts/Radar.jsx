import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const RadarChart = () => {
  ChartJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
  );

  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Selected1, setSelected1] = useState("India");
  const [Selected2, setSelected2] = useState("Russia");

  const getdata = async () => {
    try {
      await axios
        .get("/main3", {
          params: {
            main: "",
            property: "radar",
            country1: Selected1,
            country2: Selected2,
          },
        })
        .then((res) => {
          if (res.data.valid) {
            setData1(GetValues(res.data.data1));
            setData2(GetValues(res.data.data2));
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [Selected1, Selected2]);

  const GetValues = (data) => {
    let intensitysum = 0;
    let relevancesum = 0;
    let likelihoodsum = 0;
    let intensityCount = 0;
    let relevanceCount = 0;
    let likelihoodCount = 0;

    for (let i = 0; i < data.length; i++) {
      if (data[i].intensity !== "") {
        intensityCount++;
        intensitysum += Number(data[i].intensity);
      }
      if (data[i].relevance !== "") {
        relevanceCount++;
        relevancesum += Number(data[i].relevance);
      }
      if (data[i].likelihood !== "") {
        likelihoodCount++;
        likelihoodsum += Number(data[i].likelihood);
      }
    }

    const groupedData =
      data &&
      data.reduce((accumulator, currentItem) => {
        const { topic, intensity } = currentItem;
        if (!accumulator[topic]) {
          accumulator[topic] = { intensitySum: Number(intensity), count: 1 };
        } else {
          accumulator[topic].intensitySum += Number(intensity);
          accumulator[topic].count += 1;
        }
        return accumulator;
      }, {});

    const Sectors = Object.keys(groupedData).length;
    console.log(intensitysum, intensityCount);
    return [
      parseInt(Number(intensitysum / intensityCount)) * 2,
      parseInt(Number(relevancesum / relevanceCount)) * 7,
      parseInt(Number(likelihoodsum / likelihoodCount))*7,
      parseInt(Number(Sectors) * 2),
      parseInt(data.length),
    ];
  };

  console.log(Data1 && Data1);
  console.log(Data2 && Data2);

  const data = {
    labels: [
      "Avg Intensity",
      "Avg Relevance",
      "Avg Likelihood",
      "No. of Sectors in Ratio",
      "Reports in Ratio",
    ],
    datasets: [
      {
        label: Selected1,
        data: Data1.length > 0 && Data1,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: Selected2,
        data: Data2.length > 0 && Data2,
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {};

  const handleCountry1Change = (name , value) =>{
    setSelected1(value.value)
  }

  const handleCountry2Change = (name , value) =>{
    setSelected2(value.value)
  }
   const CountryArr = ['United States of America', 'Mexico',  'Nigeria', 'Lebanon', 'Russia', 'Saudi Arabia', 'Angola', 'Egypt', 'South Africa', 'India', 'Ukraine', 'Azerbaijan', 'China', 'Colombia', 'Niger', 'Libya', 'Brazil', 'Mali', 'Indonesia', 'Iraq', 'Iran', 'South Sudan', 'Venezuela', 'Burkina Faso', 'Germany', 'United Kingdom', 'Kuwait', 'Canada', 'Argentina', 'Japan', 'Austria', 'Spain', 'Estonia', 'Hungary', 'Australia', 'Morocco', 'Greece', 'Qatar', 'Oman', 'Liberia', 'Denmark', 'Malaysia', 'Jordan', 'Syria', 'Ethiopia', 'Norway', 'Ghana', 'Kazakhstan', 'Pakistan', 'Gabon', 'United Arab Emirates', 'Algeria', 'Turkey', 'Cyprus', 'Belize', 'Poland']
  return (
    <>
      <div className="flex flex-col gap-4 border  border-gray-200 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-bold text-gray-500 text-xl">Countries</h1>
            </div>
            <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold  text-gray-800">country 1</h1> 
              <Select
                className="w-[200px]"
                onChange={handleCountry1Change}
                value={Selected1}
              >
                {CountryArr &&
                  CountryArr.map((country) => {
                    return <Option value={country}>{country}</Option>;
                  })}
              </Select>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-bold  text-gray-800">country 2</h1> 
              <Select
                className="w-[200px]"
                onChange={handleCountry2Change}
                value={Selected2}
              >
              {CountryArr &&
                  CountryArr.map((country) => {
                    return <Option value={country}>{country}</Option>;
                  })}
              </Select>
            </div>
            </div>
          
          </div>
          <div>
            <Radar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RadarChart;
