import Card from "../../components/Card";
import { LuLeaf } from "react-icons/lu";
import { IoRibbonOutline } from "react-icons/io5";
import { LiaRibbonSolid } from "react-icons/lia";
import { RiGlobalLine } from "react-icons/ri";
import { SiHyperskill } from "react-icons/si";

function StrategicGoals() {
  return (
    <div className="flex flex-col space-y-6 p-5 container mx-auto max-w-7xl">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h1 className="font-semibold text-2xl text-green-500 ">
          Our Strategic Goals
        </h1>
        <div className="p-0.5 pr-20 bg-linear-to-r from-green-500 to-blue-700"></div>
        <p className="text-gray-700">
          Building a sustainable future for Nepal's herbal industry
        </p>
      </div>
      <br />

      {/* Our Strategic Goals */}
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          icon={<LuLeaf size={30} className="text-green-700" />}
          name={"Sustainable Cultivation"}
          paragraph={
            "Advance organic farming and ethical wild harvesting practices while preserving biodiversity across Nepal's diverse ecological regions."
          }
          cardDesign={"border-t-4 border-green-500"}
        />
        <Card
          icon={<LiaRibbonSolid size={30} className="text-green-700" />}
          name={"Quality Assurance"}
          paragraph={
            "Implement international certification standards (organic, fair trade, GMP) to ensure premium Card and safety for all herbal products."
          }
          cardDesign={"border-t-4 border-green-500"}
        />
        <Card
          icon={<SiHyperskill size={30} className="text-green-700" />}
          name={"Community Empowerment"}
          paragraph={
            "Create fair-trade partnerships, develop skills, and increase market access for medicinal plant growers in rural communities."
          }
          cardDesign={"border-t-4 border-green-500"}
          className={""}
        />
      </div>

      {/* awareness  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card
          icon={<RiGlobalLine size={30} className="text-green-700" />}
          name={"Global Awareness"}
          paragraph={
            "Raise international recognition of Nepal's medicinal herbs through research-backed wellness solutions and transparent sourcing practices."
          }
          cardDesign={"border-t-4 border-green-500"}
        />
        <Card
          icon={<IoRibbonOutline size={30} className="text-green-700" />}
          name={"Green Economy"}
          paragraph={
            "Build a sustainable, climate-resilient herbal industry that contributes to Nepal's economy while aligning with global Sustainable Development Goals."
          }
          cardDesign={"border-t-4 border-green-500"}
        />
      </div>

      {/* gmp sdg  */}
      <div className="  text-xs lg:text-sm container mx-auto bg-gray-100 w-full lg:w-2/3 p-4 rounded-full flex justify-center space-x-2 text-center">
        <span>
          <span className="font-semibold">GMP</span> : Good Manufacturing
          practices
        </span>
        <span className="text-blue-500  ">|</span>
        <span>
          <span className="font-semibold text-center">SDGs</span> : Sustainable
          Development Goals
        </span>
      </div>
    </div>
  );
}

export default StrategicGoals;
