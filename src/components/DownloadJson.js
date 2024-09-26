import sampleData from "./Josn";


const DownloadJson = () => {
    const downloadSample = () => {
      const blob = new Blob([JSON.stringify(sampleData, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sample-data.json";
      link.click();
    };
  
    return (
      <div>
        <button
          onClick={downloadSample}
          className="bottom-4 right-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition transform hover:scale-105 focus:outline-none"
        >
          Download JSON Data
        </button>
      </div>
    );
  };
  
  export default DownloadJson;
  