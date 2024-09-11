import React from 'react';
import { BarChart, LineChart, PieChart, DoughnutChart, RadarChart, PolarAreaChart } from '@mui/x-charts';

const MUIChart = ({ data, chartType }) => {
  const chartData = {
    series: [
      {
        data: data.data,
      },
    ],
    xAxis: [
      {
        data: data.labels,
        scaleType: 'band',
      },
    ],
    yAxis: [{ scaleType: 'linear' }],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      {chartType === "bar" && (
        <BarChart
          series={chartData.series}
          xAxis={chartData.xAxis}
          yAxis={chartData.yAxis}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      {chartType === "line" && (
        <LineChart
          series={chartData.series}
          xAxis={chartData.xAxis}
          yAxis={chartData.yAxis}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      {chartType === "pie" && (
        <PieChart
          series={chartData.series}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      {chartType === "doughnut" && (
        <DoughnutChart
          series={chartData.series}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      {chartType === "radar" && (
        <RadarChart
          series={chartData.series}
          xAxis={chartData.xAxis}
          yAxis={chartData.yAxis}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
      {chartType === "polar" && (
        <PolarAreaChart
          series={chartData.series}
          height={290}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      )}
    </div>
  );
};

export default MUIChart;
