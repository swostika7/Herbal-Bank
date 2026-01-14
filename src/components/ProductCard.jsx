import React from "react";

function ProductCard({ img, title, scientificName, description,imageSize,reDesign }) {
  return (
    <div>
      <div  className={`shadow rounded-md text-center hover:shadow-green-200 bg-white overflow-hidden h-full w-full border-b-2 border-one space-y-2 ${reDesign}`}>
        <div className="h-60 w-auto">
        <img src={img} className={`h-full w-full ${imageSize}`} alt={title}/>
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-semibold text-xl  lg:text-xl">{title}</h3>
          <p className="italic text-three">{scientificName}</p>
          <p className="text-sm lg:text-base text-five">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
