const ChartTypeSelector = ({ chartType, setChartType }) => {
  return (
    <div className="flex items-center">
      <label
     
          htmlFor="chartType"
   
            className="mr-3 text-lg font-semibold text-gray-700"
      
      >
        Select Chart Type:
      </label>
      <select
        id="chartType"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="px-4 py-2 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200 transition duration-300 ease-in-out"
      >
        <option value="bar">Bar</option>
        <option value="line">Line</option>
        <option value="pie">Pie</option>
        <option value="doughnut">Doughnut</option>
        <option value="radar">Radar</option>
        <option value="polarArea">Polar Area</option>
      </select>
    </div>
  );
};

export default ChartTypeSelector;






// "use client";

// import { FaChartBar, FaChartLine, FaChartPie, FaChartDoughnut, FaChartRadar, FaChartPolar } from 'react-icons/fa';

// const ChartTypeSelector = ({ chartType, setChartType }) => {
//   return (
//     <div className="w-64 bg-gray-100 p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold text-gray-700 mb-4">Chart Type</h2>
//       <div className="space-y-2">
//         <button
//           onClick={() => setChartType('bar')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'bar' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartBar className="mr-2" />
//           <span>Bar</span>
//         </button>
//         <button
//           onClick={() => setChartType('line')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'line' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartLine className="mr-2" />
//           <span>Line</span>
//         </button>
//         <button
//           onClick={() => setChartType('pie')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'pie' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartPie className="mr-2" />
//           <span>Pie</span>
//         </button>
//         <button
//           onClick={() => setChartType('doughnut')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'doughnut' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartDoughnut className="mr-2" />
//           <span>Doughnut</span>
//         </button>
//         <button
//           onClick={() => setChartType('radar')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'radar' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartRadar className="mr-2" />
//           <span>Radar</span>
//         </button>
//         <button
//           onClick={() => setChartType('polarArea')}
//           className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
//             chartType === 'polarArea' ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-200'
//           }`}
//         >
//           <FaChartPolar className="mr-2" />
//           <span>Polar Area</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChartTypeSelector;
