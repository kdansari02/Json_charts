
const FileUploader = ({ handleFileUpload,filename }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label
        htmlFor="uploadFile1"
        className="bg-white text-gray-500 font-semibold text-base rounded w-96 p-6 h-72 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-sans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 mb-2 fill-gray-500"
          viewBox="0 0 32 32"
        >
          <path
            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          />
          <path
            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          />
        </svg>
        <span>Upload file</span>
        <input
          onChange={handleFileUpload}
          type="file"
          id="uploadFile1"
          className="hidden"
        />
        <p className="text-xs font-medium text-gray-400 mt-2">
          Only JSON Files Allowed
        </p>
      </label>

      {filename && (
        <p className="text-sm mt-2 text-gray-600 text-center">
          Uploaded file: <span className="font-semibold">{filename}</span>
        </p>
      )}
    </div>
  );
};

export default FileUploader;
