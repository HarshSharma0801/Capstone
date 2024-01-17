import { Outlet } from "react-router";
import SideBar from "./SideBar";

const Home = ()=>{

    return (
        <>
        <div className="flex">
           <SideBar/>
           <Outlet/>
        </div>
        </>
    )


}

export default Home