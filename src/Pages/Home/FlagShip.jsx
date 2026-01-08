import { PiTreeBold } from "react-icons/pi";
import PlantLogo from "../../components/PlantLogo";
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { RiGlobalFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { ImLab } from "react-icons/im";
import Card from "../../components/Card";
import Heading from "../../components/Heading";

function FlagShip() {
  return (
    <>
      <div className="bg-[#f9f9f9] flex flex-col space-y-4">
        <div className="container mx-auto max-w-6xl space-y-4">
        {/* logo  */}
        <PlantLogo />
        {/* title  */}

        {/* called heading  */}
        <Heading heading={"Our Flagship Project"} redesign={" text-center text-one"}>
          <p className="text-three text-center">Building a sustainable future for Nepal's herbal industry</p>
        </Heading>

        {/* lothsala  */}
        <div className=" rounded-2xl bg-white shadow hover:shadow-2xl p-8 flex flex-col justify-center items-center space-y-4 ">
          <div className="max-h-20 max-w-20 h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-gray-100">
            <PiTreeBold size={46} className="text-white" />
          </div>
          <div className=" flex flex-col space-y-2 text-center">
            <div>
              <h1 className="font-bold text-2xl">
                Lothsalla (Himalayan Yew) - Taxus mairei
              </h1>
              <p className=" italic text-gray-400">
                From Himalayan Forests to Cancer Care Innovation
              </p>
            </div>
            <p className=" text-sm">
              Lothsalla, locally known as Lauth Salla, is the Nepali name for
              Taxus mairei—a rare medicinal tree native to Nepal's mid-hill
              regions which is globally valued for producing 10-DAB III, the
              essential precursor for the chemotherapy drug Paclitaxel.
            </p>
          </div>
        </div>

        {/* description of site */}
        <div className="grid grid-cols-2 gap-6 ">
          <Card
            icon={<IoLocationSharp size={40} className="text-green-500" />}
            name={"Location & Processing Facility"}
            par={
              "Located in Mahankal-03, Lalitpur operating under a Public-Private-Cooperative Partnership (PPCP) model, this processing facility can process up to 1,000 kg of leaves and twigs per day, with all raw materials sourced from over 400,000 plantation-grown trees across Lalitpur, Kavre, Sindhuli, and Makwanpur districts."
            }
          />
          <Card
            icon={<HiMiniUserGroup size={40} className="text-green-500" />}
            name={"Farmer Involvement"}
            par={
              "Farmers benefit from technical training, buy-back guarantees, and shared ownership of the project infrastructure over a 15-year plan."
            }
          />
          <Card
            icon={<RiGlobalFill size={40} className="text-green-500" />}
            name={"Products & Market"}
            par={
              "Targeted for export to Indian pharmaceutical labs, European buyers, and cancer research institutions. Ongoing R&D includes exploring the development of 7-troc Paclitaxel and full Paclitaxel synthesis in Nepal."
            }
          />
          <Card
            icon={<FaLeaf size={40} className="text-green-500" />}
            name={"Compliance & Sustainability"}
          >
            {/* calling children  */}
            <ul className="flex flex-col list-disc space-y-2">
              <li>
                Fully aligned with Forest Act 2019, CITES Appendix II, and NTFP
                policies
              </li>
              <li>
                Only plantation-grown material is used (no wild harvesting)
              </li>
              <li>Environmental Impact Assessments (IEE/EIA) completed</li>
              <li>Government royalty: NPR 50/kg of raw material</li>
            </ul>
          </Card>
        </div>

        {/* lab  */}
        <Card
          icon={<ImLab size={40} className="text-green-500" />}
          name={"Scientific Extraction & Laboratory Testing"}
          description={
            "Advanced technologies such as microwave-assisted extraction, solvent filtration, and fractional distillation are used to isolate 10-DAB III with 95-99% purity."
          }
          img={"/assets/lab.png"}
          par={
            "Advanced technologies such as microwave-assisted extraction, solvent filtration, and fractional distillation are used to isolate 10-DAB III with 95–99% purity"
          }
        >
          <ul className="flex flex-col space-y-2 list-disc text-sm">
            To ensure global pharmaceutical Card standards, MHBL partners with
            national and international laboratories for:
            <li>
              HPLC (High-Performance Liquid Chromatography) for purity testing
            </li>
            <li>Microbial & heavy metal screening</li>
            <li>Solvent residue testing</li>
            <li>
              Compliance with international export norms and CITES regulations
            </li>
          </ul>{" "}
        </Card>

        {/* Summary  */}
        <div className=" rounded-2xl container mx-auto bg-white shadow-2xl p-8 flex flex-col justify-center items-center space-y-4 ">
          <div className="max-h-20 max-w-20 h-12 w-12 md:h-18 md:w-18 flex justify-center items-center rounded-full bg-gray-200">
            <MdFavorite size={40} className="text-one" />
          </div>
          <div className=" flex flex-col space-y-2 text-center">
            <Heading heading={"Impact Summary"} redesign={"text-black"}>
              <p className="text-gray-700">This project not only contributes to global cancer care but also empowers rural communities through cooperative ownership, revenue sharing, and sustainable employment.</p>
            </Heading>
            <div className=" container mx-auto bg-gray-200 p-2 border-l-4 border-one">
              <p className=" italic text-one">
                Lothsalla is not just a herb—it's Nepal's answer to global
                healing and local empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default FlagShip;
