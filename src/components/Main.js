"use client";
import { useState } from "react";
import UploadSection from "./UploadSection";
import DownloadJson from "./DownloadJson";
import TabbedCharts from "./Tabs";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

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
    <main className="backgroundHome flex flex-col flex-grow p-6 overflow-y-auto scroll-smooth mt-24">
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
                delay: 100,
              }}
            />
          </span>
        </h1>
        <div className="w-full gap-6 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md animate-fadeIn">
          <div className="flex flex-col justify-center items-center md:items-start text-white">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              custom="left"
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0,
              }}
            >
              <h1 className="text-2xl font-bold mb-4">Prepare Your Data</h1>
              <p className="text-lg text-white mb-4">
                Upload your JSON data to start. The data will be validated and
                processed as you upload it. Ensure that the data adheres to JSON
                specifications to properly display the charts.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            custom="right"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0,
            }}
            className="flex flex-col items-center md:items-start"
          >
              <UploadSection
                onFileUpload={setData}
                chartType={chartType}
                setChartType={setChartType}
              />
            </motion.div>
          </div>
        </div>

        <div>
          <TabbedCharts data={data} />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {data ? (
            <>
              <ChartDisplay data={data} chartType={chartType} />
              <MUIChart data={data} />
              <RechartComponent data={data} />
              <D3Chart data={data} />
              <AGChart data={data} />
              <AGChart data={data} chartType={chartType}/> 
            </>
          ) : (
            <p className="text-center text-gray-600">No data uploaded yet.</p>
          )}
        </div> */}
      </div>

      <div className="fixed bottom-4 right-4 z-50">
        <DownloadJson />
      </div>
    </main>
  );
};

export default Main;
