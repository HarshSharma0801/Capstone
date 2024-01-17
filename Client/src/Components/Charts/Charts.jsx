import DoughnutChart from "./Doughnut"
import RadarChart from "./Radar"
import PieChart from "./PieChart"
const Charts = ()=>{


    return (
        <>
        <div className="flex-[0.85] flex flex-col gap-3 h-screen overflow-y-auto p-5">
            <div className="flex gap-2 w-screen]">
            <div className="flex-[0.5]">
           <DoughnutChart/>
         </div>
         <div className="flex-[0.5]">
         <RadarChart/>
         </div>
            </div>

            <div>
            <PieChart/>
         </div>
        </div>
        </>
    )

}


export default Charts