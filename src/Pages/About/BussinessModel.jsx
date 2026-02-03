import React from "react";
import Card from "../../components/Card";
import { FaTruckMonster } from "react-icons/fa";
import { LuFactory } from "react-icons/lu";
import { LuPlane } from "react-icons/lu";
import { SiRoamresearch } from "react-icons/si";

function BussinessModel() {
  return (
    <>
      {/* business model */}
      <div className="bg-four flex flex-col space-y-4 p-4 md:py-12 text-center">
        <div className="container mx-auto max-w-7xl space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-semibold text-primary">
              Our Business Model
            </h1>
            {/* line */}
            <div className="p-0.5 w-24 md:w-32 bg-linear-to-r from-primary to-secondary"></div>
            <p className="text-base md:text-lg text-muted max-w-2xl">
              Strategic Collaborations, Innovative Processing, and Community
              Engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
            <Card
              icon={<FaTruckMonster size={30} className="text-primary" />}
              name={"Commercial Production & Farmer"}
              paragraph={
                "Partnering with 72+ Agriculture Resource Centers (ARCs) and herbal cooperatives for large-scale cultivation and buy back guarantee of different herbs."
              }
              cardDesign={"border-t-4 border-primary h-full"}
            />
            <Card
              icon={<LuFactory size={30} className="text-primary" />}
              name={"Processing & Value Addition"}
              paragraph={
                "Industrial-scale production and processing of high-value products like 10-DAB III, turmeric powder, and herbal honey in collaborations."
              }
              cardDesign={"border-t-4 border-primary h-full"}
            />
            <Card
              icon={<LuPlane size={30} className="text-primary" />}
              name={"Export & Market Linkages"}
              paragraph={
                "Partnering with pharmaceutical, nutraceutical, and cosmetic industries for the Certified exports to India, China, the EU, and the Middle East."
              }
              cardDesign={"border-t-4 border-primary h-full"}
            />
            <Card
              icon={<SiRoamresearch size={30} className="text-primary" />}
              name={"Research & Product Development"}
              paragraph={
                "Collaboration with Universities, National/International laboratories for the development of Ayurvedic, herbal, and functional food products."
              }
              cardDesign={"border-t-4 border-primary h-full"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BussinessModel;