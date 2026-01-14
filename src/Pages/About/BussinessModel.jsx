import React from "react";
import Card from "../../components/Card";
import { FaTruckMonster } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import { LuPlane } from "react-icons/lu";
import { SiRoamresearch } from "react-icons/si";

function BussinessModel() {
  return (
    <>
      {/* business model  */}
      <div className="bg-four flex flex-col space-y-4 p-5 text-center">
        <div className="container mx-auto max-w-6xl  space-y-4">
          <h1 className="text-2xl font-semibold text-green-500 ">
            Our Business Model
          </h1>
          {/* line  */}
          <div className=" container mx-auto p-0.5 w-1/4 lg:w-1/14 bg-linear-to-r from-green-500 to-blue-700"></div>
          <p className="text-base text-gray-600 ">
            Strategic Collaborations, Innovative Processing, and Community
            Engagement
          </p>

          {/* models  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card
              icon={<FaTruckMonster size={30} className="text-green-700" />}
              name={"Commercial Production & Farmer"}
              paragraph={
                "Partnering with 72+ Agriculture Resource Centers (ARCs) and herbal cooperatives for large-scale cultivation and buy back guarantee of different herbs like Chiraito, Pakhanbed, Kutki, and Taxus (Lothsalla)."
              }
              cardDesign={"border-t-4 border-green-500"}
            />
            <Card
              icon={<LuFactory size={30} className="text-green-700" />}
              name={"Processing & Value Addition"}
              paragraph={
                "Industrial-scale production and processing of high-value products like 10-DAB III (from Taxus), turmeric powder, and herbal honey in collaborations."
              }
              cardDesign={"border-t-4 border-green-500"}
            />
            <Card
              icon={<LuPlane size={30} className="text-green-700" />}
              name={"Export & Market Linkages"}
              paragraph={
                "Partnering with pharmaceutical, nutraceutical, and cosmetic industries for the Certified exports to India, China, the EU, and the Middle East."
              }
              cardDesign={"border-t-4 border-green-500"}
            />

            <Card
              icon={<SiRoamresearch size={30} className="text-green-700" />}
              name={"Research & Product Development"}
              paragraph={
                "Collaboration with Universities, National/International laboratories for the development of Ayurvedic, herbal, and functional food products."
              }
              cardDesign={"border-t-4 border-green-500"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BussinessModel;
