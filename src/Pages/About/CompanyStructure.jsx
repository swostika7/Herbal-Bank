import React from "react";

function CompanyStructure() {
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <h3 className="font-semibold text-4xl text-green-500">
        Our Company Structure
      </h3>
      <img src="/assets/management.png" 
      alt="companyStructure"
      className="size-1/2" />
    </div>
  );
}

export default CompanyStructure;
