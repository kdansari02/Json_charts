
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
      const chartData = {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.data,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
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
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartDisplay;
