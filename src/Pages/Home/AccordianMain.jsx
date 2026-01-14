import React from "react";
import Accordian from "./Accordian";
import Heading from "../../components/Heading";

const AccordianMain = () => {
  return (
    <>
      <div className="p-3 grid grid-cols-1 md:grid-cols-1 gap-6 lg:gap-1 lg:grid-cols-2 space-x-4 container mx-auto max-w-6xl">
        <div className="h-110">
          <img
            src="/assets/faq1.png"
            alt="faq image"
            className="rounded-2xl object-cover h-full w-full transform hover:scale-110 transition-transform duration-500"
          />
        </div>
    
          <div className="flex flex-col space-y-4">
        <Heading heading={"Frequently Asked Questions"}>
          <p className="">Whether you're curious about our services, products, or order, we've got you covered. Explore our FAQs for quick and helpful solutions to common inquiries.</p>
        </Heading>
         <Accordian/>
        </div>
      </div>
    </>
  );
};

export default AccordianMain;
