import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

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

const getRiskLevel = (value) => {
  if (value >= 7) return "High Risk";
  if (value >= 5) return "Medium Risk";
  return "Low Risk";
};

const getGradientColor = (value) => {
  if (value >= 7) {
    return createGradient("#6930C3", "#5E60CE");  
  } else if (value >= 5) {
    return createGradient("#7400B8", "#4EA8DE");  
  }
  return createGradient("#4CC9F0", "#90E0EF");   
};

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

const getYAxisLabel = (value) => {
  if (value === 10)
    return `{riskLabel|High Risk}\n{innovationLabel|Strong need for \n innovation}`;
  if (value === 5)
    return `{riskLabel|Medium Risk}\n{innovationLabel|Need for \n innovation}`;
  if (value === 1)
    return `{riskLabel|Low Risk}\n{innovationLabel|Low need for \n innovation}`;
};

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
