
import { useState } from "react";
// import ChartTypeSelector from "./ChartTypeSelector";
import FileUploader from "./FileUploader";

const UploadSection = ({ onFileUpload, chartType, setChartType }) => {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
        setFileName(file.name);
      }
    reader.onload = (event) => {
      const jsonData = JSON.parse(event.target.result);
      onFileUpload(jsonData);
    };

    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col items-center py-2 px-4 bg-gray-100 rounded-lg shadow-md animate-fadeIn"
    style={{width:"100%"}}
    >
      {/* <div className="mb-4">
        <ChartTypeSelector chartType={chartType} setChartType={setChartType} />
      </div> */}
      <div>
        <FileUploader handleFileUpload={handleFileUpload} filename={fileName}/>
      </div>
    </div>
  );
};

export default UploadSection;
