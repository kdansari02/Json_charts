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
            backgroundColor: gradient,
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 2,
            width: 10, 
            height: 100,
            borderRadius: 20, 
            hoverBackgroundColor: gradient, 
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
              cornerRadius: 10, 
            },
          },
          barThickness: 20, 
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
