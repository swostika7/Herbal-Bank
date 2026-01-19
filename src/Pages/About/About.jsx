import BOD from "./BOD";
import BussinessModel from "./BussinessModel";
import CompanyStructure from "./CompanyStructure";
import Mission from "./Mission";
import StrategicGoals from "./StrategicGoals";

function About() {
  return (
    <>
      <div className="mt-20">
        <Mission />
        <StrategicGoals />
        <BussinessModel />
        <CompanyStructure />
        <BOD />
      </div>
    </>
  );
}

export default About;
