import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ChartDisplay = ({ data, chartType }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (data) {
      const ctx = chartRef.current.getContext("2d");

      // Create gradient for the dataset fill color
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(255, 99, 132, 0.8)");
      gradient.addColorStop(0.5, "rgba(54, 162, 235, 0.8)");
      gradient.addColorStop(1, "rgba(75, 192, 192, 0.8)");

      const chartData = {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
            backgroundColor: gradient, // Apply gradient to the dataset
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 2,
            width: 10, // Controls the width of the bars
            height: 100, // Controls the height of the bars
            borderRadius: 20, // Rounded corners for the bars
            hoverBackgroundColor: gradient, // Optional: Add gradient on hover
          },
        ],
      };

      chartInstanceRef.current = new Chart(ctx, {
        type: chartType || "bar",
        data: chartData,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
              cornerRadius: 10, // Rounded corners for tooltips (optional)
            },
          },
          barThickness: 20, // Controls the thickness of the bars
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, chartType]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      Chart.js
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartDisplay;
