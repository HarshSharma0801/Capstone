import { useState } from "react";
import { useNavigate } from "react-router";



const SideBar = () => {
  const navigate  = useNavigate();
const [Selected , setSelected] = useState("analytics");
  const All = ["analytics" , "charts" , "graphs" , "filters"];

  const handleSelect = (name)=>{
    console.log(name)
      if(name==="analytics"){
        navigate('/')
      }  
      else{
        navigate(`/${name}`)
      }
    All.forEach(prop=>{
      if(prop===name){
        setSelected(name);
      }
      
    })

  }

 

  return (
    <>
      <div className="h-screen flex-[0.15] p-5 border-r-[1px] border-r-gray-300">
        <div className="flex gap-2">
          <div className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
              />
            </svg>
          </div>
          <div className="text-2xl text-gray-700">Capstone</div>
        </div>
        <div  className="py-6 px-0">
          <div  className="flex flex-col gap-6 ">
          <div onClick={()=>{handleSelect("analytics")}} className={Selected==="analytics" ? "cursor-pointer flex gap-2 bg-primary text-white p-4 rounded-lg" : "cursor-pointer flex gap-2 hover:bg-primary hover:text-white p-4 rounded-lg"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                />
              </svg>
              Analytics
            </div>
            <div onClick={()=>{handleSelect("charts")}} className={Selected==="charts" ? "cursor-pointer flex gap-2 bg-primary text-white p-4 rounded-lg" : "cursor-pointer flex gap-2 hover:bg-primary hover:text-white p-4 rounded-lg"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                />
              </svg>
              Charts
            </div>

            <div onClick={()=>{handleSelect("graphs")}} className={Selected==="graphs" ? "cursor-pointer flex gap-2 bg-primary text-white p-4 rounded-lg" : "cursor-pointer flex gap-2 hover:bg-primary hover:text-white p-4 rounded-lg"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z"
                />
              </svg>
              Graphs
            </div>
            <div className="text-sm">
              Please refresh again and again  in case of no data , its maybe because of Deployment tier
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
