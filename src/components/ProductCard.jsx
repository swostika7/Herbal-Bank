import React from "react";

function ProductCard({ img, title, scientificName, description }) {
  return (
    <div>
      <div className="shadow rounded-md text-center hover:shadow-green-200 bg-white overflow-hidden h-full w-full">
        <div className="h-60 w-auto">
        <img src={img} className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="italic text-gray-500">{scientificName}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
