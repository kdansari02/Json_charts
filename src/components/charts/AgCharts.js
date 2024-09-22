import React from "react";
import { AgCharts } from "ag-charts-react";

const normalizeChartType = (type) => {
  const normalizedTypes = {
    doughnut: "donut",
    donut: "donut",
    pie: "pie",
    radar: "radar-area",
    polarArea: "radar-line",
    line: "line",
    bar: "bar",
  };
  return normalizedTypes[type] || "bar";
};

const AGChart = ({ data, chartType }) => {
  const normalizedChartType = normalizeChartType(chartType);
  console.log("normalizedChartType", normalizedChartType);
  const transformedData = data.labels.map((label, index) => ({
    label: label,
    value: data.data[index],
  }));

  const options = {
    title: {
      text: data.label || "Ag Charts",
    },
    data: transformedData,
    series: [
      normalizedChartType === "pie" || normalizedChartType === "donut"
        ? {
            type: normalizedChartType,
            angleKey: "value",
            calloutLabelKey: "label",
            innerRadiusRatio: normalizedChartType === "donut" ? 0.7 : 0,
          }
        : normalizedChartType === "radar-area" ||
          normalizedChartType === "radar-line"
        ? {
            type: normalizedChartType,
            angleKey: "label",
            radiusKey: "value",
            radiusName: "Value",
          }
        : normalizedChartType === "line"
        ? {
            type: "line",
            xKey: "label",
            yKey: "value",
            marker: { enabled: true },
          }
        : {
            type: normalizedChartType,
            xKey: "label",
            yKey: "value",
            stacked: normalizedChartType === "bar",
          },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      Ag Charts
      <AgCharts options={options} />
    </div>
  );
};

export default AGChart;
