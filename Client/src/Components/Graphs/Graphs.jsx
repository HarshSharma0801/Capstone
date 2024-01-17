import LineGraph from "./LineGraph"
import VerticalBarGraph from "./VerticalBarGraph"
import AreaGraph from "./AreaGraph"
const Graphs = ()=>{


    return (
        <>
        <div className="flex-[0.85] flex flex-col gap-3 h-screen overflow-y-auto p-5">
        <div>
         <LineGraph/>
         </div>
        <div>
            <AreaGraph/>
         </div>
       
         <div>
            <VerticalBarGraph/>
         </div>
       
        </div>
        </>
    )

}


export default Graphs