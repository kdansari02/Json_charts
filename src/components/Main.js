"use client";
import { useState } from "react";
import UploadSection from "./UploadSection";
import DownloadJson from "./DownloadJson";
import TabbedCharts from "./Tabs";
import Typewriter from "typewriter-effect";
import ChartInfoSection from "./ChartInfoSection";
import Example from "../app/Example";
import LineCharts from "@/app/LineChart";
import GrowthChart from "@/app/GrowthChart";
import ProgressBarChart from "@/app/ProgressChart";
import ProgressChart from "@/app/ProgressChart";

const Main = () => {
  const [data, setData] = useState(null);
  const [chartType, setChartType] = useState("bar");
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? "-100vw" : "100vw",
    }),
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <main className="backgroundHome flex flex-col flex-grow p-6 mt-20">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-center text-3xl font-bold mb-8 text-white">
          Upload JSON Data to Display
          <span className="text-orange-300">
            <Typewriter
              options={{
                strings: [
                  "Bar Chart",
                  "Line Chart",
                  "Pie Chart",
                  "Doughnut Chart",
                  "Polar Chart",
                  "Radar Chart",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </span>
        </h1>
        <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg animate-fadeIn">
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
          <TabbedCharts data={data} />
        </div>
        <div className="">
          <span className="relative flex justify-center">
            <div class="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6 font-bold text-orange-500">
              Chart Builder
            </span>
          </span>
        </div>
        <div>
          <ChartInfoSection />
        </div>
        <div>
          <Example />
          <LineCharts />
          <GrowthChart />
          <ProgressChart />
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <DownloadJson />
      </div>
    </main>
  );
};

export default Main;
