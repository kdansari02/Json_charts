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
