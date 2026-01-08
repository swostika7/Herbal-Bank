import { PiPlant } from "react-icons/pi";

function PlantLogo() {
  return (
    <div>
        <div className=" flex justify-center items-center space-x-4 p-4">
                  <div className="p-1 pr-30 bg-one"></div>
                  <div className="max-h-20 max-w-20 h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-one">
                    <PiPlant size={46} className="text-white" />
                  </div>
                  <div className="p-1 pr-30 bg-one"></div>
                </div>
    </div>
  )
}

export default PlantLogo