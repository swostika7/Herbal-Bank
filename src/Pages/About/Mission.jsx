import React from 'react'
import AboutHome from "../Home/AboutHome";
import Card from "../../components/Card";
import { LuLeaf } from "react-icons/lu";
import { BiBullseye } from "react-icons/bi";

function Mission() {
  return (
    <>
    <div className="bg-gray-200 py-16 lg:p-0">
        <div className="">
          <AboutHome />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 p-5 container mx-auto max-w-6xl ">
          <Card
            icon={<LuLeaf size={30} className="text-one" />}
            name={<p className="text-green-500">Our Mission</p>}
            paragraph={
              "To preserve and promote Nepal's rich herbal heritage through sustainable cultivation practices. We empower local farmers with ethical trade opportunities for medicinal and aromatic plants, enhancing rural prosperity while protecting our unique biodiversity and traditional knowledge."
            }
            cardDesign={"border-l-4 border-green-500"}
          />
          <Card
            icon={<BiBullseye size={30} className="text-blue-700" />}
            name={<p className="text-green-500">Our Vision</p>}
            paragraph={
              "To establish Nepal as a global leader in premium Himalayan herbs, recognized for sustainable sourcing, organic farming excellence, and fair partnerships. We envision a future where Nepal's herbal treasures create lasting prosperity for local communities while contributing to global wellness and environmental conservation."
            }
            cardDesign={"border-l-4 border-blue-500"}
          />
        </div>
      </div>
    </>
  )
}

export default Mission