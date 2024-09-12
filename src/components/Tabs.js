import { useState } from "react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { BiDoughnutChart } from "react-icons/bi";
import { GiRadarSweep } from "react-icons/gi";
import { PiChartPolarDuotone } from "react-icons/pi";
import ChartDisplay from "./ChartDisplay";
import MUIChart from "./charts/MuiChart";
import AGChart from "./charts/AgCharts";
import RechartComponent from "./charts/RechartComponent";
import D3Chart from "./charts/D3Chart";

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
          <button
            onClick={() => setChartType("pie")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "pie"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <FaChartPie size={24} />
            <span>Pie Chart</span>
          </button>
          <button
            onClick={() => setChartType("line")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "line"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <FaChartLine size={24} />
            <span>Line Chart</span>
          </button>
          <button
            onClick={() => setChartType("doughnut")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "doughnut"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <BiDoughnutChart size={24} />
            <span>Doughnut Chart</span>
          </button>
          <button
            onClick={() => setChartType("polarArea")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "polarArea"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <PiChartPolarDuotone size={24} />
            <span>Polar Area</span>
          </button>
          <button
            onClick={() => setChartType("radar")}
            className={`flex flex-col items-center p-4 min-w-max ${
              chartType === "radar"
                ? "text-blue-600 border-b-4 border-blue-500"
                : "text-gray-600"
            }`}
          >
            <GiRadarSweep size={24} />
            <span>Radar</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 overflow-auto ">
        {data ? (
          <>
            <ChartDisplay data={data} chartType={chartType} />
            <MUIChart data={data} chartType={chartType} />
            <AGChart data={data} chartType={chartType} />
          </>
        ) : (
          <p className="text-center text-white">No data uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default TabbedCharts;
