import React from 'react';
import { AgCharts } from "ag-charts-react";


const AGChart = ({ data, chartType }) => {
  const options = {
    title: {
      text: "Ag Charts",
    },
    // subtitle: {
    //   text: "Chart Subtitle",
    // },
    data: data.data,
    series: [
      {
        type: chartType || 'bar', 
        xKey: data.label,            
        yKey: data.labels,            
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <AgCharts options={options} />
    </div>
  );
};

export default AGChart;
