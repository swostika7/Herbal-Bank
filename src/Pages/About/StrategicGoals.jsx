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
        <h1 className="font-semibold text-2xl text-primary ">
          Our Strategic Goals
        </h1>
           <div className="p-0.5 w-24 md:w-32 bg-linear-to-r from-primary to-secondary"></div>
        <p className="text-muted">
          Building a sustainable future for Nepal's herbal industry
        </p>
      </div>
      

      {/* Our Strategic Goals */}
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          icon={<LuLeaf size={30} className="text-primary" />}
          name={"Sustainable Cultivation"}
          paragraph={
            "Advance organic farming and ethical wild harvesting practices while preserving biodiversity across Nepal's diverse ecological regions."
          }
          cardDesign={"border-t-4 border-primary"}
        />
        <Card
          icon={<LiaRibbonSolid size={30} className="text-primary" />}
          name={"Quality Assurance"}
          paragraph={
            "Implement international certification standards (organic, fair trade, GMP) to ensure premium Card and safety for all herbal products."
          }
          cardDesign={"border-t-4 border-primary"}
        />
        <Card
          icon={<SiHyperskill size={30} className="text-primary" />}
          name={"Community Empowerment"}
          paragraph={
            "Create fair-trade partnerships, develop skills, and increase market access for medicinal plant growers in rural communities."
          }
          cardDesign={"border-t-4 border-primary"}
          className={""}
        />
      </div>

      {/* awareness  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <Card
          icon={<RiGlobalLine size={30} className="text-primary" />}
          name={"Global Awareness"}
          paragraph={
            "Raise international recognition of Nepal's medicinal herbs through research-backed wellness solutions and transparent sourcing practices."
          }
          cardDesign={"border-t-4 border-primary"}
        />
        <Card
          icon={<IoRibbonOutline size={30} className="text-primary" />}
          name={"Green Economy"}
          paragraph={
            "Build a sustainable, climate-resilient herbal industry that contributes to Nepal's economy while aligning with global Sustainable Development Goals."
          }
          cardDesign={"border-t-4 border-primary"}
        />
      </div>

      {/* gmp sdg  */}
      <div className="  text-xs lg:text-sm container mx-auto bg-muted-foreground w-full lg:w-2/3 p-4 rounded-full flex justify-center space-x-2 text-center">
        <span>
          <span className="font-semibold">GMP</span> : Good Manufacturing
          practices
        </span>
        <span className="text-secondary  ">|</span>
        <span>
          <span className="font-semibold text-center">SDGs</span> : Sustainable
          Development Goals
        </span>
      </div>
    </div>
  );
}

export default StrategicGoals;
