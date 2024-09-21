import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

// JSON chart data
const chartData = {
  type: "line",
  data: {
    labels: ["2024", "2025", "2026"],
    datasets: [
      {
        label: "NO",
        data: [270, 320, 350],
        borderColor: "rgba(30, 144, 255, 1)", // Sky Blue Line
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: "PL",
        data: [100, 150],
        borderColor: "rgba(50, 205, 50, 1)", // Green Line
        backgroundColor: "rgba(50, 205, 50, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: "DK",
        data: [60, 90, 150],
        borderColor: "rgba(255, 215, 0, 1)", // Yellow Line
        backgroundColor: "rgba(255, 215, 0, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: "DE",
        data: [150, 250, 400],
        borderColor: "rgba(255, 69, 0, 1)", // Red Line
        backgroundColor: "rgba(255, 69, 0, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: "Opt",
        data: [10, 20, 30],
        borderColor: "rgba(255, 105, 180, 1)", // Pink Line
        backgroundColor: "rgba(255, 105, 180, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: "Hub",
        data: [40, 70, 90],
        borderColor: "rgba(169, 169, 169, 1)", // Grey Line
        backgroundColor: "rgba(169, 169, 169, 0.2)",
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: "right"
      },
      tooltip: {
        enabled: true,
        cornerRadius: 5
      }
    }
  }
};

const LineCharts = () => {
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
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineCharts;
