import Card from "../../components/Card";
import { LuLeaf } from "react-icons/lu";
import { IoRibbonOutline } from "react-icons/io5";


function StrategicGoals() {
  return (
    <>
      <div className="flex flex-col space-y-6 p-5 container mx-auto max-w-6xl">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h1 className="font-semibold text-2xl text-green-500 ">
            Our Strategic Goals
          </h1>
          <div className="p-0.5 pr-20 bg-linear-to-r from-green-500 to-blue-700"></div>
          <p className="text-gray-700">
            Building a sustainable future for Nepal's herbal industry
          </p>
        </div><br/>

        {/* Our Strategic Goals */}
        <div className=" grid grid-cols-3 gap-4">
            <Card icon={<LuLeaf size={30} className="text-green-700"/>} name={"Sustainable Cultivation"} par={"Advance organic farming and ethical wild harvesting practices while preserving biodiversity across Nepal's diverse ecological regions."} aboutcard={"border-t-4 border-green-500"}/>
            <Card icon={<LuLeaf size={30} className="text-green-700"/>} name={"Card Assurance"} par={"Implement international certification standards (organic, fair trade, GMP) to ensure premium Card and safety for all herbal products."} aboutcard={"border-t-4 border-green-500"}/>
            <Card icon={<LuLeaf size={30} className="text-green-700"/>} name={"Community Empowerment"} par={"Create fair-trade partnerships, develop skills, and increase market access for medicinal plant growers in rural communities."} aboutcard={"border-t-4 border-green-500"}/>
        </div>


        {/* awareness  */}
        <div className="grid grid-cols-2 gap-4">
          <Card icon={<IoRibbonOutline size={30} className="text-green-700"/>} name={"Global Awareness"} par={"Raise international recognition of Nepal's medicinal herbs through research-backed wellness solutions and transparent sourcing practices."} aboutcard={"border-t-4 border-green-500"}/>
          <Card icon={<IoRibbonOutline size={30} className="text-green-700"/>} name={"Green Economy"} par={"Build a sustainable, climate-resilient herbal industry that contributes to Nepal's economy while aligning with global Sustainable Development Goals."} aboutcard={"border-t-4 border-green-500"}/>

        </div>

        {/* gmp sdg  */}
        <div className="  text-sm container mx-auto bg-gray-100 w-4/6 p-3 rounded-full flex justify-center items-center space-x-8">
          <span ><strong>GMP</strong> : Good Manufacturing practices</span>
          <span className="text-blue-500">|</span>
          <span><strong>SDGs</strong> : Sustainable Development Goals</span>
        </div>

      </div>
    </>
  );
}

export default StrategicGoals;
