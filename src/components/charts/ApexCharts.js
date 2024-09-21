// "use client";

// import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";

// // Normalize chart type for ApexCharts
// const normalizeChartType = (type) => {
//   const normalizedTypes = {
//     doughnut: "donut",
//     donut: "donut",
//     pie: "pie",
//     radar: "radar",
//     polarArea: "radialBar", 
//     line: "line",
//     bar: "bar",
//     area: "area",
//   };
//   return normalizedTypes[type] || "bar"; 
// };

// const ApexCharts = ({ data, chartType }) => {
//   const [chartOptions, setChartOptions] = useState({
//     chart: {
//       id: "dynamic-chart",
//     },
//     xaxis: {
//       categories: [], 
//     },
//   });

//   const [chartSeries, setChartSeries] = useState([
//     {
//       name: "Series-1",
//       data: [], 
//     },
//   ]);

//   const normalizedChartType = normalizeChartType(chartType);

//   useEffect(() => {
//     if (data && chartType) {
//       setChartOptions((prev) => ({
//         ...prev,
//         xaxis: { categories: data.labels }, 
//       }));

//       setChartSeries([{ name: data.label, data: data.data }]); 
//     }
//   }, [data, chartType]);

//   return (
//     <div className="app">
//       <h2 className="text-center my-4">ApexCharts </h2>

//       <div className="chart-display my-4 text-center">
//         {data ? (
//           <Chart
//             options={chartOptions}
//             series={chartSeries}
//             type={normalizedChartType} 
//             width="500"
//           />
//         ) : (
//           <p>No data provided yet. Please pass valid data.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApexCharts;
