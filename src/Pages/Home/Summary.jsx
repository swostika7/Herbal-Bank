import React from "react";
import Heading from "../../components/Heading";
import { MdFavorite } from "react-icons/md";
function Summary() {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className=" rounded-2xl bg-white shadow-2xl p-8 flex flex-col justify-center items-center space-y-4 ">
        <div className="max-h-20  h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-muted-foreground">
          <MdFavorite className="text-primary size-8 lg:size-10" />
        </div>
        <div className=" flex flex-col space-y-2 text-center">
          <Heading heading={"Impact Summary"} redesign={"text-black"}>
            <p className="text-muted">
              This project not only contributes to global cancer care but also
              empowers rural communities through cooperative ownership, revenue
              sharing, and sustainable employment.
            </p>
          </Heading>
          <div className=" container mx-auto bg-muted-foreground p-2 border-l-4 border-one">
            <p className=" italic text-primary">
              Lothsalla is not just a herb—it's Nepal's answer to global healing
              and local empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
