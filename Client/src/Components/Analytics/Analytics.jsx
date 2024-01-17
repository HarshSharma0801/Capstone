import figure from "./figure.png";
import Calculate from "../Calculate";
import NewsBoard from "./NewsBoard";
import Overview from "./Overview";
const Analytics = () => {
  return (
    <>
      <div className="flex-[0.85] h-screen flex flex-col gap-3 overflow-y-auto p-3">
        {" "}
        <div className="flex gap-2">
          <div className="flex justify-between gap-3 flex-[0.5] pl-7 pr-7 pt-7 pb-5 bg-primary rounded-[18px]">
            <div className="text-white">
              <h1 className="font-bold text-xl">Website Analyics</h1>
              <p>100% secured data</p>
              <div className="py-3">
                <h1 className="font-bold">Sector</h1>
                <div className="flex flex-col gap-3 pt-3">
                  <div className="flex gap-8">
                    <div className="flex gap-2">
                      <div className="w-[50px] h-[30px] flex justify-center text-center font-bolder rounded-full bg-white text-primary">
                        <div>525</div>
                      </div>{" "}
                      <h1 className="font-bold">Energy</h1>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-[50px] h-[30px] flex justify-center text-center font-bolder rounded-full bg-white text-primary">
                        <div>14</div>
                      </div>{" "}
                      <h1 className="font-bold">Environment</h1>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex gap-2">
                      <div className="w-[50px] h-[30px] flex justify-center text-center font-bolder rounded-full bg-white text-primary">
                        <div>39</div>
                      </div>{" "}
                      <h1 className="font-bold">Finance</h1>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-[50px] h-[30px] flex justify-center text-center font-bolder rounded-full bg-white text-primary">
                        <div>19</div>
                      </div>{" "}
                      <h1 className="font-bold">Aerospace</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img className="w-[200px] h-[200px]" src={figure} alt="figure" />
            </div>
          </div>


          <div className="flex flex-[0.5]  bg-main rounded-[18px]">
          <NewsBoard/>

          </div>
        </div>

        <div>
          <Overview/>
        </div>
      </div>
    </>
  );
};

export default Analytics;
