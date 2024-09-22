import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ChartDisplay = ({ chartType }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const data = {
    type: "bar",
    data: {
      labels: [
        "Sustainability shift",
        "Service shift",
        "Customer-centric",
        "Digital shift",
        "Purpose shift",
      ],
      datasets: [
        {
          label: "Level today",
          data: [3.64, 5.6, 6.04, 5.99, 4.89],
          backgroundColor: "rgba(186, 104, 200, 0.7)",
          borderColor: "rgba(186, 104, 200, 1)",
          borderWidth: 1,
        },
        {
          label: "Desired level",
          data: [7.89, 7.95, 8.98, 8.14, 7.66],
          backgroundColor: "rgba(93, 64, 255, 0.7)",
          borderColor: "rgba(93, 64, 255, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
        },
      },
      plugins: {
        tooltip: {
          enabled: true,
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
              display: true,
            },
            {
              type: "label",
              xValue: "Service shift",
              yValue: 7,
              content: "30%",
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: true,
            },
            {
              type: "label",
              xValue: "Customer-centric",
              yValue: 7,
              content: "33%",
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: true,
            },
            {
              type: "label",
              xValue: "Digital shift",
              yValue: 7,
              content: "26%",
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: true,
            },
            {
              type: "label",
              xValue: "Purpose shift",
              yValue: 7,
              content: "34%",
              borderColor: "black",
              borderWidth: 1,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              display: true,
            },
          ],
        },
      },
    },
  };

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (data) {
      const ctx = chartRef.current.getContext("2d");

      // Custom plugin to draw difference lines, circles, and percentage in rounded rectangle
      const differencePlugin = {
        id: "differencePlugin",
        afterDatasetsDraw(chart) {
          const { ctx, scales } = chart;
          const dataset1 = chart.data.datasets[0].data;
          const dataset2 = chart.data.datasets[1].data;
          const meta1 = chart.getDatasetMeta(0);
          const meta2 = chart.getDatasetMeta(1);

          dataset1.forEach((value, index) => {
            const startY = meta1.data[index].y;
            const endY = meta2.data[index].y;
            const x = meta1.data[index].x + 20;

            // Draw the line between the two bars
            ctx.beginPath();
            ctx.moveTo(x, startY);
            ctx.lineTo(x, endY);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.closePath();

            // Draw black circles at both ends of the line
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(x, startY, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(x, endY, 4, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();

            // Calculate the percentage difference
            const diff = dataset2[index] - dataset1[index];
            const percentage = ((diff / dataset1[index]) * 100).toFixed(0);

            // Set the dimensions of the red box
            const rectWidth = 40;
            const rectHeight = 27;

            // Position the red box to the left of the vertical line
            const rectX = x - rectWidth - 10;
            const rectY = (startY + endY) / 2 - rectHeight / 2;

            // Draw the rounded rectangle (red box)
            ctx.beginPath();
            ctx.moveTo(rectX + 4, rectY);
            ctx.lineTo(rectX + rectWidth - 4, rectY);
            ctx.quadraticCurveTo(
              rectX + rectWidth,
              rectY,
              rectX + rectWidth,
              rectY + 4
            );
            ctx.lineTo(rectX + rectWidth, rectY + rectHeight - 4);
            ctx.quadraticCurveTo(
              rectX + rectWidth,
              rectY + rectHeight,
              rectX + rectWidth - 4,
              rectY + rectHeight
            );
            ctx.lineTo(rectX + 4, rectY + rectHeight);
            ctx.quadraticCurveTo(
              rectX,
              rectY + rectHeight,
              rectX,
              rectY + rectHeight - 4
            );
            ctx.lineTo(rectX, rectY + 4);
            ctx.quadraticCurveTo(rectX, rectY, rectX + 4, rectY);
            ctx.closePath();

            ctx.strokeStyle = "red";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.fill();

            // Draw the percentage text inside the red box, centered
            ctx.fillStyle = "black";
            ctx.font = "14px Arial";
            ctx.fontWeight = "bold";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            ctx.fillText(
              `${percentage}%`,
              rectX + rectWidth / 2,
              rectY + rectHeight / 2
            );
          });
        },
      };

      const dataLabelsPlugin = {
        id: "dataLabels",
        afterDatasetsDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];

              // Set the fill style color based on the dataset index
              ctx.fillStyle = i === 0 ? "black" : "white"; // Black for the first dataset, white for the second
              ctx.textAlign = "center";
              ctx.textBaseline = "bottom";
              ctx.font = "bold 12px Arial";

              // Set the position for text above the bar
              ctx.fillText(data, bar.x, bar.y + 25);
            });
          });
        },
      };

      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Sustainability shift",
            "Service shift",
            "Customer-centric",
            "Digital shift",
            "Purpose shift",
          ],
          datasets: [
            {
              label: "Level today",
              data: [3.5, 5.3, 6.04, 5.99, 4.85],
              backgroundColor: "rgba(225, 197, 241, 1)",
              borderWidth: 1,
            },
            {
              label: "Desired level",
              data: [5.6, 7.95, 8.98, 8.14, 7.76],
              backgroundColor: "rgba(68, 28, 171, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 10,
              ticks: {
                color: "black", // Set y-axis tick color
                stepSize: 2, // Set step size for ticks
                callback: (value) => (value % 2 === 0 ? value : ""), // Show only even ticks
              },
              grid: {
                color: "rgba(0, 0, 0, 0.3)", // Set light color for inner grid lines
                lineWidth: 0.5, // Set grid lines width
                drawOnChartArea: true, // Draw grid lines on chart area
              },
              border: {
                color: "black", // Set border color
                width: 1, // Set border width to make it bold
              },
            },
            x: {
              grid: {
                color: "rgba(0, 0, 0, 0.1)", // Set light color for x-axis grid lines
                lineWidth: 0.5, // Set grid lines width
                drawOnChartArea: true, // Draw grid lines on chart area
              },
              ticks: {
                color: "black", // Set x-axis tick color
                font: {
                  weight: "bold", // Make x-axis ticks bold
                },
              },
              border: {
                color: "black", // Set x-axis border color
                width: 1, // Set border width to make it bold
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
        },

        plugins: [differencePlugin, dataLabelsPlugin],
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
