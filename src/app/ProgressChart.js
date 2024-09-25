// ProgressChart

import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

// Data and Labels
const dataAxis = ["Consolidated", "Stable", "Local", "Industry", "Laggers"];
const topAxisLabels = [
  "Fragmented",
  "Volatile",
  "Global",
  "New players",
  "Early adopters",
];
const bottomAxisLabels = [
  "Market maturity",
  "Market situation",
  "Competitors",
  "Competition",
  "Customers",
];
const dataValues = [6.6, 6.3, 5.7, 5, 5.3];

// Helper function to determine the risk level
const getRiskLevel = (value) => {
  if (value >= 7) return "High Risk";
  if (value >= 5) return "Medium Risk";
  return "Low Risk";
};

// Helper function to generate gradient colors based on risk level
const getGradientColor = (value) => {
  if (value >= 7) {
    return createGradient("#5e37ab", "#bb94e7");
  } else if (value >= 5) {
    return createGradient("#895cb3", "#d1b3f1");
  }
  return createGradient("#b89fd9", "#e8d4ff");
};

// Function to create linear gradients
const createGradient = (colorStart, colorEnd) => ({
  type: "linear",
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [
    { offset: 0, color: colorStart },
    { offset: 1, color: colorEnd },
  ],
});

const ProgressChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);
    chartInstance.setOption(getChartOptions());

    const handleResize = () => chartInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      chartInstance.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#d7aefd] mx-auto py-6">
      <div className="w-full overflow-x-auto">
        <div
          className="min-w-[800px] md:min-w-full h-[75vh] m-auto"
          ref={chartRef}
        ></div>
      </div>
    </div>
  );
};

// Function to generate chart options
const getChartOptions = () => ({
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: (params) => {
      const value = params[0].value;
      return `Value: ${value}<br/>Risk Level: ${getRiskLevel(value)}`;
    },
  },
  xAxis: getXAxisOptions(),
  yAxis: getYAxisOptions(),
  series: getSeriesOptions(),
});

// Helper function for X-Axis options
const getXAxisOptions = () => [
  {
    data: dataAxis,
    axisLabel: {
      outside: true,
      color: "#3a0c78",
      fontSize: "12px",
      fontFamily: "Poppins",
      fontWeight: "500",
    },
    axisTick: { show: false },
    axisLine: { show: false },
  },
  {
    data: topAxisLabels,
    position: "top",
    axisLabel: {
      color: "#3a0c78",
      fontSize: "12px",
      fontWeight: "500",
      fontFamily: "Poppins",
      margin: 10,
    },
    axisTick: { show: false },
    axisLine: { show: false },
  },
  {
    data: bottomAxisLabels,
    position: "bottom",
    axisLabel: {
      fontFamily: "Poppins",
      color: "#3a0c78",
      fontSize: "14px",
      fontWeight: "600",
      margin: 40,
    },
    axisTick: { show: false },
    axisLine: { show: false },
  },
];

// Helper function for Y-Axis options
const getYAxisOptions = () => [
  {
    min: 0,
    max: 10,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: "#3a0c78" },
    splitLine: { lineStyle: { color: "#00000019" } },
  },
  {
    type: "value",
    position: "right",
    min: 1,
    max: 10,
    axisLabel: {
      show: true,
      formatter: (value) => getYAxisLabel(value),
      rich: {
        riskLabel: {
          color: "#3a0c78",
          fontWeight: "bold",
          fontSize: 12,
          fontFamily: "Poppins",
        },
        innovationLabel: {
          color: "#7a49ab",
          fontSize: 10,
          fontFamily: "Poppins",
        },
      },
    },
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
  },
];

// Helper function to generate Y-Axis labels
const getYAxisLabel = (value) => {
  if (value === 10)
    return `{riskLabel|High Risk}\n{innovationLabel|Strong need for \n innovation}`;
  if (value === 5)
    return `{riskLabel|Medium Risk}\n{innovationLabel|Need for \n innovation}`;
  if (value === 1)
    return `{riskLabel|Low Risk}\n{innovationLabel|Low need for \n innovation}`;
};

// Helper function for series options
const getSeriesOptions = () => [
  {
    type: "bar",
    showBackground: true,
    backgroundStyle: { color: "#bb94e7", borderRadius: [50, 50, 50, 50] },
    itemStyle: {
      color: (params) => getGradientColor(params.value),
      borderRadius: [50, 50, 50, 50],
      barWidth: 10,
    },
    barCategoryGap: "80%",
    data: dataValues,
    label: {
      show: true,
      position: "top",
      color: "#3a0c78",
      fontWeight: "bold",
      fontFamily: "Poppins",
      distance: 40,
    },
    emphasis: { itemStyle: { color: "#5e37ab" } },
    animation: true,
    animationDuration: 5000,
    animationEasing: "elasticOut",
  },
];

export default ProgressChart;
