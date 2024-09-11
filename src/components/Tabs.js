import { useState } from "react";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { Bar, Pie, Line } from "react-chartjs-2";



const TabbedCharts = () => {
  const [activeTab, setActiveTab] = useState("bar");

//   const renderChart = () => {
//     switch (activeTab) {
//       case "bar":
//         return <Bar data={data} />;
//       case "pie":
//         return <Pie data={data} />;
//       case "line":
//         return <Line data={data} />;
//       default:
//         return <Bar data={data} />;
//     }
//   };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setActiveTab("bar")}
          className={`flex flex-col items-center p-4 ${
            activeTab === "bar"
              ? "text-blue-600 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <FaChartBar size={24} />
          <span>Bar Chart</span>
        </button>
        <button
          onClick={() => setActiveTab("pie")}
          className={`flex flex-col items-center p-4 ${
            activeTab === "pie"
              ? "text-blue-600 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <FaChartPie size={24} />
          <span>Pie Chart</span>
        </button>
        <button
          onClick={() => setActiveTab("line")}
          className={`flex flex-col items-center p-4 ${
            activeTab === "line"
              ? "text-blue-600 border-b-4 border-blue-500"
              : "text-gray-600"
          }`}
        >
          <FaChartLine size={24} />
          <span>Line Chart</span>
        </button>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg">
        {renderChart()}
      </div>
    </div>
  );
};

export default TabbedCharts;
