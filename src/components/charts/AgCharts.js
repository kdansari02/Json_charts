import { AgChartsReact } from 'ag-charts-react';


const AGChart = ({ data,chartType}) => {
  
  const options = {
    data: data,
    series: [{ 
    type:chartType || 'bar',
     xKey: 'label',
      yKey: 'value'
     }],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <AgChartsReact options={options} />
    </div>
  );
};

export default AGChart;
