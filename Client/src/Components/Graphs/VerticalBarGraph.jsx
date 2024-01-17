import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Colors,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;
const VerticalBarGraph = () => {
  ChartJS.register(
    BarElement,
    CategoryScale,
    Colors,
    LinearScale,
    Tooltip,
    Legend
  );

  const [MainData, setMainData] = useState([]);
  const [Selected, setSelected] = useState(2025);

  const getdata = async () => {
    try {
      await axios
        .get("/main2", {
          params: {
            main: Selected,
            property: "end_year",
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
      const { pestle, likelihood } = currentItem;
      if (!accumulator[pestle]) {
        accumulator[pestle] = { likelihoodSum: Number(likelihood), count: 1 };
      } else {
        accumulator[pestle].likelihoodSum += Number(likelihood);
        accumulator[pestle].count += 1;
      }
      return accumulator;
    }, {});

  console.log(groupedData && groupedData);
  const pestles = groupedData && Object.keys(groupedData);
  const averagelikelihoodValues =
    groupedData &&
    pestles.map((pestle) =>
      parseInt(groupedData[pestle].likelihoodSum / groupedData[pestle].count)
    );

  const barGraphColors = [
    '#f39c12', // Sunflower Yellow

    '#3498db', // Royal Blue
    '#2ecc71', // Emerald Green
    '#e74c3c', // Indian Red
    '#9b59b6', // Amethyst Purple
    '#e67e22', // Carrot Orange
    '#1abc9c', // Turquoise
    '#2c3e50', // Midnight Blue
    '#27ae60', // Nephritis Green
    '#e84393'  // Lovely Pink
  ];
  
  const data = {
    labels: pestles && pestles,
    datasets: [
      {
        label: "likelihood",
        data: averagelikelihoodValues && averagelikelihoodValues,
        backgroundColor: barGraphColors
      },
    ],
  };
  const options = {
    indexAxis: "y",
    plugins: {
        legend: {
          display: false
        }
      }
    
    
  };

  const handleYearChange = (name, value) => {
    setSelected(value.value);
  };

  const YearArr = [
    <Option>2016</Option>,
    2017,2018,2019, 2020,2021,2022,2024,2025,2026,2027,2028, 2030,
    2034,2035,2040,2041, 2046,2050, 2051, 2055,2060,2126,2200
  ];

  return (
    <>
      <div className="flex flex-col gap-4 border border-gray-200 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4">
            <div>
            <h1 className="font-bold text-gray-500 text-xl">Likelihood</h1>

            </div>
            <div className="flex gap-2">
            <h1 className="font-bold text-gray-800">End Year</h1> -{" "}
            <Select
              className="w-[200px]"
              onChange={handleYearChange}
              value={Selected}
            >
              {YearArr && YearArr.map(year=>{
                return <Option value={year}>{year}</Option>
              })}
            </Select>
            </div>
            
          </div>
          <div className="w-[90%]">
            <Bar data={pestles && data} options={options} />
          </div>
        </div>
      </div>

    </>
  );
};

export default VerticalBarGraph;
