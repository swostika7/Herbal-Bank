import React from "react";
import Accordian from "./Accordian";
import Heading from "../../components/Heading";

const AccordianMain = () => {
  return (
    <>
      <div className="grid grid-cols-2 space-x-4 container mx-auto max-w-6xl">
        <div className="h-110">
          <img
            src="/assets/faq.png"
            alt="faq"
            className="rounded-2xl object-cover h-full w-full"
          />
        </div>
    
          <div className="flex flex-col space-y-4">
        <Heading heading={"Frequently Asked Questions"}>
          <p>Whether you're curious about our services, products, or order, we've got you covered. Explore our FAQs for quick and helpful solutions to common inquiries.</p>
        </Heading>
         <Accordian/>
        </div>
      </div>
    </>
  );
};

export default AccordianMain;
