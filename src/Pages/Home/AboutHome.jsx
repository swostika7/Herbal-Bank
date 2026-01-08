import React from "react";
import Heading from "../../components/Heading";

function AboutHome() {
  return (
    <div className="shadow-2xl ">
      <div className=" bg-[url(/assets/back.png)] object-fill bg-cover w-full bg-center h-[60vh] bg-no-repeat">
        <div className="bg-black opacity-70 h-full text-center flex flex-col justify-center items-center">
          {/* called heading  */}
          <Heading heading={"About Us"} redesign={"text-white"}>
            <p className="text-white text-lg">
              Muktinath Herbal Bank Limited , an associate company of Muktinath
              Krishi Company Limited, established in the year 2022 with the
              vision of transforming Nepal's medicinal and aromatic plants
              (MAPs) sector. We are dedicated to addressing the challenges of
              unsustainable harvesting, lack of processing facilities, and
              fluctuating market prices while ensuring the preservation of
              Nepal's rich herbal biodiversity.
            </p>
          </Heading>
        </div>
        <br />
      </div>{" "}
    </div>
  );
}

export default AboutHome;
