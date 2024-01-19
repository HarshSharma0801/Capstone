import { Routes, Route } from "react-router";
import Home from "./Components/Pages/Home";
import Analytics from "./Components/Analytics/Analytics";
import Graphs from "./Components/Graphs/Graphs";
import Charts from "./Components/Charts/Charts";
import Filters from "./Components/Filters/Filters";
import axios from "axios";
function App() {
 
  // axios.defaults.baseURL = "https://capstone-backend-gamma.vercel.app/"
  axios.defaults.baseURL = "https://capstone-backend-wk42.onrender.com"


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Analytics />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/filters" element={<Filters />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
