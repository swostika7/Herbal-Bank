import React from "react";

function CompanyStructure() {
  return (
    <div className="p-4 md:p-12 flex flex-col justify-center items-center space-y-6 md:space-y-10 ">
      <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl text-primary text-center">
        Our Company Structure
      </h3>
      
      <div className="w-full flex justify-center">
        <img 
          src="/assets/management.png" 
          alt="companyStructure"
          className="w-full md:w-3/4 lg:w-1/2 h-auto object-contain transition-all duration-300" 
        />
      </div>
    </div>
  );
}

export default CompanyStructure;