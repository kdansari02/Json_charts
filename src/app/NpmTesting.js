import React from "react";
import Charts from "react-charts-package";

const chartData = {
  labels: ["2024", "2025", "2026"],
  datasets: [
    {
      label: "Sales",
      data: [200, 400, 300],
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    }
  ]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    }
  }
};

const NpmTesting = () => {
  return (
    <div>
      <h1>Sales Chart</h1>
      <Charts 
        type="line" 
        data={chartData} 
        options={options} 
        customClass=""
        
      />
    </div>
  );
};

export default NpmTesting;
