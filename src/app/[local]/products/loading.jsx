import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <span className="loading loading-ball loading-xs"></span>
      <span className="loading loading-ball loading-sm"></span>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  );
};

export default loading;
