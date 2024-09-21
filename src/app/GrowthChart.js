import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

// Chart data to recreate the growth chart
const chartData = {
  type: "line",
  data: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Revenue in MNOK",
        data: [100, 200, 400, 300, 200, 500, 800, 1000],
        borderColor: "#FF007F", // Pink color
        backgroundColor: "rgba(255, 0, 127, 0.2)", // Transparent Pink
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Result in MNOK",
        data: [10, 20, 30, 20, 15, 25, 30, 50],
        borderColor: "#800080", // Purple color
        backgroundColor: "rgba(128, 0, 128, 0.2)", // Transparent Purple
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 250,
          callback: function (value) {
            return value + " MNOK"; // Adding "MNOK" to the Y-axis labels
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // Adjust the position of the legend to the top
        labels: {
          usePointStyle: true,
          padding: 20,
        },
      },
      tooltip: {
        enabled: true,
        cornerRadius: 5,
      },
    },
  },
};

const GrowthChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Clean up any previous chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, chartData);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-[#f5e2d7] p-6 rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold mb-4">GROWTH</h1>
      <canvas ref={chartRef} />
    </div>
  );
};

export default GrowthChart;
