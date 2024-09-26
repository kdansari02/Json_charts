import { FaCog, FaChartBar, FaFileExport } from "react-icons/fa";

const ChartInfoSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6 md:flex md:justify-between md:items-start gap-10">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Create beautiful charts from JSON data in your browser
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you are a technical person or stumbled upon a piece of JSON
          data by accident, there's a chance you want to present it in an easy
          to understand format.
        </p>
        <p className="text-lg text-gray-700">
          This website allows you to easily create beautiful charts from raw
          JSON data in a few simple steps.
        </p>
      </div>

      <div className="md:w-1/2 space-y-8">
        <div className="flex items-start space-x-4">
          <FaCog size={50} className="text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              1. Process JSON data
            </h3>
            <p className="text-gray-700">
              JSON is one of the most popular data formats out there, but can be
              hard to work with. This website allows you to process JSON data in
              a user-friendly way.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaChartBar size={32} className="text-green-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              2. Create beautiful charts
            </h3>
            <p className="text-gray-700">
              Once the data is ready, you can easily represent the values on
              multiple types of charts.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaFileExport size={50} className="text-orange-500" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              3. Use the chart
            </h3>
            <p className="text-gray-700">
              When the chart is ready, export it to an image. Features like
              saving the chart for later or embedding to other websites might be
              coming later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartInfoSection;
