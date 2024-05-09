import React from "react";

const PageHeader = ({ title, path }) => {
  return (
    <div className="py-24 mt-3 bg-[#f8f0f0] rounded flex items-center justify-center shadow-2xl ">
      <div>
        <h2 className="text-4xl text-green font-medium mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-center">
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
