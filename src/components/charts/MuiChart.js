import React from "react";
import {
  BarChart,
  LineChart,
  PieChart,
  DoughnutChart,
  RadarChart,
  PolarAreaChart,
} from "@mui/x-charts";

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
        scaleType: "band",
      },
    ],
    yAxis: [{ scaleType: "linear" }],
  };

  const formatData = (data) => {
    return data.map((item) => {
      return {
        name: item.name,
        value: item.value,
      };
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      Mui Chart
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
      {chartType === "pie" && data.data && (
        <PieChart
          series={[
            {
              data: formatData(data.data),
            },
          ]}
          width={400}
          height={200}
        />
      )}
    </div>
  );
};

export default MUIChart;
