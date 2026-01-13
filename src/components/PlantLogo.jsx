import { PiPlant } from "react-icons/pi";

function PlantLogo() {
  return (
    <div>
        <div className=" flex justify-center items-center space-x-4 p-4">
                  <div className="p-0.5 pr-24 lg:p-1 lg:pr-30 bg-one"></div>
                  <div className="h-14 w-14 lg:h-18 lg:w-18 flex justify-center items-center rounded-full bg-one">
                    <PiPlant  className="text-white size-10 lg:size-12" />
                  </div>
                  <div className="p-0.5 pr-24 lg:p-1 lg:pr-30 bg-one"></div>
                </div>
    </div>
  )
}

export default PlantLogo