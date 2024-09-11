import { Bar } from '@mui/x-charts';

const MUIChart = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <Bar
        data={{
          labels: data.labels,
          datasets: [
            {
              label: data.label,
              data: data.data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
            },
          ],
        }}
      />
    </div>
  );
};

export default MUIChart;
