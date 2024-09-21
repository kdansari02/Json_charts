import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ProgressBarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const chartData = {
    type: "bar",
    data: {
      labels: ["Fragmented", "Volatile", "Global", "New players", "Early adopters"],
      datasets: [
        {
          label: "Risk Level",
          data: [6.6, 6.3, 5.7, 5, 5.3],
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return;
            }

            // Create gradient fill for the bars
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, '#3B0D7C'); // Dark purple at the bottom
            gradient.addColorStop(1, '#D1B3F0'); // Light purple at the top

            return gradient;
          },
          borderRadius: 10, // Rounded corners for the bars
          borderSkipped: false, // Ensures no sharp corners
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: "x", // This makes the bars vertical
      scales: {
        y: {
          beginAtZero: true,
          min: 1,
          max: 10,
          ticks: {
            stepSize: 1,
            callback: function (value) {
              return value; // Display numeric values without suffix
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide the legend
        },
        tooltip: {
          enabled: true, // Enable tooltips on hover
        },
        datalabels: {
          anchor: "end",
          align: "end",
          color: "#fff", // White color for data labels on top of bars
          font: {
            weight: "bold",
          },
          formatter: function (value) {
            return value; // Display value at the top of each bar
          },
        },
      },
    },
  };

  useEffect(() => {
    // Clean up previous chart instances
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
    <div className="bg-[#E3D1F7] p-6 rounded-lg shadow-lg border border-gray-200">
      <canvas ref={chartRef} />
    </div>
  );
};

export default ProgressBarChart;
