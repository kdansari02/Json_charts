import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

// Provided JSON data
const chartData = {
  type: "bar",
  data: {
    labels: [
      "Sustainability shift",
      "Service shift",
      "Customer-centric",
      "Digital shift",
      "Purpose shift"
    ],
    datasets: [
      {
        label: "Level today",
        data: [4.44, 5.60, 6.04, 5.99, 4.85],
        backgroundColor: "rgba(186, 104, 200, 0.7)", 
        borderColor: "rgba(186, 104, 200, 1)", 
        borderWidth: 1
      },
      {
        label: "Desired level",
        data: [7.79, 7.95, 8.98, 8.14, 7.36],
        backgroundColor: "rgba(93, 64, 255, 0.7)", 
        borderColor: "rgba(93, 64, 255, 1)", 
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 10
      }
    },
    plugins: {
      tooltip: {
        enabled: true
      },
      annotation: {
        annotations: [
          {
            type: "label",
            xValue: "Sustainability shift",
            yValue: 7,
            content: "43%",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: true
          },
          {
            type: "label",
            xValue: "Service shift",
            yValue: 7,
            content: "30%",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: true
          },
          {
            type: "label",
            xValue: "Customer-centric",
            yValue: 7,
            content: "33%",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: true
          },
          {
            type: "label",
            xValue: "Digital shift",
            yValue: 7,
            content: "26%",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: true
          },
          {
            type: "label",
            xValue: "Purpose shift",
            yValue: 7,
            content: "34%",
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: true
          }
        ]
      }
    }
  }
};

const Example = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    // Destroy the previous chart instance before creating a new one
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (chartData) {
      const ctx = chartRef.current.getContext("2d");

      // Create new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }

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

export default Example;
