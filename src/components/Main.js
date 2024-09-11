"use client";
import { useState } from "react";
import UploadSection from "./UploadSection";
import ChartDisplay from "./ChartDisplay";
import DownloadJson from "./DownloadJson";
import TabbedCharts from "./Tabs";
// import MUIChart from "./charts/MuiChart";
// import RechartComponent from "./charts/RechartComponent";
// import D3Chart from "./charts/D3Chart";
// import AGChart from "./charts/AgCharts";

const Main = () => {
  const [data, setData] = useState(null);
  const [chartType, setChartType] = useState("bar");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8">
          Upload JSON Data to Display Chart
        </h1>
        <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md animate-fadeIn">
          <div className="flex flex-col justify-center items-center md:items-start text-white">
            <h1 className="text-2xl font-bold mb-4">Prepare Your Data</h1>
            <p className="text-lg text-white mb-4">
              Upload your JSON data to start. The data will be validated and
              processed as you upload it. Ensure that the data adheres to JSON
              specifications to properly display the charts.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <UploadSection
              onFileUpload={setData}
              chartType={chartType}
              setChartType={setChartType}
            />
          </div>
        </div>

        <div>
          <TabbedCharts />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {data ? (
            <>
              <ChartDisplay data={data} chartType={chartType} />
              {/* <MUIChart data={data} />
              <RechartComponent data={data} />
              <D3Chart data={data} />
              <AGChart data={data} /> */}
              {/* <AGChart data={data} chartType={chartType}/>  */}
            </>
          ) : (
            <p className="text-center text-gray-600">No data uploaded yet.</p>
          )}
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <DownloadJson />
      </div>
    </main>
  );
};

export default Main;
