import { useState } from "react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { GiRadarSweep } from "react-icons/gi";
import { PiChartPolarDuotone } from "react-icons/pi";
import ChartDisplay from "./ChartDisplay";
import MUIChart from "./charts/MuiChart";
import AGChart from "./charts/AgCharts";
import D3Chart from "./charts/D3Chart";
import ApexCharts from "./charts/ApexCharts";

const TabbedCharts = ({ data }) => {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="mt-8 mb-6">
      <div className="sticky top-20 z-40 bg-white py-2 shadow-md rounded-3xl ">
        <div className="flex justify-center mb-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setChartType("bar")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "bar"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <FaChartBar size={24} />
            <span>Bar Chart</span>
          </button>

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-2 mt-10">
            {data ? (
              <>
                <ChartDisplay chartType={chartType} />
                <MUIChart data={data} chartType={chartType} />
                <AGChart data={data} chartType={chartType} />
                <D3Chart data={data} chartType={chartType} />
                {/* <ApexCharts data={data} chartType={chartType} /> */}
              </>
            ) : (
              <div>
                <p className="text-center text-black"></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabbedCharts;
